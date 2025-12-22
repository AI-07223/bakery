import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Sparkles, Check, Gift } from 'lucide-react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle, loading, success
    const [isFocused, setIsFocused] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email) return;

        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

    return (
        <section className="py-24 bg-bakery-dark text-bakery-paper relative overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

            {/* Floating decorative elements */}
            <motion.div
                animate={{
                    y: [0, -30, 0],
                    rotate: [0, 10, 0]
                }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 left-10 text-bakery-accent/20"
            >
                <Mail size={80} />
            </motion.div>
            <motion.div
                animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                className="absolute bottom-20 right-20 text-bakery-accent/20"
            >
                <Gift size={60} />
            </motion.div>

            {/* Glowing orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/4 w-64 h-64 bg-bakery-accent rounded-full blur-3xl -translate-y-1/2"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.05, 0.1, 0.05]
                }}
                transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                className="absolute top-1/2 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl -translate-y-1/2"
            />

            <div className="container mx-auto px-6 relative z-10">
                <AnimatePresence mode="wait">
                    {status === 'success' ? (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="text-center max-w-2xl mx-auto"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", delay: 0.2 }}
                                className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8"
                            >
                                <Check size={48} className="text-white" />
                            </motion.div>
                            <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Welcome to the Family!</h2>
                            <p className="text-bakery-light/80 text-lg mb-8">
                                You're now part of our inner circle. Get ready for exclusive offers,
                                early access, and delicious updates straight to your inbox.
                            </p>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => { setStatus('idle'); setEmail(''); }}
                                className="text-bakery-accent font-bold underline"
                            >
                                Subscribe another email
                            </motion.button>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="form"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="max-w-2xl mx-auto text-center"
                        >
                            {/* Header */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="mb-8"
                            >
                                <div className="flex items-center justify-center mb-4">
                                    <Sparkles size={20} className="text-bakery-accent mr-2 animate-pulse-soft" />
                                    <span className="text-bakery-accent font-bold tracking-widest uppercase text-sm">Exclusive Access</span>
                                    <Sparkles size={20} className="text-bakery-accent ml-2 animate-pulse-soft" />
                                </div>
                                <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Join the Inner Circle</h2>
                                <p className="text-bakery-light/80 text-lg">
                                    Receive exclusive offers, early access to seasonal menus, and baking tips straight from our kitchen.
                                </p>
                            </motion.div>

                            {/* Form */}
                            <form onSubmit={handleSubmit} className="relative">
                                <div className={`flex flex-col md:flex-row gap-4 max-w-lg mx-auto transition-all duration-300 ${isFocused ? 'scale-105' : ''}`}>
                                    <div className="relative flex-grow">
                                        <Mail size={20} className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 ${isFocused ? 'text-bakery-accent' : 'text-white/50'}`} />
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            onFocus={() => setIsFocused(true)}
                                            onBlur={() => setIsFocused(false)}
                                            placeholder="Your email address"
                                            className={`w-full bg-white/10 border-2 text-white placeholder-white/50 pl-12 pr-6 py-4 rounded-full focus:outline-none transition-all duration-300 ${isFocused
                                                    ? 'border-bakery-accent bg-white/20 shadow-lg shadow-bakery-accent/20'
                                                    : 'border-bakery-light/20'
                                                }`}
                                            required
                                        />
                                    </div>
                                    <motion.button
                                        type="submit"
                                        disabled={status === 'loading'}
                                        whileHover={{ scale: status === 'loading' ? 1 : 1.05 }}
                                        whileTap={{ scale: status === 'loading' ? 1 : 0.95 }}
                                        className={`font-bold px-8 py-4 rounded-full transition-all duration-300 flex items-center justify-center min-w-[140px] ${status === 'loading'
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-bakery-accent text-bakery-dark hover:bg-white btn-glow'
                                            }`}
                                    >
                                        {status === 'loading' ? (
                                            <motion.div
                                                animate={{ rotate: 360 }}
                                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                                            />
                                        ) : (
                                            'Subscribe'
                                        )}
                                    </motion.button>
                                </div>
                            </form>

                            <p className="mt-6 text-xs text-bakery-light/40">
                                We respect your privacy. Unsubscribe at any time.
                            </p>

                            {/* Benefits */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.3 }}
                                className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-bakery-light/60"
                            >
                                {['Early Access', 'Exclusive Discounts', 'Baking Tips', 'New Arrivals'].map((benefit, i) => (
                                    <div key={i} className="flex items-center">
                                        <Check size={16} className="text-bakery-accent mr-2" />
                                        <span>{benefit}</span>
                                    </div>
                                ))}
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
