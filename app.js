// SPECTRAVEL - Global Destination Intelligence & Nomad Engine

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
      { day: "Day 7", title: "Mount Batur Sunrise Trek", desc: "Early 3:00 AM volcanic ascent for clouds floating below golden sunrise horizons." }
    ]
  },
  {
    id: "lisbon",
    name: "Lisbon & Sintra",
    country: "Portugal",
    category: "Heritage",
    vibeTag: "Coastal European Charm",
    badgeCol: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    image: "https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 40, nomad: 90, luxury: 280 },
    bestSeason: "April - June & Sept - Oct",
    nomadScore: "9.3 / 10",
    summary: "Cobblestone hills, pastel tile facades, sunlit miradouros (viewpoints), vibrant coastal cafe culture, and nearby fairytale palaces.",
    tip: "Take vintage Tram 28 early in the morning before crowds to experience historic Alfama hills.",
    itinerary: [
      { day: "Day 1-2", title: "Alfama & Castelo de São Jorge", desc: "Wander maze-like moorish alleys, listen to authentic live Fado, and enjoy sunset over Tagus." },
      { day: "Day 3-4", title: "Belém & LX Factory", desc: "Tower of Belém, Jerónimos Monastery, Pastéis de Belém custard tarts, and creative hubs." },
      { day: "Day 5-6", title: "Fairytale Sintra & Cabo da Roca", desc: "Pena Palace romanticist architecture, Quinta da Regaleira inverted well, and Europe's westernmost cape." },
      { day: "Day 7", title: "Cascais Coastal Day", desc: "Atlantic ocean breeze, scenic cycling trails, and fresh grilled seafood." }
    ]
  },
  {
    id: "banff",
    name: "Banff & Lake Louise",
    country: "Canada",
    category: "Alpine",
    vibeTag: "Turquoise Glacial Lakes",
    badgeCol: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 65, nomad: 150, luxury: 420 },
    bestSeason: "June - Sept & Dec - March",
    nomadScore: "8.6 / 10",
    summary: "Iconic electric-blue glacial waters set against the jagged grandeur of the Canadian Rockies and endless wildlife corridors.",
    tip: "Book national park shuttle reservations early for Moraine Lake sunrise access.",
    itinerary: [
      { day: "Day 1-2", title: "Banff Town & Sulphur Mountain", desc: "Gondola to 360-degree mountain boardwalks and Banff Upper Hot Springs soaking." },
      { day: "Day 3-4", title: "Lake Louise & Lake Agnes Teahouse", desc: "Paddle electric-turquoise waters and hike up to a historic off-grid alpine teahouse." },
      { day: "Day 5-6", title: "Icefields Parkway & Athabasca Glacier", desc: "One of the world's most scenic highway drives past towering hanging glaciers." },
      { day: "Day 7", title: "Moraine Lake Valley of the Ten Peaks", desc: "Iconic turquoise lake sunrise and canoe adventure beneath towering rock spires." }
    ]
  },
  {
    id: "amalfi",
    name: "Amalfi Coast & Positano",
    country: "Italy",
    category: "Coastal",
    vibeTag: "Cliffside Mediterranean",
    badgeCol: "bg-orange-500/20 text-orange-300 border-orange-500/30",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 80, nomad: 180, luxury: 550 },
    bestSeason: "May - June & Sept - Oct",
    nomadScore: "8.5 / 10",
    summary: "Dramatic coastal cliffs plunging into sapphire sea, pastel villas cascading down vertical ravines, and fragrance of lemon groves.",
    tip: "Use scenic public ferries between Positano and Amalfi to skip narrow, winding cliff road traffic.",
    itinerary: [
      { day: "Day 1-2", title: "Positano Vertical Village", desc: "Explore Spiaggia Grande beach, bougainvillea archways, and hillside seafood terraces." },
      { day: "Day 3-4", title: "Path of the Gods (Sentiero degli Dei)", desc: "Exhilarating 8km clifftop hike suspended 500 meters above the Mediterranean coastline." },
      { day: "Day 5-6", title: "Ravello & Villa Cimbrone", desc: "Quiet clifftop retreat with historic infinity gardens gazing across the Gulf of Salerno." },
      { day: "Day 7", title: "Capri Island Day Charter", desc: "Sail through the Faraglioni sea stacks and swim in luminous Blue Grotto waters." }
    ]
  },
  {
    id: "kyoto",
    name: "Kyoto",
    country: "Japan",
    category: "Heritage",
    vibeTag: "Ancient Zen Sanctuaries",
    badgeCol: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 40, nomad: 95, luxury: 300 },
    bestSeason: "April (Sakura) & November (Momiji)",
    nomadScore: "9.2 / 10",
    summary: "Over 1,600 historic Buddhist temples, tranquil moss gardens, towering Arashiyama bamboo groves, and timeless geisha quarters.",
    tip: "Visit Fushimi Inari shrine at dawn (6:00 AM) to experience the thousands of vermilion torii gates in pure peace.",
    itinerary: [
      { day: "Day 1-2", title: "Higashiyama & Kiyomizu-dera", desc: "Walk preserved wooden lantern alleys of Ninenzaka and the grand wooden stage of Kiyomizu." },
      { day: "Day 3-4", title: "Arashiyama & Sagano Bamboo Grove", desc: "Walk through towering bamboo stalks, visit Tenryu-ji zen temple, and feed macaque monkeys." },
      { day: "Day 5-6", title: "Kinkaku-ji & Philosopher's Path", desc: "The Golden Pavilion reflecting on mirroring ponds, and peaceful canal walks lined with cafes." },
      { day: "Day 7", title: "Nara Day Trip & Sacred Deer", desc: "35-minute express train to feed bow-trained wild deer and visit Daibutsu giant bronze Buddha." }
    ]
  },
  {
    id: "capetown",
    name: "Cape Town",
    country: "South Africa",
    category: "Coastal",
    vibeTag: "Dramatic Ocean & Mountains",
    badgeCol: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=800&q=80",
    dailyCost: { backpacker: 35, nomad: 75, luxury: 250 },
    bestSeason: "November - March",
    nomadScore: "9.1 / 10",
    summary: "Where Table Mountain meets two colliding oceans. World-class wine estates, coastal penguin colonies, and vibrant culinary arts.",
    tip: "Uber is exceptionally safe, affordable, and readily available across all central districts.",
    itinerary: [
      { day: "Day 1-2", title: "Table Mountain & Lion's Head", desc: "Cable car up Table Mountain and catch sunset paragliders from Lion's Head crest." },
      { day: "Day 3-4", title: "Cape Peninsula & Boulders Beach", desc: "Drive Chapmans Peak clifftop pass to visit wild African penguins at Boulders Beach." },
      { day: "Day 5-6", title: "Stellenbosch & Franschhoek Winelands", desc: "Historic Cape Dutch architecture and world-renowned wine tasting on open-air trams." },
      { day: "Day 7", title: "Kirstenbosch & Camps Bay Beach", desc: "Canopy walkway through botanical gardens and sunset drinks along Camps Bay promenade." }
    ]
  }
];

let activeFilter = 'all';
let selectedDestId = 'tokyo';
let currentTier = 'nomad';

// Render Destination Cards
function renderDestinations() {
  const grid = document.getElementById('destinationsGrid');
  if (!grid) return;

  const filtered = activeFilter === 'all' 
    ? destinations 
    : destinations.filter(d => d.category.toLowerCase() === activeFilter.toLowerCase());

  grid.innerHTML = '';

  filtered.forEach(d => {
    const isSelected = d.id === selectedDestId;
    const card = document.createElement('div');
    card.onclick = () => selectDestination(d.id);
    card.className = `glass-card rounded-2xl overflow-hidden border transition cursor-pointer flex flex-col justify-between group hover:border-teal-400/50 hover:shadow-xl hover:shadow-teal-500/10 ${
      isSelected ? 'border-teal-400 ring-2 ring-teal-400/30 bg-dark-850' : 'border-dark-800'
    }`;

    card.innerHTML = `
      <div>
        <div class="h-44 w-full relative overflow-hidden">
          <img src="${d.image}" alt="${d.name}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent"></div>
          <span class="absolute top-3 left-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold border mono uppercase ${d.badgeCol}">
            ${d.category}
          </span>
          <span class="absolute bottom-3 right-3 text-xs mono bg-black/60 px-2 py-0.5 rounded text-white backdrop-blur-sm">
            ${d.country}
          </span>
        </div>

        <div class="p-5 space-y-2.5">
          <div class="flex items-center justify-between">
            <h3 class="text-lg font-bold text-white group-hover:text-travel-400 transition">${d.name}</h3>
            <span class="text-xs text-travel-400 mono font-semibold">~$${d.dailyCost.nomad}/day</span>
          </div>
          <p class="text-xs text-slate-300 leading-relaxed line-clamp-2">${d.summary}</p>
        </div>
      </div>

      <div class="px-5 pb-5 pt-2 border-t border-dark-800/80 flex items-center justify-between text-[11px] mono text-slate-400">
        <span>Nomad: <strong class="text-emerald-400">${d.nomadScore}</strong></span>
        <span class="text-travel-400 group-hover:underline">View Roadmap →</span>
      </div>
    `;

    grid.appendChild(card);
  });
}

// Category filter
function filterDestinations(category) {
  activeFilter = category;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.dataset.cat.toLowerCase() === category.toLowerCase()) {
      btn.className = "cat-btn px-3 py-1.5 rounded-lg bg-travel-500 text-dark-950 font-bold transition";
    } else {
      btn.className = "cat-btn px-3 py-1.5 rounded-lg bg-dark-850 hover:bg-dark-800 text-slate-300 border border-dark-700 transition";
    }
  });
  renderDestinations();
}

// Select Destination
function selectDestination(destId) {
  selectedDestId = destId;
  renderDestinations();
  
  // Sync budget select
  const sel = document.getElementById('budgetDestSelect');
  if (sel) {
    sel.value = destId;
  }

  calculateBudget();
  renderItinerary();

  const itSection = document.getElementById('itinerary');
  if (itSection) {
    itSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Set Travel Tier
function setTravelTier(tier) {
  currentTier = tier;
  document.querySelectorAll('.tier-btn').forEach(btn => {
    if (btn.dataset.tier === tier) {
      btn.className = "tier-btn p-2.5 rounded-xl border border-teal-500/50 bg-teal-500/15 text-xs font-bold text-teal-300 mono transition";
    } else {
      btn.className = "tier-btn p-2.5 rounded-xl border border-dark-700 bg-dark-850 text-xs font-medium text-slate-300 mono transition";
    }
  });
  calculateBudget();
}

// Calculate Budget
function calculateBudget() {
  const destId = document.getElementById('budgetDestSelect').value;
  const days = parseInt(document.getElementById('tripDays').value);
  const travelers = parseInt(document.getElementById('travelersCount').value);

  document.getElementById('tripDaysVal').innerText = `${days} Days`;
  document.getElementById('travelersVal').innerText = `${travelers} Person${travelers > 1 ? 's' : ''}`;

  const dest = destinations.find(d => d.id === destId) || destinations[0];
  const dailyRatePerPerson = dest.dailyCost[currentTier] || 80;

  // Breakdown percentages
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
  if (tipEl) tipEl.innerText = `${dest.name} tip: ${dest.tip}`;
}

// Render Itinerary Roadmap
function renderItinerary() {
  const dest = destinations.find(d => d.id === selectedDestId) || destinations[0];
  const nameEl = document.getElementById('itineraryHubName');
  const grid = document.getElementById('itineraryGrid');

  if (nameEl) nameEl.innerText = `${dest.name}, ${dest.country}`;
  if (!grid) return;

  grid.innerHTML = '';
  dest.itinerary.forEach((item, idx) => {
    const card = document.createElement('div');
    card.className = "bg-dark-900 rounded-xl p-5 border border-dark-800 space-y-2 flex flex-col justify-between";
    card.innerHTML = `
      <div>
        <div class="flex items-center justify-between text-xs mono text-travel-400">
          <span class="font-bold">${item.day}</span>
          <span class="text-slate-500">Stop 0${idx + 1}</span>
        </div>
        <h4 class="text-sm font-bold text-white mt-1">${item.title}</h4>
        <p class="text-xs text-slate-300 leading-relaxed mt-2">${item.desc}</p>
      </div>
      <div class="pt-3 border-t border-dark-800/80 text-[11px] mono text-slate-500">
        Recommended Pace: Balanced
      </div>
    `;
    grid.appendChild(card);
  });
}

// Initialization on load
document.addEventListener('DOMContentLoaded', () => {
  renderDestinations();
  calculateBudget();
  renderItinerary();
});
