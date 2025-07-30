import React from 'react';
import {
  HeroWrapper,
  HeroImage,
  HeroOverlay,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  StyledHeroSection,
} from './styled';

const heroImg = require('../../assets/hero.jpg');

export default function HeroSection() {
  return (
    <StyledHeroSection>
      <HeroWrapper>
        <HeroImage src={heroImg} alt="Daniel Rusnok v galerii" />
        <HeroOverlay />
        <HeroContent>
          <HeroTitle>Daniel Rusnok Art</HeroTitle>
          <HeroSubtitle>Maluju a kreslím pro radost</HeroSubtitle>
        </HeroContent>
      </HeroWrapper>
    </StyledHeroSection>
  );
}
