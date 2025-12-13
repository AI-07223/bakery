// src/components/Hero.jsx
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { motion } from 'framer-motion';

export default function Hero() {
  const { title, subtitle, ctaText, backgroundImage } = siteConfig.content.hero;

  return (
    <div className="relative h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Parallax-like fixed feel via styling */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0 scale-105"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Modern Gradient Overlay: darker at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60"></div>
      </div>

      <div className="relative z-10 px-6 max-w-5xl mx-auto text-white">
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
        >
            <h1 className="text-6xl md:text-8xl font-bold font-heading mb-6 drop-shadow-2xl tracking-tight leading-tight">
            {title}
            </h1>
        </motion.div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
            <p className="text-lg md:text-2xl mb-10 font-light tracking-wide opacity-90 max-w-2xl mx-auto">
            {subtitle}
            </p>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-white text-black hover:bg-primary hover:text-white font-body text-sm uppercase tracking-[0.2em] font-bold py-4 px-10 rounded-full shadow-xl transition-all duration-300 transform hover:-translate-y-1"
        >
          {ctaText}
        </motion.button>
      </div>

      {/* Scroll Indicator - Minimal Line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white to-transparent"></div>
      </motion.div>
    </div>
  );
}
