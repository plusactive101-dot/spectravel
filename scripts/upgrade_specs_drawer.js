const fs = require('fs');
const path = require('path');

const appFilePath = path.resolve(__dirname, '../app.js');
const indexFilePath = path.resolve(__dirname, '../index.html');

let appContent = fs.readFileSync(appFilePath, 'utf8');
let indexContent = fs.readFileSync(indexFilePath, 'utf8');

// 1. Inject Drawer Modal HTML in index.html if absent
if (!indexContent.includes('id="attraction-detail-drawer"')) {
  const drawerMarkup = `
  <!-- Slide-Over Detail Drawer (Specs Modal) -->
  <div id="attraction-drawer-backdrop" onclick="window.closeAttractionDrawer()" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 transition-opacity duration-300 opacity-0 pointer-events-none"></div>
  <aside id="attraction-detail-drawer" class="fixed top-0 right-0 h-full w-full max-w-md bg-gray-900 border-l border-gray-800 shadow-2xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out flex flex-col justify-between overflow-hidden">
    <div class="p-6 border-b border-gray-800 flex items-center justify-between">
      <div class="flex items-center gap-2">
        <span class="text-xl">📍</span>
        <h2 class="text-lg font-bold text-white tracking-wide">Attraction Specs</h2>
      </div>
      <button onclick="window.closeAttractionDrawer()" class="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-800 transition-colors">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>

    <div id="attraction-drawer-body" class="flex-1 overflow-y-auto p-6 space-y-5 text-gray-300">
      <!-- Injected dynamically via window.openAttractionDrawer -->
    </div>

    <div class="p-4 border-t border-gray-800 bg-gray-950/60 flex items-center justify-between gap-3">
      <button onclick="window.closeAttractionDrawer()" class="w-full py-2.5 px-4 rounded-xl text-sm font-semibold bg-gray-800 hover:bg-gray-700 text-gray-200 transition-colors">
        Close
      </button>
    </div>
  </aside>
  `;

  if (indexContent.includes('</body>')) {
    indexContent = indexContent.replace('</body>', `${drawerMarkup}\n</body>`);
    fs.writeFileSync(indexFilePath, indexContent, 'utf8');
    console.log('[+] Injected #attraction-detail-drawer markup into index.html');
  } else {
    console.warn('[-] Could not find </body> in index.html.');
  }
}

// 2. Inject Drawer Logic into app.js
const drawerLogicModule = `
// ============================================================================
// PHASE 5: SLIDE-OVER DETAIL DRAWER CONTROLLER
// ============================================================================

window.openAttractionDrawer = function(itemId) {
  const attractions = window.expeditionAttractions || [];
  const item = attractions.find(p => p.id === itemId || p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === itemId);
  if (!item) {
    if (typeof window.openAttraction === 'function') {
      window.openAttraction(itemId);
    }
    return;
  }

  const drawer = document.getElementById('attraction-detail-drawer');
  const backdrop = document.getElementById('attraction-drawer-backdrop');
  const body = document.getElementById('attraction-drawer-body');
  if (!drawer || !backdrop || !body) {
    if (typeof window.openAttraction === 'function') {
      window.openAttraction(itemId);
    }
    return;
  }

  const nameZhDisplay = item.nameZh ? '<span class="ml-2 text-sm font-medium px-2.5 py-1 rounded-md bg-gray-800 text-amber-300 border border-amber-900/40">' + item.nameZh + '</span>' : '';
  const regionBadge = item.region ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">' + item.region + '</span>' : '';
  const categoryBadge = item.category ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">' + item.category + '</span>' : '';
  
  const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
  const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");
  
  const lat = item.coordinates && item.coordinates[0] ? item.coordinates[0] : null;
  const lng = item.coordinates && item.coordinates[1] ? item.coordinates[1] : null;
  const navGoogleUrl = (lat && lng) ? ('https://www.google.com/maps/search/?api=1&query=' + lat + ',' + lng) : '#';
  const navAmapUrl = (lat && lng) ? ('https://uri.amap.com/marker?position=' + lng + ',' + lat + '&name=' + encodeURIComponent(item.nameZh || item.name)) : '#';

  const websiteLink = item.website ? ('<div class="pt-2"><a href="' + item.website + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-gray-800 hover:bg-gray-700 text-amber-300 border border-gray-700 transition-colors"><span>🌐</span> Visit Official Portal</a></div>') : '';

  let reviewsHtml = '';
  if (item.reviews && item.reviews.length > 0) {
    reviewsHtml = '<div class="bg-gray-800/40 p-4 rounded-xl border border-gray-800 space-y-2"><div class="text-xs text-rose-400 font-semibold uppercase tracking-wider flex items-center gap-1"><span>📺</span> Video Reviews</div><div class="flex flex-col gap-2">';
    item.reviews.forEach(r => {
      reviewsHtml += '<a href="' + r.url + '" target="_blank" class="inline-flex items-center gap-2 text-xs text-rose-300 hover:text-white hover:underline bg-rose-500/10 px-3 py-2 rounded border border-rose-500/20"><i class="fa-brands fa-youtube text-red-500"></i> ' + r.title + '</a>';
    });
    reviewsHtml += '</div></div>';
  }

  body.innerHTML = '<div>' +
      '<div class="flex items-center gap-2 flex-wrap mb-2">' +
        regionBadge +
        categoryBadge +
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
          '</a>'
        ) : '') +
      '</div>' +
      websiteLink +
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

// Global Escape Key Listener for modal dismissal
window.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    window.closeAttractionDrawer();
  }
});
`;

if (appContent.includes('// PHASE 5: SLIDE-OVER DETAIL DRAWER CONTROLLER')) {
  appContent = appContent.replace(/\/\/ PHASE 5: SLIDE-OVER DETAIL DRAWER CONTROLLER[\s\S]*$/, drawerLogicModule.trim());
} else {
  appContent += "\n\n" + drawerLogicModule.trim();
}

// 3. Update the Card Template in renderAttractionsGrid to wire up 'ℹ️ Specs' to openAttractionDrawer
appContent = appContent.replace(
  /onclick="window\.openAttraction\('\\'' \+ safeId \+ '\\''\)"/g,
  'onclick="event.stopPropagation(); window.openAttractionDrawer(\'\' + safeId + \'\')"'
);

fs.writeFileSync(appFilePath, appContent, 'utf8');
console.log('[+] Successfully wired up Slide-Over Detail Drawer controller and card Specs trigger in app.js.');
