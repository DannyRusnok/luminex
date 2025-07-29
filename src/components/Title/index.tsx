import * as React from 'react';
import { styled } from 'styled-components';

export const Title: React.FC = () => {
    return <StyledHero>Daniel Rusnok Art</StyledHero>;
}

const StyledHero = styled.h1`
    margin-left: 1rem;
`;
