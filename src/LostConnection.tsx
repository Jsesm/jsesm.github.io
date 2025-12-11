import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Necesitas instalar y usar react-router-dom
import './LostConnection.css';

const REDIRECT_DELAY_SECONDS = 5;

const LostConnection: React.FC = () => {
  const [countdown, setCountdown] = useState(REDIRECT_DELAY_SECONDS);
  // Hook de navegación
  const navigate = useNavigate(); 

  useEffect(() => {
    // 1. Configurar el temporizador de cuenta regresiva
    if (countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000); // Decrementa cada segundo

      // Función de limpieza: detiene el temporizador si el componente se desmonta
      return () => clearInterval(timerId); 
    } 
    
    // 2. Redirigir cuando el contador llega a cero
    else if (countdown === 0) {
      // Redirige a la página principal
      navigate('/'); 
    }
  }, [countdown, navigate]); // Dependencias: se vuelve a ejecutar cuando countdown cambia

  return (
    <div className="lost-connection-container">
      <div className="error-box">
        
        <div className="icon-alert">
            ❌
        </div>

        <h1 className="error-title">¡UPS! CONEXIÓN PERDIDA</h1>
        <p className="error-message">
          No podemos establecer la conexión con el servidor. 
          Por favor, revisa la configuración de tu red y vuelve a intentarlo.
        </p>
        
        <div className="redirect-info">
          Serás redirigido a la página de inicio en 
          <span className="countdown-number">{countdown}</span> segundos...
        </div>
        
        
        <button 
          className="home-button" 
          onClick={() => navigate('/')}
          disabled={countdown === 0} // Deshabilitar si ya se está redirigiendo
        >
          Ir a Inicio Ahora
        </button>
      </div>
    </div>
  );
};

export default LostConnection;