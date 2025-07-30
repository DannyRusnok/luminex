import { DefaultTheme } from 'styled-components';

export type LuminexTheme = DefaultTheme & {
  colors: {
    primary: string; // hlavní fialová
    primaryLight: string; // světlá fialová
    background: string; // pozadí
    white: string;
    black: string;
    text: string;
    skeleton: string;
    skeletonHighlight: string;
    border: string;
  };
};

export const luminexTheme: LuminexTheme = {
  colors: {
    primary: '#9c27b0', // hlavní fialová
    primaryLight: '#f3e5f5', // světlá fialová
    background: '#fafafa', // pozadí
    white: '#fff',
    black: '#000',
    text: '#222',
    skeleton: '#eee',
    skeletonHighlight: '#f3e5f5',
    border: '#9c27b0',
  },
};
