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
      className="text-sm uppercase tracking-widest font-bold hover:text-primary transition-colors font-body"
    >
        {children}
    </a>
  );
}

function App() {
  const { scrollYProgress } = useScroll();

  // Apply theme variables to root & inject fonts
  useEffect(() => {
    const root = document.documentElement;
    const { colors, fonts } = siteConfig.theme;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--color-background', colors.background);
    root.style.setProperty('--color-foreground', colors.foreground);
    root.style.setProperty('--color-accent', colors.accent);
    root.style.setProperty('--font-heading', fonts.heading);
    root.style.setProperty('--font-body', fonts.body);

    const link = document.createElement('link');
    link.href = fonts.googleFontsUrl;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    document.title = siteConfig.brand.name;

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-body text-foreground bg-background selection:bg-primary selection:text-white">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-left"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className="fixed top-4 left-4 right-4 md:left-8 md:right-8 z-40 bg-white/70 backdrop-blur-md shadow-sm border border-white/20 rounded-full px-6 py-4 flex justify-between items-center transition-all duration-300">
        <div className="font-heading font-bold text-2xl text-foreground tracking-tight">{siteConfig.brand.name}</div>
        <div className="hidden md:flex gap-8">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#gallery">Collection</NavLink>
            <NavLink href="#menu">Menu</NavLink>
            <NavLink href="#custom-order">Bespoke</NavLink>
            <NavLink href="#location">Visit</NavLink>
        </div>
        <button className="md:hidden text-foreground" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
          <div className="fixed inset-0 z-30 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden">
              <NavLink href="#" setIsMobileMenuOpen={setIsMobileMenuOpen}>Home</NavLink>
              <NavLink href="#gallery" setIsMobileMenuOpen={setIsMobileMenuOpen}>Collection</NavLink>
              <NavLink href="#menu" setIsMobileMenuOpen={setIsMobileMenuOpen}>Menu</NavLink>
              <NavLink href="#custom-order" setIsMobileMenuOpen={setIsMobileMenuOpen}>Bespoke</NavLink>
              <NavLink href="#location" setIsMobileMenuOpen={setIsMobileMenuOpen}>Visit</NavLink>
          </div>
      )}

      <InteractiveCake />

      <main className="relative z-20">
        <Hero />

        {/* Main Content */}
        <div className="relative -mt-20 bg-background rounded-t-[3rem] shadow-[0_-20px_60px_rgba(0,0,0,0.03)] border-t border-white/50 px-2 md:px-0">
             <div className="pt-20 pb-20">
                <Gallery />
                <Menu />
                <CustomOrder />
                <Location />
                <Contact />
             </div>

             {/* THE GRAND FINALE SPACER
                 This empty space allows the user to scroll "past" the content so the cake (which is fixed at bottom)
                 can be seen clearly in the center without overlapping text.
             */}
             <div className="h-[80vh] w-full flex flex-col justify-end items-center pb-8 opacity-50 pointer-events-none">
                 {/* Optional minimal footer links at the VERY bottom, below the cake if space permits,
                     or just minimal copyright.
                 */}
                 <p className="text-xs uppercase tracking-widest mb-4">{siteConfig.brand.footerText}</p>
                 <div className="flex gap-4">
                    {Object.entries(siteConfig.brand.socialLinks).map(([platform, url]) => (
                        <a key={platform} href={url} target="_blank" rel="noreferrer" className="pointer-events-auto hover:text-primary transition-colors capitalize text-xs font-bold">
                            {platform}
                        </a>
                    ))}
                 </div>
             </div>
        </div>
      </main>

    </div>
  );
}

export default App;
