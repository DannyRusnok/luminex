import React, { useState, useEffect } from 'react';
import './ModalCarousel.css';

export default function ModalCarousel({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const next = () => setCurrent((c) => (c + 1) % images.length);
  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [onClose]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="close">&times;</button>
        <div className="carousel">
          <button className="nav prev" onClick={prev} aria-label="previous">&lt;</button>
          <img src={images[current]} alt={`Gallery pic ${current + 1}`} />
          <button className="nav next" onClick={next} aria-label="next">&gt;</button>
        </div>
        <p className="caption">Popis obrázku {current + 1}</p>
      </div>
    </div>
  );
}
