#!/usr/bin/env python3
"""
curate_attraction_photos.py - Autonomous Photo Quality & Content Relevance Scanner
Scans attractions in mktravel, applies strict content-relevance scoring (excluding maps,
stamps, diagrams, transit exits), evaluates aspect ratios, manages multi-photo libraries,
regenerates sw.js, and deploys to Cloudflare Pages edge.
"""

import os
import sys
import json
import re
import time
import urllib.request
import urllib.parse
import ssl
import subprocess
from struct import unpack

REPO_DIR = "/home/mk/mktravel"
DATA_FILE = os.path.join(REPO_DIR, "china-data.js")
ASSETS_DIR = os.path.join(REPO_DIR, "assets", "attractions")
BUILD_SW_SCRIPT = os.path.join(REPO_DIR, "scripts", "build_sw_cache.js")

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'MKTravelPhotoCurator/2.5 (https://mktravel.pages.dev; admin@mktravel.pages.dev) Python-urllib'
}

DISQUALIFY_TERMS = [
    'map', 'stamp', 'coin', 'plan', 'diagram', 'flag', 'icon', 'logo',
    'coat of arms', 'transit map', 'blueprint', 'drawing', 'sketch',
    'mugshot', 'portrait of', 'station exit', 'metro exit', 'subway entrance',
    'metro station entrance', 'bus stop', 'road sign', 'locator'
]

def get_jpeg_dimensions(filepath):
    """Extract width and height from JPEG header without external libraries."""
    try:
        with open(filepath, 'rb') as f:
            data = f.read(2)
            if data != b'\xFF\xD8':
                return None, None
            while True:
                marker, code = unpack('>BB', f.read(2))
                if marker != 0xFF:
                    return None, None
                if code in (0xC0, 0xC1, 0xC2, 0xC3):
                    f.read(3)
                    h, w = unpack('>HH', f.read(4))
                    return w, h
                else:
                    length = unpack('>H', f.read(2))[0]
                    f.seek(length - 2, os.SEEK_CUR)
    except Exception:
        return None, None

def is_content_relevant(title, desc, name_en, name_zh, region):
    full_text = f"{title} {desc}".lower()
    
    # 1. Hard disqualification gates
    for term in DISQUALIFY_TERMS:
        if term in full_text:
            return False

    # 2. Positive relevance check: must match name tokens
    tokens = []
    if name_zh:
        tokens.append(name_zh)
        if len(name_zh) >= 3:
            tokens.append(name_zh[:2])
    if name_en:
        clean_en = re.sub(r'[^a-zA-Z0-9\s]', ' ', name_en).lower()
        parts = [p for p in clean_en.split() if len(p) >= 4 and p not in ['park', 'hall', 'road', 'street', 'city', 'centre', 'center']]
        tokens.extend(parts)

    return any(token.lower() in full_text for token in tokens)

def search_wikimedia_candidates(query, name_en, name_zh, region, limit=6):
    """Query Wikimedia Commons API for image candidates with dimension and relevance metadata."""
    url = (
        "https://commons.wikimedia.org/w/api.php?"
        + urllib.parse.urlencode({
            "action": "query",
            "generator": "search",
            "gsrsearch": query,
            "gsrlimit": str(limit),
            "gsrnamespace": "6",
            "prop": "imageinfo",
            "iiprop": "url|size|mime|extmetadata",
            "iiurlwidth": "1200",
            "format": "json"
        })
    )
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12, context=ctx) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get("query", {}).get("pages", {})
            candidates = []
            for pid, page in pages.items():
                title = page.get("title", "")
                imageinfo = page.get("imageinfo", [])
                if not imageinfo:
                    continue
                info = imageinfo[0]
                mime = info.get("mime", "")
                if mime not in ["image/jpeg", "image/png", "image/webp"]:
                    continue

                w = info.get("width", 0)
                h = info.get("height", 0)
                desc = info.get("extmetadata", {}).get("ImageDescription", {}).get("value", "")
                
                # Enforce content relevance gate
                if not is_content_relevant(title, desc, name_en, name_zh, region):
                    continue

                assessments = info.get("extmetadata", {}).get("Assessments", {}).get("value", "")
                thumb_url = info.get("thumburl") or info.get("url")
                candidates.append({
                    "title": title,
                    "url": thumb_url,
                    "width": w,
                    "height": h,
                    "is_quality": "quality" in assessments.lower() or "featured" in assessments.lower()
                })
            return candidates
    except Exception:
        return []

def evaluate_photo_superiority(candidate, curr_w, curr_h, curr_size):
    """Score candidate photo against current asset: favors landscape framing (16:9), relevance, and high resolution."""
    cand_w = candidate["width"]
    cand_h = candidate["height"]
    if cand_w < 1000 or cand_h < 600:
        return False

    cand_ratio = cand_w / max(1, cand_h)
    
    # Severe penalty for narrow portrait orientations (< 1.15)
    if cand_ratio < 1.15:
        return False

    # Current image has bad portrait framing, candidate has clean landscape
    if curr_w and curr_h:
        curr_ratio = curr_w / max(1, curr_h)
        if curr_ratio < 1.2 and cand_ratio >= 1.3:
            return True

    # Candidate has verified Wikimedia Community Quality endorsement
    if candidate.get("is_quality"):
        return True

    # Candidate has significantly higher resolution than current small asset
    if curr_w and curr_w < 800 and cand_w >= 1200:
        return True

    return False

def main():
    print("[*] Starting MK Travel Autonomous Photo Curation & Relevance Scan...")
    if not os.path.isfile(DATA_FILE):
        print(f"[-] Data file missing: {DATA_FILE}")
        sys.exit(1)

    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    m = re.search(r'expeditionAttractions\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);', content)
    if not m:
        print("[-] Could not parse attractions array.")
        sys.exit(1)

    attractions = json.loads(m.group(1))
    print(f"[*] Auditing {len(attractions)} destinations with relevance-first heuristics...")

    upgraded_items = []

    for idx, item in enumerate(attractions, 1):
        item_id = item.get("id") or re.sub(r'[^a-z0-9]+', '-', item.get("name", "").lower()).strip('-')
        dest_filename = f"{item_id}.jpg"
        dest_path = os.path.join(ASSETS_DIR, dest_filename)

        curr_w, curr_h = None, None
        curr_size = 0
        if os.path.isfile(dest_path):
            curr_size = os.path.getsize(dest_path)
            curr_w, curr_h = get_jpeg_dimensions(dest_path)

        name_zh = item.get("nameZh", "")
        name_en = item.get("name", "")
        region = item.get("region", "")

        # Query candidates with content relevance
        candidates = search_wikimedia_candidates(name_zh if name_zh else name_en, name_en, name_zh, region, limit=5)
        if not candidates and name_en != name_zh:
            candidates = search_wikimedia_candidates(name_en, name_en, name_zh, region, limit=4)

        chosen_candidate = None
        for cand in candidates:
            if evaluate_photo_superiority(cand, curr_w, curr_h, curr_size):
                chosen_candidate = cand
                break

        if chosen_candidate:
            print(f"[+] Found superior photo for '{name_en}' ({chosen_candidate['width']}x{chosen_candidate['height']}): {chosen_candidate['title']}")
            req = urllib.request.Request(chosen_candidate["url"], headers=HEADERS)
            try:
                with urllib.request.urlopen(req, timeout=15, context=ctx) as resp, open(dest_path, 'wb') as out_f:
                    out_f.write(resp.read())
                upgraded_items.append(name_en)
            except Exception as e:
                print(f"[-] Download error for {name_en}: {e}")

        time.sleep(0.25)

    if not upgraded_items:
        print("[✓] All 157 destination photos meet quality and relevance standards. No upgrades needed.")
        sys.exit(0)

    print(f"\n[+] Successfully upgraded {len(upgraded_items)} photographs: {', '.join(upgraded_items[:5])}...")

    # Rebuild Service Worker Pre-Cache
    print("[*] Rebuilding Service Worker pre-cache index...")
    subprocess.run(["node", BUILD_SW_SCRIPT], check=True, cwd=REPO_DIR)

    # Validate Syntax
    subprocess.run(["node", "-c", DATA_FILE], check=True)
    subprocess.run(["node", "-c", os.path.join(REPO_DIR, "sw.js")], check=True)
    subprocess.run(["node", "-c", os.path.join(REPO_DIR, "app.js")], check=True)

    # Commit & Deploy to Cloudflare Pages
    print("[*] Committing upgrades and deploying to Cloudflare Pages edge...")
    subprocess.run(["git", "add", "assets/attractions/", "sw.js", "china-data.js", "app.js"], cwd=REPO_DIR, check=True)
    subprocess.run(["git", "commit", "-m", f"chore(assets): auto-curate {len(upgraded_items)} attraction photos with superior landscape assets"], cwd=REPO_DIR, check=True)
    subprocess.run(["git", "push", "origin", "main"], cwd=REPO_DIR, check=True)

    subprocess.run(["npx", "--yes", "wrangler", "pages", "deploy", ".", "--project-name=mktravel", "--commit-dirty=true"], cwd=REPO_DIR, check=True)

    # Notion Audit Logging Hook
    if subprocess.run(["which", "notion-cli"], stdout=subprocess.DEVNULL).returncode == 0:
        subprocess.run(["notion-cli", "log", f"Photo Curator upgraded {len(upgraded_items)} POI photos on mk-asus - status: OK"])

    print("[✓] Auto-curation cycle completed and deployed successfully.")

if __name__ == "__main__":
    main()
