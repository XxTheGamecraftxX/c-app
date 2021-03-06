const { app, BrowserWindow, ipcMain } = require('electron')
const {autoUpdater} = require("electron-updater");

function createWindow () {
  // Cree la fenetre du navigateur.
  win = new BrowserWindow({ autoHideMenuBar: true, backgroundColor: '#272c33'})
  // et charge le index.html de l'application.
  win.maximize()
  win.loadFile('index.html')
}

app.on('ready', function() {
  createWindow()
  autoUpdater.checkForUpdates()
})

app.on('window-all-closed', () => {
  app.quit()
})