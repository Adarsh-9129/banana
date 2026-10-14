'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Slide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

const HeroSlider = () => {
  const slides: Slide[] = [
    {
      id: 1,
      image: 'https://img.magnific.com/premium-photo/exquisite-photography-portrays-majestic-beauty-banana-garden_1096563-1147.jpg',
      title: '🍌 Banana Plant Elegance',
      subtitle: 'Experience the serene beauty of tropical greenery',
    },
    {
      id: 2,
      image: 'https://img.magnific.com/premium-photo/tropical-plants-pot-minimalist-background_863013-203765.jpg',
      title: '🌿 Indoor Plant Paradise',
      subtitle: 'Transform your space with lush green plants',
    },
    {
      id: 3,
      image: 'https://img.magnific.com/premium-photo/quotexotic-flower-paradise-lush-botanical-gardenquot_1168612-155559.jpg',
      title: '🌱 Tropical Garden Vibes',
      subtitle: 'Bring nature home with premium plant varieties',
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-slide every 5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative mt-10 flex justify-center px-4">
      <div
        className="relative w-full max-w-5xl h-[420px] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Slides */}
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === current && (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                {/* Image */}
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              </motion.div>
            )
          ))}
        </AnimatePresence>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="absolute bottom-0 left-0 right-0 z-20 p-8 md:p-12 text-white"
        >
          <p className="text-sm uppercase tracking-widest text-emerald-300 mb-2">
            Premium Botanical Collection
          </p>
          <h2 className="text-3xl md:text-5xl font-playfair font-bold mb-2 gradient-text">
            {slides[current].title}
          </h2>
          <p className="text-sm md:text-lg text-slate-200 max-w-md mb-6">
            {slides[current].subtitle}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button primary"
          >
            Explore Now →
          </motion.button>
        </motion.div>

        {/* Left Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-emerald-600/70 px-4 py-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition z-30 text-2xl"
        >
          ‹
        </motion.button>

        {/* Right Arrow */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-emerald-600/70 px-4 py-3 rounded-full text-white opacity-0 group-hover:opacity-100 transition z-30 text-2xl"
        >
          ›
        </motion.button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full cursor-pointer transition-all ${
                index === current
                  ? 'bg-white w-8 h-2'
                  : 'bg-white/40 w-2 h-2 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
