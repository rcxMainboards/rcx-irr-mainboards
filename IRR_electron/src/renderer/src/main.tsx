import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import './assets/base.css'
import App from './App'
import { HashRouter, Route, Routes } from 'react-router-dom'
import TestSelector from './components/TestSelector'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <NextUIProvider>
      <main className="font-newBase">
        <HashRouter>
          <Routes>
            <Route path="/" Component={App} />
            <Route path="/TestMenu" Component={TestSelector} />
          </Routes>
        </HashRouter>
      </main>
    </NextUIProvider>
  </QueryClientProvider>
)
