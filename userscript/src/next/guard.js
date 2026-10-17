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
 *   duplicate rewrite   two installs (userscript + loader), or a reload that
 *                       left the previous engine alive — both copies share
 *                       window.__sk (core.js flags it), so the later one would
 *                       double every task and every painter. It stands down:
 *                       the first copy is running, so the user sees the client.
 *   old client present  the v2 client claims the page by setting
 *                       window.__sakuraTakeover at document-start. If it is
 *                       already there, v2 owns this page and we stand down with
 *                       a warning *and a note on the page* rather than trading
 *                       the host back and forth with it.
 *   old client later    our document-start still beats the loader's fetch at
 *                       DOMContentLoaded, so v2 can show up after us. It strips
 *                       #sakura-ui the moment it takes over, which would leave a
 *                       half-dead panel behind — the watcher stops the engine,
 *                       removes the host and says why, on the page too.
 *
 * The note matters: this client's only UI is the panel it never mounts, so a
 * console-only stand-down reads as "the rewrite aint there". Everything here
 * runs before core.js, so it cannot use the shadow root or the stylesheet —
 * plain DOM with inline styles, id `sakura-boot-note` (distinct from
 * `sakura-ui`, which is the host the old client removes when it takes over).
 *
 * This file is not standalone-parseable on purpose (top-level `return` outside
 * a function is only legal once the bundler has wrapped it); its syntax is
 * checked through `build-next.mjs --check`, which is what the verifier does.
 */
var skBootDup = !!(window.__sk && window.__sk.core);
var skBootV2 = !!window.__sakuraTakeover;

// Stand-down note: fixed, top of the page's own stacking order, click to
// dismiss, gone by itself after 12 s. Never throws into the page.
function skBootNote(title, lines) {
  try {
    var el = document.createElement("div");
    el.id = "sakura-boot-note";
    el.style.cssText = "position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:2147483647;" +
      "max-width:min(560px,92vw);box-sizing:border-box;padding:10px 14px;border-radius:10px;cursor:pointer;" +
      "background:rgba(24,10,18,.96);border:1px solid rgba(255,107,157,.55);color:#ffd9e4;" +
      "font:12px/1.5 ui-monospace,SFMono-Regular,Consolas,monospace;box-shadow:0 6px 24px rgba(0,0,0,.5)";
    var head = document.createElement("div");
    head.style.cssText = "font-weight:700;color:#ff6b9d;margin-bottom:4px";
    head.textContent = title;
    el.appendChild(head);
    lines.forEach(function (t) {
      var d = document.createElement("div");
      d.textContent = t;
      el.appendChild(d);
    });
    var hint = document.createElement("div");
    hint.style.cssText = "margin-top:6px;opacity:.6";
    hint.textContent = "click to dismiss";
    el.appendChild(hint);
    el.addEventListener("click", function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    });
    var root = document.body || document.documentElement;
    if (root) root.appendChild(el);
    else document.addEventListener("readystatechange", function () {
      try { (document.body || document.documentElement).appendChild(el); } catch (_) {}
    }, { once: true });
    setTimeout(function () {
      if (el.parentNode) el.parentNode.removeChild(el);
    }, 12000);
  } catch (_) {}
}

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
  skBootNote("Sakura (next) stood down", [
    "The old client is already running on this page, so this build did not start.",
    "Reinstall the Sakura loader userscript, then reload — it serves this client now."
  ]);
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
  skBootNote("Sakura (next) handed the page over", [
    "The old client took over this page, so the rewrite stopped itself.",
    "Reinstall the Sakura loader userscript, then reload — it serves this client now."
  ]);
}, 500);
