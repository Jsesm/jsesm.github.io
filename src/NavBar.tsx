import React, { useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
 const navigate = useNavigate()
  return (
    <nav className="main-navbar">
      <div className="nav-logo">Mi Portfolio</div>

      {/* Icono de hamburguesa (solo visible en móvil) */}
      <div className={`nav-hamburger ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Enlaces: Se añade la clase 'active' cuando isOpen es true */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="/" onClick={() => { navigate('/') }}>Inicio</a></li>
        <li><a href="/proyectos" onClick={() => { navigate('/proyectos') }}>Proyectos</a></li>
        <li><a href="/skills" onClick={() => { navigate('/skills') }}>Habilidades</a></li>
        <li><a href="/trofeos" onClick={() => { navigate('/trofeos') }}>Logros</a></li>
      </ul>
      
      {/* Fondo oscuro al abrir el menú en móvil */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;