const { apps, siteName, updated } = window.ARCHIVE;

const esc = (s) =>
  String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

const formatDate = (iso) =>
  new Date(iso + "T00:00:00").toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });

const meta = (app) => [app.category, `v${app.version}`, app.size].filter(Boolean).map(esc).join(" · ");

const arrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 4v12M6 11l6 6 6-6M5 20h14"/></svg>`;

function downloadPlate(app, big = false) {
  const cls = big ? "get big" : "get";
  return app.apk
    ? `<a class="${cls}" href="${esc(app.apk)}" download>${arrow}APK İndir</a>`
    : `<a class="${cls}" aria-disabled="true" role="link">Hazırlanıyor</a>`;
}

// Tags below the fold start lifted and settle onto their stakes when scrolled into view.
function settle(list) {
  if (!("IntersectionObserver" in window) || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const tags = [...list.children].filter((el) => el.getBoundingClientRect().top > innerHeight);
  if (!tags.length) return;
  tags.forEach((el) => el.classList.add("up"));
  list.classList.add("settle");
  const io = new IntersectionObserver(
    (entries) =>
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        e.target.classList.remove("up");
        io.unobserve(e.target);
      }),
    { rootMargin: "0px 0px -15% 0px" }
  );
  tags.forEach((el) => io.observe(el));
}

function renderList() {
  const list = document.getElementById("apps");
  list.innerHTML = apps
    .map(
      (a) => `
      <li class="specimen">
        <div class="plate">
          <h2><a href="app.html?id=${encodeURIComponent(a.id)}">${esc(a.name)}</a></h2>
          <p class="meta">${meta(a)}</p>
          <p class="desc">${esc(a.description)}</p>
          ${downloadPlate(a)}
        </div>
      </li>`
    )
    .join("");
  settle(list);

  document.getElementById("end").innerHTML = `
    <p>Yolun sonu. Son güncelleme ${esc(formatDate(updated))}.</p>
    <p><a href="kurulum.html">APK nasıl kurulur?</a></p>`;
}

function renderDetail() {
  const root = document.getElementById("detail");
  const id = new URLSearchParams(location.search).get("id");
  const app = apps.find((a) => a.id === id);

  if (!app) {
    root.innerHTML = `
      <a class="back" href="index.html">‹ Uygulamalara dön</a>
      <div class="specimen solo"><div class="plate">
        <h1>Böyle bir etiket yok</h1>
        <p class="desc">Bağlantı yanlış olabilir.</p>
        <a class="get" href="index.html">Tüm uygulamalar</a>
      </div></div>`;
    return;
  }

  document.title = `${app.name} - ${siteName}`;

  const facts = [
    ["Tür", app.category],
    ["Sürüm", app.version],
    ["Android", `${app.minAndroid}+`],
    ["Boyut", app.size]
  ].filter(([, v]) => v);

  root.innerHTML = `
    <a class="back" href="index.html">‹ Uygulamalara dön</a>
    <div class="specimen solo"><div class="plate">
      <h1>${esc(app.name)}</h1>
      <p class="desc">${esc(app.description)}</p>
      <dl class="facts">${facts.map(([k, v]) => `<div><dt>${k}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>
      ${downloadPlate(app, true)}
      <p class="hint">${app.apk ? `İlk kez mi kuruyorsun? <a href="kurulum.html">Nasıl kurulur?</a>` : "APK'yı yakında ekleyeceğim."}</p>
    </div></div>

    <section class="notes">
      ${
        app.features?.length
          ? `<h2>Neler var?</h2><ul>${app.features.map((f) => `<li>${esc(f)}</li>`).join("")}</ul>`
          : ""
      }
      ${
        app.changelog?.length
          ? `<h2>Sürüm notları</h2><ul>${app.changelog
              .map((c) => `<li><b>${esc(c.version)}</b>: ${esc(c.notes)}</li>`)
              .join("")}</ul>`
          : ""
      }
    </section>

    <footer class="end"><p><a href="index.html">‹ Uygulamalara dön</a></p></footer>`;
}
