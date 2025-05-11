import React, { useState, useEffect, useRef } from 'react';
import styles from '../../styles/Console.module.css';

const Console = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { text: 'Welcome to Ikhlas PV\'s interactive terminal!', type: 'system' },
    { text: 'Type "help" to see available commands.', type: 'system' },
  ]);
  const inputRef = useRef(null);
  const consoleRef = useRef(null);

  // Available commands
  const commands = {
    help: () => {
      return [
        'Available commands:',
        '  about - Learn about me',
        '  skills - View my technical skills',
        '  projects - List my projects',
        '  contact - Get my contact information',
        '  resume - Download my resume',
        '  education - View my educational background',
        '  experience - See my work experience',
        '  certifications - List my certifications',
        '  clear - Clear the console',
      ];
    },
    about: () => {
      return [
        'Hi, I\'m Ikhlas PV!',
        'I am an AI Engineer and Full-Stack Developer with expertise in Python frameworks.',
        'I specialize in building scalable software solutions and implementing AI/ML systems.',
        'Currently focusing on computer vision and web application development.'
      ];
    },
    // Keep your other commands as they are
    skills: () => {
      // Your existing function
    },
    projects: () => {
      // Your existing function
    },
    // ... other command handlers
    clear: () => {
      setTimeout(() => {
        setHistory([
          { text: 'Console cleared.', type: 'system' },
          { text: 'Type "help" to see available commands.', type: 'system' },
        ]);
      }, 100);
      return [];
    },
  };

  // Focus input when component mounts or user clicks on console
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  // Scroll to bottom when history changes
  useEffect(() => {
    if (consoleRef.current) {
      consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
    }
  }, [history]);

  // Handle command execution
  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    // Add user command to history
    setHistory(prev => [...prev, { text: `> ${cmd}`, type: 'command' }]);

    // Process command
    if (trimmedCmd === '') {
      return;
    } else if (commands[trimmedCmd]) {
      const output = commands[trimmedCmd]();
      if (output.length > 0) {
        setHistory(prev => [
          ...prev,
          ...output.map(line => ({ text: line, type: 'output' }))
        ]);
      }
    } else {
      setHistory(prev => [
        ...prev,
        { text: `Command not found: ${trimmedCmd}. Type "help" for available commands.`, type: 'error' }
      ]);
    }
  };

  // Handle input submission
  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(input);
    setInput('');
  };

  return (
    <div className={styles.consoleContainer}>
      <div className={styles.consoleHeader}>
        <div className={styles.consoleButtons}>
          <span className={styles.consoleButton}></span>
          <span className={styles.consoleButton}></span>
          <span className={styles.consoleButton}></span>
        </div>
        <div className={styles.consoleTitle}>ikhlas@neural-net:~</div>
      </div>
      <div className={styles.consoleBody} ref={consoleRef}>
        {history.map((item, index) => (
          <div key={index} className={`${styles.consoleLine} ${styles[item.type]}`}>
            {item.text}
          </div>
        ))}
        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <span className={styles.prompt}>{'>'}</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles.consoleInput}
            ref={inputRef}
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
};

export default Console;