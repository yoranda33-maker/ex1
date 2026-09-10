// ============================================================================
// Suwon & Yongin Giheung Explorer - Comprehensive Tourist Dataset
// Standalone data module (Runs without backend/server, CORS-free on file://)
// Multi-language support: English (en), Korean (ko), Chinese (zh)
// ============================================================================

const TRAVEL_DATA = {
  regions: {
    all: { en: "All Regions", ko: "전체 지역", zh: "全部区域" },
    suwon: { 
      en: "Suwon City", 
      ko: "수원시", 
      zh: "水原市",
      tagline_en: "UNESCO World Heritage & Modern Vibrant Culture",
      tagline_ko: "세계문화유산 수원화성과 트렌디한 도심 문화",
      tagline_zh: "联合国教科文组织世界文化遗产与潮流现代文化",
      subway_line: "Suin-Bundang Line, Line 1, KTX",
      icon: "🏯"
    },
    giheung: { 
      en: "Yongin Giheung-gu", 
      ko: "용인시 기흥구", 
      zh: "龙仁市 器兴区",
      tagline_en: "Living Joseon Tradition & Avant-Garde Media Art",
      tagline_ko: "살아 숨쉬는 조선 전통과 세계적 미디어 아트의 만남",
      tagline_zh: "鲜活的朝鲜王朝传统与世界级新媒体艺术的邂逅",
      subway_line: "Suin-Bundang Line, Everline",
      icon: "🎎"
    }
  },

  categories: [
    { id: "all", en: "All Themes", ko: "전체 테마", zh: "全部主题", icon: "✨" },
    { id: "heritage", en: "Heritage & History", ko: "역사 & 유산", zh: "历史 & 遗产", icon: "🏯" },
    { id: "art_modern", en: "Art, Modern & Tech", ko: "미술, 현대 & 테크", zh: "艺术、现代 & 科技", icon: "🎨" },
    { id: "nature", en: "Parks & Scenic Nature", ko: "자연 & 힐링", zh: "自然 & 休闲", icon: "🌿" },
    { id: "food", en: "Food & Cafes", ko: "미식 & 카페", zh: "美食 & 咖啡", icon: "🍖" }
  ],

  attractions: [
    // ---------------- SUWON ATTRACTIONS ----------------
    {
      id: "suwon-hwaseong",
      region: "suwon",
      category: "heritage",
      name_en: "Suwon Hwaseong Fortress",
      name_ko: "수원화성",
      name_zh: "水原华城",
      subtitle_en: "UNESCO World Heritage 18th-century royal fortress",
      subtitle_ko: "유네스코 세계문화유산 18세기 조선 성곽의 백미",
      subtitle_zh: "联合国教科文组织世界文化遗产 18世纪朝鲜城郭的精粹",
      image: "images/suwon_hwaseong.jpg",
      rating: 4.9,
      reviews: "14,200+",
      tags_en: ["UNESCO", "Fortress Walk", "Night Views", "Historical Gem"],
      tags_ko: ["유네스코", "성곽길 산책", "야경 명소", "역사 명소"],
      tags_zh: ["世界遗产", "城郭散步", "夜景名胜", "历史古迹"],
      address_en: "320-2 Yeonghwa-dong, Jangan-gu, Suwon-si, Gyeonggi-do",
      address_ko: "경기도 수원시 장안구 영화동 320-2 (수원화성)",
      address_zh: "京畿道水原市长安区迎华洞320-2 (水原华城)",
      nearest_station_en: "Suwon Station (Line 1 / Suin-Bundang Line) - 10 min bus",
      nearest_station_ko: "수원역(1호선/수인분당선) 4번 출구에서 버스로 10분",
      nearest_station_zh: "水原站 (1号线/水仁盆唐线) 4号出口乘坐公交约10分钟",
      coordinates: { lat: 37.2882, lng: 127.0134 },
      hours_en: "09:00 - 18:00 (Open 24/7 for fortress perimeter walking paths)",
      hours_ko: "09:00 - 18:00 (성곽 외곽 둘레길은 24시간 상시 개방)",
      hours_zh: "09:00 - 18:00 (城墙外围漫步道24小时全天开放)",
      admission_en: "Free for fortress walls / Haenggung Palace: 1,500 KRW ($1.10)",
      admission_ko: "성곽 관람 무료 / 화성행궁: 성인 1,500원",
      admission_zh: "城郭漫步免费 / 华城行宫：成人1,500韩元",
      overview_en: "Commissioned in 1796 by King Jeongjo, Suwon Hwaseong is a pinnacle of Joseon military architecture designed with Eastern and Western defense science. The 5.74 km stone fortress walls wrap around the city center, offering breathtaking sunset panoramas, illuminated night walks, and traditional archery experiences.",
      overview_ko: "조선 정조대왕이 1796년에 축조한 수원화성은 동서양 군사 건축 기술이 집약된 유네스코 세계문화유산입니다. 도심을 감싸는 5.74km의 성곽길을 따라 걸으며 아름다운 석양과 야경을 즐길 수 있으며, 활쏘기 국궁 체험과 화성어차 탑승도 가능합니다.",
      overview_zh: "水原华城建于1796年朝鲜正祖时期，融合了东西方先进军事防御科技，是联合国教科文组织评定的世界文化遗产。环绕市中心全长5.74公里的壮丽石筑城墙，呈现绝美的日落全景、梦幻的夜间漫步路线，并提供传统国弓射箭体验与热气球观光。",
      highlights_en: [
        "Janganmun Gate: The largest castle gate in Korea with a protective crescent moon wall (Ongseong).",
        "Hwahongmun & Banghwasuryujeong: Picturesque water gate and cliffside pavilion overlooking a lotus pond.",
        "Flying Suwon: Giant tethered helium balloon lifting visitors 150m for 360-degree aerial night views (Approx. 20,000 KRW)."
      ],
      highlights_ko: [
        "장안문: 옹성을 갖춘 국내 최대 규모의 웅장한 성문.",
        "방화수류정과 화홍문: 용연 연못을 내려다보는 가장 아름다운 정자와 7간 수문.",
        "플라잉 수원: 150m 상공으로 솟아올라 화성 전체 야경을 감상하는 계류식 헬륨 열기구."
      ],
      highlights_zh: [
        "长安门：建有半月形瓮城的韩国现存最大城门，气势恢宏。",
        "华虹门与访花随柳亭：俯瞰龙渊荷花池的高雅亭阁与七孔水门，绝佳拍照点。",
        "飞行水原 (Flying Suwon)：升至150米高空的系留式氦气球，360度俯瞰华城璀璨夜景。"
      ],
      transit_guide_en: "From Suwon Station (Exit 4), take Bus 11, 13, or 35 and alight at 'Jangan Park' or 'Paldalmun' (10-15 mins).",
      transit_guide_ko: "수원역 4번 출구 정류장에서 11, 13, 35번 버스 탑승 후 '장안공원' 또는 '팔달문' 정류장 하차 (약 10~15분 소요).",
      transit_guide_zh: "在水原站4号出口乘坐市内公交11、13或35路，至‘长安公园’或‘八达门’站下车 (约10~15分钟)。",
      taxi_destination: "수원화성 장안문 (또는 화성행궁 매표소)",
      taxi_phrase: "기사님, 수원화성 장안문 앞(또는 화성행궁)으로 가주세요. 감사합니다!",
      insider_tip_en: "Visit in late afternoon to walk the walls in the golden hour, then watch the city lights turn on after sunset. Renting a Hanbok from nearby Haenggung street grants free palace entry!",
      insider_tip_ko: "해질녘에 방문해 골든아워 성곽길을 걷고 조명이 켜지는 야경을 감상하세요. 인근에서 한복을 대여하면 화성행궁에 무료 입장할 수 있습니다.",
      insider_tip_zh: "建议傍晚时分前往，在日落黄金时刻漫步城墙，随后欣赏华灯初上的梦幻夜景。在行宫前租借韩服可免费进入华城行宫！"
    },
    {
      id: "haengnidan-gil",
      region: "suwon",
      category: "food",
      name_en: "Haengnidan-gil Cafe & Boutique Street",
      name_ko: "행리단길 카페거리",
      name_zh: "行理团路 咖啡精品街",
      subtitle_en: "Chic hipster alleys filled with rooftop cafes, bakeries & crafts",
      subtitle_ko: "감성 한옥 카페와 루프탑, 독립 서점이 모인 트렌디 골목",
      subtitle_zh: "汇聚感性韩屋咖啡厅、屋顶露台与文创杂货的潮流街巷",
      image: "images/suwon_hwaseong.jpg",
      rating: 4.8,
      reviews: "9,800+",
      tags_en: ["Hipster Cafe", "Hanok Bakeries", "K-Drama Filming", "Shopping"],
      tags_ko: ["감성 카페", "한옥 베이커리", "K-드라마 촬영지", "소품샵"],
      tags_zh: ["感性咖啡", "韩屋甜点", "韩剧取景地", "文创小店"],
      address_en: "Sinpung-dong & Haenggung-dong, Paldal-gu, Suwon-si, Gyeonggi-do",
      address_ko: "경기도 수원시 팔달구 신풍동/행궁동 일대",
      address_zh: "京畿道水原市八达区新丰洞/行宫洞一带",
      nearest_station_en: "Suwon Station - Bus 10 mins to Hwaseong Haenggung",
      nearest_station_ko: "수원역에서 버스 10분, 화성행궁 하차 후 도보 2분",
      nearest_station_zh: "水原站乘坐公交约10分钟，在华城行宫下车步行2分钟",
      coordinates: { lat: 37.2845, lng: 127.0142 },
      hours_en: "11:00 - 22:00 (Varies by boutique cafe)",
      hours_ko: "11:00 - 22:00 (매장별 상이)",
      hours_zh: "11:00 - 22:00 (各店铺营业时间不同)",
      admission_en: "Free access / Drinks avg. 5,000 - 8,000 KRW",
      admission_ko: "골목 입장 무료 / 음료 5,000원 ~ 8,000원 대",
      admission_zh: "街区免费进入 / 饮品约5,000 ~ 8,000韩元",
      overview_en: "Once a quiet residential neighborhood nestled against the ancient fortress walls, Haengnidan-gil has transformed into one of Gyeonggi-do's hottest cultural hotspots. Discover renovated retro Hanok cafes, dessert bistros, curated lifestyle craft shops, and famous drama filming locations (such as 'Extraordinary Attorney Woo' and 'Our Beloved Summer').",
      overview_ko: "수원화성 성벽 바로 안쪽의 행궁동 일대로, 옛 주택과 한옥을 감각적으로 개조한 로스터리 카페, 디저트 숍, 소품 갤러리가 밀집해 있습니다. 드라마 '이상한 변호사 우영우'의 우영우김밥 촬영지 등 K-컬처 팬들의 필수 코스입니다.",
      overview_zh: "紧邻水原华城城墙的行理团路是京畿道最炙手可热的文青街区。古朴的韩屋与老民宅被爆改成充满现代美学的精品咖啡馆、甜点屋和独立手作店。这里也是韩剧《非常律师禹英禑》、《那年，我们的夏天》的热门取景地。",
      highlights_en: [
        "Rooftop cafes overlooking the fortress walls lit with warm fairy lights at dusk.",
        "Traditional Korean craft workshops: mother-of-pearl crafts, leather work, and pottery.",
        "Retro photo booths and film camera stores popular with young locals."
      ],
      highlights_ko: [
        "성벽 실루엣과 노을을 감상할 수 있는 감성 루프탑 테라스 카페들.",
        "자개 공예, 도자기 만들기 등 원데이 전통 문화 클래스 공방.",
        "인생네컷 등 추억을 남길 수 있는 레트로 포토 부스와 소품샵."
      ],
      highlights_zh: [
        "可眺望古城墙轮廓与落日余晖的浪漫屋顶露台咖啡馆。",
        "螺钿漆器、陶艺制作等体验韩国传统手工艺的单日工坊。",
        "年轻人最爱的复古胶卷相机店与人生四格打卡照相馆。"
      ],
      transit_guide_en: "Just a 3-minute stroll westward from the main entrance of Hwaseong Haenggung Palace.",
      transit_guide_ko: "화성행궁 정문 광장에서 서쪽 골목 방향으로 도보 3분 진입.",
      transit_guide_zh: "从华城行宫正门广场向西侧胡同步行约3分钟即可进入。",
      taxi_destination: "행궁동 행리단길 (수원시립미술관 맞은편)",
      taxi_phrase: "기사님, 행궁동 선경도서관 입구나 행리단길 입구로 가주세요!",
      insider_tip_en: "Weekdays are much more peaceful than weekends. Try the signature black sesame latte or sweet pumpkin pies found in local Hanok bakeries.",
      insider_tip_ko: "주말보다 평일 오후에 여유롭게 즐기기 좋습니다. 흑임자 라떼나 시그니처 쑥 디저트를 맛보세요.",
      insider_tip_zh: "相比周末，工作日下午更加静谧惬意。强烈推荐品尝招牌黑芝麻拿铁和传统南瓜派甜点。"
    },
    {
      id: "starfield-suwon",
      region: "suwon",
      category: "art_modern",
      name_en: "Starfield Suwon & Byeolmadang Library",
      name_ko: "스타필드 수원 & 별마당 도서관",
      name_zh: "水原Starfield & 星空图书馆",
      subtitle_en: "Massive 8-story lifestyle wonderland featuring iconic soaring library",
      subtitle_ko: "초대형 별마당 도서관과 힙한 K-브랜드가 집결한 신개념 복합 쇼핑몰",
      subtitle_zh: "巨型22米星空图书馆与前沿K-Fashion聚集的新概念购物中心",
      image: "images/starfield_suwon.jpg",
      rating: 4.9,
      reviews: "18,500+",
      tags_en: ["Soaring Library", "K-Fashion", "Gourmet Dining", "Indoor Oasis"],
      tags_ko: ["별마당 도서관", "K-패션", "고메 스트리트", "실내 명소"],
      tags_zh: ["星空图书馆", "K-潮流", "美食广场", "室内避暑地"],
      address_en: "175 Suseong-ro, Jangan-gu, Suwon-si, Gyeonggi-do",
      address_ko: "경기도 수원시 장안구 수성로 175 (스타필드 수원)",
      address_zh: "京畿道水原市长安区寿星路175 (水原Starfield)",
      nearest_station_en: "Hwaseo Station (Line 1) - Connected via Exit 1 underground walkway (5 min walk)",
      nearest_station_ko: "1호선 화서역 1번 출구 연결 통로 도보 5분",
      nearest_station_zh: "1号线 华西站 1号出口地下直连通道步行5分钟",
      coordinates: { lat: 37.2831, lng: 126.9934 },
      hours_en: "10:00 - 22:00 (Open 365 days)",
      hours_ko: "10:00 - 22:00 (연중무휴)",
      hours_zh: "10:00 - 22:00 (全年无休)",
      admission_en: "Free entry to complex and Starfield Library",
      admission_ko: "쇼핑몰 및 별마당 도서관 무료 입장",
      admission_zh: "购物中心及星空图书馆免费入场",
      overview_en: "Opened to global acclaim, Starfield Suwon is a multi-story mega-lifestyle landmark. The centerpiece is the breath-taking 'Starfield Byeolmadang Library' spanning floors 4 through 7 with 22-meter towering curved bookshelves and suspended celestial planet sculptures, creating Korea's ultimate architectural photo opportunity.",
      overview_ko: "수원의 최신 랜드마크로 떠오른 초대형 복합 쇼핑 테마파크입니다. 4층부터 7층까지 시원하게 뚫린 22m 높이의 웅장한 '별마당 도서관'은 우주 행성 조형물과 자연 채광이 어우러져 전 세계 여행자들의 인생 사진 명소로 꼽힙니다.",
      overview_zh: "水原首屈一指的新地标超大型综合购物中心。4层至7层贯通中庭的22米高巨型‘星空图书馆’震撼人心，悬浮的星球艺术装置与通透玻璃穹顶相映成趣，成为全球游客在韩国必拍的视觉奇观。",
      highlights_en: [
        "Towering 22m curved book towers offering panoramic viewpoints from 4th, 5th, 6th, and 7th floor balconies.",
        "MZ-generation trendy Korean fashion curation (Musinsa Standard, Ader Error, Thisisneverthat, etc.).",
        "Gourmet Food Hall 'Bite Place' bringing Seoul's most viral restaurants under one roof."
      ],
      highlights_ko: [
        "층마다 각도에 따라 색다른 웅장함을 선사하는 22m 별마당 도서관 포토스팟.",
        "무신사 스탠다드 등 한국 최신 MZ 세대 인기 패션 및 뷰티 브랜드 총망라.",
        "서울 성수동과 한남동의 유명 맛집을 모아놓은 고메 스트리트."
      ],
      highlights_zh: [
        "高耸达22米的弧形书架，在4至7层每个角度都能拍摄出震撼视觉大片。",
        "全方位汇集韩国最新MZ世代爆火潮流时尚与美妆品牌 (Musinsa Standard等)。",
        "将首尔圣水洞与汉南洞人气排队名店一网打尽的顶尖美食广场Bite Place。"
      ],
      transit_guide_en: "Take Subway Line 1 to Hwaseo Station (just 1 stop north of Suwon Station). Exit 1 connects directly via an underpass.",
      transit_guide_ko: "지하철 1호선 화서역(수원역 바로 다음 정거장) 1번 출구 지하 통로로 바로 연결 (도보 5분).",
      transit_guide_zh: "乘坐地铁1号线至华西站 (水原站下一站)，从1号出口经地下人行通道直通，步行5分钟。",
      taxi_destination: "스타필드 수원 (화서역 인근)",
      taxi_phrase: "기사님, 화서역 앞 스타필드 수원 정문으로 가주세요!",
      insider_tip_en: "Best photography spots are located on the 5th and 6th floor landings looking straight across the floating planetary sculptures. Great rainy-day sanctuary!",
      insider_tip_ko: "도서관 중앙 행성 조형물 정면이 보이는 5층과 6층 난간 코너가 가장 사진이 멋지게 나오는 뷰포인트입니다.",
      insider_tip_zh: "最佳摄影机位位于5楼和6楼的中庭回廊转角处，可正对漂浮的行星球体！下雨天也是绝佳的室内漫游圣地。"
    },
    {
      id: "suwon-galbi-food",
      region: "suwon",
      category: "food",
      name_en: "Suwon Wang-Galbi (King Ribs) & Chicken Street",
      name_ko: "수원 왕갈비 & 남문 통닭거리",
      name_zh: "水原王牛排 & 南门整鸡街",
      subtitle_en: "Korea's legendary savory grilled beef ribs and viral cauldron fried chicken",
      subtitle_ko: "조선시대 우시장 역사에서 시작된 수원 왕갈비와 가마솥 통닭거리",
      subtitle_zh: "源自朝鲜牛市历史的炭烤王牛排与铁锅香酥排骨炸鸡",
      image: "images/suwon_galbi.jpg",
      rating: 4.9,
      reviews: "11,300+",
      tags_en: ["Korean BBQ", "King Beef Ribs", "Cauldron Chicken", "Must Eat"],
      tags_ko: ["수원 왕갈비", "K-바비큐", "가마솥 통닭", "원조 맛집"],
      tags_zh: ["水原王牛排", "炭火烤肉", "铁锅炸鸡", "必吃老字号"],
      address_en: "Paldal-gu, Suwon-si (Near Paldalmun & Suwoncheon Stream)",
      address_ko: "경기도 수원시 팔달구 정조로 및 수원천로 일대",
      address_zh: "京畿道水原市八达区正祖路及水原川路一带",
      nearest_station_en: "Suwon Station - 10 min bus to Paldalmun Market",
      nearest_station_ko: "수원역에서 버스 10분, 팔달문(남문) 정류장 하차",
      nearest_station_zh: "水原站乘坐公交约10分钟，在八达门站下车步行3分钟",
      coordinates: { lat: 37.2796, lng: 127.0189 },
      hours_en: "11:30 - 22:00 (Restaurants open all year round)",
      hours_ko: "11:30 - 22:00 (업소별 상이)",
      hours_zh: "11:30 - 22:00 (各餐厅略有不同)",
      admission_en: "Galbi set: 45,000 - 65,000 KRW / Whole Chicken: 20,000 KRW",
      admission_ko: "왕갈비 1인분: 4~6만 원대 / 통닭 한 마리: 2만 원 내외",
      admission_zh: "王牛排单人份: 4~6万韩元 / 传统整只炸鸡: 约2万韩元",
      overview_en: "Historically home to the Joseon Dynasty's largest cattle market, Suwon developed Korea's most renowned beef barbecue tradition: 'Suwon Wang-Galbi' (massive 17cm-long short ribs marinated with salt, garlic, and fruit instead of heavy soy sauce). Nearby Suwon Whole Chicken Street is celebrated for crispy whole-fried chicken cooked in iron cauldrons and tossed in savory galbi sauce (viral from the movie 'Extreme Job').",
      overview_ko: "조선시대 3대 우시장이 섰던 수원은 전국에서 가장 유명한 갈비의 고장입니다. 소금과 과일로 깔끔하게 양념한 17cm 대형 왕갈비는 깊은 감칠맛을 자랑합니다. 인근 팔달문 통닭거리는 가마솥에 튀겨낸 바삭한 통닭과 영화 '극한직업'으로 세계적 화제가 된 '수원왕갈비통닭'의 원조입니다.",
      overview_zh: "水原曾是朝鲜时代三大牛市之一，因而诞生了全韩盛名远播的美食‘水原王牛排’——采用长达17厘米的大块优质牛排骨，辅以海盐和水果清爽腌制，炭火直烤肉香四溢。邻近的整鸡街以传统铁锅炸制金黄酥脆的整鸡闻名，电影《极限职业》中的‘水原王排骨炸鸡’正起源于此！",
      highlights_en: [
        "Legendary historic Galbi houses: Bonsuwon Galbi, Yeonpo Galbi, Gabojung.",
        "Suwon Wang-Galbi Chicken: Crisp cauldron-fried chicken glazed in sweet-savory charcoal barbecue sauce.",
        "Surrounded by vibrant traditional outdoor markets (Paldalmun Market, Motgol Market)."
      ],
      highlights_ko: [
        "유명 전통 갈비 명가 (가보정, 본수원갈비, 연포갈비 등).",
        "달콤짭조름한 갈비 양념과 바삭한 가마솥 튀김옷의 환상적인 조합 '왕갈비통닭'.",
        "정조대왕이 개설한 유서 깊은 팔달문 못골종합시장 구경 연계."
      ],
      highlights_zh: [
        "久负盛名的传统牛排老字号（如佳宝亭、本水原牛排、渊瀑牛排）。",
        "秘制咸甜排骨酱汁裹在热气腾腾酥脆铁锅炸鸡上的‘水原王排骨炸鸡’。",
        "紧邻历史悠久的八达门传统综合市场，感受地道韩国市井烟火气。"
      ],
      transit_guide_en: "Take Bus 11, 13, or 37 from Suwon Station to 'Paldalmun Market' (10 mins).",
      transit_guide_ko: "수원역에서 11, 13, 37번 버스를 타고 팔달문 시장 하차 후 수원천 방향 도보 3분.",
      transit_guide_zh: "在水原站乘坐公交11、13或37路至八达门市场下车，向水原川方向步行3分钟。",
      taxi_destination: "수원 통닭거리 (진미통닭 또는 용성통닭 앞) / 가보정 갈비",
      taxi_phrase: "기사님, 수원 통닭거리(진미통닭 근처)로 가주세요!",
      insider_tip_en: "Order the Wang-Galbi Whole Chicken set which comes with complimentary fried gizzards, garlic sauce, and shredded cabbage slaw.",
      insider_tip_ko: "통닭거리에서는 무료로 제공되는 닭모래집(똥집) 튀김과 양배추 샐러드를 곁들여 치맥(치킨+맥주)을 즐겨보세요.",
      insider_tip_zh: "在整鸡街点炸鸡通常附赠炸鸡胗和卷心菜沙拉，搭配韩国冰镇生啤酒体验经典‘炸鸡啤酒’（Chimaek）文化！"
    },
    {
      id: "gwanggyo-lake-park",
      region: "suwon",
      category: "nature",
      name_en: "Gwanggyo Lake Park & Alleyway",
      name_ko: "광교호수공원 & 앨리웨이",
      name_zh: "光教湖水公园 & Alleyway",
      subtitle_en: "Romantic illuminated lakeside boardwalks & European-style outdoor plaza",
      subtitle_ko: "도심 속 황홀한 야경 수변 데크로드와 라이프스타일 복합문화 광장",
      subtitle_zh: "浪漫水上木栈道与欧风复古砖石街区构筑的梦幻夜景公园",
      image: "images/gwanggyo_lake_park.jpg",
      rating: 4.8,
      reviews: "8,900+",
      tags_en: ["Nightscape", "Lake Boardwalk", "Chill Vibe", "Waterside Dining"],
      tags_ko: ["야경 명소", "수변 산책로", "로맨틱", "테라스 맛집"],
      tags_zh: ["绝美夜景", "湖上栈道", "浪漫露台", "都市休闲"],
      address_en: "102 Gwanggyohosu-gongwon-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do",
      address_ko: "경기도 수원시 영통구 광교호수로 102 (광교호수공원)",
      address_zh: "京畿道水原市灵通区光教湖水路102 (光教湖水公园)",
      nearest_station_en: "Gwanggyo Jungang Station (Shinbundang Line) - 15 min walk or 5 min bus",
      nearest_station_ko: "신분당선 광교중앙역 4번 출구에서 버스 5분 또는 도보 15분",
      nearest_station_zh: "新盆唐线 光教中央站 4号出口乘坐公交5分钟或步行15分钟",
      coordinates: { lat: 37.2829, lng: 127.0655 },
      hours_en: "Open 24 hours daily (Night illuminations until 23:00)",
      hours_ko: "24시간 상시 개방 (야간 경관 조명 23시까지 점등)",
      hours_zh: "24小时全天开放 (景观灯夜间亮至23:00)",
      admission_en: "Free admission",
      admission_ko: "무료 입장",
      admission_zh: "免费入场",
      overview_en: "The largest lake park in an urban area in Korea, Gwanggyo Lake Park features two expansive lakes (Woncheon and Sindae) linked by a dramatic suspended wooden boardwalk called the 'Urban Levee'. At night, the reflection of high-rise architectural towers dancing on the calm water creates an ultra-futuristic, peaceful vibe. Directly adjacent lies 'Alleyway Gwanggyo', an open-air pedestrian lifestyle courtyard with artsy dining.",
      overview_ko: "원천호수와 신대호수로 이루어진 대한민국 최대 규모의 도심 호수공원입니다. 물 위로 유려하게 굽이치는 원형 수변 데크길 '어반레비'를 따라 걸으면 현대적인 마천루 빌딩숲의 불빛이 호수에 투영되어 압도적인 미래지향적 야경을 선사합니다. 바로 옆 복합문화광장 '앨리웨이 광교'에서 테라스 식사를 즐기기 좋습니다.",
      overview_zh: "韩国最大规模的城市湖水公园，由远川湖与新大湖两大湖区组成。蜿蜒架设在水面之上的环形木栈道‘Urban Levee’全长1.6公里，夜幕降临后，现代摩天大厦璀璨灯火倒映在如镜水面，极具未来科幻感。紧邻的Alleyway街区充满欧式复古氛围，适合露天晚餐。",
      highlights_en: [
        "Urban Levee: 1.6km winding waterfront boardwalk illuminated in changing chromatic glow.",
        "Alleyway Gwanggyo: Charming open-air brick promenade lined with boutique bakeries and craft beer taverns.",
        "K-waterfront picnic lawns where locals gather with takeaway treats."
      ],
      highlights_ko: [
        "어반레비(Urban Levee): 다채로운 LED 조명이 물결치는 1.6km 원형 데크 산책로.",
        "앨리웨이 광교: 유럽풍 감성의 브릭 야외 광장과 트렌디한 베이커리 & 수제맥주 펍.",
        "잔디 광장과 전망대에서 즐기는 여유로운 피크닉 문화."
      ],
      highlights_zh: [
        "Urban Levee：变换流光溢彩LED灯带的1.6公里水上架空栈道。",
        "Alleyway光教：欧风红砖步道、精品法式烘焙店与精酿啤酒吧汇聚的潮流露天广场。",
        "宽阔的滨水草坪与观景台，本地人最爱的野餐与微风漫步圣地。"
      ],
      transit_guide_en: "Take the Shinbundang Line to Gwanggyo Jungang Station, then take local Bus 20, 20-1 or walk 15 minutes south.",
      transit_guide_ko: "신분당선 광교중앙역에서 시내버스 20번 또는 20-1번 탑승 후 '광교호수공원' 하차.",
      transit_guide_zh: "乘坐新盆唐线至光教中央站，换乘市内公交20或20-1路至光教湖水公园站下车。",
      taxi_destination: "광교호수공원 마당분수대 (또는 앨리웨이 광교 정문)",
      taxi_phrase: "기사님, 광교호수공원 앨리웨이(Alleyway) 입구로 가주세요!",
      insider_tip_en: "Arrive 30 minutes before dusk. Stroll the lake boardwalk to watch the twilight transition into a cyber-futuristic reflection, then head into Alleyway for craft beer.",
      insider_tip_ko: "일몰 30분 전에 도착해 노을에서 야경으로 바뀌는 순간을 감상한 뒤, 앨리웨이 야외 테라스에서 생맥주를 즐기는 것을 추천합니다.",
      insider_tip_zh: "建议在日落前30分钟到达，亲眼见证夕阳晚霞向赛博未来感湖面倒影转化的震撼瞬间，然后在Alleyway露台品尝精酿啤酒。"
    },

    // ---------------- YONGIN GIHEUNG ATTRACTIONS ----------------
    {
      id: "korean-folk-village",
      region: "giheung",
      category: "heritage",
      name_en: "Korean Folk Village (Minsokchon)",
      name_ko: "한국민속촌",
      name_zh: "韩国民俗村 (Minsokchon)",
      subtitle_en: "Living 150-acre Joseon dynasty open-air museum with interactive heritage",
      subtitle_ko: "조선시대 500년 삶이 고스란히 살아 숨쉬는 30만 평 야외 테마파크",
      subtitle_zh: "占地30万坪 生动重现朝鲜王朝500年日常的鲜活户外历史乐园",
      image: "images/korean_folk_village.jpg",
      rating: 4.9,
      reviews: "16,800+",
      tags_en: ["Joseon Era", "Hanbok Experience", "Folk Performances", "Living History"],
      tags_ko: ["조선시대 체험", "한복 대여", "전통 공연", "생생한 역사"],
      tags_zh: ["朝鲜时代", "韩服体验", "传统演出", "活态历史"],
      address_en: "90 Minsokchon-ro, Giheung-gu, Yongin-si, Gyeonggi-do",
      address_ko: "경기도 용인시 기흥구 민속촌로 90 (한국민속촌)",
      address_zh: "京畿道龙仁市器兴区民俗村路90 (韩国民俗村)",
      nearest_station_en: "Sanggal Station (Suin-Bundang Line) - 5 min bus / Suwon Station Free Shuttle",
      nearest_station_ko: "수인분당선 상갈역 3번 출구에서 버스 5분 / 수원역 무료 셔틀버스 운행",
      nearest_station_zh: "水仁盆唐线 上葛站 3号出口公交5分钟 / 水原站提供直通免费接驳巴士",
      coordinates: { lat: 37.2588, lng: 127.1172 },
      hours_en: "10:00 - 18:30 (Extended to 21:00 on spring/autumn weekends for night festival)",
      hours_ko: "10:00 - 18:30 (봄·가을 주말 야간개장 시 21:30까지 연장 운영)",
      hours_zh: "10:00 - 18:30 (春秋季周末夜间开放延长至21:30)",
      admission_en: "Adult All-Pass: 32,000 KRW ($24 USD) / Discounts with Hanbok rental",
      admission_ko: "성인 자유이용권: 32,000원 (한복 착용 시 현장 할인 혜택 제공)",
      admission_zh: "成人通票: 32,000韩元 (穿韩服入场可享门票优惠折扣)",
      overview_en: "Spanning over 245 acres of pristine nature in Giheung-gu, the Korean Folk Village brings the late Joseon Dynasty vividly to life. Over 270 authentic historic houses relocated from all across the Korean peninsula—from humble thatched farming cottages to majestic noble Yangban mansions—form a living community complete with craftsmen weaving baskets, blacksmiths pounding iron, and costumed historical characters interacting with visitors.",
      overview_ko: "용인시 기흥구에 위치한 한국민속촌은 30만 평 부지에 전국 각지에서 원형 그대로 이건 복원한 270여 동의 조선시대 전통 가옥(기와집, 초가집, 관아, 서당 등)을 보존한 초대형 야외 테마파크입니다. 대장장이, 옹기장인의 시연과 조선 시대 캐릭터 연기자들이 어우러져 시간여행을 선사합니다.",
      overview_zh: "位于龙仁市器兴区、占地达30万坪的韩国民俗村，完整复原了全韩各地迁建而来的270余栋朝鲜时代真实传统古建筑（瓦房、茅草屋、衙门、书堂等）。铁匠打铁、陶艺拉坯、古装NPC剧情互动，带您一秒穿越回数百年前的朝鲜王朝！",
      highlights_en: [
        "Daily dynamic live shows: Equestrian martial arts, Nongak (farmers' percussion dance), and tightrope walking (Jultagi).",
        "Rent a regal Hanbok and stroll across arched stone bridges over lotus-filled streams.",
        "Jumak traditional tavern: Taste freshly grilled seafood scallion pancakes (Haemul Pajeon) and sweet rice wine (Makgeolli) under straw eaves."
      ],
      highlights_ko: [
        "매일 열리는 마상무예, 신명나는 농악놀이, 아슬아슬한 줄타기 전통 공연.",
        "한복을 입고 시냇물이 흐르는 목교와 돌담길에서 찍는 인생 사진.",
        "초가지붕 주막에서 맛보는 지글지글 해물파전과 시원한 동동주/막걸리."
      ],
      highlights_zh: [
        "每日定期上演的高难度马上武艺、热闹非凡的农乐游行与非遗绝技走绳（Jultagi）。",
        "穿上华丽韩服漫步于石拱木桥与清澈溪流旁，拍出风雅的古风穿越照。",
        "在传统草顶酒馆品尝现烙海鲜葱饼与爽口的传统米酒（马格利酒）。"
      ],
      transit_guide_en: "From Sanggal Station (Suin-Bundang Line, Exit 3), take Bus 37 or 10-5 (5 mins). Direct free shuttle also runs between Suwon Station Tourist Info Center and the Folk Village entrance daily!",
      transit_guide_ko: "수인분당선 상갈역 3번 출구에서 37번, 10-5번 버스 탑승 후 민속촌 하차 (5분). 수원역 4번 출구 관광안내소 앞에서 민속촌 무료 셔틀버스도 정기 운행합니다.",
      transit_guide_zh: "从上葛站（水仁盆唐线3号出口）乘37或10-5路公交5分钟即达。水原站4号出口观光问讯处前每日提供往返民俗村的免费直通接驳巴士！",
      taxi_destination: "용인 한국민속촌 정문 매표소",
      taxi_phrase: "기사님, 용인 기흥 한국민속촌 매표소 앞 정문으로 가주세요!",
      insider_tip_en: "Hanbok rental shops right outside the main gate offer full costumes with hair styling for approx. 20,000-25,000 KRW. Wearing Hanbok gives you a memorable experience and great ticket discounts!",
      insider_tip_ko: "민속촌 정문 앞 한복 대여점에서 한복과 머리장식을 풀세트로 대여해 입장하면 조선시대 주인공이 된 듯한 몰입감과 함께 입장료 할인도 받을 수 있습니다.",
      insider_tip_zh: "正门外有多家韩服租赁店（约20,000~25,000韩元含发型设计），穿着韩服入园不仅拍照超赞，还能享受现场门票折扣！"
    },
    {
      id: "nam-june-paik",
      region: "giheung",
      category: "art_modern",
      name_en: "Nam June Paik Art Center",
      name_ko: "백남준아트센터",
      name_zh: "白南准艺术中心",
      subtitle_en: "Avant-garde sanctuary celebrating the father of global video art",
      subtitle_ko: "비디오 아트의 거장 백남준의 예술혼이 살아 숨쉬는 현대미술관",
      subtitle_zh: "世界多媒体视频艺术鼻祖白南准的先锋现代艺术殿堂",
      image: "images/nam_june_paik.jpg",
      rating: 4.8,
      reviews: "6,200+",
      tags_en: ["Media Art", "Contemporary", "Nam June Paik", "Architectural Landmark"],
      tags_ko: ["미디어아트", "현대미술", "백남준", "건축미"],
      tags_zh: ["多媒体艺术", "现代装置", "白南准", "前卫建筑"],
      address_en: "10 Paiknamjune-ro, Giheung-gu, Yongin-si, Gyeonggi-do",
      address_ko: "경기도 용인시 기흥구 백남준로 10 (백남준아트센터)",
      address_zh: "京畿道龙仁市器兴区白南准路10 (白南准艺术中心)",
      nearest_station_en: "Sanggal Station (Suin-Bundang Line) - Exit 4 (10 min walk)",
      nearest_station_ko: "수인분당선 상갈역 4번 출구에서 도보 10분",
      nearest_station_zh: "水仁盆唐线 上葛站 4号出口步行10分钟",
      coordinates: { lat: 37.2689, lng: 127.1102 },
      hours_en: "10:00 - 18:00 (Closed every Monday, open on holidays)",
      hours_ko: "10:00 - 18:00 (매주 월요일 휴관, 공휴일 정상 개관)",
      hours_zh: "10:00 - 18:00 (每周一闭馆，法定节假日正常开馆)",
      admission_en: "Free admission (Special exhibitions may have nominal fee)",
      admission_ko: "무료 관람 (기획 전시에 따라 일부 유료)",
      admission_zh: "常设展免费参观 (部分特展可能收取少量费用)",
      overview_en: "The Nam June Paik Art Center was specifically envisioned by Korean-American artist Nam June Paik, widely recognized worldwide as the father of video art and interactive media installations. Its futuristic curved glass facade mirrors the surrounding wooded hills, while the vast galleries showcase mesmerizing historic installations composed of vintage cathode-ray televisions, neon tubes, laser sculptures, and experimental synthesizers.",
      overview_ko: "세계적인 비디오 아트의 창시자 백남준의 이름을 딴 유일한 미술관입니다. 예술가가 생전에 '백남준이 오래 사는 집'이라 명명했던 이곳은 유려한 곡면 유리 외관과 함께 브라운관 TV 타워, 레이저 조각, 참여형 전자 미디어 설치작품 등 파격적이고 혁신적인 현대 미디어 아트를 선보입니다.",
      overview_zh: "全球唯一以新媒体视频艺术开山鼻祖白南准命名的艺术馆，艺术家生前称其为‘白南准永生的家’。艺术馆外观由流畅的曲线玻璃幕墙构成，馆内展出由大量复古显像管CRT电视机塔、霓虹光管、激光雕塑及合成器构成的先锋媒体艺术经典作品。",
      highlights_en: [
        "'TV Garden': Dozens of television monitors blooming like exotic electronic flowers amidst lush indoor jungle flora.",
        "'Elephant Cart' & Video Synthesizer installations breaking boundaries of technology and perception.",
        "Directly connected to the Gyeonggi Provincial Museum and Gyeonggi Children's Museum via a scenic wooded trail."
      ],
      highlights_ko: [
        "'TV 가든': 울창한 생화 식물원 속에서 모니터들이 전자 꽃처럼 피어나는 대표 대표작.",
        "레트로 TV 브라운관 타워와 비디오 신디사이저의 리드미컬한 전자 미디어 예술.",
        "숲길 산책로를 통해 경기도박물관, 경기도어린이박물관과 바로 연결되는 융합 문화 클러스터."
      ],
      highlights_zh: [
        "《电视花园 (TV Garden)》：数十台电视显示器在真实繁茂的热带植物园中如奇异花朵般绽放。",
        "由复古显像管与马车装置构建的艺术奇想，打破技术与知觉的界限。",
        "林间步行小径直接串联京畿道博物馆与儿童博物馆，构成大型文化聚集区。"
      ],
      transit_guide_en: "From Sanggal Station (Suin-Bundang Line, Exit 4), walk straight along the cultural avenue for 10 minutes, or take Bus 51 or 54 for 2 stops.",
      transit_guide_ko: "수인분당선 상갈역 4번 출구에서 경기도박물관 방향으로 직진 도보 10분, 또는 시내버스 51, 54번 탑승.",
      transit_guide_zh: "从上葛站（水仁盆唐线4号出口）向京畿道博物馆方向直行步行10分钟，或乘坐51、54路公交坐2站。",
      taxi_destination: "용인 백남준아트센터 정문",
      taxi_phrase: "기사님, 용인 기흥구 백남준아트센터(경기도박물관 옆)로 가주세요!",
      insider_tip_en: "Free guided docent tours in English are periodically offered, and the museum cafe features great coffee overlooking the bamboo garden.",
      insider_tip_ko: "아트센터 1층 카페에서 대나무 정원을 바라보며 커피를 마시거나, 바로 옆 경기도박물관과 묶어 2시간 코스로 관람하는 것을 추천합니다.",
      insider_tip_zh: "推荐在1楼咖啡厅一边品味香浓咖啡一边欣赏竹林庭院，与紧邻的京畿道博物馆打包连游非常充实！"
    },
    {
      id: "gyeonggi-provincial-museum",
      region: "giheung",
      category: "heritage",
      name_en: "Gyeonggi Provincial Museum",
      name_ko: "경기도박물관",
      name_zh: "京畿道博物馆",
      subtitle_en: "Comprehensive treasure house of Gyeonggi-do's 1,000-year millennial history",
      subtitle_ko: "천년 경기 역사의 숨결과 찬란한 보물들을 집대성한 대표 박물관",
      subtitle_zh: "荟萃京畿千年历史呼吸与灿烂王室瑰宝的代表性博物馆",
      image: "images/korean_folk_village.jpg",
      rating: 4.7,
      reviews: "4,100+",
      tags_en: ["Gyeonggi Heritage", "Royal Treasures", "Artifacts", "Interactive"],
      tags_ko: ["경기 천년 역사", "왕실 유물", "고고학", "체험형"],
      tags_zh: ["千年历史", "王室瑰宝", "考古遗物", "互动体验"],
      address_en: "119 Museum-ro, Giheung-gu, Yongin-si, Gyeonggi-do",
      address_ko: "경기도 용인시 기흥구 뮤지엄로 119 (경기도박물관)",
      address_zh: "京畿道龙仁市器兴区博物馆路119 (京畿道博物馆)",
      nearest_station_en: "Sanggal Station (Suin-Bundang Line) - 10 min walk",
      nearest_station_ko: "수인분당선 상갈역 4번 출구 도보 10분",
      nearest_station_zh: "水仁盆唐线 上葛站 4号出口步行10分钟",
      coordinates: { lat: 37.2698, lng: 127.1089 },
      hours_en: "10:00 - 18:00 (Closed every Monday)",
      hours_ko: "10:00 - 18:00 (매주 월요일 휴관)",
      hours_zh: "10:00 - 18:00 (每周一闭馆)",
      admission_en: "Free admission",
      admission_ko: "무료 관람",
      admission_zh: "免费参观",
      overview_en: "Adjacent to the Nam June Paik Art Center, the Gyeonggi Provincial Museum is the flagship museum documenting the profound culture, archaeology, folk art, and royal heritage of the Gyeonggi province surrounding Seoul. Explore prehistoric relics, celadon ceramics, royal Joseon portrait paintings, and sacred temple bells.",
      overview_ko: "백남준아트센터 바로 옆에 자리한 경기도박물관은 서울을 둘러싼 경기 천년의 역사와 선사시대부터 근현대에 이르는 유물, 도자기, 왕실 복식, 초상화 등을 한자리에서 감상할 수 있는 대표 역사 박물관입니다.",
      overview_zh: "紧邻白南准艺术中心的京畿道博物馆是全面展示环绕首尔的京畿千年历史、考古发现、高丽青瓷、朝鲜白瓷与王室服饰肖像画的旗舰级历史文化殿堂。",
      highlights_en: [
        "Extensive Joseon Dynasty nobility portraits and royal heirloom textiles.",
        "Goryeo Celadon and Joseon White Porcelain Masterpieces.",
        "Peaceful outdoor stone lantern sculpture garden and Korean pine grove."
      ],
      highlights_ko: [
        "보물로 지정된 조선시대 공신 초상화와 출토 복식 명품 전시.",
        "은은한 비색의 고려청자와 단아한 조선백자 도자기 컬렉션.",
        "야외 전통 석조물 정원과 솔숲 산책로."
      ],
      highlights_zh: [
        "国家宝物级别的朝鲜时代功臣肖像画与珍贵出土王室服饰展示。",
        "幽雅翡翠色泽的高丽青瓷与端庄素雅的朝鲜白瓷典藏。",
        "室外传统石塔雕塑园与松林幽静漫步道。"
      ],
      transit_guide_en: "Walk 2 minutes from Nam June Paik Art Center through the connecting outdoor plaza.",
      transit_guide_ko: "백남준아트센터 맞은편 광장에서 도보 2분.",
      transit_guide_zh: "从白南准艺术中心正门穿过连接广场步行2分钟即可到达。",
      taxi_destination: "경기도박물관 정문",
      taxi_phrase: "기사님, 용인 상갈동 경기도박물관 정문으로 가주세요!",
      insider_tip_en: "Since it is located in the same compound as the Nam June Paik Art Center, you can visit both in one easy morning!",
      insider_tip_ko: "백남준아트센터와 붙어있어 두 곳을 묶어 오전 일정으로 관람하면 알찬 문화 투어가 완성됩니다.",
      insider_tip_zh: "与白南准艺术中心同属一个文化园区，安排在同一个上午连同参观不仅省时而且体验极佳！"
    },
    {
      id: "samsung-innovation-museum",
      region: "suwon",
      category: "art_modern",
      name_en: "Samsung Innovation Museum (S/I/M)",
      name_ko: "삼성 이노베이션 뮤지엄",
      name_zh: "三星创新博物馆 (S/I/M)",
      subtitle_en: "Inspiring journey through the global history of electricity, telecommunications & silicon",
      subtitle_ko: "전기, 통신, 반도체의 인류 발전사와 삼성전자의 혁신을 만나는 테크 성지",
      subtitle_zh: "见证人类电气、通信、半导体进化史与三星创新科技的科技圣地",
      image: "images/starfield_suwon.jpg",
      rating: 4.8,
      reviews: "5,300+",
      tags_en: ["Tech History", "Innovation", "Electronics", "Futuristic"],
      tags_ko: ["테크 역사", "기술 혁신", "전자 박물관", "미래 지향"],
      tags_zh: ["科技历史", "技术创新", "电子科技", "未来生活"],
      address_en: "129 Samsung-ro, Yeongtong-gu, Suwon-si, Gyeonggi-do (Border of Suwon & Giheung)",
      address_ko: "경기도 수원시 영통구 삼성로 129 (삼성 디지털시티)",
      address_zh: "京畿道水原市灵通区三星路129 (三星数字城)",
      nearest_station_en: "Mangpo Station (Suin-Bundang Line) - 10 min taxi/bus",
      nearest_station_ko: "수인분당선 망포역 4번 출구에서 버스 10분 또는 택시 기본요금",
      nearest_station_zh: "水仁盆唐线 网浦站 4号出口乘公交10分钟或起步价打车",
      coordinates: { lat: 37.2575, lng: 127.0543 },
      hours_en: "Weekdays 10:00 - 18:00 (Advance reservation required online) / Saturdays 09:00 - 17:00 (Walk-in available)",
      hours_ko: "평일 10:00 - 18:00 (사전 온라인 예약제) / 토요일 09:00 - 17:00 (자율 관람)",
      hours_zh: "工作日 10:00 - 18:00 (需线上预约) / 周六 09:00 - 17:00 (可自由免预约入场)",
      admission_en: "Free admission",
      admission_ko: "무료 관람",
      admission_zh: "免费参观",
      overview_en: "Situated in the heart of Samsung Digital City on the Suwon-Giheung border, S/I/M is Korea's premier museum dedicated exclusively to the history of the electronics industry. Trace human breakthroughs from Michael Faraday, Thomas Edison, and Alexander Graham Bell, through vacuum tubes, early televisions, semiconductors, mobile communications, and the future of AI-driven smart life.",
      overview_ko: "수원과 기흥의 경계인 삼성전자 디지털시티에 위치한 국내 최대 전자 산업 박물관입니다. 패러데이와 에디슨의 전기 발명부터 진공관, 초기 라디오와 TV, 반도체의 탄생, 스마트폰 혁명과 미래 스마트 홈 기술까지 기술 문명의 진화 과정을 생생하게 체험할 수 있습니다.",
      overview_zh: "位于水原与器兴交界处三星电子数字城核心区域，是韩国规模最大的电子工业科技博物馆。生动呈现从法拉第与爱迪生的电学发明，到电子管、早期的收音机与电视、半导体的崛起、智能手机革命与未来AI智能生活的全景历程。",
      highlights_en: [
        "Hall 1 (Seeds of Innovation): Genuine historical artifacts from inventors Edison, Morse, and Bell.",
        "Hall 2 (Core of Innovation): The evolution of microchips, displays, and telecommunications.",
        "Hall 3 (Inspiring the Future): 180-degree panoramic cinema and next-generation smart lifestyle showcases."
      ],
      highlights_ko: [
        "1관: 에디슨 전구, 초기 라디오 등 전자 산업의 여명을 연 진귀한 오리지널 유물들.",
        "2관: 세상을 바꾼 반도체와 디스플레이, 이동통신의 기술적 진화 과정.",
        "3관: 180도 파노라마 스크린 영상과 미래 스마트 시티를 체험하는 인터랙티브 룸."
      ],
      highlights_zh: [
        "1馆：爱迪生灯泡、早期莫尔斯电报机等开启电子工业时代的珍稀原始藏品。",
        "2馆：改变人类历史的半导体芯片、显示屏与移动通信科技演进。",
        "3馆：180度全景巨幕影院与沉浸式体验未来智慧城市的互动展厅。"
      ],
      transit_guide_en: "From Mangpo Station (Suin-Bundang Line), take Bus 390 or a quick 5-min taxi ride to Samsung Digital City Central Gate.",
      transit_guide_ko: "수인분당선 망포역에서 390번 버스 탑승 또는 택시로 5분 거리 (삼성 디지털시티 정문).",
      transit_guide_zh: "从网浦站（水仁盆唐线）乘坐390路公交或打车5分钟即可到达三星数字城正门。",
      taxi_destination: "수원 삼성전자 디지털시티 삼성 이노베이션 뮤지엄",
      taxi_phrase: "기사님, 수원 매탄동 삼성 디지털시티 이노베이션 뮤지엄(S/I/M) 정문으로 가주세요!",
      insider_tip_en: "For foreign travelers visiting on Saturdays, no reservation is needed! English audio guides and multi-lingual brochures are provided at the welcome desk.",
      insider_tip_ko: "토요일에는 사전 예약 없이 자유롭게 관람할 수 있습니다. 인포메이션 데스크에서 영문 오디오 가이드 기기를 무료로 대여해 줍니다.",
      insider_tip_zh: "外国游客在周六前往无需提前预约即可自由参观！问讯台免费提供中文语音导览设备与多语种导览手册。"
    },
    {
      id: "giheung-lake-park",
      region: "giheung",
      category: "nature",
      name_en: "Giheung Lake Park (Eco-Island & Trails)",
      name_ko: "기흥호수공원",
      name_zh: "器兴湖水公园",
      subtitle_en: "Peaceful 10km waterside walking loop with sunset reed beds",
      subtitle_ko: "황홀한 일몰 갈대밭과 10km 순환 수변 둘레길이 매력적인 힐링 호수",
      subtitle_zh: "漫步金色芦苇荡与10公里环湖亲水栈道的惬意治愈名胜",
      image: "images/gwanggyo_lake_park.jpg",
      rating: 4.7,
      reviews: "3,800+",
      tags_en: ["Lake Trail", "Eco Walk", "Peaceful", "Sunset Spot"],
      tags_ko: ["수변 둘레길", "생태 공원", "여유로운 힐링", "일몰 명소"],
      tags_zh: ["环湖步道", "生态公园", "静谧疗愈", "落日胜地"],
      address_en: "Dongtan-gicheon-ro, Giheung-gu, Yongin-si, Gyeonggi-do",
      address_ko: "경기도 용인시 기흥구 동탄기천로 일원 (기흥호수공원)",
      address_zh: "京畿道龙仁市器兴区东滩器川路一带 (器兴湖水公园)",
      nearest_station_en: "Giheung Station or Sanggal Station - 10 min bus",
      nearest_station_ko: "수인분당선 기흥역/상갈역에서 버스로 10분",
      nearest_station_zh: "水仁盆唐线 器兴站/上葛站乘公交约10分钟",
      coordinates: { lat: 37.2345, lng: 127.1023 },
      hours_en: "Open 24 hours daily",
      hours_ko: "24시간 상시 개방",
      hours_zh: "24小时全天开放",
      admission_en: "Free admission",
      admission_ko: "무료 입장",
      admission_zh: "免费入场",
      overview_en: "Once an agricultural reservoir, Giheung Lake Park has blossomed into one of Gyeonggi-do's premier ecological walking corridors. Featuring a 10 km wooden circular trail skirting water reeds, floating footbridges, and shaded pine groves, it is a tranquil escape far from city hustle.",
      overview_ko: "기흥저수지를 친환경 생태 휴식 공간으로 탈바꿈한 대형 호수공원입니다. 10km에 달하는 순환 둘레길과 물 위를 걷는 수변 데크로드, 갈대숲이 어우러져 사계절 내내 평화로운 산책과 자전거 라이딩을 즐길 수 있습니다.",
      overview_zh: "由蓄水库华丽转身为京畿道代表性亲水生态休闲胜地。长达10公里的环湖步道环绕着金色芦苇荡、水上浮桥与松树林，是远离都市喧嚣、尽享微风与自然的纯净休憩之所。",
      highlights_en: [
        "Floating boardwalk trails over golden reed beds ideal for birdwatching.",
        "Stunning golden-orange sunsets reflected across the wide water expanse.",
        "Quiet lakeside coffee roasteries with peaceful patio seating."
      ],
      highlights_ko: [
        "물 위를 걷는 부유식 데크 산책로와 계절별 철새 서식지.",
        "탁 트인 수평선 너머로 붉게 물드는 기흥호수 석양 풍경.",
        "여유로운 호수 뷰를 감상할 수 있는 호반 베이커리 카페들."
      ],
      highlights_zh: [
        "架设在芦苇湿地之上的浮式木栈道，沿途常能观赏候鸟栖息。",
        "宽阔湖面上渲染出的金黄橙红色壮丽落日晚霞。",
        "依湖而建的幽静烘焙咖啡馆与观湖露天露台。"
      ],
      transit_guide_en: "From Giheung Station or Singal, take Town Bus 28-3 or Bus 156 (10 mins).",
      transit_guide_ko: "수인분당선 기흥역 또는 상갈역에서 마을버스 28-3번 탑승 후 기흥호수공원 정류장 하차.",
      transit_guide_zh: "从器兴站或上葛站乘坐乡村小巴28-3路或156路公交至器兴湖水公园站下车。",
      taxi_destination: "기흥호수공원 조정경기장 주차장",
      taxi_phrase: "기사님, 용인 기흥호수공원 수변데크 산책로 입구로 가주세요!",
      insider_tip_en: "Rent a bicycle near the northern park entrance to cruise along the lake breeze.",
      insider_tip_ko: "공원 북측 진입로에서 자전거를 대여해 시원한 호숫바람을 맞으며 둘레길을 달려보세요.",
      insider_tip_zh: "可在公园北侧入口处租借自行车，迎着清凉的湖风骑行游览10公里环湖道。"
    }
  ],

  // ---------------- CURATED ITINERARIES (SUWON + GIHEUNG) ----------------
  itineraries: [
    {
      id: "course-heritage",
      title_en: "UNESCO Heritage & Joseon Dynasty Living Culture",
      title_ko: "유네스코 세계유산과 조선 생생 전통 1일 코스",
      title_zh: "世界文化遗产与朝鲜生动传统文化1日游",
      badge_en: "Top Tourist Pick",
      badge_ko: "외국인 선호도 1위",
      badge_zh: "外国游客人气首选",
      duration_en: "Full Day (8 - 9 hours)",
      duration_ko: "당일 코스 (8~9시간 소요)",
      duration_zh: "全天行程 (约8~9小时)",
      tags_en: ["UNESCO", "Hanbok", "King Galbi", "Time Travel"],
      tags_ko: ["세계문화유산", "한복 체험", "수원갈비", "시간여행"],
      tags_zh: ["世界遗产", "韩服体验", "水原排骨", "时光穿越"],
      summary_en: "The ultimate journey linking Suwon's 18th-century royal engineering with Yongin Giheung's vibrant Joseon folk village, rounded off by legendary Korean barbecue.",
      summary_ko: "18세기 정조대왕의 철학이 담긴 수원화성과 기흥의 생생한 한국민속촌, 그리고 원조 수원 왕갈비를 하루에 마스터하는 시그니처 코스입니다.",
      summary_zh: "凝聚18世纪正祖大王治国哲学的世界遗产水原华城，与器兴生动再现的韩国民俗村，搭配元祖水原王牛排的招牌经典一日路线。",
      stops: [
        {
          time: "09:30 AM",
          place_id: "suwon-hwaseong",
          name_en: "Suwon Hwaseong Fortress & Haenggung Palace",
          name_ko: "수원화성 & 화성행궁 관람",
          name_zh: "游览水原华城与华城行宫",
          activity_en: "Walk along Janganmun gate, visit the King's temporary palace, and see the graceful Banghwasuryujeong pavilion.",
          activity_ko: "웅장한 장안문 성곽길을 산책하고 화성행궁과 방화수류정의 빼어난 절경을 감상합니다.",
          activity_zh: "漫步于雄伟的长安门城墙，参观国王御用行宫，欣赏访花随柳亭的如画风光。"
        },
        {
          time: "12:00 PM",
          place_id: "suwon-galbi-food",
          name_en: "Lunch: Authentic Suwon Wang-Galbi Feast",
          name_ko: "점심: 원조 수원 왕갈비 & 통닭",
          name_zh: "午餐：元祖水原王牛排 & 铁锅炸鸡",
          activity_en: "Savor tender, marinated beef short ribs grilled over open charcoal, paired with diverse Korean banchan.",
          activity_ko: "참숯 위에서 구워내는 명품 수원 왕갈비와 신선한 쌈채소, 풍성한 반찬을 맛봅니다.",
          activity_zh: "在炭火上烤制外焦里嫩的招牌水原王牛排，品尝新鲜包饭蔬菜与数十种丰富韩式小菜。"
        },
        {
          time: "01:30 PM",
          place_id: null,
          name_en: "Transit: Suwon to Giheung (Quick Subway or Shuttle)",
          name_ko: "이동: 수원 ➡️ 용인 기흥 (지하철 또는 직행 셔틀)",
          name_zh: "交通：水原 ➡️ 龙仁器兴 (水仁盆唐线或直达接驳车)",
          activity_en: "Take Suin-Bundang Subway Line from Suwon Stn to Sanggal Stn (approx. 18 mins), or take the direct Folk Village Shuttle.",
          activity_ko: "수인분당선을 타고 수원역에서 상갈역으로 이동(약 18분)하거나 민속촌 직행 셔틀버스를 이용합니다.",
          activity_zh: "搭乘水仁盆唐线从水原站直达上葛站(约18分钟)，或在水原站搭乘民俗村免费接驳巴士。"
        },
        {
          time: "02:15 PM",
          place_id: "korean-folk-village",
          name_en: "Yongin Korean Folk Village (Minsokchon)",
          name_ko: "용인 한국민속촌 생생 체험",
          name_zh: "体验龙仁韩国民俗村",
          activity_en: "Rent a Hanbok costume, watch thrilling equestrian shows and tightrope acrobats, and enjoy Haemul Pajeon at the traditional tavern.",
          activity_ko: "한복을 입고 전국 각지의 조선시대 가옥을 탐방하며, 마상무예와 전통 공연, 주막 파전을 즐깁니다.",
          activity_zh: "换上韩服穿梭于朝鲜时代古建筑群，观看马上武艺与走绳绝活，在古风酒馆享用海鲜葱饼与米酒。"
        },
        {
          time: "06:30 PM",
          place_id: "suwon-hwaseong",
          name_en: "Evening Finale: Flying Suwon Hot Air Balloon",
          name_ko: "저녁 피날레: 플라잉 수원 야간 열기구",
          name_zh: "夜晚压轴：飞行水原 夜空热气球",
          activity_en: "Float 150m in the air to marvel at the fortress lit up like a glowing golden dragon across the night landscape.",
          activity_ko: "150m 상공에서 황금빛 용처럼 빛나는 수원화성의 성곽 야경을 한눈에 내려다보며 하루를 마무리합니다.",
          activity_zh: "乘坐系留式热气球升至150米高空，俯瞰水原华城宛若金色巨龙蜿蜒盘踞的璀璨夜景。"
        }
      ]
    },
    {
      id: "course-tech-art",
      title_en: "Futuristic Tech, Media Art & Megamall Odyssey",
      title_ko: "미래 테크, 백남준 미디어아트 & 초대형 몰 탐방",
      title_zh: "未来科技、白南准多媒体艺术与超级商场探秘",
      badge_en: "Modern & Trendy",
      badge_ko: "현대 & 트렌디",
      badge_zh: "现代 & 潮流风尚",
      duration_en: "Full Day (7 - 8 hours)",
      duration_ko: "당일 코스 (7~8시간 소요)",
      duration_zh: "全天行程 (约7~8小时)",
      tags_en: ["Starfield", "Nam June Paik", "Samsung S/I/M", "Nightscape"],
      tags_ko: ["스타필드 수원", "백남준아트센터", "삼성 뮤지엄", "호수 야경"],
      tags_zh: ["Starfield", "白南准", "三星科技馆", "梦幻湖水夜景"],
      summary_en: "Experience South Korea's world-leading tech innovation, visionary contemporary video art, and the jaw-dropping architectural spectacle of Starfield Library.",
      summary_ko: "대한민국의 세계적인 첨단 전자 기술사, 백남준의 선구적인 미디어 아트, 스타필드 수원의 압도적인 별마당 도서관을 엮은 코스입니다.",
      summary_zh: "领略韩国全球领先的前沿电子科技历史、大师白南准的开创性媒体艺术，打卡震撼视界的星空图书馆。",
      stops: [
        {
          time: "10:00 AM",
          place_id: "samsung-innovation-museum",
          name_en: "Samsung Innovation Museum (S/I/M)",
          name_ko: "삼성 이노베이션 뮤지엄 (수원-기흥 경계)",
          name_zh: "三星创新博物馆 (水原-器兴交界)",
          activity_en: "Explore historical inventions of telecommunications and witness the cutting edge of semiconductors and smart electronics.",
          activity_ko: "전기·전자 통신의 역사적 발명품들과 반도체 신화, 미래 스마트홈 기술을 둘러봅니다.",
          activity_zh: "参观电气通信领域的人类伟大发明原件，见证半导体奇迹与前沿智能家居蓝图。"
        },
        {
          time: "12:30 PM",
          place_id: "nam-june-paik",
          name_en: "Nam June Paik Art Center & Gyeonggi Museum",
          name_ko: "백남준아트센터 & 경기도박물관 (기흥 상갈)",
          name_zh: "白南准艺术中心 & 京畿道博物馆 (器兴上葛)",
          activity_en: "Immerse yourself in rhythmic video towers, cathode-ray installations, and contemporary electronic genius.",
          activity_ko: "비디오 아트의 거장 백남준의 기념비적 설치작품과 미디어 아트를 몰입형으로 감상합니다.",
          activity_zh: "沉浸式感受大师白南准划时代的复古电视显像管塔与律动电子新媒体装置。"
        },
        {
          time: "03:30 PM",
          place_id: "starfield-suwon",
          name_en: "Starfield Suwon & Byeolmadang Library",
          name_ko: "스타필드 수원 & 별마당 도서관",
          name_zh: "水原Starfield & 星空图书馆",
          activity_en: "Photograph the monumental 22m curved library bookshelves, shop trending K-fashion brands, and sample artisan desserts.",
          activity_ko: "웅장한 22m 별마당 도서관에서 인생샷을 찍고, 트렌디한 K-패션 쇼핑과 디저트를 즐깁니다.",
          activity_zh: "在22米高星空图书馆拍摄大片，逛遍最新K-Fashion时尚潮牌，品尝精致甜点。"
        },
        {
          time: "07:00 PM",
          place_id: "gwanggyo-lake-park",
          name_en: "Gwanggyo Lake Park & Alleyway Nightscape",
          name_ko: "광교호수공원 & 앨리웨이 야경 산책",
          name_zh: "光教湖水公园 & Alleyway夜景漫步",
          activity_en: "Dine by the waterside terrace and take a serene walk along the illuminated 'Urban Levee' floating boardwalk.",
          activity_ko: "화려한 빌딩숲 불빛이 호수에 비치는 수변 데크길을 산책하고 브릭 광장에서 시원한 수제맥주를 곁들입니다.",
          activity_zh: "漫步于水上发光浮桥Urban Levee，眺望霓虹倒影，在欧风红砖街区享受美味晚餐与精酿啤酒。"
        }
      ]
    },
    {
      id: "course-romantic-chilling",
      title_en: "Slow Travel: Hipster Cafes, Hanok & Sunset Lakes",
      title_ko: "슬로우 트래블: 행리단길 카페, 고즈넉한 한옥 & 호숫가 힐링",
      title_zh: "慢旅行：行理团路咖啡、静谧韩屋与落日湖水疗愈",
      badge_en: "Relaxed & Photogenic",
      badge_ko: "여유 & 힐링",
      badge_zh: "悠闲 & 绝美出片",
      duration_en: "Half to Full Day (6 hours)",
      duration_ko: "반나절~1일 코스 (약 6시간)",
      duration_zh: "半天至一日 (约6小时)",
      tags_en: ["Cafes", "K-Drama Spots", "Lake Walking", "Chill"],
      tags_ko: ["감성 카페", "K-드라마 촬영지", "호수 산책", "힐링"],
      tags_zh: ["感性咖啡", "韩剧打卡", "湖畔散步", "身心疗愈"],
      summary_en: "A relaxing aesthetic day designed for travelers who love boutique cafes, indie craft shops, picturesque drama backdrops, and tranquil lake breezes.",
      summary_ko: "바쁜 일정 대신 감각적인 한옥 카페, 아기자기한 독립 소품숍, 호숫가 노을을 만끽하며 힐링하는 여유로운 코스입니다.",
      summary_zh: "专为喜爱小众精品咖啡馆、文创设计小店、热门韩剧打卡点与惬意湖畔微风的旅行者设计的治愈系漫游路线。",
      stops: [
        {
          time: "11:30 AM",
          place_id: "haengnidan-gil",
          name_en: "Brunch at Haengnidan-gil Cafe Street",
          name_ko: "행리단길 한옥 카페 & 브런치",
          name_zh: "行理团路韩屋咖啡早午餐",
          activity_en: "Stroll quaint alleys, snap photos at famous K-drama shooting spots, and enjoy specialty coffees and pastries.",
          activity_ko: "골목 사이사이 감성 한옥 카페에서 브런치를 즐기고 드라마 촬영지 스팟에서 사진을 남깁니다.",
          activity_zh: "在幽静巷弄的韩屋咖啡厅享用早午餐，打卡《非常律师禹英禑》等取景地。"
        },
        {
          time: "02:30 PM",
          place_id: "suwon-hwaseong",
          name_en: "Banghwasuryujeong Lotus Pond Picnic",
          name_ko: "방화수류정 & 용연 연못 힐링",
          name_zh: "访花随柳亭 & 龙渊荷花池野餐",
          activity_en: "Sit by the willow-shaded pond under the cliffside pavilion with traditional tea or snacks.",
          activity_ko: "버드나무가 드리워진 용연 연못 잔디밭에서 화홍문과 방화수류정의 고즈넉한 정취를 만끽합니다.",
          activity_zh: "在垂柳依依的龙渊池草坪边小憩，手捧传统茶饮，欣赏华虹门与古亭风姿。"
        },
        {
          time: "05:00 PM",
          place_id: "giheung-lake-park",
          name_en: "Giheung Lake Park Golden Sunset Walk",
          name_ko: "기흥호수공원 황금빛 석양 산책",
          name_zh: "器兴湖水公园金色日落漫步",
          activity_en: "Walk the floating wooden trail over golden reed beds as the sun casts a warm pink-orange glow across the wide lake.",
          activity_ko: "갈대밭 위로 조성된 수상 둘레길을 걸으며 탁 트인 호수 위로 내려앉는 노을을 감상합니다.",
          activity_zh: "漫步在金色芦苇荡间的水上栈道，沐浴在将广阔湖面染成粉橙色的醉人夕阳余晖中。"
        }
      ]
    }
  ],

  // ---------------- TRANSIT & MOBILITY GUIDE ----------------
  transit_guide: {
    metro_hub: {
      title_en: "The Suin-Bundang Line Connection (Suwon ↔ Giheung)",
      title_ko: "수인분당선으로 15분 만에 연결되는 수원 ↔ 기흥",
      title_zh: "搭乘水仁盆唐线 15分钟快速连通 水原 ↔ 器兴",
      desc_en: "You don't need expensive taxis to travel between Suwon and Giheung! The yellow Suin-Bundang Subway Line directly bridges both areas in just 15-20 minutes.",
      desc_ko: "수원과 기흥 사이는 비싼 택시 없이도 노란색 수인분당선 전철로 15~20분 만에 바로 오갈 수 있습니다.",
      desc_zh: "往返于水原与器兴之间无需昂贵的出租车！明黄色的水仁盆唐线地铁仅需15~20分钟即可轻松直达两地各大景点枢纽。",
      stations: [
        { name_en: "Suwon Station", name_ko: "수원역", name_zh: "水原站", note_en: "KTX, Line 1, Suwon Fortress Bus transfer", note_ko: "KTX, 1호선 환승, 수원화성 버스 환승", note_zh: "换乘KTX、1号线，转乘华城公交" },
        { name_en: "Maetan-Gwonseon", name_ko: "매탄권선역", name_zh: "梅滩劝善站", note_en: "Suwon City center", note_ko: "수원 도심 주거/상권", note_zh: "水原中心商圈" },
        { name_en: "Mangpo Station", name_ko: "망포역", name_zh: "网浦站", note_en: "Gateway to Samsung Innovation Museum", note_ko: "삼성 이노베이션 뮤지엄 접근", note_zh: "前往三星创新博物馆" },
        { name_en: "Sanggal Station", name_ko: "상갈역", name_zh: "上葛站", note_en: "Yongin Korean Folk Village, Nam June Paik Art Center, Provincial Museum", note_ko: "용인 한국민속촌, 백남준아트센터, 경기도박물관 관문", note_zh: "韩国民俗村、白南准艺术中心、京畿道博物馆大门" },
        { name_en: "Giheung Station", name_ko: "기흥역", name_zh: "器兴站", note_en: "Transfer to Yongin Everline, Giheung Lake access", note_ko: "용인 에버라인 환승, 기흥호수공원 접근", note_zh: "换乘龙仁轻轨Everline，前往器兴湖水公园" }
      ]
    },
    transport_cards: [
      {
        name_en: "Climate Card & T-Money",
        name_ko: "티머니(T-Money) & 기후동행카드 안내",
        name_zh: "T-Money交通卡 & 气候同行卡须知",
        desc_en: "Rechargeable standard transit cards accepted on all buses and subways in Suwon & Yongin. Buy and top-up with cash at any convenience store (CU, GS25, 7-Eleven). Note: Seoul Climate Card has limited coverage outside Seoul, so standard T-Money is best for Gyeonggi-do.",
        desc_ko: "수원과 용인의 모든 지하철, 시내버스에서 통용되는 표준 교통카드입니다. 편의점에서 현금으로 구매 및 충전할 수 있습니다. 서울 기후동행카드는 경기도 구간 사용에 제한이 있으므로 기본 티머니 카드를 추천합니다.",
        desc_zh: "适用于水原与龙仁所有地铁与市内公交的通用交通卡。可在任何便利店（CU、GS25、7-Eleven）使用韩元现金购买并充值。注意：首尔气候同行卡在京畿道范围存在限制，在水原和龙仁推荐使用标准T-Money卡。"
      },
      {
        name_en: "WOWPASS for Foreigners",
        name_ko: "외국인 전용 WOWPASS 카드",
        name_zh: "外国游客专属 WOWPASS 预付卡",
        desc_en: "All-in-one prepaid debit card for foreign tourists that holds multiple foreign currencies, enables chip card payments at shops, and includes a built-in T-money transit chip. Machines available at Suwon Station.",
        desc_ko: "자국 통화로 충전해 한국 어디서나 결제하고, 티머니 교통카드 기능까지 통합된 외국인 전용 선불카드입니다. 수원역 등에 발급 무인기가 설치되어 있습니다.",
        desc_zh: "为外国游客打造的万能专属预付卡。可用外币直接充值并在韩国全境刷卡消费，卡内自带T-Money交通芯片。水原站内设有自助发卡机。"
      },
      {
        name_en: "Navigation Apps Warning",
        name_ko: "한국 지도 내비게이션 팁",
        name_zh: "韩国地图导航关键贴士",
        desc_en: "Google Maps walking and transit directions have government security restrictions in South Korea. We strongly recommend downloading 'Naver Map' (supports English, Japanese, Chinese) or 'KakaoMap' for accurate real-time bus arrivals and walking routes.",
        desc_ko: "한국에서는 보안 규정으로 인해 구글맵의 도보 길찾기가 제한됩니다. 영어를 완벽 지원하는 '네이버 지도(Naver Map)' 앱을 설치하면 가장 정확합니다.",
        desc_zh: "因地图数据安全法规限制，谷歌地图（Google Maps）在韩国的步行导航可能受限。强烈推荐下载支持中文界面的‘Naver地图（Naver Map）’或‘KakaoMap’，可查看精准实时的公交到站与步行导航。"
      },
      {
        name_en: "Taxis & Kakao T",
        name_ko: "택시 이용 팁",
        name_zh: "出租车乘车技巧与Kakao T",
        desc_en: "Taxis are safe and relatively affordable in Korea. Hail orange/silver/white taxis on the street or use our built-in 'Show to Taxi Driver' Korean cards. Uber works as 'UT' in Korea.",
        desc_ko: "앱 내의 '기사님 보여주기용 한국어 카드'를 제시하면 언어 소통 없이도 원하는 목적지까지 안전하고 편리하게 이동할 수 있습니다. 우버(Uber)도 연동됩니다.",
        desc_zh: "韩国出租车安全且收费规范。遇到司机不通外语时，只需出示本应用内的‘司机请看韩文卡片’即可无障碍抵达目的地。在韩国Uber亦可正常呼叫出租车。"
      }
    ]
  },

  // ---------------- SURVIVAL KOREAN HELPER (TTS ENABLED) ----------------
  korean_phrases: [
    {
      category: "Taxi & Directions",
      category_ko: "택시 및 길찾기",
      category_zh: "出租车 & 问路指南",
      icon: "🚖",
      items: [
        {
          en: "Please take me here. (Show screen)",
          ko: "여기로 가주세요.",
          zh: "请带我去这里。(出示屏幕)",
          rom: "Yeo-gi-ro ga-ju-se-yo.",
          tip: "Show your phone screen with the Korean destination card."
        },
        {
          en: "Please stop here.",
          ko: "여기서 내려주세요.",
          zh: "请在这里停车/下车。",
          rom: "Yeo-gi-seo nae-ryeo-ju-se-yo.",
          tip: "Say this when you reach your destination."
        },
        {
          en: "Where is the nearest subway station?",
          ko: "가장 가까운 지하철역이 어디예요?",
          zh: "最近的地铁站在哪里？",
          rom: "Ga-jang ga-kka-un ji-ha-cheol-yeog-i eo-di-ye-yo?",
          tip: "Useful when walking in unfamiliar neighborhoods."
        },
        {
          en: "Can I pay by credit card?",
          ko: "카드 결제 되나요?",
          zh: "可以刷信用卡结账吗？",
          rom: "Ka-deu gyeol-je doe-na-yo?",
          tip: "99% of Korean taxis and shops accept cards."
        }
      ]
    },
    {
      category: "Dining & Ordering",
      category_ko: "식당 및 주문",
      category_zh: "餐厅 & 点餐沟通",
      icon: "🍽️",
      items: [
        {
          en: "Do you have an English/Chinese menu?",
          ko: "외국어 메뉴판 있나요?",
          zh: "请问有中文或英文菜单吗？",
          rom: "Wae-guk-eo me-nyu-pan in-na-yo?",
          tip: "Most popular restaurants in Suwon & Folk Village have them."
        },
        {
          en: "Please recommend your signature dish.",
          ko: "추천 메뉴가 무엇인가요?",
          zh: "请推荐一下这里的招牌菜。",
          rom: "Chu-cheon me-nyu-ga mu-eot-in-ga-yo?",
          tip: "Great way to taste the chef's best specialty."
        },
        {
          en: "Please make it not too spicy.",
          ko: "덜 맵게 해주세요.",
          zh: "请做得稍微微辣一点/不要太辣。",
          rom: "Deol maep-ge hae-ju-se-yo.",
          tip: "Essential phrase if you have low spice tolerance."
        },
        {
          en: "Excuse me / Calling the server.",
          ko: "저기요! / 사장님!",
          zh: "打扰一下！/ 老板！",
          rom: "Jeo-gi-yo! / Sa-jang-nim!",
          tip: "Polite and customary way to get attention in Korean dining."
        },
        {
          en: "Thank you for the delicious meal!",
          ko: "잘 먹었습니다! 감사합니다.",
          zh: "吃得很满意！非常感谢。",
          rom: "Jal meog-eot-seum-ni-da! Gam-sa-ham-ni-da.",
          tip: "Say this with a warm smile when leaving."
        }
      ]
    },
    {
      category: "Emergencies & Inquiries",
      category_ko: "비상 및 문의",
      category_zh: "紧急情况 & 咨询",
      icon: "🆘",
      items: [
        {
          en: "Please help me.",
          ko: "도와주세요.",
          zh: "请帮帮我。",
          rom: "Do-wa-ju-se-yo.",
          tip: "Universal emergency phrase."
        },
        {
          en: "Do you speak English/Chinese?",
          ko: "외국어 할 수 있으세요?",
          zh: "请问您会说中文或英语吗？",
          rom: "Wae-guk-eo hal su it-seu-se-yo?",
          tip: "Locals are usually eager to assist kindly."
        },
        {
          en: "Where is the restroom?",
          ko: "화장실이 어디에 있어요?",
          zh: "洗手间在哪里？",
          rom: "Hwa-jang-sil-i eo-di-e it-seo-yo?",
          tip: "Subway stations and Starbucks always have clean public restrooms."
        }
      ]
    }
  ],

  // ---------------- EMERGENCY HELPLINES ----------------
  emergency_contacts: [
    {
      name_en: "Korea Travel Hotline (KTO)",
      name_ko: "1330 한국관광통역안내",
      name_zh: "1330 韩国旅游咨询与翻译热线",
      number: "1330",
      hours: "24/7 (365 days)",
      languages: "English, Japanese, Chinese, Russian, Vietnamese, Thai, Malay",
      desc_en: "Free 24/7 tourist translation and travel assistance call center managed by Korea Tourism Organization. Highly recommended!",
      desc_ko: "한국관광공사에서 운영하는 24시간 무료 통역 및 관광 안내 콜센터입니다.",
      desc_zh: "韩国观光公社运营的24小时全天候免费旅游翻译与向导热线，提供中文、英文、日文支持，强烈推荐！"
    },
    {
      name_en: "Police Department",
      name_ko: "경찰청 긴급신고",
      name_zh: "警察厅 紧急报警电话",
      number: "112",
      hours: "24/7",
      languages: "Interpretation available via 1330",
      desc_en: "Immediate emergency police dispatch across Korea.",
      desc_ko: "전국 어디서나 경찰 긴급 출동.",
      desc_zh: "韩国全境警察紧急出警热线。"
    },
    {
      name_en: "Fire & Medical Emergency / Ambulance",
      name_ko: "소방 및 119 구급차",
      name_zh: "消防急救与119救护车",
      number: "119",
      hours: "24/7",
      languages: "Emergency medical advice & ambulance dispatch",
      desc_en: "Call immediately for urgent medical assistance or accidents.",
      desc_ko: "응급 환자 및 사고 발생 시 긴급 출동.",
      desc_zh: "突发伤病或意外火情时立即呼叫急救车出警。"
    }
  ],

  // ---------------- CURRENCY REFERENCE PRESETS (KRW BASIS) ----------------
  currency_rates: {
    base: "KRW",
    rates: {
      USD: 0.00075, // 1,000 KRW = ~$0.75 USD
      EUR: 0.00069,
      JPY: 0.115,
      CNY: 0.0054,  // 1,000 KRW = ~5.4 CNY
      GBP: 0.00059,
      TWD: 0.024
    },
    sample_costs: [
      { item_en: "Subway/Bus single ride", item_ko: "지하철/시내버스 1회 요금", item_zh: "地铁/公交单程票价", krw: 1400 },
      { item_en: "Convenience store drink / snack", item_ko: "편의점 음료/생수", item_zh: "便利店瓶装饮料/零食", krw: 1800 },
      { item_en: "Specialty cafe Americano", item_ko: "카페 아메리카노", item_zh: "精品咖啡馆美式咖啡", krw: 5000 },
      { item_en: "Suwon Hwaseong Palace entry", item_ko: "화성행궁 입장료", item_zh: "华城行宫成人门票", krw: 1500 },
      { item_en: "Whole fried cauldron chicken", item_ko: "수원 가마솥 통닭 1마리", item_zh: "水原传统铁锅整只炸鸡", krw: 20000 },
      { item_en: "Suwon Wang-Galbi BBQ set", item_ko: "수원 왕갈비 1인분", item_zh: "招牌水原王牛排烤肉1人份", krw: 55000 },
      { item_en: "Korean Folk Village All-Pass", item_ko: "한국민속촌 자유이용권", item_zh: "韩国民俗村成人通票", krw: 32000 }
    ]
  }
};
