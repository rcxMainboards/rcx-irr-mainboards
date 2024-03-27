import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      invoke(arg0: string): unknown
      send: (channel: string, data?: any) => void
      getVideoPath: () => string
      startServer: () => Promise<void>
      getAppVersion: () => Promise<string>
      getAppStatus: () => Promise<boolean>
      on(channel: string, func: (...args: any[]) => void): void
    }
  }
}
