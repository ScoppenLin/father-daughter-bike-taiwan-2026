const days = [
  {
    id: "0617",
    date: "6/17",
    title: "台中 → 鹿港 → 北港 → 台南",
    stay: "台南聖禾",
    meal: "含餐",
    rooms: ["1大床 1間", "2大床 2間"],
    color: "#315f52",
    routeUrl: "https://maps.app.goo.gl/YWX8DaenKffsS8dE6",
    lodgingUrl: "https://maps.app.goo.gl/Nyhnp6FSkpmi9YE49",
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
    color: "#217c8d",
    routeUrl: "https://maps.app.goo.gl/ZXuZDXC5jr5xvkPH7",
    lodgingUrl: "https://maps.app.goo.gl/YPkPBAonCCxa1JLn9",
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
    color: "#bc6b5d",
    routeUrl: "",
    lodgingUrl: "https://maps.app.goo.gl/AjKWZvZ4QC8mbYag9",
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
    color: "#6d7d47",
    routeUrl: "https://maps.app.goo.gl/XndWkZ5epF4W4gvT7",
    lodgingUrl: "https://maps.app.goo.gl/3tWsRiizb3DrdQ8b9",
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
    color: "#586f86",
    routeUrl: "https://maps.app.goo.gl/Qq92SNGwmQgGxpJi6",
    lodgingUrl: "https://maps.app.goo.gl/46WkrHH9m7PUgxnZ8",
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
    color: "#a9793c",
    routeUrl: "https://maps.app.goo.gl/K8TzCJXMx7QhRJq6A",
    lodgingUrl: "",
    focus: "最後一天安排新竹海邊自行車道與部分銜接路線，放慢速度、整理心情，完整收好旅程。",
    stops: ["新竹海岸線", "海風與濕地", "自行車道", "共同完成旅程"],
    note: "這一天的重點不是再證明什麼，而是一起把爸爸與女兒的畢業回憶完整收好。"
  }
];

const lodgingSummary = {
  note: "部分房型已有升等",
  costLabel: "住宿總費用",
  cost: "42,180",
  costNote: "費用含司機住宿"
};

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
  copy: "copy",
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
  const mealChip = day.meal ? `<span class="chip">${day.meal}</span>` : "";

  panel.style.setProperty("--panel-color", day.color);
  panel.innerHTML = `
    <div class="panel-hero">
      <p>${day.date}</p>
      <h3>${day.title}</h3>
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
    </div>
  `;
}

function renderLodging() {
  const summary = document.querySelector(".lodging-summary");
  const grid = document.querySelector(".lodging-grid");
  summary.innerHTML = `
    <div>
      <strong>${lodgingSummary.note}</strong>
      <p>${lodgingSummary.costNote}</p>
    </div>
    <div class="lodging-cost">
      <small>${lodgingSummary.costLabel}</small>
      <span>NT$ ${lodgingSummary.cost}</span>
    </div>
  `;
  grid.innerHTML = days.filter((day) => day.lodgingUrl).map((day) => `
    <article class="lodging-card">
      <div>
        <time>${day.date}</time>
        <h3>${day.stay}</h3>
        <p>${day.title}</p>
        <ul class="room-list">
          ${day.rooms.map((room) => `<li>${room}</li>`).join("")}
        </ul>
        <div class="lodging-tags">
          ${day.meal ? `<span>${day.meal}</span>` : ""}
        </div>
      </div>
      <a class="icon-link" href="${day.lodgingUrl}" target="_blank" rel="noreferrer">${icon("map")}Google Maps</a>
    </article>
  `).join("");
}

function renderStory() {
  document.querySelector(".story-copy").innerHTML = storyParagraphs
    .map((paragraph, index) => `<p>${index === 4 ? `<strong>${paragraph}</strong>` : paragraph}</p>`)
    .join("");
}

function setupCopy() {
  const button = document.querySelector("#copyStory");
  const status = document.querySelector(".copy-status");
  button.addEventListener("click", async () => {
    const text = `用自己的雙腳，認識台灣\n2026 爸爸與女兒的單車環台小旅行\n\n${storyParagraphs.join("\n\n")}`;
    try {
      await navigator.clipboard.writeText(text);
      status.textContent = "已複製，可以貼到 LINE 或社群分享。";
    } catch {
      status.textContent = "瀏覽器不支援直接複製，請改用手動選取文字。";
    }
  });
}

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

renderTabs();
renderDayPanel();
renderLodging();
renderStory();
setupCopy();
refreshIcons();
