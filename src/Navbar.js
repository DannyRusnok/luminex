import React, { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((o) => !o);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-center">Daniel Rusnok Portfolio</div>
      <button
        className={`burger ${menuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
        aria-label="toggle menu"
      >
        <span className="line" />
        <span className="line" />
        <span className="line" />
      </button>
      <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
        <div className="navbar-left">
          <a href="#gallery" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#kontakt" onClick={() => setMenuOpen(false)}>
            Kontakt
          </a>
        </div>
        <div className="navbar-right">
          <a href="mailto:Daniel.rusnok@gmail.com" onClick={() => setMenuOpen(false)}>
            Daniel.rusnok@gmail.com
          </a>
        </div>
      </div>
    </nav>
  );
}
