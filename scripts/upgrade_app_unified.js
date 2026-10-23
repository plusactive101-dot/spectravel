const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, '..', 'app.js');
let app = fs.readFileSync(appPath, 'utf8');

// 1. Inject window.map and window.regionalMapInstance into initRegionalMap
const regionalMapNeedle = "regionalMapInstance = L.map('regionalLeafletMap', {";
if (app.includes(regionalMapNeedle) && !app.includes("window.map = regionalMapInstance;")) {
  app = app.replace(
    regionalMapNeedle,
    "regionalMapInstance = L.map('regionalLeafletMap', {\n    window.map = regionalMapInstance;\n    window.regionalMapInstance = regionalMapInstance;\n"
  );
  console.log("[+] Injected window.map into initRegionalMap");
}

// 2. Enhance switchChinaView for mindmap & attractions view
const switchMindmapNeedle = `  if (normalized === 'mindmap') {
    setTimeout(() => {
      initRegionalMap();
    }, 100);
  }`;

const switchMindmapReplacement = `  if (normalized === 'mindmap') {
    setTimeout(() => {
      initRegionalMap();
      if (typeof window.syncAttractionsMap === 'function') {
        window.syncAttractionsMap();
      }
      if (typeof window.updateRoutePolyline === 'function') {
        window.updateRoutePolyline();
      }
    }, 100);
  }
  if (normalized === 'attractions') {
    if (typeof window.renderAttractionsGrid === 'function') {
      window.renderAttractionsGrid();
    }
  }`;

if (app.includes(switchMindmapNeedle)) {
  app = app.replace(switchMindmapNeedle, switchMindmapReplacement);
  console.log("[+] Enhanced switchChinaView for mindmap and attractions");
}

// 3. Replace everything from "// Attractions Filtering" to the end with the unified suite
const filterMarker = "// Attractions Filtering";
const filterIdx = app.indexOf(filterMarker);
if (filterIdx === -1) {
  console.error("[-] Could not find filterMarker in app.js");
  process.exit(1);
}

const headPart = app.substring(0, filterIdx);

const unifiedSuite = `// ============================================================================
// PHASE 1-6 UNIFIED ATTRACTIONS, MAP SYNC, SPEC DRAWER & ROUTE BUILDER SUITE
// ============================================================================

window.__activeAttractionFilter = 'All';
window.__attractionSearchQuery = '';
window.__attractionMarkerMap = new Map();

// --- 1. TOAST NOTIFICATIONS & TAXI COPY ---
function showTaxiToast(label) {
  let toast = document.getElementById('taxi-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'taxi-toast';
    toast.className = 'fixed bottom-8 right-8 z-[9999] px-4 py-3 rounded-2xl bg-gray-900/95 text-amber-300 font-bold border border-amber-500/40 shadow-2xl backdrop-blur-md transition-all duration-300 transform translate-y-10 opacity-0 flex items-center gap-2.5 text-xs select-none';
    document.body.appendChild(toast);
  }
  toast.innerHTML = '<span class="text-base">🚕</span> <span>Copied for Didi driver: <strong>' + (label || 'Destination') + '</strong></span>';
  toast.classList.remove('translate-y-10', 'opacity-0');
  toast.classList.add('translate-y-0', 'opacity-100');

  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('translate-y-0', 'opacity-100');
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 2500);
}

window.copyTaxiAddress = function(address, nameZh) {
  const parts = [];
  if (nameZh) parts.push(nameZh);
  if (address) parts.push(address);
  const text = parts.join(' - ');

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showTaxiToast(nameZh || address);
    }).catch(() => {
      prompt('Copy destination for Didi driver:', text);
    });
  } else {
    prompt('Copy destination for Didi driver:', text);
  }
};

// --- 2. MAP CANVAS MARKER STYLING ---
function getMarkerColorByCategory(cat) {
  switch (cat) {
    case 'Heritage & Culture': return '#F59E0B'; // Amber
    case 'Nature & Hiking':
    case 'Nature & Parks': return '#10B981';     // Emerald
    case 'Theme Parks & Wildlife': return '#8B5CF6'; // Purple
    case 'Skyline & Modern': return '#06B6D4';   // Cyan
    case 'Markets & Walking Streets': return '#F97316'; // Orange
    case 'Museums & Galleries': return '#EC4899'; // Pink
    default: return '#3B82F6';                  // Blue
  }
}

// Synchronize Leaflet map with current filtered attractions
window.syncAttractionsMap = function(items) {
  if (typeof L === 'undefined') return;

  const map = window.map || window.regionalMapInstance || (typeof regionalMapInstance !== 'undefined' ? regionalMapInstance : null);
  if (!map || typeof map.addLayer !== 'function') return;

  if (!window.attractionsMarkerGroup) {
    window.attractionsMarkerGroup = L.layerGroup().addTo(map);
  } else {
    window.attractionsMarkerGroup.clearLayers();
  }
  window.__attractionMarkerMap.clear();

  const list = items || window.expeditionAttractions || [];
  const bounds = [];

  list.forEach(item => {
    if (!item.coordinates || !Array.isArray(item.coordinates) || item.coordinates.length < 2) return;
    const lat = item.coordinates[0];
    const lng = item.coordinates[1];
    if (typeof lat !== 'number' || typeof lng !== 'number') return;

    bounds.push([lat, lng]);
    const markerColor = getMarkerColorByCategory(item.category);

    const iconHtml = '<div style="background-color: ' + markerColor + '; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #ffffff; box-shadow: 0 0 6px rgba(0,0,0,0.5);"></div>';
    const customIcon = L.divIcon({
      className: 'custom-attraction-pin',
      html: iconHtml,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    const marker = L.marker([lat, lng], { icon: customIcon });
    const nameZhLabel = item.nameZh ? ' (' + item.nameZh + ')' : '';
    const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
    const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");
    const safeId = (item.id || '').replace(/'/g, "\\\\'");

    const popupHtml = '<div style="font-family: inherit; font-size: 13px; line-height: 1.4; max-width: 250px; color: #111827;">' +
      '<strong style="color: #1F2937; display: block; font-size: 14px;">' + item.name + nameZhLabel + '</strong>' +
      '<span style="display: inline-block; font-size: 11px; background: #E5E7EB; color: #374151; padding: 2px 6px; border-radius: 4px; margin: 4px 0;">' + (item.category || item.region || 'Attraction') + '</span>' +
      (item.address ? '<p style="margin: 4px 0 6px; font-size: 12px; color: #4B5563;">' + item.address + '</p>' : '') +
      '<div style="display: flex; gap: 4px; margin-top: 6px;">' +
        '<button onclick="window.copyTaxiAddress(\\'' + safeAddress + '\\', \\'' + safeNameZh + '\\')" style="background: #F59E0B; color: #fff; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; font-weight: 600; cursor: pointer;">🚕 Taxi</button>' +
        '<button onclick="window.openAttractionDrawer(\\'' + safeId + '\\')" style="background: #06B6D4; color: #fff; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; font-weight: 600; cursor: pointer;">ℹ️ Specs</button>' +
      '</div>' +
    '</div>';

    marker.bindPopup(popupHtml);

    marker.on('click', () => {
      const card = document.getElementById('card-' + (item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')));
      if (card) {
        card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        card.classList.add('ring-2', 'ring-amber-500');
        setTimeout(() => card.classList.remove('ring-2', 'ring-amber-500'), 2000);
      }
    });

    marker.addTo(window.attractionsMarkerGroup);
    window.__attractionMarkerMap.set(item.id, marker);
  });
};

window.focusAttractionOnMap = function(itemId) {
  if (typeof activeChinaView !== 'undefined' && activeChinaView !== 'mindmap') {
    if (typeof switchChinaView === 'function') {
      switchChinaView('mindmap', true);
    }
  }

  setTimeout(() => {
    const map = window.map || window.regionalMapInstance || (typeof regionalMapInstance !== 'undefined' ? regionalMapInstance : null);
    const marker = window.__attractionMarkerMap.get(itemId);
    if (marker && map) {
      map.setView(marker.getLatLng(), 14, { animate: true, duration: 0.8 });
      marker.openPopup();
    }
  }, 150);
};

// --- 3. DYNAMIC ATTRACTIONS GRID RENDERER ---
window.renderAttractionsGrid = function(filterCategory) {
  const container = document.getElementById('attractionsGridContainer') || 
                    document.getElementById('attractions-grid') || 
                    document.getElementById('attractions-container') || 
                    document.querySelector('.attractions-grid');
  
  if (!container) return;

  if (filterCategory !== undefined && filterCategory !== null) {
    window.__activeAttractionFilter = filterCategory;
  }
  const activeFilter = window.__activeAttractionFilter || 'All';
  const query = (window.__attractionSearchQuery || '').toLowerCase().trim();
  const rawAttractions = window.expeditionAttractions || [];

  const categoryMap = {
    'Guangzhou Panyu': ['panyu'],
    'Chimelong Safari & Circus': ['chimelong'],
    'Canton Heritage': ['canton heritage', 'canton', 'guangzhou'],
    'Qingyuan Gulong Gorge': ['qingyuan'],
    'Shenzhen Nanshan Tech': ['shenzhen'],
    'Hong Kong Mong Kok & Harbour': ['hong kong', 'hongkong']
  };

  const filtered = rawAttractions.filter(item => {
    // 1. Regional / Category Filter
    let matchesCategory = false;
    if (activeFilter === 'All' || activeFilter === 'all') {
      matchesCategory = true;
    } else if (item.region === activeFilter || item.category === activeFilter) {
      matchesCategory = true;
    } else if (categoryMap[activeFilter]) {
      const regLower = (item.region || '').toLowerCase();
      const catLower = (item.category || '').toLowerCase();
      matchesCategory = categoryMap[activeFilter].some(p => regLower.includes(p) || catLower.includes(p));
    } else {
      matchesCategory = (item.region === activeFilter || item.category === activeFilter);
    }

    if (!matchesCategory) return false;

    // 2. Bilingual Search Filter
    if (!query) return true;

    const nameMatch = (item.name || '').toLowerCase().includes(query);
    const nameZhMatch = (item.nameZh || '').includes(query);
    const addrMatch = (item.address || '').toLowerCase().includes(query);
    const catMatch = (item.category || '').toLowerCase().includes(query);
    const regMatch = (item.region || '').toLowerCase().includes(query);
    const revMatch = (item.review || item.desc || '').toLowerCase().includes(query);

    return nameMatch || nameZhMatch || addrMatch || catMatch || regMatch || revMatch;
  });

  const cardsHtml = filtered.map(item => {
    const safeId = (item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')).replace(/'/g, "\\\\'");
    const cardId = 'card-' + (item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
    const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");

    const imgUrl = item.image || (item.photos && item.photos[0]) || 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80';
    const tag = item.tag || item.category || 'EXPEDITION SPOT';
    const timeAlloc = item.timeAlloc || '';
    const timeAllocBadge = timeAlloc ? '<span class="absolute top-3 right-3 bg-black/60 backdrop-blur-md text-cyan-300 font-bold px-2.5 py-1 rounded-xl text-[11px] mono border border-white/15"><i class="fa-solid fa-clock mr-1"></i> ' + timeAlloc + '</span>' : '';
    
    const nameZhDisplay = item.nameZh ? '<span class="ml-2 text-xs font-medium px-2 py-0.5 rounded bg-gray-800 text-amber-300 border border-amber-900/40">' + item.nameZh + '</span>' : '';
    const regionBadge = item.region ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">' + item.region + '</span>' : '';
    const categoryBadge = item.category ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">' + item.category + '</span>' : '';
    const reviewText = item.review || item.desc || (item.activities ? item.activities.join(' • ') : '');
    const reviewQuote = reviewText ? '<p class="mt-2 text-xs text-gray-300 italic border-l-2 border-amber-500/60 pl-2 line-clamp-2">"' + reviewText + '"</p>' : '';
    const addressDisplay = item.address ? '<div class="mt-2 text-xs text-gray-400 flex items-start gap-1"><span>📍</span><span class="truncate">' + item.address + '</span></div>' : '';
    const websiteBtn = item.website ? '<a href="' + item.website + '" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-xs font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 transition-colors">🌐 Site</a>' : '';

    const isStaged = (window.__stagedAttractions || []).includes(item.id);

    return '<div id="' + cardId + '" class="attraction-card glass-card glow-cyan rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300">' +
      '<div>' +
        '<!-- Hero Image Banner -->' +
        '<div class="relative h-48 sm:h-52 overflow-hidden group cursor-pointer" onclick="window.openAttractionDrawer(\\'' + safeId + '\\')">' +
          '<img src="' + imgUrl + '" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt="' + item.name + '" loading="lazy">' +
          '<div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>' +
          '<span class="absolute top-3 left-3 bg-cyan-500 text-slate-950 font-black px-2.5 py-1 rounded-xl text-[11px] mono shadow-md">' + tag + '</span>' +
          timeAllocBadge +
          '<div class="absolute bottom-3 left-4 right-4">' +
            '<h3 class="text-lg font-black text-white group-hover:text-cyan-300 transition flex items-center gap-1.5 flex-wrap">' +
              item.name +
              nameZhDisplay +
            '</h3>' +
            '<p class="text-xs text-cyan-300 font-mono mt-0.5">' + (item.category || item.region || '') + '</p>' +
          '</div>' +
        '</div>' +
        '<!-- Card Body -->' +
        '<div class="p-4 space-y-3 text-xs">' +
          '<div class="flex items-center justify-between gap-2 flex-wrap">' +
            '<div class="flex items-center gap-1.5 flex-wrap">' +
              regionBadge +
              categoryBadge +
            '</div>' +
            websiteBtn +
          '</div>' +
          addressDisplay +
          reviewQuote +
        '</div>' +
      '</div>' +
      '<!-- Card Footer -->' +
      '<div class="p-4 pt-0 border-t border-white/5 flex items-center justify-between gap-2 flex-wrap mt-3">' +
        '<button onclick="event.stopPropagation(); window.copyTaxiAddress(\\'' + safeAddress + '\\', \\'' + safeNameZh + '\\')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors">' +
          '<span>🚕</span> Copy Didi' +
        '</button>' +
        '<div class="flex items-center gap-1.5">' +
          '<button onclick="event.stopPropagation(); window.toggleStageAttraction(\\'' + safeId + '\\')" data-poi-id="' + safeId + '" class="route-stage-btn flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium ' + (isStaged ? 'bg-amber-500 text-slate-950 font-bold border-amber-400' : 'bg-white/10 hover:bg-white/15 text-slate-300 border border-white/10') + ' transition-colors">' +
            '<span>' + (isStaged ? '✓' : '+') + '</span> Route' +
          '</button>' +
          '<button onclick="event.stopPropagation(); window.focusAttractionOnMap(\\'' + safeId + '\\')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10 transition-colors" title="Pin on Map">' +
            '<span>🗺️</span>' +
          '</button>' +
          '<button onclick="event.stopPropagation(); window.openAttractionDrawer(\\'' + safeId + '\\')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/20 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/40 transition-colors">' +
            '<span>ℹ️</span> Specs' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';
  }).join('');

  container.innerHTML = cardsHtml;

  const countBadge = document.getElementById('attractions-count');
  if (countBadge) {
    countBadge.textContent = filtered.length;
  }

  window.syncAttractionsMap(filtered);
};

// --- 4. BILINGUAL SEARCH LISTENER ---
function initAttractionsSearch() {
  const searchInput = document.getElementById('attractions-search-input');
  if (!searchInput) return;

  let debounceTimer = null;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      window.__attractionSearchQuery = e.target.value;
      window.renderAttractionsGrid(null);
    }, 180);
  });
}

// --- 5. REGIONAL FILTER BUTTONS ---
window.filterAttractionsCards = function(category) {
  const buttons = document.querySelectorAll('.attraction-filter-btn, .filter-btn, .region-tab-btn');
  buttons.forEach(btn => {
    const dataCat = btn.getAttribute('data-category') || btn.getAttribute('data-filter') || btn.textContent.trim();
    if (dataCat === category) {
      btn.className = "attraction-filter-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold shadow-md";
    } else {
      btn.className = "attraction-filter-btn px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 border border-white/10 hover:bg-white/15";
    }
  });

  window.renderAttractionsGrid(category);
};

// --- 6. UNIFIED SLIDE-OVER DETAIL DRAWER ---
window.openAttractionDrawer = function(itemId) {
  const attractions = window.expeditionAttractions || [];
  const item = attractions.find(p => p.id === itemId || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === itemId);
  if (!item) return;

  const drawer = document.getElementById('attraction-detail-drawer');
  const backdrop = document.getElementById('attraction-drawer-backdrop');
  const body = document.getElementById('attraction-drawer-body');
  if (!drawer || !backdrop || !body) return;

  const nameZhDisplay = item.nameZh ? '<span class="text-amber-300 font-mono text-sm ml-2">(' + item.nameZh + ')</span>' : '';
  const regionBadge = item.region ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">' + item.region + '</span>' : '';
  const categoryBadge = item.category ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">' + item.category + '</span>' : '';
  const timeAllocBadge = item.timeAlloc ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-purple-900/40 text-purple-300 border border-purple-700/40">⏱️ ' + item.timeAlloc + '</span>' : '';

  const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
  const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");
  const safeId = (item.id || '').replace(/'/g, "\\\\'");

  const lat = item.coordinates && item.coordinates[0] ? item.coordinates[0] : null;
  const lng = item.coordinates && item.coordinates[1] ? item.coordinates[1] : null;
  const navGoogleUrl = (lat && lng) ? ('https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng) : '#';
  const navAmapUrl = (lat && lng) ? ('https://uri.amap.com/marker?position=' + lng + ',' + lat + '&name=' + encodeURIComponent(item.nameZh || item.name)) : '#';

  // Photo gallery
  let photoGalleryHtml = '';
  const photos = item.photos || (item.image ? [item.image] : []);
  if (photos.length > 0) {
    photoGalleryHtml = '<div class="flex overflow-x-auto gap-3 pb-2 snap-x rounded-xl">' +
      photos.map(p => '<img src="' + p + '" class="h-44 w-60 rounded-xl object-cover snap-center border border-white/10 shadow-lg flex-shrink-0" loading="lazy">').join('') +
    '</div>';
  }

  // Key Activities
  let activitiesHtml = '';
  if (item.activities && item.activities.length > 0) {
    activitiesHtml = '<div class="bg-gray-800/40 p-4 rounded-xl border border-gray-800 space-y-2">' +
      '<div class="text-xs text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1"><span>✨</span> Key Activities</div>' +
      '<ul class="space-y-1.5 text-xs text-gray-300">' +
        item.activities.map(a => '<li class="flex items-start gap-2"><span class="text-emerald-400">✓</span><span>' + a + '</span></li>').join('') +
      '</ul>' +
    '</div>';
  }

  // Transit & Access
  let accessHtml = '';
  if (item.areaMap) {
    accessHtml = '<div class="bg-gray-800/40 p-4 rounded-xl border border-gray-800 space-y-2">' +
      '<div class="text-xs text-cyan-400 font-semibold uppercase tracking-wider flex items-center gap-1"><span>🚇</span> Transit & Access</div>' +
      '<p class="text-xs text-gray-300 font-mono">' + item.areaMap + '</p>' +
    '</div>';
  }

  // Video reviews
  let reviewsHtml = '';
  if (item.reviews && item.reviews.length > 0) {
    reviewsHtml = '<div class="bg-gray-800/40 p-4 rounded-xl border border-gray-800 space-y-2">' +
      '<div class="text-xs text-rose-400 font-semibold uppercase tracking-wider flex items-center gap-1"><span>📺</span> Video Reviews</div>' +
      '<div class="flex flex-col gap-2">' +
        item.reviews.map(r => '<a href="' + r.url + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs text-rose-300 hover:text-white hover:underline bg-rose-500/10 px-3 py-2 rounded-xl border border-rose-500/20"><i class="fa-brands fa-youtube text-red-500 text-sm"></i> ' + r.title + '</a>').join('') +
      '</div>' +
    '</div>';
  }

  // Nearby recommendations
  let nearbyHtml = '';
  if (item.nearbyRecs && item.nearbyRecs.length > 0) {
    nearbyHtml = '<div class="bg-gray-800/40 p-4 rounded-xl border border-gray-800 space-y-2">' +
      '<div class="text-xs text-emerald-400 font-semibold uppercase tracking-wider flex items-center gap-1"><span>🧭</span> Nearby Recommendations</div>' +
      '<div class="flex flex-wrap gap-1.5">' +
        item.nearbyRecs.map(rec => '<span class="px-2.5 py-1 bg-emerald-500/10 text-emerald-300 rounded-lg text-[11px] border border-emerald-500/20">' + rec + '</span>').join('') +
      '</div>' +
    '</div>';
  }

  const websiteLink = item.website ? ('<div class="pt-2"><a href="' + item.website + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-amber-300 border border-gray-700 transition-colors"><span>🌐</span> Visit Official Portal</a></div>') : '';

  const isStaged = (window.__stagedAttractions || []).includes(item.id);

  body.innerHTML = '<div class="space-y-4">' +
    photoGalleryHtml +
    '<div>' +
      '<div class="flex items-center gap-2 flex-wrap mb-2">' +
        regionBadge +
        categoryBadge +
        timeAllocBadge +
      '</div>' +
      '<h1 class="text-xl font-bold text-white flex items-center flex-wrap gap-1">' +
        item.name +
        nameZhDisplay +
      '</h1>' +
    '</div>' +
    (item.address ? (
      '<div class="bg-gray-800/60 p-3.5 rounded-xl border border-gray-700/60 space-y-2">' +
        '<div class="text-xs text-gray-400 font-medium uppercase tracking-wider">Address / 详细地址</div>' +
        '<div class="text-sm text-gray-200 select-all font-mono">' + item.address + '</div>' +
        '<button onclick="window.copyTaxiAddress(\\'' + safeAddress + '\\', \\'' + safeNameZh + '\\')" class="mt-2 w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors">' +
          '<span>🚕</span> Copy Bilingual Address for Taxi / Didi' +
        '</button>' +
      '</div>'
    ) : '') +
    (item.review || item.desc ? (
      '<div class="bg-gray-800/40 p-4 rounded-xl border border-gray-800 space-y-2">' +
        '<div class="text-xs text-amber-400 font-semibold uppercase tracking-wider flex items-center gap-1">' +
          '<span>💬</span> What Travelers Say' +
        '</div>' +
        '<p class="text-sm text-gray-300 leading-relaxed italic">"' + (item.review || item.desc) + '"</p>' +
      '</div>'
    ) : '') +
    activitiesHtml +
    accessHtml +
    nearbyHtml +
    reviewsHtml +
    '<div class="bg-gray-800/40 p-4 rounded-xl border border-gray-800 space-y-3">' +
      '<div class="text-xs text-gray-400 font-semibold uppercase tracking-wider flex items-center gap-1">' +
        '<span>🧭</span> Navigation & Map Coordinates' +
      '</div>' +
      '<div class="text-xs text-gray-400 font-mono">' +
        'Latitude: ' + (lat || 'N/A') + ', Longitude: ' + (lng || 'N/A') +
      '</div>' +
      '<div class="flex items-center gap-2 flex-wrap pt-1">' +
        ((lat && lng) ? (
          '<a href="' + navAmapUrl + '" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-blue-900/40 hover:bg-blue-900/60 text-blue-300 border border-blue-800 transition-colors">' +
            '🗺️ Open in Amap (高德)' +
          '</a>' +
          '<a href="' + navGoogleUrl + '" target="_blank" rel="noopener noreferrer" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 transition-colors">' +
            'Google Maps' +
          '</a>' +
          '<button onclick="window.focusAttractionOnMap(\\'' + safeId + '\\')" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-900/40 hover:bg-purple-900/60 text-purple-300 border border-purple-800 transition-colors">' +
            '📍 Pin on Live Map' +
          '</button>'
        ) : '') +
      '</div>' +
      websiteLink +
    '</div>' +
    '<div class="pt-2">' +
      '<button onclick="window.toggleStageAttraction(\\'' + safeId + '\\'); window.openAttractionDrawer(\\'' + safeId + '\\');" class="w-full py-2.5 rounded-xl text-xs font-bold transition flex items-center justify-center gap-2 ' + (isStaged ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' : 'bg-white/10 hover:bg-white/20 text-white border border-white/10') + '">' +
        '<span>' + (isStaged ? '✓' : '+') + '</span> ' + (isStaged ? 'Remove from Staged Route' : 'Add to Staged Custom Route') +
      '</button>' +
    '</div>' +
  '</div>';

  backdrop.classList.remove('opacity-0', 'pointer-events-none');
  backdrop.classList.add('opacity-100');
  drawer.classList.remove('translate-x-full');
  document.body.style.overflow = 'hidden';
};

window.closeAttractionDrawer = function() {
  const drawer = document.getElementById('attraction-detail-drawer');
  const backdrop = document.getElementById('attraction-drawer-backdrop');
  if (drawer) drawer.classList.add('translate-x-full');
  if (backdrop) {
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }
  document.body.style.overflow = '';
};

// Backward-compatible alias
window.openAttraction = function(id) {
  window.openAttractionDrawer(id);
};

// Global Escape Key Listener for drawer dismissal
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    window.closeAttractionDrawer();
    window.closeRouteDrawer();
  }
});

// --- 7. PHASE 6 TRIP STAGING DRAWER & ROUTE BUILDER ---
window.__stagedAttractions = (function() {
  try {
    return JSON.parse(localStorage.getItem('mktravel_staged_route') || '[]');
  } catch (e) {
    return [];
  }
})();

window.__routePolylineLayer = null;

window.toggleStageAttraction = function(itemId) {
  const attractions = window.expeditionAttractions || [];
  const item = attractions.find(p => p.id === itemId || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === itemId);
  if (!item) return;

  const targetId = item.id || itemId;
  const index = window.__stagedAttractions.findIndex(id => id === targetId);

  if (index >= 0) {
    window.__stagedAttractions.splice(index, 1);
  } else {
    window.__stagedAttractions.push(targetId);
  }

  localStorage.setItem('mktravel_staged_route', JSON.stringify(window.__stagedAttractions));
  window.updateRouteUI();
};

window.removeStagedAttraction = function(targetId) {
  window.__stagedAttractions = window.__stagedAttractions.filter(id => id !== targetId);
  localStorage.setItem('mktravel_staged_route', JSON.stringify(window.__stagedAttractions));
  window.updateRouteUI();
};

window.clearStagedRoute = function() {
  window.__stagedAttractions = [];
  localStorage.removeItem('mktravel_staged_route');
  window.updateRouteUI();
};

window.updateRouteUI = function() {
  const count = window.__stagedAttractions.length;
  const badge = document.getElementById('staged-route-badge-count');
  if (badge) badge.textContent = count;

  // Update card buttons
  document.querySelectorAll('.route-stage-btn').forEach(btn => {
    const btnId = btn.getAttribute('data-poi-id');
    if (window.__stagedAttractions.includes(btnId)) {
      btn.innerHTML = '<span>✓</span> Staged';
      btn.className = 'route-stage-btn flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-semibold bg-amber-500 text-gray-950 border border-amber-400 transition-colors';
    } else {
      btn.innerHTML = '<span>+</span> Route';
      btn.className = 'route-stage-btn flex items-center gap-1 px-2.5 py-1.5 rounded-xl text-xs font-medium bg-white/10 hover:bg-white/15 text-slate-300 border border-white/10 transition-colors';
    }
  });

  window.renderStagedRouteDrawer();
  window.updateRoutePolyline();
};

window.renderStagedRouteDrawer = function() {
  const container = document.getElementById('staged-route-items');
  if (!container) return;

  const attractions = window.expeditionAttractions || [];
  const stagedItems = window.__stagedAttractions.map((id, seq) => {
    const found = attractions.find(p => p.id === id || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id);
    return { item: found, id: id, sequence: seq + 1 };
  }).filter(entry => entry.item);

  if (stagedItems.length === 0) {
    container.innerHTML = '<div class="h-64 flex flex-col items-center justify-center text-center p-6 text-gray-500">' +
        '<span class="text-4xl mb-3">📍</span>' +
        '<p class="text-sm font-medium text-gray-400">Your route plan is empty.</p>' +
        '<p class="text-xs text-gray-500 mt-1">Click \"+ Route\" on any attraction card to plot your custom journey.</p>' +
      '</div>';
    return;
  }

  container.innerHTML = stagedItems.map(({ item, id, sequence }) => {
    const nameZhDisplay = item.nameZh ? '<span class="text-xs text-amber-300 font-normal ml-1">(' + item.nameZh + ')</span>' : '';
    const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
    const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");
    const safeId = (id || '').replace(/'/g, "\\\\'");

    return '<div class="p-3.5 rounded-xl bg-gray-800/80 border border-gray-700/70 hover:border-amber-500/40 transition-colors flex items-start justify-between gap-3">' +
        '<div class="flex items-start gap-2.5">' +
          '<span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-gray-950 font-black text-xs">' +
            sequence +
          '</span>' +
          '<div class="space-y-1">' +
            '<h4 class="text-sm font-bold text-white leading-tight cursor-pointer hover:text-amber-300" onclick="window.openAttractionDrawer(\\'' + safeId + '\\')">' +
              item.name +
              nameZhDisplay +
            '</h4>' +
            (item.address ? '<p class="text-xs text-gray-400 truncate max-w-[210px]">' + item.address + '</p>' : '') +
            '<div class="flex items-center gap-1.5 pt-1">' +
              '<button onclick="window.copyTaxiAddress(\\'' + safeAddress + '\\', \\'' + safeNameZh + '\\')" class="text-[11px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 hover:bg-amber-500/20 font-medium">' +
                '🚕 Copy Didi' +
              '</button>' +
              '<button onclick="window.focusAttractionOnMap(\\'' + safeId + '\\')" class="text-[11px] px-2 py-0.5 rounded bg-gray-700 hover:bg-gray-600 text-gray-300">' +
                '🗺️ Pin' +
              '</button>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<button onclick="window.removeStagedAttraction(\\'' + safeId + '\\')" class="text-gray-500 hover:text-red-400 p-1 text-sm transition-colors">' +
          '✕' +
        '</button>' +
      '</div>';
  }).join('');
};

window.updateRoutePolyline = function() {
  if (typeof L === 'undefined') return;
  const map = window.map || window.regionalMapInstance || (typeof regionalMapInstance !== 'undefined' ? regionalMapInstance : null);
  if (!map || typeof map.addLayer !== 'function') return;

  if (!window.__routePolylineLayer) {
    window.__routePolylineLayer = L.layerGroup().addTo(map);
  } else {
    window.__routePolylineLayer.clearLayers();
  }

  const attractions = window.expeditionAttractions || [];
  const coords = [];

  window.__stagedAttractions.forEach((id, idx) => {
    const item = attractions.find(p => p.id === id || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id);
    if (item && item.coordinates && Array.isArray(item.coordinates) && item.coordinates.length >= 2) {
      const lat = item.coordinates[0];
      const lng = item.coordinates[1];
      if (typeof lat === 'number' && typeof lng === 'number') {
        coords.push([lat, lng]);

        const waypointIcon = L.divIcon({
          className: 'route-waypoint-badge',
          html: '<div style="background-color: #F59E0B; color: #030712; width: 22px; height: 22px; border-radius: 50%; border: 2px solid #ffffff; font-weight: 800; font-size: 11px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 10px rgba(0,0,0,0.5);">' + (idx + 1) + '</div>',
          iconSize: [22, 22],
          iconAnchor: [11, 11]
        });

        const marker = L.marker([lat, lng], { icon: waypointIcon, zIndexOffset: 1000 });
        marker.bindPopup('<strong>Stop #' + (idx + 1) + ': ' + item.name + '</strong><br><small>' + (item.address || '') + '</small>');
        marker.addTo(window.__routePolylineLayer);
      }
    }
  });

  if (coords.length >= 2) {
    const polyline = L.polyline(coords, {
      color: '#F59E0B',
      weight: 4,
      opacity: 0.85,
      dashArray: '8, 8',
      lineJoin: 'round'
    });
    polyline.addTo(window.__routePolylineLayer);

    try {
      map.fitBounds(polyline.getBounds(), { padding: [50, 50], maxZoom: 13 });
    } catch (e) {
      console.warn('Polyline bounds fit warning:', e);
    }
  }
};

window.copyStagedRouteSummary = function() {
  const attractions = window.expeditionAttractions || [];
  const staged = window.__stagedAttractions.map((id, idx) => {
    const found = attractions.find(p => p.id === id || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === id);
    return found ? ('Stop ' + (idx + 1) + ': ' + found.name + ' (' + (found.nameZh || '') + ')\\n   📍 Address: ' + (found.address || 'N/A')) : null;
  }).filter(Boolean);

  if (staged.length === 0) return;

  const itineraryText = "=== MY CHINA EXPEDITION DAY ROUTE ===\\n\\n" + staged.join("\\n\\n") + "\\n\\nGenerated via mktravel.pages.dev";

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(itineraryText).then(() => {
      alert("Day itinerary copied to clipboard!");
    }).catch(() => {
      prompt("Copy day itinerary:", itineraryText);
    });
  } else {
    prompt("Copy day itinerary:", itineraryText);
  }
};

window.openRouteDrawer = function() {
  const drawer = document.getElementById('staged-route-drawer');
  const backdrop = document.getElementById('route-drawer-backdrop');
  if (drawer) drawer.classList.remove('-translate-x-full');
  if (backdrop) {
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
    backdrop.classList.add('opacity-100');
  }
  document.body.style.overflow = 'hidden';
};

window.closeRouteDrawer = function() {
  const drawer = document.getElementById('staged-route-drawer');
  const backdrop = document.getElementById('route-drawer-backdrop');
  if (drawer) drawer.classList.add('-translate-x-full');
  if (backdrop) {
    backdrop.classList.remove('opacity-100');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  }
  document.body.style.overflow = '';
};

window.toggleRouteDrawer = function() {
  const drawer = document.getElementById('staged-route-drawer');
  if (drawer && drawer.classList.contains('-translate-x-full')) {
    window.openRouteDrawer();
  } else {
    window.closeRouteDrawer();
  }
};

// --- 8. GLOBAL APP INITIALIZATION ---
function initApp() {
  const rawHash = window.location.hash ? window.location.hash.replace('#', '') : '';
  const hash = (rawHash === 'food' || rawHash === 'restaurant' || rawHash === 'restaurants') ? 'dining' : rawHash;
  const validViews = ['flowchart', 'schedule', 'hotels', 'attractions', 'dining', 'mindmap', 'budget'];
  const initialView = validViews.includes(hash) ? hash : 'flowchart';
  
  if (typeof switchChinaView === 'function') {
    switchChinaView(initialView, Boolean(hash));
  }

  try { if (typeof renderDailySchedule === 'function') renderDailySchedule('all'); } catch (e) { console.error('China schedule err:', e); }
  try { if (typeof renderRestaurants === 'function') renderRestaurants('all'); } catch (e) { console.error('China dining err:', e); }
  try { if (typeof calculateChinaBudget === 'function') calculateChinaBudget(); } catch (e) { console.error('China budget err:', e); }
  try { window.renderAttractionsGrid('All'); } catch (e) { console.error('Attractions render err:', e); }
  try { window.updateRouteUI(); } catch (e) { console.error('Route UI err:', e); }
  try { initAttractionsSearch(); } catch (e) { console.error('Search init err:', e); }

  window.addEventListener('hashchange', () => {
    const raw = window.location.hash ? window.location.hash.replace('#', '') : '';
    const currentHash = (raw === 'food' || raw === 'restaurant' || raw === 'restaurants') ? 'dining' : raw;
    if (validViews.includes(currentHash) && currentHash !== activeChinaView) {
      if (typeof switchChinaView === 'function') {
        switchChinaView(currentHash, true);
      }
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
`;

fs.writeFileSync(appPath, headPart + unifiedSuite, 'utf8');
console.log("[+] Successfully updated app.js with unified Phase 1-6 Attractions suite!");
