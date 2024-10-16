// src/Componentes/Header.js
import React from 'react';
import './Header.css'; // Importa o CSS específico do Header (opcional)




function Header() {
  return (
    <>
    <header> 
      <h1>Meu Portfólio</h1> 
      <nav>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#projetos">Projetos</a></li>
          <li><a href="#contato">Contato</a></li>
      </nav>
    </header>

      <hr />
    </>
  );
}

export default Header;