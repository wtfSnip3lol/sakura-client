/* Config profiles (new, no v2 equivalent).
 *
 * The v2 client has Export/Import as a JSON blob through the clipboard, which
 * means one config at a time and a text field in the way. This keeps several
 * named snapshots inside the same localStorage the client already uses, so a
 * profile is one click to save and one click to switch back.
 */
(function () {
  "use strict";
  var SK = window.__sk;
  var KEY = "sakura.profiles.v1";

  function all() {
    try {
      var raw = JSON.parse(localStorage.getItem(KEY) || "{}");
      return raw && typeof raw === "object" ? raw : {};
    } catch (_) { return {}; }
  }
  function write(obj) {
    try { localStorage.setItem(KEY, JSON.stringify(obj)); SK.alert("profiles saved"); } catch (e) { SK.warn("profile write", e); }
  }
  function names() { return Object.keys(all()).sort(); }

  function saveAs(name) {
    name = String(name || "").trim();
    if (!name) return false;
    var o = all();
    o[name] = JSON.parse(JSON.stringify(SK.settings));
    write(o);
    SK.log("profile saved:", name, "(" + Object.keys(o[name]).length + " keys)");
    return true;
  }

  function load(name) {
    var snap = all()[name];
    if (!snap) return false;
    var n = 0;
    for (var k in snap) {
      if (Object.prototype.hasOwnProperty.call(SK.settings, k)) { SK.settings[k] = snap[k]; n++; }
    }
    SK.save();
    SK.flush();          // write through now: a load that is not persisted is a trap
    SK.log("profile loaded:", name, "(" + n + " keys)");
    return true;
  }

  function del(name) {
    var o = all();
    if (!o[name]) return false;
    delete o[name];
    write(o);
    return true;
  }

  function size(name) {
    var s = all()[name];
    return s ? Object.keys(s).length + " keys" : "";
  }

  SK.profiles = { names: names, save: saveAs, load: load, del: del, size: size, key: KEY };
})();
