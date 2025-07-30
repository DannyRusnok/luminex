import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const StyledGalleryImage = styled.img<{ $loaded: boolean }>`
  width: 100%;
  max-width: 800px;
  height: auto;
  display: block;
  margin: 0 auto;
  transition: opacity 0.3s;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  position: ${({ $loaded }) => ($loaded ? 'static' : 'absolute')};
  pointer-events: ${({ $loaded }) => ($loaded ? 'auto' : 'none')};
  background: ${luminexTheme.colors.skeleton};
  ${({ $loaded }) =>
    !$loaded &&
    `
      width: 1px;
      height: 1px;
    `}
`;
