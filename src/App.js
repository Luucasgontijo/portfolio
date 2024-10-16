// src/App.js
import React from 'react';
import Header from './components/Header/Header';
import './App.css';
import './index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Bem-vindo ao meu site!</h2>
        <p>Explore as seções do site usando o menu acima.</p>
      </main>
    </div>
  );
}

export default App;