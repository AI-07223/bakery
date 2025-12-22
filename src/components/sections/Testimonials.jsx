import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Genevieve L.",
        role: "Food Critic",
        content: "The sourdough here is nothing short of a revelation. The crust singing with every slice, the crumb perfectly aerated...",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
        id: 2,
        name: "Marcus T.",
        role: "Local Chef",
        content: "I source all my bread for the restaurant from Lumière. The consistency and artisanal quality are unmatched in the city.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
        id: 3,
        name: "Sarah Jenkins",
        role: "Regular Customer",
        content: "My Sunday mornings aren't complete without their pain au chocolat. It's my little moment of Paris in the heart of town.",
        stars: 5,
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
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
    hidden: { opacity: 0, y: 30, rotateX: -10 },
    visible: {
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function Testimonials() {
    return (
        <section className="py-16 md:py-24 bg-bakery-paper relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-10 md:top-20 right-10 md:right-20 w-48 md:w-72 h-48 md:h-72 bg-bakery-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 md:bottom-20 left-10 md:left-20 w-40 md:w-64 h-40 md:h-64 bg-bakery-dark/5 rounded-full blur-3xl"></div>

            {/* Floating quote marks */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-32 left-10 text-bakery-accent/10"
            >
                <Quote size={60} className="md:hidden" />
                <Quote size={120} className="hidden md:block" />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-32 right-10 text-bakery-accent/10 rotate-180"
            >
                <Quote size={50} className="md:hidden" />
                <Quote size={100} className="hidden md:block" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-10 md:mb-16"
                >
                    <span className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block">Community Love</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-bakery-dark font-bold mb-3 md:mb-4">What People Say</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Don't just take our word for it — hear from our beloved community.
                    </p>
                </motion.div>

                {/* Testimonial Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                >
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                rotateY: 5,
                                transition: { duration: 0.3 }
                            }}
                            className="group bg-white p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
                            style={{ transformStyle: 'preserve-3d' }}
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-bakery-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            {/* Quote icon */}
                            <div className="absolute top-4 right-4 text-bakery-accent/20 group-hover:text-bakery-accent/40 transition-colors">
                                <Quote size={32} />
                            </div>

                            {/* Stars with animation */}
                            <div className="flex space-x-1 mb-6 relative z-10">
                                {[...Array(t.stars)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, scale: 0 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.5 + i * 0.1 }}
                                    >
                                        <Star
                                            size={18}
                                            className="text-bakery-accent"
                                            fill="currentColor"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Content */}
                            <p className="text-bakery-medium/80 italic mb-8 leading-relaxed relative z-10 text-lg">
                                "{t.content}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center relative z-10">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="relative"
                                >
                                    <img
                                        src={t.avatar}
                                        alt={t.name}
                                        className="w-14 h-14 rounded-full object-cover border-2 border-bakery-accent/30"
                                    />
                                    {/* Glow on hover */}
                                    <div className="absolute inset-0 rounded-full bg-bakery-accent/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                </motion.div>
                                <div className="ml-4">
                                    <h4 className="font-serif font-bold text-bakery-dark text-lg">{t.name}</h4>
                                    <span className="text-xs uppercase tracking-widest text-bakery-accent">{t.role}</span>
                                </div>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute bottom-0 right-0 w-16 h-16 bg-bakery-accent/5 rounded-tl-full"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust indicators */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-4 md:gap-8 mt-10 md:mt-16 text-center"
                >
                    {[
                        { value: "4.9", label: "Average Rating" },
                        { value: "2,500+", label: "Happy Customers" },
                        { value: "98%", label: "Would Recommend" }
                    ].map((stat, i) => (
                        <div key={i} className="px-4 md:px-8">
                            <span className="text-2xl md:text-3xl font-serif font-bold text-bakery-dark">{stat.value}</span>
                            <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
