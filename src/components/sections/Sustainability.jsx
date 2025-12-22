import { motion } from 'framer-motion';
import { Leaf, Award, Recycle, Sparkles, TreeDeciduous, Droplets } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: "100% Organic Flour",
        desc: "We source exclusively from local mills that practice regenerative farming, ensuring the purest grains for our bread.",
        gradient: "from-green-400 to-emerald-500"
    },
    {
        icon: Recycle,
        title: "Zero Waste Packaging",
        desc: "All our boxes, bags, and cups are 100% compostable or recyclable. We believe beauty shouldn't cost the earth.",
        gradient: "from-blue-400 to-cyan-500"
    },
    {
        icon: Award,
        title: "Ethical Sourcing",
        desc: "From fair-trade chocolate to locally churned butter, we support producers who treat their workers and animals with respect.",
        gradient: "from-amber-400 to-orange-500"
    }
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
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

// Floating leaf particle
const FloatingLeaf = ({ delay, left }) => (
    <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{
            opacity: [0, 1, 0],
            y: -200,
            x: [0, Math.random() * 50 - 25, Math.random() * 30 - 15],
            rotate: [0, 360]
        }}
        transition={{
            duration: 5,
            delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 3
        }}
        className="absolute pointer-events-none text-bakery-accent/30"
        style={{ left: `${left}%`, bottom: '10%' }}
    >
        <Leaf size={16 + Math.random() * 16} />
    </motion.div>
);

export default function Sustainability() {
    return (
        <section className="py-24 bg-bakery-dark text-white relative overflow-hidden">
            {/* Floating leaf particles */}
            {[...Array(8)].map((_, i) => (
                <FloatingLeaf key={i} delay={i * 0.8} left={10 + i * 12} />
            ))}

            {/* Background decorative elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 left-1/4 w-96 h-96 bg-green-500 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.08, 0.05]
                }}
                transition={{ duration: 8, repeat: Infinity, delay: 2 }}
                className="absolute bottom-20 right-1/4 w-80 h-80 bg-blue-500 rounded-full blur-3xl"
            />

            <div className="container mx-auto px-6 relative z-10">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <div className="flex items-center justify-center mb-4">
                        <TreeDeciduous size={20} className="text-green-400 mr-2 animate-bounce-gentle" />
                        <span className="text-bakery-accent font-bold tracking-widest uppercase">Conscious Baking</span>
                        <Droplets size={20} className="text-blue-400 ml-2 animate-bounce-gentle" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                        Sustainable & <span className="gradient-text">Local</span>
                    </h2>
                    <p className="text-white/70 text-lg">
                        We are committed to reducing our footprint while maximizing quality. Good for you, good for the planet.
                    </p>
                </motion.div>

                {/* Feature Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="group relative"
                            >
                                <div className="glass-card p-8 rounded-2xl text-center h-full transition-all duration-300 group-hover:bg-white/20">
                                    {/* Glow effect on hover */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        whileHover={{ opacity: 1 }}
                                        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300 blur-xl`}
                                    />

                                    {/* Icon */}
                                    <motion.div
                                        whileHover={{ rotate: 360, scale: 1.1 }}
                                        transition={{ duration: 0.5 }}
                                        className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                                    >
                                        <Icon size={36} className="text-white" />
                                    </motion.div>

                                    <h3 className="text-xl font-serif font-bold mb-4 group-hover:text-bakery-accent transition-colors">
                                        {feature.title}
                                    </h3>
                                    <p className="text-white/60 leading-relaxed">{feature.desc}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-16 flex flex-wrap justify-center gap-12 text-center"
                >
                    {[
                        { value: '100%', label: 'Organic Ingredients' },
                        { value: '50mi', label: 'Local Sourcing Radius' },
                        { value: '0', label: 'Plastic Packaging' },
                        { value: '90%', label: 'Carbon Neutral' }
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                        >
                            <span className="text-4xl font-serif font-bold text-bakery-accent">{stat.value}</span>
                            <p className="text-sm text-white/50 mt-1">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
