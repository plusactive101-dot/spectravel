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

# Permissive SSL context for CDN image fetching
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

HEADERS = {
    'User-Agent': 'MKTravelBot/1.0 (https://mktravel.pages.dev; admin@mktravel.pages.dev) Python-urllib'
}

def extract_attractions_from_js(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Locate attractions array
    m = re.search(r'const\s+attractions\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);', content)
    if not m:
        m = re.search(r'expeditionAttractions\s*=\s*(\[\s*\{[\s\S]*?\}\s*\]);', content)
    if not m:
        # Fallback to json-like array bracket match
        start_idx = content.find('[')
        end_idx = content.rfind(']')
        if start_idx != -1 and end_idx != -1:
            raw_json = content[start_idx:end_idx+1]
            return json.loads(raw_json), content, start_idx, end_idx+1
        raise ValueError("Could not extract attractions array from china-data.js")
    
    raw_json = m.group(1)
    return json.loads(raw_json), content, m.start(1), m.end(1)

def search_wikimedia_image(query, width=800):
    url = (
        "https://commons.wikimedia.org/w/api.php?"
        + urllib.parse.urlencode({
            "action": "query",
            "generator": "search",
            "gsrsearch": query,
            "gsrlimit": "3",
            "gsrnamespace": "6", # File namespace
            "prop": "imageinfo",
            "iiprop": "url|mime",
            "iiurlwidth": str(width),
            "format": "json"
        })
    )
    req = urllib.request.Request(url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=10, context=ctx) as resp:
            data = json.loads(resp.read().decode('utf-8'))
            pages = data.get("query", {}).get("pages", {})
            for pid, page in pages.items():
                imageinfo = page.get("imageinfo", [])
                if not imageinfo:
                    continue
                info = imageinfo[0]
                mime = info.get("mime", "")
                if mime in ["image/jpeg", "image/png", "image/webp"]:
                    thumb_url = info.get("thumburl") or info.get("url")
                    if thumb_url:
                        return thumb_url
    except Exception as e:
        pass
    return None

def download_image(img_url, dest_path):
    req = urllib.request.Request(img_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=15, context=ctx) as resp, open(dest_path, 'wb') as out_f:
            out_f.write(resp.read())
        return True
    except Exception as e:
        return False

def main():
    print("[*] Parsing china-data.js...")
    attractions, full_content, start_pos, end_pos = extract_attractions_from_js(DATA_FILE)
    print(f"[+] Loaded {len(attractions)} attractions.")

    success_count = 0
    skipped_count = 0

    for idx, item in enumerate(attractions, 1):
        item_id = item.get("id") or re.sub(r'[^a-z0-9]+', '-', item.get("name", "").lower()).strip('-')
        dest_filename = f"{item_id}.jpg"
        dest_path = os.path.join(ASSETS_DIR, dest_filename)
        web_path = f"/assets/attractions/{dest_filename}"

        # If already downloaded and valid file exists (> 10KB), reuse it
        if os.path.exists(dest_path) and os.path.getsize(dest_path) > 10240:
            item["image"] = web_path
            skipped_count += 1
            continue

        name_zh = item.get("nameZh", "")
        name_en = item.get("name", "")
        region = item.get("region", "")

        print(f"[{idx}/{len(attractions)}] Searching real photo for: {name_en} ({name_zh})...")

        # Try search queries in order of precision: Chinese name, Chinese + region, English name
        img_url = None
        for q in [name_zh, f"{name_zh} {region}", name_en, f"{name_en} {region}"]:
            if not q or len(q.strip()) < 2:
                continue
            img_url = search_wikimedia_image(q)
            if img_url:
                break
            time.sleep(0.2)

        if img_url and download_image(img_url, dest_path):
            item["image"] = web_path
            success_count += 1
            print(f"    [+] Saved to {dest_filename} ({round(os.path.getsize(dest_path)/1024)} KB)")
        else:
            # If not on Wikimedia Commons, preserve existing image or assign web path
            print(f"    [-] Wikimedia Commons match not found; keeping existing visual fallback.")
            if not item.get("image"):
                item["image"] = web_path

        time.sleep(0.15)

    print(f"\n[+] Photo Harvesting Complete. Downloaded: {success_count}, Existing: {skipped_count}")

    # Re-serialize attractions array into china-data.js
    formatted_json = json.dumps(attractions, indent=2, ensure_ascii=False)
    updated_content = full_content[:start_pos] + formatted_json + full_content[end_pos:]

    with open(DATA_FILE, 'w', encoding='utf-8') as f:
        f.write(updated_content)
    print(f"[+] Updated {DATA_FILE} successfully.")

if __name__ == "__main__":
    main()
