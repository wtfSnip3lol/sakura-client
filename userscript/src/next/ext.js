/* EXTRA tab (new).
 *
 * The panel is lifted verbatim from the v2 client, so the new modules cannot be
 * added by editing it — and they should not be: "same UI" is only true if the
 * lifted panel stays lifted. Instead this layer attaches a third tab to the
 * Lunar panel after it is built, and builds its cards with the panel's own
 * vocabulary (row / toggleSwitch / rangeField / selectField / actionBtn /
 * moduleCard), so everything here looks native without touching generated code.
 *
 * The panel is destroyed and rebuilt by rebuildPanel(), so attaching is a small
 * idempotent mount that the engine re-runs whenever the tab goes missing.
 */
(function () {
  "use strict";
  var SK = window.__sk;
  function S() { return SK.settings; }

  // ── live elements: one 2 Hz task refreshes them, disconnected ones are
  // dropped, so a panel rebuild cannot leak readers. ─────────────────────────
  var liveList = [];
  function live(el, fn) { liveList.push({ el: el, fn: fn }); return el; }
  SK.task({
    name: "ext-live", hz: 2, prio: 1,
    when: function () { return liveList.length > 0; },
    fn: function () {
      for (var i = liveList.length - 1; i >= 0; i--) {
        var it = liveList[i];
        if (!it.el.isConnected) { liveList.splice(i, 1); continue; }
        try { it.fn(it.el); } catch (e) { SK.warn("ext live", e); }
      }
    }
  });

  function group() {
    var g = document.createElement("div");
    g.style.cssText = "display:flex;gap:6px;align-items:center;";
    for (var i = 0; i < arguments.length; i++) g.appendChild(arguments[i]);
    return g;
  }
  function val(text) {
    var s = document.createElement("span");
    s.className = "sk-val";
    s.textContent = text;
    return s;
  }

  // ── Performance ──────────────────────────────────────────────────────────
  function perfCard() {
    var s = S();
    var autoVal = val(SK.autopilot.status());
    live(autoVal, function (el) { el.textContent = SK.autopilot.status(); });

    var table = document.createElement("div");
    table.style.cssText = "font:500 11px/1.65 ui-monospace,Menlo,Consolas,monospace;opacity:.75;white-space:pre;overflow-x:auto;padding:2px 0 0;";
    live(table, function (el) {
      if (s.perfTable === false) { el.textContent = ""; return; }
      var rows = SK.perf.taskRows().slice(0, 8);
      el.textContent = "ms/frame   task                     cadence (per run)" + rows.map(function (r) {
        return "\n" + r.per.toFixed(3).padStart(7) + "   " + r.name.padEnd(22) + "  " + r.hz +
          (r.hz === "frame" ? "" : " (" + r.ms.toFixed(2) + "ms)") + (r.off ? "  OFF" : "");
      }).join("");
    });

    return moduleCard("Performance", "Frame graph, per-task cost, and auto quality. All of it reads the client's own instrumentation.", s.perfOn, function (v) {
      s.perfOn = v; SK.save();
    }, [
      row("Panel strip", "FPS / frame time / client cost, in the header", toggleSwitch(s.perfStrip !== false, function (v) { s.perfStrip = v; SK.save(); })),
      row("Frame graph", "Frame time on the overlay", toggleSwitch(s.perfGraph !== false, function (v) { s.perfGraph = v; SK.save(); })),
      row("Graph corner", null, selectField(s.perfGraphPos || "bl", [["bl", "Bottom left"], ["br", "Bottom right"], ["tl", "Top left"], ["tr", "Top right"]], function (v) { s.perfGraphPos = v; SK.save(); })),
      row("Graph scale", "Worst frame time shown, ms", rangeField(SK.chNum(s.perfGraphScale, 33), 12, 100, 1, function (v) { s.perfGraphScale = v; SK.save(); })),
      row("Cosmetic budget", "Cosmetic tasks yield above this client cost, ms", rangeField(SK.chNum(s.perfBudget, 3.5), 0.5, 12, 0.5, function (v) { s.perfBudget = v; SK.save(); })),
      row("Auto quality", "Pause cosmetic tasks while FPS is under target", toggleSwitch(!!s.perfAuto, function (v) { s.perfAuto = v; SK.save(); })),
      row("Target FPS", null, rangeField(SK.chNum(s.perfAutoFps, 110), 30, 240, 5, function (v) { s.perfAutoFps = v; SK.save(); })),
      row("Auto state", "Live", autoVal),
      row("Reset cost", "Clear the per-task averages", actionBtn("Reset", function () {
        var c = SK.stats().cost;
        for (var k in c) delete c[k];
        SK.alert("task costs reset");
      })),
      table
    ]);
  }

  // ── Hotkeys ──────────────────────────────────────────────────────────────
  function hotkeyCard() {
    var s = S();
    var warn = val("no conflicts");
    live(warn, function (el) {
      var c = SK.hotkeys.conflicts();
      el.textContent = c.length ? c.join(" · ") : "no conflicts";
      el.style.color = c.length ? "#ffb86b" : "";
    });

    var rows = SK.hotkeys.list().map(function (h) {
      return row(h.label, "Click, then press a key", SK.hotkeys.capture(h.key, h.fallback));
    });
    rows.push(row("Conflicts", "Two modules on one key", warn));

    return moduleCard("Hotkeys", "Rebindable client keys. The menu key is no longer welded to Insert.", s.hkOn !== false, function (v) {
      s.hkOn = v; SK.save();
    }, rows);
  }

  // ── Movement meter ───────────────────────────────────────────────────────
  function moveCard() {
    var s = S();
    var status = val(SK.move.status());
    live(status, function (el) {
      el.textContent = SK.move.status();
      el.style.color = SK.move.ready() ? "#6ee7a8" : "";
    });

    return moduleCard("Movement meter", "Stop-to-shoot discipline: your horizontal speed and whether a shot would fly straight.", !!s.mvOn, function (v) {
      s.mvOn = v; SK.save();
    }, [
      row("Status", "Live", status),
      row("Style", null, selectField(s.mvStyle || "bar", [["bar", "Bar + speed"], ["compact", "Compact"], ["ready", "READY badge only"]], function (v) { s.mvStyle = v; SK.save(); })),
      row("Position", null, selectField(s.mvPos || "bottom", [["bottom", "Bottom"], ["top", "Top"]], function (v) { s.mvPos = v; SK.save(); })),
      row("Colour", "Used while moving", colorField(s.mvColor || "#7de3ff", function (v) { s.mvColor = v; SK.save(); })),
      row("Ready under", "Speed that counts as stopped, m/s", rangeField(SK.chNum(s.mvReady, 2), 0.1, 10, 0.1, function (v) { s.mvReady = v; SK.save(); })),
      row("Auto scale", "Fit the bar to your fastest observed speed", toggleSwitch(s.mvAutoScale !== false, function (v) { s.mvAutoScale = v; SK.save(); })),
      row("Fixed scale", "Used when auto scale is off, m/s", rangeField(SK.chNum(s.mvScale, 7), 1, 40, 1, function (v) { s.mvScale = v; SK.save(); })),
      row("Speed text", null, toggleSwitch(s.mvSpeedText !== false, function (v) { s.mvSpeedText = v; SK.save(); }))
    ]);
  }

  // ── Config profiles ──────────────────────────────────────────────────────
  function profileCard() {
    var sel = document.createElement("select");
    sel.className = "sk-field";
    var sig = null;
    live(sel, function (el) {
      var names = SK.profiles.names();
      var key = names.join("|");
      if (key === sig) return;
      sig = key;
      var keep = el.value;
      el.replaceChildren();
      if (!names.length) {
        var o = document.createElement("option");
        o.value = ""; o.textContent = "no profiles yet";
        el.appendChild(o);
        el.disabled = true;
      } else {
        el.disabled = false;
        names.forEach(function (n) {
          var op = document.createElement("option");
          op.value = n; op.textContent = n + "  (" + SK.profiles.size(n) + ")";
          el.appendChild(op);
        });
        if (keep) el.value = keep;
      }
    });

    var input = document.createElement("input");
    input.className = "sk-field";
    input.type = "text";
    input.placeholder = "New profile name";
    input.setAttribute("spellcheck", "false");

    return moduleCard("Profiles", "Named snapshots of every setting, kept in the client's own storage.", true, null, [
      row("Saved profiles", "Load or delete", sel),
      row("Name", "Save the current settings under", input),
      row("Actions", null, group(
        actionBtn("Save", function () {
          var n = String(input.value || "").trim();
          if (!n) { SK.alert("give the profile a name"); return; }
          if (SK.profiles.save(n)) { input.value = ""; SK.alert("saved “" + n + "”"); }
        }),
        actionBtn("Load", function () {
          var n = sel.value;
          if (!n) return;
          if (SK.profiles.load(n)) {
            SK.alert("loaded “" + n + "”");
            SK.panel.rebuild();      // every other row re-reads the settings
            mountExt();
          }
        }),
        actionBtn("Delete", function () {
          var n = sel.value;
          if (!n) return;
          SK.profiles.del(n);
          SK.alert("deleted “" + n + "”");
        })
      )),
      row("Copy JSON", "Same shape as the v2 Export row", actionBtn("Copy", function () {
        var text = JSON.stringify(SK.settings, null, 2);
        try {
          navigator.clipboard.writeText(text);
          SK.alert("settings copied");
        } catch (_) { SK.alert("clipboard blocked"); }
      })),
      row("Paste JSON", "Replace settings from the clipboard", actionBtn("Paste", function () {
        try {
          navigator.clipboard.readText().then(function (t) {
            var o = JSON.parse(t);
            var n = 0;
            for (var k in o) if (Object.prototype.hasOwnProperty.call(SK.settings, k)) { SK.settings[k] = o[k]; n++; }
            SK.save(); SK.flush();
            SK.alert("applied " + n + " keys");
            SK.panel.rebuild();
            mountExt();
          }, function () { SK.alert("clipboard blocked"); });
        } catch (_) { SK.alert("clipboard blocked"); }
      }))
    ]);
  }

  // ── Pointer hygiene ──────────────────────────────────────────────────────
  // The fix for the camera flicks. It has no v2 equivalent: the v2 client runs
  // the same guard, but unconditionally and with no row, so the switch and the
  // counters live here instead of in the lifted panel.
  function pointerCard() {
    var s = S();
    var blocked = val("0");
    live(blocked, function (el) {
      var st = SK.pointer.state();
      el.textContent = String(st.blocked) + (st.last ? "  " + st.last : "");
      el.style.color = st.blocked ? "#7dff8a" : "";
    });

    var cursor = val("—");
    live(cursor, function (el) {
      var st = SK.pointer.state();
      el.textContent = st.locked ? "locked" : st.freed ? "freed for menu" : "free";
      if (st.armed) el.textContent += " · transition";
    });

    return moduleCard("Pointer", "The menu frees the cursor on purpose; this keeps that cursor - and the delta a re-lock carries - from moving the camera.", s.ptrGuard !== false, function (v) {
      s.ptrGuard = v; SK.save();
    }, [
      row("Blocked", "Look events kept from the game since load", blocked),
      row("Cursor", "Live pointer state", cursor)
    ]);
  }

  // ── pane + tab ───────────────────────────────────────────────────────────
  function paneCards() {
    var intro = document.createElement("div");
    intro.className = "sk-mdesc";
    intro.style.cssText = "padding:0 2px 8px;";
    intro.textContent = "New modules — features the v2 client never had, running on the rewrite's engine.";
    return [intro, perfCard(), hotkeyCard(), pointerCard(), moveCard(), profileCard()];
  }

  var mountedOn = null, tabBtn = null, pane = null, tabsRef = [];

  function renderPane() {
    if (!pane) return;
    pane.replaceChildren.apply(pane, paneCards());
  }

  function activate(mine) {
    tabBtn.classList.toggle("active", mine);
    var p = mountedOn;
    var grid = p.querySelector(".ln-grid");
    var side = p.querySelector(".ln-side");
    var setPane = p.querySelector(".ln-settings");
    var srch = p.querySelector(".ln-search");
    if (mine) {
      // The lifted tabs only deactivate each other when one of them is clicked,
      // so selecting EXTRA has to stand MODS/SETTINGS down itself.
      tabsRef.forEach(function (b) { b.classList.remove("active"); });
      if (grid) grid.style.display = "none";
      if (side) side.style.display = "none";
      if (setPane) setPane.style.display = "none";
      if (srch) srch.style.visibility = "hidden";
      pane.style.display = "";
      renderPane();
    } else {
      pane.style.display = "none";
    }
  }

  function mountStrip(head) {
    if (head.querySelector(".sk-strip")) return;
    var strip = document.createElement("span");
    strip.className = "sk-strip";
    strip.style.cssText = "margin-left:auto;margin-right:10px;font-size:10px;font-weight:600;opacity:.6;white-space:nowrap;";
    live(strip, function (el) {
      var off = S().perfStrip === false;
      el.style.display = off ? "none" : "";
      if (!off) el.textContent = SK.perf.summary();
    });
    head.insertBefore(strip, head.querySelector(".ln-search"));
  }

  function mountExt() {
    var p = panelEl;
    if (!p) return;
    if (mountedOn !== p) { mountedOn = p; tabBtn = null; pane = null; tabsRef = []; }
    var head = p.querySelector(".ln-head");
    var bar = p.querySelector(".ln-tabs");
    var bodyEl = p.querySelector(".ln-body");
    if (!head || !bar || !bodyEl) return;
    mountStrip(head);
    if (tabBtn && tabBtn.isConnected) return;

    var existing = [].slice.call(bar.querySelectorAll(".ln-tab"));
    tabsRef = existing;
    tabBtn = document.createElement("button");
    tabBtn.type = "button";
    tabBtn.className = "ln-tab";
    tabBtn.textContent = "EXTRA";
    bar.appendChild(tabBtn);

    pane = document.createElement("div");
    pane.className = "ln-settings sk-extra-pane";
    pane.style.display = "none";
    bodyEl.appendChild(pane);
    renderPane();

    tabBtn.onclick = function () { activate(true); };
    // The lifted handlers are onclick properties assigned before these, so they
    // restore MODS/SETTINGS first and this only hides the extra pane.
    existing.forEach(function (b) {
      b.addEventListener("click", function () { if (pane) pane.style.display = "none"; tabBtn.classList.remove("active"); });
    });
    SK.log("EXTRA tab attached");
  }

  SK.task({
    name: "ext-mount", hz: 10, prio: 0,
    when: function () { return !!panelEl && (!tabBtn || !tabBtn.isConnected || mountedOn !== panelEl); },
    fn: mountExt
  });

  SK.ext = {
    mount: mountExt,
    pane: function () { return pane; },
    tab: function () { return tabBtn; },
    cards: function () { return liveList.length; }
  };
})();
