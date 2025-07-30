import React from 'react';
import styled, { keyframes } from 'styled-components';
import { luminexTheme } from '../../theme';

const shimmer = keyframes`
  0% {
    background-position: -800px 0;
  }
  100% {
    background-position: 800px 0;
  }
`;

const Skeleton = styled.div`
  width: 100%;
  max-width: 800px;
  aspect-ratio: 4/3;
  border-radius: 8px;
  margin: 0 auto 1rem auto;
  background: ${luminexTheme.colors.skeleton};
  background-image: linear-gradient(
    90deg,
    ${luminexTheme.colors.skeleton} 0px,
    ${luminexTheme.colors.skeletonHighlight} 40px,
    ${luminexTheme.colors.skeleton} 80px
  );
  background-size: 800px 100%;
  animation: ${shimmer} 1.2s infinite linear;
`;

export default function ImageSkeleton() {
  return <Skeleton />;
}
