import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Skills from './Skills.tsx'
import Proyectos from './Proyectos.tsx'
import Trofeos from './Trofeos.tsx'

createRoot(document.getElementById('root')!).render(
 <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/trofeos" element={<Trofeos />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
