import React, { useState, useEffect, useMemo, useRef } from 'react';
import { GalleryWrapper, GalleryItem, TagsWrapper, PortfolioHeading, LikeButton } from './styled';
import ImageSkeleton from './ImageSkeleton';
import ModalCarousel from '../ModalCarousel/ModalCarousel'; // ModalCarousel nyní očekává images: {url, description}[]
import GalleryImage from '../GalleryImage/GalleryImage';
import GalleryTag from '../GalleryTag/GalleryTag';
import { HeartIcon } from '../HeartIcon';
import { sanityClient } from '../../sanityClient';

// Simple component that renders a gallery of images.
interface GalleryProps {
  selectedTags: string[];
}

export default function Gallery({ selectedTags }: GalleryProps) {
  const [images, setImages] = useState<any[]>([]);
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [loaded, setLoaded] = useState<Record<string, boolean>>({});
  const [liked, setLiked] = useState<Record<string, boolean>>({});
  const tapTimeout = useRef<NodeJS.Timeout | null>(null);

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
        const map: Record<string, boolean> = {};
        data.forEach((img: any) => {
          map[img._id] = prev[img._id] || false;
        });
        return map;
      });
      setLiked((prev) => {
        const map: Record<string, boolean> = {};
        data.forEach((img: any) => {
          map[img._id] = prev[img._id] || false;
        });
        return map;
      });
    }
    fetchImages();
  }, []);

  const handleClick = (index: number) => {
    setModalIndex(index);
    setModalOpen(true);
  };

  const handleTap = (index: number, id: string) => {
    if (tapTimeout.current) {
      clearTimeout(tapTimeout.current);
      tapTimeout.current = null;
      toggleLike(id);
      return;
    }
    tapTimeout.current = setTimeout(() => {
      handleClick(index);
      tapTimeout.current = null;
    }, 300);
  };

  const handleImgLoad = (id: string) => {
    setLoaded((prev) => ({ ...prev, [id]: true }));
  };

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredImages = useMemo(() => {
    if (!selectedTags.length) return images;
    return images.filter(
      (img) => Array.isArray(img.tags) && selectedTags.every((tag) => img.tags.includes(tag))
    );
  }, [images, selectedTags]);

  return (
    <>
      <GalleryWrapper>
        {filteredImages.map((img, index) => (
          <GalleryItem key={img._id}>
            <h2>{img.title || `Foto ${index + 1}`}</h2>
            {!loaded[img._id] && <ImageSkeleton />}
            <div onClick={() => handleTap(index, img._id)} style={{ cursor: 'pointer' }}>
              <GalleryImage
                src={img.url}
                alt={img.description || `Gallery pic ${index + 1}`}
                loaded={!!loaded[img._id]}
                onLoad={() => handleImgLoad(img._id)}
              />
            </div>
            <LikeButton onClick={() => toggleLike(img._id)} aria-label="like">
              <HeartIcon filled={!!liked[img._id]} color="#e91e63" />
            </LikeButton>
            <TagsWrapper>
              {Array.isArray(img.tags) &&
                img.tags
                  .filter((tag: string) => tag && tag.trim() !== '')
                  .map((tag: string) => <GalleryTag key={tag} tag={tag} />)}
            </TagsWrapper>
          </GalleryItem>
        ))}
      </GalleryWrapper>
      {modalOpen && filteredImages[modalIndex] && (
        <ModalCarousel
          images={filteredImages.map((img) => ({ url: img.url, description: img.description }))}
          startIndex={modalIndex}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
}
