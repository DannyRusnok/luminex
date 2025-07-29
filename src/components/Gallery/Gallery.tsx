import React, { useState, useRef, useEffect } from 'react';
import { GalleryWrapper, GalleryItem } from './styled';
import ImageSkeleton from './ImageSkeleton';
import ModalCarousel from '../ModalCarousel/ModalCarousel';
import GalleryImage from '../GalleryImage/GalleryImage';

// Simple component that renders a gallery of images.
export default function Gallery() {
  const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1025/300/200',
    'https://picsum.photos/id/1035/300/200',
  ];

  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const [loaded, setLoaded] = useState<boolean[]>(images.map(() => false));

  const handleImgLoad = (idx: number) => {
    setLoaded((prev) => prev.map((v, i) => (i === idx ? true : v)));
  };

  return (
    <>
      <GalleryWrapper id="gallery">
        {images.map((src, index) => (
          <GalleryItem key={index} onClick={() => handleClick(index)}>
            <h3>Foto {index + 1}</h3>
            {!loaded[index] && <ImageSkeleton />}
            <GalleryImage
              src={src}
              alt={`Gallery pic ${index + 1}`}
              loaded={loaded[index]}
              onLoad={() => handleImgLoad(index)}
            />
          </GalleryItem>
        ))}
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
