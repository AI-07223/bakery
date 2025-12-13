// src/components/Gallery.jsx
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Section, SectionTitle } from './ui/Section';
import { motion } from 'framer-motion';

export default function Gallery() {
  const { galleryStyle } = siteConfig.layout;
  const items = siteConfig.content.gallery;

  return (
    <Section id="gallery" className="my-12">
      <SectionTitle>Curated Collection</SectionTitle>

      {galleryStyle === 'carousel' ? (
        <div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar px-4">
            {items.map((item) => (
                <div key={item.id} className="snap-center shrink-0 w-[85vw] md:w-[450px]">
                    <div className="rounded-2xl overflow-hidden aspect-[4/3] group relative shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                         <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                             <span className="text-white font-heading text-2xl tracking-wide">{item.title}</span>
                         </div>
                    </div>
                </div>
            ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {items.map((item) => (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    key={item.id}
                    className="rounded-xl overflow-hidden aspect-[4/5] relative group shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer"
                >
                     <img src={item.image} alt={item.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                     <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500"></div>
                     <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                         <span className="text-white font-heading text-3xl mb-2 italic">{item.title}</span>
                         <span className="text-white/80 text-xs uppercase tracking-widest border-t border-white/50 pt-2 px-4">View Detail</span>
                     </div>
                </motion.div>
            ))}
        </div>
      )}
    </Section>
  );
}
