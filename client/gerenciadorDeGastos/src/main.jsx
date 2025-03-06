import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import Login from './components/Login.jsx'
import Register from './components/Register.jsx'
import Transacao from './components/Transacao.jsx'
import App from './components/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
 
  </StrictMode>,
)
