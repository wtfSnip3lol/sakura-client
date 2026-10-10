/* Sakura Client — CLUTCHER payload (unobfuscated source).
 * Built with `npm run build` into dist/sakura.clutcher.js (obfuscated).
 * Loaded at runtime by dist/sakura.loader.user.js on clutcher.io only.
 * Full client: keystrokes WASD+LMB/RMB/Space + ambience / world FX + menu.
 * No-ops on any other host (safety guard in case it is loaded elsewhere).
 */

(() => {
  "use strict";
  var HOST = location.hostname || "";
  var IS_CLUTCHER = /(^|\.)clutcher\.io$/.test(HOST);
  var IS_ASTRA = /(^|\.)astrastrike\.fun$/.test(HOST);
  // Unknown host (e.g. local test): enable full client so nothing silently breaks.
  var FULL_CLIENT = IS_CLUTCHER || (!IS_CLUTCHER && !IS_ASTRA);
  // Clutcher payload: only run on clutcher.io (the loader routes by site,
  // but stay silent anywhere else instead of touching a foreign page).
  if (!IS_CLUTCHER) return;
  var TAU = Math.PI * 2;
  var clamp = (v, lo, hi) => Math.min(hi, Math.max(lo, v));
  var safe = (fn, fallback) => {
    try {
      return fn();
    } catch (_) {
      return fallback;
    }
  };

  // ── Sakura palette ──
  var ACCENT = "#ff6b9d";
  var ACCENT_HI = "#ffb3c6";
  var ACCENT_LO = "#d44a7a";
  var ACCENT_DIM = "rgba(255,107,157,0.12)";

  // ── Settings ──
  var DEFAULTS = {
    keystrokes: true,
    ksPos: "bl",
    ksScale: 1,
    ksCps: true,
    ambience: true,
    visualPreset: "custom",
    customLighting: false,
    lightExposure: 1,
    hemiMult: 1,
    sunMult: 1,
    sunTint: false,
    sunColor: "#ffb3c6",
    customSky: false,
    skyColor: "#2a0a1a",
    fogMode: "default",
    noTextures: false,
    texColor: "#b9a6a6",
    noBloomFx: false,
    colorGrade: false,
    gradeSaturation: 1,
    gradeContrast: 1,
    gradeBrightness: 1,
    gradeHue: 0,
    gradeVignette: 0,
    gradeSepia: 0,
    gradeInvert: 0,
    gradeBlur: 0,
    gradeTint: 0,
    gradeTintColor: "#ff6b9d",
    motionBlur: false,
    mbStrength: 0.6,
    // Beta (Lunar-style UI) — unlocked from the launcher, no code
    uiStyle: "lunar",
    uiAccent: "#ff6b9d",
    uiSize: "normal",
    ksFree: false,
    ksX: 0,
    ksY: 85,
    fpsFree: false,
    fpsX: 16,
    fpsY: 16,
  };

  var VISUAL_PRESETS = {
    default: {},
    sakura: { customLighting: true, lightExposure: 1.05, hemiMult: 0.9, sunMult: 0.8, sunTint: true, sunColor: "#ffb3c6", customSky: true, skyColor: "#2a0a1a", fogMode: "sky", colorGrade: true, gradeSaturation: 1.2, gradeContrast: 1.1, gradeHue: 6, gradeVignette: 0.45 },
    midnight: { customLighting: true, lightExposure: 0.75, hemiMult: 0.35, sunMult: 0.3, sunTint: true, sunColor: "#7aa2ff", customSky: true, skyColor: "#070b1a", fogMode: "sky", colorGrade: true, gradeSaturation: 0.9, gradeContrast: 1.1, gradeVignette: 0.45 },
    sunset: { customLighting: true, lightExposure: 1.05, hemiMult: 0.8, sunMult: 1.1, sunTint: true, sunColor: "#ff8a4c", customSky: true, skyColor: "#ff9a6b", fogMode: "sky", colorGrade: true, gradeSaturation: 1.2, gradeContrast: 1.05, gradeHue: -5, gradeVignette: 0.3 },
    neon: { customLighting: true, lightExposure: 1.25, hemiMult: 1.4, sunMult: 0.4, sunTint: true, sunColor: "#ff3df2", customSky: true, skyColor: "#12002b", fogMode: "sky", noTextures: true, texColor: "#2b2f6b", colorGrade: true, gradeSaturation: 1.45, gradeContrast: 1.15, gradeVignette: 0.4 },
    vivid: { colorGrade: true, gradeSaturation: 1.55, gradeContrast: 1.12, gradeBrightness: 1.04, gradeVignette: 0.15 },
    cinematic: { customLighting: true, lightExposure: 0.95, hemiMult: 0.8, sunMult: 1.15, sunTint: true, sunColor: "#ffd2a1", colorGrade: true, gradeSaturation: 0.85, gradeContrast: 1.18, gradeBrightness: 0.97, gradeVignette: 0.55 },
    arctic: { customLighting: true, lightExposure: 1.2, hemiMult: 1.5, sunMult: 0.8, sunTint: true, sunColor: "#dff2ff", customSky: true, skyColor: "#cfe8ff", fogMode: "sky", noTextures: true, texColor: "#e9f1f7", colorGrade: true, gradeSaturation: 0.85, gradeBrightness: 1.05 },
    void: { customLighting: true, lightExposure: 0.9, hemiMult: 0.9, sunMult: 0.9, customSky: true, skyColor: "#000000", fogMode: "sky", noTextures: true, texColor: "#3a3f4a", noBloomFx: true, colorGrade: true, gradeContrast: 1.2, gradeVignette: 0.6 },
    synthwave: { customLighting: true, lightExposure: 1.15, hemiMult: 1.1, sunMult: 0.7, sunTint: true, sunColor: "#ff5ec8", customSky: true, skyColor: "#2a0845", fogMode: "sky", colorGrade: true, gradeSaturation: 1.35, gradeContrast: 1.12, gradeHue: -12, gradeVignette: 0.5 },
    noir: { customLighting: true, lightExposure: 1.05, hemiMult: 0.7, sunMult: 1.3, fogMode: "off", colorGrade: true, gradeSaturation: 0, gradeContrast: 1.35, gradeBrightness: 1.02, gradeVignette: 0.7 },
    dream: { customLighting: true, lightExposure: 1.2, hemiMult: 1.4, sunTint: true, sunColor: "#ffc2f0", customSky: true, skyColor: "#f3c6ff", fogMode: "sky", colorGrade: true, gradeSaturation: 1.15, gradeBrightness: 1.08, gradeBlur: 0.6, gradeTint: 0.25, gradeTintColor: "#ff9de6", gradeVignette: 0.3 }
  };

  var PRESET_KEYS = [
    "customLighting", "lightExposure", "hemiMult", "sunMult", "sunTint", "sunColor",
    "customSky", "skyColor", "fogMode", "noTextures", "texColor", "noBloomFx",
    "colorGrade", "gradeSaturation", "gradeContrast", "gradeBrightness", "gradeHue",
    "gradeVignette", "gradeSepia", "gradeInvert", "gradeBlur", "gradeTint", "gradeTintColor"
  ];

  var settings = { ...DEFAULTS };
  try {
    const saved = JSON.parse(localStorage.getItem("sakura.minimal.v1") || "{}");
    Object.assign(settings, saved);
  } catch (_) {}

  function save() {
    try { localStorage.setItem("sakura.minimal.v1", JSON.stringify(settings)); } catch (_) {}
  }

  function applyPreset(name) {
    const preset = VISUAL_PRESETS[name];
    if (!preset) return;
    // Like the original client: keys the preset doesn't touch revert to defaults,
    // so each theme looks exactly as designed (e.g. Vivid is a pure colour grade).
    for (const key of PRESET_KEYS) {
      settings[key] = key in preset ? preset[key] : DEFAULTS[key];
    }
    save();
  }





  // ── Dev + Beta unlock ──
  // The launcher is the only path: it sets window.__sakuraFlags just before
  // this bundle executes. No in-game code, no stored unlock.
  var launchFlags = {};
  try { launchFlags = window.__sakuraFlags || {}; } catch (_) {}
  var betaUnlocked = true; // userscript: beta is always on, there is no launcher

  // ── Input handling ──
  var held = new Set();
  var clicks = { 1: [], 3: [] };
  var attached = false;

  function onKeyDown(e) { held.add(e.code); }
  function onKeyUp(e) { held.delete(e.code); }
  function onMouseDown(e) {
    if (e.__gloww) return;
    held.add(`mouse${e.button + 1}`);
    const list = clicks[e.button + 1];
    if (list) {
      list.push(performance.now());
      if (list.length > 40) list.shift();
    }
  }
  function onMouseUp(e) { if (!e.__gloww) held.delete(`mouse${e.button + 1}`); }
  function onBlur() { held.clear(); }

  function attachInput() {
    if (attached) return;
    attached = true;
    window.addEventListener("keydown", onKeyDown, true);
    window.addEventListener("keyup", onKeyUp, true);
    window.addEventListener("mousedown", onMouseDown, true);
    window.addEventListener("mouseup", onMouseUp, true);
    window.addEventListener("blur", onBlur);
  }

  function cps(button) {
    const list = clicks[button] || [];
    const t = performance.now();
    while (list.length && t - list[0] > 1000) list.shift();
    return list.length;
  }

  // ── Overlay ──
  var overlay = document.createElement("canvas");
  overlay.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;z-index:2147483646;pointer-events:none";
  var ctx = overlay.getContext("2d");
  var vignetteEl = document.createElement("div");
  vignetteEl.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:2147483645;display:none";

  function syncLayers() {
    const full = document.fullscreenElement;
    const parent = full && full.tagName !== "CANVAS" ? full : document.body || document.documentElement;
    const els = [vignetteEl, overlay];
    for (const el of els) {
      if (el.parentNode !== parent) parent.appendChild(el);
    }
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

  // ── HUD drag (Beta): while the Lunar menu is open, Keystrokes, Watermark
  // and the FPS counter can be grabbed directly on screen and moved.
  var hudRects = {};
  var hudEdit = false;
  var hudDrag = null;
  function hudHit(x, y) {
    for (const k of ["fps", "keys"]) {
      const r = hudRects[k];
      if (r && x >= r.x && y >= r.y && x <= r.x + r.w && y <= r.y + r.h) return k;
    }
    return null;
  }
  function hudOutline(r, label) {
    ctx.save();
    ctx.setLineDash([5, 4]);
    ctx.lineWidth = 1;
    ctx.strokeStyle = "rgba(255,107,157,.85)";
    ctx.strokeRect(r.x - 4, r.y - 4, r.w + 8, r.h + 8);
    ctx.setLineDash([]);
    ctx.font = "600 9px ui-sans-serif,system-ui,sans-serif";
    ctx.fillStyle = "#ff6b9d";
    ctx.textAlign = "left";
    ctx.textBaseline = "bottom";
    ctx.fillText(label, r.x - 4, r.y - 6);
    ctx.restore();
  }
  function hudMoveTo(k, nx, ny) {
    const W = window.innerWidth, H = window.innerHeight;
    if (k === "keys") {
      const r = hudRects.keys;
      settings.ksFree = true;
      settings.ksX = Math.round(clamp(nx / Math.max(1, W - r.w) * 100, 0, 100));
      settings.ksY = Math.round(clamp(ny / Math.max(1, H - r.h) * 100, 0, 100));
    } else if (k === "fps") {
      settings.fpsFree = true;
      settings.fpsX = Math.round(clamp(nx, 0, Math.max(0, W - 90)));
      settings.fpsY = Math.round(clamp(ny, 0, Math.max(0, H - 30)));
    }
  }
  overlay.addEventListener("mousedown", (e) => {
    if (!hudEdit) return;
    const k = hudHit(e.clientX, e.clientY);
    if (!k) return;
    e.preventDefault();
    e.stopPropagation();
    const r = hudRects[k];
    hudDrag = { k, dx: e.clientX - r.x, dy: e.clientY - r.y };
  });
  window.addEventListener("mousemove", (e) => {
    if (!hudEdit) return;
    if (!hudDrag) {
      overlay.style.cursor = hudHit(e.clientX, e.clientY) ? "move" : "default";
      return;
    }
    hudMoveTo(hudDrag.k, e.clientX - hudDrag.dx, e.clientY - hudDrag.dy);
  }, true);
  window.addEventListener("mouseup", () => {
    if (hudDrag) { hudDrag = null; save(); }
  }, true);

  // ── Keystrokes ──
  function drawKeystrokes(rect) {
    const s = settings.ksScale, k = 34 * s, gap = 4 * s;
    const totalW = k * 3 + gap * 2, totalH = k * 3 + gap * 2;
    const pos = settings.ksPos;
    const x0 = settings.ksFree
      ? rect.left + (rect.width - totalW) * clamp(Number(settings.ksX) || 0, 0, 100) / 100
      : pos === "br" ? rect.right - 16 - totalW : rect.left + 16;
    const y0 = settings.ksFree
      ? rect.top + (rect.height - totalH) * clamp(Number(settings.ksY) || 0, 0, 100) / 100
      : pos === "ml" ? rect.top + rect.height / 2 - totalH / 2 : rect.bottom - totalH - (pos === "bl" ? 96 : 150);
    hudRects.keys = { x: x0, y: y0, w: totalW, h: totalH };

    const key = (label, code, x, y, w, h, sub) => {
      const down = held.has(code);
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
      ctx.fillText(label, x + w / 2, y + h / 2 - (sub ? 5 * s : 0));
      if (sub) {
        ctx.font = `600 ${Math.round(9 * s)}px ui-sans-serif,system-ui,sans-serif`;
        ctx.fillStyle = down ? "#fff" : "rgba(255,235,240,0.55)";
        ctx.fillText(sub, x + w / 2, y + h / 2 + 8 * s);
      }
      ctx.restore();
    };

    key("W", "KeyW", x0 + k + gap, y0, k, k);
    key("A", "KeyA", x0, y0 + k + gap, k, k);
    key("S", "KeyS", x0 + k + gap, y0 + k + gap, k, k);
    key("D", "KeyD", x0 + (k + gap) * 2, y0 + k + gap, k, k);
    const half = (totalW - gap) / 2, ry = y0 + (k + gap) * 2;
    key("LMB", "mouse1", x0, ry, half, k, settings.ksCps ? `${cps(1)} CPS` : "");
    key("RMB", "mouse3", x0 + half + gap, ry, half, k, settings.ksCps ? `${cps(3)} CPS` : "");
    key("", "Space", x0, ry + k + gap, totalW, k * 0.45);
    if (hudEdit) hudOutline(hudRects.keys, "KEYS");
  }

  // ── Ambience / World FX ──
  var lighting = { orig: new Map(), exposure: null, list: [], scanAt: -Infinity };
  var sky = { on: false, prevBg: null, prevVisible: null, color: null, hex: null, fog: null, fogOrig: null, fogTouched: false };
  var bloom = { forced: false, quality: null };
  var grade = { el: null, orig: "", active: false, css: "", vig: "" };

  function getGame() {
    try { return window.game || null; } catch (_) { return null; }
  }

  function isPlaying(g) {
    const raw = g?.state ?? g?.gameState ?? g?.status;
    const key = raw?.state ?? raw?.value ?? raw;
    return g?.isPlaying === true || g?.playing === true || ["playing", "in_game", "ingame", "active"].includes(String(key ?? "").trim().toLowerCase().replace(/[ -]/g, "_"));
  }

  function restoreLighting(renderer) {
    for (const [l, o] of lighting.orig) {
      l.intensity = o.i;
      if (l.color && o.color) l.color.copy(o.color);
    }
    lighting.orig.clear();
    if (lighting.exposure != null && renderer) renderer.toneMappingExposure = lighting.exposure;
    lighting.exposure = null;
  }

  function tickLighting(g, want) {
    const scene = g?.scene, renderer = g?.renderer;
    if (!scene || !renderer) return;
    if (!want) {
      if (lighting.orig.size || lighting.exposure != null) restoreLighting(renderer);
      return;
    }
    const now = performance.now();
    if (now - lighting.scanAt > 2000) {
      lighting.scanAt = now;
      const found = [];
      scene.traverse((o) => {
        if (o.isLight && (o.isHemisphereLight || o.isDirectionalLight || o.isAmbientLight)) found.push(o);
      });
      lighting.list = found;
    }
    let sun = null;
    for (const l of lighting.list) {
      if (!lighting.orig.has(l)) lighting.orig.set(l, { i: l.intensity, color: l.color ? l.color.clone() : null });
      if (l.isDirectionalLight && (!sun || lighting.orig.get(l).i > lighting.orig.get(sun).i)) sun = l;
    }
    for (const l of lighting.list) {
      const o = lighting.orig.get(l);
      l.intensity = o.i * (l.isDirectionalLight ? settings.sunMult : settings.hemiMult);
      if (l.color && o.color) {
        if (l === sun && settings.sunTint) l.color.set(settings.sunColor);
        else l.color.copy(o.color);
      }
    }
    if (lighting.exposure == null) lighting.exposure = renderer.toneMappingExposure;
    renderer.toneMappingExposure = lighting.exposure * settings.lightExposure;
  }

  function skyColor(scene) {
    const Col = scene.fog?.color?.constructor || lighting.list[0]?.color?.constructor;
    if (!Col) return null;
    if (!sky.color) sky.color = new Col(settings.skyColor);
    if (sky.hex !== settings.skyColor) {
      sky.color.set(settings.skyColor);
      sky.hex = settings.skyColor;
    }
    return sky.color;
  }

  function restoreFog() {
    const o = sky.fogOrig, fog = sky.fog;
    if (fog && o && sky.fogTouched) {
      fog.near = o.near;
      fog.far = o.far;
      if (fog.color && o.color) fog.color.copy(o.color);
    }
    sky.fogTouched = false;
  }

  function restoreSky(g) {
    const scene = g?.scene;
    if (scene && sky.on) {
      scene.background = sky.prevBg;
      const obj = g._sky;
      if (obj && sky.prevVisible != null) obj.visible = sky.prevVisible;
    }
    sky.on = false;
    restoreFog();
  }

  function tickSky(g, wantSky, fogMode) {
    const scene = g?.scene;
    if (!scene) return;
    const obj = g._sky;
    if (wantSky) {
      const color = skyColor(scene);
      if (color) {
        if (!sky.on) {
          sky.on = true;
          sky.prevBg = scene.background ?? null;
          sky.prevVisible = obj ? obj.visible : null;
        }
        scene.background = color;
        if (obj) obj.visible = false;
      }
    } else if (sky.on) {
      scene.background = sky.prevBg;
      if (obj && sky.prevVisible != null) obj.visible = sky.prevVisible;
      sky.on = false;
    }
    const fog = scene.fog;
    if (!fog) return;
    if (sky.fog !== fog) {
      sky.fog = fog;
      sky.fogOrig = { near: fog.near, far: fog.far, color: fog.color ? fog.color.clone() : null };
      sky.fogTouched = false;
    }
    if (fogMode === "default") {
      if (sky.fogTouched) restoreFog();
      return;
    }
    sky.fogTouched = true;
    if (fogMode === "off") {
      fog.near = 1e5;
      fog.far = 1e5 + 1;
    } else {
      fog.near = sky.fogOrig.near;
      fog.far = sky.fogOrig.far;
    }
    if (fogMode === "sky") {
      const c = skyColor(scene);
      if (c && fog.color) fog.color.copy(c);
    } else if (fog.color && sky.fogOrig.color) fog.color.copy(sky.fogOrig.color);
  }

  function tickBloom(g, want) {
    const fx = g?.postfx;
    if (!fx || typeof fx.setBloom !== "function") return;
    if (want) {
      if (!bloom.forced || bloom.quality !== g.quality) {
        safe(() => fx.setBloom(false));
        bloom.forced = true;
        bloom.quality = g.quality;
      }
    } else if (bloom.forced) {
      safe(() => fx.setBloom(typeof g.bloomPref === "boolean" ? g.bloomPref : g.quality === "high"));
      bloom.forced = false;
    }
  }

  function restoreGrade() {
    if (grade.el && grade.active) grade.el.style.filter = grade.orig;
    grade.el = null;
    grade.orig = "";
    grade.active = false;
    grade.css = "";
    grade.vig = "";
    vignetteEl.style.display = "none";
  }

  function tickGrade(g, want) {
    const el = g?.renderer?.domElement;
    if (!want || !el) {
      if (grade.active) restoreGrade();
      return;
    }
    if (grade.el !== el) {
      restoreGrade();
      grade.el = el;
      grade.orig = el.style.filter || "";
    }
    grade.active = true;
    const parts = [];
    if (settings.gradeSaturation !== 1) parts.push(`saturate(${settings.gradeSaturation})`);
    if (settings.gradeContrast !== 1) parts.push(`contrast(${settings.gradeContrast})`);
    if (settings.gradeBrightness !== 1) parts.push(`brightness(${settings.gradeBrightness})`);
    if (settings.gradeSepia > 0) parts.push(`sepia(${settings.gradeSepia})`);
    if (settings.gradeInvert > 0) parts.push(`invert(${settings.gradeInvert})`);
    if (settings.gradeHue) parts.push(`hue-rotate(${settings.gradeHue}deg)`);
    if (settings.gradeBlur > 0) parts.push(`blur(${settings.gradeBlur}px)`);
    const css = [grade.orig, ...parts].filter(Boolean).join(" ");
    if (css !== grade.css) {
      el.style.filter = css;
      grade.css = css;
    }
    const v = settings.gradeVignette, layers = [];
    if (v > 0) layers.push(`radial-gradient(ellipse 75% 70% at 50% 50%, rgba(0,0,0,0) ${Math.round(62 - v * 32)}%, rgba(0,0,0,${(0.3 + v * 0.55).toFixed(2)}) 100%)`);
    if (settings.gradeTint > 0) {
      const n = parseInt(settings.gradeTintColor.slice(1), 16);
      const c = `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${settings.gradeTint})`;
      layers.push(`linear-gradient(${c}, ${c})`);
    }
    const vig = layers.join(", ");
    if (vig !== grade.vig) {
      grade.vig = vig;
      vignetteEl.style.background = vig;
      vignetteEl.style.display = vig ? "" : "none";
    }
  }

  function worldTick(g) {
    const isLive = g && isPlaying(g);
    // No Bloom works standalone (dev toggle) or via ambience presets
    const noBloom = isLive && (settings.devNoBloom || (settings.ambience && settings.noBloomFx));
    tickBloom(g, noBloom);
    const want = isLive && settings.ambience && (settings.customLighting || settings.customSky || settings.fogMode !== "default" || settings.colorGrade);
    if (!want) {
      if (lighting.orig.size || lighting.exposure != null) restoreLighting(g?.renderer);
      if (sky.on) restoreSky(g);
      if (grade.active) restoreGrade();
      return;
    }
    tickLighting(g, isLive && settings.customLighting);
    tickSky(g, isLive && settings.customSky, isLive ? settings.fogMode : "default");
    tickGrade(g, isLive && settings.colorGrade);
  }

  // ── Feature engine: core helpers (events, hooks, projection) ──
  function rgba(hex, a = 1) {
    const n = parseInt(String(hex).slice(1), 16);
    if (!Number.isFinite(n)) return `rgba(255,255,255,${a})`;
    return `rgba(${n >> 16 & 255},${n >> 8 & 255},${n & 255},${a})`;
  }
  function hsl(h, s = 85, l = 60, a = 1) {
    return `hsla(${(h % 360 + 360) % 360},${s}%,${l}%,${a})`;
  }
  var rad = (d) => d * Math.PI / 180;
  var wrapAngle = (a) => Math.atan2(Math.sin(a), Math.cos(a));
  var damp = (speed, dt) => 1 - Math.exp(-speed * dt);

  // Game-object helpers (same shape as the game exposes)
  var botList = (g) => Array.isArray(g?.botMgr?.bots) ? g.botMgr.bots : null;
  var liveMatch = (g) => !!g && isPlaying(g) && botList(g) !== null;

  // 3D → 2D projection (reads camera matrices directly each frame)
  var canvasRect = { left: 0, top: 0, right: 0, bottom: 0, width: 0, height: 0, at: -Infinity };
  function getRect(g) {
    const el = g?.renderer?.domElement;
    if (!el) return null;
    const now = performance.now();
    if (now - canvasRect.at > 400) {
      const r = el.getBoundingClientRect();
      Object.assign(canvasRect, { left: r.left, top: r.top, right: r.right, bottom: r.bottom, width: r.width, height: r.height, at: now });
    }
    return canvasRect.width > 0 && canvasRect.height > 0 ? canvasRect : null;
  }
  var pvV = null, pvP = null, pvRect = null, viewFrame = -1, viewTick = 0;
  function useView(camera, rect) {
    viewTick++;
    if (viewFrame !== viewTick) { /* per-frame freshness handled by call order */ }
    try { camera.updateMatrixWorld(true); } catch (_) {}
    pvV = camera.matrixWorldInverse?.elements;
    pvP = camera.projectionMatrix?.elements;
    if (!pvV || !pvP) return false;
    pvRect = rect;
    return true;
  }
  function project3(x, y, z, out) {
    const v = pvV, p = pvP;
    if (!v || !p) return false;
    const vx = v[0] * x + v[4] * y + v[8] * z + v[12];
    const vy = v[1] * x + v[5] * y + v[9] * z + v[13];
    const vz = v[2] * x + v[6] * y + v[10] * z + v[14];
    const vw = v[3] * x + v[7] * y + v[11] * z + v[15];
    const cw = p[3] * vx + p[7] * vy + p[11] * vz + p[15] * vw;
    if (!(cw > 0) || cw === Infinity) return false;
    const nx = (p[0] * vx + p[4] * vy + p[8] * vz + p[12] * vw) / cw;
    const ny = (p[1] * vx + p[5] * vy + p[9] * vz + p[13] * vw) / cw;
    const nz = (p[2] * vx + p[6] * vy + p[10] * vz + p[14] * vw) / cw;
    if (nz < -1 || nz > 1) return false;
    out.x = pvRect.left + (nx + 1) * 0.5 * pvRect.width;
    out.y = pvRect.top + (1 - ny) * 0.5 * pvRect.height;
    return true;
  }
  function strokeGlow(color, width, glowPx) {
    ctx.strokeStyle = color;
    if (glowPx > 0) {
      const alpha = ctx.globalAlpha;
      ctx.globalAlpha = alpha * 0.26;
      ctx.lineWidth = width + glowPx * 0.55;
      ctx.stroke();
      ctx.globalAlpha = alpha;
    }
    ctx.lineWidth = width;
    ctx.stroke();
  }
  function pill(x, y, w, h, r) {
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
    else ctx.rect(x, y, w, h);
  }

  var WEAPON_NAMES = { ak47: "AK-47", m4a1s: "M4A1-S", m4a4: "M4A4", awp: "AWP", deagle: "Deagle", usps: "USP-S", glock: "Glock", p250: "P250", p2000: "P2000", tec9: "Tec-9", fiveseven: "Five-SeveN", mac10: "MAC-10", mp9: "MP9", p90: "P90", famas: "FAMAS", galil: "Galil", aug: "AUG", sg553: "SG 553", ssg08: "Scout", knife: "Knife" };
  var weaponLabel = (id) => WEAPON_NAMES[id] || String(id || "").toUpperCase();

  // ── Motion blur (exponential frame accumulation) ──
  // Each frame the new frame is blended over the accumulated image:
  // visible = newFrame * (1 - strength) + history * strength.
  // ── Motion blur (exponential frame accumulation) ──
  // Each frame the new frame is blended over the accumulated image:
  // visible = newFrame * (1 - strength) + history * strength.
  // Layering matters: the blur canvas sits directly after the game's canvas
  // in the DOM with NO z-index, so the game's own HUD/effects (positioned
  // elements with real z-indexes) keep painting above it. The old approach
  // (opaque canvas at max z-index) buried the entire game HUD.
  // The buffer runs at half resolution — cheaper to composite, and the
  // softness is invisible under blur.
  var mb = { canvas: null, ctx: null, active: false, src: null };
  var MB_SCALE = 0.5;
  function tickMotionBlur(g) {
    const src = g?.renderer?.domElement;
    if (!settings.motionBlur || !src || !isPlaying(g)) {
      if (mb.canvas) {
        mb.canvas.remove();
        mb.canvas = null;
        mb.ctx = null;
        mb.src = null;
      }
      mb.active = false;
      return;
    }
    const rect = src.getBoundingClientRect();
    const w = Math.max(2, Math.round(rect.width * MB_SCALE)), h = Math.max(2, Math.round(rect.height * MB_SCALE));
    if (!mb.canvas || mb.src !== src) {
      mb.canvas?.remove();
      mb.canvas = document.createElement("canvas");
      mb.canvas.style.cssText = "position:fixed;pointer-events:none;";
      mb.ctx = mb.canvas.getContext("2d", { alpha: false });
      mb.src = src;
    }
    // Keep it glued right after the game canvas (DOM order + z-index auto
    // puts it above the WebGL canvas but below the game's HUD).
    try {
      if (mb.canvas.parentNode !== src.parentNode || mb.canvas.previousSibling !== src) {
        src.parentNode.insertBefore(mb.canvas, src.nextSibling);
      }
    } catch (_) {}
    Object.assign(mb.canvas.style, { left: rect.left + "px", top: rect.top + "px", width: rect.width + "px", height: rect.height + "px" });
    if (mb.canvas.width !== w || mb.canvas.height !== h) {
      mb.canvas.width = w;
      mb.canvas.height = h;
      mb.ctx.fillStyle = "#000";
      mb.ctx.fillRect(0, 0, w, h);
    }
    // Mirror the ambience color grade onto the blur layer: CSS filters are a
    // presentation effect and do NOT bake into drawImage pixels, so without
    // this the blur would show the ungraded frame and ambience would look off.
    const gf = (grade.active && grade.el) ? grade.el.style.filter || "" : "";
    if (mb.canvas.style.filter !== gf) mb.canvas.style.filter = gf;
    // Alpha of the incoming frame — lower alpha = longer trails.
    mb.ctx.globalAlpha = clamp(1 - settings.mbStrength, 0.05, 1);
    mb.ctx.drawImage(src, 0, 0, w, h);
    mb.active = true;
  }

  // ── Feature engine: rendering (HUD + world visuals) ──

  // ── Main loop ──
  var loopLast = 0;
  var overlayDirty = false;
  function loop(now) {
    requestAnimationFrame(loop);
    const dt = Math.min(0.1, (now - (loopLast || now)) / 1000);
    loopLast = now;
    const g = getGame();

    if (!g) return;

    worldTick(g);
    tickMotionBlur(g);

    const inMatch = liveMatch(g);

    // Skip the fullscreen clear + draw entirely when nothing is visible.
    // With an uncapped frame rate this loop can spin at 500+ fps, and a
    // fullscreen clearRect every one of those frames alone can saturate the
    // compositor — the window stutters while game logic stays smooth.
    const overlayActive =
      (settings.keystrokes && isPlaying(g));
    if (!overlayActive) {
      if (overlayDirty) {
        sizeOverlay();
        syncLayers();
        ctx.clearRect(0, 0, size.w, size.h);
        overlayDirty = false;
      }
      return;
    }
    overlayDirty = true;

    sizeOverlay();
    syncLayers();
    ctx.clearRect(0, 0, size.w, size.h);

    const rect = { left: 0, top: 0, right: size.w, bottom: size.h, width: size.w, height: size.h };
    if (settings.keystrokes && isPlaying(g)) drawKeystrokes(rect);
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

  // ── UI (minimal-style panel, sakura accent) ──
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
    // Only edit by hand when the game already cancelled the key (killed Backspace etc.).
    // Otherwise the input still receives the key natively and a manual edit would double it.
    if (e.type === "keydown" && e.defaultPrevented) editByHand(target, e);
  }
  for (const type of ["keydown", "keyup", "keypress"]) host.addEventListener(type, shieldKeys, true);

  var menuOpen = false;
  var uiState = {};
  try { uiState = JSON.parse(localStorage.getItem("sakura.ui.v1") || "{}"); } catch (_) {}

  var ICONS = {
    hud: '<rect x="3" y="4" width="18" height="16" rx="2.5"/><path d="M7 9h6M7 13h10M7 16h4"/>',
    world: '<circle cx="12" cy="12" r="9.5"/><path d="M3 12h18M12 2.5a15 15 0 0 1 0 19M12 2.5a15 15 0 0 0 0 19"/>',
    dev: '<path d="m12 2 2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4z"/>',
    beta: '<path d="M9 3h6M10 3v6l-5.2 9.4A2 2 0 0 0 6.6 21h10.8a2 2 0 0 0 1.8-2.6L14 9V3"/><path d="M7.5 15h9"/>'
  };
  var CATEGORIES = [
    { id: "hud", label: "HUD", icon: ICONS.hud },
    { id: "world", label: "World", icon: ICONS.world }
  ];
  if (betaUnlocked) CATEGORIES.push({ id: "beta", label: "Beta", icon: ICONS.beta });

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

  function numberField(value, min, max, step, onChange) {
    const input = document.createElement("input");
    input.type = "number";
    input.className = "sk-field sk-num";
    input.min = min; input.max = max; input.step = step; input.value = value;
    input.onchange = () => onChange(Number(input.value));
    return input;
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

  function colorField(value, onChange) {
    const input = document.createElement("input");
    input.type = "color";
    input.className = "sk-color";
    input.value = /^#[0-9a-f]{6}$/i.test(value) ? value : "#ff6b9d";
    input.oninput = () => onChange(input.value);
    return input;
  }

  function textField(value, maxLength, onChange) {
    const input = document.createElement("input");
    input.type = "text";
    input.className = "sk-field";
    input.maxLength = maxLength;
    input.value = value;
    input.setAttribute("spellcheck", "false");
    input.oninput = () => onChange(input.value.slice(0, maxLength));
    return input;
  }

  function actionBtn(label, onclick) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "sk-btn";
    b.textContent = label;
    b.onclick = (e) => { e.stopPropagation(); onclick(); };
    return b;
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
    const lunar = settings.uiStyle === "lunar" && betaUnlocked;
    panel.classList.toggle("lunar", lunar);
    panel.classList.toggle("uismall", settings.uiSize === "compact");
    panel.classList.toggle("uisbig", settings.uiSize === "large");
    panel.style.setProperty("--acc", /^#[0-9a-f]{6}$/i.test(settings.uiAccent) ? settings.uiAccent : "#ff6b9d");

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
    let searchInput = null;
    if (lunar) {
      searchInput = document.createElement("input");
      searchInput.className = "sk-field mn-search";
      searchInput.type = "search";
      searchInput.placeholder = "Search modules…";
      searchInput.setAttribute("spellcheck", "false");
      searchInput.oninput = () => {
        const q = searchInput.value.trim().toLowerCase();
        for (const card of cols.children) {
          card.style.display = !q || (card.textContent || "").toLowerCase().includes(q) ? "" : "none";
        }
      };
      top.insertBefore(searchInput, close);
    }
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
      if (searchInput?.value) searchInput.oninput();
    }

    function rebuildPanel() {
      if (panelEl) { panelEl.remove(); panelEl = null; }
      setMenuOpen(true);
    }

    function interfaceCard() {
      return moduleCard("Interface", "Beta: Lunar-style menu theme and HUD layout.", true, null, [
        row("Menu style", "Lunar is the Beta look", selectField(settings.uiStyle, [["minimal", "Minimal (Sakura)"], ["lunar", "Lunar (Beta)"]], (v) => {
          settings.uiStyle = v; save(); rebuildPanel();
        })),
        row("Accent", "Applies to the Lunar menu", colorField(settings.uiAccent, (v) => {
          settings.uiAccent = v; save();
          try { panelEl?.style.setProperty("--acc", v); } catch (_) {}
        })),
        row("Menu size", null, selectField(settings.uiSize, [["compact", "Compact"], ["normal", "Normal"], ["large", "Large"]], (v) => {
          settings.uiSize = v; save(); rebuildPanel();
        })),
        row("Free keystrokes position", "Place with X / Y below", toggleSwitch(settings.ksFree, (v) => { settings.ksFree = v; save(); })),
        row("Keystrokes X %", null, rangeField(settings.ksX, 0, 100, 1, (v) => { settings.ksX = v; save(); })),
        row("Keystrokes Y %", null, rangeField(settings.ksY, 0, 100, 1, (v) => { settings.ksY = v; save(); })),
        row("Tip", null, note("While this menu is open, enabled HUD elements with dashed outlines can be dragged directly on screen."))
      ]);
    }

    // ── Lunar panel (Beta): ghost-client style module grid + draggable HUD ──
    var LN_ICONS = {
      keys: '<rect x="2" y="7" width="20" height="10" rx="2"/><path d="M6 11h.01M10 11h.01M14 11h.01M18 11h.01M7 14h10"/>',
      globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/>',
      blur: '<path d="M4 12h5l2-5 2 10 2-5h5"/>',
      gauge: '<path d="M4 14a8 8 0 1 1 16 0"/><path d="M12 14l4-4"/>',
      image: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M3 17l5-4 4 3 4-4 5 5"/>',
      sun: '<circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6l1.4 1.4M17 17l1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4"/>',
      bolt: '<path d="M13 2 4 14h6l-1 8 9-12h-6z"/>',
      trend: '<path d="M3 17l5-6 4 3 6-8"/><path d="M15 6h3v3"/>',
      gift: '<rect x="3" y="8" width="18" height="4"/><path d="M5 12v8h14v-8M12 8v12M12 8s-4 0-5-2c-.7-1.4 1-3 2.5-2C11 5 12 8 12 8s1-3 2.5-4c1.5-1 3.2.6 2.5 2-1 2-5 2-5 2"/>',
      refresh: '<path d="M20 12a8 8 0 1 1-2.3-5.6M20 3v4h-4"/>',
      coin: '<circle cx="12" cy="12" r="8"/><path d="M9 10h6M9 14h6"/>',
      dice: '<rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="9" cy="9" r="1.2"/><circle cx="15" cy="9" r="1.2"/><circle cx="9" cy="15" r="1.2"/><circle cx="15" cy="15" r="1.2"/>',
      plus: '<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M12 8v8M8 12h8"/>',
      sliders: '<path d="M4 8h10M18 8h2M4 16h4M12 16h8"/><circle cx="16" cy="8" r="2"/><circle cx="10" cy="16" r="2"/>'
    };
    var LUNAR_MODULES = [
      { tab: "hud", title: "Keystrokes", icon: "keys", get: () => settings.keystrokes, set: (v) => { settings.keystrokes = v; save(); } },
      { tab: "world", title: "Ambience", icon: "globe", get: () => settings.ambience, set: (v) => { settings.ambience = v; save(); } },
      { tab: "world", title: "Motion Blur", icon: "blur", get: () => settings.motionBlur, set: (v) => { settings.motionBlur = v; save(); } },
      { tab: "beta", title: "Interface", icon: "sliders", toggle: null }
    ];
    if (settings.uiStyle === "lunar" && betaUnlocked) return buildLunarPanel();

    function buildLunarPanel() {
      const panel = document.createElement("div");
      panel.className = "mn-panel lunar ln";
      panel.style.setProperty("--acc", /^#[0-9a-f]{6}$/i.test(settings.uiAccent) ? settings.uiAccent : "#ff6b9d");

      // Header
      const head = document.createElement("header");
      head.className = "ln-head";
      const brand = document.createElement("div");
      brand.className = "ln-brand";
      brand.innerHTML = sakuraLogoSvg("ln-logo");
      const bt = document.createElement("span");
      bt.textContent = "SAKURA";
      brand.appendChild(bt);
      const tag = document.createElement("span");
      tag.className = "ln-beta";
      tag.textContent = "BETA";
      brand.appendChild(tag);
      const tabs = document.createElement("div");
      tabs.className = "ln-tabs";
      const modsTab = document.createElement("button");
      modsTab.type = "button";
      modsTab.className = "ln-tab active";
      modsTab.textContent = "MODS";
      const setTab = document.createElement("button");
      setTab.type = "button";
      setTab.className = "ln-tab";
      setTab.textContent = "SETTINGS";
      tabs.append(modsTab, setTab);
      const search = document.createElement("input");
      search.className = "sk-field ln-search";
      search.type = "search";
      search.placeholder = "Search…";
      search.setAttribute("spellcheck", "false");
      const close = document.createElement("button");
      close.type = "button";
      close.className = "ln-x";
      close.title = "Close";
      close.innerHTML = '<svg viewBox="0 0 24 24"><path d="M6 6l12 12M18 6 6 18"/></svg>';
      close.onclick = () => setMenuOpen(false);
      head.append(brand, tabs, search, close);

      // Sidebar + content
      const bodyEl = document.createElement("div");
      bodyEl.className = "ln-body";
      const side = document.createElement("nav");
      side.className = "ln-side";
      const grid = document.createElement("div");
      grid.className = "ln-grid";
      const setPane = document.createElement("div");
      setPane.className = "ln-settings";
      setPane.style.display = "none";
      bodyEl.append(side, grid, setPane);
      panel.append(head, bodyEl);

      // Collect minimal cards once, transplant their rows into lunar drawers
      const pool = new Map();
      for (const c of [...cardsFor("hud"), ...cardsFor("world")]) {
        const t = c.querySelector(".sk-card-title strong");
        if (t && !pool.has(t.textContent)) pool.set(t.textContent, c);
      }
      if (betaUnlocked && !pool.has("Interface")) pool.set("Interface", interfaceCard());
      const defs = LUNAR_MODULES.filter((d) => d.tab !== "dev");
      const cards = new Map();
      const paintCounts = () => {
        for (const [id, el, n] of catBtns) {
          const list = defs.filter((d) => id === "all" || d.tab === id);
          const on = list.filter((d) => !d.get || d.get()).length;
          n.textContent = `${on}/${list.length}`;
        }
      };
      for (const def of defs) {
        const min = pool.get(def.title);
        if (!min) continue;
        const el = document.createElement("div");
        el.className = "ln-mod";
        el.dataset.tab = def.tab;
        el.dataset.name = (def.title + " " + (min.querySelector(".sk-mdesc")?.textContent || "")).toLowerCase();
        const top = document.createElement("div");
        top.className = "ln-top";
        const ic = document.createElement("span");
        ic.className = "ln-ico";
        ic.innerHTML = `<svg viewBox="0 0 24 24">${LN_ICONS[def.icon] || ""}</svg>`;
        const nm = document.createElement("div");
        nm.className = "ln-name";
        nm.textContent = def.title;
        top.append(ic, nm);
        const d = document.createElement("div");
        d.className = "ln-desc";
        d.textContent = min.querySelector(".sk-mdesc")?.textContent || "";
        const btns = document.createElement("div");
        btns.className = "ln-btns";
        const opts = document.createElement("button");
        opts.type = "button";
        opts.className = "ln-opts";
        opts.textContent = "OPTIONS";
        const gear = document.createElement("button");
        gear.type = "button";
        gear.className = "ln-gear";
        gear.title = "Settings";
        gear.innerHTML = '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.06-.4.1-.8.1-1.2z"/></svg>';
        btns.append(opts, gear);
        const drawer = document.createElement("div");
        drawer.className = "ln-drawer";
        const mbody = min.querySelector(".sk-mbody");
        if (mbody) {
          // Transplant the body node itself (not copies): the card builders keep
          // live references to it for async/catalog updates.
          const md = mbody.querySelector(":scope > .sk-mdesc");
          if (md) md.remove();
          drawer.appendChild(mbody);
        }
        if (!drawer.children.length) btns.style.display = "none";
        const flip = () => el.classList.toggle("open");
        opts.onclick = flip;
        gear.onclick = flip;
        el.append(top, d, btns, drawer);
        if (def.get) {
          const bar = document.createElement("button");
          bar.type = "button";
          bar.className = "ln-bar";
          const paint = () => {
            const on = !!def.get();
            bar.classList.toggle("on", on);
            bar.textContent = on ? "ENABLED" : "DISABLED";
          };
          bar.onclick = () => { def.set(!def.get()); paint(); paintCounts(); };
          el.appendChild(bar);
          paint();
        }
        grid.appendChild(el);
        cards.set(def.title, el);
      }

      // Settings pane: Interface rows + HUD reset
      const iface = interfaceCard();
      const ibody = iface.querySelector(".sk-mbody");
      if (ibody) {
        const md = ibody.querySelector(":scope > .sk-mdesc");
        if (md) md.remove();
        setPane.appendChild(ibody);
      }
      setPane.appendChild(actionBtn("Reset HUD positions", () => {
        settings.ksFree = false; settings.ksPos = "bl";
        settings.fpsFree = false;
        save();
      }));

      // Sidebar categories
      const catBtns = [];
      const cats = [["all", "All"], ["hud", "HUD"], ["world", "World"]];
      if (betaUnlocked) cats.push(["beta", "Beta"]);
      let filter = "all";
      const applyFilter = () => {
        const q = search.value.trim().toLowerCase();
        for (const def of defs) {
          const el = cards.get(def.title);
          if (!el) continue;
          const tabOk = filter === "all" || def.tab === filter;
          const qOk = !q || (el.dataset.name || "").includes(q);
          el.style.display = tabOk && qOk ? "" : "none";
        }
      };
      for (const [id, label] of cats) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "ln-cat" + (id === "all" ? " active" : "");
        const lab = document.createElement("span");
        lab.textContent = label;
        const n = document.createElement("span");
        n.className = "n";
        b.append(lab, n);
        b.onclick = () => {
          filter = id;
          for (const [, el] of catBtns) el.classList.toggle("active", el === b);
          applyFilter();
        };
        side.appendChild(b);
        catBtns.push([id, b, n]);
      }
      paintCounts();
      search.oninput = applyFilter;

      // Tab switching
      const showMods = (mods) => {
        modsTab.classList.toggle("active", mods);
        setTab.classList.toggle("active", !mods);
        grid.style.display = mods ? "" : "none";
        side.style.display = mods ? "" : "none";
        setPane.style.display = mods ? "none" : "";
        search.style.visibility = mods ? "" : "hidden";
      };
      modsTab.onclick = () => showMods(true);
      setTab.onclick = () => showMods(false);

      // Drag by header
      let off = null;
      head.addEventListener("pointerdown", (e) => {
        if (e.button !== 0 || e.target.closest("button, input")) return;
        const r = panel.getBoundingClientRect();
        off = [e.clientX - r.left, e.clientY - r.top];
        try { head.setPointerCapture(e.pointerId); } catch (_) {}
      });
      head.addEventListener("pointermove", (e) => {
        if (!off) return;
        panel.style.left = Math.min(Math.max(0, e.clientX - off[0]), window.innerWidth - 200) + "px";
        panel.style.top = Math.min(Math.max(0, e.clientY - off[1]), window.innerHeight - 100) + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
      });
      const endDrag = () => {
        if (!off) return;
        off = null;
        const r = panel.getBoundingClientRect();
        uiState.lnX = r.left; uiState.lnY = r.top;
        saveUi();
      };
      head.addEventListener("pointerup", endDrag);
      head.addEventListener("pointercancel", endDrag);
      if (Number.isFinite(uiState.lnX)) {
        panel.style.left = uiState.lnX + "px";
        panel.style.top = uiState.lnY + "px";
        panel.style.right = "auto";
        panel.style.bottom = "auto";
      }
      return panel;
    }

    function cardsFor(id) {
      if (id === "hud") {
        return [
          moduleCard("Keystrokes", "WASD, jump and mouse buttons with clicks per second.", settings.keystrokes,
            (v) => { settings.keystrokes = v; save(); }, [
              row("Position", null, selectField(settings.ksPos, [["bl", "Bottom left"], ["br", "Bottom right"], ["ml", "Left middle"]], (v) => { settings.ksPos = v; save(); })),
              row("Size", null, rangeField(settings.ksScale, 0.6, 1.6, 0.05, (v) => { settings.ksScale = v; save(); })),
              row("Clicks per second", null, toggleSwitch(settings.ksCps, (v) => { settings.ksCps = v; save(); }))
            ])
        ];
      }
      if (id === "beta") return [interfaceCard()];
      const presets = [["custom", "Custom (manual)"], ["default", "Game default"], ["sakura", "Sakura"], ["midnight", "Midnight"], ["sunset", "Sunset"], ["neon", "Neon"], ["vivid", "Vivid"], ["cinematic", "Cinematic"], ["arctic", "Arctic"], ["void", "Void"], ["synthwave", "Synthwave"], ["noir", "Noir"], ["dream", "Dream"]];
      return [
        moduleCard("Ambience", "One-click world themes. Nudge any linked setting and it switches to Custom.", settings.ambience,
          (v) => { settings.ambience = v; save(); }, [
            row("Theme", null, selectField(settings.visualPreset, presets, (v) => {
              settings.visualPreset = v;
              if (v !== "custom") applyPreset(v);
              save();
            }))
          ]),
        moduleCard("Motion Blur", "Clean frame-blend blur that smooths fast camera movement.", settings.motionBlur,
          (v) => { settings.motionBlur = v; save(); }, [
            row("Strength", null, rangeField(settings.mbStrength, 0.1, 0.9, 0.05, (v) => { settings.mbStrength = v; save(); }))
          ]),
      ];
    }



    function note(text, err) {
      const n = document.createElement("div");
      n.className = "sk-note" + (err ? " err" : "");
      n.textContent = text;
      return n;
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
    hudEdit = v && settings.uiStyle === "lunar" && betaUnlocked;
    overlay.style.pointerEvents = hudEdit ? "auto" : "none";
    if (!hudEdit) { hudDrag = null; overlay.style.cursor = "default"; }
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
  .sk-color { width: 30px; height: 20px; padding: 0; border: 0; border-radius: 6px; background: none; cursor: pointer; }
  .sk-note { font-size: 11px; color: rgba(246,238,242,.5); padding: 2px 0; }
  .sk-note.err { color: #ff7a93; }
  .sk-tool { display: flex; flex-direction: column; gap: 6px; }
  .sk-items { display: grid; grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)); gap: 5px; max-height: 180px; overflow-y: auto; padding: 2px; }
  .sk-items::-webkit-scrollbar { width: 8px; }
  .sk-items::-webkit-scrollbar-thumb { background: rgba(255,255,255,.08); border-radius: 4px; }
  .sk-item { display: flex; flex-direction: column; gap: 2px; padding: 8px; border: 0; border-radius: 8px; background: rgba(255,255,255,.03); box-shadow: inset 0 0 0 1px rgba(255,255,255,.05); color: inherit; cursor: pointer; text-align: left; transition: box-shadow .2s, background .2s; position: relative; }
  .sk-item::before { content: ""; position: absolute; top: 4px; left: 6px; right: 6px; height: 2px; border-radius: 2px; background: var(--rc, #888); opacity: .85; }
  .sk-item:hover { background: rgba(255,255,255,.05); }
  .sk-item.sel { box-shadow: inset 0 0 0 1px var(--rc, #ff6b9d); background: rgba(255,255,255,.05); }
  .sk-item-name { font-size: 10.5px; font-weight: 600; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 4px; }
  .sk-item small { font-size: 9px; color: var(--rc, #888); text-transform: uppercase; letter-spacing: .06em; }
  .sk-btn { align-self: flex-start; border: 0; border-radius: 8px; padding: 8px 16px; background: #ff6b9d; color: #fff; font-size: 11.5px; font-weight: 700; letter-spacing: .04em; cursor: pointer; box-shadow: 0 4px 16px rgba(255,107,157,.3); transition: filter .2s; }
  .sk-btn:hover { filter: brightness(1.1); }
  .mn-search { width: 160px; margin-right: 2px; }
  /* Lunar (Beta) theme — same DOM, wider window, accent-driven */
  .mn-panel.lunar { width: min(780px, calc(100vw - 48px)); max-height: min(560px, calc(100vh - 48px));
    background: rgba(13,14,20,.92); }
  .mn-panel.lunar .mn-side { width: 76px; }
  .mn-panel.lunar .mn-tab { width: 64px; height: 46px; }
  .mn-panel.lunar .mn-tab.active { color: var(--acc, #ff6b9d); background: rgba(255,255,255,.06); }
  .mn-panel.lunar .mn-tab.active .sk-ico svg { filter: drop-shadow(0 0 6px var(--acc, #ff6b9d)); }
  .mn-panel.lunar .sk-card.on { box-shadow: inset 0 0 0 1px var(--acc, #ff6b9d), 0 0 0 1px rgba(255,255,255,.04); background: rgba(255,255,255,.045); }
  .mn-panel.lunar .sk-card.on .sk-card-title strong { color: #fff; }
  .mn-panel.lunar .sk-switch[aria-checked="true"] { background: rgba(255,255,255,.16); }
  .mn-panel.lunar .sk-switch[aria-checked="true"]::after { background: var(--acc, #ff6b9d); box-shadow: 0 0 6px var(--acc, #ff6b9d); }
  .mn-panel.lunar .sk-btn { background: var(--acc, #ff6b9d); color: #fff; box-shadow: 0 4px 16px rgba(0,0,0,.4); }
  .mn-panel.lunar .sk-slider::-webkit-slider-runnable-track { background: linear-gradient(var(--acc, #ff6b9d), var(--acc, #ff6b9d)) 0 0 / var(--p, 50%) 100% no-repeat, rgba(255,255,255,.08); }
  .mn-panel.lunar .sk-slider::-webkit-slider-thumb { background: var(--acc, #ff6b9d); box-shadow: 0 0 0 2px rgba(255,255,255,.25); }
  .mn-panel.lunar .sk-slider::-moz-range-progress { background: var(--acc, #ff6b9d); }
  .mn-panel.lunar .sk-slider::-moz-range-thumb { background: var(--acc, #ff6b9d); }
  .mn-panel.lunar .mn-avatar { background: radial-gradient(circle at 30% 25%, var(--acc, #ff6b9d), #101018 135%); box-shadow: 0 0 0 2px rgba(255,255,255,.08), 0 0 14px rgba(0,0,0,.5); }
  .mn-panel.lunar .mn-logo-svg { filter: drop-shadow(0 0 4px var(--acc, #ff6b9d)); }
  .mn-panel.uismall { font-size: 12px; }
  .mn-panel.uismall .mn-cols { grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); }
  .mn-panel.uisbig { font-size: 14px; width: min(780px, calc(100vw - 48px)); }
  /* Lunar window (Beta ghost-client look) */
  .mn-panel.ln { display: block; width: min(880px, calc(100vw - 48px)); max-height: min(620px, calc(100vh - 48px));
    background: rgba(10,11,16,.94); border-radius: 14px; padding: 0; overflow: hidden; }
  .ln-head { display: flex; align-items: center; gap: 12px; padding: 12px 14px;
    border-bottom: 1px solid rgba(255,255,255,.07); cursor: grab; user-select: none; }
  .ln-brand { display: flex; align-items: center; gap: 8px; font-weight: 800; font-size: 15px; letter-spacing: .06em; }
  .ln-logo { width: 24px; height: 24px; overflow: visible; filter: drop-shadow(0 0 5px var(--acc, #ff6b9d)); }
  .ln-beta { font-size: 9px; font-weight: 800; letter-spacing: .08em; background: var(--acc, #ff6b9d);
    color: #fff; border-radius: 4px; padding: 2px 6px; }
  .ln-tabs { display: flex; gap: 2px; margin-left: 6px; }
  .ln-tab { background: none; border: 0; color: rgba(255,255,255,.45); font-size: 11px; font-weight: 800;
    letter-spacing: .08em; padding: 8px 12px; border-radius: 8px; cursor: pointer; }
  .ln-tab:hover { color: #fff; }
  .ln-tab.active { color: #fff; background: rgba(255,255,255,.07); box-shadow: inset 0 -2px 0 var(--acc, #ff6b9d); }
  .ln-search { margin-left: auto; width: 150px; }
  .ln-x { display: grid; place-items: center; width: 28px; height: 28px; border: 0; border-radius: 8px;
    background: transparent; color: inherit; opacity: .5; cursor: pointer; }
  .ln-x:hover { opacity: 1; background: rgba(255,80,80,.15); }
  .ln-x svg { width: 14px; height: 14px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; }
  .ln-body { display: flex; height: 480px; min-height: 0; }
  .ln-side { width: 168px; flex: none; border-right: 1px solid rgba(255,255,255,.07);
    padding: 10px; display: flex; flex-direction: column; gap: 2px; }
  .ln-cat { display: flex; align-items: center; gap: 8px; padding: 9px 10px; border-radius: 8px; background: none;
    border: 0; color: rgba(255,255,255,.55); font-size: 12px; font-weight: 600; cursor: pointer; width: 100%; text-align: left; }
  .ln-cat:hover { background: rgba(255,255,255,.05); color: #fff; }
  .ln-cat.active { background: rgba(255,255,255,.08); color: #fff; box-shadow: inset 2px 0 0 var(--acc, #ff6b9d); }
  .ln-cat .n { margin-left: auto; font-size: 10px; opacity: .5; }
  .ln-grid { flex: 1; min-width: 0; overflow-y: auto; display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; padding: 12px; align-content: start; }
  .ln-grid::-webkit-scrollbar, .ln-settings::-webkit-scrollbar { width: 8px; }
  .ln-grid::-webkit-scrollbar-thumb, .ln-settings::-webkit-scrollbar-thumb { background: rgba(255,255,255,.1); border-radius: 4px; }
  .ln-mod { background: rgba(255,255,255,.03); border: 1px solid rgba(255,255,255,.07); border-radius: 10px;
    padding: 12px 10px 10px; display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .ln-mod.open { grid-column: span 2; align-items: stretch; }
  .ln-mod.open .ln-desc { text-align: left; }
  .ln-top { display: flex; flex-direction: column; align-items: center; gap: 6px; }
  .ln-mod.open .ln-top { flex-direction: row; }
  .ln-ico { width: 34px; height: 34px; display: grid; place-items: center; color: rgba(255,255,255,.85); flex: none; }
  .ln-ico svg { width: 30px; height: 30px; fill: none; stroke: currentColor; stroke-width: 1.6; stroke-linecap: round; stroke-linejoin: round; }
  .ln-name { font-size: 12px; font-weight: 700; text-align: center; }
  .ln-desc { font-size: 10px; opacity: .45; text-align: center; min-height: 24px; }
  .ln-btns { display: flex; gap: 6px; width: 100%; }
  .ln-opts { flex: 1; background: rgba(255,255,255,.06); border: 1px solid rgba(255,255,255,.09); color: #fff;
    font-size: 10px; font-weight: 800; letter-spacing: .06em; border-radius: 6px; padding: 7px 0; cursor: pointer; }
  .ln-opts:hover { background: rgba(255,255,255,.1); }
  .ln-gear { width: 30px; flex: none; border-radius: 6px; background: rgba(255,255,255,.06);
    border: 1px solid rgba(255,255,255,.09); color: #fff; cursor: pointer; display: grid; place-items: center; }
  .ln-gear:hover { background: rgba(255,255,255,.1); }
  .ln-gear svg { width: 15px; height: 15px; fill: none; stroke: currentColor; stroke-width: 1.8; stroke-linecap: round; stroke-linejoin: round; }
  .ln-drawer { display: none; width: 100%; border-top: 1px solid rgba(255,255,255,.07); padding-top: 6px; }
  .ln-mod.open .ln-drawer { display: block; }
  .ln-bar { width: 100%; border: 0; border-radius: 6px; padding: 8px 0; font-size: 11px; font-weight: 800;
    letter-spacing: .08em; cursor: pointer; background: #ef4444; color: #fff; }
  .ln-bar.on { background: #22c55e; }
  .ln-settings { flex: 1; min-width: 0; overflow-y: auto; padding: 14px; display: flex; flex-direction: column;
    gap: 4px; max-width: 560px; }
  @keyframes mn-in { from { opacity: 0; transform: translateY(6px); } }
  `;

  console.log("Sakura Client loaded (" + (IS_ASTRA ? "astrastrike-clean" : "clutcher-full") + ")");

  // ── Start ──
  attachInput();
  requestAnimationFrame(loop);
})();

