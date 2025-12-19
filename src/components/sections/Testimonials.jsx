import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <span className="text-primary font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
            What our customers say
        </span>
        <h3 className="font-heading font-bold text-3xl md:text-5xl mb-16">
            We Love Your Sweet Talk
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {siteConfig.testimonials.slice(0, 3).map((review) => (
                <div key={review.id} className="bg-[#F9F5F0] p-8 rounded-2xl relative">
                    <div className="flex justify-center gap-1 mb-6 text-primary">
                        {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} size={16} fill="currentColor" />
                        ))}
                    </div>
                    <p className="font-heading italic text-lg text-gray-700 mb-6 leading-relaxed">
                        "{review.text}"
                    </p>
                    <span className="font-bold uppercase tracking-widest text-xs text-gray-900">
                        — {review.name}
                    </span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
