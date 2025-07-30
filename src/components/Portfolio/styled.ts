import { styled } from 'styled-components';
import { luminexTheme } from '../../theme';

export const PortfolioWrapper = styled.div`
  width: 100%;
  max-width: ${luminexTheme.breakpoints.desktop};
  margin: 0 auto;
  margin: 40px auto 0 auto;
`;

export const PortfolioTitle = styled.h2`
  padding-left: 24px;
  @media (max-width: ${luminexTheme.breakpoints.tablet}) {
    text-align: center;
    padding-left: 0;
  }
`;
