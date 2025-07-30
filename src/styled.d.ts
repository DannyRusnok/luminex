import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
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
  }
}
