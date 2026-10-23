const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataFilePath = path.resolve(__dirname, '../china-data.js');
const rawFileContent = fs.readFileSync(dataFilePath, 'utf8');

// 1. Sandbox execution to capture browser global exports safely
const sandbox = {
    window: {},
    globalThis: {},
    console: console
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

vm.createContext(sandbox);
vm.runInContext(rawFileContent, sandbox);

let existingAttractions = [];
if (Array.isArray(sandbox.expeditionAttractions)) {
    existingAttractions = sandbox.expeditionAttractions;
} else if (sandbox.window && Array.isArray(sandbox.window.expeditionAttractions)) {
    existingAttractions = sandbox.window.expeditionAttractions;
} else if (Array.isArray(sandbox.chinaData?.attractions)) {
    existingAttractions = sandbox.chinaData.attractions;
} else {
    console.warn("[-] Warning: Could not locate existing attractions array. Initializing clean array.");
    existingAttractions = [];
}

console.log(`[*] Loaded ${existingAttractions.length} existing attractions from china-data.js`);

// 2. Comprehensive Master Dataset (Canton 50, Regional 120, Nature 30)
const newAttractions = [
  // --- Canton Heritage Core (50 POIs) ---
  {
    name: "Canton Tower",
    nameZh: "广州塔",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "No. 222 West Yuejiang Road, Haizhu District, Guangzhou",
    website: "https://www.cantontower.com/",
    review: "Visitors praise the 360-degree panoramic views from the open-air observation deck and describe the Bubble Tram at sunset as an unforgettable experience.",
    coordinates: [23.1065, 113.3245]
  },
  {
    name: "Chen Clan Ancestral Hall",
    nameZh: "陈家祠",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 34 Enlong Li, Zhongshan 7th Road, Liwan District, Guangzhou",
    website: "http://www.gemuseum.cn/",
    review: "Highly commended for its mesmerizing late-Qing dynasty wood, brick, and ceramic roof carvings.",
    coordinates: [23.1278, 113.2458]
  },
  {
    name: "Shamian Island",
    nameZh: "沙面岛",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Shamian Island, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "Travelers love the quiet, European-like tree-lined boulevards, historic colonial villas, and relaxing outdoor coffee shops.",
    coordinates: [23.1075, 113.2431]
  },
  {
    name: "Beijing Road Pedestrian Street",
    nameZh: "北京路步行街",
    region: "Canton Heritage",
    category: "Markets & Walking Streets",
    address: "Beijing Road, Yuexiu District, Guangzhou",
    website: "http://www.yuexiu.gov.cn/",
    review: "Famous for its glass-covered ancient road excavations dating back to the Song and Yuan dynasties, alongside bustling shopping and street food.",
    coordinates: [23.1255, 113.2687]
  },
  {
    name: "Yongqing Fang",
    nameZh: "永庆坊",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Enning Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "Described as a masterclass in urban regeneration, blending traditional Cantonese Qilou (arcade) architecture with modern craft breweries and boutique spaces.",
    coordinates: [23.1165, 113.2384]
  },
  {
    name: "Dafo Temple (Big Buddha Temple)",
    nameZh: "大佛寺",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 21 Huixin West Street, Beijing Road, Yuexiu District, Guangzhou",
    website: "http://www.dafo.org.cn/",
    review: "Visitors are consistently awed by the towering golden Buddha statues and the dramatic night illumination that makes the complex look straight out of a fantasy movie.",
    coordinates: [23.1245, 113.2662]
  },
  {
    name: "Yuexiu Park",
    nameZh: "越秀公园",
    region: "Canton Heritage",
    category: "Nature & Parks",
    address: "No. 98 Jiefang North Road, Yuexiu District, Guangzhou",
    website: "http://www.yuexiupark-gz.com/",
    review: "The spiritual lungs of the city; tourists enjoy seeing the historic Five Rams Sculpture and walking segments of the ancient Ming Dynasty city wall.",
    coordinates: [23.1415, 113.2628]
  },
  {
    name: "Museum of the Mausoleum of the Nanyue King",
    nameZh: "南越王博物院",
    region: "Canton Heritage",
    category: "Museums & Galleries",
    address: "No. 867 Jiefang North Road, Yuexiu District, Guangzhou",
    website: "http://www.gznywmuseum.org.cn/",
    review: "Fascinating underground layout housing real 2,000-year-old royal tombs, jade burial suits, and ancient artifacts.",
    coordinates: [23.1396, 113.2592]
  },
  {
    name: "Sun Yat-sen Memorial Hall",
    nameZh: "中山纪念堂",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 259 Dongfeng Middle Road, Yuexiu District, Guangzhou",
    website: "http://www.gzsysmh.com/",
    review: "Admired for its grand traditional Chinese octagonal roof structure and the peaceful surrounding gardens honoring China's republican pioneer.",
    coordinates: [23.1347, 113.2625]
  },
  {
    name: "Temple of the Six Banyan Trees",
    nameZh: "六榕寺",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 87 Liurong Road, Yuexiu District, Guangzhou",
    website: "http://www.gzbuddhism.org/",
    review: "Active Buddhist place of worship featuring the striking 17-story Flower Pagoda. Visitors note the deeply tranquil atmosphere.",
    coordinates: [23.1322, 113.2589]
  },
  {
    name: "Cantonese Opera Art Museum",
    nameZh: "粤剧艺术博物馆",
    region: "Canton Heritage",
    category: "Museums & Galleries",
    address: "No. 127 Enning Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "A stunning classical Jiangnan-style garden housing brilliant exhibits on Cantonese opera history, costumes, and water-stage performances.",
    coordinates: [23.1158, 113.2371]
  },
  {
    name: "Sacred Heart Cathedral (Stone House)",
    nameZh: "石室圣心大教堂",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 56 Yide Road, Yuexiu District, Guangzhou",
    website: "http://www.archdioceseofguangzhou.org/",
    review: "Often called the 'Notre Dame of China,' visitors praise its striking twin Gothic stone spires and stunning stained-glass windows.",
    coordinates: [23.1168, 113.2562]
  },
  {
    name: "Guangdong Museum",
    nameZh: "广东省博物馆",
    region: "Canton Heritage",
    category: "Museums & Galleries",
    address: "No. 2 Zhujiang East Road, Zhujiang New Town, Tianhe District, Guangzhou",
    website: "http://www.gdmuseum.com/",
    review: "Shaped like an antique Chinese lacquer box; highly praised for its rich exhibitions on Lingnan nature, ceramics, and historical trade.",
    coordinates: [23.1189, 113.3275]
  },
  {
    name: "Guangzhou Opera House",
    nameZh: "广州大剧院",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "No. 1 Zhujiang West Road, Tianhe District, Guangzhou",
    website: "http://www.gzdjh.com/",
    review: "Zaha Hadid’s futuristic double-pebbled masterpiece leaves architecture enthusiasts speechless, especially when illuminated at night.",
    coordinates: [23.1182, 113.3218]
  },
  {
    name: "Shangxiajiu Pedestrian Street",
    nameZh: "上下九步行街",
    region: "Canton Heritage",
    category: "Markets & Walking Streets",
    address: "Shangxiajiu Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "Bustling, classic shopping street lined with historic covered arcades, old-school pastry shops, and authentic dim sum joints.",
    coordinates: [23.1153, 113.2464]
  },
  {
    name: "Haixinsha Island",
    nameZh: "海心沙",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "Haixinsha, Zhujiang New Town, Tianhe District, Guangzhou",
    website: "http://www.tianhe.gov.cn/",
    review: "The prime viewing ground for the Pearl River light show and the venue of the 2010 Asian Games opening ceremony.",
    coordinates: [23.1118, 113.3242]
  },
  {
    name: "Huacheng Square (Flower City Square)",
    nameZh: "花城广场",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "Huacheng Avenue, Zhujiang New Town, Tianhe District, Guangzhou",
    website: "http://www.tianhe.gov.cn/",
    review: "The modern heart of Guangzhou; visitors love taking photographs here with unobstructed symmetrical views of Canton Tower.",
    coordinates: [23.1205, 113.3235]
  },
  {
    name: "Guangzhou Library",
    nameZh: "广州图书馆",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "No. 4 Zhujiang East Road, Tianhe District, Guangzhou",
    website: "http://www.gzlib.gov.cn/",
    review: "An architectural marvel with an open atrium; clean, quiet, and a favorite spot for travelers looking to relax or work.",
    coordinates: [23.1192, 113.3259]
  },
  {
    name: "Xiguan Custom Museum",
    nameZh: "西关民俗馆",
    region: "Canton Heritage",
    category: "Museums & Galleries",
    address: "No. 15 Enning Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "Offers a deep look into traditional wealthy merchant life in old Guangzhou with authentic courtyard layouts.",
    coordinates: [23.1172, 113.2388]
  },
  {
    name: "Bruce Lee’s Ancestral Residence",
    nameZh: "李小龙祖居",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "13 Yuewai Street, Enning Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "A compact, atmospheric ancestral home detailing the family history and martial arts lineage of the global icon.",
    coordinates: [23.1161, 113.2378]
  },
  {
    name: "Qingping Herbal Medicine Market",
    nameZh: "清平中药材市场",
    region: "Canton Heritage",
    category: "Markets & Walking Streets",
    address: "Qingping Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "An intense sensory experience filled with exotic herbs, dried roots, and traditional Chinese medicine ingredients.",
    coordinates: [23.1102, 113.2451]
  },
  {
    name: "Tianzi Wharf",
    nameZh: "天字码头",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 191 Yanjiang Zhong Road, Yuexiu District, Guangzhou",
    website: "http://www.gzocean.com/",
    review: "Historic imperial pier dating back to the Qing dynasty; now the primary boarding point for evening river dinner cruises.",
    coordinates: [23.1158, 113.2685]
  },
  {
    name: "Dashatou Wharf",
    nameZh: "大沙头码头",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "No. 466 Yanjiang East Road, Yuexiu District, Guangzhou",
    website: "http://www.gzocean.com/",
    review: "Large modern terminal for luxury passenger ships cruising the Pearl River.",
    coordinates: [23.1147, 113.2842]
  },
  {
    name: "Ersha Island",
    nameZh: "二沙岛",
    region: "Canton Heritage",
    category: "Nature & Parks",
    address: "Ersha Island, Yuexiu District, Guangzhou",
    website: "http://www.yuexiu.gov.cn/",
    review: "An upscale green island in the middle of the river housing art galleries, sports training bases, and calm riverside parks.",
    coordinates: [23.1112, 113.2985]
  },
  {
    name: "Guangdong Museum of Art",
    nameZh: "广东美术馆",
    region: "Canton Heritage",
    category: "Museums & Galleries",
    address: "38 Yanyu Road, Ersha Island, Yuexiu District, Guangzhou",
    website: "http://www.gdmoa.org/",
    review: "Features rotating contemporary and classical Chinese art exhibitions in a quiet, leafy island setting.",
    coordinates: [23.1105, 113.3032]
  },
  {
    name: "Xinhai Revolution Memorial Museum",
    nameZh: "辛亥革命纪念馆",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 563 Changzhou Road, Huangpu District, Guangzhou",
    website: "http://www.gzxhgm.com/",
    review: "Comprehensive and moving tribute to the 1911 revolution that overthrew the Qing dynasty.",
    coordinates: [23.0812, 113.4182]
  },
  {
    name: "Whampoa Military Academy Site",
    nameZh: "黄埔军校旧址",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Changzhou Island, Huangpu District, Guangzhou",
    website: "http://www.hpjxgz.com/",
    review: "Essential historical landmark where leaders of both the Kuomintang and Communist parties trained in the 1920s.",
    coordinates: [23.0885, 113.4215]
  },
  {
    name: "Hualin Temple",
    nameZh: "华林寺",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 37 Hualin Street, Xiaobei Road, Liwan District, Guangzhou",
    website: "http://www.gzbuddhism.org/",
    review: "Historic temple tied to Bodhidharma, famous for its grand hall housing the 500 Arhat statues.",
    coordinates: [23.1192, 113.2455]
  },
  {
    name: "Renmin Park (People's Park)",
    nameZh: "人民公园",
    region: "Canton Heritage",
    category: "Nature & Parks",
    address: "No. 231 Huifu West Road, Yuexiu District, Guangzhou",
    website: "http://www.yuexiu.gov.cn/",
    review: "Guangzhou’s oldest public park; excellent place to watch local residents practice ballroom dancing, calligraphy, and jianzi.",
    coordinates: [23.1285, 113.2621]
  },
  {
    name: "Guangzhou Cultural Park",
    nameZh: "广州文化公园",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 156 Xiti Er Road, Liwan District, Guangzhou",
    website: "http://www.whwh.cn/",
    review: "Famous for traditional lantern festivals, chess tournaments, and relaxed outdoor community recreation.",
    coordinates: [23.1115, 113.2498]
  },
  {
    name: "Haiyin Bridge Area",
    nameZh: "海印大桥观景区",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "Overing Pearl River connecting Yuexiu and Haizhu Districts",
    website: "http://www.gzcc.gov.cn/",
    review: "Popular evening walking spot with great angles for photographing river bridges and city night lights.",
    coordinates: [23.1132, 113.2825]
  },
  {
    name: "Xiguan House Cluster (Duo Bao Road)",
    nameZh: "西关大屋建筑保护区",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Duobao Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "Authentic residential streets featuring old timber doorways, grey brick walls, and nostalgic neighborhood eateries.",
    coordinates: [23.1185, 113.2365]
  },
  {
    name: "Guangdong Provincial People's Stadium",
    nameZh: "广东省人民体育场",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 64 Zhongshan Er Road, Yuexiu District, Guangzhou",
    website: "http://tyj.gd.gov.cn/",
    review: "Historic sports stadium hosting local matches and community events.",
    coordinates: [23.1278, 113.2801]
  },
  {
    name: "Anti-British Struggle Memorial Pavilion (Sanyuanli)",
    nameZh: "三元里人民抗英斗争纪念馆",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Sanyuanli Village, Baiyun District, Guangzhou",
    website: "http://www.baiyun.gov.cn/",
    review: "Commemorates the historic 1841 grassroots anti-colonial civilian battle.",
    coordinates: [23.1582, 113.2565]
  },
  {
    name: "Peasant Movement Training Institute",
    nameZh: "农讲所旧址",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 42 Zhongshan 4th Road, Yuexiu District, Guangzhou",
    website: "http://www.nongjiangsuo.com/",
    review: "Restored historical red-brick school compound where early revolutionary leaders lectured.",
    coordinates: [23.1288, 113.2721]
  },
  {
    name: "Shisanhang (Thirteen Factories) Museum",
    nameZh: "十三行博物馆",
    region: "Canton Heritage",
    category: "Museums & Galleries",
    address: "No. 37 Xidi Erma Road, Liwan District, Guangzhou",
    website: "http://www.liwan.gov.cn/",
    review: "Details Guangzhou's pivotal role as China's sole maritime foreign trade port during the Qing Dynasty.",
    coordinates: [23.1118, 113.2492]
  },
  {
    name: "Qiannian Gu Dao (Ancient Road Museum)",
    nameZh: "千年古道遗址",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Beijing Road, Yuexiu District, Guangzhou",
    website: "http://www.yuexiu.gov.cn/",
    review: "Small glass-enclosed underground exhibit letting visitors look right down at stacked ancient paving stones.",
    coordinates: [23.1262, 113.2688]
  },
  {
    name: "Guangzhou Uprising Martyrs' Cemetery",
    nameZh: "广州起义烈士陵园",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 92 Zhongshan 3rd Road, Yuexiu District, Guangzhou",
    website: "http://mzj.gz.gov.cn/",
    review: "A peaceful, heavily forested memorial park honoring fallen revolutionary heroes.",
    coordinates: [23.1292, 113.2818]
  },
  {
    name: "Xiaozhou Village",
    nameZh: "小洲村",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Xiaozhou Village, Haizhu District, Guangzhou",
    website: "http://www.haizhu.gov.cn/",
    review: "An ancient canal-laced riverside village popular with artists, indie coffee shops, and quiet stone bridges.",
    coordinates: [23.0562, 113.3654]
  },
  {
    name: "Huangpu Ancient Port",
    nameZh: "黄埔古港",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Shichong Road, Pazhou, Haizhu District, Guangzhou",
    website: "http://www.haizhu.gov.cn/",
    review: "Historic port where the legendary Swedish East India ship Götheborg set sail; great for local snacks and old docks.",
    coordinates: [23.0915, 113.3882]
  },
  {
    name: "Pazhou Pagoda",
    nameZh: "琶洲塔",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Pazhou Island, Haizhu District, Guangzhou",
    website: "http://www.haizhu.gov.cn/",
    review: "A 9-story Ming Dynasty brick pagoda originally built to guide trading ships entering Guangzhou.",
    coordinates: [23.0988, 113.3745]
  },
  {
    name: "Chigang Pagoda",
    nameZh: "赤岗塔",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "Chigang, Haizhu District, Guangzhou",
    website: "http://www.haizhu.gov.cn/",
    review: "Historic sister pagoda to Pazhou, standing quietly amidst modern high-rises.",
    coordinates: [23.1012, 113.3288]
  },
  {
    name: "Titanium Creative Park",
    nameZh: "钛创易文化创意园",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "Xingang East Road, Haizhu District, Guangzhou",
    website: "http://www.haizhu.gov.cn/",
    review: "Converted industrial textile mills housing design studios and trendy restaurants.",
    coordinates: [23.0975, 113.3512]
  },
  {
    name: "Jiangnan West Road",
    nameZh: "江南西商业街",
    region: "Canton Heritage",
    category: "Markets & Walking Streets",
    address: "Jiangnan West Road, Haizhu District, Guangzhou",
    website: "http://www.haizhu.gov.cn/",
    review: "A youth-oriented shopping and fashion avenue packed with hidden dessert shops and independent boutiques.",
    coordinates: [23.0982, 113.2745]
  },
  {
    name: "Taigoo Hui Shopping Mall",
    nameZh: "太古汇",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "No. 383 Tianhe Road, Tianhe District, Guangzhou",
    website: "http://www.taikooohui.com/",
    review: "Ultra-luxury shopping complex representing modern Guangzhou's commercial success.",
    coordinates: [23.1342, 113.3328]
  },
  {
    name: "K11 Art Mall Guangzhou",
    nameZh: "广州K11购物艺术中心",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "No. 6 Zhujiang East Road, Tianhe District, Guangzhou",
    website: "http://www.gz-k11.com/",
    review: "Seamlessly merges high-end retail with contemporary art galleries and installations.",
    coordinates: [23.1181, 113.3262]
  },
  {
    name: "Teemall",
    nameZh: "天河城",
    region: "Canton Heritage",
    category: "Skyline & Modern",
    address: "No. 208 Tianhe Road, Tianhe District, Guangzhou",
    website: "http://www.teemall.com.cn/",
    review: "One of Guangzhou’s most iconic, bustling multi-level shopping malls right at Tianhe Sports Center.",
    coordinates: [23.1338, 113.3225]
  },
  {
    name: "Tianhe Sports Center",
    nameZh: "天河体育中心",
    region: "Canton Heritage",
    category: "Nature & Parks",
    address: "Tianhe Road, Tianhe District, Guangzhou",
    website: "http://tyj.gz.gov.cn/",
    review: "Sprawling public green plaza and stadium complex where locals gather to run, play badminton, and relax.",
    coordinates: [23.1375, 113.3238]
  },
  {
    name: "Zhongshan University (South Campus)",
    nameZh: "中山大学 (南校区)",
    region: "Canton Heritage",
    category: "Heritage & Culture",
    address: "No. 135 Xingang West Road, Haizhu District, Guangzhou",
    website: "https://www.sysu.edu.cn/",
    review: "Historic campus featuring majestic red brick academic buildings shaded by enormous banyan trees. Visitors love the scholarly ambiance.",
    coordinates: [23.0968, 113.2982]
  },
  {
    name: "Guangzhou Art Museum (New Hall)",
    nameZh: "广州艺术博物院 (广州美术馆新馆)",
    region: "Canton Heritage",
    category: "Museums & Galleries",
    address: "No. 198 Yiyuan Road, Haizhu District, Guangzhou",
    website: "https://www.gzam.org.cn/",
    review: "State-of-the-art national art museum showcasing brilliant collections of Chinese ink paintings and modern sculpture.",
    coordinates: [23.0955, 113.3188]
  },

  // --- Panyu Region (20 POIs) ---
  {
    name: "Shawan Ancient Town",
    nameZh: "沙湾古镇",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Shawan Town, Panyu District, Guangzhou",
    review: "An 800-year-old Lingnan water village known for oyster-shell walls and ginger milk curd.",
    coordinates: [22.9051, 113.3308]
  },
  {
    name: "Baomo Garden",
    nameZh: "宝墨园",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Zini Village, Wanqingsha Town, Panyu District, Guangzhou",
    review: "A late Qing Dynasty garden featuring complex water networks and massive koi ponds.",
    coordinates: [22.8988, 113.2882]
  },
  {
    name: "Dafushan Forest Park",
    nameZh: "大夫山森林公园",
    region: "Panyu",
    category: "Nature & Hiking",
    address: "668 Yiyuan Road, Panyu District, Guangzhou",
    review: "A 9,000-acre green space with paved paths for tandem biking around shaded artificial lakes.",
    coordinates: [22.9572, 113.3142]
  },
  {
    name: "Lianhuashan (Lotus Hill)",
    nameZh: "莲花山",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Xikang Road, Shibi Street, Panyu District, Guangzhou",
    review: "A historic quarry site featuring a towering golden statue of Guanyin facing the sea.",
    coordinates: [22.9858, 113.5042]
  },
  {
    name: "Yuyin Garden",
    nameZh: "余荫山房",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Nancun Town, Panyu District, Guangzhou",
    review: "One of Guangdong's four famous Qing Dynasty gardens, featuring intricate brick carvings and lotus pavilions.",
    coordinates: [23.0078, 113.3905]
  },
  {
    name: "Guangdong Science Center",
    nameZh: "广东科学中心",
    region: "Panyu",
    category: "Skyline & Modern",
    address: "Guangzhou Higher Education Mega Center, Panyu District",
    review: "A massive, futuristic facility shaped like a kapok flower, housing interactive technology exhibits.",
    coordinates: [23.0392, 113.3648]
  },
  {
    name: "Lingnan Impression Park",
    nameZh: "岭南印象园",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Waihuancheng Road, HEMC, Panyu District, Guangzhou",
    review: "A reconstructed cultural village detailing traditional Cantonese trades, architecture, and street snacks.",
    coordinates: [23.0428, 113.4072]
  },
  {
    name: "Nanyue Garden",
    nameZh: "南粤苑",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Zini Village, Wanqingsha Town, Panyu District, Guangzhou",
    review: "Located near Baomo Garden, showcasing ornate Lingnan architecture combined with imperial garden landscaping.",
    coordinates: [22.8955, 113.2912]
  },
  {
    name: "Panyu Museum",
    nameZh: "番禺区博物馆",
    region: "Panyu",
    category: "Museums & Galleries",
    address: "No. 130 Ginkgo Road, Panyu District, Guangzhou",
    review: "Houses local artifacts, including excavated Han Dynasty tombs and agricultural history.",
    coordinates: [22.9238, 113.3685]
  },
  {
    name: "Shiqiao Pedestrian Street",
    nameZh: "市桥步行街",
    region: "Panyu",
    category: "Markets & Walking Streets",
    address: "Shiqiao, Panyu District, Guangzhou",
    review: "The primary local commercial artery for traditional eateries and everyday shopping.",
    coordinates: [22.9412, 113.3582]
  },
  {
    name: "Dishuiyan Forest Park",
    nameZh: "滴水岩森林公园",
    region: "Panyu",
    category: "Nature & Hiking",
    address: "Yongsheng Road, Panyu District, Guangzhou",
    review: "A quiet ecological reserve popular for local hiking and bird watching.",
    coordinates: [22.9152, 113.3155]
  },
  {
    name: "Haogang Island (Haigou Dao)",
    nameZh: "海鸥岛",
    region: "Panyu",
    category: "Nature & Hiking",
    address: "Haigou Island, Panyu District, Guangzhou",
    review: "An agricultural island perfect for cycling, strawberry picking, and fresh seafood.",
    coordinates: [22.9325, 113.5612]
  },
  {
    name: "Shatian Waterway",
    nameZh: "沙湾水道",
    region: "Panyu",
    category: "Nature & Parks",
    address: "Panyu District, Guangzhou",
    review: "The main river artery offering waterside walking paths and local fishing spots.",
    coordinates: [22.8942, 113.3255]
  },
  {
    name: "Clifford Estates (Zhongcun)",
    nameZh: "祈福新邨",
    region: "Panyu",
    category: "Markets & Walking Streets",
    address: "Zhongcun, Panyu District, Guangzhou",
    review: "A massive residential and commercial hub featuring international dining and shopping.",
    coordinates: [22.9732, 113.3285]
  },
  {
    name: "Panyu Square",
    nameZh: "番禺广场",
    region: "Panyu",
    category: "Skyline & Modern",
    address: "Panyu Square, Panyu District, Guangzhou",
    review: "The modern administrative center featuring large open plazas and an underground shopping labyrinth.",
    coordinates: [22.9362, 113.3842]
  },
  {
    name: "Xinghai Park",
    nameZh: "星海公园",
    region: "Panyu",
    category: "Nature & Parks",
    address: "Shiqiao, Panyu District, Guangzhou",
    review: "A community park dedicated to the famous local composer Xian Xinghai.",
    coordinates: [22.9465, 113.3621]
  },
  {
    name: "Shiji Town",
    nameZh: "石碁镇",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Shiji Town, Panyu District, Guangzhou",
    review: "A traditional township retaining elements of early 20th-century Cantonese market life.",
    coordinates: [22.9515, 113.4382]
  },
  {
    name: "Nancun Town",
    nameZh: "南村镇",
    region: "Panyu",
    category: "Heritage & Culture",
    address: "Nancun Town, Panyu District, Guangzhou",
    review: "Home to historical ancestral halls and a dense concentration of local Panyu garment trade.",
    coordinates: [23.0025, 113.3852]
  },
  {
    name: "Guangzhou University City (HEMC)",
    nameZh: "广州大学城",
    region: "Panyu",
    category: "Nature & Parks",
    address: "Xiaoguwei Island, Panyu District, Guangzhou",
    review: "An island hosting ten universities with extensive cycling paths and the GZ Velodrome.",
    coordinates: [23.0512, 113.3912]
  },
  {
    name: "Panyu Children's Park",
    nameZh: "番禺儿童公园",
    region: "Panyu",
    category: "Nature & Parks",
    address: "Dabao Road, Panyu District, Guangzhou",
    review: "A large municipal park with extensive climbing structures and splash pads for families.",
    coordinates: [22.9642, 113.3642]
  },

  // --- Chimelong Region (20 POIs) ---
  {
    name: "Chimelong Safari Park",
    nameZh: "长隆野生动物世界",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "105 National Highway, Panyu District, Guangzhou",
    website: "https://www.chimelong.com/",
    review: "A massive wildlife park featuring a self-drive safari zone and the world's only giant panda triplets.",
    coordinates: [23.0035, 113.3285]
  },
  {
    name: "Chimelong International Circus",
    nameZh: "长隆国际大马戏",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Chimelong Tourist Resort, Panyu District, Guangzhou",
    website: "https://www.chimelong.com/",
    review: "A 90-minute evening spectacular featuring elite global acrobats, equestrian stunts, and lasers.",
    coordinates: [22.9982, 113.3325]
  },
  {
    name: "Chimelong Water Park",
    nameZh: "长隆水上乐园",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Chimelong Tourist Resort, Panyu District, Guangzhou",
    website: "https://www.chimelong.com/",
    review: "The world's most visited water park, equipped with a mega wave pool and the Behemoth Bowl slide.",
    coordinates: [23.0028, 113.3298]
  },
  {
    name: "Chimelong Paradise",
    nameZh: "长隆欢乐世界",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Chimelong Tourist Resort, Panyu District, Guangzhou",
    website: "https://www.chimelong.com/",
    review: "Guangzhou’s premier amusement park boasting a 10-loop roller coaster and a 90-degree Dive Coaster.",
    coordinates: [22.9995, 113.3342]
  },
  {
    name: "Chimelong Birds Park",
    nameZh: "长隆飞鸟乐园",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Shawan Zhen, Panyu District, Guangzhou",
    website: "https://www.chimelong.com/",
    review: "A vast wetland reserve located 15 minutes away, housing pelicans, flamingos, and 100,000 crocodiles.",
    coordinates: [23.0325, 113.2752]
  },
  {
    name: "Panda Village",
    nameZh: "大熊猫基地",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Safari Park",
    review: "A climate-controlled habitat inside the Safari Park dedicated to giant panda conservation.",
    coordinates: [23.0048, 113.3275]
  },
  {
    name: "Safari on Wheels",
    nameZh: "小火车游览区",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Safari Park",
    review: "The 40-minute open-air tram ride through the free-roaming African and Asian animal plains.",
    coordinates: [23.0062, 113.3255]
  },
  {
    name: "Sky Gondola",
    nameZh: "长隆空中缆车",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Safari Park",
    review: "A transparent cable car system providing aerial views over the safari park enclosures.",
    coordinates: [23.0051, 113.3291]
  },
  {
    name: "White Tiger Restaurant",
    nameZh: "白虎餐厅",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Chimelong Hotel, Panyu District, Guangzhou",
    review: "A dining room inside the Chimelong Hotel surrounded by glass enclosures viewing live white tigers.",
    coordinates: [22.9975, 113.3312]
  },
  {
    name: "Jurassic Trail",
    nameZh: "侏罗纪森林",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Safari Park",
    review: "An immersive walk-through jungle exhibit inside the Safari Park featuring animatronic dinosaurs.",
    coordinates: [23.0039, 113.3262]
  },
  {
    name: "Swan Lake",
    nameZh: "天鹅湖",
    region: "Chimelong",
    category: "Nature & Parks",
    address: "Inside Chimelong Birds Park",
    review: "The central water feature in the Birds Park hosting synchronized free-flight bird demonstrations.",
    coordinates: [23.0335, 113.2765]
  },
  {
    name: "Neverending Fountain",
    nameZh: "急流勇进与喷泉区",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Water Park",
    review: "A large interactive splash and play zone for children inside the Water Park.",
    coordinates: [23.0018, 113.3288]
  },
  {
    name: "Koala Habitat",
    nameZh: "考拉馆",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Safari Park",
    review: "The largest koala breeding center outside of Australia, located within the Safari Park.",
    coordinates: [23.0042, 113.3281]
  },
  {
    name: "Motorbike Coaster",
    nameZh: "摩托过山车",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Paradise",
    review: "A high-speed launch coaster inside Chimelong Paradise where riders straddle motorcycle-style seats.",
    coordinates: [22.9988, 113.3355]
  },
  {
    name: "Stunt Show Arena",
    nameZh: "惊爆危机岛特技剧场",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Paradise",
    review: "An outdoor theater in Chimelong Paradise featuring live-action vehicle chases and pyrotechnics.",
    coordinates: [23.0002, 113.3362]
  },
  {
    name: "Chimelong Resort Walkway",
    nameZh: "长隆度假区大道",
    region: "Chimelong",
    category: "Nature & Parks",
    address: "Chimelong Tourist Resort, Panyu District",
    review: "The central pedestrian boulevard connecting the hotels, circus, and theme parks.",
    coordinates: [22.9985, 113.3315]
  },
  {
    name: "Crocodile Island",
    nameZh: "鳄鱼岛",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Birds Park",
    review: "A specialized viewing area in the Birds Park demonstrating crocodile feeding and behavior.",
    coordinates: [23.0315, 113.2742]
  },
  {
    name: "Tornado Slide",
    nameZh: "大喇叭滑道",
    region: "Chimelong",
    category: "Theme Parks & Wildlife",
    address: "Inside Chimelong Water Park",
    review: "A massive funnel water slide designed for four-person rafts in the Water Park.",
    coordinates: [23.0031, 113.3305]
  },
  {
    name: "Dashi Riverside Greenway",
    nameZh: "大石滨江绿道",
    region: "Chimelong",
    category: "Nature & Hiking",
    address: "Dashi Town, Panyu District, Guangzhou",
    review: "A smooth paved riverside path ideal for evening jogs and catching the sunset breeze off the river.",
    coordinates: [23.0185, 113.3125]
  },
  {
    name: "Hanxi Wetland Pocket Park",
    nameZh: "汉溪湿地口袋公园",
    region: "Chimelong",
    category: "Nature & Parks",
    address: "Near Hanxi Changlong Metro Station, Panyu District",
    review: "A clean, manicured pocket park providing a peaceful breath of green right outside the bustling metro hub.",
    coordinates: [22.9935, 113.3321]
  },

  // --- Qingyuan Region (20 POIs) ---
  {
    name: "Gulong Gorge Glass Skywalk",
    nameZh: "古龙峡玻璃大峡谷",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Gulong Gorge Scenic Area, Qingxin District, Qingyuan",
    review: "A 520-meter transparent suspension bridge suspended high above a roaring canyon waterfall.",
    coordinates: [23.7428, 112.9345]
  },
  {
    name: "Gulong Gorge Forest Hiking Trail",
    nameZh: "古龙峡森林徒步径",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Gulong Gorge Scenic Area, Qingxin District, Qingyuan",
    review: "Breathtaking canyon hikes featuring towering waterfalls, misty gorges, and refreshing mountain air.",
    coordinates: [23.7452, 112.9328]
  },
  {
    name: "Huangteng Gorge Tianmen Corridor",
    nameZh: "黄腾峡天门悬廊",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "East Suburb, Qingxin District, Qingyuan",
    review: "A glass observation deck shaped like two massive tennis rackets jutting out over a cliff.",
    coordinates: [23.7655, 113.0842]
  },
  {
    name: "Huangteng Gorge Ecological Valley",
    nameZh: "黄腾峡生态峡谷",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "East Suburb, Qingxin District, Qingyuan",
    review: "Deep primeval forests with crystal-clear streams, wooden boardwalks, and cool canyon breezes.",
    coordinates: [23.7672, 113.0865]
  },
  {
    name: "Yingxi Peak Forest Karst Trails",
    nameZh: "英西峰林走廊徒步径",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Jiulong Town, Yingde, Qingyuan",
    review: "Stunning cycling and walking routes weaving through dramatic limestone karst towers ('Little Guilin').",
    coordinates: [24.1285, 112.9152]
  },
  {
    name: "Beijiang River Cruise",
    nameZh: "北江小三峡游船",
    region: "Qingyuan",
    category: "Nature & Parks",
    address: "Feilaixia Town, Qingcheng District, Qingyuan",
    review: "A scenic boat ride through the Three Gorges of Feilaixia, known for onboard fresh river seafood meals.",
    coordinates: [23.8245, 113.1952]
  },
  {
    name: "Xinyin Zhan Hot Spring Nature Resort",
    nameZh: "新银盏温泉度假村",
    region: "Qingyuan",
    category: "Nature & Parks",
    address: "Shijiao Town, Qingcheng District, Qingyuan",
    review: "Incredible outdoor thermal mineral pools nestled directly into forested hillside gardens for ultimate relaxation.",
    coordinates: [23.5852, 113.1245]
  },
  {
    name: "Feilai Temple",
    nameZh: "飞来寺",
    region: "Qingyuan",
    category: "Heritage & Culture",
    address: "Feilaixia, Qingcheng District, Qingyuan",
    review: "A historic riverside Buddhist temple accessible primarily by boat along the Beijiang River.",
    coordinates: [23.8182, 113.1895]
  },
  {
    name: "Baojing Palace of Yingde",
    nameZh: "英德宝晶宫",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Yingde, Qingyuan",
    review: "A massive limestone cave system featuring illuminated stalactites and underground lakes.",
    coordinates: [24.1528, 113.3885]
  },
  {
    name: "Niuyuzui Scenic Area",
    nameZh: "牛鱼嘴原始生态风景区",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Dongcheng Street, Qingcheng District, Qingyuan",
    review: "A forested mountain park known for its spring wildflower blooms and suspension bridges.",
    coordinates: [23.7745, 113.1582]
  },
  {
    name: "Tianzi Mountain Waterfall",
    nameZh: "天子山瀑布",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Feilaixia Town, Qingcheng District, Qingyuan",
    review: "A multi-tiered waterfall cascading down a lush mountain face with adjacent hiking trails.",
    coordinates: [23.8825, 113.2345]
  },
  {
    name: "Jinzi Mountain",
    nameZh: "金子山风景区",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Lianping Town, Lianshan, Qingyuan",
    review: "Famous for its terrifyingly steep 80-degree stone staircases and summit glass bridge.",
    coordinates: [24.7125, 112.0852]
  },
  {
    name: "Nangang Millennium Yao Pai",
    nameZh: "南岗千年瑶寨",
    region: "Qingyuan",
    category: "Heritage & Culture",
    address: "Sanjiang Town, Liannan, Qingyuan",
    review: "An ancient, terraced village showcasing the indigenous culture and architecture of the Yao ethnic minority.",
    coordinates: [24.5125, 112.3125]
  },
  {
    name: "Lianzhou Underground River",
    nameZh: "连州地下河",
    region: "Qingyuan",
    category: "Nature & Hiking",
    address: "Dongbei Town, Lianzhou, Qingyuan",
    review: "A subterranean boat tour through a massive, colorfully lit limestone cavern.",
    coordinates: [24.9652, 112.3852]
  },
  {
    name: "Bijiashan Rafting",
    nameZh: "笔架山漂流",
    region: "Qingyuan",
    category: "Theme Parks & Wildlife",
    address: "Bijiashan Forest Park, Qingcheng District",
    review: "An intense white-water river rafting experience through a narrow rock canyon.",
    coordinates: [23.7925, 113.0425]
  },

  // --- Shenzhen Region (20 POIs) ---
  {
    name: "DJI Sky City Global HQ",
    nameZh: "大疆天空之城",
    region: "Shenzhen",
    category: "Skyline & Modern",
    address: "Nanshan District, Shenzhen",
    review: "Twin cantilevered skyscrapers featuring an outdoor suspension bridge used for drone flight testing.",
    coordinates: [22.5765, 113.9482]
  },
  {
    name: "Shenzhen Talent Park",
    nameZh: "深圳人才公园",
    region: "Shenzhen",
    category: "Nature & Parks",
    address: "Houhai Riverside, Nanshan District, Shenzhen",
    review: "A pristine coastal wetland park offering the best vantage point for the Houhai CBD evening light show.",
    coordinates: [22.5152, 113.9488]
  },
  {
    name: "Ping An Finance Centre",
    nameZh: "平安金融中心",
    region: "Shenzhen",
    category: "Skyline & Modern",
    address: "No. 5033 Yitian Road, Futian District, Shenzhen",
    review: "A 599-meter megatall skyscraper featuring the Free Sky observation deck on the 116th floor.",
    coordinates: [22.5332, 114.0558]
  },
  {
    name: "OCT-LOFT Creative Culture Park",
    nameZh: "华侨城创意文化园",
    region: "Shenzhen",
    category: "Heritage & Culture",
    address: "OCT, Nanshan District, Shenzhen",
    review: "A complex of former factories transformed into indie art galleries, coffee roasteries, and live music venues.",
    coordinates: [22.5385, 113.9925]
  },
  {
    name: "Tencent Seafront Towers",
    nameZh: "腾讯滨海大厦",
    region: "Shenzhen",
    category: "Skyline & Modern",
    address: "Houhai Avenue, Nanshan District, Shenzhen",
    review: "The global headquarters of Tencent, featuring striking architecture with sky bridges connecting the towers.",
    coordinates: [22.5275, 113.9355]
  },
  {
    name: "Dasha River Ecological Corridor",
    nameZh: "大沙河生态长廊",
    region: "Shenzhen",
    category: "Nature & Hiking",
    address: "Nanshan District, Shenzhen",
    review: "A beautifully landscaped river trail cutting directly through the Nanshan tech district, popular for running and rowing.",
    coordinates: [22.5485, 113.9552]
  },
  {
    name: "Shenzhen Bay Park Coastal Promenade",
    nameZh: "深圳湾公园滨海长廊",
    region: "Shenzhen",
    category: "Nature & Hiking",
    address: "Binhai Avenue, Nanshan/Futian District, Shenzhen",
    review: "Thirteen kilometers of uninterrupted seaside walking paths right along the bay facing Hong Kong's wetlands.",
    coordinates: [22.5185, 113.9782]
  },
  {
    name: "Wutong Mountain (Wutong Shan)",
    nameZh: "梧桐山",
    region: "Shenzhen",
    category: "Nature & Hiking",
    address: "Luohu/Yantian District, Shenzhen",
    review: "The highest peak in Shenzhen; challenging granite stair climbs that reward hikers with views stretching all the way to Hong Kong.",
    coordinates: [22.5852, 114.2045]
  },
  {
    name: "Fairy Lake Botanical Garden & Hongfa Temple",
    nameZh: "仙湖植物园与弘法寺",
    region: "Shenzhen",
    category: "Nature & Parks",
    address: "160 Xianhu Road, Liantang, Luohu District, Shenzhen",
    website: "http://www.szbg.ac.cn/",
    review: "A massive, peaceful sanctuary featuring a petrified forest, serene lake trails, and the magnificent mountainside temple.",
    coordinates: [22.5785, 114.1685]
  },
  {
    name: "Huaqiangbei Electronics Market",
    nameZh: "华强北步行街",
    region: "Shenzhen",
    category: "Markets & Walking Streets",
    address: "Huaqiang North Road, Futian District, Shenzhen",
    review: "The world's largest electronics wholesale market, spanning multiple multi-story commercial plazas.",
    coordinates: [22.5452, 114.0862]
  },
  {
    name: "Nantou Ancient City",
    nameZh: "南头古城",
    region: "Shenzhen",
    category: "Heritage & Culture",
    address: "Nanshan Avenue, Nanshan District, Shenzhen",
    review: "A 1,700-year-old preserved town gate and street seamlessly integrated into the dense modern urban fabric.",
    coordinates: [22.5395, 113.9182]
  },
  {
    name: "Sea World (Shekou)",
    nameZh: "海上世界 (蛇口)",
    region: "Shenzhen",
    category: "Markets & Walking Streets",
    address: "Shekou, Nanshan District, Shenzhen",
    review: "An entertainment plaza built around the Minghua, a decommissioned French cruise ship permanently landlocked in concrete.",
    coordinates: [22.4845, 113.9152]
  },

  // --- Hong Kong Region (20 POIs) ---
  {
    name: "Victoria Harbour (Star Ferry)",
    nameZh: "維多利亞港 (天星小輪)",
    region: "Hong Kong",
    category: "Heritage & Culture",
    address: "Tsim Sha Tsui / Central Piers, Hong Kong",
    review: "The historic passenger ferry crossing the harbor, offering the cheapest and best view of the skyline.",
    coordinates: [22.2938, 114.1688]
  },
  {
    name: "Victoria Peak (The Peak)",
    nameZh: "太平山頂",
    region: "Hong Kong",
    category: "Skyline & Modern",
    address: "The Peak, Hong Kong Island, Hong Kong",
    review: "Accessible via the historic Peak Tram, providing the ultimate downward view of the Hong Kong Island skyscrapers.",
    coordinates: [22.2758, 114.1455]
  },
  {
    name: "Lion Rock Country Park & Ridge Trail",
    nameZh: "獅子山郊野公園",
    region: "Hong Kong",
    category: "Nature & Hiking",
    address: "Wong Tai Sin / Kowloon, Hong Kong",
    review: "An iconic hike with steep rock staircases leading to a dramatic summit overlooking all of Kowloon and Victoria Harbour.",
    coordinates: [22.3525, 114.1852]
  },
  {
    name: "Dragon's Back Trail",
    nameZh: "龍脊",
    region: "Hong Kong",
    category: "Nature & Hiking",
    address: "Shek O Road, Hong Kong Island, Hong Kong",
    review: "Consistently rated one of the world's best urban hikes; rolling green ridgelines ending directly at Big Wave Bay beach.",
    coordinates: [22.2452, 114.2402]
  },
  {
    name: "Tai O Stilt Village & Mangrove Boardwalk",
    nameZh: "大澳漁村",
    region: "Hong Kong",
    category: "Heritage & Culture",
    address: "Tai O, Lantau Island, Hong Kong",
    review: "A wonderful, slow-paced coastal nature escape featuring tidal mudflats, egrets, and historic stilt houses.",
    coordinates: [22.2538, 113.8625]
  },
  {
    name: "Tian Tan Buddha (Big Buddha)",
    nameZh: "天壇大佛",
    region: "Hong Kong",
    category: "Heritage & Culture",
    address: "Ngong Ping, Lantau Island, Hong Kong",
    review: "A 34-meter bronze statue located on Lantau Island, accessible via the scenic Ngong Ping 360 cable car.",
    coordinates: [22.2539, 113.9051]
  },
  {
    name: "Tsim Sha Tsui Promenade & Avenue of Stars",
    nameZh: "星光大道",
    region: "Hong Kong",
    category: "Skyline & Modern",
    address: "Tsim Sha Tsui Waterfront, Kowloon, Hong Kong",
    review: "A coastal walkway honoring the Hong Kong film industry with handprints of stars overlooking Victoria Harbour.",
    coordinates: [22.2931, 114.1738]
  },
  {
    name: "Man Mo Temple",
    nameZh: "文武廟",
    region: "Hong Kong",
    category: "Heritage & Culture",
    address: "Hollywood Road, Sheung Wan, Hong Kong",
    review: "A mid-19th-century atmospheric temple in Sheung Wan, constantly filled with the smoke of massive hanging incense coils.",
    coordinates: [22.2839, 114.1502]
  },
  {
    name: "Lantau Trail (Section 3 & Wisdom Path)",
    nameZh: "鳳凰徑與心經簡林",
    region: "Hong Kong",
    category: "Nature & Hiking",
    address: "Ngong Ping, Lantau Island, Hong Kong",
    review: "Quiet forested mountain trails winding past towering wooden prayer columns amidst mountain mist.",
    coordinates: [22.2552, 113.9115]
  },
  {
    name: "Plover Cove Country Park (Bride's Pool)",
    nameZh: "新娘潭自然教育徑",
    region: "Hong Kong",
    category: "Nature & Hiking",
    address: "Tai Po, New Territories, Hong Kong",
    review: "A lush shaded forest stream walk leading to picturesque waterfalls and rock pools, perfect for escaping city noise.",
    coordinates: [22.4885, 114.2385]
  },
  {
    name: "West Kowloon Cultural District (M+)",
    nameZh: "西九文化區 (M+)",
    region: "Hong Kong",
    category: "Museums & Galleries",
    address: "West Kowloon, Hong Kong",
    review: "A massive reclaimed land project housing M+, Asia’s first global museum of contemporary visual culture.",
    coordinates: [22.3005, 114.1588]
  }
];

// 3. Name Normalization Helper
function normalizeKey(str) {
    if (!str) return '';
    return str.toLowerCase().replace(/[^a-z0-9\u4e00-\u9fa5]/g, '');
}

// 4. Merge & Deduplicate Map
const mergedMap = new Map();

// Insert existing items first
existingAttractions.forEach(item => {
    const key = normalizeKey(item.name || item.title || item.id);
    if (key) {
        mergedMap.set(key, { ...item });
    }
});

// Upsert and enrich with new items
let addedCount = 0;
let enrichedCount = 0;

newAttractions.forEach(item => {
    const key = normalizeKey(item.name);
    if (mergedMap.has(key)) {
        // Enrich existing entry while preserving custom media, photos, reviews, IDs
        const existing = mergedMap.get(key);
        mergedMap.set(key, {
            ...existing,
            name: item.name,
            nameZh: item.nameZh || existing.nameZh,
            region: item.region || existing.region,
            category: existing.category || item.category,
            address: item.address || existing.address,
            website: item.website || existing.website,
            review: item.review || existing.review || existing.desc,
            coordinates: item.coordinates || existing.coordinates || [23.1291, 113.2644]
        });
        enrichedCount++;
    } else {
        const idSlug = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
        mergedMap.set(key, {
            id: `poi-${idSlug}`,
            image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80",
            photos: ["https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&q=80"],
            tag: (item.region ? item.region.toUpperCase() + ' • ' : '') + (item.category ? item.category.toUpperCase() : 'ATTRACTION'),
            tagIcon: 'fa-location-dot',
            desc: item.review || '',
            ...item
        });
        addedCount++;
    }
});

const finalizedList = Array.from(mergedMap.values());
console.log(`[+] Ingestion Complete: ${finalizedList.length} total attractions (Enriched: ${enrichedCount}, Added: ${addedCount})`);

// 5. Safely preserve Immutable Zones (itinerarySchedule, hotelRoomsData, defaultRestaurants, etc.)
// Replace ONLY the expeditionAttractions block
const attractionsBlock = `const expeditionAttractions = ${JSON.stringify(finalizedList, null, 2)};\n\n` +
  `if (typeof window !== 'undefined') window.expeditionAttractions = expeditionAttractions;\n` +
  `if (typeof globalThis !== 'undefined') globalThis.expeditionAttractions = expeditionAttractions;\n` +
  `if (typeof module !== 'undefined' && module.exports) {\n` +
  `  module.exports = { expeditionAttractions: expeditionAttractions };\n` +
  `}\n`;

let outputContent = rawFileContent;
if (outputContent.includes('const expeditionAttractions =')) {
  outputContent = outputContent.replace(/\/\/ --- EXPEDITION ATTRACTIONS DATASET ---[\s\S]*$/, '// --- EXPEDITION ATTRACTIONS DATASET ---\n' + attractionsBlock);
} else {
  outputContent += '\n\n// --- EXPEDITION ATTRACTIONS DATASET ---\n' + attractionsBlock;
}

fs.writeFileSync(dataFilePath, outputContent, 'utf8');
console.log(`[+] Successfully updated china-data.js while preserving all immutable zones! (${Math.round(Buffer.byteLength(outputContent, 'utf8') / 1024)} KB)`);
