// src/Componentes/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css'; // Importa o CSS específico do Header (opcional)
import TypingEffect from '../TypingEffect.js'; // Importa o componente TypingEffect


function Header() {

  const [isScrolled, setIsScrolled] = useState(false);

  // Detecta o scroll e muda o estado
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Altera o estado se o scroll for maior que 50px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  
  return (
    <header className={isScrolled ? 'header scrolled' : 'header'}> 
      <h1 className={isScrolled ? 'hidden' : ''}>
        lucas gontijo
      </h1>
      <nav>
          <li><a href="#sobre" onClick={(e) => handleClick(e, 'sobre')}>Sobre</a></li>
          <li><a href="#projetos" onClick={(e) => handleClick(e, 'projetos')}>Projetos</a></li>
          <li><a className='contato' href="#contato" onClick={(e) => handleClick(e, 'contato')}>Contato</a></li>
      </nav>
    </header>
  );
}

export default Header;