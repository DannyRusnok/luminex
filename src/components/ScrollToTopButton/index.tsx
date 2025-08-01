import React, { useEffect, useState } from 'react';
import { Button } from './styled';
import { ArrowUpIcon } from '../ArrowUpIcon';

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const noModal = !document.body.classList.contains('modal-open');
      setVisible(window.scrollY > 100 && noModal);
    };

    const observer = new MutationObserver(handleScroll);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    window.addEventListener('scroll', handleScroll);
    // set initial state
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Button
      onClick={scrollToTop}
      $visible={visible}
      aria-label="scroll to top"
      className="scroll-to-top"
    >
      <ArrowUpIcon color="white" />
    </Button>
  );
}
