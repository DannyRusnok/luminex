import React, { useState, useEffect } from 'react';
import { GalleryWrapper, GalleryItem, TagsWrapper } from './styled';
import ImageSkeleton from './ImageSkeleton';
import ModalCarousel from '../ModalCarousel/ModalCarousel'; // ModalCarousel nyní očekává images: {url, description}[]
import GalleryImage from '../GalleryImage/GalleryImage';
import GalleryTag from '../GalleryTag/GalleryTag';
import { sanityClient } from '../../sanityClient';

// Simple component that renders a gallery of images.
export default function Gallery() {
  const [images, setImages] = useState<any[]>([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loaded, setLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const query = `*[_type == "imageAsset"]|order(_createdAt desc){
        _id,
        title,
        description,
        tags,
        "url": image.asset->url
      }`;
      const data = await (sanityClient as any).fetch(query);
      setImages(data);
      setLoaded((prev) => {
        // Pokud už máme loaded pro stejný počet obrázků, zachováme je
        if (prev.length === data.length) return prev;
        // Jinak nastavíme vše na false (např. při změně počtu obrázků)
        return data.map(() => false);
      });
    }
    fetchImages();
  }, []);

  const handleClick = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const handleImgLoad = (idx: number) => {
    setLoaded((prev) => prev.map((v, i) => (i === idx ? true : v)));
  };

  return (
    <>
      <GalleryWrapper id="gallery">
        {images.map((img, index) => (
          <GalleryItem key={img._id}>
            <h2>{img.title || `Foto ${index + 1}`}</h2>
            {!loaded[index] && <ImageSkeleton />}
            <div onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
              <GalleryImage
                src={img.url}
                alt={img.description || `Gallery pic ${index + 1}`}
                loaded={loaded[index]}
                onLoad={() => handleImgLoad(index)}
              />
            </div>
            <TagsWrapper>
              {Array.isArray(img.tags) &&
                img.tags
                  .filter((tag: string) => tag && tag.trim() !== '')
                  .map((tag: string) => (
                    <GalleryTag key={tag} tag={tag} />
                  ))}
            </TagsWrapper>
          </GalleryItem>
        ))}
      </GalleryWrapper>
      {modalOpen && images[modalIndex] && (
        <ModalCarousel
          images={images.map((img) => ({ url: img.url, description: img.description }))}
          startIndex={modalIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
