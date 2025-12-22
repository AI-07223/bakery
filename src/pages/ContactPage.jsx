import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SeoHead from '../components/seo/SeoHead';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, CheckCircle } from 'lucide-react';

const contactInfo = [
    {
        icon: Phone,
        title: "Phone",
        detail: "+1 (212) 555-0199",
        subDetail: "Mon-Sun: 9am - 6pm",
        color: "bg-emerald-500"
    },
    {
        icon: Mail,
        title: "Email",
        detail: "hello@lumierebakery.com",
        subDetail: "We reply within 24 hours",
        color: "bg-blue-500"
    },
    {
        icon: MapPin,
        title: "Headquarters",
        detail: "123 Baker St, West Village",
        subDetail: "New York, NY 10014",
        color: "bg-rose-500"
    }
];

// Floating particle component
const FloatingParticle = ({ delay, size, left, duration }) => (
    <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
            opacity: [0, 0.6, 0],
            y: -200,
            x: [0, Math.random() * 40 - 20, 0]
        }}
        transition={{
            duration: duration || 4,
            delay: delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 2
        }}
        className="absolute pointer-events-none"
        style={{ left: `${left}%`, bottom: '10%' }}
    >
        <div
            className="rounded-full bg-bakery-accent/30"
            style={{ width: size, height: size }}
        />
    </motion.div>
);

export default function ContactPage() {
    const [formState, setFormState] = useState({ submitted: false, loading: false });
    const [focusedField, setFocusedField] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormState({ loading: true, submitted: false });
        // Simulate submission
        setTimeout(() => {
            setFormState({ loading: false, submitted: true });
        }, 1500);
    };

    return (
        <div className="pt-24 min-h-screen bg-bakery-paper overflow-hidden">
            <SeoHead title="Contact | Lumière Bakery" description="Get in touch with us for inquiries and orders." />

            {/* Hero Section with floating particles */}
            <section className="relative py-16 overflow-hidden">
                {/* Floating Particles */}
                {[...Array(8)].map((_, i) => (
                    <FloatingParticle
                        key={i}
                        delay={i * 0.5}
                        size={`${8 + Math.random() * 12}px`}
                        left={10 + (i * 12)}
                        duration={3 + Math.random() * 2}
                    />
                ))}

                {/* Background decorations */}
                <div className="absolute top-20 right-10 w-72 h-72 bg-bakery-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-20 w-48 h-48 bg-bakery-dark/5 rounded-full blur-2xl"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center"
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block"
                        >
                            <MessageCircle size={16} className="inline mr-2 animate-bounce-gentle" />
                            Get in Touch
                        </motion.span>
                        <h1 className="text-4xl md:text-6xl font-serif text-bakery-dark font-bold mb-6">Contact Us</h1>
                        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                            We'd love to hear from you. Whether you have a question, feedback, or just want to say hello.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content */}
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

                    {/* Contact Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-3xl font-serif font-bold text-bakery-dark mb-4">
                            We'd love to hear from you
                        </h3>
                        <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                            Whether you have a question about our menu, need a custom cake for a special occasion,
                            or just want to say hello, we are here to help.
                        </p>

                        <div className="space-y-6">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15, duration: 0.5 }}
                                        whileHover={{ x: 10, transition: { duration: 0.2 } }}
                                        className="flex items-start group cursor-pointer"
                                    >
                                        <motion.div
                                            whileHover={{ scale: 1.1, rotate: 10 }}
                                            className={`${info.color} p-4 rounded-2xl mr-6 text-white shadow-lg`}
                                        >
                                            <Icon size={24} />
                                        </motion.div>
                                        <div>
                                            <h4 className="font-bold text-bakery-dark mb-1 text-lg group-hover:text-bakery-accent transition-colors">
                                                {info.title}
                                            </h4>
                                            <p className="text-gray-700">{info.detail}</p>
                                            <p className="text-sm text-gray-500 mt-1 flex items-center">
                                                <Clock size={12} className="mr-1" />
                                                {info.subDetail}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Social/Quick Actions */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 p-6 bg-bakery-light rounded-lg"
                        >
                            <h4 className="font-serif font-bold text-bakery-dark mb-4">Quick Response</h4>
                            <p className="text-sm text-gray-600 mb-4">Need urgent help? Chat with us on WhatsApp for immediate assistance.</p>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-green-500 text-white font-bold py-3 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                            >
                                <MessageCircle size={20} className="mr-2" />
                                Chat on WhatsApp
                            </motion.button>
                        </motion.div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <AnimatePresence mode="wait">
                            {formState.submitted ? (
                                <motion.div
                                    key="success"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.8 }}
                                    className="bg-white p-12 rounded-sm shadow-xl text-center"
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ type: "spring", delay: 0.2 }}
                                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                                    >
                                        <CheckCircle size={40} className="text-white" />
                                    </motion.div>
                                    <h3 className="text-2xl font-serif font-bold text-bakery-dark mb-4">Message Sent!</h3>
                                    <p className="text-gray-600 mb-6">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => setFormState({ submitted: false, loading: false })}
                                        className="text-bakery-accent font-bold underline"
                                    >
                                        Send another message
                                    </motion.button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="form"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="bg-white p-8 md:p-12 rounded-sm shadow-xl relative overflow-hidden"
                                >
                                    {/* Decorative corner */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-bakery-accent/5 rounded-bl-full"></div>

                                    <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {[
                                                { name: 'firstName', label: 'First Name', type: 'text' },
                                                { name: 'lastName', label: 'Last Name', type: 'text' }
                                            ].map((field) => (
                                                <div key={field.name} className="relative">
                                                    <label className="block text-sm font-bold text-bakery-dark mb-2">
                                                        {field.label}
                                                    </label>
                                                    <motion.input
                                                        type={field.type}
                                                        onFocus={() => setFocusedField(field.name)}
                                                        onBlur={() => setFocusedField(null)}
                                                        className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-lg focus:outline-none transition-all duration-300 ${focusedField === field.name
                                                            ? 'border-bakery-accent bg-white shadow-lg shadow-bakery-accent/10'
                                                            : 'border-gray-200'
                                                            }`}
                                                        required
                                                    />
                                                    {focusedField === field.name && (
                                                        <motion.div
                                                            layoutId="focusIndicator"
                                                            className="absolute -bottom-1 left-4 right-4 h-[2px] bg-bakery-accent"
                                                            initial={{ scaleX: 0 }}
                                                            animate={{ scaleX: 1 }}
                                                            transition={{ duration: 0.2 }}
                                                        />
                                                    )}
                                                </div>
                                            ))}
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm font-bold text-bakery-dark mb-2">
                                                Email Address
                                            </label>
                                            <motion.input
                                                type="email"
                                                onFocus={() => setFocusedField('email')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-lg focus:outline-none transition-all duration-300 ${focusedField === 'email'
                                                    ? 'border-bakery-accent bg-white shadow-lg shadow-bakery-accent/10'
                                                    : 'border-gray-200'
                                                    }`}
                                                required
                                            />
                                        </div>

                                        <div className="relative">
                                            <label className="block text-sm font-bold text-bakery-dark mb-2">
                                                Message
                                            </label>
                                            <motion.textarea
                                                rows="5"
                                                onFocus={() => setFocusedField('message')}
                                                onBlur={() => setFocusedField(null)}
                                                className={`w-full px-4 py-4 bg-gray-50 border-2 rounded-lg focus:outline-none transition-all duration-300 resize-none ${focusedField === 'message'
                                                    ? 'border-bakery-accent bg-white shadow-lg shadow-bakery-accent/10'
                                                    : 'border-gray-200'
                                                    }`}
                                                required
                                            />
                                        </div>

                                        <motion.button
                                            type="submit"
                                            disabled={formState.loading}
                                            whileHover={{ scale: formState.loading ? 1 : 1.02 }}
                                            whileTap={{ scale: formState.loading ? 1 : 0.98 }}
                                            className={`w-full font-bold py-4 rounded-lg flex justify-center items-center group transition-all duration-300 ${formState.loading
                                                ? 'bg-gray-400 cursor-not-allowed'
                                                : 'bg-bakery-dark text-white hover:bg-bakery-accent hover:text-bakery-dark btn-glow'
                                                }`}
                                        >
                                            {formState.loading ? (
                                                <motion.div
                                                    animate={{ rotate: 360 }}
                                                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                                    className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                                                />
                                            ) : (
                                                <>
                                                    <span>Send Message</span>
                                                    <Send size={18} className="ml-2 group-hover:translate-x-2 group-hover:-translate-y-1 transition-transform" />
                                                </>
                                            )}
                                        </motion.button>
                                    </form>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>

            {/* Map Section placeholder */}
            <section className="py-16 bg-bakery-dark text-white">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h3 className="text-3xl font-serif font-bold mb-4">Find Us on the Map</h3>
                        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
                            Our flagship store is located in the heart of West Village, NYC.
                            Look for the aroma of fresh bread – you can't miss it!
                        </p>
                        <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden bg-bakery-medium/30 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin size={48} className="mx-auto mb-4 text-bakery-accent animate-bounce-gentle" />
                                <p className="text-white/50">Interactive map coming soon</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
