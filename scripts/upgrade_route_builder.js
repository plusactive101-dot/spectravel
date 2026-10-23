const fs = require('fs');
const path = require('path');

const appFilePath = path.resolve(__dirname, '../app.js');
const indexFilePath = path.resolve(__dirname, '../index.html');

let appContent = fs.readFileSync(appFilePath, 'utf8');
let indexContent = fs.readFileSync(indexFilePath, 'utf8');

// 1. Inject Floating Route Pill & Route Drawer Markup into index.html
if (!indexContent.includes('id="staged-route-drawer"')) {
  const routeDrawerMarkup = `
  <!-- Floating Staged Route Pill -->
  <div id="floating-route-pill" onclick="window.toggleRouteDrawer()" class="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 text-gray-950 font-bold shadow-xl shadow-amber-500/25 hover:from-amber-400 hover:to-amber-500 cursor-pointer transition-all duration-200 hover:scale-105 select-none border border-amber-300/40">
    <span class="text-base">🗺️</span>
    <span class="text-xs uppercase tracking-wider font-extrabold">Route Plan</span>
    <span id="staged-route-badge-count" class="flex items-center justify-center w-5 h-5 rounded-full bg-gray-950 text-amber-400 text-xs font-mono font-bold">0</span>
  </div>

  <!-- Staged Route Drawer -->
  <div id="route-drawer-backdrop" onclick="window.closeRouteDrawer()" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 opacity-0 pointer-events-none"></div>
  <aside id="staged-route-drawer" class="fixed top-0 left-0 h-full w-full max-w-md bg-gray-900 border-r border-gray-800 shadow-2xl z-50 transform -translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-hidden">
    <div class="p-5 border-b border-gray-800 flex items-center justify-between bg-gray-950/40">
      <div class="flex items-center gap-2">
        <span class="text-xl">🗺️</span>
        <div>
          <h2 class="text-lg font-bold text-white tracking-wide">Custom Route Plan</h2>
          <p class="text-xs text-gray-400">Sequential stops plotted live on map</p>
        </div>
      </div>
      <button onclick="window.closeRouteDrawer()" class="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div id="staged-route-items" class="flex-1 overflow-y-auto p-5 space-y-3 text-gray-300">
      <!-- Injected dynamically via window.renderStagedRouteDrawer -->
    </div>

    <div class="p-4 border-t border-gray-800 bg-gray-950/70 space-y-2">
      <div class="flex items-center gap-2">
        <button onclick="window.copyStagedRouteSummary()" class="flex-1 py-2.5 px-3 rounded-xl text-xs font-semibold bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 transition-colors flex items-center justify-center gap-1.5">
          <span>📋</span> Copy Day Itinerary
        </button>
        <button onclick="window.clearStagedRoute()" class="py-2.5 px-3 rounded-xl text-xs font-semibold bg-red-950/40 hover:bg-red-900/50 text-red-300 border border-red-900/50 transition-colors">
          Clear All
        </button>
      </div>
      <button onclick="window.closeRouteDrawer()" class="w-full py-2 rounded-lg text-xs font-medium text-gray-400 hover:text-gray-200 transition-colors">
        Close Drawer
      </button>
    </div>
  </aside>
  `;

  if (indexContent.includes('</body>')) {
    indexContent = indexContent.replace('</body>', `${routeDrawerMarkup}\n</body>`);
    fs.writeFileSync(indexFilePath, indexContent, 'utf8');
    console.log('[+] Injected #staged-route-drawer and #floating-route-pill into index.html');
  } else {
    console.warn('[-] Could not find </body> in index.html.');
  }
}

// 2. Inject Phase 6 State Engine & Polyline Controller into app.js
const routeBuilderModule = `
// ============================================================================
// PHASE 6: TRIP STAGING DRAWER & ROUTE POLYLINE BUILDER
// ============================================================================

window.__stagedAttractions = (function() {
  try {
    return JSON.parse(localStorage.getItem('mktravel_staged_route') || '[]');
  } catch (e) {
    return [];
  }
})();

window.__routePolylineLayer = null;
window.__routeWaypointGroup = null;

// Toggle attraction in custom staged route
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

// Update all UI elements related to route state
window.updateRouteUI = function() {
  const count = window.__stagedAttractions.length;
  const badge = document.getElementById('staged-route-badge-count');
  if (badge) badge.textContent = count;

  // Update card buttons
  document.querySelectorAll('.route-stage-btn').forEach(btn => {
    const btnId = btn.getAttribute('data-poi-id');
    if (window.__stagedAttractions.includes(btnId)) {
      btn.innerHTML = '<span>✓</span> Staged';
      btn.className = 'route-stage-btn flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-500 text-gray-950 border border-amber-400 transition-colors';
    } else {
      btn.innerHTML = '<span>+</span> Route';
      btn.className = 'route-stage-btn flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 hover:border-amber-500/50 transition-colors';
    }
  });

  window.renderStagedRouteDrawer();
  window.updateRoutePolyline();
};

// Render staged attractions in the side drawer
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
        '<p class="text-xs text-gray-500 mt-1">Click \\"+ Route\\" on any attraction card to plot your custom journey.</p>' +
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
          '<span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber-500 text-gray-950 text-xs font-bold font-mono">' +
            sequence +
          '</span>' +
          '<div>' +
            '<div class="text-sm font-bold text-white flex items-center flex-wrap">' +
              item.name + ' ' + nameZhDisplay +
            '</div>' +
            '<div class="text-xs text-gray-400 truncate max-w-[200px] mt-0.5">' + (item.address || item.region || '') + '</div>' +
            '<div class="flex items-center gap-2 mt-2">' +
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

// Update Leaflet Route Polyline & Sequential Markers
window.updateRoutePolyline = function() {
  if (typeof L === 'undefined') return;
  const map = window.map || window.leafletMap || window.mymap || (window.mapInstance ? window.mapInstance : null);
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

  navigator.clipboard.writeText(itineraryText).then(() => {
    alert("Day itinerary copied to clipboard!");
  }).catch(err => {
    console.error("Clipboard copy error:", err);
  });
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
`;

if (appContent.includes('// PHASE 6: TRIP STAGING DRAWER & ROUTE POLYLINE BUILDER')) {
  appContent = appContent.replace(/\/\/ PHASE 6: TRIP STAGING DRAWER & ROUTE POLYLINE BUILDER[\s\S]*$/, routeBuilderModule.trim());
} else {
  appContent += "\n\n" + routeBuilderModule.trim();
}

// 3. Inject '+ Route' button alongside Specs button in renderAttractionsGrid
const specsButtonRegex = /<button onclick="window\.openAttraction\('\\'' \+ safeId \+ '\\''\)" class="px-3 py-1\.5 rounded-lg text-xs font-medium bg-cyan-500\/20 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500\/40 transition-colors"><span>ℹ️<\/span> Specs<\/button>/g;

const upgradedCardActionHtml = '<div class="flex items-center gap-1.5">' +
  '<button onclick="event.stopPropagation(); window.toggleStageAttraction(\\\'\'' + ' + safeId + ' + '\'\\\')" data-poi-id="\' + safeId + \'" class="route-stage-btn flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 hover:border-amber-500/50 transition-colors"><span>+</span> Route</button>' +
  '<button onclick="event.stopPropagation(); window.openAttractionDrawer(\\\'\'' + ' + safeId + ' + '\'\\\')" class="flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-medium bg-cyan-500/20 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 border border-cyan-500/40 transition-colors"><span>ℹ️</span> Specs</button>' +
'</div>';

if (specsButtonRegex.test(appContent)) {
  appContent = appContent.replace(specsButtonRegex, upgradedCardActionHtml);
  console.log('[+] Replaced Specs button with Route + Specs button group in card template.');
} else {
  console.log('[-] specsButtonRegex did not match; inspecting button presence.');
}

// 4. Hook updateRouteUI into initial page boot
if (!appContent.includes("window.updateRouteUI();")) {
  appContent += "\n\nif (typeof window.updateRouteUI === 'function') { setTimeout(window.updateRouteUI, 400); }\n";
}

fs.writeFileSync(appFilePath, appContent, 'utf8');
console.log('[+] Successfully integrated Phase 6 Trip Staging & Route Polyline Builder into app.js.');
