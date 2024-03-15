import { app, protocol, shell, BrowserWindow, ipcMain, session } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true'
import { spawn } from 'child_process'

const mainExePath = app.isPackaged
  ? join(process.resourcesPath, 'app.asar.unpacked', 'resources', 'myapp.exe')
  : join(__dirname, '../../resources/myapp.exe')

let serverProcess

function createWindow(): void {
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
    // mainWindow.setFullScreen(true) // Esto pone la aplicación en pantalla completa
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
}

function startServer() {
  return new Promise((resolve, _) => {
    serverProcess = spawn(mainExePath)
    serverProcess.stderr.on('data', (data) => {
      console.log(`stderr: ${data}`)
      if (
        data.includes(
          'Uvicorn running on http://127.0.0.1:2010 (Press CTRL+C to quit)'
        )
      ) {
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

ipcMain.on('close-app', async () => {
  try {
    await closeServer()
  } catch (error) {
    console.error(error)
  }
  app.quit()
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
  } catch (error) {}
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
    app.quit()
  }
})
