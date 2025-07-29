import styled from 'styled-components';

export const ModalOverlay = styled.div`
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
`;

export const ModalBox = styled.div`
  position: relative;
  background: #fff;
  padding: 0;
  width: 100vw;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow-y: auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 900px) {
    width: 900px;
    height: auto;
    max-width: 900px;
    max-height: 90vh;
    border-radius: 16px;
    padding: 32px 0 32px 0;
    box-sizing: border-box;
  }
`;

export const ModalImage = styled.img`
  width: 100vw;
  max-width: 800px;
  height: auto;
  max-height: 70vh;
  object-fit: contain;
  display: block;
  margin: 0 auto;

  @media (min-width: 900px) {
    width: 800px;
    max-width: 800px;
    max-height: 70vh;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  padding: 0 10px;
`;

export const Caption = styled.p`
  margin-top: 10px;
`;
