import styled, { css, keyframes } from 'styled-components';
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const NavbarWrapperMenuOpenCss = css`
  height: 82px;
  align-items: center;
  opacity: 1;
`;

export const NavbarWrapper = styled.nav<{ $menuOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  background-color: #9c27b0;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
  opacity: 0.9;
  ${(props) => (!props.$menuOpen ? NavbarWrapperMenuOpenCss : '')}
  border-bottom: 1px solid #9c27b0;
`;

export const Burger = styled.button`
  display: flex;
  flex-direction: column;
  border: none;
  border-bottom: 1px solid #9c27b0;
  padding: 0;
  cursor: pointer;
  background-color: white;
  height: 5.125rem;
  min-width: 5.125rem;
  justify-content: center;
  align-items: center;
  color: #9c27b0;
`;

const NavbarOpenCss = css`
  display: flex;
  align-items: flex-start;
`;

export const NavbarMenu = styled.div<{ $menuOpen: boolean }>`
  display: none;
  ${(props) => (props.$menuOpen ? NavbarOpenCss : '')}
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  height: auto;
`;

export const NavbarContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  justify-content: center;
  margin: 5px 0;
  height: 100vh;
`;

export const NavbarLink = styled.a`
  text-decoration: none;
  color: inherit;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  opacity: 0;
  animation: ${fadeIn} 0.7s ease forwards;
`;

export const CloseIconWrapper = styled.div`
  color: white;
  position: absolute;
  right: 0;
  top: 0;
  height: 5.125rem;
  min-width: 5.125rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
