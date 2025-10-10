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


  

const App = () => {
  const navigate = useNavigate()
  const [hora, setHora] = useState(new Date());
  const [showInfo, setShowInfo] = useState(true);
  
  
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
          className={`square ${index === 1 ? 'square sobre_mi' : ''} ${showInfo && sq.id === 2 ? 'square-active' : ''}`}
      onClick={() => {
      
           if(sq.id === 1){
        //Descargar CV en PDF
      }
      
        if(sq.id === 2){
        setShowInfo(!showInfo);
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
      <img src={Github} height={250} width={250}/>
      <div className="texto-informacion">
      <h3>Jaime Sesmero Verbo</h3>
      <p>Soy un estudiante de Ingeniería Informática en la Escuela Superior de Informática de Ciudad Real.
        <br></br><br></br> Me apasiona el desarrollo web y móvil,y siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades.
      </p>
      </div>

      <div className="info-extra">
        <div className="Right now">
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

