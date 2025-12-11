import React, { useState, useRef, useEffect, type KeyboardEvent, type ChangeEvent } from 'react';
import './Terminal.css';
import { useNavigate } from 'react-router-dom';

// ... (Tipos e Constantes permanecen iguales) ...

const PROMPT_PREFIX = 'jsesm@JaimeSesmero > ';
let lineIdCounter = 0;

const Terminal: React.FC = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState<string>('');
    const [history, setHistory] = useState<TerminalLine[]>([]);
    
    // --- NUEVOS ESTADOS PARA EL HISTORIAL Y AUTOCOMPLETADO ---
    const [commandHistory, setCommandHistory] = useState<string[]>([]);
    const [historyIndex, setHistoryIndex] = useState<number>(-1); // -1 significa que no estamos navegando en el historial
    // --------------------------------------------------------

    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

  // --- Lógica de Comandos (Sin Cambios en esta parte) ---
  const executeCommand = (command: string): string => {
    const cmd = command.trim().toLowerCase();
    
    // ... (Tu lógica de comandos existente: help, echo, clear, show, view, download, wifi off) ...

    if (cmd === 'help') {
      return 'Comandos disponibles: help, echo [texto], clear, show <info | softskills>, view <hardskills | projects | logros>, download cv, wifi off';
    }
    if (cmd.startsWith('echo ')) {
      return command.substring(5);
    }
    if (cmd === 'clear') {
      setHistory([]);
      return '';
    }
    if (cmd === 'show info') {
      // Usar template literal para mejor manejo de texto largo
      return `¡Hola! Me llamo Jaime Sesmero Verbo. Soy un estudiante de 4º curso en Ingeniería Informática
              en la Escuela Superior de Informática de Ciudad Real. Me gusta el desarrollo y la ciberseguridad. 
              Soy una persona trabajadora y persistente ante los retos. Me encanta utilizar nuevas tecnologías y aprender continuamente.`;
    }
    if (cmd === 'show softskills') {
      return 'Algunas habilidades que tengo son: Colaboración Ágil, Pensamiento Crítico, Razonamiento Lógico, Curiosidad, Proactividad, Resiliencia entre otros';
    }
    if (cmd === 'download cv') {
        const filePath = "/CV/CV_JaimeSesmeroVerbo.pdf";
        const link = document.createElement("a");
        link.href = filePath;
        link.download = "CV_JaimeSesmero.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        return 'Iniciando descarga de CV...'
    }
    if (cmd === 'view hardskills') { navigate('/skills'); return '' }
    if (cmd === 'view projects') { navigate('/proyectos'); return '' }
    if (cmd === 'view logros') { navigate('/trofeos'); return '' }
    if (cmd === 'wifi off') { navigate('/wifi'); return '' }


    if (cmd === '') {
        return '';
    }
    return `Comando no reconocido: "${command}"`;
  };

  // --- Función de Lógica de Autocompletado (TAB) ---
  const handleAutoComplete = () => {
    const commands = [
      'help', 'echo', 'clear', 'show info', 'show softskills', 'view hardskills',
      'view projects', 'view logros', 'download cv', 'wifi off'
    ];
    const partialCommand = input.trim().toLowerCase();

    // Encontrar todas las coincidencias
    const matches = commands.filter(cmd => cmd.startsWith(partialCommand));

    if (matches.length === 1) {
      // Si solo hay una coincidencia, autocompletar el input
      setInput(matches[0] + ' '); // Añadir un espacio al final
      return 'autocompletado';
    } else if (matches.length > 1) {
      // Si hay varias, listarlas
      const matchList = matches.join('\t'); // Usar tabulador para formato de terminal
      return matchList;
    }
    return ''; // No hay coincidencias o comando vacío
  };
  
  // --- Manejo de la Entrada (Modificado para Historial) ---
  const handleCommandSubmit = () => {
    const command = input.trim();

    // 1. Añadir a commandHistory (solo si no es vacío y no es 'clear')
    if (command !== '' && command.toLowerCase() !== 'clear') {
        setCommandHistory(prev => [...prev, command]);
    }
    setHistoryIndex(-1); // Resetear el índice de navegación al enviar

    // El resto de la lógica de submit permanece igual...
    if (command === 'clear') {
        setHistory([]);
        setInput('');
        return;
    }

    const inputLine: TerminalLine = {
      id: lineIdCounter++,
      type: 'input',
      content: PROMPT_PREFIX + command,
    };

    const outputContent = executeCommand(command);

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

    setInput('');
  };

  // --- Manejo de Teclado (Flechas y Tabulador) ---
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommandSubmit();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault(); // Evita que el cursor se mueva
      if (commandHistory.length > 0) {
        const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        setHistoryIndex(newIndex);
        // El historial se guarda del más antiguo al más nuevo.
        // Accedemos desde el final: length - 1 - newIndex
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        // Al llegar al final (0), limpiamos el input
        setHistoryIndex(-1);
        setInput('');
      }
    } else if (e.key === 'Tab') {
        e.preventDefault(); // ¡Crucial! Evita el foco por defecto del navegador
        
        const autocompleteOutput = handleAutoComplete();

        if (autocompleteOutput && autocompleteOutput !== 'autocompletado') {
             // Si hay múltiples coincidencias, las mostramos como output
             setHistory(prevHistory => [
                ...prevHistory,
                // Agregamos la línea de input actual (lo que el usuario estaba escribiendo)
                { id: lineIdCounter++, type: 'input', content: PROMPT_PREFIX + input }, 
                // Agregamos las sugerencias
                { id: lineIdCounter++, type: 'output', content: autocompleteOutput },
            ]);
            // El input no cambia, el usuario tiene que seguir escribiendo
            // Forzar el scroll al final después de la salida
            setTimeout(() => scrollRef.current?.scrollToEnd({ animated: true }), 0);

        }
    }
  };

  // --- Efectos (Sin Cambios) ---
  useEffect(() => {
    // Scroll al final al añadir nuevas líneas
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
    setHistory([
        { id: lineIdCounter++, type: 'output', content: 'Escribe "help" para ver comandos.' },
    ]);
  }, []);

  return (
    <div className="ps-terminal-container" onClick={() => inputRef.current?.focus()}>
      <div className="ps-terminal-output" ref={scrollRef}>
        {history.map(line => (
          // Usamos 'white-space: pre-wrap' para que el texto largo se formatee bien
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