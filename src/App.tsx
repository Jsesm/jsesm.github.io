//import { useState } from 'react';
import './App.css';
import sampleImage from './assets/react.svg'; // Asegúrate de tener esta imagen en src/assets
import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import Github from './assets/github.svg'; 
import Linkedin from './assets/linkedin.svg';
import Email from './assets/email.svg';
import Trofeo from './assets/trophy.svg';
import Star from './assets/star.svg';
import HardSkills from './assets/hardskills.png';
import Proyectos from './assets/proyectos.png';
import CV from './assets/cvJSV.png';
import SobreMi from './assets/sobremi.png';
import ESI from './assets/ESI.jpg';
import Jaime from './assets/Jaime.png';
import Terminal from './Terminal';
import Navbar from './NavBar';

  

const App = () => {
  const navigate = useNavigate()
  const [hora, setHora] = useState(new Date());
  const [showInfo, setInfo] = useState(true);
  
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000); // actualiza cada segundo

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar
  }, []);


  const squares = [
    { id: 1, name: 'CV', img:CV },
    { id: 2, name: 'SOBRE MÍ', img:SobreMi },
    { id: 3, name: 'HABILIDADES', img:HardSkills }, 
    { id: 4, name: 'PROYECTOS', img:Proyectos },
    
  ];

return (
  <>
 

    <div className="app-container">
      {/* 2. El Header original (Social, Perfil, Logros, Hora) */}
      <div className="header">
        <div className='contacto'>
          <a href="https://github.com/Jsesm" target="_blank" rel="noopener noreferrer">
            <img src={Github} className="rrss" alt="GitHub" />
          </a>
          <a href="https://www.linkedin.com/in/jaime-sesmero-verbo-17247a38b/" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} className="rrss" alt="LinkedIn" />
          </a>
          <a href="mailto:j.sesmero.v@gmail.com?subject=Hola&body=Me%20interesa%20contactarte">
            <img src={Email} className="rrss" alt="Email" />
          </a>
        </div>

        <div className='perfil'>
          <img src={sampleImage} height={30} width={30} alt="Perfil" />
          {"    "} Jaime Sesmero Verbo
        </div>

        <div className='logros' onClick={() => { navigate('/trofeos') }}>
          <img src={Trofeo} height={30} width={30} alt="Trofeo" />
          {"    "}
          <img src={Star} height={18} width={18} alt="Estrella" />
          {"    "} 5
        </div>

        <div className='hora'>
          {hora.toLocaleTimeString("es-ES", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </div>
      </div>

      {/* 3. Bloque de cuadrados (Menú de Iconos Grandes) */}
      <div className="squares-block">
        {squares.map((sq, index) => (
          <div
            key={sq.id}
            className={`square ${index === 1 ? 'square sobre_mi' : ''} ${showInfo && sq.id === 2 ? 'square-active' : ''}`}
            onClick={() => {
              if (sq.id === 1) {
                const filePath = "/CV/CV_JaimeSesmeroVerbo.pdf";
                const link = document.createElement("a");
                link.href = filePath;
                link.download = "CV_JaimeSesmero.pdf";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }
              if (sq.id === 2) {
                setInfo(prev => !prev);
              }
              if (sq.id === 3) {
                navigate('/skills');
              }
              if (sq.id === 4) {
                navigate('/proyectos');
              }
            }}
          >
            <img src={sq.img} alt={sq.name} className="square-img" />
            <span className="tooltip">{sq.name}</span>
          </div>
        ))}
      </div>

      {/* 4. Panel de Información (Ocupa el resto de la pantalla) */}
      <div className="informacion">
        {showInfo ? (
          <>
            <img src={Jaime} className="foto-Jaime" alt="Foto de Jaime Sesmero" />
            <div className="texto-informacion">
              <h3>Jaime Sesmero Verbo</h3>
              <p>
                Soy un estudiante de 4º curso en Ingeniería Informática. Me gusta el
                desarrollo y la ciberseguridad. Soy una persona trabajadora y persistente
                ante los retos. Me encanta utilizar nuevas tecnologías y aprender
                continuamente.
              </p>
            </div>
            <div className="info-extra">
              <div className="Rightnow">
                <h1>Ahora mismo</h1>
                <div className="logros">
                  <img src={ESI} height={40} width={50} alt="Logo ESI" />
                  <p>4º Curso de Ingeniería Informática</p>
                </div>
              </div>
              <div className="Gustos">
                <h1>Gustos</h1>
                <ul>
                  <li>Deportes</li>
                  <li>Ciberseguridad</li>
                  <li>Redes</li>
                </ul>
              </div>
            </div>
          </>
        ) : (
          <Terminal />
        )}
      </div>
    </div>
  </>
);

};

export default App;

