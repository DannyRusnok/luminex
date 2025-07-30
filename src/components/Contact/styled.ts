import styled from 'styled-components';
import { luminexTheme } from '../../theme';

export const ContactSection = styled.section`
  margin: 40px auto 0;
  padding: 20px;
  border: 1px solid ${luminexTheme.colors.primary};
  border-radius: 4px;
  background-color: ${luminexTheme.colors.primaryLight};

  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ContactTitle = styled.h2`
  margin-bottom: 20px;
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  text-align: left;

  @media (max-width: 600px) {
    text-align: center;
    max-width: unset;
  }
`;

export const Label = styled.label`
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #9c27b0;
  border-radius: 4px;
  padding: 12px;
  font-size: 1.1rem;
`;

export const Textarea = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  border: 1px solid #9c27b0;
  border-radius: 4px;
  padding: 12px;
  font-size: 1.1rem;
  height: 100px;
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  border: none;
  background-color: #9c27b0;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  font-weight: bold;
  height: 3rem;
  width: 100%;
  @media (min-width: 600px) {
    width: 50%;
    align-self: center;
  }
`;

export const ContactEmail = styled.div`
  text-align: center;
  margin-top: 10px;
  font-weight: bold;
`;

export const ContactForm = styled.div`
  @media (min-width: 600px) {
    width: 800px;
    align-self: center;
  }
`;

export const SocialRowWrapper = styled.div`
  @media (min-width: 600px) {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;
