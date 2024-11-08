import { React, useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faSquarePhone,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleCopyEmail = () => {
    const email = "gontijo@discente.ufg.br";
    navigator.clipboard.writeText(email).then(() => {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 2000); // Esconde o popup após 2 segundos
    });
  };
  return (
    <div className="contact">
      <form className="contact-form">
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Mensagem:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Enviar</button>
      </form>

      <div className="contact-ways">
        <div className="medias medias-bottom">
          <div>
            <a target="blank" href="https://github.com/Luucasgontijo">
              <FontAwesomeIcon
                icon={faGithub}
                title="Abrir no Github"
                className="icon"
              />{" "}
            </a>
          </div>
          <div>
            <a
              href="https://www.linkedin.com/in/lucas-gontijo-6887b92b3/"
              target="blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                title="Abrir no Linkedin"
                className="icon"
              />
            </a>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faEnvelope}
              title="Copiar Email"
              className="icon"
              onClick={handleCopyEmail}
            />
            {showPopup && (
              <div className="popup">
                Email copiado para caixa de transferência
              </div>
            )}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faSquarePhone}
              title="Abrir no Linkdin"
              className="icon"
            />
          </div>
        </div>
      </div>
      <div className="text-info">
        <div className="contact-container">
          <FontAwesomeIcon
            icon={faCopy}
            title="Copiar Email"
            className="copy"
            onClick={handleCopyEmail}
          />
          {showPopup && (
            <div className="popup">
              Email copiado para caixa de transferência
            </div>
          )}
          <h3>gontijo@discente.ufg.br</h3>
        </div>

        <h3>Goiânia, Goiás, Brasil</h3>

        <div className="contact-container">
          <a target="blank" href="https://wa.me/5562985372793">
            <FontAwesomeIcon
              icon={faSquareWhatsapp}
              className="whatsapp-icon"
            />
          </a>

          <h3>+55 (62) 98537-2793</h3>
        </div>
      </div>
    </div>
  );
};

export default Contact;
