import styled, { css } from 'styled-components';

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #9c27b0;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
`;

export const Burger = styled.button`
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  @media (max-width: 600px) {
    display: flex;
  }
`;

const NavbarOpenCss = css`
  display: 'flex';
  flexDirection: 'column';
  alignItems: 'flex-start';
`;

export const NavbarMenu = styled.div<{ menuOpen: boolean }>`
  ${(props) => (props.menuOpen ? NavbarOpenCss : '')}
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 600px) {
    display: none;
    flex-direction: column;
    width: 100%;
    margin-top: 10px;
    height: auto;
  }
`;

export const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    margin: 5px 0;
  }
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: right;
  font-size: 1.2rem;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 100%;
    justify-content: center;
    border-bottom: 2px solid white;
  }
`;
