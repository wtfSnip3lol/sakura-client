// Bridge for the keystrokes overlay layer (AstraStrike clean mode).
// This preload is attached ONLY to the local overlay.html view — never to the game page.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("sakuraOverlay", {
  onKey: cb => ipcRenderer.on("ks:key", (_e, data) => cb(data)),
  onSettings: cb => ipcRenderer.on("ks:settings", (_e, data) => cb(data)),
  onEdit: cb => ipcRenderer.on("ks:edit", (_e, on) => cb(on)),
  get: () => ipcRenderer.invoke("launcher:get"),
  setOverlay: next => ipcRenderer.invoke("overlay:set", next)
});
