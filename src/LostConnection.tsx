import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LostConnection.css';

const REDIRECT_DELAY_SECONDS = 5;

const LostConnection: React.FC = () => {
  const [countdown, setCountdown] = useState(REDIRECT_DELAY_SECONDS);
  const navigate = useNavigate(); 

  useEffect(() => {
    if (countdown > 0) {
      const timerId = setInterval(() => {
        setCountdown((prevCount) => prevCount - 1);
      }, 1000);
      return () => clearInterval(timerId); 
    } else {
      navigate('/'); 
    }
  }, [countdown, navigate]);

  return (
    <div className="lost-connection-overlay">
      <div className="glass-card">
        <div className="status-badge">CONEXIÓN FALLIDA</div>
        
        <div className="icon-container">
            <div className="pulse-ring"></div>
            <span className="main-icon">📡</span>
        </div>

        <h1 className="error-title">¡UPS! SIN SEÑAL</h1>
        
        <p className="error-message">
          Parece que los paquetes de datos se han perdido en el camino. 
          Revisa tu router y vuelve pronto.
        </p>
        
        <div className="countdown-section">
          <div className="progress-bar-container">
            <div 
              className="progress-fill" 
              style={{ width: `${(countdown / REDIRECT_DELAY_SECONDS) * 100}%` }}
            ></div>
          </div>
          <p className="redirect-text">
            Redirigiendo al puerto base en <strong>{countdown}s</strong>
          </p>
        </div>
        
        <button 
          className="cyber-button" 
          onClick={() => navigate('/')}
          disabled={countdown === 0}
        >
          FORZAR REGRESO
        </button>
      </div>
    </div>
  );
};

export default LostConnection;