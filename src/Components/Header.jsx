/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <button 
        className={`header__mobile-button ${isMenuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className={`header__nav ${isMenuOpen ? 'active' : ''}`}>
        <a href="#home" className="header__link" onClick={closeMenu}>Home</a>
        <a href="#about" className="header__link" onClick={closeMenu}>About</a>
        <a href="#portfolio" className="header__link" onClick={closeMenu}>Portfolio</a>
        <a href="#footer" className="header__link" onClick={closeMenu}>Contact</a>
      </nav>
    </div>
  );
};

export default Header;
