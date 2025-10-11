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
import MySQL from './assets/mysql.svg';




const Skills = () => {
  const navigate = useNavigate();
  const [nombreCarta, setNombreCarta] = useState("LENGUAJES");

const herramientas = {
  LENGUAJES: {
    1: Python,
    2: "",
    3: Java,
    4: "",
    5: "",
    6: "",
    7: Css,
    8: "",
    9: Html,
    10: "",
    11: ""
  },
   FRAMEWORKS: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: ""
  },
  BBDD: {
    1: "",
    2: MySQL,
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: ""
  },
  TOOLS: {
    1: "",
    2: "",
    3: "",
    4: "",
    5: "",
    6: "",
    7: "",
    8: "",
    9: "",
    10: "",
    11: ""
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
        <Carta simbolo={herramientas[nombreCarta][3]} />
        <Carta simbolo={herramientas[nombreCarta][7]} />
        <Carta simbolo={herramientas[nombreCarta][1]} />
      </div>
      <div className="plantilla-item">
        <Carta simbolo={herramientas[nombreCarta][5]} />
        <Carta simbolo={herramientas[nombreCarta][2]} />
        <Carta simbolo={herramientas[nombreCarta][9]} />
      </div>
      <div className="plantilla-item">   
        <Carta simbolo={herramientas[nombreCarta][8]} />
        <Carta simbolo={herramientas[nombreCarta][4]} />
        <Carta simbolo={herramientas[nombreCarta][11]} />
        <Carta simbolo={herramientas[nombreCarta][6]} />
      </div>
      <div className="plantilla-item">
        <Carta simbolo={herramientas[nombreCarta][10]} />
      </div>
    </div>

      <div className="info-skills">
        <p>{nombreCarta}</p>
      </div>
    </div>
  );
};

export default Skills;