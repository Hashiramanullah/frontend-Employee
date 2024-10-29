import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './components/context/ThemeContext.jsx'
import AuthProvider from './components/context/AuthProvider.jsx'
import { useTheme } from './components/context/ThemeContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <ThemeProvider>
      <AuthProvider>
     <App/>
      </AuthProvider>
     </ThemeProvider>
    </StrictMode>,
)
