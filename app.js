// ============================================================================
// Suwon & Yongin Giheung Explorer - Application Logic
// Standalone Vanilla JS (Zero external server, CORS-free, works on file://)
// Multi-language support: English (en), Korean (ko), Chinese (zh)
// ============================================================================

(function () {
  'use strict';

  // --- STATE MANAGEMENT ---
  let currentLang = 'en'; // 'en' | 'ko' | 'zh'
  let selectedRegion = 'all'; // 'all' | 'suwon' | 'giheung'
  let selectedCategory = 'all'; // 'all' | 'heritage' | 'art_modern' | 'nature' | 'food'
  let searchQuery = '';
  let activeCourseId = 'course-heritage';
  let activePhraseCategory = 'Taxi & Directions';
  let myTripList = []; // Array of attraction IDs
  let leafletMap = null;
  let mapMarkers = {};

  // Helper for multi-language object fields
  function getLocalized(obj, fieldPrefix) {
    if (!obj) return '';
    if (currentLang === 'ko') return obj[fieldPrefix + '_ko'] || obj[fieldPrefix + '_en'] || '';
    if (currentLang === 'zh') return obj[fieldPrefix + '_zh'] || obj[fieldPrefix + '_en'] || '';
    return obj[fieldPrefix + '_en'] || obj[fieldPrefix + '_ko'] || '';
  }

  // --- UI DICTIONARY (EN / KO / ZH) ---
  const UI_STRINGS = {
    en: {
      site_title: "Suwon & Giheung",
      site_subtitle: "Travel Guide",
      nav_attractions: "Attractions",
      nav_courses: "Courses",
      nav_map: "Map",
      nav_transit: "Transit Guide",
      nav_mytrip: "My Trip",
      hero_badge: "🌟 Best Neighbor Cities in Gyeonggi-do",
      hero_title_1: "Discover Ancient Joseon &",
      hero_title_2: "Future Tech Innovations",
      hero_desc: "Explore Suwon's UNESCO World Heritage fortress and Yongin Giheung's living folk village, connected directly in just 15 minutes by subway.",
      stat_suwon_title: "Suwon City",
      stat_suwon_sub: "UNESCO Fortress & Starfield Library",
      stat_giheung_title: "Yongin Giheung",
      stat_giheung_sub: "Korean Folk Village & Media Art",
      stat_transit_title: "15-Min Connection",
      stat_transit_sub: "Direct Suin-Bundang Line",
      search_placeholder: "Search attractions, royal fortress, folk village, galbi...",
      section_attractions_sub: "Must-Visit Destinations",
      section_attractions_title: "Explore Suwon & Yongin Giheung",
      btn_taxi: "Taxi Card",
      btn_add_trip: "Add to Trip",
      btn_added_trip: "In My Trip",
      btn_details: "Explore Details & Tips",
      section_courses_sub: "Handpicked Routes",
      section_courses_title: "Curated 1-Day & Half-Day Itineraries",
      section_map_sub: "Geographic Overview",
      section_map_title: "Interactive Regional Corridor Map",
      section_transit_sub: "Seamless Travel",
      section_transit_title: "Subway Corridor & Travel Cards",
      section_survival_sub: "Practical Toolkit",
      section_survival_title: "Currency Converter & Korean Voice Phrasebook",
      currency_title: "Travel Budget & Currency Calculator",
      calc_foreign_label: "Foreign Currency",
      calc_krw_label: "Korean Won (KRW)",
      sample_prices_title: "Quick Local Price Cheat Sheet",
      phrases_title: "Survival Korean Voice Helper",
      phrases_sub: "Tap speaker icon to pronounce aloud in Korean for locals!",
      emergency_title: "24/7 Korea Travel Hotline & Emergency Contacts",
      emergency_desc: "Dial 1330 anytime for free foreign language interpretation (English, Japanese, Chinese) and tourism assistance.",
      trip_drawer_title: "My Custom Trip Itinerary",
      trip_empty: "No places saved yet. Click '+ Add to Trip' on any attraction card to start planning!",
      trip_clear: "Clear All Places",
      toast_copied: "Korean address copied to clipboard!",
      toast_added: "Added to your Trip Itinerary!",
      toast_removed: "Removed from your Trip Itinerary!",
      taxi_modal_title: "Show This Screen to Your Taxi Driver",
      taxi_modal_sub: "Clear Korean destination card with address for Korean drivers",
      btn_speak_taxi: "Pronounce Destination (Voice)",
      btn_copy_addr: "Copy Korean Address",
      hero_live_view: "Featured View:",
      scene_hwaseong: "Suwon Hwaseong",
      scene_folk: "Korean Folk Village",
      scene_starfield: "Starfield Suwon",
      scene_lake: "Gwanggyo Lake",
      quick_search_label: "Trending:",
      portal_explore_suwon: "Explore Suwon",
      portal_explore_giheung: "Explore Giheung",
      portal_view_transit: "View Metro Corridor"
    },
    ko: {
      site_title: "수원 & 용인 기흥",
      site_subtitle: "스마트 관광 가이드",
      nav_attractions: "주요 명소",
      nav_courses: "추천 코스",
      nav_map: "지역 지도",
      nav_transit: "교통 가이드",
      nav_mytrip: "나의 여행",
      hero_badge: "🌟 경기 남부 최고의 연계 관광지",
      hero_title_1: "조선의 숨결 세계문화유산과",
      hero_title_2: "세계적 미디어아트의 만남",
      hero_desc: "유네스코 세계문화유산 수원화성과 살아있는 역사의 용인 한국민속촌을 수인분당선으로 15분 만에 스마트하게 즐겨보세요.",
      stat_suwon_title: "수원시",
      stat_suwon_sub: "수원화성 & 스타필드 별마당도서관",
      stat_giheung_title: "용인시 기흥구",
      stat_giheung_sub: "한국민속촌 & 백남준아트센터",
      stat_transit_title: "15분 쾌속 연결",
      stat_transit_sub: "노란색 수인분당선 직결",
      search_placeholder: "수원화성, 민속촌, 갈비, 백남준, 스타필드 검색...",
      section_attractions_sub: "핵심 관광 명소",
      section_attractions_title: "수원 & 용인 기흥 가볼 만한 곳",
      btn_taxi: "기사님 보여주기",
      btn_add_trip: "일정에 담기",
      btn_added_trip: "담김 완료",
      btn_details: "상세 정보 & 꿀팁",
      section_courses_sub: "전문가 추천 동선",
      section_courses_title: "수원-기흥 환상 연계 1일 & 반나절 코스",
      section_map_sub: "위치와 동선",
      section_map_title: "지역 연계 인터랙티브 맵",
      section_transit_sub: "편리한 이동",
      section_transit_title: "지하철 노선도 & 교통카드 꿀팁",
      section_survival_sub: "실전 생존 도구",
      section_survival_title: "환율 계산기 & 한국어 발음 음성 도우미",
      currency_title: "실시간 여행 예산 & 환율 계산기",
      calc_foreign_label: "외국 통화",
      calc_krw_label: "대한민국 원 (KRW)",
      sample_prices_title: "현지 물가 체감표",
      phrases_title: "상황별 생존 한국어 음성 도우미",
      phrases_sub: "스피커 버튼을 누르면 원어민 발음으로 읽어줍니다!",
      emergency_title: "24시간 1330 관광통역안내 & 긴급 연락처",
      emergency_desc: "1330으로 전화하시면 영어/일어/중국어 등 무료 24시간 통역 및 여행 안내를 지원합니다.",
      trip_drawer_title: "나만의 여행 일정",
      trip_empty: "담긴 명소가 없습니다. 마음에 드는 명소 카드에서 '+ 일정에 담기'를 눌러보세요!",
      trip_clear: "일정 전체 비우기",
      toast_copied: "한국어 주소가 클립보드에 복사되었습니다!",
      toast_added: "나의 여행 일정에 추가되었습니다!",
      toast_removed: "여행 일정에서 삭제되었습니다!",
      taxi_modal_title: "택시 기사님께 이 화면을 보여주세요",
      taxi_modal_sub: "기사님이 길을 쉽게 찾으실 수 있도록 큰 글씨의 한국어 목적지를 제공합니다",
      btn_speak_taxi: "목적지 한국어로 읽어주기",
      btn_copy_addr: "한국어 주소 복사하기",
      hero_live_view: "배경 테마 보기:",
      scene_hwaseong: "수원화성",
      scene_folk: "한국민속촌",
      scene_starfield: "스타필드 수원",
      scene_lake: "광교호수공원",
      quick_search_label: "인기 검색어:",
      portal_explore_suwon: "수원 명소 둘러보기",
      portal_explore_giheung: "기흥 명소 둘러보기",
      portal_view_transit: "지하철 환승 노선도"
    },
    zh: {
      site_title: "水原 & 龙仁器兴",
      site_subtitle: "智慧旅游指南",
      nav_attractions: "必游景点",
      nav_courses: "精选路线",
      nav_map: "区域地图",
      nav_transit: "交通指南",
      nav_mytrip: "我的行程",
      hero_badge: "🌟 京畿道南部黄金邻里旅游圈",
      hero_title_1: "探索古朝鲜世界遗产与",
      hero_title_2: "未来前沿科技与艺术",
      hero_desc: "世界文化遗产水原华城与活态历史的龙仁韩国民俗村，乘坐水仁盆唐线地铁15分钟轻松直达游览。",
      stat_suwon_title: "水原市",
      stat_suwon_sub: "华城世界遗产 & 星空图书馆",
      stat_giheung_title: "龙仁市 器兴区",
      stat_giheung_sub: "韩国民俗村 & 白南准艺术中心",
      stat_transit_title: "15分钟疾速串联",
      stat_transit_sub: "明黄色水仁盆唐线直通",
      search_placeholder: "搜索水原华城、民俗村、烤排骨、白南准、星空图书馆...",
      section_attractions_sub: "核心观光胜地",
      section_attractions_title: "探索水原与龙仁器兴好去处",
      btn_taxi: "司机请看",
      btn_add_trip: "加入行程",
      btn_added_trip: "已在行程中",
      btn_details: "查看详情 & 游玩攻略",
      section_courses_sub: "专家推荐行程",
      section_courses_title: "水原-器兴联动 1日 & 半日精选路线",
      section_map_sub: "地理全貌与动线",
      section_map_title: "区域联动互动地图",
      section_transit_sub: "顺畅出行",
      section_transit_title: "地铁走廊 & 交通卡指南",
      section_survival_sub: "实用出行工具",
      section_survival_title: "汇率计算器 & 韩国语语音助手",
      currency_title: "实时旅行预算 & 汇率计算器",
      calc_foreign_label: "外币金额",
      calc_krw_label: "韩元 (KRW)",
      sample_prices_title: "本地物价速查参考表",
      phrases_title: "情境实用韩语语音助手",
      phrases_sub: "点击喇叭按钮，手机将用正宗韩语发音为当地人播报！",
      emergency_title: "24小时 1330 韩国旅游翻译热线 & 紧急求助",
      emergency_desc: "拨打1330热线即可享受中文、英文等24小时免费多语言旅游翻译与向导服务。",
      trip_drawer_title: "我的定制旅游行程",
      trip_empty: "尚未收藏任何景点。点击任意景点卡片上的‘+ 加入行程’即可开始规划！",
      trip_clear: "清空所有景点",
      toast_copied: "韩文详细地址已复制到剪贴板！",
      toast_added: "已成功加入您的行程！",
      toast_removed: "已从行程中移除！",
      taxi_modal_title: "请将此屏幕出示给出租车司机",
      taxi_modal_sub: "超大字体韩文目的地与导航地址，方便司机识别",
      btn_speak_taxi: "韩语朗读目的地 (语音)",
      btn_copy_addr: "复制韩文地址",
      hero_live_view: "精选实景切换:",
      scene_hwaseong: "水原华城",
      scene_folk: "韩国民俗村",
      scene_starfield: "水原Starfield",
      scene_lake: "光教湖水公园",
      quick_search_label: "热门搜索:",
      portal_explore_suwon: "探索水原名胜",
      portal_explore_giheung: "探索器兴名胜",
      portal_view_transit: "查看地铁线路"
    }
  };

  // --- INITIALIZATION ---
  window.addEventListener('DOMContentLoaded', () => {
    loadSavedTrip();
    initLanguage();
    initHeroScenes();
    initSearchChips();
    initPortals();
    initFilters();
    initSearch();
    renderAttractions();
    initCourses();
    initMap();
    initTransitGuide();
    initCurrencyConverter();
    initPhrases();
    initModals();
    initTripDrawer();
  });

  // --- LOCAL STORAGE FOR TRIP PLANNER ---
  function loadSavedTrip() {
    try {
      const saved = localStorage.getItem('suwon_giheung_trip');
      if (saved) {
        myTripList = JSON.parse(saved);
      }
    } catch (e) {
      console.warn("LocalStorage access error:", e);
    }
    updateTripBadge();
  }

  function saveTrip() {
    try {
      localStorage.setItem('suwon_giheung_trip', JSON.stringify(myTripList));
    } catch (e) {
      console.warn("LocalStorage save error:", e);
    }
    updateTripBadge();
    renderTripDrawerItems();
  }

  function updateTripBadge() {
    const badge = document.getElementById('trip-count-badge');
    if (badge) {
      badge.textContent = myTripList.length;
    }
  }

  // --- LANGUAGE MANAGEMENT ---
  function initLanguage() {
    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        langBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentLang = btn.dataset.lang;

        document.body.classList.toggle('lang-ko', currentLang === 'ko');
        document.body.classList.toggle('lang-zh', currentLang === 'zh');

        updateAllTexts();
        initFilters();
        renderAttractions();
        initCourses();
        renderCourseDetails();
        initTransitGuide();
        renderSamplePrices();
        initPhrases();
        renderPhrases();
        renderTripDrawerItems();
      });
    });

    updateAllTexts();
  }

  function updateAllTexts() {
    const t = UI_STRINGS[currentLang] || UI_STRINGS.en;
    
    // Update data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key]) {
        el.textContent = t[key];
      }
    });

    // Update placeholders
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.placeholder = t.search_placeholder;
    }

    // Update Region Filter Pills
    const regAllBtn = document.querySelector('.region-pill[data-region="all"] span:last-child');
    const regSuwonBtn = document.querySelector('.region-pill[data-region="suwon"] span:last-child');
    const regGiheungBtn = document.querySelector('.region-pill[data-region="giheung"] span:last-child');
    if (regAllBtn) regAllBtn.textContent = TRAVEL_DATA.regions.all[currentLang] || TRAVEL_DATA.regions.all.en;
    if (regSuwonBtn) regSuwonBtn.textContent = TRAVEL_DATA.regions.suwon[currentLang] || TRAVEL_DATA.regions.suwon.en;
    if (regGiheungBtn) regGiheungBtn.textContent = TRAVEL_DATA.regions.giheung[currentLang] || TRAVEL_DATA.regions.giheung.en;
  }

  // --- HERO BACKGROUND SCENE CONTROLLER ---
  function initHeroScenes() {
    const sceneBtns = document.querySelectorAll('.scene-btn');
    const slides = document.querySelectorAll('.hero-bg-slide');
    if (!sceneBtns.length || !slides.length) return;

    let autoInterval = null;
    let currentIndex = 0;

    function activateScene(sceneName) {
      slides.forEach(slide => {
        slide.classList.toggle('active', slide.dataset.scene === sceneName);
      });
      sceneBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.sceneTarget === sceneName);
      });
    }

    sceneBtns.forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        currentIndex = idx;
        activateScene(btn.dataset.sceneTarget);
        resetAutoCycle();
      });
    });

    function nextScene() {
      currentIndex = (currentIndex + 1) % sceneBtns.length;
      const targetScene = sceneBtns[currentIndex].dataset.sceneTarget;
      activateScene(targetScene);
    }

    function resetAutoCycle() {
      if (autoInterval) clearInterval(autoInterval);
      autoInterval = setInterval(nextScene, 7000);
    }

    resetAutoCycle();
  }

  // --- HERO SEARCH CHIPS ---
  function initSearchChips() {
    const searchInput = document.getElementById('search-input');
    document.querySelectorAll('.search-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const term = chip.dataset.searchTerm;
        const attr = TRAVEL_DATA.attractions.find(a => a.id === term);
        const query = attr ? getLocalized(attr, 'name') : chip.textContent.replace('#', '').trim();
        if (searchInput) {
          searchInput.value = query;
          searchQuery = query.toLowerCase();
          renderAttractions();
          const target = document.getElementById('attractions');
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }

  // --- HERO DESTINATION PORTALS ---
  function initPortals() {
    const suwonPortal = document.querySelector('.portal-suwon');
    const giheungPortal = document.querySelector('.portal-giheung');
    const transitPortal = document.getElementById('portal-transit-trigger');

    if (suwonPortal) {
      suwonPortal.addEventListener('click', () => {
        const pill = document.querySelector('.region-pill[data-region="suwon"]');
        if (pill) pill.click();
        const target = document.getElementById('attractions');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (giheungPortal) {
      giheungPortal.addEventListener('click', () => {
        const pill = document.querySelector('.region-pill[data-region="giheung"]');
        if (pill) pill.click();
        const target = document.getElementById('attractions');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }

    if (transitPortal) {
      transitPortal.addEventListener('click', () => {
        const target = document.getElementById('transit');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      });
    }
  }

  // --- SEARCH & FILTERING ---
  function initFilters() {
    // Region Pills click handlers
    document.querySelectorAll('.region-pill').forEach(btn => {
      btn.onclick = () => {
        document.querySelectorAll('.region-pill').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedRegion = btn.dataset.region;
        renderAttractions();
      };
    });

    // Theme Category Pills
    const categoryContainer = document.getElementById('category-pills-wrap');
    if (categoryContainer) {
      categoryContainer.innerHTML = TRAVEL_DATA.categories.map(cat => {
        const catName = cat[currentLang] || cat.en;
        return `
          <button class="filter-pill category-pill ${cat.id === selectedCategory ? 'active' : ''}" data-category="${cat.id}">
            <span>${cat.icon}</span>
            <span>${catName}</span>
          </button>
        `;
      }).join('');

      categoryContainer.querySelectorAll('.category-pill').forEach(btn => {
        btn.addEventListener('click', () => {
          categoryContainer.querySelectorAll('.category-pill').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          selectedCategory = btn.dataset.category;
          renderAttractions();
        });
      });
    }
  }

  function initSearch() {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        renderAttractions();
      });
    }
  }

  // --- RENDER ATTRACTIONS ---
  function renderAttractions() {
    const grid = document.getElementById('attractions-grid');
    if (!grid) return;

    const t = UI_STRINGS[currentLang] || UI_STRINGS.en;
    
    // Filter
    const filtered = TRAVEL_DATA.attractions.filter(item => {
      if (selectedRegion !== 'all' && item.region !== selectedRegion) return false;
      if (selectedCategory !== 'all' && item.category !== selectedCategory) return false;
      if (searchQuery) {
        const matchEn = item.name_en.toLowerCase().includes(searchQuery) ||
                        item.overview_en.toLowerCase().includes(searchQuery) ||
                        item.tags_en.some(tag => tag.toLowerCase().includes(searchQuery));
        const matchKo = item.name_ko.includes(searchQuery) ||
                        item.overview_ko.includes(searchQuery) ||
                        item.tags_ko.some(tag => tag.includes(searchQuery));
        const matchZh = (item.name_zh && item.name_zh.includes(searchQuery)) ||
                        (item.overview_zh && item.overview_zh.includes(searchQuery)) ||
                        (item.tags_zh && item.tags_zh.some(tag => tag.includes(searchQuery)));
        return matchEn || matchKo || matchZh;
      }
      return true;
    });

    if (filtered.length === 0) {
      const emptyMsg = currentLang === 'ko' ? '검색 결과와 일치하는 관광지가 없습니다.' :
                       (currentLang === 'zh' ? '未找到符合搜索条件的景点。' : 'No attractions found matching your search.');
      const subMsg = currentLang === 'ko' ? '필터를 변경하거나 다른 검색어로 검색해 보세요.' :
                     (currentLang === 'zh' ? '请尝试切换分类或搜索其他关键词。' : 'Try changing filters or searching another keyword.');
      grid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; color: var(--text-muted);">
          <p style="font-size: 2.5rem; margin-bottom: 12px;">🔍</p>
          <h3>${emptyMsg}</h3>
          <p style="margin-top: 8px;">${subMsg}</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(item => {
      const isSuwon = item.region === 'suwon';
      const regionBadgeClass = isSuwon ? 'badge-suwon' : 'badge-giheung';
      const regionName = isSuwon ? 
        (currentLang === 'ko' ? '수원' : (currentLang === 'zh' ? '水原' : 'Suwon')) : 
        (currentLang === 'ko' ? '용인 기흥' : (currentLang === 'zh' ? '龙仁 器兴' : 'Yongin Giheung'));

      const name = getLocalized(item, 'name');
      const subName = currentLang === 'en' ? item.name_ko : item.name_en;
      const subtitle = getLocalized(item, 'subtitle');
      const desc = getLocalized(item, 'overview');
      const station = getLocalized(item, 'nearest_station');
      const hours = getLocalized(item, 'hours');
      const tags = currentLang === 'ko' ? item.tags_ko : (currentLang === 'zh' ? item.tags_zh : item.tags_en);
      const isSaved = myTripList.includes(item.id);

      return `
        <article class="attraction-card" data-id="${item.id}">
          <div class="card-media">
            <img src="${item.image}" alt="${name}" loading="lazy" onerror="this.src='images/suwon_hwaseong.jpg'">
            <div class="card-region-badge ${regionBadgeClass}">
              <span>${isSuwon ? '🏯' : '🎎'}</span>
              <span>${regionName}</span>
            </div>
            <div class="card-rating-badge">
              <span>★</span>
              <span>${item.rating}</span>
            </div>
          </div>
          <div class="card-body">
            <div class="card-tags">
              ${tags.map(tag => `<span class="card-tag">#${tag}</span>`).join('')}
            </div>
            <div class="card-title-group">
              <h3 class="card-title">${name}</h3>
              <div class="card-subtitle">${subName} • ${subtitle}</div>
            </div>
            <p class="card-description">${desc}</p>
            <div class="card-quick-info">
              <div class="info-item">
                <span class="info-icon">🚇</span>
                <span>${station}</span>
              </div>
              <div class="info-item">
                <span class="info-icon">🕒</span>
                <span>${hours}</span>
              </div>
            </div>
            <div class="card-actions">
              <button class="btn-card-action btn-taxi-trigger" data-taxi-id="${item.id}">
                <span>🚖</span>
                <span>${t.btn_taxi}</span>
              </button>
              <button class="btn-card-action btn-trip-add ${isSaved ? 'added' : ''}" data-trip-id="${item.id}">
                <span>${isSaved ? '✓' : '+'}</span>
                <span>${isSaved ? t.btn_added_trip : t.btn_add_trip}</span>
              </button>
              <button class="btn-card-action btn-detail-trigger" data-detail-id="${item.id}">
                <span>${t.btn_details} →</span>
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    // Attach Action Listeners
    grid.querySelectorAll('.btn-taxi-trigger').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        openTaxiModal(btn.dataset.taxiId);
      });
    });

    grid.querySelectorAll('.btn-trip-add').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleTripItem(btn.dataset.tripId);
      });
    });

    grid.querySelectorAll('.btn-detail-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        openDetailModal(btn.dataset.detailId);
      });
    });

    grid.querySelectorAll('.attraction-card').forEach(card => {
      card.addEventListener('click', (e) => {
        if (!e.target.closest('button')) {
          openDetailModal(card.dataset.id);
        }
      });
    });
  }

  // --- TRIP PLANNER TOGGLE ---
  function toggleTripItem(id) {
    const t = UI_STRINGS[currentLang] || UI_STRINGS.en;
    const index = myTripList.indexOf(id);
    if (index > -1) {
      myTripList.splice(index, 1);
      showToast(t.toast_removed);
    } else {
      myTripList.push(id);
      showToast(t.toast_added);
    }
    saveTrip();
    renderAttractions();
  }

  // --- CURATED COURSES ---
  function initCourses() {
    const tabsWrap = document.getElementById('course-tabs-wrap');
    if (!tabsWrap) return;

    tabsWrap.innerHTML = TRAVEL_DATA.itineraries.map((course, idx) => `
      <button class="course-tab-btn ${course.id === activeCourseId ? 'active' : ''}" data-course-id="${course.id}">
        <span>${idx === 0 ? '🏆' : idx === 1 ? '🚀' : '☕'}</span>
        <span>${getLocalized(course, 'title')}</span>
      </button>
    `).join('');

    tabsWrap.querySelectorAll('.course-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsWrap.querySelectorAll('.course-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activeCourseId = btn.dataset.courseId;
        renderCourseDetails();
      });
    });

    renderCourseDetails();
  }

  function renderCourseDetails() {
    const detailPanel = document.getElementById('itinerary-detail-panel');
    if (!detailPanel) return;

    const course = TRAVEL_DATA.itineraries.find(c => c.id === activeCourseId);
    if (!course) return;

    const title = getLocalized(course, 'title');
    const badge = getLocalized(course, 'badge');
    const duration = getLocalized(course, 'duration');
    const summary = getLocalized(course, 'summary');
    const taxiBtnText = currentLang === 'ko' ? '택시 카드' : (currentLang === 'zh' ? '司机请看' : 'Taxi Card');

    detailPanel.innerHTML = `
      <div class="itinerary-header-info">
        <div class="itinerary-meta-badges">
          <span class="itinerary-badge">${badge}</span>
          <span class="itinerary-duration">⏱️ ${duration}</span>
        </div>
        <h3 class="itinerary-title">${title}</h3>
        <p class="itinerary-summary">${summary}</p>
      </div>
      <div class="timeline-container">
        ${course.stops.map(stop => {
          const isTransit = !stop.place_id;
          const stopName = getLocalized(stop, 'name');
          const stopAct = getLocalized(stop, 'activity');

          return `
            <div class="timeline-item ${isTransit ? 'transit' : ''}">
              <div class="timeline-dot"></div>
              <div class="timeline-content">
                <span class="timeline-time-badge">${stop.time}</span>
                <h4 class="timeline-stop-title">${stopName}</h4>
                <p class="timeline-stop-desc">${stopAct}</p>
                ${stop.place_id ? `
                  <div style="margin-top: 10px;">
                    <button class="btn-card-action btn-taxi-trigger" style="display:inline-flex; padding: 6px 12px; font-size:0.8rem;" data-taxi-id="${stop.place_id}">
                      <span>🚖 ${taxiBtnText}</span>
                    </button>
                  </div>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    detailPanel.querySelectorAll('.btn-taxi-trigger').forEach(btn => {
      btn.addEventListener('click', () => {
        openTaxiModal(btn.dataset.taxiId);
      });
    });
  }

  // --- INTERACTIVE MAP (LEAFLET.JS) ---
  function initMap() {
    const mapEl = document.getElementById('leaflet-map');
    if (!mapEl) return;

    if (typeof L === 'undefined') {
      mapEl.innerHTML = `
        <div style="padding: 40px; text-align: center; color: var(--text-muted);">
          <h3>📍 Regional Corridor (Suwon ↔ Giheung)</h3>
          <p style="margin-top: 8px;">Directly connected by Suin-Bundang Line Subway.</p>
        </div>
      `;
      return;
    }

    try {
      leafletMap = L.map('leaflet-map', {
        center: [37.275, 127.06],
        zoom: 12,
        scrollWheelZoom: false
      });

      L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://carto.com/">CARTO</a>, OpenStreetMap contributors',
        maxZoom: 19
      }).addTo(leafletMap);

      TRAVEL_DATA.attractions.forEach(attr => {
        const isSuwon = attr.region === 'suwon';
        const color = isSuwon ? '#2563eb' : '#10b981';
        const iconChar = isSuwon ? '🏯' : '🎎';

        const customIcon = L.divIcon({
          className: 'custom-map-pin',
          html: `<div style="background:${color}; width:32px; height:32px; border-radius:50%; display:flex; align-items:center; justify-content:center; border:2px solid #fff; box-shadow:0 3px 10px rgba(0,0,0,0.4); font-size:16px;">${iconChar}</div>`,
          iconSize: [32, 32],
          iconAnchor: [16, 16]
        });

        const marker = L.marker([attr.coordinates.lat, attr.coordinates.lng], { icon: customIcon })
          .addTo(leafletMap);

        const popupHtml = `
          <div style="font-family: inherit; max-width: 220px;">
            <strong style="font-size:14px; color:#0f172a; display:block; margin-bottom:4px;">${attr.name_en}</strong>
            <div style="font-size:12px; color:#64748b; margin-bottom:6px;">${attr.name_ko}</div>
            <button id="map-btn-${attr.id}" style="background:#2563eb; color:#fff; border:none; border-radius:4px; padding:4px 8px; font-size:11px; cursor:pointer; font-weight:bold; width:100%;">
              View Details
            </button>
          </div>
        `;

        marker.bindPopup(popupHtml);
        marker.on('popupopen', () => {
          const btn = document.getElementById(`map-btn-${attr.id}`);
          if (btn) {
            btn.onclick = () => openDetailModal(attr.id);
          }
        });

        mapMarkers[attr.id] = marker;
      });

    } catch (e) {
      console.warn("Leaflet Map init fallback:", e);
    }
  }

  // --- TRANSIT GUIDE ---
  function initTransitGuide() {
    const cardsWrap = document.getElementById('transit-cards-wrap');
    if (!cardsWrap) return;

    cardsWrap.innerHTML = TRAVEL_DATA.transit_guide.transport_cards.map(card => `
      <div class="transit-card">
        <h4 class="transit-card-title">
          <span>💳</span>
          <span>${getLocalized(card, 'name')}</span>
        </h4>
        <p class="transit-card-desc">${getLocalized(card, 'desc')}</p>
      </div>
    `).join('');
  }

  // --- CURRENCY CONVERTER ---
  function initCurrencyConverter() {
    const foreignInput = document.getElementById('foreign-amount');
    const krwInput = document.getElementById('krw-amount');
    const currSelect = document.getElementById('currency-select');

    if (!foreignInput || !krwInput || !currSelect) return;

    function convertFromForeign() {
      const curr = currSelect.value;
      const rate = TRAVEL_DATA.currency_rates.rates[curr] || 0.00075;
      const val = parseFloat(foreignInput.value) || 0;
      const krwVal = Math.round(val / rate);
      krwInput.value = krwVal.toLocaleString();
    }

    function convertFromKrw() {
      const curr = currSelect.value;
      const rate = TRAVEL_DATA.currency_rates.rates[curr] || 0.00075;
      const cleanStr = krwInput.value.replace(/,/g, '');
      const val = parseFloat(cleanStr) || 0;
      const foreignVal = (val * rate).toFixed(2);
      foreignInput.value = foreignVal;
    }

    foreignInput.addEventListener('input', convertFromForeign);
    krwInput.addEventListener('input', convertFromKrw);
    currSelect.addEventListener('change', () => {
      convertFromForeign();
      renderSamplePrices();
    });

    foreignInput.value = "100";
    convertFromForeign();
    renderSamplePrices();
  }

  function renderSamplePrices() {
    const list = document.getElementById('sample-prices-list');
    const currSelect = document.getElementById('currency-select');
    if (!list) return;

    const curr = currSelect ? currSelect.value : 'USD';
    const rate = TRAVEL_DATA.currency_rates.rates[curr] || 0.00075;

    list.innerHTML = TRAVEL_DATA.currency_rates.sample_costs.map(item => {
      const name = getLocalized(item, 'item');
      const foreignCost = (item.krw * rate).toFixed(2);
      return `
        <div class="sample-price-row">
          <span class="sample-price-name">${name}</span>
          <span class="sample-price-val">₩${item.krw.toLocaleString()} (≈ ${curr} ${foreignCost})</span>
        </div>
      `;
    }).join('');
  }

  // --- SURVIVAL PHRASES WITH WEB SPEECH API ---
  function initPhrases() {
    const tabsContainer = document.getElementById('phrase-category-tabs');
    if (!tabsContainer) return;

    tabsContainer.innerHTML = TRAVEL_DATA.korean_phrases.map(group => `
      <button class="phrase-tab-btn ${group.category === activePhraseCategory ? 'active' : ''}" data-cat="${group.category}">
        <span>${group.icon}</span>
        <span>${getLocalized(group, 'category')}</span>
      </button>
    `).join('');

    tabsContainer.querySelectorAll('.phrase-tab-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        tabsContainer.querySelectorAll('.phrase-tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        activePhraseCategory = btn.dataset.cat;
        renderPhrases();
      });
    });

    renderPhrases();
  }

  function renderPhrases() {
    const list = document.getElementById('phrases-list');
    if (!list) return;

    const group = TRAVEL_DATA.korean_phrases.find(g => g.category === activePhraseCategory);
    if (!group) return;

    list.innerHTML = group.items.map(item => {
      const meaning = currentLang === 'ko' ? item.ko : (currentLang === 'zh' ? item.zh : item.en);
      return `
        <div class="phrase-card-item">
          <div class="phrase-texts">
            <div class="phrase-korean">${item.ko}</div>
            <div class="phrase-romanized">"${item.rom}"</div>
            <div class="phrase-english">${meaning}</div>
          </div>
          <button class="btn-speak" title="Pronounce in Korean" data-speak="${encodeURIComponent(item.ko)}">
            🔊
          </button>
        </div>
      `;
    }).join('');

    list.querySelectorAll('.btn-speak').forEach(btn => {
      btn.addEventListener('click', () => {
        const text = decodeURIComponent(btn.dataset.speak);
        speakKorean(text);
      });
    });
  }

  // --- WEB SPEECH API HELPER ---
  function speakKorean(text) {
    if (!window.speechSynthesis) {
      showToast("Speech synthesis not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'ko-KR';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  }

  // --- MODALS & TAXI CARDS ---
  function initModals() {
    const taxiModal = document.getElementById('taxi-modal');
    const detailModal = document.getElementById('detail-modal');

    document.querySelectorAll('.modal-close-btn, .modal-overlay').forEach(el => {
      el.addEventListener('click', (e) => {
        if (e.target === el || e.target.closest('.modal-close-btn')) {
          if (taxiModal) taxiModal.classList.remove('active');
          if (detailModal) detailModal.classList.remove('active');
        }
      });
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (taxiModal) taxiModal.classList.remove('active');
        if (detailModal) detailModal.classList.remove('active');
        const drawer = document.getElementById('trip-drawer');
        if (drawer) drawer.classList.remove('open');
      }
    });
  }

  function openTaxiModal(attractionId) {
    const attr = TRAVEL_DATA.attractions.find(a => a.id === attractionId);
    if (!attr) return;

    const modal = document.getElementById('taxi-modal');
    if (!modal) return;

    document.getElementById('taxi-dest-name').textContent = attr.taxi_destination;
    document.getElementById('taxi-dest-phrase').textContent = `"${attr.taxi_phrase}"`;
    document.getElementById('taxi-dest-addr').textContent = attr.address_ko;

    const speakBtn = document.getElementById('btn-speak-taxi');
    speakBtn.onclick = () => {
      speakKorean(attr.taxi_phrase);
    };

    const copyBtn = document.getElementById('btn-copy-address');
    copyBtn.onclick = () => {
      copyToClipboard(attr.address_ko);
    };

    modal.classList.add('active');
  }

  function openDetailModal(attractionId) {
    const attr = TRAVEL_DATA.attractions.find(a => a.id === attractionId);
    if (!attr) return;

    const modal = document.getElementById('detail-modal');
    const content = document.getElementById('detail-modal-body-content');
    if (!modal || !content) return;

    const name = getLocalized(attr, 'name');
    const subName = currentLang === 'en' ? attr.name_ko : attr.name_en;
    const overview = getLocalized(attr, 'overview');
    const highlights = currentLang === 'ko' ? attr.highlights_ko : (currentLang === 'zh' ? attr.highlights_zh : attr.highlights_en);
    const transit = getLocalized(attr, 'transit_guide');
    const tip = getLocalized(attr, 'insider_tip');
    const hours = getLocalized(attr, 'hours');
    const admission = getLocalized(attr, 'admission');

    const tipLabel = currentLang === 'ko' ? '현지인 추천 팁:' : (currentLang === 'zh' ? '当地深度游贴士:' : 'Local Insider Tip:');
    const hlLabel = currentLang === 'ko' ? '핵심 관람 포인트' : (currentLang === 'zh' ? '核心观光看点' : 'Key Highlights');
    const hoursLabel = currentLang === 'ko' ? '운영시간 및 입장료' : (currentLang === 'zh' ? '开放时间与门票' : 'Hours & Admission');
    const transitLabel = currentLang === 'ko' ? '대중교통 찾아가는 법' : (currentLang === 'zh' ? '交通指南' : 'How to Get There');
    const taxiCardBtn = currentLang === 'ko' ? '택시 카드 열기' : (currentLang === 'zh' ? '打开司机卡片' : 'Open Taxi Card');

    content.innerHTML = `
      <img class="detail-modal-img" src="${attr.image}" alt="${name}" onerror="this.src='images/suwon_hwaseong.jpg'">
      <h2 class="detail-modal-title">${name}</h2>
      <div style="font-size: 0.95rem; color: var(--accent-gold); font-weight:700; margin-bottom:16px;">
        ${subName} • ${getLocalized(attr, 'subtitle')}
      </div>
      <p class="detail-modal-desc">${overview}</p>

      <div class="detail-tip-box">
        <strong>💡 ${tipLabel}</strong><br>
        ${tip}
      </div>

      <h4 class="detail-section-title">✨ ${hlLabel}</h4>
      <ul class="detail-list">
        ${highlights.map(h => `<li class="detail-list-item"><span>•</span> <span>${h}</span></li>`).join('')}
      </ul>

      <h4 class="detail-section-title">🕒 ${hoursLabel}</h4>
      <div style="margin-bottom: 20px; font-size:0.92rem; color:#cbd5e1; line-height:1.6;">
        <div><strong>${currentLang === 'ko' ? '운영시간:' : (currentLang === 'zh' ? '营业时间:' : 'Hours:')}</strong> ${hours}</div>
        <div><strong>${currentLang === 'ko' ? '요금:' : (currentLang === 'zh' ? '门票费用:' : 'Fee:')}</strong> ${admission}</div>
      </div>

      <h4 class="detail-section-title">🚇 ${transitLabel}</h4>
      <div style="margin-bottom: 24px; font-size:0.92rem; color:#cbd5e1; line-height:1.6;">
        ${transit}
      </div>

      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <button class="btn-card-action btn-taxi-trigger" style="flex:1;" onclick="window.appOpenTaxi('${attr.id}')">
          <span>🚖 ${taxiCardBtn}</span>
        </button>
        <button class="btn-card-action btn-trip-add" style="flex:1;" onclick="window.appToggleTrip('${attr.id}')">
          <span>${myTripList.includes(attr.id) ? '✓ ' + (currentLang === 'ko' ? '담김' : (currentLang === 'zh' ? '已在行程中' : 'In My Trip')) : '+ ' + (currentLang === 'ko' ? '일정에 담기' : (currentLang === 'zh' ? '加入行程' : 'Add to Trip'))}</span>
        </button>
      </div>
    `;

    modal.classList.add('active');
  }

  window.appOpenTaxi = function(id) {
    const detailModal = document.getElementById('detail-modal');
    if (detailModal) detailModal.classList.remove('active');
    openTaxiModal(id);
  };

  window.appToggleTrip = function(id) {
    toggleTripItem(id);
    openDetailModal(id);
  };

  // --- MY TRIP DRAWER ---
  function initTripDrawer() {
    const triggerBtn = document.getElementById('my-trip-btn');
    const drawer = document.getElementById('trip-drawer');
    const closeBtn = document.getElementById('close-trip-drawer');
    const clearBtn = document.getElementById('btn-clear-trip');

    if (triggerBtn && drawer) {
      triggerBtn.addEventListener('click', () => {
        renderTripDrawerItems();
        drawer.classList.add('open');
      });
    }

    if (closeBtn && drawer) {
      closeBtn.addEventListener('click', () => {
        drawer.classList.remove('open');
      });
    }

    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        myTripList = [];
        saveTrip();
        renderAttractions();
        renderTripDrawerItems();
        showToast((UI_STRINGS[currentLang] || UI_STRINGS.en).toast_removed);
      });
    }
  }

  function renderTripDrawerItems() {
    const container = document.getElementById('trip-items-container');
    if (!container) return;

    const t = UI_STRINGS[currentLang] || UI_STRINGS.en;

    if (myTripList.length === 0) {
      container.innerHTML = `
        <div class="trip-empty-state">
          <div class="trip-empty-icon">🗺️</div>
          <p>${t.trip_empty}</p>
        </div>
      `;
      return;
    }

    const savedAttractions = myTripList
      .map(id => TRAVEL_DATA.attractions.find(a => a.id === id))
      .filter(Boolean);

    const tripTip = currentLang === 'ko' ? 
      `총 ${savedAttractions.length}곳의 명소가 선택되었습니다! 수원과 기흥은 수인분당선(수원역 ↔ 상갈/기흥역) 전철로 약 15분 만에 편리하게 연결됩니다.` :
      (currentLang === 'zh' ? 
        `您已选择 ${savedAttractions.length} 个精彩目的地！水原与器兴之间可通过水仁盆唐线地铁（水原站 ↔ 上葛/器兴站）在15分钟内轻松直达。` :
        `You have selected ${savedAttractions.length} destinations! Both cities are connected in 15 mins via Suin-Bundang Line (Suwon Station ↔ Sanggal/Giheung Station).`);

    container.innerHTML = savedAttractions.map((attr, idx) => {
      const name = getLocalized(attr, 'name');
      const region = attr.region === 'suwon' ? 
        (currentLang === 'ko' ? '수원' : (currentLang === 'zh' ? '水原' : 'Suwon')) : 
        (currentLang === 'ko' ? '기흥' : (currentLang === 'zh' ? '器兴' : 'Giheung'));

      return `
        <div class="trip-item-card">
          <div>
            <div class="trip-item-region">STOP ${idx + 1} • ${region}</div>
            <div class="trip-item-title">${name}</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <button class="btn-card-action btn-taxi-trigger" style="padding:4px 8px; font-size:0.75rem;" onclick="window.appOpenTaxi('${attr.id}')">
              🚖
            </button>
            <button class="btn-remove-trip" data-remove-id="${attr.id}" title="Remove">
              ✕
            </button>
          </div>
        </div>
      `;
    }).join('') + `
      <div style="background:rgba(245,158,11,0.1); border:1px dashed var(--accent-gold); border-radius:8px; padding:12px; margin-top:10px; font-size:0.82rem; color:#fbbf24;">
        💡 ${tripTip}
      </div>
    `;

    container.querySelectorAll('.btn-remove-trip').forEach(btn => {
      btn.addEventListener('click', () => {
        toggleTripItem(btn.dataset.removeId);
        renderTripDrawerItems();
      });
    });
  }

  // --- CLIPBOARD & TOAST ---
  function copyToClipboard(text) {
    const t = UI_STRINGS[currentLang] || UI_STRINGS.en;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(t.toast_copied);
      }).catch(() => {
        fallbackCopy(text);
      });
    } else {
      fallbackCopy(text);
    }
  }

  function fallbackCopy(text) {
    const t = UI_STRINGS[currentLang] || UI_STRINGS.en;
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-9999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      showToast(t.toast_copied);
    } catch (err) {
      console.warn('Fallback copy failed', err);
    }
    document.body.removeChild(textArea);
  }

  function showToast(message) {
    const toast = document.getElementById('toast-notice');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2600);
  }

})();
