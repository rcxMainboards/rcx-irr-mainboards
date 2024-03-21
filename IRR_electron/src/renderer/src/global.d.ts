import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      send: (channel: string, data?: any) => void
      getVideoPath: () => string
      startServer: () => Promise<void>
      getAppVersion: () => Promise<string>
      on(channel: string, func: (...args: any[]) => void): void
    }
  }
}
