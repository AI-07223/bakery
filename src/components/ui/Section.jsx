// src/components/ui/Section.jsx
import React from 'react';
import { twMerge } from 'tailwind-merge';

export function Section({ children, className, id }) {
  return (
    <section
      id={id}
      className={twMerge("py-10 md:py-16 px-4 md:px-8 max-w-7xl mx-auto min-h-[40vh] md:min-h-[50vh]", className)}
    >
      {children}
    </section>
  );
}

export function SectionTitle({ children, className }) {
  return (
    <h2 className={twMerge("text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 md:mb-12 font-heading text-primary", className)}>
      {children}
    </h2>
  );
}
