import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {ClerkProvider} from '@clerk/clerk-react'

const clerk_publisable_key=import.meta.env.VITE_CLERK_KEY;

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ClerkProvider publishableKey={clerk_publisable_key} afterSignOutUrl='/'>
    <App />
    </ClerkProvider>
    
  </StrictMode>,
)
