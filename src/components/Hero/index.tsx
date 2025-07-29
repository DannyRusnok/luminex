import * as React from 'react';
import { styled } from 'styled-components';

export const Hero: React.FC = () => {
    return <HeroContainer><StyledHHero className="mobile-title">Daniel Rusnok Portfolio</StyledHHero></HeroContainer>;
}

const StyledHHero = styled.h1`
  margin: 10px 0;
  color: #9c27b0;
  text-align: center;
`;

const HeroContainer = styled.div`
    width: 100%;
    height: fit-content;¨
    text-align: center;
`;