/* Sakura client — game adapter (rewrite).
 *
 * The ONLY place that knows clutcher's internals. Everything here is already
 * proven against the live game (physics mask bytes, merged level mesh, no
 * window.THREE, hud.xh, the viewmodel update hook) — it is collected here so
 * features never guess, and so a game update has exactly one file to fix.
 */
(function () {
  "use strict";
  var SK = window.__sk = window.__sk || {};

  // ── object graph ──────────────────────────────────────────────────────────
  // window.game is a class instance holding scene / physics / map / player /
  // camera / hud / viewmodel / weapons (see loadMap(): this.scene = new Scene,
  // this.physics = new Physics).
  function get() { try { return window.game || null; } catch (_) { return null; } }
  function stateOf(g) {
    if (!g) return "";
    var raw = g.state !== undefined ? g.state : (g.gameState !== undefined ? g.gameState : g.status);
    var key = raw && typeof raw === "object" ? (raw.state !== undefined ? raw.state : raw.value) : raw;
    return String(key == null ? "" : key).trim().toLowerCase().replace(/[ -]/g, "_");
  }
  function playing(g) {
    g = g || get();
    if (!g) return false;
    if (g.isPlaying === true || g.playing === true) return true;
    var s = stateOf(g);
    return s === "playing" || s === "in_game" || s === "ingame" || s === "active";
  }
  function player(g) { g = g || get(); return (g && g.player) || null; }
  function camera(g) { g = g || get(); return (g && g.camera) || null; }
  function scene(g) { g = g || get(); return (g && g.scene) || null; }
  function map(g) { g = g || get(); return (g && g.map) || null; }
  function mapKey(g) {
    var m = map(g);
    if (!m) return "none";
    return String(m.id || m.name || "map") + "|" + String(m.ceilY);
  }

  // ── player geometry ───────────────────────────────────────────────────────
  function eyeH(p) { return p && Number.isFinite(p.eyeH) ? p.eyeH : 1.6256; }
  function eyeY(p) { return (p ? p.y : 0) + eyeH(p); }
  function eye(p, out) {
    out = out || { x: 0, y: 0, z: 0 };
    if (!p) return out;
    out.x = p.x; out.y = p.y + eyeH(p); out.z = p.z;
    return out;
  }
  // horizontal forward from the camera's world matrix (column-major), else yaw
  function fwdXZ(g, p, out) {
    out = out || [0, -1];
    var cam = camera(g), fx = 0, fz = -1;
    if (cam && cam.matrixWorld && cam.matrixWorld.elements && cam.matrixWorld.elements.length >= 16) {
      var e = cam.matrixWorld.elements;
      fx = -e[8]; fz = -e[10];
    } else if (p && Number.isFinite(p.yaw)) {
      fx = -Math.sin(p.yaw); fz = -Math.cos(p.yaw);
    }
    var len = Math.hypot(fx, fz) || 1;
    out[0] = fx / len; out[1] = fz / len;
    return out;
  }

  // ── collision ─────────────────────────────────────────────────────────────
  // physics.raycast(ox,oy,oz,dx,dy,dz,maxT,mask) -> {t,x,y,z,nx,ny,nz,mat,b} | null
  // Brushes carry a mask byte (default 7); the game's own ground/step/stand
  // probes use bit 0. Rather than betting on one bit we ray with the union of
  // every mask the map actually uses.
  var maskOf = 1, maskAt = -1e9, maskN = -1;
  function physics(g) {
    g = g || get();
    var ph = g && g.physics;
    return ph && typeof ph.raycast === "function" ? ph : null;
  }
  function rayMask(ph, now) {
    if (!ph) return 1;
    var n = ((ph.boxes && ph.boxes.length) || 0) + ((ph.tris && ph.tris.length) || 0);
    if (now - maskAt < 2000 && maskN === n) return maskOf;
    var m = 0;
    var scan = function (arr) {
      if (!arr) return;
      var len = Math.min(arr.length, 20000);
      for (var i = 0; i < len; i++) { var b = arr[i]; if (b && b.mask) m |= b.mask; }
    };
    try { scan(ph.boxes); scan(ph.tris); } catch (_) {}
    maskOf = m || 1; maskAt = now; maskN = n;
    return maskOf;
  }
  function ray(ph, ox, oy, oz, dx, dy, dz, dist, mask) {
    if (!ph) return null;
    try { return ph.raycast(ox, oy, oz, dx, dy, dz, dist, mask); } catch (_) { return null; }
  }

  // A map's own bounding box / ceiling brush covers everything: never a roof.
  function isShellBox(g, b) {
    if (!b || !Number.isFinite(b.minX)) return false;
    var m = map(g);
    if (m && m.min && m.max) {
      var mx = m.max[0] - m.min[0], mz = m.max[2] - m.min[2];
      if (mx > 4 && mz > 4 && (b.maxX - b.minX) >= mx * 0.92 && (b.maxZ - b.minZ) >= mz * 0.92) return true;
    }
    return (b.maxX - b.minX) * (b.maxZ - b.minZ) > 20000;
  }

  // Under cover = indoors, or tucked behind something. Four layers, cheapest
  // first; the reason is returned for the panel's live readout.
  var brushAt = -1e9, brushRes = -1;
  function brushRoof(ph, g, p, now) {
    if (now - brushAt < 500) return brushRes;
    brushAt = now; brushRes = -1;
    var px = p.x, pz = p.z, lo = p.y + 1.2, hi = p.y + 12;
    var scan = function (arr) {
      if (!arr || brushRes >= 0) return;
      var len = Math.min(arr.length, 40000);
      for (var i = 0; i < len; i++) {
        var b = arr[i];
        if (!b || !Number.isFinite(b.minX)) continue;
        if (!(px > b.minX && px < b.maxX && pz > b.minZ && pz < b.maxZ)) continue;
        if (!(b.minY > lo && b.minY < hi)) continue;
        if (isShellBox(g, b)) continue;
        brushRes = Math.round((b.minY - p.y) * 10) / 10;
        return;
      }
    };
    try { scan(ph.boxes); scan(ph.tris); } catch (_) {}
    return brushRes;
  }
  function cover(g, now) {
    g = g || get();
    var p = player(g);
    if (!p || !Number.isFinite(p.x) || !Number.isFinite(p.y) || !Number.isFinite(p.z)) return { on: false, why: "—" };
    var ph = physics(g);
    if (!ph) return { on: false, why: "no physics" };
    var mask = rayMask(ph, now);
    var ey = p.y + eyeH(p), chest = ey - 0.3;
    var up = ray(ph, p.x, ey, p.z, 0, 1, 0, 12, mask);
    if (up && !isShellBox(g, up.b)) return { on: true, why: "roof " + (Math.round(up.t * 10) / 10) + "m" };
    var off = [[1.5, 0], [-1.5, 0], [0, 1.5], [0, -1.5]], hits = 0;
    for (var i = 0; i < off.length; i++) {
      var h = ray(ph, p.x + off[i][0], ey, p.z + off[i][1], 0, 1, 0, 12, mask);
      if (h && !isShellBox(g, h.b)) hits++;
    }
    if (hits >= 2) return { on: true, why: "roof" };
    var f = fwdXZ(g, p);
    if (ray(ph, p.x, chest, p.z, f[0], 0, f[1], 1.8, mask)) return { on: true, why: "front" };
    var sides = 0;
    if (ray(ph, p.x, chest, p.z, 1, 0, 0, 2.4, mask)) sides++;
    if (ray(ph, p.x, chest, p.z, -1, 0, 0, 2.4, mask)) sides++;
    if (ray(ph, p.x, chest, p.z, 0, 0, 1, 2.4, mask)) sides++;
    if (ray(ph, p.x, chest, p.z, 0, 0, -1, 2.4, mask)) sides++;
    if (sides >= 3) return { on: true, why: "room" };
    var br = brushRoof(ph, g, p, now);
    if (br >= 0) return { on: true, why: "roof brush " + br + "m" };
    return { on: false, why: "clear m" + mask };
  }

  // ── THREE helpers (no window.THREE: classes are harvested per instance) ───
  var geoBox = new WeakMap();
  var scratch = [0, 0, 0, 0, 0, 0, 0];
  function worldAABB(o, out) {
    var geo = o && o.geometry;
    var m = o && o.matrixWorld && o.matrixWorld.elements;
    if (!geo || !m || m.length < 16) return false;
    var loc = geoBox.get(geo);
    if (loc === undefined) {
      var bb = geo.boundingBox;
      if (!bb && typeof geo.computeBoundingBox === "function") { try { geo.computeBoundingBox(); bb = geo.boundingBox; } catch (_) {} }
      loc = bb && bb.min && bb.max && Number.isFinite(bb.min.x) && Number.isFinite(bb.max.x)
        ? [bb.min.x, bb.min.y, bb.min.z, bb.max.x, bb.max.y, bb.max.z] : null;
      geoBox.set(geo, loc);
    }
    if (!loc) return false;
    out = out || scratch;
    var minX = Infinity, minY = Infinity, minZ = Infinity, maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity;
    for (var i = 0; i < 8; i++) {
      var x = (i & 1) ? loc[3] : loc[0], y = (i & 2) ? loc[4] : loc[1], z = (i & 4) ? loc[5] : loc[2];
      var wx = m[0] * x + m[4] * y + m[8] * z + m[12];
      var wy = m[1] * x + m[5] * y + m[9] * z + m[13];
      var wz = m[2] * x + m[6] * y + m[10] * z + m[14];
      if (wx < minX) minX = wx; if (wx > maxX) maxX = wx;
      if (wy < minY) minY = wy; if (wy > maxY) maxY = wy;
      if (wz < minZ) minZ = wz; if (wz > maxZ) maxZ = wz;
    }
    out[0] = minX; out[1] = minY; out[2] = minZ; out[3] = maxX; out[4] = maxY; out[5] = maxZ;
    out[6] = (maxX - minX) * (maxY - minY) * (maxZ - minZ);
    return true;
  }
  function underCam(o, cam) {
    for (var a = o; a; a = a.parent) if (a === cam) return true;
    return false;
  }

  // ── console / hud DOM ─────────────────────────────────────────────────────
  var DOM = {
    killcard: "#killcard", hitmark: "#hitmark", death: "#deathov",
    money: "#money", radar: "#radar", dmgarc: ".dmgarc", canvas: "#game canvas"
  };
  var domCache = new Map();
  function bySel(sel) {
    var hit = domCache.get(sel);
    if (hit && hit.isConnected) return hit;
    var n = null;
    try { n = document.querySelector(sel); } catch (_) {}
    if (n) domCache.set(sel, n);
    return n;
  }

  // ── viewmodel + weapon ────────────────────────────────────────────────────
  function viewmodel(g) { g = g || get(); return (g && g.viewmodel) || null; }
  function arms(g) {
    g = g || get();
    return (g && g.cs2 && g.cs2.rig && g.cs2.rig.arms) || null;
  }
  function weapons(g) { g = g || get(); return (g && g.weapons) || null; }
  function scoped(g) {
    g = g || get();
    if (!g) return false;
    if (g.scoped === true) return true;
    var w = weapons(g);
    return !!(w && Number(w.scopeLevel) > 0);
  }

  SK.game = {
    get: get, playing: playing, stateOf: stateOf,
    player: player, camera: camera, scene: scene, map: map, mapKey: mapKey,
    eyeH: eyeH, eyeY: eyeY, eye: eye, fwdXZ: fwdXZ,
    physics: physics, ray: ray, rayMask: rayMask, cover: cover, isShellBox: isShellBox,
    worldAABB: worldAABB, underCam: underCam,
    viewmodel: viewmodel, arms: arms, weapons: weapons, scoped: scoped,
    DOM: DOM, bySel: bySel,
    live: function (g) { g = g || get(); var p = player(g); return playing(g) && !!scene(g) && !!p && p.alive !== false; }
  };
  SK.log("game adapter ready");
})();
