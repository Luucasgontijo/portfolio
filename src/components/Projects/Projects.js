import React, { useState, useEffect } from 'react';
import projectsData from '../../assets/projects.json';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';



const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(2); // Start with 3 projects visible
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1080) {
        setVisibleProjects(1);
      } else {
        setVisibleProjects(2);
      }
    };

    // Set initial value based on current window size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const showMoreProjects = () => {
    setVisibleProjects(prevState => prevState + 2); // Show 3 more projects
  };


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
                    <p>Ver site em produção</p>
                </button>
            </a>
            <a href={project.repository}>
                <button className='project-button'>
                    <p>Ver repositório no <span>GitHub</span></p>
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
            <FontAwesomeIcon icon={faArrowDown} className='icon'/>
        </button>
        
        </>
      )}        
      
      </div>
    </div>
  );
};

export default Projects;