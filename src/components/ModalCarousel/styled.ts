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
  padding: 20px;
  max-width: 90%;
  max-height: 100vh;
  overflow-y: auto;
  text-align: center;
`;

export const ModalImage = styled.img`
  max-width: 80vw;
  max-height: 60vh;
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
