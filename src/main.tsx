import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Skills from './Skills.tsx'
import Proyectos from './Proyectos.tsx'
import Trofeos from './Trofeos.tsx'
import Wifi from './LostConnection.tsx'
// 1. Importa tu componente Navbar
import Navbar from './NavBar.tsx'

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <BrowserRouter>
      {/* 2. Coloca la Navbar aquí para que sea visible en todas las rutas */}
      <Navbar />
      
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/trofeos" element={<Trofeos />} />
        <Route path="/wifi" element={<Wifi />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)