import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SeoHead from '../components/seo/SeoHead';
import { Clock, Award, Heart, Users, Wheat, ChefHat } from 'lucide-react';

const timelineEvents = [
    {
        year: "1985",
        title: "The Beginning",
        description: "Eleanor Lumière opened a small kitchen in West Village with a single sourdough starter and a dream.",
        icon: Clock
    },
    {
        year: "1995",
        title: "First Boutique",
        description: "After a decade of perfecting our craft, we opened our first retail boutique to share our passion with the world.",
        icon: Award
    },
    {
        year: "2005",
        title: "Expanding Love",
        description: "Our second location opened in Brooklyn, bringing artisanal baking to a new neighborhood.",
        icon: Heart
    },
    {
        year: "2015",
        title: "Growing Family",
        description: "With 50 dedicated artisans, we continue the tradition of handcrafted excellence every single day.",
        icon: Users
    },
    {
        year: "Today",
        title: "The Legacy Continues",
        description: "Three locations, one mission: to bring joy through the timeless art of baking.",
        icon: ChefHat
    }
];

// Floating decorative element component
const FloatingElement = ({ className, delay = 0, children }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 0.15, y: 0 }}
        transition={{ delay, duration: 1 }}
        className={`absolute pointer-events-none ${className}`}
    >
        {children}
    </motion.div>
);

export default function StoryPage() {
    const { scrollYProgress } = useScroll();
    const heroY = useTransform(scrollYProgress, [0, 0.3], [0, 150]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.3]);
    const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

    return (
        <div className="min-h-screen bg-bakery-paper overflow-hidden">
            <SeoHead title="Our Story | Lumière Bakery" description="The history and heritage of our artisanal bakery." />

            {/* Parallax Hero */}
            <div className="h-[80vh] relative flex items-center justify-center text-center overflow-hidden">
                {/* Parallax Background */}
                <motion.div
                    style={{ y: heroY, scale: heroScale, opacity: heroOpacity }}
                    className="absolute inset-0"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2680&auto=format&fit=crop')] bg-cover bg-center"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-bakery-dark/70 via-bakery-dark/50 to-bakery-dark/80"></div>
                </motion.div>

                {/* Floating Wheat Elements */}
                <FloatingElement className="top-20 left-10 animate-float" delay={0.5}>
                    <Wheat size={80} className="text-bakery-accent" />
                </FloatingElement>
                <FloatingElement className="bottom-40 right-20 animate-float-delayed" delay={0.8}>
                    <Wheat size={60} className="text-bakery-light rotate-45" />
                </FloatingElement>
                <FloatingElement className="top-1/3 right-1/4 animate-float-slow" delay={1}>
                    <div className="w-4 h-4 bg-bakery-accent rounded-full blur-sm"></div>
                </FloatingElement>

                {/* Hero Content */}
                <div className="relative z-10 text-white px-6 max-w-4xl">
                    <motion.span
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="inline-block text-bakery-accent text-lg tracking-[0.3em] font-medium uppercase mb-6"
                    >
                        Est. 1985
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8 leading-tight"
                    >
                        <span className="block">Our Heritage</span>
                        <span className="block text-bakery-accent italic text-4xl md:text-5xl lg:text-6xl mt-2">& Passion</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto leading-relaxed"
                    >
                        Baking with heart, soul, and tradition for nearly four decades.
                    </motion.p>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5, duration: 1 }}
                        className="absolute -bottom-32 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
                    >
                        <span className="text-white/50 text-xs tracking-widest uppercase mb-3">Scroll to explore</span>
                        <div className="w-[1px] h-20 bg-white/20 relative overflow-hidden">
                            <motion.div
                                animate={{ y: [0, 80, 0] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-bakery-accent to-transparent"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Story Introduction */}
            <section className="py-24 bg-white relative">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block">Our Philosophy</span>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold text-bakery-dark mb-8">
                                Simple Ingredients,<br />Extraordinary Flavor
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                                It started with a single sourdough starter and a dream. Our founder, Eleanor Lumière,
                                believed that bread should be more than just sustenance—it should be an experience.
                                In a small kitchen in the West Village, she began experimenting with ancient grains
                                and wild fermentation techniques, reviving lost traditions of French baking.
                            </p>
                            <div className="decorative-line w-32 mx-auto"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Image Gallery */}
            <section className="py-16 bg-bakery-paper">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { img: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&w=2070&auto=format&fit=crop", label: "Hand Crafted" },
                            { img: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?q=80&w=2070&auto=format&fit=crop", label: "Fresh Daily" },
                            { img: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop", label: "With Love" }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative aspect-[4/5] overflow-hidden rounded-sm"
                            >
                                <img
                                    src={item.img}
                                    alt={item.label}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-bakery-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                    <span className="text-white font-serif text-2xl font-bold">{item.label}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-24 bg-bakery-dark text-white relative overflow-hidden">
                {/* Decorative Background */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-10 w-64 h-64 bg-bakery-accent rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 right-10 w-96 h-96 bg-bakery-light rounded-full blur-3xl"></div>
                </div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <span className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block">Our Journey</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold">A Timeline of Passion</h2>
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative max-w-4xl mx-auto">
                        {/* Center Line */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full bg-gradient-to-b from-bakery-accent via-bakery-accent to-transparent"></div>

                        {timelineEvents.map((event, index) => {
                            const Icon = event.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={event.year}
                                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className={`relative flex items-center mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content */}
                                    <div className={`w-full md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                                        <div className="glass-card p-6 rounded-lg hover:bg-white/20 transition-colors duration-300">
                                            <span className="text-bakery-accent font-bold text-sm tracking-widest">{event.year}</span>
                                            <h3 className="text-2xl font-serif font-bold mt-2 mb-3">{event.title}</h3>
                                            <p className="text-white/70 leading-relaxed">{event.description}</p>
                                        </div>
                                    </div>

                                    {/* Center Icon */}
                                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                                        <motion.div
                                            whileHover={{ scale: 1.2, rotate: 10 }}
                                            className="w-14 h-14 bg-bakery-accent rounded-full flex items-center justify-center shadow-lg shadow-bakery-accent/30"
                                        >
                                            <Icon size={24} className="text-bakery-dark" />
                                        </motion.div>
                                    </div>

                                    {/* Empty side */}
                                    <div className="hidden md:block w-1/2"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <span className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block">What We Believe</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-bakery-dark">Our Core Values</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        {[
                            {
                                title: "No Shortcuts",
                                desc: "We refuse to compromise. No preservatives, no artificial ingredients. Just flour, water, salt, and time.",
                                gradient: "from-amber-400 to-orange-500"
                            },
                            {
                                title: "Local First",
                                desc: "We work with local farmers to source the finest organic grains and dairy from within 100 miles.",
                                gradient: "from-emerald-400 to-teal-500"
                            },
                            {
                                title: "Community Love",
                                desc: "Every customer is family. We bake not just for profit, but to bring joy to our neighborhood.",
                                gradient: "from-rose-400 to-pink-500"
                            }
                        ].map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="group relative bg-bakery-paper p-8 rounded-sm overflow-hidden hover-lift"
                            >
                                {/* Gradient accent line */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${value.gradient}`}></div>

                                <h3 className="text-2xl font-serif font-bold text-bakery-dark mb-4">{value.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-24 bg-bakery-light relative overflow-hidden">
                <FloatingElement className="top-10 right-20 animate-float">
                    <div className="w-32 h-32 border-2 border-bakery-accent/20 rounded-full"></div>
                </FloatingElement>
                <FloatingElement className="bottom-10 left-10 animate-float-delayed">
                    <div className="w-20 h-20 border-2 border-bakery-dark/10 rounded-full"></div>
                </FloatingElement>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="max-w-2xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-serif font-bold text-bakery-dark mb-6">
                            Come Taste the Tradition
                        </h2>
                        <p className="text-gray-600 text-lg mb-10">
                            Visit one of our boutiques and experience the warmth, aroma, and craftsmanship
                            that has defined Lumière Bakery for nearly 40 years.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-bakery-dark text-white font-bold py-4 px-10 rounded-full hover:bg-bakery-accent hover:text-bakery-dark transition-colors btn-glow"
                        >
                            Find a Location
                        </motion.button>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
