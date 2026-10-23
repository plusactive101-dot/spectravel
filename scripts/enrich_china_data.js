const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataFilePath = path.join(__dirname, '..', 'china-data.js');
const rawContent = fs.readFileSync(dataFilePath, 'utf8');

// Execute in sandbox to retrieve variables
const sandbox = { window: {}, globalThis: {} };
vm.createContext(sandbox);
vm.runInContext(rawContent, sandbox);

const originalAttractions = sandbox.window.expeditionAttractions || sandbox.expeditionAttractions || [];
console.log(`[*] Loaded ${originalAttractions.length} attractions.`);

// Themed high-resolution photos for fallbacks
const themedImages = {
  "Skyline & Modern": [
    "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
    "https://images.unsplash.com/photo-1563384218386-9dcaf77ef0a8?w=800&q=80",
    "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80",
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
  ],
  "Heritage & Culture": [
    "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80",
    "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80",
    "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80",
    "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
  ],
  "Nature & Hiking": [
    "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80",
    "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
  ],
  "Theme Parks & Wildlife": [
    "https://images.unsplash.com/photo-1564175822606-8d693f4cc14d?w=800&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
  ],
  "Markets & Walking Streets": [
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
  ],
  "Museums & Galleries": [
    "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80",
    "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80"
  ]
};

// Region normalizing map
function resolveRegionAndCategory(item) {
  let reg = item.region;
  let cat = item.category;

  // If region is undefined, determine from category
  if (!reg) {
    if (cat === 'Guangzhou Panyu') { reg = 'Panyu'; cat = 'Heritage & Culture'; }
    else if (cat === 'Chimelong Safari & Circus') { reg = 'Chimelong'; cat = 'Theme Parks & Wildlife'; }
    else if (cat === 'Canton Heritage') { reg = 'Canton Heritage'; cat = 'Heritage & Culture'; }
    else if (cat === 'Qingyuan Gulong Gorge') { reg = 'Qingyuan'; cat = 'Nature & Hiking'; }
    else if (cat === 'Shenzhen Nanshan Tech') { reg = 'Shenzhen'; cat = 'Skyline & Modern'; }
    else if (cat === 'Hong Kong Mong Kok & Harbour') { reg = 'Hong Kong'; cat = 'Skyline & Modern'; }
    else { reg = 'Canton Heritage'; }
  }

  // Normalize region names to match standard filter buttons
  if (reg === 'Guangzhou' || reg === 'Canton') reg = 'Canton Heritage';
  if (reg === 'HongKong') reg = 'Hong Kong';

  // Ensure category is a valid descriptive category
  if (cat === 'Guangzhou Panyu' || cat === 'Chimelong Safari & Circus' || cat === 'Canton Heritage' || cat === 'Qingyuan Gulong Gorge' || cat === 'Shenzhen Nanshan Tech' || cat === 'Hong Kong Mong Kok & Harbour') {
    if (item.tag) {
      if (item.tag.includes('PARK') || item.tag.includes('SAFARI') || item.tag.includes('CIRCUS')) cat = 'Theme Parks & Wildlife';
      else if (item.tag.includes('NATURE') || item.tag.includes('HIKE') || item.tag.includes('MOUNTAIN') || item.tag.includes('CANYON')) cat = 'Nature & Hiking';
      else if (item.tag.includes('TECH') || item.tag.includes('FLAGSHIP') || item.tag.includes('SKYLINE')) cat = 'Skyline & Modern';
      else if (item.tag.includes('MARKET') || item.tag.includes('FOOD') || item.tag.includes('STREET')) cat = 'Markets & Walking Streets';
      else cat = 'Heritage & Culture';
    } else {
      cat = 'Heritage & Culture';
    }
  }

  return { region: reg, category: cat };
}

// Canonical merge mapping for known duplicates
const mergePairs = [
  { canonical: 'cantontower', redundant: 'poi-canton-tower' },
  { canonical: 'victoria-harbour', redundant: 'victoria' },
  { canonical: 'victoria_peak', redundant: 'poi-victoria-peak-the-peak' },
  { canonical: 'gulong_glass', redundant: 'poi-gulong-gorge-glass-skywalk' },
  { canonical: 'lionrock', redundant: 'poi-lion-rock-country-park-ridge-trail' }
];

const mergedMap = new Map();
originalAttractions.forEach(item => {
  mergedMap.set(item.id, { ...item });
});

mergePairs.forEach(({ canonical, redundant }) => {
  if (mergedMap.has(canonical) && mergedMap.has(redundant)) {
    const c = mergedMap.get(canonical);
    const r = mergedMap.get(redundant);
    
    // Merge reviews
    const cReviews = c.reviews || [];
    const rReviews = r.reviews || [];
    const seenUrls = new Set(cReviews.map(x => x.url));
    rReviews.forEach(rev => {
      if (!seenUrls.has(rev.url)) {
        cReviews.push(rev);
        seenUrls.add(rev.url);
      }
    });
    c.reviews = cReviews;

    // Merge photos
    const cPhotos = c.photos || [];
    const rPhotos = r.photos || [];
    const photoSet = new Set(cPhotos);
    rPhotos.forEach(p => {
      if (!p.includes('photo-1506744038136-46273834b3fb') && !photoSet.has(p)) {
        cPhotos.push(p);
        photoSet.add(p);
      }
    });
    c.photos = cPhotos;

    // Merge bilingual fields
    if (!c.nameZh && r.nameZh) c.nameZh = r.nameZh;
    if (!c.address && r.address) c.address = r.address;
    if ((!c.coordinates || c.coordinates.length < 2) && r.coordinates) c.coordinates = r.coordinates;
    if (!c.review && r.review) c.review = r.review;
    if (!c.desc && r.desc) c.desc = r.desc;
    if (!c.website && r.website) c.website = r.website;

    // Delete redundant
    mergedMap.delete(redundant);
    console.log(`[+] Merged redundant [${redundant}] into canonical [${canonical}].`);
  }
});

const enrichedAttractions = Array.from(mergedMap.values()).map((item, idx) => {
  const { region, category } = resolveRegionAndCategory(item);
  item.region = region;
  item.category = category;

  // Fix placeholder images
  const pool = themedImages[category] || themedImages["Heritage & Culture"];
  const fallbackImg = pool[idx % pool.length];

  if (!item.image || item.image.includes('photo-1506744038136-46273834b3fb')) {
    item.image = fallbackImg;
  }

  if (!item.photos || item.photos.length === 0) {
    item.photos = [item.image];
  } else {
    item.photos = item.photos.map(p => p.includes('photo-1506744038136-46273834b3fb') ? fallbackImg : p);
  }

  return item;
});

console.log(`[*] Total enriched attractions: ${enrichedAttractions.length}`);

const marker = "// --- EXPEDITION ATTRACTIONS DATASET ---";
const parts = rawContent.split(marker);
if (parts.length < 2) {
  console.error("[-] Marker not found!");
  process.exit(1);
}

let header = parts[0].trim();
if (!header.includes("window.itinerarySchedule = itinerarySchedule")) {
  header = header.replace(
    /(const itinerarySchedule = \[[\s\S]*?\];)/,
    "$1\nif (typeof window !== 'undefined') window.itinerarySchedule = itinerarySchedule;\nif (typeof globalThis !== 'undefined') globalThis.itinerarySchedule = itinerarySchedule;\n"
  );
}

const newFileContent = `${header}

// --- EXPEDITION ATTRACTIONS DATASET ---
const expeditionAttractions = ${JSON.stringify(enrichedAttractions, null, 2)};

if (typeof window !== 'undefined') window.expeditionAttractions = expeditionAttractions;
if (typeof globalThis !== 'undefined') globalThis.expeditionAttractions = expeditionAttractions;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    expeditionAttractions: expeditionAttractions,
    hotelRoomsData: (typeof hotelRoomsData !== 'undefined' ? hotelRoomsData : undefined),
    itinerarySchedule: (typeof itinerarySchedule !== 'undefined' ? itinerarySchedule : undefined)
  };
}
`;

fs.writeFileSync(dataFilePath, newFileContent, 'utf8');
console.log(`[+] Successfully updated china-data.js!`);
