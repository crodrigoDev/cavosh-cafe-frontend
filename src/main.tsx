import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { injectGlobal } from '@twind/core'
import install from '@twind/with-react'
import config from '../twind.config'

import './index.css'
import App from './App.tsx'

install(config, import.meta.env.PROD)

injectGlobal`
  /* ...todo el bloque de estilos globales que ya tenías... */
`

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)