import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { categories } from '../../data/products';
import { Sparkles } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

export default function CategoryGrid() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-bakery-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-bakery-dark/5 rounded-full blur-3xl"></div>

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
                        <Sparkles size={16} className="text-bakery-accent mr-2 animate-pulse-soft" />
                        <span className="text-bakery-accent font-bold tracking-widest uppercase">Available Now</span>
                        <Sparkles size={16} className="text-bakery-accent ml-2 animate-pulse-soft" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-bakery-dark font-bold mb-4">Shop by Category</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our curated selection of artisanal baked goods, from crusty breads to delicate pastries.
                    </p>
                </motion.div>

                {/* Category Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
                >
                    {categories.map((cat, index) => (
                        <motion.div
                            key={cat.name}
                            variants={itemVariants}
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group text-center cursor-pointer"
                        >
                            <Link to={`/menu?category=${cat.name}`}>
                                {/* Image Container */}
                                <div className="relative mb-6">
                                    {/* Outer ring animation */}
                                    <motion.div
                                        animate={{ rotate: 360 }}
                                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                        className="absolute inset-0 rounded-full border-2 border-dashed border-bakery-accent/20 opacity-0 group-hover:opacity-100 transition-opacity"
                                        style={{ padding: '-4px', scale: 1.1 }}
                                    />

                                    {/* Main image circle */}
                                    <div className="relative w-full aspect-square rounded-full overflow-hidden border-4 border-transparent group-hover:border-bakery-accent transition-all duration-300 shadow-lg group-hover:shadow-xl">
                                        <img
                                            src={cat.image}
                                            alt={cat.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                        />

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/50 via-transparent to-transparent opacity-30 group-hover:opacity-0 transition-opacity duration-300"></div>

                                        {/* Hover overlay with glow */}
                                        <div className="absolute inset-0 bg-bakery-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    </div>

                                    {/* Floating badge for special categories */}
                                    {index === 0 && (
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.5, type: "spring" }}
                                            className="absolute -top-2 -right-2 bg-bakery-accent text-bakery-dark text-xs font-bold px-2 py-1 rounded-full shadow-lg"
                                        >
                                            Popular
                                        </motion.div>
                                    )}
                                </div>

                                {/* Category Name */}
                                <h3 className="font-serif font-bold text-bakery-dark text-lg tracking-wide group-hover:text-bakery-accent transition-colors">
                                    {cat.name}
                                </h3>

                                {/* Item count (if available) */}
                                <p className="text-sm text-gray-500 mt-1 group-hover:text-bakery-medium transition-colors">
                                    View Collection
                                </p>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
