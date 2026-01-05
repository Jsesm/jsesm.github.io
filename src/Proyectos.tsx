import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import './Proyectos.css';

import DyG from './assets/dyg.png';
import GSI from './assets/GSI.png';
import Working from './assets/Working.png';
import Oshawot from './assets/oshawott.png';
import mIPOsibleFest from './assets/festival.png';
import PUD from './assets/PUD.png'
import Discord from './assets/discord.png'
import ICE from './assets/ice-logo.svg'
import Kafka from './assets/kafka.svg'
import Snowfall from 'react-snowfall';
import Cartas from './assets/JuegoCartas.png';

// --- Componente Modal Actualizado para manejar el array 'lenguaje' ---
const ProjectModal = ({ nombre, tipo, url, lenguaje, onClose }) => {
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>{nombre}</h2>
                <h3 className={`modal-tipo ${tipo.slice(0, -1)}`}>{tipo}</h3>
                {/* 1. Mostramos la lista estructurada de lenguajes */}
                <div className="modal-lenguajes">
                    {lenguaje && lenguaje.length > 0 ? (
                        <ul className="lenguajes-list">
                            {lenguaje.map((item, index) => (
                                <li key={index}>
                                    <span className="lenguaje-nombre">{item.nombre}</span>: 
                                    <span className="lenguaje-uso"> {item.uso}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>No hay información detallada de lenguajes.</p>
                    )}
                </div>

                {url && (
                    <a 
                        href={url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-github-modal"
                    >
                        Mirar en Github
                    </a>
                )}
            </div>
        </div>
    );
};
// -----------------------------


function Proyectos() {
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [tipo, setTipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [img, setimg] = useState("");
  const [url, seturl] = useState("");
  const [lenguaje, setLenguaje] = useState([]); // Ahora es un array
  
  const [isModalOpen, setIsModalOpen] = useState(false); 

  // --- Array 'squares' Actualizado con el atributo 'lenguaje' como array ---
  const squares = [
    { 
        id: 1, 
        img: GSI, 
        nombre: 'Análisis de vulnerabilidades', 
        tipo: 'Seguridad', 
        descripcion: 'Aplicación que busca minimizar los errores de las personas de cara  a la Ingeniería Social.', 
        url: 'https://github.com/Jsesm/gsi',
        lenguaje: [
            { nombre: 'Python', uso: 'para el análisis de red y pruebas de inyección.' },
            { nombre: 'Flask', uso: 'para la comunicación entre el frontend y backend' },
            { nombre: 'Html y Css', uso: 'para el frontend' },

        ] 
    },
    { 
        id: 2, 
        img: Oshawot, 
        nombre: 'Juego Pokemon', 
        tipo: 'C#', 
        descripcion: 'Creación del pokemon Oshawott e integración en una aplicación C#.', 
        url: 'https://github.com/9Fernando/IPOkemonAPP',
        lenguaje: [
            { nombre: 'C#', uso: 'para la lógica del juego y la interfaz gráfica (Windows Forms).' }
        ]
    },
    { 
        id: 3, 
        img: mIPOsibleFest, 
        nombre: 'Aplicación Festivales', 
        tipo: 'C#', 
        descripcion: 'Creación de una aplicación en la que se podían crear festivales con sus datos.', 
        url: 'https://github.com/Jsesm/mIPOsibleFEST',
        lenguaje: [
            { nombre: 'C#', uso: 'para la lógica de la aplicación de escritorio.' },
        ]
    },
    { 
        id: 4, 
        img: DyG, 
        nombre: 'Red instituto', 
        tipo: 'Redes', 
        descripcion: 'Simulación en Packet Tracer de una red para un instituto de Miguelturra.', 
        url: 'https://github.com/Jsesm/DyG',
        lenguaje: [
            { nombre: 'Cisco Packet Tracer', uso: 'para el diseño de la topología de red.' },
            { nombre: 'OSPF', uso: 'configuración del protocolo de enrutamiento dinámico.' }
        ]
    },
    { 
        id: 8, 
        img: PUD, 
        nombre: 'Simulación de trabajo con metodología PUD', 
        tipo: 'Ingeniería del Software', 
        descripcion: 'Trabajo con compañeros utilizando la metodología PUD, donde aprendimos a organizarnos\
        asumir nuestros errores y aprender de ellos.', 
        url: 'https://github.com/KevinRuedas183/ISO24-ISO2-C01',
        lenguaje: [
            { nombre: 'Java', uso: 'para hacer los programas que otros compañeros harían test en ellos.' },
            { nombre: 'JUnit', uso: 'para hacer las pruebas de los programas de los compañeros del grupo.' },
            { nombre: 'Git Flow', uso: 'utilizamos Github entre los 6 compañeros' }
        ]
    },

        { 
        id: 9, 
        img: Discord, 
        nombre: 'Aplicación para mostrar datos de un grupo de discord', 
        tipo: 'Integración', 
        descripcion: 'Aplicación que muestra los temas más hablados dentro de un grupo de discord para facilitar tareas de mejora a usuarios\
        con muchas interacciones.', 
        url: 'https://github.com/Javit-Dev/isi-2isi',
        lenguaje: [
            { nombre: 'Docker', uso: 'para construir la aplicación.' },
            { nombre: 'Angular', uso: 'para hacer el front.' },
            { nombre: 'Python y Flask', uso: 'para los microservicios' }
        ]
    },

    { 
        id: 10, 
        img: ICE, 
        nombre: 'Aprendizaje de Sistemas Distribuidos', 
        tipo: 'Sistemas Distribuidos', 
        descripcion: 'Comunicación entre dos servidores usando Zeroc-Ice para crear listas, diccionarios y sets.', 
        url: 'https://github.com/Jsesm/Sistemas_Distribuidos',
        lenguaje: [
            { nombre: 'Python', uso: 'para hacer el código de los métodos de cada tipo.' },
        ]
    },

        { 
        id: 11, 
        img: Kafka, 
        nombre: 'Mejora proyecto de Sistemas Distribuidos', 
        tipo: 'Sistemas Distribuidos', 
        descripcion: 'Añadí Kafka para que un consumidor recibiera eventos y pidiera los datos al servidor de Zeroc-Ice.', 
        url: 'https://github.com/Jsesm/SSDD_JaimeSesmero',
        lenguaje: [
            { nombre: 'Python', uso: 'para hacer el código del consumidor.' },
        ]
    },

    { 
        id: 5, 
        img: Working, 
        nombre: 'Gramola', 
        tipo: 'Web', 
        descripcion: 'Apliación para poner música en un dispositivo a modo de gramola en los bares', 
        url: '',
        lenguaje: [
            { nombre: 'Angular', uso: 'para la interfaz del usuario (Frontend).' },
            { nombre: 'Spring y Java', uso: 'para el backend de la aplicación' },
            { nombre: 'MySQL', uso: 'para la base de datos de usuarios.' },
            { nombre: 'Uso de APIs', uso: 'como la de Spotify' }
        ]
    },
    { 
        id: 6, 
        img: Working, 
        nombre: 'Web Asociación Iker', 
        tipo: '', 
        descripcion: 'Creación de la web de la Asociación Iker', 
        url: '',
        lenguaje: [
            { nombre: 'WordPress', uso: 'para crear la página web.' },
        ]
    },
    { 
        id: 7, 
        img: Cartas, 
        nombre: 'Juego de Cartas', 
        tipo: 'React Native', 
        descripcion: 'Juego de elegir mayor o menor, 5 en raya y brisca. También tiene una tienda para conseguir cartas', 
        url: 'https://pruebasaluuclm-my.sharepoint.com/:u:/g/personal/jaime_sesmero_alu_uclm_es/IQDoGjcGuXLMSpCwBNx7ZrKTAeNz06inDXM79fEjLTBysdY?e=FOh4RX',
        lenguaje: [
            { nombre: 'React Native', uso: 'para el desarrollo de la aplicación móvil multiplataforma.' },
            { nombre: 'TypeScript', uso: 'para la lógica tipada del juego.' },
            { nombre: 'Firestore', uso: 'para la base de datos de los usuarios.' },
            { nombre: 'Socket.io', uso: 'para el juego online de la Brisca y 5 en raya.' },
            { nombre: 'Python y Flask', uso: 'para la comunicación en el juego de mayor o menor.' },
            { nombre: 'Node.js', uso: 'para la comunicación con el juego de Brisca y 5 en raya.' },
        ]
    },
  ];
  // -----------------------------------------------------------

  const handleProjectSelect = (sq) => {
    setimg(sq.img);
    setDescripcion(sq.descripcion)
    setTipo(sq.tipo);
    setNombre(sq.nombre);
    seturl(sq.url);
    // 2. Establecer el nuevo array
    setLenguaje(sq.lenguaje); 
  };

  return (

    <><Snowfall /><div className="proyectos-container">

      {/* 1. MODAL (Se pasa el nuevo prop 'lenguaje') */}
      {isModalOpen && (
        <ProjectModal
          nombre={nombre}
          tipo={tipo}
          url={url}
          lenguaje={lenguaje} // <-- PROP COMO ARRAY
          onClose={() => setIsModalOpen(false)} />
      )}

      <div className='opciones'>
        <button className="btn-volver" onClick={() => navigate('/')}>
          ⬅ Volver
        </button>


        <div className="cajas-opciones">
          {squares.map((sq) => (
            <div
              key={sq.id}
              className="cajas"
              onClick={() => handleProjectSelect(sq)}
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

          {/* Botón de Información al lado del título */}
          {nombre && (
            <button
              className="btn-info-round"
              onClick={() => setIsModalOpen(true)}
              title="Ver detalles del proyecto"
            >
              i
            </button>
          )}
        </div>

        {/* 4. Mantenemos la descripción corta en el panel principal */}
        <div className='descripcion-proyectos'>
          <p>{descripcion}</p>
        </div>


      </div>
    </div></>
  );
}

export default Proyectos;