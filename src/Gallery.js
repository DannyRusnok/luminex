import React, { useState } from 'react';
import './Gallery.css';
import ModalCarousel from './ModalCarousel.js';

// Simple component that renders a gallery of images.
export default function Gallery() {
  const images = [
    'https://picsum.photos/id/1015/300/200',
    'https://picsum.photos/id/1016/300/200',
    'https://picsum.photos/id/1025/300/200',
    'https://picsum.photos/id/1035/300/200'
  ];

  const [flippedStates, setFlippedStates] = useState(
    images.map(() => false)
  );
  const [modalIndex, setModalIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const handleClick = (index, e) => {
    if (e.detail === 2) {
      setModalIndex(index);
      setModalOpen(true);
    } else {
      setFlippedStates((prev) =>
        prev.map((f, i) => (i === index ? !f : f))
      );
    }
  };

  return (
    <>
      <div id="gallery" className="gallery">
        {images.map((src, index) => {
          const flipped = flippedStates[index];
          return (
            <div
              className="gallery-item"
              key={index}
              onClick={(e) => handleClick(index, e)}
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
