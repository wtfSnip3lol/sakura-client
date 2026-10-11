/* Sakura Client — 2v2.io ESP payload (unobfuscated source).
 * Built with `npm run build` into dist/sakura.2v2.js (obfuscated).
 * Loaded at runtime by dist/sakura.loader.user.js on 2v2.io only.
 *
 * BASIC ESP: draws player boxes on canvas games. No memory reading, no UWMK.
 * Extend with game-specific logic (Unity/Phaser/Three.js detection) as needed.
 */

(() => {
  "use strict";
  if (!/(^|\.)2v2\.io$/.test(location.hostname || "")) return;

  var ACCENT = "#ff6b9d";
  var ACCENT_HI = "#ffb3c6";

  // ── Settings ──
  var DEFAULTS = { boxes: true, names: true, health: true, lines: true, scale: 1 };
  var settings = { ...DEFAULTS };
  try {
    Object.assign(settings, JSON.parse(localStorage.getItem("sakura.2v2.v1") || "{}"));
  } catch (_) {}
  function save() {
    try { localStorage.setItem("sakura.2v2.v1", JSON.stringify(settings)); } catch (_) {}
  }

  // ── Overlay canvas ──
  var overlay = document.createElement("canvas");
  overlay.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;z-index:2147483646;pointer-events:none";
  var ctx = overlay.getContext("2d");
  document.body.appendChild(overlay);

  function syncLayers() {
    const full = document.fullscreenElement;
    const parent = full && full.tagName !== "CANVAS" ? full : document.body || document.documentElement;
    if (overlay.parentNode !== parent) parent.appendChild(overlay);
  }

  var size = { w: 0, h: 0, dpr: 0 };
  function sizeOverlay() {
    const dpr = window.devicePixelRatio || 1;
    const w = window.innerWidth, h = window.innerHeight;
    if (w === size.w && h === size.h && dpr === size.dpr) return;
    size.w = w; size.h = h; size.dpr = dpr;
    overlay.width = Math.round(w * dpr);
    overlay.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  // ── Game canvas detection (extend with 2v2.io-specific logic) ──
  var gameCanvas = null;
  function findGameCanvas() {
    // 2v2.io - try to find the game canvas
    const canvases = document.querySelectorAll("canvas");
    for (const c of canvases) {
      const r = c.getBoundingClientRect();
      if (r.width > window.innerWidth * 0.8 && r.height > window.innerHeight * 0.8) {
        return c;
      }
    }
    // Fallback: largest canvas
    let largest = null, maxArea = 0;
    for (const c of canvases) {
      const area = c.width * c.height;
      if (area > maxArea) { maxArea = area; largest = c; }
    }
    return largest;
  }

  // ── ESP data (to be populated by game-specific logic) ──
  // Format: { x, y, w, h, name, health, team, screenX, screenY, screenW, screenH }
  var entities = [];

  // ── World-to-screen projection (identity for canvas games) ──
  function project(worldX, worldY, worldW, worldH) {
    // Override this with game-specific projection when the engine is known
    // For canvas games, world coords are often already screen coords
    return { x: worldX, y: worldY, w: worldW, h: worldH };
  }

  // ── Entity scanner placeholder - override for 2v2.io ──
  function scanEntities() {
    entities = [];
    // TODO: Implement 2v2.io-specific entity scanning
    // Examples:
    // - Phaser: scene.children.list with bodies
    // - Three.js: scene.traverse with meshes
    // - Unity: hook into game objects via UWMK
    // - Custom: game.Players or similar global
  }

  // ── Draw ESP ──
  function drawESP() {
    if (!settings.boxes) return;

    for (const e of entities) {
      const s = project(e.x, e.y, e.w, e.h);
      if (!s || s.w <= 0 || s.h <= 0) continue;

      const teamColor = e.team === 0 ? "rgba(79,143,106,.9)" : "rgba(255,110,116,.95)";
      ctx.strokeStyle = teamColor;
      ctx.lineWidth = 2;
      ctx.strokeRect(s.x - s.w / 2, s.y - s.h / 2, s.w, s.h);

      if (settings.health && typeof e.health === "number") {
        const barW = s.w * Math.max(0, Math.min(1, e.health / 100));
        ctx.fillStyle = "rgba(255,110,116,.9)";
        ctx.fillRect(s.x - s.w / 2, s.y - s.h / 2 - 6, barW, 4);
        ctx.strokeStyle = "rgba(0,0,0,.5)";
        ctx.lineWidth = 1;
        ctx.strokeRect(s.x - s.w / 2, s.y - s.h / 2 - 6, s.w, 4);
      }

      if (settings.names && e.name) {
        ctx.fillStyle = "rgba(255,235,240,.9)";
        ctx.font = "11px ui-sans-serif,system-ui,sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(e.name, s.x, s.y - s.h / 2 - 10);
      }

      if (settings.lines) {
        ctx.beginPath();
        ctx.moveTo(size.w / 2, size.h);
        ctx.lineTo(s.x, s.y - s.h / 2);
        ctx.strokeStyle = teamColor;
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    }
  }

  // ── UI (minimal panel) ──
  var host = document.createElement("div");
  host.id = "sakura-ui-2v2";
  host.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
  var shadow = host.attachShadow({ mode: "open" });
  document.body.appendChild(host);

  var menuOpen = false;
  var uiState = {};
  try { uiState = JSON.parse(localStorage.getItem("sakura.ui.2v2.v1") || "{}"); } catch (_) {}

  function ico(path) {
    const s = document.createElement("span");
    s.setAttribute("aria-hidden", "true");
    s.innerHTML = `<svg viewBox="0 0 24 24">${path}</svg>`;
    return s;
  }

  function toggleSwitch(on, onChange) {
    const sw = document.createElement("button");
    sw.type = "button";
    sw.className = "sk-switch";
    sw.setAttribute("role", "switch");
    sw.setAttribute("aria-checked", String(!!on));
    sw.onclick = (e) => {
      e.stopPropagation();
      const v = sw.getAttribute("aria-checked") !== "true";
      sw.setAttribute("aria-checked", String(v));
      onChange(v);
    };
    return sw;
  }

  function rangeField(value, min, max, step, onChange) {
    const wrap = document.createElement("div");
    wrap.className = "sk-range";
    const input = document.createElement("input");
    input.type = "range"; input.className = "sk-slider";
    input.min = min; input.max = max; input.step = step; input.value = value;
    const val = document.createElement("span");
    val.className = "sk-val";
    val.textContent = Number(value).toFixed(2).replace(/\.?0+$/, "");
    input.oninput = () => {
      val.textContent = Number(input.value).toFixed(2).replace(/\.?0+$/, "");
      wrap.style.setProperty("--p", ((input.value - min) / (max - min) * 100) + "%");
      onChange(Number(input.value));
    };
    wrap.style.setProperty("--p", ((value - min) / (max - min) * 100) + "%");
    wrap.append(input, val);
    return wrap;
  }

  function row(label, ctl) {
    const r = document.createElement("div");
    r.className = "sk-ctl";
    const lab = document.createElement("span");
    lab.className = "sk-label";
    lab.textContent = label;
    r.append(lab, ctl);
    return r;
  }

  function moduleCard(title, isOn, onToggle, bodyRows) {
    const card = document.createElement("div");
    card.className = "sk-card" + (isOn ? " on" : "");
    const head = document.createElement("div");
    head.className = "sk-card-head";
    const t = document.createElement("div");
    t.className = "sk-card-title";
    const strong = document.createElement("strong");
    strong.textContent = title;
    t.appendChild(strong);
    if (onToggle) {
      const sw = toggleSwitch(isOn, (v) => {
        card.classList.toggle("on", v);
        onToggle(v);
      });
      head.append(t, sw);
    } else {
      head.appendChild(t);
    }
    card.appendChild(head);
    if (bodyRows && bodyRows.length) {
      const body = document.createElement("div");
      body.className = "sk-mbody";
      for (const r of bodyRows) body.appendChild(r);
      card.appendChild(body);
    }
    return card;
  }

  function buildPanel() {
    const panel = document.createElement("div");
    panel.className = "mn-panel";

    const side = document.createElement("nav");
    side.className = "mn-side";
    const logoWrap = document.createElement("div");
    logoWrap.className = "mn-logo";
    logoWrap.innerHTML = `<svg viewBox="0 0 24 24"><defs><linearGradient id="sk-grad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe0ec"/><stop offset="0.45" stop-color="#ffb3c6"/><stop offset="1" stop-color="#ff6b9d"/></linearGradient></defs><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="url(#sk-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3v4M12 3c-1.5 0-2.5 1-2.5 2.5M12 3c1.5 0 2.5 1 2.5 2.5" fill="none" stroke="url(#sk-grad)" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>`;
    side.appendChild(logoWrap);

    const main = document.createElement("div");
    main.className = "mn-main";
    const top = document.createElement("header");
    top.className = "mn-top";
    const heading = document.createElement("h2");
    heading.className = "mn-h";
    heading.textContent = "2v2.io ESP";
    const close = document.createElement("button");
    close.type = "button";
    close.className = "mn-close";
    close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    close.onclick = () => setMenuOpen(false);
    top.append(heading, close);

    // Drag
    let offset = null;
    top.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, input")) return;
      const r = panel.getBoundingClientRect();
      offset = [e.clientX - r.left, e.clientY - r.top];
      top.setPointerCapture(e.pointerId);
      panel.classList.add("sk-dragging");
    });
    top.addEventListener("pointermove", (e) => {
      if (!offset) return;
      panel.style.left = Math.min(Math.max(0, e.clientX - offset[0]), window.innerWidth - 200) + "px";
      panel.style.top = Math.min(Math.max(0, e.clientY - offset[1]), window.innerHeight - 100) + "px";
      panel.style.right = "auto"; panel.style.bottom = "auto";
    });
    const endDrag = () => {
      if (!offset) return;
      offset = null;
      panel.classList.remove("sk-dragging");
      const r = panel.getBoundingClientRect();
      uiState.x = r.left; uiState.y = r.top;
      saveUi();
    };
    top.addEventListener("pointerup", endDrag);
    top.addEventListener("pointercancel", endDrag);

    const cols = document.createElement("div");
    cols.className = "mn-cols";
    main.append(top, cols);
    panel.append(side, main);

    // Cards
    function cards() {
      return [
        moduleCard("ESP Boxes", settings.boxes, (v) => { settings.boxes = v; save(); }, [
          row("Names", toggleSwitch(settings.names, (v) => { settings.names = v; save(); })),
          row("Health", toggleSwitch(settings.health, (v) => { settings.health = v; save(); })),
          row("Lines", toggleSwitch(settings.lines, (v) => { settings.lines = v; save(); })),
          row("Scale", rangeField(settings.scale, 0.5, 2, 0.05, (v) => { settings.scale = v; save(); })),
        ]),
      ];
    }
    cols.replaceChildren(...cards());

    // Restore position
    if (Number.isFinite(uiState.x)) {
      panel.style.left = uiState.x + "px";
      panel.style.top = uiState.y + "px";
      panel.style.right = "auto"; panel.style.bottom = "auto";
    }

    return panel;
  }

  function saveUi() {
    try { localStorage.setItem("sakura.ui.2v2.v1", JSON.stringify(uiState)); } catch (_) {}
  }

  var panelEl = null;
  function setMenuOpen(v) {
    menuOpen = v;
    if (!panelEl) {
      const style = document.createElement("style");
      style.textContent = CSS;
      shadow.appendChild(style);
      panelEl = buildPanel();
      shadow.appendChild(panelEl);
      requestAnimationFrame(() => panelEl.classList.add("shown"));
    }
    panelEl.classList.toggle("shown", v);
  }
  function toggleMenu() { setMenuOpen(!menuOpen); }

  // Insert key
  window.addEventListener("keydown", (e) => {
    if (e.code === "Insert") { e.preventDefault(); toggleMenu(); }
  }, true);

  // Floating button
  var btnEl = document.createElement("div");
  btnEl.style.cssText = "position:fixed;top:12px;right:12px;z-index:2147483646;cursor:pointer;width:26px;height:26px;opacity:0.5;transition:opacity 0.2s;pointer-events:auto;filter:drop-shadow(0 0 4px rgba(255,107,157,0.7))";
  btnEl.innerHTML = `<svg viewBox="0 0 24 24"><defs><linearGradient id="sk-grad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffe0ec"/><stop offset="0.45" stop-color="#ffb3c6"/><stop offset="1" stop-color="#ff6b9d"/></linearGradient></defs><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="url(#sk-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 3v4M12 3c-1.5 0-2.5 1-2.5 2.5M12 3c1.5 0 2.5 1 2.5 2.5" fill="none" stroke="url(#sk-grad)" stroke-width="1.5" stroke-linecap="round"/><circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>`;
  btnEl.title = "Sakura Client - 2v2.io";
  btnEl.onmouseenter = () => btnEl.style.opacity = "1";
  btnEl.onmouseleave = () => btnEl.style.opacity = "0.5";
  btnEl.onclick = (e) => { e.stopPropagation(); toggleMenu(); };
  document.body.appendChild(btnEl);

  var CSS = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; font-family: "Inter", "Segoe UI", system-ui, sans-serif; }
  .mn-panel { position: absolute; right: 24px; bottom: 24px; width: min(320px, calc(100vw - 48px)); max-height: min(480px, calc(100vh - 48px));
    display: flex; gap: 10px; padding: 10px; border-radius: 22px; pointer-events: auto;
    background: rgba(24,17,21,.78); backdrop-filter: blur(22px) saturate(150%); -webkit-backdrop-filter: blur(22px) saturate(150%);
    box-shadow: 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.05), 0 30px 80px rgba(0,0,0,.55);
    opacity: 0; transform: translateY(18px); pointer-events: none; transition: opacity .35s ease, transform .45s cubic-bezier(.22,1,.36,1);
    color: #f6eef2; font-size: 13px; }
  .mn-panel.shown { opacity: 1; transform: none; pointer-events: auto; }
  .mn-panel.sk-dragging { transition: none; }
  .mn-side { display: flex; flex-direction: column; align-items: center; gap: 4px; width: 62px; flex: none; padding: 12px 0; border-radius: 16px;
    background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
  .mn-logo { display: grid; place-items: center; width: 32px; height: 32px; }
  .mn-logo svg { width: 25px; height: 25px; overflow: visible; filter: drop-shadow(0 0 4px rgba(255,107,157,.8)) drop-shadow(0 0 10px rgba(255,107,157,.4)); }
  .mn-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .mn-top { display: flex; align-items: center; gap: 12px; padding: 6px 6px 12px; cursor: grab; user-select: none; touch-action: none; }
  .mn-h { font-size: 17px; font-weight: 650; letter-spacing: -.01em; }
  .mn-close { display: grid; place-items: center; width: 28px; height: 28px; border: 0; border-radius: 8px; background: transparent; color: inherit; opacity: .45; cursor: pointer; transition: opacity .2s, background .2s; }
  .mn-close:hover { opacity: 1; background: rgba(255,255,255,.05); }
  .mn-close svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  .mn-cols { flex: 1; min-height: 0; overflow-y: auto; display: grid; grid-template-columns: 1fr; gap: 10px; padding: 0 4px 6px 0; }
  .sk-card { border-radius: 12px; background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); transition: box-shadow .25s, background .25s; animation: mn-in .35s ease both; }
  .sk-card.on { background: rgba(255,255,255,.04); box-shadow: inset 0 0 0 1px rgba(255,107,157,.28), 0 0 0 1px rgba(255,107,157,.06), 0 8px 30px rgba(255,107,157,.06); }
  .sk-card-head { display: flex; align-items: center; gap: 8px; padding: 11px 12px; }
  .sk-card-title { flex: 1; min-width: 0; }
  .sk-card-title strong { font-size: 13px; font-weight: 600; color: rgba(246,238,242,.45); transition: color .2s; }
  .sk-card.on .sk-card-title strong { color: #fff0f5; }
  .sk-mbody { padding: 0 12px 10px; }
  .sk-ctl { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 11.5px; }
  .sk-label { flex: 1; color: rgba(246,238,242,.75); }
  .sk-switch { position: relative; width: 26px; height: 14px; border: 0; border-radius: 99px; background: rgba(255,255,255,.07); cursor: pointer; flex: none; transition: background .2s; }
  .sk-switch::after { content: ""; position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.25); transition: left .2s, background .2s, box-shadow .2s; }
  .sk-switch[aria-checked="true"] { background: rgba(255,107,157,.25); }
  .sk-switch[aria-checked="true"]::after { left: 15px; background: #ff6b9d; box-shadow: 0 0 6px #ff6b9d; }
  .sk-range { display: flex; align-items: center; gap: 8px; }
  .sk-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 8px; background: transparent; }
  .sk-slider::-webkit-slider-runnable-track { height: 2px; border-radius: 2px; background: linear-gradient(#ff6b9d, #ff6b9d) 0 0 / var(--p, 50%) 100% no-repeat, rgba(255,255,255,.08); }
  .sk-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 6px; height: 6px; margin-top: -2px; border-radius: 50%; background: #ff6b9d; box-shadow: 0 0 0 2px rgba(255,107,157,.4); }
  .sk-slider::-moz-range-track { height: 2px; background: rgba(255,255,255,.08); }
  .sk-slider::-moz-range-progress { height: 2px; background: #ff6b9d; }
  .sk-slider::-moz-range-thumb { width: 6px; height: 6px; border: 0; border-radius: 50%; background: #ff6b9d; }
  .sk-val { font-size: 11px; font-weight: 600; min-width: 28px; text-align: right; color: rgba(246,238,242,.8); }
  @keyframes mn-in { from { opacity: 0; transform: translateY(6px); } }
  `;

  // ── Main loop ──
  function loop() {
    requestAnimationFrame(loop);
    sizeOverlay();
    syncLayers();
    ctx.clearRect(0, 0, size.w, size.h);
    scanEntities();
    drawESP();
  }

  console.log("Sakura Client loaded (2v2.io ESP)");

  // Auto-detect game canvas
  setTimeout(() => {
    gameCanvas = findGameCanvas();
    if (gameCanvas) console.log("[sakura.2v2] Found game canvas:", gameCanvas);
  }, 1000);

  requestAnimationFrame(loop);
})();