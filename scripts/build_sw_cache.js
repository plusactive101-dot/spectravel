const fs = require('fs');
const path = require('path');

const repoDir = path.resolve(__dirname, '..');
const assetsDir = path.join(repoDir, 'assets', 'attractions');
const swFile = path.join(repoDir, 'sw.js');

if (!fs.existsSync(assetsDir)) {
  console.error('[-] Assets directory does not exist:', assetsDir);
  process.exit(1);
}

// Enumerate all jpg / png / webp image files in assets/attractions
const files = fs.readdirSync(assetsDir)
  .filter(f => /\.(jpe?g|png|webp|svg)$/i.test(f))
  .sort();

console.log(`[*] Discovered ${files.length} local attraction images to pre-cache.`);

const imageWebPaths = files.map(f => `/assets/attractions/${f}`);

const swContent = `/**
 * Service Worker for MK Travel (mktravel.pages.dev)
 * Version: 2.0.0 (Pre-cached Local Real-World Attraction Images)
 * Generated: ${new Date().toISOString()}
 */

const CORE_CACHE = 'mktravel-core-v2';
const IMAGE_CACHE = 'mktravel-images-v1';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/china-data.js',
  '/manifest.json'
];

const ATTRACTION_IMAGES = ${JSON.stringify(imageWebPaths, null, 2)};

// Install: Cache core assets and pre-cache attraction photographs
self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      // 1. Cache Core Shell
      const coreCache = await caches.open(CORE_CACHE);
      await coreCache.addAll(CORE_ASSETS);

      // 2. Resiliently pre-cache all attraction photos via Promise.allSettled
      const imageCache = await caches.open(IMAGE_CACHE);
      const cachePromises = ATTRACTION_IMAGES.map(async url => {
        try {
          const response = await fetch(url);
          if (response && response.ok) {
            await imageCache.put(url, response);
          }
        } catch (err) {
          // Non-blocking: fail quietly on missing individual assets
        }
      });
      await Promise.allSettled(cachePromises);
    })()
  );
});

// Activate: Prune outdated cache versions
self.addEventListener('activate', event => {
  const allowedCaches = [CORE_CACHE, IMAGE_CACHE];
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (!allowedCaches.includes(key)) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: Strategy dispatcher
self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;

  // 1. Local Attraction Images: Cache-First (instant offline load)
  if (url.pathname.startsWith('/assets/attractions/')) {
    event.respondWith(
      caches.open(IMAGE_CACHE).then(async cache => {
        const cached = await cache.match(event.request);
        if (cached) return cached;

        try {
          const response = await fetch(event.request);
          if (response && response.ok) {
            cache.put(event.request, response.clone());
          }
          return response;
        } catch (err) {
          return cached;
        }
      })
    );
    return;
  }

  // 2. External CDN Dependencies (Leaflet, FontAwesome): Cache-First
  if (url.origin.includes('unpkg.com') || url.origin.includes('cdnjs.cloudflare.com') || url.origin.includes('cdn.')) {
    event.respondWith(
      caches.match(event.request).then(cached => {
        if (cached) return cached;
        return fetch(event.request).then(response => {
          if (response && response.status === 200) {
            const clone = response.clone();
            caches.open(CORE_CACHE).then(cache => cache.put(event.request, clone));
          }
          return response;
        });
      })
    );
    return;
  }

  // 3. Core App Code & Data: Stale-While-Revalidate
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      const fetchPromise = fetch(event.request).then(networkResponse => {
        if (networkResponse && networkResponse.status === 200) {
          const clone = networkResponse.clone();
          caches.open(CORE_CACHE).then(cache => cache.put(event.request, clone));
        }
        return networkResponse;
      }).catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
`;

fs.writeFileSync(swFile, swContent, 'utf8');
console.log(`[+] Successfully generated ${swFile} with ${imageWebPaths.length} pre-cached attraction photos.`);
