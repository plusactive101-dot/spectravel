// =============================================================
// SPECTRAVEL - Unified Exploration & Expedition Platform
// 1. Global Nomad Hub (Intelligence, Budget Physics, 7-Day Roadmaps)
// 2. China 2026 Expedition (Visual Flowchart, 14-Day Timeline, Hotels, Dining)
// =============================================================

// --- 1. GLOBAL NOMAD DATA REPOSITORY ---
const destinations = [
  {
    id: "tokyo",
    name: "Tokyo",
    country: "Japan",
    category: "Urban",
    vibeTag: "Cyberpunk Metropolis",
    badgeCol: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 45, nomad: 100, luxury: 320 },
    bestSeason: "March - May & Oct - Nov",
    nomadScore: "9.4 / 10",
    summary: "Ultra-modern neon towers blending seamlessly with ancient Shinto shrines, world-class transit, and the global pinnacle of culinary excellence.",
    tip: "Get a Welcome Suica IC card on your phone for instant subway taps and convenience store payment.",
    itinerary: [
      { day: "Day 1-2", title: "Shinjuku & Shibuya Crossing", desc: "Meiji Jingu serene forest, Shibuya Sky 360 observatory, and Omoide Yokocho yakitori alleys." },
      { day: "Day 3-4", title: "Asakusa & Akihabara", desc: "Sensō-ji historic temple, Sumida river cruise, and electronic/anime retro districts." },
      { day: "Day 5-6", title: "Tsukiji, Ginza & teamLab", desc: "Early morning sushi at outer Tsukiji market followed by immersive digital art at Planets." },
      { day: "Day 7", title: "Mount Fuji Day Trip", desc: "Express train to Lake Kawaguchiko for iconic reflections of Fuji's snowcap." }
    ]
  },
  {
    id: "swiss",
    name: "Zermatt & Matterhorn",
    country: "Switzerland",
    category: "Alpine",
    vibeTag: "High Alpine Wilderness",
    badgeCol: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 90, nomad: 210, luxury: 650 },
    bestSeason: "July - Sept & Dec - April",
    nomadScore: "8.8 / 10",
    summary: "Car-free alpine sanctuary crowned by the pyramid monolith of the Matterhorn, glacier palaces, and panoramic cogwheel railways.",
    tip: "A Swiss Travel Pass covers unlimited trains, panoramic boats, and mountain transit discounts.",
    itinerary: [
      { day: "Day 1-2", title: "Gornergrat Cogwheel Train", desc: "Climb to 3,089m elevation for dramatic panoramas of 29 peaks over 4,000 meters." },
      { day: "Day 3-4", title: "Matterhorn Glacier Paradise", desc: "Highest cable car station in Europe (3,883m) with year-round ice tunnels and snow." },
      { day: "Day 5-6", title: "Five Lakes Hike (5-Seenweg)", desc: "10km alpine trail reflecting the Matterhorn in crystal clear glacial tarns." },
      { day: "Day 7", title: "Glacier Express to St. Moritz", desc: "The world's slowest express train traversing dramatic viaducts and canyons." }
    ]
  },
  {
    id: "bali",
    name: "Bali & Nusa Penida",
    country: "Indonesia",
    category: "Coastal",
    vibeTag: "Tropical Nomad Haven",
    badgeCol: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 25, nomad: 65, luxury: 220 },
    bestSeason: "April - October",
    nomadScore: "9.7 / 10",
    summary: "Terraced emerald rice fields, sacred water temples, world-class surf breaks, and the premier global digital nomad community hub.",
    tip: "Base yourself in Canggu/Pererenan for beach clubs & cafes, or Ubud for wellness and jungle serenity.",
    itinerary: [
      { day: "Day 1-2", title: "Ubud Cultural Core", desc: "Tegalalang rice terraces, Sacred Monkey Forest, and traditional Balinese sound healing." },
      { day: "Day 3-4", title: "Nusa Penida Expedition", desc: "Speedboat to Kelingking T-Rex cliff and snorkel with wild oceanic manta rays." },
      { day: "Day 5-6", title: "Uluwatu Sunset & Surf", desc: "Dramatic limestone cliffs, world-class reef breaks, and ancient Kecak fire dance at dusk." },
      { day: "Day 7", title: "Canggu Cafe & Sunset", desc: "High-speed coworking at Dojo/BWork, sunset coconuts at Echo Beach." }
    ]
  },
  {
    id: "lisbon",
    name: "Lisbon & Sintra",
    country: "Portugal",
    category: "Heritage",
    vibeTag: "Sunlit Atlantic Capital",
    badgeCol: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    image: "https://images.unsplash.com/photo-1508849789987-4e5333c12b78?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 40, nomad: 95, luxury: 290 },
    bestSeason: "May - October",
    nomadScore: "9.2 / 10",
    summary: "Cobblestone tramways winding up sun-drenched hills, pastel palaces, Atlantic coastline miradouros, and vibrant startup energy.",
    tip: "Buy a Viva Viagem card for subway and historic Tram 28 access.",
    itinerary: [
      { day: "Day 1-2", title: "Alfama & Miradouros", desc: "Castelo de São Jorge, melancholic Fado music taverns, and sunset at Miradouro de Santa Luzia." },
      { day: "Day 3-4", title: "Sintra Fairytale Castles", desc: "Romanticist Pena Palace, mystical Quinta da Regaleira initiation well, and Cabo da Roca cliffs." },
      { day: "Day 5-6", title: "Belém & Cascais Coast", desc: "Jerónimos Monastery, original Pastéis de Belém custard tarts, and seaside cycling in Cascais." },
      { day: "Day 7", title: "LX Factory & Bairro Alto", desc: "Industrial creative hub, indie bookstores, and rooftop sundowners overlooking the Tagus River." }
    ]
  },
  {
    id: "banff",
    name: "Banff & Lake Louise",
    country: "Canada",
    category: "Alpine",
    vibeTag: "Glacial Rockies Wilderness",
    badgeCol: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 65, nomad: 150, luxury: 480 },
    bestSeason: "June - September (Hiking) / Dec - April (Ski)",
    nomadScore: "8.5 / 10",
    summary: "Pristine turquoise glacial lakes nestled among towering jagged limestone peaks in Canada's oldest and most iconic national park.",
    tip: "Reserve the Parks Canada shuttle well in advance to reach Moraine Lake and Lake Louise hassle-free.",
    itinerary: [
      { day: "Day 1-2", title: "Lake Louise & Plain of Six Glaciers", desc: "Canoeing on emerald waters followed by a hike to the historic high-alpine Swiss tea house." },
      { day: "Day 3-4", title: "Moraine Lake & Valley of the Ten Peaks", desc: "Sunrise reflection at the Rockpile and scrambling Sentinel Pass via Larch Valley." },
      { day: "Day 5-6", title: "Icefields Parkway Drive", desc: "Peyto Lake wolf-shaped overlook, Athabasca Glacier ice walk, and Columbia Icefield skywalk." },
      { day: "Day 7", title: "Banff Town & Hot Springs", desc: "Banff Gondola summit over 6 mountain ranges and relaxation in mineral sulphur pools." }
    ]
  },
  {
    id: "amalfi",
    name: "Amalfi Coast & Positano",
    country: "Italy",
    category: "Coastal",
    vibeTag: "Cliffside Mediterranean",
    badgeCol: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 75, nomad: 180, luxury: 580 },
    bestSeason: "May - June & Sept - October",
    nomadScore: "8.3 / 10",
    summary: "Vertical cliffside pastel villages cascading into azure waters, lemon grove orchards, and the dramatic winding coastal highway.",
    tip: "Take the scenic public ferries between Salerno, Amalfi, and Positano to skip the narrow mountain traffic jams.",
    itinerary: [
      { day: "Day 1-2", title: "Positano Spiaggia & Alleys", desc: "Explore wisteria-draped stairs, boutique linen shops, and Spiaggia Grande pebble beach." },
      { day: "Day 3-4", title: "Path of the Gods (Sentiero degli Dei)", desc: "Breathtaking 7km cliffline hike suspended between coastal sky and the blue Tyrrhenian Sea." },
      { day: "Day 5-6", title: "Ravello Villas & Classical Music", desc: "Infinity terrace cliff panorama at Villa Rufolo and manicured gardens of Villa Cimbrone." },
      { day: "Day 7", title: "Capri Island Day Cruise", desc: "Private boat circle around the Faraglioni rock stacks, Blue Grotto, and Anacapri chairlift." }
    ]
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    category: "Heritage",
    vibeTag: "Ancient Zen Imperial",
    badgeCol: "bg-purple-500/20 text-purple-300 border-purple-500/30",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 40, nomad: 90, luxury: 310 },
    bestSeason: "April (Sakura) & November (Momiji)",
    nomadScore: "9.1 / 10",
    summary: "More than 2,000 Buddhist temples and Shinto shrines, bamboo groves, contemplative rock gardens, and traditional wooden machiya townhouses.",
    tip: "Visit Fushimi Inari and Arashiyama bamboo forest at 6:30 AM before tourist crowds arrive.",
    itinerary: [
      { day: "Day 1-2", title: "Fushimi Inari & Gion", desc: "10,000 vermilion Torii gates climbing sacred Mount Inari, followed by dusk walks in geisha quarter Gion." },
      { day: "Day 3-4", title: "Arashiyama & Sagano Romantic Train", desc: "Whispering bamboo forest, Tenryū-ji Zen gardens, and crossing iconic Togetsukyo bridge." },
      { day: "Day 5-6", title: "Philosopher's Path & Kinkaku-ji", desc: "Canal-side stone trail connecting Ginkaku-ji to Nanzen-ji, ending at the shimmering Golden Pavilion." },
      { day: "Day 7", title: "Nara Deer Park Day Trip", desc: "Bow to gentle wild Sika deer and marvel at the colossal bronze Great Buddha at Tōdai-ji." }
    ]
  },
  {
    id: "capetown",
    name: "Cape Town",
    country: "South Africa",
    category: "Coastal",
    vibeTag: "Atlantic Meets Table Mountain",
    badgeCol: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 30, nomad: 75, luxury: 260 },
    bestSeason: "November - April",
    nomadScore: "9.3 / 10",
    summary: "Flat-topped Table Mountain towering over pristine white beaches, scenic winelands, penguin colonies, and cutting-edge design.",
    tip: "Use Uber for safe, ultra-affordable transport anywhere across the city bowl and Atlantic seaboard.",
    itinerary: [
      { day: "Day 1-2", title: "Table Mountain & Lion's Head", desc: "Revolving cableway to the summit plateau and sunset hike up Lion's Head for 360-degree views." },
      { day: "Day 3-4", title: "Cape Peninsula & Boulders Beach", desc: "Chapman's Peak coastal drive, meeting African penguins at Boulders, and the Cape of Good Hope." },
      { day: "Day 5-6", title: "Stellenbosch & Franschhoek Wine Tram", desc: "Centuries-old Cape Dutch vineyards, award-winning Pinotage tastings, and world-class gastronomy." },
      { day: "Day 7", title: "Kirstenbosch & Camps Bay", desc: "Canopy walkway through botanical gardens and sunset cocktails overlooking Camps Bay beach." }
    ]
  }
];

// --- 2. GLOBAL STATE ---
let currentPortal = 'nomad';
let isLightMode = false;

// Nomad State
let activeFilter = 'all';
let destSearchQuery = '';
let selectedDestId = 'tokyo';
let currentTier = 'nomad';

// China State
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

// --- 3. THEME SWITCHER ---
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

// --- 4. TOP PORTAL SWITCHER ---
function switchPortal(portalName) {
  currentPortal = portalName;
  const pNomad = document.getElementById('portal-nomad');
  const pChina = document.getElementById('portal-china');
  const btnNomad = document.getElementById('btn-portal-nomad');
  const btnChina = document.getElementById('btn-portal-china');

  if (portalName === 'nomad') {
    if (pNomad) pNomad.classList.remove('hidden');
    if (pChina) pChina.classList.add('hidden');
    if (btnNomad) {
      btnNomad.className = 'portal-tab active-tab px-5 py-2.5 rounded-2xl border border-transparent font-black flex items-center gap-2.5 shadow-lg transition text-xs mono';
    }
    if (btnChina) {
      btnChina.className = 'portal-tab px-5 py-2.5 rounded-2xl border border-white/10 hover:bg-white/10 text-slate-300 font-bold flex items-center gap-2.5 transition text-xs mono';
    }
    window.location.hash = 'nomad';
  } else {
    if (pNomad) pNomad.classList.add('hidden');
    if (pChina) pChina.classList.remove('hidden');
    if (btnChina) {
      btnChina.className = 'portal-tab active-tab px-5 py-2.5 rounded-2xl border border-transparent font-black flex items-center gap-2.5 shadow-lg transition text-xs mono';
    }
    if (btnNomad) {
      btnNomad.className = 'portal-tab px-5 py-2.5 rounded-2xl border border-white/10 hover:bg-white/10 text-slate-300 font-bold flex items-center gap-2.5 transition text-xs mono';
    }
    window.location.hash = 'china';
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 5. NOMAD HUB ENGINE ---
function renderDestinations() {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;
  grid.innerHTML = '';

  const q = destSearchQuery.trim().toLowerCase();
  const filtered = destinations.filter(d => {
    const matchesCat = activeFilter === 'all' || d.category.toLowerCase() === activeFilter.toLowerCase();
    const matchesSearch = !q || 
      d.name.toLowerCase().includes(q) || 
      d.country.toLowerCase().includes(q) || 
      d.vibeTag.toLowerCase().includes(q) ||
      d.summary.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full p-12 text-center glass-card rounded-3xl border border-white/10 space-y-3">
        <i class="fa-solid fa-compass text-4xl text-slate-500"></i>
        <h3 class="text-lg font-bold text-white">No Destinations Match Your Filter</h3>
        <p class="text-xs text-slate-400">Try adjusting your search query or select 'All Hubs'.</p>
        <button onclick="resetDestFilters()" class="px-4 py-2 rounded-xl bg-teal-500 text-slate-950 font-bold text-xs mono mt-2">Reset All Filters</button>
      </div>
    `;
    return;
  }

  filtered.forEach(d => {
    const isSelected = d.id === selectedDestId;
    const card = document.createElement('div');
    card.onclick = () => selectDestination(d.id);
    card.className = `glass-card rounded-3xl overflow-hidden border transition cursor-pointer flex flex-col justify-between group hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/10 ${
      isSelected ? 'border-teal-400 ring-2 ring-teal-400/30 bg-teal-950/20 shadow-lg shadow-teal-500/10' : 'border-white/10'
    }`;

    card.innerHTML = `
      <div>
        <div class="h-44 w-full relative overflow-hidden">
          <img src="${d.image}" alt="${d.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold border mono uppercase ${d.badgeCol}">
            ${d.category}
          </span>
          <span class="absolute bottom-3 right-3 text-xs mono bg-black/60 px-2 py-0.5 rounded text-white backdrop-blur-sm">
            ${d.country}
          </span>
        </div>

        <div class="p-5 space-y-2.5">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-black text-white group-hover:text-teal-400 transition">${d.name}</h3>
            <span class="text-xs text-teal-400 mono font-bold">~$${d.dailyCost.nomad}/day</span>
          </div>
          <div class="text-xs text-slate-400 font-medium italic">${d.vibeTag}</div>
          <p class="text-xs text-slate-300 leading-relaxed line-clamp-2">${d.summary}</p>
        </div>
      </div>

      <div class="px-5 pb-5 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] mono text-slate-400">
        <span>Nomad: <strong class="text-emerald-400">${d.nomadScore}</strong></span>
        <span class="text-teal-400 font-bold group-hover:underline flex items-center gap-1">Inspect Roadmap <i class="fa-solid fa-arrow-right text-[10px]"></i></span>
      </div>
    `;

    grid.appendChild(card);
  });
}

function filterDestinations(category) {
  activeFilter = category;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.cat.toLowerCase() === category.toLowerCase()) {
      btn.className = "cat-btn px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 text-slate-950 font-black shadow-md transition";
    } else {
      btn.className = "cat-btn px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/15 text-slate-300 border border-white/10 transition";
    }
  });
  renderDestinations();
}

function handleDestSearch(val) {
  destSearchQuery = val;
  renderDestinations();
}

function resetDestFilters() {
  destSearchQuery = '';
  const searchInput = document.getElementById('destSearch');
  if (searchInput) searchInput.value = '';
  filterDestinations('all');
}

function selectDestination(destId) {
  selectedDestId = destId;
  renderDestinations();

  const sel = document.getElementById('budgetDestSelect');
  if (sel) sel.value = destId;

  calculateBudget();
  renderItinerary();

  const itSection = document.getElementById('itinerary');
  if (itSection) {
    itSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

function setTravelTier(tier) {
  currentTier = tier;
  document.querySelectorAll('.tier-btn').forEach(btn => {
    if (btn.dataset.tier === tier) {
      btn.className = "tier-btn p-3 rounded-2xl border border-teal-500/50 bg-teal-500/20 text-xs font-black text-teal-300 mono transition shadow-lg";
    } else {
      btn.className = "tier-btn p-3 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 text-xs font-medium text-slate-300 mono transition";
    }
  });
  calculateBudget();
}

function calculateBudget() {
  const destSelect = document.getElementById('budgetDestSelect');
  if (!destSelect) return;
  const destId = destSelect.value;
  const days = parseInt(document.getElementById('tripDays').value);
  const travelers = parseInt(document.getElementById('travelersCount').value);

  document.getElementById('tripDaysVal').innerText = `${days} Days`;
  document.getElementById('travelersVal').innerText = `${travelers} Person${travelers > 1 ? 's' : ''}`;

  const dest = destinations.find(d => d.id === destId) || destinations[0];
  const dailyRatePerPerson = dest.dailyCost[currentTier] || 100;

  const lodgingTotal = Math.round(dailyRatePerPerson * 0.50 * days * Math.ceil(travelers / 2));
  const foodTotal = Math.round(dailyRatePerPerson * 0.30 * days * travelers);
  const activityTotal = Math.round(dailyRatePerPerson * 0.20 * days * travelers);

  const grandTotal = lodgingTotal + foodTotal + activityTotal;
  const perPerson = Math.round(grandTotal / travelers);

  document.getElementById('totalCostDisplay').innerText = `$${grandTotal.toLocaleString()}`;
  document.getElementById('perPersonDisplay').innerText = `($${perPerson.toLocaleString()} / person)`;
  document.getElementById('lodgingCostDisplay').innerText = `$${lodgingTotal.toLocaleString()}`;
  document.getElementById('foodCostDisplay').innerText = `$${foodTotal.toLocaleString()}`;
  document.getElementById('activityCostDisplay').innerText = `$${activityTotal.toLocaleString()}`;

  const tipEl = document.getElementById('budgetTip');
  if (tipEl) tipEl.innerText = `${dest.name} Pro Tip: ${dest.tip}`;
}

function renderItinerary() {
  const dest = destinations.find(d => d.id === selectedDestId) || destinations[0];
  const nameEl = document.getElementById('itineraryHubName');
  const grid = document.getElementById('itineraryGrid');

  if (nameEl) nameEl.innerText = `${dest.name}, ${dest.country}`;
  if (!grid) return;

  grid.innerHTML = '';
  dest.itinerary.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = "glass-card rounded-2xl p-5 border border-white/10 space-y-2 flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between text-xs mono text-teal-400">
          <span class="font-black">${item.day}</span>
          <span class="text-slate-500">Stop 0${idx + 1}</span>
        </div>
        <h4 class="text-base font-black text-white mt-1">${item.title}</h4>
        <p class="text-xs text-slate-300 leading-relaxed mt-2">${item.desc}</p>
      </div>
      <div class="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] mono text-slate-400">
        <span>Pace: Balanced</span>
        <label class="flex items-center gap-1.5 cursor-pointer text-slate-300 hover:text-teal-300 transition">
          <input type="checkbox" class="rounded border-white/20 bg-white/10 text-teal-500 focus:ring-0">
          <span>Milestone Checked</span>
        </label>
      </div>
    `;
    grid.appendChild(card);
  });
}

// --- 6. CHINA 2026 EXPEDITION ENGINE ---
function switchChinaView(viewName) {
  activeChinaView = viewName;
  document.querySelectorAll('.china-view-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.china-nav-tab').forEach(b => {
    b.classList.remove('active-tab');
    b.classList.add('text-slate-300');
  });

  const targetView = document.getElementById('view-' + viewName);
  const targetBtn = document.getElementById('btn-china-' + viewName);
  if (targetView) targetView.classList.remove('hidden');
  if (targetBtn) {
    targetBtn.classList.add('active-tab');
    targetBtn.classList.remove('text-slate-300');
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
          <div class="absolute bottom-4 left-4 right-4">
            <h3 class="text-xl font-black text-white">${node.title}</h3>
          </div>
        </div>

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

// --- 8. INITIALIZATION ---
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeDrawer();
    closeAddRestaurantModal();
  }
});

function initApp() {
  if (window.location.hash === '#china') {
    switchPortal('china');
  } else {
    switchPortal('nomad');
  }

  try { renderDestinations(); } catch (e) { console.error('Nomad destinations err:', e); }
  try { calculateBudget(); } catch (e) { console.error('Nomad budget err:', e); }
  try { renderItinerary(); } catch (e) { console.error('Nomad itinerary err:', e); }

  try { renderDailySchedule('all'); } catch (e) { console.error('China schedule err:', e); }
  try { renderRestaurants('all'); } catch (e) { console.error('China dining err:', e); }
  try { calculateChinaBudget(); } catch (e) { console.error('China budget err:', e); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
