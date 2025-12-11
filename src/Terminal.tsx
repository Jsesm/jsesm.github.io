import React, { useState, useRef, useEffect, type KeyboardEvent, type ChangeEvent } from 'react';
import './Terminal.css'; // Importa los estilos CSS
import { useNavigate } from 'react-router-dom';

// --- Tipos de TypeScript ---
interface TerminalLine {
  id: number;
  type: 'output' | 'input'; // Simplificamos, 'prompt' se integra en 'input'
  content: string;
}

// --- Constantes ---
const PROMPT_PREFIX = 'jsesm@JaimeSesmero > ';
let lineIdCounter = 0; // Contador simple para claves de React

const Terminal: React.FC = () => {
    const navigate = useNavigate()
  const [input, setInput] = useState<string>('');
  const [history, setHistory] = useState<TerminalLine[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // --- Lógica de Comandos (muy simplificada) ---
  const executeCommand = (command: string): string => {
    const cmd = command.trim().toLowerCase();
    if (cmd === 'help') {
      return 'Comandos disponibles: help, echo [texto], clear, show <info | softskills>, view <hardskills | projects | logros>, download cv, wifi off';
    }
    if (cmd.startsWith('echo ')) {
      return command.substring(5); // Devuelve lo que sigue a 'echo '
    }
    if (cmd === 'clear') {
      setHistory([]); // Limpia el historial
      return ''; // No produce salida visible
    }
    if (cmd === 'show info') {
  return '¡Hola! Me llamo Jaime Sesmero Verbo. Soy un estudiante de 4º curso en Ingeniería Informática\
   en la Escuela Superior de Informática de Ciudad Real. Me gusta el \
        desarrollo y la ciberseguridad. Soy una persona trabajadora y persistente\
                        ante los retos. Me encanta utilizar nuevas tecnologías y aprender\
                        continuamente.'
    }
        if (cmd === 'show softskills') {
  return 'Algunas habilidades que tengo son: Colaboración Ágil, Pensamiento Crítico, Razonamiento Lógico,\
  Curiosidad, Proactividad, Resiliencia entre otros'
    }

    if (cmd === 'download cv') {
        const filePath = "/CV/CV_JaimeSesmeroVerbo.pdf";
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "CV_JaimeSesmero.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return ''
    }

      if (cmd === 'view hardskills') {
       navigate('/skills')
        return ''
    }

      if (cmd === 'view projects') {
        navigate('/proyectos')       
        return ''
    }

      if (cmd === 'view logros') {
       navigate('/trofeos')
        return ''
    }


      if (cmd === 'wifi off') {
       navigate('/wifi')
        return ''
    }



    if (cmd === '') {
        return ''; // No hace nada si la entrada está vacía
    }
    return `Comando no reconocido: "${command}"`;
  };

  // --- Manejo de la Entrada ---
  const handleCommandSubmit = () => {
    const command = input.trim();

    // No agregamos la línea de comando si se limpió la pantalla
    if (command === 'clear') {
        setHistory([]);
        setInput('');
        return;
    }

    // 1. Añadir el comando del usuario al historial
    const inputLine: TerminalLine = {
      id: lineIdCounter++,
      type: 'input',
      content: PROMPT_PREFIX + command,
    };

    // 2. Ejecutar el comando y obtener la salida
    const outputContent = executeCommand(command);

    // 3. Añadir la salida (si existe)
    const outputLine: TerminalLine | null = outputContent
      ? {
          id: lineIdCounter++,
          type: 'output',
          content: outputContent,
        }
      : null;

    setHistory(prevHistory => {
      const newHistory = [...prevHistory, inputLine];
      if (outputLine) {
        newHistory.push(outputLine);
      }
      return newHistory;
    });

    setInput(''); // Limpiar el input
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandSubmit();
    }
  };

  // --- Efectos ---
  // Scroll al final al añadir nuevas líneas
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  // Enfocar el input cuando el componente se monta
  useEffect(() => {
    inputRef.current?.focus();
    // Mensaje de bienvenida inicial
    setHistory([
        { id: lineIdCounter++, type: 'output', content: 'Escribe "help" para ver comandos.' },
    ]);
  }, []);

  return (
    <div className="ps-terminal-container" onClick={() => inputRef.current?.focus()}>
      <div className="ps-terminal-output" ref={scrollRef}>
        {history.map(line => (
          <div key={line.id} className={`ps-terminal-line ps-${line.type}`}>
            {line.content}
          </div>
        ))}
        {/* La línea de input siempre al final */}
        <div className="ps-terminal-line ps-input-area">
          <span className="ps-prompt-prefix">{PROMPT_PREFIX}</span>
          <input
            ref={inputRef}
            type="text"
            className="ps-terminal-input"
            value={input}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            autoCapitalize="off"
            spellCheck="false"
          />
        </div>
      </div>
    </div>
  );
};

export default Terminal;