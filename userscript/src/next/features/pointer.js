/* Pointer hygiene (new; the v2 client carried the same routine inline and it is
 * the source of the "camera flicks" complaint).
 *
 * The client frees the cursor on purpose when the menu opens — the match keeps
 * running, which is the point of the feature. Two consequences show up as the
 * camera jumping around while you play:
 *
 *   1. The game keeps reading mouse movement as look input while the pointer is
 *      unlocked, so walking the cursor across the screen to the menu drags the
 *      view with it.
 *   2. Every pointer-lock transition delivers a movement event carrying the
 *      delta accumulated while unlocked, and the game applies that in one go.
 *
 * Both are swallowed in the capture phase, before the game's own listeners. The
 * client's own UI is exempt, so hovering, dragging and the drag editor keep
 * working: events that originate inside the shadow root are retargeted to the
 * host element, and those are let through.
 *
 * This must stay in step with the block of the same name in the v2 client until
 * the parity flip retires v2. Read counters with SK.pointer.state().
 */
(function () {
  "use strict";
  var SK = window.__sk;

  var armed = 0;          // movement events still to swallow after a lock change
  var armedAt = 0;
  var blocked = 0;
  var lastReason = "";

  function on() { return SK.settings.ptrGuard !== false; }

  // Events raised inside the client's shadow root are retargeted to the host, so
  // one identity check covers the whole UI.
  function own(target) {
    try { return !!(target && target === SK.host()); } catch (_) { return false; }
  }

  function menuOpen() {
    try { return !!(SK.panel && SK.panel.isOpen && SK.panel.isOpen()); } catch (_) { return false; }
  }

  function inMatch() {
    try { return !!(SK.game && SK.game.live && SK.game.live()); } catch (_) { return false; }
  }

  function why(e) {
    if (!on()) return "";
    if (!e || typeof e.movementX !== "number") return "";
    if (own(e.target)) return "";
    if (armed > 0) {
      if (SK.now() - armedAt <= 400) { armed--; return "lock-transition"; }
      armed = 0;
    }
    if (menuOpen() && !document.pointerLockElement && inMatch()) return "cursor-freed";
    return "";
  }

  function swallow(e) {
    var r = why(e);
    if (!r) return;
    blocked++;
    lastReason = r;
    e.stopImmediatePropagation();
    e.preventDefault();
  }

  // A lock change can deliver a delta in either direction: the release that frees
  // the cursor and the re-lock that takes it back. Two events covers the coalesced
  // pair Chrome sometimes sends; the window stops a stale arm from eating a real
  // movement later on.
  function arm() { armed = 2; armedAt = SK.now(); }

  window.addEventListener("pointerlockchange", arm, true);
  window.addEventListener("mousemove", swallow, true);
  window.addEventListener("pointermove", swallow, true);

  SK.pointer = {
    on: on,
    arm: arm,
    state: function () {
      return {
        blocked: blocked,
        last: lastReason,
        armed: armed,
        guard: on(),
        freed: !!(menuOpen() && !document.pointerLockElement),
        locked: !!document.pointerLockElement
      };
    }
  };
})();
