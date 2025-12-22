import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import { motion } from 'framer-motion';

export default function GiftingPage() {
    return (
        <div className="pt-24 min-h-screen bg-bakery-paper">
            <SeoHead title="Gifting | Lumière Bakery" description="Premium hampers and corporate gifting from Lumière Bakery." />

            {/* Header */}
            <div className="container mx-auto px-6 mb-20 text-center">
                <span className="text-bakery-accent font-bold tracking-widest uppercase mb-4 block">The Art of Giving</span>
                <h1 className="text-4xl md:text-6xl font-serif text-bakery-dark font-bold mb-6">Curated Hampers</h1>
                <p className="max-w-2xl mx-auto text-lg text-bakery-medium/80">
                    From festive celebrations to corporate gestures, our handcrafted hampers leave a lasting impression.
                </p>
            </div>

            {/* Brochure Section */}
            <div className="container mx-auto px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden rounded-md shadow-xl">
                    <div className="relative h-96 md:h-[600px]">
                        <img
                            src="https://images.unsplash.com/photo-1549488352-226687bd5f52?q=80&w=3024&auto=format&fit=crop"
                            alt="Luxury Hamper"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                    <div className="bg-bakery-dark text-bakery-paper p-12 md:p-20 flex flex-col justify-center">
                        <h3 className="text-3xl font-serif font-bold mb-6 text-bakery-accent">The Royal Collection</h3>
                        <p className="text-lg mb-8 opacity-80 leading-relaxed">
                            An exquisite assortment of our finest artisan delights. Includes:
                        </p>
                        <ul className="space-y-4 mb-10 opacity-90 font-light">
                            <li className="flex items-center"><span className="w-2 h-2 bg-bakery-accent rounded-full mr-3"></span>Assorted Butter Cookies</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-bakery-accent rounded-full mr-3"></span>Dark Chocolate Brownies</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-bakery-accent rounded-full mr-3"></span>Classic Fruit Cake</li>
                            <li className="flex items-center"><span className="w-2 h-2 bg-bakery-accent rounded-full mr-3"></span>Premium Roasted Nuts</li>
                        </ul>
                        <div className="text-2xl font-serif font-bold mb-8">$85.00</div>
                        <button className="self-start border border-bakery-accent text-bakery-accent px-8 py-3 rounded-full hover:bg-bakery-accent hover:text-bakery-dark transition-colors uppercase tracking-widest text-sm font-bold">
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Corporate Section */}
            <div className="bg-white py-24">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif text-bakery-dark font-bold mb-8">Corporate Enquiries</h2>
                    <p className="max-w-2xl mx-auto text-gray-600 mb-10">
                        Looking for bulk orders for your team or clients? We offer customization with your brand logo and personalized notes.
                    </p>
                    <form className="max-w-lg mx-auto space-y-4">
                        <input type="text" placeholder="Company Name" className="w-full px-6 py-4 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-bakery-medium" />
                        <input type="email" placeholder="Email Address" className="w-full px-6 py-4 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-bakery-medium" />
                        <textarea rows="4" placeholder="Message / Requirements" className="w-full px-6 py-4 bg-gray-50 rounded border border-gray-200 focus:outline-none focus:border-bakery-medium"></textarea>
                        <button className="w-full bg-bakery-dark text-white font-bold py-4 rounded hover:bg-bakery-medium transition-colors">Request Quote</button>
                    </form>
                </div>
            </div>

        </div>
    );
}
