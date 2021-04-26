const { app, BrowserWindow } = require('electron')
const path = require('path')

const { spawn } = require('child_process');
const cd = spawn('cd ..; npm start;');

cd.on('error', (err) => {
  console.error('Failed to start subprocess.');
});

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  win.loadURL("http://localhost:8080")
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

