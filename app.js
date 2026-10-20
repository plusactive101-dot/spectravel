// =============================================================
// MKTRAVEL - China 2026 Greater Bay Area Expedition
// Interactive Roadmap, 14-Day Timeline, Booked Hotels & Dining
// =============================================================

// --- 1. EXPEDITION STATE ---
let isLightMode = false;
let activeChinaView = 'flowchart';
let activeChinaDayFilter = 'all';
let activeDiningFilter = 'all';
let activeMindmapFilter = 'all';
let chinaDaysCompleted = JSON.parse(localStorage.getItem('mktravel_china_completed') || localStorage.getItem('spectravel_china_completed') || '{}');
let chinaBudgetCurrency = 'SGD';

const currencyRates = {
  SGD: { rate: 1.0, symbol: '$', code: 'SGD' },
  RMB: { rate: 5.35, symbol: '¥', code: 'RMB' },
  USD: { rate: 0.76, symbol: '$', code: 'USD' }
};

// --- 2. THEME SWITCHER ---
function toggleTheme() {
  isLightMode = !isLightMode;
  const html = document.documentElement;
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  const text = document.getElementById('themeText');

  if (isLightMode) {
    html.classList.remove('dark');
    html.classList.add('light');
    body.classList.remove('mesh-gradient-dark');
    body.classList.add('mesh-gradient-light');
    if (icon) icon.className = 'fa-solid fa-moon text-indigo-400';
    if (text) text.textContent = 'Aurora Dark';
  } else {
    html.classList.remove('light');
    html.classList.add('dark');
    body.classList.remove('mesh-gradient-light');
    body.classList.add('mesh-gradient-dark');
    if (icon) icon.className = 'fa-solid fa-sun text-yellow-400';
    if (text) text.textContent = 'Daylight';
  }
}

// Backward-compat portal switch
function switchPortal(portalName) {
  // Purely redirect to China Expedition
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 6. CHINA 2026 EXPEDITION ENGINE ---
function getHotelRoomsCount(hotelId) {
  return getHotelPhotosCount(hotelId);
}

function switchChinaView(viewName, shouldScroll = false) {
  // Normalize alias
  const normalized = (viewName === 'food' || viewName === 'restaurant' || viewName === 'restaurants') ? 'dining' : viewName;
  activeChinaView = normalized;
  
  // Update view panels
  document.querySelectorAll('.china-view-panel').forEach(p => p.classList.add('hidden'));
  const targetView = document.getElementById('view-' + normalized) || document.querySelector(`[data-view="${normalized}"]`);
  if (targetView) targetView.classList.remove('hidden');

  // Update sub-view tabs
  document.querySelectorAll('.china-nav-tab').forEach(b => {
    b.classList.remove('active-tab');
    b.classList.add('text-slate-300');
  });
  const targetBtn = document.getElementById('btn-china-' + normalized);
  if (targetBtn) {
    targetBtn.classList.add('active-tab');
    targetBtn.classList.remove('text-slate-300');
  }

  // Update header nav tabs
  document.querySelectorAll('.header-nav-tab').forEach(b => {
    b.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-purple-600', 'text-white', 'shadow-md');
    b.classList.add('bg-white/10', 'text-slate-300');
  });
  const headerBtn = document.getElementById('header-btn-' + normalized);
  if (headerBtn) {
    headerBtn.classList.remove('bg-white/10', 'text-slate-300');
    headerBtn.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-purple-600', 'text-white', 'shadow-md');
  }

  // Sync URL hash
  if (window.location.hash !== '#' + normalized) {
    history.replaceState(null, null, '#' + normalized);
  }

  // If opening the regional map view, initialize/resize map
  if (normalized === 'mindmap') {
    setTimeout(() => {
      initRegionalMap();
    }, 100);
  }

  // Smooth scroll to view if requested
  if (shouldScroll) {
    setTimeout(() => {
      const explicitAnchor = document.getElementById(normalized);
      if (explicitAnchor) {
        explicitAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (targetView) {
        targetView.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const navAnchor = document.getElementById('chinaViewNav');
        if (navAnchor) navAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 50);
  }
}

// Slide-out Drawer (Zero-Bug DOM Style Manipulation)
function openDrawer(nodeKey) {
  const node = (typeof nodeDetails !== 'undefined') ? nodeDetails[nodeKey] : null;
  if (!node) {
    console.warn('Node key not found:', nodeKey);
    return;
  }

  const drawer = document.getElementById('inspectorDrawer');
  const panel = document.getElementById('drawerPanel');
  const badge = document.getElementById('drawerBadge');
  const date = document.getElementById('drawerDate');
  const body = document.getElementById('drawerBody');

  if (badge) badge.textContent = node.badge;
  if (date) date.textContent = node.date;

  if (body) {
    body.innerHTML = `
      <div class="space-y-5">
        <div class="relative rounded-2xl overflow-hidden border border-white/15">
          <img src="${node.heroImage}" onerror="this.src='media/hotels/hotel_1_mehood_panyu_photo.jpg'" class="w-full h-52 object-cover" alt="${node.title}">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          <div class="absolute bottom-4 left-4 right-4 flex items-end justify-between">
            <h3 class="text-xl font-black text-white">${node.title}</h3>
            ${node.hotelRoomId ? `<span class="text-[10px] mono bg-black/60 text-slate-300 px-2 py-0.5 rounded border border-white/10 shrink-0">Exterior</span>` : ''}
          </div>
        </div>

        ${node.hotelRoomId ? `
          <button onclick="openHotelRoomModal('${node.hotelRoomId}')" class="w-full py-3 px-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold mono text-xs shadow-lg shadow-orange-500/25 transition flex items-center justify-center gap-2.5">
            <i class="fa-solid fa-bed text-sm"></i>
            <span>Browse Room Selection (${getHotelRoomsCount(node.hotelRoomId)} Photos)</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-xs ml-1"></i>
          </button>
        ` : ''}

        ${node.sections.map(sec => `
          <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
            <h4 class="text-xs font-black text-cyan-400 mono uppercase tracking-wider">${sec.title}</h4>
            <ul class="text-xs space-y-2 text-slate-300">
              ${sec.items.map(it => `<li class="flex items-start gap-2.5"><i class="fa-solid fa-angle-right text-cyan-400 mt-1 shrink-0"></i><span>${it}</span></li>`).join('')}
            </ul>
          </div>
        `).join('')}

        ${node.tips ? `
          <div class="p-4 rounded-2xl bg-amber-500/15 border border-amber-500/30 text-xs text-amber-300 space-y-1.5">
            <span class="font-bold flex items-center gap-2"><i class="fa-solid fa-lightbulb"></i> Travel Pro Tip</span>
            <p class="text-slate-300 leading-relaxed">${node.tips}</p>
          </div>
        ` : ''}
      </div>
    `;
  }

  drawer.style.display = 'block';
  requestAnimationFrame(() => {
    drawer.style.opacity = '1';
    drawer.style.pointerEvents = 'auto';
    panel.style.transform = 'translateX(0)';
  });
  document.body.style.overflow = 'hidden';
}

function closeDrawer() {
  const drawer = document.getElementById('inspectorDrawer');
  const panel = document.getElementById('drawerPanel');
  if (!drawer || !panel) return;

  panel.style.transform = 'translateX(100%)';
  drawer.style.opacity = '0';
  drawer.style.pointerEvents = 'none';

  setTimeout(() => {
    drawer.style.display = 'none';
  }, 300);
  document.body.style.overflow = '';
}

// 14-Day Schedule with Interactive Checklist & Progress
function renderDailySchedule(filterCity = 'all') {
  activeChinaDayFilter = filterCity;
  const container = document.getElementById('dailyScheduleList');
  if (!container || typeof itinerarySchedule === 'undefined') return;

  const filtered = filterCity === 'all'
    ? itinerarySchedule
    : itinerarySchedule.filter(item => item.city === filterCity);

  container.innerHTML = filtered.map(item => {
    const isCompleted = !!chinaDaysCompleted[item.day];
    return `
      <div class="glass-card rounded-3xl p-6 border transition ${isCompleted ? 'border-emerald-500/50 bg-emerald-950/15 ring-1 ring-emerald-500/30' : 'border-white/10'} space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div class="flex items-center gap-3.5">
            <span class="w-11 h-11 rounded-2xl ${item.badgeColor} flex items-center justify-center font-black text-white mono text-sm shrink-0 shadow-lg">
              D${item.day}
            </span>
            <div>
              <h3 class="text-lg font-black text-white flex items-center gap-2">
                <span>Day ${item.day}: ${item.region}</span>
              </h3>
              <span class="text-xs text-slate-400 mono font-bold">${item.weekday}, ${item.date}</span>
            </div>
          </div>
          
          <div class="flex items-center gap-3 self-start sm:self-auto">
            <div class="text-xs text-slate-200 mono bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/15 font-semibold">
              <i class="fa-solid fa-bed text-teal-400 mr-1.5"></i> ${item.hotel}
            </div>
            <button onclick="toggleChinaDay(${item.day})" class="px-3 py-1.5 rounded-xl text-xs mono font-bold transition flex items-center gap-1.5 ${isCompleted ? 'bg-emerald-500 text-slate-950' : 'bg-white/10 hover:bg-white/20 text-slate-300 border border-white/10'}">
              <i class="fa-solid ${isCompleted ? 'fa-check' : 'fa-circle-check'}"></i>
              <span>${isCompleted ? 'Visited' : 'Check Off'}</span>
            </button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
            <div class="text-cyan-400 font-bold mono uppercase flex items-center gap-1.5">
              <i class="fa-solid fa-location-dot"></i> Activities & Highlights
            </div>
            <ul class="space-y-1.5 text-slate-300">
              ${item.activities.map(act => `<li class="flex items-start gap-2"><i class="fa-solid fa-angle-right text-cyan-400 mt-1 shrink-0"></i><span>${act}</span></li>`).join('')}
            </ul>
          </div>

          <div class="space-y-3">
            <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
              <div class="text-orange-400 font-bold mono uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-train-subway"></i> Transport Logistics
              </div>
              <p class="text-slate-300 leading-relaxed">${item.transport}</p>
            </div>

            <div class="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-1.5">
              <div class="text-amber-400 font-bold mono uppercase flex items-center gap-1.5">
                <i class="fa-solid fa-bowl-food"></i> Curated Food Tip
              </div>
              <p class="text-slate-300 leading-relaxed">${item.foodTip}</p>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  updateChinaProgress();
}

function filterChinaDays(city) {
  document.querySelectorAll('.day-filter-btn').forEach(btn => {
    if (btn.dataset.city === city) {
      btn.className = "day-filter-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold shadow-md";
    } else {
      btn.className = "day-filter-btn px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 border border-white/10 hover:bg-white/15";
    }
  });
  renderDailySchedule(city);
}

function toggleChinaDay(day) {
  if (chinaDaysCompleted[day]) {
    delete chinaDaysCompleted[day];
    showToast(`Day ${day} unmarked.`);
  } else {
    chinaDaysCompleted[day] = true;
    showToast(`Day ${day} marked as completed!`);
  }
  localStorage.setItem('mktravel_china_completed', JSON.stringify(chinaDaysCompleted));
  renderDailySchedule(activeChinaDayFilter);
}

function updateChinaProgress() {
  const totalDays = 14;
  const completedCount = Object.keys(chinaDaysCompleted).length;
  const pct = Math.round((completedCount / totalDays) * 100);

  const bar = document.getElementById('chinaProgressBar');
  const txt = document.getElementById('chinaProgressText');
  if (bar) bar.style.width = `${pct}%`;
  if (txt) txt.textContent = `${completedCount} of ${totalDays} Days Explored (${pct}%)`;
}

// Dining Radar
function loadRestaurants() {
  const stored = localStorage.getItem('mktravel_restaurants') || localStorage.getItem('spectravel_restaurants');
  const defaults = typeof defaultRestaurants !== 'undefined' ? defaultRestaurants : [];
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (Array.isArray(parsed) && parsed.length > 0) {
        const defaultsMap = new Map(defaults.map(d => [d.id, d]));
        const merged = parsed.map(item => {
          const defaultItem = defaultsMap.get(item.id);
          if (defaultItem) {
            return {
              ...item,
              name: defaultItem.name || item.name,
              address: defaultItem.address || item.address,
              cuisine: defaultItem.cuisine || item.cuisine,
              dishes: defaultItem.dishes || item.dishes,
              notes: defaultItem.notes || item.notes,
              coverImage: defaultItem.coverImage || item.coverImage,
              highlights: defaultItem.highlights || item.highlights,
              gallery: defaultItem.gallery || item.gallery,
              menu: defaultItem.menu || item.menu,
              mediaCards: defaultItem.mediaCards || item.mediaCards,
              visualTags: defaultItem.visualTags || item.visualTags,
              schedule: defaultItem.schedule || item.schedule
            };
          }
          return item;
        });

        const existingIds = new Set(merged.map(p => p.id));
        defaults.forEach(d => {
          if (!existingIds.has(d.id)) {
            merged.push(d);
          }
        });
        return merged;
      }
    } catch (e) {
      return defaults;
    }
  }
  return defaults;
}

function saveRestaurants(arr) {
  localStorage.setItem('mktravel_restaurants', JSON.stringify(arr));
}

function renderRestaurants(cityFilter = 'all') {
  activeDiningFilter = cityFilter;
  const container = document.getElementById('diningGrid');
  if (!container) return;

  const list = loadRestaurants();
  const filtered = cityFilter === 'all'
    ? list
    : list.filter(r => r.city.toLowerCase() === cityFilter.toLowerCase());

  container.innerHTML = filtered.map(r => {
    // Derive top 3 highlights
    let topChips = [];
    if (Array.isArray(r.highlights) && r.highlights.length > 0) {
      topChips = r.highlights.slice(0, 3);
    } else if (Array.isArray(r.menu) && r.menu.length > 0) {
      topChips = r.menu.slice(0, 3).map(m => m.nameEn || m.nameZh);
    } else if (typeof r.dishes === 'string') {
      topChips = r.dishes.split(',').map(s => s.trim().replace(/^\d+\.\s*/, '').split('(')[0].trim()).filter(Boolean).slice(0, 3);
    }
    if (topChips.length === 0) {
      topChips = ['Specialty Dim Sum', 'Cantonese Roast', 'Signature Delicacy'];
    }

    // Cover image fallback
    const cover = r.coverImage || (r.gallery && r.gallery[0] ? r.gallery[0].image : 'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80');

    return `
      <div class="glass-card glow-gold rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:border-yellow-500/40 transition duration-300 shadow-xl bg-slate-900/60 backdrop-blur-md">
        <!-- Top Cover Banner Image -->
        <div class="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-950 cursor-pointer" onclick="openDiningPhotoModal('${r.id}')">
          <img src="${cover}" alt="${r.name}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80';" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
          
          <!-- Badges on Cover -->
          <div class="absolute top-3 left-3 flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-black/60 backdrop-blur-md text-yellow-300 border border-yellow-500/40 mono uppercase">${r.city}</span>
            <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-black/60 backdrop-blur-md text-amber-400 mono">${r.price || '$$'}</span>
          </div>

          <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between">
            <span class="text-[11px] font-bold text-cyan-300 drop-shadow flex items-center gap-1.5 line-clamp-1">
              <i class="fa-solid fa-utensils text-yellow-400"></i> ${r.cuisine}
            </span>
            ${(r.menu && r.menu.length > 0) ? `
              <span class="px-2 py-0.5 rounded-md bg-yellow-500/20 backdrop-blur-md text-[10px] font-bold text-yellow-300 border border-yellow-500/30 mono">
                ${r.menu.length} Dishes
              </span>
            ` : ''}
          </div>
        </div>

        <!-- Card Body -->
        <div class="p-5 flex-1 flex flex-col justify-between space-y-4">
          <div class="space-y-3">
            <h3 class="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition line-clamp-2 cursor-pointer" onclick="openDiningPhotoModal('${r.id}')">
              ${r.name}
            </h3>

            <!-- Address & Recommended Hours -->
            <div class="text-xs text-slate-300 space-y-1.5 mono">
              ${r.schedule ? `
                <div class="text-amber-300 font-bold flex items-center gap-1.5 text-[11px]">
                  <i class="fa-regular fa-clock text-yellow-400 shrink-0"></i>
                  <span class="line-clamp-1">${r.schedule}</span>
                </div>
              ` : ''}
              ${r.address ? `
                <div class="text-slate-400 flex items-start gap-1.5 text-[11px]">
                  <i class="fa-solid fa-location-dot mt-0.5 text-yellow-400 shrink-0"></i>
                  <span class="line-clamp-1">${r.address}</span>
                </div>
              ` : ''}
            </div>

            <!-- Top 3 Highlights Badges -->
            <div class="pt-1">
              <div class="text-[10px] font-bold uppercase tracking-wider text-slate-400 mono mb-1.5 flex items-center gap-1">
                <i class="fa-solid fa-fire text-amber-400"></i> Must-Try Highlights:
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${topChips.map(chip => `
                  <span class="px-2.5 py-1 rounded-xl text-[11px] font-bold bg-white/5 border border-white/10 text-amber-200 line-clamp-1 hover:border-yellow-500/40 transition">
                    ${chip}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="pt-3 border-t border-white/10 space-y-2">
            <button onclick="openDiningPhotoModal('${r.id}')" class="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs mono flex items-center justify-center gap-2 transition shadow-md hover:shadow-amber-500/20">
              <i class="fa-solid fa-book-open"></i> View Full Menu & Interior Photos
            </button>
            <div class="flex items-center justify-between text-xs mono pt-1">
              <button onclick="copyToClipboard('${r.name} ${r.address || ''}')" class="text-slate-400 hover:text-white flex items-center gap-1.5 transition text-[11px] font-bold">
                <i class="fa-regular fa-copy"></i> Copy Details
              </button>
              <span class="text-emerald-400 font-bold text-[10px] flex items-center gap-1">
                <i class="fa-solid fa-check"></i> Verified Spot
              </span>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

let activeGalleryType = 'all';

function setGalleryFilter(type) {
  activeGalleryType = type;
  document.querySelectorAll('.gallery-tab-btn').forEach(btn => {
    if (btn.dataset.type === type) {
      btn.className = "gallery-tab-btn px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-xs transition";
    } else {
      btn.className = "gallery-tab-btn px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs transition";
    }
  });

  document.querySelectorAll('.gallery-item-card').forEach(item => {
    if (type === 'all' || item.dataset.type === type) {
      item.classList.remove('hidden');
    } else {
      item.classList.add('hidden');
    }
  });
}

function openDiningPhotoModal(restaurantId) {
  const list = loadRestaurants();
  const rest = list.find(r => r.id === restaurantId);
  if (!rest) return;

  const modal = document.getElementById('diningPhotoModal');
  const container = document.getElementById('diningPhotoModalContent');
  if (!modal || !container) return;

  // Lock body scrolling
  document.body.classList.add('overflow-hidden');

  const gallery = rest.gallery || rest.mediaCards || [];
  const menu = rest.menu || [];
  const visualTags = rest.visualTags || [];

  container.innerHTML = `
    <!-- Modal Header -->
    <div class="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between bg-slate-950/80 sticky top-0 z-20 backdrop-blur-md">
      <div>
        <div class="flex flex-wrap items-center gap-2 mb-1">
          <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 mono uppercase">${rest.city}</span>
          <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-white/10 text-amber-400 mono">${rest.price || '$$'}</span>
          <span class="text-xs font-bold text-cyan-300">${rest.cuisine}</span>
        </div>
        <h2 class="text-xl sm:text-2xl font-black text-white">${rest.name}</h2>
        ${rest.schedule ? `
          <div class="text-xs text-amber-300 mt-1 flex items-center gap-1.5 mono font-bold">
            <i class="fa-regular fa-clock"></i> Recommended Time: ${rest.schedule}
          </div>
        ` : ''}
      </div>
      <button onclick="closeDiningPhotoModal()" class="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center text-xl transition shrink-0 ml-3">
        ✕
      </button>
    </div>

    <!-- Modal Scrollable Body -->
    <div class="p-5 sm:p-7 overflow-y-auto space-y-8 max-h-[78vh]">
      <!-- Visual Tags -->
      ${visualTags.length > 0 ? `
        <div class="flex flex-wrap gap-2">
          ${visualTags.map(tag => `<span class="px-3 py-1 rounded-xl text-xs font-bold bg-amber-500/10 border border-amber-500/30 text-amber-300 mono">${tag}</span>`).join('')}
        </div>
      ` : ''}

      <!-- SECTION A: AMBIENCE & ARCHITECTURE GALLERY -->
      <div class="space-y-4">
        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-white/10 pb-3">
          <div>
            <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <i class="fa-solid fa-camera-retro text-amber-400"></i> Ambience & Architecture Gallery
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">Explore classical courtyard architecture, Manchu stained-glass windows, and dining halls.</p>
          </div>
          <div class="flex items-center gap-2 text-xs mono">
            <button onclick="setGalleryFilter('all')" data-type="all" class="gallery-tab-btn px-3 py-1 rounded-xl bg-amber-500 text-slate-950 font-black text-xs transition">All Views</button>
            <button onclick="setGalleryFilter('exterior')" data-type="exterior" class="gallery-tab-btn px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs transition">Exterior Facade</button>
            <button onclick="setGalleryFilter('interior')" data-type="interior" class="gallery-tab-btn px-3 py-1 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 text-xs transition">Interior Courtyard</button>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4" id="galleryGrid">
          ${gallery.map((g, idx) => `
            <div data-type="${g.type || 'interior'}" class="gallery-item-card bg-white/5 border border-white/10 rounded-2xl overflow-hidden group hover:border-yellow-500/40 transition">
              <div class="h-52 relative overflow-hidden bg-slate-950 flex items-center justify-center cursor-pointer" onclick="openDishZoomModal('${g.image || ''}', '${g.title}', 'Architecture & Ambience', '${g.desc || ''}')">
                ${g.image ? `
                  <img src="${g.image}" alt="${g.title}" onerror="this.onerror=null; this.parentElement.innerHTML='<div class=\'w-full h-full p-6 flex flex-col items-center justify-center text-center bg-slate-900 border border-white/5\'><i class=\'fa-solid fa-image text-4xl text-amber-400/60 mb-2\'></i><span class=\'text-xs font-bold text-slate-400\'>Photo Reference</span><span class=\'text-sm font-black text-white mt-1\'>${g.title}</span></div>';" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                ` : `
                  <div class="w-full h-full p-6 flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 to-amber-950/40">
                    <i class="fa-solid fa-utensils text-4xl text-amber-400/60 mb-2"></i>
                    <span class="text-xs font-bold text-slate-400 mono">Asset Reference</span>
                    <span class="text-sm font-black text-white mt-1">${g.title}</span>
                  </div>
                `}
                <div class="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-bold text-amber-300 mono uppercase border border-amber-500/30">
                  ${g.type === 'exterior' ? 'Exterior Facade' : 'Interior Courtyard'}
                </div>
                <div class="absolute bottom-2.5 right-2.5 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] text-white mono font-bold">
                  <i class="fa-solid fa-magnifying-glass-plus"></i> Zoom
                </div>
              </div>
              <div class="p-4 bg-slate-900/80 space-y-1">
                <h4 class="text-sm font-black text-white">${g.title}</h4>
                <p class="text-xs text-slate-300 leading-relaxed">${g.desc || ''}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- SECTION B: COMPLETE DISH MENU & PHOTO SHOWCASE -->
      <div class="space-y-4">
        <div class="border-b border-white/10 pb-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h3 class="text-base sm:text-lg font-black text-white flex items-center gap-2">
              <i class="fa-solid fa-bowl-food text-yellow-400"></i> Complete Dish Menu & Flavor Showcase
            </h3>
            <p class="text-xs text-slate-400 mt-0.5">Click any dish photo to zoom in on authentic texture & plating presentation.</p>
          </div>
          ${menu.length > 0 ? `
            <span class="px-3 py-1 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold w-fit">
              ${menu.length} Curated Specialties
            </span>
          ` : ''}
        </div>

        ${menu.length > 0 ? `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            ${menu.map((dish, idx) => `
              <div class="bg-white/5 border border-white/10 hover:border-amber-500/40 rounded-2xl p-4 flex gap-4 items-start transition duration-200 group bg-slate-900/60">
                <!-- Dish Thumbnail -->
                <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden bg-slate-950 shrink-0 cursor-pointer border border-white/10 group-hover:border-amber-500/50" onclick="openDishZoomModal('${dish.image}', '${dish.nameZh} (${dish.nameEn})', '${dish.category}', '${dish.desc}')">
                  <img src="${dish.image}" alt="${dish.nameZh}" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80';" class="w-full h-full object-cover group-hover:scale-110 transition duration-500">
                  <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition"></div>
                  <div class="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 backdrop-blur text-[9px] text-white mono font-bold">
                    #0${idx + 1}
                  </div>
                </div>

                <!-- Dish Info -->
                <div class="flex-1 space-y-1.5 min-w-0">
                  <div class="flex items-center justify-between gap-2">
                    <span class="px-2 py-0.5 rounded-md text-[10px] font-black uppercase mono bg-amber-500/20 text-amber-300 border border-amber-500/30 shrink-0">
                      ${dish.category || 'Specialty'}
                    </span>
                    <button onclick="openDishZoomModal('${dish.image}', '${dish.nameZh} (${dish.nameEn})', '${dish.category}', '${dish.desc}')" class="text-slate-400 hover:text-amber-300 text-[10px] mono flex items-center gap-1 transition">
                      <i class="fa-solid fa-expand"></i> Zoom
                    </button>
                  </div>
                  <h4 class="text-sm font-black text-white group-hover:text-amber-300 transition line-clamp-1">
                    ${dish.nameZh}
                  </h4>
                  <div class="text-xs font-bold text-slate-300 line-clamp-1">
                    ${dish.nameEn}
                  </div>
                  <p class="text-[11px] text-slate-400 leading-relaxed line-clamp-2 pt-0.5">
                    ${dish.desc}
                  </p>
                </div>
              </div>
            `).join('')}
          </div>
        ` : `
          <!-- Fallback when menu array is simple string -->
          <div class="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2">
            <h4 class="text-xs font-black uppercase mono text-yellow-400 tracking-wider">Must-Try Specialties</h4>
            <div class="text-xs text-slate-300 leading-relaxed font-mono">
              ${rest.dishes || 'Specialty Chef Selection'}
            </div>
          </div>
        `}
      </div>

      <!-- Notes & Logistics -->
      ${(rest.notes || rest.address) ? `
        <div class="bg-white/5 border border-white/10 rounded-2xl p-5 space-y-2 text-xs">
          ${rest.notes ? `<div class="text-slate-300 leading-relaxed"><strong class="text-amber-300 mono">Insider Guide:</strong> ${rest.notes}</div>` : ''}
          ${rest.address ? `<div class="text-slate-400 flex items-center gap-2 pt-2 border-t border-white/10"><i class="fa-solid fa-location-dot text-amber-400"></i> <span>${rest.address}</span></div>` : ''}
        </div>
      ` : ''}
    </div>

    <!-- Modal Footer -->
    <div class="p-4 sm:p-5 border-t border-white/10 bg-slate-950/90 flex items-center justify-between sticky bottom-0 z-20 backdrop-blur-md">
      <button onclick="copyToClipboard('${rest.name} ${rest.address || ''}')" class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white text-xs font-bold transition flex items-center gap-2 mono">
        <i class="fa-regular fa-copy"></i> Copy Address
      </button>
      <button onclick="closeDiningPhotoModal()" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs transition shadow-md">
        Done
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
}

function closeDiningPhotoModal() {
  const modal = document.getElementById('diningPhotoModal');
  if (modal) modal.classList.add('hidden');
  document.body.classList.remove('overflow-hidden');
}

function openDishZoomModal(imageSrc, title, category, desc) {
  const modal = document.getElementById('dishZoomModal');
  const img = document.getElementById('dishZoomImg');
  const titleEl = document.getElementById('dishZoomTitle');
  const catEl = document.getElementById('dishZoomCategory');
  const descEl = document.getElementById('dishZoomDesc');
  if (!modal || !img) return;

  img.src = imageSrc || 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80';
  img.onerror = () => { img.src = 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80'; };
  if (titleEl) titleEl.textContent = title || 'Dish Preview';
  if (catEl) catEl.textContent = category || 'Dim Sum';
  if (descEl) descEl.textContent = desc || '';

  modal.classList.remove('hidden');
}

function closeDishZoomModal() {
  const modal = document.getElementById('dishZoomModal');
  if (modal) modal.classList.add('hidden');
}

function filterRestaurants(city) {
  document.querySelectorAll('.dining-filter-btn').forEach(btn => {
    if (btn.dataset.city.toLowerCase() === city.toLowerCase()) {
      btn.className = "dining-filter-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-slate-950 font-black shadow-md";
    } else {
      btn.className = "dining-filter-btn px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 border border-white/10 hover:bg-white/15";
    }
  });
  renderRestaurants(city);
}

function openAddRestaurantModal() {
  const modal = document.getElementById('addRestaurantModal');
  if (modal) modal.classList.remove('hidden');
}

function closeAddRestaurantModal() {
  const modal = document.getElementById('addRestaurantModal');
  if (modal) modal.classList.add('hidden');
  const form = document.getElementById('addRestaurantForm');
  if (form) form.reset();
}

function handleSaveRestaurant(e) {
  e.preventDefault();
  const newRest = {
    id: 'rest-' + Date.now(),
    name: document.getElementById('restName').value,
    city: document.getElementById('restCity').value,
    cuisine: document.getElementById('restCuisine').value,
    dishes: document.getElementById('restDishes').value,
    address: document.getElementById('restAddress').value,
    price: document.getElementById('restPrice').value,
    notes: document.getElementById('restNotes').value
  };

  const list = loadRestaurants();
  list.unshift(newRest);
  saveRestaurants(list);
  renderRestaurants(activeDiningFilter);
  closeAddRestaurantModal();
  showToast('Restaurant spot saved successfully!');
}

function resetRestaurants() {
  if (confirm('Reset restaurant recommendations to defaults?')) {
    saveRestaurants(typeof defaultRestaurants !== 'undefined' ? defaultRestaurants : []);
    renderRestaurants('all');
    showToast('Reset to default curated spots.');
  }
}

// --- 7. REGIONAL AREA MAP ENGINE (Interactive GBA Map) ---
let regionalMapInstance = null;
let regionalMarkers = {};
let activeRegionFilter = 'all';

const regionalLocations = [
  {
    id: "loc-can-airport",
    region: "canton",
    title: "Guangzhou Baiyun Airport (CAN)",
    titleZh: "广州白云国际机场 (T1/T2)",
    category: "Aviation & Ingress",
    coords: [23.3924, 113.2988],
    color: "#06b6d4",
    icon: "fa-plane-arrival",
    nodeKey: "node-flight-outbound",
    description: "Cathay CX982 arrival point from SIN via HKG. Smooth Didi pickup to Panyu south.",
    badge: "Day 1 • 08:55 AM Ingress"
  },
  {
    id: "loc-panyu-mehood",
    region: "panyu",
    title: "Mehood Lestie Hotel (Panyu)",
    titleZh: "广州番禺美豪丽致酒店",
    category: "Hotel Base 01",
    coords: [22.9298, 113.3482],
    color: "#f97316",
    icon: "fa-hotel",
    nodeKey: "node-hotel-mehood",
    description: "Stay 01: Warm Parent-Child room with soaking tub, complimentary afternoon tea & late night noodles.",
    badge: "29 – 30 Nov • 1 Night"
  },
  {
    id: "loc-shawan",
    region: "panyu",
    title: "Shawan Ancient Town",
    titleZh: "沙湾古镇",
    category: "Heritage Discovery",
    coords: [22.9022, 113.3331],
    color: "#f97316",
    icon: "fa-archway",
    nodeKey: "node-hotel-mehood",
    description: "800-year Lingnan village with oyster shell masonry and famous buffalo ginger milk curd.",
    badge: "Day 1 Afternoon"
  },
  {
    id: "loc-chimelong-resort",
    region: "chimelong",
    title: "Chimelong Hotel & Safari Resort",
    titleZh: "广州长隆酒店 & 野生动物世界",
    category: "Hotel Base 02",
    coords: [23.0031, 113.3278],
    color: "#10b981",
    icon: "fa-hippo",
    nodeKey: "node-hotel-chimelong",
    description: "Stay 02: Exploration Kid's Room, 3-day multi-park pass, Safari Park, Circus & White Tiger restaurant.",
    badge: "30 Nov – 03 Dec • 3 Nights"
  },
  {
    id: "loc-canton-atour",
    region: "canton",
    title: "Atour Hotel Dongshankou",
    titleZh: "亚朵酒店 (广州东山口店)",
    category: "Hotel Base 03",
    coords: [23.1256, 113.2985],
    color: "#8b5cf6",
    icon: "fa-hotel",
    nodeKey: "node-hotel-atour",
    description: "Stay 03: Red-brick historic concession quarter, modern boutique twin setup, art cafes and bistros.",
    badge: "03 – 06 Dec • 3 Nights"
  },
  {
    id: "loc-beijing-road",
    region: "canton",
    title: "Beijing Road Ancient Corridor",
    titleZh: "北京路文化旅游区 & 大佛寺",
    category: "Cultural & Night Walk",
    coords: [23.1248, 113.2687],
    color: "#8b5cf6",
    icon: "fa-landmark",
    nodeKey: "node-hotel-atour",
    description: "Multi-dynasty glass road archeology, illuminated golden Dafo Pagoda, and bustling late dim sum.",
    badge: "Day 5 Evening"
  },
  {
    id: "loc-qingyuan-gulong",
    region: "qingyuan",
    title: "Qingyuan Gulong Gorge",
    titleZh: "清远古龙峡森林探险王国",
    category: "Alpine Adventure Excursion",
    coords: [23.7554, 112.9882],
    color: "#0ea5e9",
    icon: "fa-mountain",
    nodeKey: "node-qingyuan",
    description: "High-altitude glass bridge skywalk, canyon roller coaster, alpine waterfall forest, and tender white-cut chicken feast.",
    badge: "Day 6 Day Trip"
  },
  {
    id: "loc-gz-south-rail",
    region: "canton",
    title: "Guangzhou South Railway Station",
    titleZh: "广州南站 (高铁枢纽)",
    category: "High Speed Rail",
    coords: [22.9887, 113.2694],
    color: "#ec4899",
    icon: "fa-train",
    nodeKey: "node-hsr-gz-sz",
    description: "China's premier mega-hub: board the G-series bullet train to Shenzhen North (~30 mins).",
    badge: "Day 8 Transit"
  },
  {
    id: "loc-shenzhen-qiuguo",
    region: "shenzhen",
    title: "Qiuguo S Hotel (Shenzhen Nanshan)",
    titleZh: "秋果S酒店 (深圳南山科技园店)",
    category: "Hotel Base 04",
    coords: [22.5401, 113.9525],
    color: "#ec4899",
    icon: "fa-hotel",
    nodeKey: "node-hotel-qiuguo",
    description: "Stay 04: Futuristic voice automation in the heart of China's Silicon Valley, 30-min from Futian rail.",
    badge: "06 – 09 Dec • 3 Nights"
  },
  {
    id: "loc-dji-skycity",
    region: "shenzhen",
    title: "DJI Sky City Global HQ",
    titleZh: "大疆天空之城全球总部",
    category: "Tech Landmark",
    coords: [22.5765, 113.9582],
    color: "#ec4899",
    icon: "fa-microchip",
    nodeKey: "node-hotel-qiuguo",
    description: "Foster + Partners twin suspension towers and cutting-edge drone robotics showcase.",
    badge: "Day 9 Tech Tour"
  },
  {
    id: "loc-futian-rail",
    region: "shenzhen",
    title: "Shenzhen Futian Station",
    titleZh: "深圳福田高铁站",
    category: "Cross-Border Rail",
    coords: [22.5375, 114.0545],
    color: "#ec4899",
    icon: "fa-train-subway",
    nodeKey: "node-hsr-sz-hk",
    description: "World's largest underground rail station: 14-minute bullet train straight to West Kowloon Hong Kong.",
    badge: "Day 11 Border Leap"
  },
  {
    id: "loc-hk-west-kowloon",
    region: "hongkong",
    title: "Hong Kong West Kowloon Station",
    titleZh: "香港西九龙高铁站",
    category: "Cross-Border Customs",
    coords: [22.3045, 114.1658],
    color: "#f59e0b",
    icon: "fa-passport",
    nodeKey: "node-hsr-sz-hk",
    description: "Co-location joint customs checkpoint; rapid connection directly to Kowloon and MTR.",
    badge: "Day 11 • 14-min arrival"
  },
  {
    id: "loc-royal-plaza",
    region: "hongkong",
    title: "Royal Plaza Hotel Hong Kong",
    titleZh: "香港帝京酒店 (旺角东)",
    category: "Hotel Base 05",
    coords: [22.3235, 114.1724],
    color: "#f59e0b",
    icon: "fa-hotel",
    nodeKey: "node-hotel-royal",
    description: "Stay 05: Plaza Deluxe Family Room with 2 double beds, direct covered bridge to MOKO Mall and Mong Kok East MTR.",
    badge: "09 – 12 Dec • 3 Nights"
  },
  {
    id: "loc-victoria-harbour",
    region: "hongkong",
    title: "Victoria Harbour & Star Ferry",
    titleZh: "维多利亚港 & 天星小轮",
    category: "Iconic Skyline",
    coords: [22.2933, 114.1685],
    color: "#f59e0b",
    icon: "fa-ferry",
    nodeKey: "node-hotel-royal",
    description: "Avenue of Stars promenade, historic green double-deck ferry crossing to Central.",
    badge: "Day 12 & 13"
  },
  {
    id: "loc-hkg-airport",
    region: "hongkong",
    title: "Hong Kong International Airport (HKG)",
    titleZh: "香港国际机场 (赤鱲角)",
    category: "Homeward Aviation",
    coords: [22.3080, 113.9185],
    color: "#06b6d4",
    icon: "fa-plane-departure",
    nodeKey: "node-flight-return",
    description: "Flight CX657 departure at 16:05 back to Singapore Changi (SIN).",
    badge: "Day 14 • 16:05 Homeward"
  }
];

let currentBaseLayerName = 'esri-dark';
let activeBaseLayers = [];

function setMapBaseLayer(layerName) {
  currentBaseLayerName = layerName;
  if (!regionalMapInstance) return;

  // Clear existing tile layers
  activeBaseLayers.forEach(l => regionalMapInstance.removeLayer(l));
  activeBaseLayers = [];

  // Update toggle buttons styling
  const buttons = {
    'esri-dark': document.getElementById('map-style-btn-esri'),
    'amap-detail': document.getElementById('map-style-btn-amap'),
    'satellite': document.getElementById('map-style-btn-sat')
  };

  Object.keys(buttons).forEach(k => {
    const btn = buttons[k];
    if (!btn) return;
    if (k === layerName) {
      btn.className = "px-2.5 py-1 rounded-lg bg-purple-500 text-white font-bold transition flex items-center gap-1 text-[11px] shadow-sm";
    } else {
      btn.className = "px-2.5 py-1 rounded-lg text-slate-300 hover:text-white transition flex items-center gap-1 text-[11px]";
    }
  });

  if (layerName === 'amap-detail') {
    // High-Detail AutoNavi (高德地图) Standard Vector Roads & Local Landmarks
    const amapTile = L.tileLayer('https://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}', {
      subdomains: ['1', '2', '3', '4'],
      maxZoom: 18,
      attribution: '&copy; AutoNavi (高德地图)'
    });
    amapTile.addTo(regionalMapInstance);
    activeBaseLayers.push(amapTile);
  } else if (layerName === 'satellite') {
    // Esri World Satellite Imagery
    const satTile = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18,
      attribution: '&copy; Esri & Earthstar Geographics'
    });
    const labelTile = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 18
    });
    satTile.addTo(regionalMapInstance);
    labelTile.addTo(regionalMapInstance);
    activeBaseLayers.push(satTile, labelTile);
  } else {
    // Default: 100% Free Dark Gray Canvas Base Map (No API Key Required)
    const baseTile = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: '&copy; Esri, DeLorme, NAVTEQ'
    });
    const refTile = L.tileLayer('https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16
    });
    baseTile.addTo(regionalMapInstance);
    refTile.addTo(regionalMapInstance);
    activeBaseLayers.push(baseTile, refTile);
  }
}

function initRegionalMap() {
  const mapContainer = document.getElementById('regionalLeafletMap');
  if (!mapContainer || typeof L === 'undefined') return;

  if (!regionalMapInstance) {
    // Create Leaflet map instance centered over GBA Corridor
    regionalMapInstance = L.map('regionalLeafletMap', {
      zoomControl: true,
      scrollWheelZoom: true,
      attributionControl: false
    }).setView([22.95, 113.60], 9);

    // Apply default base layer
    setMapBaseLayer(currentBaseLayerName);

    // Draw Transit Polyline linking major hubs
    const corridorPath = [
      [23.3924, 113.2988], // CAN Airport
      [22.9298, 113.3482], // Panyu
      [23.0031, 113.3278], // Chimelong
      [23.1256, 113.2985], // Canton Atour
      [23.7554, 112.9882], // Qingyuan Gulong
      [23.1256, 113.2985], // Back to Canton
      [22.9887, 113.2694], // GZ South
      [22.5401, 113.9525], // Shenzhen Qiuguo
      [22.5375, 114.0545], // Futian Rail
      [22.3045, 114.1658], // West Kowloon
      [22.3235, 114.1724], // Mong Kok
      [22.3080, 113.9185]  // HKG Airport
    ];

    L.polyline(corridorPath, {
      color: '#06b6d4',
      weight: 3,
      opacity: 0.6,
      dashArray: '8, 8'
    }).addTo(regionalMapInstance);

    // Add High Speed Rail Cross-Border Highlight
    L.polyline([[22.5375, 114.0545], [22.3045, 114.1658]], {
      color: '#ec4899',
      weight: 4,
      opacity: 0.95
    }).addTo(regionalMapInstance);

    // Create custom markers
    regionalLocations.forEach(loc => {
      const customIcon = L.divIcon({
        className: 'leaflet-data-marker',
        html: `
          <div class="custom-map-marker" style="background:${loc.color}; width:34px; height:34px;">
            <i class="fa-solid ${loc.icon} text-sm"></i>
          </div>
        `,
        iconSize: [34, 34],
        iconAnchor: [17, 17],
        popupAnchor: [0, -20]
      });

      const popupHtml = `
        <div class="space-y-2 text-xs">
          <div class="flex items-center justify-between gap-2 border-b border-white/10 pb-1.5">
            <span class="px-2 py-0.5 rounded text-[10px] font-black mono text-white" style="background:${loc.color}">${loc.badge}</span>
            <span class="text-[10px] mono text-slate-400 uppercase">${loc.category}</span>
          </div>
          <div>
            <h4 class="font-black text-sm text-white">${loc.title}</h4>
            <p class="text-[11px] text-orange-300 font-bold mono">${loc.titleZh}</p>
          </div>
          <p class="text-slate-300 leading-snug">${loc.description}</p>
          <div class="pt-1.5 flex items-center justify-between">
            <button onclick="openDrawer('${loc.nodeKey}')" class="px-2.5 py-1 rounded-lg bg-cyan-500/20 hover:bg-cyan-500 text-cyan-200 hover:text-slate-950 font-bold mono text-[11px] transition flex items-center gap-1 cursor-pointer">
              <span>View Specs</span> <i class="fa-solid fa-arrow-right text-[10px]"></i>
            </button>
            <span class="text-[10px] mono text-slate-400">${loc.coords[0].toFixed(2)}°N, ${loc.coords[1].toFixed(2)}°E</span>
          </div>
        </div>
      `;

      const marker = L.marker(loc.coords, { icon: customIcon })
        .addTo(regionalMapInstance)
        .bindPopup(popupHtml);

      regionalMarkers[loc.id] = marker;
    });

    renderRegionalLocationsSidebar();
  }

  // Invalidate size to ensure proper tile rendering in tab views
  setTimeout(() => {
    if (regionalMapInstance) {
      regionalMapInstance.invalidateSize();
    }
  }, 200);
}

function renderRegionalLocationsSidebar() {
  const container = document.getElementById('regionalLocationsList');
  if (!container) return;

  const filtered = activeRegionFilter === 'all'
    ? regionalLocations
    : regionalLocations.filter(l => l.region === activeRegionFilter);

  container.innerHTML = filtered.map(loc => `
    <div onclick="pointToLocation('${loc.id}')" class="p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition cursor-pointer space-y-2 group">
      <div class="flex items-center justify-between text-[11px] mono">
        <span class="px-2 py-0.5 rounded font-black text-white" style="background:${loc.color}">
          ${loc.badge}
        </span>
        <span class="text-slate-400 group-hover:text-cyan-400 transition flex items-center gap-1">
          <span>Point Map</span> <i class="fa-solid fa-crosshairs"></i>
        </span>
      </div>
      <div>
        <h4 class="text-sm font-bold text-white group-hover:text-cyan-300 transition flex items-center gap-1.5">
          <i class="fa-solid ${loc.icon}" style="color:${loc.color}"></i>
          <span>${loc.title}</span>
        </h4>
        <p class="text-xs text-orange-300/90 font-mono">${loc.titleZh}</p>
      </div>
      <p class="text-xs text-slate-300 line-clamp-2 leading-relaxed">${loc.description}</p>
    </div>
  `).join('');
}

function pointToLocation(locationId) {
  const loc = regionalLocations.find(l => l.id === locationId);
  if (!loc || !regionalMapInstance) return;

  regionalMapInstance.setView(loc.coords, 13, { animate: true, duration: 1.2 });
  const marker = regionalMarkers[locationId];
  if (marker) {
    setTimeout(() => {
      marker.openPopup();
    }, 400);
  }
}

function zoomToRegionalLocation(region) {
  activeRegionFilter = region;

  document.querySelectorAll('.regional-map-btn').forEach(btn => {
    if (btn.dataset.target === region) {
      btn.className = "regional-map-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-md";
    } else {
      btn.className = "regional-map-btn px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 border border-white/10 hover:bg-white/15";
    }
  });

  renderRegionalLocationsSidebar();

  if (!regionalMapInstance) return;

  const regionBounds = {
    all: [[22.1, 112.8], [23.9, 114.4]],
    panyu: [[22.85, 113.25], [23.05, 113.45]],
    chimelong: [[22.97, 113.28], [23.04, 113.36]],
    canton: [[23.08, 113.22], [23.18, 113.35]],
    qingyuan: [[23.65, 112.85], [23.85, 113.15]],
    shenzhen: [[22.48, 113.88], [22.62, 114.12]],
    hongkong: [[22.25, 114.10], [22.36, 114.24]]
  };

  const bounds = regionBounds[region] || regionBounds.all;
  regionalMapInstance.fitBounds(bounds, { padding: [30, 30], animate: true });
}

function resetRegionalMapView() {
  zoomToRegionalLocation('all');
}

// China 2026 Trip Cost Estimator
function setChinaBudgetCurrency(curr) {
  chinaBudgetCurrency = curr;
  document.querySelectorAll('.curr-btn').forEach(btn => {
    if (btn.dataset.curr === curr) {
      btn.className = "curr-btn px-3 py-1.5 rounded-xl bg-teal-500 text-slate-950 font-black mono text-xs shadow-md";
    } else {
      btn.className = "curr-btn px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 mono text-xs hover:bg-white/15";
    }
  });
  calculateChinaBudget();
}

function calculateChinaBudget() {
  const adults = parseInt(document.getElementById('chinaAdultsCount')?.value || 2);
  const kids = parseInt(document.getElementById('chinaKidsCount')?.value || 2);
  const totalTravelers = adults + kids;

  const flightBaseSGD = parseInt(document.getElementById('chinaFlightBase')?.value || 580);
  const hotelBaseSGD = parseInt(document.getElementById('chinaHotelBase')?.value || 160);
  const attractionsSGD = parseInt(document.getElementById('chinaAttractionsBase')?.value || 80);
  const railDidiSGD = parseInt(document.getElementById('chinaRailBase')?.value || 40);
  const dailySpendSGD = parseInt(document.getElementById('chinaDailySpend')?.value || 50);

  const totalFlights = flightBaseSGD * totalTravelers;
  const totalHotels = hotelBaseSGD * 13;
  const totalAttractions = attractionsSGD * totalTravelers;
  const totalTransit = railDidiSGD * totalTravelers;
  const totalFoodLiving = dailySpendSGD * 14 * totalTravelers;

  const grandTotalSGD = totalFlights + totalHotels + totalAttractions + totalTransit + totalFoodLiving;
  const rateObj = currencyRates[chinaBudgetCurrency] || currencyRates.SGD;
  const grandConverted = Math.round(grandTotalSGD * rateObj.rate);
  const perPersonConverted = Math.round(grandConverted / totalTravelers);

  const totalEl = document.getElementById('chinaGrandTotalDisplay');
  const perPersonEl = document.getElementById('chinaPerPersonDisplay');
  const flightsEl = document.getElementById('chinaFlightsDisplay');
  const hotelsEl = document.getElementById('chinaHotelsDisplay');
  const attractionsEl = document.getElementById('chinaAttractionsDisplay');
  const transitEl = document.getElementById('chinaTransitDisplay');
  const foodEl = document.getElementById('chinaFoodDisplay');

  if (totalEl) totalEl.textContent = `${rateObj.symbol}${grandConverted.toLocaleString()} ${rateObj.code}`;
  if (perPersonEl) perPersonEl.textContent = `(${rateObj.symbol}${perPersonConverted.toLocaleString()} / person)`;
  if (flightsEl) flightsEl.textContent = `${rateObj.symbol}${Math.round(totalFlights * rateObj.rate).toLocaleString()}`;
  if (hotelsEl) hotelsEl.textContent = `${rateObj.symbol}${Math.round(totalHotels * rateObj.rate).toLocaleString()}`;
  if (attractionsEl) attractionsEl.textContent = `${rateObj.symbol}${Math.round(totalAttractions * rateObj.rate).toLocaleString()}`;
  if (transitEl) transitEl.textContent = `${rateObj.symbol}${Math.round(totalTransit * rateObj.rate).toLocaleString()}`;
  if (foodEl) foodEl.textContent = `${rateObj.symbol}${Math.round(totalFoodLiving * rateObj.rate).toLocaleString()}`;
}

// --- 7. UTILITIES & TOAST ---
function copyToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(() => {
      showToast('Copied to clipboard!');
    }).catch(() => {
      fallbackCopy(text);
    });
  } else {
    fallbackCopy(text);
  }
}

function fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  document.body.appendChild(ta);
  ta.select();
  try {
    document.execCommand('copy');
    showToast('Copied to clipboard!');
  } catch (e) {
    showToast('Address ready to copy');
  }
  document.body.removeChild(ta);
}

function showToast(msg) {
  const existing = document.getElementById('toastNotification');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'toastNotification';
  toast.className = 'fixed bottom-6 right-6 z-50 bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 font-black text-xs mono px-4 py-3 rounded-2xl shadow-2xl flex items-center gap-2.5 transform transition duration-300';
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-base"></i> <span>${msg}</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 2500);
}

// --- 7.5 HOTEL BOOKED ROOM GALLERY MODAL ---
let currentHotelId = null;
let currentPhotoIndex = 0;

function getHotelPhotosCount(hotelId) {
  if (typeof hotelRoomsData === 'undefined') return 0;
  const hotel = hotelRoomsData.find(h => h.id === hotelId);
  if (!hotel) return 0;
  if (hotel.bookedRoom && hotel.bookedRoom.photos) return hotel.bookedRoom.photos.length;
  if (hotel.rooms) return hotel.rooms.length;
  return 0;
}

function openHotelRoomModal(hotelId, photoIndex = 0) {
  if (typeof hotelRoomsData === 'undefined') {
    console.error('hotelRoomsData not loaded');
    return;
  }
  const hotel = hotelRoomsData.find(h => h.id === hotelId);
  if (!hotel) return;

  currentHotelId = hotelId;
  const photos = (hotel.bookedRoom && hotel.bookedRoom.photos) || hotel.rooms || [];
  currentPhotoIndex = Math.max(0, Math.min(photoIndex, Math.max(0, photos.length - 1)));

  const modal = document.getElementById('hotelRoomModal');
  if (!modal) return;

  renderHotelRoomModalContent(hotel, currentPhotoIndex);
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeHotelRoomModal() {
  const modal = document.getElementById('hotelRoomModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

function selectHotelRoomPhoto(photoIndex) {
  if (!currentHotelId || typeof hotelRoomsData === 'undefined') return;
  const hotel = hotelRoomsData.find(h => h.id === currentHotelId);
  if (!hotel) return;
  const photos = (hotel.bookedRoom && hotel.bookedRoom.photos) || hotel.rooms || [];
  if (!photos[photoIndex]) return;

  currentPhotoIndex = photoIndex;
  renderHotelRoomModalContent(hotel, currentPhotoIndex);
}

// Backward compatibility alias
function selectHotelRoom(index) {
  selectHotelRoomPhoto(index);
}

function nextHotelRoomPhoto() {
  if (!currentHotelId || typeof hotelRoomsData === 'undefined') return;
  const hotel = hotelRoomsData.find(h => h.id === currentHotelId);
  if (!hotel) return;
  const photos = (hotel.bookedRoom && hotel.bookedRoom.photos) || hotel.rooms || [];
  if (!photos.length) return;
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  renderHotelRoomModalContent(hotel, currentPhotoIndex);
}
function nextHotelRoom() { nextHotelRoomPhoto(); }

function prevHotelRoomPhoto() {
  if (!currentHotelId || typeof hotelRoomsData === 'undefined') return;
  const hotel = hotelRoomsData.find(h => h.id === currentHotelId);
  if (!hotel) return;
  const photos = (hotel.bookedRoom && hotel.bookedRoom.photos) || hotel.rooms || [];
  if (!photos.length) return;
  currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
  renderHotelRoomModalContent(hotel, currentPhotoIndex);
}
function prevHotelRoom() { prevHotelRoomPhoto(); }

function renderHotelRoomModalContent(hotel, photoIdx) {
  const room = hotel.bookedRoom || (hotel.rooms && hotel.rooms[0]);
  const photos = (hotel.bookedRoom && hotel.bookedRoom.photos) || hotel.rooms || [];
  const activePhoto = photos[photoIdx] || photos[0];
  const container = document.getElementById('hotelRoomModalContent');
  if (!container || !room || !activePhoto) return;

  container.innerHTML = `
    <!-- Modal Header -->
    <div class="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between bg-black/60 gap-4">
      <div class="space-y-1">
        <div class="flex items-center gap-2 flex-wrap">
          <span class="px-2.5 py-0.5 rounded-lg text-[10px] font-black bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 mono uppercase flex items-center gap-1.5">
            <i class="fa-solid fa-circle-check text-emerald-400"></i> YOUR BOOKED ROOM
          </span>
          <span class="px-2 py-0.5 rounded-lg text-[10px] font-bold bg-white/10 text-slate-300 border border-white/15 mono">
            Photo ${photoIdx + 1} of ${photos.length}
          </span>
        </div>
        <h3 class="text-xl sm:text-2xl font-black text-white">${hotel.name}</h3>
        <p class="text-xs text-orange-300 font-bold mono">${hotel.nameZh}</p>
      </div>
      <button onclick="closeHotelRoomModal()" class="w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-300 hover:text-white flex items-center justify-center transition shrink-0 cursor-pointer">
        <i class="fa-solid fa-xmark text-base"></i>
      </button>
    </div>

    <!-- Modal Body -->
    <div class="p-5 sm:p-6 space-y-5 overflow-y-auto max-h-[75vh]">
      
      <!-- Booked Room Title Banner -->
      <div class="p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-orange-500/15 via-purple-500/10 to-transparent border border-orange-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <span class="text-[10px] font-black text-orange-400 mono tracking-wider uppercase block">RESERVED ROOM TYPE</span>
          <h4 class="text-lg sm:text-xl font-black text-white">${room.name}</h4>
          <p class="text-xs text-slate-300 font-medium">${room.nameZh}</p>
        </div>
        <div class="flex items-center gap-2 text-xs mono text-slate-300 bg-black/40 px-3 py-1.5 rounded-xl border border-white/10 w-fit shrink-0">
          <i class="fa-solid fa-images text-orange-400"></i>
          <span>${photos.length} Photos in Gallery</span>
        </div>
      </div>

      <!-- Main Showcase Photo -->
      <div class="relative rounded-2xl overflow-hidden border border-white/15 bg-black h-72 sm:h-[420px] group shadow-2xl">
        <img id="roomShowcaseImg" src="${activePhoto.file}" alt="${activePhoto.title || room.name}" class="w-full h-full object-cover transition duration-300">
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
        
        <!-- Navigation Arrows -->
        <button onclick="prevHotelRoomPhoto()" title="Previous Photo (Left Arrow)" class="absolute left-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 hover:bg-orange-500 text-white flex items-center justify-center border border-white/20 transition backdrop-blur-md cursor-pointer hover:scale-105 shadow-lg">
          <i class="fa-solid fa-chevron-left text-base"></i>
        </button>
        <button onclick="nextHotelRoomPhoto()" title="Next Photo (Right Arrow)" class="absolute right-3 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/75 hover:bg-orange-500 text-white flex items-center justify-center border border-white/20 transition backdrop-blur-md cursor-pointer hover:scale-105 shadow-lg">
          <i class="fa-solid fa-chevron-right text-base"></i>
        </button>

        <!-- Photo caption overlay on photo -->
        <div class="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6">
          <div class="flex items-center gap-2 mb-1">
            <span class="inline-block px-2.5 py-0.5 rounded-md bg-orange-500 text-white font-bold text-[11px] mono shadow-md">
              Angle ${photoIdx + 1}
            </span>
            <span class="text-xs text-white/90 font-bold mono drop-shadow">
              ${activePhoto.title || 'Room View'}
            </span>
          </div>
          ${activePhoto.titleZh ? `<p class="text-xs text-slate-300 font-medium drop-shadow">${activePhoto.titleZh}</p>` : ''}
        </div>
      </div>

      <!-- Room Specs Card -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs mono">
        <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
          <span class="text-slate-400 block text-[10px] font-bold tracking-wider">BED CONFIGURATION</span>
          <span class="text-slate-100 font-bold flex items-center gap-2">
            <i class="fa-solid fa-bed text-orange-400 text-sm"></i> ${room.beds}
          </span>
        </div>
        <div class="bg-white/5 p-3.5 rounded-xl border border-white/10 space-y-1">
          <span class="text-slate-400 block text-[10px] font-bold tracking-wider">ROOM AMENITIES & HIGHLIGHTS</span>
          <span class="text-slate-200 font-medium flex items-center gap-2">
            <i class="fa-solid fa-wand-magic-sparkles text-amber-400 text-sm"></i> ${room.perks}
          </span>
        </div>
      </div>

      <!-- All Photos Thumbnail Strip -->
      <div class="space-y-2.5">
        <div class="flex items-center justify-between text-xs mono">
          <span class="text-slate-200 font-bold flex items-center gap-1.5">
            <i class="fa-solid fa-layer-group text-cyan-400"></i> ALL ROOM ANGLES & DETAILS (${photos.length})
          </span>
          <span class="text-slate-400 text-[11px]">Click any photo to zoom in • Arrow keys to flip</span>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
          ${photos.map((p, idx) => `
            <button onclick="selectHotelRoomPhoto(${idx})" class="p-2 rounded-xl border transition text-left space-y-1.5 cursor-pointer ${idx === photoIdx ? 'bg-orange-500/20 border-orange-500 shadow-md ring-2 ring-orange-500/50' : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'}">
              <div class="h-20 sm:h-24 rounded-lg overflow-hidden bg-slate-800 relative">
                <img src="${p.file}" alt="${p.title || ''}" class="w-full h-full object-cover">
                <span class="absolute bottom-1 right-1 bg-black/75 text-white text-[9px] px-1.5 py-0.5 rounded font-mono font-bold">
                  #${idx + 1}
                </span>
              </div>
              <p class="text-[11px] font-bold text-white line-clamp-1">${p.title || 'Photo ' + (idx + 1)}</p>
            </button>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Modal Footer -->
    <div class="p-4 sm:p-5 border-t border-white/10 bg-black/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs mono">
      <div class="flex items-center gap-2 text-slate-400 text-[11px]">
        <i class="fa-solid fa-camera text-cyan-400"></i> Verified photography linked strictly to your booked room
      </div>
      <div class="flex items-center gap-2.5 w-full sm:w-auto">
        ${hotel.tripUrl ? `
          <a href="${hotel.tripUrl}" target="_blank" rel="noopener noreferrer" class="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-orange-500/20 hover:bg-orange-500 border border-orange-500/40 text-orange-200 hover:text-white font-bold transition flex items-center justify-center gap-1.5 shadow-sm">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> Open on Trip.com
          </a>
        ` : ''}
        <button onclick="closeHotelRoomModal()" class="px-5 py-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white font-bold transition cursor-pointer">
          Done
        </button>
      </div>
    </div>
  `;
}

// --- 8. INITIALIZATION ---
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDrawer();
    closeAddRestaurantModal();
    closeHotelRoomModal();
    closeDishZoomModal();
    closeDiningPhotoModal();
  } else if (e.key === 'ArrowLeft') {
    const modal = document.getElementById('hotelRoomModal');
    if (modal && !modal.classList.contains('hidden')) {
      prevHotelRoomPhoto();
    }
  } else if (e.key === 'ArrowRight') {
    const modal = document.getElementById('hotelRoomModal');
    if (modal && !modal.classList.contains('hidden')) {
      nextHotelRoomPhoto();
    }
  }
});

// Attractions Filtering
function filterAttractionsCards(category) {
  document.querySelectorAll('.attraction-filter-btn').forEach(btn => {
    if (btn.dataset.category === category) {
      btn.className = "attraction-filter-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 text-white font-bold shadow-md";
    } else {
      btn.className = "attraction-filter-btn px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 border border-white/10 hover:bg-white/15";
    }
  });

  document.querySelectorAll('.attraction-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
}

function initApp() {
  const rawHash = window.location.hash ? window.location.hash.replace('#', '') : '';
  const hash = (rawHash === 'food' || rawHash === 'restaurant' || rawHash === 'restaurants') ? 'dining' : rawHash;
  const validViews = ['flowchart', 'schedule', 'hotels', 'attractions', 'dining', 'mindmap', 'budget'];
  const initialView = validViews.includes(hash) ? hash : 'flowchart';
  
  switchChinaView(initialView, Boolean(hash));

  try { renderDailySchedule('all'); } catch (e) { console.error('China schedule err:', e); }
  try { renderRestaurants('all'); } catch (e) { console.error('China dining err:', e); }
  try { calculateChinaBudget(); } catch (e) { console.error('China budget err:', e); }

  window.addEventListener('hashchange', () => {
    const raw = window.location.hash ? window.location.hash.replace('#', '') : '';
    const currentHash = (raw === 'food' || raw === 'restaurant' || raw === 'restaurants') ? 'dining' : raw;
    if (validViews.includes(currentHash) && currentHash !== activeChinaView) {
      switchChinaView(currentHash, true);
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
