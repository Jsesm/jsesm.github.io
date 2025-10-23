import "./Trofeos.css"
import { useNavigate } from 'react-router-dom';
import JuaneloTurriano from './assets/juanelo.jpeg';
import Trofeo from './assets/trophy.svg'; // Ejemplo segunda imagen
import ESI from './assets/ESI.jpg';
import Cambridge from './assets/cambridge.png'

const Skills = () => {
  const navigate = useNavigate();
 
  const data = [
    


    {
      id: 0,
      title: "B2",
      description: "B2 en Inglés (2021)",
      images: [Cambridge, Trofeo],
    },
    {
      id: 1,
      title: "Bachillerato",
      description: "Matrícula de Honor en Bachillerato (2022)",
      images: [JuaneloTurriano, Trofeo],
    },
    {
      id: 2,
      title: "MHIPOII",
      description: "Matrícula de Honor en Interacción Persona Ordenador II (2025)",
      images: [ESI,Trofeo],
    },
    {
      id: 3,
      title: "MHDyG",
      description: "Matrícula de Honor en Diseño y Gestión de Redes (2025)",
      images: [ESI, Trofeo],
    },

  ];

  return (
    <div className="trofeos-container">
      <button className="boton-volver" onClick={() => navigate("/")}>
        ⬅ Volver
      </button>

      <div className="trofeos">
        {data.map((row) => (
          <div key={row.id} className="row">
            <div className="imagenes">
              {row.images.map((img, index) => (
                <img key={index} src={img} alt={`Imagen ${index}`} />
              ))}
            </div>
            <p className="descripcion">{row.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;