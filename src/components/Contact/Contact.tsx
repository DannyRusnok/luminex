import React from 'react';
import {
  ContactSection,
  ContactTitle,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
  SocialRow,
  SocialIcon,
  ContactEmail
} from './styled';

export default function Contact() {
  return (
    <ContactSection id="kontakt">
      <ContactTitle>Kontakt</ContactTitle>
      <form action="mailto:Daniel.rusnok@gmail.com" method="post" encType="text/plain">
        <FormGroup>
          <Label htmlFor="name">Jméno:</Label>
          <Input type="text" id="name" name="name" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" name="email" required />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="message">Zpráva:</Label>
          <Textarea id="message" name="message" required />
        </FormGroup>
        <SubmitButton type="submit">Odeslat</SubmitButton>
      </form>
      <SocialRow>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon
            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
            alt="Facebook"
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon
            src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
            alt="Twitter"
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <SocialIcon
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
          />
        </a>
      </SocialRow>
      <ContactEmail>
        <a href="mailto:Daniel.rusnok@gmail.com">Daniel.rusnok@gmail.com</a>
      </ContactEmail>
    </ContactSection>
  );
}
