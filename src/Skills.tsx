import './Skills.css';
import backgroundImg from './assets/campodefutbol.png';
import Carta from './Carta.tsx';
import { useState } from "react";
import React from './assets/react.svg';
import SelectorCarta from "./Selector.tsx";
import { useNavigate } from 'react-router-dom';
import Snowfall from 'react-snowfall'

import Python from './assets/python.svg';
import Java from './assets/java.svg';
import Css from './assets/css.svg';
import Html from './assets/html.svg';
import MySQL from './assets/mysql.png';
import Angular from './assets/angular-icon.svg';
import Flask from './assets/Flask.svg';
import Spring from './assets/spring-3.svg';
import Postman from './assets/Postman.svg';
import Github from './assets/githubblack.png';
import Socket from './assets/Socket-io.png';
import Docker from './assets/docker.svg';
import Javascript from './assets/Javascript.png'
import Typescript from './assets/Typescript.png'
import Nada from './assets/fondo.png'
import Nodejs from './assets/nodejs.svg'
import firestore from './assets/firestore.svg'
import linux from './assets/linux.png'
import wireshark from './assets/wireshark.png'

const Skills = () => {
  const navigate = useNavigate();
  const [nombreCarta, setNombreCarta] = useState("LENGUAJES");


const herramientas = {
  LENGUAJES: {
    1: { nombre: "Python", imagen: Python},
    2: { nombre: "Css", imagen: Css},
    3: { nombre: "Java", imagen: Java},
    4: { nombre: "Javascript", imagen: Javascript},
    5: { nombre: "Html", imagen: Html},
    6: { nombre: "Typescript", imagen: Typescript},
  },
  FRAMEWORKS: {
    1: { nombre: "React", imagen: React},
    2: { nombre: "Spring", imagen: Spring},
    3: { nombre: "Angular", imagen: Angular},
    4: { nombre: "Node.js", imagen: Nodejs},
    5: { nombre: "Flask", imagen: Flask},
    6: { nombre: "React Native", imagen: React},
  },
  BBDD: {
    1: { nombre: "", imagen: Nada},
    2: { nombre: "MySQL", imagen: MySQL},
    3: { nombre: "Firestore", imagen: firestore},
    4: { nombre: "", imagen: Nada},
    5: { nombre: "", imagen: Nada},
    6: { nombre: "", imagen: Nada},
  },
  TOOLS: {
    1: { nombre: "Postman", imagen: Postman},
    2: { nombre: "Wireshark", imagen: wireshark},
    3: { nombre: "Socket.io", imagen: Socket},
    4: { nombre: "Github", imagen: Github},
    5: { nombre: "Docker", imagen: Docker},
    6: { nombre: "Entornos linux", imagen: linux},
  }
};



  return (

    <><Snowfall color='white' /><div className="skills-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="inicio">
        <button className="btn-volverS" onClick={() => navigate('/')}>
          ⬅ Volver
        </button>

        <div className="selector-skills">
          <SelectorCarta setNombreCarta={setNombreCarta} />
        </div>

      </div>

      <div className="plantilla">
        <div className="plantilla-item">
          <Carta simbolo={herramientas[nombreCarta][5].imagen}
            nombre={herramientas[nombreCarta][5].nombre} />

          <Carta simbolo={herramientas[nombreCarta][6].imagen}
            nombre={herramientas[nombreCarta][6].nombre} />

        </div>
        <div className="plantilla-item">
          <Carta simbolo={herramientas[nombreCarta][4].imagen}
            nombre={herramientas[nombreCarta][4].nombre} />

        </div>
        <div className="plantilla-item">
          <Carta simbolo={herramientas[nombreCarta][3].imagen}
            nombre={herramientas[nombreCarta][3].nombre} />
          <Carta simbolo={herramientas[nombreCarta][2].imagen}
            nombre={herramientas[nombreCarta][2].nombre} />

        </div>
        <div className="plantilla-item">
          <Carta simbolo={herramientas[nombreCarta][1].imagen}
            nombre={herramientas[nombreCarta][1].nombre} />
        </div>
      </div>



    </div></>
  
  );
};

export default Skills;