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
        <div className="presentation">

        <div className="greeting">
          <h2>Olá, </h2>
          <h2> Me chamo <span> Lucas</span></h2>
          <h2> desenvolvedor front-end.</h2>
        </div>

        <div>
          <img src="/images/face.jpg"/>
        </div>

        </div>
      </main>
    </div>
  );
}

export default App;