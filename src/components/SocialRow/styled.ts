import { styled } from "styled-components";

export const SocialRowContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 20px;

  @media (min-width: 600px) {
    display: flex;
    
  }
`;

export const SocialIcon = styled.img`
  width: 32px;
  height: 32px;
`;