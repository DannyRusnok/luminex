import React, { useState, useEffect } from 'react';
import {
  NavbarWrapper,
  Burger,
  Line,
  NavbarMenu,
  NavbarLeft,
  NavbarLink
} from './styled';

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
    <NavbarWrapper>
      <Burger onClick={toggleMenu} aria-label="toggle menu">
        <Line />
        <Line />
        <Line />
      </Burger>
      <NavbarMenu style={menuOpen ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-start' } : {}}>
        <NavbarLeft>
          <NavbarLink href="#gallery" onClick={() => setMenuOpen(false)}>
            Portfolio
          </NavbarLink>
          <NavbarLink href="#kontakt" onClick={() => setMenuOpen(false)}>
            Kontakt
          </NavbarLink>
        </NavbarLeft>
      </NavbarMenu>
    </NavbarWrapper>
  );
}
