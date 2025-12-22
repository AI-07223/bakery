import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown, Sparkles } from 'lucide-react';

// Floating particle component
const Particle = ({ style, delay }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [0, -100, -200]
        }}
        transition={{
            duration: 4,
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3
        }}
        className="absolute w-2 h-2 bg-bakery-accent/40 rounded-full blur-[1px]"
        style={style}
    />
);

export default function Hero() {
    const { scrollY } = useScroll();
    const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
    const textY = useTransform(scrollY, [0, 500], [0, 100]);
    const opacity = useTransform(scrollY, [0, 400], [1, 0]);

    // Generate random particles
    const particles = Array.from({ length: 12 }, (_, i) => ({
        left: `${10 + Math.random() * 80}%`,
        bottom: `${10 + Math.random() * 20}%`,
        delay: i * 0.3
    }));

    return (
        <section className="relative min-h-[90vh] md:h-screen w-full overflow-hidden">
            {/* Parallax Background */}
            <motion.div
                style={{ y: backgroundY }}
                className="absolute inset-0 bg-bakery-dark"
            >
                <div className="absolute inset-0 bg-[url('/images/hero.png')] bg-cover bg-center animate-slow-zoom"></div>

                {/* Multi-layer gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-bakery-dark/90"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-bakery-dark/50 via-transparent to-bakery-dark/50"></div>

                {/* Animated gradient accent */}
                <motion.div
                    animate={{
                        opacity: [0.1, 0.2, 0.1],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-1/4 left-1/4 w-48 md:w-96 h-48 md:h-96 bg-bakery-accent/20 rounded-full blur-3xl"
                />
            </motion.div>

            {/* Floating Particles */}
            {particles.map((particle, i) => (
                <Particle key={i} style={{ left: particle.left, bottom: particle.bottom }} delay={particle.delay} />
            ))}

            {/* Content */}
            <motion.div
                style={{ y: textY, opacity }}
                className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4"
            >
                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="flex items-center mb-6"
                >
                    <Sparkles size={16} className="text-bakery-accent mr-2 animate-pulse-soft" />
                    <span className="text-bakery-accent text-sm md:text-lg lg:text-xl tracking-[0.2em] md:tracking-[0.3em] font-medium uppercase">
                        Artisanal & Authentic
                    </span>
                    <Sparkles size={16} className="text-bakery-accent ml-2 animate-pulse-soft" />
                </motion.div>

                {/* Main Title with staggered reveal */}
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-bakery-paper mb-2 leading-tight"
                    >
                        Baking Life
                    </motion.h1>
                </div>
                <div className="overflow-hidden">
                    <motion.h1
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-4 md:mb-6 leading-tight"
                    >
                        <span className="gradient-text-animated">Sweet</span>
                    </motion.h1>
                </div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="text-gray-300 text-base md:text-lg lg:text-xl max-w-2xl font-light mb-6 md:mb-10 leading-relaxed px-2"
                >
                    Crafting moments of joy with every loaf, pastry, and cake. <br className="hidden md:block" />
                    Experience the taste of tradition in every bite.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    className="flex flex-col sm:flex-row gap-4"
                >
                    <Link to="/menu">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-bakery-accent text-bakery-dark font-bold py-3 px-6 md:py-4 md:px-10 rounded-full shadow-lg shadow-bakery-accent/30 hover:shadow-xl hover:shadow-bakery-accent/40 transition-all duration-300 btn-glow text-sm md:text-base"
                        >
                            Explore Menu
                        </motion.button>
                    </Link>
                    <Link to="/story">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -3 }}
                            whileTap={{ scale: 0.98 }}
                            className="border-2 border-white/30 text-white font-bold py-3 px-6 md:py-4 md:px-10 rounded-full hover:bg-white hover:text-bakery-dark transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
                        >
                            Our Story
                        </motion.button>
                    </Link>
                </motion.div>

                {/* Trust badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-8 md:mt-16 flex items-center gap-4 md:gap-8 text-white/50 text-xs md:text-sm"
                >
                    <div className="flex items-center">
                        <span className="text-bakery-accent font-bold text-xl md:text-2xl mr-1 md:mr-2">40+</span>
                        <span>Years of<br />Excellence</span>
                    </div>
                    <div className="w-[1px] h-10 bg-white/20"></div>
                    <div className="flex items-center">
                        <span className="text-bakery-accent font-bold text-xl md:text-2xl mr-1 md:mr-2">3</span>
                        <span>NYC<br />Locations</span>
                    </div>
                    <div className="w-[1px] h-10 bg-white/20 hidden sm:block"></div>
                    <div className="hidden sm:flex items-center">
                        <span className="text-bakery-accent font-bold text-xl md:text-2xl mr-1 md:mr-2">100%</span>
                        <span>Organic<br />Ingredients</span>
                    </div>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer group"
            >
                <span className="text-white/50 text-xs mb-3 tracking-widest uppercase group-hover:text-white/80 transition-colors">
                    Scroll to explore
                </span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-6 h-10 md:w-8 md:h-12 border-2 border-white/30 rounded-full flex items-start justify-center p-1.5 md:p-2 group-hover:border-white/50 transition-colors"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="w-1.5 h-3 bg-bakery-accent rounded-full"
                    />
                </motion.div>
            </motion.div>

            {/* Decorative corner frames */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 w-12 h-12 md:w-20 md:h-20 border-l-2 border-t-2 border-white/10"></div>
            <div className="absolute top-4 right-4 md:top-8 md:right-8 w-12 h-12 md:w-20 md:h-20 border-r-2 border-t-2 border-white/10"></div>
            <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 w-12 h-12 md:w-20 md:h-20 border-l-2 border-b-2 border-white/10"></div>
            <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-12 h-12 md:w-20 md:h-20 border-r-2 border-b-2 border-white/10"></div>
        </section>
    );
}
