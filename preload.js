// The only doors between the game page and the desktop app. The page cannot reach Node.
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('fnaz', {
  info: () => ipcRenderer.invoke('fnaz:info'),            // { uncapped, refresh, discord }
  setFps: (v) => ipcRenderer.send('fnaz:fps', v),          // 'auto' or a number; read again at the next launch
  presence: (p) => ipcRenderer.send('fnaz:presence', p),   // Discord status text
  relaunch: () => ipcRenderer.send('fnaz:relaunch'),
  update: {                                                // in-game updater, see updater.js
    state: () => ipcRenderer.invoke('fnaz:update-state'),
    check: () => ipcRenderer.send('fnaz:update-check'),
    install: () => ipcRenderer.send('fnaz:update-install'),
    onState: (cb) => ipcRenderer.on('fnaz:update', (e, s) => cb(s))
  }
});
