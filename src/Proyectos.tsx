import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import './Proyectos.css';

import DyG from './assets/dyg.png';
import GSI from './assets/GSI.png';
import Working from './assets/Working.png';
import Oshawot from './assets/oshawott.png';
import mIPOsibleFest from './assets/festival.png';

function Proyectos() {
  const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setimg] = useState("");
    const [url, seturl] = useState("");
  const squares = [
    { id: 1, img: GSI, nombre: 'Análisis de vulnerabilidades', tipo: 'Seguridad' , descripcion: 'Aplicación que busca minimizar los errores de las personas de cara  a la Ingeniería Social', url: 'https://github.com/Jsesm/gsi' },
    { id: 2, img: Oshawot, nombre: 'Juego Pokemon', tipo: 'C#' , descripcion: 'Creación del pokemon Oshawott e integración en una aplicación C#', url: 'https://github.com/9Fernando/IPOkemonAPP'},
    { id: 3, img: mIPOsibleFest, nombre: 'Aplicación Festivales', tipo: 'C#' , descripcion: 'Creación de una aplicación en la que se podían crear festivales con sus datos', url: 'https://github.com/Jsesm/mIPOsibleFEST'},
    { id: 4, img: DyG, nombre: 'Red instituto', tipo: 'Redes' , descripcion: 'Simulación en Packet Tracer de una red para un instituto de Miguelturra', url: 'https://github.com/Jsesm/DyG'},
    { id: 5, img: Working, nombre: 'Gramola', tipo: 'Web' , descripcion: 'Apliación para poner música en un dispositivo a modo de gramola en los bares', url: ''},
    { id: 6, img: Working, nombre: 'Web Asociación Iker', tipo: '' , descripcion: 'Creación de la web de la Asociación Iker', url: ''},
    { id: 7, img: Working, nombre: 'Juego de Cartas', tipo: 'React Native' , descripcion: 'Juego de Poker y Brisca contra la máquina', url: ''},
    

  ];

  return (
    <div className="proyectos-container">
      

      <div className='opciones'>
      <button className="btn-volver" onClick={() => navigate('/')}>
        ⬅ Volver
      </button>

      
      <div className="cajas-opciones">
        {squares.map((sq) => (
          <div key={sq.id} className="cajas"
          
          onClick={() => {
                setDescripcion(sq.descripcion)
                setimg(sq.img)
                setTipo(sq.tipo)
                setNombre(sq.nombre)
                seturl(sq.url)
          }}
          
          
          >
            <img src={sq.img} className="cajas-img" alt={`Proyecto ${sq.id}`} />
          </div>
        ))}
      </div>
    </div>

<div className='proyectos'>
  {img && (
  <img src={img} alt="Proyecto" className="proyectos-img" />
)}

  <div className='info-proyectos'>
    <h2>{nombre}</h2>
    <h2 className={`tipo ${tipo.slice(0, -1)}`}>{tipo}</h2>
  </div>

  <div className='descripcion-proyectos'>
    <p>{descripcion}</p>
  </div>
{url && (
  <button
    className="btn-github"
    onClick={() => window.open(url, "_blank", "noopener,noreferrer")}
  >
    Mirar en Github
  </button>
)}
</div>

    </div>
  );
}

export default Proyectos;