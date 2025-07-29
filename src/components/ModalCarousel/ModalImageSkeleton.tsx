import React from 'react';
import styled, { keyframes } from 'styled-components';

const shimmer = keyframes`
  0% {
    background-position: -800px 0;
  }
  100% {
    background-position: 800px 0;
  }
`;

const Skeleton = styled.div`
  width: 100vw;
  max-width: 800px;
  aspect-ratio: 4/3;
  border-radius: 8px;
  margin: 0 auto 1rem auto;
  background: #eee;
  background-image: linear-gradient(90deg, #eee 0px, #f3e5f5 40px, #eee 80px);
  background-size: 800px 100%;
  animation: ${shimmer} 1.2s infinite linear;

  @media (min-width: 900px) {
    width: 800px;
    max-width: 800px;
  }
`;

export default function ModalImageSkeleton() {
  return <Skeleton />;
}
