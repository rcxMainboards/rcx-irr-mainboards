import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      send: (channel: string, data?: any) => void
      getVideoPath: () => string
      startServer: () => Promise<void>
      getAppVersion: () => Promise<string>
      getAppStatus: () => Promise<boolean>
      onUpdateAvailable: (callback: () => void) => void
      onUpdateDownloaded: (callback: () => void) => void
      onUpdateNotAvailable: (callback: () => void) => void
      runPswTablet: (callback: () => Promise) => Promise
      executeWifiTest: () => Promise
    }
  }
}
