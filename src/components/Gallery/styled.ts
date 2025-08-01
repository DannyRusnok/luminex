import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const PortfolioHeading = styled.h2`
  max-width: ${luminexTheme.breakpoints.desktop};
  margin: 0 auto 24px auto;
  padding-left: 0;
  text-align: left;
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: 1px;
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  max-width: 1200px;
  width: 100%;
  margin: 20px auto 0 auto;

  @media (min-width: ${luminexTheme.breakpoints.tablet}) {
    grid-template-columns: 1fr 1fr;
    gap: 40px 32px;
  }
`;

export const GalleryItem = styled.div`
  text-align: center;
  perspective: 1000px;
  position: relative;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (min-width: ${luminexTheme.breakpoints.tablet}) {
    max-width: 100%;
    margin: 0;
  }
`;

export const TagsWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 12px;
  justify-content: flex-start;
  flex-wrap: wrap;
  font-size: 18px;
  font-weight: 600;
  text-align: left;
`;

export const LikeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 0;
`;

export const NoResultsMessage = styled.p`
  grid-column: 1 / -1;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${luminexTheme.colors.primary};
  margin: 40px 0;
`;
