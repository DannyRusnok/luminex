import React, { useState, useEffect, useRef } from 'react';
import ModalImageSkeleton from './ModalImageSkeleton';
import { CloseIcon } from '../CloseIcon';
import { luminexTheme } from '../../theme';
import {
  ModalOverlay,
  ModalBox,
  ModalImage,
  CloseButton,
  Carousel,
  NavButton,
  Caption,
} from './styled';

interface ImageObj {
  url: string;
  description?: string;
}
interface Props {
  images: ImageObj[];
  startIndex: number;
  onClose: () => void;
}

export default function ModalCarousel({ images, startIndex, onClose }: Props) {
  const [current, setCurrent] = useState<number>(startIndex);
  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));
  const startXRef = useRef<number>(0);
  const startYRef = useRef<number>(0);

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
    startYRef.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startXRef.current - endX;
    const diffY = startYRef.current - endY;

    if (diffY > 50 && Math.abs(diffY) > Math.abs(diffX)) {
      onClose();
      return;
    }

    if (diffX > 50) {
      next();
    } else if (diffX < -50) {
      prev();
    }
  };

  const handleImgLoad = (idx: number) => {
    setLoaded((prev) => prev.map((v, i) => (i === idx ? true : v)));
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseButton onClick={onClose} aria-label="close">
          <CloseIcon color={luminexTheme.colors.primary} />
        </CloseButton>
        <Carousel onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
          <NavButton onClick={prev} aria-label="previous">
            &lt;
          </NavButton>
          {!loaded[current] && <ModalImageSkeleton />}
          <ModalImage
            src={images[current].url}
            alt={images[current].description || `Gallery pic ${current + 1}`}
            style={
              !loaded[current]
                ? {
                    opacity: 0,
                    position: 'absolute',
                    pointerEvents: 'none',
                    width: 1,
                    height: 1,
                  }
                : { opacity: 1, position: 'static' }
            }
            onLoad={() => handleImgLoad(current)}
          />
          <NavButton onClick={next} aria-label="next">
            &gt;
          </NavButton>
        </Carousel>
        <Caption>{images[current].description}</Caption>
      </ModalBox>
    </ModalOverlay>
  );
}
