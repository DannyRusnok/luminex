import React from 'react';
import { StyledGalleryImage } from './styled';

interface GalleryImageProps {
  src: string;
  alt: string;
  loaded: boolean;
  onLoad: () => void;
}

export default function GalleryImage({ src, alt, loaded, onLoad }: GalleryImageProps) {
  return <StyledGalleryImage src={src} alt={alt} $loaded={loaded} loading="lazy" onLoad={onLoad} />;
}
