import { motion } from 'framer-motion';
import { ArrowRight, Clock, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const posts = [
    {
        id: 1,
        title: "The Secret to Our Sourdough Starter",
        excerpt: "Why our 50-year-old wild yeast culture makes all the difference in every loaf we bake.",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop",
        date: "Dec 12, 2024",
        readTime: "5 min read",
        category: "Behind the Scenes"
    },
    {
        id: 2,
        title: "5 Tips for Keeping Pastries Fresh",
        excerpt: "Chef Marie shares her top tips for storing your baked goods to maintain that just-baked taste.",
        image: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2080&auto=format&fit=crop",
        date: "Nov 28, 2024",
        readTime: "3 min read",
        category: "Tips & Tricks"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

export default function BlogPreview() {
    return (
        <section className="py-24 bg-bakery-paper border-t border-bakery-medium/10 relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-bakery-accent/5 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center mb-2">
                            <BookOpen size={18} className="text-bakery-accent mr-2" />
                            <span className="text-bakery-accent font-bold tracking-widest uppercase">The Journal</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif text-bakery-dark font-bold">Behind the Oven</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link to="/blog">
                            <motion.button
                                whileHover={{ x: 5 }}
                                className="hidden md:flex items-center text-bakery-medium hover:text-bakery-dark transition-colors font-bold group"
                            >
                                <span>Read All Articles</span>
                                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </motion.div>
                </div>

                {/* Blog Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {posts.map((post) => (
                        <motion.article
                            key={post.id}
                            variants={cardVariants}
                            whileHover={{ y: -8 }}
                            className="group cursor-pointer"
                        >
                            <Link to={`/blog/${post.id}`}>
                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden rounded-xl mb-6">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                    />

                                    {/* Overlay gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Category badge */}
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        className="absolute top-4 left-4 bg-bakery-accent text-bakery-dark font-bold text-xs px-3 py-1 rounded-full"
                                    >
                                        {post.category}
                                    </motion.div>

                                    {/* Read more indicator */}
                                    <div className="absolute bottom-4 right-4 bg-white text-bakery-dark p-3 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                                        <ArrowRight size={18} />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex items-center gap-4 text-xs text-bakery-medium/60 uppercase tracking-widest mb-3">
                                    <span>{post.date}</span>
                                    <span className="w-1 h-1 bg-bakery-medium/40 rounded-full"></span>
                                    <span className="flex items-center">
                                        <Clock size={12} className="mr-1" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-serif font-bold text-bakery-dark mb-3 group-hover:text-bakery-accent transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-bakery-medium/80 leading-relaxed mb-4">
                                    {post.excerpt}
                                </p>

                                <span className="inline-flex items-center text-bakery-dark font-bold text-sm group-hover:text-bakery-accent transition-colors">
                                    Read More
                                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Link>
                        </motion.article>
                    ))}
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 md:hidden text-center"
                >
                    <Link to="/blog">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center bg-bakery-dark text-white font-bold px-8 py-4 rounded-full"
                        >
                            View All Articles
                            <ArrowRight size={18} className="ml-2" />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
