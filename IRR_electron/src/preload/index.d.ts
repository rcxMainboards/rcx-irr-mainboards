import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      send: (channel: string, data?: any) => void
      getVideoPath: () => string
      startServer: () => Promise<void>
      getAppVersion: () => Promise<string>
      onUpdateAvailable: (callback: () => void) => void
      onUpdateDownloaded: (callback: () => void) => void
      onUpdateNotAvailable: (callback: () => void) => void
    }
  }
}
