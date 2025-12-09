import React from 'react';
import './Carta.css';
import CartaFifa from './assets/cartafifa.png';

const Carta = ({ simbolo, nombre}) => {

  const fondo = CartaFifa;

  return (
    <div className="carta-container">
      <img src={fondo} alt="Carta base" className="carta-fondo" />
      {simbolo && <img src={simbolo} alt="Símbolo" className="carta-simbolo" />}
      
      {/* Nuevo elemento para mostrar el nombre */}
      <h2 className="carta-nombre">{nombre}</h2>
    </div>
  );
};

export default Carta;