// src/Componentes/Header.js
import React, { useState, useEffect } from 'react';
import './Header.css'; // Importa o CSS específico do Header (opcional)
// import lightModeIcon from '.';
// import darkModeIcon from './assets/moon.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Header() {


  const [theme, setTheme] = useState('light-theme');


  const toggleTheme = () => {
    const newTheme = theme === 'light-theme' ? 'dark-theme' : 'light-theme';
    setTheme(newTheme);
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(newTheme);
    localStorage.setItem('theme', newTheme); // Save theme preference
    document.documentElement.style.opacity = "0.99";
    setTimeout(() => {
      document.documentElement.style.opacity = "1";
    }, 1);
    // updateCSSVariables(newTheme);
    // setIsLogosActive(!isLogosActive);

    // if (window.matchMedia("(max-width: 1080px)").matches) {
    //   window.location.reload(); // Reload the page if the device is a cellphone
    // }
    
  };
  

    // useEffect(() => {
    //     // Check for saved theme in localStorage
    //     const savedTheme = localStorage.getItem('theme');
    //     if (savedTheme) {
    //         setTheme(savedTheme);
    //         document.body.classList.add(savedTheme);
    //     } else {
    //         document.body.classList.add('light-theme');
    //     }
    // }, []);

   

  
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
      <h1 className={isScrolled ? 'hidden' : ''} id='logo'>
      &lt;lucas gontijo&gt;
      </h1>
      <nav>
          <li><a href="#sobre" onClick={(e) => handleClick(e, 'sobre')}>Sobre</a></li>
          {/* <li><a href="#projetos" onClick={(e) => handleClick(e, 'projetos')}>Projetos</a></li> */}
          <li><a className='contato' href="#contato" onClick={(e) => handleClick(e, 'contato')}>Contato</a></li>
            <li>
              <div onClick={toggleTheme}  title='mudar tema' className="theme-toggle-button">
            {theme === 'light-theme' ? (
              <svg viewBox="0 0 24 24" width="24" height="24" class="darkToggleIcon"><path fill="currentColor" d="M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z"></path></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="24" height="24" class="lightToggleIcon"><path fill="currentColor" d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z"></path></svg>
            )}
              </div>
            </li>
            {/* <li>
            
            <FontAwesomeIcon icon={faLanguage} className='faLanguage' />
            </li> */}
      </nav>

    </header>
  );
}

export default Header;