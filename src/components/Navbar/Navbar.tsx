import React, { useState, useEffect } from 'react';
import {
  NavbarWrapper,
  Burger,
  NavbarMenu,
  NavbarContent,
  NavbarLink,
  CloseIconWrapper
} from './styled';
import { HamburgerIcon } from '../HamburgerIcon';
import { Title } from '../Title';
import { CloseIcon } from '../CloseIcon';

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
    <NavbarWrapper $menuOpen={menuOpen}>
      <NavbarMenu $menuOpen={menuOpen}>
        <CloseIconWrapper onClick={toggleMenu} ><CloseIcon  /></CloseIconWrapper>
        <NavbarContent>
          <NavbarLink href="#gallery" onClick={() => setMenuOpen(false)}>
            PORTFOLIO
          </NavbarLink>
          <NavbarLink href="#kontakt" onClick={() => setMenuOpen(false)}>
            KONTAKT
          </NavbarLink>
        </NavbarContent>
      </NavbarMenu>
      {!menuOpen && <Title /> }
      {!menuOpen && (
        <Burger onClick={toggleMenu} aria-label="toggle menu">
          <HamburgerIcon />
        </Burger>
      )}
    </NavbarWrapper>
  );
}
