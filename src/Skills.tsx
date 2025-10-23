import './Skills.css';
import backgroundImg from './assets/campodefutbol.png';
import Carta from './Carta.tsx';
import { useState } from "react";
import React from './assets/react.svg';
import SelectorCarta from "./Selector.tsx";
import { useNavigate } from 'react-router-dom';

import Python from './assets/python.svg';
import Java from './assets/java.svg';
import Css from './assets/css.svg';
import Html from './assets/html.svg';
import MySQL from './assets/mysql.png';
import Vite from './assets/vite.svg';
import Angular from './assets/angular-icon.svg';
import Flask from './assets/Flask.svg';
import Spring from './assets/spring-3.svg';
import Postman from './assets/Postman.svg';
import Github from './assets/github.svg';
import Visual from './assets/vscode.svg';
import Docker from './assets/docker.svg';
import Nada from './assets/fondo.png';
import BarraProgreso from './BarraProgreso.tsx';

const Skills = () => {
  const navigate = useNavigate();
  const [nombreCarta, setNombreCarta] = useState("LENGUAJES");
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

const herramientas = {
  LENGUAJES: {
    1: { nombre: "Python", imagen: Python, porcentaje: "80%" },
    2: { nombre: "Css", imagen: Css, porcentaje: "60%" },
    3: { nombre: "Java", imagen: Java, porcentaje: "90%" },
    4: { nombre: "", imagen: Nada, porcentaje: "" },
    5: { nombre: "Html", imagen: Html, porcentaje: "75%" },
  },
  FRAMEWORKS: {
    1: { nombre: "React", imagen: React, porcentaje: "60%" },
    2: { nombre: "Spring", imagen: Spring, porcentaje: "50%" },
    3: { nombre: "Angular", imagen: Angular, porcentaje: "60%" },
    4: { nombre: "", imagen: Nada, porcentaje: "" },
    5: { nombre: "Flask", imagen: Flask, porcentaje: "45%" },
  },
  BBDD: {
    1: { nombre: "", imagen: Nada, porcentaje: "" },
    2: { nombre: "MySQL", imagen: MySQL, porcentaje: "75%" },
    3: { nombre: "", imagen: Nada, porcentaje: "" },
    4: { nombre: "", imagen: Nada, porcentaje: "" },
    5: { nombre: "", imagen: Nada, porcentaje: "" },
  },
  TOOLS: {
    1: { nombre: "Postman", imagen: Postman, porcentaje: "85%" },
    2: { nombre: "Vite", imagen: Vite, porcentaje: "60%" },
    3: { nombre: "Visual", imagen: Visual, porcentaje: "95%" },
    4: { nombre: "Github", imagen: Github, porcentaje: "85%" },
    5: { nombre: "Docker", imagen: Docker, porcentaje: "30%" },
  }
};



  return (
    <div className="skills-container" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div className="inicio">
        <button className="btn-volverS" onClick={() => navigate('/')}>
          ⬅ Volver
        </button>

        <div className="selector-skills" >
          <SelectorCarta setNombreCarta={setNombreCarta} />
        </div>

      </div>

    <div className="plantilla">
      <div className="plantilla-item">
        <Carta simbolo={herramientas[nombreCarta][5].imagen}
          onMouseEnter={() => setHoverIndex(5)}
          onMouseLeave={() => setHoverIndex(null)}
        />

      </div>
      <div className="plantilla-item">
        <Carta simbolo={herramientas[nombreCarta][4].imagen} 
          onMouseEnter={() => setHoverIndex(4)}
  onMouseLeave={() => setHoverIndex(null)}/>

      </div>
      <div className="plantilla-item">   
        <Carta simbolo={herramientas[nombreCarta][3].imagen}
          onMouseEnter={() => setHoverIndex(3)}
  onMouseLeave={() => setHoverIndex(null)} />
        <Carta simbolo={herramientas[nombreCarta][2].imagen}
          onMouseEnter={() => setHoverIndex(2)}
  onMouseLeave={() => setHoverIndex(null)} />

      </div>
      <div className="plantilla-item">
        <Carta simbolo={herramientas[nombreCarta][1].imagen} 
          onMouseEnter={() => setHoverIndex(1)}
  onMouseLeave={() => setHoverIndex(null)}/>
      </div>
    </div>

<div className="info-skills">
  {hoverIndex != null && herramientas[nombreCarta]?.[hoverIndex] ? (
    <>
      <img
        src={herramientas[nombreCarta][hoverIndex].imagen}
        alt={herramientas[nombreCarta][hoverIndex].nombre}
        className="imagen-blanco"
      />
      <p>{herramientas[nombreCarta][hoverIndex].nombre}</p>
      <BarraProgreso porcentaje={herramientas[nombreCarta][hoverIndex].porcentaje} />
    </>
  ) : (
    <p className="text-gray-300 text-sm italic text-center">
      Pasa el ratón por encima de una carta o Dale a la Flecha
    </p>
  )}
</div>

</div>

  );
};

export default Skills;