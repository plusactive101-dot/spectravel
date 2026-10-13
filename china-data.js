// SPECTRAVEL - China 2026 Greater Bay Area Expedition Repository

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
        city: "panyu",
        region: "Guangzhou (Chimelong)",
        badgeColor: "bg-emerald-500",
        hotel: "Chimelong Hotel (Guangzhou)",
        transport: "Short Didi transfer (~15 mins) from Mehood to Chimelong Hotel",
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
        city: "panyu",
        region: "Guangzhou (Chimelong)",
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
        region: "Guangzhou (Heritage & Culture)",
        badgeColor: "bg-purple-500",
        hotel: "Atour Hotel Dongshankou (Guangzhou)",
        transport: "Guangzhou Metro Line 1 / 6 & Didi",
        foodTip: "Huangpu Ancient Port ginger milk & traditional Cantonese treats",
        activities: [
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
        dishes: "Water-buffalo ginger milk curd (沙湾水牛奶姜撞奶), egg rolls, double-skin milk",
        address: "Shawan Ancient Town Scenic Area, Panyu",
        price: "$",
        notes: "Historic dessert house famous for hot curd formed right at your table with freshly grated ginger juice."
      },
      {
        id: "rest-2",
        name: "Bingsheng Taste (炳胜品味 • 时代E-PARK店)",
        city: "Chimelong",
        cuisine: "Michelin Cantonese",
        dishes: "Signature Char Siu (秘制黑叉烧), Crispy Tofu, Pineapple Buns",
        address: "Building 2, Times E-PARK, No. 290 Hanxi Ave East (7 mins Didi from Chimelong Hotel)",
        price: "$$$",
        notes: "Far superior in quality and price compared to marked-up theme park restaurants. Take Didi outside resort gate."
      },
      {
        id: "rest-3",
        name: "Panxi Restaurant (泮溪酒家)",
        city: "Guangzhou",
        cuisine: "Classic Lingnan Yum Cha",
        dishes: "Har Gow (Crystal Shrimp Dumplings), Siu Mai, Water Chestnut Cake",
        address: "No. 151 Longjin West Road, Liwan District (Beside Liwan Lake)",
        price: "$$",
        notes: "Legendary garden restaurant with traditional gazebos and koi ponds. Arrive before 9:30 AM for morning tea table."
      },
      {
        id: "rest-4",
        name: "Dafo Temple Vegetarian House (大佛寺素食阁)",
        city: "Guangzhou",
        cuisine: "Buddhist Vegetarian Buffet",
        dishes: "Mushroom stew, vegetarian dim sum, lotus root soup",
        address: "Inside Dafo Temple, Beijing Road, Yuexiu District",
        price: "$$",
        notes: "Dine inside the illuminated golden pagoda complex right beside Beijing Road pedestrian shopping street."
      },
      {
        id: "rest-5",
        name: "Qingyuan Mountain Farmhouse (古龙峡土菜馆)",
        city: "Qingyuan",
        cuisine: "Mountain Farmhouse Feasts",
        dishes: "Authentic Qingyuan Free-Range White Cut Chicken (清远正宗白切鸡), mountain spring tofu, bamboo shoots",
        address: "Base of Gulong Gorge scenic entry, Qingyuan",
        price: "$$",
        notes: "Qingyuan chicken is world-famous across Guangdong for its tender texture and natural sweetness."
      },
      {
        id: "rest-6",
        name: "Baheli Chaoshan Beef Hotpot (八合里牛肉火锅)",
        city: "Shenzhen",
        cuisine: "Chaoshan Fresh Beef Hotpot",
        dishes: "Freshly sliced beef brisket, hand-pounded beef meatballs, satay dip",
        address: "Nanshan District, near Nantou / Tech Park",
        price: "$$",
        notes: "Beef slaughtered and delivered within 4 hours. Clear broth brings out pristine beef tenderness."
      },
      {
        id: "rest-7",
        name: "Kam Wah Cafe (金华冰厅)",
        city: "Hong Kong",
        cuisine: "Hong Kong Cha Chaan Teng",
        dishes: "Award-winning Crispy Pineapple Bun with slab of cold butter (菠萝油), Silk Stocking Milk Tea, Egg Tart",
        address: "No. 47 Bute Street, Prince Edward / Mong Kok (5 mins walk from Royal Plaza)",
        price: "$",
        notes: "Crowned champion pineapple buns of Hong Kong. Piping hot crust with frozen butter melts instantly."
      },
      {
        id: "rest-8",
        name: "Tim Ho Wan (添好运 • 旺角)",
        city: "Hong Kong",
        cuisine: "Michelin Dim Sum",
        dishes: "Baked BBQ Pork Buns (酥皮叉烧包), pan-fried turnip cake, steamed rice rolls",
        address: "Olympian City / Mong Kok area",
        price: "$$",
        notes: "Renowned as the world's most accessible Michelin-starred dim sum."
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
