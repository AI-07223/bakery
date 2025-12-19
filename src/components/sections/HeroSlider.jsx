import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '../ui/Button';
import { siteConfig } from '../../config/siteConfig';

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = siteConfig.heroBanners;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className="relative h-[60vh] md:h-[80vh] w-full overflow-hidden bg-gray-100">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4">
             <div className="max-w-4xl">
                <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="font-heading text-4xl md:text-7xl font-bold text-white mb-6 drop-shadow-xl"
                >
                    {slides[currentSlide].alt}
                </motion.h2>
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <Button href={slides[currentSlide].link} variant="primary" size="lg">
                        Explore Collection
                    </Button>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-3 z-10">
        {slides.map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentSlide ? 'bg-white w-8' : 'bg-white/50 hover:bg-white'
                }`}
            />
        ))}
      </div>
    </div>
  );
}
