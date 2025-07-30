import React, { useEffect, useState } from 'react';
import { Button } from './styled';
import { ArrowUpIcon } from '../ArrowUpIcon';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button onClick={scrollToTop} $visible={visible} aria-label="scroll to top">
      <ArrowUpIcon color="white" />
    </Button>
  );
}
