import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NoProxy from './NoProxy.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NoProxy />
  </StrictMode>,
)
