const days = [
  {
    id: "0617",
    date: "6/17",
    title: "台中 → 鹿港 → 北港 → 台南",
    stay: "台南聖禾",
    meal: "含餐",
    rooms: ["1大床 1間", "2大床 2間"],
    image: "assets/day-0617-west-towns.svg",
    color: "#315f52",
    routeUrl: "https://maps.app.goo.gl/YWX8DaenKffsS8dE6",
    lodgingUrl: "https://maps.app.goo.gl/Nyhnp6FSkpmi9YE49",
    routeInfo: {
      label: "目前連結路段：鹿港天后宮 → 北港朝天宮",
      distance: "約 66-76 km",
      climb: "平原路段，爬升待完整 GPX 確認",
      confidence: "Google 連結目前只讀到部分路段，非台中到台南全日總距離。"
    },
    attractions: [
      { name: "鹿港天后宮", text: "國定古蹟與媽祖信仰重鎮，適合作為孩子認識鹿港歷史、廟宇工藝與老街生活的起點。" },
      { name: "鹿港老街", text: "街屋、糕餅、傳統小吃與巷弄尺度都很有台灣西部老城味道，適合短暫散步補給。" },
      { name: "北港朝天宮", text: "北港媽祖信仰核心，廟埕、老街與香火文化能讓孩子感受地方信仰如何連結城鎮生活。" },
      { name: "台南市區", text: "抵達後可把重點放在晚餐與休息，隔天還要長距離南下，不建議排太滿。" }
    ],
    focus: "從西部平原出發，經過鹿港與北港兩個有信仰、老街與地方生活感的城鎮，最後抵達台南。",
    stops: ["台中出發", "鹿港老街與廟宇文化", "北港媽祖信仰與老城氛圍", "台南歷史、美食與文化"],
    note: "第一天會讓孩子發現，環台不是只有騎車，而是每天都在穿越不同的台灣故事。"
  },
  {
    id: "0618",
    date: "6/18",
    title: "台南 → 恆春",
    stay: "小迷鹿民宿",
    meal: "",
    rooms: ["1大床1小床 3間"],
    image: "assets/day-0618-south-coast.svg",
    color: "#217c8d",
    routeUrl: "https://maps.app.goo.gl/ZXuZDXC5jr5xvkPH7",
    lodgingUrl: "https://maps.app.goo.gl/YPkPBAonCCxa1JLn9",
    routeInfo: {
      label: "目前連結路段：屏東沿海／南下至恆春段",
      distance: "約 72-83 km",
      climb: "多為南部平原與海岸段，爬升待完整 GPX 確認",
      confidence: "Google 連結目前不是從台南起點開始，台南到恆春全日總距離需再補完整路線。"
    },
    attractions: [
      { name: "大鵬灣", text: "南台灣代表性的濱海自行車景點，環灣路線可看潟湖、濕地與海岸景觀。" },
      { name: "枋山海岸", text: "逐漸接近恆春半島時，海景與南國氣候會變得明顯，是很有轉場感的一段。" },
      { name: "恆春古城", text: "現存古城門與鎮上生活保留南國小鎮節奏，適合作為從西部城市轉進墾丁前的文化停點。" }
    ],
    focus: "逐漸離開平原城市，進入南台灣更開闊、更有海洋感的風景。",
    stops: ["台南出發", "南部平原與屏東方向", "恆春古城與老街", "進入墾丁前的重要轉折"],
    note: "騎到恆春，代表大家已完成台灣西南段很長的一段路，也是一個心理上的突破。"
  },
  {
    id: "0619",
    date: "6/19",
    title: "墾丁／恆春 → 台東",
    stay: "娜路彎會館",
    meal: "含餐",
    rooms: ["2大床 3間"],
    image: "assets/day-0619-south-link.svg",
    color: "#bc6b5d",
    routeUrl: "",
    lodgingUrl: "https://maps.app.goo.gl/AjKWZvZ4QC8mbYag9",
    routeInfo: {
      label: "路線待排：墾丁／恆春 → 台東",
      distance: "待確認",
      climb: "待確認，需依南迴／替代路線與安全狀況評估",
      confidence: "這天是全程風險較高的一天，建議最後用天氣、風向、體力與支援車安排確認。"
    },
    attractions: [
      { name: "恆春半島", text: "若時間允許，可選擇恆春古城、出火、滿州方向等短停點，但不宜壓縮主行程安全餘裕。" },
      { name: "南迴山海段", text: "從南台灣轉進東部，景觀會從南國海岸逐步變成山海交界，是環台感很強的一段。" },
      { name: "台東市區", text: "抵達後以補給、恢復與晚餐為主，為隔天花東縱谷路線保留體力。" }
    ],
    focus: "路線視天氣、體力與安全狀況安排，重點是穩定完成從南台灣跨向東台灣的移動。",
    stops: ["恆春或墾丁出發", "南國海岸", "山與海之間的道路", "抵達台東"],
    note: "這是環台旅程的重要里程碑：從西部到南端，再正式轉進東部。"
  },
  {
    id: "0620",
    date: "6/20",
    title: "台東 → 池上 → 瑞穗 → 花蓮",
    stay: "花漾民宿",
    meal: "",
    rooms: ["2大床 3間"],
    image: "assets/day-0620-east-valley.svg",
    color: "#6d7d47",
    routeUrl: "https://maps.app.goo.gl/XndWkZ5epF4W4gvT7",
    lodgingUrl: "https://maps.app.goo.gl/3tWsRiizb3DrdQ8b9",
    routeInfo: {
      label: "目前連結路段：玉里／瑞穗周邊至大農大富方向",
      distance: "約 24-27 km",
      climb: "縱谷局部路段，爬升待完整 GPX 確認",
      confidence: "Google 連結目前只涵蓋花東縱谷部分路段，非台東到花蓮全日總距離。"
    },
    attractions: [
      { name: "池上田園", text: "開闊稻田、筆直田間道路與縱谷山景，是孩子最容易感受到土地尺度的一站。" },
      { name: "瑞穗", text: "花東縱谷重要補給點，適合安排水分、餐食與身體狀況檢查。" },
      { name: "大農大富自行車道", text: "平地森林園區內有北環與南環自行車道，環境相對舒服，適合把速度放慢、享受森林與縱谷風。" }
    ],
    focus: "沿著花東縱谷往北，安排大農大富自行車道，感受稻田、山脈、河谷與小鎮。",
    stops: ["台東出發", "池上稻田與田園道路", "瑞穗", "大農大富自行車道", "抵達花蓮"],
    note: "這一天不只是風景漂亮，也會讓孩子看見台灣安靜、開闊、貼近土地的一面。"
  },
  {
    id: "0621",
    date: "6/21",
    title: "花蓮 → 宜蘭 → 台北 → 中壢／桃園",
    stay: "古華花園",
    meal: "",
    rooms: ["2大床 1間", "2大床 2間"],
    image: "assets/day-0621-yilan-coast.svg",
    color: "#586f86",
    routeUrl: "https://maps.app.goo.gl/Qq92SNGwmQgGxpJi6",
    lodgingUrl: "https://maps.app.goo.gl/46WkrHH9m7PUgxnZ8",
    routeInfo: {
      label: "目前連結路段：壯圍濱海自行車道路段",
      distance: "約 15-17 km",
      climb: "濱海平坦路段，爬升低；全日爬升待完整路線確認",
      confidence: "Google 連結目前只讀到宜蘭壯圍部分路線，非花蓮到桃園全日總距離。"
    },
    attractions: [
      { name: "壯圍沙丘旅遊服務園區", text: "宜蘭海岸與沙丘地景的代表停點，適合短暫休息、上廁所與看海風地形。" },
      { name: "宜蘭濱海自行車道", text: "路線平坦、海風明顯，可作為長途移動中較舒服的騎乘段。" },
      { name: "蘭陽平原", text: "從花蓮山海進入宜蘭平原，地形與聚落感會明顯改變，很適合提醒孩子觀察台灣地貌變化。" }
    ],
    focus: "使用腳踏車模式安排路線，搭配壯圍自行車道與部分路段，從東北部山海轉進北部都會。",
    stops: ["花蓮出發", "宜蘭方向", "壯圍自行車道", "台北", "中壢／桃園"],
    note: "進入北部時，孩子會感覺台中、台南、恆春、台東、花蓮都已變成親身走過的記憶。"
  },
  {
    id: "0622",
    date: "6/22",
    title: "新竹海邊自行車道與西部路線",
    stay: "行程收尾",
    meal: "",
    rooms: [],
    image: "assets/day-0622-hsinchu-coast.svg",
    color: "#a9793c",
    routeUrl: "https://maps.app.goo.gl/K8TzCJXMx7QhRJq6A",
    lodgingUrl: "",
    routeInfo: {
      label: "目前連結路段：新竹海岸自行車道與銜接段",
      distance: "約 25-29 km",
      climb: "海岸路線為主，爬升低；銜接段待完整路線確認",
      confidence: "目前連結可作為最後一天收尾路段參考。"
    },
    attractions: [
      { name: "新竹海岸自行車道", text: "海風、濕地與自行車道串連，是最後一天放慢速度、收心回望的合適路線。" },
      { name: "香山濕地", text: "潮間帶與濕地生態明顯，若潮汐與時間合適，可以讓孩子觀察海岸生態。" },
      { name: "南寮漁港", text: "適合作為補給、集合或拍照停點，也有完成旅程的收尾感。" }
    ],
    focus: "最後一天安排新竹海邊自行車道與部分銜接路線，放慢速度、整理心情，完整收好旅程。",
    stops: ["新竹海岸線", "海風與濕地", "自行車道", "共同完成旅程"],
    note: "這一天的重點不是再證明什麼，而是一起把爸爸與女兒的畢業回憶完整收好。"
  }
];

const storyParagraphs = [
  "這一次，我們不是單純要完成一趟騎車旅行。",
  "我們想陪著孩子，在她們小學畢業、即將進入下一個人生階段之前，用一種最踏實、最真實的方式，重新認識台灣這塊土地。從台中的出發點一路往南，經過鹿港、北港、台南、恆春、墾丁、台東、花蓮、宜蘭、台北、桃園，再回到西部海岸線，每一天都會踩過不同的城市、鄉鎮、海岸、田野與山脈。",
  "這會是一趟有點辛苦、也一定會很難忘的旅程。",
  "對爸爸們來說，這不只是陪孩子騎車，而是在孩子還願意和我們一起出發、一起流汗、一起看風景的年紀，留下屬於彼此的共同記憶。對孩子們來說，這也不只是畢業旅行，而是一次用自己的力量，把台灣一段一段踩進心裡的成長儀式。",
  "我們不追求速度，也不追求名次。我們追求的是：大家一起出發，也一起完成。",
  "希望這趟旅程之後，孩子們記得的不只是「我騎了很遠」，而是記得爸爸一路陪在旁邊；記得同伴一起加油的聲音；記得風吹過稻田、海浪拍上岸邊、夕陽落在路上的樣子；也記得自己曾經比想像中更勇敢、更堅持、更有力量。",
  "這是一趟爸爸與女兒一起完成的單車環台。也是一段屬於童年畢業前，最珍貴的台灣記憶。",
  "未來孩子長大後，她們可能不會記得每一天騎了幾公里，也不一定記得每一個住宿點或每一段路線。但她們可能會記得：那一年小學畢業前，爸爸陪她騎著腳踏車，從城市到海邊，從西部到東部，從烈日下到晚風裡，一起完成了一件很難、但很美好的事。",
  "用單車認識台灣。用陪伴留下回憶。用自己的力量，完成一段屬於我們的路。"
];

const icons = {
  route: "route",
  heart: "heart",
  map: "map-pinned",
  bed: "bed",
  calendar: "calendar-days"
};

let selectedDay = days[0].id;

function icon(name) {
  return `<i data-lucide="${icons[name] || name}" aria-hidden="true"></i>`;
}

function renderTabs() {
  const tabs = document.querySelector(".day-tabs");
  tabs.innerHTML = days.map((day) => `
    <button class="day-tab" type="button" role="tab" aria-selected="${day.id === selectedDay}" data-day="${day.id}">
      ${icon("calendar")}
      <span>
        <strong>${day.date}</strong>
        <small>${day.title}</small>
      </span>
    </button>
  `).join("");

  tabs.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      selectedDay = button.dataset.day;
      renderTabs();
      renderDayPanel();
      refreshIcons();
    });
  });
}

function renderDayPanel() {
  const day = days.find((item) => item.id === selectedDay);
  const panel = document.querySelector(".day-panel");
  const routeAction = day.routeUrl
    ? `<a class="button button--primary" href="${day.routeUrl}" target="_blank" rel="noreferrer">${icon("map")}開啟路線</a>`
    : `<span class="chip">路線視狀況安排</span>`;
  const lodgingAction = day.lodgingUrl
    ? `<a class="icon-link" href="${day.lodgingUrl}" target="_blank" rel="noreferrer">${icon("bed")}住宿地圖</a>`
    : "";
  const roomSummary = day.rooms.length ? day.rooms.join("、") : "無住宿安排";
  const roomItems = day.rooms.length
    ? day.rooms.map((room) => `<li>${room}</li>`).join("")
    : "<li>無住宿安排</li>";
  const mealChip = day.meal ? `<span class="chip">${day.meal}</span>` : "";
  const lodgingBlock = day.lodgingUrl
    ? `
      <section class="day-lodging" aria-label="當日住宿">
        <div>
          <span>當晚住宿</span>
          <h4>${day.stay}</h4>
          <ul class="room-list">${roomItems}</ul>
          <p>部分房型已有升等；住宿總費用 NT$ 42,180，費用含司機住宿。</p>
        </div>
        <a class="icon-link" href="${day.lodgingUrl}" target="_blank" rel="noreferrer">${icon("bed")}住宿地圖</a>
      </section>
    `
    : `
      <section class="day-lodging" aria-label="當日住宿">
        <div>
          <span>當晚住宿</span>
          <h4>${day.stay}</h4>
          <ul class="room-list">${roomItems}</ul>
        </div>
      </section>
    `;

  panel.style.setProperty("--panel-color", day.color);
  panel.innerHTML = `
    <div class="panel-hero panel-hero--image">
      <img src="${day.image}" alt="${day.title} 主圖" />
      <div>
        <p>${day.date}</p>
        <h3>${day.title}</h3>
      </div>
    </div>
    <div class="panel-body">
      <div class="panel-meta">
        <span class="chip">住宿：${day.stay}</span>
        ${mealChip}
        <span class="chip">安全優先</span>
        <span class="chip">依天氣與體力調整</span>
      </div>
      <p>${day.focus}</p>
      <div class="panel-actions">${routeAction}${lodgingAction}</div>
      ${lodgingBlock}
      <div class="route-facts">
        <div>
          <span>路段</span>
          <strong>${day.routeInfo.label}</strong>
        </div>
        <div>
          <span>騎乘距離</span>
          <strong>${day.routeInfo.distance}</strong>
        </div>
        <div>
          <span>爬升</span>
          <strong>${day.routeInfo.climb}</strong>
        </div>
      </div>
      <p class="route-note">${day.routeInfo.confidence}</p>
      <div class="panel-grid">
        <div>
          <h3>今日段落</h3>
          <ul class="timeline">
            ${day.stops.map((stop) => `<li>${stop}</li>`).join("")}
          </ul>
        </div>
        <aside class="info-box">
          <h3>住宿房型</h3>
          <p>${roomSummary}</p>
          <h3>給參加家庭的小提醒</h3>
          <p>${day.note}</p>
        </aside>
      </div>
      <section class="attractions" aria-label="沿途景點">
        <h3>沿途景點</h3>
        <div class="attraction-grid">
          ${day.attractions.map((place) => `
            <article>
              <h4>${place.name}</h4>
              <p>${place.text}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function renderStory() {
  document.querySelector(".story-copy").innerHTML = storyParagraphs
    .map((paragraph, index) => `<p>${index === 4 ? `<strong>${paragraph}</strong>` : paragraph}</p>`)
    .join("");
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

renderTabs();
renderDayPanel();
renderStory();
refreshIcons();
