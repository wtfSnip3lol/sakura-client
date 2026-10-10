// Sakura Launcher: opens Clutcher.io or AstraStrike in its own Chromium window.
//
// Clutcher.io  → injects the Sakura Client bundle (keystrokes + ambience, sakura theme).
// AstraStrike  → CLEAN mode. Nothing is injected into the page: no JavaScript,
//                no CSS, no preload bridge. The keystrokes overlay is a separate
//                transparent, click-through window layered on top of the game
//                window, fed key events from the main process. The game page
//                itself is never touched.
const { app, BrowserWindow, shell, ipcMain, Menu } = require("electron");
const fs = require("node:fs");
const path = require("node:path");

const GAMES = {
  clutcher: {
    label: "Clutcher.io",
    url: "https://www.clutcher.io/",
    navOk: /^https:\/\/(www\.)?clutcher\.io\//,
    partition: "persist:clutcher",
    injectClient: true, // existing Sakura Client bundle (gloww-client.user.js)
    payload: "gloww-client.user.js",
    overlay: false      // the injected client draws its own keystrokes
  },
  astrastrike: {
    label: "AstraStrike",
    url: "https://astrastrike.fun/",
    navOk: /^https:\/\/([a-z0-9-]+\.)*astrastrike\.fun\//,
    partition: "persist:astrastrike",
    injectClient: false, // never inject anything into this game
    overlay: true        // external, zero-injection keystrokes overlay
  },
  cookieclicker: {
    label: "Cookie Clicker",
    url: "https://orteil.dashnet.org/cookieclicker/",
    // The game lives under a path prefix and pulls assets from the same
    // origin, so match the whole origin and let the payload's own path guard
    // decide whether to apply the theme.
    navOk: /^https:\/\/orteil\.dashnet\.org\//,
    partition: "persist:cookieclicker",
    injectClient: true,  // injects the Sakura visual recode only
    payload: "sakura-cookieclicker.js",
    overlay: false,
    cosmetic: true       // no gameplay changes, nothing about the save is touched
  }
};

/* ---------- launcher settings (userData/launcher.json) ---------- */
const DEFAULTS = {
  game: "clutcher",           // which game to launch (Game menu switches + relaunches)
  showPicker: true,           // show the game-selection screen on startup
  dev: false,                 // DEV mode: unlocks the in-game dev tab (needs the code)
  beta: false,                // Beta mode: Lunar-style UI + experimental features (no code)
  uncapped: false,            // no frame-rate limit, no VSync
  highPerformanceGpu: true,   // prefer the fastest GPU
  runInBackground: true,      // never throttle when unfocused
  aggressiveGpu: false,       // gpu rasterization + zero copy (can stutter on some drivers)
  angle: "default",           // d3d11 | d3d11on12 | vulkan | gl | default
  overlay: { enabled: true, corner: "bl", scale: 1, opacity: 1 } // AstraStrike keystrokes layer
};
const settingsFile = () => path.join(app.getPath("userData"), "launcher.json");
function loadSettings() {
  let saved = {};
  try { saved = JSON.parse(fs.readFileSync(settingsFile(), "utf8")); } catch (_) {}
  const merged = { ...DEFAULTS, ...saved };
  merged.overlay = { ...DEFAULTS.overlay, ...(saved.overlay || {}) };
  if (!GAMES[merged.game]) merged.game = DEFAULTS.game;
  return merged;
}
function saveSettings(s) {
  try {
    fs.mkdirSync(path.dirname(settingsFile()), { recursive: true });
    fs.writeFileSync(settingsFile(), JSON.stringify(s, null, 2));
  } catch (_) {}
}
const settings = loadSettings();
let game = GAMES[settings.game];
// The DEV button code. The launcher is the only dev path — the client has no PIN.
const DEV_CODE = "0303224";
function resolveGame() {
  if (!GAMES[settings.game]) settings.game = DEFAULTS.game;
  game = GAMES[settings.game];
}

/* ---------- Chromium switches: must be set before the app is ready ---------- */
const sw = (name, value) => (value === undefined ? app.commandLine.appendSwitch(name) : app.commandLine.appendSwitch(name, value));
if (settings.uncapped) {
  sw("disable-frame-rate-limit");   // requestAnimationFrame no longer tied to the monitor
  sw("disable-gpu-vsync");          // present frames as soon as they're ready
}
if (settings.highPerformanceGpu) sw("force_high_performance_gpu");
if (settings.runInBackground) {
  sw("disable-background-timer-throttling");
  sw("disable-renderer-backgrounding");
  sw("disable-backgrounding-occluded-windows");
}
if (settings.aggressiveGpu) {
  sw("enable-gpu-rasterization");
  sw("enable-zero-copy");
}
if (settings.angle && settings.angle !== "default") sw("use-angle", settings.angle);
sw("ignore-gpu-blocklist");
sw("disable-features", "CalculateNativeWinOcclusion");
sw("autoplay-policy", "no-user-gesture-required");

/* ---------- Sakura payload bundles (per game) ----------
 * Each game names the file it injects from resources/. Clutcher injects the
 * full Sakura Client; Cookie Clicker injects the visual-recode theme. */
function payloadPath(file) {
  const candidates = [
    path.join(process.resourcesPath || "", "app", "resources", file),
    path.join(process.resourcesPath || "", "app.asar", "resources", file),
    path.join(__dirname, "..", "resources", file),
    path.join(app.getAppPath(), "resources", file)
  ];
  return candidates.find(p => { try { return fs.statSync(p).isFile(); } catch (_) { return false; } });
}

function payloadSource(file) {
  const p = payloadPath(file);
  if (!p) return null;
  const flags = `window.__sakuraFlags=${JSON.stringify({ dev: !!settings.dev, beta: !!settings.beta })};`;
  return flags + fs.readFileSync(p, "utf8").replace(/^\/\/ ==UserScript==[\s\S]*?\/\/ ==\/UserScript==\s*/, "");
}

/* ---------- AstraStrike keystrokes overlay (separate window, zero injection) ----------
 * A frameless, transparent, click-through BrowserWindow owned by the game window.
 * It renders keystrokes from main-process key events — it has no preload access to
 * the game, cannot see game state, and (until F8 edit mode) passes all mouse input
 * straight through to the game. */
let win = null;
let overlayWin = null;
let overlayEdit = false;

const WIDGET_SIZE = { w: 360, h: 176 };  // normal keystrokes view
const PANEL_SIZE = { w: 360, h: 380 };   // expanded while editing (F8)

function overlayScale() {
  return Math.min(1.8, Math.max(0.6, Number(settings.overlay.scale) || 1));
}

function overlayBounds() {
  const size = overlayEdit ? PANEL_SIZE : WIDGET_SIZE;
  const s = overlayScale();
  const width = Math.round(size.w * s);
  const height = Math.round(size.h * s);
  const b = win.getBounds();
  const m = 16;
  const x = settings.overlay.corner.endsWith("r") ? b.x + b.width - width - m : b.x + m;
  const y = settings.overlay.corner.startsWith("t") ? b.y + m : b.y + b.height - height - m;
  return { x, y, width, height };
}

function overlayInteractive(on) {
  if (!overlayWin) return;
  try { overlayWin.setIgnoreMouseEvents(!on, { forward: true }); } catch (_) {}
}

function placeOverlay() {
  if (!overlayWin) return;
  if (!settings.overlay.enabled) { overlayWin.hide(); return; }
  overlayWin.setBounds(overlayBounds());
  try { overlayWin.showInactive(); } catch (_) { overlayWin.show(); }
}

function setOverlayEdit(on) {
  overlayEdit = on;
  overlayInteractive(on);
  placeOverlay();
  try { overlayWin?.webContents.send("ks:edit", on); } catch (_) {}
}

function createOverlay() {
  overlayWin = new BrowserWindow({
    parent: win,
    width: WIDGET_SIZE.w,
    height: WIDGET_SIZE.h,
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",
    resizable: false,
    movable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    focusable: false,
    show: false,
    title: "Sakura keystrokes overlay",
    webPreferences: {
      preload: path.join(__dirname, "overlay-preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      spellcheck: false
    }
  });
  overlayWin.setMenuBarVisibility(false);
  overlayInteractive(false); // click-through until edit mode
  overlayWin.loadFile(path.join(__dirname, "overlay.html"));
  overlayWin.webContents.on("did-finish-load", () => {
    overlayWin.webContents.send("ks:settings", settings.overlay);
    overlayWin.webContents.send("ks:edit", overlayEdit);
  });
  placeOverlay();
}

function forwardKey(input) {
  if (!game.overlay || !overlayWin || !settings.overlay.enabled || overlayEdit) return;
  if (input.type !== "keyDown" && input.type !== "keyUp") return;
  try {
    overlayWin.webContents.send("ks:key", {
      code: input.code || "",
      key: input.key || "",
      down: input.type === "keyDown",
      repeat: !!input.isAutoRepeat
    });
  } catch (_) {}
}

/* ---------- game-selection screen ---------- */
let pickerWin = null;

function pickerHTML() {
  const last = settings.game;
  const card = (id, name, tag, bullets, badge) => `
    <div class="card${last === id ? " sel" : ""}" data-id="${id}" tabindex="0">
      ${last === id ? `<span class="badge">LAST PLAYED</span>` : ""}
      <div class="chead"><span class="dot"></span><h2>${name}</h2></div>
      <p class="tag">${tag}</p>
      <ul>${bullets.map(b => `<li>${b}</li>`).join("")}</ul>
      <button class="play" data-id="${id}">${badge}</button>
    </div>`;
  return `<!DOCTYPE html><html><head><meta charset="utf-8"><style>
    * { box-sizing: border-box; margin: 0; font-family: "Segoe UI", system-ui, sans-serif; }
    body { background: radial-gradient(120% 100% at 50% 0%, #2a0f1c 0%, #160a10 60%, #0e060c 100%);
      color: #f6eef2; display: flex; flex-direction: column; align-items: center;
      padding: 28px 24px 20px; height: 100vh; overflow: hidden; user-select: none; }
    .logo { display: flex; align-items: center; gap: 10px; margin-bottom: 4px; }
    .logo svg { width: 30px; height: 30px; filter: drop-shadow(0 0 8px rgba(255,107,157,.8)); }
    .logo h1 { font-size: 22px; font-weight: 800; letter-spacing: .02em;
      background: linear-gradient(90deg, #ffe0ec, #ff6b9d); -webkit-background-clip: text; background-clip: text; color: transparent; }
    .sub { font-size: 12px; opacity: .45; margin-bottom: 20px; }
    .cards { display: flex; gap: 14px; width: 100%; max-width: 560px; }
    .card { position: relative; flex: 1; border-radius: 16px; padding: 16px; cursor: pointer;
      background: rgba(255,255,255,.03); box-shadow: inset 0 0 0 1px rgba(255,255,255,.07);
      transition: box-shadow .2s, background .2s, transform .15s; outline: none; }
    .card:hover { background: rgba(255,255,255,.05); transform: translateY(-2px); }
    .card.sel { background: rgba(255,107,157,.07);
      box-shadow: inset 0 0 0 1px rgba(255,107,157,.5), 0 0 24px rgba(255,107,157,.15); }
    .badge { position: absolute; top: -9px; right: 12px; font-size: 9px; font-weight: 800; letter-spacing: .08em;
      background: #ff6b9d; color: #fff; padding: 2px 8px; border-radius: 99px; }
    .chead { display: flex; align-items: center; gap: 8px; margin-bottom: 6px; }
    .chead h2 { font-size: 16px; font-weight: 700; }
    .dot { width: 10px; height: 10px; border-radius: 50%; background: #ff6b9d;
      box-shadow: 0 0 8px #ff6b9d; flex: none; }
    .tag { font-size: 11.5px; opacity: .55; margin-bottom: 10px; }
    .card ul { list-style: none; padding: 0; margin: 0 0 14px; }
    .card li { font-size: 11.5px; opacity: .8; padding: 2px 0 2px 16px; position: relative; }
    .card li::before { content: ""; position: absolute; left: 2px; top: 8px; width: 6px; height: 6px;
      border-radius: 50%; background: rgba(255,107,157,.7); }
    .play { width: 100%; border: 0; border-radius: 10px; padding: 10px; font-size: 13px; font-weight: 800;
      letter-spacing: .05em; cursor: pointer; color: #fff; background: linear-gradient(135deg, #ff6b9d, #d44a7a);
      box-shadow: 0 4px 16px rgba(255,107,157,.35); transition: filter .15s; }
    .play:hover { filter: brightness(1.12); }
    .foot { display: flex; align-items: center; gap: 8px; margin-top: 18px; font-size: 12px; opacity: .75; }
    .foot input { accent-color: #ff6b9d; cursor: pointer; }
    .foot label { cursor: pointer; }
    .quit { margin-top: 10px; background: none; border: 0; color: rgba(246,238,242,.4);
      font-size: 11.5px; cursor: pointer; }
    .quit:hover { color: rgba(246,238,242,.8); }
    .dock { position: fixed; left: 16px; bottom: 14px; display: flex; gap: 10px; }
    .dockbtn { display: grid; place-items: center; width: 38px; height: 38px; border-radius: 50%;
      border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04); color: rgba(246,238,242,.55);
      cursor: pointer; transition: color .2s, box-shadow .2s, background .2s; position: relative; }
    .dockbtn svg { width: 18px; height: 18px; fill: none; stroke: currentColor; stroke-width: 2; stroke-linecap: round; stroke-linejoin: round; }
    .dockbtn:hover { color: #ffb3c6; background: rgba(255,107,157,.1); }
    .dockbtn.on { color: #ff6b9d; box-shadow: 0 0 0 1px rgba(255,107,157,.6), 0 0 14px rgba(255,107,157,.35); }
    .dockbtn[data-tip]:hover::after { content: attr(data-tip); position: absolute; left: calc(100% + 10px); top: 50%;
      transform: translateY(-50%); white-space: nowrap; font-size: 11.5px; font-weight: 600; color: #f6eef2;
      background: rgba(24,17,21,.95); border: 1px solid rgba(255,107,157,.35); border-radius: 8px; padding: 6px 10px;
      pointer-events: none; z-index: 10; }
    .coderow { position: fixed; left: 16px; bottom: 62px; display: flex; gap: 8px; align-items: center;
      background: rgba(24,17,21,.95); border: 1px solid rgba(255,107,157,.35); border-radius: 12px; padding: 10px 12px; }
    .coderow[hidden] { display: none; }
    .coderow input { background: rgba(255,255,255,.05); border: 0; border-radius: 8px; color: #f6eef2;
      padding: 7px 10px; font-size: 13px; letter-spacing: .2em; outline: none; width: 130px; text-align: center; }
    .coderow button { border: 0; border-radius: 8px; padding: 7px 14px; background: #ff6b9d; color: #fff;
      font-size: 12px; font-weight: 800; cursor: pointer; }
    .codeerr { font-size: 11px; color: #ff7a93; min-width: 80px; }
  </style></head><body>
    <div class="logo">
      <svg viewBox="0 0 24 24"><path d="M12 21c-1.5-2.5-4-4.5-4-7.5 0-2.5 1.8-4.5 4-4.5s4 2 4 4.5c0 3-2.5 5-4 7.5z" fill="none" stroke="#ff6b9d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="10" r="1.5" fill="#ff6b9d"/></svg>
      <h1>Sakura Launcher</h1>
    </div>
    <div class="sub">Pick a game to play</div>
    <div class="cards">
      ${card("clutcher", "Clutcher.io", "Full Sakura Client injected into the page.", ["Keystrokes + CPS overlay", "Ambience visual presets", "DEV-unlocked toolbox"], "PLAY")}
      ${card("astrastrike", "AstraStrike", "Clean mode — nothing touches the page.", ["External keystrokes overlay", "Zero page injection", "F8 to arrange the overlay"], "PLAY")}
      ${card("cookieclicker", "Cookie Clicker", "Sakura visual recode — cosmetic only.", ["Sakura night theme + glass store", "Zen Maru Gothic / Outfit type", "Falling petal canvas, no gameplay edits"], "PLAY")}
    </div>
    <div class="foot"><input type="checkbox" id="skip"><label for="skip">Skip this screen next time (Alt menu can bring it back)</label></div>
    <button class="quit" id="quit">Quit launcher</button>
    <div class="coderow" id="coderow" hidden>
      <input id="code" type="password" inputmode="numeric" placeholder="•••••••" maxlength="16" autocomplete="off">
      <button id="go">Unlock</button>
      <span class="codeerr" id="codeerr"></span>
    </div>
    <div class="dock">
      <button class="dockbtn" id="devbtn" data-tip="DEV — unlock dev features with a code"><svg viewBox="0 0 24 24"><path d="m8 8-4 4 4 4M16 8l4 4-4 4"/></svg></button>
      <button class="dockbtn" id="betabtn" data-tip="Beta features — Lunar-style UI, no code needed"><svg viewBox="0 0 24 24"><path d="M9 3h6M10 3v6l-5.2 9.4A2 2 0 0 0 6.6 21h10.8a2 2 0 0 0 1.8-2.6L14 9V3"/><path d="M7.5 15h9"/></svg></button>
    </div>
    <script>
      const DEV_ON = ${!!settings.dev};
      const BETA_ON = ${!!settings.beta};
      const skip = document.getElementById("skip");
      const launch = (id) => window.sakuraPicker.launch(id, skip.checked);
      document.querySelectorAll(".card").forEach(c => {
        c.addEventListener("click", (e) => {
          if (e.target.classList.contains("play")) return;
          document.querySelectorAll(".card").forEach(x => x.classList.remove("sel"));
          c.classList.add("sel");
        });
        c.addEventListener("dblclick", () => launch(c.dataset.id));
        c.addEventListener("keydown", (e) => { if (e.key === "Enter") launch(c.dataset.id); });
      });
      document.querySelectorAll(".play").forEach(b => b.addEventListener("click", () => launch(b.dataset.id)));
      document.getElementById("quit").addEventListener("click", () => window.sakuraPicker.quit());
      const devBtn = document.getElementById("devbtn"), betaBtn = document.getElementById("betabtn");
      const coderow = document.getElementById("coderow"), codeInput = document.getElementById("code");
      const codeerr = document.getElementById("codeerr"), goBtn = document.getElementById("go");
      let devOn = DEV_ON, betaOn = BETA_ON;
      const paintDock = () => {
        devBtn.classList.toggle("on", devOn);
        betaBtn.classList.toggle("on", betaOn);
      };
      paintDock();
      devBtn.addEventListener("click", () => {
        if (devOn) {
          window.sakuraPicker.dev({ on: false }).then(() => location.reload());
        } else {
          coderow.hidden = false;
          codeerr.textContent = "";
          codeInput.value = "";
          codeInput.focus();
        }
      });
      const submitCode = async () => {
        const r = await window.sakuraPicker.dev({ on: true, code: codeInput.value });
        if (!r.ok) {
          codeerr.textContent = "Wrong code.";
          codeInput.select();
          return;
        }
      };
      goBtn.addEventListener("click", submitCode);
      codeInput.addEventListener("keydown", (e) => { if (e.key === "Enter") submitCode(); });
      betaBtn.addEventListener("click", async () => {
        const r = await window.sakuraPicker.beta({ on: !betaOn });
        if (!r.launched) location.reload();
      });
    </script>
  </body></html>`;
}

function showPicker() {
  if (pickerWin && !pickerWin.isDestroyed()) { pickerWin.focus(); return; }
  pickerWin = new BrowserWindow({
    width: 640,
    height: 560,
    resizable: false,
    maximizable: false,
    minimizable: true,
    backgroundColor: "#160a10",
    title: "Sakura Launcher",
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "picker-preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      spellcheck: false
    }
  });
  pickerWin.setMenuBarVisibility(false);
  pickerWin.once("ready-to-show", () => pickerWin.show());
  pickerWin.on("closed", () => { pickerWin = null; });
  pickerWin.loadURL("data:text/html;charset=utf-8," + encodeURIComponent(pickerHTML()));
}

function launchGame() {
  resolveGame();
  buildMenu();
  createWindow();
  if (game.overlay) console.info(`${game.label}: clean mode — nothing is injected into the page; overlay is a separate click-through window.`);
}

ipcMain.handle("picker:launch", (_e, { game: id, skip }) => {
  if (!GAMES[id]) return false;
  settings.game = id;
  settings.showPicker = !skip;
  saveSettings(settings);
  launchGame(); // creates the game window first so the app never hits zero windows
  try { pickerWin?.close(); } catch (_) {}
  pickerWin = null;
  return true;
});
ipcMain.handle("picker:quit", () => app.quit());
ipcMain.handle("picker:dev", (_e, { on, code }) => {
  if (on && code !== DEV_CODE) return { ok: false };
  settings.dev = !!on;
  saveSettings(settings);
  if (on) {
    launchGame(); // creates the game window first so the app never hits zero windows
    try { pickerWin?.close(); } catch (_) {}
    pickerWin = null;
  }
  return { ok: true };
});
ipcMain.handle("picker:beta", (_e, { on }) => {
  settings.beta = !!on;
  saveSettings(settings);
  if (on) {
    launchGame();
    try { pickerWin?.close(); } catch (_) {}
    pickerWin = null;
    return { launched: true };
  }
  return { launched: false };
});

function backToPicker() {
  settings.showPicker = true;
  saveSettings(settings);
  showPicker(); // open picker first, then close the game window
  try { overlayWin?.close(); } catch (_) {}
  overlayWin = null;
  try { win?.close(); } catch (_) {}
  win = null;
}

/* ---------- window ---------- */
function createWindow() {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth: 800,
    minHeight: 600,
    backgroundColor: "#1a0c12",
    title: `Sakura Launcher — ${game.label}`,
    autoHideMenuBar: true,
    show: false,
    webPreferences: {
      // Only the Clutcher profile gets a preload bridge. AstraStrike gets nothing.
      ...(game.injectClient ? { preload: path.join(__dirname, "preload.js") } : {}),
      contextIsolation: true,
      nodeIntegration: false,
      partition: game.partition,
      backgroundThrottling: !settings.runInBackground,
      spellcheck: false
    }
  });

  win.setMenuBarVisibility(false);
  win.once("ready-to-show", () => win.show());

  // Open external links in the real browser
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
  win.webContents.on("will-navigate", (e, url) => {
    if (!game.navOk.test(url)) {
      e.preventDefault();
      shell.openExternal(url);
    }
  });

  // Inject the game's Sakura payload once the page has loaded (Clutcher.io and
  // Cookie Clicker profiles only; AstraStrike never gets anything injected).
  if (game.injectClient) {
    win.webContents.on("did-finish-load", () => {
      const url = win.webContents.getURL();
      if (!game.navOk.test(url)) return;
      const src = payloadSource(game.payload || "gloww-client.user.js");
      if (!src) return console.warn(`Sakura payload not found: ${game.payload}`);
      win.webContents.executeJavaScript(src, true).catch(err => console.warn("Sakura injection failed:", err));
    });
  }

  if (game.overlay) {
    createOverlay();
    for (const evt of ["move", "resize", "enter-full-screen", "leave-full-screen", "show", "restore"]) {
      win.on(evt, placeOverlay);
    }
  }

  // Basic keyboard shortcuts + overlay key feed
  win.webContents.on("before-input-event", (e, input) => {
    if (input.type !== "keyDown") { forwardKey(input); return; }
    if (input.key === "F11") { win.setFullScreen(!win.isFullScreen()); e.preventDefault(); return; }
    if (input.key === "F5") { win.webContents.reload(); e.preventDefault(); return; }
    if (input.key === "F8" && game.overlay) { setOverlayEdit(!overlayEdit); e.preventDefault(); return; }
    forwardKey(input);
  });

  win.on("page-title-updated", e => e.preventDefault());
  win.on("closed", () => { win = null; overlayWin = null; });
  win.loadURL(game.url);
}

/* ---------- launcher settings bridge (used by the injected client / overlay) ---------- */
ipcMain.handle("launcher:get", () => ({
  settings,
  defaults: DEFAULTS,
  gpu: app.getGPUFeatureStatus(),
  versions: { electron: process.versions.electron, chrome: process.versions.chrome }
}));
ipcMain.handle("launcher:set", (_e, next) => {
  Object.assign(settings, next);
  saveSettings(settings);
  return settings;
});
ipcMain.handle("launcher:restart", () => { app.relaunch(); app.exit(0); });
ipcMain.handle("launcher:gpuinfo", () => app.getGPUInfo("basic"));

// Overlay-only settings (corner / scale / opacity / enabled)
ipcMain.handle("overlay:set", (_e, next) => {
  settings.overlay = { ...settings.overlay, ...next };
  saveSettings(settings);
  placeOverlay();
  try { overlayWin?.webContents.send("ks:settings", settings.overlay); } catch (_) {}
  return settings.overlay;
});

/* ---------- menu (press Alt to reveal) ---------- */
function buildMenu() {
  const menu = Menu.buildFromTemplate([
    {
      label: "Game",
      submenu: [
        ...Object.entries(GAMES).map(([id, g]) => ({
          label: g.label,
          type: "radio",
          checked: settings.game === id,
          click: () => {
            if (settings.game === id) return;
            settings.game = id;
            saveSettings(settings);
            app.relaunch();
            app.exit(0);
          }
        })),
        { type: "separator" },
        { label: "Choose game…", click: () => backToPicker() },
        { type: "separator" },
        { label: "Quit", role: "quit" }
      ]
    },
    ...(game.overlay ? [{
      label: "Overlay",
      submenu: [
        {
          label: "Enabled",
          type: "checkbox",
          checked: settings.overlay.enabled,
          click: item => {
            settings.overlay.enabled = item.checked;
            saveSettings(settings);
            placeOverlay();
            try { overlayWin?.webContents.send("ks:settings", settings.overlay); } catch (_) {}
          }
        },
        { label: "Edit layout…", accelerator: "F8", click: () => setOverlayEdit(!overlayEdit) }
      ]
    }] : [])
  ]);
  Menu.setApplicationMenu(menu);
}

app.whenReady().then(() => {
  if (settings.showPicker) {
    buildMenu();
    showPicker();
  } else {
    launchGame();
  }
});

app.on("window-all-closed", () => app.quit());
