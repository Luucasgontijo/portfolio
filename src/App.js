// src/App.js

import React, { useEffect, useState } from 'react';


import Header from './components/Header/Header';
import './App.css';
import './index.css';
import Tooltip from './components/Tooltip/Tooltip'; 
import ScrollToTop from './components/scrollToTop/scrollToTop'; 
import Certificates from './components/Certificates/Certificates';

import { faEnvelope, faSquarePhone, faCopy } from '@fortawesome/free-solid-svg-icons';

// Importa o componente e o ícone do LinkedIn
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolang, faLinkedin, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact, faSquareWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Projects from './components/Projects/Projects';



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

  

  const [showPopup, setShowPopup] = useState(false);

  const handleCopyEmail = () => {
    const email = 'gontijo@discente.ufg.br';
    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Esconde o popup após 2 segundos
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <div className="presentation">

        <div className="greeting">
          <h1>Seja bem vindo ao meu portfolio.</h1>
          <h1> Me chamo Lucas, sou</h1>
          <h1>desenvolvedor front-end.</h1>
        </div>

        <div className='face-container'>
          <img  src="/face7.png"/>
        </div>
        

        </div>

        
        

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
          <a className='contato contato-main' href="#contato" onClick={(e) => handleClick(e, 'contato')}>Contato</a>
        </div>

        <div className="about-container">
          <h1 className='section-title' id="sobre"> Sobre mim </h1>
          <div className="about">
          
            <h2>Iniciei minha jornada em Engenharia Elétrica (UFG), no ano de 2023, mas decidi alternar, e ingressei na graduação de <span>Engenharia de Software</span>  (UFG) em Janeiro de 2024. Atualmente, estou focado em desenvolvimento front-end, utilizando tecnologias como <span>React</span>, <span>HTML</span>, <span>CSS</span> e <span>JavaScript</span>. </h2>

            <h2> Além dessas tecnologias, lido bem com <span>Golang</span>, <span>Node.js</span>, sou familiarizado com a utilização de <span>Linux (SO)</span> , e de  
            <span> bancos de dados SQL</span>  e estou me  especializando em <span>Python</span>  e aplicações focadas em IA(LLMS).</h2>

          </div>
        
        <div className="carousel-container">
        <div class="logos">
          <div class="logos-slide">
          <Tooltip text="HTML5">
                <FontAwesomeIcon icon={faHtml5} className='skills-logo html5-icon' />
              </Tooltip>
              <Tooltip text="CSS3" className='tooltip'>
                <FontAwesomeIcon icon={faCss3Alt} className='skills-logo' />
              </Tooltip>
              <Tooltip text="JavaScript">
                <FontAwesomeIcon icon={faJs} className='skills-logo' />
              </Tooltip>
              <Tooltip text="React">
                <FontAwesomeIcon icon={faReact} className='skills-logo' />
              </Tooltip>
              <Tooltip text="Golang">
                <FontAwesomeIcon icon={faGolang} className='skills-logo' />
              </Tooltip>
              <Tooltip text="Python">
                <FontAwesomeIcon icon={faPython} className='skills-logo' />
              </Tooltip>
              <Tooltip text="GitHub">
                <FontAwesomeIcon icon={faGithub} className='skills-logo' />
              </Tooltip>
              <Tooltip text="Linux">
                <FontAwesomeIcon icon={faLinux} className='skills-logo' />
              </Tooltip>

          </div>
        </div>
      </div> 
      <Certificates/>
  
      </div>   
      <div className="Projects">
        
        <h1 className='section-title' id="projetos">Meus projetos</h1> 
        <Projects/>
      </div>


        <h1 className='section-title' id="contato">Contato</h1> 

        
        <div className="contact">
        


          <div className="contact-ways">
            
            <div className="medias medias-bottom">
                <div>
                  <a target='blank' href='https://github.com/Luucasgontijo'><FontAwesomeIcon  icon={faGithub}  title='Abrir no Github' className='icon'/> </a>
                  
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/lucas-gontijo-6887b92b3/' target='blank'><FontAwesomeIcon icon={faLinkedin} title='Abrir no Linkedin' className='icon'/></a>
                </div>
                <div>
                <FontAwesomeIcon 
                    icon={faEnvelope} 
                    title='Copiar Email' 
                    className='icon' 
                    onClick={handleCopyEmail} 

                  />
                  {showPopup && <div className="popup">Email copiado para caixa de transferência</div>}
                </div>
                <div>
                  <FontAwesomeIcon icon={faSquarePhone} title='Abrir no Linkdin' className='icon'/>
                </div>     
          </div>
          </div>
          <div className='text-info'>
            <div className='contact-container'> 
                <FontAwesomeIcon icon={faCopy} title='Copiar Email' 
                  className='copy' 
                  onClick={handleCopyEmail} 

                />
                {showPopup && <div className="popup">Email copiado para caixa de transferência</div>}
                <h3>
                gontijo@discente.ufg.br
                </h3>
              
            </div>
            
            <h3>
              Goiânia, Goiás, Brasil
            </h3>

            <div className='contact-container'>
              <a target='blank' href='https://wa.me/5562985372793'><FontAwesomeIcon icon={faSquareWhatsapp} className='whatsapp-icon' /></a>
            
            <h3>
              +55 (62) 98537-2793
            </h3>
              </div>
            
            
          </div>

          
        </div>


      </main>
      <ScrollToTop></ScrollToTop>
      
    </div>


  );
}

export default App;