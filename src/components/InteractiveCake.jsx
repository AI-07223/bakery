// src/components/InteractiveCake.jsx
import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function InteractiveCake() {
  const { scrollYProgress } = useScroll();
  const { cakeTheme } = siteConfig.theme;

  // SMOOTH SPRING PHYSICS
  // We wrap the raw scroll progress in a spring to dampen the movement
  // making it feel like it has "weight" and isn't just glued to the scrollbar.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  });

  // --- ANIMATION MAPPING (0.0 to 1.0) ---

  // 1. The Pedestal (Appears first, anchored)
  const standOpacity = useTransform(smoothProgress, [0, 0.15], [0, 1]);
  const standScale = useTransform(smoothProgress, [0, 0.15], [0.8, 1]);

  // 2. Bottom Layer (Settles in)
  const baseOpacity = useTransform(smoothProgress, [0.15, 0.3], [0, 1]);
  const baseY = useTransform(smoothProgress, [0.15, 0.3], [-50, 0]); // Gentle drop
  const baseScale = useTransform(smoothProgress, [0.15, 0.3], [0.9, 1]);

  // 3. Middle Layer
  const midOpacity = useTransform(smoothProgress, [0.3, 0.45], [0, 1]);
  const midY = useTransform(smoothProgress, [0.3, 0.45], [-50, 0]);
  const midScale = useTransform(smoothProgress, [0.3, 0.45], [0.9, 1]);

  // 4. Top Layer
  const topOpacity = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);
  const topY = useTransform(smoothProgress, [0.45, 0.6], [-50, 0]);
  const topScale = useTransform(smoothProgress, [0.45, 0.6], [0.9, 1]);

  // 5. The Frosting Pour (ScaleY from top)
  const frostingOpacity = useTransform(smoothProgress, [0.6, 0.75], [0, 1]);
  const frostingScaleY = useTransform(smoothProgress, [0.6, 0.75], [0, 1]);

  // 6. Toppings (Bounce in)
  const toppingOpacity = useTransform(smoothProgress, [0.75, 0.85], [0, 1]);
  const toppingY = useTransform(smoothProgress, [0.75, 0.85], [-30, 0]);

  // 7. Branding Card (Fade in last)
  const cardOpacity = useTransform(smoothProgress, [0.85, 0.95], [0, 1]);
  const cardY = useTransform(smoothProgress, [0.85, 0.95], [20, 0]);

  const handleCakeClick = () => {
    window.open(`https://wa.me/${siteConfig.brand.whatsappNumber}`, '_blank');
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-30 flex items-end justify-center pb-20">

      {/* SVG DEFINITIONS & FILTERS */}
      <svg width="0" height="0">
        <defs>
            {/* Sponge Texture Gradient */}
            <linearGradient id="spongeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                <stop offset="20%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
                <stop offset="80%" style={{stopColor: cakeTheme.midColor, stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: cakeTheme.baseColor, stopOpacity: 1}} />
            </linearGradient>

            {/* Glossy Frosting Gradient */}
            <linearGradient id="frostingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" style={{stopColor: cakeTheme.frostingColor, stopOpacity: 0.95}} />
                <stop offset="100%" style={{stopColor: cakeTheme.frostingShadow, stopOpacity: 1}} />
            </linearGradient>

            {/* Marble Stand Gradient */}
            <linearGradient id="marbleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#f9fafb', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#e5e7eb', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#d1d5db', stopOpacity: 1}} />
            </linearGradient>

            {/* Gold Accent */}
            <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: '#FCD34D', stopOpacity: 1}} />
                <stop offset="50%" style={{stopColor: '#D97706', stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: '#B45309', stopOpacity: 1}} />
            </linearGradient>

            {/* Soft Drop Shadow for realism */}
            <filter id="softShadow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="6"/>
                <feOffset dx="0" dy="8" result="offsetblur"/>
                <feComponentTransfer>
                    <feFuncA type="linear" slope="0.3"/>
                </feComponentTransfer>
                <feMerge>
                    <feMergeNode/>
                    <feMergeNode in="SourceGraphic"/>
                </feMerge>
            </filter>

            {/* Texture Noise for Sponge */}
            <filter id="spongeTexture">
                <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" result="noise" />
                <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0" in="noise" result="coloredNoise" />
                <feComposite operator="in" in="coloredNoise" in2="SourceGraphic" result="composite" />
                <feBlend mode="multiply" in="composite" in2="SourceGraphic" />
            </filter>
        </defs>
      </svg>

      <div className="relative w-80 h-80 md:w-[28rem] md:h-[28rem] pointer-events-auto cursor-pointer flex flex-col items-center justify-end" onClick={handleCakeClick}>

        {/* 1. THE PEDESTAL STAND */}
        <motion.div
            style={{ opacity: standOpacity, scale: standScale }}
            className="absolute bottom-0 z-0 w-full flex justify-center"
        >
            <svg width="300" height="100" viewBox="0 0 300 100" className="drop-shadow-2xl">
                {/* Base */}
                <path d="M100,90 Q150,100 200,90 L180,50 L120,50 Z" fill="url(#marbleGradient)" />
                {/* Stem */}
                <rect x="140" y="20" width="20" height="40" fill="url(#goldGradient)" />
                {/* Plate Top */}
                <ellipse cx="150" cy="25" rx="140" ry="15" fill="url(#marbleGradient)" stroke="url(#goldGradient)" strokeWidth="2" />
            </svg>
        </motion.div>

        {/* 2. BASE LAYER */}
        <motion.div
            style={{ opacity: baseOpacity, y: baseY, scale: baseScale }}
            className="absolute bottom-[4.5rem] z-10"
        >
            <svg width="240" height="80" viewBox="0 0 240 80" className="filter drop-shadow-lg">
                <path d="M0,20 L0,60 Q120,90 240,60 L240,20" fill="url(#spongeGradient)" filter="url(#spongeTexture)" />
                <ellipse cx="120" cy="20" rx="120" ry="20" fill={cakeTheme.midColor} />
            </svg>
        </motion.div>

        {/* 3. MIDDLE LAYER */}
        <motion.div
             style={{ opacity: midOpacity, y: midY, scale: midScale }}
             className="absolute bottom-[8rem] z-20"
        >
            <svg width="180" height="70" viewBox="0 0 180 70" className="filter drop-shadow-md">
                <path d="M0,15 L0,55 Q90,80 180,55 L180,15" fill="url(#spongeGradient)" filter="url(#spongeTexture)" />
                <ellipse cx="90" cy="15" rx="90" ry="15" fill={cakeTheme.topColor} />
            </svg>
        </motion.div>

        {/* 4. TOP LAYER */}
        <motion.div
             style={{ opacity: topOpacity, y: topY, scale: topScale }}
             className="absolute bottom-[11rem] z-30"
        >
            <svg width="140" height="60" viewBox="0 0 140 60" className="filter drop-shadow-sm">
                <path d="M0,10 L0,50 Q70,70 140,50 L140,10" fill="url(#spongeGradient)" filter="url(#spongeTexture)" />
                <ellipse cx="70" cy="10" rx="70" ry="10" fill={cakeTheme.midColor} />
            </svg>
        </motion.div>

        {/* 5. FROSTING POUR */}
        {/* We use scaleY origin-top to simulate the pour/drip */}
        <motion.div
             style={{ opacity: frostingOpacity, scaleY: frostingScaleY }}
             className="absolute bottom-[11rem] z-40 origin-top"
        >
            <svg width="150" height="80" viewBox="0 0 150 80" className="filter drop-shadow-sm">
                 {/* Drips */}
                <path d="M-5,10 Q70,25 155,10 L155,25 Q140,50 130,25 Q120,55 110,25 Q90,60 75,20 Q60,50 40,20 Q20,60 10,20 Q0,40 -5,10 Z" fill="url(#frostingGradient)" />
                {/* Specular Highlight for Gloss */}
                <path d="M20,20 Q40,30 60,20" stroke="white" strokeWidth="2" strokeOpacity="0.4" fill="none" />
                <path d="M90,20 Q110,35 130,20" stroke="white" strokeWidth="2" strokeOpacity="0.4" fill="none" />
            </svg>
        </motion.div>

        {/* 6. TOPPINGS (Strawberries & Gold Leaf) */}
        <motion.div
             style={{ opacity: toppingOpacity, y: toppingY }}
             className="absolute bottom-[14.5rem] z-50 flex gap-2 items-end"
        >
            {/* Strawberry 1 */}
            <svg width="24" height="30" viewBox="0 0 24 30">
                <path d="M12,30 Q0,15 2,5 Q4,0 12,0 Q20,0 22,5 Q24,15 12,30" fill="#DC2626" />
                <path d="M12,0 L10,5 L14,5 Z" fill="#166534" /> {/* Leaf */}
                <circle cx="8" cy="12" r="0.5" fill="#FEF08A" /> {/* Seeds */}
                <circle cx="16" cy="15" r="0.5" fill="#FEF08A" />
                <circle cx="12" cy="20" r="0.5" fill="#FEF08A" />
            </svg>
             {/* Strawberry 2 (Larger) */}
             <svg width="32" height="40" viewBox="0 0 24 30" className="-mb-1">
                <path d="M12,30 Q0,15 2,5 Q4,0 12,0 Q20,0 22,5 Q24,15 12,30" fill="#B91C1C" />
                <path d="M12,0 L9,6 L15,6 Z" fill="#14532D" />
                <circle cx="10" cy="10" r="0.5" fill="#FEF08A" />
                <circle cx="14" cy="18" r="0.5" fill="#FEF08A" />
            </svg>
             {/* Gold Flake */}
             <div className="w-4 h-4 bg-yellow-400 rotate-45 opacity-80 rounded-sm blur-[1px]"></div>
        </motion.div>

        {/* 7. BRANDING CARD (The Label) */}
        <motion.div
            style={{ opacity: cardOpacity, y: cardY }}
            className="absolute -bottom-12 z-50 bg-white/90 backdrop-blur border border-primary/20 px-8 py-4 rounded-xl shadow-2xl flex flex-col items-center"
        >
            <h3 className="font-heading font-bold text-2xl text-primary">{siteConfig.brand.name}</h3>
            <button className="mt-2 text-[10px] uppercase tracking-widest font-bold border-b border-primary text-foreground hover:text-primary transition-colors">
                Tap to Order
            </button>
        </motion.div>

      </div>
    </div>
  );
}
