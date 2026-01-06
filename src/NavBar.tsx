import React, { useState } from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Función para navegar y cerrar el menú móvil automáticamente
  const goTo = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <nav className="main-navbar">
      <div className="nav-logo" onClick={() => goTo('/')} style={{ cursor: 'pointer' }}>
        Mi Portfolio
      </div>



      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li>
          <div className="nav-item-div" onClick={() => navigate('/')}>Inicio</div>
        </li>
        <li>
          <div className="nav-item-div" onClick={() => navigate('/proyectos')}>Proyectos</div>
        </li>
        <li>
          <div className="nav-item-div" onClick={() => navigate('/skills')}>Habilidades</div>
        </li>
        <li>
          <div className="nav-item-div" onClick={() => navigate('/trofeos')}>Logros</div>
        </li>
      </ul>
      
     
    </nav>
  );
};

export default Navbar;