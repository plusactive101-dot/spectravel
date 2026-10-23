const fs = require('fs');
const path = require('path');

const appFilePath = path.resolve(__dirname, '../app.js');
let appJsContent = fs.readFileSync(appFilePath, 'utf8');

// 1. Inject Toast & Clipboard Helper if not present
const clipboardHelper = `
// --- Taxi / Didi Bilingual Address Clipboard Utility ---
window.copyTaxiAddress = function(address, nameZh) {
  const textToCopy = (nameZh && address) ? (nameZh + " (" + address + ")") : (address || nameZh || '');
  if (!textToCopy) return;

  navigator.clipboard.writeText(textToCopy).then(() => {
    let toast = document.getElementById('taxi-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'taxi-toast';
      toast.style.position = 'fixed';
      toast.style.bottom = '24px';
      toast.style.right = '24px';
      toast.style.backgroundColor = '#10B981';
      toast.style.color = '#FFFFFF';
      toast.style.padding = '12px 20px';
      toast.style.borderRadius = '8px';
      toast.style.fontSize = '14px';
      toast.style.fontWeight = '600';
      toast.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.3)';
      toast.style.zIndex = '9999';
      toast.style.transition = 'opacity 0.3s ease';
      document.body.appendChild(toast);
    }
    toast.innerHTML = '🚕 Copied for Taxi / Didi: <br><span style="font-weight: 400; font-size: 13px;">' + textToCopy + '</span>';
    toast.style.opacity = '1';
    clearTimeout(window.__toastTimeout);
    window.__toastTimeout = setTimeout(() => {
      toast.style.opacity = '0';
    }, 3500);
  }).catch(err => {
    console.error('Clipboard copy failed:', err);
  });
};
`;

if (!appJsContent.includes('window.copyTaxiAddress')) {
  appJsContent = clipboardHelper + "\n" + appJsContent;
  console.log('[+] Injected window.copyTaxiAddress utility.');
}

// 2. Modernize window.renderAttractionsGrid implementation
const upgradedRenderFunction = `
window.renderAttractionsGrid = function(filterCategory) {
  const container = document.getElementById('attractionsGridContainer') || 
                    document.getElementById('attractions-grid') || 
                    document.getElementById('attractions-container') || 
                    document.querySelector('.attractions-grid');
  
  if (!container) {
    console.warn('[-] Attractions grid container not found in DOM.');
    return;
  }

  const rawAttractions = window.expeditionAttractions || [];
  const activeFilter = filterCategory || 'All';

  const categoryMap = {
    'Guangzhou Panyu': ['panyu'],
    'Chimelong Safari & Circus': ['chimelong'],
    'Canton Heritage': ['canton heritage', 'canton'],
    'Qingyuan Gulong Gorge': ['qingyuan'],
    'Shenzhen Nanshan Tech': ['shenzhen'],
    'Hong Kong Mong Kok & Harbour': ['hong kong', 'hongkong']
  };

  const filtered = rawAttractions.filter(item => {
    if (!activeFilter || activeFilter === 'All' || activeFilter === 'all') return true;
    
    // Region / category exact match
    if (item.region === activeFilter || item.category === activeFilter) return true;

    // Pattern alias matching for base buttons
    const patterns = categoryMap[activeFilter];
    if (patterns) {
      const regLower = (item.region || '').toLowerCase();
      const catLower = (item.category || '').toLowerCase();
      return patterns.some(p => regLower.includes(p) || catLower.includes(p));
    }

    if (activeFilter === 'Nature & Hiking') {
      return item.category === 'Nature & Hiking' || item.category === 'Nature & Parks';
    }
    return item.region === activeFilter || item.category === activeFilter;
  });

  const cardsHtml = filtered.map(item => {
    const nameZhDisplay = item.nameZh ? '<span class="ml-2 text-xs font-medium px-2 py-0.5 rounded bg-gray-800 text-amber-300 border border-amber-900/40">' + item.nameZh + '</span>' : '';
    const regionBadge = item.region ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-900/50 text-blue-300 border border-blue-700/50">' + item.region + '</span>' : '';
    const categoryBadge = item.category ? '<span class="text-xs px-2.5 py-1 rounded-full font-medium bg-emerald-900/40 text-emerald-300 border border-emerald-700/40">' + item.category + '</span>' : '';
    const reviewText = item.review || item.desc || (item.activities ? item.activities.join(' • ') : '');
    const reviewQuote = reviewText ? '<p class="mt-2 text-xs text-gray-300 italic border-l-2 border-amber-500/60 pl-2 line-clamp-2">"' + reviewText + '"</p>' : '';
    const addressDisplay = item.address ? '<div class="mt-2 text-xs text-gray-400 flex items-start gap-1"><span>📍</span><span class="truncate">' + item.address + '</span></div>' : '';
    const websiteBtn = item.website ? '<a href="' + item.website + '" target="_blank" rel="noopener noreferrer" class="px-2.5 py-1 text-xs font-semibold rounded bg-gray-800 hover:bg-gray-700 text-gray-200 border border-gray-600 transition-colors">🌐 Site</a>' : '';
    
    // Taxi copy payload
    const safeAddress = (item.address || '').replace(/'/g, "\\\\'");
    const safeNameZh = (item.nameZh || item.name || '').replace(/'/g, "\\\\'");
    const safeId = (item.id || '').replace(/'/g, "\\\\'");

    return '<div class="attraction-card bg-gray-900/90 border border-gray-800 rounded-xl p-4 flex flex-col justify-between hover:border-amber-500/50 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-200">' +
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
        '<button onclick="window.copyTaxiAddress(\\'' + safeAddress + '\\', \\'' + safeNameZh + '\\')" class="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 transition-colors">' +
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
};
`;

// 3. Ensure filter router connects cleanly
const upgradedFilterFunction = `
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

  if (typeof window.renderAttractionsGrid === 'function') {
    window.renderAttractionsGrid(category);
  }
};
`;

// Replace renderAttractionsGrid and filterAttractionsCards cleanly
const renderRegex = /window\.renderAttractionsGrid\s*=\s*function[\s\S]*?^};/m;
const filterRegex = /window\.filterAttractionsCards\s*=\s*function[\s\S]*?^};/m;

if (renderRegex.test(appJsContent)) {
  appJsContent = appJsContent.replace(renderRegex, upgradedRenderFunction.trim());
  console.log('[+] Replaced existing window.renderAttractionsGrid.');
} else {
  appJsContent += "\n" + upgradedRenderFunction.trim() + "\n";
  console.log('[+] Appended window.renderAttractionsGrid.');
}

if (filterRegex.test(appJsContent)) {
  appJsContent = appJsContent.replace(filterRegex, upgradedFilterFunction.trim());
  console.log('[+] Replaced existing window.filterAttractionsCards.');
} else {
  appJsContent += "\n" + upgradedFilterFunction.trim() + "\n";
  console.log('[+] Appended window.filterAttractionsCards.');
}

fs.writeFileSync(appFilePath, appJsContent, 'utf8');
console.log('[+] Successfully updated app.js with enhanced attractions UI components.');
