import { app, protocol, shell, BrowserWindow, ipcMain, session } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
import { spawn } from 'child_process'
import { UpdateCheckResult, autoUpdater } from 'electron-updater'
import log from 'electron-log/main'
import { DownloaderHelper } from 'node-downloader-helper'
import { execFile } from 'child_process'

log.initialize()
autoUpdater.logger = log
log.transports.file.level = 'info'

autoUpdater.autoDownload = true
autoUpdater.autoInstallOnAppQuit = true

const mainExePath = app.isPackaged
  ? join(process.resourcesPath, 'app.asar.unpacked', 'resources', 'myapp.exe')
  : join(__dirname, '../../resources/myapp.exe')

let serverProcess

function createWindow(): BrowserWindow {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
      // devTools: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
    mainWindow.setMenu(null) // Esto quita el menú
    mainWindow.setFullScreen(true) // Esto pone la aplicación en pantalla completa
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}

function startServer() {
  return new Promise((resolve, _) => {
    serverProcess = spawn(mainExePath)
    serverProcess.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`)
      if (data.includes('Uvicorn running on http://127.0.0.1:2010 (Press CTRL+C to quit)')) {
        resolve(true)
      }
    })
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  protocol.registerFileProtocol('local', (request, callback) => {
    const url = request.url.replace('local:///', '')
    try {
      return callback(decodeURIComponent(url))
    } catch (error) {
      console.error('Failed to register protocol', error)
    }
  })

  session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
    callback({
      responseHeaders: {
        ...details.responseHeaders,
        'Content-Security-Policy': ['*']
      }
    })
  })
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  ipcMain.on('log', (_, message) => {
    log.info(message)
  })

  if (app.isPackaged) {
    ipcMain.on('check-for-updates', (event) => {
      const { sender } = event
      const result = autoUpdater.checkForUpdates()
      result
        .then((checkResult: UpdateCheckResult | null) => {
          const updateInfo = checkResult?.updateInfo
          if (updateInfo?.version !== app.getVersion()) {
            log.info(updateInfo)
            sender.send('update-available', updateInfo)
          } else {
            sender.send('update-not-available')
          }
        })
        .catch(() => {
          app.quit()
        })
    })
  }

  autoUpdater.on('update-downloaded', () => {
    autoUpdater.quitAndInstall()
  })

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
async function closeServer() {
  fetch('http://127.0.01:2010/shutdown')
}

ipcMain.on('downLoadFile', async (event, { payload }) => {
  const downloader = new DownloaderHelper(
    payload.url,
    `${app.getPath('downloads')}` // Or a custom download directory if needed
  )
  downloader.on('end', () => event.sender.send('download-end', true))
  downloader.on('error', (err) => event.sender.send('download-error', err))
  downloader
    .on('progress', (stats) => {
      const progressData = {
        speed: (stats.speed / 1024).toFixed(1) + ' KB/s', // KB/s with one decimal place
        progress: stats.progress.toFixed(1),
        downloaded: (stats.downloaded / 1048576).toFixed(2), // MB with two decimal places
        total: (stats.total / 1048576).toFixed(2) + ' MB'
      }

      // Send progress data to the renderer process using ipcMain.send
      event.sender.send('update-download-progress', progressData)
    })

  downloader.start().catch((err) => console.error(err))
})


ipcMain.handle('runTabletModEvent', async () => {
  const ps1Dir = app.isPackaged
    ? join(process.resourcesPath, 'app.asar.unpacked', 'resources', 'psw.ps1')
    : join(__dirname, '../../resources/psw.ps1')

  return new Promise((resolve, reject) => {
    const powershellScript = ps1Dir
    execFile('powershell.exe', ['-NoProfile', '-ExecutionPolicy', 'Bypass', '-File', powershellScript], (error, stdout, stderr) => {
      if (error) {
        reject(stderr);
      } else {
        resolve(stdout);
      }
    });
  })
})


ipcMain.on('close-app', async () => {
  try {
    await closeServer()
  } catch (error) {
    console.error(error)
  }
  app.quit()
})

ipcMain.handle('get-app-status', () => {
  return app.isPackaged
})

ipcMain.handle('get-app-version', () => {
  return app.getVersion()
})

ipcMain.handle('start-server', async () => {
  try {
    const response = await startServer()
    return response
  } catch (error) {
    console.error(error)
    throw error
  }
})

app.on('before-quit', async () => {
  try {
    await closeServer()
  } catch (error) { }
  app.quit()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', async () => {
  try {
    await closeServer()
  } catch (error) {
    console.error(error)
  }

  if (process.platform !== 'darwin') {
    try {
      await closeServer()
    } catch (error) { }
    app.quit()
  }
})
