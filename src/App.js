// src/App.js

import React, { useEffect } from 'react';

import Header from './components/Header/Header';
import './App.css';
import './index.css';
import Tooltip from './components/Tooltip/Tooltip'; 

import { faEnvelope, faSquarePhone } from '@fortawesome/free-solid-svg-icons';

// Importa o componente e o ícone do LinkedIn
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolang, faLinkedin, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';


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
        <div className="presentation">

        <div className="greeting">
          <h2>Olá, </h2>
          <h2> Me chamo <span> Lucas</span>, sou</h2>
          <h2>desenvolvedor front-end.</h2>
        </div>

        <div className='face-container'>
          <img className='face' src="/face.png"/>
        </div>
        

        </div>
        <div className="medias">
          <div className="icon-media-container">
             <FontAwesomeIcon icon={faGithub}  title='Abrir no Github' className='icon'/> 
          </div>
          
          <div className="icon-media-container">
            <FontAwesomeIcon icon={faLinkedin} title='Abrir no Linkdin' className='icon'/>
          </div>
          <a className='contato' href="#contato" onClick={(e) => handleClick(e, 'contato')}>Contato</a>
        </div>
        <div className="about-container">
        <h1 className='section-title' id="sobre"> Sobre mim </h1>
        <div className="about">
        
          <h2 className='first-text'>Iniciei minha jornada em Engenharia Elétrica (UFG), no ano de 2023, mas decidi alternar, e ingressei na graduação de <span>Engenharia de Software</span>  (UFG) em Janeiro de 2024. Atualmente, estou focado em desenvolvimento front-end, utilizando tecnologias como <span>React</span>, <span>HTML</span>, <span>CSS</span> e <span>JavaScript</span>. </h2>

          <h2> Além dessas tecnologias, lido bem com <span>Golang</span>, <span>Node.js</span>, sou familiarizado com a utilização de <span>Linux (SO)</span> , e de  
          <span> bancos de dados SQL</span>  e estou me  especializando em <span>Python</span>  e aplicações focadas em IA(LLMS).</h2>

        </div>
        
        <div className="carousel-container">
        <div class="logos">
          <div class="logos-slide">
          <Tooltip text="HTML5">
                <FontAwesomeIcon icon={faHtml5} className='skills-logo html5-icon' />
              </Tooltip>
              <Tooltip text="CSS3">
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
      <div className='certificates'>
        <h1 className='section-title' id="projetos">Minhas certificações</h1> 
        <div className='certificate-container'>
        <div className='img-container'>
              <img src='./MIT.svg'  className='certificate-img' /> 
          </div>
            <a href='https://courses.edx.org/certificates/ec0f70d152b541f4b7cc09ac8407fd12' target='blank'><h2>edX Verified Certificate for Introduction to Computer Science and Programming Using Python</h2> </a>
        </div>
        
        <div className='certificate-container'>
          <div className='img-container'>
              <img src='./meta.svg'  className='certificate-img' /> 
          </div>
            
            <a href='https://www.coursera.org/account/accomplishments/specialization/HCZ1OXUM63AA' target='blank'><h2>Meta Front-End Developer Specialization</h2> </a>
        </div>
       
        <div className='certificate-container'>
          <div className='img-container'>
              <img src='./meta.svg'  className='certificate-img' /> 
          </div>
            
            <a href='https://www.coursera.org/account/accomplishments/records/0PUF87GQCT2G' target='blank'><h2>HTML and CSS in depth</h2> </a>
        </div>
        <div className='certificate-container'>
          <div className='img-container'>
              <img src='./meta.svg'  className='certificate-img' /> 
          </div>
            
            <a href='https://www.coursera.org/account/accomplishments/records/8LIB0H3U28MT' target='blank'><h2>Version Control</h2> </a>
        </div>
        <div className='certificate-container'>
          <div className='img-container'>
              <img src='./meta.svg'  className='certificate-img' /> 
          </div>
            
            <a href='https://www.coursera.org/account/accomplishments/records/DNZRYFK98PSD' target='blank'><h2>JavaScript Programming </h2> </a>
        </div>
        <div className='certificate-container'>
          <div className='img-container'>
              <img src='./meta.svg'  className='certificate-img' /> 
          </div>
            
            <a href='https://www.coursera.org/account/accomplishments/records/KOG7M2MYXZCO' target='blank'><h2>Advanced React </h2> </a>
        </div>
        <div className='certificate-container'>
          <div className='img-container'>
              <img src='./meta.svg'  className='certificate-img' /> 
          </div>
            
            <a href='https://www.coursera.org/account/accomplishments/records/T1YUGKXEEEU9' target='blank'><h2>Principles of UX/UI Design </h2> </a>
        </div>
       
        
      </div>
      
      </div>   
      <div className="Projects">
        <h1 className='section-title' id="projetos">Meus projetos</h1> 
        
      </div>
      <div className="contact">
        <h1 className='section-title' id="contato">Contato</h1> 
        <div className="contact-ways">
           <div className="medias medias-bottom">
          <div className="icon-media-container">
             <FontAwesomeIcon icon={faGithub}  title='Abrir no Github' className='icon'/> 
          </div>
          
          <div className="icon-media-container">
            <FontAwesomeIcon icon={faLinkedin} title='Abrir no Linkdin' className='icon'/>
          </div>
          <div className="icon-media-container">
            <FontAwesomeIcon icon={faEnvelope} title='Abrir no Linkdin' className='icon'/>
          </div>
          <div className="icon-media-container">
            <FontAwesomeIcon icon={faSquarePhone} title='Abrir no Linkdin' className='icon'/>
          </div>
         
        </div>

        </div>
      </div>

      </main>
      
    </div>
  );
}

export default App;