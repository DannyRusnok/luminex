import * as React from 'react';
import { SocialRowContainer, SocialIcon } from './styled';

export const SocialRow: React.FC = () => {
  return (
    <SocialRowContainer>
      <a href="https://facebook.com/daniel.rusnok" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" />
      </a>
      <a href="https://x.com/DanielRusnok" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://cdn-icons-png.flaticon.com/512/5968/5968958.png" alt="X" />
      </a>
      <a href="https://instagram.com/daniel.rusnok.cz/" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png" alt="Instagram" />
      </a>
      <a href="mailto:daniel.rusnok@gmail.com" target="_blank" rel="noopener noreferrer">
        <SocialIcon src="https://cdn-icons-png.flaticon.com/512/732/732200.png" alt="Email" />
      </a>
    </SocialRowContainer>
  );
};
