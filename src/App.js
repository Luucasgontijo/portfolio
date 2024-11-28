// src/App.js

import React, { useEffect } from 'react';

// ++++++++======== css imports
import './App.css';
import './index.css';

// ++++++++======= Components imports

import Header from './components/Header/Header';
import ScrollToTop from './components/scrollToTop/scrollToTop'; 
import Certificates from './components/Certificates/Certificates';
import Carousel from './components/Carousel/Carousel';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

// ++++++++======= Icons imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';




function App() {
  
  useEffect(() => {
    const logosSlide = document.querySelector(".logos-slide");
    if (logosSlide) {
      const copy = logosSlide.cloneNode(true);
      document.querySelector(".logos").appendChild(copy);
    }
  }, []);

  

  const handleClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  


  return (
    <div className="App">

      <Header />
    
      <main>

            <section className="presentation">
            <div className="greeting">
              <h1>Seja bem vindo ao meu portfolio.</h1>
              <h1> Me chamo Lucas, sou</h1>
              <h1>desenvolvedor front-end.</h1>
            </div>

            <div className='face-container'>
              <img  src="/face7.png"/>
            </div>
            

            </section>
            <div className="medias">
              <div className='icon-container'>
                  <a target='blank' href='https://github.com/Luucasgontijo'>
                  <FontAwesomeIcon  icon={faGithub}  title='Abrir no Github' className='icon'/> 
                  </a>
              </div>
              <div  className='icon-container'>
                <a href='https://www.linkedin.com/in/lucas-gontijo-6887b92b3/' target='blank'>
                <FontAwesomeIcon icon={faLinkedin} title='Abrir no Linkedin' className='icon' />
                </a>
              </div>
            </div>


            <div className="about-container">
              <h1 className='section-title' id="sobre"> Sobre mim </h1>
              <div className="about">
              
                <h2>Ingressei na graduação de <span>Engenharia de Software(Universidade Federal de Goiás) </span> em Janeiro de 2024, e me direcionei imediatamente ao estudo  e desenvolvimento front-end, utilizando tecnologias como <span>React</span>, <span>HTML</span>, <span>CSS</span> e <span>JavaScript</span>. </h2>

                <h2> Além dessas tecnologias, lido bem com <span>Golang</span>, <span>Node.js</span>, sou familiarizado com a utilização de <span>Linux (SO)</span> , e de  ``
                <span> bancos de dados SQL</span>  e estou me  especializando no desenvolvimento utilizando <span>Python</span> e aplicações focadas em IA(LLMS), no momento, também atuo em um projeto de extensão universitário Federal, na seção de Inteligência Artificial, e no desenvolvimento de uma solução Retrieval-Augmented Generation (RAG) para a aplicação que desenvolvemos utilizando tecnologias baseadas em <span>langchain</span>, onde também tive contato com metodologias agéis, scrum e kanbam. </h2>

              </div>
            
          <Carousel/>
          <h1 className='section-title' id="sobre">Minhas certificações</h1>
          <Certificates/>
            </div>


            {/* <h1 className='section-title' id="projetos">Meus projetos</h1> 
            <Projects/> */}


            <h1 className='section-title' id="contato">Vamos entrar em contato 👋</h1> 
            <Contact/>

              <h5>desenvolvido e mantido por Lucas Gontijo - 2024</h5>
            
            
      </main>
      <ScrollToTop></ScrollToTop>
          
    </div>
    

  );
}

export default App;