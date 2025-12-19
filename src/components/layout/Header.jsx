/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../../config/siteConfig';
import { Search, ShoppingBag, User, Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-primary text-white text-[10px] md:text-xs font-bold tracking-widest uppercase text-center py-2 px-4">
        {siteConfig.layout.announcementBar}
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <h1 className={`font-heading font-bold transition-all ${isScrolled ? 'text-xl' : 'text-2xl md:text-3xl'}`}>
              {siteConfig.brand.name}
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-4 md:gap-6">
            <button className="hover:text-primary transition-colors">
              <Search size={20} />
            </button>
            <Link to="/account" className="hidden md:block hover:text-primary transition-colors">
              <User size={20} />
            </Link>
            <Link to="/cart" className="relative hover:text-primary transition-colors">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] w-4 h-4 flex items-center justify-center rounded-full font-bold">0</span>
            </Link>
            <button
              className="md:hidden hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <MenuIcon size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <span className="font-heading font-bold text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
              {siteConfig.navigation.main.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="text-xl font-heading font-bold text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="mt-auto pt-8 border-t flex flex-col gap-4">
                <Link
                  to="/account"
                  className="flex items-center gap-4 font-bold uppercase text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <User size={20} /> Login / Register
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
