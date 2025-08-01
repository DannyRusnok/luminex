import styled, { keyframes, css } from 'styled-components';
import { luminexTheme } from '../../theme';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const scaleIn = keyframes`
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

const scaleOut = keyframes`
  from { transform: scale(1); opacity: 1; }
  to { transform: scale(0.8); opacity: 0; }
`;

export const ModalOverlay = styled.div<{ closing?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  /* Prevent background scrolling while interacting with the modal */
  touch-action: none;
  animation: ${({ closing }) =>
    closing
      ? css`
          ${fadeOut} 0.3s forwards
        `
      : css`
          ${fadeIn} 0.3s forwards
        `};
`;

export const ModalBox = styled.div<{ closing?: boolean }>`
  position: relative;
  background: #f3e5f5;
  padding: 0;
  width: 100vw;
  height: 100vh;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${({ closing }) =>
    closing
      ? css`
          ${scaleOut} 0.3s forwards
        `
      : css`
          ${scaleIn} 0.3s forwards
        `};

  @media (min-width: ${luminexTheme.breakpoints.tablet}) {
    width: ${luminexTheme.breakpoints.tablet};
    min-width: ${luminexTheme.breakpoints.tablet};
    height: auto;
    min-height: 90vh;
    max-width: ${luminexTheme.breakpoints.tablet};
    max-height: 90vh;
    border-radius: 16px;
    padding: 32px 0 32px 0;
    box-sizing: border-box;
  }
`;

export const ModalImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  cursor: pointer;
  width: 48px;
  height: 48px;
  color: ${luminexTheme.colors.primary};
`;

export const Carousel = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  box-sizing: border-box;
  /* Disable native scrolling to allow custom swipe handling */
  touch-action: none;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 10px;

  @media (max-width: 899px) {
    display: none;
  }
`;

export const Caption = styled.p`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 16px 0 16px 0;
  background: rgba(255, 255, 255, 0.95);
  font-size: 1.1rem;
  text-align: center;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  z-index: 2;
`;
