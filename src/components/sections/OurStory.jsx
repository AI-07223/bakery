import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Wheat } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useRef } from 'react';

export default function OurStory() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
    const imageRotate = useTransform(scrollYProgress, [0, 0.5], [-3, 0]);
    const frameOffset = useTransform(scrollYProgress, [0, 0.5], [20, 8]);

    return (
        <section ref={sectionRef} className="py-16 md:py-24 bg-bakery-light overflow-hidden relative">
            {/* Floating wheat decorations */}
            <motion.div
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 right-20 text-bakery-accent/10"
            >
                <Wheat size={40} className="md:hidden" />
                <Wheat size={80} className="hidden md:block" />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, -15, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-32 left-10 text-bakery-medium/10"
            >
                <Wheat size={30} className="md:hidden" />
                <Wheat size={60} className="hidden md:block" />
            </motion.div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">

                    {/* Image Side with 3D effect */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group cursor-pointer">
                            {/* Animated frame */}
                            <motion.div
                                style={{ x: frameOffset, y: frameOffset }}
                                className="absolute inset-0 w-full h-full border-2 border-bakery-accent rounded-lg z-0"
                            />

                            {/* Main image container */}
                            <motion.div
                                style={{ scale: imageScale, rotate: imageRotate }}
                                whileHover={{
                                    scale: 1.02,
                                    rotateY: 5,
                                    rotateX: -5,
                                    transition: { duration: 0.4 }
                                }}
                                className="relative z-10 rounded-lg shadow-2xl overflow-hidden"
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2680&auto=format&fit=crop"
                                    alt="Baker kneading dough"
                                    className="w-full h-auto object-cover aspect-[4/3] transition-all duration-700 group-hover:scale-105"
                                />

                                {/* Overlay gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Caption on hover */}
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-serif text-lg">The Art of Artisan Baking</p>
                                </div>
                            </motion.div>

                            {/* Floating badge */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5, type: "spring" }}
                                className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg z-20"
                            >
                                <span className="text-bakery-accent font-bold text-2xl block">Since</span>
                                <span className="text-bakery-dark font-serif text-3xl font-bold">1985</span>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block"
                        >
                            Our Heritage
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-serif text-bakery-dark font-bold mb-6 leading-tight"
                        >
                            Baking with <br />
                            <span className="relative">
                                Heart & Soul
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    whileInView={{ scaleX: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 0.8 }}
                                    className="absolute -bottom-2 left-0 right-0 h-3 bg-bakery-accent/20 -z-10 origin-left"
                                />
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-bakery-medium/80 text-base md:text-lg mb-4 md:mb-6 leading-relaxed"
                        >
                            Founded in a small kitchen with a big dream, Lumière Bakery has been serving the community with artisanal breads and pastries since 1985. We believe that simple, high-quality ingredients are the secret to extraordinary flavor.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            className="text-bakery-medium/80 text-base md:text-lg mb-6 md:mb-8 leading-relaxed"
                        >
                            Every morning before the sun rises, our bakers are already hard at work, hand-crafting the loaves that will grace your tables. It's not just baking; it's a labor of love.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <Link to="/story">
                                <motion.button
                                    whileHover={{ x: 5 }}
                                    className="text-bakery-dark font-bold border-b-2 border-bakery-accent pb-1 hover:text-bakery-accent transition-colors flex items-center group"
                                >
                                    <span>Read Our Full Story</span>
                                    <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                                </motion.button>
                            </Link>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
