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
  // Single instance: newest wins, loser drops DOM + self-terminates its loop.
  var SAKURA_ID = "sakura-" + Math.random().toString(36).slice(2) + Date.now().toString(36);
  try {
    if (window.__sakuraTakeover && window.__sakuraTakeover !== SAKURA_ID) {
      const dupeUi = document.getElementById("sakura-ui");
      if (dupeUi) dupeUi.remove();
      const dupeCv = document.getElementById("sakura-overlay");
      if (dupeCv) dupeCv.remove();
    }
    window.__sakuraTakeover = SAKURA_ID;
  } catch (_) {}
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
    uiStyle: "lunar",
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
    armX: 0,
    armY: 0,
    armZ: 0,
    armHideName: "",
    // Kill banner + combat stats + scope + menu studio
    kbOn: false,
    kbStyle: "both",
    kbColor: "#ff6b9d",
    kbSize: 22,
    kbTime: 2.2,
    kbCount: 60,
    kbName: true,
    kbMulti: true,
    kbWindow: 4,
    kbPos: "top",
    scOn: false,
    scStyle: "duplex",
    scColor: "#111111",
    scThick: 3,
    scGap: 0.12,
    vmPose: "custom",
    vmInspectAuto: false,
    mnAccentP: "custom",
    mnOp: null,
    mnBlur: null,
    mnRad: null,
    mnScale: 1,
    uiMotion: true,
    infoShots: true,
    infoHits: true,
    infoAcc: true,
    // Fire FX + atmosphere (visual only — overlay canvas cosmetics)
    atTracers: false,
    trStyle: "line",
    trColor: "#ff6b9d",
    trGrad: false,
    trColor2: "#ffb3c6",
    trWidth: 2,
    trLife: 0.35,
    trOrigin: "gun",
    trGap: 0,
    trJitter: 6,
    trRainbow: false,
    trOp: 0.9,
    trRate: 45,
    trRandom: false,
    mzOn: false,
    mzColor: "#ffd9a0",
    mzSize: 90,
    mzDecay: 0.25,
    mzX: 0,
    mzY: 0,
    mzFlicker: true,
    mzPuff: false,
    imOn: false,
    imStyle: "both",
    imColor: "#ffffff",
    imHs: "#ff4040",
    imSize: 12,
    imCount: 10,
    imTime: 0.4,
    imGrav: 300,
    imRing: true,
    imFlash: false,
    wxOn: false,
    wxType: "petals",
    wxCount: 80,
    wxSize: 1,
    wxSpeed: 1,
    wxWind: 0.2,
    wxOp: 0.8,
    wxTint: "",
    wxTwinkle: false,
    wxLobby: false,
    wxSwirl: false,
    wxMode: "screen",
    wxCoverHide: true,
    moOn: false,
    moCount: 40,
    moSize: 1.5,
    moSpeed: 0.3,
    moOp: 0.5,
    moColor: "#ffd6e4",
    moDrift: 12,
    // HUD extras (visual only — overlay cosmetics)
    hudWm: false,
    wmText: "Sakura",
    wmFps: true,
    wmClock: false,
    wmKills: false,
    wmPos: "tl",
    wmSize: 12,
    wmOp: 0.9,
    wmAccent: true,
    wmBg: true,
    wmRainbow: false,
    hudFps: false,
    fpsSize: 12,
    fpsColor: "#ffb3c6",
    fpsBg: true,
    fpsPos: "tr",
    fpsGraph: false,
    fpsGraphH: 24,
    fpsGraphColor: "#ff6b9d",
    fpsAvg: false,
    hudInfo: false,
    infoClock: true,
    info24: false,
    infoDate: false,
    infoSession: true,
    infoKills: true,
    infoDeaths: true,
    infoKD: true,
    infoShots: true,
    infoHits: true,
    infoAcc: true,
    infoPos: "br",
    infoSize: 12,
    hudBars: false,
    barsPos: "bl",
    barsW: 220,
    barsH: 14,
    hpColor: "#7dff8a",
    armorColor: "#7db8f0",
    barsArmor: true,
    barsNumbers: true,
    barsBg: true,
    barsLow: true,
    barsLowAt: 30,
    hudAmmo: false,
    ammoSize: 20,
    ammoPos: "br",
    ammoReserve: true,
    ammoLow: true,
    ammoLowAt: 6,
    ammoColor: "#ffffff",
    ammoBg: true,
    // Game-native cosmetics (drive the game's own HUD, restore on disable)
    gxOn: false,
    gxPreset: "custom",
    gxColor: "#3cff5a",
    gxAlpha: 1,
    gxLen: 6,
    gxThick: 2,
    gxGap: 3,
    gxDot: false,
    gxOutline: true,
    gxOutw: 1,
    gxStyle: 0,
    gxSniper: 2,
    gcTeam: false,
    gcCT: "#7db8f0",
    gcT: "#eabe54",
    dcOn: false,
    dcOp: 0.6,
    dcColor: "",
    dcAccent: "",
    ghOn: false,
    ghColor: "#ffffff",
    ghHs: "#ff4040",
    ghSize: 1,
    daOn: false,
    daColor: "#e0342c",
    mnOn: false,
    mnColor: "",
    // Day cycle + light lab + fog lab + radar cosmetics
    wdCycle: false,
    wdTime: 12,
    wdAuto: true,
    wdSpeed: 0.25,
    wdNight: 0.7,
    wdBolt: false,
    wdBoltRate: 8,
    wdManual: false,
    wdElev: 45,
    wdAzim: 180,
    hemiOn: false,
    hemiSky: "#bcd6ff",
    hemiGround: "#4a4238",
    fogCustom: false,
    fogPreset: "thick",
    rdOn: false,
    rdSize: 1,
    rdRing: "#4a4f55",
    rdOp: 1,
    rdPos: "tl",
    rdSquare: false,
    rdHide: false,
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
    dream: { customLighting: true, lightExposure: 1.2, hemiMult: 1.4, sunTint: true, sunColor: "#ffc2f0", customSky: true, skyColor: "#f3c6ff", fogMode: "sky", colorGrade: true, gradeSaturation: 1.15, gradeBrightness: 1.08, gradeBlur: 0.6, gradeTint: 0.25, gradeTintColor: "#ff9de6", gradeVignette: 0.3 },
    desert: { customLighting: true, lightExposure: 1.1, hemiMult: 0.9, sunMult: 1.2, sunTint: true, sunColor: "#ffdf9e", customSky: true, skyColor: "#e8c88a", fogMode: "sky", colorGrade: true, gradeSaturation: 1.1, gradeContrast: 1.05, gradeHue: -8, gradeVignette: 0.25 },
    volcano: { customLighting: true, lightExposure: 1.0, hemiMult: 0.5, sunMult: 1.3, sunTint: true, sunColor: "#ff5a2a", customSky: true, skyColor: "#2b0d0d", fogMode: "sky", noTextures: true, texColor: "#4a2a2a", colorGrade: true, gradeSaturation: 1.3, gradeContrast: 1.15, gradeVignette: 0.5 },
    swamp: { customLighting: true, lightExposure: 1.0, hemiMult: 0.7, sunMult: 0.7, sunTint: true, sunColor: "#a8ff6a", customSky: true, skyColor: "#3d5a2a", fogMode: "sky", colorGrade: true, gradeSaturation: 1.1, gradeHue: -18, gradeVignette: 0.4 },
    space: { customLighting: true, lightExposure: 0.8, hemiMult: 0.3, sunMult: 0.4, sunTint: true, sunColor: "#b49aff", customSky: true, skyColor: "#050510", fogMode: "sky", noTextures: true, texColor: "#1a1a2e", colorGrade: true, gradeSaturation: 1.2, gradeContrast: 1.1, gradeVignette: 0.55 },
    candy: { customLighting: true, lightExposure: 1.25, hemiMult: 1.3, sunMult: 0.6, sunTint: true, sunColor: "#ff9de6", customSky: true, skyColor: "#ffd6f2", fogMode: "sky", colorGrade: true, gradeSaturation: 1.4, gradeBrightness: 1.06, gradeVignette: 0.25 },
    matrix: { customLighting: true, lightExposure: 1.0, hemiMult: 0.8, sunMult: 0.9, sunTint: true, sunColor: "#3bff6e", customSky: true, skyColor: "#041405", fogMode: "sky", colorGrade: true, gradeSaturation: 1.2, gradeContrast: 1.15, gradeHue: -18, gradeVignette: 0.45 },
    bloodmoon: { customLighting: true, lightExposure: 0.85, hemiMult: 0.4, sunMult: 0.9, sunTint: true, sunColor: "#ff3b3b", customSky: true, skyColor: "#1a0505", fogMode: "sky", colorGrade: true, gradeSaturation: 1.25, gradeContrast: 1.2, gradeVignette: 0.55 },
    toxic: { customLighting: true, lightExposure: 1.1, hemiMult: 1.0, sunMult: 0.9, sunTint: true, sunColor: "#c8ff2a", customSky: true, skyColor: "#3a4a08", fogMode: "sky", colorGrade: true, gradeSaturation: 1.5, gradeContrast: 1.1, gradeVignette: 0.35 },
    pastel: { customLighting: true, lightExposure: 1.25, hemiMult: 1.3, sunMult: 1.0, sunTint: true, sunColor: "#ffe0ec", customSky: true, skyColor: "#e8f4ff", fogMode: "sky", colorGrade: true, gradeSaturation: 1.05, gradeBrightness: 1.07, gradeBlur: 0.3, gradeVignette: 0.2 },
    mono: { customLighting: true, lightExposure: 1.0, hemiMult: 0.8, sunMult: 1.0, fogMode: "off", colorGrade: true, gradeSaturation: 0, gradeContrast: 1.3, gradeVignette: 0.5 },
    golden: { customLighting: true, lightExposure: 1.1, hemiMult: 0.9, sunMult: 1.3, sunTint: true, sunColor: "#ffcf6e", customSky: true, skyColor: "#ffcf8a", fogMode: "sky", colorGrade: true, gradeSaturation: 1.25, gradeContrast: 1.08, gradeHue: -8, gradeVignette: 0.3 },
    storm: { customLighting: true, lightExposure: 0.7, hemiMult: 0.5, sunMult: 0.6, sunTint: true, sunColor: "#8fa8c8", customSky: true, skyColor: "#2a3440", fogMode: "sky", colorGrade: true, gradeSaturation: 0.8, gradeContrast: 1.2, gradeVignette: 0.5 },
    abyss: { customLighting: true, lightExposure: 0.6, hemiMult: 0.25, sunMult: 0.35, sunTint: true, sunColor: "#4a7aff", customSky: true, skyColor: "#02030a", fogMode: "sky", noTextures: true, texColor: "#0a0f1e", colorGrade: true, gradeSaturation: 1.1, gradeContrast: 1.25, gradeVignette: 0.65 },
    frost: { customLighting: true, lightExposure: 1.25, hemiMult: 1.4, sunMult: 1.0, sunTint: true, sunColor: "#cfeeff", customSky: true, skyColor: "#dff2ff", fogMode: "sky", colorGrade: true, gradeSaturation: 0.9, gradeBrightness: 1.06, gradeVignette: 0.25 },
    forest: { customLighting: true, lightExposure: 1.0, hemiMult: 0.9, sunMult: 0.9, sunTint: true, sunColor: "#9fe870", customSky: true, skyColor: "#5a8a4a", fogMode: "sky", colorGrade: true, gradeSaturation: 1.15, gradeHue: -10, gradeVignette: 0.35 },
    ember: { customLighting: true, lightExposure: 1.05, hemiMult: 0.7, sunMult: 1.2, sunTint: true, sunColor: "#ff7a3c", customSky: true, skyColor: "#3a1408", fogMode: "sky", colorGrade: true, gradeSaturation: 1.3, gradeContrast: 1.12, gradeVignette: 0.45 },
    ghost: { customLighting: true, lightExposure: 1.15, hemiMult: 1.2, sunMult: 1.1, sunTint: true, sunColor: "#e8f4ff", customSky: true, skyColor: "#c8d8e8", fogMode: "sky", noTextures: true, texColor: "#b9c5d7", colorGrade: true, gradeSaturation: 0.5, gradeContrast: 1.05, gradeBrightness: 1.04, gradeVignette: 0.3 },
    royal: { customLighting: true, lightExposure: 1.0, hemiMult: 0.8, sunMult: 0.8, sunTint: true, sunColor: "#b46bff", customSky: true, skyColor: "#1e0b3d", fogMode: "sky", colorGrade: true, gradeSaturation: 1.3, gradeContrast: 1.12, gradeHue: 10, gradeVignette: 0.45 },
    copper: { customLighting: true, lightExposure: 1.05, hemiMult: 0.8, sunMult: 1.2, sunTint: true, sunColor: "#e8965a", customSky: true, skyColor: "#6b4226", fogMode: "sky", colorGrade: true, gradeSaturation: 1.2, gradeContrast: 1.1, gradeHue: -10, gradeVignette: 0.35 },
    mint: { customLighting: true, lightExposure: 1.15, hemiMult: 1.2, sunMult: 1.0, sunTint: true, sunColor: "#a8ffd6", customSky: true, skyColor: "#d6fff0", fogMode: "sky", colorGrade: true, gradeSaturation: 1.1, gradeBrightness: 1.05, gradeVignette: 0.25 }
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
  if (!betaUnlocked) { betaUnlocked = true; try { localStorage.setItem("sakura.beta.v1", "1"); } catch (_) {} }

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
  overlay.id = "sakura-overlay";
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

  // ── HUD extras (visual only — overlay canvas cosmetics) ──
  // Watermark, FPS readout + graph, clock, session timer, kill/death/K-D
  // tracker, HP/armor bars and a custom ammo counter. Kill counts come from
  // the game's own player fields; HP/ammo text from its HUD DOM. Read-only.
  var hudFpsS = { ema: 0, hist: [] };
  var hudSes = { t0: 0, kills: 0, deaths: 0, wasAlive: true, lastKills: null };
  var hpEl2 = null, armorEl = null, ammoEl = null, reserveEl = null;
  function hudInt(el) {
    if (!el || !el.isConnected) return null;
    const m = /(\d+)/.exec(el.textContent || "");
    return m ? parseInt(m[1], 10) : null;
  }
  function hudGet(id, cache) {
    let el = cache.el;
    if (!el || !el.isConnected) {
      el = document.getElementById(id);
      cache.el = el;
    }
    return el;
  }
  var hpCache = {}, armorCache = {}, ammoCache = {}, reserveCache = {};
  function hudClockStr() {
    const d = new Date();
    const p = (n) => String(n).padStart(2, "0");
    if (settings.info24) return `${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
    const h = d.getHours() % 12 || 12;
    return `${h}:${p(d.getMinutes())}:${p(d.getSeconds())}`;
  }
  function hudCorner(pos, w, h, m) {
    m = m == null ? 16 : m;
    return [pos.endsWith("r") ? size.w - m - w : m, pos[0] === "b" ? size.h - m - h : m];
  }
  function hudPill(lines, pos, fs, accentCol) {
    ctx.save();
    ctx.font = `700 ${fs}px ui-sans-serif,system-ui,sans-serif`;
    let tw = 0;
    for (const p of lines) tw = Math.max(tw, ctx.measureText(p).width);
    const pw = tw + 20, ph = lines.length * (fs + 6) + 12;
    const [x, y] = hudCorner(pos, pw, ph);
    ctx.fillStyle = "rgba(22,8,16,0.7)";
    ctx.beginPath();
    if (ctx.roundRect) ctx.roundRect(x, y, pw, ph, 8);
    else ctx.rect(x, y, pw, ph);
    ctx.fill();
    ctx.strokeStyle = "rgba(255,107,157,0.35)";
    ctx.lineWidth = 1;
    ctx.stroke();
    if (accentCol) {
      ctx.fillStyle = accentCol;
      ctx.fillRect(x + 8, y + 8, 3, ph - 16);
    }
    ctx.fillStyle = "#ffb3c6";
    ctx.textAlign = "left";
    ctx.textBaseline = "top";
    lines.forEach((p, i) => ctx.fillText(p, x + (accentCol ? 16 : 10), y + 7 + i * (fs + 6)));
    ctx.restore();
    return ph;
  }
  // ── Kill banner + combat counters (visual only, DOM reads) ──
  // Watches the game's own #killcard for elims; shots/hits counted from local
  // input + the game's hitmarker. Read-only.
  var kbEl = null, kbWasShown = false, kbT = 0, kbName = "", kbKills = [];
  var kbParts = [];
  var stShots = 0, stHits = 0, stPrevMouse = false, stHitEl = null, stHitOn = false;
  function stTrackCombat(g) {
    if (!g || !isPlaying(g)) return;
    const m = held.has("mouse1");
    if (m && !stPrevMouse) stShots++;
    stPrevMouse = m;
    if (!stHitEl || !stHitEl.isConnected) {
      try { stHitEl = document.getElementById("hitmark"); } catch (_) { stHitEl = null; }
    }
    let pop = false;
    if (stHitEl) {
      try { pop = stHitEl.classList.contains("pop") || Number(stHitEl.style.opacity || 0) > 0.05; } catch (_) {}
    }
    if (pop && !stHitOn) stHits++;
    stHitOn = pop;
  }
  function stReset() { stShots = 0; stHits = 0; }
  function tickKillBanner(rect, now, dt) {
    if (!kbEl || !kbEl.isConnected) {
      try { kbEl = document.getElementById("killcard"); } catch (_) { kbEl = null; }
    }
    let shown = false;
    if (kbEl) {
      try { shown = kbEl.classList.contains("show"); } catch (_) {}
    }
    if (shown && !kbWasShown) {
      kbT = 1;
      kbName = "";
      try {
        const nm = kbEl.querySelector(".kc-name");
        if (nm) kbName = (nm.textContent || "").trim().slice(0, 24);
      } catch (_) {}
      kbKills.push(now / 1000);
      const win = chNum(settings.kbWindow, 4);
      while (kbKills.length && now / 1000 - kbKills[0] > win) kbKills.shift();
      if ((settings.kbStyle || "both") !== "banner" && (settings.kbStyle || "both") !== "compact") {
        const n = Math.max(0, Math.min(150, Math.round(Number(settings.kbCount) || 60)));
        const cols = [settings.kbColor || "#ff6b9d", "#ffffff", "#ffd166"];
        for (let i = 0; i < n; i++) {
          kbParts.push({
            x: rect.width / 2 + (Math.random() - 0.5) * 120,
            y: rect.height * 0.22,
            vx: (Math.random() - 0.5) * 260,
            vy: -Math.random() * 260 - 60,
            rot: Math.random() * Math.PI * 2,
            vr: (Math.random() - 0.5) * 12,
            w: 4 + Math.random() * 6, h: 6 + Math.random() * 8,
            c: cols[i % cols.length], life: 1
          });
        }
      }
    }
    kbWasShown = shown;
    kbT = Math.max(0, kbT - dt / Math.max(0.5, Number(settings.kbTime) || 2.2));
    const st = settings.kbStyle || "both";
    const compact = st === "compact";
    for (let i = kbParts.length - 1; i >= 0; i--) {
      const p = kbParts[i];
      p.life -= dt / Math.max(0.5, Number(settings.kbTime) || 2.2);
      if (p.life <= 0) { kbParts.splice(i, 1); continue; }
      p.x += p.vx * dt;
      p.y += p.vy * dt;
      p.vy += 500 * dt;
      p.rot += p.vr * dt;
    }
    if (kbT <= 0.01 && !kbParts.length) return;
    const W = rect.width;
    ctx.save();
    if (st !== "confetti" && kbT > 0.01) {
      const streak = kbKills.length;
      let text = settings.kbName !== false && kbName ? `ELIMINATED ${kbName}` : "ELIMINATED";
      if (settings.kbMulti !== false && streak >= 2) {
        text = streak === 2 ? "DOUBLE KILL" : streak === 3 ? "TRIPLE KILL" : streak === 4 ? "QUAD KILL" : `RAMPAGE x${streak}`;
        if (settings.kbName !== false && kbName) text += ` — ${kbName}`;
      }
      const fs = Math.max(12, Number(settings.kbSize) || 22) * (compact ? 0.65 : 1);
      ctx.font = `800 ${fs}px ui-sans-serif,system-ui,sans-serif`;
      const tw = ctx.measureText(text).width;
      const pw = tw + 36, ph = fs + 22;
      const y = (settings.kbPos || "top") === "center" ? rect.height * 0.32 : Math.max(70, rect.height * 0.16);
      const x = W / 2 - pw / 2;
      ctx.globalAlpha = Math.min(1, kbT * 2);
      ctx.fillStyle = "rgba(22,8,16,0.78)";
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, pw, ph, 10);
      else ctx.rect(x, y, pw, ph);
      ctx.fill();
      ctx.strokeStyle = settings.kbColor || "#ff6b9d";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.fillStyle = settings.kbColor || "#ff6b9d";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, W / 2, y + ph / 2 + 1);
    }
    for (const p of kbParts) {
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life * 1.5));
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.c;
      ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      ctx.restore();
    }
    ctx.restore();
  }
  // ── Scope overlay (visual only — drawn when actually scoped) ──
  function drawScope(rect, g) {
    const W = rect.width, H = rect.height, cx = W / 2, cy = H / 2;
    const r = Math.min(W, H) * 0.42;
    const gap = r * clamp(Number(settings.scGap) ?? 0.12, 0, 0.4);
    const st = settings.scStyle || "duplex";
    const c = settings.scColor || "#111111";
    ctx.save();
    if (st !== "cross") {
      ctx.fillStyle = "#000";
      ctx.beginPath();
      ctx.rect(0, 0, W, H);
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.fill("evenodd");
      ctx.strokeStyle = c;
      ctx.lineWidth = Math.max(1, Number(settings.scThick) || 3);
      ctx.beginPath();
      ctx.arc(cx, cy, r, 0, Math.PI * 2);
      ctx.stroke();
    }
    if (st !== "ring") {
      ctx.strokeStyle = st === "dot" ? c : "#000";
      if (st === "dot") {
        ctx.fillStyle = c;
        ctx.beginPath();
        ctx.arc(cx, cy, 2.5, 0, Math.PI * 2);
        ctx.fill();
      } else {
        ctx.lineWidth = Math.max(1, (Number(settings.scThick) || 3) * 0.7);
        ctx.beginPath();
        ctx.moveTo(cx - r, cy); ctx.lineTo(cx - gap, cy);
        ctx.moveTo(cx + gap, cy); ctx.lineTo(cx + r, cy);
        ctx.moveTo(cx, cy - r); ctx.lineTo(cx, cy - gap);
        ctx.moveTo(cx, cy + gap); ctx.lineTo(cx, cy + r);
        ctx.stroke();
      }
    }
    ctx.restore();
  }

  function drawHudExtras(rect, now, dt, g) {
    const W = rect.width, H = rect.height;
    const playing = isPlaying(g);
    if (dt > 0) {
      const f = 1 / Math.max(1e-3, dt);
      hudFpsS.ema = hudFpsS.ema ? hudFpsS.ema + (f - hudFpsS.ema) * 0.06 : f;
      hudFpsS.hist.push(f);
      if (hudFpsS.hist.length > 120) hudFpsS.hist.shift();
    }
    const pl = g && g.player;
    if (playing) {
      if (!hudSes.t0) {
        hudSes.t0 = now;
        hudSes.kills = 0;
        hudSes.deaths = 0;
        hudSes.wasAlive = true;
        hudSes.lastKills = pl && isFinite(pl.kills) ? pl.kills : null;
      }
      if (pl && isFinite(pl.kills)) {
        if (hudSes.lastKills == null) hudSes.lastKills = pl.kills;
        if (pl.kills > hudSes.lastKills) hudSes.kills += pl.kills - hudSes.lastKills;
        hudSes.lastKills = pl.kills;
      }
      const alive = !pl || pl.alive !== false;
      if (hudSes.wasAlive && !alive) hudSes.deaths++;
      hudSes.wasAlive = alive;
    }
    if (settings.hudWm && playing) {
      const parts = [settings.wmText || "Sakura"];
      if (settings.wmFps) parts.push(`${Math.round(hudFpsS.ema)} FPS`);
      if (settings.wmClock) parts.push(hudClockStr());
      if (settings.wmKills) parts.push(`${hudSes.kills} K`);
      const fs = Math.max(9, Number(settings.wmSize) || 12);
      ctx.save();
      ctx.font = `700 ${fs}px ui-sans-serif,system-ui,sans-serif`;
      let tw = 0;
      for (const p of parts) tw = Math.max(tw, ctx.measureText(p).width);
      const pw = tw + 20, ph = parts.length * (fs + 6) + 12;
      const [x, y] = hudCorner(settings.wmPos || "tl", pw, ph);
      ctx.globalAlpha = clamp(Number(settings.wmOp) ?? 0.9, 0, 1);
      if (settings.wmBg !== false) {
        ctx.fillStyle = "rgba(22,8,16,0.7)";
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, pw, ph, 8);
        else ctx.rect(x, y, pw, ph);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,107,157,0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      if (settings.wmAccent !== false) {
        ctx.fillStyle = "#ff6b9d";
        ctx.fillRect(x + 8, y + 8, 3, ph - 16);
      }
      ctx.fillStyle = settings.wmRainbow ? `hsl(${(now / 4) % 360} 100% 75%)` : "#ffb3c6";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      parts.forEach((p, i) => ctx.fillText(p, x + (settings.wmAccent !== false ? 16 : 10), y + 7 + i * (fs + 6)));
      ctx.restore();
    }
    if (settings.hudFps && playing) {
      const fs = Math.max(9, Number(settings.fpsSize) || 12);
      const lines = [`${Math.round(hudFpsS.ema)} FPS`];
      if (settings.fpsAvg && hudFpsS.hist.length) {
        let sum = 0;
        for (const f of hudFpsS.hist) sum += f;
        lines.push(`avg ${Math.round(sum / hudFpsS.hist.length)}`);
      }
      const pos = settings.fpsPos || "tr";
      ctx.save();
      ctx.font = `700 ${fs}px ui-sans-serif,system-ui,sans-serif`;
      let tw = 0;
      for (const p of lines) tw = Math.max(tw, ctx.measureText(p).width);
      const pw = tw + 20, ph = lines.length * (fs + 6) + 12;
      const [x, y] = hudCorner(pos, pw, ph);
      if (settings.fpsBg !== false) {
        ctx.fillStyle = "rgba(22,8,16,0.7)";
        ctx.beginPath();
        if (ctx.roundRect) ctx.roundRect(x, y, pw, ph, 8);
        else ctx.rect(x, y, pw, ph);
        ctx.fill();
        ctx.strokeStyle = "rgba(255,107,157,0.35)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
      ctx.fillStyle = settings.fpsColor || "#ffb3c6";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      lines.forEach((p, i) => ctx.fillText(p, x + 10, y + 7 + i * (fs + 6)));
      if (settings.fpsGraph && hudFpsS.hist.length > 1) {
        const gh = Math.max(8, Number(settings.fpsGraphH) || 24);
        const gy = y + ph + 4;
        ctx.strokeStyle = settings.fpsGraphColor || "rgba(255,107,157,0.9)";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        const max = Math.max(60, ...hudFpsS.hist);
        hudFpsS.hist.forEach((f, i) => {
          const gx = x + (i / (hudFpsS.hist.length - 1)) * pw;
          const gyy = gy + gh - Math.min(1, f / max) * gh;
          if (i) ctx.lineTo(gx, gyy);
          else ctx.moveTo(gx, gyy);
        });
        ctx.stroke();
      }
      ctx.restore();
    }
    if (settings.hudInfo && playing) {
      const lines = [];
      if (settings.infoClock) lines.push(hudClockStr());
      if (settings.infoDate) {
        const d = new Date();
        lines.push(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`);
      }
      if (settings.infoSession && hudSes.t0) {
        const s = ((now - hudSes.t0) / 1000) | 0;
        lines.push(`${String(((s / 60) | 0)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`);
      }
      if (settings.infoKills) lines.push(`K ${hudSes.kills} / D ${hudSes.deaths}`);
      if (settings.infoKD) lines.push(`K/D ${(hudSes.kills / Math.max(1, hudSes.deaths)).toFixed(2)}`);
      if (settings.infoShots !== false) lines.push(`Shots ${stShots}`);
      if (settings.infoHits !== false) lines.push(`Hits ${stHits}`);
      if (settings.infoAcc !== false) lines.push(`Acc ${stShots ? Math.round(stHits / stShots * 100) : 0}%`);
      if (lines.length) hudPill(lines, settings.infoPos || "br", Math.max(9, Number(settings.infoSize) || 12), "#ff6b9d");
    }
    if (settings.hudBars && playing) {
      const hp = hudInt(hudGet("hp", hpCache));
      const armor = hudInt(hudGet("armor", armorCache));
      if (hp != null) {
        const w = Math.max(80, Number(settings.barsW) || 220);
        const h = Math.max(6, Number(settings.barsH) || 14);
        const showArmor = armor != null && settings.barsArmor !== false;
        const rows = showArmor ? 2 : 1;
        const ph = rows * (h + 4) + 12;
        const [x, y] = hudCorner(settings.barsPos || "bl", w, ph);
        ctx.save();
        if (settings.barsBg !== false) {
          ctx.fillStyle = "rgba(22,8,16,0.7)";
          ctx.beginPath();
          if (ctx.roundRect) ctx.roundRect(x, y, w, ph, 8);
          else ctx.rect(x, y, w, ph);
          ctx.fill();
        }
        const lowTh = Number(settings.barsLowAt);
        const low = settings.barsLow !== false && hp <= (isFinite(lowTh) ? lowTh : 30);
        const bar = (bx, by, frac, col) => {
          ctx.fillStyle = "rgba(255,255,255,0.08)";
          ctx.fillRect(bx, by, w - 20, h);
          ctx.fillStyle = col;
          ctx.fillRect(bx, by, (w - 20) * clamp(frac, 0, 1), h);
        };
        bar(x + 10, y + 7, hp / 100, low ? "#ff4444" : (settings.hpColor || "#7dff8a"));
        if (showArmor) bar(x + 10, y + 7 + h + 4, armor / 100, settings.armorColor || "#7db8f0");
        if (settings.barsNumbers !== false) {
          ctx.fillStyle = "#fff";
          ctx.font = `700 ${Math.max(9, h - 2)}px ui-sans-serif,system-ui,sans-serif`;
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(String(hp), x + 10 + (w - 20) / 2, y + 7 + h / 2);
          if (showArmor) ctx.fillText(String(armor), x + 10 + (w - 20) / 2, y + 7 + h + 4 + h / 2);
        }
        ctx.restore();
      }
    }
    if (settings.hudAmmo && playing) {
      const ammo = hudInt(hudGet("ammo", ammoCache));
      if (ammo != null) {
        let reserve = hudInt(hudGet("reserve", reserveCache));
        if (reserve == null) {
          const ael = hudGet("ammo", ammoCache);
          const all = (ael && ael.textContent || "").match(/\d+/g) || [];
          if (all.length > 1) reserve = parseInt(all[1], 10);
        }
        const fs = Math.max(12, Number(settings.ammoSize) || 20);
        const lowAt = Number(settings.ammoLowAt);
        const low = settings.ammoLow !== false && ammo <= (isFinite(lowAt) ? lowAt : 6);
        const main = `${ammo}`, sub = (settings.ammoReserve !== false && reserve != null) ? `/ ${reserve}` : "";
        ctx.save();
        ctx.font = `800 ${fs}px ui-sans-serif,system-ui,sans-serif`;
        const tw = ctx.measureText(main + " " + sub).width;
        const pw = tw + 24, ph = fs + 18;
        const [x, y] = hudCorner(settings.ammoPos || "br", pw, ph);
        if (settings.ammoBg !== false) {
          ctx.fillStyle = "rgba(22,8,16,0.7)";
          ctx.beginPath();
          if (ctx.roundRect) ctx.roundRect(x, y, pw, ph, 8);
          else ctx.rect(x, y, pw, ph);
          ctx.fill();
          ctx.strokeStyle = low ? "#ff4444" : "rgba(255,107,157,0.35)";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
        ctx.fillStyle = low ? "#ff4444" : (settings.ammoColor || "#ffffff");
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(main + (sub ? " " + sub : ""), x + pw / 2, y + ph / 2 + 1);
        ctx.restore();
      }
    }
  }

  // ── Fire FX + atmosphere (visual only — overlay canvas cosmetics) ──
  // Tracer lines from the gun to the crosshair, muzzle light + smoke puffs,
  // impact bursts mirroring the game's hitmarker, screen-space weather and
  // drifting motes. Firing state comes from local input; hits from the game's
  // hitmarker DOM. Nothing is written back.
  function hexA(hex, a) {
    const m = /^#?([0-9a-f]{6})$/i.exec(hex || "");
    if (!m) return `rgba(0,0,0,${a})`;
    const n = parseInt(m[1], 16);
    return `rgba(${(n >> 16) & 255},${(n >> 8) & 255},${n & 255},${a})`;
  }
  var trLive = [], trLastShot = 0, trWasFiring = false;
  var mzHeat = 0, mzPuffs = [];
  var imParts = [], imRings = [], imT = 0, imHs = false, imEl = null;
  var wxParts = [], wxKey = "";
  var wx3d = [], wx3dKey = "", wxVecCls = null, wxTmpV = null, wxTmpV2 = null;
  var wxm = [], wxmKey = "";
  var moParts = [], moKey = "";
  function atOrigin(rect, which, ox, oy) {
    const W = rect.width, H = rect.height;
    let x = W / 2, y = H;
    if (which === "bl") { x = W * 0.2; y = H; }
    else if (which === "br") { x = W * 0.8; y = H; }
    else if (which === "bc") { x = W / 2; y = H; }
    else if (which === "center") { x = W / 2; y = H / 2; }
    else { x = W / 2 + 70; y = H - 90; } // gun
    return [x + (Number(ox) || 0), y + (Number(oy) || 0)];
  }
  // ── Real in-map weather: a THREE.Points cloud living in the scene ──
  // Particle classes are harvested once from the game's own scene objects
  // (no THREE namespace needed): clone its material for soft round points,
  // build our own positions. Depth-tested like everything else, follows the
  // player, removed + disposed on disable. Falls back to projection below.
  var wx3dScene = null, wx3dObj = null, wx3dKey = "", wx3dCls = null;
  var wxBackendTxt = "", wxStatusElV = null;
  function wxSetBackend(t) {
    if (t === wxBackendTxt) return;
    wxBackendTxt = t;
    try { if (wxStatusElV && wxStatusElV.isConnected) wxStatusElV.textContent = t; } catch (_) {}
  }
  function wxStatusEl() {
    const s = document.createElement("span");
    s.className = "sk-val";
    s.style.minWidth = "90px";
    s.textContent = wxBackendTxt || "—";
    wxStatusElV = s;
    return s;
  }
  function harvestPoints3D(scene) {
    if (wx3dCls) return wx3dCls;
    try {
      const cands = [];
      scene.traverse((o) => {
        if (cands.length < 5 && o && o.isPoints && o.geometry && o.material) cands.push(o);
      });
      const score = (o) => {
        // Shader materials need their own uniforms/attributes — our plain
        // positions would render garbage (or nothing) while reporting success
        // and blocking every fallback. Skip them entirely.
        if (o.material.isShaderMaterial || o.material.isRawShaderMaterial) return -1;
        const attrs = o.geometry.attributes || {};
        const attr = attrs.position || attrs[Object.keys(attrs)[0]];
        if (!attr || !attr.array) return -1;
        let s = 0;
        if (attr.isBufferAttribute && !attr.isInstancedBufferAttribute && !attr.isInterleavedBufferAttribute) s += 2;
        if (o.material.isPointsMaterial) s += 2;
        return s;
      };
      cands.sort((a, b) => score(b) - score(a));
      const found = cands.length && score(cands[0]) >= 0 ? cands[0] : null;
      if (!found) return null;
      const attrs = found.geometry.attributes || {};
      const attr = attrs.position || attrs[Object.keys(attrs)[0]];
      if (!found.constructor || !found.geometry.constructor || !attr.constructor) return null;
      wx3dCls = {
        Points: found.constructor,
        Geo: found.geometry.constructor,
        Attr: attr.constructor,
        baseMat: found.material
      };
      return wx3dCls;
    } catch (_) { return null; }
  }
  function wxRemove3D() {
    try {
      if (wx3dObj && wx3dScene) {
        try { wx3dScene.remove(wx3dObj); } catch (_) {}
        try { wx3dObj.geometry && wx3dObj.geometry.dispose && wx3dObj.geometry.dispose(); } catch (_) {}
        try {
          if (wx3dObj.material && wx3dObj.material.dispose) {
            const same = wx3dCls && wx3dCls.baseMat && wx3dObj.material === wx3dCls.baseMat;
            if (!same) wx3dObj.material.dispose();
          }
        } catch (_) {}
      }
    } catch (_) {}
    wx3dObj = null;
    wx3dScene = null;
    wx3dKey = "";
  }
  // ── "Under cover" gate ──
  // The world paths draw particles in front of everything (the canvas
  // fallbacks have no depth test and the harvested cloud drops rain wherever
  // it likes), so weather indoors or right behind a wall reads as fake. The
  // game's own collision is the honest answer here: rays up / forward / to the
  // sides — the same probes the game runs for head clearance and step-ups —
  // and, if every ray comes back empty, a direct scan of the collision
  // brushes. Bots are handled per-entity by the game, so the static grid is
  // level + props. Read-only, cached at 180 ms.
  //
  // The visual meshes are no good for this: the level ships as merged geometry
  // (map.buildMesh), so its AABB is the whole map. Meshes are only the last
  // fallback.
  var wxOccl = { box: null, list: [], listAt: -1e9 };
  var wxMask = 1, wxMaskAt = -1e9, wxMaskN = -1;
  var wxBrushAt = -1e9, wxBrushRes = -1;
  var wxCover = false, wxCoverAt = -1e9, wxCoverElV = null, wxCoverTxt = "";
  function wxCoverEl() {
    const s = document.createElement("span");
    s.className = "sk-val";
    s.style.minWidth = "90px";
    s.textContent = wxCoverTxt || (settings.wxCoverHide === false ? "off" : (wxCover ? "covered" : "clear"));
    wxCoverElV = s;
    return s;
  }
  function wxSetCover(txt, covered) {
    wxCover = !!covered;
    if (txt === wxCoverTxt) return;
    wxCoverTxt = txt;
    try { if (wxCoverElV && wxCoverElV.isConnected) wxCoverElV.textContent = txt; } catch (_) {}
  }
  function wxFwdXZ(g, p) {
    let fwx = 0, fwz = -1;
    const cam = g && g.camera;
    if (cam && cam.matrixWorld && cam.matrixWorld.elements) {
      const e = cam.matrixWorld.elements;
      fwx = -e[8]; fwz = -e[10];
    } else if (p && isFinite(p.yaw)) { fwx = -Math.sin(p.yaw); fwz = -Math.cos(p.yaw); }
    const fl = Math.hypot(fwx, fwz) || 1;
    return [fwx / fl, fwz / fl];
  }
  // Every collision brush carries a mask byte and there is no documented bit
  // for "the level". Ray with the union of every mask actually present, so
  // whatever the map calls solid is solid for us too (the union never adds
  // bits the level does not use).
  function wxRayMask(phys, now) {
    const n = ((phys.boxes && phys.boxes.length) || 0) + ((phys.tris && phys.tris.length) || 0);
    if (now - wxMaskAt < 2000 && wxMaskN === n) return wxMask;
    let m = 0;
    const scan = (arr) => {
      if (!arr) return;
      const len = Math.min(arr.length, 20000);
      for (let i = 0; i < len; i++) { const k = arr[i] && arr[i].mask; if (k) m |= k; }
    };
    try { scan(phys.boxes); scan(phys.tris); } catch (_) {}
    wxMask = m || 1;
    wxMaskAt = now;
    wxMaskN = n;
    return wxMask;
  }
  // a map's own bounding box / ceiling brush covers everything, so it must not
  // read as a roof or the whole map would count as indoors
  function wxIsShellBox(g, b) {
    const mp = g && g.map;
    if (!b || !isFinite(b.minX)) return false;
    if (mp && mp.min && mp.max) {
      const mx = mp.max[0] - mp.min[0], mz = mp.max[2] - mp.min[2];
      if (mx > 4 && mz > 4 && (b.maxX - b.minX) >= mx * 0.92 && (b.maxZ - b.minZ) >= mz * 0.92) return true;
    }
    return (b.maxX - b.minX) * (b.maxZ - b.minZ) > 20000;
  }
  function wxIsShell(g, hit) {
    return !!(hit && wxIsShellBox(g, hit.b));
  }
  // physics probe: null when the API is unusable, else { on, why, tag }
  function wxCoveredPhys(phys, g, p, now) {
    const eye = p.y + (isFinite(p.eyeH) ? p.eyeH : 1.6);
    const mask = wxRayMask(phys, now);
    const ray = (ox, oy, oz, dx, dy, dz, dist) => {
      try { return phys.raycast(ox, oy, oz, dx, dy, dz, dist, mask); } catch (_) { return undefined; }
    };
    // straight overhead first — the game's own stand-clearance probe
    const up = ray(p.x, eye, p.z, 0, 1, 0, 12);
    if (up === undefined) return null;
    if (up && !wxIsShell(g, up)) return { on: true, why: `roof ${Math.round(up.t * 10) / 10}m` };
    const tag = (up ? ` shell ${Math.round(up.t * 10) / 10}m` : "") + ` m${mask}`;
    // angled overhead: leaning out from under a roof / standing in a doorway
    let over = 0;
    const off = [[1.5, 0], [-1.5, 0], [0, 1.5], [0, -1.5]];
    for (const [ox, oz] of off) {
      const h = ray(p.x + ox, eye, p.z + oz, 0, 1, 0, 12);
      if (h === undefined) return null;
      if (h && !wxIsShell(g, h)) over++;
    }
    if (over >= 2) return { on: true, why: "roof" };
    const [fwx, fwz] = wxFwdXZ(g, p);
    const chest = eye - 0.3;
    // solid right in front of the face = the cover you are tucked behind
    if (ray(p.x, chest, p.z, fwx, 0, fwz, 1.8)) return { on: true, why: "front" };
    // walls on three sides = room or corridor
    let sides = 0;
    if (ray(p.x, chest, p.z, 1, 0, 0, 2.4)) sides++;
    if (ray(p.x, chest, p.z, -1, 0, 0, 2.4)) sides++;
    if (ray(p.x, chest, p.z, 0, 0, 1, 2.4)) sides++;
    if (ray(p.x, chest, p.z, 0, 0, -1, 2.4)) sides++;
    if (sides >= 3) return { on: true, why: "room" };
    return { on: false, why: "", tag };
  }
  // Last resort: walk the collision brushes and ask whether any whole box sits
  // above the player. AABBs only, and only when the brush clears the head, so
  // walls, stairs and sloped hulls (whose AABB reaches the floor) cannot
  // false-positive. Mask-free on purpose.
  function wxBrushRoof(phys, g, p, now) {
    if (now - wxBrushAt < 500) return wxBrushRes;
    wxBrushAt = now;
    wxBrushRes = -1;
    const px = p.x, pz = p.z, lo = p.y + 1.2, hi = p.y + 12;
    const scan = (arr) => {
      if (!arr || wxBrushRes >= 0) return;
      const len = Math.min(arr.length, 40000);
      for (let i = 0; i < len; i++) {
        const b = arr[i];
        if (!b || !isFinite(b.minX)) continue;
        if (!(px > b.minX && px < b.maxX && pz > b.minZ && pz < b.maxZ)) continue;
        if (!(b.minY > lo && b.minY < hi)) continue;
        if (wxIsShellBox(g, b)) continue;
        wxBrushRes = Math.round((b.minY - p.y) * 10) / 10;
        return;
      }
    };
    try { scan(phys.boxes); scan(phys.tris); } catch (_) {}
    return wxBrushRes;
  }
  function wxUnderCam(o, cam) {
    for (let a = o; a; a = a.parent) if (a === cam) return true;
    return false;
  }
  // Mesh layer (last resort). The level usually ships as merged geometry, so
  // this reads each *geometry's* AABB and maps it through the object's own
  // world matrix instead of recursing — grouped per-brush meshes therefore
  // still count one by one, and the object's children cannot poison the box.
  var wxGeoBox = new WeakMap();
  var wxScratch = [0, 0, 0, 0, 0, 0, 0];
  function wxWorldAABB(o, out) {
    const geo = o.geometry, m = o.matrixWorld && o.matrixWorld.elements;
    if (!geo || !m || m.length < 16) return false;
    let loc = wxGeoBox.get(geo);
    if (loc === undefined) {
      let bb = geo.boundingBox;
      if (!bb && typeof geo.computeBoundingBox === "function") { try { geo.computeBoundingBox(); bb = geo.boundingBox; } catch (_) {} }
      loc = bb && bb.min && bb.max && isFinite(bb.min.x) && isFinite(bb.max.x)
        ? [bb.min.x, bb.min.y, bb.min.z, bb.max.x, bb.max.y, bb.max.z] : null;
      wxGeoBox.set(geo, loc);
    }
    if (!loc) return false;
    let minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (let i = 0; i < 8; i++) {
      const x = (i & 1) ? loc[3] : loc[0], y = (i & 2) ? loc[4] : loc[1], z = (i & 4) ? loc[5] : loc[2];
      const wx = m[0] * x + m[4] * y + m[8] * z + m[12];
      const wy = m[1] * x + m[5] * y + m[9] * z + m[13];
      const wz = m[2] * x + m[6] * y + m[10] * z + m[14];
      if (wx < minX) minX = wx;
      if (wx > maxX) maxX = wx;
      if (wy < minY) minY = wy;
      if (wy > maxY) maxY = wy;
      if (wz < minZ) minZ = wz;
      if (wz > maxZ) maxZ = wz;
    }
    out[0] = minX; out[1] = minY; out[2] = minZ; out[3] = maxX; out[4] = maxY; out[5] = maxZ;
    out[6] = (maxX - minX) * (maxY - minY) * (maxZ - minZ);
    return true;
  }
  function wxOccluders(scene, now, cam) {
    if (now - wxOccl.listAt < 1000) return wxOccl;
    const list = [];
    try {
      scene.traverse((o) => {
        if (list.length >= 900 || !o || !o.isMesh || !o.geometry) return;
        if (cam && wxUnderCam(o, cam)) return; // viewmodel rides the camera
        const nm = `${o.name || ""} ${(o.geometry && o.geometry.name) || ""}`;
        if (/sky|cloud|fog|dome|nodraw|tools/i.test(nm)) return;
        if (!wxWorldAABB(o, wxScratch)) return;
        const sy = wxScratch[4] - wxScratch[1];
        // skip paper-thin decals and whole-map shells (terrain, skybox)
        if (!isFinite(sy) || sy < 0.03 || wxScratch[6] > 60000) return;
        list.push(wxScratch.slice(0));
      });
    } catch (_) {}
    wxOccl.list = list;
    wxOccl.listAt = now;
    return wxOccl;
  }
  function wxCoveredMesh(g, now) {
    const p = g && g.player, scene = g && g.scene;
    if (!p || !scene) return null;
    const K = wxOccluders(scene, now, g.camera);
    if (!K.list.length) return null;
    const px = p.x, py = p.y, pz = p.z, eye = py + (isFinite(p.eyeH) ? p.eyeH : 1.6);
    const [fwx, fwz] = wxFwdXZ(g, p);
    const fx1 = px + fwx * 1.6, fz1 = pz + fwz * 1.6;
    const inBox = (o, x, y, z) => x > o[0] && x < o[3] && y > o[1] && y < o[4] && z > o[2] && z < o[5];
    let roof = false, front = false, sides = 0;
    for (const o of K.list) {
      // roof-like = a slab overhead, not a whole building's bounding box
      if (!roof && o[1] > py + 1.5 && o[1] < py + 9 && o[3] - o[0] <= 40 && o[5] - o[2] <= 40 && px > o[0] && px < o[3] && pz > o[2] && pz < o[5]) roof = true;
      if (!front && o[6] >= 1.5 && inBox(o, fx1, eye - 0.2, fz1)) front = true;
      if (sides < 4) {
        if (inBox(o, px + 2.2, eye - 0.4, pz)) sides++;
        else if (inBox(o, px - 2.2, eye - 0.4, pz)) sides++;
        else if (inBox(o, px, eye - 0.4, pz + 2.2)) sides++;
        else if (inBox(o, px, eye - 0.4, pz - 2.2)) sides++;
      }
    }
    return { on: roof || front || sides >= 3, why: roof ? "roof mesh" : front ? "front mesh" : "room mesh" };
  }
  function wxCovered(g, now) {
    if (settings.wxCoverHide === false) { wxSetCover("off", false); return false; }
    const p = g && g.player;
    if (!p || !isFinite(p.x) || !isFinite(p.y) || !isFinite(p.z)) { wxSetCover("clear", false); return false; }
    if (now - wxCoverAt < 180) return wxCover;
    wxCoverAt = now;
    const phys = g.physics && typeof g.physics.raycast === "function" ? g.physics : null;
    const r = phys ? wxCoveredPhys(phys, g, p, now) : null;
    let on = !!(r && r.on), txt = r ? r.why : "";
    if (!on && r) {
      const br = wxBrushRoof(phys, g, p, now);
      if (br >= 0) { on = true; txt = `roof brush ${br}m`; }
      else txt = "clear" + (r.tag || "");
    }
    if (!on) {
      const m = wxCoveredMesh(g, now);
      if (m && m.on) { on = true; txt = m.why; }
      else if (!r) txt = m ? "clear mesh" : "—";
      else if (m) txt += " mesh";
    }
    wxSetCover(txt || "—", on);
    return on;
  }
  function tickWeather3D(g, dt, now) {
    try {
      const scene = g && g.scene;
      if (!scene) return false;
      if (wx3dScene && wx3dScene !== scene) wxRemove3D();
      const C = harvestPoints3D(scene);
      if (!C) return false;
      const type = settings.wxType || "petals";
      const n = Math.max(0, Math.min(220, Math.round(Number(settings.wxCount) || 80)));
      const key = `${type}|${n}|${settings.wxTint || ""}|${settings.wxSize || 1}|${settings.wxOp ?? 0.8}`;
      if (!wx3dObj || wx3dKey !== key) {
        wxRemove3D();
        if (!n) return false;
        const geo = new C.Geo();
        const arr = new Float32Array(n * 3);
        for (let i = 0; i < n; i++) {
          arr[i * 3] = (Math.random() - 0.5) * 44;
          arr[i * 3 + 1] = Math.random() * 24 - 4;
          arr[i * 3 + 2] = (Math.random() - 0.5) * 44;
        }
        const attr = new C.Attr(arr, 3);
        if (typeof geo.setAttribute === "function") geo.setAttribute("position", attr);
        else if (typeof geo.addAttribute === "function") geo.addAttribute("position", attr);
        else return false;
        const mat = C.baseMat.clone();
        const tintMap = { snow: "#ffffff", rain: "#9fc4e8", embers: "#ff9a3c", leaves: "#7dc46a", petals: "#ffb3c6" };
        try {
          if (mat.color && typeof mat.color.set === "function") mat.color.set(settings.wxTint || tintMap[type] || "#ffb3c6");
          mat.transparent = true;
          mat.opacity = clamp(Number(settings.wxOp) ?? 0.8, 0, 1);
          // World-sized points need attenuation; a harvested screen-space
          // material would otherwise render sub-pixel dots.
          try { mat.sizeAttenuation = true; } catch (_) {}
          if ("size" in mat) mat.size = (type === "rain" ? 0.16 : 0.11) * Math.max(0.3, Number(settings.wxSize) || 1);
          mat.depthWrite = false;
        } catch (_) {}
        const obj = new C.Points(geo, mat);
        try {
          obj.frustumCulled = false;
          if (obj.renderOrder !== undefined) obj.renderOrder = 5;
        } catch (_) {}
        scene.add(obj);
        wx3dObj = obj;
        wx3dScene = scene;
        wx3dKey = key;
      }
      const p = g.player;
      const cam = g.camera;
      const fx = (p && isFinite(p.x)) ? p.x : (cam && cam.position ? cam.position.x : 0);
      const fy = (p && isFinite(p.y)) ? p.y : (cam && cam.position ? cam.position.y : 2);
      const fz = (p && isFinite(p.z)) ? p.z : (cam && cam.position ? cam.position.z : 0);
      if (wx3dObj && wx3dObj.position) {
        try { wx3dObj.position.set(fx, fy + 4, fz); } catch (_) {}
      }
      const pos = wx3dObj.geometry && wx3dObj.geometry.attributes && wx3dObj.geometry.attributes.position;
      if (!pos || !pos.array) return true;
      const arr = pos.array;
      const spd = Number(settings.wxSpeed) || 1;
      const wind = Number(settings.wxWind) || 0;
      const fall = (type === "embers" ? 2 : type === "rain" ? 22 : 1.4) * spd;
      const rise = type === "embers";
      for (let i = 0; i < arr.length; i += 3) {
        const wob = ((i / 3) % 10) / 14;
        arr[i + 1] += (rise ? fall : -fall) * dt * (0.6 + wob);
        arr[i] += (wind * 3 + Math.sin(now / 1000 * 0.8 + i) * 0.4) * dt;
        if (arr[i + 1] > 20) arr[i + 1] -= 24;
        else if (arr[i + 1] < -4) arr[i + 1] += 24;
        if (arr[i] > 22) arr[i] -= 44;
        else if (arr[i] < -22) arr[i] += 44;
        if (arr[i + 2] > 22) arr[i + 2] -= 44;
        else if (arr[i + 2] < -22) arr[i + 2] += 44;
      }
      pos.needsUpdate = true;
      wxSetBackend("3d points");
      return true;
    } catch (_) { return false; }
  }
  function drawAtmoFX(rect, now, dt, g) {
    const W = rect.width, H = rect.height, cx = W / 2, cy = H / 2;
    const playing = isPlaying(g);
    const firing = held.has("mouse1");
    const firedEdge = firing && !trWasFiring;
    trWasFiring = firing;
    const t = now / 1000;
    // tracers
    if (settings.atTracers && playing) {
      if (firing && (firedEdge || now - trLastShot > (Number(settings.trRate) ?? 45))) {
        trLastShot = now;
        const [ox, oy] = atOrigin(rect, settings.trOrigin || "gun");
        const j = Number(settings.trJitter) || 0;
        trLive.push({
          x0: ox, y0: oy,
          x1: cx + (j ? (Math.random() - 0.5) * 2 * j : 0),
          y1: cy + (j ? (Math.random() - 0.5) * 2 * j : 0),
          born: now, life: Math.max(0.05, Number(settings.trLife) || 0.35),
          hue: settings.trRandom ? Math.random() * 360 : null
        });
        if (trLive.length > 24) trLive.shift();
      }
      const w = Math.max(0.5, Number(settings.trWidth) || 2);
      const gap0 = Math.max(0, Number(settings.trGap) || 0);
      for (let i = trLive.length - 1; i >= 0; i--) {
        const tr = trLive[i];
        const age = (now - tr.born) / 1000 / tr.life;
        if (age >= 1) { trLive.splice(i, 1); continue; }
        const a = (1 - age) * clamp(Number(settings.trOp) ?? 0.9, 0, 1);
        let col = settings.trColor || "#ff6b9d";
        if (settings.trRainbow) col = `hsl(${(t * 240) % 360} 100% 65%)`;
        else if (tr.hue != null) col = `hsl(${tr.hue} 100% 65%)`;
        ctx.save();
        ctx.globalAlpha = a;
        ctx.lineCap = "round";
        const dx = tr.x1 - tr.x0, dy = tr.y1 - tr.y0;
        const len = Math.hypot(dx, dy) || 1;
        const sx = tr.x0 + (dx / len) * gap0, sy = tr.y0 + (dy / len) * gap0;
        if (settings.trGrad && !settings.trRainbow && tr.hue == null) {
          const gr = ctx.createLinearGradient(sx, sy, tr.x1, tr.y1);
          gr.addColorStop(0, settings.trColor2 || "#ffb3c6");
          gr.addColorStop(1, col);
          ctx.strokeStyle = gr;
        } else ctx.strokeStyle = col;
        ctx.lineWidth = w * (1 - age * 0.6);
        if ((settings.trStyle || "line") === "glow") { ctx.shadowColor = col; ctx.shadowBlur = 12; }
        if ((settings.trStyle || "line") === "dots") ctx.setLineDash([2, 7]);
        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.lineTo(tr.x1, tr.y1);
        ctx.stroke();
        ctx.restore();
      }
    } else if (trLive.length) trLive.length = 0;
    // muzzle light + puffs
    if (settings.mzOn && playing) {
      if (firing) mzHeat = Math.min(1, mzHeat + dt * 14);
      else mzHeat = Math.max(0, mzHeat - dt / Math.max(0.05, Number(settings.mzDecay) || 0.25));
      if (firedEdge && settings.mzPuff) {
        const [mx, my] = atOrigin(rect, settings.trOrigin || "gun", settings.mzX, settings.mzY);
        mzPuffs.push({ x: mx, y: my - 30, r: 6, a: 0.5 });
      }
      if (mzHeat > 0.02) {
        const [mx, my] = atOrigin(rect, settings.trOrigin || "gun", settings.mzX, settings.mzY);
        const r = (Number(settings.mzSize) || 90) * mzHeat;
        let fl = 1;
        if (settings.mzFlicker) fl = 0.75 + Math.random() * 0.25;
        const gr = ctx.createRadialGradient(mx, my - 30, 0, mx, my - 30, r);
        gr.addColorStop(0, hexA(settings.mzColor || "#ffd9a0", 0.85 * mzHeat * fl));
        gr.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gr;
        ctx.fillRect(mx - r, my - 30 - r, r * 2, r * 2);
      }
      for (let i = mzPuffs.length - 1; i >= 0; i--) {
        const p = mzPuffs[i];
        p.r += dt * 60;
        p.a -= dt * 1.2;
        if (p.a <= 0) { mzPuffs.splice(i, 1); continue; }
        ctx.save();
        ctx.globalAlpha = Math.max(0, p.a);
        ctx.strokeStyle = "#bbbbbb";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y - p.r * 0.6, p.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }
      if (mzPuffs.length > 12) mzPuffs.splice(0, mzPuffs.length - 12);
    }
    // impact bursts mirroring the game's hitmarker
    if (!imEl || !imEl.isConnected) {
      try { imEl = document.getElementById("hitmark"); } catch (_) { imEl = null; }
    }
    let pop = false, hs = false;
    if (imEl) {
      try {
        pop = imEl.classList.contains("pop") || Number(imEl.style.opacity || 0) > 0.05;
        hs = imEl.classList.contains("hs");
      } catch (_) {}
    }
    if (pop && imT <= 0) { imT = 1; imHs = hs; }
    imT = Math.max(0, imT - dt / Math.max(0.1, Number(settings.imTime) || 0.4));
    if (settings.imOn && playing && imT > 0.01) {
      const c = imHs ? (settings.imHs || "#ff4040") : (settings.imColor || "#ffffff");
      const s = Number(settings.imSize) || 12;
      const st = settings.imStyle || "both";
      if (imParts.length === 0 && (st === "burst" || st === "both")) {
        const n = Math.max(1, Math.round(Number(settings.imCount) || 10));
        for (let i = 0; i < n; i++) {
          const a = Math.random() * Math.PI * 2, sp = s * (1.5 + Math.random() * 3);
          imParts.push({ x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - s, life: 1 });
        }
      }
      if ((st === "ring" || st === "both") && !imRings._on) {
        imRings.push({ r: 2, a: 0.9 });
        imRings._on = true;
      }
      if (settings.imFlash) {
        ctx.fillStyle = hexA(c, imT * 0.25);
        ctx.fillRect(0, 0, W, H);
      }
      ctx.save();
      ctx.lineCap = "round";
      const grav = Number(settings.imGrav);
      for (let i = imParts.length - 1; i >= 0; i--) {
        const p = imParts[i];
        p.life -= dt / Math.max(0.1, Number(settings.imTime) || 0.4);
        if (p.life <= 0) { imParts.splice(i, 1); continue; }
        p.x += p.vx * dt;
        p.y += p.vy * dt;
        p.vy += (isFinite(grav) ? grav : 300) * dt;
        ctx.globalAlpha = Math.max(0, p.life);
        ctx.strokeStyle = c;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p.x - p.vx * 0.03, p.y - p.vy * 0.03);
        ctx.stroke();
      }
      for (let i = imRings.length - 1; i >= 0; i--) {
        if (typeof imRings[i] !== "object") continue;
        const r = imRings[i];
        r.r += dt * s * 6;
        r.a -= dt * 2.2;
        if (r.a <= 0) { imRings.splice(i, 1); continue; }
        ctx.globalAlpha = Math.max(0, r.a);
        ctx.strokeStyle = c;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(cx, cy, r.r, 0, Math.PI * 2);
        ctx.stroke();
      }
      if (imT <= 0.01) imRings._on = false;
      ctx.restore();
    }
    if (!settings.imOn || !playing) { imParts.length = 0; imRings.length = 0; imRings._on = false; }
    // weather
    const wxType = settings.wxType || "petals";
    const wxWorld = (settings.wxMode || "screen") === "world";
    // under cover (indoors, or tucked behind a wall) the world-anchored
    // weather would draw over geometry it should be behind — skip it.
    const wxHidden = !!(wxWorld && settings.wxOn && playing && g && wxCovered(g, now));
    if (!wxWorld || !settings.wxOn) wxSetCover(settings.wxOn ? "on screen" : "off", false);
    // world-space weather: real THREE.Points in the map when harvestable,
    // otherwise the projection fallback below (still parallax-correct).
    let wxDidWorld = false;
    if (settings.wxOn && wxWorld && !wxHidden && playing && g && g.scene) {
      wxDidWorld = tickWeather3D(g, dt, now);
    } else {
      wxRemove3D();
    }
    if (!wxDidWorld && settings.wxOn && wxWorld && !wxHidden && playing && g && g.camera) {
      const cam = g.camera;
      const Vec3 = wxVecCls || (wxVecCls = cam.position && cam.position.constructor);
      if (Vec3) {
        try { if (typeof cam.updateMatrixWorld === "function") cam.updateMatrixWorld(); } catch (_) {}
        const n = Math.max(0, Math.min(220, Math.round(Number(settings.wxCount) || 80)));
        const key = `w3|${wxType}|${n}`;
        if (wx3dKey !== key) {
          wx3dKey = key;
          wx3d = [];
          for (let i = 0; i < n; i++) {
            wx3d.push({
              x: (Math.random() - 0.5) * 44, y: Math.random() * 24 - 4, z: (Math.random() - 0.5) * 44,
              s: Math.random(), p: Math.random() * Math.PI * 2
            });
          }
        }
        const cp = cam.position;
        const fov = (cam.fov || 75) * Math.PI / 360;
        const proj = H / (2 * Math.tan(fov));
        const size = Math.max(0.3, Number(settings.wxSize) || 1);
        const spd = Number(settings.wxSpeed) || 1;
        const wind = Number(settings.wxWind) || 0;
        const op = clamp(Number(settings.wxOp) ?? 0.8, 0, 1);
        const tint = settings.wxTint || "";
        const tw = !!settings.wxTwinkle;
        const v = wxTmpV || (wxTmpV = new Vec3());
        const v2 = wxTmpV2 || (wxTmpV2 = new Vec3());
        wxDidWorld = true;
        wxSetBackend("projection");
        ctx.save();
        for (const q of wx3d) {
          q.y += dt * spd * (0.6 + q.s) * (wxType === "embers" ? 1.6 : -1.4) * (wxType === "rain" ? 5 : 1);
          q.x += dt * (wind * 4 + Math.sin(t * 0.8 + q.p) * 0.4);
          if (cp) {
            if (q.x - cp.x > 22) q.x -= 44; else if (q.x - cp.x < -22) q.x += 44;
            if (q.z - cp.z > 22) q.z -= 44; else if (q.z - cp.z < -22) q.z += 44;
            if (q.y - cp.y > 14) q.y -= 24; else if (q.y - cp.y < -10) q.y += 24;
          }
          let sx, sy, dist;
          try {
            v.set(q.x, q.y, q.z).project(cam);
            if (v.z > 1 || v.z < -1) continue;
            sx = (v.x * 0.5 + 0.5) * W;
            sy = (-v.y * 0.5 + 0.5) * H;
            if (sx < -40 || sx > W + 40 || sy < -40 || sy > H + 40) continue;
            dist = cp ? Math.hypot(q.x - cp.x, q.y - cp.y, q.z - cp.z) : 10;
          } catch (_) { continue; }
          const sc = (proj / Math.max(0.5, dist)) * 0.02 * size;
          let a = op;
          if (tw) a *= 0.45 + 0.55 * Math.abs(Math.sin(t * 2 + q.p * 5));
          ctx.globalAlpha = a;
          if (wxType === "rain") {
            let ex = sx, ey = sy;
            try {
              v2.set(q.x - wind * 0.4, q.y + 0.9, q.z).project(cam);
              ex = (v2.x * 0.5 + 0.5) * W;
              ey = (-v2.y * 0.5 + 0.5) * H;
            } catch (_) {}
            ctx.strokeStyle = tint || "#9fc4e8";
            ctx.lineWidth = Math.max(1, sc * 1.5);
            ctx.beginPath();
            ctx.moveTo(sx, sy);
            ctx.lineTo(ex, ey);
            ctx.stroke();
          } else if (wxType === "snow") {
            ctx.fillStyle = tint || "#ffffff";
            ctx.beginPath();
            ctx.arc(sx, sy, Math.max(0.5, (0.8 + q.s * 1.6) * sc * 1.5), 0, Math.PI * 2);
            ctx.fill();
          } else if (wxType === "embers") {
            ctx.fillStyle = tint || "#ff9a3c";
            ctx.beginPath();
            ctx.arc(sx, sy, Math.max(0.5, (0.7 + q.s * 1.4) * sc * 1.5), 0, Math.PI * 2);
            ctx.fill();
          } else if (wxType === "leaves") {
            ctx.fillStyle = tint || "#7dc46a";
            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(q.p + t * (0.5 + q.s));
            ctx.beginPath();
            ctx.ellipse(0, 0, 2.4 * sc, 1.3 * sc, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          } else { // petals
            ctx.fillStyle = tint || "#ffb3c6";
            ctx.save();
            ctx.translate(sx, sy);
            ctx.rotate(q.p + t * (0.4 + q.s * 0.8));
            ctx.beginPath();
            ctx.ellipse(0, 0, 2.2 * sc, 1.2 * sc, 0, 0, Math.PI * 2);
            ctx.fill();
            ctx.restore();
          }
        }
        ctx.restore();
      }
    } else if (wx3dKey) { wx3dKey = ""; wx3d = []; }
    // manual 3D fallback: world-anchored points projected with pure math.
    // Needs only player pos + yaw/pitch (which the game always exposes) —
    // no camera object, no three.js. Same parallax, no depth testing.
    if (!wxDidWorld && settings.wxOn && wxWorld && !wxHidden && playing) {
      const pl = g && g.player;
      if (pl && [pl.x, pl.y, pl.z, pl.yaw, pl.pitch].every((v) => isFinite(v))) {
        const n = Math.max(0, Math.min(220, Math.round(Number(settings.wxCount) || 80)));
        const key = `m3|${wxType}|${n}`;
        if (wxmKey !== key) {
          wxmKey = key;
          wxm = [];
          for (let i = 0; i < n; i++) {
            wxm.push({
              x: (Math.random() - 0.5) * 44, y: Math.random() * 24 - 4, z: (Math.random() - 0.5) * 44,
              s: Math.random(), p: Math.random() * Math.PI * 2
            });
          }
        }
        if (wxm.length) {
          const yaw = pl.yaw, pitch = pl.pitch;
          const cp2 = Math.cos(pitch), sp2 = Math.sin(pitch);
          const sy = Math.sin(yaw), cy = Math.cos(yaw);
          const Fx = -sy * cp2, Fy = sp2, Fz = -cy * cp2;
          const Rx = cy, Ry = 0, Rz = -sy;
          const Ux = Ry * Fz - Rz * Fy, Uy = Rz * Fx - Rx * Fz, Uz = Rx * Fy - Ry * Fx;
          const eyeH = isFinite(pl.eyeH) ? pl.eyeH : 1.6;
          const ex = pl.x, ey = pl.y + eyeH, ez = pl.z;
          const fov2 = (((g.camera && g.camera.fov) || 75) * Math.PI / 360);
          const focal = (H / 2) / Math.tan(fov2);
          const size = Math.max(0.3, Number(settings.wxSize) || 1);
          const spd = Number(settings.wxSpeed) || 1;
          const wind = Number(settings.wxWind) || 0;
          const op = clamp(Number(settings.wxOp) ?? 0.8, 0, 1);
          const tint = settings.wxTint || "";
          const tw = !!settings.wxTwinkle;
          const projM = (wx, wy, wz) => {
            const dx = wx - ex, dy = wy - ey, dz = wz - ez;
            const zc = dx * Fx + dy * Fy + dz * Fz;
            if (zc < 0.3) return null;
            return [
              W / 2 + (dx * Rx + dy * Ry + dz * Rz) / zc * focal,
              H / 2 - (dx * Ux + dy * Uy + dz * Uz) / zc * focal,
              Math.hypot(dx, dy, dz)
            ];
          };
          wxDidWorld = true;
          wxSetBackend("manual 3d");
          ctx.save();
          for (const q of wxm) {
            q.y += dt * spd * (0.6 + q.s) * (wxType === "embers" ? 1.6 : -1.4) * (wxType === "rain" ? 5 : 1);
            q.x += dt * (wind * 4 + Math.sin(t * 0.8 + q.p) * 0.4);
            if (q.x - ex > 22) q.x -= 44; else if (q.x - ex < -22) q.x += 44;
            if (q.z - ez > 22) q.z -= 44; else if (q.z - ez < -22) q.z += 44;
            if (q.y - ey > 14) q.y -= 24; else if (q.y - ey < -10) q.y += 24;
            const pr = projM(q.x, q.y, q.z);
            if (!pr) continue;
            const [sx, sy, dist] = pr;
            if (sx < -40 || sx > W + 40 || sy < -40 || sy > H + 40) continue;
            const sc = (focal / Math.max(0.5, dist)) * 0.02 * size;
            let a = op;
            if (tw) a *= 0.45 + 0.55 * Math.abs(Math.sin(t * 2 + q.p * 5));
            ctx.globalAlpha = a;
            if (wxType === "rain") {
              const pr2 = projM(q.x - wind * 0.4, q.y + 0.9, q.z);
              ctx.strokeStyle = tint || "#9fc4e8";
              ctx.lineWidth = Math.max(1, sc * 1.5);
              ctx.beginPath();
              ctx.moveTo(sx, sy);
              if (pr2) ctx.lineTo(pr2[0], pr2[1]);
              else ctx.lineTo(sx, sy - 8 * size);
              ctx.stroke();
            } else if (wxType === "snow") {
              ctx.fillStyle = tint || "#ffffff";
              ctx.beginPath();
              ctx.arc(sx, sy, Math.max(0.5, (0.8 + q.s * 1.6) * sc * 1.5), 0, Math.PI * 2);
              ctx.fill();
            } else if (wxType === "embers") {
              ctx.fillStyle = tint || "#ff9a3c";
              ctx.beginPath();
              ctx.arc(sx, sy, Math.max(0.5, (0.7 + q.s * 1.4) * sc * 1.5), 0, Math.PI * 2);
              ctx.fill();
            } else if (wxType === "leaves") {
              ctx.fillStyle = tint || "#7dc46a";
              ctx.save();
              ctx.translate(sx, sy);
              ctx.rotate(q.p + t * (0.5 + q.s));
              ctx.beginPath();
              ctx.ellipse(0, 0, 2.4 * sc, 1.3 * sc, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            } else { // petals
              ctx.fillStyle = tint || "#ffb3c6";
              ctx.save();
              ctx.translate(sx, sy);
              ctx.rotate(q.p + t * (0.4 + q.s * 0.8));
              ctx.beginPath();
              ctx.ellipse(0, 0, 2.2 * sc, 1.2 * sc, 0, 0, Math.PI * 2);
              ctx.fill();
              ctx.restore();
            }
          }
          ctx.restore();
        }
      } else if (wxmKey) { wxmKey = ""; wxm = []; }
    }
    if (settings.wxOn && !wxDidWorld && !wxHidden && (playing || settings.wxLobby)) {
      wxSetBackend("screen");
      const n = Math.max(0, Math.min(220, Math.round(Number(settings.wxCount) || 80)));
      const key = `${wxType}|${n}`;
      if (wxKey !== key) {
        wxKey = key;
        wxParts = [];
        for (let i = 0; i < n; i++) {
          wxParts.push({ x: Math.random(), y: Math.random(), s: Math.random(), p: Math.random() * Math.PI * 2 });
        }
      }
      const size = Math.max(0.3, Number(settings.wxSize) || 1);
      const spd = Number(settings.wxSpeed) || 1;
      const wind = Number(settings.wxWind) || 0;
      const op = clamp(Number(settings.wxOp) ?? 0.8, 0, 1);
      const tint = settings.wxTint || "";
      const tw = !!settings.wxTwinkle;
      const swirl = !!settings.wxSwirl;
      ctx.save();
      for (const q of wxParts) {
        q.y += dt * 0.03 * spd * (0.5 + q.s) * (wxType === "embers" ? -1 : 1) * (wxType === "rain" ? 6 : 1);
        q.x += dt * 0.02 * (wind * 3 + (swirl ? Math.sin(t + q.p * 4) * 0.6 : Math.sin(t * 0.7 + q.p) * 0.15));
        if (q.y > 1.02) { q.y = -0.02; q.x = Math.random(); }
        if (q.y < -0.02) { q.y = 1.02; q.x = Math.random(); }
        if (q.x > 1.02) q.x = -0.02;
        if (q.x < -0.02) q.x = 1.02;
        const x = q.x * W, y = q.y * H;
        let a = op;
        if (tw) a *= 0.45 + 0.55 * Math.abs(Math.sin(t * 2 + q.p * 5));
        ctx.globalAlpha = a;
        if (wxType === "rain") {
          ctx.strokeStyle = tint || "#9fc4e8";
          ctx.lineWidth = Math.max(1, size);
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x - wind * 14 * size, y - 9 * size);
          ctx.stroke();
        } else if (wxType === "snow") {
          ctx.fillStyle = tint || "#ffffff";
          ctx.beginPath();
          ctx.arc(x, y, (0.8 + q.s * 1.6) * size, 0, Math.PI * 2);
          ctx.fill();
        } else if (wxType === "embers") {
          ctx.fillStyle = tint || "#ff9a3c";
          ctx.beginPath();
          ctx.arc(x, y, (0.7 + q.s * 1.4) * size, 0, Math.PI * 2);
          ctx.fill();
        } else if (wxType === "leaves") {
          ctx.fillStyle = tint || "#7dc46a";
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(q.p + t * (0.5 + q.s));
          ctx.beginPath();
          ctx.ellipse(0, 0, 3.2 * size, 1.8 * size, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        } else { // petals
          ctx.fillStyle = tint || "#ffb3c6";
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(q.p + t * (0.4 + q.s * 0.8));
          ctx.beginPath();
          ctx.ellipse(0, 0, 3 * size, 1.7 * size, 0, 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      }
      ctx.restore();
    } else if (wxKey) { wxKey = ""; wxParts = []; }
    // motes
    if (settings.moOn && (playing || settings.wxLobby)) {
      const n = Math.max(0, Math.min(150, Math.round(Number(settings.moCount) || 40)));
      const key = `motes|${n}`;
      if (moKey !== key) {
        moKey = key;
        moParts = [];
        for (let i = 0; i < n; i++) {
          moParts.push({ x: Math.random(), y: Math.random(), s: Math.random(), p: Math.random() * Math.PI * 2 });
        }
      }
      const size = Math.max(0.3, Number(settings.moSize) || 1.5);
      const spd = Number(settings.moSpeed) || 0.3;
      const drift = Number(settings.moDrift) ?? 12;
      ctx.save();
      ctx.fillStyle = settings.moColor || "#ffd6e4";
      for (const q of moParts) {
        q.y -= dt * 0.008 * spd * (0.4 + q.s);
        q.x += dt * 0.004 * Math.sin(t * 0.5 + q.p) * (isFinite(drift) ? drift : 12) * 0.1;
        if (q.y < -0.02) { q.y = 1.02; q.x = Math.random(); }
        ctx.globalAlpha = clamp(Number(settings.moOp) ?? 0.5, 0, 1) * (0.5 + 0.5 * Math.sin(t + q.p * 3));
        ctx.beginPath();
        ctx.arc(q.x * W, q.y * H, (0.6 + q.s) * size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    } else if (moKey) { moKey = ""; moParts = []; }
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
      if (l.groundColor && o.ground) l.groundColor.copy(o.ground);
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
      if (!lighting.orig.has(l)) lighting.orig.set(l, { i: l.intensity, color: l.color ? l.color.clone() : null, ground: l.groundColor ? l.groundColor.clone() : null });
      if (l.isDirectionalLight && (!sun || lighting.orig.get(l).i > lighting.orig.get(sun).i)) sun = l;
    }
    for (const l of lighting.list) {
      const o = lighting.orig.get(l);
      l.intensity = o.i * (l.isDirectionalLight ? settings.sunMult : settings.hemiMult);
      if (l.color && o.color) {
        if (l === sun && settings.sunTint) l.color.set(settings.sunColor);
        else if (l.isHemisphereLight && settings.hemiOn) {
          l.color.set(settings.hemiSky || "#bcd6ff");
          if (l.groundColor) l.groundColor.set(settings.hemiGround || "#4a4238");
        }
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
      if ("density" in fog) fog.density = o.density;
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

  // Curated fog configs — no sliders, just pick one.
  var FOG_PRESETS = {
    light:  { color: "#aab4c4", near: 30, far: 600 },
    thick:  { color: "#9aa2b2", near: 5, far: 150 },
    night:  { color: "#05070f", near: 10, far: 350 },
    sakura: { color: "#e8a8c0", near: 20, far: 500 },
    desert: { color: "#e8c88a", near: 25, far: 450 },
    deep:   { color: "#000000", near: 2, far: 80 }
  };
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
      sky.fogOrig = { near: fog.near, far: fog.far, density: fog.density, color: fog.color ? fog.color.clone() : null };
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
    } else if (fogMode === "custom") {
      const fp = FOG_PRESETS[settings.fogPreset] || FOG_PRESETS.thick;
      if (fog.isFogExp2 || (!isFinite(fog.near) && isFinite(fog.density))) {
        fog.density = 1.73 / Math.max(10, fp.far);
      } else {
        fog.near = fp.near;
        fog.far = fp.far;
      }
      if (fog.color) fog.color.set(fp.color);
    } else {
      fog.near = sky.fogOrig.near;
      fog.far = sky.fogOrig.far;
    }
    if (fogMode === "sky") {
      const c = skyColor(scene);
      if (c && fog.color) fog.color.copy(c);
    } else if (fogMode !== "custom" && fog.color && sky.fogOrig.color) fog.color.copy(sky.fogOrig.color);
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

  // ── Day cycle + sun position + radar cosmetics ──
  // The cycle drives the EXISTING lighting settings (sun/hemi/exposure/sky)
  // instead of touching lights itself, so it never fights tickLighting —
  // the base values are snapshotted on enable and restored on disable.
  var wdBase = null, wdSunLight = null, wdSunAt = 0, wdSunOrig = null, wdPosTouched = false;
  var wdLastT = 0, wdFlash = 0, wdNextBolt = 0;
  var WD_KEYS = [
    [0,   { sky: "#05070f", sun: "#8fb4ff", sunI: 0.25, hemiI: 0.5, expo: 0.85 }],
    [4.5, { sky: "#05070f", sun: "#8fb4ff", sunI: 0.25, hemiI: 0.5, expo: 0.85 }],
    [6.5, { sky: "#e8a06c", sun: "#ffb36b", sunI: 0.8, hemiI: 0.85, expo: 0.95 }],
    [9,   { sky: "#7fb2e5", sun: "#fff4e0", sunI: 1, hemiI: 1, expo: 1 }],
    [16,  { sky: "#7fb2e5", sun: "#fff4e0", sunI: 1, hemiI: 1, expo: 1 }],
    [18,  { sky: "#e8906c", sun: "#ff9a5c", sunI: 0.85, hemiI: 0.9, expo: 0.95 }],
    [20,  { sky: "#05070f", sun: "#8fb4ff", sunI: 0.25, hemiI: 0.5, expo: 0.85 }],
    [24,  { sky: "#05070f", sun: "#8fb4ff", sunI: 0.25, hemiI: 0.5, expo: 0.85 }]
  ];
  function wdAt(t) {
    t = ((t % 24) + 24) % 24;
    let a = WD_KEYS[0], b = WD_KEYS[WD_KEYS.length - 1];
    for (let i = 0; i < WD_KEYS.length - 1; i++) {
      if (t >= WD_KEYS[i][0] && t <= WD_KEYS[i + 1][0]) { a = WD_KEYS[i]; b = WD_KEYS[i + 1]; break; }
    }
    const f = (t - a[0]) / Math.max(1e-6, b[0] - a[0]);
    const mix = (x, y) => x + (y - x) * f;
    return {
      sky: chMixHex(a[1].sky, b[1].sky, f),
      sun: chMixHex(a[1].sun, b[1].sun, f),
      sunI: mix(a[1].sunI, b[1].sunI),
      hemiI: mix(a[1].hemiI, b[1].hemiI),
      expo: mix(a[1].expo, b[1].expo)
    };
  }
  function wdAdoptSun(best, now) {
    if (wdSunLight !== best) {
      wdSunLight = best;
      try {
        wdSunOrig = best.position ? { x: best.position.x, y: best.position.y, z: best.position.z } : null;
      } catch (_) { wdSunOrig = null; }
    }
    wdSunAt = now;
  }
  function wdFindSun(g) {
    const now = performance.now();
    if (wdSunLight && now - wdSunAt < 2000) return wdSunLight;
    // Reuse the lighting module's fresh scan when available — halves scene
    // traverses (a full traverse every 2s can hitch frames).
    if (now - lighting.scanAt < 2500 && lighting.list && lighting.list.length) {
      let best = null, bi = -Infinity;
      for (const o of lighting.list) {
        if (o && o.isDirectionalLight) {
          let inten = o.intensity;
          try {
            const base = lighting.orig.get(o);
            if (base && isFinite(base.i)) inten = base.i;
          } catch (_) {}
          if (isFinite(inten) && inten > bi) { bi = inten; best = o; }
        }
      }
      if (best) {
        wdAdoptSun(best, now);
        return wdSunLight;
      }
    }
    const scene = g && g.scene;
    if (!scene || typeof scene.traverse !== "function") return wdSunLight;
    let best = null, bi = -Infinity;
    try {
      scene.traverse((o) => {
        if (o && o.isDirectionalLight && isFinite(o.intensity) && o.intensity > bi) { bi = o.intensity; best = o; }
      });
    } catch (_) {}
    if (best) wdAdoptSun(best, now);
    return wdSunLight;
  }
  function wdPlaceSun(g, elevDeg, azimDeg) {
    const sun = wdFindSun(g);
    if (!sun || !sun.position) return false;
    try {
      const el = elevDeg * Math.PI / 180, az = azimDeg * Math.PI / 180, r = 100;
      sun.position.set(
        r * Math.cos(el) * Math.cos(az),
        r * Math.sin(el),
        r * Math.cos(el) * Math.sin(az)
      );
      wdPosTouched = true;
      return true;
    } catch (_) { return false; }
  }
  function wdRestoreSun() {
    if (wdPosTouched && wdSunLight && wdSunOrig && wdSunLight.position) {
      try { wdSunLight.position.set(wdSunOrig.x, wdSunOrig.y, wdSunOrig.z); } catch (_) {}
    }
    wdPosTouched = false;
  }
  function tickDayCycle(g, isLive) {
    const now = performance.now();
    const dt = Math.min(0.25, (now - (wdLastT || now)) / 1000);
    wdLastT = now;
    if (!isLive || !settings.wdCycle) {
      if (wdBase) {
        Object.assign(settings, wdBase);
        wdBase = null;
        save();
      }
      if (!settings.wdManual) wdRestoreSun();
      else wdPlaceSun(g, chNum(settings.wdElev, 45), chNum(settings.wdAzim, 180));
      wdFlash = 0;
      return;
    }
    if (!wdBase) {
      wdBase = {
        sunMult: settings.sunMult, hemiMult: settings.hemiMult,
        lightExposure: settings.lightExposure, sunTint: settings.sunTint,
        sunColor: settings.sunColor, skyColor: settings.skyColor
      };
      settings.ambience = true;
      settings.customLighting = true;
      settings.customSky = true;
      settings.sunTint = true;
    }
    if (settings.wdAuto !== false) {
      settings.wdTime = (((Number(settings.wdTime) || 12) + dt * chNum(settings.wdSpeed, 0.25)) % 24 + 24) % 24;
    }
    if (settings.wdBolt) {
      if (now >= wdNextBolt) {
        wdFlash = 1;
        wdNextBolt = now + (2000 + Math.random() * Math.max(1000, chNum(settings.wdBoltRate, 8) * 1000));
      }
    } else wdNextBolt = 0;
    wdFlash = Math.max(0, wdFlash - dt * 5);
    const k = wdAt(settings.wdTime);
    const nightness = 1 - Math.max(0, Math.min(1, (k.sunI - 0.25) / 0.75));
    const nd = chNum(settings.wdNight, 0.7) * nightness;
    settings.sunMult = Math.max(0.05, k.sunI * (1 - nd * 0.6) + wdFlash * 3);
    settings.hemiMult = Math.max(0.05, k.hemiI * (1 - nd * 0.6));
    settings.lightExposure = Math.max(0.2, k.expo * (1 - nd * 0.4));
    settings.sunColor = wdFlash > 0.02 ? chMixHex(k.sun, "#ffffff", Math.min(1, wdFlash)) : k.sun;
    settings.skyColor = wdFlash > 0.02 ? chMixHex(k.sky, "#ffffff", Math.min(1, wdFlash * 0.5)) : k.sky;
    const el = 90 * Math.sin(Math.PI * (chNum(settings.wdTime, 12) - 6) / 12);
    const az = 180 + (chNum(settings.wdTime, 12) - 12) * 15;
    wdPlaceSun(g, Math.max(-20, el), (az % 360 + 360) % 360);
  }
  // ── Radar cosmetics (pure CSS over the game's own #radar) ──
  var rdStyleEl = null, rdLastCss = "###";
  function tickRadar() {
    const on = settings.rdOn || settings.rdHide;
    let css = "";
    if (on) {
      if (settings.rdHide) css = "#radar{display:none!important}";
      else {
        const pos = settings.rdPos || "tl";
        const p = pos === "tr" ? "left:auto;right:14px;top:14px;bottom:auto;" :
                  pos === "bl" ? "left:14px;right:auto;top:auto;bottom:14px;" :
                  pos === "br" ? "left:auto;right:14px;top:auto;bottom:14px;" :
                  "left:14px;right:auto;top:14px;bottom:auto;";
        css = `#radar{${p}opacity:${clamp(chNum(settings.rdOp, 1), 0.1, 1)}!important;`
          + `border-color:${settings.rdRing || "#4a4f55"}!important;`
          + (settings.rdSquare ? "border-radius:12px!important;" : "")
          + `zoom:${clamp(chNum(settings.rdSize, 1), 0.5, 2)};}`;
      }
    }
    if (css === rdLastCss) return;
    rdLastCss = css;
    if (!css) {
      if (rdStyleEl) { rdStyleEl.remove(); rdStyleEl = null; }
      return;
    }
    if (!rdStyleEl) {
      rdStyleEl = document.createElement("style");
      (document.head || document.documentElement).appendChild(rdStyleEl);
    }
    rdStyleEl.textContent = css;
  }

  // ── Game-native cosmetics: drive the game's own HUD objects + CSS ──
  // The game keeps its crosshair in hud.xh (len/thick/gap/alpha/outline/dot,
  // color index 5 = custom r/g/b) applied via hud.applyCrosshair(). We snapshot
  // it on enable, write our values while enabled, and restore on disable.
  // Team colors / death / hitmarker / arcs / money go through one <style> tag.
  var gameXhBase = null, gxLastKey = "";
  function gameHud() {
    try {
      const g = getGame();
      return g && g.hud ? g.hud : null;
    } catch (_) { return null; }
  }
  function tickGameXh() {
    let xh = null, hud = null;
    try {
      hud = gameHud();
      xh = hud && hud.xh ? hud.xh : null;
    } catch (_) { xh = null; }
    if (!settings.gxOn || !xh || !hud) {
      if (gameXhBase) {
        try {
          const h2 = gameHud();
          if (h2 && h2.xh) {
            Object.assign(h2.xh, gameXhBase);
            if (typeof h2.applyCrosshair === "function") h2.applyCrosshair();
          }
        } catch (_) {}
        gameXhBase = null;
        gxLastKey = "";
      }
      return;
    }
    if (!gameXhBase) {
      try { gameXhBase = { ...xh }; } catch (_) { gameXhBase = null; }
    }
    try {
      const c = chHexRgb(settings.gxColor || "#3cff5a");
      xh.color = 5;
      xh.r = c[0]; xh.g = c[1]; xh.b = c[2];
      xh.alpha = Math.round(clamp(chNum(settings.gxAlpha, 1), 0, 1) * 255);
      xh.len = chNum(settings.gxLen, xh.len);
      xh.thick = Math.max(1, Math.round(chNum(settings.gxThick, xh.thick)));
      xh.gap = chNum(settings.gxGap, xh.gap);
      if ("dot" in xh) xh.dot = settings.gxDot ? 1 : 0;
      if ("outline" in xh) xh.outline = settings.gxOutline === false ? 0 : 1;
      if ("outw" in xh) xh.outw = chNum(settings.gxOutw, xh.outw);
      if ("style" in xh) xh.style = settings.gxStyle ? 1 : 0;
      if ("sniper" in xh) xh.sniper = Math.max(1, Math.round(chNum(settings.gxSniper, xh.sniper)));
      const key = [xh.color, xh.r, xh.g, xh.b, xh.alpha, xh.len, xh.thick, xh.gap,
        xh.dot, xh.outline, xh.outw, xh.style, xh.sniper].join("|");
      if (key !== gxLastKey && typeof hud.applyCrosshair === "function") {
        gxLastKey = key;
        hud.applyCrosshair();
      }
    } catch (_) {}
  }
  var gameCssEl = null, gameCssLast = "###";
  function tickGameCss() {
    let css = "";
    if (settings.gcTeam) {
      if (settings.gcCT) css += `:root{--ct:${settings.gcCT}!important;}`;
      if (settings.gcT) css += `:root{--t:${settings.gcT}!important;}`;
    }
    if (settings.dcOn) {
      css += `#deathov{opacity:${clamp(chNum(settings.dcOp, 0.6), 0, 1)}!important;}`;
      if (settings.dcColor) {
        css += `#deathov{background:radial-gradient(circle at 50% 50%,${hexA(settings.dcColor, 0.25)} 0%,${hexA(settings.dcColor, 0.55)} 70%,${hexA(settings.dcColor, 0.75)} 100%)!important;}`;
      }
      if (settings.dcAccent) css += `#killcard{border-top-color:${settings.dcAccent}!important;}`;
    }
    if (settings.ghOn) {
      css += `#hitmark .hm{background:${settings.ghColor || "#ffffff"}!important;}`;
      css += `#hitmark.hs .hm{background:${settings.ghHs || "#ff4040"}!important;}`;
      css += `#hitmarkwrap{scale:${clamp(chNum(settings.ghSize, 1), 0.5, 2)};}`;
    }
    if (settings.daOn && settings.daColor) {
      css += `.dmgarc{border-top-color:${hexA(settings.daColor, 0.9)}!important;}`;
    }
    if (settings.mnOn && settings.mnColor) {
      css += `#money{color:${settings.mnColor}!important;}`;
    }
    if (css === gameCssLast) return;
    gameCssLast = css;
    if (!css) {
      if (gameCssEl) { gameCssEl.remove(); gameCssEl = null; }
      return;
    }
    if (!gameCssEl) {
      gameCssEl = document.createElement("style");
      (document.head || document.documentElement).appendChild(gameCssEl);
    }
    gameCssEl.textContent = css;
  }

  function worldTick(g) {
    tickRadar();
    const isLive = g && isPlaying(g);
    tickDayCycle(g, isLive);
    // No Bloom works standalone (dev toggle) or via ambience presets
    const noBloom = isLive && (settings.devNoBloom || (settings.ambience && settings.noBloomFx));
    tickBloom(g, noBloom);
    const want = isLive && settings.ambience && (settings.customLighting || settings.customSky || settings.fogMode !== "default" || settings.colorGrade || settings.wdCycle || settings.wdManual);
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
  // removed cleanly with the original function when toggled off. FOV writes
  // are coalesced (change / weapon-switch / 1s re-assert) so we never fight
  // the game's own camera sync every frame.
  var vmStore = new WeakMap();
  var vmAliveWas = true, vmInspectAt = 0;
  var vmFovCache = { want: null, for: null, at: 0 };
  function vmScopedNow() {
    try {
      const gg = getGame();
      return !!(gg && (gg.scoped || (gg.weapons && gg.weapons.scopeLevel > 0)));
    } catch (_) { return false; }
  }
  function vmEnforceFov(vm, st, now) {
    const cur = (vm && vm.current) || null;
    if (!settings.vmFovOn) {
      // Toggle flipped off mid-session: take back only our own write.
      if (st && st.fov != null && vmFovCache.for === cur && vmFovCache.want != null) {
        try {
          const cam = vm && vm.camera;
          if (cam && cam.fov === vmFovCache.want) {
            cam.fov = st.fov;
            if (typeof cam.updateProjectionMatrix === "function") cam.updateProjectionMatrix();
          }
        } catch (_) {}
        vmFovCache = { want: null, for: null, at: 0 };
      }
      return;
    }
    if (vmScopedNow()) return; // scoped: the game owns the zoom, don't fight it
    const fov = Math.max(30, Math.min(120, chNum(settings.vmFov, st && st.fov != null ? st.fov : 70)));
    if (vmFovCache.want === fov && vmFovCache.for === cur && now - (vmFovCache.at || 0) < 1000) return;
    try {
      const cam = vm && vm.camera;
      if (cam && typeof cam.updateProjectionMatrix === "function") {
        cam.fov = fov;
        cam.updateProjectionMatrix();
        vmFovCache = { want: fov, for: cur, at: now };
      }
    } catch (_) {}
  }
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
      vmFovCache = { want: null, for: null, at: 0 };
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
      // Auto inspect on spawn.
      const pl = g && g.player;
      const aliveNow = !pl || pl.alive !== false;
      if (settings.vmInspectAuto && !vmAliveWas && aliveNow) vmInspectAt = performance.now() + 800;
      vmAliveWas = aliveNow;
      if (vmInspectAt && performance.now() >= vmInspectAt) {
        vmInspectAt = 0;
        if (typeof vm.inspect === "function") {
          try { vm.inspect(); } catch (_) {}
        }
      }
    } catch (_) {}
    // Viewmodel camera FOV (coalesced — see vmEnforceFov).
    try { vmEnforceFov(vm, st, performance.now()); } catch (_) {}
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
              // Arm-only adjust: shift the arm meshes (shoulder included) or
              // hide ones matching the name pattern.
              const aax = chNum(settings.armX, 0), aay = chNum(settings.armY, 0), aaz = chNum(settings.armZ, 0);
              const pat = (settings.armHideName || "").trim().toLowerCase();
              if (aax || aay || aaz || pat) {
                const gg2 = getGame();
                for (const am of vmArmList(gg2, performance.now())) {
                  if (!am) continue;
                  if (am.position && (aax || aay || aaz)) {
                    am.position.x += aax;
                    am.position.y += aay;
                    am.position.z += aaz;
                  }
                  if (pat) {
                    const nm = String((am.name || "")).toLowerCase();
                    if (nm.includes(pat)) {
                      if (am.visible !== false) {
                        if (am.userData._sakPart === undefined) am.userData._sakPart = am.visible;
                        am.visible = false;
                      }
                      continue;
                    }
                  }
                  if (am.userData._sakPart !== undefined && !settings.armHide) {
                    am.visible = am.userData._sakPart;
                    delete am.userData._sakPart;
                  }
                }
              }
            }
            // Last word on FOV inside the game's own update flow, in case it
            // re-syncs the viewmodel camera after our per-frame write.
            try { vmEnforceFov(vm, st, performance.now()); } catch (_) {}
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
  // ── Arm adjust (move/hide arm meshes independently of the gun) ──
  // The shoulder is baked into the arm meshes, so hiding by name is a guess —
  // shifting the arms themselves always works. Resolved on the same rescan
  // rhythm as chams; offsets apply after the game's update (no restore needed,
  // the game rewrites positions every frame), name-hides restore themselves.
  var vmArmCache = { list: [], key: null, at: 0 };
  function vmArmList(g, now) {
    const c = vmArmCache;
    const scanMs = Math.max(500, chNum(settings.chamsScan, 2) * 1000);
    const rig = g && g.cs2 && g.cs2.rig;
    const vm = g && g.viewmodel;
    const key = (rig && rig.arms ? rig.arms : 0) + "|" + (vm ? (vm.current || vm.root || 0) : 0);
    if (c.key !== key || now - (c.at || 0) > scanMs) {
      c.key = key;
      c.at = now;
      c.list = [];
      try {
        if (rig && rig.arms && typeof rig.arms.traverse === "function") {
          rig.arms.traverse((o) => { if (o && o.isMesh) c.list.push(o); });
        }
      } catch (_) {}
      try {
        if (vm) {
          for (const k of ["_lhand", "_offhand"]) {
            const arr = vm[k];
            if (!Array.isArray(arr)) continue;
            for (const e of arr) {
              const mesh = e && e.isMesh ? e : (Array.isArray(e) ? e[0] : null);
              if (mesh && mesh.isMesh && !c.list.includes(mesh)) c.list.push(mesh);
            }
          }
        }
      } catch (_) {}
    }
    return c.list;
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
    try {
      if (window.__sakuraTakeover !== SAKURA_ID) return;
      window.__sakuraBeat = Date.now();
    } catch (_) {}
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
    tickGameXh();
    tickGameCss();
    stTrackCombat(g);
    tickMotionBlur(g);

    const inMatch = liveMatch(g);

    // Skip the fullscreen clear + draw entirely when nothing is visible.
    // With an uncapped frame rate this loop can spin at 500+ fps, and a
    // fullscreen clearRect every one of those frames alone can saturate the
    // compositor — the window stutters while game logic stays smooth.
    const playing = isPlaying(g);
    const scopedNow = !!(g && (g.scoped || (g.weapons && g.weapons.scopeLevel > 0)));
    const overlayActive =
      (settings.keystrokes && playing) ||
      (settings.crosshair && (playing || settings.chInLobby)) ||
      ((settings.hudWm || settings.hudFps || settings.hudInfo || settings.hudBars || settings.hudAmmo) && playing) ||
      ((settings.atTracers || settings.mzOn || settings.imOn || settings.wxOn || settings.moOn) && (playing || settings.wxLobby)) ||
      ((settings.kbOn || settings.scOn) && playing) ||
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
    if ((settings.hudWm || settings.hudFps || settings.hudInfo || settings.hudBars || settings.hudAmmo) && isPlaying(g)) drawHudExtras(rect, now, dt, g);
    if ((settings.atTracers || settings.mzOn || settings.imOn || settings.wxOn || settings.moOn) && (isPlaying(g) || settings.wxLobby)) drawAtmoFX(rect, now, dt, g);
    if (settings.kbOn && playing) tickKillBanner(rect, now, dt);
    if (settings.scOn && playing && scopedNow) drawScope(rect, g);
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
    cross: '<circle cx="12" cy="12" r="9"/><path d="M12 7v10M7 12h10"/>',
    fx: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M7 5v14M17 5v14M3 12h3M18 12h3"/>',
    game: '<rect x="2" y="7" width="20" height="10" rx="5"/><path d="M7 11h.01M17 11h.01M10 9.5v3M8.5 11h3"/>'
  };
  var CATEGORIES = [
    { id: "hud", label: "HUD", icon: ICONS.hud },
    { id: "world", label: "World", icon: ICONS.world },
    { id: "chams", label: "Chams", icon: ICONS.chams },
    { id: "crosshair", label: "Cross", icon: ICONS.cross },
    { id: "fx", label: "FX", icon: ICONS.fx },
    { id: "game", label: "Game", icon: ICONS.game }
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
        row("Menu style", "Lunar is the main look", selectField(settings.uiStyle, [["minimal", "Minimal (Sakura)"], ["lunar", "Lunar"]], (v) => {
          settings.uiStyle = v; save(); rebuildPanel();
        })),
        row("Accent", "Applies to the Lunar menu", colorField(settings.uiAccent, (v) => {
          settings.uiAccent = v; save();
          try { panelEl?.style.setProperty("--acc", v); } catch (_) {}
        })),
        row("Accent preset", null, selectField(settings.mnAccentP || "custom", [["custom", "Custom"], ["sakura", "Sakura"], ["cyan", "Cyan"], ["green", "Green"], ["gold", "Gold"], ["purple", "Purple"], ["red", "Red"], ["white", "White"]], (v) => {
          const C = { sakura: "#ff6b9d", cyan: "#22d3ee", green: "#4ade80", gold: "#facc15", purple: "#a78bfa", red: "#ef4444", white: "#ffffff" };
          settings.mnAccentP = v;
          if (C[v]) {
            settings.uiAccent = C[v];
            try { panelEl?.style.setProperty("--acc", C[v]); } catch (_) {}
          }
          save();
        })),
        row("Panel opacity", null, rangeField(settings.mnOp ?? menuStock("op"), 0.3, 1, 0.05, (v) => { settings.mnOp = v; save(); applyMenuVars(); })),
        row("Panel blur", "Backdrop px", rangeField(settings.mnBlur ?? menuStock("blur"), 0, 40, 1, (v) => { settings.mnBlur = v; save(); applyMenuVars(); })),
        row("Roundness", "Corner radius", rangeField(settings.mnRad ?? menuStock("rad"), 6, 28, 1, (v) => { settings.mnRad = v; save(); applyMenuVars(); })),
        row("Menu scale", null, rangeField(settings.mnScale ?? 1, 0.8, 1.3, 0.05, (v) => { settings.mnScale = v; save(); applyMenuVars(); })),
        row("Animations", "UI motion pack", toggleSwitch(settings.uiMotion !== false, (v) => { settings.uiMotion = v; save(); applyMenuVars(); })),
        row("Export config", "Copy settings JSON", actionBtn("Copy", () => {
          try {
            const json = JSON.stringify(settings);
            if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(json).catch(() => window.prompt("Copy your config:", json));
            else window.prompt("Copy your config:", json);
          } catch (_) {}
        })),
        row("Import config", "Paste settings JSON", actionBtn("Paste", () => {
          try {
            const json = window.prompt("Paste config JSON:");
            if (!json) return;
            const obj = JSON.parse(json);
            for (const k of Object.keys(obj)) if (k in DEFAULTS) settings[k] = obj[k];
            save();
            rebuildPanel();
            applyMenuVars();
          } catch (_) {}
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
      scope: '<circle cx="12" cy="12" r="8"/><path d="M12 1v6M12 17v6M1 12h6M17 12h6"/>',
      spark: '<path d="M12 2v6M12 16v6M2 12h6M16 12h6"/><circle cx="12" cy="12" r="2.5"/>',
      rain: '<path d="M7 15a4 4 0 1 1 1-7.9A5.5 5.5 0 0 1 18.5 9 3.5 3.5 0 0 1 17.5 16H7z"/><path d="M8 18l-1 3M12 18l-1 3M16 18l-1 3"/>',
      radar: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><path d="M12 12l5-5"/>',
      move: '<path d="M12 2v20M2 12h20"/><path d="M12 2 9 5M12 2l3 3M12 22l-3-3M12 22l3 3M2 12l3-3M2 12l3 3M22 12l-3-3M22 12l-3 3"/>'
    };
    var LUNAR_MODULES = [
      { tab: "hud", title: "Keystrokes", icon: "keys", get: () => settings.keystrokes, set: (v) => { settings.keystrokes = v; save(); } },
      { tab: "hud", title: "Watermark", icon: "plus", get: () => settings.hudWm, set: (v) => { settings.hudWm = v; save(); } },
      { tab: "hud", title: "FPS Counter", icon: "gauge", get: () => settings.hudFps, set: (v) => { settings.hudFps = v; save(); } },
      { tab: "hud", title: "Clock & Session", icon: "refresh", get: () => settings.hudInfo, set: (v) => { settings.hudInfo = v; save(); } },
      { tab: "hud", title: "Health Bars", icon: "trend", get: () => settings.hudBars, set: (v) => { settings.hudBars = v; save(); } },
      { tab: "hud", title: "Ammo", icon: "dice", get: () => settings.hudAmmo, set: (v) => { settings.hudAmmo = v; save(); } },
      { tab: "game", title: "Game Crosshair", icon: "target", get: () => settings.gxOn, set: (v) => { settings.gxOn = v; save(); } },
      { tab: "game", title: "Team Colors", icon: "plus", get: () => settings.gcTeam, set: (v) => { settings.gcTeam = v; save(); } },
      { tab: "game", title: "Death Screen", icon: "bolt", get: () => settings.dcOn, set: (v) => { settings.dcOn = v; save(); } },
      { tab: "game", title: "Hitmarker", icon: "dice", get: () => settings.ghOn, set: (v) => { settings.ghOn = v; save(); } },
      { tab: "game", title: "Damage Arcs", icon: "trend", get: () => settings.daOn, set: (v) => { settings.daOn = v; save(); } },
      { tab: "game", title: "Money", icon: "coin", get: () => settings.mnOn, set: (v) => { settings.mnOn = v; save(); } },
      { tab: "fx", title: "Tracers", icon: "bolt", get: () => settings.atTracers, set: (v) => { settings.atTracers = v; save(); } },
      { tab: "fx", title: "Muzzle", icon: "sun", get: () => settings.mzOn, set: (v) => { settings.mzOn = v; save(); } },
      { tab: "fx", title: "Impact", icon: "spark", get: () => settings.imOn, set: (v) => { settings.imOn = v; save(); } },
      { tab: "fx", title: "Weather", icon: "rain", get: () => settings.wxOn, set: (v) => { settings.wxOn = v; save(); } },
      { tab: "fx", title: "Motes", icon: "plus", get: () => settings.moOn, set: (v) => { settings.moOn = v; save(); } },
      { tab: "world", title: "Ambience", icon: "globe", get: () => settings.ambience, set: (v) => { settings.ambience = v; save(); } },
      { tab: "world", title: "Motion Blur", icon: "blur", get: () => settings.motionBlur, set: (v) => { settings.motionBlur = v; save(); } },
      { tab: "world", title: "Day Cycle", icon: "sun", get: () => settings.wdCycle, set: (v) => { settings.wdCycle = v; save(); } },
      { tab: "world", title: "Light", icon: "sliders", get: () => settings.customLighting, set: (v) => { settings.customLighting = v; save(); } },
      { tab: "world", title: "Fog Lab", icon: "blur", get: () => settings.fogCustom, set: (v) => { settings.fogCustom = v; settings.fogMode = v ? "custom" : "default"; if (v) settings.ambience = true; save(); } },
      { tab: "world", title: "Radar", icon: "radar", get: () => settings.rdOn, set: (v) => { settings.rdOn = v; save(); } },
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
      { tab: "crosshair", title: "Scope", icon: "scope", get: () => settings.scOn, set: (v) => { settings.scOn = v; save(); } },
      { tab: "hud", title: "Kill Banner", icon: "gift", get: () => settings.kbOn, set: (v) => { settings.kbOn = v; save(); } },
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
      for (const c of [...cardsFor("hud"), ...cardsFor("world"), ...cardsFor("chams"), ...cardsFor("crosshair"), ...cardsFor("fx"), ...cardsFor("game"), ...(devUnlocked ? devCards() : [])]) {
        const t = c.querySelector(".sk-card-title strong");
        if (t && !pool.has(t.textContent)) pool.set(t.textContent, c);
      }
      if (betaUnlocked && !pool.has("Interface")) pool.set("Interface", interfaceCard());
      const defs = LUNAR_MODULES.filter((d) => d.tab !== "dev" || devUnlocked);
      const cards = new Map();
      const catBtns = [];
      const paintCounts = () => {
        for (const e of catBtns) {
          const tabs = e.kids ? e.kids : [e.id];
          const list = e.id === "all" ? defs : defs.filter((d) => tabs.includes(d.tab));
          const on = list.filter((d) => !d.get || d.get()).length;
          e.n.textContent = `${on}/${list.length}`;
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

      // Sidebar: main tabs with pop-out subtabs
      const NAV = [
        { id: "all", label: "All" },
        { id: "hud", label: "HUD" },
        { id: "game", label: "Game" },
        {
          id: "visuals", label: "Visuals",
          children: [["world", "World"], ["chams", "Chams"], ["crosshair", "Cross"], ["fx", "FX"]]
        },
        {
          id: "system", label: "System",
          children: [...(betaUnlocked ? [["beta", "Beta"]] : []), ...(devUnlocked ? [["dev", "Dev"]] : [])]
        }
      ];
      for (let i = NAV.length - 1; i >= 0; i--) {
        if (NAV[i].children && !NAV[i].children.length) NAV.splice(i, 1);
      }
      let filter = "all";
      let openMain = null;
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
      const setActive = () => {
        for (const e of catBtns) {
          if (e.parent) {
            e.el.classList.toggle("active", filter === e.id);
            e.el.style.display = openMain === e.parent ? "" : "none";
          } else {
            const inMain = e.kids && e.kids.some((kid) => kid === filter);
            e.el.classList.toggle("active", filter === e.id || (inMain && openMain === e.id));
            e.el.classList.toggle("open", openMain === e.id && !!e.kids);
          }
        }
      };
      const selectFilter = (id, main) => {
        filter = id;
        if (main !== undefined) openMain = main;
        setActive();
        applyFilter();
        let i = 0;
        for (const def of defs) {
          const el = cards.get(def.title);
          if (!el || el.style.display === "none") continue;
          el.style.animation = "none";
          void el.offsetWidth;
          el.style.animation = "";
          el.style.animationDelay = (Math.min(i++, 14) * 26) + "ms";
        }
      };
      const mkCount = () => {
        const n = document.createElement("span");
        n.className = "n";
        return n;
      };
      for (const item of NAV) {
        const b = document.createElement("button");
        b.type = "button";
        b.className = "ln-cat" + (item.id === "all" ? " active" : "");
        const lab = document.createElement("span");
        lab.textContent = item.label;
        const n = mkCount();
        b.append(lab, n);
        const kids = item.children && item.children.length ? item.children.map(([kid]) => kid) : null;
        if (kids) {
          b.classList.add("has-sub");
          const caret = document.createElement("span");
          caret.className = "caret";
          caret.innerHTML = '<svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg>';
          b.appendChild(caret);
          b.onclick = () => {
            const stay = kids.some((kid) => kid === filter) ? filter : kids[0];
            selectFilter(stay, item.id);
          };
          side.appendChild(b);
          catBtns.push({ id: item.id, el: b, n, kids, parent: null });
          for (const [kid, klabel] of item.children) {
            const sb = document.createElement("button");
            sb.type = "button";
            sb.className = "ln-sub";
            sb.style.display = "none";
            const slab = document.createElement("span");
            slab.textContent = klabel;
            const sn = mkCount();
            sb.append(slab, sn);
            sb.onclick = () => selectFilter(kid, item.id);
            side.appendChild(sb);
            catBtns.push({ id: kid, el: sb, n: sn, kids: null, parent: item.id });
          }
        } else {
          b.onclick = () => selectFilter(item.id, null);
          side.appendChild(b);
          catBtns.push({ id: item.id, el: b, n, kids: null, parent: null });
        }
      }
      setActive();
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
            ]),
          moduleCard("Watermark", "Sakura tag with live stats.", settings.hudWm,
            (v) => { settings.hudWm = v; save(); }, [
              row("Text", null, textField(settings.wmText || "Sakura", 24, (v) => { settings.wmText = v; save(); })),
              row("Show FPS", null, toggleSwitch(settings.wmFps !== false, (v) => { settings.wmFps = v; save(); })),
              row("Show clock", null, toggleSwitch(settings.wmClock, (v) => { settings.wmClock = v; save(); })),
              row("Show kills", null, toggleSwitch(settings.wmKills, (v) => { settings.wmKills = v; save(); })),
              row("Position", null, selectField(settings.wmPos || "tl", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.wmPos = v; save(); })),
              row("Size", null, rangeField(settings.wmSize, 9, 20, 1, (v) => { settings.wmSize = v; save(); })),
              row("Opacity", null, rangeField(settings.wmOp ?? 0.9, 0.2, 1, 0.05, (v) => { settings.wmOp = v; save(); })),
              row("Accent bar", null, toggleSwitch(settings.wmAccent !== false, (v) => { settings.wmAccent = v; save(); })),
              row("Background", null, toggleSwitch(settings.wmBg !== false, (v) => { settings.wmBg = v; save(); })),
              row("Rainbow text", null, toggleSwitch(settings.wmRainbow, (v) => { settings.wmRainbow = v; save(); }))
            ]),
          moduleCard("FPS Counter", "Readout with history graph.", settings.hudFps,
            (v) => { settings.hudFps = v; save(); }, [
              row("Size", null, rangeField(settings.fpsSize, 9, 24, 1, (v) => { settings.fpsSize = v; save(); })),
              row("Color", null, colorField(settings.fpsColor || "#ffb3c6", (v) => { settings.fpsColor = v; save(); })),
              row("Background", null, toggleSwitch(settings.fpsBg !== false, (v) => { settings.fpsBg = v; save(); })),
              row("Position", null, selectField(settings.fpsPos || "tr", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.fpsPos = v; save(); })),
              row("Graph", "120-frame history", toggleSwitch(settings.fpsGraph, (v) => { settings.fpsGraph = v; save(); })),
              row("Graph height", null, rangeField(settings.fpsGraphH, 8, 60, 2, (v) => { settings.fpsGraphH = v; save(); })),
              row("Graph color", null, colorField(settings.fpsGraphColor || "#ff6b9d", (v) => { settings.fpsGraphColor = v; save(); })),
              row("Show average", null, toggleSwitch(settings.fpsAvg, (v) => { settings.fpsAvg = v; save(); }))
            ]),
          moduleCard("Clock & Session", "Time, session length and K/D.", settings.hudInfo,
            (v) => { settings.hudInfo = v; save(); }, [
              row("Clock", null, toggleSwitch(settings.infoClock !== false, (v) => { settings.infoClock = v; save(); })),
              row("24-hour", null, toggleSwitch(settings.info24, (v) => { settings.info24 = v; save(); })),
              row("Date", null, toggleSwitch(settings.infoDate, (v) => { settings.infoDate = v; save(); })),
              row("Session timer", null, toggleSwitch(settings.infoSession !== false, (v) => { settings.infoSession = v; save(); })),
              row("Kills / deaths", null, toggleSwitch(settings.infoKills !== false, (v) => { settings.infoKills = v; save(); })),
              row("Deaths", null, toggleSwitch(settings.infoDeaths !== false, (v) => { settings.infoDeaths = v; save(); })),
              row("K/D ratio", null, toggleSwitch(settings.infoKD !== false, (v) => { settings.infoKD = v; save(); })),
              row("Shots", "Trigger pulls this session", toggleSwitch(settings.infoShots !== false, (v) => { settings.infoShots = v; save(); })),
              row("Hits", "Hitmarks this session", toggleSwitch(settings.infoHits !== false, (v) => { settings.infoHits = v; save(); })),
              row("Accuracy", "Hits / shots", toggleSwitch(settings.infoAcc !== false, (v) => { settings.infoAcc = v; save(); })),
              row("Position", null, selectField(settings.infoPos || "br", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.infoPos = v; save(); })),
              row("Size", null, rangeField(settings.infoSize, 9, 20, 1, (v) => { settings.infoSize = v; save(); })),
              row("Reset session", "Zero timer and counters", actionBtn("Reset", () => {
                hudSes.t0 = 0; hudSes.kills = 0; hudSes.deaths = 0; hudSes.lastKills = null;
                stReset();
              }))
            ]),
          moduleCard("Health Bars", "Custom HP / armor bars.", settings.hudBars,
            (v) => { settings.hudBars = v; save(); }, [
              row("Position", null, selectField(settings.barsPos || "bl", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.barsPos = v; save(); })),
              row("Width", null, rangeField(settings.barsW, 80, 400, 10, (v) => { settings.barsW = v; save(); })),
              row("Bar height", null, rangeField(settings.barsH, 6, 30, 1, (v) => { settings.barsH = v; save(); })),
              row("HP color", null, colorField(settings.hpColor || "#7dff8a", (v) => { settings.hpColor = v; save(); })),
              row("Armor color", null, colorField(settings.armorColor || "#7db8f0", (v) => { settings.armorColor = v; save(); })),
              row("Show armor", null, toggleSwitch(settings.barsArmor !== false, (v) => { settings.barsArmor = v; save(); })),
              row("Numbers", null, toggleSwitch(settings.barsNumbers !== false, (v) => { settings.barsNumbers = v; save(); })),
              row("Background", null, toggleSwitch(settings.barsBg !== false, (v) => { settings.barsBg = v; save(); })),
              row("Low HP warn", null, toggleSwitch(settings.barsLow !== false, (v) => { settings.barsLow = v; save(); })),
              row("Warn below", null, rangeField(settings.barsLowAt ?? 30, 5, 75, 5, (v) => { settings.barsLowAt = v; save(); }))
            ]),
          moduleCard("Ammo", "Custom ammo counter.", settings.hudAmmo,
            (v) => { settings.hudAmmo = v; save(); }, [
              row("Size", null, rangeField(settings.ammoSize, 12, 40, 1, (v) => { settings.ammoSize = v; save(); })),
              row("Position", null, selectField(settings.ammoPos || "br", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.ammoPos = v; save(); })),
              row("Show reserve", null, toggleSwitch(settings.ammoReserve !== false, (v) => { settings.ammoReserve = v; save(); })),
              row("Low ammo warn", null, toggleSwitch(settings.ammoLow !== false, (v) => { settings.ammoLow = v; save(); })),
              row("Warn at", null, rangeField(settings.ammoLowAt ?? 6, 0, 30, 1, (v) => { settings.ammoLowAt = v; save(); })),
              row("Color", null, colorField(settings.ammoColor || "#ffffff", (v) => { settings.ammoColor = v; save(); })),
              row("Background", null, toggleSwitch(settings.ammoBg !== false, (v) => { settings.ammoBg = v; save(); }))
            ]),
          moduleCard("Kill Banner", "Celebrate elims with banner + confetti.", settings.kbOn,
            (v) => { settings.kbOn = v; save(); }, [
              row("Style", null, selectField(settings.kbStyle || "both", [["both", "Banner + confetti"], ["banner", "Banner"], ["confetti", "Confetti"], ["compact", "Compact banner"]], (v) => { settings.kbStyle = v; save(); })),
              row("Color", null, colorField(settings.kbColor || "#ff6b9d", (v) => { settings.kbColor = v; save(); })),
              row("Size", null, rangeField(settings.kbSize, 12, 40, 1, (v) => { settings.kbSize = v; save(); })),
              row("Duration", "Seconds", rangeField(settings.kbTime, 0.5, 5, 0.1, (v) => { settings.kbTime = v; save(); })),
              row("Confetti", "Pieces per kill", rangeField(settings.kbCount ?? 60, 0, 150, 5, (v) => { settings.kbCount = v; save(); })),
              row("Show name", "Name the victim", toggleSwitch(settings.kbName !== false, (v) => { settings.kbName = v; save(); })),
              row("Multikill", "Streak callouts", toggleSwitch(settings.kbMulti !== false, (v) => { settings.kbMulti = v; save(); })),
              row("Streak window", "Seconds", rangeField(settings.kbWindow ?? 4, 2, 8, 0.5, (v) => { settings.kbWindow = v; save(); })),
              row("Position", null, selectField(settings.kbPos || "top", [["top", "Top"], ["center", "Center"]], (v) => { settings.kbPos = v; save(); }))
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
            row("Pose preset", null, selectField(settings.vmPose || "custom", [["custom", "Custom"], ["default", "Default"], ["centered", "Centered"], ["low", "Low rider"], ["close", "Close-up"], ["left", "Left lean"], ["right", "Right lean"]], (v) => {
              const P = {
                default: [0, 0, 0, 0, 0, 0], centered: [0, -0.02, 0.05, 0, 0, 0],
                low: [0, -0.08, 0, 0, 0, 0], close: [0, -0.01, 0.12, 0, 0, 0],
                left: [-0.1, 0, 0.02, 0, 0, -4], right: [0.08, 0, 0.02, 0, 0, 4]
              }[v];
              settings.vmPose = v;
              if (P) {
                settings.vmX = P[0]; settings.vmY = P[1]; settings.vmZ = P[2];
                settings.vmRX = P[3]; settings.vmRY = P[4]; settings.vmRZ = P[5];
              }
              save();
              rebuildPanel();
            })),
            row("Inspect", "Play inspect animation", actionBtn("Inspect", () => {
              try {
                const vm = getGame()?.viewmodel;
                if (vm && typeof vm.inspect === "function") vm.inspect();
              } catch (_) {}
            })),
            row("Auto inspect", "Inspect on every spawn", toggleSwitch(settings.vmInspectAuto, (v) => { settings.vmInspectAuto = v; save(); })),
            row("Custom FOV", "Own camera zoom", toggleSwitch(settings.vmFovOn, (v) => { settings.vmFovOn = v; save(); })),
            row("FOV value", null, rangeField(settings.vmFov ?? 70, 30, 120, 1, (v) => { settings.vmFov = v; save(); })),
            row("Kick", "Recoil kick percent", rangeField(settings.vmKick ?? 100, 0, 100, 5, (v) => { settings.vmKick = v; save(); })),
            row("Bob", "Walk bob percent", rangeField(settings.vmBob ?? 100, 0, 100, 5, (v) => { settings.vmBob = v; save(); })),
            row("Sway", "Look sway percent", rangeField(settings.vmSway ?? 100, 0, 100, 5, (v) => { settings.vmSway = v; save(); })),
            row("Arm X", "Shift arms right (+) / left (-)", rangeField(settings.armX ?? 0, -0.3, 0.3, 0.005, (v) => { settings.armX = v; save(); })),
            row("Arm Y", "Shift arms up (+) / down (-)", rangeField(settings.armY ?? 0, -0.3, 0.3, 0.005, (v) => { settings.armY = v; save(); })),
            row("Arm Z", "Shift arms toward (+) / away (-)", rangeField(settings.armZ ?? 0, -0.3, 0.3, 0.005, (v) => { settings.armZ = v; save(); })),
            row("Hide part", "Hide arm meshes by name, e.g. shoulder", textField(settings.armHideName || "", 40, (v) => { settings.armHideName = v; save(); })),
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
            ]),
          moduleCard("Scope", "Custom scope overlay when actually scoped.", settings.scOn,
            (v) => { settings.scOn = v; save(); }, [
              row("Style", null, selectField(settings.scStyle || "duplex", [["duplex", "Ring + Cross"], ["ring", "Ring"], ["cross", "Cross"], ["dot", "Dot"]], (v) => { settings.scStyle = v; save(); })),
              row("Color", null, colorField(settings.scColor || "#111111", (v) => { settings.scColor = v; save(); })),
              row("Thickness", null, rangeField(settings.scThick, 1, 10, 1, (v) => { settings.scThick = v; save(); })),
              row("Center gap", "Line-free middle", rangeField(settings.scGap ?? 0.12, 0, 0.4, 0.02, (v) => { settings.scGap = v; save(); }))
            ])
        ];
      }
      if (id === "fx") {
        return [
          moduleCard("Tracers", "Light lines from gun to crosshair.", settings.atTracers,
            (v) => { settings.atTracers = v; save(); }, [
              row("Style", null, selectField(settings.trStyle || "line", [["line", "Line"], ["glow", "Glow"], ["dots", "Dotted"]], (v) => { settings.trStyle = v; save(); })),
              row("Color", null, colorField(settings.trColor || "#ff6b9d", (v) => { settings.trColor = v; save(); })),
              row("Gradient", "Fade from second color", toggleSwitch(settings.trGrad, (v) => { settings.trGrad = v; save(); })),
              row("Second color", "Gradient start", colorField(settings.trColor2 || "#ffb3c6", (v) => { settings.trColor2 = v; save(); })),
              row("Width", null, rangeField(settings.trWidth, 0.5, 8, 0.5, (v) => { settings.trWidth = v; save(); })),
              row("Lifetime", "Seconds", rangeField(settings.trLife, 0.05, 1.5, 0.05, (v) => { settings.trLife = v; save(); })),
              row("Origin", "Where lines start", selectField(settings.trOrigin || "gun", [["gun", "Gun"], ["bc", "Bottom center"], ["bl", "Bottom left"], ["br", "Bottom right"], ["center", "Center"]], (v) => { settings.trOrigin = v; save(); })),
              row("Start gap", "Begin away from muzzle", rangeField(settings.trGap ?? 0, 0, 120, 2, (v) => { settings.trGap = v; save(); })),
              row("Spread", "Impact jitter px", rangeField(settings.trJitter ?? 6, 0, 40, 1, (v) => { settings.trJitter = v; save(); })),
              row("Rainbow", null, toggleSwitch(settings.trRainbow, (v) => { settings.trRainbow = v; save(); })),
              row("Opacity", null, rangeField(settings.trOp ?? 0.9, 0.1, 1, 0.05, (v) => { settings.trOp = v; save(); })),
              row("Fire rate", "Ms between lines held", rangeField(settings.trRate ?? 45, 15, 200, 5, (v) => { settings.trRate = v; save(); })),
              row("Random hue", "New color per shot", toggleSwitch(settings.trRandom, (v) => { settings.trRandom = v; save(); }))
            ]),
          moduleCard("Muzzle", "Light flash at the gun.", settings.mzOn,
            (v) => { settings.mzOn = v; save(); }, [
              row("Color", null, colorField(settings.mzColor || "#ffd9a0", (v) => { settings.mzColor = v; save(); })),
              row("Size", null, rangeField(settings.mzSize, 20, 240, 5, (v) => { settings.mzSize = v; save(); })),
              row("Decay", "Seconds to fade", rangeField(settings.mzDecay, 0.05, 1, 0.05, (v) => { settings.mzDecay = v; save(); })),
              row("Offset X", null, rangeField(settings.mzX ?? 0, -200, 200, 5, (v) => { settings.mzX = v; save(); })),
              row("Offset Y", null, rangeField(settings.mzY ?? 0, -200, 200, 5, (v) => { settings.mzY = v; save(); })),
              row("Flicker", null, toggleSwitch(settings.mzFlicker !== false, (v) => { settings.mzFlicker = v; save(); })),
              row("Smoke puff", "Expanding ring per shot", toggleSwitch(settings.mzPuff, (v) => { settings.mzPuff = v; save(); }))
            ]),
          moduleCard("Impact", "Bursts mirroring hitmarks.", settings.imOn,
            (v) => { settings.imOn = v; save(); }, [
              row("Style", null, selectField(settings.imStyle || "both", [["both", "Burst + Ring"], ["burst", "Burst"], ["ring", "Ring"]], (v) => { settings.imStyle = v; save(); })),
              row("Color", null, colorField(settings.imColor || "#ffffff", (v) => { settings.imColor = v; save(); })),
              row("Headshot color", null, colorField(settings.imHs || "#ff4040", (v) => { settings.imHs = v; save(); })),
              row("Size", null, rangeField(settings.imSize, 4, 30, 1, (v) => { settings.imSize = v; save(); })),
              row("Sparks", null, rangeField(settings.imCount, 1, 30, 1, (v) => { settings.imCount = v; save(); })),
              row("Duration", "Seconds", rangeField(settings.imTime, 0.1, 1.2, 0.05, (v) => { settings.imTime = v; save(); })),
              row("Gravity", null, rangeField(settings.imGrav ?? 300, 0, 1200, 20, (v) => { settings.imGrav = v; save(); })),
              row("Ring", "Expanding circle", toggleSwitch(settings.imRing !== false, (v) => { settings.imRing = v; save(); })),
              row("Flash", "Full-screen pop", toggleSwitch(settings.imFlash, (v) => { settings.imFlash = v; save(); }))
            ]),
          moduleCard("Weather", "Screen-space particles.", settings.wxOn,
            (v) => { settings.wxOn = v; save(); }, [
              row("Type", null, selectField(settings.wxType || "petals", [["petals", "Petals"], ["snow", "Snow"], ["rain", "Rain"], ["embers", "Embers"], ["leaves", "Leaves"]], (v) => { settings.wxType = v; save(); })),
              row("Placement", "Screen overlay vs in the map", selectField(settings.wxMode || "screen", [["screen", "On screen"], ["world", "In map (3D)"]], (v) => { settings.wxMode = v; save(); })),
              row("Engine", "Live backend", wxStatusEl()),
              row("Under cover", "Indoors / behind a wall", wxCoverEl()),
              row("Count", null, rangeField(settings.wxCount ?? 80, 0, 220, 10, (v) => { settings.wxCount = v; save(); })),
              row("Size", null, rangeField(settings.wxSize ?? 1, 0.3, 4, 0.1, (v) => { settings.wxSize = v; save(); })),
              row("Speed", null, rangeField(settings.wxSpeed ?? 1, 0.1, 5, 0.1, (v) => { settings.wxSpeed = v; save(); })),
              row("Wind", "Left (-) / right (+)", rangeField(settings.wxWind ?? 0.2, -1, 1, 0.05, (v) => { settings.wxWind = v; save(); })),
              row("Opacity", null, rangeField(settings.wxOp ?? 0.8, 0.1, 1, 0.05, (v) => { settings.wxOp = v; save(); })),
              row("Tint", "Empty = type color", colorField(settings.wxTint || "#ffb3c6", (v) => { settings.wxTint = v; save(); })),
              row("Twinkle", "Blink in and out", toggleSwitch(settings.wxTwinkle, (v) => { settings.wxTwinkle = v; save(); })),
              row("Swirl", "Sway side to side", toggleSwitch(settings.wxSwirl, (v) => { settings.wxSwirl = v; save(); })),
              row("Hide in cover", "No 3D weather indoors / behind walls", toggleSwitch(settings.wxCoverHide !== false, (v) => { settings.wxCoverHide = v; save(); })),
              row("In menu", "Also outside matches", toggleSwitch(settings.wxLobby, (v) => { settings.wxLobby = v; save(); }))
            ]),
          moduleCard("Motes", "Slow drifting specks.", settings.moOn,
            (v) => { settings.moOn = v; save(); }, [
              row("Count", null, rangeField(settings.moCount ?? 40, 0, 150, 5, (v) => { settings.moCount = v; save(); })),
              row("Size", null, rangeField(settings.moSize ?? 1.5, 0.3, 5, 0.1, (v) => { settings.moSize = v; save(); })),
              row("Speed", null, rangeField(settings.moSpeed ?? 0.3, 0.05, 2, 0.05, (v) => { settings.moSpeed = v; save(); })),
              row("Opacity", null, rangeField(settings.moOp ?? 0.5, 0.1, 1, 0.05, (v) => { settings.moOp = v; save(); })),
              row("Color", null, colorField(settings.moColor || "#ffd6e4", (v) => { settings.moColor = v; save(); })),
              row("Drift", "Sideways sway", rangeField(settings.moDrift ?? 12, 0, 40, 1, (v) => { settings.moDrift = v; save(); }))
            ])
        ];
      }
      if (id === "game") {
        const gxPresets = [["custom", "Custom"], ["classic", "Classic green"], ["cyan", "Cyan"], ["yellow", "Yellow"], ["red", "Red"], ["white", "White"], ["pink", "Pink"]];
        const gxHex = { classic: "#3cff5a", cyan: "#00e5ff", yellow: "#ffe14d", red: "#ff4d4d", white: "#ffffff", pink: "#ff6b9d" };
        return [
          moduleCard("Game Crosshair", "Styles the game's own crosshair. Needs it visible (Cross tab).", settings.gxOn,
            (v) => { settings.gxOn = v; save(); }, [
              row("Preset", null, selectField(settings.gxPreset || "custom", gxPresets, (v) => {
                settings.gxPreset = v;
                if (gxHex[v]) settings.gxColor = gxHex[v];
                save();
              })),
              row("Color", null, colorField(settings.gxColor || "#3cff5a", (v) => { settings.gxColor = v; settings.gxPreset = "custom"; save(); })),
              row("Opacity", null, rangeField(settings.gxAlpha ?? 1, 0.1, 1, 0.05, (v) => { settings.gxAlpha = v; save(); })),
              row("Length", null, rangeField(settings.gxLen ?? 6, 1, 30, 1, (v) => { settings.gxLen = v; save(); })),
              row("Thickness", null, rangeField(settings.gxThick ?? 2, 1, 10, 1, (v) => { settings.gxThick = v; save(); })),
              row("Gap", null, rangeField(settings.gxGap ?? 3, 0, 30, 1, (v) => { settings.gxGap = v; save(); })),
              row("Dot", null, toggleSwitch(settings.gxDot, (v) => { settings.gxDot = v; save(); })),
              row("Outline", null, toggleSwitch(settings.gxOutline !== false, (v) => { settings.gxOutline = v; save(); })),
              row("Outline width", null, rangeField(settings.gxOutw ?? 1, 0, 5, 1, (v) => { settings.gxOutw = v; save(); })),
              row("Alt style", "Second crosshair shape", toggleSwitch(settings.gxStyle, (v) => { settings.gxStyle = v ? 1 : 0; save(); })),
              row("Sniper width", "Scope line thickness", rangeField(settings.gxSniper ?? 2, 1, 12, 1, (v) => { settings.gxSniper = v; save(); }))
            ]),
          moduleCard("Team Colors", "Recolor CT / T theming.", settings.gcTeam,
            (v) => { settings.gcTeam = v; save(); }, [
              row("CT blue", null, colorField(settings.gcCT || "#7db8f0", (v) => { settings.gcCT = v; save(); })),
              row("T gold", null, colorField(settings.gcT || "#eabe54", (v) => { settings.gcT = v; save(); }))
            ]),
          moduleCard("Death Screen", "Restyle the death vignette.", settings.dcOn,
            (v) => { settings.dcOn = v; save(); }, [
              row("Vignette opacity", null, rangeField(settings.dcOp ?? 0.6, 0, 1, 0.05, (v) => { settings.dcOp = v; save(); })),
              row("Vignette color", "Empty = game red", colorField(settings.dcColor || "#e0342c", (v) => { settings.dcColor = v; save(); })),
              row("Killcard accent", "Empty = game red", colorField(settings.dcAccent || "#e05a4e", (v) => { settings.dcAccent = v; save(); }))
            ]),
          moduleCard("Hitmarker", "Restyle the game's hitmarker.", settings.ghOn,
            (v) => { settings.ghOn = v; save(); }, [
              row("Color", null, colorField(settings.ghColor || "#ffffff", (v) => { settings.ghColor = v; save(); })),
              row("Headshot", null, colorField(settings.ghHs || "#ff4040", (v) => { settings.ghHs = v; save(); })),
              row("Size", null, rangeField(settings.ghSize ?? 1, 0.5, 2, 0.1, (v) => { settings.ghSize = v; save(); }))
            ]),
          moduleCard("Damage Arcs", "Recolor directional damage.", settings.daOn,
            (v) => { settings.daOn = v; save(); }, [
              row("Color", null, colorField(settings.daColor || "#e0342c", (v) => { settings.daColor = v; save(); }))
            ]),
          moduleCard("Money", "Recolor the money readout.", settings.mnOn,
            (v) => { settings.mnOn = v; save(); }, [
              row("Color", "Empty = team wash", colorField(settings.mnColor || "#ffffff", (v) => { settings.mnColor = v; save(); }))
            ])
        ];
      }
      if (id === "beta") return [interfaceCard()];
      if (id === "dev") return devCards();
      const presets = [["custom", "Custom (manual)"], ["default", "Game default"], ["sakura", "Sakura"], ["midnight", "Midnight"], ["sunset", "Sunset"], ["neon", "Neon"], ["vivid", "Vivid"], ["cinematic", "Cinematic"], ["arctic", "Arctic"], ["void", "Void"], ["synthwave", "Synthwave"], ["noir", "Noir"], ["dream", "Dream"], ["desert", "Desert"], ["volcano", "Volcano"], ["swamp", "Swamp"], ["space", "Space"], ["candy", "Candy"], ["matrix", "Matrix"], ["bloodmoon", "Blood Moon"], ["toxic", "Toxic"], ["pastel", "Pastel"], ["mono", "Mono"], ["golden", "Golden"], ["storm", "Storm"], ["abyss", "Abyss"], ["frost", "Frost"], ["forest", "Forest"], ["ember", "Ember"], ["ghost", "Ghost"], ["royal", "Royal"], ["copper", "Copper"], ["mint", "Mint"]];
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
        moduleCard("Day Cycle", "Sun, sky and light follow the time of day. Needs Ambience.", settings.wdCycle,
          (v) => {
            settings.wdCycle = v;
            if (v) { settings.ambience = true; settings.customLighting = true; settings.customSky = true; settings.sunTint = true; }
            save();
            rebuildPanel();
          }, [
            row("Time", "Game hour 0-24", rangeField(settings.wdTime ?? 12, 0, 24, 0.25, (v) => { settings.wdTime = v; save(); })),
            row("Auto cycle", null, toggleSwitch(settings.wdAuto !== false, (v) => { settings.wdAuto = v; save(); })),
            row("Speed", "Game hours / second", rangeField(settings.wdSpeed ?? 0.25, 0.05, 2, 0.05, (v) => { settings.wdSpeed = v; save(); })),
            row("Night darkness", null, rangeField(settings.wdNight ?? 0.7, 0, 1, 0.05, (v) => { settings.wdNight = v; save(); })),
            row("Lightning", "Storm flashes", toggleSwitch(settings.wdBolt, (v) => { settings.wdBolt = v; save(); })),
            row("Storm rate", "Seconds between strikes", rangeField(settings.wdBoltRate ?? 8, 2, 20, 1, (v) => { settings.wdBoltRate = v; save(); })),
            row("Golden hour", "Jump to sunset", actionBtn("17:30", () => { settings.wdTime = 17.5; save(); })),
            row("Manual sun", "Position the sun yourself", toggleSwitch(settings.wdManual, (v) => { settings.wdManual = v; save(); })),
            row("Elevation", "Degrees above horizon", rangeField(settings.wdElev ?? 45, -20, 90, 1, (v) => { settings.wdElev = v; save(); })),
            row("Azimuth", "Degrees around", rangeField(settings.wdAzim ?? 180, 0, 360, 1, (v) => { settings.wdAzim = v; save(); }))
          ]),
        moduleCard("Light", "Direct light controls.", settings.customLighting,
          (v) => { settings.customLighting = v; save(); rebuildPanel(); }, [
            row("Exposure", null, rangeField(settings.lightExposure, 0.3, 2, 0.05, (v) => { settings.lightExposure = v; save(); })),
            row("Hemi boost", "Ambient / sky light", rangeField(settings.hemiMult, 0, 2.5, 0.05, (v) => { settings.hemiMult = v; save(); })),
            row("Sun boost", null, rangeField(settings.sunMult, 0, 2.5, 0.05, (v) => { settings.sunMult = v; save(); })),
            row("Sun tint", null, toggleSwitch(settings.sunTint, (v) => { settings.sunTint = v; save(); })),
            row("Sun color", null, colorField(settings.sunColor || "#ffb3c6", (v) => { settings.sunColor = v; save(); })),
            row("Hemi colors", "Tint sky + ground light", toggleSwitch(settings.hemiOn, (v) => { settings.hemiOn = v; save(); })),
            row("Hemi sky", null, colorField(settings.hemiSky || "#bcd6ff", (v) => { settings.hemiSky = v; save(); })),
            row("Hemi ground", null, colorField(settings.hemiGround || "#4a4238", (v) => { settings.hemiGround = v; save(); }))
          ]),
        moduleCard("Fog Lab", "Pick a fog config. Needs Ambience.", settings.fogCustom,
          (v) => {
            settings.fogCustom = v;
            settings.fogMode = v ? "custom" : "default";
            if (v) settings.ambience = true;
            save();
            rebuildPanel();
          }, [
            row("Config", null, selectField(settings.fogPreset || "thick", [["light", "Light haze"], ["thick", "Thick fog"], ["night", "Night fog"], ["sakura", "Sakura mist"], ["desert", "Desert dust"], ["deep", "Deep dark"]], (v) => { settings.fogPreset = v; save(); }))
          ]),
        moduleCard("Radar", "Restyle the game's radar.", settings.rdOn,
          (v) => { settings.rdOn = v; save(); }, [
            row("Size", null, rangeField(settings.rdSize ?? 1, 0.5, 2, 0.05, (v) => { settings.rdSize = v; save(); })),
            row("Ring color", null, colorField(settings.rdRing || "#4a4f55", (v) => { settings.rdRing = v; save(); })),
            row("Opacity", null, rangeField(settings.rdOp ?? 1, 0.1, 1, 0.05, (v) => { settings.rdOp = v; save(); })),
            row("Corner", null, selectField(settings.rdPos || "tl", [["tl", "Top left"], ["tr", "Top right"], ["bl", "Bottom left"], ["br", "Bottom right"]], (v) => { settings.rdPos = v; save(); })),
            row("Square", "Rounded square dial", toggleSwitch(settings.rdSquare, (v) => { settings.rdSquare = v; save(); })),
            row("Hide", null, toggleSwitch(settings.rdHide, (v) => { settings.rdHide = v; save(); }))
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
  function menuStock(key) {
    const lunar = settings.uiStyle === "lunar";
    if (key === "op") return lunar ? 0.94 : 0.78;
    if (key === "blur") return lunar ? 0 : 22;
    if (key === "rad") return lunar ? 14 : 22;
    return 1;
  }
  function applyMenuVars() {
    if (!panelEl) return;
    try {
      const op = settings.mnOp, blur = settings.mnBlur, rad = settings.mnRad;
      if (op == null) panelEl.style.removeProperty("--sk-op");
      else panelEl.style.setProperty("--sk-op", clamp(chNum(op, 0.8), 0.3, 1));
      if (blur == null) panelEl.style.removeProperty("--sk-blur");
      else panelEl.style.setProperty("--sk-blur", chNum(blur, 22) + "px");
      if (rad == null) panelEl.style.removeProperty("--sk-rad");
      else panelEl.style.setProperty("--sk-rad", chNum(rad, 22) + "px");
      panelEl.style.zoom = chNum(settings.mnScale, 1);
      panelEl.classList.toggle("nomotion", settings.uiMotion === false);
    } catch (_) {}
  }
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
      applyMenuVars();
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
    display: flex; gap: 10px; padding: 10px; border-radius: var(--sk-rad, 22px); pointer-events: auto;
    background: rgba(24,17,21,var(--sk-op,.78)); backdrop-filter: blur(var(--sk-blur,22px)) saturate(150%); -webkit-backdrop-filter: blur(var(--sk-blur,22px)) saturate(150%);
    box-shadow: 0 0 0 1px rgba(255,255,255,.06), inset 0 1px 0 rgba(255,255,255,.05), 0 30px 80px rgba(0,0,0,.55);
    opacity: 0; transform: translateY(18px) scale(.985); pointer-events: none; transition: opacity .35s ease, transform .45s cubic-bezier(.22,1,.36,1);
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
    background: rgba(13,14,20,var(--sk-op,.92)); }
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
    background: rgba(10,11,16,var(--sk-op,.94)); border-radius: var(--sk-rad,14px); padding: 0; overflow: hidden;
    backdrop-filter: blur(var(--sk-blur,0px)); -webkit-backdrop-filter: blur(var(--sk-blur,0px)); }
  .mn-panel.nomotion *, .mn-panel.nomotion *::before, .mn-panel.nomotion *::after { animation: none !important; transition: none !important; }
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
  .ln-cat.has-sub .caret { margin-left: auto; width: 14px; height: 14px; display: grid; place-items: center; opacity: .5; transition: transform .2s; flex: none; }
  .ln-cat.has-sub .n { margin-left: 0; }
  .ln-cat.has-sub .caret svg { width: 12px; height: 12px; fill: none; stroke: currentColor; stroke-width: 2.4; stroke-linecap: round; stroke-linejoin: round; }
  .ln-cat.open .caret { transform: rotate(90deg); opacity: 1; }
  .ln-sub { display: flex; align-items: center; gap: 8px; width: calc(100% - 14px); margin: 1px 0 1px 14px; padding: 6px 10px;
    border: 0; border-left: 2px solid rgba(255,255,255,.1); border-radius: 0 8px 8px 0; background: transparent;
    color: rgba(255,255,255,.55); font-size: 12px; font-weight: 600; cursor: pointer; text-align: left; }
  .ln-sub:hover { color: #fff; background: rgba(255,255,255,.04); }
  .ln-sub.active { color: #fff; border-left-color: var(--acc, #ff6b9d); background: rgba(255,255,255,.06); }
  .ln-sub .n { margin-left: auto; font-size: 10px; opacity: .5; }
  /* ── UI motion pack ── */
  .ln-tab { transition: color .18s, background .18s, box-shadow .25s, transform .12s; }
  .ln-tab:active { transform: scale(.95); }
  .ln-cat, .ln-sub { transition: color .18s, background .18s, border-color .18s, box-shadow .18s, transform .12s; }
  .ln-cat:active, .ln-sub:active { transform: scale(.98); }
  .ln-sub { animation: ln-sub-in .22s ease both; }
  .ln-mod { animation: ln-mod-in .38s cubic-bezier(.22,1,.36,1) both; }
  .ln-mod.open .ln-drawer { animation: ln-drawer-in .3s ease both; }
  .ln-opts, .ln-gear, .ln-x, .ln-bar { transition: background .18s, opacity .18s, transform .12s, box-shadow .18s, filter .18s; }
  .ln-opts:active, .ln-gear:active, .ln-x:active, .ln-bar:active { transform: scale(.94); }
  .ln-gear svg { transition: transform .35s cubic-bezier(.22,1,.36,1); }
  .ln-gear:hover svg { transform: rotate(45deg); }
  .ln-search { transition: width .25s ease, box-shadow .2s; }
  .ln-search:focus { width: 182px; outline: none; box-shadow: inset 0 0 0 1px var(--acc, #ff6b9d), 0 0 14px rgba(255,107,157,.18); }
  .ln-logo { animation: ln-float 5s ease-in-out infinite; }
  .sk-slider::-webkit-slider-thumb { transition: transform .15s; }
  .sk-slider:active::-webkit-slider-thumb { transform: scale(1.45); }
  @keyframes ln-mod-in { from { opacity: 0; transform: translateY(10px) scale(.97); } }
  @keyframes ln-sub-in { from { opacity: 0; transform: translateX(-6px); } }
  @keyframes ln-drawer-in { from { opacity: 0; transform: translateY(-6px); } }
  @keyframes ln-float { 50% { transform: translateY(-2px); } }
  @media (prefers-reduced-motion: reduce) {
    .mn-panel, .mn-panel *, .ln-mod, .ln-sub { animation: none !important; transition: none !important; }
  }
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
