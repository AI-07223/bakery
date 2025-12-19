import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import LazyImage from '../ui/LazyImage';

export default function FeaturedCollection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <h3 className="font-heading font-bold text-3xl md:text-4xl text-center mb-12">
            Our Delicacies
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            {siteConfig.featureCollections.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    className="group relative overflow-hidden rounded-lg aspect-[4/5] block"
                >
                    <LazyImage
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col items-center">
                        <span className="text-white font-heading font-bold text-xl md:text-2xl tracking-wide mb-2">
                            {item.title}
                        </span>
                        <span className="text-white/80 text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                            Shop Now
                        </span>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    </section>
  );
}
