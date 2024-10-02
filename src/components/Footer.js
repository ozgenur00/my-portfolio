import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; 
import '../styles/Footer.css';

function Footer() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
        AOS.refresh();
    }, []);

    return (
        <footer className='footer' data-aos="fade-up" id='contact'>
            <p id="footer-message" className="footer-message">
            Got ideas, questions, or just want to say hi? Don’t be shy—reach out!
            </p>
            <div className="footer-links">
                <a href='mailto:ozgenurcatal00@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faEnvelope} size="2x" /> 
                </a>
                {" "}  {" "}
                <a href='https://github.com/ozgenur00' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
                {" "}  {" "}
                <a href='https://www.linkedin.com/in/ozgenur-catal/' target='_blank' rel='noopener noreferrer'>
                    <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
            </div>
            <p id="copyright">@ 2024 Ozgenur Catal</p>
        </footer>
    );
}

export default Footer;
