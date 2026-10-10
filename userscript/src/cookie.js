/* Sakura Client — COOKIE CLICKER payload.
 * A pure visual recode of the official Cookie Clicker (Dashnet). No gameplay
 * changes, no cheating, no save tampering — this only restyles the page.
 *
 * Runs against https://orteil.dashnet.org/cookieclicker/ and is deliberately
 * non-destructive: it injects one <style> block, one fixed petal canvas with
 * pointer-events:none, and a small floating toggle. It never touches the game's
 * own DOM structure or globals, so the game logic is untouched.
 *
 * Ground truth for the selectors below came from introspecting the live 2.058
 * DOM rather than from memory:
 *   #wrapper #topBar #game #backgroundCanvas #cookies #bigCookie #cookieAnchor
 *   #cookieNumbers #centerArea #rows .row .productButtons .productButton
 *   #productIcon1 #productName1 #productPrice1 #productOwned1
 *   #store #storeTitle #upgrades #products .storeSection .upgradeBox
 *   .storePre .storePreButton #storeBulk1 #goldenCookie #seasonPopup
 *   #notes #alert #lumps #ascend*
 * The game draws its bakery on a <canvas>, so the Sakura backdrop is painted
 * over it rather than trying to recolour it.
 */

(() => {
  "use strict";

  var HOST = location.hostname || "";
  if (!/(^|\.)orteil\.dashnet\.org$/.test(HOST)) return;
  if (!/\/cookieclicker/i.test(location.pathname || "")) return;
  if (window.__SAKURA_CC__) return;
  window.__SAKURA_CC__ = true;

  // ── Settings ──
  var DEFAULTS = {
    on: true,        // master switch
    petals: true,    // falling sakura petals
    density: 45,     // petals on screen
    glass: true,     // frosted panels
    wide: true,      // wider layout, store in two columns
    fonts: true,     // Zen Maru Gothic / Outfit instead of Tahoma
    glow: true,      // glow on the big cookie + goldens
    rounded: true    // softer, rounder geometry
  };
  var settings = { ...DEFAULTS };
  try {
    Object.assign(settings, JSON.parse(localStorage.getItem("sakura.cc.v1") || "{}"));
  } catch (_) {}
  function save() {
    try { localStorage.setItem("sakura.cc.v1", JSON.stringify(settings)); } catch (_) {}
  }

  var ACCENT = "#ff8fb1";
  var styleEl = null;
  var petalCanvas = null;
  var petals = [];
  var rafId = 0;

  // ── The theme ──
  // Deliberately built on CSS custom properties so the palette can be tuned in
  // one place; everything below reads from them.
  function css() {
    return `
:root{
  --sk-bg-0:#120b19;
  --sk-bg-1:#1d1229;
  --sk-bg-2:#2a1a3d;
  --sk-ink:#f7eef5;
  --sk-ink-dim:#bda9c9;
  --sk-ink-faint:#8d7a99;
  --sk-pink:#ff8fb1;
  --sk-pink-hi:#ffc2d6;
  --sk-pink-deep:#d94f79;
  --sk-sakura:#ffe3ee;
  --sk-gold:#ffd489;
  --sk-line:rgba(255,255,255,.10);
  --sk-line-soft:rgba(255,255,255,.06);
  --sk-glass:rgba(255,255,255,.055);
  --sk-glass-hi:rgba(255,255,255,.10);
  --sk-shadow:0 10px 30px -12px rgba(0,0,0,.75);
  --sk-radius:16px;
  --sk-radius-lg:22px;
  --sk-font-ui:'Outfit',system-ui,-apple-system,'Segoe UI',sans-serif;
  --sk-font-jp:'Zen Maru Gothic','Outfit',system-ui,sans-serif;
  --sk-store-cols:1;
}

/* The backdrop lives on <html> itself. A body::before at z-index:-2 sits
   behind body's own background box and never paints, so don't do that. */
html{
  background-color:var(--sk-bg-0) !important;
  background-image:
    radial-gradient(1100px 620px at 78% -8%, rgba(217,79,121,.30), transparent 62%),
    radial-gradient(900px 560px at 8% 104%, rgba(122,92,214,.26), transparent 60%),
    linear-gradient(168deg,var(--sk-bg-1) 0%,var(--sk-bg-0) 46%,#150c1d 100%) !important;
  background-attachment:fixed !important;
  background-size:cover !important;
  color:var(--sk-ink) !important;
  font-family:var(--sk-font-ui) !important;
  -webkit-font-smoothing:antialiased;
}
body{
  background:transparent !important;
  color:var(--sk-ink) !important;
  font-family:var(--sk-font-ui) !important;
}

/* Star-speckle layer, sitting above the backdrop but below the game. */
body::after{
  content:''; position:fixed; inset:0; z-index:0; pointer-events:none; opacity:.55;
  background-image:
    radial-gradient(1.4px 1.4px at 18% 22%, rgba(255,227,238,.55), transparent),
    radial-gradient(1.2px 1.2px at 71% 14%, rgba(255,227,238,.40), transparent),
    radial-gradient(1.6px 1.6px at 42% 72%, rgba(255,227,238,.34), transparent),
    radial-gradient(1.1px 1.1px at 88% 58%, rgba(255,227,238,.42), transparent),
    radial-gradient(1.3px 1.3px at 8% 86%, rgba(255,227,238,.30), transparent);
}
#wrapper{ position:relative !important; z-index:2 !important; }

/* The bakery scene and the left-column art are <canvas>, so they are dimmed
   rather than restyled. The row art likewise: canvas.rowCanvas per building. */
/* The bakery scene and the left-column art are <canvas>. The game runs a
   transition of 1s on their opacity, and a running transition outranks inline
   styles, so opacity can never be forced here - filter can, so dim with that. */
#backgroundCanvas{
  filter:saturate(.3) brightness(.42) blur(1.5px) !important;
}
#backgroundLeftCanvas{
  filter:saturate(.35) brightness(.5) !important;
}
canvas.rowCanvas{ opacity:.62 !important; filter:saturate(.65) brightness(1.06); }
.blackFiller{ background:transparent !important; }
.blackGradient{
  background:linear-gradient(180deg,rgba(18,11,25,.72),rgba(18,11,25,.10)) !important;
}

/* ── Chrome ── */
#wrapper{
  max-width:var(--sk-wrap,1100px) !important;
  margin:0 auto !important;
  padding:0 18px 120px !important;
}
#game{ text-shadow:none !important; }

#topBar{
  background:linear-gradient(180deg,rgba(255,255,255,.07),rgba(255,255,255,.02)) !important;
  border-bottom:1px solid var(--sk-line) !important;
  box-shadow:var(--sk-shadow) !important;
  backdrop-filter:blur(14px) saturate(1.25);
  border-radius:0 0 var(--sk-radius-lg) var(--sk-radius-lg);
  margin-bottom:22px !important;
  padding:14px 18px !important;
}
#topBar a{ color:var(--sk-pink-hi) !important; transition:color .18s ease, opacity .18s ease; }
#topBar a:hover{ color:#fff !important; }
#topbarDashnet img,#topbarOrteil img,#topbarTumblr img,
#topbarTwitter img,#topbarDiscord img,#topbarMerch img{
  filter:grayscale(1) brightness(1.9) contrast(.9) drop-shadow(0 0 6px rgba(255,143,177,.45));
  opacity:.85; transition:.2s ease;
}
#topbarDashnet a:hover img,#topbarOrteil a:hover img,#topbarTumblr a:hover img,
#topbarTwitter a:hover img,#topbarDiscord a:hover img,#topbarMerch a:hover img{
  filter:none; opacity:1; transform:translateY(-1px);
}
#versionNumber{ color:var(--sk-ink-faint) !important; font-size:11px !important; letter-spacing:.14em; text-transform:uppercase; }

/* ── The cookie ── */
#bigCookie{
  filter:drop-shadow(0 12px 34px rgba(217,79,121,.42));
  transition:filter .35s ease, transform .18s cubic-bezier(.34,1.56,.64,1);
}
#bigCookie:hover{ transform:scale(1.045); }
#cookieAnchor,#cookies{ cursor:pointer; }
#cookieNumbers,#cookiesPerSecond{
  font-family:var(--sk-font-ui) !important;
  font-variant-numeric:tabular-nums;
  letter-spacing:-.01em;
}
#cookies{
  color:var(--sk-sakura) !important;
  text-shadow:0 0 26px rgba(255,143,177,.55), 0 2px 6px rgba(0,0,0,.5) !important;
  font-weight:800 !important;
}
#bakeryName{
  color:var(--sk-ink) !important;
  font-family:var(--sk-font-jp) !important;
  font-weight:700 !important;
  letter-spacing:.02em;
}

/* ── Layout ── */
#sectionLeft,#sectionMiddle,#centerArea,#sectionRight{ background:transparent !important; }
#centerArea{ padding-top:6px !important; }
#buildingsTitle,#storeTitle,.zoneTitle,.title{
  color:var(--sk-pink-hi) !important;
  font-family:var(--sk-font-jp) !important;
  font-weight:700 !important;
  letter-spacing:.06em;
  text-transform:none !important;
}

/* ── Building rows ── */
.row{
  background:var(--sk-glass) !important;
  border:1px solid var(--sk-line-soft) !important;
  border-radius:var(--sk-radius) !important;
  box-shadow:0 4px 16px -10px rgba(0,0,0,.8) !important;
  margin-bottom:10px !important;
  transition:border-color .2s ease, transform .2s ease, box-shadow .2s ease, background .2s ease;
}
.row:hover{
  background:var(--sk-glass-hi) !important;
  border-color:rgba(255,143,177,.38) !important;
  transform:translateY(-2px);
  box-shadow:0 14px 34px -16px rgba(217,79,121,.6) !important;
}
.row .separatorBottom{
  background:linear-gradient(90deg,transparent,var(--sk-line),transparent) !important;
  height:1px !important;
}
.productName{ color:var(--sk-ink) !important; font-weight:600 !important; }
.productOwned{ color:var(--sk-ink-dim) !important; font-variant-numeric:tabular-nums; }
.productPrice{ color:var(--sk-gold) !important; font-weight:700 !important; font-variant-numeric:tabular-nums; }
.productIcon{ filter:drop-shadow(0 3px 7px rgba(0,0,0,.55)) brightness(1.06); transition:filter .2s ease; }
.row:hover .productIcon{ filter:drop-shadow(0 4px 11px rgba(217,79,121,.55)) brightness(1.16); }
.productButton{
  background:rgba(255,255,255,.07) !important;
  border:1px solid var(--sk-line) !important;
  border-radius:9px !important;
  color:var(--sk-ink-dim) !important;
  font-weight:600 !important;
  transition:.18s ease;
}
.productButton:hover{
  background:rgba(255,143,177,.22) !important;
  border-color:rgba(255,143,177,.55) !important;
  color:#fff !important;
}

/* ── Store ── */
#store{
  background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.025)) !important;
  border:1px solid var(--sk-line) !important;
  border-radius:var(--sk-radius-lg) !important;
  box-shadow:var(--sk-shadow) !important;
  backdrop-filter:blur(12px) saturate(1.2);
  padding:20px 22px 24px !important;
}
.storeSection{
  border-radius:var(--sk-radius) !important;
  border:1px solid var(--sk-line-soft) !important;
}
.upgradeBox{ background:rgba(255,255,255,.035) !important; }
.upgrade{
  background:linear-gradient(150deg,rgba(255,196,214,.15),rgba(255,255,255,.04)) !important;
  border:1px solid rgba(255,143,177,.26) !important;
  border-radius:14px !important;
  color:var(--sk-ink) !important;
  box-shadow:0 6px 18px -12px rgba(217,79,121,.7) !important;
  transition:transform .18s ease, box-shadow .2s ease, border-color .2s ease;
}
.upgrade:hover{
  transform:translateY(-3px) scale(1.012);
  border-color:rgba(255,143,177,.6) !important;
  box-shadow:0 16px 34px -16px rgba(217,79,121,.85) !important;
}
.upgrade .name{ color:var(--sk-pink-hi) !important; font-weight:700 !important; font-family:var(--sk-font-jp); }
.upgrade .desc{ color:var(--sk-ink-dim) !important; }
.upgrade .price{ color:var(--sk-gold) !important; font-weight:700 !important; }
.upgrade.shadow{ filter:none !important; opacity:.5 !important; }

.storePre{ color:var(--sk-ink-faint) !important; letter-spacing:.1em; text-transform:uppercase; font-size:11px !important; }
.storePreButton{
  background:rgba(255,255,255,.07) !important;
  border:1px solid var(--sk-line) !important;
  border-radius:9px !important;
  color:var(--sk-ink-dim) !important;
  font-weight:600 !important;
  transition:.18s ease;
}
.storePreButton:hover{ background:rgba(255,143,177,.2) !important; color:#fff !important; border-color:rgba(255,143,177,.5) !important; }
.storePreButton.selected{
  background:linear-gradient(180deg,var(--sk-pink),var(--sk-pink-deep)) !important;
  color:#2a0f1b !important;
  border-color:transparent !important;
  box-shadow:0 4px 14px -6px rgba(255,143,177,.9) !important;
}

/* ── Middle column ── */
#comments{ color:var(--sk-ink-faint) !important; font-style:italic; }
#prefsButton,#statsButton,#logButton,#legacyButton,#checkForUpdate{
  background:rgba(255,255,255,.07) !important;
  border:1px solid var(--sk-line) !important;
  border-radius:11px !important;
  color:var(--sk-ink-dim) !important;
  transition:.18s ease;
}
#prefsButton:hover,#statsButton:hover,#logButton:hover{
  background:rgba(255,143,177,.2) !important; color:#fff !important;
  border-color:rgba(255,143,177,.5) !important;
}
#lumps{ color:var(--sk-sakura) !important; }
#lumpsIcon{ filter:drop-shadow(0 2px 6px rgba(255,196,214,.55)); }

/* ── Golden cookie / season ── */
#goldenCookie{ filter:drop-shadow(0 0 18px rgba(255,212,137,.75)); }
.golden{ animation:skFloat 3.2s ease-in-out infinite; }
@keyframes skFloat{ 0%,100%{ transform:translateY(0) rotate(-4deg); } 50%{ transform:translateY(-11px) rotate(4deg); } }
#seasonPopup{
  background:linear-gradient(160deg,rgba(217,79,121,.92),rgba(90,40,120,.94)) !important;
  border:1px solid rgba(255,196,214,.4) !important;
  border-radius:var(--sk-radius-lg) !important;
  box-shadow:0 24px 60px -22px rgba(217,79,121,.9) !important;
  color:#fff !important;
}

/* ── Popups, notes, dialogs ── */
#notes,#alert,.notes,.alert,.prompt,.optionBox,.inset{
  background:linear-gradient(180deg,rgba(45,28,64,.96),rgba(26,16,38,.96)) !important;
  border:1px solid var(--sk-line) !important;
  border-radius:var(--sk-radius) !important;
  color:var(--sk-ink) !important;
  box-shadow:var(--sk-shadow) !important;
  backdrop-filter:blur(10px);
}
.promptAnchor,.prompt{
  background:linear-gradient(180deg,rgba(45,28,64,.97),rgba(26,16,38,.97)) !important;
  border:1px solid rgba(255,143,177,.3) !important;
  border-radius:var(--sk-radius-lg) !important;
}
button,.button{
  background:linear-gradient(180deg,var(--sk-pink),var(--sk-pink-deep)) !important;
  border:none !important;
  border-radius:10px !important;
  color:#2a0f1b !important;
  font-weight:700 !important;
  box-shadow:0 6px 18px -8px rgba(255,143,177,.9) !important;
  transition:.18s ease;
}
button:hover,.button:hover{ filter:brightness(1.1); transform:translateY(-1px); }

/* ── Ascension ── */
#ascend,#ascendBox,#ascendContent{
  background:linear-gradient(170deg,rgba(38,22,58,.97),rgba(18,11,25,.98)) !important;
  border:1px solid rgba(255,143,177,.26) !important;
  color:var(--sk-ink) !important;
}
#ascendButton{
  background:linear-gradient(180deg,var(--sk-gold),#e0a94f) !important;
  color:#2a1a05 !important;
}

/* ── Wide layout: two-column store ── */
html.sak-wide #store #upgrades,
html.sak-wide #store #products{
  display:grid !important;
  grid-template-columns:repeat(var(--sk-store-cols),minmax(0,1fr));
  gap:12px !important;
  align-items:start;
}
html.sak-wide .storePre{ grid-column:1 / -1; }
html.sak-wide #store{ padding-bottom:34px !important; }
html.sak-wide .upgrade{ height:100%; display:flex; flex-direction:column; }
html.sak-wide .upgrade .desc{ flex:1; }

@media (min-width:1180px){ html.sak-wide{ --sk-store-cols:2; --sk-wrap:1180px; } }
@media (min-width:1560px){ html.sak-wide{ --sk-store-cols:3; --sk-wrap:1400px; } }

/* ── Per-feature toggles ── */
html:not(.sak-glass) #store,
html:not(.sak-glass) #notes,
html:not(.sak-glass) #alert,
html:not(.sak-glass) .prompt,
html:not(.sak-glass) .promptAnchor{ backdrop-filter:none !important; }
html:not(.sak-glass) #store{ background:rgba(30,19,44,.94) !important; }
html:not(.sak-fonts) body,html:not(.sak-fonts) button,html:not(.sak-fonts) input{
  font-family:Tahoma, Arial, sans-serif !important;
}
html:not(.sak-glow) #bigCookie,html:not(.sak-glow) #goldenCookie{ filter:none !important; }
html:not(.sak-rounded){ :root{ --sk-radius:4px; --sk-radius-lg:6px; } }

/* Scrollbars */
*::-webkit-scrollbar{ width:11px; height:11px; }
*::-webkit-scrollbar-track{ background:rgba(0,0,0,.28); }
*::-webkit-scrollbar-thumb{ background:rgba(255,143,177,.3); border-radius:99px; border:2px solid transparent; background-clip:padding-box; }
*::-webkit-scrollbar-thumb:hover{ background:rgba(255,143,177,.55); background-clip:padding-box; }

@media (prefers-reduced-motion:reduce){
  .golden{ animation:none !important; }
  #bigCookie:hover{ transform:none !important; }
}
`;
  }

  // ── Fonts ──
  var FONT_HREF =
    "https://fonts.googleapis.com/css2?" +
    "family=Outfit:wght@300;400;500;600;700;800&" +
    "family=Zen+Maru+Gothic:wght@500;700;900&display=swap";

  function ensureFonts() {
    if (document.getElementById("sk-cc-fonts")) return;
    var l = document.createElement("link");
    l.id = "sk-cc-fonts";
    l.rel = "stylesheet";
    l.href = FONT_HREF;
    document.head.appendChild(l);
  }

  // ── Sakura petals ──
  function initPetals() {
    if (petalCanvas) return;
    petalCanvas = document.createElement("canvas");
    petalCanvas.id = "sakura-petals";
    petalCanvas.style.cssText =
      "position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:5;";
    document.body.appendChild(petalCanvas);
    var ctx = petalCanvas.getContext("2d");
    if (!ctx) return;

    function size() {
      var d = Math.min(window.devicePixelRatio || 1, 2);
      petalCanvas.width = innerWidth * d;
      petalCanvas.height = innerHeight * d;
      ctx.setTransform(d, 0, 0, d, 0, 0);
    }
    size();
    window.addEventListener("resize", size);

    var COLORS = ["#ffd9e6", "#ffc2d6", "#ffb0cd", "#ffe9f1", "#e9c6ff"];

    function spawn(initial) { return makePetal(initial); }

    petals = [];
    for (var i = 0; i < settings.density; i++) petals.push(spawn(true));

    function drawPetal(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.globalAlpha = p.a;
      ctx.fillStyle = p.c;
      if (p.petal) {
        // teardrop petal
        ctx.beginPath();
        ctx.moveTo(0, -p.r);
        ctx.bezierCurveTo(p.r * 0.95, -p.r * 0.5, p.r * 0.8, p.r * 0.7, 0, p.r);
        ctx.bezierCurveTo(-p.r * 0.8, p.r * 0.7, -p.r * 0.95, -p.r * 0.5, 0, -p.r);
        ctx.fill();
      } else {
        // small blossom
        ctx.beginPath();
        for (var k = 0; k < 5; k++) {
          var a2 = (k / 5) * Math.PI * 2;
          ctx.moveTo(0, 0);
          ctx.arc(0, 0, p.r * 0.62, a2, a2 + 0.9);
        }
        ctx.fill();
      }
      ctx.restore();
    }

    function tick() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (var i = 0; i < petals.length; i++) {
        var p = petals[i];
        p.sway += p.swaySp;
        p.x += p.vx + Math.sin(p.sway) * 0.42;
        p.y += p.vy;
        p.rot += p.vrot;
        if (p.y - p.r > innerHeight || p.x < -60 || p.x > innerWidth + 60) {
          petals[i] = spawn(false);
          continue;
        }
        drawPetal(p);
      }
      rafId = requestAnimationFrame(tick);
    }
    tick();
  }

  function stopPetals() {
    if (rafId) cancelAnimationFrame(rafId);
    rafId = 0;
    if (petalCanvas && petalCanvas.parentNode) petalCanvas.parentNode.removeChild(petalCanvas);
    petalCanvas = null;
    petals = [];
  }

  // ── Apply / revert ──
  function apply() {
    var html = document.documentElement;
    html.classList.toggle("sak-wide", !!settings.wide);
    html.classList.toggle("sak-glass", !!settings.glass);
    html.classList.toggle("sak-fonts", !!settings.fonts);
    html.classList.toggle("sak-glow", !!settings.glow);
    html.classList.toggle("sak-rounded", !!settings.rounded);

    if (settings.on) {
      if (!styleEl) {
        styleEl = document.createElement("style");
        styleEl.id = "sakura-cc-theme";
        document.head.appendChild(styleEl);
      }
      styleEl.textContent = css();
      if (settings.fonts) ensureFonts();
      if (settings.petals) initPetals(); else stopPetals();
      dimCanvases();
      watchCanvases();
    } else {
      if (styleEl && styleEl.parentNode) styleEl.parentNode.removeChild(styleEl);
      styleEl = null;
      stopPetals();
      unwatchCanvases();
    }
    buildPanel();
    save();
  }

  // The game applies `transition: opacity 1s` to these two canvases, and a
  // running transition beats inline styles, so opacity is never honoured on
  // them. filter is not transitioned, so that is what dims them.
  function dimCanvases() {
    var fixed = [
      ["backgroundCanvas", "saturate(.3) brightness(.42) blur(1.5px)"],
      ["backgroundLeftCanvas", "saturate(.35) brightness(.5)"]
    ];
    for (var i = 0; i < fixed.length; i++) {
      var el = document.getElementById(fixed[i][0]);
      if (!el) continue;
      el.style.setProperty("filter", fixed[i][1], "important");
    }
    var rows = document.querySelectorAll("canvas.rowCanvas");
    for (var j = 0; j < rows.length; j++) {
      rows[j].style.setProperty("opacity", "0.62", "important");
      rows[j].style.setProperty("filter", "saturate(.65) brightness(1.06)", "important");
    }
  }

  var canvasObserver = null;
  function watchCanvases() {
    if (canvasObserver) return;
    canvasObserver = new MutationObserver(function (muts) {
      for (var i = 0; i < muts.length; i++) {
        var added = muts[i].addedNodes;
        for (var j = 0; j < added.length; j++) {
          var n = added[j];
          if (n.tagName === "CANVAS" || (n.querySelector && n.querySelector("canvas"))) {
            dimCanvases();
            return;
          }
        }
      }
    });
    canvasObserver.observe(document.body, { childList: true, subtree: true });
  }

  function unwatchCanvases() {
    if (canvasObserver) { canvasObserver.disconnect(); canvasObserver = null; }
  }

  // ── Sakura panel UI ──
  var panel = null;
  var ROWS = [
    { id: "on", label: "Sakura theme", hint: "Master switch" },
    { id: "wide", label: "Wide layout", hint: "2-3 column store" },
    { id: "glass", label: "Frosted panels", hint: "backdrop blur" },
    { id: "fonts", label: "Zen Maru / Outfit", hint: "typography" },
    { id: "glow", label: "Cookie glow", hint: "drop shadows" },
    { id: "rounded", label: "Soft geometry", hint: "rounded cards" },
    { id: "petals", label: "Falling petals", hint: "sakura canvas" }
  ];

  function row(r) {
    var el = document.createElement("label");
    el.style.cssText =
      "display:flex;align-items:center;justify-content:space-between;gap:12px;" +
      "padding:9px 11px;border-radius:11px;margin:2px 0;cursor:pointer;" +
      "transition:background .16s ease;font-size:13px;";
    el.onmouseenter = function () { el.style.background = "rgba(255,143,177,.14)"; };
    el.onmouseleave = function () { el.style.background = "transparent"; };

    var left = document.createElement("div");
    left.innerHTML =
      '<div style="font-weight:600;color:#f7eef5">' + r.label + "</div>" +
      '<div style="font-size:11px;color:#bda9c9">' + r.hint + "</div>";
    el.appendChild(left);

    var sw = document.createElement("input");
    sw.type = "checkbox";
    sw.checked = !!settings[r.id];
    sw.style.cssText =
      "appearance:none;width:42px;height:24px;border-radius:99px;position:relative;cursor:pointer;" +
      "background:" + (settings[r.id] ? "linear-gradient(90deg,#ff8fb1,#d94f79)" : "rgba(255,255,255,.14)") + ";" +
      "border:1px solid rgba(255,255,255,.14);transition:background .18s ease;flex:0 0 auto;";
    var knob = document.createElement("span");
    knob.style.cssText =
      "position:absolute;top:2px;left:" + (settings[r.id] ? "20px" : "2px") + ";width:18px;height:18px;" +
      "border-radius:50%;background:#fff;box-shadow:0 2px 6px rgba(0,0,0,.45);transition:left .18s cubic-bezier(.34,1.56,.64,1);";
    sw.appendChild(knob);
    sw.onclick = function (e) {
      e.preventDefault();
      settings[r.id] = !settings[r.id];
      sw.checked = settings[r.id];
      sw.style.background = settings[r.id]
        ? "linear-gradient(90deg,#ff8fb1,#d94f79)"
        : "rgba(255,255,255,.14)";
      knob.style.left = settings[r.id] ? "20px" : "2px";
      apply();
    };
    el.appendChild(sw);
    return el;
  }

  function buildPanel() {
    if (!panel) {
      panel = document.createElement("div");
      panel.id = "sakura-cc-panel";
      panel.style.cssText =
        "position:fixed;top:16px;right:16px;width:284px;z-index:2147483000;" +
        "font-family:'Outfit',system-ui,sans-serif;color:#f7eef5;display:none;";
      document.body.appendChild(panel);

      var btn = document.createElement("button");
      btn.id = "sakura-cc-btn";
      btn.textContent = "❀";
      btn.title = "Sakura theme";
      btn.style.cssText =
        "position:fixed;top:16px;right:16px;width:42px;height:42px;border-radius:14px;z-index:2147483001;" +
        "background:linear-gradient(160deg,#ff8fb1,#d94f79);color:#2a0f1b;border:none;cursor:pointer;" +
        "font-size:19px;box-shadow:0 10px 26px -10px rgba(217,79,121,.95);transition:transform .18s ease;";
      btn.onmouseenter = function () { btn.style.transform = "translateY(-2px) scale(1.04)"; };
      btn.onmouseleave = function () { btn.style.transform = "none"; };
      btn.onclick = function () {
        var open = panel.style.display === "none";
        panel.style.display = open ? "block" : "none";
        if (open) btn.style.transform = "translateY(26px) scale(.9)";
        else btn.style.transform = "none";
      };
      document.body.appendChild(btn);
    }

    var head =
      '<div style="padding:16px 16px 10px;border-bottom:1px solid rgba(255,255,255,.1)">' +
      '<div style="font-family:\'Zen Maru Gothic\',sans-serif;font-size:16px;font-weight:700;letter-spacing:.04em">' +
      "Sakura ❀ Cookie Clicker</div>" +
      '<div style="font-size:11px;color:#bda9c9;margin-top:2px">Visual recode only — no cheats, no save edits</div>' +
      "</div>";

    var body = "";
    for (var i = 0; i < ROWS.length; i++) body += "";
    panel.innerHTML = head + '<div id="sk-cc-rows" style="padding:10px"></div>';

    var host = panel.querySelector("#sk-cc-rows");
    for (var j = 0; j < ROWS.length; j++) host.appendChild(row(ROWS[j]));

    // density slider, only meaningful when petals are on
    var wrap = document.createElement("div");
    wrap.style.cssText = "padding:10px 11px 14px;font-size:12px;color:#bda9c9;";
    wrap.innerHTML =
      '<div style="display:flex;justify-content:space-between;margin-bottom:7px">' +
      "<span>Petal density</span><span id='sk-cc-dv'>" + settings.density + "</span></div>";
    var slider = document.createElement("input");
    slider.type = "range";
    slider.min = "0"; slider.max = "140"; slider.step = "5";
    slider.value = String(settings.density);
    slider.style.cssText = "width:100%;accent-color:#ff8fb1;";
    slider.oninput = function () {
      settings.density = Number(slider.value);
      panel.querySelector("#sk-cc-dv").textContent = settings.density;
      petals = [];
      if (settings.petals) {
        for (var k = 0; k < settings.density; k++) petals.push(makePetal());
      }
      save();
    };
    wrap.appendChild(slider);
    panel.appendChild(wrap);
  }

  // Shared spawn used by both the initial canvas fill and the density slider.
  var COLORS = ["#ffd9e6", "#ffc2d6", "#ffb0cd", "#ffe9f1", "#e9c6ff"];
  function makePetal(initial) {
    return {
      x: Math.random() * innerWidth,
      y: initial ? Math.random() * innerHeight : -30,
      r: 3 + Math.random() * 6,
      vy: 0.22 + Math.random() * 0.55,
      vx: (Math.random() - 0.5) * 0.32,
      sway: Math.random() * Math.PI * 2,
      swaySp: 0.008 + Math.random() * 0.014,
      rot: Math.random() * Math.PI * 2,
      vrot: (Math.random() - 0.5) * 0.024,
      a: 0.35 + Math.random() * 0.5,
      c: COLORS[(Math.random() * COLORS.length) | 0],
      petal: Math.random() < 0.34
    };
  }

  // ── Boot: wait for the game's own DOM before styling ──
  function ready(fn) {
    if (document.getElementById("wrapper")) return fn();
    var tries = 0;
    var iv = setInterval(function () {
      if (document.getElementById("wrapper") || ++tries > 200) {
        clearInterval(iv);
        fn();
      }
    }, 50);
  }

  function start() {
    ready(function () {
      apply();
      console.log("%c[sakura] Cookie Clicker visual recode applied",
        "color:#ff8fb1;font-weight:700");
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start, { once: true });
  } else {
    start();
  }
})();