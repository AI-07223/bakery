import { motion } from 'framer-motion';
import { Instagram, Heart, MessageCircle, ExternalLink } from 'lucide-react';

const images = [
    {
        url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?q=80&w=2070&auto=format&fit=crop",
        likes: "2.4k",
        comments: "89"
    },
    {
        url: "https://images.unsplash.com/photo-1579697096985-41fe1430e5df?q=80&w=2072&auto=format&fit=crop",
        likes: "1.8k",
        comments: "67"
    },
    {
        url: "https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?q=80&w=2070&auto=format&fit=crop",
        likes: "3.1k",
        comments: "124"
    },
    {
        url: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=1974&auto=format&fit=crop",
        likes: "2.7k",
        comments: "98"
    },
    {
        url: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop",
        likes: "1.5k",
        comments: "56"
    },
    {
        url: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=2074&auto=format&fit=crop",
        likes: "4.2k",
        comments: "156"
    }
];

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

export default function InstagramFeed() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-bakery-paper to-transparent"></div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center mb-2">
                            <motion.div
                                animate={{ rotate: [0, 10, -10, 0] }}
                                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                            >
                                <Instagram size={24} className="text-pink-500 mr-3" />
                            </motion.div>
                            <span className="text-bakery-dark/50 text-sm tracking-widest uppercase font-bold">@lumiere.bakery</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-bakery-dark">
                            Follow Our Journey
                        </h2>
                    </motion.div>

                    <motion.a
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="hidden md:flex items-center mt-4 md:mt-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-lg hover:shadow-pink-500/30 transition-all group"
                    >
                        <Instagram size={20} className="mr-2" />
                        <span>Follow Us</span>
                        <ExternalLink size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </motion.a>
                </div>

                {/* Instagram Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
                >
                    {images.map((img, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, zIndex: 10 }}
                            className="aspect-square relative group cursor-pointer overflow-hidden rounded-lg"
                        >
                            {/* Image */}
                            <img
                                src={img.url}
                                alt="Instagram post"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            {/* Hover Overlay */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center transition-all duration-300"
                            >
                                {/* Stats */}
                                <div className="flex items-center space-x-4 text-white mb-4">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ delay: 0.1 }}
                                        className="flex items-center"
                                    >
                                        <Heart size={18} className="mr-1 text-red-400" fill="currentColor" />
                                        <span className="text-sm font-medium">{img.likes}</span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        whileHover={{ scale: 1 }}
                                        transition={{ delay: 0.2 }}
                                        className="flex items-center"
                                    >
                                        <MessageCircle size={18} className="mr-1" />
                                        <span className="text-sm font-medium">{img.comments}</span>
                                    </motion.div>
                                </div>

                                {/* Instagram Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileHover={{ scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", stiffness: 200 }}
                                    className="bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 p-3 rounded-full"
                                >
                                    <Instagram className="text-white" size={24} />
                                </motion.div>
                            </motion.div>

                            {/* Animated border on hover */}
                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/30 rounded-lg transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-10 md:hidden text-center"
                >
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white font-bold px-8 py-4 rounded-full"
                    >
                        <Instagram size={20} className="mr-2" />
                        <span>Follow Us on Instagram</span>
                    </a>
                </motion.div>

                {/* Decorative text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.03 }}
                    viewport={{ once: true }}
                    className="absolute bottom-0 left-0 right-0 text-center overflow-hidden pointer-events-none"
                >
                    <span className="text-[200px] font-serif font-bold text-bakery-dark whitespace-nowrap">
                        #LumiereBakery
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
