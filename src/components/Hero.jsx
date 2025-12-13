// src/components/Hero.jsx
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { motion } from 'framer-motion';

export default function Hero() {
  const { title, subtitle, ctaText, backgroundImage } = siteConfig.content.hero;

  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 px-4 max-w-4xl mx-auto text-white">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold font-heading mb-6 drop-shadow-lg"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl mb-8 font-light drop-shadow-md"
        >
          {subtitle}
        </motion.p>

        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transition-transform hover:scale-105"
        >
          {ctaText}
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80"
      >
        <p className="text-sm uppercase tracking-widest mb-2">Scroll to Build</p>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1 mx-auto">
            <div className="w-1 h-3 bg-white/80 rounded-full"></div>
        </div>
      </motion.div>
    </div>
  );
}
