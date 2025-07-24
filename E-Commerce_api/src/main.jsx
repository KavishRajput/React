import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Layout } from './Pages/layout'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Layout />
  </StrictMode>,
)
