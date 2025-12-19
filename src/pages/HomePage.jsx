import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import HeroSlider from '../components/sections/HeroSlider';
import CategoryRail from '../components/sections/CategoryRail';
import FeaturedCollection from '../components/sections/FeaturedCollection';
import ProductShowcase from '../components/sections/ProductShowcase';
import Testimonials from '../components/sections/Testimonials';

export default function HomePage() {
  return (
    <>
      <SeoHead />
      <HeroSlider />
      <CategoryRail />
      <FeaturedCollection />
      <ProductShowcase />
      <Testimonials />
    </>
  );
}
