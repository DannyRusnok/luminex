import React, { useState, useRef, useEffect } from 'react';
import { GalleryWrapper, GalleryItem, TagsWrapper } from './styled';
import ImageSkeleton from './ImageSkeleton';
import ModalCarousel from '../ModalCarousel/ModalCarousel';
import GalleryImage from '../GalleryImage/GalleryImage';
import GalleryTag from '../GalleryTag/GalleryTag';
import styled from 'styled-components';

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
        {images.map((src, index) => {
          // Ukázkové tagy, v reálné aplikaci by byly dynamické
          const tags = index % 2 === 0 ? ['příroda', 'město'] : ['portrét', 'umění'];
          return (
            <GalleryItem key={index}>
              <h2>Foto {index + 1}</h2>
              {!loaded[index] && <ImageSkeleton />}
              <div onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
                <GalleryImage
                  src={src}
                  alt={`Gallery pic ${index + 1}`}
                  loaded={loaded[index]}
                  onLoad={() => handleImgLoad(index)}
                />
              </div>
              <TagsWrapper>
                {tags.map((tag) => (
                  <GalleryTag key={tag} tag={tag} />
                ))}
              </TagsWrapper>
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
