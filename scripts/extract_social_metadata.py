#!/usr/bin/env python3
"""
extract_social_metadata.py
Multi-platform metadata extractor for Instagram, TikTok, Xiaohongshu (RED), Facebook, and Web URLs.
Outputs a clean JSON structure to stdout.
"""

import sys
import os
import json
import re
import subprocess
import urllib.request
import urllib.parse
from bs4 import BeautifulSoup

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Mobile/15E148 Safari/604.1',
    'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
}

def extract_via_gallery_dl(url):
    """Attempt extraction via gallery-dl JSON dump."""
    try:
        res = subprocess.run(
            ['gallery-dl', '-j', url],
            capture_output=True, text=True, timeout=18
        )
        if res.returncode == 0 and res.stdout.strip():
            lines = res.stdout.strip().splitlines()
            images = []
            caption = ""
            author = ""
            for line in lines:
                try:
                    data = json.loads(line)
                    if isinstance(data, list) and len(data) >= 2 and isinstance(data[1], dict):
                        info = data[1]
                        if not caption and info.get("description"):
                            caption = info["description"]
                        if not author and info.get("user", {}).get("username"):
                            author = info["user"]["username"]
                    elif isinstance(data, dict):
                        if data.get("url"):
                            images.append(data["url"])
                except Exception:
                    continue
            if caption or images:
                return {"caption": caption, "images": images, "author": author}
    except Exception:
        pass
    return None

def extract_via_ytdlp(url):
    """Attempt extraction via yt-dlp JSON dump."""
    try:
        res = subprocess.run(
            ['yt-dlp', '--dump-json', '--skip-download', '--no-warnings', url],
            capture_output=True, text=True, timeout=20
        )
        if res.returncode == 0 and res.stdout.strip():
            data = json.loads(res.stdout.splitlines()[0])
            images = []
            if data.get("thumbnail"):
                images.append(data["thumbnail"])
            for thumb in data.get("thumbnails", []):
                if thumb.get("url"):
                    images.append(thumb["url"])
            return {
                "title": data.get("title", ""),
                "caption": data.get("description", "") or data.get("title", ""),
                "author": data.get("uploader", "") or data.get("channel", ""),
                "images": list(dict.fromkeys(images))[:5]
            }
    except Exception:
        pass
    return None

def extract_opengraph_fallback(url):
    """Extract standard OpenGraph / meta tags with fallback proxy for Instagram/TikTok."""
    fetch_url = url
    if "instagram.com/p/" in url or "instagram.com/reel/" in url:
        fetch_url = url.replace("instagram.com", "ddinstagram.com")
    elif "tiktok.com" in url:
        fetch_url = url.replace("tiktok.com", "vxtiktok.com")

    req = urllib.request.Request(fetch_url, headers=HEADERS)
    try:
        with urllib.request.urlopen(req, timeout=12) as resp:
            html = resp.read().decode('utf-8', errors='ignore')
            soup = BeautifulSoup(html, 'html.parser')

            title = ""
            desc = ""
            image = ""

            og_title = soup.find('meta', property='og:title')
            og_desc = soup.find('meta', property='og:description')
            og_img = soup.find('meta', property='og:image')

            if og_title and og_title.get('content'):
                title = og_title['content']
            elif soup.title:
                title = soup.title.string or ""

            if og_desc and og_desc.get('content'):
                desc = og_desc['content']

            if og_img and og_img.get('content'):
                image = og_img['content']

            return {
                "title": title.strip(),
                "caption": desc.strip(),
                "images": [image] if image else []
            }
    except Exception:
        return None

def extract_xiaohongshu(url):
    """Extract note data from Xiaohongshu (RED) links including xhslink redirects."""
    try:
        req = urllib.request.Request(url, headers=HEADERS)
        with urllib.request.urlopen(req, timeout=12) as resp:
            final_url = resp.geturl()
            html = resp.read().decode('utf-8', errors='ignore')

        soup = BeautifulSoup(html, 'html.parser')
        title = ""
        desc = ""
        images = []

        # 1. Inspect window.__INITIAL_STATE__
        for script in soup.find_all('script'):
            text = script.string or ""
            if '__INITIAL_STATE__' in text:
                m = re.search(r'window\.__INITIAL_STATE__\s*=\s*(\{.*?\});', text)
                if m:
                    try:
                        raw = m.group(1).replace('undefined', 'null')
                        state = json.loads(raw)
                        note_map = state.get("note", {}).get("noteDetailMap", {})
                        for k, v in note_map.items():
                            note = v.get("note", {})
                            title = note.get("title", "")
                            desc = note.get("desc", "")
                            for img in note.get("imageList", []):
                                if img.get("urlDefault"):
                                    images.append(img["urlDefault"])
                    except Exception:
                        pass

        # 2. Fallback to OpenGraph
        if not title:
            og_title = soup.find('meta', property='og:title')
            title = og_title['content'] if og_title else ""
        if not desc:
            og_desc = soup.find('meta', property='og:description')
            desc = og_desc['content'] if og_desc else ""
        if not images:
            og_img = soup.find('meta', property='og:image')
            if og_img and og_img.get('content'):
                images.append(og_img['content'])

        return {
            "platform": "xiaohongshu",
            "url": final_url,
            "title": title.strip(),
            "caption": desc.strip(),
            "images": images[:6]
        }
    except Exception as e:
        return None

def main():
    if len(sys.argv) < 2:
        print(json.dumps({"error": "No URL provided."}))
        sys.exit(1)

    url = sys.argv[1].strip()
    platform = "web"

    if "instagram.com" in url:
        platform = "instagram"
    elif "tiktok.com" in url or "douyin.com" in url:
        platform = "tiktok"
    elif "xiaohongshu.com" in url or "xhslink.com" in url:
        platform = "xiaohongshu"
    elif "facebook.com" in url:
        platform = "facebook"

    result = None

    # Platform routing
    if platform == "xiaohongshu":
        result = extract_xiaohongshu(url)
    elif platform in ["instagram", "tiktok"]:
        result = extract_via_gallery_dl(url)
        if not result or not result.get("caption"):
            result = extract_via_ytdlp(url)

    # Universal OpenGraph Fallback
    if not result or (not result.get("caption") and not result.get("title")):
        og_res = extract_opengraph_fallback(url)
        if og_res:
            if result:
                result["caption"] = result.get("caption") or og_res.get("caption", "")
                result["title"] = result.get("title") or og_res.get("title", "")
                if not result.get("images"):
                    result["images"] = og_res.get("images", [])
            else:
                result = og_res

    if not result:
        result = {"error": f"Could not extract content from {url}"}

    result["platform"] = platform
    result["url"] = url
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
