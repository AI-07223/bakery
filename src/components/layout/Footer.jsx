import { Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bakery-dark text-bakery-light py-16">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0">

          {/* Brand */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl font-serif font-bold text-bakery-paper mb-2">
              Lumière <span className="text-bakery-accent">Bakery</span>
            </h2>
            <p className="font-light text-sm max-w-xs mx-auto md:mx-0 opacity-80">
              Artisanal baking with the finest ingredients.
              Experience the warmth of tradition.
            </p>
          </div>

          {/* Links */}
          <div className="flex space-x-12">
            <div>
              <h4 className="font-serif text-lg mb-4 text-bakery-accent">Explore</h4>
              <ul className="space-y-2 opacity-80">
                <li><Link to="/menu" className="hover:text-white transition-colors">Menu</Link></li>
                <li><Link to="/story" className="hover:text-white transition-colors">Our Story</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-serif text-lg mb-4 text-bakery-accent">Visit Us</h4>
              <ul className="space-y-2 opacity-80">
                <li>123 Baker Street</li>
                <li>Sweet City, SC 90210</li>
                <li>Daily: 7am - 8pm</li>
              </ul>
            </div>
          </div>

          {/* Social */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-bakery-accent transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-bakery-accent transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-bakery-accent transition-colors"><Twitter size={24} /></a>
          </div>
        </div>

        <div className="border-t border-bakery-medium/30 mt-12 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Lumière Bakery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
