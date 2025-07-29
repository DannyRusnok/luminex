import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 20px auto 0 auto;
  gap: 20px;
  scroll-margin-top: 82px; /* výška tvého navbaru */
`;

export const GalleryItem = styled.div`
  text-align: center;
  perspective: 1000px;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;
