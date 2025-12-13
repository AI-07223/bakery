// src/components/Menu.jsx
import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Section, SectionTitle } from './ui/Section';

export default function Menu() {
  const { menuStyle } = siteConfig.layout;
  const categories = siteConfig.content.menu;

  return (
    <Section id="menu" className="bg-secondary/10 rounded-3xl my-8">
      <SectionTitle>Menu</SectionTitle>

      <div className="space-y-12">
        {categories.map((category, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-bold mb-6 text-primary border-b border-primary/20 pb-2 inline-block">{category.category}</h3>

            {menuStyle === 'list' ? (
              <div className="grid gap-6 md:grid-cols-2">
                {category.items.map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline border-b border-dashed border-gray-300 pb-2">
                    <div>
                        <h4 className="text-lg font-bold">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                    <span className="text-xl font-bold text-primary ml-4">{item.price}</span>
                  </div>
                ))}
              </div>
            ) : (
                // Card style layout
               <div className="grid gap-6 md:grid-cols-3">
                 {category.items.map((item, i) => (
                   <div key={i} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                     <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                     <p className="text-gray-600 mb-4 text-sm">{item.description}</p>
                     <div className="text-right text-2xl font-bold text-primary">{item.price}</div>
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
