/* Sakura Client — ASTRASTRIKE payload (unobfuscated source).
 * Built with `npm run build` into dist/sakura.astra.js (obfuscated).
 * Loaded at runtime by dist/sakura.loader.user.js on astrastrike.fun only.
 *
 * CLEAN MODE: keyboard-only keystrokes overlay (QWER / ASDFC / Shift·Space·Ctrl)
 * with the same minimal menu as the Clutcher client (HUD tab only).
 * Never touches window.game, scene, renderer, Math.random or JSON — overlay draws
 * from local key listeners only. No-ops on any other host.
 */

(() => {
  "use strict";
  if (!/(^|\.)astrastrike\.fun$/.test(location.hostname || "")) return;

  var ACCENT = "#ff6b9d";
  var ACCENT_HI = "#ffb3c6";

  // ── Settings ──
  var DEFAULTS = { keystrokes: true, ksPos: "bl", ksScale: 1 };
  var settings = { ...DEFAULTS };
  try {
    Object.assign(settings, JSON.parse(localStorage.getItem("sakura.astra.v1") || "{}"));
  } catch (_) {}
  function save() {
    try { localStorage.setItem("sakura.astra.v1", JSON.stringify(settings)); } catch (_) {}
  }

  // ── Input (keyboard only — clean mode has no mouse/CPS) ──
  var held = new Set();
  var attached = false;
  function onKeyDown(e) { held.add(e.code); }
  function onKeyUp(e) { held.delete(e.code); }
  function onBlur() { held.clear(); }
  function attachInput() {
    if (attached) return;
    attached = true;
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("keyup", onKeyUp, true);
    window.addEventListener("blur", onBlur);
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

  // ── Keystrokes (same look as the launcher's overlay window) ──
  function paintKeys(s, draw) {
    const key = (label, code, x, y, w, h) => {
      const down = held.has(code)
        || (code === "ShiftLeft" && held.has("ShiftRight"))
        || (code === "ControlLeft" && held.has("ControlRight"));
      ctx.save();
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, w, h, 7 * s);
      else ctx.rect(x, y, w, h);
      ctx.fillStyle = down ? "rgba(255,107,157,0.85)" : "rgba(22,8,16,0.7)";
      ctx.fill();
      ctx.lineWidth = 1;
      ctx.strokeStyle = down ? ACCENT_HI : "rgba(255,107,157,0.35)";
      ctx.stroke();
      if (down) {
        ctx.shadowColor = ACCENT;
        ctx.shadowBlur = 14;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
      ctx.fillStyle = down ? "#fff" : "rgba(255,235,240,0.8)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = `700 ${Math.round(12 * s)}px ui-sans-serif,system-ui,sans-serif`;
      ctx.fillText(label, x + w / 2, y + h / 2);
      ctx.restore();
    };
    draw(key);
  }

  function drawKeystrokes(rect) {
    const s = settings.ksScale, k = 34 * s, gap = 4 * s;
    const totalW = k * 4 + gap * 3;
    const pos = settings.ksPos;
    const x0 = pos === "br" ? rect.right - 16 - totalW : rect.left + 16;
    const rowsH = (k + gap) * 3 - gap;
    const y0 = pos === "ml" ? rect.top + rect.height / 2 - rowsH / 2 : rect.bottom - rowsH - (pos === "bl" ? 96 : 150);

    paintKeys(s, (key) => {
      const codes0 = ["KeyQ", "KeyW", "KeyE", "KeyR"];
      const labels0 = ["Q", "W", "E", "R"];
      for (let i = 0; i < 4; i++) key(labels0[i], codes0[i], x0 + i * (k + gap), y0, k, k);
      const codes1 = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyC"];
      const labels1 = ["A", "S", "D", "F", "C"];
      const w1 = (totalW - gap * 4) / 5;
      for (let i = 0; i < 5; i++) key(labels1[i], codes1[i], x0 + i * (w1 + gap), y0 + k + gap, w1, k);
      key("SHIFT", "ShiftLeft", x0, y0 + (k + gap) * 2, k * 1.7, k);
      key("SPACE", "Space", x0 + k * 1.7 + gap, y0 + (k + gap) * 2, totalW - k * 1.7 * 2 - gap * 2, k);
      key("CTRL", "ControlLeft", x0 + totalW - k * 1.7, y0 + (k + gap) * 2, k * 1.7, k);
    });
  }

  function loop() {
    requestAnimationFrame(loop);
    sizeOverlay();
    syncLayers();
    ctx.clearRect(0, 0, size.w, size.h);
    if (!settings.keystrokes) return;
    drawKeystrokes({ left: 0, top: 0, right: size.w, bottom: size.h, width: size.w, height: size.h });
  }

  // ── Sakura logo ──
  function sakuraLogoSvg(cls = "") {
    return `<svg class="${cls}" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="sk-grad" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ffe0ec"/><stop offset="0.45" stop-color="#ffb3c6"/><stop offset="1" stop-color="#ff6b9d"/>
        </linearGradient>
      </defs>
      <path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="url(#sk-grad)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M12 3v4M12 3c-1.5 0-2.5 1-2.5 2.5M12 3c1.5 0 2.5 1 2.5 2.5" fill="none" stroke="url(#sk-grad)" stroke-width="1.5" stroke-linecap="round"/>
      <circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/>
      <path d="M12 11.5c0 2-1 3.5-1 5" fill="none" stroke="url(#sk-grad)" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`;
  }

  // ── UI (minimal-style panel, sakura accent — same menu as the Clutcher client, HUD tab only) ──
  var host = document.createElement("div");
  host.id = "sakura-ui";
  host.style.cssText = "position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
  var shadow = host.attachShadow({ mode: "open" });
  document.body.appendChild(host);

  // ── Key shield: the game captures keys at the window level and preventDefaults them,
  // which kills Backspace/Delete inside our inputs. Stop our UI's keys from reaching the
  // game, and if the game already prevented the default, apply the edit by hand.
  var isEditable = (el) => !!el && (el.tagName === "TEXTAREA" || el.tagName === "INPUT" && /^(text|number|search)$/.test(el.type));
  function editByHand(el, e) {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    const k = e.key, start = el.selectionStart ?? el.value.length, end = el.selectionEnd ?? start;
    let v = el.value, pos = start;
    if (k === "Backspace") {
      if (start !== end) v = v.slice(0, start) + v.slice(end);
      else if (start > 0) {
        v = v.slice(0, start - 1) + v.slice(end);
        pos = start - 1;
      } else return;
    } else if (k === "Delete") {
      if (start !== end) v = v.slice(0, start) + v.slice(end);
      else if (start < v.length) v = v.slice(0, start) + v.slice(start + 1);
      else return;
    } else if (k.length === 1) {
      v = v.slice(0, start) + k + v.slice(end);
      pos = start + 1;
      if (el.maxLength > 0 && v.length > el.maxLength) return;
    } else {
      const moves = { ArrowLeft: Math.max(0, start - 1), ArrowRight: Math.min(v.length, end + 1), Home: 0, End: v.length };
      if (k in moves) el.setSelectionRange?.(moves[k], moves[k]);
      return;
    }
    el.value = v;
    el.setSelectionRange?.(pos, pos);
    el.dispatchEvent(new Event("input", { bubbles: true }));
  }
  function shieldKeys(e) {
    const target = e.composedPath?.()[0];
    if (!isEditable(target)) return;
    e.stopPropagation();
    // The event no longer reaches the input (we stopped it at the host), so apply the edit ourselves.
    if (e.type === "keydown") editByHand(target, e);
  }
  for (const type of ["keydown", "keyup", "keypress"]) host.addEventListener(type, shieldKeys, true);

  var menuOpen = false;
  var uiState = {};
  try { uiState = JSON.parse(localStorage.getItem("sakura.ui.v1") || "{}"); } catch (_) {}

  var ICONS = {
    hud: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 9h6M7 13h10M7 16h4"/>'
  };
  // Clean mode: HUD tab only — no World FX, no Dev hooks.
  var CATEGORIES = [
    { id: "hud", label: "HUD", icon: ICONS.hud }
  ];

  function ico(path, cls = "") {
    const s = document.createElement("span");
    s.className = `sk-ico ${cls}`.trim();
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

  function selectField(value, options, onChange) {
    const sel = document.createElement("select");
    sel.className = "sk-field";
    for (const [v, l] of options) {
      const o = document.createElement("option");
      o.value = v; o.textContent = l;
      sel.appendChild(o);
    }
    sel.value = value;
    sel.onchange = () => onChange(sel.value);
    return sel;
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

  function row(label, hint, ctl) {
    const r = document.createElement("div");
    r.className = "sk-ctl";
    const lab = document.createElement("span");
    lab.className = "sk-label";
    lab.textContent = label;
    if (hint) {
      const sm = document.createElement("small");
      sm.className = "sk-hint";
      sm.textContent = hint;
      lab.appendChild(sm);
    }
    r.append(lab, ctl);
    return r;
  }

  function moduleCard(title, desc, isOn, onToggle, bodyRows) {
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
      const d = document.createElement("div");
      d.className = "sk-mdesc";
      d.textContent = desc;
      body.appendChild(d);
      for (const r of bodyRows) body.appendChild(r);
      card.appendChild(body);
    }
    return card;
  }

  function buildPanel() {
    const panel = document.createElement("div");
    panel.className = "mn-panel";

    // Sidebar
    const side = document.createElement("nav");
    side.className = "mn-side";
    const logoWrap = document.createElement("div");
    logoWrap.className = "mn-logo";
    logoWrap.innerHTML = sakuraLogoSvg("mn-logo-svg");
    side.appendChild(logoWrap);
    const sep = document.createElement("i");
    sep.className = "mn-sep";
    side.appendChild(sep);

    // Main
    const main = document.createElement("div");
    main.className = "mn-main";
    const top = document.createElement("header");
    top.className = "mn-top";
    const titles = document.createElement("div");
    titles.className = "mn-titles";
    const heading = document.createElement("h2");
    heading.className = "mn-h";
    const sub = document.createElement("small");
    sub.className = "mn-sub";
    titles.append(heading, sub);
    const close = document.createElement("button");
    close.type = "button";
    close.className = "mn-close";
    close.title = "Close";
    close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>';
    close.onclick = () => setMenuOpen(false);
    top.append(titles, close);
    const cols = document.createElement("div");
    cols.className = "mn-cols";
    main.append(top, cols);

    panel.append(side, main);

    // Tabs
    const buttons = new Map();
    for (const cat of CATEGORIES) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "mn-tab";
      b.title = cat.label;
      b.setAttribute("aria-label", cat.label);
      b.appendChild(ico(cat.icon));
      const sm = document.createElement("small");
      sm.textContent = cat.label;
      b.appendChild(sm);
      b.onclick = () => show(cat.id);
      buttons.set(cat.id, b);
      side.appendChild(b);
    }
    side.appendChild(Object.assign(document.createElement("i"), { className: "mn-spacer" }));
    const avatar = document.createElement("div");
    avatar.className = "mn-avatar";
    avatar.innerHTML = sakuraLogoSvg("mn-avatar-svg");
    side.appendChild(avatar);

    // Content per tab
    function show(id) {
      uiState.cat = id;
      saveUi();
      const cat = CATEGORIES.find((c) => c.id === id) || CATEGORIES[0];
      heading.textContent = cat.label;
      for (const [k, b] of buttons) b.classList.toggle("active", k === id);
      cols.replaceChildren(...cardsFor(id));
    }

    function cardsFor(id) {
      if (id === "hud") {
        return [
          moduleCard("Keystrokes", "QWER / ASDFC / Shift·Space·Ctrl overlay (clean mode — game untouched).", settings.keystrokes,
            (v) => { settings.keystrokes = v; save(); }, [
              row("Position", null, selectField(settings.ksPos, [["bl", "Bottom left"], ["br", "Bottom right"], ["ml", "Left middle"]], (v) => { settings.ksPos = v; save(); })),
              row("Size", null, rangeField(settings.ksScale, 0.6, 1.6, 0.05, (v) => { settings.ksScale = v; save(); }))
            ])
        ];
      }
      return [];
    }

    // Drag by header
    let offset = null;
    top.addEventListener("pointerdown", (e) => {
      if (e.target.closest("button, input, select")) return;
      const r = panel.getBoundingClientRect();
      offset = [e.clientX - r.left, e.clientY - r.top];
      top.setPointerCapture(e.pointerId);
      panel.classList.add("sk-dragging");
    });
    top.addEventListener("pointermove", (e) => {
      if (!offset) return;
      const x = Math.min(Math.max(0, e.clientX - offset[0]), window.innerWidth - 200);
      const y = Math.min(Math.max(0, e.clientY - offset[1]), window.innerHeight - 100);
      panel.style.left = x + "px";
      panel.style.top = y + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
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
    if (Number.isFinite(uiState.x)) {
      panel.style.left = uiState.x + "px";
      panel.style.top = uiState.y + "px";
      panel.style.right = "auto";
      panel.style.bottom = "auto";
    }

    show(uiState.cat || "hud");
    return panel;
  }

  function saveUi() {
    try { localStorage.setItem("sakura.ui.v1", JSON.stringify(uiState)); } catch (_) {}
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

  // Insert key toggles menu (may be blocked by the game)
  window.addEventListener("keydown", (e) => {
    if (e.code === "Insert") { e.preventDefault(); toggleMenu(); }
  }, true);

  // ── Floating button (always works) ──
  var btnEl = document.createElement("div");
  btnEl.style.cssText = "position:fixed;top:12px;right:12px;z-index:2147483646;cursor:pointer;width:26px;height:26px;opacity:0.5;transition:opacity 0.2s;pointer-events:auto;filter:drop-shadow(0 0 4px rgba(255,107,157,0.7))";
  btnEl.innerHTML = sakuraLogoSvg("");
  btnEl.title = "Sakura Client";
  btnEl.onmouseenter = () => btnEl.style.opacity = "1";
  btnEl.onmouseleave = () => btnEl.style.opacity = "0.5";
  btnEl.onclick = (e) => { e.stopPropagation(); toggleMenu(); };
  document.body.appendChild(btnEl);

  var CSS = `
  :host { all: initial; }
  * { box-sizing: border-box; margin: 0; font-family: "Inter", "Segoe UI", system-ui, sans-serif; }
  .mn-panel { position: absolute; right: 24px; bottom: 24px; width: min(620px, calc(100vw - 48px)); max-height: min(480px, calc(100vh - 48px));
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
  .mn-logo-svg { width: 25px; height: 25px; overflow: visible; filter: drop-shadow(0 0 4px rgba(255,107,157,.8)) drop-shadow(0 0 10px rgba(255,107,157,.4)); }
  .mn-sep { width: 22px; height: 1px; background: rgba(255,255,255,.08); margin: 4px 0 6px; }
  .mn-spacer { flex: 1; }
  .mn-tab { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 2px; width: 52px; height: 42px; border: 0; border-radius: 10px;
    background: transparent; color: rgba(246,238,242,.32); cursor: pointer; transition: color .2s, background .2s; }
  .mn-tab small { font-size: 8px; letter-spacing: .02em; line-height: 1; }
  .mn-tab:hover { color: rgba(246,238,242,.8); }
  .mn-tab.active { color: #ff6b9d; background: rgba(255,107,157,.1); }
  .mn-tab.active .sk-ico svg { filter: drop-shadow(0 0 6px rgba(255,107,157,.7)); }
  .sk-ico { display: inline-grid; place-items: center; width: 17px; height: 17px; }
  .sk-ico svg { width: 100%; height: 100%; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .mn-avatar { display: grid; place-items: center; width: 32px; height: 32px; border-radius: 50%;
    background: radial-gradient(circle at 30% 25%, #ffb3c6, #ff6b9d 60%, #d44a7a); box-shadow: 0 0 0 2px rgba(255,255,255,.08), 0 0 14px rgba(255,107,157,.4); }
  .mn-avatar-svg { width: 17px; height: 17px; overflow: visible; }
  .mn-main { flex: 1; min-width: 0; display: flex; flex-direction: column; }
  .mn-top { display: flex; align-items: center; gap: 12px; padding: 6px 6px 12px; cursor: grab; user-select: none; touch-action: none; }
  .mn-titles { flex: 1; min-width: 0; }
  .mn-h { font-size: 17px; font-weight: 650; letter-spacing: -.01em; }
  .mn-sub { font-size: 11px; opacity: .4; }
  .mn-close { display: grid; place-items: center; width: 28px; height: 28px; border: 0; border-radius: 8px; background: transparent; color: inherit; opacity: .45; cursor: pointer; transition: opacity .2s, background .2s; }
  .mn-close:hover { opacity: 1; background: rgba(255,255,255,.05); }
  .mn-close svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  .mn-cols { flex: 1; min-height: 0; overflow-y: auto; display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); align-items: start; align-content: start; gap: 10px; padding: 0 4px 6px 0; }
  .mn-cols::-webkit-scrollbar { width: 8px; }
  .mn-cols::-webkit-scrollbar-thumb { background: rgba(255,255,255,.08); border-radius: 4px; }
  .sk-card { border-radius: 12px; background: rgba(255,255,255,.025); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); transition: box-shadow .25s, background .25s; animation: mn-in .35s ease both; }
  .sk-card.on { background: rgba(255,255,255,.04); box-shadow: inset 0 0 0 1px rgba(255,107,157,.28), 0 0 0 1px rgba(255,107,157,.06), 0 8px 30px rgba(255,107,157,.06); }
  .sk-card-head { display: flex; align-items: center; gap: 8px; padding: 11px 12px; }
  .sk-card-title { flex: 1; min-width: 0; }
  .sk-card-title strong { font-size: 13px; font-weight: 600; color: rgba(246,238,242,.45); transition: color .2s; }
  .sk-card.on .sk-card-title strong { color: #fff0f5; }
  .sk-mbody { padding: 0 12px 10px; }
  .sk-mdesc { font-size: 11px; opacity: .4; margin-bottom: 6px; }
  .sk-ctl { display: flex; align-items: center; gap: 8px; padding: 4px 0; font-size: 11.5px; }
  .sk-label { flex: 1; color: rgba(246,238,242,.75); }
  .sk-hint { display: block; font-size: 10px; opacity: .4; }
  .sk-switch { position: relative; width: 26px; height: 14px; border: 0; border-radius: 99px; background: rgba(255,255,255,.07); cursor: pointer; flex: none; transition: background .2s; }
  .sk-switch::after { content: ""; position: absolute; top: 3px; left: 3px; width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,.25); transition: left .2s, background .2s, box-shadow .2s; }
  .sk-switch[aria-checked="true"] { background: rgba(255,107,157,.25); }
  .sk-switch[aria-checked="true"]::after { left: 15px; background: #ff6b9d; box-shadow: 0 0 6px #ff6b9d; }
  .sk-field { background: rgba(255,255,255,.035); border: 0; border-radius: 6px; color: #f6eef2; padding: 6px 9px; font-size: 11.5px; outline: none; box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); }
  .sk-field:focus { box-shadow: inset 0 0 0 1px rgba(255,107,157,.6); }
  .sk-field option { background: #221419; }
  .sk-range { display: flex; align-items: center; gap: 8px; }
  .sk-slider { -webkit-appearance: none; appearance: none; width: 90px; height: 8px; background: transparent; }
  .sk-slider::-webkit-slider-runnable-track { height: 2px; border-radius: 2px; background: linear-gradient(#ff6b9d, #ff6b9d) 0 0 / var(--p, 50%) 100% no-repeat, rgba(255,255,255,.08); }
  .sk-slider::-webkit-slider-thumb { -webkit-appearance: none; width: 6px; height: 6px; margin-top: -2px; border-radius: 50%; background: #ff6b9d; box-shadow: 0 0 0 2px rgba(255,107,157,.4); }
  .sk-slider::-moz-range-track { height: 2px; background: rgba(255,255,255,.08); }
  .sk-slider::-moz-range-progress { height: 2px; background: #ff6b9d; }
  .sk-slider::-moz-range-thumb { width: 6px; height: 6px; border: 0; border-radius: 50%; background: #ff6b9d; }
  .sk-val { font-size: 11px; font-weight: 600; min-width: 28px; text-align: right; color: rgba(246,238,242,.8); }
  .sk-num { width: 90px; }
  .sk-note { font-size: 11px; color: rgba(246,238,242,.5); padding: 2px 0; }
  .sk-note.err { color: #ff7a93; }
  .sk-tool { display: flex; flex-direction: column; gap: 6px; }
  .sk-btn { align-self: flex-start; border: 0; border-radius: 8px; padding: 8px 16px; background: #ff6b9d; color: #fff; font-size: 11.5px; font-weight: 700; letter-spacing: .04em; cursor: pointer; box-shadow: 0 4px 16px rgba(255,107,157,.3); transition: filter .2s; }
  .sk-btn:hover { filter: brightness(1.1); }
  @keyframes mn-in { from { opacity: 0; transform: translateY(6px); } }
  `;

  console.log("Sakura Client loaded (astrastrike-clean)");

  // ── Start ──
  attachInput();
  requestAnimationFrame(loop);
})();
