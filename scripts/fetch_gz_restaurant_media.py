#!/usr/bin/env python3
"""
fetch_gz_restaurant_media.py
Scrapes and processes authentic photography for Guangzhou Restaurant (Longjin West Road Branch / 粤宴西关)
from public news portals and verified media sources.
"""

import os
import io
import urllib.request
from PIL import Image

HEADERS = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Referer': 'https://image.baidu.com/'
}

DEST_DIR = os.path.join(os.path.dirname(__file__), '..', 'media', 'dining', 'guangzhou_restaurant')
os.makedirs(DEST_DIR, exist_ok=True)

MEDIA_ASSETS = [
    # Architecture & Ambience
    ('facade.jpg', 'https://x0.ifengimg.com/res/2026/1EBD317285ED01E472FFE3681EA300C823505F53_size93_w1080_h720.jpg'),
    ('courtyard.jpg', 'https://x0.ifengimg.com/res/2026/75C7FB738ADDEC7442511F539B2A7B720AF85BCA_size54_w1080_h719.jpg'),
    ('cook_banquet_table.jpg', 'https://x0.ifengimg.com/res/2026/E28AC1F6F83B761E7C9C3C51D306F9E5BD33FF6A_size258_w828_h1105.jpg'),
    ('tim_cook_menu_card.jpg', 'https://x0.ifengimg.com/res/2026/7C5F5F3197B7DACC25BF043D7B7E13C9593D9526_size67_w751_h1434.jpg'),
    
    # Tim Cook 10-Dish Menu
    ('dish_01_hargow.jpg', 'https://img0.baidu.com/it/u=2127544,136567162&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1036'),
    ('dish_02_red_rice_roll.jpg', 'https://img2.baidu.com/it/u=2738646256,1141750371&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=652'),
    ('dish_03_spare_ribs.jpg', 'https://img1.baidu.com/it/u=1244310413,3214446683&fm=253&fmt=auto&app=138&f=JPEG?w=516&h=500'),
    ('dish_04_char_siu_bun.jpg', 'https://img1.baidu.com/it/u=3280338933,400977899&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=603'),
    ('dish_05_xiao_long_bao.jpg', 'https://img1.baidu.com/it/u=2172766354,1714216252&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=656'),
    ('dish_06_radish_cake.jpg', 'https://img1.baidu.com/it/u=1248145443,1566646805&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1044'),
    ('dish_07_chicken.jpg', 'https://img0.baidu.com/it/u=1680591026,1115057051&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'),
    ('dish_08_fish_maw_soup.jpg', 'https://img1.baidu.com/it/u=154445668,2801717812&fm=253&fmt=auto&app=138&f=PNG?w=500&h=653'),
    ('dish_09_lettuce.jpg', 'https://img0.baidu.com/it/u=1177248507,308499607&fm=253&fmt=auto&app=138&f=JPEG?w=750&h=500'),
    ('dish_10_milk_pudding.jpg', 'https://img0.baidu.com/it/u=1349819489,965323596&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=653')
]

def fetch_media():
    print(f"Saving assets to: {os.path.abspath(DEST_DIR)}")
    for filename, url in MEDIA_ASSETS:
        out_file = os.path.join(DEST_DIR, filename)
        if os.path.exists(out_file) and os.path.getsize(out_file) > 1000:
            print(f"✓ Exists: {filename} ({os.path.getsize(out_file)} bytes)")
            continue
        try:
            req = urllib.request.Request(url, headers=HEADERS)
            with urllib.request.urlopen(req, timeout=12) as r:
                data = r.read()
            im = Image.open(io.BytesIO(data))
            if im.mode != 'RGB':
                im = im.convert('RGB')
            im.save(out_file, 'JPEG', quality=92)
            print(f"✓ Downloaded: {filename} ({im.size[0]}x{im.size[1]})")
        except Exception as e:
            print(f"✗ Failed {filename}: {e}")

if __name__ == '__main__':
    fetch_media()
