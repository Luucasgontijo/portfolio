import { useState, React } from "react";
import "./Certificates.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

import certificatesData from "../../assets/certificados.json";
const Certificates = () => {

  const [visibleProjects, setVisibleProjects] = useState(4); 
  const showMoreProjects = () => {
    setVisibleProjects(prevState => prevState + 8); 
  };


  return (
    <div className='certificate-container'>
        {certificatesData.slice(0, visibleProjects).map(certificate => (
            <div key={certificate.id} className='certificate-card'>
                <img src={require(`../../assets/${certificate.image}`)} className='certificate-img' />
                
                <a href={certificate.link} target='blank'>
                <h2>{certificate.name}</h2>
                </a>
            </div>
        ))}
      <div className='show-more-button-div'>
        {visibleProjects < certificatesData.length && (
          <>
          <button onClick={showMoreProjects} className='show-more-button'>
              <p>Mostrar mais</p>
              
              <svg className="ArrowDown" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>

          </button>
          </>
        )}         
      </div>
    </div>
  );
}
export default Certificates;