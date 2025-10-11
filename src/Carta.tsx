import React from 'react';
import './Carta.css';
import CartaFifa from './assets/cartafifa.png';
import CartaPlata from './assets/plata.png'; // 👈 tu imagen de carta plata

const Carta = ({ simbolo }) => {
  // Si simbolo no existe o está vacío, usa la carta plata
  const fondo = simbolo ? CartaFifa : CartaPlata;

  return (
    <div className="carta-container">
      <img src={fondo} alt="Carta base" className="carta-fondo" />
      {simbolo && <img src={simbolo} alt="Símbolo" className="carta-simbolo" />}
    </div>
  );
};

export default Carta;