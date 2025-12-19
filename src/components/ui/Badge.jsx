import React from 'react';

export default function Badge({ children, className = "" }) {
  return (
    <span className={`
      inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white bg-primary rounded-full
      ${className}
    `}>
      {children}
    </span>
  );
}
