import styled from 'styled-components';

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 20px auto 0 auto;
  gap: 20px;
`;

export const GalleryItem = styled.div`
  text-align: center;
  perspective: 1000px;
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;
`;

export const FlipCard = styled.div<{ $flipped: boolean }>`
  position: relative;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  ${({ $flipped }) => $flipped && 'transform: rotateY(180deg);'}
`;

export const CardFront = styled.img`
  display: block;
  width: 100%;
  max-width: 800px;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
  margin: 0 auto 1rem auto;
  backface-visibility: hidden;
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
