// src/components/Menu.jsx
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Section, SectionTitle } from './ui/Section';

export default function Menu() {
  const { menuStyle } = siteConfig.layout;
  const categories = siteConfig.content.menu;

  return (
    <Section id="menu" className="my-12 py-16 bg-accent/30 rounded-[3rem]">
      <SectionTitle className="mb-16">The Menu</SectionTitle>

      <div className="space-y-20">
        {categories.map((category, idx) => (
          <div key={idx}>
            <div className="flex flex-col items-center mb-10">
                <h3 className="text-3xl font-heading italic text-foreground relative z-10 px-4">{category.category}</h3>
                <div className="h-[1px] w-24 bg-primary mt-4"></div>
            </div>

            {menuStyle === 'list' ? (
              <div className="grid gap-x-12 gap-y-8 md:grid-cols-2 max-w-5xl mx-auto px-4">
                {category.items.map((item, i) => (
                  <div key={i} className="group">
                    <div className="flex justify-between items-baseline mb-1">
                        <h4 className="text-xl font-bold font-heading text-foreground group-hover:text-primary transition-colors">{item.name}</h4>
                        <div className="flex-grow mx-4 border-b border-dotted border-gray-400 opacity-50 relative top-[-4px]"></div>
                        <span className="text-xl font-bold font-body">{item.price}</span>
                    </div>
                    <p className="text-sm text-gray-500 font-light italic">{item.description}</p>
                  </div>
                ))}
              </div>
            ) : (
                // Modern Card style layout
               <div className="grid gap-6 md:grid-cols-3">
                 {category.items.map((item, i) => (
                   <div key={i} className="bg-white p-8 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 transform hover:-translate-y-1 border border-transparent hover:border-primary/20">
                     <div className="flex justify-between items-start mb-4">
                        <h4 className="text-xl font-heading font-bold">{item.name}</h4>
                        <span className="text-lg font-bold text-primary">{item.price}</span>
                     </div>
                     <p className="text-gray-500 text-sm leading-relaxed font-light">{item.description}</p>
                   </div>
                 ))}
               </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
