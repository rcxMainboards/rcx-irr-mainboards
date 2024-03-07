import { resolve } from 'path'
import { defineConfig, loadEnv, externalizeDepsPlugin } from 'electron-vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode)

  return {
    main: {
      plugins: [externalizeDepsPlugin()],
      define: {
        'process.env.RENDERER_VITE_API_INTERNAL': JSON.stringify(env.RENDERER_VITE_API_INTERNAL),
        'process.env.RENDERER_VITE_IRR_MB_API': JSON.stringify(env.RENDERER_VITE_IRR_MB_API)
      }
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
      define: {
        'process.env.RENDERER_VITE_API_INTERNAL': JSON.stringify(env.RENDERER_VITE_API_INTERNAL),
        'process.env.RENDERER_VITE_IRR_MB_API': JSON.stringify(env.RENDERER_VITE_IRR_MB_API)
      }
    },
    renderer: {
      resolve: {
        alias: {
          '@renderer': resolve('src/renderer/src')
        }
      },
      plugins: [react()],
      define: {
        'process.env.RENDERER_VITE_API_INTERNAL': JSON.stringify(env.RENDERER_VITE_API_INTERNAL),
        'process.env.RENDERER_VITE_IRR_MB_API': JSON.stringify(env.RENDERER_VITE_IRR_MB_API)
      }
    }
  }
})
