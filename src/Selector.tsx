import React, { useState } from "react";
import "./Selector.css"; 

const nombres = ["LENGUAJES", "FRAMEWORKS", "BBDD", "TOOLS"]; 


const SelectorCarta = ({ setNombreCarta })  => {
  const [index, setIndex] = useState(0);

  const handleLeft = () => {
    const newIndex = index === 0 ? nombres.length - 1 : index - 1;
    setIndex(newIndex);
    setNombreCarta(nombres[newIndex]);
  };

  const handleRight = () => {
        const newIndex = index === nombres.length - 1 ? 0 : index + 1;
    setIndex(newIndex);
    setNombreCarta(nombres[newIndex]); 
  };

  return (
    <div className="selector-carta">
      {/* Carrusel */}
      <div className="selector-nav">
        <button className="flecha" onClick={handleLeft}>
          ⬅
        </button>
        <span className="nombre">{nombres[index]}</span>
        <button className="flecha" onClick={handleRight}>
          ➡
        </button>
      </div>

  
    </div>
  );
};

export default SelectorCarta;
