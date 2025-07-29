import React, { useState, useEffect, useRef } from 'react';
import {
  ModalOverlay,
  ModalBox,
  ModalImage,
  CloseButton,
  Carousel,
  NavButton,
  Caption,
} from './styled';

interface Props {
  images: string[];
  startIndex: number;
  onClose: () => void;
}

export default function ModalCarousel({ images, startIndex, onClose }: Props) {
  const [current, setCurrent] = useState<number>(startIndex);
  const startXRef = useRef<number>(0);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const diff = startXRef.current - endX;
    if (diff > 50) {
      next();
    } else if (diff < -50) {
      prev();
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="close">
          &times;
        </CloseButton>
        <Carousel onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <NavButton onClick={prev} aria-label="previous">
            &lt;
          </NavButton>
          <ModalImage src={images[current]} alt={`Gallery pic ${current + 1}`} />
          <NavButton onClick={next} aria-label="next">
            &gt;
          </NavButton>
        </Carousel>
        <Caption>Popis obrázku {current + 1}</Caption>
      </ModalBox>
    </ModalOverlay>
  );
}
