// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      1.0.0
// @description  Keystrokes display and ambience visual presets for Clutcher.io — Sakura theme
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

(() => {
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
    // Dev (performance)
    perfTextures: false,
    perfGunTex: 1,
    fastAnimations: false,
    animationSpeed: 10,
    devNoBloom: false,
    fpsCounter: false,
    // Beta (Lunar-style UI) — unlocked from the launcher, no code
    uiStyle: "minimal",
    uiAccent: "#ff6b9d",
    uiSize: "normal",
    menuMouse: true,
    lockOnClose: true,
    ksFree: false,
    ksX: 0,
    ksY: 85,
    fpsFree: false,
    fpsX: 16,
    fpsY: 16,
    // Dev (cases)
    freeCases: false,
    autoCases: false,
    caseAnimationSpeed: 3,
    infiniteCoins: false,
    coinsTarget: 1000000,
    caseOdds: false,
    coFallback: "off",
    coPicks: "{}",
    giveReveal: true,
    // Arm chams
    armCharms: false,
    charmsType: "outline",
    charmColor: "#ff6b9d",
    charmWidth: 4,
    charmOpacity: 0.5,
    charmColor2: "#ffb3c6",
    charmTwoTone: false,
    charmGlow: 0.6,
    charmRainbow: false,
    charmRainbowSpd: 60,
    charmPulse: false,
    charmPulseSpd: 3,
    charmPulseAmt: 0.4,
    charmShimmer: false,
    charmFull: false,
    charmMetal: false,
    charmFlat: false,
    charmXray: false,
    charmBright: 1,
    charmPreset: "custom",
    charmCandy: false,
    charmCandySpd: 2,
    charmFire: false,
    charmFireCol: "#ffffff",
    charmGhost: false,
    charmBack: false,
    charmNoTex: false,
    // Gun chams
    gunChams: false,
    chamType: "outline",
    chamColor: "#ff6b9d",
    chamWidth: 4,
    chamOpacity: 0.5,
    chamGlowIntensity: 0.6,
    chamColor2: "#ffb3c6",
    chamTwoTone: false,
    chamRainbow: false,
    chamRainbowSpd: 60,
    chamPulse: false,
    chamPulseSpd: 3,
    chamPulseAmt: 0.4,
    chamShimmer: false,
    chamFull: false,
    chamMetal: false,
    chamFlat: false,
    chamXray: false,
    chamBright: 1,
    chamPreset: "custom",
    chamCandy: false,
    chamCandySpd: 2,
    chamFire: false,
    chamFireCol: "#ffffff",
    chamGhost: false,
    chamBack: false,
    chamNoTex: false,
    // Knife chams (best-effort name match on the weapon meshes)
    knifeChams: false,
    knifeType: "outline",
    knifeColor: "#ff6b9d",
    knifeOpacity: 0.5,
    knifeRainbow: false,
    // Chams behaviour
    chamsScan: 2,
    chamsMatchOnly: true,
    gunHide: false,
    armHide: false,
    // Viewmodel pose (offsets applied after the game's own update)
    vmOn: false,
    vmX: 0,
    vmY: 0,
    vmZ: 0,
    vmRX: 0,
    vmRY: 0,
    vmRZ: 0,
    vmFovOn: false,
    vmFov: 70,
    vmKick: 100,
    vmBob: 100,
    vmSway: 100,
    // Crosshair studio (visual only — drawn on the overlay canvas)
    crosshair: false,
    chPreset: "custom",
    chStyle: "cross",
    chColor: "#ffffff",
    chDotColor: "#ffffff",
    chLen: 8,
    chLenH: 1,
    chLenV: 1,
    chThick: 2,
    chGap: 4,
    chGapY: 4,
    chDot: true,
    chDotSize: 2,
    chOutline: true,
    chOutlineColor: "#000000",
    chOpacity: 1,
    chDynamic: true,
    chMoveAmt: 6,
    chFireKick: true,
    chKickAmt: 8,
    chRecover: 4,
    chExpandCap: 24,
    chSpreadSrc: "auto",
    chSpreadScale: 1,
    chSpreadCap: 40,
    chAds: true,
    chAdsAmt: 0.35,
    chScopeMult: 0.9,
    chCtrlT: false,
    chCtrlAmt: 0.3,
    chScopeHide: false,
    chOuter: false,
    chOuterGap: 4,
    chOuterLen: 6,
    chPulse: false,
    chPulseAmt: 0.1,
    chPulseSpeed: 3,
    chSpin: false,
    chSpinSpeed: 1.5,
    chRainbow: false,
    chRainbowSpeed: 120,
    chFlash: true,
    chFlashColor: "#ff6b9d",
    chWobble: false,
    chWobbleAmt: 2,
    chFireX: false,
    chFireXSize: 12,
    chOffX: 0,
    chOffY: 0,
    chGlow: false,
    chGlowAmt: 10,
    chInLobby: false,
    chHideMenu: false,
    chHideGame: true,
    // Custom drawn crosshair (21x21 pixel grid, stored as a 0/1 string)
    chPixels: "",
    chPxScale: 3,
    chDrawMode: "pixels",
    chMirrorX: true,
    chMirrorY: true
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

  // @us-strip-start cases-engine
  // ── Inventory / cases (from the full client) ──
  var INV_KEY = "clutcher_inv_v1";
  var RARITIES = {
    consumer: { name: "Consumer", color: "#b0c3d9" },
    industrial: { name: "Industrial", color: "#5e98d9" },
    milspec: { name: "Mil-Spec", color: "#4b69ff" },
    restricted: { name: "Restricted", color: "#8847ff" },
    classified: { name: "Classified", color: "#d32ce6" },
    covert: { name: "Covert", color: "#eb4b4b" },
    contraband: { name: "Contraband", color: "#e4ae39" },
    gold: { name: "Knife / Gloves", color: "#e4ae39" }
  };
  var inv = { data: null };
  var realStringify = JSON.stringify;
  var invHooked = false;
  function hookInventory() {
    if (invHooked) return;
    invHooked = true;
    JSON.stringify = function(value, ...rest) {
      if (value && typeof value === "object" && Array.isArray(value.items) && "coins" in value && "equipped" in value) inv.data = value;
      return realStringify.call(this, value, ...rest);
    };
  }
  var linked = () => !!inv.data;
  function saveData() {
    if (!inv.data) return false;
    try { localStorage.setItem(INV_KEY, realStringify(inv.data)); return true; } catch (_) { return false; }
  }
  function editStored(fn) {
    try {
      const d = JSON.parse(localStorage.getItem(INV_KEY) || "null") || { coins: 600, items: [], equipped: {}, stats: { games: 0, kills: 0, wins: 0 } };
      fn(d);
      localStorage.setItem(INV_KEY, realStringify(d));
      return true;
    } catch (_) { return false; }
  }
  var refreshMenu = (g) => safe(() => g?.hud?.refreshMenuChrome?.());

  // Catalog (game's data module)
  var catalog = { ready: false, skins: [], byId: new Map(), cases: [], tiers: [], error: null };
  var catalogLoading = null;
  var catalogCbs = [];
  function findDataModuleUrl() {
    return performance.getEntriesByType?.("resource")?.map((e) => e.name).find((n) => /\/src\/data-[\w-]+\.js(\?|$)/.test(n)) || null;
  }
  async function findDataModuleUrlSlow() {
    const main = document.querySelector('script[type="module"][src*="main"]')?.src || new URL("./src/main.js", location.href).href;
    const text = await (await fetch(main)).text();
    const m = text.match(/from\s*"(\.\/data-[\w-]+\.js)"/);
    return m ? new URL(m[1], main).href : null;
  }
  var splitItems = (v) => Array.isArray(v) ? v : typeof v === "string" ? v.split(".").filter(Boolean) : [];
  function loadCatalog() {
    if (catalog.ready || catalogLoading) return catalogLoading || Promise.resolve(catalog);
    catalogLoading = (async () => {
      try {
        const url = findDataModuleUrl() || await findDataModuleUrlSlow();
        if (!url) throw new Error("Couldn't find the game's data module.");
        const mod = await import(/* @vite-ignore */ url);
        const values = Object.values(mod);
        const skins = values.find((v) => Array.isArray(v) && v.length > 50 && v.some((x) => x && x.kind === "weapon" && x.rarity && x.id));
        const cases = values.find((v) => Array.isArray(v) && v.length > 0 && v.every((x) => x && typeof x.id === "string" && "price" in x && "items" in x));
        const tiers = values.find((v) => Array.isArray(v) && v.length > 0 && v.every((x) => x && typeof x.tier === "string" && typeof x.pct === "number"));
        if (!skins || !cases) throw new Error("The game's data module changed shape.");
        catalog.skins = skins.filter((s) => s && s.id && s.name);
        catalog.byId = new Map(catalog.skins.map((s) => [s.id, s]));
        catalog.cases = cases.map((c) => ({ ...c, itemIds: splitItems(c.items) }));
        catalog.tiers = tiers || [{ tier: "milspec", pct: 79.92 }, { tier: "restricted", pct: 15.98 }, { tier: "classified", pct: 3.2 }, { tier: "covert", pct: 0.64 }, { tier: "gold", pct: 0.26 }];
        catalog.ready = true;
      } catch (error) {
        catalog.error = error.message || String(error);
      } finally {
        catalogLoading = null;
        for (const cb of catalogCbs.splice(0)) safe(() => cb());
      }
      return catalog;
    })();
    return catalogLoading;
  }
  function onCatalog(cb) {
    if (catalog.ready || catalog.error) cb();
    else catalogCbs.push(cb);
  }

  var isGold = (s) => !!s && (s.kind === "knife" || s.kind === "gloves" || /^knife_|^glove_/.test(s.id));
  var rarityOf = (s) => isGold(s) ? "gold" : s?.rarity || "milspec";
  var rarityColor = (s) => (RARITIES[rarityOf(s)] || RARITIES.milspec).color;

  function getPicks() {
    try {
      const p = JSON.parse(settings.coPicks || "{}");
      return p && typeof p === "object" ? p : {};
    } catch (_) { return {}; }
  }
  function setPick(caseId, skinId) {
    const p = getPicks();
    if (skinId) p[caseId] = skinId;
    else delete p[caseId];
    settings.coPicks = JSON.stringify(p);
    save();
  }
  function rollForTier(tier) {
    let start = 0;
    for (const t of catalog.tiers) {
      if (t.tier === tier) return Math.min(0.999999, (start + t.pct * 0.5) / 100);
      start += t.pct;
    }
    return null;
  }

  // Case steering
  var pendingGive = null;
  var casesHooked = false;
  function hookCases() {
    const g = getGame();
    const hud = g?.hud;
    if (casesHooked || !hud || typeof hud.openCaseFlow !== "function") return;
    casesHooked = true;
    const orig = hud.openCaseFlow;
    hud.openCaseFlow = function(caseObj, ...rest) {
      const give = pendingGive;
      pendingGive = null;
      if (!give && !settings.caseOdds && !settings.freeCases) return orig.call(this, caseObj, ...rest);
      return steeredOpen(g, this, orig, caseObj, give, rest);
    };
  }
  function steeredOpen(g, hud, orig, target, give, rest) {
    const caseId = target.id;
    let forcedId = give?.skinId || (settings.caseOdds ? getPicks()[caseId] : null) || null;
    const free = !!give || settings.freeCases;
    const queue = [null, null, null, null];
    if (forcedId) queue[0] = 0;
    else if (settings.caseOdds && settings.coFallback === "gold") queue[0] = rollForTier("gold");
    let calls = 0, inPick = false;
    const realRandom = Math.random;
    const proxy = new Proxy(target, {
      get(t, key, recv) {
        if (key === "price" && free) return 0;
        if (key === "items" && inPick && forcedId) return [forcedId];
        return Reflect.get(t, key, recv);
      }
    });
    Math.random = function() {
      const i = calls++;
      if (i === 0) inPick = true;
      else if (i === 1) inPick = false;
      const v = i < queue.length ? queue[i] : null;
      return v == null ? realRandom() : v;
    };
    let out;
    try {
      out = orig.call(hud, proxy, ...rest);
    } finally {
      Math.random = realRandom;
    }
    refreshMenu(g);
    return out;
  }

  function wearRoll(skin) {
    const lo = skin.wmin ?? 0, hi = skin.wmax ?? 1;
    return lo + (hi - lo) * Math.random();
  }
  function makeItem(skin) {
    return {
      uid: "i" + Date.now().toString(36) + Math.floor(Math.random() * 1e6).toString(36),
      skin: skin.id,
      wear: +wearRoll(skin).toFixed(6),
      seed: Math.floor(Math.random() * 1e3),
      st: false,
      kills: 0,
      t: Date.now()
    };
  }
  function giveItem(g, skinId) {
    const skin = catalog.byId.get(skinId);
    if (!skin) return { ok: false, msg: "Unknown item" };
    const hud = g?.hud;
    if (settings.giveReveal && hud?.openCaseFlow) {
      const base = catalog.cases.find((c) => c.itemIds.includes(skinId)) || catalog.cases[0];
      if (!base) return { ok: false, msg: "No cases found" };
      pendingGive = { skinId };
      safe(() => hud.openCaseFlow(base));
      pendingGive = null;
      return { ok: true, msg: `${skin.name} (revealing)` };
    }
    const item = makeItem(skin);
    if (inv.data) {
      inv.data.items.push(item);
      saveData();
      refreshMenu(g);
      return { ok: true, msg: `${skin.name} added` };
    }
    return editStored((d) => d.items.push(item))
      ? { ok: true, msg: `${skin.name} saved. Reload the page to see it (or open any case first to link the inventory).` }
      : { ok: false, msg: "Couldn't write the inventory" };
  }
  function setCoins(g, amount) {
    amount = Math.max(0, Math.round(amount));
    if (inv.data) {
      inv.data.coins = amount;
      saveData();
      refreshMenu(g);
      return true;
    }
    return editStored((d) => { d.coins = amount; });
  }
  var coinsAt = 0;
  function tickCoins() {
    const now = performance.now();
    if (!settings.infiniteCoins || now - coinsAt < 500) return;
    coinsAt = now;
    if (inv.data && inv.data.coins < settings.coinsTarget) setCoins(getGame(), settings.coinsTarget);
  }

  // Auto cases
  var lastCaseButton = null;
  function tickAutoCases() {
    if (!settings.autoCases) {
      lastCaseButton = null;
      return;
    }
    const button = document.querySelector("#co-again");
    const style = button && getComputedStyle(button);
    const available = !!button?.isConnected && !button.matches(":disabled") && button.getAttribute("aria-disabled") !== "true" && style.display !== "none" && style.visibility !== "hidden" && button.getClientRects().length > 0;
    if (!available) lastCaseButton = null;
    else if (button !== lastCaseButton) {
      lastCaseButton = button;
      button.click();
    }
  }
  var caseMixer = { mixer: null, original: 1 };
  function tickCaseAnimation() {
    const mixer = getGame()?._caseView?.mixer;
    if (mixer !== caseMixer.mixer) {
      if (caseMixer.mixer) caseMixer.mixer.timeScale = caseMixer.original;
      caseMixer.mixer = null;
      if (!mixer) return;
      caseMixer.mixer = mixer;
      caseMixer.original = Number.isFinite(mixer.timeScale) ? mixer.timeScale : 1;
    }
    if (mixer) mixer.timeScale = settings.autoCases ? settings.caseAnimationSpeed : caseMixer.original;
  }

  // @us-strip-end cases-engine

  // @us-strip-start perf-engine
  // ── Performance: texture quality (from the full client) ──
  var perfState = new Map();
  var perfTexStore = new Map();
  var perfLastScan = -Infinity;
  var perfEnabled = false;
  function* materialTextures(m) {
    if (!m) return;
    for (const k of ["map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap", "lightMap", "aoMap", "specularMap", "alphaMap"]) {
      const t = m[k];
      if (t && t.isTexture && !t.isVideoTexture && !t.isData3DTexture) yield t;
    }
  }
  function walkMaterials(root, out, skip) {
    if (!root || typeof root.traverse !== "function") return;
    const seen = new Set();
    root.traverse((o) => {
      if (!o || seen.has(o) || skip?.has(o)) return;
      seen.add(o);
      if (o.isMesh || o.isSkinnedMesh) {
        for (const m of [].concat(o.material || [])) if (m) out.add(m);
      }
    });
  }
  function collectMaterials(g) {
    // Gun/viewmodel only — scanning the full map scene caused recompile stutter
    const gun = new Set();
    walkMaterials(g?.viewmodel?.scene, gun);
    walkMaterials(g?.cs2?.scene, gun);
    return { gun };
  }
  function biasFromScale(scale) {
    return (1 - Math.min(1, Math.max(0, scale))) * 4;
  }
  function patchMaterial(m, u) {
    if (perfState.has(m)) return;
    const prevOnBeforeCompile = m.onBeforeCompile, prevKey = m.customProgramCacheKey;
    m.onBeforeCompile = (shader, renderer) => {
      prevOnBeforeCompile?.(shader, renderer);
      shader.uniforms.uPerfLod = u;
      const TEX = ["map", "normalMap", "roughnessMap", "metalnessMap", "emissiveMap", "lightMap", "aoMap", "specularMap", "alphaMap"];
      const UV = ["vMapUv", "vNormalMapUv", "vRoughnessMapUv", "vMetalnessMapUv", "vEmissiveMapUv", "vLightMapUv", "vAoMapUv", "vSpecularMapUv", "vAlphaMapUv"];
      for (let i = 0; i < TEX.length; i++) {
        // GLSL3 style: texture( name, vXyzUv )
        shader.fragmentShader = shader.fragmentShader.replace(
          new RegExp(`texture\\(\\s*${TEX[i]}\\s*,\\s*${UV[i]}\\s*\\)`, "g"),
          `textureLod(${TEX[i]}, ${UV[i]}, uPerfLod)`
        );
        // GLSL1 style: texture2D( name, vXyzUv )
        shader.fragmentShader = shader.fragmentShader.replace(
          new RegExp(`texture2D\\(\\s*${TEX[i]}\\s*,\\s*${UV[i]}\\s*\\)`, "g"),
          `texture2DLodEXT(${TEX[i]}, ${UV[i]}, uPerfLod)`
        );
      }
      // Fallback varying name used by older three.js builds
      shader.fragmentShader = shader.fragmentShader.replace(
        /texture2D\(\s*map\s*,\s*vUv\s*\)/g,
        "texture2DLodEXT(map, vUv, uPerfLod)"
      );
      if (/uPerfLod/.test(shader.fragmentShader) && !/uniform\s+float\s+uPerfLod/.test(shader.fragmentShader)) {
        shader.fragmentShader = "uniform float uPerfLod;\n" + shader.fragmentShader;
      }
    };
    m.customProgramCacheKey = () => `${prevKey ? prevKey.call(m) : m.type}-perfLod`;
    m.needsUpdate = true;
    perfState.set(m, { prevOnBeforeCompile, prevKey, u });
  }
  function downscale(tex, scale) {
    try {
      const prev = perfTexStore.get(tex);
      const src = prev?.src || (tex.source?.data ?? tex.image);
      if (!src) return;
      const w = src.width ?? src.naturalWidth ?? src.videoWidth, h = src.height ?? src.naturalHeight ?? src.videoHeight;
      if (!w || !h) return;
      if (prev && prev.scale === scale) return;
      if (scale >= 0.999) {
        if (prev) {
          if (tex.source) tex.source.data = src;
          else tex.image = src;
          tex.needsUpdate = true;
          perfTexStore.delete(tex);
        }
        return;
      }
      const nw = Math.max(1, Math.round(w * scale)), nh = Math.max(1, Math.round(h * scale));
      // DataTexture: raw pixel buffer — downsample nearest-neighbour instead of canvas
      if (src.data && (src.data instanceof Uint8Array || src.data instanceof Uint8ClampedArray)) {
        const bpp = src.data.length / (w * h); // bytes per pixel (3 or 4 usually)
        if (bpp !== 3 && bpp !== 4) return;
        const out = new Uint8Array(nw * nh * bpp);
        for (let y = 0; y < nh; y++) {
          const sy = Math.min(h - 1, Math.floor(y / scale));
          for (let x = 0; x < nw; x++) {
            const sx = Math.min(w - 1, Math.floor(x / scale));
            const si = (sy * w + sx) * bpp, di = (y * nw + x) * bpp;
            for (let k = 0; k < bpp; k++) out[di + k] = src.data[si + k];
          }
        }
        const img = { data: out, width: nw, height: nh };
        if (tex.source) tex.source.data = img;
        else tex.image = img;
        tex.needsUpdate = true;
        perfTexStore.set(tex, { src, scale });
        return;
      }
      // Regular image source — canvas path
      const c = document.createElement("canvas");
      c.width = nw;
      c.height = nh;
      const x = c.getContext("2d");
      x.drawImage(src, 0, 0, nw, nh);
      if (tex.source) tex.source.data = c;
      else tex.image = c;
      tex.needsUpdate = true;
      perfTexStore.set(tex, { src, scale });
    } catch (_) {}
  }
  function tickPerformance() {
    const active = settings.perfTextures || settings.perfGunTex < 1;
    if (!active) {
      if (perfEnabled) restorePerformance();
      return;
    }
    const g = getGame();
    if (!g?.scene) return;
    perfEnabled = true;
    const now = performance.now();
    if (now - perfLastScan < 2000) return;
    perfLastScan = now;
    try {
      const { gun } = collectMaterials(g);
      const gunBias = biasFromScale(settings.perfGunTex);
      for (const m of gun) {
        const u = m.userData._perfU ||= { value: 0 };
        u.value = gunBias;
        patchMaterial(m, u);
        for (const t of materialTextures(m)) downscale(t, settings.perfGunTex);
      }
    } catch (_) {}
  }
  function restorePerformance() {
    for (const [m, s] of perfState) {
      try {
        m.onBeforeCompile = s.prevOnBeforeCompile;
        m.customProgramCacheKey = s.prevKey;
        m.needsUpdate = true;
        if (m.userData) delete m.userData._perfU;
      } catch (_) {}
    }
    for (const [tex, s] of perfTexStore) {
      try {
        if (tex.source) tex.source.data = s.src;
        else tex.image = s.src;
        tex.needsUpdate = true;
      } catch (_) {}
    }
    perfState.clear();
    perfTexStore.clear();
    perfEnabled = false;
  }


  // @us-strip-end perf-engine

  // @us-strip-start fast-anim
  // ── Fast animations (from the full client) ──
  var animRates = new WeakMap();
  var animTouched = false;
  function tickAnimations() {
    const g = getGame();
    const inRound = !!g && isPlaying(g) && g.roundActive === true && g.cs2Ready === true;
    if (!inRound || !settings.fastAnimations) {
      if (animTouched) {
        animTouched = false;
        for (const a of document.getAnimations()) if (animRates.has(a)) a.playbackRate = animRates.get(a);
      }
      return;
    }
    animTouched = true;
    for (const a of document.getAnimations()) {
      if (a.playState === "finished") continue;
      if (!animRates.has(a)) animRates.set(a, a.playbackRate);
      if (a.playbackRate !== settings.animationSpeed) a.playbackRate = settings.animationSpeed;
    }
  }

  // @us-strip-end fast-anim

  // @us-strip-start fps-counter
  // ── FPS counter ──
  var fpsTrack = { frames: 0, value: 0, since: 0 };
  function drawFps(rect, now) {
    fpsTrack.frames++;
    if (now - fpsTrack.since >= 500) {
      fpsTrack.value = Math.round(fpsTrack.frames * 1e3 / (now - fpsTrack.since));
      fpsTrack.frames = 0;
      fpsTrack.since = now;
    }
    ctx.save();
    ctx.font = "700 12px ui-sans-serif,system-ui,sans-serif";
    const text = `${fpsTrack.value} FPS`;
    const w = ctx.measureText(text).width + 18, h = 22;
    const x = settings.fpsFree ? rect.left + clamp(Number(settings.fpsX) || 0, 0, Math.max(0, rect.width - w)) : rect.left + 16;
    const y = settings.fpsFree ? rect.top + clamp(Number(settings.fpsY) || 0, 0, Math.max(0, rect.height - h)) : rect.top + 16;
    hudRects.fps = { x, y, w, h };
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, 8);
    else ctx.rect(x, y, w, h);
    ctx.fillStyle = "rgba(22,8,16,0.7)";
    ctx.fill();
    ctx.strokeStyle = "rgba(255,107,157,0.35)";
    ctx.lineWidth = 1;
    ctx.stroke();
    ctx.fillStyle = "#ffb3c6";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, x + w / 2, y + h / 2 + 0.5);
    ctx.restore();
    if (hudEdit) hudOutline(hudRects.fps, "FPS");
  }

  // @us-strip-end fps-counter

  // ── Dev + Beta unlock ──
  // The launcher is the only path: it sets window.__sakuraFlags just before
  // this bundle executes. No in-game code, no stored unlock.
  var launchFlags = {};
  try { launchFlags = window.__sakuraFlags || {}; } catch (_) {}
  var devUnlocked = launchFlags.dev === true;
  var betaUnlocked = launchFlags.beta === true;
  try { betaUnlocked = betaUnlocked || localStorage.getItem("sakura.beta.v1") === "1"; } catch (_) {}
  if (!betaUnlocked && settings.uiStyle === "lunar") { settings.uiStyle = "minimal"; save(); }

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

  // ── Crosshair studio (visual only — overlay canvas, no game writes) ──
  // Gap/size react to synthetic state (moving / firing / ADS) plus the game's
  // live inaccuracy cone (read off its own crosshair geometry, auto-calibrated).
  // All pure canvas cosmetics — nothing is written back to the game.
  var chState = { kick: 0, flash: 0, fireX: 0 };
  var CHDRAW_N = 21;
  // ── Hide the game's built-in crosshair (DOM #crosshair) while ours draws ──
  // Uses visibility (not display) so the cone geometry stays measurable for
  // live-spread mode. Restores everything when ours is toggled off.
  var xhEl = null, xhStyleEl = null, xhHidden = false;
  function tickGameCrosshair() {
    const want = settings.crosshair && settings.chHideGame;
    if (!xhEl || !xhEl.isConnected) xhEl = document.getElementById("crosshair");
    if (want) {
      if (xhEl && xhEl.style.visibility !== "hidden") {
        xhEl.dataset.sakuraXhV = xhEl.style.visibility || "";
        xhEl.style.visibility = "hidden";
      }
      if (!xhStyleEl) {
        xhStyleEl = document.createElement("style");
        xhStyleEl.textContent = "#crosshair{visibility:hidden!important}";
        (document.head || document.documentElement).appendChild(xhStyleEl);
      }
      xhHidden = true;
    } else if (xhHidden) {
      if (xhStyleEl) { xhStyleEl.remove(); xhStyleEl = null; }
      if (xhEl && xhEl.isConnected) {
        if ("sakuraXhV" in xhEl.dataset) {
          xhEl.style.visibility = xhEl.dataset.sakuraXhV;
          delete xhEl.dataset.sakuraXhV;
        }
        if ("sakuraXh" in xhEl.dataset) { // legacy key from display-based hide
          xhEl.style.display = xhEl.dataset.sakuraXh;
          delete xhEl.dataset.sakuraXh;
        }
      }
      xhEl = null;
      xhHidden = false;
    }
  }
  function chApplyPreset(name) {
    const P = {
      def: { chStyle: "cross", chColor: "#ffffff", chDotColor: "#ffffff", chLen: 8, chThick: 2, chGap: 4, chGapY: 4, chDot: true, chDotSize: 2, chOutline: true },
      cs: { chStyle: "cross", chColor: "#00ff00", chDotColor: "#00ff00", chLen: 10, chThick: 2, chGap: 3, chGapY: 3, chDot: false, chDotSize: 2, chOutline: true },
      val: { chStyle: "crossdot", chColor: "#00ff88", chDotColor: "#00ff88", chLen: 6, chThick: 2, chGap: 4, chGapY: 4, chDot: true, chDotSize: 2, chOutline: true },
      dot: { chStyle: "dot", chColor: "#ffffff", chDotColor: "#ffffff", chLen: 8, chThick: 2, chGap: 4, chGapY: 4, chDot: true, chDotSize: 3, chOutline: true },
      circ: { chStyle: "ringdot", chColor: "#ffffff", chDotColor: "#ffffff", chLen: 8, chThick: 2, chGap: 4, chGapY: 4, chDot: true, chDotSize: 2, chOutline: true },
      chev: { chStyle: "chevron", chColor: "#ff6b9d", chDotColor: "#ff6b9d", chLen: 9, chThick: 2.5, chGap: 3, chGapY: 3, chDot: false, chDotSize: 2, chOutline: true }
    }[name];
    if (!P) return;
    Object.assign(settings, P, { chPreset: name });
    save();
  }
  // ── Live spread: read the game's own crosshair cone (its outer dashes ride
  // the live inaccuracy via transform). Auto-calibrates a resting baseline
  // while calm (still, grounded, not firing, unscoped) so any HUD scale works.
  // Returns extra gap px, or null when unreadable (caller falls back to synthetic).
  var xhProbeEl = null, spreadBase = null;
  function chReadGameSpread(g, moving, firing, ads) {
    try {
      if (!xhProbeEl || !xhProbeEl.isConnected) {
        const root = document.getElementById("crosshair");
        xhProbeEl = (root && (root.querySelector(".cho-n") || root.querySelector(".chout"))) || null;
      }
      if (!xhProbeEl) return null;
      let raw = null;
      const t = xhProbeEl.style && xhProbeEl.style.transform;
      if (t) {
        let m = /translateY\(\s*(-?[\d.]+)/.exec(t)
          || /translate(?:3d)?\(\s*-?[\d.]+[a-z%]*\s*,\s*(-?[\d.]+)/.exec(t)
          || /translate3d\(\s*-?[\d.]+[a-z%]*\s*,\s*-?[\d.]+[a-z%]*\s*,\s*(-?[\d.]+)/.exec(t);
        if (m) raw = Math.abs(parseFloat(m[1]));
        else if ((m = /matrix(?:3d)?\(([^)]+)\)/.exec(t))) {
          const p = m[1].split(",");
          const v = parseFloat(p.length > 12 ? p[13] : p[5]);
          if (isFinite(v)) raw = Math.abs(v);
        }
      }
      if (raw == null) {
        const r = xhProbeEl.getBoundingClientRect();
        if (!r || (!r.width && !r.height)) return null;
        raw = Math.abs(r.top + r.height / 2 - window.innerHeight / 2);
      }
      if (!isFinite(raw)) return null;
      const p = g && g.player;
      const calm = p && !moving && !firing && !ads && p.onGround !== false;
      if (calm) spreadBase = spreadBase == null ? raw : spreadBase + (raw - spreadBase) * 0.06;
      if (spreadBase == null) return 0;
      return Math.max(0, raw - spreadBase);
    } catch (_) { return null; }
  }
  function drawCrosshair(rect, now, dt, game) {
    const firing = held.has("mouse1"), ads = held.has("mouse3");
    if (settings.chScopeHide && ads) return;
    if (settings.chHideMenu && menuOpen) return;
    const rec = Math.max(0.5, Number(settings.chRecover) || 4);
    chState.kick = Math.max(0, chState.kick - dt * rec * 4);
    chState.flash = Math.max(0, chState.flash - dt * rec * 3);
    chState.fireX = Math.max(0, chState.fireX - dt * rec * 2);
    if (firing) {
      if (settings.chFireKick) chState.kick = Math.min(1, chState.kick + dt * 8);
      if (settings.chFlash) chState.flash = 1;
      if (settings.chFireX) chState.fireX = 1;
    }
    const moving = held.has("KeyW") || held.has("KeyA") || held.has("KeyS") || held.has("KeyD");
    let gameExp = null;
    if ((settings.chSpreadSrc || "auto") !== "synth" && game && isPlaying(game)) gameExp = chReadGameSpread(game, moving, firing, ads);
    let exp = 0;
    if (settings.chDynamic && moving) exp += Number(settings.chMoveAmt) || 0;
    if (settings.chFireKick) exp += chState.kick * (Number(settings.chKickAmt) || 0);
    exp = Math.min(Math.max(0, Number(settings.chExpandCap) || 0), exp);
    if (gameExp != null) {
      const sc = Number(settings.chSpreadScale), cp = Number(settings.chSpreadCap);
      const scaled = Math.min(isFinite(cp) ? cp : 40, gameExp * (isFinite(sc) ? sc : 1));
      exp = (settings.chSpreadSrc || "auto") === "game" ? scaled : Math.max(exp, scaled);
    }
    let shrink = 1;
    if (settings.chAds && ads) shrink *= 1 - clamp(Number(settings.chAdsAmt) || 0, 0, 0.9);
    if (settings.chCtrlT && (held.has("ControlLeft") || held.has("ControlRight"))) shrink *= 1 - clamp(Number(settings.chCtrlAmt) || 0, 0, 0.9);
    const pulse = settings.chPulse ? 1 + Math.sin(now / 1000 * (Number(settings.chPulseSpeed) || 3)) * (Number(settings.chPulseAmt) || 0) : 1;
    const k = Math.max(0.2, pulse * shrink * (ads ? (Number(settings.chScopeMult) || 1) : 1));
    const L = (Number(settings.chLen) || 8) * k;
    const LH = L * (Number(settings.chLenH) || 1), LV = L * (Number(settings.chLenV) || 1);
    const g = ((Number(settings.chGap) || 0) + exp) * shrink;
    const gv = ((Number(settings.chGapY) || 0) + exp) * shrink;
    const w = Math.max(0.5, (Number(settings.chThick) || 2) * k);
    let cx = rect.width / 2 + (Number(settings.chOffX) || 0);
    let cy = rect.height / 2 + (Number(settings.chOffY) || 0);
    if (settings.chWobble) cx += Math.sin(now / 1000 * 5) * (Number(settings.chWobbleAmt) || 0);
    const col = settings.chRainbow ? `hsl(${(now / 1000 * (Number(settings.chRainbowSpeed) || 120)) % 360} 100% 65%)` : settings.chColor;
    const main = (settings.chFlash && chState.flash > 0.35) ? settings.chFlashColor : col;
    const ocol = settings.chOutlineColor || "#000000";

    ctx.save();
    ctx.globalAlpha = clamp(Number(settings.chOpacity) ?? 1, 0, 1);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    if (settings.chGlow) { ctx.shadowColor = main; ctx.shadowBlur = Number(settings.chGlowAmt) || 0; }
    if (settings.chSpin) { ctx.translate(cx, cy); ctx.rotate(now / 1000 * (Number(settings.chSpinSpeed) || 0)); cx = 0; cy = 0; }
    const line = (x1, y1, x2, y2, lw, c) => {
      if (settings.chOutline) {
        ctx.strokeStyle = ocol; ctx.lineWidth = lw + 2;
        ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
      }
      ctx.strokeStyle = c; ctx.lineWidth = lw;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    };
    const dot = (x, y, r, c) => {
      if (settings.chOutline) {
        ctx.fillStyle = ocol;
        ctx.beginPath(); ctx.arc(x, y, r + 1, 0, Math.PI * 2); ctx.fill();
      }
      ctx.fillStyle = c;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    };
    const ring = (x, y, r, lw, c) => {
      if (settings.chOutline) {
        ctx.strokeStyle = ocol; ctx.lineWidth = lw + 2;
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
      }
      ctx.strokeStyle = c; ctx.lineWidth = lw;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.stroke();
    };
    const outer = (horiz) => {
      if (!settings.chOuter) return;
      const og = (horiz ? g : gv) + (horiz ? LH : LV) + (Number(settings.chOuterGap) || 0);
      const ol = Number(settings.chOuterLen) || 6;
      if (horiz) {
        line(cx - og - ol, cy, cx - og, cy, w, main);
        line(cx + og, cy, cx + og + ol, cy, w, main);
      } else {
        line(cx, cy - og - ol, cx, cy - og, w, main);
        line(cx, cy + og, cx, cy + og + ol, w, main);
      }
    };
    const style = settings.chStyle || "cross";
    if (style === "dot") {
      dot(cx, cy, Math.max(1, (Number(settings.chDotSize) || 2) * k + 1), settings.chDotColor || main);
    } else if (style === "circle") {
      ring(cx, cy, Math.max(2, L), w, main);
    } else if (style === "ringdot") {
      ring(cx, cy, Math.max(2, L), w, main);
      dot(cx, cy, Math.max(1, (Number(settings.chDotSize) || 2) * k), settings.chDotColor || main);
    } else if (style === "square") {
      const h = Math.max(2, L);
      if (settings.chOutline) {
        ctx.strokeStyle = ocol; ctx.lineWidth = w + 2;
        ctx.strokeRect(cx - h, cy - h, h * 2, h * 2);
      }
      ctx.strokeStyle = main; ctx.lineWidth = w;
      ctx.strokeRect(cx - h, cy - h, h * 2, h * 2);
    } else if (style === "diamond") {
      const h = Math.max(2, L);
      const path = () => { ctx.beginPath(); ctx.moveTo(cx, cy - h); ctx.lineTo(cx + h, cy); ctx.lineTo(cx, cy + h); ctx.lineTo(cx - h, cy); ctx.closePath(); };
      if (settings.chOutline) { ctx.strokeStyle = ocol; ctx.lineWidth = w + 2; path(); ctx.stroke(); }
      ctx.strokeStyle = main; ctx.lineWidth = w; path(); ctx.stroke();
    } else if (style === "chevron") {
      line(cx - LH, cy - gv + LV * 0.9, cx, cy - gv, w, main);
      line(cx, cy - gv, cx + LH, cy - gv + LV * 0.9, w, main);
      if (settings.chDot) dot(cx, cy, Math.max(1, (Number(settings.chDotSize) || 2) * k), settings.chDotColor || main);
    } else if (style === "x") {
      const d = g / Math.SQRT2, e = L;
      line(cx - d - e, cy - d - e, cx - d, cy - d, w, main);
      line(cx + d, cy + d, cx + d + e, cy + d + e, w, main);
      line(cx + d, cy - d, cx + d + e, cy - d - e, w, main);
      line(cx - d - e, cy + d + e, cx - d, cy + d, w, main);
      if (settings.chDot) dot(cx, cy, Math.max(1, (Number(settings.chDotSize) || 2) * k), settings.chDotColor || main);
    } else if (style === "t") {
      line(cx - g - LH, cy, cx - g, cy, w, main);
      line(cx + g, cy, cx + g + LH, cy, w, main);
      line(cx, cy + gv, cx, cy + gv + LV, w, main);
      outer(true);
      if (settings.chDot) dot(cx, cy, Math.max(1, (Number(settings.chDotSize) || 2) * k), settings.chDotColor || main);
    } else if (style === "custom") {
      const cN = CHDRAW_N, px = Math.max(1, Number(settings.chPxScale) || 3);
      const gpix = settings.chPixels || "";
      const gx0 = cx - (cN * px) / 2, gy0 = cy - (cN * px) / 2;
      ctx.fillStyle = main;
      for (let yy = 0; yy < cN; yy++) {
        for (let xx = 0; xx < cN; xx++) {
          if (gpix[yy * cN + xx] === "1") ctx.fillRect(gx0 + xx * px, gy0 + yy * px, px, px);
        }
      }
    } else { // cross + crossdot
      line(cx - g - LH, cy, cx - g, cy, w, main);
      line(cx + g, cy, cx + g + LH, cy, w, main);
      line(cx, cy - gv - LV, cx, cy - gv, w, main);
      line(cx, cy + gv, cx, cy + gv + LV, w, main);
      outer(true); outer(false);
      if (style === "crossdot" || settings.chDot) dot(cx, cy, Math.max(1, (Number(settings.chDotSize) || 2) * k), settings.chDotColor || main);
    }
    if (settings.chFireX && chState.fireX > 0.02) {
      ctx.globalAlpha = clamp(chState.fireX, 0, 1) * clamp(Number(settings.chOpacity) ?? 1, 0, 1);
      const f = (Number(settings.chFireXSize) || 12) * k;
      line(cx - f, cy - f, cx + f, cy + f, w, settings.chFlashColor);
      line(cx + f, cy - f, cx - f, cy + f, w, settings.chFlashColor);
    }
    ctx.restore();
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

  // ── Chams (arm + gun viewmodel chams) ─────────────────────────────
  // Applies colored / glow / wireframe materials to the viewmodel arm
  // and weapon meshes. Originals are saved on first apply and restored
  // when the module is disabled, so the game keeps working untouched.
  var chams = {
    arm: { applied: false, root: null, meshes: [], orig: new Map(), scannedAt: 0 },
    gun: { applied: false, root: null, meshes: [], orig: new Map(), scannedAt: 0 },
    knife: { applied: false, root: null, meshes: [], orig: new Map(), scannedAt: 0 }
  };
  function chNum(v, d) { const n = Number(v); return isFinite(n) ? n : d; }
  function chHexRgb(hex) {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
    if (!m) return [255, 107, 157];
    const n = parseInt(m[1], 16);
    return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
  }
  function chHexo(rgb) {
    const c = (v) => Math.max(0, Math.min(255, Math.round(v))).toString(16).padStart(2, "0");
    return "#" + c(rgb[0]) + c(rgb[1]) + c(rgb[2]);
  }
  function chMixHex(a, b, f) {
    const A = chHexRgb(a), B = chHexRgb(b);
    return chHexo([A[0] + (B[0] - A[0]) * f, A[1] + (B[1] - A[1]) * f, A[2] + (B[2] - A[2]) * f]);
  }
  function chBrightHex(hex, m) {
    const c = chHexRgb(hex);
    return chHexo([c[0] * m, c[1] * m, c[2] * m]);
  }
  function chHslHex(h, s, l) {
    h = ((((h % 360) + 360) % 360) / 360);
    s = Math.max(0, Math.min(1, s));
    l = Math.max(0, Math.min(1, l));
    const f = (n) => {
      const k = (n + h * 12) % 12;
      const a = s * Math.min(l, 1 - l);
      return (l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1))) * 255;
    };
    return chHexo([f(0), f(8), f(4)]);
  }
  // Per-frame animated base color for a side's options (always hex — the
  // brightness mixer below only parses hex, which is why rainbow broke).
  function chamsFrameColor(o, now) {
    const base = o.color || "#ff6b9d";
    if (o.rainbow) {
      return chHslHex((now / 1000) * chNum(o.rainbowSpd, 60), 1, 0.6);
    }
    if (o.candy && o.color2) {
      const f = Math.sin(now / 1000 * chNum(o.candySpd, 2) * Math.PI * 2) * 0.5 + 0.5;
      return chMixHex(base, o.color2, f);
    }
    return base;
  }
  // Resolve per-side options from settings by key prefix ("charm", "cham", "knife").
  function chamsOpts(prefix, glowKey) {
    const v = (k) => settings[prefix + k];
    return {
      type: v("Type"), color: v("Color"), color2: v("Color2"),
      twoTone: v("TwoTone"), opacity: v("Opacity"), width: v("Width"),
      glow: glowKey ? settings[glowKey] : v("Glow"),
      rainbow: v("Rainbow"), rainbowSpd: v("RainbowSpd"),
      pulse: v("Pulse"), pulseSpd: v("PulseSpd"), pulseAmt: v("PulseAmt"),
      shimmer: v("Shimmer"), full: v("Full"), metal: v("Metal"),
      flat: v("Flat"), xray: v("Xray"), bright: v("Bright"),
      candy: v("Candy"), candySpd: v("CandySpd"),
      fire: v("Fire"), fireCol: v("FireCol"),
      ghost: v("Ghost"), back: v("Back"), noTex: v("NoTex")
    };
  }
  // three.js side constants: 0 = FrontSide, 1 = BackSide, 2 = DoubleSide
  function chamsSaveOrig(m, origMap) {
    if (!origMap.has(m)) {
      origMap.set(m, {
        color: m.color ? m.color.getHex() : null,
        emissive: m.emissive ? m.emissive.getHex() : null,
        emissiveIntensity: m.emissiveIntensity,
        wireframe: m.wireframe,
        side: m.side,
        depthTest: m.depthTest,
        depthWrite: m.depthWrite,
        transparent: m.transparent,
        opacity: m.opacity,
        flatShading: m.flatShading,
        metalness: ("metalness" in m) ? m.metalness : null,
        roughness: ("roughness" in m) ? m.roughness : null,
        polygonOffset: m.polygonOffset,
        polygonOffsetFactor: m.polygonOffsetFactor
      });
    }
  }
  // o: resolved side options (see chamsOpts); firing: mouse1 held (fire flash).
  function chamsApplyMat(m, state, o, now, firing) {
    if (!m) return;
    chamsSaveOrig(m, state.orig);
    const oo = state.orig.get(m);
    const bright = Math.max(0.2, Math.min(2, chNum(o.bright, 1)));
    const base = chBrightHex(chamsFrameColor(o, now), bright);
    const emCol = o.twoTone && o.color2 ? chBrightHex(o.color2, bright) : base;
    const op = Math.max(0.05, Math.min(1, chNum(o.opacity, 0.45)));
    let emis = chNum(o.glow, 0.6);
    if (o.pulse) emis += Math.sin(now / 1000 * chNum(o.pulseSpd, 3) * Math.PI * 2) * chNum(o.pulseAmt, 0.4);
    emis = Math.max(0, emis);
    const type = o.type || "outline";
    const shim = o.shimmer ? 0.55 + 0.45 * Math.sin(now / 1000 * chNum(o.pulseSpd, 3) * Math.PI * 2) : 1;
    if (type === "outline" || type === "both") {
      m.side = o.back ? 1 : 2;       // BackSide hollow look, else DoubleSide
      m.transparent = true;
      m.opacity = op * shim;
      if (m.color) m.color.set(o.full ? "#ffffff" : base);
    } else {
      m.transparent = true;
      m.opacity = op * shim;
    }
    if (type === "glow" || type === "both") {
      if (m.emissive) m.emissive.set(firing && o.fire ? (o.fireCol || "#ffffff") : emCol);
      m.emissiveIntensity = emis + (o.full ? 0.7 : 0);
    } else if (o.fire && firing && m.emissive) {
      m.emissive.set(o.fireCol || "#ffffff");
      m.emissiveIntensity = Math.max(emis, 0.9);
    }
    if (type === "wireframe") {
      m.wireframe = true;
      if (m.color) m.color.set(o.full ? "#ffffff" : base);
    }
    if (o.metal && "metalness" in m) { m.metalness = 0.9; m.roughness = 0.25; }
    else if ("metalness" in m && oo.metalness != null) { m.metalness = oo.metalness; m.roughness = oo.roughness; }
    if (m.map !== undefined) {
      if (o.noTex && !m.userData._sakNoTex) {
        m.userData._sakNoTex = true;
        m.userData._sakMap = m.map || null;
        m.map = null;
        m.needsUpdate = true;
      } else if (!o.noTex && m.userData._sakNoTex) {
        m.userData._sakNoTex = false;
        m.map = m.userData._sakMap || null;
        m.userData._sakMap = null;
        m.needsUpdate = true;
      }
    }
    if (m.flatShading !== undefined) {
      if (o.flat && m.userData._sakFlat !== true) {
        m.userData._sakFlat = true;
        m.flatShading = true;
        m.needsUpdate = true;
      } else if (!o.flat && m.userData._sakFlat) {
        m.userData._sakFlat = false;
        m.flatShading = oo.flatShading;
        m.needsUpdate = true;
      }
    }
    m.depthTest = o.xray ? false : oo.depthTest;
    m.depthWrite = o.ghost ? false : oo.depthWrite;
    if (chNum(o.width, 0) > 0) {
      m.polygonOffset = true;
      m.polygonOffsetFactor = -chNum(o.width, 0);
    } else {
      m.polygonOffset = oo.polygonOffset;
      m.polygonOffsetFactor = oo.polygonOffsetFactor;
    }
  }
  function chamsRestoreMat(state, m) {
    const orig = state.orig.get(m);
    if (!orig || !m) return;
    try {
      if (m.color && orig.color != null) m.color.set(orig.color);
      if (m.emissive && orig.emissive != null) m.emissive.set(orig.emissive);
      m.emissiveIntensity = orig.emissiveIntensity;
      m.wireframe = orig.wireframe;
      m.side = orig.side;
      m.depthTest = orig.depthTest;
      m.depthWrite = orig.depthWrite;
      m.transparent = orig.transparent;
      m.opacity = orig.opacity;
      if ("metalness" in m && orig.metalness != null) {
        m.metalness = orig.metalness;
        m.roughness = orig.roughness;
      }
      if (m.polygonOffset !== undefined) {
        m.polygonOffset = orig.polygonOffset;
        m.polygonOffsetFactor = orig.polygonOffsetFactor;
      }
      if (m.userData && m.userData._sakNoTex) {
        m.userData._sakNoTex = false;
        m.map = m.userData._sakMap || null;
        m.userData._sakMap = null;
        m.needsUpdate = true;
      }
      if (m.userData && m.userData._sakFlat) {
        m.userData._sakFlat = false;
        m.flatShading = orig.flatShading;
        m.needsUpdate = true;
      }
    } catch (_) {}
    state.orig.delete(m);
  }
  function chamsRestore(state) {
    for (const mesh of state.meshes) {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) chamsRestoreMat(state, m);
      try {
        if (mesh.userData._sakRO) { mesh.userData._sakRO = 0; mesh.renderOrder = 0; }
        if (mesh.userData._sakVis !== undefined) {
          mesh.visible = mesh.userData._sakVis;
          delete mesh.userData._sakVis;
        }
      } catch (_) {}
    }
    state.meshes.length = 0;
  }
  // Re-collect without flicker: restore only materials that vanished.
  function chamsRecollect(state, root, filter) {
    const tmp = [];
    chamsCollect(root, tmp, filter);
    const seen = new Set();
    for (const mesh of tmp) {
      const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
      for (const m of mats) if (m) seen.add(m);
    }
    for (const m of [...state.orig.keys()]) if (!seen.has(m)) chamsRestoreMat(state, m);
    state.meshes = tmp;
  }
  function chamsSide(state, root, filter, enable, opts, hide, now, firing) {
    const scanMs = Math.max(250, chNum(settings.chamsScan, 2) * 1000);
    if ((enable || hide) && root) {
      if (state.root !== root || now - (state.scannedAt || 0) > scanMs) {
        if (state.applied && state.root === root) chamsRecollect(state, root, filter);
        else {
          if (state.applied) chamsRestore(state);
          chamsCollect(root, state.meshes, filter);
        }
        state.root = root;
        state.scannedAt = now;
      }
      for (const mesh of state.meshes) {
        if (opts.xray) {
          if (mesh.userData._sakRO !== 999) { mesh.userData._sakRO = 999; mesh.renderOrder = 999; }
        } else if (mesh.userData._sakRO) {
          mesh.userData._sakRO = 0;
          mesh.renderOrder = 0;
        }
        if (hide) {
          if (mesh.visible !== false) {
            if (mesh.userData._sakVis === undefined) mesh.userData._sakVis = mesh.visible;
            mesh.visible = false;
          }
          continue;
        } else if (mesh.userData._sakVis !== undefined) {
          mesh.visible = mesh.userData._sakVis;
          delete mesh.userData._sakVis;
        }
        if (!enable) continue;
        const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        for (const m of mats) chamsApplyMat(m, state, opts, now, firing);
      }
      state.applied = true;
    } else if (state.applied) {
      chamsRestore(state);
      state.applied = false;
      state.root = null;
    }
  }
  function chamsCollect(root, store, filter) {
    store.length = 0;
    if (!root || typeof root.traverse !== "function") return;
    if (!filter) {
      root.traverse((o) => { if (o && o.isMesh) store.push(o); });
    } else {
      root.traverse((o) => { if (o && o.isMesh && filter(o)) store.push(o); });
    }
  }
  // CS2 rig: rig.arms (gloves/agent) and rig.gun (weapon) are separate.
  // Simple viewmodel: arms live in the _lhand / _offhand child meshes,
  // everything else on viewmodel.current is the weapon.
  function chamsTargets(g) {
    const rig = g && g.cs2 && g.cs2.rig;
    const vm = g && g.viewmodel;
    if (rig) {
      return {
        armRoot: rig.arms || null,
        gunRoot: rig.gun || null,
        armFilter: null,
        gunFilter: null
      };
    }
    if (vm && vm.current) {
      const armSet = new Set();
      if (Array.isArray(vm._lhand)) for (const m of vm._lhand) armSet.add(m);
      if (Array.isArray(vm._offhand)) for (const m of vm._offhand) armSet.add(m);
      return {
        armRoot: vm.current,
        gunRoot: vm.current,
        armFilter: (m) => armSet.has(m),
        gunFilter: (m) => !armSet.has(m)
      };
    }
    return { armRoot: null, gunRoot: null, armFilter: null, gunFilter: null };
  }
  // ── Viewmodel pose (position / rotation offsets + camera FOV + motion) ──
  // Offsets are applied inside a wrapper around the game's own viewmodel
  // update, so they land after its per-frame positioning (order-safe) and are
  // removed cleanly with the original function when toggled off.
  var vmStore = new WeakMap();
  function tickViewmodel(g) {
    const vm = g && g.viewmodel;
    if (!vm) return;
    let st = null;
    try { st = vmStore.get(vm); } catch (_) { st = null; }
    if (!settings.vmOn) {
      if (st) {
        try {
          if (st.wrapped && st.wrapper && vm.update === st.wrapper) vm.update = st.origUpdate;
          const cam = vm.camera;
          if (st.fov != null && cam && isFinite(cam.fov)) {
            cam.fov = st.fov;
            if (typeof cam.updateProjectionMatrix === "function") cam.updateProjectionMatrix();
          }
        } catch (_) {}
        try { vmStore.delete(vm); } catch (_) {}
      }
      return;
    }
    if (!st) {
      st = { origUpdate: null, wrapper: null, wrapped: false, fov: null };
      try {
        if (vm.camera && isFinite(vm.camera.fov)) st.fov = vm.camera.fov;
      } catch (_) {}
      vmStore.set(vm, st);
    }
    // Motion scales: damp the game's spring state before its update runs.
    try {
      const kick = chNum(settings.vmKick, 100) / 100;
      if (kick < 1) {
        if (isFinite(vm.kickZ)) vm.kickZ *= kick;
        if (isFinite(vm.kickRX)) vm.kickRX *= kick;
      }
      const bob = chNum(settings.vmBob, 100) / 100;
      if (bob < 1) {
        if (isFinite(vm.bobAmt)) vm.bobAmt *= bob;
        if (isFinite(vm._bobA)) vm._bobA *= bob;
      }
      const sway = chNum(settings.vmSway, 100) / 100;
      if (sway < 1 && vm._sway) {
        if (isFinite(vm._sway.x)) vm._sway.x *= sway;
        if (isFinite(vm._sway.y)) vm._sway.y *= sway;
      }
    } catch (_) {}
    // Viewmodel camera FOV.
    try {
      const cam = vm.camera;
      if (settings.vmFovOn && cam && typeof cam.updateProjectionMatrix === "function") {
        const fov = Math.max(30, Math.min(120, chNum(settings.vmFov, st.fov ?? 70)));
        if (Math.abs(cam.fov - fov) > 0.01) {
          cam.fov = fov;
          cam.updateProjectionMatrix();
        }
      }
    } catch (_) {}
    // Post-update offsets (viewmodel node + cs2 rig nodes, set fresh so
    // weapon switches and rig swaps keep working). Only when the game
    // exposes an update function to wrap.
    if (typeof vm.update !== "function") return;
    if (!st.wrapped || vm.update !== st.wrapper) {
      try {
        const orig = vm.update.bind(vm);
        const wrapper = function (t, ...rest) {
          const r = orig(t, ...rest);
          try {
            const ox = chNum(settings.vmX, 0), oy = chNum(settings.vmY, 0), oz = chNum(settings.vmZ, 0);
            const d2r = Math.PI / 180;
            const rx = chNum(settings.vmRX, 0) * d2r;
            const ry = chNum(settings.vmRY, 0) * d2r;
            const rz = chNum(settings.vmRZ, 0) * d2r;
            if (ox || oy || oz || rx || ry || rz) {
              const gg = getGame();
              const nodes = [];
              if (vm.current) nodes.push(vm.current);
              const rig = gg && gg.cs2 && gg.cs2.rig;
              if (rig) {
                if (rig.arms) nodes.push(rig.arms);
                if (rig.gun) nodes.push(rig.gun);
              }
              for (const nd of nodes) {
                if (!nd || !nd.position) continue;
                nd.position.x += ox;
                nd.position.y += oy;
                nd.position.z += oz;
                if ((rx || ry || rz) && nd.rotation) {
                  nd.rotation.x += rx;
                  nd.rotation.y += ry;
                  nd.rotation.z += rz;
                }
              }
            }
            // Last word on FOV inside the game's own update flow, in case it
            // re-syncs the viewmodel camera after our per-frame write.
            if (settings.vmFovOn) {
              try {
                const cam2 = vm.camera;
                if (cam2 && typeof cam2.updateProjectionMatrix === "function") {
                  const f2 = Math.max(30, Math.min(120, chNum(settings.vmFov, 70)));
                  if (cam2.fov !== f2) {
                    cam2.fov = f2;
                    cam2.updateProjectionMatrix();
                  }
                }
              } catch (_) {}
            }
          } catch (_) {}
          return r;
        };
        st.origUpdate = vm.update;
        st.wrapper = wrapper;
        vm.update = wrapper;
        st.wrapped = true;
      } catch (_) {}
    }
  }
  function tickChams(g, now) {
    if (!g) return;
    const firing = held.has("mouse1");
    const t = chamsTargets(g);
    const matchOk = !settings.chamsMatchOnly || isPlaying(g);
    chamsSide(chams.arm, t.armRoot, t.armFilter,
      settings.armCharms && matchOk, chamsOpts("charm"), settings.armHide, now, firing);
    chamsSide(chams.gun, t.gunRoot, t.gunFilter,
      settings.gunChams && matchOk, chamsOpts("cham", "chamGlowIntensity"), settings.gunHide, now, firing);
    chamsSide(chams.knife, t.gunRoot,
      (m) => {
        if (t.gunFilter && !t.gunFilter(m)) return false;
        const mn = (m.name || "") + " " + (Array.isArray(m.material)
          ? m.material.map((x) => x && x.name).join(" ")
          : ((m.material && m.material.name) || ""));
        return /knife/i.test(mn);
      },
      settings.knifeChams && matchOk, chamsOpts("knife"), false, now, firing);
  }

  // ── Main loop ──
  var loopLast = 0;
  var overlayDirty = false;
  function loop(now) {
    requestAnimationFrame(loop);
    const dt = Math.min(0.1, (now - (loopLast || now)) / 1000);
    loopLast = now;
    const g = getGame();

    // Dev features run even without a live game object (cases live in the menu)
    if (devUnlocked) {
      hookInventory();
      hookCases();
      tickCoins();
      tickAutoCases();
      tickCaseAnimation();
      tickPerformance();
      tickAnimations();
    }

    if (!g) return;

    worldTick(g);
    tickChams(g, now);
    tickViewmodel(g);
    tickGameCrosshair();
    tickMotionBlur(g);

    const inMatch = liveMatch(g);

    // Skip the fullscreen clear + draw entirely when nothing is visible.
    // With an uncapped frame rate this loop can spin at 500+ fps, and a
    // fullscreen clearRect every one of those frames alone can saturate the
    // compositor — the window stutters while game logic stays smooth.
    const playing = isPlaying(g);
    const overlayActive =
      (settings.keystrokes && playing) ||
      (settings.crosshair && (playing || settings.chInLobby)) ||
      (devUnlocked && settings.fpsCounter);
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
    if (settings.crosshair && (isPlaying(g) || settings.chInLobby)) drawCrosshair(rect, now, dt, g);
    if (devUnlocked && settings.fpsCounter) {
      drawFps(rect, now);
    }
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
    beta: '<path d="M9 3h6M10 3v6l-5.2 9.4A2 2 0 0 0 6.6 21h10.8a2 2 0 0 0 1.8-2.6L14 9V3"/><path d="M7.5 15h9"/>',
    charms: '<path d="M12 2c1.66 0 3 .67 3 1.5V7h2v5l5 5v4L21 7c0-1.1-.9-2-2-2h-5V3.5C14 .67 13.34 2 12 2zM8 5c0-1.1.9-2 2-2h2v5c0 1.1-.9 2-2 2H8V5zm4 10c0-1.1.9-2 2-2h2v5c0-1.1-.9-2-2-2h-2v5z"/>',
    chams: '<path d="M6 2c-3.3 0-6 2.7-6 6v10c0 3.3 2.7 6 6 6h4c3.3 0 6-2.7 6-6V8c0-3.3-2.7-6-6-6H6zm2 2v4h12V8H8zM8 4v12h8V4H8z"/>',
    cross: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>'
  };
  var CATEGORIES = [
    { id: "hud", label: "HUD", icon: ICONS.hud },
    { id: "world", label: "World", icon: ICONS.world },
    { id: "chams", label: "Chams", icon: ICONS.chams },
    { id: "crosshair", label: "Cross", icon: ICONS.cross }
  ];
  if (devUnlocked) CATEGORIES.push({ id: "dev", label: "Dev", icon: ICONS.dev });
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

  // ── Custom crosshair drawer (pixel grid + freehand) ──
  function chLoadGrid() {
    const g = new Array(CHDRAW_N * CHDRAW_N).fill(0);
    const s = settings.chPixels || "";
    for (let i = 0; i < g.length && i < s.length; i++) g[i] = s[i] === "1" ? 1 : 0;
    return g;
  }
  function chLineCells(x0, y0, x1, y1, fn) {
    const dx = Math.abs(x1 - x0), dy = -Math.abs(y1 - y0);
    const sx = x0 < x1 ? 1 : -1, sy = y0 < y1 ? 1 : -1;
    let err = dx + dy, x = x0, y = y0;
    for (;;) {
      fn(x, y);
      if (x === x1 && y === y1) break;
      const e2 = 2 * err;
      if (e2 >= dy) { err += dy; x += sx; }
      if (e2 <= dx) { err += dx; y += sy; }
    }
  }
  function pixelEditor() {
    const N = CHDRAW_N, CELL = 10;
    const wrap = document.createElement("div");
    wrap.className = "sk-draw";
    const cv = document.createElement("canvas");
    cv.width = N * CELL; cv.height = N * CELL;
    cv.className = "sk-drawcv";
    const g2d = cv.getContext("2d");
    let grid = chLoadGrid();
    const saveGrid = () => { settings.chPixels = grid.map((v) => v ? "1" : "0").join(""); save(); };
    const render = () => {
      g2d.clearRect(0, 0, cv.width, cv.height);
      g2d.fillStyle = "#101018";
      g2d.fillRect(0, 0, cv.width, cv.height);
      g2d.fillStyle = settings.chColor || "#ff6b9d";
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        if (grid[y * N + x]) g2d.fillRect(x * CELL, y * CELL, CELL, CELL);
      }
      g2d.strokeStyle = "rgba(255,255,255,0.07)";
      g2d.lineWidth = 1;
      g2d.beginPath();
      for (let i = 1; i < N; i++) {
        g2d.moveTo(i * CELL + 0.5, 0); g2d.lineTo(i * CELL + 0.5, cv.height);
        g2d.moveTo(0, i * CELL + 0.5); g2d.lineTo(cv.width, i * CELL + 0.5);
      }
      g2d.stroke();
      g2d.strokeStyle = "rgba(255,107,157,0.4)";
      g2d.beginPath();
      g2d.moveTo(cv.width / 2 + 0.5, 0); g2d.lineTo(cv.width / 2 + 0.5, cv.height);
      g2d.moveTo(0, cv.height / 2 + 0.5); g2d.lineTo(cv.width, cv.height / 2 + 0.5);
      g2d.stroke();
    };
    const mirror = (x, y) => {
      const pts = [[x, y]];
      if (settings.chMirrorX) pts.push([N - 1 - x, y]);
      if (settings.chMirrorY) pts.push([x, N - 1 - y]);
      if (settings.chMirrorX && settings.chMirrorY) pts.push([N - 1 - x, N - 1 - y]);
      return pts;
    };
    const inGrid = (x, y) => x >= 0 && y >= 0 && x < N && y < N;
    const applyPts = (x, y, v) => {
      for (const [px, py] of mirror(x, y)) if (inGrid(px, py)) grid[py * N + px] = v;
    };
    let down = false, erase = false, val = 1, last = null;
    const cellOf = (e) => {
      const r = cv.getBoundingClientRect();
      return [
        Math.floor((e.clientX - r.left) / r.width * N),
        Math.floor((e.clientY - r.top) / r.height * N)
      ];
    };
    cv.addEventListener("contextmenu", (e) => e.preventDefault());
    cv.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      try { cv.setPointerCapture(e.pointerId); } catch (_) {}
      down = true; erase = e.button === 2;
      const [x, y] = cellOf(e);
      last = [x, y];
      if ((settings.chDrawMode || "pixels") === "pixels" && !erase) {
        val = inGrid(x, y) && grid[y * N + x] ? 0 : 1;
        applyPts(x, y, val);
      } else {
        val = erase ? 0 : 1;
        applyPts(x, y, val);
      }
      saveGrid(); render();
    });
    cv.addEventListener("pointermove", (e) => {
      if (!down) return;
      e.preventDefault();
      const [x, y] = cellOf(e);
      if (last && (x !== last[0] || y !== last[1])) {
        chLineCells(last[0], last[1], x, y, (lx, ly) => applyPts(lx, ly, val));
        last = [x, y];
        saveGrid(); render();
      }
    });
    const up = () => { down = false; last = null; };
    cv.addEventListener("pointerup", up);
    cv.addEventListener("pointercancel", up);
    const bar = document.createElement("div");
    bar.className = "sk-drawbar";
    const clear = document.createElement("button");
    clear.type = "button"; clear.className = "sk-btn sk-mini"; clear.textContent = "Clear";
    clear.onclick = () => { grid = new Array(N * N).fill(0); saveGrid(); render(); };
    bar.appendChild(clear);
    wrap.append(cv, bar);
    render();
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
        row("Free mouse on open", "Unlock cursor without pausing", toggleSwitch(settings.menuMouse !== false, (v) => { settings.menuMouse = v; save(); })),
        row("Re-lock on close", "Capture mouse when menu closes", toggleSwitch(settings.lockOnClose !== false, (v) => { settings.lockOnClose = v; save(); })),
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
      sliders: '<path d="M4 8h10M18 8h2M4 16h4M12 16h8"/><circle cx="16" cy="8" r="2"/><circle cx="10" cy="16" r="2"/>',
      charms: '<path d="M6 21 21 6l-3-3L3 18l3 3z"/><path d="M14 5l3 3"/>',
      chams: '<path d="M12 3l9 5-9 5-9-5 9-5z"/><path d="M3 13l9 5 9-5"/>',
      target: '<circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="1.5"/>',
      move: '<path d="M12 2v20M2 12h20"/><path d="M12 2 9 5M12 2l3 3M12 22l-3-3M12 22l3 3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3"/>'
    };
    var LUNAR_MODULES = [
      { tab: "hud", title: "Keystrokes", icon: "keys", get: () => settings.keystrokes, set: (v) => { settings.keystrokes = v; save(); } },
      { tab: "world", title: "Ambience", icon: "globe", get: () => settings.ambience, set: (v) => { settings.ambience = v; save(); } },
      { tab: "world", title: "Motion Blur", icon: "blur", get: () => settings.motionBlur, set: (v) => { settings.motionBlur = v; save(); } },
      { tab: "dev", title: "Launcher", icon: "gauge", toggle: null },
      { tab: "dev", title: "Texture Quality", icon: "image", get: () => settings.perfTextures, set: (v) => { settings.perfTextures = v; save(); } },
      { tab: "dev", title: "No Bloom", icon: "sun", get: () => settings.devNoBloom, set: (v) => { settings.devNoBloom = v; save(); } },
      { tab: "dev", title: "Fast Animations", icon: "bolt", get: () => settings.fastAnimations, set: (v) => { settings.fastAnimations = v; save(); } },
      { tab: "dev", title: "FPS Counter", icon: "trend", get: () => settings.fpsCounter, set: (v) => { settings.fpsCounter = v; save(); } },
      { tab: "dev", title: "Free Cases", icon: "gift", get: () => settings.freeCases, set: (v) => { settings.freeCases = v; save(); } },
      { tab: "dev", title: "Auto Cases", icon: "refresh", get: () => settings.autoCases, set: (v) => { settings.autoCases = v; save(); } },
      { tab: "dev", title: "Infinite Coins", icon: "coin", get: () => settings.infiniteCoins, set: (v) => { settings.infiniteCoins = v; save(); } },
      { tab: "dev", title: "Case Odds", icon: "dice", get: () => settings.caseOdds, set: (v) => { settings.caseOdds = v; save(); } },
      { tab: "dev", title: "Give Item", icon: "plus", toggle: null },
      { tab: "chams", title: "Arm Chams", icon: "charms", get: () => settings.armCharms, set: (v) => { settings.armCharms = v; save(); } },
      { tab: "chams", title: "Gun Chams", icon: "chams", get: () => settings.gunChams, set: (v) => { settings.gunChams = v; save(); } },
      { tab: "chams", title: "Knife Chams", icon: "dice", get: () => settings.knifeChams, set: (v) => { settings.knifeChams = v; save(); } },
      { tab: "chams", title: "Viewmodel", icon: "gauge", get: () => !settings.gunHide || !settings.armHide, set: (v) => { settings.gunHide = !v; settings.armHide = !v; save(); } },
      { tab: "chams", title: "Viewmodel Pose", icon: "move", get: () => settings.vmOn, set: (v) => { settings.vmOn = v; save(); } },
      { tab: "crosshair", title: "Crosshair", icon: "target", get: () => settings.crosshair, set: (v) => { settings.crosshair = v; save(); } },
      { tab: "crosshair", title: "Dynamics", icon: "trend", get: () => settings.chDynamic, set: (v) => { settings.chDynamic = v; save(); } },
      { tab: "crosshair", title: "Animation", icon: "refresh", get: () => settings.chPulse || settings.chSpin || settings.chRainbow, set: (v) => { settings.chPulse = v; settings.chSpin = v; settings.chRainbow = v; save(); } },
      { tab: "crosshair", title: "Visibility", icon: "image", toggle: null },
      { tab: "crosshair", title: "Custom Draw", icon: "plus", toggle: null },
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
      for (const c of [...cardsFor("hud"), ...cardsFor("world"), ...cardsFor("chams"), ...cardsFor("crosshair"), ...(devUnlocked ? devCards() : [])]) {
        const t = c.querySelector(".sk-card-title strong");
        if (t && !pool.has(t.textContent)) pool.set(t.textContent, c);
      }
      if (betaUnlocked && !pool.has("Interface")) pool.set("Interface", interfaceCard());
      const defs = LUNAR_MODULES.filter((d) => d.tab !== "dev" || devUnlocked);
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
      const cats = [["all", "All"], ["hud", "HUD"], ["world", "World"], ["chams", "Chams"], ["crosshair", "Cross"]];
      if (devUnlocked) cats.push(["dev", "Dev"]);
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
      if (id === "chams") return [
        moduleCard("Arm Chams", "Viewmodel arm chams - colored arms.", settings.armCharms,
          (v) => { settings.armCharms = v; save(); }, [
            row("Cham Type", null, selectField(settings.charmsType, [["outline", "Outline"], ["glow", "Glow"], ["both", "Both"], ["wireframe", "Wireframe"]], (v) => { settings.charmsType = v; save(); })),
            row("Color", null, colorField(settings.charmColor || "#ff6b9d", (v) => { settings.charmColor = v; save(); })),
            row("Width", "Depth push toward camera", rangeField(settings.charmWidth, 0, 10, 0.5, (v) => { settings.charmWidth = v; save(); })),
            row("Opacity", null, rangeField(settings.charmOpacity, 0.05, 1, 0.05, (v) => { settings.charmOpacity = v; save(); })),
            row("Preset", null, selectField(settings.charmPreset || "custom", [["custom", "Custom"], ["sakura", "Sakura"], ["red", "Red"], ["green", "Green"], ["blue", "Blue"], ["gold", "Gold"], ["white", "White"], ["cyan", "Cyan"]], (v) => {
              const C = { sakura: "#ff6b9d", red: "#ff3b3b", green: "#3bff6e", blue: "#3b8bff", gold: "#ffcf3b", white: "#ffffff", cyan: "#3be8ff" };
              settings.charmPreset = v;
              if (C[v]) settings.charmColor = C[v];
              save();
            })),
            row("Second color", "Glow / candy target", colorField(settings.charmColor2 || "#ffb3c6", (v) => { settings.charmColor2 = v; save(); })),
            row("Two-tone", "Emissive uses second color", toggleSwitch(settings.charmTwoTone, (v) => { settings.charmTwoTone = v; save(); })),
            row("Glow", null, rangeField(settings.charmGlow ?? 0.6, 0, 2, 0.1, (v) => { settings.charmGlow = v; save(); })),
            row("Rainbow", "Animated hue cycle", toggleSwitch(settings.charmRainbow, (v) => { settings.charmRainbow = v; save(); })),
            row("Rainbow speed", "Degrees / second", rangeField(settings.charmRainbowSpd, 10, 360, 10, (v) => { settings.charmRainbowSpd = v; save(); })),
            row("Pulse", "Breathe the glow", toggleSwitch(settings.charmPulse, (v) => { settings.charmPulse = v; save(); })),
            row("Pulse speed", null, rangeField(settings.charmPulseSpd, 0.5, 10, 0.5, (v) => { settings.charmPulseSpd = v; save(); })),
            row("Pulse amount", null, rangeField(settings.charmPulseAmt ?? 0.4, 0, 1.5, 0.05, (v) => { settings.charmPulseAmt = v; save(); })),
            row("Shimmer", "Breathe the opacity", toggleSwitch(settings.charmShimmer, (v) => { settings.charmShimmer = v; save(); })),
            row("Candy", "Morph between both colors", toggleSwitch(settings.charmCandy, (v) => { settings.charmCandy = v; save(); })),
            row("Candy speed", "Morphs / second", rangeField(settings.charmCandySpd, 0.2, 8, 0.2, (v) => { settings.charmCandySpd = v; save(); })),
            row("Fullbright", "Ignore scene lighting", toggleSwitch(settings.charmFull, (v) => { settings.charmFull = v; save(); })),
            row("Metallic", "Chrome-like finish", toggleSwitch(settings.charmMetal, (v) => { settings.charmMetal = v; save(); })),
            row("Flat", "Faceted low-poly look", toggleSwitch(settings.charmFlat, (v) => { settings.charmFlat = v; save(); })),
            row("X-ray", "Draw on top of walls", toggleSwitch(settings.charmXray, (v) => { settings.charmXray = v; save(); })),
            row("Ghost", "No depth write", toggleSwitch(settings.charmGhost, (v) => { settings.charmGhost = v; save(); })),
            row("Backside", "Hollow inside-out look", toggleSwitch(settings.charmBack, (v) => { settings.charmBack = v; save(); })),
            row("No texture", "Flat color, no skin detail", toggleSwitch(settings.charmNoTex, (v) => { settings.charmNoTex = v; save(); })),
            row("Brightness", null, rangeField(settings.charmBright ?? 1, 0.2, 2, 0.05, (v) => { settings.charmBright = v; save(); })),
            row("Fire flash", "Flash color while shooting", toggleSwitch(settings.charmFire, (v) => { settings.charmFire = v; save(); })),
            row("Fire color", null, colorField(settings.charmFireCol || "#ffffff", (v) => { settings.charmFireCol = v; save(); }))
          ]),
        moduleCard("Gun Chams", "Weapon chams - colored weapon.", settings.gunChams,
          (v) => { settings.gunChams = v; save(); }, [
            row("Cham Type", null, selectField(settings.chamType, [["outline", "Outline"], ["glow", "Glow"], ["both", "Both"], ["wireframe", "Wireframe"]], (v) => { settings.chamType = v; save(); })),
            row("Color", null, colorField(settings.chamColor || "#ff6b9d", (v) => { settings.chamColor = v; save(); })),
            row("Width", "Depth push toward camera", rangeField(settings.chamWidth, 0, 10, 0.5, (v) => { settings.chamWidth = v; save(); })),
            row("Opacity", null, rangeField(settings.chamOpacity, 0.05, 1, 0.05, (v) => { settings.chamOpacity = v; save(); })),
            row("Glow Intensity", null, rangeField(settings.chamGlowIntensity, 0, 2, 0.1, (v) => { settings.chamGlowIntensity = v; save(); })),
            row("Preset", null, selectField(settings.chamPreset || "custom", [["custom", "Custom"], ["sakura", "Sakura"], ["red", "Red"], ["green", "Green"], ["blue", "Blue"], ["gold", "Gold"], ["white", "White"], ["cyan", "Cyan"]], (v) => {
              const C = { sakura: "#ff6b9d", red: "#ff3b3b", green: "#3bff6e", blue: "#3b8bff", gold: "#ffcf3b", white: "#ffffff", cyan: "#3be8ff" };
              settings.chamPreset = v;
              if (C[v]) settings.chamColor = C[v];
              save();
            })),
            row("Second color", "Glow / candy target", colorField(settings.chamColor2 || "#ffb3c6", (v) => { settings.chamColor2 = v; save(); })),
            row("Two-tone", "Emissive uses second color", toggleSwitch(settings.chamTwoTone, (v) => { settings.chamTwoTone = v; save(); })),
            row("Rainbow", "Animated hue cycle", toggleSwitch(settings.chamRainbow, (v) => { settings.chamRainbow = v; save(); })),
            row("Rainbow speed", "Degrees / second", rangeField(settings.chamRainbowSpd, 10, 360, 10, (v) => { settings.chamRainbowSpd = v; save(); })),
            row("Pulse", "Breathe the glow", toggleSwitch(settings.chamPulse, (v) => { settings.chamPulse = v; save(); })),
            row("Pulse speed", null, rangeField(settings.chamPulseSpd, 0.5, 10, 0.5, (v) => { settings.chamPulseSpd = v; save(); })),
            row("Pulse amount", null, rangeField(settings.chamPulseAmt ?? 0.4, 0, 1.5, 0.05, (v) => { settings.chamPulseAmt = v; save(); })),
            row("Shimmer", "Breathe the opacity", toggleSwitch(settings.chamShimmer, (v) => { settings.chamShimmer = v; save(); })),
            row("Candy", "Morph between both colors", toggleSwitch(settings.chamCandy, (v) => { settings.chamCandy = v; save(); })),
            row("Candy speed", "Morphs / second", rangeField(settings.chamCandySpd, 0.2, 8, 0.2, (v) => { settings.chamCandySpd = v; save(); })),
            row("Fullbright", "Ignore scene lighting", toggleSwitch(settings.chamFull, (v) => { settings.chamFull = v; save(); })),
            row("Metallic", "Chrome-like finish", toggleSwitch(settings.chamMetal, (v) => { settings.chamMetal = v; save(); })),
            row("Flat", "Faceted low-poly look", toggleSwitch(settings.chamFlat, (v) => { settings.chamFlat = v; save(); })),
            row("X-ray", "Draw on top of walls", toggleSwitch(settings.chamXray, (v) => { settings.chamXray = v; save(); })),
            row("Ghost", "No depth write", toggleSwitch(settings.chamGhost, (v) => { settings.chamGhost = v; save(); })),
            row("Backside", "Hollow inside-out look", toggleSwitch(settings.chamBack, (v) => { settings.chamBack = v; save(); })),
            row("No texture", "Flat color, no skin detail", toggleSwitch(settings.chamNoTex, (v) => { settings.chamNoTex = v; save(); })),
            row("Brightness", null, rangeField(settings.chamBright ?? 1, 0.2, 2, 0.05, (v) => { settings.chamBright = v; save(); })),
            row("Fire flash", "Flash color while shooting", toggleSwitch(settings.chamFire, (v) => { settings.chamFire = v; save(); })),
            row("Fire color", null, colorField(settings.chamFireCol || "#ffffff", (v) => { settings.chamFireCol = v; save(); }))
          ]),
        moduleCard("Knife Chams", "Best-effort match on knife meshes.", settings.knifeChams,
          (v) => { settings.knifeChams = v; save(); }, [
            row("Cham Type", null, selectField(settings.knifeType || "outline", [["outline", "Outline"], ["glow", "Glow"], ["both", "Both"], ["wireframe", "Wireframe"]], (v) => { settings.knifeType = v; save(); })),
            row("Color", null, colorField(settings.knifeColor || "#ff6b9d", (v) => { settings.knifeColor = v; save(); })),
            row("Opacity", null, rangeField(settings.knifeOpacity ?? 0.5, 0.05, 1, 0.05, (v) => { settings.knifeOpacity = v; save(); })),
            row("Rainbow", "Animated hue cycle", toggleSwitch(settings.knifeRainbow, (v) => { settings.knifeRainbow = v; save(); }))
          ]),
        moduleCard("Viewmodel", "Visibility and update behaviour.", true, null, [
            row("Hide weapon", "Hide the gun meshes", toggleSwitch(settings.gunHide, (v) => { settings.gunHide = v; save(); })),
            row("Hide arms", "Hide the arm meshes", toggleSwitch(settings.armHide, (v) => { settings.armHide = v; save(); })),
            row("Match only", "Restores everything outside matches", toggleSwitch(settings.chamsMatchOnly !== false, (v) => { settings.chamsMatchOnly = v; save(); })),
            row("Rescan", "Recheck meshes every N seconds", rangeField(settings.chamsScan ?? 2, 0.5, 10, 0.5, (v) => { settings.chamsScan = v; save(); }))
          ]),
        moduleCard("Viewmodel Pose", "Move the gun around in first person.", settings.vmOn,
          (v) => { settings.vmOn = v; save(); }, [
            row("Offset X", "Right (+) / left (-)", rangeField(settings.vmX ?? 0, -0.5, 0.5, 0.01, (v) => { settings.vmX = v; save(); })),
            row("Offset Y", "Up (+) / down (-)", rangeField(settings.vmY ?? 0, -0.5, 0.5, 0.01, (v) => { settings.vmY = v; save(); })),
            row("Offset Z", "Toward (+) / away (-)", rangeField(settings.vmZ ?? 0, -0.5, 0.5, 0.01, (v) => { settings.vmZ = v; save(); })),
            row("Tilt X", "Degrees", rangeField(settings.vmRX ?? 0, -15, 15, 0.5, (v) => { settings.vmRX = v; save(); })),
            row("Tilt Y", "Degrees", rangeField(settings.vmRY ?? 0, -15, 15, 0.5, (v) => { settings.vmRY = v; save(); })),
            row("Roll", "Degrees", rangeField(settings.vmRZ ?? 0, -15, 15, 0.5, (v) => { settings.vmRZ = v; save(); })),
            row("Custom FOV", "Own camera zoom", toggleSwitch(settings.vmFovOn, (v) => { settings.vmFovOn = v; save(); })),
            row("FOV value", null, rangeField(settings.vmFov ?? 70, 30, 120, 1, (v) => { settings.vmFov = v; save(); })),
            row("Kick", "Recoil kick percent", rangeField(settings.vmKick ?? 100, 0, 100, 5, (v) => { settings.vmKick = v; save(); })),
            row("Bob", "Walk bob percent", rangeField(settings.vmBob ?? 100, 0, 100, 5, (v) => { settings.vmBob = v; save(); })),
            row("Sway", "Look sway percent", rangeField(settings.vmSway ?? 100, 0, 100, 5, (v) => { settings.vmSway = v; save(); })),
            row("Reset pose", "Zero offsets, rotation and FOV", actionBtn("Reset", () => {
              Object.assign(settings, { vmX: 0, vmY: 0, vmZ: 0, vmRX: 0, vmRY: 0, vmRZ: 0, vmFovOn: false });
              save();
              rebuildPanel();
            }))
          ])
      ];
      if (id === "crosshair") {
        const styles = [["cross", "Cross"], ["dot", "Dot"], ["circle", "Circle"], ["crossdot", "Cross + Dot"], ["x", "X"], ["t", "T"], ["square", "Square"], ["diamond", "Diamond"], ["chevron", "Chevron"], ["ringdot", "Ring + Dot"], ["custom", "Custom Draw"]];
        const presets = [["custom", "Custom"], ["def", "Default"], ["cs", "CS 1.6"], ["val", "Valorant"], ["dot", "Dot only"], ["circ", "Circle"], ["chev", "Chevron"]];
        return [
          moduleCard("Crosshair", "Overlay crosshair drawn at screen center.", settings.crosshair,
            (v) => { settings.crosshair = v; save(); }, [
              row("Preset", null, selectField(settings.chPreset, presets, (v) => { chApplyPreset(v); rebuildPanel(); })),
              row("Style", null, selectField(settings.chStyle, styles, (v) => { settings.chStyle = v; settings.chPreset = "custom"; save(); })),
              row("Color", null, colorField(settings.chColor || "#ffffff", (v) => { settings.chColor = v; settings.chPreset = "custom"; save(); })),
              row("Dot color", null, colorField(settings.chDotColor || "#ffffff", (v) => { settings.chDotColor = v; settings.chPreset = "custom"; save(); })),
              row("Length", null, rangeField(settings.chLen, 2, 30, 0.5, (v) => { settings.chLen = v; settings.chPreset = "custom"; save(); })),
              row("Side length", "Horizontal arms multiplier", rangeField(settings.chLenH, 0.3, 2, 0.05, (v) => { settings.chLenH = v; settings.chPreset = "custom"; save(); })),
              row("Vertical length", "Top / bottom arms multiplier", rangeField(settings.chLenV, 0.3, 2, 0.05, (v) => { settings.chLenV = v; settings.chPreset = "custom"; save(); })),
              row("Thickness", null, rangeField(settings.chThick, 1, 8, 0.5, (v) => { settings.chThick = v; settings.chPreset = "custom"; save(); })),
              row("Gap", null, rangeField(settings.chGap, 0, 24, 0.5, (v) => { settings.chGap = v; settings.chPreset = "custom"; save(); })),
              row("Vertical gap", "Top / bottom arms gap", rangeField(settings.chGapY, 0, 24, 0.5, (v) => { settings.chGapY = v; settings.chPreset = "custom"; save(); })),
              row("Center dot", "Dot on line styles", toggleSwitch(settings.chDot, (v) => { settings.chDot = v; save(); })),
              row("Dot size", null, rangeField(settings.chDotSize, 1, 8, 0.5, (v) => { settings.chDotSize = v; save(); })),
              row("Outline", null, toggleSwitch(settings.chOutline, (v) => { settings.chOutline = v; save(); })),
              row("Outline color", null, colorField(settings.chOutlineColor || "#000000", (v) => { settings.chOutlineColor = v; save(); })),
              row("Opacity", null, rangeField(settings.chOpacity, 0.1, 1, 0.05, (v) => { settings.chOpacity = v; save(); }))
            ]),
          moduleCard("Dynamics", "Gap reacts to movement, firing and ADS.", settings.chDynamic,
            (v) => { settings.chDynamic = v; save(); }, [
              row("Move spread", null, rangeField(settings.chMoveAmt, 0, 20, 0.5, (v) => { settings.chMoveAmt = v; save(); })),
              row("Fire kick", "Expand while shooting", toggleSwitch(settings.chFireKick, (v) => { settings.chFireKick = v; save(); })),
              row("Kick amount", null, rangeField(settings.chKickAmt, 0, 24, 0.5, (v) => { settings.chKickAmt = v; save(); })),
              row("Recovery", "How fast kick settles", rangeField(settings.chRecover, 1, 10, 0.5, (v) => { settings.chRecover = v; save(); })),
              row("Expansion cap", null, rangeField(settings.chExpandCap, 0, 40, 1, (v) => { settings.chExpandCap = v; save(); })),
              row("Spread source", "Game cone reads live inaccuracy", selectField(settings.chSpreadSrc || "auto", [["auto", "Auto"], ["game", "Game cone"], ["synth", "Synthetic"]], (v) => { settings.chSpreadSrc = v; save(); })),
              row("Cone scale", null, rangeField(settings.chSpreadScale ?? 1, 0, 3, 0.1, (v) => { settings.chSpreadScale = v; save(); })),
              row("Cone cap", null, rangeField(settings.chSpreadCap ?? 40, 0, 60, 1, (v) => { settings.chSpreadCap = v; save(); })),
              row("ADS tighten", "Contract while RMB held", toggleSwitch(settings.chAds, (v) => { settings.chAds = v; save(); })),
              row("ADS amount", null, rangeField(settings.chAdsAmt, 0, 0.8, 0.05, (v) => { settings.chAdsAmt = v; save(); })),
              row("Scoped size", "Size multiplier on RMB", rangeField(settings.chScopeMult, 0.5, 1.5, 0.05, (v) => { settings.chScopeMult = v; save(); })),
              row("Crouch tighten", "Contract while Ctrl held", toggleSwitch(settings.chCtrlT, (v) => { settings.chCtrlT = v; save(); })),
              row("Crouch amount", null, rangeField(settings.chCtrlAmt, 0, 0.8, 0.05, (v) => { settings.chCtrlAmt = v; save(); })),
              row("Hide on RMB", null, toggleSwitch(settings.chScopeHide, (v) => { settings.chScopeHide = v; save(); })),
              row("Outer lines", "Second set of arms", toggleSwitch(settings.chOuter, (v) => { settings.chOuter = v; save(); })),
              row("Outer gap", null, rangeField(settings.chOuterGap, 0, 20, 0.5, (v) => { settings.chOuterGap = v; save(); })),
              row("Outer length", null, rangeField(settings.chOuterLen, 2, 24, 0.5, (v) => { settings.chOuterLen = v; save(); }))
            ]),
          moduleCard("Animation", "Idle motion and fire feedback.", settings.chPulse || settings.chSpin || settings.chRainbow,
            (v) => { settings.chPulse = v; settings.chSpin = v; settings.chRainbow = v; save(); rebuildPanel(); }, [
              row("Breathe", "Sine scale pulse", toggleSwitch(settings.chPulse, (v) => { settings.chPulse = v; save(); })),
              row("Breathe amount", null, rangeField(settings.chPulseAmt, 0, 0.5, 0.01, (v) => { settings.chPulseAmt = v; save(); })),
              row("Breathe speed", null, rangeField(settings.chPulseSpeed, 0.5, 10, 0.5, (v) => { settings.chPulseSpeed = v; save(); })),
              row("Spin", "Rotate around center", toggleSwitch(settings.chSpin, (v) => { settings.chSpin = v; save(); })),
              row("Spin speed", "Radians / second", rangeField(settings.chSpinSpeed, -6, 6, 0.5, (v) => { settings.chSpinSpeed = v; save(); })),
              row("Rainbow", null, toggleSwitch(settings.chRainbow, (v) => { settings.chRainbow = v; save(); })),
              row("Rainbow speed", "Degrees / second", rangeField(settings.chRainbowSpeed, 10, 360, 10, (v) => { settings.chRainbowSpeed = v; save(); })),
              row("Fire flash", "Flash color on shoot", toggleSwitch(settings.chFlash, (v) => { settings.chFlash = v; save(); })),
              row("Flash color", null, colorField(settings.chFlashColor || "#ff6b9d", (v) => { settings.chFlashColor = v; save(); })),
              row("Wobble", "Horizontal drift", toggleSwitch(settings.chWobble, (v) => { settings.chWobble = v; save(); })),
              row("Wobble amount", null, rangeField(settings.chWobbleAmt, 0, 8, 0.5, (v) => { settings.chWobbleAmt = v; save(); })),
              row("Fire X", "X flash on shoot", toggleSwitch(settings.chFireX, (v) => { settings.chFireX = v; save(); })),
              row("Fire X size", null, rangeField(settings.chFireXSize, 4, 30, 1, (v) => { settings.chFireXSize = v; save(); }))
            ]),
          moduleCard("Visibility", "Where and when it draws.", true, null, [
              row("Offset X", null, rangeField(settings.chOffX, -150, 150, 1, (v) => { settings.chOffX = v; save(); })),
              row("Offset Y", null, rangeField(settings.chOffY, -150, 150, 1, (v) => { settings.chOffY = v; save(); })),
              row("Glow", null, toggleSwitch(settings.chGlow, (v) => { settings.chGlow = v; save(); })),
              row("Glow amount", null, rangeField(settings.chGlowAmt, 0, 30, 1, (v) => { settings.chGlowAmt = v; save(); })),
              row("Draw in lobby", "Also outside matches", toggleSwitch(settings.chInLobby, (v) => { settings.chInLobby = v; save(); })),
              row("Hide in menu", "Hide while this menu is open", toggleSwitch(settings.chHideMenu, (v) => { settings.chHideMenu = v; save(); })),
              row("Hide game crosshair", "Hide the built-in crosshair while ours draws", toggleSwitch(settings.chHideGame !== false, (v) => { settings.chHideGame = v; save(); }))
            ]),
          moduleCard("Custom Draw", "Draw your own crosshair, then pick the Custom Draw style to use it.", true, null, [
              row("Mode", "Pixels toggles cells, free draw paints strokes", selectField(settings.chDrawMode || "pixels", [["pixels", "Pixels"], ["free", "Free draw"]], (v) => { settings.chDrawMode = v; save(); })),
              pixelEditor(),
              row("Mirror X", "Mirror left / right", toggleSwitch(settings.chMirrorX !== false, (v) => { settings.chMirrorX = v; save(); })),
              row("Mirror Y", "Mirror top / bottom", toggleSwitch(settings.chMirrorY !== false, (v) => { settings.chMirrorY = v; save(); })),
              row("Pixel size", "In-game render scale", rangeField(settings.chPxScale ?? 3, 1, 6, 1, (v) => { settings.chPxScale = v; save(); })),
              note("Left-drag paints, right-drag erases.")
            ])
        ];
      }
      if (id === "beta") return [interfaceCard()];
      if (id === "dev") return devCards();
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


    // @us-strip-start dev-cards
    function launcherCard() {
      const card = moduleCard("Launcher", "Frame-rate and GPU switches. Applies after restart.", true, null);
      const body = document.createElement("div");
      body.className = "sk-mbody";
      const bridge = window.sakuraLauncher;
      if (!bridge) {
        body.appendChild(note("Launcher bridge unavailable — running outside the app?", true));
        card.appendChild(body);
        return card;
      }
      const status = note("");
      let ls = null;
      const mk = (key, title, hint) => {
        const sw = toggleSwitch(ls[key], async (v) => {
          ls = await bridge.set({ [key]: v });
          status.textContent = "Saved — restart to apply.";
        });
        return row(title, hint, sw);
      };
      bridge.get().then(({ settings: s }) => {
        ls = s;
        body.replaceChildren(
          mk("uncapped", "Uncapped frame rate", "No frame limit, no VSync"),
          mk("highPerformanceGpu", "High-performance GPU", "Prefer the fastest card"),
          mk("runInBackground", "Run when unfocused", "Never throttle in the background"),
          mk("aggressiveGpu", "Aggressive GPU", "Rasterization + zero copy; may stutter on some drivers"),
          row("Graphics backend", "d3d11 recommended for AMD", selectField(ls.angle, [["d3d11", "Direct3D 11"], ["d3d11on12", "D3D11 on D3D12"], ["vulkan", "Vulkan"], ["gl", "OpenGL"], ["default", "Chromium default"]], async (v) => {
            ls = await bridge.set({ angle: v });
            status.textContent = "Saved — restart to apply.";
          })),
          status
        );
        const restart = document.createElement("button");
        restart.type = "button";
        restart.className = "sk-btn";
        restart.textContent = "Restart launcher";
        restart.onclick = () => bridge.restart();
        body.appendChild(restart);
      }).catch(() => {
        body.replaceChildren(note("Couldn't read launcher settings.", true));
      });
      card.appendChild(body);
      return card;
    }

    function devCards() {
      const cards = [];
      cards.push(launcherCard());
      cards.push(moduleCard("Texture Quality", "Shrinks weapon textures for more FPS headroom. Resolution stays the same.", settings.perfTextures,
        (v) => { settings.perfTextures = v; save(); }, [
          row("Gun textures", null, rangeField(settings.perfGunTex, 0.1, 1, 0.05, (v) => { settings.perfGunTex = v; save(); }))
        ]));
      cards.push(moduleCard("No Bloom", "Turns off the bloom post-effect for a cleaner, faster image.", settings.devNoBloom,
        (v) => { settings.devNoBloom = v; save(); }));
      cards.push(moduleCard("Fast Animations", "Speeds up CSS animations during rounds.", settings.fastAnimations,
        (v) => { settings.fastAnimations = v; save(); }, [
          row("Speed", null, rangeField(settings.animationSpeed, 1, 30, 1, (v) => { settings.animationSpeed = v; save(); }))
        ]));
      cards.push(moduleCard("FPS Counter", "Small FPS readout in the top-left corner.", settings.fpsCounter,
        (v) => { settings.fpsCounter = v; save(); }));
      cards.push(moduleCard("Free Cases", "Every case costs 0 coins.", settings.freeCases,
        (v) => { settings.freeCases = v; save(); }));
      cards.push(moduleCard("Auto Cases", "Clicks “open again” when it appears.", settings.autoCases,
        (v) => { settings.autoCases = v; save(); }, [
          row("Reveal speed", null, rangeField(settings.caseAnimationSpeed, 1, 8, 0.5, (v) => { settings.caseAnimationSpeed = v; save(); }))
        ]));
      cards.push(moduleCard("Infinite Coins", "Keeps your wallet at the amount below.", settings.infiniteCoins,
        (v) => { settings.infiniteCoins = v; save(); }, [
          row("Coins", null, numberField(settings.coinsTarget, 0, 1e9, 1e3, (v) => { settings.coinsTarget = Math.max(0, Math.round(v)); save(); }))
        ]));
      cards.push(caseOddsCard());
      cards.push(giveItemCard());
      return cards;
    }

    // @us-strip-end dev-cards

    function note(text, err) {
      const n = document.createElement("div");
      n.className = "sk-note" + (err ? " err" : "");
      n.textContent = text;
      return n;
    }

    // @us-strip-start case-tools
    function withCatalog(build) {
      const box = document.createElement("div");
      box.className = "sk-tool";
      const render = () => {
        box.replaceChildren();
        if (catalog.error) {
          const retry = document.createElement("button");
          retry.type = "button";
          retry.className = "sk-btn";
          retry.textContent = "Try again";
          retry.onclick = () => { catalog.error = null; loadCatalog(); };
          box.replaceChildren(note(`Catalog: ${catalog.error}`, true), retry);
        } else if (catalog.ready) {
          box.replaceChildren(...build());
        } else {
          box.replaceChildren(note("Loading the game's item catalog…"));
        }
      };
      onCatalog(render);
      loadCatalog();
      render();
      return box;
    }

    function itemButton(skin, selected, onPick) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "sk-item" + (selected ? " sel" : "");
      b.style.setProperty("--rc", rarityColor(skin));
      b.title = skin.name;
      const name = document.createElement("span");
      name.className = "sk-item-name";
      name.textContent = skin.name;
      const small = document.createElement("small");
      small.textContent = (RARITIES[rarityOf(skin)] || {}).name || "";
      b.append(name, small);
      b.onclick = (e) => { e.stopPropagation(); onPick(skin); };
      return b;
    }

    function caseOddsCard() {
      const card = moduleCard("Case Odds", "Click an item to guarantee it from that case.", settings.caseOdds,
        (v) => { settings.caseOdds = v; save(); });
      const body = document.createElement("div");
      body.className = "sk-mbody";
      body.appendChild(withCatalog(() => {
        const caseSel = selectField(
          catalog.cases[0]?.id || "",
          catalog.cases.map((c) => [c.id, `${c.name} · ${c.price}`]),
          () => renderCase()
        );
        const grid = document.createElement("div");
        grid.className = "sk-items";
        const info = note("");
        const fallback = selectField(settings.coFallback, [["off", "Normal odds"], ["gold", "Always knife / gloves"]], (v) => { settings.coFallback = v; save(); });
        const order = ["gold", "covert", "classified", "restricted", "milspec", "industrial", "consumer"];
        function renderCase() {
          const c = catalog.cases.find((x) => x.id === caseSel.value) || catalog.cases[0];
          if (!c) return;
          const pick = getPicks()[c.id];
          const skins = c.itemIds.map((id) => catalog.byId.get(id)).filter(Boolean).sort((a, b) => order.indexOf(rarityOf(a)) - order.indexOf(rarityOf(b)));
          grid.replaceChildren(...skins.map((s) => itemButton(s, s.id === pick, (sk) => {
            setPick(c.id, sk.id === pick ? null : sk.id);
            renderCase();
          })));
          const ps = pick && catalog.byId.get(pick);
          info.textContent = ps ? `Guaranteed from ${c.name}: ${ps.name}` : `${c.name}: no pick — uses the fallback.`;
        }
        renderCase();
        return [
          row("Case", null, caseSel),
          grid,
          info,
          row("Cases without a pick", null, fallback)
        ];
      }));
      card.appendChild(body);
      return card;
    }

    function giveItemCard() {
      const card = moduleCard("Give Item", "Add any skin, knife or gloves to your inventory.", true, null);
      const body = document.createElement("div");
      body.className = "sk-mbody";
      body.appendChild(withCatalog(() => {
        let selected = null;
        const search = document.createElement("input");
        search.className = "sk-field";
        search.type = "search";
        search.placeholder = "Search skins, knives, gloves…";
        const kind = selectField("all", [["all", "Everything"], ["gold", "Knives & gloves"], ["covert", "Covert"], ["classified", "Classified"], ["restricted", "Restricted"], ["milspec", "Mil-Spec"]], () => render());
        const grid = document.createElement("div");
        grid.className = "sk-items";
        const chosen = note("Pick an item.");
        const status = note(linked() ? "Inventory linked: changes apply instantly." : "Inventory not linked yet: open any case once first.");
        const reveal = toggleSwitch(settings.giveReveal, (v) => { settings.giveReveal = v; save(); });
        function render() {
          const q = search.value.trim().toLowerCase(), k = kind.value;
          const list = catalog.skins.filter((s) => (k === "all" || rarityOf(s) === k) && (!q || s.name.toLowerCase().includes(q))).slice(0, 60);
          grid.replaceChildren(...list.length ? list.map((s) => itemButton(s, s.id === selected?.id, (sk) => {
            selected = sk;
            chosen.textContent = `Selected: ${sk.name}`;
            chosen.style.color = rarityColor(sk);
            render();
          })) : [note("Nothing matches.")]);
        }
        search.addEventListener("input", render);
        render();
        const give = document.createElement("button");
        give.type = "button";
        give.className = "sk-btn";
        give.textContent = "Give item";
        give.onclick = () => {
          if (!selected) {
            status.textContent = "Pick an item first.";
            status.classList.add("err");
            return;
          }
          const r = giveItem(getGame(), selected.id);
          status.textContent = r.msg;
          status.classList.toggle("err", !r.ok);
        };
        return [
          search,
          kind,
          grid,
          chosen,
          give,
          row("Case reveal animation", null, reveal),
          status
        ];
      }));
      card.appendChild(body);
      return card;
    }
    // @us-strip-end case-tools

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
    // Free the mouse without pausing: the game only pauses on Esc, losing
    // pointer lock by itself just flips its input state, so exiting here
    // leaves the match running while the cursor works the menu.
    if (v && settings.menuMouse !== false) {
      try { if (document.pointerLockElement) document.exitPointerLock(); } catch (_) {}
    }
    if (!v && settings.lockOnClose !== false && !document.pointerLockElement) {
      try {
        const gg = getGame();
        const cv = (gg && gg.renderer && gg.renderer.domElement) || document.querySelector("#game canvas");
        if (cv && typeof cv.requestPointerLock === "function") {
          const p = cv.requestPointerLock();
          if (p && typeof p.catch === "function") p.catch(() => {});
        }
      } catch (_) {}
    }
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
  .sk-draw { display: flex; flex-direction: column; gap: 8px; }
  .sk-drawcv { width: 100%; max-width: 240px; aspect-ratio: 1; border-radius: 8px; cursor: crosshair; touch-action: none; box-shadow: inset 0 0 0 1px rgba(255,255,255,.08); }
  .sk-drawbar { display: flex; gap: 8px; align-items: center; }
  .sk-btn.sk-mini { padding: 5px 12px; font-size: 10.5px; }
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

  console.log("Sakura Client loaded");

  // ── Start ──
  attachInput();
  requestAnimationFrame(loop);
})();
