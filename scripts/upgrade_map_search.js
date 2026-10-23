const fs = require('fs');
const path = require('path');

const appFilePath = path.resolve(__dirname, '../app.js');
const indexFilePath = path.resolve(__dirname, '../index.html');

let appContent = fs.readFileSync(appFilePath, 'utf8');
let indexContent = fs.readFileSync(indexFilePath, 'utf8');

// 1. Inject Search Input Bar into index.html if not already present
if (!indexContent.includes('id="attractions-search-input"')) {
    const searchBarHtml = `
        <!-- Bilingual Attractions Search Bar -->
        <div class="relative w-full max-w-md my-2">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none text-gray-400">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
          </div>
          <input type="text" id="attractions-search-input" placeholder="Search attractions / 搜索景点 (e.g. Dafo, 大佛寺, Liwan)..." class="w-full pl-10 pr-4 py-2 text-sm bg-gray-900/90 text-gray-100 placeholder-gray-400 rounded-xl border border-gray-700 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none transition-all" />
        </div>`;

    if (indexContent.includes('id="attractionsGridContainer"')) {
        indexContent = indexContent.replace(
            /(<!-- ATTRACTIONS GRID -->[\s\S]*?<div[^>]*id=["']attractionsGridContainer["'])/i,
            `${searchBarHtml}\n\n        $1`
        );
        fs.writeFileSync(indexFilePath, indexContent, 'utf8');
        console.log('[+] Injected bilingual search input above attractionsGridContainer in index.html.');
    } else if (indexContent.includes('id="view-attractions"')) {
        indexContent = indexContent.replace(
            /(<section[^>]*id=["']view-attractions["'][^>]*>[\s\S]*?)(<div[^>]*id=["']attractionsGridContainer["']|<div[^>]*class=["'][^"']*grid)/i,
            `$1\n${searchBarHtml}\n$2`
        );
        fs.writeFileSync(indexFilePath, indexContent, 'utf8');
        console.log('[+] Injected bilingual search input into #view-attractions section in index.html.');
    } else {
        console.log('[-] Could not locate attractions container in index.html.');
    }
}

// 2. Map Marker Synchronization & Search Logic in app.js
const mapAndSearchModule = `
// ============================================================================
// PHASE 4: MAP CANVAS SYNCHRONIZATION & BILINGUAL SEARCH ENGINE
// ============================================================================

window.__activeAttractionFilter = 'All';
window.__attractionSearchQuery = '';
window.__attractionMarkerMap = new Map();

// Color definitions for map markers by category
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

// Sync Leaflet map with current filtered attractions
window.syncAttractionsMap = function(items) {
  if (typeof L === 'undefined') {
    return; // Leaflet not loaded
  }

  // Detect Leaflet map instance on window
  const map = window.map || window.leafletMap || window.mymap || (window.mapInstance ? window.mapInstance : null);
  if (!map || typeof map.addLayer !== 'function') {
    return;
  }

  if (!window.attractionsMarkerGroup) {
    window.attractionsMarkerGroup = L.layerGroup().addTo(map);
  } else {
    window.attractionsMarkerGroup.clearLayers();
  }
  window.__attractionMarkerMap.clear();

  const bounds = [];

  items.forEach(item => {
    if (!item.coordinates || !Array.isArray(item.coordinates) || item.coordinates.length < 2) return;
    const lat = item.coordinates[0];
    const lng = item.coordinates[1];
    if (typeof lat !== 'number' || typeof lng !== 'number') return;

    bounds.push([lat, lng]);
    const markerColor = getMarkerColorByCategory(item.category);

    const iconHtml = \`
      <div style="background-color: \${markerColor}; width: 14px; height: 14px; border-radius: 50%; border: 2px solid #ffffff; box-shadow: 0 0 6px rgba(0,0,0,0.5);"></div>
    \`;
    const customIcon = L.divIcon({
      className: 'custom-attraction-pin',
      html: iconHtml,
      iconSize: [14, 14],
      iconAnchor: [7, 7]
    });

    const marker = L.marker([lat, lng], { icon: customIcon });
    
    const nameZhLabel = item.nameZh ? \` (\${item.nameZh})\` : '';
    const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
    const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");

    const popupHtml = \`
      <div style="font-family: inherit; font-size: 13px; line-height: 1.4; max-width: 240px; color: #111827;">
        <strong style="color: #1F2937; display: block; font-size: 14px;">\${item.name}\${nameZhLabel}</strong>
        <span style="display: inline-block; font-size: 11px; background: #E5E7EB; color: #374151; padding: 2px 6px; border-radius: 4px; margin: 4px 0;">\${item.category || item.region}</span>
        <p style="margin: 4px 0 6px; font-size: 12px; color: #4B5563;">\${item.address || ''}</p>
        <button onclick="window.copyTaxiAddress('\${safeAddress}', '\${safeNameZh}')" style="background: #F59E0B; color: #fff; border: none; border-radius: 4px; padding: 4px 8px; font-size: 11px; font-weight: 600; cursor: pointer;">🚕 Copy Taxi Address</button>
      </div>
    \`;
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

  if (bounds.length > 0 && typeof map.fitBounds === 'function') {
    try {
      map.fitBounds(bounds, { padding: [45, 45], maxZoom: 14 });
    } catch (e) {
      console.warn('Map fitBounds failed:', e);
    }
  }
};

window.focusAttractionOnMap = function(itemId) {
  const marker = window.__attractionMarkerMap.get(itemId);
  const map = window.map || window.leafletMap || window.mymap || (window.mapInstance ? window.mapInstance : null);
  if (marker && map) {
    map.panTo(marker.getLatLng(), { animate: true, duration: 0.5 });
    marker.openPopup();
  }
};

// Upgraded render function integrating search query, regional filters & map sync
window.renderAttractionsGrid = function(filterCategory) {
  const container = document.getElementById('attractionsGridContainer') || 
                    document.getElementById('attractions-grid') || 
                    document.getElementById('attractions-container') || 
                    document.querySelector('.attractions-grid');
  
  if (!container) {
    console.warn('[-] Attractions grid container not found in DOM.');
    return;
  }

  if (filterCategory !== undefined && filterCategory !== null) {
    window.__activeAttractionFilter = filterCategory;
  }
  const activeFilter = window.__activeAttractionFilter || 'All';
  const query = (window.__attractionSearchQuery || '').toLowerCase().trim();

  const rawAttractions = window.expeditionAttractions || [];

  const categoryMap = {
    'Guangzhou Panyu': ['panyu'],
    'Chimelong Safari & Circus': ['chimelong'],
    'Canton Heritage': ['canton heritage', 'canton'],
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
    } else if (activeFilter === 'Nature & Hiking') {
      matchesCategory = (item.category === 'Nature & Hiking' || item.category === 'Nature & Parks');
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
    const cardId = 'card-' + (item.id || item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-'));
    const nameZhDisplay = item.nameZh ? '<span class="ml-2 text-xs font-medium px-2 py-0.5 rounded bg-gray-800 text-amber-300 border border-amber-900/40">' + item.nameZh + '</span>' : '';
    const regionBadge = item.region ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">' + item.region + '</span>' : '';
    const categoryBadge = item.category ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">' + item.category + '</span>' : '';
    const reviewText = item.review || item.desc || (item.activities ? item.activities.join(' • ') : '');
    const reviewQuote = reviewText ? '<p class="mt-2 text-xs text-gray-300 italic border-l-2 border-amber-500/60 pl-2 line-clamp-2">"' + reviewText + '"</p>' : '';
    const addressDisplay = item.address ? '<div class="mt-2 text-xs text-gray-400 flex items-start gap-1"><span>📍</span><span class="truncate">' + item.address + '</span></div>' : '';
    const websiteBtn = item.website ? '<a href="' + item.website + '" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-xs font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 transition-colors">🌐 Site</a>' : '';
    
    const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
    const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");
    const safeId = (item.id || '').replace(/'/g, "\\\\'");

    return '<div id="' + cardId + '" ' +
           'onmouseenter="window.focusAttractionOnMap(\\'' + safeId + '\\')" ' +
           'class="attraction-card bg-gray-900/90 border border-gray-800 rounded-xl p-4 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-200 cursor-pointer">' +
      '<div>' +
        '<div class="flex items-center justify-between gap-2 flex-wrap mb-2">' +
          '<div class="flex items-center gap-1.5 flex-wrap">' +
            regionBadge +
            categoryBadge +
          '</div>' +
          websiteBtn +
        '</div>' +
        '<h3 class="text-base font-bold text-white flex items-center flex-wrap mt-1 cursor-pointer hover:text-amber-400" onclick="window.openAttraction(\\'' + safeId + '\\')">' +
          item.name +
          nameZhDisplay +
        '</h3>' +
        addressDisplay +
        reviewQuote +
      '</div>' +
      '<div class="mt-4 pt-3 border-t border-gray-800/80 flex items-center justify-between gap-2 flex-wrap">' +
        '<button onclick="event.stopPropagation(); window.copyTaxiAddress(\\'' + safeAddress + '\\', \\'' + safeNameZh + '\\')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors">' +
          '<span>🚕</span> Copy Didi Address' +
        '</button>' +
        '<button onclick="window.openAttraction(\\'' + safeId + '\\')" class="px-3 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/20 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/40 transition-colors">' +
          '<span>ℹ️</span> Specs' +
        '</button>' +
      '</div>' +
    '</div>';
  }).join('');

  container.innerHTML = cardsHtml;

  const countBadge = document.getElementById('attractions-count');
  if (countBadge) {
    countBadge.textContent = filtered.length;
  }

  // Trigger real-time map pin sync
  window.syncAttractionsMap(filtered);
};

// Attach search listener with debouncing
function initAttractionsSearch() {
  const searchInput = document.getElementById('attractions-search-input');
  if (!searchInput) return;

  let debounceTimer = null;
  searchInput.addEventListener('input', function(e) {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      window.__attractionSearchQuery = e.target.value;
      window.renderAttractionsGrid(null);
    }, 200);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAttractionsSearch);
} else {
  initAttractionsSearch();
}
`;

// Replace or append to app.js
if (appContent.includes('// PHASE 4: MAP CANVAS SYNCHRONIZATION')) {
  appContent = appContent.replace(/\/\/ PHASE 4: MAP CANVAS SYNCHRONIZATION[\s\S]*$/, mapAndSearchModule.trim());
} else {
  appContent += "\n\n" + mapAndSearchModule.trim();
}

fs.writeFileSync(appFilePath, appContent, 'utf8');
console.log('[+] Successfully integrated Map Canvas Synchronization and Bilingual Search in app.js');
