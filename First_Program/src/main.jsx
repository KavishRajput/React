import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Components/Header.css'
import Header from './Components/Header.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
  </StrictMode>,
)

