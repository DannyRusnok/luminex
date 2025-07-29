import React from 'react';
import { StyledGalleryTag } from './styled';

interface GalleryTagProps {
  tag: string;
}

export default function GalleryTag({ tag }: GalleryTagProps) {
  return <StyledGalleryTag>#{tag}</StyledGalleryTag>;
}
