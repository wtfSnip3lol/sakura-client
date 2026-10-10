// Bridge so the injected Sakura Client can read/change launcher-level settings.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("sakuraLauncher", {
  get: () => ipcRenderer.invoke("launcher:get"),
  set: next => ipcRenderer.invoke("launcher:set", next),
  restart: () => ipcRenderer.invoke("launcher:restart"),
  gpuInfo: () => ipcRenderer.invoke("launcher:gpuinfo")
});
