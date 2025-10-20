// BarraProgreso.tsx
import './BarraProgreso.css';

type BarraProgresoProps = {
  porcentaje: string; // Ej: "80%"
};

const BarraProgreso = ({ porcentaje }: BarraProgresoProps) => {
  return (
    <div className="barra-container">
      <div className="barra-relleno" style={{ width: porcentaje }} />
      <span className="barra-texto">{porcentaje}</span>
    </div>
  );
};

export default BarraProgreso;
