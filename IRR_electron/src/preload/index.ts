import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'
import { join } from 'path'

const resourcesPath = join(__dirname, '../../resources')

const videoPath = join(resourcesPath, 'MediaAudioMusic.mp4')

// Custom APIs for renderer
const api = {
  send: (channel: string, data: any) => {
    ipcRenderer.send(channel, data)
  },
  on: (channel: string, func: any) => {
    ipcRenderer.on(channel, func)
  },
  getVideoPath: () => videoPath,
  startServer: () => ipcRenderer.invoke('start-server'),
  getAppVersion: () => ipcRenderer.invoke('get-app-version'),
  getAppStatus: () => ipcRenderer.invoke('get-app-status'),
  runPswTablet: () => ipcRenderer.invoke('runTabletModEvent'),
  // executeWifiTest: (config:string) => ipcRenderer.invoke("win:wifi", config)
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
}
