import { DefaultTheme } from 'styled-components';

export type LuminexTheme = DefaultTheme & {
  colors: {
    primary: string;
    primaryLight: string;
    background: string;
    white: string;
    black: string;
    text: string;
    skeleton: string;
    skeletonHighlight: string;
    border: string;
  };
  breakpoints: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
};

export const luminexTheme: LuminexTheme = {
  colors: {
    primary: '#9c27b0',
    primaryLight: '#f3e5f5',
    background: '#fafafa',
    white: '#fff',
    black: '#000',
    text: '#222',
    skeleton: '#eee',
    skeletonHighlight: '#f3e5f5',
    border: '#9c27b0',
  },
  breakpoints: {
    mobile: '500px',
    tablet: '900px',
    desktop: '1200px',
  },
};
