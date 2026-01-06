import React, { useState } from 'react';
import './NavBar.css';
import { useNavigate, Link } from 'react-router-dom'; // Importamos Link

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Función para navegar y cerrar el menú móvil al mismo tiempo
  const handleNavigation = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="main-navbar">
      <div className="nav-logo" onClick={() => navigate('/')} style={{cursor: 'pointer'}}>
        Mi Portfolio
      </div>

      {/* Usamos Link en lugar de <a> para que React Router tome el control total */}
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsOpen(false)}>Inicio</Link>
        </li>
        <li>
          <Link to="/proyectos" onClick={() => setIsOpen(false)}>Proyectos</Link>
        </li>
        <li>
          <Link to="/skills" onClick={() => setIsOpen(false)}>Habilidades</Link>
        </li>
        <li>
          <Link to="/trofeos" onClick={() => setIsOpen(false)}>Logros</Link>
        </li>
      </ul>
      
      {isOpen && <div className="nav-overlay" onClick={() => setIsOpen(false)}></div>}
    </nav>
  );
};

export default Navbar;