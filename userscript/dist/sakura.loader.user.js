// ==UserScript==
// @name         Sakura Client
// @namespace    local.sakura.client
// @version      1.3.2
// @description  Sakura Client loader — full client on Clutcher.io, clean keystrokes overlay on AstraStrike
// @match        https://www.clutcher.io/*
// @match        https://clutcher.io/*
// @match        https://astrastrike.fun/*
// @match        https://*.astrastrike.fun/*
// @run-at       document-idle
// @grant        none
// @noframes
// ==/UserScript==

/* Sakura Client — LOADER (this is the only file installed as a userscript).
 * Detects the site, then loads the matching payload from GitHub:
 *  - clutcher.io     → sakura.clutcher.js (full client)
 *  - astrastrike.fun → sakura.astra.js   (clean keystrokes overlay)
 *
 * The https://raw.githubusercontent.com/wtfSnip3lol/sakura-client/main/userscript/dist/ placeholder is replaced at build time with your
 * GitHub raw URL (see package.json → sakura.rawBase, or SAKURA_RAW_BASE env).
 * Keep this file readable — only the two payloads are obfuscated.
 */

(() => {
  "use strict";
  var HOST = location.hostname || "";
  var IS_CLUTCHER = /(^|\.)clutcher\.io$/.test(HOST);
  var IS_ASTRA = /(^|\.)astrastrike\.fun$/.test(HOST);
  if (!IS_CLUTCHER && !IS_ASTRA) return;

  var BASE = "https://raw.githubusercontent.com/wtfSnip3lol/sakura-client/main/userscript/dist/";
  var FILE = IS_CLUTCHER ? "sakura.clutcher.js" : "sakura.astra.js";

  function run(code) {
    // Run in page context so canvas/DOM access behaves identically on both sites.
    var s = document.createElement("script");
    s.textContent = code;
    (document.head || document.documentElement).appendChild(s);
    s.remove();
  }

  fetch(BASE + FILE, { cache: "no-store" })
    .then((r) => {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.text();
    })
    .then(run)
    .catch((e) => {
      // Fallback: some pages block fetch/CSP — eval in userscript context instead.
      console.warn("[sakura] payload load failed, retrying via eval:", e && e.message);
      fetch(BASE + FILE, { cache: "no-store" })
        .then((r) => r.text())
        .then((code) => { (0, eval)(code); })
        .catch((e2) => console.warn("[sakura] payload failed:", e2 && e2.message));
    });
})();

