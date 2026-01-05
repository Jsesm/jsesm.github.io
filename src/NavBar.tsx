import React, { useState } from 'react';
import './NavBar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        <li><a href="/" onClick={() => setIsOpen(false)}>Inicio</a></li>
        <li><a href="/proyectos" onClick={() => setIsOpen(false)}>Proyectos</a></li>
        <li><a href="/skills" onClick={() => setIsOpen(false)}>Habilidades</a></li>
        <li><a href="/trofeos" onClick={() => setIsOpen(false)}>Logros</a></li>
      </ul>
      
      {/* Fondo oscuro al abrir el menú en móvil */}
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;