/* Sakura client — boot guard (rewrite).
 *
 * Deliberately the first module in the bundle, and deliberately not an IIFE:
 * the whole client is one engine per page, so the decision to run at all has to
 * be made before any other module has registered a task, a painter or a window
 * listener. A bare `return` here exits the bundle IIFE, so nothing below this
 * file executes.
 *
 * Three cases, one cheap check each:
 *
 *   duplicate rewrite   two installs (userscript + launcher), or a reload that
 *                       left the previous engine alive — both copies share
 *                       window.__sk (core.js flags it), so the later one would
 *                       double every task and every painter. It stands down.
 *   old client present  the v2 client claims the page by setting
 *                       window.__sakuraTakeover at document-start. If it is
 *                       already there, v2 owns this page and we stand down with
 *                       a console warning rather than trading the host back and
 *                       forth with it.
 *   old client later    our document-start still beats the loader's fetch at
 *                       DOMContentLoaded, so v2 can show up after us. It strips
 *                       #sakura-ui the moment it takes over, which would leave a
 *                       half-dead panel behind — the watcher stops the engine
 *                       and says why.
 *
 * This file is not standalone-parseable on purpose (top-level `return` outside
 * a function is only legal once the bundler has wrapped it); its syntax is
 * checked through `build-next.mjs --check`, which is what the verifier does.
 */
var skBootDup = !!(window.__sk && window.__sk.core);
var skBootV2 = !!window.__sakuraTakeover;

if (skBootDup) {
  try {
    console.warn("[sakura] another copy of this client is already running on this page — this one is standing down.");
  } catch (_) {}
  return;
}

if (skBootV2) {
  try {
    console.warn("[sakura] the old client (v2) owns this page — its loader is installed. " +
      "Disable that userscript (and any launcher that injects it), then reload to run the rewrite.");
  } catch (_) {}
  return;
}

// v2 arrives after us: yield before it has to fight us for the host.
var skBootWatch = setInterval(function () {
  if (!window.__sakuraTakeover) return;
  clearInterval(skBootWatch);
  try {
    console.warn("[sakura] the old client (v2) took over this page — the rewrite is stopping.");
  } catch (_) {}
  try { if (window.__sk && window.__sk.stop) window.__sk.stop(); } catch (_) {}
  try {
    var skBootHost = document.getElementById("sakura-ui");
    if (skBootHost && skBootHost.parentNode) skBootHost.parentNode.removeChild(skBootHost);
  } catch (_) {}
}, 500);
