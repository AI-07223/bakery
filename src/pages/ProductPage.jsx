import React from 'react';
import SeoHead from '../components/seo/SeoHead';

export default function ProductPage() {
  return (
    <>
      <SeoHead title="Shop All" description="Browse our complete collection." />
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-heading text-4xl font-bold mb-4">Our Complete Collection</h1>
        <p className="text-gray-600">This page is a placeholder to demonstrate routing.</p>
      </div>
    </>
  );
}
