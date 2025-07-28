import React, { useState } from 'react';
import './Gallery.css';

// Simple component that renders a gallery of images.
export default function Gallery() {
  const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1025/300/200',
    'https://picsum.photos/id/1035/300/200'
  ];

  const [states, setStates] = useState(
    images.map(() => ({ flipped: false, full: false }))
  );

  const handleClick = (index, e) => {
    if (e.detail === 2) {
      setStates(prev =>
        prev.map((s, i) =>
          i === index ? { ...s, full: !s.full } : s
        )
      );
    } else {
      setStates(prev =>
        prev.map((s, i) =>
          i === index ? { ...s, flipped: !s.flipped } : s
        )
      );
    }
  };

  return (
    <div id="gallery" className="gallery">
      {images.map((src, index) => {
        const { flipped, full } = states[index];
        return (
          <div
            className={`gallery-item ${full ? 'full' : ''}`}
            key={index}
            onClick={e => handleClick(index, e)}
          >
            <h3>Foto {index + 1}</h3>
            <div className={`flip-card ${flipped ? 'flipped' : ''}`}>
              <img className="front" src={src} alt={`Gallery pic ${index + 1}`} />
              <div className="back">
                <p>Popis obrázku {index + 1}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
