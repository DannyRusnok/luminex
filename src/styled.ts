import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  body.modal-open {
    overflow: hidden;
    touch-action: none;
  }

  body.modal-open .scroll-to-top {
    display: none !important;
  }
`;

export const Layout = styled.div``;
