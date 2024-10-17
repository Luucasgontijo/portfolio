// src/Componentes/TypingEffect.js
import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;

    const type = () => {
      if (index < text.length) {
        setDisplayedText((prev) => prev + text.charAt(index));
        index++;
        setTimeout(type, speed);
      }
    };

    type(); // Iniciar o efeito de digitação

    // Limpeza da função (opcional)
    return () => {
      index = text.length; // Evitar problemas se o componente for desmontado
    };
  }, [text, speed]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;