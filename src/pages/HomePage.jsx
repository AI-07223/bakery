import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import Hero from '../components/sections/Hero';
import CategoryGrid from '../components/sections/CategoryGrid';
import FeaturedProducts from '../components/sections/FeaturedProducts';
import OccasionShowcase from '../components/sections/OccasionShowcase';
import OurStory from '../components/sections/OurStory';
import CorporateGifting from '../components/sections/CorporateGifting';
import StoreLocations from '../components/sections/StoreLocations';
import BlogPreview from '../components/sections/BlogPreview';
import Testimonials from '../components/sections/Testimonials';
import Newsletter from '../components/sections/Newsletter';
import ProcessSection from '../components/sections/ProcessSection';
import InstagramFeed from '../components/sections/InstagramFeed';
import ChefsWord from '../components/sections/ChefsWord';
import Sustainability from '../components/sections/Sustainability';

export default function HomePage() {
  return (
    <>
      <SeoHead />
      <Hero />
      <ProcessSection />
      <CategoryGrid />
      <ChefsWord />
      <FeaturedProducts />
      <Sustainability />
      <OccasionShowcase />
      <OurStory />
      <CorporateGifting />
      <InstagramFeed />
      <Testimonials />
      <BlogPreview />
      <StoreLocations />
      <Newsletter />
    </>
  );
}
