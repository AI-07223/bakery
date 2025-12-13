// src/App.jsx
import React, { useEffect } from 'react';
import { siteConfig } from './config/siteConfig';
import InteractiveCake from './components/InteractiveCake';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import Menu from './components/Menu';
import Location from './components/Location';
import { Contact, CustomOrder } from './components/ContactForms';
import { motion, useScroll } from 'framer-motion';
import { Menu as MenuIcon, X } from 'lucide-react';

function NavLink({ href, children, setIsMobileMenuOpen }) {
  return (
    <a
      href={href}
      onClick={() => setIsMobileMenuOpen && setIsMobileMenuOpen(false)}
      className="text-lg font-medium hover:text-primary transition-colors"
    >
        {children}
    </a>
  );
}

function App() {
  const { scrollYProgress } = useScroll();

  // Apply theme variables to root
  useEffect(() => {
    const root = document.documentElement;
    const { colors } = siteConfig.theme;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-foreground', colors.foreground);
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Scroll Progress Bar at top */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
            <div className="font-heading font-bold text-2xl text-primary">{siteConfig.brand.name}</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
                <NavLink href="#">Home</NavLink>
                <NavLink href="#gallery">Gallery</NavLink>
                <NavLink href="#menu">Menu</NavLink>
                <NavLink href="#custom-order">Order</NavLink>
                <NavLink href="#location">Visit</NavLink>
            </div>

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <X /> : <MenuIcon />}
            </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
            <div className="md:hidden bg-white border-t p-4 flex flex-col gap-4 shadow-xl">
                <NavLink href="#" setIsMobileMenuOpen={setIsMobileMenuOpen}>Home</NavLink>
                <NavLink href="#gallery" setIsMobileMenuOpen={setIsMobileMenuOpen}>Gallery</NavLink>
                <NavLink href="#menu" setIsMobileMenuOpen={setIsMobileMenuOpen}>Menu</NavLink>
                <NavLink href="#custom-order" setIsMobileMenuOpen={setIsMobileMenuOpen}>Order</NavLink>
                <NavLink href="#location" setIsMobileMenuOpen={setIsMobileMenuOpen}>Visit</NavLink>
            </div>
        )}
      </nav>

      <InteractiveCake />

      <main className="relative z-20 pb-[50vh]">
        <Hero />

        <div className="bg-white/80 backdrop-blur-sm rounded-t-3xl shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
             <Gallery />
             <Menu />
             <CustomOrder />
             <Location />
             <Contact />

             <div className="h-[40vh] flex items-end justify-center pb-8 text-center pointer-events-none">
                <div className="bg-white/90 p-4 rounded-xl shadow-lg mb-20 pointer-events-auto inline-block">
                    <p className="font-bold">{siteConfig.brand.name}</p>
                    <p className="text-sm">{siteConfig.brand.footerText}</p>
                    <div className="flex gap-4 justify-center mt-2">
                        {Object.entries(siteConfig.brand.socialLinks).map(([platform, url]) => (
                            <a key={platform} href={url} target="_blank" rel="noreferrer" className="text-primary hover:text-primary/80 capitalize text-sm">
                                {platform}
                            </a>
                        ))}
                    </div>
                </div>
             </div>
        </div>
      </main>

    </div>
  );
}

export default App;
