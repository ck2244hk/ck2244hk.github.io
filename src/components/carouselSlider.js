import React, { useState, useEffect, useRef } from 'react';
import './carouselSlider.css';

const CarouselSlider = ({ slides, interval = 3000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, interval);
    return () => clearInterval(slideInterval.current);
  }, [interval]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="carousel relative overflow-hidden w-full h-64">
      <div className="slides flex transition-transform duration-300" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className="slide w-full h-full flex-shrink-0">
            <img src={slide} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="dots absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-black' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default CarouselSlider;