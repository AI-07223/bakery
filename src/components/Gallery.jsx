// src/components/Gallery.jsx
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Section, SectionTitle } from './ui/Section';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { galleryStyle } = siteConfig.layout;
  const items = siteConfig.content.gallery;

  return (
    <Section id="gallery" className="bg-white/50 rounded-3xl my-8">
      <SectionTitle>Our Masterpieces</SectionTitle>

      {galleryStyle === 'carousel' ? (
        <div className="flex overflow-x-auto gap-4 pb-4 snap-x snap-mandatory no-scrollbar">
            {items.map((item) => (
                <div key={item.id} className="snap-center shrink-0 w-[80vw] md:w-[400px]">
                    <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] group relative">
                         <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                             <span className="text-white font-bold">{item.title}</span>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
             {items.map((item) => (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    key={item.id}
                    className="rounded-xl overflow-hidden shadow-md aspect-square relative group"
                >
                     <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                         <span className="text-white font-bold text-lg">{item.title}</span>
                     </div>
                </motion.div>
            ))}
        </div>
      )}
    </Section>
  );
}
