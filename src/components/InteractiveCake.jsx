// src/components/InteractiveCake.jsx
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteConfig } from '../config/siteConfig';

export default function InteractiveCake() {
  const { scrollYProgress } = useScroll();

  // Scroll mapping for cake layers
  // We want the cake to build from bottom up as we scroll down.

  // 0% scroll = nothing or just plate
  // 100% scroll = full cake with flag

  // The opacity of layers
  const plateOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const baseOpacity = useTransform(scrollYProgress, [0.1, 0.25], [0, 1]);
  const midOpacity = useTransform(scrollYProgress, [0.25, 0.4], [0, 1]);
  const topOpacity = useTransform(scrollYProgress, [0.4, 0.55], [0, 1]);
  const frostingOpacity = useTransform(scrollYProgress, [0.55, 0.7], [0, 1]);
  const toppingOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  const flagOpacity = useTransform(scrollYProgress, [0.85, 0.95], [0, 1]);

  // The Y position (falling into place)
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
    <div className="fixed inset-0 pointer-events-none z-10 flex items-end justify-center pb-8 md:pb-12">
        {/* Container for the cake. Pointer events enabled only on the cake at the end?
            Actually we want the user to be able to click it at the end.
        */}
      <div className="relative w-64 h-64 md:w-80 md:h-80 pointer-events-auto cursor-pointer" onClick={handleCakeClick}>

        {/* Plate */}
        <motion.div style={{ opacity: plateOpacity, y: plateY }} className="absolute bottom-0 left-1/2 -translate-x-1/2 w-60 h-4 bg-gray-200 rounded-[50%] shadow-lg border border-gray-300 md:w-72" />

        {/* Base Layer */}
        <motion.div
            style={{ opacity: baseOpacity, y: baseY }}
            className="absolute bottom-4 left-1/2 -translate-x-1/2 w-52 h-16 rounded-lg border-2 border-amber-900 md:w-64 md:h-20"
            // Using inline styles for dynamic colors could be an option, but Tailwind classes are cleaner for now.
            // Let's use siteConfig colors via CSS vars if possible, but here we hardcode "chocolate-y" colors for the cake
            // as it might not match the theme (e.g. a blue theme shouldn't have a blue cake necessarily, or maybe it should?)
            // We'll stick to realistic cake colors.
        >
            <div className="w-full h-full bg-[#5D4037] rounded-lg relative overflow-hidden">
                <div className="absolute top-0 w-full h-2 bg-[#795548] opacity-50"></div>
            </div>
        </motion.div>

        {/* Mid Layer */}
        <motion.div
            style={{ opacity: midOpacity, y: midY }}
            className="absolute bottom-20 left-1/2 -translate-x-1/2 w-44 h-16 rounded-lg border-2 border-amber-900 md:w-56 md:h-20 md:bottom-24"
        >
             <div className="w-full h-full bg-[#795548] rounded-lg relative overflow-hidden">
                <div className="absolute top-0 w-full h-2 bg-[#8D6E63] opacity-50"></div>
             </div>
        </motion.div>

        {/* Top Layer */}
        <motion.div
            style={{ opacity: topOpacity, y: topY }}
            className="absolute bottom-36 left-1/2 -translate-x-1/2 w-36 h-16 rounded-lg border-2 border-amber-900 md:w-48 md:h-20 md:bottom-44"
        >
            <div className="w-full h-full bg-[#8D6E63] rounded-lg relative overflow-hidden">
                <div className="absolute top-0 w-full h-2 bg-[#A1887F] opacity-50"></div>
            </div>
        </motion.div>

        {/* Frosting Drips */}
        <motion.div
            style={{ opacity: frostingOpacity, y: frostingY }}
            className="absolute bottom-[13rem] left-1/2 -translate-x-1/2 w-38 md:bottom-[16rem] md:w-50 z-20"
        >
            {/* SVG Frosting */}
            <svg viewBox="0 0 100 20" className="w-full fill-[#FFF3E0] drop-shadow-sm">
                <path d="M0,0 L100,0 L100,10 C90,15 85,5 80,10 C75,15 70,5 60,10 C50,15 45,5 40,10 C35,15 30,5 20,10 C10,15 5,5 0,10 Z" />
            </svg>
        </motion.div>

         {/* Toppings (Berries) */}
         <motion.div
            style={{ opacity: toppingOpacity, y: toppingY }}
            className="absolute bottom-[13.5rem] left-1/2 -translate-x-1/2 flex gap-2 z-20 md:bottom-[16.5rem]"
        >
            <div className="w-4 h-4 rounded-full bg-red-600 shadow-sm"></div>
            <div className="w-5 h-5 rounded-full bg-red-700 shadow-sm -mt-2"></div>
            <div className="w-4 h-4 rounded-full bg-red-600 shadow-sm"></div>
        </motion.div>

        {/* Flag */}
        <motion.div
            style={{ opacity: flagOpacity, y: flagY }}
            className="absolute bottom-[15rem] left-1/2 ml-4 w-1 h-16 bg-gray-800 z-10 md:bottom-[18rem]"
        >
            <div className="absolute top-0 left-0 w-24 h-8 bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center rounded-r-md shadow-md transform -translate-y-1/2 origin-left">
                {siteConfig.brand.name}
            </div>
        </motion.div>

        {/* Call to Action Pulse (Only visible at the end) */}
        <motion.div
            style={{ opacity: flagOpacity }}
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-sm font-bold bg-white/80 px-3 py-1 rounded-full shadow-sm text-center whitespace-nowrap"
        >
            Tap to Order!
        </motion.div>

      </div>
    </div>
  );
}
