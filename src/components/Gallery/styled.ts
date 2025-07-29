import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const GalleryItem = styled.div`
  text-align: center;
  perspective: 1000px;
  position: relative;
  width: auto;
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const FlipCard = styled.div<{flipped: boolean}>`
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  ${({ flipped }) => flipped && 'transform: rotateY(180deg);'}
`;

export const CardFront = styled.img`
  position: relative;
  display: block;
  width: 100%;
  max-width: 150px;
  height: auto;
  object-fit: cover;
  border-radius: 4px;
  backface-visibility: hidden;
  @media (max-width: 600px) {
    max-width: 100%;
  }
  @media (min-width: 600px) {
    width: 150px;
    height: 100px;
  }
`;

export const CardBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3e5f5;
  border-radius: 4px;
  transform: rotateY(180deg);
  backface-visibility: hidden;
`;
