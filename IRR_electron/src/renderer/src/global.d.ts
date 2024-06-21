import { ElectronAPI } from '@electron-toolkit/preload'


interface Accelerometer extends EventTarget {
  new(options?: AccelerometerOptions): Accelerometer;
  readonly x?: number | null;
  readonly y?: number | null;
  readonly z?: number | null;
  readonly timestamp?: number | null;
}

interface AccelerometerOptions {
  frequency?: number;
}


declare global {
  interface Window {
    electron: ElectronAPI;
    Accelerometer: Accelerometer;
    api: {
      invoke(arg0: string): unknown;
      send: (channel: string, data?: any) => void;
      getVideoPath: () => string;
      startServer: () => Promise<void>;
      getAppVersion: () => Promise<string>;
      getAppStatus: () => Promise<boolean>;
      runPswTablet: () => Promise<any>;
      executeWifiTest: (config: string) => Promise<any>; // Añade esta línea
      on(channel: string, func: (...args: any[]) => void): void;
    };
  }
}
