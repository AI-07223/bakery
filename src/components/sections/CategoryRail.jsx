import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import LazyImage from '../ui/LazyImage';

export default function CategoryRail() {
  return (
    <div className="py-12 border-b border-gray-100">
      <div className="container mx-auto px-4">
        {/* Horizontal Scroll Container */}
        <div className="flex gap-8 md:gap-12 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide justify-start md:justify-center">
          {siteConfig.categories.map((cat) => (
            <Link
              key={cat.id}
              to={cat.link}
              className="flex flex-col items-center gap-3 min-w-[80px] snap-center group"
            >
              <div className="w-20 h-20 md:w-28 md:h-28 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all duration-300 shadow-md">
                <LazyImage
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs md:text-sm font-bold uppercase tracking-wide text-center group-hover:text-primary transition-colors">
                {cat.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
