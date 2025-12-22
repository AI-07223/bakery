import { motion } from 'framer-motion';
import { Gift, Calendar, Heart, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const occasions = [
    {
        id: 1,
        title: "Birthdays",
        description: "Make their special day unforgettable with our custom designer cakes.",
        icon: Calendar,
        gradient: "from-pink-500 via-rose-500 to-red-500",
        bgGradient: "from-pink-50 to-rose-50",
        link: "/menu?category=Cakes",
        cta: "Order Cake"
    },
    {
        id: 2,
        title: "Anniversaries",
        description: "Celebrate love with our elegant tiered cakes and heart-shaped pastries.",
        icon: Heart,
        gradient: "from-red-500 via-pink-500 to-purple-500",
        bgGradient: "from-red-50 to-pink-50",
        link: "/menu?category=Cakes",
        cta: "View Collection"
    },
    {
        id: 3,
        title: "Gifting",
        description: "Curated hampers and cookie boxes perfect for corporate or personal gifts.",
        icon: Gift,
        gradient: "from-amber-500 via-yellow-500 to-orange-500",
        bgGradient: "from-amber-50 to-yellow-50",
        link: "/gifting",
        cta: "Shop Gifts"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function OccasionShowcase() {
    return (
        <section className="py-24 bg-bakery-paper relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-bakery-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

            {/* Floating sparkles */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-32 right-20 text-bakery-accent/20"
            >
                <Sparkles size={48} />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-32 left-20 text-pink-500/20"
            >
                <Gift size={40} />
            </motion.div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block flex items-center justify-center">
                        <Sparkles size={16} className="mr-2 animate-pulse-soft" />
                        Special Moments
                        <Sparkles size={16} className="ml-2 animate-pulse-soft" />
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-dark mb-4">
                        Perfect for Every Occasion
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                        From birthday celebrations to corporate events, we craft the perfect sweet moments for your special days.
                    </p>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {occasions.map((occasion, index) => {
                        const Icon = occasion.icon;
                        return (
                            <motion.div
                                key={occasion.id}
                                variants={cardVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                <div className={`bg-gradient-to-br ${occasion.bgGradient} p-8 rounded-2xl transition-all duration-500 group-hover:shadow-2xl relative overflow-hidden`}>
                                    {/* Animated border glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${occasion.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} style={{ padding: '2px' }}>
                                        <div className="w-full h-full bg-white rounded-2xl"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10">
                                        {/* Icon with gradient background */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${occasion.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg`}
                                        >
                                            <Icon size={36} className="text-white" />
                                        </motion.div>

                                        <h3 className="text-2xl font-serif font-bold text-bakery-dark text-center mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-bakery-dark group-hover:to-bakery-accent transition-all duration-300">
                                            {occasion.title}
                                        </h3>

                                        <p className="text-gray-600 text-center mb-6 leading-relaxed">
                                            {occasion.description}
                                        </p>

                                        <Link to={occasion.link}>
                                            <motion.button
                                                whileHover={{ scale: 1.02 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={`w-full bg-gradient-to-r ${occasion.gradient} text-white font-bold py-3 px-6 rounded-full flex items-center justify-center group/btn shadow-lg hover:shadow-xl transition-shadow`}
                                            >
                                                <span>{occasion.cta}</span>
                                                <ArrowRight size={18} className="ml-2 group-hover/btn:translate-x-1 transition-transform" />
                                            </motion.button>
                                        </Link>
                                    </div>

                                    {/* Decorative floating element */}
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            opacity: [0.1, 0.2, 0.1]
                                        }}
                                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                                        className="absolute -bottom-4 -right-4 text-gray-200"
                                    >
                                        <Icon size={80} />
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-600 mb-4">Need something custom? We'd love to help!</p>
                    <Link to="/contact">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="inline-flex items-center text-bakery-dark font-bold border-2 border-bakery-dark px-8 py-3 rounded-full hover:bg-bakery-dark hover:text-white transition-all"
                        >
                            Contact Us
                            <ArrowRight size={18} className="ml-2" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
