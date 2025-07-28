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
        <div className="gallery-item" key={index}>
          <h3>Foto {index + 1}</h3>
          <img src={src} alt={`Gallery pic ${index + 1}`} />
        </div>
      ))}
    </div>
  );
}
