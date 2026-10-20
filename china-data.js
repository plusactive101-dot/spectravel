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

    // -------------------------------------------------------------
    // 2. DEFAULT RESTAURANTS DATABASE
    // -------------------------------------------------------------

const defaultRestaurants = [
      {
        id: "rest-1",
        name: "Shawan Ancient Town Milk Shop (沁芳园甜品)",
        city: "Panyu",
        cuisine: "Traditional Lingnan Desserts",
        highlights: ["Ginger Milk Curd", "Egg Rolls", "Double-Skin Milk"],
        dishes: "Water-buffalo ginger milk curd (沙湾水牛奶姜撞奶), crispy egg rolls, double-skin milk",
        address: "Shawan Ancient Town Scenic Area, Panyu",
        price: "$",
        schedule: "10:00 AM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        notes: "Historic dessert house famous for hot curd formed right at your table with freshly grated ginger juice.",
        gallery: [
          { title: "Shawan Historic Oyster Shell Courtyard", type: "exterior", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", desc: "Traditional Lingnan historic courtyard and oyster shell architecture in Shawan" },
          { title: "Traditional Dessert Tea Table", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Rustic wooden benches and ceramic teaware inside the centenary dessert hall" }
        ],
        menu: [
          { nameZh: "沙湾水牛奶姜撞奶", nameEn: "Water-Buffalo Ginger Milk Curd", category: "Dessert", desc: "Freshly pressed fiery ginger juice instantly curdled with boiling high-fat Shawan buffalo milk at your table.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "传统原味双皮奶", nameEn: "Traditional Double-Skin Milk Pudding", category: "Dessert", desc: "Velvety smooth steamed buffalo milk custard topped with a fragile caramelized skin.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "手工香脆蛋卷", nameEn: "Handmade Crispy Egg Rolls", category: "Dessert", desc: "Golden waffle pastry rolls infused with rich farm eggs and pure lard, baked fresh daily.", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-2",
        name: "Bingsheng Taste (炳胜品味 • 时代E-PARK店)",
        city: "Chimelong",
        cuisine: "Michelin Cantonese",
        highlights: ["Signature Black Char Siu", "Crispy Tofu", "Pineapple Buns"],
        dishes: "Signature Char Siu (秘制黑叉烧), Crispy Tofu, Pineapple Buns",
        address: "Building 2, Times E-PARK, No. 290 Hanxi Ave East (7 mins Didi from Chimelong Hotel)",
        price: "$$$",
        schedule: "11:00 AM – 02:30 PM, 05:00 PM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
        notes: "Far superior in quality and price compared to marked-up theme park restaurants. Take Didi outside resort gate.",
        gallery: [
          { title: "Modern Lingnan Architectural Hall", type: "exterior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Contemporary glass facade with ambient warm timber tones" },
          { title: "Private Dining Salon", type: "interior", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80", desc: "Polished terrazzo tables and sleek brass lanterns for refined Cantonese dining" }
        ],
        menu: [
          { nameZh: "炳胜秘制黑叉烧", nameEn: "Signature Glazed Black Char Siu", category: "Cantonese Main", desc: "Pork collar caramel-lacquered over charcoal; ultra-crisp outer crust with melt-in-your-mouth fat.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "金沙脆皮豆腐", nameEn: "Crispy Golden Sand Tofu", category: "Cantonese Main", desc: "Silken house-made soy tofu fried to paper-thin crunch, dusted with salted egg crumble.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "炳胜大菠萝包", nameEn: "Jumbo Crispy Pineapple Buns", category: "Dim Sum", desc: "Airy sweet bread crown crusted with sugar butter cookie, served with farm fresh butter.", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-3",
        name: "Panxi Restaurant (泮溪酒家)",
        city: "Guangzhou",
        cuisine: "Classic Lingnan Yum Cha",
        highlights: ["Har Gow Prawn Dumplings", "Crab Roe Siu Mai", "Water Chestnut Cake"],
        dishes: "Har Gow (Crystal Shrimp Dumplings), Siu Mai, Water Chestnut Cake",
        address: "No. 151 Longjin West Road, Liwan District (Beside Liwan Lake)",
        price: "$$",
        schedule: "07:30 AM – 02:00 PM, 05:00 PM – 09:00 PM",
        coverImage: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        notes: "Legendary garden restaurant with traditional gazebos and koi ponds. Arrive before 9:30 AM for morning tea table.",
        gallery: [
          { title: "Liwan Lake Waterfront Pavilion", type: "exterior", image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80", desc: "Classical Chinese curved eaves floating right above emerald lotus ponds" },
          { title: "Banyan Lake Dining Veranda", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Open-air wooden verandas surrounded by swimming carp and ancient weeping willows" }
        ],
        menu: [
          { nameZh: "原只鲜虾饺皇", nameEn: "Crystal Master Prawn Har Gow", category: "Dim Sum", desc: "Translucent pleated dough pouches stuffed with whole sweet ocean prawns and bamboo shoot crunch.", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "蟹籽鲜肉烧卖皇", nameEn: "Steamed Crab Roe Pork Siu Mai", category: "Dim Sum", desc: "Tender hand-chopped pork and shrimp encased in wonton skins, crowned with golden tobiko crab roe.", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "泮塘香煎马蹄糕", nameEn: "Pan-Fried Pantang Water Chestnut Cake", category: "Dim Sum", desc: "Golden caramel seared cubes of Liwan water chestnut flour packed with crunchy fresh water chestnuts.", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-4",
        name: "Dafo Temple Vegetarian House (大佛寺素食阁)",
        city: "Guangzhou",
        cuisine: "Buddhist Vegetarian Buffet",
        highlights: ["Wild Mushroom Stew", "Lotus Root Soup", "Vegetarian Dim Sum"],
        dishes: "Mushroom stew, vegetarian dim sum, lotus root soup",
        address: "Inside Dafo Temple, Beijing Road, Yuexiu District",
        price: "$$",
        schedule: "11:30 AM – 02:00 PM, 05:30 PM – 08:30 PM",
        coverImage: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=800&q=80",
        notes: "Dine inside the illuminated golden pagoda complex right beside Beijing Road pedestrian shopping street.",
        gallery: [
          { title: "Dafo Temple Golden Pagoda Courtyard", type: "exterior", image: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?auto=format&fit=crop&w=1200&q=80", desc: "Multi-tiered illuminated copper eave pagoda glowing dramatically at twilight" },
          { title: "Serene Temple Dining Hall", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Zen wooden monastery hall featuring peaceful incense aromatics and tea tables" }
        ],
        menu: [
          { nameZh: "大佛寺养生十宝菇", nameEn: "Ten Treasures Forest Mushroom Stew", category: "Cantonese Main", desc: "Slow-simmered morels, matsutake, and shiitake mushrooms stewed with Chinese yam in claypot.", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "素香翡翠水晶饺", nameEn: "Emerald Crystal Vegetarian Dumplings", category: "Dim Sum", desc: "Glass dough pockets packed with fresh bok choy, black fungus, and fragrant sesame.", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "古法慢火老火靓汤", nameEn: "Slow-Boiled Lotus Root Herb Broth", category: "Double-Boiled Soup", desc: "Simmered for 6 hours with red dates, lotus roots, and wolfberries for wholesome nourishment.", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-1",
        name: "Tao Tao Ju (陶陶居)",
        city: "Guangzhou",
        cuisine: "Centenary Cantonese Dim Sum & Tea House",
        highlights: ["Signature Jumbo Har Gow", "Crispy Buffalo Milk Pineapple Bun", "Golden Lava Buns"],
        dishes: "Shrimp Dumplings (虾饺皇), Signature Jumbo Shrimp Dumplings (陶陶居大虾饺), Crispy Pineapple Bun with Buffalo Milk Custard (酥皮水牛奶菠萝包)",
        address: "No. 20 Dishifu Road, Liwan District / Beijing Road branches",
        price: "$$",
        schedule: "08:00 AM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        notes: "Guangzhou's most celebrated heritage tea house established in 1880. Must-try for golden flaky milk buns and fresh morning dim sum.",
        gallery: [
          { title: "Dishifu 1880 Heritage Tea House Facade", type: "exterior", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", desc: "Classic republican-era brick archway facade in historical Xiguan" },
          { title: "Stained Glass Morning Tea Room", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Manchu etched colored glass windows and brass teapots over bamboo steamers" }
        ],
        menu: [
          { nameZh: "陶陶居大虾饺", nameEn: "Signature Jumbo Shrimp Dumplings", category: "Dim Sum", desc: "Celebrated triple-fold dough filled with 3 whole crunchy tiger prawns and savory broth.", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "酥皮水牛奶菠萝包", nameEn: "Crispy Pineapple Bun w/ Buffalo Milk Custard", category: "Dim Sum", desc: "Molten hot buffalo milk custard bursting out of a sweet cookie-crusted brioche crown.", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "金沙海虾红米肠", nameEn: "Golden Crispy Net Red Rice Rolls", category: "Dim Sum", desc: "Red yeast rice noodles wrapped around crunchy deep-fried netting and whole prawns.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-2",
        name: "Da Ge Fan (大鸽饭 • 招牌红烧乳鸽)",
        city: "Guangzhou",
        cuisine: "Guangdong Specialty Roast Pigeon",
        highlights: ["Blistered Crispy Roast Pigeon", "Pigeon Claypot Rice", "Salt & Pepper Pigeon"],
        dishes: "Signature Crispy Roasted Pigeon (红烧乳鸽), Pigeon Claypot Rice (招牌鸽饭), Salt & Pepper Pigeon (椒盐乳鸽)",
        address: "Multiple branches in Guangzhou core / Yuexiu & Tianhe",
        price: "$$",
        schedule: "11:00 AM – 02:30 PM, 05:00 PM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80",
        notes: "Guangzhou's #1 renowned roasted pigeon chain. Intensely juicy pigeon with blistered crispy skin and fragrance-infused claypot rice.",
        gallery: [
          { title: "Da Ge Fan Flagship Entrance", type: "exterior", image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80", desc: "Bustling lively neon signage with queue crowds awaiting roasted squab" },
          { title: "Charcoal Claypot Hearth", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Open kitchen station with blazing charcoal flames searing claypot rice" }
        ],
        menu: [
          { nameZh: "招牌红烧生炸乳鸽", nameEn: "Signature Crispy Skin Roasted Pigeon", category: "Cantonese Main", desc: "Glass-like crackling skin that bursts with aromatic game jus upon first bite.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "传统原煲大鸽饭", nameEn: "Claypot Rice w/ Minced Pigeon", category: "Cantonese Main", desc: "Fragrant Jasmine rice cooked in pigeon broth over claypot, topped with crispy golden crust.", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "椒盐乳鸽腿", nameEn: "Salt & Szechuan Pepper Pigeon Drumsticks", category: "Cantonese Main", desc: "Deep-fried squab legs tossed with crispy shallots, minced garlic, and pepper salt.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-3",
        name: "Xie San Bao (蟹叁宝)",
        city: "Guangzhou",
        cuisine: "Crab Roe & Seafood Specialty",
        highlights: ["Pure Crab Roe Over Rice", "Crab Roe Tossed Noodles", "Crab Roe Soup Dumplings"],
        dishes: "Crab Roe Over Rice (蟹黄捞饭), Crab Roe Tossed Noodles (蟹黄拌面), Crab Roe Soup Dumplings (蟹黄小笼包)",
        address: "Beijing Road Commercial Pedestrian Zone, Yuexiu District",
        price: "$$$",
        schedule: "11:00 AM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        notes: "Famous golden bowl packed with pure hand-peeled female crab roe and crab meat poured over steaming hot rice and noodles.",
        gallery: [
          { title: "Beijing Road Boutique Storefront", type: "exterior", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80", desc: "Sleek dining boutique along the pedestrian heritage avenue" },
          { title: "Golden Crab Bar & Open Counter", type: "interior", image: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1200&q=80", desc: "Chefs dishing out heaping ladlefuls of glistening golden crab roe" }
        ],
        menu: [
          { nameZh: "金汤浓郁蟹黄捞饭", nameEn: "Golden Pure Crab Roe Over Rice", category: "Cantonese Main", desc: "Rich bowl containing the meat and roe of 10 freshwater crabs served over hot pearly rice.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "招牌鲜蟹粉拌面", nameEn: "Crab Roe Scallion Oil Tossed Noodles", category: "Cantonese Main", desc: "Springy hand-pulled egg noodles saturated in golden crab butter and aged crab vinegar.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "金牌爆汁蟹黄小笼包", nameEn: "Crab Roe Xiao Long Bao Dumplings", category: "Dim Sum", desc: "Delicate pleated dumplings filled with piping-hot savory crab roe broth.", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-4",
        name: "Dian Dou De (点都德)",
        city: "Guangzhou",
        cuisine: "Intangible Cultural Heritage All-Day Dim Sum",
        highlights: ["Golden Net Red Rice Roll", "Master Har Gow", "Char Siu Bao"],
        dishes: "Golden Crispy Salted Egg Shrimp Red Rice Roll (金沙海虾红米肠), Har Gow Dumplings (虾饺皇), Red Rice Rolls (红米肠)",
        address: "Beijing Road & Dongshankou branch locations",
        price: "$$",
        schedule: "07:30 AM – 10:00 PM All-Day Dim Sum",
        coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
        notes: "Old-school Cantonese teahouse atmosphere with traditional teapots and freshly handmade dim sum served morning until late night.",
        gallery: [
          { title: "Xiguan Grand Teahouse Hall", type: "exterior", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80", desc: "Sprawling two-story Cantonese salon adorned with traditional lanterns" },
          { title: "Kung Fu Tea Counter", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Boiling brass water kettles brewing aged pu-erh and tieguanyin tea" }
        ],
        menu: [
          { nameZh: "金沙海虾红米肠", nameEn: "Golden Crispy Net Red Rice Rolls", category: "Dim Sum", desc: "Crimson rice noodles wrapping a fried crispy mesh tube packed with tender fresh shrimp.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "金牌虾饺皇", nameEn: "Heritage King Prawn Har Gow", category: "Dim Sum", desc: "Eleven delicate folds around succulent pink prawns with a drop of rich broth.", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "蜜汁叉烧包", nameEn: "Fluffy Steamed Honey Char Siu Buns", category: "Dim Sum", desc: "Snow-white steamed buns blooming open to reveal sweet honey barbecue pork.", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-5",
        name: "Guangzhou Restaurant (Longjin West Branch) / 广州酒家（龙津西路店 · 粤宴西关）",
        city: "Guangzhou",
        cuisine: "Cantonese Morning Tea (老字号粤宴早茶)",
        highlights: ["🥟 鲜虾饺皇", "🥢 爽脆红米肠", "🍗 姜茸爽皮鸡"],
        dishes: "穗城鲜虾饺皇, 爽脆红米肠, 金丝姜茸爽皮鸡",
        address: "📍 No. 102 Longjin West Road, Liwan District (荔湾区龙津西路102号，荔枝湾畔)",
        price: "$$$",
        schedule: "⏰ 08:00—14:00 (Breakfast / Morning Tea)",
        coverImage: "media/dining/guangzhou_restaurant/facade.jpg",
        notes: "Known as 'First Food in Guangzhou' (食在广州第一家). Elegant classical water-garden courtyard setting beside Lychee Bay canal. Scheduled for Day 6 Morning Tea.",
        gallery: [
          {
            title: "西关荔枝湾畔 · 门头外观",
            type: "exterior",
            desc: "广州市荔湾区龙津西路102号，坐落于西关荔枝湾河畔的标志性岭南建筑门头与骑楼石拱门。",
            image: "media/dining/guangzhou_restaurant/facade.jpg"
          },
          {
            title: "西关荔枝湾畔 · 岭南园林庭院与多彩满洲窗 (粤宴西关)",
            type: "interior",
            desc: "岭南园林庭院、锦鲤水景与传统多彩满洲窗，交相辉映，营造雍容典雅的广府园林风致。",
            image: "media/dining/guangzhou_restaurant/courtyard.jpg"
          },
          {
            title: "精致宴会空间与水榭包房 (粤韵芳渡 · 兰桂轩)",
            type: "interior",
            desc: "内设粤韵芳渡、兰桂轩、听月阁四大空间，融合广绣与西关石拱门，打造沉浸式广式茶宴空间。",
            image: "media/dining/guangzhou_restaurant/dining_hall.jpg"
          }
        ],
        menu: [
          {
            nameZh: "穗城鲜虾饺皇",
            nameEn: "Master King Prawn Har Gow",
            category: "经典点心",
            desc: "11道精巧褶纹透薄澄面皮，包裹整颗手剥鲜甜脆弹海虾仁与爽脆竹笋丁，鲜汁充盈。",
            image: "media/dining/guangzhou_restaurant/dish_01_hargow.jpg"
          },
          {
            nameZh: "爽脆红米肠",
            nameEn: "Crispy Red Rice Noodle Rolls",
            category: "经典点心",
            desc: "天然红曲米研磨拉制丝滑拉肠，内层裹以金黄香脆网皮与饱满虾仁，三层质感三重享受。",
            image: "media/dining/guangzhou_restaurant/dish_02_red_rice_roll.jpg"
          },
          {
            nameZh: "豉汁蒸排骨",
            nameEn: "Steamed Spare Ribs in Black Bean Sauce",
            category: "经典点心",
            desc: "精选一字肋排以阳江黑豆豉、蒜蓉腌制，垫以粉糯荔浦芋头高温快蒸，肉质嫩滑多汁。",
            image: "media/dining/guangzhou_restaurant/dish_03_spare_ribs.jpg"
          },
          {
            nameZh: "梅子叉烧包",
            nameEn: "Plum-Glazed BBQ Pork Buns",
            category: "经典点心",
            desc: "松软若棉花般的开花老面馒头，包裹肥瘦相间秘制蜜汁叉烧，融入岭南酸甜乌梅酱生津解腻。",
            image: "media/dining/guangzhou_restaurant/dish_04_char_siu_bun.jpg"
          },
          {
            nameZh: "松露小笼包",
            nameEn: "Black Truffle Xiao Long Bao",
            category: "经典点心",
            desc: "薄如蝉翼的精巧褶皮，内裹浓郁黑松露茸与黑猪肉馅，滚烫一口爆汁、蕈香馥郁。",
            image: "media/dining/guangzhou_restaurant/dish_05_xiao_long_bao.jpg"
          },
          {
            nameZh: "香煎萝卜糕",
            nameEn: "Pan-Fried Daikon Radish Cake",
            category: "经典点心",
            desc: "手切冬头水嫩萝卜丝融和广式皇上皇腊味粒与生晒虾米，慢火两面双煎至外焦里嫩酥香。",
            image: "media/dining/guangzhou_restaurant/dish_06_radish_cake.jpg"
          },
          {
            nameZh: "金丝姜茸爽皮鸡",
            nameEn: "Crispy-Skin Poached Chicken with Ginger Purée",
            category: "特色粤菜",
            desc: "精选180天山林走地鸡浸熟冰镇定型，皮脆肉嫩带皮冻，配上炸至金黄松酥的金丝沙姜与香油姜茸。",
            image: "media/dining/guangzhou_restaurant/dish_07_chicken.jpg"
          },
          {
            nameZh: "黄榄肉汁炖花胶",
            nameEn: "Double-Boiled Fish Maw Soup",
            category: "广府靓汤",
            desc: "深海鳘鱼厚花胶与慢火土猪瘦肉汁清炖4小时，配搭西关古法甘甘苦苦的野山青黄榄，汤清甘润回甜。",
            image: "media/dining/guangzhou_restaurant/dish_08_fish_maw_soup.jpg"
          },
          {
            nameZh: "红葱头淋生菜胆",
            nameEn: "Poached Lettuce with Shallot Oil",
            category: "特色粤菜",
            desc: "清甜无筋的高山罗马生菜心滚水快灼，淋上镬气十足、焦香微甜的现炸红葱头头抽香油。",
            image: "media/dining/guangzhou_restaurant/dish_09_lettuce.jpg"
          },
          {
            nameZh: "燕窝双皮奶",
            nameEn: "Double-Skin Milk Pudding with Bird's Nest",
            category: "广式甜品",
            desc: "顺德纯正水牛奶古法文火慢蒸形成醇厚奶皮，上覆精炖通透的印尼极品金丝官燕窝，奶香醇厚细腻。",
            image: "media/dining/guangzhou_restaurant/dish_10_milk_pudding.jpg"
          }
        ]
      },
      {
        id: "rest-gz-6",
        name: "Yuan Ji Rice Noodle Rolls (源记肠粉)",
        city: "Guangzhou",
        cuisine: "Old Town Street Changfen & Congee",
        highlights: ["Fresh Shrimp Rice Rolls", "Tender Beef Changfen", "Sampan Congee"],
        dishes: "Fresh Shrimp Rice Rolls (鲜虾肠粉), Tender Beef Rice Rolls (牛肉肠粉), Traditional Sampan Congee (艇仔粥)",
        address: "No. 92 Huagui Road, Liwan District",
        price: "$",
        schedule: "08:00 AM – 11:30 PM",
        coverImage: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=800&q=80",
        notes: "Beloved neighborhood Michelin Bib Gourmand street joint. Stone-ground silky smooth rice sheets freshly steamed with hot sweet soy sauce.",
        gallery: [
          { title: "Huagui Road Street Front", type: "exterior", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=1200&q=80", desc: "No-frills traditional noodle shop humming with local residents" },
          { title: "Stone Grinder & Steamers", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Fresh rice batter pouring continuously over cloth steamers" }
        ],
        menu: [
          { nameZh: "布拉鲜虾牛肉双拼肠", nameEn: "Cloth-Pulled Shrimp & Beef Rice Rolls", category: "Dim Sum", desc: "Paper-thin rice noodle sheets pulled off steaming cloth, folded with beef and fresh prawns.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "荔湾传统艇仔粥", nameEn: "Traditional Liwan Sampan Congee", category: "Cantonese Main", desc: "Silky rice porridge simmered with cuttlefish, jellyfish slices, roasted peanuts, and scallions.", image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-7",
        name: "Chua Lam's Dim Sum (蔡澜港式点心)",
        city: "Guangzhou",
        cuisine: "Modern Gourmet Hong Kong Dim Sum",
        highlights: ["Crispy Hawthorn BBQ Pork Buns", "Crab Egg White Dumplings", "Lava Custard Buns"],
        dishes: "Crispy Hawthorn BBQ Pork Buns (酥皮山楂叉烧包), Egg White & Shrimp Dumplings (赛螃蟹凤眼饺), Lava Custard Buns (流心奶黄包)",
        address: "Parc Central / TeeMall area, Tianhe CBD",
        price: "$$",
        schedule: "10:00 AM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=800&q=80",
        notes: "Created by legendary food critic Chua Lam. Famous for combining sweet-and-sour candied hawthorn into baked crispy BBQ pork buns.",
        gallery: [
          { title: "Parc Central CBD Entrance", type: "exterior", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=1200&q=80", desc: "Modern architectural mall setting with bright wooden accents" },
          { title: "Open Dim Sum Craft Kitchen", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Chefs rolling and baking signature crispy pastry buns to order" }
        ],
        menu: [
          { nameZh: "酥皮山楂叉烧包", nameEn: "Crispy Hawthorn BBQ Pork Buns", category: "Dim Sum", desc: "Golden crumbly pastry crust filled with savory char siu balanced by tangy candied mountain hawthorn.", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "赛螃蟹凤眼饺", nameEn: "Egg White & Shrimp Phoenix Eye Dumplings", category: "Dim Sum", desc: "Silky wok-whipped egg whites folded with tender shrimp meat resembling fresh crab flesh.", image: "https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "金沙流心奶黄包", nameEn: "Molten Salted Egg Lava Custard Buns", category: "Dim Sum", desc: "Piping-hot yellow bun that oozes rich sweet and savory salted duck egg yolk lava.", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-8",
        name: "Min Ji Claypot Rice (民记煲仔饭)",
        city: "Guangzhou",
        cuisine: "Traditional Charcoal Claypot Rice",
        highlights: ["Cured Sausage Claypot Rice", "Tender Pork Rib Rice", "Raw Egg & Minced Beef"],
        dishes: "Cured Sausage Claypot Rice (腊味煲仔饭), Pork Rib Rice (排骨煲仔饭), Raw Egg & Minced Beef Claypot Rice (窝蛋牛肉煲仔饭)",
        address: "Yuexiu South Road, near Beijing Road core",
        price: "$",
        schedule: "10:30 AM – 08:30 PM",
        coverImage: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=800&q=80",
        notes: "Legendary 40-year claypot stalwart. Cooked to order over raw heat with an irresistible crispy golden bottom rice crust (锅巴).",
        gallery: [
          { title: "Yuexiu South Road Classic Shophouse", type: "exterior", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=1200&q=80", desc: "Time-honored Old Guangzhou storefront with aroma of sizzling sausage" },
          { title: "Roaring Charcoal Claypot Rows", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Dozens of claypots sizzling together with sweet soy sauce drizzles" }
        ],
        menu: [
          { nameZh: "广式皇上皇腊味煲仔饭", nameEn: "Cantonese Cured Sausage Claypot Rice", category: "Cantonese Main", desc: "Wind-dried lap cheong sausage rendering its sweet wine fat deep into crispy-bottomed jasmine rice.", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "窝蛋牛肉煲仔饭", nameEn: "Raw Farm Egg & Tender Beef Claypot Rice", category: "Cantonese Main", desc: "Tender beef slices topped with a fresh orange egg yolk mixed vigorously into smoking hot rice.", image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-9",
        name: "Ming Shao Chicken Specialty Restaurant (铭少食鸡专门店)",
        city: "Guangzhou",
        cuisine: "Guangdong Free-Range Chicken Feast",
        highlights: ["Signature Hand-Shredded Chicken", "Fragrant Soy Sauce Chicken", "Stir-Fried Chicken Giblets"],
        dishes: "Signature Hand-Shredded Chicken (招牌鸡), Fragrant Soy Sauce Chicken (豉油鸡), Stir-Fried Chicken Giblets (鸡杂)",
        address: "Guangzhou downtown dining core",
        price: "$$",
        schedule: "11:00 AM – 02:30 PM, 05:00 PM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
        notes: "Revered local saying: 'No banquet without chicken' (无鸡不成宴). Tender silky chicken skins and rich natural meat sweetness.",
        gallery: [
          { title: "Ming Shao Restaurant Front", type: "exterior", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=1200&q=80", desc: "Vibrant yellow poultry emblem showcasing Cantonese chicken mastery" },
          { title: "Carving & Chopping Station", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Master butcher slicing golden free-range chickens with swift cleaver strokes" }
        ],
        menu: [
          { nameZh: "铭少招牌金牌手撕鸡", nameEn: "Signature Golden Hand-Shredded Chicken", category: "Cantonese Main", desc: "Free-range pasture chicken hand-shredded with crispy skins, sesame oil, and crunchy peanuts.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "头抽慢火豉油鸡", nameEn: "First-Draw Soy Sauce Poached Chicken", category: "Cantonese Main", desc: "Simmered in premium aged sweet soy with star anise, rock sugar, and ginger slices.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-gz-10",
        name: "Li Fang Four Seasons Dessert Shop (荔芳四季糖水店)",
        city: "Guangzhou",
        cuisine: "Authentic Cantonese Traditional Tong Sui",
        highlights: ["Mango Pomelo Sago", "Shunde Double-Skin Milk", "Aged Tangerine Peel Red Bean"],
        dishes: "Mango Pomelo Sago (杨枝甘露), Shunde Double-Skin Milk (双皮奶), Aged Tangerine Peel Red Bean Soup (陈皮红豆沙)",
        address: "Xihua Road Food Street, Liwan District",
        price: "$",
        schedule: "11:30 AM – 11:30 PM",
        coverImage: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80",
        notes: "Guangzhou dessert institution on bustling Xihua food street. Made with genuine 15-year Xinhui dried tangerine peel and rich buffalo milk.",
        gallery: [
          { title: "Xihua Road Nostalgic Shopfront", type: "exterior", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=1200&q=80", desc: "Quaint tile-lined shop on the famous foodie strip of Xihua Road" },
          { title: "Simmering Sweet Soup Pots", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Earthenware pots slow-cooking red bean and lotus seed dessert soups" }
        ],
        menu: [
          { nameZh: "新会陈皮十年红豆沙", nameEn: "10-Year Aged Tangerine Peel Red Bean Soup", category: "Dessert", desc: "Silky sand-textured red bean broth scented with precious citrus peel oils.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "顺德手造双皮奶", nameEn: "Shunde Handmade Double-Skin Buffalo Milk", category: "Dessert", desc: "Rich and custard-like curd produced with local water buffalo milk.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "浓醇金芒杨枝甘露", nameEn: "Alphonso Mango Pomelo Sago", category: "Dessert", desc: "Fresh sweet mango purée, coconut milk, chewy tapioca pearls, and ruby pomelo pulps.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-5",
        name: "Qingyuan Mountain Farmhouse (古龙峡土菜馆)",
        city: "Qingyuan",
        cuisine: "Mountain Farmhouse Feasts",
        highlights: ["Qingyuan Free-Range White Cut Chicken", "Mountain Spring Tofu", "Wild Bamboo Shoots"],
        dishes: "Authentic Qingyuan Free-Range White Cut Chicken (清远正宗白切鸡), mountain spring tofu, bamboo shoots",
        address: "Base of Gulong Gorge scenic entry, Qingyuan",
        price: "$$",
        schedule: "11:00 AM – 08:30 PM",
        coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
        notes: "Qingyuan chicken is world-famous across Guangdong for its tender texture and natural sweetness.",
        gallery: [
          { title: "Gulong Gorge Mountain Gate Entry", type: "exterior", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80", desc: "Breathtaking canyon backdrop right below cascading waterfall streams" },
          { title: "Rustic Riverside Farmhouse Deck", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Bamboo dining tables beside rushing mountain streams" }
        ],
        menu: [
          { nameZh: "正宗清远走地白切鸡", nameEn: "Authentic Qingyuan Free-Range White Cut Chicken", category: "Cantonese Main", desc: "Tender mountain chicken poached in fragrant herb court-bouillon served with scallion-ginger oil.", image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "古龙峡山泉水豆腐", nameEn: "Gulong Mountain Spring Water Tofu", category: "Cantonese Main", desc: "Handcrafted tofu curd made using pristine canyon spring water, pan-seared to golden crust.", image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-6",
        name: "Baheli Chaoshan Beef Hotpot (八合里牛肉火锅)",
        city: "Shenzhen",
        cuisine: "Chaoshan Fresh Beef Hotpot",
        highlights: ["Fresh Hand-Sliced Beef Brisket", "Springy Hand-Pounded Meatballs", "Signature Satay Sauce"],
        dishes: "Freshly sliced beef brisket, hand-pounded beef meatballs, satay dip",
        address: "Nanshan District, near Nantou / Tech Park",
        price: "$$",
        schedule: "11:00 AM – 11:00 PM",
        coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        notes: "Beef slaughtered and delivered within 4 hours. Clear broth brings out pristine beef tenderness.",
        gallery: [
          { title: "Nanshan Tech Park Restaurant Front", type: "exterior", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", desc: "Spacious contemporary hotpot venue near Shenzhen High-Tech Zone" },
          { title: "Glass Window Beef Butchery Counter", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Master carvers thinly slicing prime cuts of yellow cattle beef to order" }
        ],
        menu: [
          { nameZh: "手切鲜吊龙牛肉", nameEn: "Hand-Sliced Ribeye Beef (Diao Long)", category: "Cantonese Main", desc: "Prime rib-eye slice that flash-blanches to butter tenderness in clear beef bone broth in 8 seconds.", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "纯正手打鲜牛肉丸", nameEn: "Hand-Pounded Chaoshan Beef Meatballs", category: "Cantonese Main", desc: "Beaten rhythmically with heavy iron rods for ultimate bouncy crunch and rich beef juices.", image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-7",
        name: "Kam Wah Cafe (金华冰厅)",
        city: "Hong Kong",
        cuisine: "Hong Kong Cha Chaan Teng",
        highlights: ["Award-Winning Pineapple Butter Bun", "Silk Stocking Milk Tea", "Fresh Egg Tarts"],
        dishes: "Award-winning Crispy Pineapple Bun with slab of cold butter (菠萝油), Silk Stocking Milk Tea, Egg Tart",
        address: "No. 47 Bute Street, Prince Edward / Mong Kok (5 mins walk from Royal Plaza)",
        price: "$",
        schedule: "06:30 AM – 09:00 PM",
        coverImage: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80",
        notes: "Crowned champion pineapple buns of Hong Kong. Piping hot crust with frozen butter melts instantly.",
        gallery: [
          { title: "Bute Street Mong Kok Neon Shophouse", type: "exterior", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1200&q=80", desc: "Classic neon sign and bustling Mong Kok street scene" },
          { title: "Cozy Green Booth Dining Room", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Nostalgic mosaic tiled walls and traditional tea diner booths" }
        ],
        menu: [
          { nameZh: "得奖金牌冰火菠萝油", nameEn: "Award-Winning Crispy Pineapple Butter Bun", category: "Dim Sum", desc: "Fresh-out-of-oven piping hot crumbly sweet bun split with a thick frozen slab of Anchor butter.", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "驰名丝袜冻奶茶", nameEn: "Chilled Hong Kong Silk Stocking Milk Tea", category: "Dessert", desc: "Strong Ceylon black tea blend hand-strained through cloth sack and whipped with Black & White milk.", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=600&q=80" }
        ]
      },
      {
        id: "rest-8",
        name: "Tim Ho Wan (添好运 • 旺角)",
        city: "Hong Kong",
        cuisine: "Michelin Dim Sum",
        highlights: ["Baked BBQ Pork Buns", "Pan-Fried Turnip Cake", "Steamed Rice Rolls"],
        dishes: "Baked BBQ Pork Buns (酥皮叉烧包), pan-fried turnip cake, steamed rice rolls",
        address: "Olympian City / Mong Kok area",
        price: "$$",
        schedule: "10:00 AM – 09:30 PM",
        coverImage: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
        notes: "Renowned as the world's most accessible Michelin-starred dim sum.",
        gallery: [
          { title: "Mong Kok Modern Hall", type: "exterior", image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80", desc: "Clean modern facade welcomes dim sum enthusiasts from around the world" },
          { title: "Bamboo Steamer Kitchen Bar", type: "interior", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80", desc: "Tiered bamboo steamers releasing clouds of fragrant sweet dough vapor" }
        ],
        menu: [
          { nameZh: "酥皮焗叉烧包", nameEn: "Baked BBQ Pork Buns (3 Pcs)", category: "Dim Sum", desc: "Signature golden crumbly sugar crust encasing sweet barbecue pork and savory sauce.", image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=600&q=80" },
          { nameZh: "香煎萝卜糕", nameEn: "Pan-Fried Turnip Cake", category: "Dim Sum", desc: "Crispy browned surface with moist interior loaded with radish shreds and Chinese bacon.", image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80" }
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
        sections: [
          {
            title: 'Flight Leg 1 (CX714)',
            items: [
              'Origin: Singapore Changi Airport (SIN Terminal 4)',
              'Departure: 01:25 AM SGT',
              'Arrival: Hong Kong International Airport (HKG Terminal 1) at 05:20 AM HKT',
              'Aircraft: Airbus A330-300 Widebody (2-4-2 twin aisle)',
              'Seats Selected: 47H, 47K, 48H, 48K (Family window & aisle cluster)'
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
            title: 'Flight Leg 2 (CX982)',
            items: [
              'Departure: HKG T1 at 07:50 AM HKT',
              'Arrival: Guangzhou Baiyun International Airport (CAN) at 08:55 AM CST',
              'Baggage allowance: 23kg checked + 7kg cabin baggage per passenger'
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
        sections: [
          {
            title: 'Flight Information',
            items: [
              'Flight Number: Cathay Pacific CX657',
              'Departure: Hong Kong International Airport (HKG Terminal 1) at 16:05 HKT',
              'Arrival: Singapore Changi Airport (SIN Terminal 4) at 20:05 SGT',
              'Aircraft: Boeing 777-300 Widebody',
              'Baggage: 23kg checked + 7kg cabin baggage per passenger'
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
