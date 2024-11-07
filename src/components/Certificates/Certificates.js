import React from "react";
import "./Certificates.css";

import certificatesData from "../../assets/certificados.json";
const Certificates = () => {
  return (
    <div className='certificate-container'>
        {certificatesData.map(certificate => (
            <div key={certificate.id} className='certificate-card'>
                <img src={require(`../../assets/${certificate.image}`)} className='certificate-img' />
                
                <a href={certificate.link} target='blank'>
                <h2>{certificate.name}</h2>
                </a>
            </div>
        ))}
    </div>
  );
}
export default Certificates;