import { motion } from 'framer-motion';
import { Gift, ArrowRight, Sparkles, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CorporateGifting() {
    return (
        <section className="py-24 bg-bakery-dark text-bakery-paper relative overflow-hidden">
            {/* Background image with parallax feel */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2897&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-bakery-dark via-bakery-dark/90 to-bakery-dark/70"></div>

            {/* Floating gift elements */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 right-20 text-bakery-accent/10"
            >
                <Gift size={100} />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -15, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1.5 }}
                className="absolute bottom-32 left-10 text-white/5"
            >
                <Gift size={80} />
            </motion.div>

            {/* Shimmer effect overlay */}
            <motion.div
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 pointer-events-none"
            />

            <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-16">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2"
                >
                    <div className="flex items-center mb-4">
                        <Sparkles size={16} className="text-bakery-accent mr-2 animate-pulse-soft" />
                        <span className="text-bakery-accent font-bold tracking-widest uppercase">Corporate & Bulk</span>
                    </div>

                    <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6 leading-tight">
                        Sweeten Your <br />
                        <span className="gradient-text-animated">Connections</span>
                    </h2>

                    <p className="text-bakery-light/80 text-lg mb-8 max-w-lg leading-relaxed">
                        From office parties to client appreciation gifts, our bespoke hampers and bulk order services ensure you leave a lasting impression.
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap gap-8 mb-10">
                        {[
                            { icon: Building2, value: '500+', label: 'Corporate Clients' },
                            { icon: Users, value: '10K+', label: 'Events Catered' }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 + i * 0.1 }}
                                className="flex items-center"
                            >
                                <stat.icon size={20} className="text-bakery-accent mr-3" />
                                <div>
                                    <span className="text-2xl font-bold text-white">{stat.value}</span>
                                    <p className="text-xs text-white/60">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-bakery-accent text-bakery-dark font-bold px-8 py-4 rounded-full hover:bg-white transition-colors btn-glow flex items-center"
                        >
                            <Gift size={18} className="mr-2" />
                            Download Brochure
                        </motion.button>
                        <Link to="/contact">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white hover:text-bakery-dark transition-all flex items-center group"
                            >
                                Enquire Now
                                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Product Card */}
                <motion.div
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <motion.div
                        whileHover={{
                            y: -10,
                            rotateY: 5,
                            transition: { duration: 0.3 }
                        }}
                        className="relative"
                    >
                        {/* Glass card */}
                        <div className="glass-card p-6 rounded-2xl max-w-sm">
                            <div className="relative rounded-xl overflow-hidden mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1607114910002-cb77e8f927c2?q=80&w=2070&auto=format&fit=crop"
                                    alt="Luxury Hamper"
                                    className="w-full h-64 object-cover"
                                />
                                {/* Shimmer effect on image */}
                                <motion.div
                                    animate={{ x: ['-100%', '200%'] }}
                                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                                />

                                {/* Badge */}
                                <div className="absolute top-4 left-4 bg-bakery-accent text-bakery-dark font-bold px-3 py-1 rounded-full text-xs">
                                    BESTSELLER
                                </div>
                            </div>

                            <h4 className="font-serif text-2xl font-bold text-white mb-2">The Royal Hamper</h4>
                            <p className="text-white/70 text-sm mb-4">Assorted Cookies, Brownies & Tea Cake</p>

                            <div className="flex justify-between items-center">
                                <span className="text-bakery-accent font-bold text-xl">From $89</span>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors"
                                >
                                    <ArrowRight size={18} />
                                </motion.button>
                            </div>
                        </div>

                        {/* Floating mini cards */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5, type: "spring" }}
                            className="absolute -top-6 -right-6 bg-white text-bakery-dark p-4 rounded-xl shadow-xl"
                        >
                            <span className="text-3xl block mb-1">🎁</span>
                            <span className="text-xs font-bold">Custom<br />Branding</span>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.7, type: "spring" }}
                            className="absolute -bottom-4 -left-4 bg-bakery-accent text-bakery-dark p-4 rounded-xl shadow-xl"
                        >
                            <span className="text-3xl block mb-1">📦</span>
                            <span className="text-xs font-bold">Bulk<br />Discounts</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
