import { useEffect, React } from "react";

import Tooltip from "../Tooltip/Tooltip";

// ++++++====== icon imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGolang, faLinux, faPython } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faHtml5, faCss3Alt, faJs, faReact } from '@fortawesome/free-brands-svg-icons';

const Carousel = () => {
    useEffect(() => {
        const logosSlide = document.querySelector(".logos-slide");
        if (logosSlide) {
          const copy = logosSlide.cloneNode(true);
          document.querySelector(".logos").appendChild(copy);
        }
      }, []);
    
    return(
        
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
    )
}

export default Carousel