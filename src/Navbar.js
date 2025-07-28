import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="#gallery">Portfolio</a>
        <a href="#kontakt">Kontakt</a>
      </div>
      <div className="navbar-center">Daniel Rusnok Portfolio</div>
      <div className="navbar-right">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="instagram-icon"
          />
        </a>
        <a href="mailto:Daniel.rusnok@gmail.com">Daniel.rusnok@gmail.com</a>
      </div>
    </nav>
  );
}
