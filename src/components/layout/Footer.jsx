import React from 'react';
import { siteConfig } from '../../config/siteConfig';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#F9F5F0] pt-16 pb-8 border-t border-primary/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          {/* Brand Info */}
          <div className="md:col-span-1">
            <h3 className="font-heading font-bold text-2xl mb-6">{siteConfig.brand.name}</h3>
            <p className="text-sm leading-relaxed text-gray-600 mb-6">
              Baked from scratch using natural ingredients. Experience the finest French patisserie delivered to your doorstep.
            </p>
            <div className="flex gap-4">
              {Object.entries(siteConfig.brand.socialLinks).map(([platform, url]) => (
                <a
                  key={platform}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-primary hover:text-white transition-colors border border-gray-200"
                >
                  <span className="sr-only">{platform}</span>
                  {/* Simple generic icon since we don't have platform specific icons imported yet */}
                  <span className="capitalize text-[10px] font-bold">{platform[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-primary">Shop</h4>
            <ul className="space-y-3">
              <li><Link to="/category/cakes" className="text-sm hover:text-primary transition-colors">Cakes</Link></li>
              <li><Link to="/category/breads" className="text-sm hover:text-primary transition-colors">Breads</Link></li>
              <li><Link to="/category/cookies" className="text-sm hover:text-primary transition-colors">Cookies</Link></li>
              <li><Link to="/category/gluten-free" className="text-sm hover:text-primary transition-colors">Gluten Free</Link></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-primary">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/contact" className="text-sm hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-sm hover:text-primary transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/privacy" className="text-sm hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-primary transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-primary">Stay Sweet</h4>
            <p className="text-sm text-gray-600 mb-4">Subscribe for updates, new arrivals, and special offers.</p>
            <form className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-white border border-gray-200 focus:outline-none focus:border-primary text-sm"
              />
              <button className="w-full bg-black text-white px-4 py-3 text-xs font-bold uppercase tracking-widest hover:bg-primary transition-colors">
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 uppercase tracking-wide text-center md:text-left">
            {siteConfig.brand.copyright}
          </p>
          <div className="flex gap-2 opacity-50 grayscale">
             {/* Payment Icons Placeholder */}
             <div className="w-8 h-5 bg-gray-300 rounded"></div>
             <div className="w-8 h-5 bg-gray-300 rounded"></div>
             <div className="w-8 h-5 bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}
