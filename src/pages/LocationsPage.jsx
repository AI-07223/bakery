import React from 'react';
import { motion } from 'framer-motion';
import SeoHead from '../components/seo/SeoHead';
import { MapPin, Phone, Clock, Navigation, Sparkles } from 'lucide-react';

const locations = [
    {
        id: 1,
        city: "New York",
        neighborhood: "West Village",
        address: "123 Baker St, NY 10014",
        phone: "+1 (212) 555-0199",
        hours: "Daily: 7am - 8pm",
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop",
        featured: true
    },
    {
        id: 2,
        city: "Brooklyn",
        neighborhood: "Williamsburg",
        address: "456 Cocoa Ave, NY 11211",
        phone: "+1 (347) 555-0123",
        hours: "Daily: 7am - 9pm",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2680&auto=format&fit=crop",
        featured: false
    },
    {
        id: 3,
        city: "SoHo",
        neighborhood: "Downtown",
        address: "789 Spring St, NY 10012",
        phone: "+1 (646) 555-0188",
        hours: "Daily: 8am - 7pm",
        image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1974&auto=format&fit=crop",
        featured: false
    },
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

export default function LocationsPage() {
    return (
        <div className="pt-24 min-h-screen bg-bakery-paper overflow-hidden">
            <SeoHead title="Locations | Lumière Bakery" description="Find a Lumière Bakery boutique near you." />

            {/* Hero Section */}
            <section className="relative py-16 overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-bakery-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-bakery-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-6"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="inline-flex items-center text-bakery-accent font-bold tracking-widest uppercase mb-4"
                        >
                            <Sparkles size={16} className="mr-2 animate-pulse-soft" />
                            Find Your Bakery
                            <Sparkles size={16} className="ml-2 animate-pulse-soft" />
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl font-serif text-bakery-dark font-bold">Visit Us</h1>
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className="text-center text-gray-600 text-lg max-w-2xl mx-auto"
                    >
                        Step into a world of freshly baked aromas, warm smiles, and artisanal delights.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                    {/* Featured Location - Map Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative rounded-lg overflow-hidden min-h-[500px] lg:h-auto group"
                    >
                        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577056922428-a6d17a360e29?q=80&w=2692&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
                        <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/90 via-bakery-dark/40 to-transparent"></div>

                        {/* Floating badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute top-6 left-6 bg-bakery-accent text-bakery-dark font-bold px-4 py-2 rounded-full text-sm animate-bounce-gentle"
                        >
                            ★ Flagship Store
                        </motion.div>

                        {/* Animated map pin */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.5, 0.2, 0.5]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute inset-0 w-16 h-16 bg-bakery-accent rounded-full -translate-x-1/2 -translate-y-1/2"
                            />
                            <MapPin size={48} className="text-bakery-accent drop-shadow-lg relative z-10" />
                        </div>

                        {/* Bottom content */}
                        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                            <div className="glass-card p-6 rounded-lg">
                                <span className="text-bakery-accent font-bold uppercase tracking-widest text-xs mb-2 block">Headquarters</span>
                                <h3 className="text-3xl font-serif font-bold mb-2">New York City</h3>
                                <p className="text-white/70">West Village • Since 1985</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Location Cards */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {locations.map((loc) => (
                            <motion.div
                                key={loc.id}
                                variants={cardVariants}
                                whileHover={{ x: 10, transition: { duration: 0.3 } }}
                                className="group bg-white p-6 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-l-4 border-bakery-dark hover:border-bakery-accent flex gap-6 overflow-hidden"
                            >
                                {/* Location Image */}
                                <div className="hidden md:block w-28 h-28 rounded-sm overflow-hidden flex-shrink-0">
                                    <motion.img
                                        src={loc.image}
                                        alt={loc.city}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                    />
                                </div>

                                {/* Location Details */}
                                <div className="flex-grow">
                                    <div className="flex items-center justify-between mb-3">
                                        <h3 className="text-2xl font-serif font-bold text-bakery-dark group-hover:text-bakery-accent transition-colors">
                                            {loc.city}
                                        </h3>
                                        {loc.featured && (
                                            <span className="bg-bakery-accent/20 text-bakery-dark text-xs font-bold px-3 py-1 rounded-full">
                                                Flagship
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-bakery-accent text-sm font-medium">{loc.neighborhood}</span>

                                    <div className="mt-4 space-y-2 text-gray-600 text-sm">
                                        <p className="flex items-center">
                                            <MapPin size={16} className="mr-3 text-bakery-medium" />
                                            {loc.address}
                                        </p>
                                        <p className="flex items-center">
                                            <Phone size={16} className="mr-3 text-bakery-medium" />
                                            {loc.phone}
                                        </p>
                                        <p className="flex items-center">
                                            <Clock size={16} className="mr-3 text-bakery-medium" />
                                            {loc.hours}
                                        </p>
                                    </div>

                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="mt-4 flex items-center text-bakery-dark font-bold hover:text-bakery-accent transition-colors group/btn"
                                    >
                                        <Navigation size={16} className="mr-2 group-hover/btn:animate-bounce-gentle" />
                                        Get Directions
                                    </motion.button>
                                </div>
                            </motion.div>
                        ))}

                        {/* Coming Soon Card */}
                        <motion.div
                            variants={cardVariants}
                            className="bg-gradient-to-r from-bakery-dark to-bakery-medium p-8 rounded-sm text-white relative overflow-hidden"
                        >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 shimmer opacity-10"></div>

                            <div className="relative z-10">
                                <div className="flex items-center mb-2">
                                    <Sparkles size={20} className="mr-2 text-bakery-accent animate-pulse-soft" />
                                    <span className="text-bakery-accent font-bold uppercase text-sm tracking-widest">Coming 2025</span>
                                </div>
                                <h4 className="font-serif font-bold text-2xl mb-2">Expanding Soon</h4>
                                <p className="text-white/70">
                                    We are opening new boutiques in Los Angeles and Chicago.
                                    Sign up for our newsletter to be the first to know!
                                </p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="mt-4 bg-bakery-accent text-bakery-dark font-bold px-6 py-2 rounded-full text-sm"
                                >
                                    Get Notified
                                </motion.button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Bottom CTA */}
            <section className="py-16 bg-bakery-light">
                <div className="container mx-auto px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-bakery-dark mb-4">
                            Can't Visit Us?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            We deliver! Order online and get fresh baked goods at your doorstep.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-bakery-dark text-white font-bold py-4 px-10 rounded-full hover:bg-bakery-accent hover:text-bakery-dark transition-colors"
                        >
                            Order Online
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
