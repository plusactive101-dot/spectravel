// =============================================================
// SPECTRAVEL - China 2026 Greater Bay Area Expedition
// Interactive Roadmap, 14-Day Timeline, Booked Hotels & Dining
// =============================================================

// --- 1. EXPEDITION STATE ---
let isLightMode = false;
let activeChinaView = 'flowchart';
let activeChinaDayFilter = 'all';
let activeDiningFilter = 'all';
let activeMindmapFilter = 'all';
let chinaDaysCompleted = JSON.parse(localStorage.getItem('spectravel_china_completed') || '{}');
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
  activeChinaView = viewName;
  
  // Update view panels
  document.querySelectorAll('.china-view-panel').forEach(p => p.classList.add('hidden'));
  const targetView = document.getElementById('view-' + viewName);
  if (targetView) targetView.classList.remove('hidden');

  // Update sub-view tabs
  document.querySelectorAll('.china-nav-tab').forEach(b => {
    b.classList.remove('active-tab');
    b.classList.add('text-slate-300');
  });
  const targetBtn = document.getElementById('btn-china-' + viewName);
  if (targetBtn) {
    targetBtn.classList.add('active-tab');
    targetBtn.classList.remove('text-slate-300');
  }

  // Update header nav tabs
  document.querySelectorAll('.header-nav-tab').forEach(b => {
    b.classList.remove('bg-gradient-to-r', 'from-cyan-500', 'to-purple-600', 'text-white', 'shadow-md');
    b.classList.add('bg-white/10', 'text-slate-300');
  });
  const headerBtn = document.getElementById('header-btn-' + viewName);
  if (headerBtn) {
    headerBtn.classList.remove('bg-white/10', 'text-slate-300');
    headerBtn.classList.add('bg-gradient-to-r', 'from-cyan-500', 'to-purple-600', 'text-white', 'shadow-md');
  }

  // Sync URL hash
  if (window.location.hash !== '#' + viewName) {
    history.replaceState(null, null, '#' + viewName);
  }

  // Smooth scroll to view if requested
  if (shouldScroll) {
    const navAnchor = document.getElementById('chinaViewNav');
    if (navAnchor) {
      navAnchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (targetView) {
      targetView.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
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
  localStorage.setItem('spectravel_china_completed', JSON.stringify(chinaDaysCompleted));
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
  const stored = localStorage.getItem('spectravel_restaurants');
  if (stored) {
    try { return JSON.parse(stored); } catch (e) { return defaultRestaurants; }
  }
  return typeof defaultRestaurants !== 'undefined' ? defaultRestaurants : [];
}

function saveRestaurants(arr) {
  localStorage.setItem('spectravel_restaurants', JSON.stringify(arr));
}

function renderRestaurants(cityFilter = 'all') {
  activeDiningFilter = cityFilter;
  const container = document.getElementById('diningGrid');
  if (!container) return;

  const list = loadRestaurants();
  const filtered = cityFilter === 'all'
    ? list
    : list.filter(r => r.city.toLowerCase() === cityFilter.toLowerCase());

  container.innerHTML = filtered.map(r => `
    <div class="glass-card glow-gold rounded-3xl p-6 border border-white/10 flex flex-col justify-between space-y-4">
      <div class="space-y-3">
        <div class="flex items-center justify-between">
          <span class="px-3 py-1 rounded-xl text-[10px] font-black bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 mono uppercase">${r.city}</span>
          <span class="text-xs font-black text-yellow-400 mono bg-white/10 px-2.5 py-0.5 rounded-lg">${r.price || '$$'}</span>
        </div>
        <h3 class="text-lg font-black text-white">${r.name}</h3>
        <div class="text-xs text-cyan-400 font-bold">${r.cuisine}</div>
        
        <div class="text-xs text-slate-300 space-y-1.5 pt-1">
          <div><strong class="text-slate-400">Must Try:</strong> ${r.dishes || 'Specialty chef selection'}</div>
          ${r.address ? `<div class="text-slate-400 flex items-start gap-1.5"><i class="fa-solid fa-location-dot mt-0.5 text-yellow-400 shrink-0"></i> <span>${r.address}</span></div>` : ''}
          ${r.notes ? `<div class="p-3 bg-white/5 rounded-2xl text-slate-300 text-[11px] border border-white/10 mt-2">${r.notes}</div>` : ''}
        </div>
      </div>

      <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs mono">
        <button onclick="copyToClipboard('${r.name} ${r.address || ''}')" class="text-slate-400 hover:text-white flex items-center gap-1.5 transition font-bold">
          <i class="fa-regular fa-copy"></i> Copy Name & Address
        </button>
        <span class="text-emerald-400 font-bold text-[10px]">Verified Spot</span>
      </div>
    </div>
  `).join('');
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

// Mindmap Filtering
function filterMindmap(category) {
  activeMindmapFilter = category;
  document.querySelectorAll('.mm-filter-btn').forEach(btn => {
    if (btn.dataset.target === category) {
      btn.className = "mm-filter-btn px-3 py-1.5 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold shadow-md";
    } else {
      btn.className = "mm-filter-btn px-3 py-1.5 rounded-xl bg-white/10 text-slate-300 border border-white/10 hover:bg-white/15";
    }
  });

  document.querySelectorAll('.mm-card').forEach(card => {
    if (category === 'all' || card.dataset.category === category) {
      card.classList.remove('hidden');
    } else {
      card.classList.add('hidden');
    }
  });
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

function initApp() {
  const hash = window.location.hash ? window.location.hash.replace('#', '') : '';
  const validViews = ['flowchart', 'schedule', 'hotels', 'dining', 'mindmap', 'budget'];
  const initialView = validViews.includes(hash) ? hash : 'flowchart';
  
  switchChinaView(initialView, Boolean(hash));

  try { renderDailySchedule('all'); } catch (e) { console.error('China schedule err:', e); }
  try { renderRestaurants('all'); } catch (e) { console.error('China dining err:', e); }
  try { calculateChinaBudget(); } catch (e) { console.error('China budget err:', e); }

  window.addEventListener('hashchange', () => {
    const currentHash = window.location.hash ? window.location.hash.replace('#', '') : '';
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
