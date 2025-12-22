import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Home, UtensilsCrossed, Gift, MapPin, BookOpen, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { toggleCart, cartCount } = useCart();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/', icon: Home },
        { name: 'Menu', path: '/menu', icon: UtensilsCrossed },
        { name: 'Gifting', path: '/gifting', icon: Gift },
        { name: 'Locations', path: '/locations', icon: MapPin },
        { name: 'Journal', path: '/blog', icon: BookOpen },
        { name: 'Contact', path: '/contact', icon: Phone },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            <nav
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-bakery-paper/95 backdrop-blur-md shadow-md py-3'
                    : 'bg-transparent py-4 md:py-6'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="text-xl md:text-2xl font-serif font-bold text-bakery-dark z-50">
                        Lumière <span className="text-bakery-accent">Bakery</span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`font-medium transition-all duration-300 relative ${isScrolled
                                        ? 'text-bakery-dark hover:text-bakery-accent'
                                        : 'text-white hover:text-bakery-accent'
                                    } ${isActive(link.path) ? 'text-bakery-accent' : ''}`}
                            >
                                {link.name}
                                {isActive(link.path) && (
                                    <motion.div
                                        layoutId="activeIndicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-bakery-accent"
                                    />
                                )}
                            </Link>
                        ))}
                        <button
                            onClick={toggleCart}
                            className={`p-2 rounded-full transition-colors relative ${isScrolled ? 'text-bakery-dark hover:bg-bakery-light' : 'text-white hover:bg-white/20'}`}
                        >
                            <ShoppingBag size={24} />
                            {cartCount > 0 && (
                                <motion.span
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="absolute -top-1 -right-1 bg-bakery-accent text-bakery-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
                                >
                                    {cartCount}
                                </motion.span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Icons */}
                    <div className="flex items-center gap-2 md:hidden">
                        <button
                            onClick={toggleCart}
                            className={`p-2 rounded-full transition-colors relative ${isScrolled ? 'text-bakery-dark' : 'text-white'}`}
                        >
                            <ShoppingBag size={22} />
                            {cartCount > 0 && (
                                <span className="absolute -top-1 -right-1 bg-bakery-accent text-bakery-dark text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                                    {cartCount}
                                </span>
                            )}
                        </button>
                        <button
                            className={`p-2 rounded-full transition-colors z-50 ${isScrolled || isMobileMenuOpen ? 'text-bakery-dark' : 'text-white'}`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="fixed inset-0 bg-black/50 z-40 md:hidden"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'tween', duration: 0.3 }}
                            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-bakery-paper z-40 md:hidden shadow-2xl"
                        >
                            <div className="flex flex-col h-full pt-20 pb-8 px-6">
                                {/* Nav Links */}
                                <div className="flex-grow space-y-2">
                                    {navLinks.map((link, index) => {
                                        const Icon = link.icon;
                                        return (
                                            <motion.div
                                                key={link.name}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: index * 0.05 }}
                                            >
                                                <Link
                                                    to={link.path}
                                                    className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-colors ${isActive(link.path)
                                                            ? 'bg-bakery-accent/20 text-bakery-dark'
                                                            : 'text-bakery-medium hover:bg-bakery-light'
                                                        }`}
                                                >
                                                    <Icon size={22} className={isActive(link.path) ? 'text-bakery-accent' : ''} />
                                                    <span className="text-lg font-medium">{link.name}</span>
                                                    {isActive(link.path) && (
                                                        <div className="ml-auto w-2 h-2 bg-bakery-accent rounded-full" />
                                                    )}
                                                </Link>
                                            </motion.div>
                                        );
                                    })}
                                </div>

                                {/* Bottom Section */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.3 }}
                                    className="pt-6 border-t border-bakery-medium/20"
                                >
                                    <Link
                                        to="/menu"
                                        className="w-full bg-bakery-dark text-white font-bold py-4 rounded-full flex items-center justify-center gap-2 hover:bg-bakery-accent hover:text-bakery-dark transition-colors"
                                    >
                                        <UtensilsCrossed size={18} />
                                        Order Now
                                    </Link>
                                    <p className="text-center text-sm text-bakery-medium/60 mt-4">
                                        Open Daily: 7am - 8pm
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
