import styled from 'styled-components';

export const Button = styled.button<{ $visible: boolean }>`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: none;
  background-color: #9c27b0;
  color: white;
  cursor: pointer;
  display: ${({ $visible }) => ($visible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
