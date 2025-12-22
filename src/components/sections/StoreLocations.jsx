import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Navigation, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const locations = [
    {
        id: 1,
        city: "New York",
        neighborhood: "West Village",
        address: "123 Baker St, West Village, NY 10014",
        phone: "+1 (212) 555-0199",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop",
        featured: true
    },
    {
        id: 2,
        city: "Brooklyn",
        neighborhood: "Williamsburg",
        address: "456 Cocoa Ave, Williamsburg, NY 11211",
        phone: "+1 (347) 555-0123",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2680&auto=format&fit=crop",
        featured: false
    },
    {
        id: 3,
        city: "SoHo",
        neighborhood: "Downtown",
        address: "789 Pastry Ln, SoHo, NY 10012",
        phone: "+1 (646) 555-0188",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1974&auto=format&fit=crop",
        featured: false
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function StoreLocations() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-72 h-72 bg-bakery-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-64 h-64 bg-bakery-dark/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <MapPin size={18} className="text-bakery-accent mr-2 animate-bounce-gentle" />
                        <span className="text-bakery-medium font-bold tracking-widest uppercase">Visit Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-bakery-dark font-bold mb-4">Find a Boutique</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Step into a world of freshly baked aromas and warm hospitality at any of our locations.
                    </p>
                </motion.div>

                {/* Location Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {locations.map((loc) => (
                        <motion.div
                            key={loc.id}
                            variants={cardVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group bg-bakery-paper rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300"
                        >
                            {/* Image */}
                            <div className="relative h-44 overflow-hidden">
                                <img
                                    src={loc.image}
                                    alt={loc.city}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/80 via-bakery-dark/20 to-transparent"></div>

                                {/* City name overlay */}
                                <div className="absolute bottom-4 left-4">
                                    <h3 className="text-2xl font-serif font-bold text-white">{loc.city}</h3>
                                    <span className="text-bakery-accent text-sm font-medium">{loc.neighborhood}</span>
                                </div>

                                {/* Featured badge */}
                                {loc.featured && (
                                    <div className="absolute top-4 right-4 bg-bakery-accent text-bakery-dark font-bold text-xs px-3 py-1 rounded-full flex items-center">
                                        <Sparkles size={12} className="mr-1" />
                                        Flagship
                                    </div>
                                )}

                                {/* Animated map pin */}
                                <motion.div
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="absolute top-4 left-4 text-white/80"
                                >
                                    <MapPin size={24} />
                                </motion.div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <div className="space-y-3 text-bakery-medium/90 text-sm mb-6">
                                    <div className="flex items-start">
                                        <MapPin size={16} className="mr-3 text-bakery-accent shrink-0 mt-0.5" />
                                        <p>{loc.address}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Phone size={16} className="mr-3 text-bakery-accent" />
                                        <p>{loc.phone}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock size={16} className="mr-3 text-bakery-accent" />
                                        <p>Daily: 7am - 8pm</p>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full border-2 border-bakery-dark text-bakery-dark font-bold py-3 rounded-lg hover:bg-bakery-dark hover:text-white transition-all text-sm uppercase tracking-wider flex items-center justify-center group/btn"
                                >
                                    <Navigation size={16} className="mr-2 group-hover/btn:animate-bounce-gentle" />
                                    Get Directions
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="text-center mt-12"
                >
                    <Link to="/locations">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center bg-bakery-dark text-white font-bold px-8 py-4 rounded-full hover:bg-bakery-accent hover:text-bakery-dark transition-colors"
                        >
                            View All Locations
                            <MapPin size={18} className="ml-2" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
