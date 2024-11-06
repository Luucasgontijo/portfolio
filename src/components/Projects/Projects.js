import React, { useState } from 'react';
import projectsData from '../../assets/projects.json';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';



const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2); // Start with 3 projects visible

  const showMoreProjects = () => {
    setVisibleProjects(prevState => prevState + 2); // Show 3 more projects
  };

//   const getImage = (imageName) => {
//     try {
//       return require(`../../images/${imageName}`).default;
//     } catch (error) {
//       console.error(`Image not found: ${imageName}`, error);
//       return require('../..]/images/default-image.jpg').default; // Use a default image if not found
//     }
//   };

  return (
    <div>
      <div className="projects-list">
        {projectsData.slice(0, visibleProjects).map(project => (
          <div key={project.id} className="card">
            <img 
            src={require(`../../assets/${project.image}`)}
              className="project-image" 
            />
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <div className='button-div'>
            <a href={project.deploy}>
                <button className='project-button'>
                    <p>Ver site em produção (deploy)</p>
                </button>
            </a>
            <a href={project.repository}>
                <button className='project-button'>
                    <p>Ver repositório no GitHub</p>
                    
                    <FontAwesomeIcon  icon={faGithub}  title='Abrir no Github' className='icon'/> 
                </button>
            </a>
            
            </div>

          </div>
        ))}
      </div>
      <div className='show-more-button-div'>
      {visibleProjects < projectsData.length && (
        <>
        <button onClick={showMoreProjects} className='show-more-button'>
            <p>Mostrar mais</p>
        <FontAwesomeIcon icon={faArrowDown}  color='black'/>
        </button>
        
        </>
      )}        
      
      </div>
    </div>
  );
};

export default Projects;