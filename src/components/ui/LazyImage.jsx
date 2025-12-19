import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LazyImage({ src, alt, className = "", ...props }) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
        {/* Placeholder / Blur Effect */}
        {!isLoaded && (
            <div className="absolute inset-0 bg-secondary animate-pulse z-10" />
        )}

        <motion.img
            src={src}
            alt={alt}
            initial={{ opacity: 0 }}
            animate={{ opacity: isLoaded ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            onLoad={() => setIsLoaded(true)}
            className={`w-full h-full object-cover transition-transform duration-500 hover:scale-105 ${!isLoaded ? 'opacity-0' : 'opacity-100'}`}
            {...props}
        />
    </div>
  );
}
