// global.d.ts
declare global {
  interface Window {
    api: {
      send: (channel: string, data?: any) => void
      // define other methods or properties here as needed
    }
  }
}

// This will allow you to import this file as a module
export {}
