// ============================================================================
// SAKURA 2V2.IO CONSOLE EXPLORER
// Paste this into DevTools console on 2v2.io to find the game's entity system
// ============================================================================

(() => {
  const log = (label, val) => {
    const s = JSON.stringify(val, (k, v) => {
      if (v instanceof HTMLElement) return `<${v.tagName.toLowerCase()}>`;
      if (v instanceof CanvasRenderingContext2D) return "<CanvasCtx>";
      if (v instanceof WebGLRenderingContext) return "<WebGLCtx>";
      if (v instanceof WebGL2RenderingContext) return "<WebGL2Ctx>";
      if (typeof v === 'function') return v.toString().slice(0, 80);
      if (v && typeof v === 'object' && v.constructor?.name) return `{${v.constructor.name}}`;
      return v;
    }, 2).slice(0, 3000);
    console.log(`%c[${label}]%c ${s}`, 'color:#ff6b9d;font-weight:bold', 'color:#ccc');
  };

  // 1. Canvas & rendering context
  const canvases = [...document.querySelectorAll('canvas')];
  log('CANVASES', canvases.map(c => ({
    id: c.id, class: c.className,
    w: c.width, h: c.height,
    rect: c.getBoundingClientRect(),
    ctx2d: !!c.getContext('2d'),
    webgl: !!c.getContext('webgl'),
    webgl2: !!c.getContext('webgl2')
  })));

  // 2. Common global engines
  const engines = {
    Phaser: window.Phaser,
    PIXI: window.PIXI,
    Three: window.THREE,
    Babylon: window.BABYLON,
    Cocos: window.cc,
    Godot: window.Godot,
    Unity: window.unityInstance || window.Module,
    PlayCanvas: window.pc,
    Phaser3: window.Phaser?.Game,
  };
  log('ENGINE GLOBALS', Object.fromEntries(
    Object.entries(engines).filter(([_, v]) => v).map(([k, v]) => [k, v?.constructor?.name || typeof v])
  ));

  // 3. Scene / game object patterns
  const sceneKeys = Object.keys(window).filter(k => 
    /^(game|scene|renderer|engine|world|stage|app|director|application)$/i.test(k)
  );
  log('SCENE-LOOKING GLOBALS', sceneKeys);
  for (const k of sceneKeys) {
    const v = window[k];
    if (v && typeof v === 'object') {
      log(`  ${k}`, {
        constructor: v.constructor?.name,
        keys: Object.keys(v).slice(0, 30),
        // Common child containers
        children: v.children?.length,
        list: v.list?.length,
        scenes: v.scenes?.length,
        objects: v.objects?.length,
        entities: v.entities?.length,
        gameObjects: v.gameObjects?.length,
        players: v.players?.length,
        entities: v.entities?.length,
        actors: v.actors?.length
      });
    }
  }

  // 4. Player / entity arrays
  const entityKeys = Object.keys(window).filter(k => 
    /^(players?|entities?|characters?|actors?|units?|enemies?|bots?|npcs?)$/i.test(k)
  );
  log('ENTITY-LOOKING GLOBALS', entityKeys);
  for (const k of entityKeys) {
    const v = window[k];
    if (Array.isArray(v)) {
      log(`  ${k} [${v.length}]`, v.slice(0, 3).map(e => e && typeof e === 'object' ? ({
        constructor: e.constructor?.name,
        keys: Object.keys(e).slice(0, 20),
        x: e.x, y: e.y,
        health: e.health, hp: e.hp,
        team: e.team, owner: e.owner,
        body: e.body?.constructor?.name,
        sprite: e.sprite?.constructor?.name,
        mesh: e.mesh?.constructor?.name
      }) : e));
    }
  }

  // 5. Canvas __engine / __pixi / __three properties (common on engine canvases)
  for (const c of canvases) {
    const props = Object.getOwnPropertyNames(c).filter(p => /^__|engine|scene|renderer|pixi|three|phaser/i.test(p));
    if (props.length) log(`CANVAS ${c.id||'#'} PROPS`, props);
  }

  // 6. Module systems (webpack, rollup, etc.)
  if (window.__webpack_modules__) log('WEBPACK MODULES', Object.keys(window.__webpack_modules__).length);
  if (window.__PARCEL__) log('PARCEL', true);

  // 7. WebGL context inspection
  for (const c of canvases) {
    const gl = c.getContext('webgl') || c.getContext('webgl2');
    if (gl) {
      log('WEBGL CONTEXT', {
        vendor: gl.getParameter(gl.VENDOR),
        renderer: gl.getParameter(gl.RENDERER),
        version: gl.getParameter(gl.VERSION),
        shading: gl.getParameter(gl.SHADING_LANGUAGE_VERSION)
      });
      break;
    }
  }

  console.log('%c=== DONE - Check output above for entity arrays ===', 'color:#ff6b9d;font-size:14px');
})();