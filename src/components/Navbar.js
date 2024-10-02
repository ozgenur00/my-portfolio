import React, { useState, useEffect } from "react";
import logo from '../images/logo.png'; // Adjust path to your logo
import '../styles/Navbar.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); 
  const [scrolled, setScrolled] = useState(false); 

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    AOS.refresh();

    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };


  const closeMenu = () => {
    setIsOpen(false); 
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} data-aos='fade-up'>
      <div className="logo">
        <a href="#hero-section" onClick={closeMenu}>
        <img src={logo} alt="Logo" />
        </a>
      </div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#about" onClick={closeMenu}>About</a></li> 
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li> 
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      {/* Hamburger Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}

export default Navbar;
