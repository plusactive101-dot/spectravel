#!/usr/bin/env python3
"""
harvest_multi_photos.py - Relevance-First Multi-Photo Library Harvester
Downloads multiple authentic, high-relevance activity and landscape photos for each attraction,
excluding maps, diagrams, subway exits, and irrelevant assets.
"""

import os
import re
import json
import time
import urllib.request
import urllib.parse
import ssl

REPO_DIR = "/home/mk/mktravel"
DATA_FILE = os.path.join(REPO_DIR, "china-data.js")
ASSETS_DIR = os.path.join(REPO_DIR, "assets", "attractions")

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

def is_content_relevant(title, desc, name_en, name_zh, region):
    full_text = f"{title} {desc}".lower()
    
    # Hard disqualification gates
    for term in DISQUALIFY_TERMS:
        if term in full_text:
            return False

    # Positive relevance check: must match name or name tokens
    tokens = []
    if name_zh:
        tokens.append(name_zh)
        if len(name_zh) >= 3:
            tokens.append(name_zh[:2])
    if name_en:
        clean_en = re.sub(r'[^a-zA-Z0-9\s]', ' ', name_en).lower()
        parts = [p for p in clean_en.split() if len(p) >= 4 and p not in ['park', 'hall', 'road', 'street', 'city', 'centre', 'center']]
        tokens.extend(parts)

    match_found = any(token.lower() in full_text for token in tokens)
    return match_found

def search_wikimedia_gallery(query, name_en, name_zh, region, limit=8):
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
                if w < 900 or h < 550:
                    continue

                ratio = w / max(1, h)
                if ratio < 1.1:  # reject narrow portrait
                    continue

                desc = info.get("extmetadata", {}).get("ImageDescription", {}).get("value", "")
                if not is_content_relevant(title, desc, name_en, name_zh, region):
                    continue

                thumb_url = info.get("thumburl") or info.get("url")
                if thumb_url:
                    candidates.append({
                        "title": title,
                        "url": thumb_url,
                        "width": w,
                        "height": h,
                        "ratio": ratio
                    })
            return candidates
    except Exception as e:
        return []

def download_file(url, dest_path):
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15, context=ctx) as resp, open(dest_path, 'wb') as out_f:
            out_f.write(resp.read())
        return os.path.exists(dest_path) and os.path.getsize(dest_path) > 10240
    except Exception:
        return False

def main():
    print("[*] Loading china-data.js for multi-photo gallery expansion...")
    with open(DATA_FILE, 'r', encoding='utf-8') as f:
        content = f.read()

    m = re.search(r'expeditionAttractions\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);', content)
    if not m:
        print("[-] Could not find expeditionAttractions array.")
        return

    attractions = json.loads(m.group(1))
    print(f"[*] Processing {len(attractions)} attractions...")

    total_downloaded = 0
    updated_items = 0

    for idx, item in enumerate(attractions, 1):
        item_id = item.get("id") or re.sub(r'[^a-z0-9]+', '-', item.get("name", "").lower()).strip('-')
        name_en = item.get("name", "")
        name_zh = item.get("nameZh", "")
        region = item.get("region", "")

        # Target photos list
        current_photos = item.get("photos") or []
        local_photos = [p for p in current_photos if p.startswith('/assets/attractions/')]

        # Primary photo
        p1_filename = f"{item_id}.jpg"
        p1_path = os.path.join(ASSETS_DIR, p1_filename)
        p1_web = f"/assets/attractions/{p1_filename}"

        if not os.path.exists(p1_path) or os.path.getsize(p1_path) < 10240:
            # Need primary photo
            queries = [name_zh, f"{name_zh} {region}", name_en]
            for q in queries:
                if not q: continue
                cands = search_wikimedia_gallery(q, name_en, name_zh, region, limit=5)
                if cands and download_file(cands[0]["url"], p1_path):
                    total_downloaded += 1
                    break
                time.sleep(0.2)

        # Build gallery: ensure at least 2 to 3 photos
        gallery = []
        if os.path.exists(p1_path) and os.path.getsize(p1_path) > 10240:
            gallery.append(p1_web)
            item["image"] = p1_web

        # Check if we need additional photos (photo 2 and photo 3)
        p2_filename = f"{item_id}_2.jpg"
        p2_path = os.path.join(ASSETS_DIR, p2_filename)
        p2_web = f"/assets/attractions/{p2_filename}"

        p3_filename = f"{item_id}_3.jpg"
        p3_path = os.path.join(ASSETS_DIR, p3_filename)
        p3_web = f"/assets/attractions/{p3_filename}"

        need_cands = not os.path.exists(p2_path) or not os.path.exists(p3_path)
        if need_cands:
            queries = [name_zh, f"{name_zh} {region}", f"{name_en} {region}"]
            found_cands = []
            for q in queries:
                if not q: continue
                cands = search_wikimedia_gallery(q, name_en, name_zh, region, limit=8)
                for c in cands:
                    if c["url"] not in [x["url"] for x in found_cands]:
                        found_cands.append(c)
                if len(found_cands) >= 3:
                    break
                time.sleep(0.2)

            # Download photo 2 if available
            if len(found_cands) >= 2 and not os.path.exists(p2_path):
                if download_file(found_cands[1]["url"], p2_path):
                    total_downloaded += 1

            # Download photo 3 if available
            if len(found_cands) >= 3 and not os.path.exists(p3_path):
                if download_file(found_cands[2]["url"], p3_path):
                    total_downloaded += 1

        if os.path.exists(p2_path) and os.path.getsize(p2_path) > 10240:
            gallery.append(p2_web)
        if os.path.exists(p3_path) and os.path.getsize(p3_path) > 10240:
            gallery.append(p3_web)

        # Preserve any existing high-res Unsplash links that aren't generic placeholders
        for p in current_photos:
            if not p.startswith('/assets/attractions/') and 'photo-1506744038136-46273834b3fb' not in p:
                if p not in gallery:
                    gallery.append(p)

        if len(gallery) > 0:
            item["photos"] = gallery
            updated_items += 1

        if idx % 10 == 0 or idx == len(attractions):
            print(f"[{idx}/{len(attractions)}] Audited {name_en}: Gallery has {len(gallery)} photos.")

    print(f"\n[+] Multi-Photo Harvesting Complete! New downloads: {total_downloaded}, Total enriched items: {updated_items}")

    # Re-serialize into china-data.js
    formatted_json = json.dumps(attractions, indent=2, ensure_ascii=False)
    updated_content = content[:m.start(1)] + formatted_json + content[m.end(1):]

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print(f"[+] Updated {DATA_FILE} successfully.")

if __name__ == "__main__":
    main()
