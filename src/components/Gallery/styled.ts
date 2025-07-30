import styled from 'styled-components';

export const PortfolioHeading = styled.h2`
  max-width: 1200px;
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

  @media (min-width: 900px) {
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

  @media (min-width: 900px) {
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
