import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bakery-dark text-bakery-light">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">

          {/* Brand Column */}
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <h2 className="text-2xl md:text-3xl font-serif font-bold text-bakery-paper mb-3">
                Lumière <span className="text-bakery-accent">Bakery</span>
              </h2>
            </Link>
            <p className="font-light text-sm max-w-xs mx-auto md:mx-0 opacity-80 mb-6">
              Artisanal baking with the finest ingredients.
              Experience the warmth of tradition since 1985.
            </p>
            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-bakery-accent hover:text-bakery-dark transition-colors"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg mb-4 text-bakery-accent font-bold">Quick Links</h4>
            <ul className="space-y-3 opacity-80">
              {[
                { name: 'Menu', path: '/menu' },
                { name: 'Our Story', path: '/story' },
                { name: 'Locations', path: '/locations' },
                { name: 'Journal', path: '/blog' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="hover:text-bakery-accent transition-colors inline-flex items-center gap-2"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg mb-4 text-bakery-accent font-bold">Contact Us</h4>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-start justify-center md:justify-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <span>123 Baker St, West Village<br />New York, NY 10014</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+12125550199" className="hover:text-bakery-accent">+1 (212) 555-0199</a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:hello@lumierebakery.com" className="hover:text-bakery-accent">hello@lumierebakery.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div className="text-center md:text-left">
            <h4 className="font-serif text-lg mb-4 text-bakery-accent font-bold">Opening Hours</h4>
            <ul className="space-y-3 opacity-80">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Clock size={18} className="flex-shrink-0" />
                <div>
                  <span className="block font-medium">Mon - Fri</span>
                  <span className="text-sm">7:00 AM - 8:00 PM</span>
                </div>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <Clock size={18} className="flex-shrink-0" />
                <div>
                  <span className="block font-medium">Sat - Sun</span>
                  <span className="text-sm">8:00 AM - 9:00 PM</span>
                </div>
              </li>
            </ul>

            {/* CTA */}
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-bakery-accent text-bakery-dark font-bold px-6 py-3 rounded-full text-sm hover:bg-white transition-colors w-full md:w-auto"
              >
                Order Online
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-bakery-medium/20">
        <div className="container mx-auto px-4 md:px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-60">
            <p className="flex items-center gap-1">
              © {currentYear} Lumière Bakery. Made with <Heart size={14} className="text-red-400" fill="currentColor" /> in NYC.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
