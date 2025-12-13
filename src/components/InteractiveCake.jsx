// src/components/InteractiveCake.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

// Helper to darken a color slightly for 3D effect (very basic implementation)
// Ideally we'd use a color library, but for a config file, we can just rely on the user providing a main color
// and we assume the gradient logic here uses the config values.

export default function InteractiveCake() {
  const { scrollYProgress } = useScroll();
  const { cakeTheme } = siteConfig.theme;

  // Scroll mapping
  const plateOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const baseOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const midOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const topOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const frostingOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const toppingOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const flagOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  const plateY = useTransform(scrollYProgress, [0, 0.1], [100, 0]);
  const baseY = useTransform(scrollYProgress, [0.1, 0.25], [-100, 0]);
  const midY = useTransform(scrollYProgress, [0.25, 0.4], [-100, 0]);
  const topY = useTransform(scrollYProgress, [0.4, 0.55], [-100, 0]);
  const frostingY = useTransform(scrollYProgress, [0.55, 0.7], [-50, 0]);
  const toppingY = useTransform(scrollYProgress, [0.7, 0.85], [-50, 0]);
  const flagY = useTransform(scrollYProgress, [0.85, 0.95], [-50, 0]);

  const handleCakeClick = () => {
    window.open(`https://wa.me/${siteConfig.brand.whatsappNumber}`, '_blank');
  };

  return (
    // CHANGED: z-index 30 to sit above content, bottom-0 right-0 for mobile positioning
    // Added pointer-events-none to the container so it doesn't block scrolling/clicks on the left side
    <div className="fixed inset-0 pointer-events-none z-30 flex items-end justify-center md:justify-end md:items-end pb-8 md:pb-12 md:pr-12">
        {/* Defs for gradients using Config Colors */}
        <svg width="0" height="0">
            <defs>
                <linearGradient id="cakeGradientBase" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="cakeGradientMid" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: cakeTheme.topColor, stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                </linearGradient>
                 <linearGradient id="cakeGradientTop" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                    <stop offset="50%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                </linearGradient>
                <linearGradient id="frostingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{stopColor: cakeTheme.frostingColor, stopOpacity: 1}} />
                    <stop offset="100%" style={{stopColor: cakeTheme.frostingShadow, stopOpacity: 1}} />
                </linearGradient>
            </defs>
        </svg>

      <div className="relative w-64 h-64 md:w-80 md:h-80 pointer-events-auto cursor-pointer transform md:scale-90 lg:scale-100 origin-bottom-right" onClick={handleCakeClick}>

        {/* Plate */}
        <motion.div
            style={{ opacity: plateOpacity, y: plateY }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-6 bg-white rounded-[50%] shadow-xl border-b-4 border-gray-100 md:w-80"
        />

        {/* Base Layer */}
        <motion.div
            style={{ opacity: baseOpacity, y: baseY }}
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-56 h-20 md:w-68 md:h-24"
        >
             <svg viewBox="0 0 100 40" className="w-full h-full drop-shadow-lg" preserveAspectRatio="none">
                 {/* 3D Side */}
                <path d="M5,10 L5,30 C5,35.5 25.1,40 50,40 C74.9,40 95,35.5 95,30 L95,10" fill="url(#cakeGradientBase)" />
                 {/* Top Surface */}
                <ellipse cx="50" cy="10" rx="45" ry="5" fill={cakeTheme.midColor} />
            </svg>
        </motion.div>

        {/* Mid Layer */}
        <motion.div
            style={{ opacity: midOpacity, y: midY }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 w-44 h-20 md:w-52 md:h-24"
        >
             <svg viewBox="0 0 100 40" className="w-full h-full drop-shadow-lg" preserveAspectRatio="none">
                 {/* 3D Side */}
                <path d="M5,10 L5,30 C5,35.5 25.1,40 50,40 C74.9,40 95,35.5 95,30 L95,10" fill="url(#cakeGradientMid)" />
                 {/* Top Surface */}
                <ellipse cx="50" cy="10" rx="45" ry="5" fill={cakeTheme.topColor} />
            </svg>
        </motion.div>

        {/* Top Layer */}
        <motion.div
            style={{ opacity: topOpacity, y: topY }}
            className="absolute bottom-40 left-1/2 -translate-x-1/2 w-32 h-20 md:w-40 md:h-24"
        >
             <svg viewBox="0 0 100 40" className="w-full h-full drop-shadow-lg" preserveAspectRatio="none">
                 {/* 3D Side */}
                <path d="M5,10 L5,30 C5,35.5 25.1,40 50,40 C74.9,40 95,35.5 95,30 L95,10" fill="url(#cakeGradientTop)" />
                 {/* Top Surface */}
                <ellipse cx="50" cy="10" rx="45" ry="5" fill={cakeTheme.midColor} />
            </svg>
        </motion.div>

        {/* Frosting Drips */}
        <motion.div
            style={{ opacity: frostingOpacity, y: frostingY }}
            className="absolute bottom-[14rem] left-1/2 -translate-x-1/2 w-34 md:w-42 z-20"
        >
            <svg viewBox="0 0 100 25" className="w-full drop-shadow-md">
                <path d="M0,5 C0,5 10,15 20,5 C20,5 30,-5 40,5 C40,5 50,20 60,5 C60,5 70,10 80,5 C80,5 90,0 100,5 L100,0 L0,0 Z" fill="url(#frostingGradient)" />
            </svg>
        </motion.div>

         {/* Toppings (Elegant Macarons/Berries) */}
         <motion.div
            style={{ opacity: toppingOpacity, y: toppingY }}
            className="absolute bottom-[14.5rem] left-1/2 -translate-x-1/2 flex gap-1 z-20"
        >
            <div className="w-5 h-5 rounded-full bg-red-800 shadow-sm border border-red-900/20"></div>
            <div className="w-6 h-6 rounded-full bg-amber-700 shadow-sm -mt-2 border border-white/10"></div>
            <div className="w-5 h-5 rounded-full bg-red-800 shadow-sm border border-red-900/20"></div>
        </motion.div>

        {/* Flag */}
        <motion.div
            style={{ opacity: flagOpacity, y: flagY }}
            className="absolute bottom-[16rem] left-1/2 ml-2 w-0.5 h-16 bg-gray-400 z-10"
        >
            <div className="absolute top-0 left-0 bg-white/90 backdrop-blur text-foreground font-heading text-xs font-bold px-3 py-1 rounded shadow-lg transform -translate-y-1/2 origin-left border border-gray-200 whitespace-nowrap">
                {siteConfig.brand.name}
            </div>
        </motion.div>

        {/* Call to Action Pulse */}
        <motion.div
            style={{ opacity: flagOpacity }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2"
        >
             <button className="bg-primary text-white text-xs font-bold uppercase tracking-widest px-6 py-2 rounded-full shadow-lg animate-bounce hover:bg-white hover:text-primary transition-colors">
                Order Now
             </button>
        </motion.div>

      </div>
    </div>
  );
}
