// The only doors between the game page and the desktop app. The page cannot reach Node.
const { contextBridge, ipcRenderer } = require('electron');
contextBridge.exposeInMainWorld('fnaz', {
  presence: (p) => ipcRenderer.send('fnaz:presence', p), // Discord status text
  open: (url) => ipcRenderer.send('fnaz:open', url)      // an https link, in the player's browser
});
