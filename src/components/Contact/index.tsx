import React from 'react';
import {
  ContactSection,
  ContactTitle,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
  ContactForm,
  SocialRowWrapper,
} from './styled';
import { SocialRow } from '../SocialRow';

export default function Contact() {
  return (
    <ContactSection id="kontakt">
      <ContactForm>
        <ContactTitle>CONTACT</ContactTitle>
        <form action="mailto:Daniel.rusnok@gmail.com" method="post" encType="text/plain">
          <FormGroup>
            <Input type="text" id="name" name="name" required placeholder="Name" />
          </FormGroup>
          <FormGroup>
            <Input type="email" id="email" name="email" required placeholder="Email" />
          </FormGroup>
          <FormGroup>
            <Textarea id="message" name="message" required placeholder="Message" />
          </FormGroup>
          <SubmitButton type="submit">ODESLAT</SubmitButton>
        </form>
      </ContactForm>
      <SocialRowWrapper>
        <SocialRow />
      </SocialRowWrapper>
    </ContactSection>
  );
}
