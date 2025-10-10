import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import './Proyectos.css';
import ESI from './assets/ESI.jpg';



function Proyectos() {
  const navigate = useNavigate();
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [img, setimg] = useState("");
    const [url, seturl] = useState("");
  const squares = [
    { id: 1, img: ESI, nombre: 'Proyecto 1', tipo: 'Web' , descripcion: 'Descripción del Proyecto 1', url: 'https://github.com/Jsesm/DyG' },
    { id: 2, img: ESI, nombre: 'Proyecto 2', tipo: 'W2eb' , descripcion: '2Descripción del Proyecto 1', url: 'https://example.com/proyecto1'},
    { id: 3, img: ESI, nombre: 'Proyecto 3', tipo: 'W3eb' , descripcion: '3Descripción del Proyecto 1', url: 'https://example.com/proyecto1'},
    { id: 4, img: ESI, nombre: 'Proyecto 4', tipo: 'W4eb' , descripcion: '4Descripción del Proyecto 1', url: 'https://example.com/proyecto1'},

  ];

  return (
    <div className="proyectos-container">
      {/* Botón arriba a la izquierda */}

      <div className='opciones'>
      <button className="btn-volver" onClick={() => navigate('/')}>
        ⬅ Volver
      </button>

      {/* Cuadrados debajo */}
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
  <img src={img} alt="Proyecto" className="proyectos-img" height={400} width={400} />
)}

  <div className='info-proyectos'>
    <h2>{nombre}</h2>
    <h3>{tipo}</h3>
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