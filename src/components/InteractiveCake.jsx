// src/components/InteractiveCake.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function InteractiveCake() {
  const { scrollYProgress } = useScroll();
  const { cakeTheme } = siteConfig.theme;

  // Refined Scroll Mapping for a smoother build
  // 0.0 - 0.2: Plate slides in
  // 0.2 - 0.8: Layers build up
  // 0.8 - 0.9: Toppings/Frosting
  // 0.9 - 1.0: Branding Topper & CTA

  const plateOpacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const plateY = useTransform(scrollYProgress, [0, 0.15], [100, 0]);

  const baseOpacity = useTransform(scrollYProgress, [0.15, 0.3], [0, 1]);
  const baseY = useTransform(scrollYProgress, [0.15, 0.3], [-100, 0]);

  const midOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1]);
  const midY = useTransform(scrollYProgress, [0.3, 0.5], [-100, 0]);

  const topOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const topY = useTransform(scrollYProgress, [0.5, 0.7], [-100, 0]);

  const frostingOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const frostingY = useTransform(scrollYProgress, [0.7, 0.85], [-50, 0]);

  // Branding Topper - appears last as the "Crown"
  const topperOpacity = useTransform(scrollYProgress, [0.85, 0.98], [0, 1]);
  const topperScale = useTransform(scrollYProgress, [0.85, 0.98], [0.5, 1]);
  const topperY = useTransform(scrollYProgress, [0.85, 0.98], [20, 0]);

  const handleCakeClick = () => {
    window.open(`https://wa.me/${siteConfig.brand.whatsappNumber}`, '_blank');
  };

  return (
    // Fixed container, Centered horizontally.
    // Z-index 30 to stay above content.
    // Pointer events none on wrapper to allow clicking through to content on the sides.
    <div className="fixed inset-0 pointer-events-none z-30 flex items-end justify-center pb-16">

        {/* SVG Defs for Gradients */}
        <svg width="0" height="0">
            <defs>
                <linearGradient id="cakeGradientBase" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                    <stop offset="30%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                    <stop offset="60%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                </linearGradient>
                <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="4"/>
                    <feOffset dx="0" dy="4" result="offsetblur"/>
                    <feComponentTransfer>
                        <feFuncA type="linear" slope="0.2"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
        </svg>

      {/* The Cake Container - Pointer events auto to allow clicking the cake itself */}
      <div className="relative w-72 h-72 md:w-96 md:h-96 pointer-events-auto cursor-pointer" onClick={handleCakeClick}>

        {/* Plate - Centered */}
        <motion.div
            style={{ opacity: plateOpacity, y: plateY }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-72 h-6 bg-white rounded-[50%] shadow-[0_10px_20px_rgba(0,0,0,0.1)] border-b-4 border-gray-100 md:w-96"
        />

        {/* Base Layer */}
        <motion.div
            style={{ opacity: baseOpacity, y: baseY }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 w-64 h-24 md:w-80 md:h-28"
        >
             <svg viewBox="0 0 100 40" className="w-full h-full filter drop-shadow-lg" preserveAspectRatio="none">
                <path d="M5,10 L5,30 C5,35.5 25.1,40 50,40 C74.9,40 95,35.5 95,30 L95,10" fill="url(#cakeGradientBase)" />
                <ellipse cx="50" cy="10" rx="45" ry="5" fill={cakeTheme.midColor} />
            </svg>
        </motion.div>

        {/* Mid Layer */}
        <motion.div
            style={{ opacity: midOpacity, y: midY }}
            className="absolute bottom-28 left-1/2 -translate-x-1/2 w-48 h-20 md:w-60 md:h-24"
        >
             <svg viewBox="0 0 100 40" className="w-full h-full filter drop-shadow-md" preserveAspectRatio="none">
                <path d="M5,10 L5,30 C5,35.5 25.1,40 50,40 C74.9,40 95,35.5 95,30 L95,10" fill="url(#cakeGradientBase)" />
                <ellipse cx="50" cy="10" rx="45" ry="5" fill={cakeTheme.topColor} />
            </svg>
        </motion.div>

        {/* Top Layer */}
        <motion.div
            style={{ opacity: topOpacity, y: topY }}
            className="absolute bottom-44 left-1/2 -translate-x-1/2 w-36 h-16 md:w-44 md:h-20"
        >
             <svg viewBox="0 0 100 40" className="w-full h-full filter drop-shadow-sm" preserveAspectRatio="none">
                <path d="M5,10 L5,30 C5,35.5 25.1,40 50,40 C74.9,40 95,35.5 95,30 L95,10" fill="url(#cakeGradientBase)" />
                <ellipse cx="50" cy="10" rx="45" ry="5" fill={cakeTheme.midColor} />
            </svg>
        </motion.div>

        {/* Frosting Drips */}
        <motion.div
            style={{ opacity: frostingOpacity, y: frostingY }}
            className="absolute bottom-[14.5rem] left-1/2 -translate-x-1/2 w-38 md:w-46 z-20"
        >
            <svg viewBox="0 0 100 25" className="w-full filter drop-shadow-md" style={{ fill: cakeTheme.frostingColor }}>
                <path d="M0,5 C0,5 10,15 20,5 C20,5 30,-5 40,5 C40,5 50,20 60,5 C60,5 70,10 80,5 C80,5 90,0 100,5 L100,0 L0,0 Z" />
            </svg>
        </motion.div>

         {/* Toppings (Berries) */}
         <motion.div
            style={{ opacity: frostingOpacity, y: frostingY }}
            className="absolute bottom-[15rem] left-1/2 -translate-x-1/2 flex gap-1 z-20"
        >
            <div className="w-4 h-4 rounded-full bg-red-800 shadow-sm"></div>
            <div className="w-5 h-5 rounded-full bg-red-900 shadow-sm -mt-1"></div>
            <div className="w-4 h-4 rounded-full bg-red-800 shadow-sm"></div>
        </motion.div>

        {/* BRANDING TOPPER - The "Grand Finale" */}
        <motion.div
            style={{ opacity: topperOpacity, scale: topperScale, y: topperY }}
            className="absolute bottom-[17rem] left-1/2 -translate-x-1/2 z-30"
        >
            <div className="relative">
                {/* Gold stick */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-1 h-12 bg-yellow-600/50"></div>

                {/* The "Sign" */}
                <div className="bg-white/95 backdrop-blur-sm border border-primary/30 px-6 py-3 rounded-xl shadow-2xl flex flex-col items-center">
                    <span className="font-heading font-bold text-xl md:text-2xl text-primary whitespace-nowrap tracking-tight">
                        {siteConfig.brand.name}
                    </span>
                    <span className="text-[0.6rem] uppercase tracking-[0.2em] text-gray-500 mt-1">Est. 2010</span>
                </div>
            </div>
        </motion.div>

        {/* Call to Action Button - Below the plate */}
        <motion.div
            style={{ opacity: topperOpacity }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full text-center"
        >
             <button className="bg-primary hover:bg-yellow-600 text-white font-heading font-bold uppercase tracking-widest text-sm px-8 py-3 rounded-full shadow-lg transition-colors duration-300">
                Tap to Order
             </button>
        </motion.div>

      </div>
    </div>
  );
}
