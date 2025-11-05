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
import Fifa from './assets/fifa.jpg';
import Fortnite from './assets/fortnite.jpg';
import CV from './assets/cvJSV.png';
import SobreMi from './assets/sobremi.png';
import ESI from './assets/ESI.jpg';
import Balon from './assets/balon.jpg';
import Ordenador from './assets/ordenador.jpg';
import Jaime from './assets/Jaime.png';

  

const App = () => {
  const navigate = useNavigate()
  const [hora, setHora] = useState(new Date());
  const [showInfo] = useState(true);
  
  
  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000); // actualiza cada segundo

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar
  }, []);


  const squares = [
    { id: 1, name: ' ', img:CV },
    { id: 2, name: 'SOBRE MÍ', img:SobreMi },
    { id: 3, name: 'HABILIDADES', img:Fifa }, 
    { id: 4, name: 'PROYECTOS', img:Fortnite },
    
  ];

  return (
    <div className="app-container">
      {/* Primera fila: imágenes */}

      <div className="header">
        <div className='contacto'>

          <a href="https://github.com/Jsesm" target="_blank" rel="noopener noreferrer">
            <img src={Github} className="rrss" alt="GitHub" />
          </a>

 <a href="https://www.linkedin.com/in/jaime-sesmero-verbo-17247a38b/" target="_blank" rel="noopener noreferrer">
          <img src={Linkedin} className="rrss" />
          </a>


<a href="mailto:j.sesmero.v@gmail.com?subject=Hola&body=Me%20interesa%20contactarte">
  <img src={Email} className="rrss" alt="Email" />
</a>
          </div> 

          <div className='perfil'>
            <img src={sampleImage} height={30} width={30} /> {"    "}
            Jaime Sesmero Verbo
          </div>       
         
         <div className='logros' onClick={() => {navigate('/trofeos')}}>
            <img src={Trofeo} height={30} width={30}  />{"    "}
            <img src={Star}  height={18} width={18} />{"    "}
            5
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
          className={`square ${index === 1 ? 'square sobre_mi' : ''} ${showInfo && sq.id === 2 ? 'square-active' : ''}`}
      onClick={() => {
      
           if(sq.id === 1){
        /*const link = document.createElement("a");
        link.href = "../cv/CV.pdf";
        link.download = "CV_JaimeSesmero.pdf";
        link.click();*/
      }
      


           if(sq.id === 3){
        console.log("Habilidades");
            navigate('/skills')
      }

           if(sq.id === 4){
        navigate('/proyectos')
      }
    }} // Solo el 2º cuadrado
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
    {showInfo && (
    <div className="informacion"> 
      <img src={Jaime} className="foto-Jaime"/>
      <div className="texto-informacion">
      <h3>Jaime Sesmero Verbo</h3>
      <p> Soy un apasionado del desarrollo web tanto frontend como
en backend. Me encanta aprender y asumir nuevos retos
que me ayuden a mejorar mis habilidades. En mi tiempo
libre me gusta explorar nuevas tecnologías para mejorar y
estar al día de las novedades.
      </p>
      </div>

      <div className="info-extra">
        <div className="Rightnow">
          <h1>Ahora mismo</h1>
          <div className="logros">
            <img src={ESI} height={40} width={50} style={{ marginLeft: '20px' }}/>
            <p style={{ marginLeft: '20px', marginTop: '20px' }}>4º Curso de Ingeniería Informática</p>
          </div>
          
          </div>
          <div className="Gustos">
          <h1 style={{ marginTop: '20px' }}>Gustos</h1>
          <div className="logros">
            <img src={Balon} height={50} width={50} style={{ marginLeft: '20px' }}/>
            <img src={Ordenador} height={50} width={50} style={{ marginLeft: '20px' }}/>
          </div>
          </div>
      </div>
      </div>
    )}
      
    </div>
    
  );
};

export default App;

