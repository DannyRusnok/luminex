import React from 'react';
import './Gallery.css';

// Simple component that renders a gallery of images.
export default function Gallery() {
  const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1025/300/200',
    'https://picsum.photos/id/1035/300/200'
  ];

  return (
    <div id="gallery" className="gallery">
      {images.map((src, index) => (
        <img key={index} src={src} alt={`Gallery pic ${index + 1}`} />
      ))}
    </div>
  );
}
