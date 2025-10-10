//import { useState } from 'react';
import './App.css';
import sampleImage from './assets/react.svg'; // Asegúrate de tener esta imagen en src/assets
import { useState, useEffect } from "react";

import Github from './assets/github.svg'; 
import Linkedin from './assets/linkedin.svg';
import Email from './assets/email.svg';
import Trofeo from './assets/trophy.svg';
import Star from './assets/star.svg';
import Fifa from './assets/fifa.jpg';
import Fortnite from './assets/fortnite.jpg';
import CV from './assets/cvJSV.png';
import SobreMi from './assets/sobremi.png';

  

const App = () => {
  
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000); // actualiza cada segundo

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar
  }, []);


  const squares = [
    { id: 1, name: ' ', img:CV },
    { id: 2, name: 'Sobre mí', img:SobreMi },
    { id: 3, name: 'Habilidades', img:Fifa }, 
    { id: 4, name: 'Proyectos', img:Fortnite },
    
  ];

  return (
    <div className="app-container">
      {/* Primera fila: imágenes */}

      <div className="header">
        <div className='contacto'>
          <img src={Github} className="rrss" />
          <img src={Linkedin} className="rrss" />
          <img src={Email} className="rrss" />
          </div> 

          <div className='perfil'>
            <img src={sampleImage} height={30} width={30} /> {"    "}
            Jaime Sesmero Verbo
          </div>       
         
         <div className='logros'>
            <img src={Trofeo} height={30} width={30}  />{"    "}
            <img src={Star}  height={18} width={18} />{"    "}
            2
        </div>
          
          <div className='hora'>
                    {hora.toLocaleTimeString("es-ES", {
                hour: "2-digit",
                 minute: "2-digit",
                })}
          </div>
  
          
      </div>
      

      {/* Bloque de cuadrados en segunda fila */}
    <div className="squares-block" style={{ gridColumnStart: 2, gridRowStart: 2 }}>
      {squares.map((sq, index) => (
        <div
          key={sq.id}
          className={`square ${index === 1 ? 'square sobre_mi' : ''}`} // Solo el 2º cuadrado
        >
            <img
          src={sq.img}
          alt={sq.name}
          className="square-img"
        />
        
          <span className="tooltip">{sq.name}</span>
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;
