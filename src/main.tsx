import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import { AppGift } from './AppGift.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppGift />
  </StrictMode>,
)
