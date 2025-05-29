import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './styles/theme.css'
import App from './App.tsx'
import { TopBarProvider } from './context/TopBarContext' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TopBarProvider>
        <App />
      </TopBarProvider>
    </BrowserRouter>
  </StrictMode>
)