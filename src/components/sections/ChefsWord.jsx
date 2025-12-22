import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ChefsWord() {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);
    const textY = useTransform(scrollYProgress, [0, 1], [30, -30]);

    return (
        <section ref={sectionRef} className="py-24 bg-bakery-paper relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-20 right-10 w-64 h-64 bg-bakery-accent/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-10 w-48 h-48 bg-bakery-dark/5 rounded-full blur-3xl"></div>

            {/* Floating steam/aroma elements */}
            {[...Array(5)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-20, -100],
                        opacity: [0, 0.3, 0],
                        scale: [0.5, 1.5]
                    }}
                    transition={{
                        duration: 3 + i * 0.5,
                        repeat: Infinity,
                        delay: i * 0.8
                    }}
                    className="absolute left-1/4 top-1/2 w-8 h-8 bg-bakery-accent/10 rounded-full blur-md"
                    style={{ left: `${20 + i * 5}%` }}
                />
            ))}

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Image Side with Parallax */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <motion.div
                            style={{ y: imageY }}
                            className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2070&auto=format&fit=crop"
                                alt="Chef Emile creating pastries"
                                className="w-full h-full object-cover"
                            />

                            {/* Gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/40 via-transparent to-transparent"></div>

                            {/* Decorative frame */}
                            <div className="absolute inset-4 border border-white/20 rounded-xl pointer-events-none"></div>
                        </motion.div>

                        {/* Floating accent elements */}
                        <motion.div
                            animate={{
                                scale: [1, 1.1, 1],
                                opacity: [0.3, 0.5, 0.3]
                            }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute -bottom-10 -right-10 w-40 h-40 bg-bakery-accent/20 rounded-full blur-2xl"
                        />
                        <motion.div
                            animate={{
                                scale: [1.1, 1, 1.1],
                                opacity: [0.2, 0.4, 0.2]
                            }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute -top-10 -left-10 w-32 h-32 bg-bakery-dark/10 rounded-full blur-xl"
                        />

                        {/* Experience badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -bottom-6 -right-6 md:right-auto md:-left-6 bg-bakery-accent text-bakery-dark p-4 rounded-xl shadow-lg"
                        >
                            <span className="text-3xl font-serif font-bold block">25+</span>
                            <span className="text-xs font-bold uppercase tracking-wide">Years of<br />Excellence</span>
                        </motion.div>
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        style={{ y: textY }}
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <span className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block">A Note from the Chef</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-bakery-dark font-bold mb-8 leading-tight">
                            Baking with <br />
                            <span className="gradient-text">Heart & Soul</span>
                        </h2>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="font-light italic text-xl border-l-4 border-bakery-accent pl-6"
                            >
                                "At Lumière, we believe that pastry is an edible art form. It's not just about the recipe; it's about the patience, the precision, and the respect for ingredients."
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                Every croissant we roll and every loaf we bake tells a story of tradition meeting innovation. We wake up before the sun to ensure that your first bite of the day is nothing short of magical.
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.5 }}
                            >
                                Thank you for letting us be a part of your daily rituals and special celebrations.
                            </motion.p>
                        </div>

                        {/* Signature */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-10"
                        >
                            <motion.div
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                className="mb-3"
                            >
                                <svg width="200" height="60" viewBox="0 0 200 60" className="opacity-70">
                                    <motion.path
                                        d="M10 45 Q 30 10, 50 35 T 90 30 Q 110 25, 130 40 T 180 35"
                                        fill="none"
                                        stroke="#2C1810"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        initial={{ pathLength: 0 }}
                                        whileInView={{ pathLength: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 2, delay: 0.8 }}
                                    />
                                </svg>
                            </motion.div>
                            <p className="font-serif font-bold text-xl text-bakery-dark">Emile Laurent</p>
                            <p className="text-sm text-bakery-accent font-bold uppercase tracking-widest">Head Pastry Chef</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
