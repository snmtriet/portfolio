import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { ThemeProvider } from './context/theme.context.tsx'
import './index.css'
import { Analytics } from '@vercel/analytics/react'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <div className='bg-light text-dark dark:bg-dark dark:text-light-1'>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </div>
    </ThemeProvider>
    <Analytics />
  </StrictMode>,
)
