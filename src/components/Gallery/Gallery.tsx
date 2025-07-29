import React, { useState, useRef, useEffect } from 'react';
import { GalleryWrapper, GalleryItem, FlipCard, CardFront, CardBack } from './styled';
import ImageSkeleton from './ImageSkeleton';
import ModalCarousel from '../ModalCarousel/ModalCarousel';

// Simple component that renders a gallery of images.
export default function Gallery() {
  const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1025/300/200',
    'https://picsum.photos/id/1035/300/200',
  ];

  const [flippedStates, setFlippedStates] = useState<boolean[]>(images.map(() => false));
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const flipTimeouts = useRef<(ReturnType<typeof setTimeout> | null)[]>(images.map(() => null));

  useEffect(() => {
    return () => {
      flipTimeouts.current.forEach((t) => t && clearTimeout(t));
    };
  }, []);

  const FLIP_DELAY = 250;

  const handleClick = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (e.detail === 2) {
      if (flipTimeouts.current[index]) {
        clearTimeout(flipTimeouts.current[index]);
        flipTimeouts.current[index] = null;
      }
      setModalIndex(index);
      setModalOpen(true);
    } else {
      if (flipTimeouts.current[index]) {
        clearTimeout(flipTimeouts.current[index]);
      }
      flipTimeouts.current[index] = setTimeout(() => {
        setFlippedStates((prev) => prev.map((f, i) => (i === index ? !f : f)));
        flipTimeouts.current[index] = null;
      }, FLIP_DELAY);
    }
  };

  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));

  const handleImgLoad = (idx: number) => {
    setLoaded((prev) => prev.map((v, i) => (i === idx ? true : v)));
  };

  return (
    <>
      <GalleryWrapper id="gallery">
        {images.map((src, index) => {
          const flipped = flippedStates[index];
          return (
            <GalleryItem key={index} onClick={(e) => handleClick(index, e)}>
              <h3>Foto {index + 1}</h3>
              <FlipCard $flipped={flipped}>
                {!loaded[index] && <ImageSkeleton />}
                <CardFront
                  src={src}
                  alt={`Gallery pic ${index + 1}`}
                  style={
                    !loaded[index]
                      ? {
                          opacity: 0,
                          position: 'absolute',
                          pointerEvents: 'none',
                          width: 1,
                          height: 1,
                        }
                      : { opacity: 1, position: 'static' }
                  }
                  loading="lazy"
                  onLoad={() => handleImgLoad(index)}
                />
                <CardBack>
                  <p>Popis obrázku {index + 1}</p>
                </CardBack>
              </FlipCard>
            </GalleryItem>
          );
        })}
      </GalleryWrapper>
      {modalOpen && (
        <ModalCarousel
          images={images}
          startIndex={modalIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
