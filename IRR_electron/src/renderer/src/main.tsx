import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './assets/base.css'
import App from './App'
import TestSelector from './components/TestSelector'
import { Router, Route } from 'electron-router-dom'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        <main className="font-newBase">
          <Router
            main={
              <>
                <Route path="/" element={<App />} />
                <Route path="/TestMenu" element={<TestSelector />} />
              </>
            }
          />
        </main>
      </NextUIProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
