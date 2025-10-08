import React, { useState } from 'react';
import './App.css';
import sampleImage from './assets/react.svg'; // Asegúrate de tener esta imagen en src/assets
import AboutMe from './AboutMe.tsx';

const App = () => {
  const [hovered, setHovered] = useState(false); // Estado para el hover en el cuadrado 1

  const squares = [
    { id: 1, name: 'Proyecto 1' },
    { id: 2, name: 'Proyecto 2' },
    { id: 3, name: 'Proyecto 3' },
    { id: 4, name: 'Proyecto 4' },
  ];

  return (
    <div className="app-container">
      {/* Primera fila: imágenes */}
      <img src={sampleImage} alt="Imagen 1" className="grid-image" style={{ gridColumnStart: 1, gridRowStart: 1 }} />
      <img src={sampleImage} alt="Imagen 2" className="grid-image" style={{ gridColumnStart: 2, gridRowStart: 1 }} />
      <img src={sampleImage} alt="Imagen 3" className="grid-image" style={{ gridColumnStart: 3, gridRowStart: 1 }} />
      <img src={sampleImage} alt="Imagen 4" className="grid-image" style={{ gridColumnStart: 4, gridRowStart: 1 }} />
      <img src={sampleImage} alt="Imagen 5" className="grid-image" style={{ gridColumnStart: 5, gridRowStart: 1 }} />

      {/* Bloque de cuadrados en segunda fila */}
      <div className="squares-block" style={{ gridColumnStart: 2, gridRowStart: 2 }}>
        {squares.map((sq) => (
          <div
            key={sq.id}
            className="square"
            onMouseEnter={sq.id === 1 ? () => setHovered(true) : undefined} // hover solo en cuadrado 1
            onMouseLeave={sq.id === 1 ? () => setHovered(false) : undefined}
          >
            {sq.id}
            <span className="tooltip">{sq.name}</span>
          </div>
        ))}
      </div>

      {/* AboutMe solo aparece al hacer hover en el cuadrado 1 */}
      {hovered && (
        <div className="about-me-hover" style={{ gridColumnStart: 0, gridColumnEnd: 5, gridRowStart: 2, gridRowEnd: 3 }}>
          <AboutMe />
        </div>
      )}
    </div>
  );
};

export default App;
