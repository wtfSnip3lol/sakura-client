/* New settings keys for features the v2 client does not have.
 *
 * Loaded straight after defaults.gen.js and before core.js, so these keys are
 * part of the schema when the engine snapshots it: they persist, they load, and
 * the panel's own rows read the same values.
 */
Object.assign(DEFAULTS, {
  // Perf dashboard: frame-time graph + panel strip + task cost table
  perfOn: true,
  perfStrip: true,
  perfGraph: true,
  perfGraphPos: "bl",
  perfGraphScale: 33,
  perfTable: true,
  perfAuto: false,
  perfAutoFps: 110,
  perfBudget: 3.5,

  // Hotkeys
  hkOn: true,
  hkMenu: "Insert",
  hkGraph: "F8",
  hkMove: "F9",
  hkPerf: "F10",

  // Movement meter (counter-strafe / stop-to-shoot)
  mvOn: false,
  mvStyle: "bar",
  mvPos: "bottom",
  mvColor: "#7de3ff",
  mvReady: 2,
  mvScale: 7,
  mvAutoScale: true,
  mvSpeedText: true
});
