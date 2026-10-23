/**
 * Service Worker for MK Travel (mktravel.pages.dev)
 * Version: 2.0.0 (Pre-cached Local Real-World Attraction Images)
 * Generated: 2026-10-23T12:35:59.300Z
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

const ATTRACTION_IMAGES = [
  "/assets/attractions/baiyun_mountain.jpg",
  "/assets/attractions/baomo.jpg",
  "/assets/attractions/beijing_road.jpg",
  "/assets/attractions/beijingroad.jpg",
  "/assets/attractions/canton_tower.jpg",
  "/assets/attractions/cantontower.jpg",
  "/assets/attractions/central_escalator.jpg",
  "/assets/attractions/chenclan.jpg",
  "/assets/attractions/chimelong_gondola.jpg",
  "/assets/attractions/circus.jpg",
  "/assets/attractions/dafushan.jpg",
  "/assets/attractions/dananshan.jpg",
  "/assets/attractions/dasha_river.jpg",
  "/assets/attractions/dji.jpg",
  "/assets/attractions/dongshankou.jpg",
  "/assets/attractions/dongtian_cave.jpg",
  "/assets/attractions/feilai_temple.jpg",
  "/assets/attractions/gulong.jpg",
  "/assets/attractions/gulong_coaster.jpg",
  "/assets/attractions/gulong_waterfall.jpg",
  "/assets/attractions/indoorski.jpg",
  "/assets/attractions/k11_musea.jpg",
  "/assets/attractions/lionrock.jpg",
  "/assets/attractions/liwan_lake.jpg",
  "/assets/attractions/lotus.jpg",
  "/assets/attractions/mongkok_markets.jpg",
  "/assets/attractions/nanyue.jpg",
  "/assets/attractions/oct_loft.jpg",
  "/assets/attractions/panda_village.jpg",
  "/assets/attractions/panyu_museum.jpg",
  "/assets/attractions/paradise.jpg",
  "/assets/attractions/pingan_finance.jpg",
  "/assets/attractions/poi-baojing-palace-of-yingde.jpg",
  "/assets/attractions/poi-bruce-lee-s-ancestral-residence.jpg",
  "/assets/attractions/poi-cantonese-opera-art-museum.jpg",
  "/assets/attractions/poi-chigang-pagoda.jpg",
  "/assets/attractions/poi-clifford-estates-zhongcun.jpg",
  "/assets/attractions/poi-crocodile-island.jpg",
  "/assets/attractions/poi-dafo-temple-big-buddha-temple.jpg",
  "/assets/attractions/poi-dashatou-wharf.jpg",
  "/assets/attractions/poi-dragon-s-back-trail.jpg",
  "/assets/attractions/poi-ersha-island.jpg",
  "/assets/attractions/poi-feilai-temple.jpg",
  "/assets/attractions/poi-guangdong-museum-of-art.jpg",
  "/assets/attractions/poi-guangdong-museum.jpg",
  "/assets/attractions/poi-guangdong-provincial-people-s-stadium.jpg",
  "/assets/attractions/poi-guangdong-science-center.jpg",
  "/assets/attractions/poi-guangzhou-art-museum-new-hall.jpg",
  "/assets/attractions/poi-guangzhou-cultural-park.jpg",
  "/assets/attractions/poi-guangzhou-library.jpg",
  "/assets/attractions/poi-guangzhou-opera-house.jpg",
  "/assets/attractions/poi-guangzhou-university-city-hemc.jpg",
  "/assets/attractions/poi-guangzhou-uprising-martyrs-cemetery.jpg",
  "/assets/attractions/poi-haixinsha-island.jpg",
  "/assets/attractions/poi-haogang-island-haigou-dao.jpg",
  "/assets/attractions/poi-huacheng-square-flower-city-square.jpg",
  "/assets/attractions/poi-hualin-temple.jpg",
  "/assets/attractions/poi-huangpu-ancient-port.jpg",
  "/assets/attractions/poi-huaqiangbei-electronics-market.jpg",
  "/assets/attractions/poi-jiangnan-west-road.jpg",
  "/assets/attractions/poi-jurassic-trail.jpg",
  "/assets/attractions/poi-k11-art-mall-guangzhou.jpg",
  "/assets/attractions/poi-koala-habitat.jpg",
  "/assets/attractions/poi-lianhuashan-lotus-hill.jpg",
  "/assets/attractions/poi-lingnan-impression-park.jpg",
  "/assets/attractions/poi-man-mo-temple.jpg",
  "/assets/attractions/poi-motorbike-coaster.jpg",
  "/assets/attractions/poi-museum-of-the-mausoleum-of-the-nanyue-king.jpg",
  "/assets/attractions/poi-nancun-town.jpg",
  "/assets/attractions/poi-nangang-millennium-yao-pai.jpg",
  "/assets/attractions/poi-nantou-ancient-city.jpg",
  "/assets/attractions/poi-oct-loft-creative-culture-park.jpg",
  "/assets/attractions/poi-panda-village.jpg",
  "/assets/attractions/poi-panyu-square.jpg",
  "/assets/attractions/poi-pazhou-pagoda.jpg",
  "/assets/attractions/poi-peasant-movement-training-institute.jpg",
  "/assets/attractions/poi-plover-cove-country-park-bride-s-pool.jpg",
  "/assets/attractions/poi-qiannian-gu-dao-ancient-road-museum.jpg",
  "/assets/attractions/poi-renmin-park-people-s-park.jpg",
  "/assets/attractions/poi-safari-on-wheels.jpg",
  "/assets/attractions/poi-sea-world-shekou.jpg",
  "/assets/attractions/poi-shangxiajiu-pedestrian-street.jpg",
  "/assets/attractions/poi-shatian-waterway.jpg",
  "/assets/attractions/poi-shiji-town.jpg",
  "/assets/attractions/poi-sky-gondola.jpg",
  "/assets/attractions/poi-stunt-show-arena.jpg",
  "/assets/attractions/poi-sun-yat-sen-memorial-hall.jpg",
  "/assets/attractions/poi-swan-lake.jpg",
  "/assets/attractions/poi-tai-o-stilt-village-mangrove-boardwalk.jpg",
  "/assets/attractions/poi-taigoo-hui-shopping-mall.jpg",
  "/assets/attractions/poi-teemall.jpg",
  "/assets/attractions/poi-temple-of-the-six-banyan-trees.jpg",
  "/assets/attractions/poi-tencent-seafront-towers.jpg",
  "/assets/attractions/poi-tian-tan-buddha-big-buddha.jpg",
  "/assets/attractions/poi-tianhe-sports-center.jpg",
  "/assets/attractions/poi-tianzi-wharf.jpg",
  "/assets/attractions/poi-titanium-creative-park.jpg",
  "/assets/attractions/poi-tornado-slide.jpg",
  "/assets/attractions/poi-tsim-sha-tsui-promenade-avenue-of-stars.jpg",
  "/assets/attractions/poi-west-kowloon-cultural-district-m.jpg",
  "/assets/attractions/poi-whampoa-military-academy-site.jpg",
  "/assets/attractions/poi-white-tiger-restaurant.jpg",
  "/assets/attractions/poi-wutong-mountain-wutong-shan.jpg",
  "/assets/attractions/poi-xiaozhou-village.jpg",
  "/assets/attractions/poi-xiguan-custom-museum.jpg",
  "/assets/attractions/poi-xinghai-park.jpg",
  "/assets/attractions/poi-xinhai-revolution-memorial-museum.jpg",
  "/assets/attractions/poi-yongqing-fang.jpg",
  "/assets/attractions/poi-yuexiu-park.jpg",
  "/assets/attractions/poi-yuyin-garden.jpg",
  "/assets/attractions/poi-zhongshan-university-south-campus.jpg",
  "/assets/attractions/qingyuan_hotspring.jpg",
  "/assets/attractions/sacred_heart.jpg",
  "/assets/attractions/safari.jpg",
  "/assets/attractions/sea_world.jpg",
  "/assets/attractions/shamian.jpg",
  "/assets/attractions/shamshuipo.jpg",
  "/assets/attractions/shawan.jpg",
  "/assets/attractions/shenzhen_bay.jpg",
  "/assets/attractions/tai_kwun.jpg",
  "/assets/attractions/talentpark.jpg",
  "/assets/attractions/tencent_hq.jpg",
  "/assets/attractions/victoria-harbour.jpg",
  "/assets/attractions/victoria_peak.jpg",
  "/assets/attractions/wanbo_cbd.jpg",
  "/assets/attractions/water_park.jpg",
  "/assets/attractions/yingxi_forest.jpg",
  "/assets/attractions/yongqing_fang.jpg",
  "/assets/attractions/yuyin.jpg"
];

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
