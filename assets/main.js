const { apps, siteName, updated } = window.ARCHIVE;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const catalogNo = (app) => String(apps.indexOf(app) + 1).padStart(3, "0");

const formatDate = (iso) => new Date(iso + "T00:00:00").toLocaleDateString("tr-TR");

// Türkçe büyük/küçük harf duyarsız karşılaştırma için.
const fold = (s) => s.toLocaleLowerCase("tr-TR");

function renderCatalog() {
  const list = document.getElementById("catalog");
  const count = document.getElementById("count");
  const input = document.getElementById("q");
  const filters = document.getElementById("filters");

  const categories = ["Tümü", ...new Set(apps.map((a) => a.category))];
  let active = "Tümü";

  filters.innerHTML = categories
    .map((c) => `<li><button type="button" aria-pressed="${c === active}">${esc(c)}</button></li>`)
    .join("");

  filters.addEventListener("click", (e) => {
    const btn = e.target.closest("button");
    if (!btn) return;
    active = btn.textContent;
    filters.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b === btn));
    draw();
  });
  input.addEventListener("input", draw);

  function draw() {
    const q = fold(input.value.trim());
    const shown = apps.filter(
      (a) =>
        (active === "Tümü" || a.category === active) &&
        (!q || fold(`${a.name} ${a.category} ${a.tagline}`).includes(q))
    );

    list.innerHTML = shown.length
      ? shown
          .map(
            (a) => `
        <li class="entry">
          <a href="app.html?id=${encodeURIComponent(a.id)}">
            <span class="no">${catalogNo(a)}</span>
            <span class="line">
              <span class="name">${esc(a.name)}</span>
              <span class="dots" aria-hidden="true"></span>
              <span class="ver">v${esc(a.version)}</span>
            </span>
            <span class="arrow" aria-hidden="true">→</span>
            <span class="meta">${esc(a.tagline)}</span>
          </a>
        </li>`
          )
          .join("")
      : `<li class="empty">Bu aramaya uyan kayıt yok.</li>`;

    count.textContent = `[ ${shown.length} / ${apps.length} kayıt · son güncelleme ${formatDate(updated)} ]`;
  }

  draw();
}

function renderDetail() {
  const root = document.getElementById("detail");
  const id = new URLSearchParams(location.search).get("id");
  const app = apps.find((a) => a.id === id);

  if (!app) {
    root.innerHTML = `
      <header class="masthead">
        <p class="kicker"><a href="index.html">← Arşiv</a></p>
        <h1>Kayıt bulunamadı</h1>
        <p class="lede">Aradığın uygulama arşivde yok. <a href="index.html">Arşive dön</a>.</p>
      </header>`;
    return;
  }

  document.title = `${app.name} — ${siteName}`;

  const ready = Boolean(app.apk);
  const button = ready
    ? `<a class="download" href="${esc(app.apk)}" download>↓ APK İndir${app.size ? ` · ${esc(app.size)}` : ""}</a>
       <p class="hint">İlk kez mi kuruyorsun? <a href="kurulum.html">Kurulum kılavuzu</a></p>`
    : `<a class="download" aria-disabled="true" role="link">APK hazırlanıyor</a>
       <p class="hint">Bu uygulamanın indirme dosyası yakında eklenecek.</p>`;

  root.innerHTML = `
    <header class="masthead">
      <p class="kicker"><a href="index.html">← Arşiv</a> / Kayıt № ${catalogNo(app)}</p>
      <h1>${esc(app.name)}</h1>
      <p class="lede">${esc(app.tagline)}</p>
      <span class="stamp" aria-hidden="true">ÜCRETSİZ</span>
    </header>

    <dl class="record">
      <dt>Sürüm</dt><dd>${esc(app.version)}</dd>
      <dt>Tür</dt><dd>${esc(app.category)}</dd>
      <dt>Android</dt><dd>${esc(app.minAndroid)} ve üzeri</dd>
      ${app.size ? `<dt>Boyut</dt><dd>${esc(app.size)}</dd>` : ""}
    </dl>

    ${button}

    <h2>Açıklama</h2>
    <div class="prose"><p>${esc(app.description)}</p></div>

    ${
      app.features?.length
        ? `<h2>Özellikler</h2><ul class="ticks">${app.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`
        : ""
    }

    ${
      app.changelog?.length
        ? `<h2>Sürüm notları</h2><ul class="log">${app.changelog
            .map((c) => `<li><b>v${esc(c.version)}</b><span>${esc(c.notes)}</span></li>`)
            .join("")}</ul>`
        : ""
    }

    <footer class="footer">
      <a href="index.html">← Arşive dön</a>
      <a href="kurulum.html">APK nasıl kurulur? →</a>
    </footer>`;
}
