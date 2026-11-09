import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Montserrat (SIL Open Font License), self-hosted via Fontsource: no third-party font requests.
import '@fontsource/montserrat/latin-400.css'
import '@fontsource/montserrat/latin-500.css'
import '@fontsource/montserrat/latin-600.css'
import '@fontsource/montserrat/latin-700.css'
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
