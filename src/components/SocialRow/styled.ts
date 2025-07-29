import { styled } from 'styled-components';

export const SocialRowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;
`;

export const SocialIcon = styled.img`
  width: 2rem;
  height: 2rem;

  @media (min-width: 600px) {
    width: 3rem;
    height: 3rem;
  }
`;
