import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-left">
                    <h3>Candele di Firenze</h3>
                    <p>Velas artesanales y decoración para tu hogar.</p>
                    <p>&copy; 2024 Candele di Firenze. Todos los derechos reservados.</p>
                </div>
                <div className="footer-center">
                    <h4>Contacto</h4>
                    <p><FontAwesomeIcon icon={faEnvelope} /> info@candeledifirenze.com</p>
                    <p><FontAwesomeIcon icon={faEnvelope} /> +54 11 1234-5678</p>
                </div>
                <div className="footer-right">
                    <h4>Síguenos</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com/CandeleDiFirenze" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebook} />
                        </a>
                        <a href="https://www.instagram.com/candeledifirenze?utm_source=qr&igsh=MWtoOGV3OHJkNHM1NA%3D%3D" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
