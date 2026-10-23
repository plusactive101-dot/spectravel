const fs = require('fs');
const path = require('path');

const repoDir = path.resolve(__dirname, '..');
const attractionsDir = path.join(repoDir, 'assets', 'attractions');
const diningDir = path.join(repoDir, 'assets', 'dining');
const swFile = path.join(repoDir, 'sw.js');

let imageFiles = [];

if (fs.existsSync(attractionsDir)) {
  const attrFiles = fs.readdirSync(attractionsDir)
    .filter(f => /\.(jpe?g|png|webp|svg)$/i.test(f))
    .map(f => `/assets/attractions/${f}`);
  imageFiles.push(...attrFiles);
}

if (fs.existsSync(diningDir)) {
  const diningFiles = fs.readdirSync(diningDir)
    .filter(f => /\.(jpe?g|png|webp|svg)$/i.test(f))
    .map(f => `/assets/dining/${f}`);
  imageFiles.push(...diningFiles);
}

imageFiles.sort();
console.log(`[*] Pre-caching total of ${imageFiles.length} images (${imageFiles.filter(i => i.includes('dining')).length} dining, ${imageFiles.filter(i => i.includes('attractions')).length} attractions).`);

const swContent = `/**
 * Service Worker for MK Travel (mktravel.pages.dev)
 * Version: 2.1.0 (Pre-cached Attractions & Dining Assets)
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

const PRECACHE_IMAGES = ${JSON.stringify(imageFiles, null, 2)};

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(
    (async () => {
      const coreCache = await caches.open(CORE_CACHE);
      await coreCache.addAll(CORE_ASSETS);

      const imageCache = await caches.open(IMAGE_CACHE);
      const cachePromises = PRECACHE_IMAGES.map(async url => {
        try {
          const response = await fetch(url);
          if (response && response.ok) {
            await imageCache.put(url, response);
          }
        } catch (err) {}
      });
      await Promise.allSettled(cachePromises);
    })()
  );
});

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

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  if (event.request.method !== 'GET') return;

  // Cache-first for all local assets
  if (url.pathname.startsWith('/assets/')) {
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

  // Cache-first for external CDN assets
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

  // Stale-while-revalidate for core app
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
console.log('[+] sw.js regenerated with combined image precache.');
