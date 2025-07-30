import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const ExhibitionsSection = styled.section`
  width: 100%;
  max-width: ${luminexTheme.breakpoints.desktop};
  margin: 40px auto 0 auto;
  padding: 0 24px;
  box-sizing: border-box;
`;

export const ExhibitionsTitle = styled.h2`
  padding-left: 24px;
  @media (max-width: ${luminexTheme.breakpoints.tablet}) {
    text-align: center;
    padding-left: 0;
  }
`;

export const ExhibitionsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  margin-top: 24px;

  @media (min-width: ${luminexTheme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ExhibitionCard = styled.div`
  text-align: center;
`;

export const ExhibitionImage = styled.img`
  width: 100%;
  height: auto;
  margin-top: 8px;
`;

export const ExhibitionDate = styled.p`
  font-size: 0.9rem;
  margin: 4px 0 8px;
  color: ${luminexTheme.colors.text};
`;

export const ExhibitionDescription = styled.p`
  margin-top: 8px;
  text-align: left;
`;

export const ExhibitionAddress = styled.p`
  margin-top: 8px;
  font-weight: bold;
`;
