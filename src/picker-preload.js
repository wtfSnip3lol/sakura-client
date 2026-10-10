// Sakura Launcher — picker preload. Exposes a tiny bridge so the
// game-selection screen can ask the main process to launch or quit.
const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("sakuraPicker", {
  launch: (game, skip) => ipcRenderer.invoke("picker:launch", { game, skip }),
  quit: () => ipcRenderer.invoke("picker:quit"),
  dev: ({ on, code }) => ipcRenderer.invoke("picker:dev", { on, code }),
  beta: ({ on }) => ipcRenderer.invoke("picker:beta", { on })
});
