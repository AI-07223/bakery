import { motion, useMotionValue, useTransform } from 'framer-motion';
import { Wheat, Timer, FlameKindling } from 'lucide-react';

export default function ProcessSection() {
    const steps = [
        {
            num: "01",
            title: "Sourcing",
            desc: "We partner with local farmers to select the finest organic wheats and grains.",
            icon: Wheat,
            color: "from-amber-400 to-yellow-500"
        },
        {
            num: "02",
            title: "Fermentation",
            desc: "Our doughs are naturally leavened for up to 48 hours for superior flavor.",
            icon: Timer,
            color: "from-orange-400 to-red-500"
        },
        {
            num: "03",
            title: "Baking",
            desc: "Baked fresh daily in our stone hearth ovens for that perfect crust.",
            icon: FlameKindling,
            color: "from-red-400 to-pink-500"
        }
    ];

    return (
        <section className="py-24 bg-bakery-dark text-white relative overflow-hidden">
            {/* Animated Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="white" strokeWidth="1" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            {/* Decorative glowing orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-20 left-1/4 w-64 h-64 bg-bakery-accent rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.1, 0.15, 0.1]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 right-1/4 w-80 h-80 bg-orange-500 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <span className="text-bakery-accent text-sm tracking-widest uppercase font-bold mb-4 block">Our Craft</span>
                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">The Art of Baking</h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg">
                        From grain to loaf, every step is crafted with precision and passion.
                    </p>
                </motion.div>

                {/* Steps with connecting line */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Connecting line */}
                    <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-bakery-accent/30 to-transparent -translate-y-1/2"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2, duration: 0.6 }}
                                    className="text-center group"
                                >
                                    {/* Large background number */}
                                    <div className="relative mb-8">
                                        <motion.span
                                            initial={{ opacity: 0 }}
                                            whileInView={{ opacity: 0.05 }}
                                            viewport={{ once: true }}
                                            className="text-[150px] font-serif font-bold absolute -top-16 left-1/2 -translate-x-1/2 text-white pointer-events-none select-none group-hover:opacity-10 transition-opacity duration-500"
                                        >
                                            {step.num}
                                        </motion.span>

                                        {/* Icon container with glow */}
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 5 }}
                                            className="relative z-10 w-24 h-24 mx-auto"
                                        >
                                            {/* Glow effect */}
                                            <motion.div
                                                animate={{
                                                    scale: [1, 1.2, 1],
                                                    opacity: [0.3, 0.5, 0.3]
                                                }}
                                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                                                className={`absolute inset-0 bg-gradient-to-br ${step.color} rounded-full blur-xl`}
                                            />

                                            {/* Icon circle */}
                                            <div className={`relative w-full h-full rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg`}>
                                                <Icon size={40} className="text-white" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-2xl font-serif font-bold mb-4 text-bakery-accent">{step.title}</h3>
                                    <p className="text-gray-400 leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* Bottom decorative text */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 0.02 }}
                    viewport={{ once: true }}
                    className="text-center mt-20 overflow-hidden pointer-events-none"
                >
                    <span className="text-[120px] md:text-[200px] font-serif font-bold text-white whitespace-nowrap">
                        PASSION
                    </span>
                </motion.div>
            </div>
        </section>
    );
}
