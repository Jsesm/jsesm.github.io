import './App.css';
import backgroundImg from './assets/campofc.png'; // cambia el nombre según tu imagen
import { useNavigate } from 'react-router-dom';

const Skills = () => {
  const navigate = useNavigate();

  return (
    <div
      className="skills-background"
      style={{
        backgroundImage: `url(${backgroundImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
      }}
    >
      <button
        onClick={() => navigate('/')}
        style={{
          margin: '20px',
          padding: '10px 20px',
          backgroundColor: 'rgba(0,0,0,0.6)',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        ⬅ Volver
      </button>
    </div>
  );
};

export default Skills;