import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const StyledHeroSection = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3e5f5;
  border-bottom: 1px solid #9c27b0;
`;

export const HeroWrapper = styled.div`
  position: relative;
  width: 100vw;
  margin: 0;
  height: 500px;
  overflow: hidden;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  box-shadow: 0 4px 32px rgba(60, 0, 60, 0.1);

  @media (min-width: 900px) {
    height: 656px;
    align-items: center;
    justify-content: center;
  }
`;

export const HeroImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: 50% 40%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
`;

export const HeroOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(60, 0, 60, 0.45) 0%, ${luminexTheme.colors.white}1A 100%);
  z-index: 2;
`;

export const HeroContent = styled.div`
  position: relative;
  z-index: 3;
  color: #fff;
  text-align: left;
  padding: 32px 40px;
  @media (max-width: 600px) {
    padding: 16px 12px;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 12px 0;
  letter-spacing: 1px;
  text-shadow: 0 2px 12px rgba(60, 0, 60, 0.18);
`;

export const HeroSubtitle = styled.p`
  font-size: 1.3rem;
  font-weight: 400;
  margin: 0;
  text-shadow: 0 2px 8px rgba(60, 0, 60, 0.12);
  font-family: 'Pacifico', cursive;
`;
