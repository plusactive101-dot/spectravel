#!/usr/bin/env python3
"""
ingest_social_link.py
End-to-end ingestion pipeline:
Calls extract_social_metadata.py -> classifies entity -> deduplicates & merges into china-data.js ->
caches photo to /assets/ -> rebuilds sw.js -> validates syntax -> commits & deploys to Cloudflare Pages edge.
"""

import sys
import os
import json
import re
import time
import subprocess
import urllib.request
import ssl

REPO_DIR = "/home/mk/mktravel"
DATA_FILE = os.path.join(REPO_DIR, "china-data.js")
EXTRACTOR = os.path.join(REPO_DIR, "scripts", "extract_social_metadata.py")
BUILD_SW = os.path.join(REPO_DIR, "scripts", "build_sw_cache.js")
ASSETS_ATTRACTIONS = os.path.join(REPO_DIR, "assets", "attractions")
ASSETS_DINING = os.path.join(REPO_DIR, "assets", "dining")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

def clean_slug(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def detect_entity_classification(text):
    """Heuristic classifier for Attraction vs. Dining based on keywords."""
    dining_keywords = [
        "restaurant", "food", "eat", "cafe", "dim sum", "roast goose", "dessert",
        "noodle", "hotpot", "tea house", "michelin", "snack", "bakery", "dishes",
        "餐厅", "美食", "早茶", "点心", "烧鹅", "煲仔饭", "牛肉火锅", "甜品", "大排档", "小吃", "好食"
    ]
    t = text.lower()
    score_dining = sum(1 for k in dining_keywords if k in t)
    return "dining" if score_dining >= 1 else "attraction"

def extract_bilingual_name(title, caption):
    """Extract English name and Chinese characters from text."""
    combined = f"{title} {caption}"
    zh_chars = re.findall(r'[\u4e00-\u9fff]{2,8}', combined)
    name_zh = zh_chars[0] if zh_chars else ""

    en_words = re.findall(r'[A-Z][a-zA-Z0-9\s]{2,25}', title or caption)
    name_en = en_words[0].strip() if en_words else (title[:30] if title else "Featured Spot")

    return name_en, name_zh

def parse_china_data():
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    m = re.search(r'const\s+attractions\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);', content)
    if not m:
        m = re.search(r'expeditionAttractions\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);', content)
    if not m:
        raise ValueError("Could not locate attractions array in china-data.js")
    return json.loads(m.group(1)), content, m.start(1), m.end(1)

def main():
    if len(sys.argv) < 2:
        print("Usage: python3 ingest_social_link.py <URL> [optional notes]")
        sys.exit(1)

    url = sys.argv[1].strip()
    user_notes = " ".join(sys.argv[2:]) if len(sys.argv) > 2 else ""

    print(f"[*] Extracting metadata from: {url}")
    res = subprocess.run([sys.executable, EXTRACTOR, url], capture_output=True, text=True)
    if res.returncode != 0 or not res.stdout.strip():
        print("[-] Extraction failed.")
        sys.exit(1)

    meta = json.loads(res.stdout)
    title = meta.get("title", "")
    caption = meta.get("caption", "")
    images = meta.get("images", [])

    print(f"[+] Extracted: Title='{title[:40]}...' ({len(caption)} chars caption, {len(images)} images)")

    # Classify
    entity_type = detect_entity_classification(f"{title} {caption} {user_notes}")
    name_en, name_zh = extract_bilingual_name(title, caption)
    item_id = clean_slug(name_en) or f"poi-{int(time.time())}"

    print(f"[*] Classified as: {entity_type.upper()} | Name: {name_en} ({name_zh})")

    # Load china-data.js
    attractions, full_content, start_pos, end_pos = parse_china_data()

    # Deduplication Check
    existing_idx = -1
    for idx, item in enumerate(attractions):
        if name_zh and item.get("nameZh") == name_zh:
            existing_idx = idx
            break
        if item.get("id") == item_id or clean_slug(item.get("name", "")) == item_id:
            existing_idx = idx
            break

    target_dir = ASSETS_DINING if entity_type == "dining" else ASSETS_ATTRACTIONS
    os.makedirs(target_dir, exist_ok=True)
    local_photo_path = f"/assets/{'dining' if entity_type == 'dining' else 'attractions'}/{item_id}.jpg"
    disk_photo_path = os.path.join(REPO_DIR, local_photo_path.lstrip('/'))

    # Download Hero Photo if available and not present
    if images and (not os.path.exists(disk_photo_path) or os.path.getsize(disk_photo_path) < 10000):
        try:
            req = urllib.request.Request(images[0], headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(req, timeout=15, context=ctx) as r, open(disk_photo_path, 'wb') as f:
                f.write(r.read())
            print(f"[+] Cached hero photo to: {local_photo_path}")
        except Exception as e:
            print(f"[-] Image download warning: {e}")

    # Build or Enrich Object
    clean_review = caption.replace('\n', ' ')[:220].strip()
    if existing_idx != -1:
        print(f"[+] DEDUPLICATION MATCH: Updating existing entry #{existing_idx} ({attractions[existing_idx]['name']})")
        existing = attractions[existing_idx]
        if name_zh and not existing.get("nameZh"):
            existing["nameZh"] = name_zh
        if clean_review:
            existing["review"] = f"{existing.get('review', '')} | Social intel: {clean_review}".strip(' |')
        if os.path.exists(disk_photo_path):
            existing["image"] = local_photo_path
        attractions[existing_idx] = existing
    else:
        print(f"[+] NEW VENUE: Appending to {entity_type} collection.")
        new_entry = {
            "id": item_id,
            "name": name_en,
            "nameZh": name_zh,
            "region": "Canton Heritage",
            "category": "Dining" if entity_type == "dining" else "Heritage",
            "time": "1-2 hrs",
            "address": name_zh or name_en,
            "review": clean_review or f"Discovered via {meta.get('platform', 'social link')}",
            "image": local_photo_path if os.path.exists(disk_photo_path) else "/assets/attractions/cantontower.jpg",
            "coordinates": [23.1291, 113.2644]
        }
        attractions.append(new_entry)

    # Save to china-data.js
    formatted_json = json.dumps(attractions, indent=2, ensure_ascii=False)
    updated_content = full_content[:start_pos] + formatted_json + full_content[end_pos:]
    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        f.write(updated_content)

    # Rebuild SW Cache
    print("[*] Rebuilding Service Worker cache index...")
    subprocess.run(["node", BUILD_SW], cwd=REPO_DIR, check=True)

    # Pre-Flight Syntax Check
    print("[*] Validating JavaScript syntax...")
    subprocess.run(["node", "-c", DATA_FILE], check=True)
    subprocess.run(["node", "-c", os.path.join(REPO_DIR, "sw.js")], check=True)

    # Git Commit & Wrangler Deploy
    print("[*] Committing and deploying live to Cloudflare Pages edge...")
    subprocess.run(["git", "add", "china-data.js", "sw.js", "assets/"], cwd=REPO_DIR, check=True)
    subprocess.run(["git", "commit", "-m", f"feat(ingest): auto-ingest {name_en} ({name_zh}) from {meta.get('platform')}"], cwd=REPO_DIR, check=True)
    subprocess.run(["git", "push", "origin", "main"], cwd=REPO_DIR, check=True)

    # Clean Hermes socket to prevent deploy collision
    if os.path.exists("/home/mk/.hermes/gateway.sock"):
        os.remove("/home/mk/.hermes/gateway.sock")

    if subprocess.run(["which", "wrangler"], stdout=subprocess.DEVNULL).returncode == 0:
        subprocess.run(["wrangler", "pages", "deploy", ".", "--project-name=mktravel", "--commit-dirty=true"], cwd=REPO_DIR, check=True)
    else:
        subprocess.run(["npx", "--yes", "wrangler", "pages", "deploy", ".", "--project-name=mktravel", "--commit-dirty=true"], cwd=REPO_DIR, check=True)

    # Notion Audit Log
    if subprocess.run(["which", "notion-cli"], stdout=subprocess.DEVNULL).returncode == 0:
        subprocess.run(["notion-cli", "log", f"Ingested {entity_type}: {name_en} ({name_zh}) from {url} - status: OK"])

    print("\n========================================================")
    print(f"✅ Ingestion Complete: {name_en} ({name_zh})")
    print(f"📍 Classification: {entity_type.upper()}")
    print(f"🚀 Live on: https://mktravel.pages.dev/#attractions")
    print("========================================================")

if __name__ == "__main__":
    main()
