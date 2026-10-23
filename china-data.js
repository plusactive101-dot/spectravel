// MKTRAVEL - China 2026 Greater Bay Area Expedition Repository

const itinerarySchedule = [
      {
        day: 1,
        date: "2026-11-29",
        weekday: "Sunday",
        city: "panyu",
        region: "Guangzhou (Panyu)",
        badgeColor: "bg-orange-500",
        hotel: "Mehood Lestie Hotel (Guangzhou Panyu)",
        transport: "CX982 CAN Arrival (08:55 AM) → Didi south to Panyu (~55 min, ~¥150)",
        foodTip: "Shawan buffalo ginger milk curd & hotel late-night noodle bowl",
        activities: [
          "Land at CAN Guangzhou Baiyun Airport at 08:55 AM (CX982 from SIN via HKG)",
          "Take Didi south to Panyu Shatou Street (~55 mins on smooth highway)",
          "Check in to Mehood Lestie Hotel (Warm Parent-Child Room)",
          "Afternoon rest & complimentary afternoon tea buffet (14:00–18:00)",
          "Explore Shawan Ancient Town (historic oyster shell houses, water-buffalo milk curd)",
          "Complimentary late-night noodles at hotel (21:00–23:00)"
        ]
      },
      {
        day: 2,
        date: "2026-11-30",
        weekday: "Monday",
        city: "chimelong",
        region: "Chimelong Resort Core",
        badgeColor: "bg-emerald-500",
        hotel: "Chimelong Hotel (Guangzhou)",
        transport: "Short Didi transfer (~15 mins) from Mehood to Chimelong Resort",
        foodTip: "Lunch in Panyu, evening snacks before Chimelong Circus",
        activities: [
          "Buffet breakfast for 2 at Mehood Lestie, enjoy guaranteed late checkout at 14:00",
          "Didi transfer to Chimelong Hotel (Exploration Kid's Room)",
          "Activate 3-Day Unlimited Multi-Park Pass with facial recognition ID",
          "Chimelong Safari Park exploration (take open train on right side, see panda triplets, ride sky gondola)",
          "Evening 90-min world-class Chimelong International Circus show"
        ]
      },
      {
        day: 3,
        date: "2026-12-01",
        weekday: "Tuesday",
        city: "chimelong",
        region: "Chimelong Resort Core",
        badgeColor: "bg-emerald-500",
        hotel: "Chimelong Hotel (Guangzhou)",
        transport: "Resort complimentary electric shuttles between parks",
        foodTip: "Times E-PARK dining (Michelin Bingsheng Taste / Tao Tao Ju)",
        activities: [
          "Take advantage of 30-minute early park entry via North Gate",
          "Chimelong Paradise thrill rides (B&M Dive Coaster, 10-Inversion Coaster, kids zone)",
          "Chimelong Birds Park afternoon excursion (pelican feeding & wetland boat tour)",
          "Dinner outside resort at Times E-PARK (7 mins Didi) to avoid marked-up park food"
        ]
      },
      {
        day: 4,
        date: "2026-12-02",
        weekday: "Wednesday",
        city: "yuexiu",
        region: "Guangzhou (Downtown Yuexiu)",
        badgeColor: "bg-purple-500",
        hotel: "Atour Hotel Dongshankou (Guangzhou)",
        transport: "Didi north from Chimelong to Yuexiu (~35 mins)",
        foodTip: "Beijing Road traditional roast goose & street snack alleys",
        activities: [
          "Check out of Chimelong Hotel by 11:00 AM, Didi north into central Guangzhou",
          "Check in to Atour Hotel Dongshankou (Deluxe Twin Room)",
          "Stroll historic 1920s red-brick Dongshan mansions, trendy indie boutiques & cafes",
          "Beijing Road Pedestrian Street exploration & Dafo Temple night illumination"
        ]
      },
      {
        day: 5,
        date: "2026-12-03",
        weekday: "Thursday",
        city: "yuexiu",
        region: "Qingyuan (Gulong Gorge Expedition)",
        badgeColor: "bg-blue-500",
        hotel: "Atour Hotel Dongshankou (Guangzhou)",
        transport: "Private driver van charter round-trip (~9-10h, ~¥700-1,100)",
        foodTip: "Authentic Qingyuan farmhouse free-range white cut chicken (清远白切鸡)",
        activities: [
          "Morning pickup by private driver charter at Atour Hotel lobby",
          "Yuntian Glass Skywalk & Bridge (cantilevered 530m above canyon)",
          "Giant Buddha Hand panoramic photo platform over the ravine",
          "Cliff Coaster alpine mountain toboggan ride down the mountain",
          "Nine Waterfalls scenic canyon trail & farmhouse feast",
          "Evening return to Guangzhou; autonomous robot waimai dinner delivery at Atour"
        ]
      },
      {
        day: 6,
        date: "2026-12-04",
        weekday: "Friday",
        city: "yuexiu",
        region: "Guangzhou (Heritage, Xiguan & Yongqing Fang)",
        badgeColor: "bg-purple-500",
        hotel: "Atour Hotel Dongshankou (Guangzhou)",
        transport: "Guangzhou Metro Line 1 / 6 & Didi",
        foodTip: "Morning Tea (08:30–10:30) at Guangzhou Restaurant (Longjin West Branch) by Lychee Bay",
        activities: [
          "08:30–10:30 AM: Morning Tea / Dim Sum banquet at Guangzhou Restaurant (Longjin West Road Branch) / 广州酒家（龙津西路店） by Lychee Bay canal (10-dish signature feast)",
          "Colonial European architecture walk on Shamian Island",
          "Xiguan traditional houses & Yongqing Fang revitalized heritage quarter",
          "Cantonese Opera Art Museum water stage performance",
          "Huangpu Ancient Port or Shangxiajiu historic traditional food alleys"
        ]
      },
      {
        day: 7,
        date: "2026-12-05",
        weekday: "Saturday",
        city: "yuexiu",
        region: "Guangzhou (Modern Skyline & CBD)",
        badgeColor: "bg-purple-500",
        hotel: "Atour Hotel Dongshankou (Guangzhou)",
        transport: "APM automated people mover & Metro Line 3",
        foodTip: "Zhujiang New Town CBD riverside restaurants",
        activities: [
          "Zhujiang New Town CBD & Guangdong Museum architecture",
          "Haixinsha Asian Games Park & Ersha Island music park",
          "Cross Haixinqiao pedestrian suspension bridge across Pearl River",
          "Canton Tower evening illumination & Pearl River night cruise"
        ]
      },
      {
        day: 8,
        date: "2026-12-06",
        weekday: "Sunday",
        city: "yuexiu",
        region: "Guangzhou (Classic Highlights)",
        badgeColor: "bg-purple-500",
        hotel: "Atour Hotel Dongshankou (Guangzhou)",
        transport: "Metro Line 1 / 2",
        foodTip: "Morning Yum Cha dim sum feast at iconic Panxi Restaurant (泮溪酒家)",
        activities: [
          "Morning Yum Cha dim sum feast at iconic lakeside Panxi Restaurant",
          "Yuexiu Park & iconic Five Rams sculpture monument",
          "Chen Clan Ancestral Hall intricate wood, brick, and pottery carvings",
          "Evening packing and preparations for high-speed bullet rail transfer"
        ]
      },
      {
        day: 9,
        date: "2026-12-07",
        weekday: "Monday",
        city: "shenzhen",
        region: "Guangzhou to Shenzhen (Nanshan)",
        badgeColor: "bg-pink-500",
        hotel: "Qiuguo S Hotel Shenzhen (Nanshan)",
        transport: "High-Speed Rail from Guangzhou South to Shenzhen North / Futian (30–45 mins)",
        foodTip: "Nantou Ancient City craft breweries & Chaozhou beef hotpot",
        activities: [
          "Check out of Atour Hotel by 12:00 PM",
          "High-Speed Rail bullet train from Guangzhou South to Shenzhen North / Futian",
          "Check in to Qiuguo S Hotel Nantou (Forest Oxygen Bar Family Suite, 1 Queen + 1 Bunk Bed)",
          "Complimentary Qiuguo comforting package, minibar & vitamin station",
          "Evening stroll through 1,700-year-old Nantou Ancient City right beside hotel"
        ]
      },
      {
        day: 10,
        date: "2026-12-08",
        weekday: "Tuesday",
        city: "shenzhen",
        region: "Shenzhen (Tech & Innovation)",
        badgeColor: "bg-pink-500",
        hotel: "Qiuguo S Hotel Shenzhen (Nanshan)",
        transport: "Shenzhen Metro Line 1 / 2 & Didi",
        foodTip: "OCT-LOFT artsy cafes & Huaqiangbei street food",
        activities: [
          "Breakfast for 3 included at Qiuguo S Hotel",
          "Huaqiangbei electronics & drone markets (world capital of hardware tech)",
          "OCT-LOFT creative culture park and contemporary art galleries",
          "Ping An Finance Centre 118th floor observation deck for Shenzhen panoramas"
        ]
      },
      {
        day: 11,
        date: "2026-12-09",
        weekday: "Wednesday",
        city: "shenzhen",
        region: "Shenzhen (Coastal & Leisure)",
        badgeColor: "bg-pink-500",
        hotel: "Qiuguo S Hotel Shenzhen (Nanshan)",
        transport: "Metro Line 9 / 11",
        foodTip: "Sea World Shekou international promenade dining",
        activities: [
          "Breakfast for 3 included at Qiuguo S Hotel",
          "Shenzhen Bay coastal park family cycling facing Hong Kong skyline",
          "Sea World Shekou plaza dining & Minghua cruise ship illumination",
          "Final evening packing for Hong Kong cross-border bullet train"
        ]
      },
      {
        day: 12,
        date: "2026-12-10",
        weekday: "Thursday",
        city: "hongkong",
        region: "Shenzhen to Hong Kong (Mong Kok)",
        badgeColor: "bg-amber-500",
        hotel: "Royal Plaza Hotel Hong Kong (Mong Kok)",
        transport: "14-min High-Speed Rail: Shenzhen Futian → HK West Kowloon (Joint Customs)",
        foodTip: "Mong Kok street stalls (curry fishballs, egg waffles) & Kam Wah pineapple bun",
        activities: [
          "Breakfast for 3 included at Qiuguo, checkout before 12:00 PM",
          "Futian Station: 14-min High-Speed Rail bullet train to HK West Kowloon (joint customs)",
          "Check in to Royal Plaza Hotel Mong Kok (Plaza Deluxe Family Room, 2 Double Beds)",
          "Direct access to connected 7-storey MOKO Shopping Mall",
          "Evening exploration of Mong Kok Ladies' Market, Goldfish Street, and Sneaker Street"
        ]
      },
      {
        day: 13,
        date: "2026-12-11",
        weekday: "Friday",
        city: "hongkong",
        region: "Hong Kong (Harbour & Peak)",
        badgeColor: "bg-amber-500",
        hotel: "Royal Plaza Hotel Hong Kong (Mong Kok)",
        transport: "MTR East Rail Line, Star Ferry & Historic Peak Tram",
        foodTip: "Tim Ho Wan dim sum & Victoria Peak panoramic restaurant",
        activities: [
          "Tsim Sha Tsui Avenue of Stars harbour promenade",
          "Historic Star Ferry ride across Victoria Harbour to Central",
          "Tai Kwun heritage police compound and revitalized art galleries",
          "Peak Tram ride up to Victoria Peak for panoramic world-class skyline",
          "Evening return to Mong Kok MOKO Mall"
        ]
      },
      {
        day: 14,
        date: "2026-12-12",
        weekday: "Saturday",
        city: "hongkong",
        region: "Hong Kong to Singapore",
        badgeColor: "bg-cyan-500",
        hotel: "Flight CX657 Home",
        transport: "Airport Express from Kowloon Station to HKG Airport (~22 mins)",
        foodTip: "Traditional Kowloon morning dim sum & airport dining",
        activities: [
          "Morning traditional dim sum breakfast in Kowloon",
          "Check out of Royal Plaza Hotel (store luggage or in-town check-in)",
          "Last-minute duty-free shopping at connected MOKO Mall",
          "Airport Express from Kowloon Station to HKG Airport (~22 mins)",
          "Cathay Pacific CX657: Depart HKG 16:05 → Arrive SIN 20:05",
          "Welcome home to Singapore!"
        ]
      }
    ];
if (typeof window !== 'undefined') window.itinerarySchedule = itinerarySchedule;
if (typeof globalThis !== 'undefined') globalThis.itinerarySchedule = itinerarySchedule;


    // -------------------------------------------------------------
    // 2. DEFAULT RESTAURANTS DATABASE
    // -------------------------------------------------------------

const defaultRestaurants = [
  {
    "id": "rest-1",
    "name": "Shawan Ancient Town Milk Shop (沁芳园甜品)",
    "city": "Guangzhou",
    "district": "Panyu",
    "category": "Dessert",
    "cuisine": "Traditional Lingnan Desserts (沙湾水牛奶甜品)",
    "price": "$",
    "schedule": "10:00 AM – 09:30 PM",
    "address": "Shawan Ancient Town Scenic Area, Panyu District, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=沁芳园沙湾水牛奶+番禺区",
    "officialUrl": "https://www.dianping.com/shop/G8vXW3zVqN",
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "沙湾姜撞奶 (Ginger Milk Curd)",
      "香脆蛋卷 (Crispy Egg Rolls)",
      "原味双皮奶 (Double-Skin Milk)"
    ],
    "dishes": "Water-buffalo ginger milk curd (沙湾水牛奶姜撞奶), crispy egg rolls, double-skin milk",
    "notes": "Historic dessert house famous for hot curd formed right at your table with freshly grated ginger juice and fresh buffalo milk.",
    "gallery": [
      {
        "title": "Shawan Historic Oyster Shell Courtyard",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "desc": "Traditional Lingnan historic courtyard and oyster shell architecture in Shawan"
      },
      {
        "title": "Traditional Dessert Tea Table",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Rustic wooden benches and ceramic teaware inside the centenary dessert hall"
      }
    ],
    "menu": [
      {
        "nameZh": "沙湾水牛奶姜撞奶",
        "nameEn": "Water-Buffalo Ginger Milk Curd",
        "category": "广式甜品",
        "desc": "Freshly pressed fiery ginger juice instantly curdled with boiling high-fat Shawan buffalo milk at your table.",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "传统原味双皮奶",
        "nameEn": "Traditional Double-Skin Milk Pudding",
        "category": "广式甜品",
        "desc": "Velvety smooth steamed buffalo milk custard topped with a fragile caramelized skin.",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "手工香脆蛋卷",
        "nameEn": "Handmade Crispy Egg Rolls",
        "category": "广式甜品",
        "desc": "Golden waffle pastry rolls infused with rich farm eggs and pure lard, baked fresh daily.",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-2",
    "name": "Bingsheng Taste (炳胜品味 • 时代E-PARK店)",
    "city": "Guangzhou",
    "district": "Panyu / Chimelong",
    "category": "Roast",
    "cuisine": "Michelin Cantonese & Roast Specialty (黑叉烧粤菜)",
    "price": "$$$",
    "schedule": "11:00 AM – 02:30 PM, 05:00 PM – 09:30 PM",
    "address": "Building 2, Times E-PARK, No. 290 Hanxi Ave East (7 mins Didi from Chimelong Hotel)",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=炳胜品味+时代EPARK店+番禺区",
    "officialUrl": "http://www.bingsheng.com/",
    "coverImage": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "秘制黑叉烧 (Signature Black Char Siu)",
      "金沙脆皮豆腐 (Crispy Tofu)",
      "炳胜大菠萝包 (Jumbo Pineapple Bun)"
    ],
    "dishes": "Signature Char Siu (秘制黑叉烧), Crispy Tofu, Pineapple Buns",
    "notes": "Far superior in quality and price compared to marked-up theme park restaurants. Take Didi outside resort gate to Times E-PARK.",
    "gallery": [
      {
        "title": "Modern Lingnan Architectural Hall",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Contemporary glass facade with ambient warm timber tones"
      },
      {
        "title": "Private Dining Salon",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
        "desc": "Polished terrazzo tables and sleek brass lanterns for refined Cantonese dining"
      }
    ],
    "menu": [
      {
        "nameZh": "炳胜秘制黑叉烧",
        "nameEn": "Signature Glazed Black Char Siu",
        "category": "特色粤菜",
        "desc": "Pork collar caramel-lacquered over charcoal; ultra-crisp outer crust with melt-in-your-mouth fat.",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "金沙脆皮豆腐",
        "nameEn": "Crispy Golden Sand Tofu",
        "category": "特色粤菜",
        "desc": "Silken house-made soy tofu fried to paper-thin crunch, dusted with salted egg crumble.",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "炳胜大菠萝包",
        "nameEn": "Jumbo Crispy Pineapple Buns",
        "category": "经典点心",
        "desc": "Airy sweet bread crown crusted with sugar butter cookie, served with farm fresh butter.",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-3",
    "name": "Panxi Restaurant (泮溪酒家)",
    "city": "Guangzhou",
    "district": "Liwan",
    "category": "DimSum",
    "cuisine": "Classic Lingnan Garden Yum Cha (园林早茶点心)",
    "price": "$$",
    "schedule": "07:30 AM – 02:00 PM, 05:00 PM – 09:00 PM",
    "address": "No. 151 Longjin West Road, Liwan District (Beside Liwan Lake)",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=泮溪酒家+广州市荔湾区龙津西路151号",
    "officialUrl": "https://www.dianping.com/shop/G6W9zM1k8A",
    "coverImage": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "原只鲜虾饺皇 (Master Har Gow)",
      "蟹籽鲜肉烧卖皇 (Pork Siu Mai)",
      "泮塘香煎马蹄糕 (Water Chestnut Cake)"
    ],
    "dishes": "Har Gow (Crystal Shrimp Dumplings), Siu Mai, Water Chestnut Cake",
    "notes": "Legendary garden restaurant with traditional gazebos and koi ponds. Arrive before 9:30 AM for morning tea table.",
    "gallery": [
      {
        "title": "Liwan Lake Waterfront Pavilion",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
        "desc": "Classical Chinese curved eaves floating right above emerald lotus ponds"
      },
      {
        "title": "Banyan Lake Dining Veranda",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Open-air wooden verandas surrounded by swimming carp and ancient weeping willows"
      }
    ],
    "menu": [
      {
        "nameZh": "原只鲜虾饺皇",
        "nameEn": "Crystal Master Prawn Har Gow",
        "category": "经典点心",
        "desc": "Translucent pleated dough pouches stuffed with whole sweet ocean prawns and bamboo shoot crunch.",
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "蟹籽鲜肉烧卖皇",
        "nameEn": "Steamed Crab Roe Pork Siu Mai",
        "category": "经典点心",
        "desc": "Tender hand-chopped pork and shrimp encased in wonton skins, crowned with golden tobiko crab roe.",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "泮塘香煎马蹄糕",
        "nameEn": "Pan-Fried Pantang Water Chestnut Cake",
        "category": "经典点心",
        "desc": "Golden caramel seared cubes of Liwan water chestnut flour packed with crunchy fresh water chestnuts.",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-4",
    "name": "Dafo Temple Vegetarian House (大佛寺素食阁)",
    "city": "Guangzhou",
    "district": "Yuexiu",
    "category": "Street",
    "cuisine": "Buddhist Vegetarian Buffet (大佛寺养生素食)",
    "price": "$$",
    "schedule": "11:30 AM – 02:00 PM, 05:30 PM – 08:30 PM",
    "address": "Inside Dafo Temple, Beijing Road, Yuexiu District, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=大佛寺素食阁+广州市越秀区北京路",
    "officialUrl": "https://www.dianping.com/shop/H1y2K3m4N5",
    "coverImage": "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "大佛寺养生十宝菇 (Mushroom Stew)",
      "素香翡翠水晶饺 (Emerald Dumpling)",
      "古法老火靓汤 (Lotus Root Broth)"
    ],
    "dishes": "Mushroom stew, vegetarian dim sum, lotus root soup",
    "notes": "Dine inside the illuminated golden pagoda complex right beside Beijing Road pedestrian shopping street.",
    "gallery": [
      {
        "title": "Dafo Temple Golden Pagoda Courtyard",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80",
        "desc": "Multi-tiered illuminated copper eave pagoda glowing dramatically at twilight"
      },
      {
        "title": "Serene Temple Dining Hall",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Zen wooden monastery hall featuring peaceful incense aromatics and tea tables"
      }
    ],
    "menu": [
      {
        "nameZh": "大佛寺养生十宝菇",
        "nameEn": "Ten Treasures Forest Mushroom Stew",
        "category": "特色粤菜",
        "desc": "Slow-simmered morels, matsutake, and shiitake mushrooms stewed with Chinese yam in claypot.",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "素香翡翠水晶饺",
        "nameEn": "Emerald Crystal Vegetarian Dumplings",
        "category": "经典点心",
        "desc": "Glass dough pockets packed with fresh bok choy, black fungus, and fragrant sesame.",
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "古法慢火老火靓汤",
        "nameEn": "Slow-Boiled Lotus Root Herb Broth",
        "category": "广府靓汤",
        "desc": "Simmered for 6 hours with red dates, lotus roots, and wolfberries for wholesome nourishment.",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-1",
    "name": "Tao Tao Ju (陶陶居 • 百年老字号)",
    "city": "Guangzhou",
    "district": "Liwan / Yuexiu",
    "category": "DimSum",
    "cuisine": "Centenary Cantonese Dim Sum & Tea House (百年老字号茶楼)",
    "price": "$$",
    "schedule": "08:00 AM – 09:30 PM",
    "address": "No. 20 Dishifu Road, Liwan District / Beijing Road branches",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=陶陶居总店+广州市荔湾区第十甫路20号",
    "officialUrl": "http://www.taotaoju1880.com/",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "陶陶居大虾饺 (Jumbo Har Gow)",
      "酥皮水牛奶菠萝包 (Buffalo Milk Pineapple Bun)",
      "金沙海虾红米肠 (Golden Net Red Rice Rolls)"
    ],
    "dishes": "Shrimp Dumplings (虾饺皇), Signature Jumbo Shrimp Dumplings (陶陶居大虾饺), Crispy Pineapple Bun with Buffalo Milk Custard",
    "notes": "Guangzhou's most celebrated heritage tea house established in 1880. Must-try for golden flaky milk buns and fresh morning dim sum.",
    "gallery": [
      {
        "title": "Dishifu 1880 Heritage Tea House Facade",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        "desc": "Classic republican-era brick archway facade in historical Xiguan"
      },
      {
        "title": "Stained Glass Morning Tea Room",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Manchu etched colored glass windows and brass teapots over bamboo steamers"
      }
    ],
    "menu": [
      {
        "nameZh": "陶陶居大虾饺",
        "nameEn": "Signature Jumbo Shrimp Dumplings",
        "category": "经典点心",
        "desc": "Celebrated triple-fold dough filled with 3 whole crunchy tiger prawns and savory broth.",
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "酥皮水牛奶菠萝包",
        "nameEn": "Crispy Pineapple Bun w/ Buffalo Milk Custard",
        "category": "经典点心",
        "desc": "Molten hot buffalo milk custard bursting out of a sweet cookie-crusted brioche crown.",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "金沙海虾红米肠",
        "nameEn": "Golden Crispy Net Red Rice Rolls",
        "category": "经典点心",
        "desc": "Red yeast rice noodles wrapped around crunchy deep-fried netting and whole prawns.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-2",
    "name": "Da Ge Fan (大鸽饭 • 招牌红烧乳鸽)",
    "city": "Guangzhou",
    "district": "Yuexiu / Tianhe",
    "category": "Roast",
    "cuisine": "Guangdong Specialty Roast Pigeon (红烧乳鸽专门店)",
    "price": "$$",
    "schedule": "11:00 AM – 02:30 PM, 05:00 PM – 09:30 PM",
    "address": "Multiple branches in Guangzhou core / Yuexiu & Tianhe",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=大鸽饭+广州市",
    "officialUrl": "https://www.dianping.com/shop/H9k8J7m6P5",
    "coverImage": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "招牌红烧乳鸽 (Blistered Roast Pigeon)",
      "传统大鸽饭 (Pigeon Claypot Rice)",
      "椒盐乳鸽腿 (Salt & Pepper Pigeon)"
    ],
    "dishes": "Signature Crispy Roasted Pigeon (红烧乳鸽), Pigeon Claypot Rice (招牌鸽饭), Salt & Pepper Pigeon (椒盐乳鸽)",
    "notes": "Guangzhou's #1 renowned roasted pigeon chain. Intensely juicy pigeon with blistered crispy skin and fragrance-infused claypot rice.",
    "gallery": [
      {
        "title": "Da Ge Fan Flagship Entrance",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80",
        "desc": "Bustling lively neon signage with queue crowds awaiting roasted squab"
      },
      {
        "title": "Charcoal Claypot Hearth",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Open kitchen station with blazing charcoal flames searing claypot rice"
      }
    ],
    "menu": [
      {
        "nameZh": "招牌红烧生炸乳鸽",
        "nameEn": "Signature Crispy Skin Roasted Pigeon",
        "category": "特色粤菜",
        "desc": "Glass-like crackling skin that bursts with aromatic game jus upon first bite.",
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "传统原煲大鸽饭",
        "nameEn": "Claypot Rice w/ Minced Pigeon",
        "category": "特色粤菜",
        "desc": "Fragrant Jasmine rice cooked in pigeon broth over claypot, topped with crispy golden crust.",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "椒盐乳鸽腿",
        "nameEn": "Salt & Szechuan Pepper Pigeon Drumsticks",
        "category": "特色粤菜",
        "desc": "Deep-fried squab legs tossed with crispy shallots, minced garlic, and pepper salt.",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-3",
    "name": "Xie San Bao (蟹叁宝 • 蟹黄捞饭)",
    "city": "Guangzhou",
    "district": "Yuexiu",
    "category": "Street",
    "cuisine": "Crab Roe & Seafood Specialty (蟹黄海鲜名店)",
    "price": "$$$",
    "schedule": "11:00 AM – 09:30 PM",
    "address": "Beijing Road Commercial Pedestrian Zone, Yuexiu District, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=蟹叁宝+广州市北京路",
    "officialUrl": "https://www.dianping.com/shop/H3x4Y5z6A7",
    "coverImage": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "金汤浓郁蟹黄捞饭 (Pure Crab Roe Rice)",
      "招牌鲜蟹粉拌面 (Crab Roe Noodles)",
      "爆汁蟹黄小笼包 (Crab Roe Xiao Long Bao)"
    ],
    "dishes": "Crab Roe Over Rice (蟹黄捞饭), Crab Roe Tossed Noodles (蟹黄拌面), Crab Roe Soup Dumplings (蟹黄小笼包)",
    "notes": "Famous golden bowl packed with pure hand-peeled female crab roe and crab meat poured over steaming hot rice and noodles.",
    "gallery": [
      {
        "title": "Beijing Road Boutique Storefront",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
        "desc": "Sleek dining boutique along the pedestrian heritage avenue"
      },
      {
        "title": "Golden Crab Bar & Open Counter",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80",
        "desc": "Chefs dishing out heaping ladlefuls of glistening golden crab roe"
      }
    ],
    "menu": [
      {
        "nameZh": "金汤浓郁蟹黄捞饭",
        "nameEn": "Golden Pure Crab Roe Over Rice",
        "category": "特色粤菜",
        "desc": "Rich bowl containing the meat and roe of 10 freshwater crabs served over hot pearly rice.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "招牌鲜蟹粉拌面",
        "nameEn": "Crab Roe Scallion Oil Tossed Noodles",
        "category": "特色粤菜",
        "desc": "Springy hand-pulled egg noodles saturated in golden crab butter and aged crab vinegar.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "金牌爆汁蟹黄小笼包",
        "nameEn": "Crab Roe Xiao Long Bao Dumplings",
        "category": "经典点心",
        "desc": "Delicate pleated dumplings filled with piping-hot savory crab roe broth.",
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-4",
    "name": "Dian Dou De (点都德 • 非遗广式早茶)",
    "city": "Guangzhou",
    "district": "Yuexiu / Liwan",
    "category": "DimSum",
    "cuisine": "Intangible Cultural Heritage All-Day Dim Sum (非遗早茶点心)",
    "price": "$$",
    "schedule": "07:30 AM – 10:00 PM All-Day Dim Sum",
    "address": "Beijing Road & Dongshankou branch locations, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=点都德+广州市北京路",
    "officialUrl": "http://www.diandoude.com.cn/",
    "coverImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "金沙海虾红米肠 (Golden Net Red Rice Roll)",
      "金牌虾饺皇 (Master Har Gow)",
      "蜜汁叉烧包 (Char Siu Bao)"
    ],
    "dishes": "Golden Crispy Salted Egg Shrimp Red Rice Roll (金沙海虾红米肠), Har Gow Dumplings (虾饺皇), Red Rice Rolls (红米肠)",
    "notes": "Old-school Cantonese teahouse atmosphere with traditional teapots and freshly handmade dim sum served morning until late night.",
    "gallery": [
      {
        "title": "Xiguan Grand Teahouse Hall",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
        "desc": "Sprawling two-story Cantonese salon adorned with traditional lanterns"
      },
      {
        "title": "Kung Fu Tea Counter",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Boiling brass water kettles brewing aged pu-erh and tieguanyin tea"
      }
    ],
    "menu": [
      {
        "nameZh": "金沙海虾红米肠",
        "nameEn": "Golden Crispy Net Red Rice Rolls",
        "category": "经典点心",
        "desc": "Crimson rice noodles wrapping a fried crispy mesh tube packed with tender fresh shrimp.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "金牌虾饺皇",
        "nameEn": "Heritage King Prawn Har Gow",
        "category": "经典点心",
        "desc": "Eleven delicate folds around succulent pink prawns with a drop of rich broth.",
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "蜜汁叉烧包",
        "nameEn": "Fluffy Steamed Honey Char Siu Buns",
        "category": "经典点心",
        "desc": "Snow-white steamed buns blooming open to reveal sweet honey barbecue pork.",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-5",
    "name": "Guangzhou Restaurant (Longjin West Branch) / 广州酒家（龙津西路店 · 粤宴西关）",
    "city": "Guangzhou",
    "district": "Liwan",
    "category": "DimSum",
    "cuisine": "Cantonese Morning Tea & State Banquet (老字号粤宴早茶)",
    "price": "$$$",
    "schedule": "⏰ 08:00—14:00 (Breakfast / Morning Tea)",
    "address": "📍 No. 102 Longjin West Road, Liwan District (荔湾区龙津西路102号，荔枝湾畔)",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=广州市荔湾区龙津西路102号+广州酒家",
    "officialUrl": "https://www.gzr.com.cn/pinpaijiazu/guangzhoujiujia/2473.html",
    "coverImage": "media/dining/guangzhou_restaurant/facade.jpg",
    "highlights": [
      "🥟 鲜虾饺皇 (Master Har Gow)",
      "🥢 爽脆红米肠 (Red Rice Rolls)",
      "🍗 姜茸爽皮鸡 (Ginger Chicken)"
    ],
    "dishes": "穗城鲜虾饺皇, 爽脆红米肠, 金丝姜茸爽皮鸡",
    "notes": "Known as 'First Food in Guangzhou' (食在广州第一家). Classical water-garden courtyard setting beside Lychee Bay canal. Scheduled for Day 6 Morning Tea.",
    "gallery": [
      {
        "title": "西关荔枝湾畔 · 门头外观",
        "type": "exterior",
        "image": "media/dining/guangzhou_restaurant/facade.jpg",
        "desc": "广州市荔湾区龙津西路102号，坐落于西关荔枝湾河畔的标志性岭南建筑门头与骑楼石拱门。"
      },
      {
        "title": "岭南水乡庭院 · 锦鲤水景与水榭飞檐",
        "type": "interior",
        "image": "media/dining/guangzhou_restaurant/interior_courtyard.jpg",
        "desc": "传统广府园林水系，飞檐亭阁倒映碧波，锦鲤环绕，凸显老字号水乡闲趣。"
      },
      {
        "title": "精致宴会空间 · 多彩满洲窗 (粤宴西关)",
        "type": "interior",
        "image": "media/dining/guangzhou_restaurant/interior_dining.jpg",
        "desc": "内设粤韵芳渡、兰桂轩、听月阁四大空间，饰以全套传统彩色满洲窗与广式木雕，尽显雍容广府茶宴格调。"
      }
    ],
    "menu": [
      {
        "nameZh": "穗城鲜虾饺皇",
        "nameEn": "Master King Prawn Har Gow",
        "category": "经典点心",
        "desc": "11道精巧褶纹透薄澄面皮，包裹整颗手剥鲜甜脆弹海虾仁与爽脆竹笋丁，鲜汁充盈。",
        "image": "media/dining/guangzhou_restaurant/dish_01_hargow.jpg"
      },
      {
        "nameZh": "爽脆红米肠",
        "nameEn": "Crispy Red Rice Noodle Rolls",
        "category": "经典点心",
        "desc": "天然红曲米研磨拉制丝滑拉肠，内层裹以金黄香脆网皮与饱满虾仁，三层质感三重享受。",
        "image": "media/dining/guangzhou_restaurant/dish_02_red_rice_roll.jpg"
      },
      {
        "nameZh": "豉汁蒸排骨",
        "nameEn": "Steamed Spare Ribs in Black Bean Sauce",
        "category": "经典点心",
        "desc": "精选一字肋排以阳江黑豆豉、蒜蓉腌制，垫以粉糯荔浦芋头高温快蒸，肉质嫩滑多汁。",
        "image": "media/dining/guangzhou_restaurant/dish_03_spare_ribs.jpg"
      },
      {
        "nameZh": "梅子叉烧包",
        "nameEn": "Plum-Glazed BBQ Pork Buns",
        "category": "经典点心",
        "desc": "松软若棉花般的开花老面馒头，包裹肥瘦相间秘制蜜汁叉烧，融入岭南酸甜乌梅酱生津解腻。",
        "image": "media/dining/guangzhou_restaurant/dish_04_char_siu_bun.jpg"
      },
      {
        "nameZh": "松露小笼包",
        "nameEn": "Black Truffle Xiao Long Bao",
        "category": "经典点心",
        "desc": "薄如蝉翼的精巧褶皮，内裹浓郁黑松露茸与黑猪肉馅，滚烫一口爆汁、蕈香馥郁。",
        "image": "media/dining/guangzhou_restaurant/dish_05_xiao_long_bao.jpg"
      },
      {
        "nameZh": "香煎萝卜糕",
        "nameEn": "Pan-Fried Daikon Radish Cake",
        "category": "经典点心",
        "desc": "手切冬头水嫩萝卜丝融和广式皇上皇腊味粒与生晒虾米，慢火两面双煎至外焦里嫩酥香。",
        "image": "media/dining/guangzhou_restaurant/dish_06_radish_cake.jpg"
      },
      {
        "nameZh": "金丝姜茸爽皮鸡",
        "nameEn": "Crispy-Skin Poached Chicken with Ginger Purée",
        "category": "特色粤菜",
        "desc": "精选180天山林走地鸡浸熟冰镇定型，皮脆肉嫩带皮冻，配上炸至金黄松酥的金丝沙姜与香油姜茸。",
        "image": "media/dining/guangzhou_restaurant/dish_07_chicken.jpg"
      },
      {
        "nameZh": "黄榄肉汁炖花胶",
        "nameEn": "Double-Boiled Fish Maw Soup",
        "category": "广府靓汤",
        "desc": "深海鳘鱼厚花胶与慢火土猪瘦肉汁清炖4小时，配搭西关古法甘甘苦苦的野山青黄榄，汤清甘润回甜。",
        "image": "media/dining/guangzhou_restaurant/dish_08_fish_maw_soup.jpg"
      },
      {
        "nameZh": "红葱头淋生菜胆",
        "nameEn": "Poached Lettuce with Shallot Oil",
        "category": "特色粤菜",
        "desc": "清甜无筋的高山罗马生菜心滚水快灼，淋上镬气十足、焦香微甜的现炸红葱头头抽香油。",
        "image": "media/dining/guangzhou_restaurant/dish_09_lettuce.jpg"
      },
      {
        "nameZh": "燕窝双皮奶",
        "nameEn": "Double-Skin Milk Pudding with Bird's Nest",
        "category": "广式甜品",
        "desc": "顺德纯正水牛奶古法文火慢蒸形成醇厚奶皮，上覆精炖通透的印尼极品金丝官燕窝，奶香醇厚细腻。",
        "image": "media/dining/guangzhou_restaurant/dish_10_milk_pudding.jpg"
      }
    ]
  },
  {
    "id": "rest-gz-6",
    "name": "Yuan Ji Rice Noodle Rolls (源记肠粉)",
    "city": "Guangzhou",
    "district": "Liwan",
    "category": "Street",
    "cuisine": "Old Town Street Changfen & Congee (西关老字号布拉肠)",
    "price": "$",
    "schedule": "08:00 AM – 11:30 PM",
    "address": "No. 92 Huagui Road, Liwan District, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=源记肠粉+广州市荔湾区华贵路92号",
    "officialUrl": "https://www.dianping.com/shop/H2w3E4r5T6",
    "coverImage": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "鲜虾牛肉布拉肠 (Shrimp & Beef Rolls)",
      "传统荔湾艇仔粥 (Sampan Congee)",
      "秘制豉油 (Sweet Seasoned Soy)"
    ],
    "dishes": "Fresh Shrimp Rice Rolls (鲜虾肠粉), Tender Beef Rice Rolls (牛肉肠粉), Traditional Sampan Congee (艇仔粥)",
    "notes": "Beloved neighborhood Michelin Bib Gourmand street joint. Stone-ground silky smooth rice sheets freshly steamed with hot sweet soy sauce.",
    "gallery": [
      {
        "title": "Huagui Road Street Front",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
        "desc": "No-frills traditional noodle shop humming with local residents"
      },
      {
        "title": "Stone Grinder & Steamers",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Fresh rice batter pouring continuously over cloth steamers"
      }
    ],
    "menu": [
      {
        "nameZh": "布拉鲜虾牛肉双拼肠",
        "nameEn": "Cloth-Pulled Shrimp & Beef Rice Rolls",
        "category": "经典点心",
        "desc": "Paper-thin rice noodle sheets pulled off steaming cloth, folded with beef and fresh prawns.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "荔湾传统艇仔粥",
        "nameEn": "Traditional Liwan Sampan Congee",
        "category": "特色粤菜",
        "desc": "Silky rice porridge simmered with cuttlefish, jellyfish slices, roasted peanuts, and scallions.",
        "image": "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-7",
    "name": "Chua Lam's Dim Sum (蔡澜港式点心)",
    "city": "Guangzhou",
    "district": "Tianhe",
    "category": "DimSum",
    "cuisine": "Modern Gourmet Hong Kong Dim Sum (蔡澜港式精美点心)",
    "price": "$$",
    "schedule": "10:00 AM – 09:30 PM",
    "address": "Parc Central / TeeMall area, Tianhe CBD, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=蔡澜港式点心+广州天环广场",
    "officialUrl": "https://www.dianping.com/shop/H4j5K6l7M8",
    "coverImage": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "酥皮山楂叉烧包 (Hawthorn BBQ Buns)",
      "赛螃蟹凤眼饺 (Egg White Dumplings)",
      "流心奶黄包 (Lava Custard Buns)"
    ],
    "dishes": "Crispy Hawthorn BBQ Pork Buns (酥皮山楂叉烧包), Egg White & Shrimp Dumplings (赛螃蟹凤眼饺), Lava Custard Buns (流心奶黄包)",
    "notes": "Created by legendary food critic Chua Lam. Famous for combining sweet-and-sour candied hawthorn into baked crispy BBQ pork buns.",
    "gallery": [
      {
        "title": "Parc Central CBD Entrance",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80",
        "desc": "Modern architectural mall setting with bright wooden accents"
      },
      {
        "title": "Open Dim Sum Craft Kitchen",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Chefs rolling and baking signature crispy pastry buns to order"
      }
    ],
    "menu": [
      {
        "nameZh": "酥皮山楂叉烧包",
        "nameEn": "Crispy Hawthorn BBQ Pork Buns",
        "category": "经典点心",
        "desc": "Golden crumbly pastry crust filled with savory char siu balanced by tangy candied mountain hawthorn.",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "赛螃蟹凤眼饺",
        "nameEn": "Egg White & Shrimp Phoenix Eye Dumplings",
        "category": "经典点心",
        "desc": "Silky wok-whipped egg whites folded with tender shrimp meat resembling fresh crab flesh.",
        "image": "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "金沙流心奶黄包",
        "nameEn": "Molten Salted Egg Lava Custard Buns",
        "category": "经典点心",
        "desc": "Piping-hot yellow bun that oozes rich sweet and savory salted duck egg yolk lava.",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-8",
    "name": "Min Ji Claypot Rice (民记煲仔饭)",
    "city": "Guangzhou",
    "district": "Yuexiu",
    "category": "Street",
    "cuisine": "Traditional Charcoal Claypot Rice (老字号炭火煲仔饭)",
    "price": "$",
    "schedule": "10:30 AM – 08:30 PM",
    "address": "Yuexiu South Road, near Beijing Road core, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=民记煲仔饭+广州市越秀南路",
    "officialUrl": "https://www.dianping.com/shop/H6b7N8m9K0",
    "coverImage": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "皇上皇腊味煲仔饭 (Cured Sausage Rice)",
      "排骨窝蛋牛肉饭 (Ribs & Beef Rice)",
      "香脆金黄锅巴 (Crispy Golden Crust)"
    ],
    "dishes": "Cured Sausage Claypot Rice (腊味煲仔饭), Pork Rib Rice (排骨煲仔饭), Raw Egg & Minced Beef Claypot Rice (窝蛋牛肉煲仔饭)",
    "notes": "Legendary 40-year claypot stalwart. Cooked to order over raw heat with an irresistible crispy golden bottom rice crust (锅巴).",
    "gallery": [
      {
        "title": "Yuexiu South Road Classic Shophouse",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80",
        "desc": "Time-honored Old Guangzhou storefront with aroma of sizzling sausage"
      },
      {
        "title": "Roaring Charcoal Claypot Rows",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Dozens of claypots sizzling together with sweet soy sauce drizzles"
      }
    ],
    "menu": [
      {
        "nameZh": "广式皇上皇腊味煲仔饭",
        "nameEn": "Cantonese Cured Sausage Claypot Rice",
        "category": "特色粤菜",
        "desc": "Wind-dried lap cheong sausage rendering its sweet wine fat deep into crispy-bottomed jasmine rice.",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "窝蛋牛肉煲仔饭",
        "nameEn": "Raw Farm Egg & Tender Beef Claypot Rice",
        "category": "特色粤菜",
        "desc": "Tender beef slices topped with a fresh orange egg yolk mixed vigorously into smoking hot rice.",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-9",
    "name": "Ming Shao Chicken Specialty Restaurant (铭少食鸡专门店)",
    "city": "Guangzhou",
    "district": "Yuexiu",
    "category": "Roast",
    "cuisine": "Guangdong Free-Range Chicken Feast (正宗粤式吃鸡名店)",
    "price": "$$",
    "schedule": "11:00 AM – 02:30 PM, 05:00 PM – 09:30 PM",
    "address": "Beijing Road / Dongshan dining core, Yuexiu District, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=铭少食鸡专门店+广州市",
    "officialUrl": "https://www.dianping.com/shop/H8v9B0n1M2",
    "coverImage": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "金牌手撕鸡 (Hand-Shredded Chicken)",
      "头抽豉油鸡 (Soy Sauce Chicken)",
      "鲜沙姜局走地鸡 (Sand Ginger Chicken)"
    ],
    "dishes": "Signature Hand-Shredded Chicken (招牌鸡), Fragrant Soy Sauce Chicken (豉油鸡), Stir-Fried Chicken Giblets (鸡杂)",
    "notes": "Revered local saying: 'No banquet without chicken' (无鸡不成宴). Tender silky chicken skins and rich natural meat sweetness.",
    "gallery": [
      {
        "title": "Ming Shao Restaurant Front",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80",
        "desc": "Vibrant yellow poultry emblem showcasing Cantonese chicken mastery"
      },
      {
        "title": "Carving & Chopping Station",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Master butcher slicing golden free-range chickens with swift cleaver strokes"
      }
    ],
    "menu": [
      {
        "nameZh": "铭少招牌金牌手撕鸡",
        "nameEn": "Signature Golden Hand-Shredded Chicken",
        "category": "特色粤菜",
        "desc": "Free-range pasture chicken hand-shredded with crispy skins, sesame oil, and crunchy peanuts.",
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "头抽慢火豉油鸡",
        "nameEn": "First-Draw Soy Sauce Poached Chicken",
        "category": "特色粤菜",
        "desc": "Simmered in premium aged sweet soy with star anise, rock sugar, and ginger slices.",
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-gz-10",
    "name": "Li Fang Four Seasons Dessert Shop (荔芳四季糖水店)",
    "city": "Guangzhou",
    "district": "Liwan",
    "category": "Dessert",
    "cuisine": "Authentic Cantonese Traditional Tong Sui (西华路传统糖水)",
    "price": "$",
    "schedule": "11:30 AM – 11:30 PM",
    "address": "Xihua Road Food Street, Liwan District, Guangzhou",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=荔芳四季糖水+广州市西华路",
    "officialUrl": "https://www.dianping.com/shop/H1q2W3e4R5",
    "coverImage": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "新会十年陈皮红豆沙 (Aged Tangerine Red Bean)",
      "顺德手造双皮奶 (Double-Skin Milk)",
      "浓醇金芒杨枝甘露 (Mango Pomelo Sago)"
    ],
    "dishes": "Mango Pomelo Sago (杨枝甘露), Shunde Double-Skin Milk (双皮奶), Aged Tangerine Peel Red Bean Soup (陈皮红豆沙)",
    "notes": "Guangzhou dessert institution on bustling Xihua food street. Made with genuine 15-year Xinhui dried tangerine peel and rich buffalo milk.",
    "gallery": [
      {
        "title": "Xihua Road Nostalgic Shopfront",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80",
        "desc": "Quaint tile-lined shop on the famous foodie strip of Xihua Road"
      },
      {
        "title": "Simmering Sweet Soup Pots",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Earthenware pots slow-cooking red bean and lotus seed dessert soups"
      }
    ],
    "menu": [
      {
        "nameZh": "新会陈皮十年红豆沙",
        "nameEn": "10-Year Aged Tangerine Peel Red Bean Soup",
        "category": "广式甜品",
        "desc": "Silky sand-textured red bean broth scented with precious citrus peel oils.",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "顺德手造双皮奶",
        "nameEn": "Shunde Handmade Double-Skin Buffalo Milk",
        "category": "广式甜品",
        "desc": "Rich and custard-like curd produced with local water buffalo milk.",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "浓醇金芒杨枝甘露",
        "nameEn": "Alphonso Mango Pomelo Sago",
        "category": "广式甜品",
        "desc": "Fresh sweet mango purée, coconut milk, chewy tapioca pearls, and ruby pomelo pulps.",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-5",
    "name": "Qingyuan Mountain Farmhouse (古龙峡土菜馆)",
    "city": "Guangzhou",
    "district": "Qingyuan Excursion",
    "category": "Roast",
    "cuisine": "Mountain Farmhouse Feasts (清远正宗农家走地鸡)",
    "price": "$$",
    "schedule": "11:00 AM – 08:30 PM",
    "address": "Base of Gulong Gorge scenic entry, Qingyuan",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=古龙峡土菜馆+清远市",
    "officialUrl": "https://www.dianping.com/shop/H5t6Y7u8I9",
    "coverImage": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "清远正宗白切鸡 (Qingyuan White Cut Chicken)",
      "古龙峡山泉水豆腐 (Spring Water Tofu)",
      "鲜焖山竹笋 (Wild Bamboo Shoots)"
    ],
    "dishes": "Authentic Qingyuan Free-Range White Cut Chicken (清远正宗白切鸡), mountain spring tofu, bamboo shoots",
    "notes": "Qingyuan chicken is world-famous across Guangdong for its tender texture and natural sweetness.",
    "gallery": [
      {
        "title": "Gulong Gorge Mountain Gate Entry",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
        "desc": "Breathtaking canyon backdrop right below cascading waterfall streams"
      },
      {
        "title": "Rustic Riverside Farmhouse Deck",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Bamboo dining tables beside rushing mountain streams"
      }
    ],
    "menu": [
      {
        "nameZh": "正宗清远走地白切鸡",
        "nameEn": "Authentic Qingyuan Free-Range White Cut Chicken",
        "category": "特色粤菜",
        "desc": "Tender mountain chicken poached in fragrant herb court-bouillon served with scallion-ginger oil.",
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "古龙峡山泉水豆腐",
        "nameEn": "Gulong Mountain Spring Water Tofu",
        "category": "特色粤菜",
        "desc": "Handcrafted tofu curd made using pristine canyon spring water, pan-seared to golden crust.",
        "image": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-6",
    "name": "Baheli Chaoshan Beef Hotpot (八合里牛肉火锅 • 南头店)",
    "city": "Shenzhen",
    "district": "Nanshan",
    "category": "Roast",
    "cuisine": "Chaoshan Fresh Beef Hotpot (潮汕鲜牛肉火锅)",
    "price": "$$",
    "schedule": "11:00 AM – 11:00 PM",
    "address": "Nantou Ancient City / High-Tech Park, Nanshan District, Shenzhen",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=八合里牛肉火锅+深圳市南山区南头",
    "officialUrl": "http://www.baheli.com/",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "手切鲜吊龙 (Hand-Sliced Ribeye Beef)",
      "纯正手打鲜牛肉丸 (Hand-Pounded Meatballs)",
      "牛骨清汤原汁 (Clear Beef Bone Broth)"
    ],
    "dishes": "Freshly sliced beef brisket, hand-pounded beef meatballs, satay dip",
    "notes": "Beef slaughtered and delivered within 4 hours. Clear broth brings out pristine beef tenderness.",
    "gallery": [
      {
        "title": "Nanshan Tech Park Restaurant Front",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        "desc": "Spacious contemporary hotpot venue near Shenzhen High-Tech Zone"
      },
      {
        "title": "Glass Window Beef Butchery Counter",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Master carvers thinly slicing prime cuts of yellow cattle beef to order"
      }
    ],
    "menu": [
      {
        "nameZh": "手切鲜吊龙牛肉",
        "nameEn": "Hand-Sliced Ribeye Beef (Diao Long)",
        "category": "特色粤菜",
        "desc": "Prime rib-eye slice that flash-blanches to butter tenderness in clear beef bone broth in 8 seconds.",
        "image": "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "纯正手打鲜牛肉丸",
        "nameEn": "Hand-Pounded Chaoshan Beef Meatballs",
        "category": "特色粤菜",
        "desc": "Beaten rhythmically with heavy iron rods for ultimate bouncy crunch and rich beef juices.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-sz-2",
    "name": "Run Yuan Four Seasons (润园四季椰子鸡 • 华侨城店)",
    "city": "Shenzhen",
    "district": "OCT / Nanshan",
    "category": "Roast",
    "cuisine": "Hainan Fresh Coconut Chicken Hotpot (深圳招牌椰子鸡)",
    "price": "$$",
    "schedule": "11:00 AM – 10:00 PM",
    "address": "OCT-LOFT Cultural Park / Xiangshan Middle St, Nanshan, Shenzhen",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=润园四季椰子鸡+华侨城创意园+深圳",
    "officialUrl": "https://www.dianping.com/shop/H7u8I9o0P1",
    "coverImage": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "鲜榨纯椰青鸡 (Fresh Coconut Broth Chicken)",
      "特级腊味煲仔饭 (Cured Meat Claypot Rice)",
      "响铃竹荪吸汁 (Crispy Bean Curd)"
    ],
    "dishes": "Fresh Wenchang chicken simmered in 100% natural coconut water, served with calamansi sand ginger dip",
    "notes": "Shenzhen's definitive local icon. Pure sweet coconut water with tender Wenchang chicken and fragrant claypot rice.",
    "gallery": [
      {
        "title": "OCT Garden Courtyard Terrace",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
        "desc": "Lush tropical green terrace dining inside OCT-LOFT creative district"
      },
      {
        "title": "Steaming Coconut Pot Counter",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        "desc": "Fresh coconut cracking counter and steaming hotpots"
      }
    ],
    "menu": [
      {
        "nameZh": "竹荪正宗文昌椰子鸡",
        "nameEn": "Bamboo Fungus Wenchang Coconut Chicken",
        "category": "特色粤菜",
        "desc": "Three fresh whole Thai coconut juices boiled with free-range Hainan chicken for 4 minutes flat.",
        "image": "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "一级腊味煲仔饭",
        "nameEn": "Premier Cantonese Cured Sausage Claypot Rice",
        "category": "特色粤菜",
        "desc": "Tossed tableside with golden crunchy scorched rice and scallions.",
        "image": "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-sz-3",
    "name": "Sea World Shekou Promenade Dining (海上世界明华轮海鲜广场)",
    "city": "Shenzhen",
    "district": "Shekou / Nanshan",
    "category": "Street",
    "cuisine": "Coastal Seafood & International Promenade (海滨海鲜与精酿)",
    "price": "$$",
    "schedule": "11:00 AM – Midnight",
    "address": "Sea World Plaza, Wanghai Road, Shekou, Nanshan, Shenzhen",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=海上世界+深圳市南山区蛇口",
    "officialUrl": "https://www.dianping.com/shop/H9i0O1p2Q3",
    "coverImage": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "避风塘炒大蟹 (Typhoon Shelter Crab)",
      "清蒸深海石斑 (Steamed Grouper)",
      "蛇口精酿鲜啤 (Shekou Craft Beer)"
    ],
    "dishes": "Typhoon Shelter garlic crab, steamed coastal clams with glass noodles, and cold draft beers overlooking Minghua ship",
    "notes": "Outdoor seaside dining plaza adjacent to the illuminated Minghua cruise liner and Shekou water fountain show.",
    "gallery": [
      {
        "title": "Minghua Cruise Ship Illuminated Promenade",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=1200&q=80",
        "desc": "Vibrant night waterfront boardwalk with live music and fountains"
      },
      {
        "title": "Seafood Tank Display & Beer Bar",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
        "desc": "Live ocean tanks featuring local South China Sea catches"
      }
    ],
    "menu": [
      {
        "nameZh": "避风塘金蒜炒青蟹",
        "nameEn": "Typhoon Shelter Golden Garlic Mud Crab",
        "category": "特色粤菜",
        "desc": "Fresh mud crab wok-fried vigorously with toasted golden garlic crisps, fermented black beans, and chili.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "蒜蓉粉丝蒸大元贝",
        "nameEn": "Steamed Jumbo Scallops w/ Garlic Glass Noodles",
        "category": "特色粤菜",
        "desc": "Plump king scallops bathed in first-draw sweet soy and smoking scallion oil.",
        "image": "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-7",
    "name": "Kam Wah Cafe (金华冰厅 • 香港菠萝油冠军)",
    "city": "Hong Kong",
    "district": "Prince Edward / Mong Kok",
    "category": "DimSum",
    "cuisine": "Hong Kong Cha Chaan Teng (香港金牌茶餐厅)",
    "price": "$",
    "schedule": "06:30 AM – 09:00 PM",
    "address": "No. 47 Bute Street, Prince Edward / Mong Kok (5 mins walk from Royal Plaza Hotel)",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=金华冰厅+香港九龙太子弼街47号",
    "officialUrl": "https://www.openrice.com/zh/hongkong/r-%E9%87%91%E8%8F%AF%E5%86%B0%E5%BB%B3-%E5%A4%AA%E5%AD%90-%E6%B8%AF%E5%BC%8F-%E7%B2%89%E9%BA%B5-%E7%B1%B3%E7%B7%9A-r11531",
    "coverImage": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "得奖冰火菠萝油 (Champion Pineapple Bun)",
      "驰名丝袜冻奶茶 (Silk Stocking Milk Tea)",
      "酥皮热蛋挞 (Flaky Hot Egg Tart)"
    ],
    "dishes": "Award-winning Crispy Pineapple Bun with slab of cold butter (菠萝油), Silk Stocking Milk Tea, Egg Tart",
    "notes": "Crowned champion pineapple buns of Hong Kong. Piping hot crust with frozen butter melts instantly.",
    "gallery": [
      {
        "title": "Bute Street Mong Kok Neon Shophouse",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        "desc": "Classic neon sign and bustling Mong Kok street scene"
      },
      {
        "title": "Cozy Green Booth Dining Room",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Nostalgic mosaic tiled walls and traditional tea diner booths"
      }
    ],
    "menu": [
      {
        "nameZh": "得奖金牌冰火菠萝油",
        "nameEn": "Award-Winning Crispy Pineapple Butter Bun",
        "category": "经典点心",
        "desc": "Fresh-out-of-oven piping hot crumbly sweet bun split with a thick frozen slab of Anchor butter.",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "驰名丝袜冻奶茶",
        "nameEn": "Chilled Hong Kong Silk Stocking Milk Tea",
        "category": "广式甜品",
        "desc": "Strong Ceylon black tea blend hand-strained through cloth sack and whipped with Black & White milk.",
        "image": "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-8",
    "name": "Tim Ho Wan (添好运 • 米其林点心专卖店)",
    "city": "Hong Kong",
    "district": "Mong Kok / Sham Shui Po",
    "category": "DimSum",
    "cuisine": "Michelin Star Dim Sum (米其林星级点心专卖店)",
    "price": "$$",
    "schedule": "10:00 AM – 09:30 PM",
    "address": "Olympian City / Fuk Wing Street, Sham Shui Po, Kowloon, Hong Kong",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=添好运点心专门店+香港九龙",
    "officialUrl": "http://www.timhowan.com/",
    "coverImage": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "酥皮焗叉烧包 (Baked BBQ Pork Buns)",
      "香煎萝卜糕 (Pan-Fried Turnip Cake)",
      "黄沙猪润肠 (Pork Liver Rice Rolls)"
    ],
    "dishes": "Baked BBQ Pork Buns (酥皮叉烧包), pan-fried turnip cake, steamed rice rolls",
    "notes": "Renowned as the world's most accessible Michelin-starred dim sum. The signature crispy sugar-crusted barbecue pork buns are legendary.",
    "gallery": [
      {
        "title": "Mong Kok Modern Hall",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80",
        "desc": "Clean modern facade welcomes dim sum enthusiasts from around the world"
      },
      {
        "title": "Bamboo Steamer Kitchen Bar",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
        "desc": "Tiered bamboo steamers releasing clouds of fragrant sweet dough vapor"
      }
    ],
    "menu": [
      {
        "nameZh": "酥皮焗叉烧包",
        "nameEn": "Baked BBQ Pork Buns (3 Pcs)",
        "category": "经典点心",
        "desc": "Signature golden crumbly sugar crust encasing sweet barbecue pork and savory sauce.",
        "image": "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "香煎萝卜糕",
        "nameEn": "Pan-Fried Turnip Cake",
        "category": "经典点心",
        "desc": "Crispy browned surface with moist interior loaded with radish shreds and Chinese bacon.",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
      }
    ]
  },
  {
    "id": "rest-hk-3",
    "name": "Mong Kok Night Food Stalls (旺角登打士街地道街头小食)",
    "city": "Hong Kong",
    "district": "Mong Kok",
    "category": "Street",
    "cuisine": "Hong Kong Street Snacks & Night Eats (香港经典街头小吃)",
    "price": "$",
    "schedule": "12:00 PM – Midnight",
    "address": "Dundas Street & Sai Yeung Choi St South, Mong Kok, Kowloon",
    "mapUrl": "https://www.google.com/maps/search/?api=1&query=登打士街+香港九龙旺角",
    "officialUrl": "https://www.openrice.com/zh/hongkong/restaurants/district/%E6%97%BA%E8%A7%92",
    "coverImage": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
    "highlights": [
      "咖喱秘制鱼蛋 (Curry Fish Balls)",
      "原味香脆鸡蛋仔 (Egg Waffles)",
      "脆皮臭豆腐 (Crispy Stinky Tofu)"
    ],
    "dishes": "Curry fishballs, piping-hot egg waffles, deep-fried pork intestines, stinky tofu, mango coconut sago drinks",
    "notes": "Vibrant night market street snack heaven right in Mong Kok, steps away from MOKO and the ladies market.",
    "gallery": [
      {
        "title": "Dundas Street Neon Alley",
        "type": "exterior",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80",
        "desc": "Classic neon signs and aromatic steam billowing from street stalls"
      },
      {
        "title": "Sizzling Street Snack Woks",
        "type": "interior",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80",
        "desc": "Boiling pots of spicy curry fishballs and waffle irons clacking in rhythm"
      }
    ],
    "menu": [
      {
        "nameZh": "香港地道咖喱鱼蛋",
        "nameEn": "Hong Kong Spicy Curry Fish Balls",
        "category": "特色粤菜",
        "desc": "Bouncy deep-sea fish paste balls simmered in fiery Madras curry and satay paste.",
        "image": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80"
      },
      {
        "nameZh": "蜂巢炭烤原味鸡蛋仔",
        "nameEn": "Honeycomb Crispy Egg Waffles",
        "category": "广式甜品",
        "desc": "Golden spherical waffle puffs crisp on the outside and airy custardy inside.",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80"
      }
    ]
  }
];

    // -------------------------------------------------------------
    // 3. NODE DETAILS DICTIONARY (For Drawer Inspector)
    // -------------------------------------------------------------

const nodeDetails = {
      'node-flight-outbound': {
        badge: 'Phase 01 • Flight',
        date: 'Sun, 29 Nov 2026',
        title: 'Cathay Pacific Inbound Transit: SIN → HKG → CAN',
        heroImage: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1000&q=80',
        flightSeatmapId: 'cx714',
        sections: [
          {
            title: 'Flight Leg 1 (CX714) • SIN → HKG',
            items: [
              'Origin: Singapore Changi Airport (SIN Terminal 4)',
              'Departure: 01:25 AM SGT | Arrival: HKG T1 at 05:20 AM HKT',
              'Aircraft: Airbus A330-300 (2-4-2 twin aisle)',
              'Seats Selected: 47H, 47K, 48H, 48K (Family window & aisle cluster)<div class="seatmap-preview-wrap" style="margin-top: 8px;"><button type="button" onclick="window.openSeatmapModal ? window.openSeatmapModal(\'cx714\') : alert(\'CX714: 47H, 47K, 48H, 48K\')" style="display:inline-flex; align-items:center; gap:6px; background:#006564; color:#fff; border:1px solid rgba(255,255,255,0.2); padding:6px 12px; border-radius:6px; font-size:12px; font-weight:500; cursor:pointer;"><span>💺</span> View CX714 Seatmap</button></div>',
              
              
              
            ]
          },
          {
            title: 'Hong Kong Layover (2h 30m)',
            items: [
              'Transit Terminal: HKG Terminal 1 Airside',
              'No luggage recheck needed (bags checked through to Guangzhou CAN)',
              'Family breakfast & airport refreshment'
            ]
          },
          {
            title: 'Flight Leg 2 (CX982) • HKG → CAN',
            items: [
              'Departure: HKG T1 at 07:50 AM HKT | Arrival: CAN Baiyun at 08:55 AM CST',
              'Aircraft: Airbus A330-300 (2-4-2 twin aisle)',
              'Seats Selected: 47H, 47K, 48H, 48K (P2/P3 in 47, P1/P4 in 48)',
              'Baggage allowance: 23kg checked + 7kg cabin baggage per passenger<div class="seatmap-preview-wrap" style="margin-top: 8px;"><button type="button" onclick="window.openSeatmapModal ? window.openSeatmapModal(\'cx982\') : alert(\'CX982: 47H, 47K, 48H, 48K\')" style="display:inline-flex; align-items:center; gap:6px; background:#006564; color:#fff; border:1px solid rgba(255,255,255,0.2); padding:6px 12px; border-radius:6px; font-size:12px; font-weight:500; cursor:pointer;"><span>💺</span> View CX982 Seatmap</button></div>',
              
              
            ]
          }
        ],
        tips: 'Take Didi south directly from CAN airport arrivals. Direct highway transit to Panyu takes ~55 minutes (~¥150).'
      },
      'node-hotel-mehood': {
        badge: 'Stay 01 • 1 Night',
        date: '29 Nov – 30 Nov 2026',
        title: 'Mehood Lestie Hotel (Guangzhou Panyu Flagship)',
        hotelRoomId: 'hotel_1_mehood',
        heroImage: 'media/hotels/hotel_1_mehood_panyu_photo.jpg',
        sections: [
          {
            title: 'Property Overview',
            items: [
              'Chinese Name: 广州番禺美豪丽致酒店',
              'Address: No. 266 West Ring Road, Shatou Street, Panyu District, Guangzhou',
              'Telephone: +86-20-37330666 / +86-19928388194',
              'Room Type: Warm Parent-Child Room (Smart Control + Bathtub)'
            ]
          },
          {
            title: 'Complimentary Hospitality Perks',
            items: [
              'Daily buffet breakfast for 2 guests (07:00–10:00)',
              'Daily afternoon tea buffet (14:00–18:00)',
              'Late-night warm noodle bowls (21:00–23:00)',
              'Guaranteed late check-out at 14:00 on Nov 30'
            ]
          }
        ],
        tips: 'Perfect recovery stay after overnight flight. Take afternoon stroll around nearby Shawan Ancient Town.'
      },
      'node-hotel-chimelong': {
        badge: 'Stay 02 • 3 Nights',
        date: '30 Nov – 03 Dec 2026',
        title: 'Chimelong Hotel (Guangzhou Resort)',
        hotelRoomId: 'hotel_2_chimelong',
        heroImage: 'media/hotels/hotel_2_chimelong_resort_photo.jpg',
        sections: [
          {
            title: 'Property Overview',
            items: [
              'Chinese Name: 广州长隆酒店',
              'Address: Inside Chimelong Resort, No. 299 Hanxi Avenue East, Panyu, Guangzhou',
              'Telephone: +86-20-84786838',
              'Room Type: Exploration Kid\'s Room'
            ]
          },
          {
            title: 'Multi-Park Privileges',
            items: [
              '3-Day Unlimited Multi-Park Access (Safari Park + Paradise + Birds Park)',
              'Facial recognition entry at turnstiles for seamless re-entry',
              '30-minute early park entry via North Gate',
              'Includes evening tickets to Chimelong International Circus show'
            ]
          }
        ],
        tips: 'Resort restaurants carry heavy markups. Take Didi 7 mins to Times E-PARK for Bingsheng Taste or order food delivery to resort security gate.'
      },
      'node-hotel-atour': {
        badge: 'Stay 03 • 3 Nights',
        date: '03 Dec – 06 Dec 2026',
        title: 'Atour Hotel Dongshankou (Guangzhou)',
        hotelRoomId: 'hotel_3_atour',
        heroImage: 'media/hotels/hotel_3_atour_dongshankou_photo.jpg',
        sections: [
          {
            title: 'Property Overview',
            items: [
              'Chinese Name: 广州北京路步行街东山口地铁站亚朵酒店',
              'Address: No. 163 Donghua South Road, Yuexiu District, Guangzhou',
              'Telephone: +86-20-83806868 / +86-17513579326',
              'Room Type: Deluxe Twin Room (2 Double Beds)'
            ]
          },
          {
            title: 'Location & Amenities',
            items: [
              'Autonomous delivery robots bring food delivery directly to room door',
              'Direct walking access to historic 1920s Dongshan mansions & trendy cafes',
              'Short metro / Didi ride to Beijing Road, Dafo Temple, and Shamian Island'
            ]
          }
        ],
        tips: 'Autonomous robots handle Meituan/Ele.me food deliveries straight to your door. Great central hub for city sightseeing.'
      },
      'node-qingyuan': {
        badge: 'Day Tour • Adventure',
        date: 'Fri, 05 Dec 2026',
        title: 'Qingyuan Gulong Gorge Glass Canyon & Coaster Day Trip',
        heroImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80',
        sections: [
          {
            title: 'Logistics Charter',
            items: [
              'Pickup & Drop-off: Atour Hotel Dongshankou lobby (~08:00 AM)',
              'Vehicle: Private 7-seater van charter (~9-10h round-trip, ~¥700-1,100)',
              'Travel Time: ~1h 45m each way along Guangqing Expressway'
            ]
          },
          {
            title: 'Canyon Attractions',
            items: [
              'Yuntian Glass Grand Canyon Skywalk (530m above canyon floor)',
              'Giant Buddha Hand panoramic photo platform',
              'Cliff Alpine Mountain Coaster (gravity-powered toboggan ride)',
              'Nine Waterfalls mountain trail'
            ]
          }
        ],
        tips: 'Stop by a local farmhouse at the foot of the mountain for world-famous Qingyuan free-range white cut chicken (清远白切鸡).'
      },
      'node-hsr-gz-sz': {
        badge: 'Transit • Bullet Rail',
        date: 'Sat, 06 Dec 2026',
        title: 'Guangzhou South → Shenzhen North / Futian',
        heroImage: 'https://images.unsplash.com/photo-1532105956626-9569c03602f6?auto=format&fit=crop&w=1000&q=80',
        sections: [
          {
            title: 'Bullet Train Details',
            items: [
              'Departure Station: Guangzhou South (广州南站)',
              'Arrival Station: Shenzhen North (深圳北) or Shenzhen Futian (福田)',
              'Duration: 30 to 45 minutes',
              'Ticketing: Book 14 days in advance via official Railway 12306 app or Trip.com'
            ]
          }
        ],
        tips: 'Arrive at Guangzhou South station 45 minutes before departure to clear passport ID turnstiles and security inspection.'
      },
      'node-hotel-qiuguo': {
        badge: 'Stay 04 • 3 Nights',
        date: '06 Dec – 09 Dec 2026',
        title: 'Qiuguo S Hotel Shenzhen (Nanshan)',
        hotelRoomId: 'hotel_4_qiuguo',
        heroImage: 'media/hotels/hotel_4_qiuguo_shenzhen_photo.jpg',
        sections: [
          {
            title: 'Property Overview',
            items: [
              'Chinese Name: 秋果S酒店 深圳科技园南头古城店',
              'Address: No. 5 Shop, No. 3125 Nanxin Road, Nanshan District, Shenzhen',
              'Telephone: +86-755-61000168',
              'Room Type: Forest Oxygen Bar Family Suite (1 Queen + 1 Bunk Bed)'
            ]
          },
          {
            title: 'Included Privileges',
            items: [
              'Breakfast for 3 guests included daily (Dec 8, 9, 10)',
              'Early Check-in Reward (check-in after 10:00 AM)',
              'Complimentary minibar and daily vitamin station',
              'Direct access to 1,700-year-old historic Nantou Ancient City'
            ]
          }
        ],
        tips: 'Custom bunk beds are family favorites. Step directly out of hotel into Nantou Ancient City for evening eats and craft cafes.'
      },
      'node-hsr-sz-hk': {
        badge: 'Transit • 14-min Cross Border',
        date: 'Tue, 09 Dec 2026',
        title: 'Shenzhen Futian → Hong Kong West Kowloon Bullet Train',
        heroImage: 'https://images.unsplash.com/photo-1508873696983-2df5703bc225?auto=format&fit=crop&w=1000&q=80',
        sections: [
          {
            title: 'High-Speed Rail Transit',
            items: [
              'Departure: Shenzhen Futian Station (福田)',
              'Arrival: Hong Kong West Kowloon Station (香港西九龙)',
              'Travel Time: Exactly 14 minutes nonstop',
              'Customs: Co-location arrangement — clear both Mainland exit and HK entry customs inside West Kowloon station'
            ]
          }
        ],
        tips: 'Fastest cross-border transit. From West Kowloon, take taxi or MTR directly to Royal Plaza Hotel in Mong Kok.'
      },
      'node-hotel-royal': {
        badge: 'Stay 05 • 3 Nights',
        date: '09 Dec – 12 Dec 2026',
        title: 'Royal Plaza Hotel Hong Kong (Mong Kok)',
        hotelRoomId: 'hotel_5_royal_plaza',
        heroImage: 'media/hotels/hotel_5_royal_plaza_hk_photo.jpg',
        sections: [
          {
            title: 'Property Overview',
            items: [
              'Chinese Name: 香港帝京酒店',
              'Address: No. 193 Prince Edward Road West, Mong Kok, Hong Kong',
              'Telephone: +852-29288822',
              'Room Type: Plaza Deluxe Family Room (2 Double Beds)'
            ]
          },
          {
            title: 'Connected Amenities',
            items: [
              'Direct covered walkway into 7-storey MOKO Shopping Mall',
              'Direct connection to Mong Kok East MTR Station',
              'Short walk to famous Ladies\' Market, Goldfish Street, and Sneaker Street'
            ]
          }
        ],
        tips: 'MOKO mall offers supermarkets, pharmacies, and dozens of restaurants. Great base for exploring Kowloon and Victoria Harbour.'
      },
      'node-flight-return': {
        badge: 'Phase 10 • Flight Return',
        date: 'Sat, 12 Dec 2026',
        title: 'Cathay Pacific CX657: Hong Kong (HKG) → Singapore (SIN)',
        heroImage: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=1000&q=80',
        flightSeatmapId: 'cx657',
        sections: [
          {
            title: 'Flight Information',
            items: [
              'Flight Number: Cathay Pacific CX657',
              'Departure: Hong Kong International Airport (HKG Terminal 1) at 16:05 HKT',
              'Arrival: Singapore Changi Airport (SIN Terminal 4) at 20:05 SGT',
              'Aircraft: Boeing 777-300 Widebody',
              'Seats Selected: 48D, 48E, 48F, 48G (Center Quad: P4, P1, P2, P3)<div class="seatmap-preview-wrap" style="margin-top: 8px;"><button type="button" onclick="window.openSeatmapModal ? window.openSeatmapModal(\'cx657\') : alert(\'CX657: 48D-48G\')" style="display:inline-flex; align-items:center; gap:6px; background:#006564; color:#fff; border:1px solid rgba(255,255,255,0.2); padding:6px 12px; border-radius:6px; font-size:12px; font-weight:500; cursor:pointer;"><span>💺</span> View CX657 Seatmap</button></div>',
              'Baggage: 23kg checked + 7kg cabin baggage per passenger',
              
              
            ]
          },
          {
            title: 'Airport Transit Logistics',
            items: [
              'Take Airport Express from Kowloon Station directly to HKG Airport (~22 mins)',
              'Arrive at airport by 13:30 for smooth duty-free shopping and boarding'
            ]
          }
        ],
        tips: 'Welcome home to Singapore! Seamless conclusion of the 14-day China Greater Bay Area trip.'
      }
    };


// -------------------------------------------------------------
// 4. HOTEL ROOM GALLERIES & TRIP.COM METADATA
// -------------------------------------------------------------

const hotelRoomsData = [
  {
    "id": "hotel_1_mehood",
    "name": "Mehood Lestie Hotel (Guangzhou Panyu)",
    "nameZh": "广州番禺美豪丽致酒店",
    "exteriorPhoto": "media/hotels/hotel_1_mehood_panyu_photo.jpg",
    "exteriorUrl": "https://dimg04.c-ctrip.com/images/1mc0u12000j6ui0hvC0E8.jpg",
    "bookedRoom": {
      "name": "Warm Parent-Child Room",
      "nameZh": "温馨亲子房（超大圆形浴缸+投屏电视+儿童主题）",
      "beds": "1 Queen Bed (1.8m) + 1 Double Bed (1.2m)",
      "perks": "Smart Voice Controls • Large Round Soaking Tub • Kids Play Tent & Themed Amenities",
      "photos": [
        {
          "title": "Bedroom & Play Tent",
          "titleZh": "大床主卧、儿童帐篷与投屏电视",
          "file": "media/hotels/booked_rooms/hotel_1_photo_1_bedroom.jpg",
          "url": "https://dimg04.c-ctrip.com/images/0202212000k67blta56B9.jpg"
        },
        {
          "title": "Circular Soaking Tub",
          "titleZh": "全景超大圆形浸泡浴缸",
          "file": "media/hotels/booked_rooms/hotel_1_photo_2_tub.jpg",
          "url": "https://dimg04.c-ctrip.com/images/0206e12000k67c8f50C8B.jpg"
        },
        {
          "title": "Smart Bidet & Shower",
          "titleZh": "智能温水马桶与热带雨林花洒",
          "file": "media/hotels/booked_rooms/hotel_1_photo_3_bathroom.jpg",
          "url": "https://dimg04.c-ctrip.com/images/0200m12000k68yqts8141.jpg"
        }
      ]
    },
    "tripUrl": "https://sg.trip.com/hotels/guangzhou-hotel-detail-124525038/mehood-lestie-hotel/"
  },
  {
    "id": "hotel_2_chimelong",
    "name": "Chimelong Hotel (Guangzhou Resort)",
    "nameZh": "广州长隆酒店",
    "exteriorPhoto": "media/hotels/hotel_2_chimelong_resort_photo.jpg",
    "exteriorUrl": "https://dimg04.c-ctrip.com/images/0203l1200082cfe9g28BC.jpg",
    "bookedRoom": {
      "name": "Exploration Kid's Room",
      "nameZh": "探趣亲子房（丛林探险主题+定制树屋床）",
      "beds": "1 King Bed (1.8m) + 1 Kid Treehouse Bunk / Trundle Bed",
      "perks": "Balcony Resort Views • Custom Safari Treehouse Bunk • Unlimited Multi-Park Privileges",
      "photos": [
        {
          "title": "Room & Treehouse Bunk",
          "titleZh": "大床主卧与树屋双层床全景",
          "file": "media/hotels/booked_rooms/hotel_2_photo_1_room_overview.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc4j12000cx2mwdqCDD6.jpg"
        },
        {
          "title": "Jungle Treehouse Bunk Bed",
          "titleZh": "丛林树屋双层儿童床",
          "file": "media/hotels/booked_rooms/hotel_2_photo_2_bunk_bed.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc5l12000cx2n06f3EF3.jpg"
        },
        {
          "title": "Treehouse Ladder & Stairs",
          "titleZh": "安全爬梯与儿童玩乐角",
          "file": "media/hotels/booked_rooms/hotel_2_photo_3_bunk_stairs.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc6s12000cx2mq6j66A0.jpg"
        },
        {
          "title": "Safari Play Tent Setup",
          "titleZh": "野趣木屋帐篷儿童床",
          "file": "media/hotels/booked_rooms/hotel_2_photo_4_tent_bed.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc6i12000cx2mvyf44D4.jpg"
        },
        {
          "title": "Trundle Tent Bed Detail",
          "titleZh": "拉出式子母帐篷床",
          "file": "media/hotels/booked_rooms/hotel_2_photo_5_trundle_tent.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc5w12000cx2n30h175E.jpg"
        },
        {
          "title": "Hot Air Balloon TV Console",
          "titleZh": "热气球主题电视柜与行李台",
          "file": "media/hotels/booked_rooms/hotel_2_photo_6_tv_console.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc3y12000cx2n5jj8396.jpg"
        },
        {
          "title": "Safari Corner Sofa",
          "titleZh": "斑马纹休闲沙发与咖啡桌",
          "file": "media/hotels/booked_rooms/hotel_2_photo_7_safari_lounge.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc0v12000cx2muvs93E8.jpg"
        },
        {
          "title": "Bedside Motif & Lighting",
          "titleZh": "原木部落图腾床头细节",
          "file": "media/hotels/booked_rooms/hotel_2_photo_8_bedside_details.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc0s12000cx2n45q9F87.jpg"
        }
      ]
    },
    "tripUrl": "https://sg.trip.com/hotels/guangzhou-hotel-detail-419302/chimelong-hotel-guangzhou/"
  },
  {
    "id": "hotel_3_atour",
    "name": "Atour Hotel Dongshankou (Guangzhou)",
    "nameZh": "广州东山口亚朵酒店",
    "exteriorPhoto": "media/hotels/hotel_3_atour_dongshankou_photo.jpg",
    "exteriorUrl": "https://dimg04.c-ctrip.com/images/1mc6z12000oi8q0ld8B85.jpg",
    "bookedRoom": {
      "name": "Deluxe Family Twin Room",
      "nameZh": "尊享家庭双床房（深睡床垫+深睡枕头＋裸棉床品+冰箱）",
      "beds": "1 Queen Bed (1.5m) + 1 Single Bed (1.2m)",
      "perks": "Planet Deep Sleep Mattresses • Ergonomic Study Desk • Tea Lounge • Smart Toilet",
      "photos": [
        {
          "title": "Twin Beds & Room Panorama",
          "titleZh": "家庭双床全景 & 办公区",
          "file": "media/hotels/booked_rooms/hotel_3_photo_1_twin_overview.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc6z12000oi8q0ld8B85.jpg"
        },
        {
          "title": "Window Lounge & Tea Table",
          "titleZh": "窗边贵妃榻与功夫茶几",
          "file": "media/hotels/booked_rooms/hotel_3_photo_2_lounge_desk.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc5312000oi8u182C17C.jpg"
        },
        {
          "title": "Twin Beds Side Perspective",
          "titleZh": "双床侧景与原木床头",
          "file": "media/hotels/booked_rooms/hotel_3_photo_3_twin_angle.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc1f12000oi8u3nc2534.jpg"
        },
        {
          "title": "Reading Light & Bed Headboard",
          "titleZh": "舒适阅读灯与极简床头",
          "file": "media/hotels/booked_rooms/hotel_3_photo_4_desk_bed.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc3b12000oi8u63aF699.jpg"
        },
        {
          "title": "Lighted Vanity & Minibar",
          "titleZh": "智能美妆镜台、迷你吧与衣帽架",
          "file": "media/hotels/booked_rooms/hotel_3_photo_5_vanity_entry.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc5l12000stldxw35533.jpg"
        },
        {
          "title": "Smart Toilet & Rain Shower",
          "titleZh": "智能温水马桶与独立淋浴间",
          "file": "media/hotels/booked_rooms/hotel_3_photo_6_smart_toilet.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc5u12000stlchs5B325.jpg"
        }
      ]
    },
    "tripUrl": "https://sg.trip.com/hotels/guangzhou-hotel-detail-131873153/atour-hotel-guangzhou-dongshankou/"
  },
  {
    "id": "hotel_4_qiuguo",
    "name": "Qiuguo S Hotel Shenzhen (Nanshan Nantou)",
    "nameZh": "深圳南山科技园秋果S酒店南头古城店",
    "exteriorPhoto": "media/hotels/hotel_4_qiuguo_shenzhen_photo.jpg",
    "exteriorUrl": "https://dimg04.c-ctrip.com/images/1mc6n12000ipkbh0qB00A.jpg",
    "bookedRoom": {
      "name": "Forest Oxygen Bar Family Suite",
      "nameZh": "森林氧吧家庭套房【亲子床+智能客控+迷你冰箱】",
      "beds": "1 Master Queen Bed (1.8m) + 1 Upper Kid Bunk Bed (1.2m)",
      "perks": "In-Room Negative Ion Oxygen Generator • Tatami Tea Platform • Smart Bidet • Minibar",
      "photos": [
        {
          "title": "Master Bedroom & TV Lounge",
          "titleZh": "主卧大床区、智能电视与榻榻米通道",
          "file": "media/hotels/booked_rooms/hotel_4_photo_1_master_bedroom.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc2z12000e5oev1v8F62.jpg"
        },
        {
          "title": "Kid's Bunk Bed & Oxygen Unit",
          "titleZh": "原木双层儿童床、蜡笔小新床品与制氧机",
          "file": "media/hotels/booked_rooms/hotel_4_photo_2_bunk_bed.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc2712000olwtya5D13F.jpg"
        },
        {
          "title": "Japanese Tatami Tea Ceremony",
          "titleZh": "日式榻榻米茶歇区与静音小冰箱",
          "file": "media/hotels/booked_rooms/hotel_4_photo_3_tatami_tea.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc6p12000e5oft77D442.jpg"
        },
        {
          "title": "Smart Bidet & Rainfall Shower",
          "titleZh": "马赛克干湿分离卫浴与智能马桶",
          "file": "media/hotels/booked_rooms/hotel_4_photo_4_bathroom.jpg",
          "url": "https://dimg04.c-ctrip.com/images/0583v12000som6otoD045.jpg"
        }
      ]
    },
    "tripUrl": "https://sg.trip.com/hotels/shenzhen-hotel-detail-120148979/qiuguo-s-hotel/"
  },
  {
    "id": "hotel_5_royal_plaza",
    "name": "Royal Plaza Hotel Hong Kong (Mong Kok)",
    "nameZh": "香港帝京酒店",
    "exteriorPhoto": "media/hotels/hotel_5_royal_plaza_hk_photo.jpg",
    "exteriorUrl": "https://dimg04.c-ctrip.com/images/fd/hotel/g6/M04/14/AB/CggYslarLM6AWIs0AAHU_dnYpG4081.jpg",
    "bookedRoom": {
      "name": "Plaza Deluxe Family Room",
      "nameZh": "豪华亲子客房（2张双人床 • 4人入住 • 直通MOKO）",
      "beds": "2 Queen/Double Beds (1.5m each - 33 sqm)",
      "perks": "Accommodates 4 Guests • Deep Soaking Bathtub • Mountain View • Direct MOKO Mall Connection",
      "photos": [
        {
          "title": "2 Queen Beds & Lion Rock View",
          "titleZh": "两张豪华双人床与狮子山景大窗",
          "file": "media/hotels/booked_rooms/hotel_5_photo_1_deluxe_beds.jpg",
          "url": "https://dimg04.c-ctrip.com/images/0585n12000sv7f9te535B.jpg"
        },
        {
          "title": "Luxury Marble Bathtub & Vanity",
          "titleZh": "大理石深泡浴缸与环形美妆镜",
          "file": "media/hotels/booked_rooms/hotel_5_photo_2_marble_bathroom.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc5y12000smi2eew51BD.jpg"
        },
        {
          "title": "Executive Desk & Media Console",
          "titleZh": "玻璃办公桌与多功能媒体插座",
          "file": "media/hotels/booked_rooms/hotel_5_photo_3_work_desk.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc7412000ht1oxycEB50.jpg"
        },
        {
          "title": "Bedside Smart Controls & USB",
          "titleZh": "床头集中灯控、飞利浦音响与USB充电接口",
          "file": "media/hotels/booked_rooms/hotel_5_photo_4_bedside_console.jpg",
          "url": "https://dimg04.c-ctrip.com/images/1mc1d12000hswvr8k8EDC.jpg"
        }
      ]
    },
    "tripUrl": "https://sg.trip.com/hotels/hong-kong-hotel-detail-354012/royal-plaza-hotel/"
  }
];

if (typeof window !== 'undefined') window.hotelRoomsData = hotelRoomsData;
if (typeof globalThis !== 'undefined') globalThis.hotelRoomsData = hotelRoomsData;

// --- EXPEDITION ATTRACTIONS DATASET ---
const expeditionAttractions = [
  {
    "id": "shawan",
    "name": "Shawan Ancient Town",
    "category": "Heritage & Culture",
    "timeAlloc": "Late Afternoon (3h)",
    "tag": "PANYU • HERITAGE",
    "tagIcon": "fa-landmark",
    "image": "/assets/attractions/shawan.jpg",
    "desc": "Picturesque Lingnan water village celebrated for ancestral brick shrines, oyster-shell boundary walls, and ginger water-buffalo curd.",
    "meta1": {
      "label": "HISTORY",
      "value": "800+ Years Old"
    },
    "meta2": {
      "label": "DELICACY",
      "value": "Water-Buffalo Milk"
    },
    "photos": [
      "/assets/attractions/shawan.jpg",
      "/assets/attractions/shawan_2.jpg",
      "/assets/attractions/shawan_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80",
      "https://images.unsplash.com/photo-1528644499231-15f1d8f8a846?w=800&q=80",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "activities": [
      "Stroll 800-year-old stone alleys",
      "Taste authentic Ginger Milk Curd",
      "Visit Liugeng Hall",
      "Stroll alleys",
      "Eat ginger curd"
    ],
    "areaMap": "Metro Line 3 (Shiqiao) -> Bus Fan 67 to South Gate",
    "nearbyRecs": [
      "Baomo Garden"
    ],
    "guideUrls": [
      "https://sg.trip.com/travel-guide/attraction/guangzhou/shawan-ancient-town-10524178/"
    ],
    "reviews": [],
    "nameZh": "沙湾古镇",
    "region": "Panyu",
    "address": "Shawan Town, Panyu District, Guangzhou",
    "review": "An 800-year-old Lingnan water village known for oyster-shell walls and ginger milk curd.",
    "coordinates": [
      22.9051,
      113.3308
    ]
  },
  {
    "id": "dafushan",
    "name": "Dafushan Forest Park",
    "category": "Nature & Hiking",
    "timeAlloc": "Morning (4h)",
    "tag": "PANYU • NATURE",
    "tagIcon": "fa-tree",
    "image": "/assets/attractions/dafushan.jpg",
    "desc": "An expansive natural oasis favored by locals, featuring lush banyan trees, tandem biking around serene lakes, and morning tai chi.",
    "meta1": {
      "label": "LANDSCAPE",
      "value": "Lakes & Forest"
    },
    "meta2": {
      "label": "VIBE",
      "value": "Local Leisure"
    },
    "photos": [
      "/assets/attractions/dafushan.jpg",
      "/assets/attractions/dafushan_2.jpg",
      "/assets/attractions/dafushan_3.jpg",
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80",
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80"
    ],
    "activities": [
      "Rent tandem bikes",
      "Picnic under banyan trees",
      "Hike to the peak pavilion"
    ],
    "areaMap": "Metro Line 3 (Hanxi Changlong) -> Bus 10A",
    "nearbyRecs": [
      "Shiqiao Local Market"
    ],
    "guideUrls": [
      "https://www.travelchinaguide.com/"
    ],
    "reviews": [],
    "nameZh": "大夫山森林公园",
    "region": "Panyu",
    "address": "668 Yiyuan Road, Panyu District, Guangzhou",
    "review": "A 9,000-acre green space with paved paths for tandem biking around shaded artificial lakes.",
    "coordinates": [
      22.9572,
      113.3142
    ]
  },
  {
    "id": "baomo",
    "name": "Baomo Garden",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (3h)",
    "tag": "PANYU • HERITAGE",
    "tagIcon": "fa-fan",
    "image": "/assets/attractions/baomo.jpg",
    "desc": "A stunning showcase of late Qing Dynasty Lingnan architecture, featuring elaborate water gardens, stone bridges, and giant koi ponds.",
    "meta1": {
      "label": "ARCHITECTURE",
      "value": "Lingnan Gardens"
    },
    "meta2": {
      "label": "WILDLIFE",
      "value": "100,000 Koi Fish"
    },
    "photos": [
      "/assets/attractions/baomo.jpg",
      "/assets/attractions/baomo_2.jpg",
      "/assets/attractions/baomo_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80",
      "https://images.unsplash.com/photo-1518002171953-a080ef816f15?w=800&q=80"
    ],
    "activities": [
      "Feed the massive koi ponds",
      "Admire Qingming porcelain reliefs",
      "Hanfu photography"
    ],
    "areaMap": "Metro Line 3 (Shiqiao) -> Bus Pan 67",
    "nearbyRecs": [
      "Shawan Ancient Town"
    ],
    "guideUrls": [
      "https://www.travelchinaguide.com/"
    ],
    "reviews": [],
    "nameZh": "宝墨园",
    "region": "Panyu",
    "address": "Zini Village, Wanqingsha Town, Panyu District, Guangzhou",
    "review": "A late Qing Dynasty garden featuring complex water networks and massive koi ponds.",
    "coordinates": [
      22.8988,
      113.2882
    ]
  },
  {
    "id": "safari",
    "name": "Chimelong Safari Park",
    "category": "Theme Parks & Wildlife",
    "timeAlloc": "Full Day (6-8h)",
    "tag": "CHIMELONG • PARK",
    "tagIcon": "fa-ticket",
    "image": "/assets/attractions/safari.jpg",
    "desc": "World-renowned animal theme park featuring open-air self-drive savannah train, scenic sky gondola over safari enclosures, and giant panda triplets.",
    "meta1": {
      "label": "TIME REQUIRED",
      "value": "Full Day (6-8h)"
    },
    "meta2": {
      "label": "HIGHLIGHT",
      "value": "Panda Triplets"
    },
    "photos": [
      "/assets/attractions/safari.jpg",
      "/assets/attractions/safari_2.jpg",
      "/assets/attractions/safari_3.jpg",
      "https://images.unsplash.com/photo-1564175822606-8d693f4cc14d?w=800&q=80",
      "https://images.unsplash.com/photo-1536605234-8c8577eb0c7b?w=800&q=80",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      "https://images.unsplash.com/photo-1564175822606-8d693f4cc14d?w=800",
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800"
    ],
    "activities": [
      "Ride 40-min open-air Safari Train",
      "Take transparent Sky Gondola",
      "Panda Village",
      "Ride Safari Train",
      "Take Sky Gondola"
    ],
    "areaMap": "Metro Line 3/7 (Hanxi Changlong) -> Free Shuttle",
    "nearbyRecs": [
      "International Circus"
    ],
    "guideUrls": [
      "https://www.chimelong.com/"
    ],
    "reviews": [
      {
        "title": "3 Parks, 3 Days Family Safari POV",
        "url": "https://www.youtube.com/watch?v=uUvuE9sWNsM"
      },
      {
        "title": "Safari Park Open-Air Train VLOG",
        "url": "https://www.youtube.com/watch?v=Zbx1ooA7odk"
      }
    ],
    "nameZh": "长隆野生动物世界",
    "region": "Chimelong",
    "address": "105 National Highway, Panyu District, Guangzhou",
    "website": "https://www.chimelong.com/",
    "review": "A massive wildlife park featuring a self-drive safari zone and the world's only giant panda triplets.",
    "coordinates": [
      23.0035,
      113.3285
    ]
  },
  {
    "id": "circus",
    "name": "Chimelong International Circus",
    "category": "Heritage & Culture",
    "timeAlloc": "Night Show (2h)",
    "tag": "CHIMELONG • SHOW",
    "tagIcon": "fa-masks-theater",
    "image": "/assets/attractions/circus.jpg",
    "desc": "The largest permanent circus in the world, featuring elite performers, high-altitude trapeze, equestrian stunts, and immersive lasers.",
    "meta1": {
      "label": "SHOWTIME",
      "value": "19:30 Daily"
    },
    "meta2": {
      "label": "DURATION",
      "value": "90 Minutes"
    },
    "photos": [
      "/assets/attractions/circus.jpg",
      "/assets/attractions/circus_2.jpg",
      "/assets/attractions/circus_3.jpg",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80"
    ],
    "activities": [
      "Watch global acrobatics",
      "VIP Seating experience",
      "Laser & light shows"
    ],
    "areaMap": "Metro Line 3/7 (Hanxi Changlong)",
    "nearbyRecs": [
      "Safari Park",
      "Chimelong Paradise"
    ],
    "guideUrls": [
      "https://www.chimelong.com/"
    ],
    "reviews": [
      {
        "title": "International Circus Full Experience",
        "url": "https://www.youtube.com/watch?v=ZSYW1VKwLd8"
      },
      {
        "title": "Family Circus Night VLOG",
        "url": "https://www.youtube.com/watch?v=Zbx1ooA7odk"
      }
    ],
    "nameZh": "长隆国际大马戏",
    "region": "Chimelong",
    "address": "Chimelong Tourist Resort, Panyu District, Guangzhou",
    "website": "https://www.chimelong.com/",
    "review": "A 90-minute evening spectacular featuring elite global acrobats, equestrian stunts, and lasers.",
    "coordinates": [
      22.9982,
      113.3325
    ]
  },
  {
    "id": "cantontower",
    "name": "Canton Tower (Guangzhou Tower)",
    "category": "Heritage & Culture",
    "timeAlloc": "Night (3h)",
    "tag": "CANTON • LANDMARK",
    "tagIcon": "fa-tower-observation",
    "image": "/assets/attractions/cantontower.jpg",
    "desc": "Standing at 600 meters, China’s tallest TV tower offers breathtaking 360-degree views, the world’s highest horizontal Ferris wheel, and a glowing night spectacle.",
    "meta1": {
      "label": "HEIGHT",
      "value": "600 Meters"
    },
    "meta2": {
      "label": "RIDE",
      "value": "Bubble Tram"
    },
    "photos": [
      "/assets/attractions/cantontower.jpg",
      "/assets/attractions/cantontower_2.jpg",
      "/assets/attractions/cantontower_3.jpg",
      "https://images.unsplash.com/photo-1563384218386-9dcaf77ef0a8?w=800&q=80",
      "https://images.unsplash.com/photo-1592671049969-906d09bb99ee?w=800&q=80"
    ],
    "activities": [
      "Ride the Bubble Tram at 450m",
      "Skywalk experience",
      "Pearl River night cruise boarding"
    ],
    "areaMap": "Metro Line 3 / APM (Canton Tower Station)",
    "nearbyRecs": [
      "Haixinsha Island",
      "Guangzhou Opera House"
    ],
    "guideUrls": [
      "https://www.cantontower.com/"
    ],
    "reviews": [],
    "nameZh": "广州塔",
    "address": "No. 222 West Yuejiang Road, Haizhu District, Guangzhou",
    "coordinates": [
      23.1065,
      113.3245
    ],
    "review": "Visitors praise the 360-degree panoramic views from the open-air observation deck and describe the Bubble Tram at sunset as an unforgettable experience.",
    "website": "https://www.cantontower.com/",
    "region": "Canton Heritage"
  },
  {
    "id": "chenclan",
    "name": "Chen Clan Ancestral Hall",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (2h)",
    "tag": "CANTON • HERITAGE",
    "tagIcon": "fa-gopuram",
    "image": "/assets/attractions/chenclan.jpg",
    "desc": "A masterpiece of Lingnan architecture serving as the Guangdong Folk Art Museum. Famous for extremely intricate wood, brick, stone, and ivory carvings.",
    "meta1": {
      "label": "ART",
      "value": "Folk Masterpieces"
    },
    "meta2": {
      "label": "HISTORY",
      "value": "Late Qing Dynasty"
    },
    "photos": [
      "/assets/attractions/chenclan.jpg",
      "/assets/attractions/chenclan_2.jpg",
      "/assets/attractions/chenclan_3.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80",
      "https://images.unsplash.com/photo-1551042718-d9d300eb2d8b?w=800&q=80",
      "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "activities": [
      "Examine intricate roof crest ceramics",
      "View ivory and jade carvings",
      "Courtyard photography",
      "Admire roof ridge pottery",
      "Folk art exhibits"
    ],
    "areaMap": "Metro Line 1 (Chen Clan Academy) -> Exit D",
    "nearbyRecs": [
      "Shangxiajiu Pedestrian Street"
    ],
    "guideUrls": [
      "https://www.travelchinaguide.com/"
    ],
    "reviews": [],
    "nameZh": "陈家祠",
    "region": "Canton Heritage",
    "address": "No. 34 Enlong Li, Zhongshan 7th Road, Liwan District, Guangzhou",
    "website": "http://www.gemuseum.cn/",
    "review": "Highly commended for its mesmerizing late-Qing dynasty wood, brick, and ceramic roof carvings.",
    "coordinates": [
      23.1278,
      113.2458
    ]
  },
  {
    "id": "dongshankou",
    "name": "Dongshankou Mansions",
    "category": "Heritage & Culture",
    "timeAlloc": "Afternoon (3h)",
    "tag": "CANTON • LOCAL",
    "tagIcon": "fa-mug-hot",
    "image": "/assets/attractions/dongshankou.jpg",
    "desc": "A historic neighborhood of 1920s Republican-era red brick mansions, now transformed into Guangzhou’s premier indie arts and cafe district.",
    "meta1": {
      "label": "ARCHITECTURE",
      "value": "1920s Villas"
    },
    "meta2": {
      "label": "VIBE",
      "value": "Indie Arts & Cafes"
    },
    "photos": [
      "/assets/attractions/dongshankou.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80",
      "https://images.unsplash.com/photo-1534008897995-28109b0b4b24?w=800&q=80"
    ],
    "activities": [
      "Cafe hopping in historic villas",
      "Photography at Kuiyuan Gallery"
    ],
    "areaMap": "Metro Line 1/6 (Dongshankou) -> Exit E/F",
    "nearbyRecs": [
      "Beijing Road"
    ],
    "guideUrls": [
      "https://www.trip.com/"
    ],
    "reviews": [],
    "region": "Canton Heritage"
  },
  {
    "id": "shamian",
    "name": "Shamian Island",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (2-3h)",
    "tag": "CANTON • HERITAGE",
    "tagIcon": "fa-building",
    "image": "/assets/attractions/shamian.jpg",
    "desc": "A tranquil sandbank island steeped in history. Once a British and French enclave, it features meticulously preserved 19th-century colonial architecture, massive banyan-lined avenues, and boutique cafes.",
    "meta1": {
      "label": "ERA",
      "value": "Colonial 19th Century"
    },
    "meta2": {
      "label": "VIBE",
      "value": "European Enclave"
    },
    "photos": [
      "/assets/attractions/shamian.jpg",
      "/assets/attractions/shamian_2.jpg",
      "/assets/attractions/shamian_3.jpg",
      "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?w=800&q=80",
      "https://images.unsplash.com/photo-1541846513-33bc0c1bc256?w=800&q=80"
    ],
    "activities": [
      "Photograph the historic ex-British & French colonial mansions",
      "Drink coffee at the famous colonial Starbucks reserve",
      "Relax by the Pearl River promenade under centuries-old Banyan trees"
    ],
    "areaMap": "Metro Line 1 (Huangsha) -> Exit F",
    "nearbyRecs": [
      "Liwan Lake Park"
    ],
    "guideUrls": [
      "https://www.travelchinaguide.com/"
    ],
    "reviews": [
      {
        "title": "The ex-British and French enclave of Shamian Island",
        "url": "https://www.youtube.com/watch?v=YRU1w9mUBoo"
      },
      {
        "title": "This Doesn’t Feel Like China… Exploring Shamian Island",
        "url": "https://www.youtube.com/watch?v=cx4OsI81h_c"
      }
    ],
    "nameZh": "沙面岛",
    "region": "Canton Heritage",
    "address": "Shamian Island, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "Travelers love the quiet, European-like tree-lined boulevards, historic colonial villas, and relaxing outdoor coffee shops.",
    "coordinates": [
      23.1075,
      113.2431
    ]
  },
  {
    "id": "gulong",
    "name": "Qingyuan Gulong Gorge",
    "category": "Nature & Hiking",
    "timeAlloc": "Full Day (8h)",
    "tag": "QINGYUAN • ALPINE",
    "tagIcon": "fa-mountain",
    "image": "/assets/attractions/gulong.jpg",
    "desc": "Massive alpine forest reserve featuring a 520m suspended glass walkway, towering waterfalls, gravity-driven QQ Speed Go-Karts, and a thrilling Cliff Roller Coaster.",
    "meta1": {
      "label": "RECORD",
      "value": "12 World Records"
    },
    "meta2": {
      "label": "RIDE",
      "value": "Canyon Coaster"
    },
    "photos": [
      "/assets/attractions/gulong.jpg",
      "/assets/attractions/gulong_2.jpg",
      "/assets/attractions/gulong_3.jpg",
      "https://images.unsplash.com/photo-1517524953930-74676517865c?w=800&q=80",
      "https://images.unsplash.com/photo-1470072551573-04dc32c32cc1?w=800&q=80",
      "https://images.unsplash.com/photo-1517524953930-74676517865c?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Walk the 520m Glass Skywalk over the waterfall",
      "Race down the mountain on QQ Speed Go-Karts",
      "Ride the Cliff Roller Coaster"
    ],
    "areaMap": "Private Charter recommended (1.5h drive)",
    "nearbyRecs": [
      "Yingxi Peak Forest"
    ],
    "guideUrls": [
      "https://www.trip.com/"
    ],
    "reviews": [
      {
        "title": "I Survived China’s CRAZIEST Glass Bridge & Cliff Coaster!",
        "url": "https://www.youtube.com/watch?v=tNAdBOZdXxs"
      },
      {
        "title": "Gulong Canyon POV & Mario Kart Style Racing",
        "url": "https://www.youtube.com/watch?v=CGj8EX-8hgc"
      },
      {
        "title": "China Guangzhou Tour: Gulong Gorge",
        "url": "https://www.youtube.com/watch?v=Hn6WIGYYTdM"
      },
      {
        "title": "Day 2 in China | Gulong Gorge | Go Karting",
        "url": "https://www.youtube.com/watch?v=abXLd03OajE"
      }
    ],
    "region": "Qingyuan"
  },
  {
    "id": "indoorski",
    "name": "Shenzhen Karoo Ice & Snow World",
    "category": "Skyline & Modern",
    "timeAlloc": "Half Day (4h)",
    "tag": "SHENZHEN • ACTION",
    "tagIcon": "fa-snowflake",
    "image": "/assets/attractions/indoorski.jpg",
    "desc": "A massive indoor winter wonderland offering year-round skiing, snowboarding, and snow entertainment right in the subtropics of Shenzhen.",
    "meta1": {
      "label": "ACTIVITY",
      "value": "Indoor Ski & Snowboard"
    },
    "meta2": {
      "label": "TEMP",
      "value": "Sub-Zero Winter"
    },
    "photos": [
      "/assets/attractions/indoorski.jpg",
      "/assets/attractions/indoorski_2.jpg",
      "/assets/attractions/indoorski_3.jpg",
      "https://images.unsplash.com/photo-1551524164-687a55dd1126?w=800&q=80",
      "https://images.unsplash.com/photo-1516132006923-3e115018659d?w=800&q=80"
    ],
    "activities": [
      "Skiing on indoor slopes",
      "Snowboarding lessons",
      "Snow tube slides"
    ],
    "areaMap": "Metro Line 4 (Guanlan) -> Mission Hills",
    "nearbyRecs": [
      "Mission Hills Centreville"
    ],
    "guideUrls": [
      "https://www.trip.com/"
    ],
    "reviews": [],
    "region": "Shenzhen"
  },
  {
    "id": "dji",
    "name": "DJI Sky City Global HQ",
    "category": "Skyline & Modern",
    "timeAlloc": "Afternoon (2h)",
    "tag": "SHENZHEN • TECH",
    "tagIcon": "fa-microchip",
    "image": "/assets/attractions/dji.jpg",
    "desc": "State-of-the-art dual cantilever towers designed by Foster + Partners. Features an outdoor drone flight test bridge suspended high in the air and a futuristic showroom.",
    "meta1": {
      "label": "ARCHITECTURE",
      "value": "Suspension Towers"
    },
    "meta2": {
      "label": "EXPERIENCE",
      "value": "Drone Flagship Demo"
    },
    "photos": [
      "/assets/attractions/dji.jpg",
      "/assets/attractions/dji_2.jpg",
      "/assets/attractions/dji_3.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80",
      "https://images.unsplash.com/photo-1551694291-76495db600ed?w=800&q=80",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Walk the glass suspension bridge connecting the twin towers",
      "Watch indoor drone flight tests in the flagship store",
      "Experience the asymmetric architectural design"
    ],
    "areaMap": "Metro Line 5 (Liuxiandong)",
    "nearbyRecs": [
      "Tencent HQ"
    ],
    "guideUrls": [
      "https://www.dji.com/company/skycity"
    ],
    "reviews": [
      {
        "title": "Welcome to DJI Sky City (Official Reveal)",
        "url": "https://www.youtube.com/watch?v=RGsa_bpkVpU"
      },
      {
        "title": "Futuristic DJI Headquarters Walking Tour",
        "url": "https://www.youtube.com/watch?v=OMbgdGUn3-s"
      }
    ],
    "nameZh": "大疆天空之城",
    "region": "Shenzhen",
    "address": "Nanshan District, Shenzhen",
    "review": "Twin cantilevered skyscrapers featuring an outdoor suspension bridge used for drone flight testing.",
    "coordinates": [
      22.5765,
      113.9482
    ]
  },
  {
    "id": "talentpark",
    "name": "Shenzhen Talent Park",
    "category": "Nature & Hiking",
    "timeAlloc": "Evening (2h)",
    "tag": "SHENZHEN • NATURE",
    "tagIcon": "fa-water",
    "image": "/assets/attractions/talentpark.jpg",
    "desc": "A pristine coastal park blending modern skyline views with ecological wetlands, offering the best vantage point for Shenzhen’s evening light shows.",
    "meta1": {
      "label": "LANDSCAPE",
      "value": "Coastal Skyline"
    },
    "meta2": {
      "label": "NIGHT",
      "value": "City Light Show"
    },
    "photos": [
      "/assets/attractions/talentpark.jpg",
      "/assets/attractions/talentpark_2.jpg",
      "/assets/attractions/talentpark_3.jpg",
      "https://images.unsplash.com/photo-1552554746-81e05d233e14?w=800&q=80",
      "https://images.unsplash.com/photo-1573843981267-be11a43a0e69?w=800&q=80"
    ],
    "activities": [
      "Walk the coastal promenade",
      "Watch Houhai CBD night lights"
    ],
    "areaMap": "Metro Line 2/11 (Houhai)",
    "nearbyRecs": [
      "OCT Harbour"
    ],
    "guideUrls": [
      "https://www.trip.com/"
    ],
    "reviews": [],
    "nameZh": "深圳人才公园",
    "region": "Shenzhen",
    "address": "Houhai Riverside, Nanshan District, Shenzhen",
    "review": "A pristine coastal wetland park offering the best vantage point for the Houhai CBD evening light show.",
    "coordinates": [
      22.5152,
      113.9488
    ]
  },
  {
    "id": "shamshuipo",
    "name": "Sham Shui Po",
    "category": "Skyline & Modern",
    "timeAlloc": "Afternoon (3h)",
    "tag": "HONG KONG • LOCAL",
    "tagIcon": "fa-store",
    "image": "/assets/attractions/shamshuipo.jpg",
    "desc": "The beating heart of working-class Hong Kong, famous for raw street photography, vintage electronics, and Michelin street food.",
    "meta1": {
      "label": "CULTURE",
      "value": "Raw Local Vibe"
    },
    "meta2": {
      "label": "FOOD",
      "value": "Street Food Mecca"
    },
    "photos": [
      "/assets/attractions/shamshuipo.jpg",
      "/assets/attractions/shamshuipo_2.jpg",
      "/assets/attractions/shamshuipo_3.jpg",
      "https://images.unsplash.com/photo-1549429532-6bf5dc0321fb?w=800&q=80",
      "https://images.unsplash.com/photo-1539268610582-8bc1050e5015?w=800&q=80"
    ],
    "activities": [
      "Hunt vintage electronics",
      "Eat Cheung Fun"
    ],
    "areaMap": "MTR Sham Shui Po (Tsuen Wan Line)",
    "nearbyRecs": [
      "Mong Kok Ladies Market"
    ],
    "guideUrls": [
      "https://www.discoverhongkong.com/"
    ],
    "reviews": [],
    "region": "Hong Kong"
  },
  {
    "id": "lionrock",
    "name": "Lion Rock Country Park",
    "category": "Skyline & Modern",
    "timeAlloc": "Morning (4-5h)",
    "tag": "HONG KONG • NATURE",
    "tagIcon": "fa-mountain-sun",
    "image": "/assets/attractions/lionrock.jpg",
    "desc": "The most iconic mountain in Hong Kong, offering a steep, challenging hike along the MacLehose trail. It rewards climbers with sweeping, panoramic sunset views of the Kowloon Peninsula.",
    "meta1": {
      "label": "HIKE",
      "value": "MacLehose Trail"
    },
    "meta2": {
      "label": "VIEW",
      "value": "Panoramic Kowloon"
    },
    "photos": [
      "/assets/attractions/lionrock.jpg",
      "/assets/attractions/lionrock_2.jpg",
      "/assets/attractions/lionrock_3.jpg",
      "https://images.unsplash.com/photo-1598516246473-b26a6d0c2e68?w=800&q=80",
      "https://images.unsplash.com/photo-1572973809053-96b666a3363e?w=800&q=80"
    ],
    "activities": [
      "Hike the legendary MacLehose Trail to the summit",
      "Spot wild Macaques along the mountain path",
      "Watch the sunset over the Kowloon Peninsula from the Lion's Head"
    ],
    "areaMap": "MTR Wong Tai Sin -> Minibus 18M",
    "nearbyRecs": [
      "Wong Tai Sin Temple"
    ],
    "guideUrls": [
      "https://www.discoverhongkong.com/"
    ],
    "reviews": [
      {
        "title": "Lion Rock Peak Hike | The Most ICONIC Mountain In HK",
        "url": "https://www.youtube.com/watch?v=g22oVyorlwA"
      },
      {
        "title": "Lion Rock Hike: from Wong Tai Sin and back",
        "url": "https://www.youtube.com/watch?v=YRJZsGRWnfk"
      }
    ],
    "nameZh": "獅子山郊野公園",
    "address": "Wong Tai Sin / Kowloon, Hong Kong",
    "coordinates": [
      22.3525,
      114.1852
    ],
    "review": "An iconic hike with steep rock staircases leading to a dramatic summit overlooking all of Kowloon and Victoria Harbour.",
    "region": "Hong Kong"
  },
  {
    "id": "nanyue",
    "name": "Nanyue Garden",
    "category": "Heritage & Culture",
    "timeAlloc": "Afternoon (2h)",
    "tag": "PANYU • HERITAGE",
    "tagIcon": "fa-vihara",
    "image": "/assets/attractions/nanyue.jpg",
    "desc": "Companion to Baomo Garden, featuring royal-style Lingnan architecture.",
    "meta1": {
      "label": "STYLE",
      "value": "Royal Lingnan"
    },
    "meta2": {
      "label": "VIBE",
      "value": "Tranquil"
    },
    "photos": [
      "/assets/attractions/nanyue.jpg",
      "https://images.unsplash.com/photo-1596426466989-13653199bc4b?w=800",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "activities": [
      "Architecture tour"
    ],
    "areaMap": "Adjacent to Baomo Garden",
    "nearbyRecs": [
      "Baomo Garden"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "南粤苑",
    "region": "Panyu",
    "address": "Zini Village, Wanqingsha Town, Panyu District, Guangzhou",
    "review": "Located near Baomo Garden, showcasing ornate Lingnan architecture combined with imperial garden landscaping.",
    "coordinates": [
      22.8955,
      113.2912
    ]
  },
  {
    "id": "lotus",
    "name": "Lotus Hill (Lianhua Shan)",
    "category": "Heritage & Culture",
    "timeAlloc": "Half Day (4h)",
    "tag": "PANYU • SCENIC",
    "tagIcon": "fa-mountain-sun",
    "image": "/assets/attractions/lotus.jpg",
    "desc": "Ancient quarry site featuring a massive golden Guanyin statue overlooking the sea.",
    "meta1": {
      "label": "MONUMENT",
      "value": "Golden Guanyin"
    },
    "meta2": {
      "label": "VIEW",
      "value": "Sea Cliffs"
    },
    "photos": [
      "/assets/attractions/lotus.jpg",
      "https://images.unsplash.com/photo-1623869274213-911e38ddf592?w=800",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "activities": [
      "Climb ancient quarry",
      "Pray at statue"
    ],
    "areaMap": "Metro L4 (Shiqi) -> Bus",
    "nearbyRecs": [],
    "guideUrls": [],
    "reviews": [],
    "region": "Panyu"
  },
  {
    "id": "panyu_museum",
    "name": "Panyu Museum",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (2h)",
    "tag": "PANYU • CULTURE",
    "tagIcon": "fa-building-columns",
    "image": "/assets/attractions/panyu_museum.jpg",
    "desc": "Local history museum showcasing Panyu’s maritime and agricultural heritage.",
    "meta1": {
      "label": "TYPE",
      "value": "Museum"
    },
    "meta2": {
      "label": "FOCUS",
      "value": "Maritime History"
    },
    "photos": [
      "/assets/attractions/panyu_museum.jpg",
      "/assets/attractions/panyu_museum_2.jpg",
      "/assets/attractions/panyu_museum_3.jpg",
      "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=800",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "activities": [
      "View ancient ships"
    ],
    "areaMap": "Shiqiao Town Center",
    "nearbyRecs": [
      "Shiqiao Market"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "番禺区博物馆",
    "region": "Panyu",
    "address": "No. 130 Ginkgo Road, Panyu District, Guangzhou",
    "review": "Houses local artifacts, including excavated Han Dynasty tombs and agricultural history.",
    "coordinates": [
      22.9238,
      113.3685
    ]
  },
  {
    "id": "shiqiao",
    "name": "Shiqiao Pedestrian Street",
    "category": "Heritage & Culture",
    "timeAlloc": "Evening (2h)",
    "tag": "PANYU • LOCAL",
    "tagIcon": "fa-store",
    "image": "https://images.unsplash.com/photo-1555529733-0e67056058e1?w=800",
    "desc": "The bustling commercial heart of old Panyu, full of local street food and shops.",
    "meta1": {
      "label": "VIBE",
      "value": "Bustling Market"
    },
    "meta2": {
      "label": "FOOD",
      "value": "Street Snacks"
    },
    "photos": [
      "https://images.unsplash.com/photo-1555529733-0e67056058e1?w=800",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "activities": [
      "Shop for local goods",
      "Eat street food"
    ],
    "areaMap": "Metro L3 (Shiqiao)",
    "nearbyRecs": [
      "Dafushan Forest"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "市桥步行街",
    "region": "Panyu",
    "address": "Shiqiao, Panyu District, Guangzhou",
    "review": "The primary local commercial artery for traditional eateries and everyday shopping.",
    "coordinates": [
      22.9412,
      113.3582
    ]
  },
  {
    "id": "yuyin",
    "name": "Yuyin Shanfang",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (2h)",
    "tag": "PANYU • HERITAGE",
    "tagIcon": "fa-leaf",
    "image": "/assets/attractions/yuyin.jpg",
    "desc": "One of Guangdong’s four great historic classical gardens, built in 1867.",
    "meta1": {
      "label": "HERITAGE",
      "value": "Classical Garden"
    },
    "meta2": {
      "label": "YEAR",
      "value": "1867"
    },
    "photos": [
      "/assets/attractions/yuyin.jpg",
      "/assets/attractions/yuyin_2.jpg",
      "/assets/attractions/yuyin_3.jpg",
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "activities": [
      "Explore pavilions",
      "Courtyard walks"
    ],
    "areaMap": "Metro L7 (Nancun Wanbo)",
    "nearbyRecs": [
      "Wanbo CBD"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Panyu"
  },
  {
    "id": "birds_park",
    "name": "Chimelong Birds Park",
    "category": "Nature & Hiking",
    "timeAlloc": "Half Day (3-4h)",
    "tag": "CHIMELONG • NATURE",
    "tagIcon": "fa-dove",
    "image": "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800",
    "desc": "Expansive ecological wetland sanctuary home to thousands of rare birds and wetlands.",
    "meta1": {
      "label": "SPECIES",
      "value": "Rare Wetlands"
    },
    "meta2": {
      "label": "HIGHLIGHT",
      "value": "Flight Demonstrations"
    },
    "photos": [
      "https://images.unsplash.com/photo-1444464666168-49d633b86797?w=800",
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80",
      "https://images.unsplash.com/photo-1498673295982-fbbdf1c60b5f?w=800&q=80",
      "https://images.unsplash.com/photo-1549487532-a50d26850c95?w=800&q=80"
    ],
    "activities": [
      "Wetland boat ride",
      "Pelican feeding",
      "Feed the hungry hippos",
      "Watch the massive crocodile enclosure",
      "See the Flamingo free-flight"
    ],
    "areaMap": "Resort Shuttle Bus",
    "nearbyRecs": [
      "Safari Park"
    ],
    "guideUrls": [],
    "reviews": [
      {
        "title": "Birds Park & Hippo Feeding POV",
        "url": "https://www.youtube.com/watch?v=uUvuE9sWNsM"
      },
      {
        "title": "Zoo & Bird Park VLOG",
        "url": "https://www.youtube.com/watch?v=Zbx1ooA7odk"
      }
    ],
    "nameZh": "长隆飞鸟乐园",
    "region": "Chimelong",
    "address": "Shawan Zhen, Panyu District, Guangzhou",
    "website": "https://www.chimelong.com/",
    "review": "A vast wetland reserve located 15 minutes away, housing pelicans, flamingos, and 100,000 crocodiles.",
    "coordinates": [
      23.0325,
      113.2752
    ]
  },
  {
    "id": "paradise",
    "name": "Chimelong Paradise",
    "category": "Heritage & Culture",
    "timeAlloc": "Full Day (8h)",
    "tag": "CHIMELONG • THRILL",
    "tagIcon": "fa-roller-coaster",
    "image": "/assets/attractions/paradise.jpg",
    "desc": "Guangzhou’s premier amusement park featuring a world-class 10-loop signature roller coaster and a terrifying 90-degree drop coaster.",
    "meta1": {
      "label": "RIDE",
      "value": "10-Loop Coaster"
    },
    "meta2": {
      "label": "ADRENALINE",
      "value": "90-Degree Drop"
    },
    "photos": [
      "/assets/attractions/paradise.jpg",
      "/assets/attractions/paradise_2.jpg",
      "/assets/attractions/paradise_3.jpg",
      "https://images.unsplash.com/photo-1512168203104-3910cb2aaadb?w=800&q=80"
    ],
    "activities": [
      "Ride the 10-Loop Coaster",
      "Experience the 90-degree vertical drop",
      "Watch the 4D stunt show"
    ],
    "areaMap": "Metro Line 3/7 (Hanxi Changlong) -> South Gate",
    "nearbyRecs": [
      "Safari Park",
      "Water Park"
    ],
    "guideUrls": [
      "https://www.chimelong.com/"
    ],
    "reviews": [
      {
        "title": "China's Craziest Theme Park POV",
        "url": "https://www.youtube.com/watch?v=AG4lbxezRvw"
      }
    ],
    "nameZh": "长隆欢乐世界",
    "region": "Chimelong",
    "address": "Chimelong Tourist Resort, Panyu District, Guangzhou",
    "website": "https://www.chimelong.com/",
    "review": "Guangzhou’s premier amusement park boasting a 10-loop roller coaster and a 90-degree Dive Coaster.",
    "coordinates": [
      22.9995,
      113.3342
    ]
  },
  {
    "id": "water_park",
    "name": "Chimelong Water Park",
    "category": "Heritage & Culture",
    "timeAlloc": "Full Day (5h)",
    "tag": "CHIMELONG • WATER",
    "tagIcon": "fa-water-ladder",
    "image": "/assets/attractions/water_park.jpg",
    "desc": "World-ranking outdoor water park with mega wave pools and aquatic night parties.",
    "meta1": {
      "label": "FEATURE",
      "value": "Mega Wave Pool"
    },
    "meta2": {
      "label": "SEASON",
      "value": "Summer / Heated"
    },
    "photos": [
      "/assets/attractions/water_park.jpg",
      "https://images.unsplash.com/photo-1582650625119-3a31f841836d?w=800",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80",
      "https://images.unsplash.com/photo-1582236166099-27a3c7e42d76?w=800&q=80"
    ],
    "activities": [
      "Tornado slide",
      "Wave pool concert",
      "Ride the high-speed slides",
      "Relax in the Lazy River",
      "Play at the Neverending Fountain"
    ],
    "areaMap": "Chimelong Resort Core",
    "nearbyRecs": [
      "Paradise"
    ],
    "guideUrls": [],
    "reviews": [
      {
        "title": "Family Waterpark Adventure",
        "url": "https://www.youtube.com/watch?v=ZSYW1VKwLd8"
      }
    ],
    "nameZh": "长隆水上乐园",
    "region": "Chimelong",
    "address": "Chimelong Tourist Resort, Panyu District, Guangzhou",
    "website": "https://www.chimelong.com/",
    "review": "The world's most visited water park, equipped with a mega wave pool and the Behemoth Bowl slide.",
    "coordinates": [
      23.0028,
      113.3298
    ]
  },
  {
    "id": "chimelong_gondola",
    "name": "Chimelong Sky Gondola",
    "category": "Theme Parks & Wildlife",
    "timeAlloc": "Morning (1h)",
    "tag": "CHIMELONG • SCENIC",
    "tagIcon": "fa-cable-car",
    "image": "/assets/attractions/chimelong_gondola.jpg",
    "desc": "Transparent-floor aerial cable car gliding silently above wild animals and savannahs.",
    "meta1": {
      "label": "PERSPECTIVE",
      "value": "Bird’s Eye View"
    },
    "meta2": {
      "label": "ROUTE",
      "value": "Circular Loop"
    },
    "photos": [
      "/assets/attractions/chimelong_gondola.jpg",
      "/assets/attractions/chimelong_gondola_2.jpg",
      "/assets/attractions/chimelong_gondola_3.jpg",
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
    ],
    "activities": [
      "Aerial safari viewing",
      "Landscape photography"
    ],
    "areaMap": "Inside Safari Park",
    "nearbyRecs": [
      "Safari Park"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Chimelong"
  },
  {
    "id": "panda_village",
    "name": "Panda Village & Nursery",
    "category": "Theme Parks & Wildlife",
    "timeAlloc": "Morning (2h)",
    "tag": "CHIMELONG • WILDLIFE",
    "tagIcon": "fa-paw",
    "image": "/assets/attractions/panda_village.jpg",
    "desc": "Dedicated giant panda conservation habitat and bamboo garden featuring panda triplets.",
    "meta1": {
      "label": "EXHIBIT",
      "value": "Panda Triplets"
    },
    "meta2": {
      "label": "HABITAT",
      "value": "Climate Controlled"
    },
    "photos": [
      "/assets/attractions/panda_village.jpg",
      "https://images.unsplash.com/photo-1527153857715-3908f2ae5e81?w=800",
      "https://images.unsplash.com/photo-1564175822606-8d693f4cc14d?w=800&q=80"
    ],
    "activities": [
      "Watch panda feeding",
      "Interactive learning lab"
    ],
    "areaMap": "Safari Park Central Zone",
    "nearbyRecs": [
      "Sky Gondola"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Chimelong"
  },
  {
    "id": "wanbo_cbd",
    "name": "Wanbo CBD Skyline",
    "category": "Theme Parks & Wildlife",
    "timeAlloc": "Evening (2h)",
    "tag": "CHIMELONG • URBAN",
    "tagIcon": "fa-city",
    "image": "/assets/attractions/wanbo_cbd.jpg",
    "desc": "Ultra-modern skyscraper business district bordering Chimelong, packed with trendy dining.",
    "meta1": {
      "label": "VIBE",
      "value": "Modern CBD"
    },
    "meta2": {
      "label": "FOOD",
      "value": "Fine Dining Hub"
    },
    "photos": [
      "/assets/attractions/wanbo_cbd.jpg",
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=800",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    "activities": [
      "CBD night walk",
      "Mall dining"
    ],
    "areaMap": "Metro L7 (Nancun Wanbo)",
    "nearbyRecs": [
      "Chimelong Resort"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Chimelong"
  },
  {
    "id": "beijing_road",
    "name": "Beijing Road & Dafo Temple",
    "category": "Heritage & Culture",
    "timeAlloc": "Evening (3h)",
    "tag": "CANTON • HERITAGE",
    "tagIcon": "fa-gopuram",
    "image": "/assets/attractions/beijing_road.jpg",
    "desc": "Historic pedestrian street showcasing ancient glass-paved road ruins and glowing Dafo Temple.",
    "meta1": {
      "label": "TEMPLE",
      "value": "Dafo Night Lights"
    },
    "meta2": {
      "label": "RUINS",
      "value": "Song Dynasty Road"
    },
    "photos": [
      "/assets/attractions/beijing_road.jpg",
      "https://images.unsplash.com/photo-1548013146-72479768bada?w=800",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "activities": [
      "See illuminated temple",
      "Sample Cantonese street snacks"
    ],
    "areaMap": "Metro L1/2 (Gongyuanqian)",
    "nearbyRecs": [
      "People’s Park"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Canton Heritage"
  },
  {
    "id": "yongqing_fang",
    "name": "Yongqing Fang & Cantonese Opera",
    "category": "Heritage & Culture",
    "timeAlloc": "Afternoon (3h)",
    "tag": "CANTON • CULTURE",
    "tagIcon": "fa-guitar",
    "image": "/assets/attractions/yongqing_fang.jpg",
    "desc": "Revitalized historic alley district featuring Bruce Lee’s ancestral home and Opera Museum.",
    "meta1": {
      "label": "HIGHLIGHT",
      "value": "Bruce Lee Ancestral House"
    },
    "meta2": {
      "label": "CULTURE",
      "value": "Opera Museum"
    },
    "photos": [
      "/assets/attractions/yongqing_fang.jpg",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "activities": [
      "Explore Xiguan mansions",
      "Hear water-stage opera"
    ],
    "areaMap": "Metro L1/6 (Huangsha Exit B)",
    "nearbyRecs": [
      "Shamian Island"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Canton Heritage"
  },
  {
    "id": "canton_tower",
    "name": "Canton Tower & Haixin Bridge",
    "category": "Heritage & Culture",
    "timeAlloc": "Evening (3h)",
    "tag": "CANTON • ICONIC",
    "tagIcon": "fa-tower-broadcast",
    "image": "/assets/attractions/canton_tower.jpg",
    "desc": "600m twist-silhouette broadcast tower paired with curved pedestrian Haixin Bridge.",
    "meta1": {
      "label": "HEIGHT",
      "value": "600m Pinnacle"
    },
    "meta2": {
      "label": "SKYLINE",
      "value": "Zhujiang New Town"
    },
    "photos": [
      "/assets/attractions/canton_tower.jpg",
      "/assets/attractions/canton_tower_2.jpg",
      "/assets/attractions/canton_tower_3.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "activities": [
      "Cross Haixin Bridge",
      "View Zhujiang skyline lights"
    ],
    "areaMap": "Metro L3 / APM (Canton Tower)",
    "nearbyRecs": [
      "Huacheng Square"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Canton Heritage"
  },
  {
    "id": "baiyun_mountain",
    "name": "Baiyun Mountain (White Cloud)",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (4h)",
    "tag": "CANTON • NATURE",
    "tagIcon": "fa-cloud-sun",
    "image": "/assets/attractions/baiyun_mountain.jpg",
    "desc": "Guangzhou’s scenic mountain lungs offering lush trail climbs and bird cage sanctuaries.",
    "meta1": {
      "label": "PEAK",
      "value": "Moxing Ridge"
    },
    "meta2": {
      "label": "CABLE CAR",
      "value": "Baiyun Ropeway"
    },
    "photos": [
      "/assets/attractions/baiyun_mountain.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "activities": [
      "Hike Moxing Ridge",
      "Ride Baiyun Cable Car"
    ],
    "areaMap": "Metro L2 (Baiyun Park) -> Bus",
    "nearbyRecs": [
      "Yuntai Garden"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Canton Heritage"
  },
  {
    "id": "liwan_lake",
    "name": "Liwan Lake Park & Pantang",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (2h)",
    "tag": "CANTON • LOCAL",
    "tagIcon": "fa-water",
    "image": "/assets/attractions/liwan_lake.jpg",
    "desc": "Classic Canton park with stone bridges, weeping willows, and water chestnut snack vendors.",
    "meta1": {
      "label": "PARK",
      "value": "Lingnan Lake"
    },
    "meta2": {
      "label": "SNACK",
      "value": "Pantang Water Chestnut"
    },
    "photos": [
      "/assets/attractions/liwan_lake.jpg",
      "https://images.unsplash.com/photo-1528164344705-475426879c0d?w=800",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "activities": [
      "Paddle boating",
      "Taste fresh water chestnut cake"
    ],
    "areaMap": "Metro L5 (Zhongshanba)",
    "nearbyRecs": [
      "Yongqing Fang"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Canton Heritage"
  },
  {
    "id": "sacred_heart",
    "name": "Sacred Heart Cathedral (Stone House)",
    "category": "Heritage & Culture",
    "timeAlloc": "Morning (1h)",
    "tag": "CANTON • HERITAGE",
    "tagIcon": "fa-church",
    "image": "/assets/attractions/sacred_heart.jpg",
    "desc": "Magnificent twin-spire Gothic cathedral built entirely from solid granite blocks in 1888.",
    "meta1": {
      "label": "STYLE",
      "value": "Gothic Granite"
    },
    "meta2": {
      "label": "ERA",
      "value": "Completed 1888"
    },
    "photos": [
      "/assets/attractions/sacred_heart.jpg",
      "/assets/attractions/sacred_heart_2.jpg",
      "/assets/attractions/sacred_heart_3.jpg",
      "https://images.unsplash.com/photo-1548625361-16a75f0a28f4?w=800",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "activities": [
      "View stained glass",
      "Cathedral plaza walk"
    ],
    "areaMap": "Metro L2/6 (Haizhu Square)",
    "nearbyRecs": [
      "Pearl River Pier"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "石室圣心大教堂",
    "region": "Canton Heritage",
    "address": "No. 56 Yide Road, Yuexiu District, Guangzhou",
    "website": "http://www.archdioceseofguangzhou.org/",
    "review": "Often called the 'Notre Dame of China,' visitors praise its striking twin Gothic stone spires and stunning stained-glass windows.",
    "coordinates": [
      23.1168,
      113.2562
    ]
  },
  {
    "id": "gulong_glass",
    "name": "Gulong Glass Grand Canyon",
    "category": "Nature & Hiking",
    "timeAlloc": "Morning (3h)",
    "tag": "QINGYUAN • SCENIC",
    "tagIcon": "fa-bridge-water",
    "image": "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80",
    "desc": "Transparent glass suspension bridge hanging hundreds of meters directly above roaring waterfalls.",
    "meta1": {
      "label": "SPAN",
      "value": "329m Suspension"
    },
    "meta2": {
      "label": "HEIGHT",
      "value": "202m Drop"
    },
    "photos": [
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80"
    ],
    "activities": [
      "Glass platform walk",
      "Waterfall mist photography"
    ],
    "areaMap": "Gulong Gorge Upper Area",
    "nearbyRecs": [
      "Gulong Coaster"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "古龙峡玻璃大峡谷",
    "address": "Gulong Gorge Scenic Area, Qingxin District, Qingyuan",
    "coordinates": [
      23.7428,
      112.9345
    ],
    "review": "A 520-meter transparent suspension bridge suspended high above a roaring canyon waterfall.",
    "region": "Qingyuan"
  },
  {
    "id": "gulong_waterfall",
    "name": "Wanxian Waterfall Cascades",
    "category": "Nature & Hiking",
    "timeAlloc": "Morning (2h)",
    "tag": "QINGYUAN • NATURE",
    "tagIcon": "fa-waterfall",
    "image": "/assets/attractions/gulong_waterfall.jpg",
    "desc": "Nine-tiered natural waterfall staircase cascading through ancient sub-tropical rainforest.",
    "meta1": {
      "label": "TIERS",
      "value": "9-Tier Waterfall"
    },
    "meta2": {
      "label": "AIR",
      "value": "Negative Ion Oasis"
    },
    "photos": [
      "/assets/attractions/gulong_waterfall.jpg",
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Rainforest canyon trekking",
      "Valley spring photography"
    ],
    "areaMap": "Gulong Valley Trail",
    "nearbyRecs": [
      "Glass Canyon"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Qingyuan"
  },
  {
    "id": "gulong_coaster",
    "name": "Gulong Jungle Mountain Coaster",
    "category": "Nature & Hiking",
    "timeAlloc": "Afternoon (1h)",
    "tag": "QINGYUAN • THRILL",
    "tagIcon": "fa-car-side",
    "image": "/assets/attractions/gulong_coaster.jpg",
    "desc": "Gravity-fed mountain toboggan zooming through lush forest turns down the canyon ridge.",
    "meta1": {
      "label": "LENGTH",
      "value": "3,000m Track"
    },
    "meta2": {
      "label": "SPEED",
      "value": "Brake Controlled"
    },
    "photos": [
      "/assets/attractions/gulong_coaster.jpg",
      "https://images.unsplash.com/photo-1513889961551-628c1e5e2ee9?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
    ],
    "activities": [
      "High-speed downhill toboggan ride"
    ],
    "areaMap": "Gulong Gorge Descent Station",
    "nearbyRecs": [
      "Rafting"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Qingyuan"
  },
  {
    "id": "yingxi_forest",
    "name": "Yingxi Peak Forest Corridor",
    "category": "Nature & Hiking",
    "timeAlloc": "Full Day (6h)",
    "tag": "QINGYUAN • KARST",
    "tagIcon": "fa-mountain-city",
    "image": "/assets/attractions/yingxi_forest.jpg",
    "desc": "Guangdong’s picturesque mini-Guilin featuring thousands of limestone karst mountain peaks.",
    "meta1": {
      "label": "GEOLOGY",
      "value": "Karst Formations"
    },
    "meta2": {
      "label": "LENGTH",
      "value": "20km Corridor"
    },
    "photos": [
      "/assets/attractions/yingxi_forest.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    "activities": [
      "Bamboo raft on peaceful river",
      "Karst rock climbing"
    ],
    "areaMap": "Yingde County (Charter Car)",
    "nearbyRecs": [
      "Dongtian Cave"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Qingyuan"
  },
  {
    "id": "dongtian_cave",
    "name": "Dongtian Wonderland (Chuantian Yan)",
    "category": "Nature & Hiking",
    "timeAlloc": "Afternoon (3h)",
    "tag": "QINGYUAN • NATURE",
    "tagIcon": "fa-icicles",
    "image": "/assets/attractions/dongtian_cave.jpg",
    "desc": "Magnificent karst sinkhole cave featuring an underground river and illuminated glass skywalk.",
    "meta1": {
      "label": "PHENOMENON",
      "value": "Karst Tiankeng"
    },
    "meta2": {
      "label": "ACCESS",
      "value": "Boat & Walkway"
    },
    "photos": [
      "/assets/attractions/dongtian_cave.jpg",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80"
    ],
    "activities": [
      "Underground boat cave cruise",
      "Skywalk over the sinkhole"
    ],
    "areaMap": "Yingxi Corridor West",
    "nearbyRecs": [
      "Yingxi Forest"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Qingyuan"
  },
  {
    "id": "feilai_temple",
    "name": "Feilai Temple & Beijiang River",
    "category": "Nature & Hiking",
    "timeAlloc": "Morning (3h)",
    "tag": "QINGYUAN • HERITAGE",
    "tagIcon": "fa-ship",
    "image": "/assets/attractions/feilai_temple.jpg",
    "desc": "Historic 1,400-year-old riverbank temple accessible via tranquil scenic boat cruise.",
    "meta1": {
      "label": "AGE",
      "value": "1400+ Years"
    },
    "meta2": {
      "label": "TRANSIT",
      "value": "River Ferry"
    },
    "photos": [
      "/assets/attractions/feilai_temple.jpg",
      "https://images.unsplash.com/photo-1596426466989-13653199bc4b?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Scenic Beijiang cruise",
      "Sample freshwater river feast"
    ],
    "areaMap": "Beijiang Gorge Ferry Pier",
    "nearbyRecs": [
      "Gulong Gorge"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Qingyuan"
  },
  {
    "id": "qingyuan_hotspring",
    "name": "Yinzhan Forest Hot Springs",
    "category": "Nature & Hiking",
    "timeAlloc": "Evening (3h)",
    "tag": "QINGYUAN • RELAX",
    "tagIcon": "fa-hot-tub-person",
    "image": "/assets/attractions/qingyuan_hotspring.jpg",
    "desc": "Natural outdoor mineral geothermal hot springs nestled under dense sub-tropical pines.",
    "meta1": {
      "label": "WATER",
      "value": "Natural Geothermal"
    },
    "meta2": {
      "label": "POOLS",
      "value": "60+ Forest Tubs"
    },
    "photos": [
      "/assets/attractions/qingyuan_hotspring.jpg",
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
    ],
    "activities": [
      "Soak in mineral forest pools",
      "Herbal steam baths"
    ],
    "areaMap": "Yinzhan Station (Intercity Rail)",
    "nearbyRecs": [
      "Gulong Gorge"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Qingyuan"
  },
  {
    "id": "tencent_hq",
    "name": "Tencent Binhai Mansion HQ",
    "category": "Skyline & Modern",
    "timeAlloc": "Afternoon (1h)",
    "tag": "SHENZHEN • TECH",
    "tagIcon": "fa-laptop-code",
    "image": "/assets/attractions/tencent_hq.jpg",
    "desc": "Twin architectural towers connected by three horizontal sky bridges in High-Tech Industrial Park.",
    "meta1": {
      "label": "COMPANY",
      "value": "Tencent Global HQ"
    },
    "meta2": {
      "label": "DESIGN",
      "value": "Connected Towers"
    },
    "photos": [
      "/assets/attractions/tencent_hq.jpg",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Exterior architecture photography",
      "Flagship digital store"
    ],
    "areaMap": "Metro L9 (Hi-Tech South)",
    "nearbyRecs": [
      "DJI Sky City"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Shenzhen"
  },
  {
    "id": "oct_loft",
    "name": "OCT-LOFT Creative Park",
    "category": "Skyline & Modern",
    "timeAlloc": "Afternoon (3h)",
    "tag": "SHENZHEN • ART",
    "tagIcon": "fa-palette",
    "image": "/assets/attractions/oct_loft.jpg",
    "desc": "Converted 1980s electronics factory estate now buzzing with design studios, cafes, and indie jazz.",
    "meta1": {
      "label": "ORIGIN",
      "value": "Repurposed Factory"
    },
    "meta2": {
      "label": "VIBE",
      "value": "Indie Art & Music"
    },
    "photos": [
      "/assets/attractions/oct_loft.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
    ],
    "activities": [
      "Art gallery hops",
      "Independent coffee tasting"
    ],
    "areaMap": "Metro L1 (Qiaocheng East Exit A)",
    "nearbyRecs": [
      "Splendid China"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Shenzhen"
  },
  {
    "id": "dasha_river",
    "name": "Dasha River Ecological Corridor",
    "category": "Nature & Hiking",
    "timeAlloc": "Morning (2h)",
    "tag": "SHENZHEN • NATURE",
    "tagIcon": "fa-person-biking",
    "image": "/assets/attractions/dasha_river.jpg",
    "desc": "13km revitalized waterfront greenway connecting Nanshan University town to Shenzhen Bay.",
    "meta1": {
      "label": "GREENWAY",
      "value": "13km Waterfront"
    },
    "meta2": {
      "label": "SCENERY",
      "value": "Universities & Tech"
    },
    "photos": [
      "/assets/attractions/dasha_river.jpg",
      "/assets/attractions/dasha_river_2.jpg",
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Riverside cycling",
      "Morning birdwatching"
    ],
    "areaMap": "Metro L7 (Chaguang)",
    "nearbyRecs": [
      "Xili Lake"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "大沙河生态长廊",
    "region": "Shenzhen",
    "address": "Nanshan District, Shenzhen",
    "review": "A beautifully landscaped river trail cutting directly through the Nanshan tech district, popular for running and rowing.",
    "coordinates": [
      22.5485,
      113.9552
    ]
  },
  {
    "id": "sea_world",
    "name": "Shekou Sea World & Culture Center",
    "category": "Skyline & Modern",
    "timeAlloc": "Evening (3h)",
    "tag": "SHENZHEN • EXPAT",
    "tagIcon": "fa-anchor",
    "image": "/assets/attractions/sea_world.jpg",
    "desc": "Shekou’s coastal entertainment district centered around a stranded luxury liner and design museum.",
    "meta1": {
      "label": "CENTERPIECE",
      "value": "Minghua Luxury Liner"
    },
    "meta2": {
      "label": "MUSEUM",
      "value": "Maki Design Society"
    },
    "photos": [
      "/assets/attractions/sea_world.jpg",
      "/assets/attractions/sea_world_2.jpg",
      "/assets/attractions/sea_world_3.jpg",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "activities": [
      "Musical fountain show",
      "Craft beer dining by the ship"
    ],
    "areaMap": "Metro L2 (Sea World Exit A)",
    "nearbyRecs": [
      "Dananshan"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Shenzhen"
  },
  {
    "id": "dananshan",
    "name": "Dananshan Park Hike",
    "category": "Skyline & Modern",
    "timeAlloc": "Morning (3h)",
    "tag": "SHENZHEN • HIKE",
    "tagIcon": "fa-hiking",
    "image": "/assets/attractions/dananshan.jpg",
    "desc": "Coastal mountain peak overlooking Shekou Container Port, Qianhai CBD, and Hong Kong Yuen Long.",
    "meta1": {
      "label": "PANORAMA",
      "value": "Qianhai & HK Coast"
    },
    "meta2": {
      "label": "ELEVATION",
      "value": "336m Peak"
    },
    "photos": [
      "/assets/attractions/dananshan.jpg",
      "https://images.unsplash.com/photo-1598516246473-b26a6d0c2e68?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Ascend stone stairway",
      "Photograph busy cargo harbor"
    ],
    "areaMap": "Metro L2 (Sea World / Shuiwan)",
    "nearbyRecs": [
      "Shekou Sea World"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Shenzhen"
  },
  {
    "id": "pingan_finance",
    "name": "Ping An Finance Centre",
    "category": "Heritage & Culture",
    "timeAlloc": "Sunset (2h)",
    "tag": "SHENZHEN • SKYSCRAPER",
    "tagIcon": "fa-building-ngo",
    "image": "/assets/attractions/pingan_finance.jpg",
    "desc": "599m mega-tall skyscraper featuring Free Sky observation deck on the 116th floor.",
    "meta1": {
      "label": "HEIGHT",
      "value": "599m (Global #5)"
    },
    "meta2": {
      "label": "VIEW",
      "value": "360° Free Sky 116F"
    },
    "photos": [
      "/assets/attractions/pingan_finance.jpg",
      "/assets/attractions/pingan_finance_2.jpg",
      "/assets/attractions/pingan_finance_3.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "activities": [
      "High-speed elevator",
      "360° observation view"
    ],
    "areaMap": "Metro L1/3 (Shopping Park Exit D)",
    "nearbyRecs": [
      "Coco Park"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "平安金融中心",
    "region": "Shenzhen",
    "address": "No. 5033 Yitian Road, Futian District, Shenzhen",
    "review": "A 599-meter megatall skyscraper featuring the Free Sky observation deck on the 116th floor.",
    "coordinates": [
      22.5332,
      114.0558
    ]
  },
  {
    "id": "shenzhen_bay",
    "name": "Shenzhen Bay Coastal Park",
    "category": "Skyline & Modern",
    "timeAlloc": "Morning (2h)",
    "tag": "SHENZHEN • COASTAL",
    "tagIcon": "fa-feather",
    "image": "/assets/attractions/shenzhen_bay.jpg",
    "desc": "15km coastal wetland promenade where migratory birds congregate along the Hong Kong bridge.",
    "meta1": {
      "label": "TRAIL",
      "value": "15km Bay Front"
    },
    "meta2": {
      "label": "WILDLIFE",
      "value": "Winter Migratory Birds"
    },
    "photos": [
      "/assets/attractions/shenzhen_bay.jpg",
      "/assets/attractions/shenzhen_bay_2.jpg",
      "/assets/attractions/shenzhen_bay_3.jpg",
      "https://images.unsplash.com/photo-1552554746-81e05d233e14?w=800",
      "https://images.unsplash.com/photo-1563384218386-9dcaf77ef0a8?w=800&q=80"
    ],
    "activities": [
      "Seaside cycling",
      "Bridge & bird photography"
    ],
    "areaMap": "Metro L9 (Shenzhen Bay Park Exit D)",
    "nearbyRecs": [
      "Talent Park"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Shenzhen"
  },
  {
    "id": "mongkok_markets",
    "name": "Mong Kok Ladies Market & Goldfish St",
    "category": "Skyline & Modern",
    "timeAlloc": "Evening (3h)",
    "tag": "HONG KONG • SHOPPING",
    "tagIcon": "fa-bag-shopping",
    "image": "/assets/attractions/mongkok_markets.jpg",
    "desc": "Dense neon corridors packed with souvenir stalls, sneaker boutiques, and aquatic bag displays.",
    "meta1": {
      "label": "DISTRICT",
      "value": "Mong Kok Heart"
    },
    "meta2": {
      "label": "STREETS",
      "value": "Tung Choi & Fa Yuen"
    },
    "photos": [
      "/assets/attractions/mongkok_markets.jpg",
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "activities": [
      "Bargain hunt at Ladies Market",
      "Stroll Goldfish Street"
    ],
    "areaMap": "MTR Mong Kok (Exit D3 / B2)",
    "nearbyRecs": [
      "Langham Place"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Hong Kong"
  },
  {
    "id": "k11_musea",
    "name": "K11 MUSEA & Avenue of Stars",
    "category": "Skyline & Modern",
    "timeAlloc": "Afternoon (3h)",
    "tag": "HONG KONG • CULTURE",
    "tagIcon": "fa-gem",
    "image": "/assets/attractions/k11_musea.jpg",
    "desc": "Art-mall architectural marvel at Victoria Dockside combining high fashion, gardens, and harbor walks.",
    "meta1": {
      "label": "CONCEPT",
      "value": "Silicon Valley of Culture"
    },
    "meta2": {
      "label": "VIEW",
      "value": "Waterfront Esplanade"
    },
    "photos": [
      "/assets/attractions/k11_musea.jpg",
      "https://images.unsplash.com/photo-1506351421178-63b53aee584c?w=800",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "activities": [
      "Explore Opera Atrium design",
      "Walk Avenue of Stars"
    ],
    "areaMap": "MTR Tsim Sha Tsui East (Exit J)",
    "nearbyRecs": [
      "Star Ferry"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Hong Kong"
  },
  {
    "id": "victoria_peak",
    "name": "Victoria Peak & Peak Tram",
    "category": "Skyline & Modern",
    "timeAlloc": "Sunset (3-4h)",
    "tag": "HONG KONG • PANORAMA",
    "tagIcon": "fa-train-subway",
    "image": "/assets/attractions/victoria_peak.jpg",
    "desc": "Hong Kong’s legendary hill vantage point reached via historic funicular Peak Tram railway.",
    "meta1": {
      "label": "TRANSIT",
      "value": "Historic Peak Tram"
    },
    "meta2": {
      "label": "VANTAGE",
      "value": "Sky Terrace 428"
    },
    "photos": [
      "/assets/attractions/victoria_peak.jpg",
      "/assets/attractions/victoria_peak_2.jpg",
      "/assets/attractions/victoria_peak_3.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
    ],
    "activities": [
      "Ride 6th-gen Peak Tram",
      "Lugard Road panoramic walk"
    ],
    "areaMap": "Central Peak Tram Lower Terminus",
    "nearbyRecs": [
      "Central Escalator"
    ],
    "guideUrls": [],
    "reviews": [],
    "nameZh": "太平山頂",
    "address": "The Peak, Hong Kong Island, Hong Kong",
    "coordinates": [
      22.2758,
      114.1455
    ],
    "review": "Accessible via the historic Peak Tram, providing the ultimate downward view of the Hong Kong Island skyscrapers.",
    "region": "Hong Kong"
  },
  {
    "id": "central_escalator",
    "name": "Central Mid-Levels Escalator & Soho",
    "category": "Skyline & Modern",
    "timeAlloc": "Afternoon (2h)",
    "tag": "HONG KONG • URBAN",
    "tagIcon": "fa-stairs",
    "image": "/assets/attractions/central_escalator.jpg",
    "desc": "World’s longest outdoor covered escalator system winding uphill past lively cafes and murals.",
    "meta1": {
      "label": "RECORD",
      "value": "800m System"
    },
    "meta2": {
      "label": "VIBE",
      "value": "SoHo Cocktails & Art"
    },
    "photos": [
      "/assets/attractions/central_escalator.jpg",
      "/assets/attractions/central_escalator_2.jpg",
      "/assets/attractions/central_escalator_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800",
      "https://images.unsplash.com/photo-1563384218386-9dcaf77ef0a8?w=800&q=80"
    ],
    "activities": [
      "Ride escalator through Soho",
      "Hunt street art murals at Hollywood Rd"
    ],
    "areaMap": "MTR Central (Exit D2)",
    "nearbyRecs": [
      "Tai Kwun"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Hong Kong"
  },
  {
    "id": "tai_kwun",
    "name": "Tai Kwun Centre for Heritage & Arts",
    "category": "Skyline & Modern",
    "timeAlloc": "Afternoon (2h)",
    "tag": "HONG KONG • HERITAGE",
    "tagIcon": "fa-landmark-dome",
    "image": "/assets/attractions/tai_kwun.jpg",
    "desc": "Restored Central Police Station, Judiciary Court, and Victoria Prison compound with modern galleries.",
    "meta1": {
      "label": "HISTORY",
      "value": "1864 Colonial Police"
    },
    "meta2": {
      "label": "REVITALIZATION",
      "value": "Herzog & de Meuron"
    },
    "photos": [
      "/assets/attractions/tai_kwun.jpg",
      "https://images.unsplash.com/photo-1574227492706-f65b24c3688a?w=800",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "activities": [
      "Tour historic prison cells",
      "Visit contemporary art exhibitions"
    ],
    "areaMap": "Hollywood Road Soho (via Escalator)",
    "nearbyRecs": [
      "Mid-Levels Escalator"
    ],
    "guideUrls": [],
    "reviews": [],
    "region": "Hong Kong"
  },
  {
    "id": "victoria-harbour",
    "name": "Victoria Harbour (Star Ferry)",
    "category": "Heritage & Culture",
    "timeAlloc": "Sunset (3h)",
    "tag": "HONG KONG • HARBOUR",
    "tagIcon": "fa-ferry",
    "image": "/assets/attractions/victoria-harbour.jpg",
    "desc": "Iconic waterway between Kowloon and HK Island, best experienced via historic Star Ferry.",
    "meta1": {
      "label": "LANDMARK",
      "value": "Skyline Lights"
    },
    "meta2": {
      "label": "TRANSIT",
      "value": "Star Ferry"
    },
    "photos": [
      "/assets/attractions/victoria-harbour.jpg",
      "/assets/attractions/victoria-harbour_2.jpg",
      "/assets/attractions/victoria-harbour_3.jpg",
      "https://images.unsplash.com/photo-1506351421178-63b53aee584c?w=800",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80",
      "https://images.unsplash.com/photo-1506351421178-63b53aee584c?w=800&q=80",
      "https://images.unsplash.com/photo-1513686861775-6e06b7cbab98?w=800&q=80"
    ],
    "activities": [
      "Ride the historic Star Ferry from Tsim Sha Tsui to Central",
      "Watch the 8 PM Symphony of Lights laser show",
      "Stroll along the Avenue of Stars taking in the skyline"
    ],
    "areaMap": "MTR Tsim Sha Tsui -> Star Ferry Pier",
    "nearbyRecs": [
      "K11 Musea"
    ],
    "guideUrls": [],
    "reviews": [
      {
        "title": "Hong Kong Victoria Harbour Walking Tour",
        "url": "https://www.youtube.com/watch?v=48ecd730"
      }
    ],
    "nameZh": "維多利亞港 (天星小輪)",
    "region": "Hong Kong",
    "address": "Tsim Sha Tsui / Central Piers, Hong Kong",
    "review": "The historic passenger ferry crossing the harbor, offering the cheapest and best view of the skyline.",
    "coordinates": [
      22.2938,
      114.1688
    ]
  },
  {
    "id": "beijingroad",
    "name": "Beijing Road Pedestrian Street",
    "category": "Heritage & Culture",
    "timeAlloc": "Evening (3h)",
    "tag": "CANTON • SHOPPING",
    "tagIcon": "fa-store",
    "image": "/assets/attractions/beijingroad.jpg",
    "desc": "Guangzhou’s ultimate historic shopping street, showcasing 11-layer ancient dynastic roads under glass, incredible street food, and the massive Pokémon Center.",
    "meta1": {
      "label": "HISTORY",
      "value": "Glass Road Ruins"
    },
    "meta2": {
      "label": "RETAIL",
      "value": "Pokémon Center"
    },
    "photos": [
      "/assets/attractions/beijingroad.jpg",
      "/assets/attractions/beijingroad_2.jpg",
      "/assets/attractions/beijingroad_3.jpg",
      "https://images.unsplash.com/photo-1579737190176-bce7b545d909?w=800&q=80"
    ],
    "activities": [
      "Shop at the Pokémon Center",
      "View Tang/Song Dynasty ruins under glass",
      "Eat local street food"
    ],
    "areaMap": "Metro Line 6 (Beijing Lu)",
    "nearbyRecs": [
      "Dafo Temple"
    ],
    "guideUrls": [
      "https://www.travelchinaguide.com/"
    ],
    "reviews": [
      {
        "title": "Beijing Road & Pokémon Center Walkthrough",
        "url": "https://www.youtube.com/watch?v=Zbx1ooA7odk"
      }
    ],
    "nameZh": "北京路步行街",
    "region": "Canton Heritage",
    "address": "Beijing Road, Yuexiu District, Guangzhou",
    "website": "http://www.yuexiu.gov.cn/",
    "review": "Famous for its glass-covered ancient road excavations dating back to the Song and Yuan dynasties, alongside bustling shopping and street food.",
    "coordinates": [
      23.1255,
      113.2687
    ]
  },
  {
    "id": "poi-yongqing-fang",
    "image": "/assets/attractions/poi-yongqing-fang.jpg",
    "photos": [
      "/assets/attractions/poi-yongqing-fang.jpg",
      "/assets/attractions/poi-yongqing-fang_2.jpg",
      "/assets/attractions/poi-yongqing-fang_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Described as a masterclass in urban regeneration, blending traditional Cantonese Qilou (arcade) architecture with modern craft breweries and boutique spaces.",
    "name": "Yongqing Fang",
    "nameZh": "永庆坊",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Enning Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "Described as a masterclass in urban regeneration, blending traditional Cantonese Qilou (arcade) architecture with modern craft breweries and boutique spaces.",
    "coordinates": [
      23.1165,
      113.2384
    ]
  },
  {
    "id": "poi-dafo-temple-big-buddha-temple",
    "image": "/assets/attractions/poi-dafo-temple-big-buddha-temple.jpg",
    "photos": [
      "/assets/attractions/poi-dafo-temple-big-buddha-temple.jpg",
      "/assets/attractions/poi-dafo-temple-big-buddha-temple_2.jpg",
      "/assets/attractions/poi-dafo-temple-big-buddha-temple_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Visitors are consistently awed by the towering golden Buddha statues and the dramatic night illumination that makes the complex look straight out of a fantasy movie.",
    "name": "Dafo Temple (Big Buddha Temple)",
    "nameZh": "大佛寺",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 21 Huixin West Street, Beijing Road, Yuexiu District, Guangzhou",
    "website": "http://www.dafo.org.cn/",
    "review": "Visitors are consistently awed by the towering golden Buddha statues and the dramatic night illumination that makes the complex look straight out of a fantasy movie.",
    "coordinates": [
      23.1245,
      113.2662
    ]
  },
  {
    "id": "poi-yuexiu-park",
    "image": "/assets/attractions/poi-yuexiu-park.jpg",
    "photos": [
      "/assets/attractions/poi-yuexiu-park.jpg",
      "/assets/attractions/poi-yuexiu-park_2.jpg",
      "/assets/attractions/poi-yuexiu-park_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "The spiritual lungs of the city; tourists enjoy seeing the historic Five Rams Sculpture and walking segments of the ancient Ming Dynasty city wall.",
    "name": "Yuexiu Park",
    "nameZh": "越秀公园",
    "region": "Canton Heritage",
    "category": "Nature & Parks",
    "address": "No. 98 Jiefang North Road, Yuexiu District, Guangzhou",
    "website": "http://www.yuexiupark-gz.com/",
    "review": "The spiritual lungs of the city; tourists enjoy seeing the historic Five Rams Sculpture and walking segments of the ancient Ming Dynasty city wall.",
    "coordinates": [
      23.1415,
      113.2628
    ]
  },
  {
    "id": "poi-museum-of-the-mausoleum-of-the-nanyue-king",
    "image": "/assets/attractions/poi-museum-of-the-mausoleum-of-the-nanyue-king.jpg",
    "photos": [
      "/assets/attractions/poi-museum-of-the-mausoleum-of-the-nanyue-king.jpg",
      "/assets/attractions/poi-museum-of-the-mausoleum-of-the-nanyue-king_2.jpg",
      "/assets/attractions/poi-museum-of-the-mausoleum-of-the-nanyue-king_3.jpg",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "Fascinating underground layout housing real 2,000-year-old royal tombs, jade burial suits, and ancient artifacts.",
    "name": "Museum of the Mausoleum of the Nanyue King",
    "nameZh": "南越王博物院",
    "region": "Canton Heritage",
    "category": "Museums & Galleries",
    "address": "No. 867 Jiefang North Road, Yuexiu District, Guangzhou",
    "website": "http://www.gznywmuseum.org.cn/",
    "review": "Fascinating underground layout housing real 2,000-year-old royal tombs, jade burial suits, and ancient artifacts.",
    "coordinates": [
      23.1396,
      113.2592
    ]
  },
  {
    "id": "poi-sun-yat-sen-memorial-hall",
    "image": "/assets/attractions/poi-sun-yat-sen-memorial-hall.jpg",
    "photos": [
      "/assets/attractions/poi-sun-yat-sen-memorial-hall.jpg",
      "/assets/attractions/poi-sun-yat-sen-memorial-hall_2.jpg",
      "/assets/attractions/poi-sun-yat-sen-memorial-hall_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Admired for its grand traditional Chinese octagonal roof structure and the peaceful surrounding gardens honoring China's republican pioneer.",
    "name": "Sun Yat-sen Memorial Hall",
    "nameZh": "中山纪念堂",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 259 Dongfeng Middle Road, Yuexiu District, Guangzhou",
    "website": "http://www.gzsysmh.com/",
    "review": "Admired for its grand traditional Chinese octagonal roof structure and the peaceful surrounding gardens honoring China's republican pioneer.",
    "coordinates": [
      23.1347,
      113.2625
    ]
  },
  {
    "id": "poi-temple-of-the-six-banyan-trees",
    "image": "/assets/attractions/poi-temple-of-the-six-banyan-trees.jpg",
    "photos": [
      "/assets/attractions/poi-temple-of-the-six-banyan-trees.jpg",
      "/assets/attractions/poi-temple-of-the-six-banyan-trees_2.jpg",
      "/assets/attractions/poi-temple-of-the-six-banyan-trees_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Active Buddhist place of worship featuring the striking 17-story Flower Pagoda. Visitors note the deeply tranquil atmosphere.",
    "name": "Temple of the Six Banyan Trees",
    "nameZh": "六榕寺",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 87 Liurong Road, Yuexiu District, Guangzhou",
    "website": "http://www.gzbuddhism.org/",
    "review": "Active Buddhist place of worship featuring the striking 17-story Flower Pagoda. Visitors note the deeply tranquil atmosphere.",
    "coordinates": [
      23.1322,
      113.2589
    ]
  },
  {
    "id": "poi-cantonese-opera-art-museum",
    "image": "/assets/attractions/poi-cantonese-opera-art-museum.jpg",
    "photos": [
      "/assets/attractions/poi-cantonese-opera-art-museum.jpg",
      "/assets/attractions/poi-cantonese-opera-art-museum_2.jpg",
      "/assets/attractions/poi-cantonese-opera-art-museum_3.jpg",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "A stunning classical Jiangnan-style garden housing brilliant exhibits on Cantonese opera history, costumes, and water-stage performances.",
    "name": "Cantonese Opera Art Museum",
    "nameZh": "粤剧艺术博物馆",
    "region": "Canton Heritage",
    "category": "Museums & Galleries",
    "address": "No. 127 Enning Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "A stunning classical Jiangnan-style garden housing brilliant exhibits on Cantonese opera history, costumes, and water-stage performances.",
    "coordinates": [
      23.1158,
      113.2371
    ]
  },
  {
    "id": "poi-guangdong-museum",
    "image": "/assets/attractions/poi-guangdong-museum.jpg",
    "photos": [
      "/assets/attractions/poi-guangdong-museum.jpg",
      "/assets/attractions/poi-guangdong-museum_2.jpg",
      "/assets/attractions/poi-guangdong-museum_3.jpg",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "Shaped like an antique Chinese lacquer box; highly praised for its rich exhibitions on Lingnan nature, ceramics, and historical trade.",
    "name": "Guangdong Museum",
    "nameZh": "广东省博物馆",
    "region": "Canton Heritage",
    "category": "Museums & Galleries",
    "address": "No. 2 Zhujiang East Road, Zhujiang New Town, Tianhe District, Guangzhou",
    "website": "http://www.gdmuseum.com/",
    "review": "Shaped like an antique Chinese lacquer box; highly praised for its rich exhibitions on Lingnan nature, ceramics, and historical trade.",
    "coordinates": [
      23.1189,
      113.3275
    ]
  },
  {
    "id": "poi-guangzhou-opera-house",
    "image": "/assets/attractions/poi-guangzhou-opera-house.jpg",
    "photos": [
      "/assets/attractions/poi-guangzhou-opera-house.jpg",
      "/assets/attractions/poi-guangzhou-opera-house_2.jpg",
      "/assets/attractions/poi-guangzhou-opera-house_3.jpg",
      "https://images.unsplash.com/photo-1563384218386-9dcaf77ef0a8?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "Zaha Hadid’s futuristic double-pebbled masterpiece leaves architecture enthusiasts speechless, especially when illuminated at night.",
    "name": "Guangzhou Opera House",
    "nameZh": "广州大剧院",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "No. 1 Zhujiang West Road, Tianhe District, Guangzhou",
    "website": "http://www.gzdjh.com/",
    "review": "Zaha Hadid’s futuristic double-pebbled masterpiece leaves architecture enthusiasts speechless, especially when illuminated at night.",
    "coordinates": [
      23.1182,
      113.3218
    ]
  },
  {
    "id": "poi-shangxiajiu-pedestrian-street",
    "image": "/assets/attractions/poi-shangxiajiu-pedestrian-street.jpg",
    "photos": [
      "/assets/attractions/poi-shangxiajiu-pedestrian-street.jpg",
      "/assets/attractions/poi-shangxiajiu-pedestrian-street_2.jpg",
      "/assets/attractions/poi-shangxiajiu-pedestrian-street_3.jpg",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MARKETS & WALKING STREETS",
    "tagIcon": "fa-location-dot",
    "desc": "Bustling, classic shopping street lined with historic covered arcades, old-school pastry shops, and authentic dim sum joints.",
    "name": "Shangxiajiu Pedestrian Street",
    "nameZh": "上下九步行街",
    "region": "Canton Heritage",
    "category": "Markets & Walking Streets",
    "address": "Shangxiajiu Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "Bustling, classic shopping street lined with historic covered arcades, old-school pastry shops, and authentic dim sum joints.",
    "coordinates": [
      23.1153,
      113.2464
    ]
  },
  {
    "id": "poi-haixinsha-island",
    "image": "/assets/attractions/poi-haixinsha-island.jpg",
    "photos": [
      "/assets/attractions/poi-haixinsha-island.jpg",
      "/assets/attractions/poi-haixinsha-island_2.jpg",
      "/assets/attractions/poi-haixinsha-island_3.jpg",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "The prime viewing ground for the Pearl River light show and the venue of the 2010 Asian Games opening ceremony.",
    "name": "Haixinsha Island",
    "nameZh": "海心沙",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "Haixinsha, Zhujiang New Town, Tianhe District, Guangzhou",
    "website": "http://www.tianhe.gov.cn/",
    "review": "The prime viewing ground for the Pearl River light show and the venue of the 2010 Asian Games opening ceremony.",
    "coordinates": [
      23.1118,
      113.3242
    ]
  },
  {
    "id": "poi-huacheng-square-flower-city-square",
    "image": "/assets/attractions/poi-huacheng-square-flower-city-square.jpg",
    "photos": [
      "/assets/attractions/poi-huacheng-square-flower-city-square.jpg",
      "/assets/attractions/poi-huacheng-square-flower-city-square_2.jpg",
      "/assets/attractions/poi-huacheng-square-flower-city-square_3.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "The modern heart of Guangzhou; visitors love taking photographs here with unobstructed symmetrical views of Canton Tower.",
    "name": "Huacheng Square (Flower City Square)",
    "nameZh": "花城广场",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "Huacheng Avenue, Zhujiang New Town, Tianhe District, Guangzhou",
    "website": "http://www.tianhe.gov.cn/",
    "review": "The modern heart of Guangzhou; visitors love taking photographs here with unobstructed symmetrical views of Canton Tower.",
    "coordinates": [
      23.1205,
      113.3235
    ]
  },
  {
    "id": "poi-guangzhou-library",
    "image": "/assets/attractions/poi-guangzhou-library.jpg",
    "photos": [
      "/assets/attractions/poi-guangzhou-library.jpg",
      "/assets/attractions/poi-guangzhou-library_2.jpg",
      "/assets/attractions/poi-guangzhou-library_3.jpg",
      "https://images.unsplash.com/photo-1563384218386-9dcaf77ef0a8?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "An architectural marvel with an open atrium; clean, quiet, and a favorite spot for travelers looking to relax or work.",
    "name": "Guangzhou Library",
    "nameZh": "广州图书馆",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "No. 4 Zhujiang East Road, Tianhe District, Guangzhou",
    "website": "http://www.gzlib.gov.cn/",
    "review": "An architectural marvel with an open atrium; clean, quiet, and a favorite spot for travelers looking to relax or work.",
    "coordinates": [
      23.1192,
      113.3259
    ]
  },
  {
    "id": "poi-xiguan-custom-museum",
    "image": "/assets/attractions/poi-xiguan-custom-museum.jpg",
    "photos": [
      "/assets/attractions/poi-xiguan-custom-museum.jpg",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "Offers a deep look into traditional wealthy merchant life in old Guangzhou with authentic courtyard layouts.",
    "name": "Xiguan Custom Museum",
    "nameZh": "西关民俗馆",
    "region": "Canton Heritage",
    "category": "Museums & Galleries",
    "address": "No. 15 Enning Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "Offers a deep look into traditional wealthy merchant life in old Guangzhou with authentic courtyard layouts.",
    "coordinates": [
      23.1172,
      113.2388
    ]
  },
  {
    "id": "poi-bruce-lee-s-ancestral-residence",
    "image": "/assets/attractions/poi-bruce-lee-s-ancestral-residence.jpg",
    "photos": [
      "/assets/attractions/poi-bruce-lee-s-ancestral-residence.jpg",
      "/assets/attractions/poi-bruce-lee-s-ancestral-residence_2.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A compact, atmospheric ancestral home detailing the family history and martial arts lineage of the global icon.",
    "name": "Bruce Lee’s Ancestral Residence",
    "nameZh": "李小龙祖居",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "13 Yuewai Street, Enning Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "A compact, atmospheric ancestral home detailing the family history and martial arts lineage of the global icon.",
    "coordinates": [
      23.1161,
      113.2378
    ]
  },
  {
    "id": "poi-qingping-herbal-medicine-market",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MARKETS & WALKING STREETS",
    "tagIcon": "fa-location-dot",
    "desc": "An intense sensory experience filled with exotic herbs, dried roots, and traditional Chinese medicine ingredients.",
    "name": "Qingping Herbal Medicine Market",
    "nameZh": "清平中药材市场",
    "region": "Canton Heritage",
    "category": "Markets & Walking Streets",
    "address": "Qingping Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "An intense sensory experience filled with exotic herbs, dried roots, and traditional Chinese medicine ingredients.",
    "coordinates": [
      23.1102,
      113.2451
    ]
  },
  {
    "id": "poi-tianzi-wharf",
    "image": "/assets/attractions/poi-tianzi-wharf.jpg",
    "photos": [
      "/assets/attractions/poi-tianzi-wharf.jpg",
      "/assets/attractions/poi-tianzi-wharf_2.jpg",
      "/assets/attractions/poi-tianzi-wharf_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Historic imperial pier dating back to the Qing dynasty; now the primary boarding point for evening river dinner cruises.",
    "name": "Tianzi Wharf",
    "nameZh": "天字码头",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 191 Yanjiang Zhong Road, Yuexiu District, Guangzhou",
    "website": "http://www.gzocean.com/",
    "review": "Historic imperial pier dating back to the Qing dynasty; now the primary boarding point for evening river dinner cruises.",
    "coordinates": [
      23.1158,
      113.2685
    ]
  },
  {
    "id": "poi-dashatou-wharf",
    "image": "/assets/attractions/poi-dashatou-wharf.jpg",
    "photos": [
      "/assets/attractions/poi-dashatou-wharf.jpg",
      "/assets/attractions/poi-dashatou-wharf_2.jpg",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "Large modern terminal for luxury passenger ships cruising the Pearl River.",
    "name": "Dashatou Wharf",
    "nameZh": "大沙头码头",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "No. 466 Yanjiang East Road, Yuexiu District, Guangzhou",
    "website": "http://www.gzocean.com/",
    "review": "Large modern terminal for luxury passenger ships cruising the Pearl River.",
    "coordinates": [
      23.1147,
      113.2842
    ]
  },
  {
    "id": "poi-ersha-island",
    "image": "/assets/attractions/poi-ersha-island.jpg",
    "photos": [
      "/assets/attractions/poi-ersha-island.jpg",
      "/assets/attractions/poi-ersha-island_2.jpg",
      "/assets/attractions/poi-ersha-island_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "An upscale green island in the middle of the river housing art galleries, sports training bases, and calm riverside parks.",
    "name": "Ersha Island",
    "nameZh": "二沙岛",
    "region": "Canton Heritage",
    "category": "Nature & Parks",
    "address": "Ersha Island, Yuexiu District, Guangzhou",
    "website": "http://www.yuexiu.gov.cn/",
    "review": "An upscale green island in the middle of the river housing art galleries, sports training bases, and calm riverside parks.",
    "coordinates": [
      23.1112,
      113.2985
    ]
  },
  {
    "id": "poi-guangdong-museum-of-art",
    "image": "/assets/attractions/poi-guangdong-museum-of-art.jpg",
    "photos": [
      "/assets/attractions/poi-guangdong-museum-of-art.jpg",
      "/assets/attractions/poi-guangdong-museum-of-art_2.jpg",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "Features rotating contemporary and classical Chinese art exhibitions in a quiet, leafy island setting.",
    "name": "Guangdong Museum of Art",
    "nameZh": "广东美术馆",
    "region": "Canton Heritage",
    "category": "Museums & Galleries",
    "address": "38 Yanyu Road, Ersha Island, Yuexiu District, Guangzhou",
    "website": "http://www.gdmoa.org/",
    "review": "Features rotating contemporary and classical Chinese art exhibitions in a quiet, leafy island setting.",
    "coordinates": [
      23.1105,
      113.3032
    ]
  },
  {
    "id": "poi-xinhai-revolution-memorial-museum",
    "image": "/assets/attractions/poi-xinhai-revolution-memorial-museum.jpg",
    "photos": [
      "/assets/attractions/poi-xinhai-revolution-memorial-museum.jpg",
      "/assets/attractions/poi-xinhai-revolution-memorial-museum_2.jpg",
      "/assets/attractions/poi-xinhai-revolution-memorial-museum_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Comprehensive and moving tribute to the 1911 revolution that overthrew the Qing dynasty.",
    "name": "Xinhai Revolution Memorial Museum",
    "nameZh": "辛亥革命纪念馆",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 563 Changzhou Road, Huangpu District, Guangzhou",
    "website": "http://www.gzxhgm.com/",
    "review": "Comprehensive and moving tribute to the 1911 revolution that overthrew the Qing dynasty.",
    "coordinates": [
      23.0812,
      113.4182
    ]
  },
  {
    "id": "poi-whampoa-military-academy-site",
    "image": "/assets/attractions/poi-whampoa-military-academy-site.jpg",
    "photos": [
      "/assets/attractions/poi-whampoa-military-academy-site.jpg",
      "/assets/attractions/poi-whampoa-military-academy-site_2.jpg",
      "/assets/attractions/poi-whampoa-military-academy-site_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Essential historical landmark where leaders of both the Kuomintang and Communist parties trained in the 1920s.",
    "name": "Whampoa Military Academy Site",
    "nameZh": "黄埔军校旧址",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Changzhou Island, Huangpu District, Guangzhou",
    "website": "http://www.hpjxgz.com/",
    "review": "Essential historical landmark where leaders of both the Kuomintang and Communist parties trained in the 1920s.",
    "coordinates": [
      23.0885,
      113.4215
    ]
  },
  {
    "id": "poi-hualin-temple",
    "image": "/assets/attractions/poi-hualin-temple.jpg",
    "photos": [
      "/assets/attractions/poi-hualin-temple.jpg",
      "/assets/attractions/poi-hualin-temple_2.jpg",
      "/assets/attractions/poi-hualin-temple_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Historic temple tied to Bodhidharma, famous for its grand hall housing the 500 Arhat statues.",
    "name": "Hualin Temple",
    "nameZh": "华林寺",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 37 Hualin Street, Xiaobei Road, Liwan District, Guangzhou",
    "website": "http://www.gzbuddhism.org/",
    "review": "Historic temple tied to Bodhidharma, famous for its grand hall housing the 500 Arhat statues.",
    "coordinates": [
      23.1192,
      113.2455
    ]
  },
  {
    "id": "poi-renmin-park-people-s-park",
    "image": "/assets/attractions/poi-renmin-park-people-s-park.jpg",
    "photos": [
      "/assets/attractions/poi-renmin-park-people-s-park.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "Guangzhou’s oldest public park; excellent place to watch local residents practice ballroom dancing, calligraphy, and jianzi.",
    "name": "Renmin Park (People's Park)",
    "nameZh": "人民公园",
    "region": "Canton Heritage",
    "category": "Nature & Parks",
    "address": "No. 231 Huifu West Road, Yuexiu District, Guangzhou",
    "website": "http://www.yuexiu.gov.cn/",
    "review": "Guangzhou’s oldest public park; excellent place to watch local residents practice ballroom dancing, calligraphy, and jianzi.",
    "coordinates": [
      23.1285,
      113.2621
    ]
  },
  {
    "id": "poi-guangzhou-cultural-park",
    "image": "/assets/attractions/poi-guangzhou-cultural-park.jpg",
    "photos": [
      "/assets/attractions/poi-guangzhou-cultural-park.jpg",
      "/assets/attractions/poi-guangzhou-cultural-park_2.jpg",
      "/assets/attractions/poi-guangzhou-cultural-park_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Famous for traditional lantern festivals, chess tournaments, and relaxed outdoor community recreation.",
    "name": "Guangzhou Cultural Park",
    "nameZh": "广州文化公园",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 156 Xiti Er Road, Liwan District, Guangzhou",
    "website": "http://www.whwh.cn/",
    "review": "Famous for traditional lantern festivals, chess tournaments, and relaxed outdoor community recreation.",
    "coordinates": [
      23.1115,
      113.2498
    ]
  },
  {
    "id": "poi-haiyin-bridge-area",
    "image": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "Popular evening walking spot with great angles for photographing river bridges and city night lights.",
    "name": "Haiyin Bridge Area",
    "nameZh": "海印大桥观景区",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "Overing Pearl River connecting Yuexiu and Haizhu Districts",
    "website": "http://www.gzcc.gov.cn/",
    "review": "Popular evening walking spot with great angles for photographing river bridges and city night lights.",
    "coordinates": [
      23.1132,
      113.2825
    ]
  },
  {
    "id": "poi-xiguan-house-cluster-duo-bao-road",
    "image": "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Authentic residential streets featuring old timber doorways, grey brick walls, and nostalgic neighborhood eateries.",
    "name": "Xiguan House Cluster (Duo Bao Road)",
    "nameZh": "西关大屋建筑保护区",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Duobao Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "Authentic residential streets featuring old timber doorways, grey brick walls, and nostalgic neighborhood eateries.",
    "coordinates": [
      23.1185,
      113.2365
    ]
  },
  {
    "id": "poi-guangdong-provincial-people-s-stadium",
    "image": "/assets/attractions/poi-guangdong-provincial-people-s-stadium.jpg",
    "photos": [
      "/assets/attractions/poi-guangdong-provincial-people-s-stadium.jpg",
      "/assets/attractions/poi-guangdong-provincial-people-s-stadium_2.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Historic sports stadium hosting local matches and community events.",
    "name": "Guangdong Provincial People's Stadium",
    "nameZh": "广东省人民体育场",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 64 Zhongshan Er Road, Yuexiu District, Guangzhou",
    "website": "http://tyj.gd.gov.cn/",
    "review": "Historic sports stadium hosting local matches and community events.",
    "coordinates": [
      23.1278,
      113.2801
    ]
  },
  {
    "id": "poi-anti-british-struggle-memorial-pavilion-sanyuanli",
    "image": "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Commemorates the historic 1841 grassroots anti-colonial civilian battle.",
    "name": "Anti-British Struggle Memorial Pavilion (Sanyuanli)",
    "nameZh": "三元里人民抗英斗争纪念馆",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Sanyuanli Village, Baiyun District, Guangzhou",
    "website": "http://www.baiyun.gov.cn/",
    "review": "Commemorates the historic 1841 grassroots anti-colonial civilian battle.",
    "coordinates": [
      23.1582,
      113.2565
    ]
  },
  {
    "id": "poi-peasant-movement-training-institute",
    "image": "/assets/attractions/poi-peasant-movement-training-institute.jpg",
    "photos": [
      "/assets/attractions/poi-peasant-movement-training-institute.jpg",
      "/assets/attractions/poi-peasant-movement-training-institute_2.jpg",
      "/assets/attractions/poi-peasant-movement-training-institute_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Restored historical red-brick school compound where early revolutionary leaders lectured.",
    "name": "Peasant Movement Training Institute",
    "nameZh": "农讲所旧址",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 42 Zhongshan 4th Road, Yuexiu District, Guangzhou",
    "website": "http://www.nongjiangsuo.com/",
    "review": "Restored historical red-brick school compound where early revolutionary leaders lectured.",
    "coordinates": [
      23.1288,
      113.2721
    ]
  },
  {
    "id": "poi-shisanhang-thirteen-factories-museum",
    "image": "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "Details Guangzhou's pivotal role as China's sole maritime foreign trade port during the Qing Dynasty.",
    "name": "Shisanhang (Thirteen Factories) Museum",
    "nameZh": "十三行博物馆",
    "region": "Canton Heritage",
    "category": "Museums & Galleries",
    "address": "No. 37 Xidi Erma Road, Liwan District, Guangzhou",
    "website": "http://www.liwan.gov.cn/",
    "review": "Details Guangzhou's pivotal role as China's sole maritime foreign trade port during the Qing Dynasty.",
    "coordinates": [
      23.1118,
      113.2492
    ]
  },
  {
    "id": "poi-qiannian-gu-dao-ancient-road-museum",
    "image": "/assets/attractions/poi-qiannian-gu-dao-ancient-road-museum.jpg",
    "photos": [
      "/assets/attractions/poi-qiannian-gu-dao-ancient-road-museum.jpg",
      "/assets/attractions/poi-qiannian-gu-dao-ancient-road-museum_2.jpg",
      "/assets/attractions/poi-qiannian-gu-dao-ancient-road-museum_3.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Small glass-enclosed underground exhibit letting visitors look right down at stacked ancient paving stones.",
    "name": "Qiannian Gu Dao (Ancient Road Museum)",
    "nameZh": "千年古道遗址",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Beijing Road, Yuexiu District, Guangzhou",
    "website": "http://www.yuexiu.gov.cn/",
    "review": "Small glass-enclosed underground exhibit letting visitors look right down at stacked ancient paving stones.",
    "coordinates": [
      23.1262,
      113.2688
    ]
  },
  {
    "id": "poi-guangzhou-uprising-martyrs-cemetery",
    "image": "/assets/attractions/poi-guangzhou-uprising-martyrs-cemetery.jpg",
    "photos": [
      "/assets/attractions/poi-guangzhou-uprising-martyrs-cemetery.jpg",
      "/assets/attractions/poi-guangzhou-uprising-martyrs-cemetery_2.jpg",
      "/assets/attractions/poi-guangzhou-uprising-martyrs-cemetery_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A peaceful, heavily forested memorial park honoring fallen revolutionary heroes.",
    "name": "Guangzhou Uprising Martyrs' Cemetery",
    "nameZh": "广州起义烈士陵园",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 92 Zhongshan 3rd Road, Yuexiu District, Guangzhou",
    "website": "http://mzj.gz.gov.cn/",
    "review": "A peaceful, heavily forested memorial park honoring fallen revolutionary heroes.",
    "coordinates": [
      23.1292,
      113.2818
    ]
  },
  {
    "id": "poi-xiaozhou-village",
    "image": "/assets/attractions/poi-xiaozhou-village.jpg",
    "photos": [
      "/assets/attractions/poi-xiaozhou-village.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "An ancient canal-laced riverside village popular with artists, indie coffee shops, and quiet stone bridges.",
    "name": "Xiaozhou Village",
    "nameZh": "小洲村",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Xiaozhou Village, Haizhu District, Guangzhou",
    "website": "http://www.haizhu.gov.cn/",
    "review": "An ancient canal-laced riverside village popular with artists, indie coffee shops, and quiet stone bridges.",
    "coordinates": [
      23.0562,
      113.3654
    ]
  },
  {
    "id": "poi-huangpu-ancient-port",
    "image": "/assets/attractions/poi-huangpu-ancient-port.jpg",
    "photos": [
      "/assets/attractions/poi-huangpu-ancient-port.jpg",
      "/assets/attractions/poi-huangpu-ancient-port_2.jpg",
      "/assets/attractions/poi-huangpu-ancient-port_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Historic port where the legendary Swedish East India ship Götheborg set sail; great for local snacks and old docks.",
    "name": "Huangpu Ancient Port",
    "nameZh": "黄埔古港",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Shichong Road, Pazhou, Haizhu District, Guangzhou",
    "website": "http://www.haizhu.gov.cn/",
    "review": "Historic port where the legendary Swedish East India ship Götheborg set sail; great for local snacks and old docks.",
    "coordinates": [
      23.0915,
      113.3882
    ]
  },
  {
    "id": "poi-pazhou-pagoda",
    "image": "/assets/attractions/poi-pazhou-pagoda.jpg",
    "photos": [
      "/assets/attractions/poi-pazhou-pagoda.jpg",
      "/assets/attractions/poi-pazhou-pagoda_2.jpg",
      "/assets/attractions/poi-pazhou-pagoda_3.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A 9-story Ming Dynasty brick pagoda originally built to guide trading ships entering Guangzhou.",
    "name": "Pazhou Pagoda",
    "nameZh": "琶洲塔",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Pazhou Island, Haizhu District, Guangzhou",
    "website": "http://www.haizhu.gov.cn/",
    "review": "A 9-story Ming Dynasty brick pagoda originally built to guide trading ships entering Guangzhou.",
    "coordinates": [
      23.0988,
      113.3745
    ]
  },
  {
    "id": "poi-chigang-pagoda",
    "image": "/assets/attractions/poi-chigang-pagoda.jpg",
    "photos": [
      "/assets/attractions/poi-chigang-pagoda.jpg",
      "/assets/attractions/poi-chigang-pagoda_2.jpg",
      "/assets/attractions/poi-chigang-pagoda_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Historic sister pagoda to Pazhou, standing quietly amidst modern high-rises.",
    "name": "Chigang Pagoda",
    "nameZh": "赤岗塔",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "Chigang, Haizhu District, Guangzhou",
    "website": "http://www.haizhu.gov.cn/",
    "review": "Historic sister pagoda to Pazhou, standing quietly amidst modern high-rises.",
    "coordinates": [
      23.1012,
      113.3288
    ]
  },
  {
    "id": "poi-titanium-creative-park",
    "image": "/assets/attractions/poi-titanium-creative-park.jpg",
    "photos": [
      "/assets/attractions/poi-titanium-creative-park.jpg",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "Converted industrial textile mills housing design studios and trendy restaurants.",
    "name": "Titanium Creative Park",
    "nameZh": "钛创易文化创意园",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "Xingang East Road, Haizhu District, Guangzhou",
    "website": "http://www.haizhu.gov.cn/",
    "review": "Converted industrial textile mills housing design studios and trendy restaurants.",
    "coordinates": [
      23.0975,
      113.3512
    ]
  },
  {
    "id": "poi-jiangnan-west-road",
    "image": "/assets/attractions/poi-jiangnan-west-road.jpg",
    "photos": [
      "/assets/attractions/poi-jiangnan-west-road.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MARKETS & WALKING STREETS",
    "tagIcon": "fa-location-dot",
    "desc": "A youth-oriented shopping and fashion avenue packed with hidden dessert shops and independent boutiques.",
    "name": "Jiangnan West Road",
    "nameZh": "江南西商业街",
    "region": "Canton Heritage",
    "category": "Markets & Walking Streets",
    "address": "Jiangnan West Road, Haizhu District, Guangzhou",
    "website": "http://www.haizhu.gov.cn/",
    "review": "A youth-oriented shopping and fashion avenue packed with hidden dessert shops and independent boutiques.",
    "coordinates": [
      23.0982,
      113.2745
    ]
  },
  {
    "id": "poi-taigoo-hui-shopping-mall",
    "image": "/assets/attractions/poi-taigoo-hui-shopping-mall.jpg",
    "photos": [
      "/assets/attractions/poi-taigoo-hui-shopping-mall.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "Ultra-luxury shopping complex representing modern Guangzhou's commercial success.",
    "name": "Taigoo Hui Shopping Mall",
    "nameZh": "太古汇",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "No. 383 Tianhe Road, Tianhe District, Guangzhou",
    "website": "http://www.taikooohui.com/",
    "review": "Ultra-luxury shopping complex representing modern Guangzhou's commercial success.",
    "coordinates": [
      23.1342,
      113.3328
    ]
  },
  {
    "id": "poi-k11-art-mall-guangzhou",
    "image": "/assets/attractions/poi-k11-art-mall-guangzhou.jpg",
    "photos": [
      "/assets/attractions/poi-k11-art-mall-guangzhou.jpg",
      "https://images.unsplash.com/photo-1563384218386-9dcaf77ef0a8?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "Seamlessly merges high-end retail with contemporary art galleries and installations.",
    "name": "K11 Art Mall Guangzhou",
    "nameZh": "广州K11购物艺术中心",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "No. 6 Zhujiang East Road, Tianhe District, Guangzhou",
    "website": "http://www.gz-k11.com/",
    "review": "Seamlessly merges high-end retail with contemporary art galleries and installations.",
    "coordinates": [
      23.1181,
      113.3262
    ]
  },
  {
    "id": "poi-teemall",
    "image": "/assets/attractions/poi-teemall.jpg",
    "photos": [
      "/assets/attractions/poi-teemall.jpg",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "One of Guangzhou’s most iconic, bustling multi-level shopping malls right at Tianhe Sports Center.",
    "name": "Teemall",
    "nameZh": "天河城",
    "region": "Canton Heritage",
    "category": "Skyline & Modern",
    "address": "No. 208 Tianhe Road, Tianhe District, Guangzhou",
    "website": "http://www.teemall.com.cn/",
    "review": "One of Guangzhou’s most iconic, bustling multi-level shopping malls right at Tianhe Sports Center.",
    "coordinates": [
      23.1338,
      113.3225
    ]
  },
  {
    "id": "poi-tianhe-sports-center",
    "image": "/assets/attractions/poi-tianhe-sports-center.jpg",
    "photos": [
      "/assets/attractions/poi-tianhe-sports-center.jpg",
      "/assets/attractions/poi-tianhe-sports-center_2.jpg",
      "/assets/attractions/poi-tianhe-sports-center_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "Sprawling public green plaza and stadium complex where locals gather to run, play badminton, and relax.",
    "name": "Tianhe Sports Center",
    "nameZh": "天河体育中心",
    "region": "Canton Heritage",
    "category": "Nature & Parks",
    "address": "Tianhe Road, Tianhe District, Guangzhou",
    "website": "http://tyj.gz.gov.cn/",
    "review": "Sprawling public green plaza and stadium complex where locals gather to run, play badminton, and relax.",
    "coordinates": [
      23.1375,
      113.3238
    ]
  },
  {
    "id": "poi-zhongshan-university-south-campus",
    "image": "/assets/attractions/poi-zhongshan-university-south-campus.jpg",
    "photos": [
      "/assets/attractions/poi-zhongshan-university-south-campus.jpg",
      "/assets/attractions/poi-zhongshan-university-south-campus_2.jpg",
      "/assets/attractions/poi-zhongshan-university-south-campus_3.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Historic campus featuring majestic red brick academic buildings shaded by enormous banyan trees. Visitors love the scholarly ambiance.",
    "name": "Zhongshan University (South Campus)",
    "nameZh": "中山大学 (南校区)",
    "region": "Canton Heritage",
    "category": "Heritage & Culture",
    "address": "No. 135 Xingang West Road, Haizhu District, Guangzhou",
    "website": "https://www.sysu.edu.cn/",
    "review": "Historic campus featuring majestic red brick academic buildings shaded by enormous banyan trees. Visitors love the scholarly ambiance.",
    "coordinates": [
      23.0968,
      113.2982
    ]
  },
  {
    "id": "poi-guangzhou-art-museum-new-hall",
    "image": "/assets/attractions/poi-guangzhou-art-museum-new-hall.jpg",
    "photos": [
      "/assets/attractions/poi-guangzhou-art-museum-new-hall.jpg",
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?w=800&q=80"
    ],
    "tag": "CANTON HERITAGE • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "State-of-the-art national art museum showcasing brilliant collections of Chinese ink paintings and modern sculpture.",
    "name": "Guangzhou Art Museum (New Hall)",
    "nameZh": "广州艺术博物院 (广州美术馆新馆)",
    "region": "Canton Heritage",
    "category": "Museums & Galleries",
    "address": "No. 198 Yiyuan Road, Haizhu District, Guangzhou",
    "website": "https://www.gzam.org.cn/",
    "review": "State-of-the-art national art museum showcasing brilliant collections of Chinese ink paintings and modern sculpture.",
    "coordinates": [
      23.0955,
      113.3188
    ]
  },
  {
    "id": "poi-lianhuashan-lotus-hill",
    "image": "/assets/attractions/poi-lianhuashan-lotus-hill.jpg",
    "photos": [
      "/assets/attractions/poi-lianhuashan-lotus-hill.jpg",
      "/assets/attractions/poi-lianhuashan-lotus-hill_2.jpg",
      "/assets/attractions/poi-lianhuashan-lotus-hill_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "PANYU • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A historic quarry site featuring a towering golden statue of Guanyin facing the sea.",
    "name": "Lianhuashan (Lotus Hill)",
    "nameZh": "莲花山",
    "region": "Panyu",
    "category": "Heritage & Culture",
    "address": "Xikang Road, Shibi Street, Panyu District, Guangzhou",
    "review": "A historic quarry site featuring a towering golden statue of Guanyin facing the sea.",
    "coordinates": [
      22.9858,
      113.5042
    ]
  },
  {
    "id": "poi-yuyin-garden",
    "image": "/assets/attractions/poi-yuyin-garden.jpg",
    "photos": [
      "/assets/attractions/poi-yuyin-garden.jpg",
      "/assets/attractions/poi-yuyin-garden_2.jpg",
      "/assets/attractions/poi-yuyin-garden_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "PANYU • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "One of Guangdong's four famous Qing Dynasty gardens, featuring intricate brick carvings and lotus pavilions.",
    "name": "Yuyin Garden",
    "nameZh": "余荫山房",
    "region": "Panyu",
    "category": "Heritage & Culture",
    "address": "Nancun Town, Panyu District, Guangzhou",
    "review": "One of Guangdong's four famous Qing Dynasty gardens, featuring intricate brick carvings and lotus pavilions.",
    "coordinates": [
      23.0078,
      113.3905
    ]
  },
  {
    "id": "poi-guangdong-science-center",
    "image": "/assets/attractions/poi-guangdong-science-center.jpg",
    "photos": [
      "/assets/attractions/poi-guangdong-science-center.jpg",
      "/assets/attractions/poi-guangdong-science-center_2.jpg",
      "/assets/attractions/poi-guangdong-science-center_3.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
    ],
    "tag": "PANYU • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "A massive, futuristic facility shaped like a kapok flower, housing interactive technology exhibits.",
    "name": "Guangdong Science Center",
    "nameZh": "广东科学中心",
    "region": "Panyu",
    "category": "Skyline & Modern",
    "address": "Guangzhou Higher Education Mega Center, Panyu District",
    "review": "A massive, futuristic facility shaped like a kapok flower, housing interactive technology exhibits.",
    "coordinates": [
      23.0392,
      113.3648
    ]
  },
  {
    "id": "poi-lingnan-impression-park",
    "image": "/assets/attractions/poi-lingnan-impression-park.jpg",
    "photos": [
      "/assets/attractions/poi-lingnan-impression-park.jpg",
      "/assets/attractions/poi-lingnan-impression-park_2.jpg",
      "/assets/attractions/poi-lingnan-impression-park_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "PANYU • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A reconstructed cultural village detailing traditional Cantonese trades, architecture, and street snacks.",
    "name": "Lingnan Impression Park",
    "nameZh": "岭南印象园",
    "region": "Panyu",
    "category": "Heritage & Culture",
    "address": "Waihuancheng Road, HEMC, Panyu District, Guangzhou",
    "review": "A reconstructed cultural village detailing traditional Cantonese trades, architecture, and street snacks.",
    "coordinates": [
      23.0428,
      113.4072
    ]
  },
  {
    "id": "poi-dishuiyan-forest-park",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
    ],
    "tag": "PANYU • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A quiet ecological reserve popular for local hiking and bird watching.",
    "name": "Dishuiyan Forest Park",
    "nameZh": "滴水岩森林公园",
    "region": "Panyu",
    "category": "Nature & Hiking",
    "address": "Yongsheng Road, Panyu District, Guangzhou",
    "review": "A quiet ecological reserve popular for local hiking and bird watching.",
    "coordinates": [
      22.9152,
      113.3155
    ]
  },
  {
    "id": "poi-haogang-island-haigou-dao",
    "image": "/assets/attractions/poi-haogang-island-haigou-dao.jpg",
    "photos": [
      "/assets/attractions/poi-haogang-island-haigou-dao.jpg",
      "/assets/attractions/poi-haogang-island-haigou-dao_2.jpg",
      "/assets/attractions/poi-haogang-island-haigou-dao_3.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    "tag": "PANYU • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "An agricultural island perfect for cycling, strawberry picking, and fresh seafood.",
    "name": "Haogang Island (Haigou Dao)",
    "nameZh": "海鸥岛",
    "region": "Panyu",
    "category": "Nature & Hiking",
    "address": "Haigou Island, Panyu District, Guangzhou",
    "review": "An agricultural island perfect for cycling, strawberry picking, and fresh seafood.",
    "coordinates": [
      22.9325,
      113.5612
    ]
  },
  {
    "id": "poi-shatian-waterway",
    "image": "/assets/attractions/poi-shatian-waterway.jpg",
    "photos": [
      "/assets/attractions/poi-shatian-waterway.jpg",
      "/assets/attractions/poi-shatian-waterway_2.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "PANYU • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "The main river artery offering waterside walking paths and local fishing spots.",
    "name": "Shatian Waterway",
    "nameZh": "沙湾水道",
    "region": "Panyu",
    "category": "Nature & Parks",
    "address": "Panyu District, Guangzhou",
    "review": "The main river artery offering waterside walking paths and local fishing spots.",
    "coordinates": [
      22.8942,
      113.3255
    ]
  },
  {
    "id": "poi-clifford-estates-zhongcun",
    "image": "/assets/attractions/poi-clifford-estates-zhongcun.jpg",
    "photos": [
      "/assets/attractions/poi-clifford-estates-zhongcun.jpg",
      "/assets/attractions/poi-clifford-estates-zhongcun_2.jpg",
      "/assets/attractions/poi-clifford-estates-zhongcun_3.jpg",
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80"
    ],
    "tag": "PANYU • MARKETS & WALKING STREETS",
    "tagIcon": "fa-location-dot",
    "desc": "A massive residential and commercial hub featuring international dining and shopping.",
    "name": "Clifford Estates (Zhongcun)",
    "nameZh": "祈福新邨",
    "region": "Panyu",
    "category": "Markets & Walking Streets",
    "address": "Zhongcun, Panyu District, Guangzhou",
    "review": "A massive residential and commercial hub featuring international dining and shopping.",
    "coordinates": [
      22.9732,
      113.3285
    ]
  },
  {
    "id": "poi-panyu-square",
    "image": "/assets/attractions/poi-panyu-square.jpg",
    "photos": [
      "/assets/attractions/poi-panyu-square.jpg",
      "/assets/attractions/poi-panyu-square_2.jpg",
      "/assets/attractions/poi-panyu-square_3.jpg",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "tag": "PANYU • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "The modern administrative center featuring large open plazas and an underground shopping labyrinth.",
    "name": "Panyu Square",
    "nameZh": "番禺广场",
    "region": "Panyu",
    "category": "Skyline & Modern",
    "address": "Panyu Square, Panyu District, Guangzhou",
    "review": "The modern administrative center featuring large open plazas and an underground shopping labyrinth.",
    "coordinates": [
      22.9362,
      113.3842
    ]
  },
  {
    "id": "poi-xinghai-park",
    "image": "/assets/attractions/poi-xinghai-park.jpg",
    "photos": [
      "/assets/attractions/poi-xinghai-park.jpg",
      "/assets/attractions/poi-xinghai-park_2.jpg",
      "/assets/attractions/poi-xinghai-park_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "PANYU • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "A community park dedicated to the famous local composer Xian Xinghai.",
    "name": "Xinghai Park",
    "nameZh": "星海公园",
    "region": "Panyu",
    "category": "Nature & Parks",
    "address": "Shiqiao, Panyu District, Guangzhou",
    "review": "A community park dedicated to the famous local composer Xian Xinghai.",
    "coordinates": [
      22.9465,
      113.3621
    ]
  },
  {
    "id": "poi-shiji-town",
    "image": "/assets/attractions/poi-shiji-town.jpg",
    "photos": [
      "/assets/attractions/poi-shiji-town.jpg",
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "PANYU • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A traditional township retaining elements of early 20th-century Cantonese market life.",
    "name": "Shiji Town",
    "nameZh": "石碁镇",
    "region": "Panyu",
    "category": "Heritage & Culture",
    "address": "Shiji Town, Panyu District, Guangzhou",
    "review": "A traditional township retaining elements of early 20th-century Cantonese market life.",
    "coordinates": [
      22.9515,
      113.4382
    ]
  },
  {
    "id": "poi-nancun-town",
    "image": "/assets/attractions/poi-nancun-town.jpg",
    "photos": [
      "/assets/attractions/poi-nancun-town.jpg",
      "/assets/attractions/poi-nancun-town_2.jpg",
      "/assets/attractions/poi-nancun-town_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "PANYU • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "Home to historical ancestral halls and a dense concentration of local Panyu garment trade.",
    "name": "Nancun Town",
    "nameZh": "南村镇",
    "region": "Panyu",
    "category": "Heritage & Culture",
    "address": "Nancun Town, Panyu District, Guangzhou",
    "review": "Home to historical ancestral halls and a dense concentration of local Panyu garment trade.",
    "coordinates": [
      23.0025,
      113.3852
    ]
  },
  {
    "id": "poi-guangzhou-university-city-hemc",
    "image": "/assets/attractions/poi-guangzhou-university-city-hemc.jpg",
    "photos": [
      "/assets/attractions/poi-guangzhou-university-city-hemc.jpg",
      "/assets/attractions/poi-guangzhou-university-city-hemc_2.jpg",
      "/assets/attractions/poi-guangzhou-university-city-hemc_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "PANYU • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "An island hosting ten universities with extensive cycling paths and the GZ Velodrome.",
    "name": "Guangzhou University City (HEMC)",
    "nameZh": "广州大学城",
    "region": "Panyu",
    "category": "Nature & Parks",
    "address": "Xiaoguwei Island, Panyu District, Guangzhou",
    "review": "An island hosting ten universities with extensive cycling paths and the GZ Velodrome.",
    "coordinates": [
      23.0512,
      113.3912
    ]
  },
  {
    "id": "poi-panyu-children-s-park",
    "image": "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "PANYU • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "A large municipal park with extensive climbing structures and splash pads for families.",
    "name": "Panyu Children's Park",
    "nameZh": "番禺儿童公园",
    "region": "Panyu",
    "category": "Nature & Parks",
    "address": "Dabao Road, Panyu District, Guangzhou",
    "review": "A large municipal park with extensive climbing structures and splash pads for families.",
    "coordinates": [
      22.9642,
      113.3642
    ]
  },
  {
    "id": "poi-panda-village",
    "image": "/assets/attractions/poi-panda-village.jpg",
    "photos": [
      "/assets/attractions/poi-panda-village.jpg",
      "/assets/attractions/poi-panda-village_2.jpg",
      "/assets/attractions/poi-panda-village_3.jpg",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "A climate-controlled habitat inside the Safari Park dedicated to giant panda conservation.",
    "name": "Panda Village",
    "nameZh": "大熊猫基地",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Safari Park",
    "review": "A climate-controlled habitat inside the Safari Park dedicated to giant panda conservation.",
    "coordinates": [
      23.0048,
      113.3275
    ]
  },
  {
    "id": "poi-safari-on-wheels",
    "image": "/assets/attractions/poi-safari-on-wheels.jpg",
    "photos": [
      "/assets/attractions/poi-safari-on-wheels.jpg",
      "/assets/attractions/poi-safari-on-wheels_2.jpg",
      "/assets/attractions/poi-safari-on-wheels_3.jpg",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "The 40-minute open-air tram ride through the free-roaming African and Asian animal plains.",
    "name": "Safari on Wheels",
    "nameZh": "小火车游览区",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Safari Park",
    "review": "The 40-minute open-air tram ride through the free-roaming African and Asian animal plains.",
    "coordinates": [
      23.0062,
      113.3255
    ]
  },
  {
    "id": "poi-sky-gondola",
    "image": "/assets/attractions/poi-sky-gondola.jpg",
    "photos": [
      "/assets/attractions/poi-sky-gondola.jpg",
      "https://images.unsplash.com/photo-1564175822606-8d693f4cc14d?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "A transparent cable car system providing aerial views over the safari park enclosures.",
    "name": "Sky Gondola",
    "nameZh": "长隆空中缆车",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Safari Park",
    "review": "A transparent cable car system providing aerial views over the safari park enclosures.",
    "coordinates": [
      23.0051,
      113.3291
    ]
  },
  {
    "id": "poi-white-tiger-restaurant",
    "image": "/assets/attractions/poi-white-tiger-restaurant.jpg",
    "photos": [
      "/assets/attractions/poi-white-tiger-restaurant.jpg",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "A dining room inside the Chimelong Hotel surrounded by glass enclosures viewing live white tigers.",
    "name": "White Tiger Restaurant",
    "nameZh": "白虎餐厅",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Chimelong Hotel, Panyu District, Guangzhou",
    "review": "A dining room inside the Chimelong Hotel surrounded by glass enclosures viewing live white tigers.",
    "coordinates": [
      22.9975,
      113.3312
    ]
  },
  {
    "id": "poi-jurassic-trail",
    "image": "/assets/attractions/poi-jurassic-trail.jpg",
    "photos": [
      "/assets/attractions/poi-jurassic-trail.jpg",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "An immersive walk-through jungle exhibit inside the Safari Park featuring animatronic dinosaurs.",
    "name": "Jurassic Trail",
    "nameZh": "侏罗纪森林",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Safari Park",
    "review": "An immersive walk-through jungle exhibit inside the Safari Park featuring animatronic dinosaurs.",
    "coordinates": [
      23.0039,
      113.3262
    ]
  },
  {
    "id": "poi-swan-lake",
    "image": "/assets/attractions/poi-swan-lake.jpg",
    "photos": [
      "/assets/attractions/poi-swan-lake.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "CHIMELONG • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "The central water feature in the Birds Park hosting synchronized free-flight bird demonstrations.",
    "name": "Swan Lake",
    "nameZh": "天鹅湖",
    "region": "Chimelong",
    "category": "Nature & Parks",
    "address": "Inside Chimelong Birds Park",
    "review": "The central water feature in the Birds Park hosting synchronized free-flight bird demonstrations.",
    "coordinates": [
      23.0335,
      113.2765
    ]
  },
  {
    "id": "poi-neverending-fountain",
    "image": "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "A large interactive splash and play zone for children inside the Water Park.",
    "name": "Neverending Fountain",
    "nameZh": "急流勇进与喷泉区",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Water Park",
    "review": "A large interactive splash and play zone for children inside the Water Park.",
    "coordinates": [
      23.0018,
      113.3288
    ]
  },
  {
    "id": "poi-koala-habitat",
    "image": "/assets/attractions/poi-koala-habitat.jpg",
    "photos": [
      "/assets/attractions/poi-koala-habitat.jpg",
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "The largest koala breeding center outside of Australia, located within the Safari Park.",
    "name": "Koala Habitat",
    "nameZh": "考拉馆",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Safari Park",
    "review": "The largest koala breeding center outside of Australia, located within the Safari Park.",
    "coordinates": [
      23.0042,
      113.3281
    ]
  },
  {
    "id": "poi-motorbike-coaster",
    "image": "/assets/attractions/poi-motorbike-coaster.jpg",
    "photos": [
      "/assets/attractions/poi-motorbike-coaster.jpg",
      "/assets/attractions/poi-motorbike-coaster_2.jpg",
      "https://images.unsplash.com/photo-1564175822606-8d693f4cc14d?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "A high-speed launch coaster inside Chimelong Paradise where riders straddle motorcycle-style seats.",
    "name": "Motorbike Coaster",
    "nameZh": "摩托过山车",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Paradise",
    "review": "A high-speed launch coaster inside Chimelong Paradise where riders straddle motorcycle-style seats.",
    "coordinates": [
      22.9988,
      113.3355
    ]
  },
  {
    "id": "poi-stunt-show-arena",
    "image": "/assets/attractions/poi-stunt-show-arena.jpg",
    "photos": [
      "/assets/attractions/poi-stunt-show-arena.jpg",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "An outdoor theater in Chimelong Paradise featuring live-action vehicle chases and pyrotechnics.",
    "name": "Stunt Show Arena",
    "nameZh": "惊爆危机岛特技剧场",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Paradise",
    "review": "An outdoor theater in Chimelong Paradise featuring live-action vehicle chases and pyrotechnics.",
    "coordinates": [
      23.0002,
      113.3362
    ]
  },
  {
    "id": "poi-chimelong-resort-walkway",
    "image": "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "CHIMELONG • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "The central pedestrian boulevard connecting the hotels, circus, and theme parks.",
    "name": "Chimelong Resort Walkway",
    "nameZh": "长隆度假区大道",
    "region": "Chimelong",
    "category": "Nature & Parks",
    "address": "Chimelong Tourist Resort, Panyu District",
    "review": "The central pedestrian boulevard connecting the hotels, circus, and theme parks.",
    "coordinates": [
      22.9985,
      113.3315
    ]
  },
  {
    "id": "poi-crocodile-island",
    "image": "/assets/attractions/poi-crocodile-island.jpg",
    "photos": [
      "/assets/attractions/poi-crocodile-island.jpg",
      "/assets/attractions/poi-crocodile-island_2.jpg",
      "/assets/attractions/poi-crocodile-island_3.jpg",
      "https://images.unsplash.com/photo-1564175822606-8d693f4cc14d?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "A specialized viewing area in the Birds Park demonstrating crocodile feeding and behavior.",
    "name": "Crocodile Island",
    "nameZh": "鳄鱼岛",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Birds Park",
    "review": "A specialized viewing area in the Birds Park demonstrating crocodile feeding and behavior.",
    "coordinates": [
      23.0315,
      113.2742
    ]
  },
  {
    "id": "poi-tornado-slide",
    "image": "/assets/attractions/poi-tornado-slide.jpg",
    "photos": [
      "/assets/attractions/poi-tornado-slide.jpg",
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80"
    ],
    "tag": "CHIMELONG • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "A massive funnel water slide designed for four-person rafts in the Water Park.",
    "name": "Tornado Slide",
    "nameZh": "大喇叭滑道",
    "region": "Chimelong",
    "category": "Theme Parks & Wildlife",
    "address": "Inside Chimelong Water Park",
    "review": "A massive funnel water slide designed for four-person rafts in the Water Park.",
    "coordinates": [
      23.0031,
      113.3305
    ]
  },
  {
    "id": "poi-dashi-riverside-greenway",
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "tag": "CHIMELONG • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A smooth paved riverside path ideal for evening jogs and catching the sunset breeze off the river.",
    "name": "Dashi Riverside Greenway",
    "nameZh": "大石滨江绿道",
    "region": "Chimelong",
    "category": "Nature & Hiking",
    "address": "Dashi Town, Panyu District, Guangzhou",
    "review": "A smooth paved riverside path ideal for evening jogs and catching the sunset breeze off the river.",
    "coordinates": [
      23.0185,
      113.3125
    ]
  },
  {
    "id": "poi-hanxi-wetland-pocket-park",
    "image": "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "CHIMELONG • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "A clean, manicured pocket park providing a peaceful breath of green right outside the bustling metro hub.",
    "name": "Hanxi Wetland Pocket Park",
    "nameZh": "汉溪湿地口袋公园",
    "region": "Chimelong",
    "category": "Nature & Parks",
    "address": "Near Hanxi Changlong Metro Station, Panyu District",
    "review": "A clean, manicured pocket park providing a peaceful breath of green right outside the bustling metro hub.",
    "coordinates": [
      22.9935,
      113.3321
    ]
  },
  {
    "id": "poi-gulong-gorge-forest-hiking-trail",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "Breathtaking canyon hikes featuring towering waterfalls, misty gorges, and refreshing mountain air.",
    "name": "Gulong Gorge Forest Hiking Trail",
    "nameZh": "古龙峡森林徒步径",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "Gulong Gorge Scenic Area, Qingxin District, Qingyuan",
    "review": "Breathtaking canyon hikes featuring towering waterfalls, misty gorges, and refreshing mountain air.",
    "coordinates": [
      23.7452,
      112.9328
    ]
  },
  {
    "id": "poi-huangteng-gorge-tianmen-corridor",
    "image": "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A glass observation deck shaped like two massive tennis rackets jutting out over a cliff.",
    "name": "Huangteng Gorge Tianmen Corridor",
    "nameZh": "黄腾峡天门悬廊",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "East Suburb, Qingxin District, Qingyuan",
    "review": "A glass observation deck shaped like two massive tennis rackets jutting out over a cliff.",
    "coordinates": [
      23.7655,
      113.0842
    ]
  },
  {
    "id": "poi-huangteng-gorge-ecological-valley",
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "Deep primeval forests with crystal-clear streams, wooden boardwalks, and cool canyon breezes.",
    "name": "Huangteng Gorge Ecological Valley",
    "nameZh": "黄腾峡生态峡谷",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "East Suburb, Qingxin District, Qingyuan",
    "review": "Deep primeval forests with crystal-clear streams, wooden boardwalks, and cool canyon breezes.",
    "coordinates": [
      23.7672,
      113.0865
    ]
  },
  {
    "id": "poi-yingxi-peak-forest-karst-trails",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "Stunning cycling and walking routes weaving through dramatic limestone karst towers ('Little Guilin').",
    "name": "Yingxi Peak Forest Karst Trails",
    "nameZh": "英西峰林走廊徒步径",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "Jiulong Town, Yingde, Qingyuan",
    "review": "Stunning cycling and walking routes weaving through dramatic limestone karst towers ('Little Guilin').",
    "coordinates": [
      24.1285,
      112.9152
    ]
  },
  {
    "id": "poi-beijiang-river-cruise",
    "image": "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "A scenic boat ride through the Three Gorges of Feilaixia, known for onboard fresh river seafood meals.",
    "name": "Beijiang River Cruise",
    "nameZh": "北江小三峡游船",
    "region": "Qingyuan",
    "category": "Nature & Parks",
    "address": "Feilaixia Town, Qingcheng District, Qingyuan",
    "review": "A scenic boat ride through the Three Gorges of Feilaixia, known for onboard fresh river seafood meals.",
    "coordinates": [
      23.8245,
      113.1952
    ]
  },
  {
    "id": "poi-xinyin-zhan-hot-spring-nature-resort",
    "image": "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1523627064379-994c6536b996?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "Incredible outdoor thermal mineral pools nestled directly into forested hillside gardens for ultimate relaxation.",
    "name": "Xinyin Zhan Hot Spring Nature Resort",
    "nameZh": "新银盏温泉度假村",
    "region": "Qingyuan",
    "category": "Nature & Parks",
    "address": "Shijiao Town, Qingcheng District, Qingyuan",
    "review": "Incredible outdoor thermal mineral pools nestled directly into forested hillside gardens for ultimate relaxation.",
    "coordinates": [
      23.5852,
      113.1245
    ]
  },
  {
    "id": "poi-feilai-temple",
    "image": "/assets/attractions/poi-feilai-temple.jpg",
    "photos": [
      "/assets/attractions/poi-feilai-temple.jpg",
      "/assets/attractions/poi-feilai-temple_2.jpg",
      "/assets/attractions/poi-feilai-temple_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "QINGYUAN • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A historic riverside Buddhist temple accessible primarily by boat along the Beijiang River.",
    "name": "Feilai Temple",
    "nameZh": "飞来寺",
    "region": "Qingyuan",
    "category": "Heritage & Culture",
    "address": "Feilaixia, Qingcheng District, Qingyuan",
    "review": "A historic riverside Buddhist temple accessible primarily by boat along the Beijiang River.",
    "coordinates": [
      23.8182,
      113.1895
    ]
  },
  {
    "id": "poi-baojing-palace-of-yingde",
    "image": "/assets/attractions/poi-baojing-palace-of-yingde.jpg",
    "photos": [
      "/assets/attractions/poi-baojing-palace-of-yingde.jpg",
      "/assets/attractions/poi-baojing-palace-of-yingde_2.jpg",
      "/assets/attractions/poi-baojing-palace-of-yingde_3.jpg",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A massive limestone cave system featuring illuminated stalactites and underground lakes.",
    "name": "Baojing Palace of Yingde",
    "nameZh": "英德宝晶宫",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "Yingde, Qingyuan",
    "review": "A massive limestone cave system featuring illuminated stalactites and underground lakes.",
    "coordinates": [
      24.1528,
      113.3885
    ]
  },
  {
    "id": "poi-niuyuzui-scenic-area",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A forested mountain park known for its spring wildflower blooms and suspension bridges.",
    "name": "Niuyuzui Scenic Area",
    "nameZh": "牛鱼嘴原始生态风景区",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "Dongcheng Street, Qingcheng District, Qingyuan",
    "review": "A forested mountain park known for its spring wildflower blooms and suspension bridges.",
    "coordinates": [
      23.7745,
      113.1582
    ]
  },
  {
    "id": "poi-tianzi-mountain-waterfall",
    "image": "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A multi-tiered waterfall cascading down a lush mountain face with adjacent hiking trails.",
    "name": "Tianzi Mountain Waterfall",
    "nameZh": "天子山瀑布",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "Feilaixia Town, Qingcheng District, Qingyuan",
    "review": "A multi-tiered waterfall cascading down a lush mountain face with adjacent hiking trails.",
    "coordinates": [
      23.8825,
      113.2345
    ]
  },
  {
    "id": "poi-jinzi-mountain",
    "image": "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "Famous for its terrifyingly steep 80-degree stone staircases and summit glass bridge.",
    "name": "Jinzi Mountain",
    "nameZh": "金子山风景区",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "Lianping Town, Lianshan, Qingyuan",
    "review": "Famous for its terrifyingly steep 80-degree stone staircases and summit glass bridge.",
    "coordinates": [
      24.7125,
      112.0852
    ]
  },
  {
    "id": "poi-nangang-millennium-yao-pai",
    "image": "/assets/attractions/poi-nangang-millennium-yao-pai.jpg",
    "photos": [
      "/assets/attractions/poi-nangang-millennium-yao-pai.jpg",
      "/assets/attractions/poi-nangang-millennium-yao-pai_2.jpg",
      "/assets/attractions/poi-nangang-millennium-yao-pai_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "QINGYUAN • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "An ancient, terraced village showcasing the indigenous culture and architecture of the Yao ethnic minority.",
    "name": "Nangang Millennium Yao Pai",
    "nameZh": "南岗千年瑶寨",
    "region": "Qingyuan",
    "category": "Heritage & Culture",
    "address": "Sanjiang Town, Liannan, Qingyuan",
    "review": "An ancient, terraced village showcasing the indigenous culture and architecture of the Yao ethnic minority.",
    "coordinates": [
      24.5125,
      112.3125
    ]
  },
  {
    "id": "poi-lianzhou-underground-river",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    "tag": "QINGYUAN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A subterranean boat tour through a massive, colorfully lit limestone cavern.",
    "name": "Lianzhou Underground River",
    "nameZh": "连州地下河",
    "region": "Qingyuan",
    "category": "Nature & Hiking",
    "address": "Dongbei Town, Lianzhou, Qingyuan",
    "review": "A subterranean boat tour through a massive, colorfully lit limestone cavern.",
    "coordinates": [
      24.9652,
      112.3852
    ]
  },
  {
    "id": "poi-bijiashan-rafting",
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=800&q=80"
    ],
    "tag": "QINGYUAN • THEME PARKS & WILDLIFE",
    "tagIcon": "fa-location-dot",
    "desc": "An intense white-water river rafting experience through a narrow rock canyon.",
    "name": "Bijiashan Rafting",
    "nameZh": "笔架山漂流",
    "region": "Qingyuan",
    "category": "Theme Parks & Wildlife",
    "address": "Bijiashan Forest Park, Qingcheng District",
    "review": "An intense white-water river rafting experience through a narrow rock canyon.",
    "coordinates": [
      23.7925,
      113.0425
    ]
  },
  {
    "id": "poi-oct-loft-creative-culture-park",
    "image": "/assets/attractions/poi-oct-loft-creative-culture-park.jpg",
    "photos": [
      "/assets/attractions/poi-oct-loft-creative-culture-park.jpg",
      "/assets/attractions/poi-oct-loft-creative-culture-park_2.jpg",
      "/assets/attractions/poi-oct-loft-creative-culture-park_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "SHENZHEN • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A complex of former factories transformed into indie art galleries, coffee roasteries, and live music venues.",
    "name": "OCT-LOFT Creative Culture Park",
    "nameZh": "华侨城创意文化园",
    "region": "Shenzhen",
    "category": "Heritage & Culture",
    "address": "OCT, Nanshan District, Shenzhen",
    "review": "A complex of former factories transformed into indie art galleries, coffee roasteries, and live music venues.",
    "coordinates": [
      22.5385,
      113.9925
    ]
  },
  {
    "id": "poi-tencent-seafront-towers",
    "image": "/assets/attractions/poi-tencent-seafront-towers.jpg",
    "photos": [
      "/assets/attractions/poi-tencent-seafront-towers.jpg",
      "/assets/attractions/poi-tencent-seafront-towers_2.jpg",
      "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=800&q=80"
    ],
    "tag": "SHENZHEN • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "The global headquarters of Tencent, featuring striking architecture with sky bridges connecting the towers.",
    "name": "Tencent Seafront Towers",
    "nameZh": "腾讯滨海大厦",
    "region": "Shenzhen",
    "category": "Skyline & Modern",
    "address": "Houhai Avenue, Nanshan District, Shenzhen",
    "review": "The global headquarters of Tencent, featuring striking architecture with sky bridges connecting the towers.",
    "coordinates": [
      22.5275,
      113.9355
    ]
  },
  {
    "id": "poi-shenzhen-bay-park-coastal-promenade",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    "tag": "SHENZHEN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "Thirteen kilometers of uninterrupted seaside walking paths right along the bay facing Hong Kong's wetlands.",
    "name": "Shenzhen Bay Park Coastal Promenade",
    "nameZh": "深圳湾公园滨海长廊",
    "region": "Shenzhen",
    "category": "Nature & Hiking",
    "address": "Binhai Avenue, Nanshan/Futian District, Shenzhen",
    "review": "Thirteen kilometers of uninterrupted seaside walking paths right along the bay facing Hong Kong's wetlands.",
    "coordinates": [
      22.5185,
      113.9782
    ]
  },
  {
    "id": "poi-wutong-mountain-wutong-shan",
    "image": "/assets/attractions/poi-wutong-mountain-wutong-shan.jpg",
    "photos": [
      "/assets/attractions/poi-wutong-mountain-wutong-shan.jpg",
      "/assets/attractions/poi-wutong-mountain-wutong-shan_2.jpg",
      "/assets/attractions/poi-wutong-mountain-wutong-shan_3.jpg",
      "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?w=800&q=80"
    ],
    "tag": "SHENZHEN • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "The highest peak in Shenzhen; challenging granite stair climbs that reward hikers with views stretching all the way to Hong Kong.",
    "name": "Wutong Mountain (Wutong Shan)",
    "nameZh": "梧桐山",
    "region": "Shenzhen",
    "category": "Nature & Hiking",
    "address": "Luohu/Yantian District, Shenzhen",
    "review": "The highest peak in Shenzhen; challenging granite stair climbs that reward hikers with views stretching all the way to Hong Kong.",
    "coordinates": [
      22.5852,
      114.2045
    ]
  },
  {
    "id": "poi-fairy-lake-botanical-garden-hongfa-temple",
    "image": "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "SHENZHEN • NATURE & PARKS",
    "tagIcon": "fa-location-dot",
    "desc": "A massive, peaceful sanctuary featuring a petrified forest, serene lake trails, and the magnificent mountainside temple.",
    "name": "Fairy Lake Botanical Garden & Hongfa Temple",
    "nameZh": "仙湖植物园与弘法寺",
    "region": "Shenzhen",
    "category": "Nature & Parks",
    "address": "160 Xianhu Road, Liantang, Luohu District, Shenzhen",
    "website": "http://www.szbg.ac.cn/",
    "review": "A massive, peaceful sanctuary featuring a petrified forest, serene lake trails, and the magnificent mountainside temple.",
    "coordinates": [
      22.5785,
      114.1685
    ]
  },
  {
    "id": "poi-huaqiangbei-electronics-market",
    "image": "/assets/attractions/poi-huaqiangbei-electronics-market.jpg",
    "photos": [
      "/assets/attractions/poi-huaqiangbei-electronics-market.jpg",
      "/assets/attractions/poi-huaqiangbei-electronics-market_2.jpg",
      "/assets/attractions/poi-huaqiangbei-electronics-market_3.jpg",
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
    ],
    "tag": "SHENZHEN • MARKETS & WALKING STREETS",
    "tagIcon": "fa-location-dot",
    "desc": "The world's largest electronics wholesale market, spanning multiple multi-story commercial plazas.",
    "name": "Huaqiangbei Electronics Market",
    "nameZh": "华强北步行街",
    "region": "Shenzhen",
    "category": "Markets & Walking Streets",
    "address": "Huaqiang North Road, Futian District, Shenzhen",
    "review": "The world's largest electronics wholesale market, spanning multiple multi-story commercial plazas.",
    "coordinates": [
      22.5452,
      114.0862
    ]
  },
  {
    "id": "poi-nantou-ancient-city",
    "image": "/assets/attractions/poi-nantou-ancient-city.jpg",
    "photos": [
      "/assets/attractions/poi-nantou-ancient-city.jpg",
      "/assets/attractions/poi-nantou-ancient-city_2.jpg",
      "/assets/attractions/poi-nantou-ancient-city_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "SHENZHEN • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A 1,700-year-old preserved town gate and street seamlessly integrated into the dense modern urban fabric.",
    "name": "Nantou Ancient City",
    "nameZh": "南头古城",
    "region": "Shenzhen",
    "category": "Heritage & Culture",
    "address": "Nanshan Avenue, Nanshan District, Shenzhen",
    "review": "A 1,700-year-old preserved town gate and street seamlessly integrated into the dense modern urban fabric.",
    "coordinates": [
      22.5395,
      113.9182
    ]
  },
  {
    "id": "poi-sea-world-shekou",
    "image": "/assets/attractions/poi-sea-world-shekou.jpg",
    "photos": [
      "/assets/attractions/poi-sea-world-shekou.jpg",
      "/assets/attractions/poi-sea-world-shekou_2.jpg",
      "/assets/attractions/poi-sea-world-shekou_3.jpg",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80"
    ],
    "tag": "SHENZHEN • MARKETS & WALKING STREETS",
    "tagIcon": "fa-location-dot",
    "desc": "An entertainment plaza built around the Minghua, a decommissioned French cruise ship permanently landlocked in concrete.",
    "name": "Sea World (Shekou)",
    "nameZh": "海上世界 (蛇口)",
    "region": "Shenzhen",
    "category": "Markets & Walking Streets",
    "address": "Shekou, Nanshan District, Shenzhen",
    "review": "An entertainment plaza built around the Minghua, a decommissioned French cruise ship permanently landlocked in concrete.",
    "coordinates": [
      22.4845,
      113.9152
    ]
  },
  {
    "id": "poi-dragon-s-back-trail",
    "image": "/assets/attractions/poi-dragon-s-back-trail.jpg",
    "photos": [
      "/assets/attractions/poi-dragon-s-back-trail.jpg",
      "/assets/attractions/poi-dragon-s-back-trail_2.jpg",
      "/assets/attractions/poi-dragon-s-back-trail_3.jpg",
      "https://images.unsplash.com/photo-1544644181-1484b3fdfc62?w=800&q=80"
    ],
    "tag": "HONG KONG • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "Consistently rated one of the world's best urban hikes; rolling green ridgelines ending directly at Big Wave Bay beach.",
    "name": "Dragon's Back Trail",
    "nameZh": "龍脊",
    "region": "Hong Kong",
    "category": "Nature & Hiking",
    "address": "Shek O Road, Hong Kong Island, Hong Kong",
    "review": "Consistently rated one of the world's best urban hikes; rolling green ridgelines ending directly at Big Wave Bay beach.",
    "coordinates": [
      22.2452,
      114.2402
    ]
  },
  {
    "id": "poi-tai-o-stilt-village-mangrove-boardwalk",
    "image": "/assets/attractions/poi-tai-o-stilt-village-mangrove-boardwalk.jpg",
    "photos": [
      "/assets/attractions/poi-tai-o-stilt-village-mangrove-boardwalk.jpg",
      "/assets/attractions/poi-tai-o-stilt-village-mangrove-boardwalk_2.jpg",
      "/assets/attractions/poi-tai-o-stilt-village-mangrove-boardwalk_3.jpg",
      "https://images.unsplash.com/photo-1555529902-536138fea2cb?w=800&q=80"
    ],
    "tag": "HONG KONG • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A wonderful, slow-paced coastal nature escape featuring tidal mudflats, egrets, and historic stilt houses.",
    "name": "Tai O Stilt Village & Mangrove Boardwalk",
    "nameZh": "大澳漁村",
    "region": "Hong Kong",
    "category": "Heritage & Culture",
    "address": "Tai O, Lantau Island, Hong Kong",
    "review": "A wonderful, slow-paced coastal nature escape featuring tidal mudflats, egrets, and historic stilt houses.",
    "coordinates": [
      22.2538,
      113.8625
    ]
  },
  {
    "id": "poi-tian-tan-buddha-big-buddha",
    "image": "/assets/attractions/poi-tian-tan-buddha-big-buddha.jpg",
    "photos": [
      "/assets/attractions/poi-tian-tan-buddha-big-buddha.jpg",
      "/assets/attractions/poi-tian-tan-buddha-big-buddha_2.jpg",
      "/assets/attractions/poi-tian-tan-buddha-big-buddha_3.jpg",
      "https://images.unsplash.com/photo-1583095383794-09c3fa36d1b6?w=800&q=80"
    ],
    "tag": "HONG KONG • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A 34-meter bronze statue located on Lantau Island, accessible via the scenic Ngong Ping 360 cable car.",
    "name": "Tian Tan Buddha (Big Buddha)",
    "nameZh": "天壇大佛",
    "region": "Hong Kong",
    "category": "Heritage & Culture",
    "address": "Ngong Ping, Lantau Island, Hong Kong",
    "review": "A 34-meter bronze statue located on Lantau Island, accessible via the scenic Ngong Ping 360 cable car.",
    "coordinates": [
      22.2539,
      113.9051
    ]
  },
  {
    "id": "poi-tsim-sha-tsui-promenade-avenue-of-stars",
    "image": "/assets/attractions/poi-tsim-sha-tsui-promenade-avenue-of-stars.jpg",
    "photos": [
      "/assets/attractions/poi-tsim-sha-tsui-promenade-avenue-of-stars.jpg",
      "/assets/attractions/poi-tsim-sha-tsui-promenade-avenue-of-stars_2.jpg",
      "/assets/attractions/poi-tsim-sha-tsui-promenade-avenue-of-stars_3.jpg",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e?w=800&q=80"
    ],
    "tag": "HONG KONG • SKYLINE & MODERN",
    "tagIcon": "fa-location-dot",
    "desc": "A coastal walkway honoring the Hong Kong film industry with handprints of stars overlooking Victoria Harbour.",
    "name": "Tsim Sha Tsui Promenade & Avenue of Stars",
    "nameZh": "星光大道",
    "region": "Hong Kong",
    "category": "Skyline & Modern",
    "address": "Tsim Sha Tsui Waterfront, Kowloon, Hong Kong",
    "review": "A coastal walkway honoring the Hong Kong film industry with handprints of stars overlooking Victoria Harbour.",
    "coordinates": [
      22.2931,
      114.1738
    ]
  },
  {
    "id": "poi-man-mo-temple",
    "image": "/assets/attractions/poi-man-mo-temple.jpg",
    "photos": [
      "/assets/attractions/poi-man-mo-temple.jpg",
      "/assets/attractions/poi-man-mo-temple_2.jpg",
      "/assets/attractions/poi-man-mo-temple_3.jpg",
      "https://images.unsplash.com/photo-1563204907-7a2e2d832d20?w=800&q=80"
    ],
    "tag": "HONG KONG • HERITAGE & CULTURE",
    "tagIcon": "fa-location-dot",
    "desc": "A mid-19th-century atmospheric temple in Sheung Wan, constantly filled with the smoke of massive hanging incense coils.",
    "name": "Man Mo Temple",
    "nameZh": "文武廟",
    "region": "Hong Kong",
    "category": "Heritage & Culture",
    "address": "Hollywood Road, Sheung Wan, Hong Kong",
    "review": "A mid-19th-century atmospheric temple in Sheung Wan, constantly filled with the smoke of massive hanging incense coils.",
    "coordinates": [
      22.2839,
      114.1502
    ]
  },
  {
    "id": "poi-lantau-trail-section-3-wisdom-path",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    "photos": [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80"
    ],
    "tag": "HONG KONG • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "Quiet forested mountain trails winding past towering wooden prayer columns amidst mountain mist.",
    "name": "Lantau Trail (Section 3 & Wisdom Path)",
    "nameZh": "鳳凰徑與心經簡林",
    "region": "Hong Kong",
    "category": "Nature & Hiking",
    "address": "Ngong Ping, Lantau Island, Hong Kong",
    "review": "Quiet forested mountain trails winding past towering wooden prayer columns amidst mountain mist.",
    "coordinates": [
      22.2552,
      113.9115
    ]
  },
  {
    "id": "poi-plover-cove-country-park-bride-s-pool",
    "image": "/assets/attractions/poi-plover-cove-country-park-bride-s-pool.jpg",
    "photos": [
      "/assets/attractions/poi-plover-cove-country-park-bride-s-pool.jpg",
      "/assets/attractions/poi-plover-cove-country-park-bride-s-pool_2.jpg",
      "/assets/attractions/poi-plover-cove-country-park-bride-s-pool_3.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80"
    ],
    "tag": "HONG KONG • NATURE & HIKING",
    "tagIcon": "fa-location-dot",
    "desc": "A lush shaded forest stream walk leading to picturesque waterfalls and rock pools, perfect for escaping city noise.",
    "name": "Plover Cove Country Park (Bride's Pool)",
    "nameZh": "新娘潭自然教育徑",
    "region": "Hong Kong",
    "category": "Nature & Hiking",
    "address": "Tai Po, New Territories, Hong Kong",
    "review": "A lush shaded forest stream walk leading to picturesque waterfalls and rock pools, perfect for escaping city noise.",
    "coordinates": [
      22.4885,
      114.2385
    ]
  },
  {
    "id": "poi-west-kowloon-cultural-district-m",
    "image": "/assets/attractions/poi-west-kowloon-cultural-district-m.jpg",
    "photos": [
      "/assets/attractions/poi-west-kowloon-cultural-district-m.jpg",
      "/assets/attractions/poi-west-kowloon-cultural-district-m_2.jpg",
      "/assets/attractions/poi-west-kowloon-cultural-district-m_3.jpg",
      "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=800&q=80"
    ],
    "tag": "HONG KONG • MUSEUMS & GALLERIES",
    "tagIcon": "fa-location-dot",
    "desc": "A massive reclaimed land project housing M+, Asia’s first global museum of contemporary visual culture.",
    "name": "West Kowloon Cultural District (M+)",
    "nameZh": "西九文化區 (M+)",
    "region": "Hong Kong",
    "category": "Museums & Galleries",
    "address": "West Kowloon, Hong Kong",
    "review": "A massive reclaimed land project housing M+, Asia’s first global museum of contemporary visual culture.",
    "coordinates": [
      22.3005,
      114.1588
    ]
  }
];

if (typeof window !== 'undefined') window.expeditionAttractions = expeditionAttractions;
if (typeof globalThis !== 'undefined') globalThis.expeditionAttractions = expeditionAttractions;
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    expeditionAttractions: expeditionAttractions,
    hotelRoomsData: (typeof hotelRoomsData !== 'undefined' ? hotelRoomsData : undefined),
    itinerarySchedule: (typeof itinerarySchedule !== 'undefined' ? itinerarySchedule : undefined)
  };
}
