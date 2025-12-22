import React from 'react';
import SeoHead from '../components/seo/SeoHead';
import { motion } from 'framer-motion';

const articles = [
    {
        id: 1,
        title: "The Ancient Art of Sourdough",
        excerpt: "Discover the science and soul behind our signature wild-yeast loaves.",
        image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?q=80&w=2070&auto=format&fit=crop",
        date: "December 12, 2024",
        category: "Technique"
    },
    {
        id: 2,
        title: "Sweet Pairing: Coffee & Cake",
        excerpt: "Our barista's guide to matching the perfect roast with your pastry.",
        image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&w=2071&auto=format&fit=crop",
        date: "November 28, 2024",
        category: "Guide"
    },
    {
        id: 3,
        title: "Holiday Baking Traditions",
        excerpt: "Recipes that have been passed down through five generations of bakers.",
        image: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&w=2070&auto=format&fit=crop",
        date: "November 15, 2024",
        category: "Seasonal"
    }
];

export default function BlogPage() {
    return (
        <div className="pt-24 min-h-screen bg-bakery-paper">
            <SeoHead title="Journal | Lumière Bakery" description="Stories, tips, and traditions from our kitchen." />

            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-16">
                    <span className="text-bakery-accent font-bold tracking-widest uppercase mb-2 block">The Journal</span>
                    <h1 className="text-4xl md:text-5xl font-serif text-bakery-dark font-bold">Behind the Oven</h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {articles.map((article, i) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <div className="aspect-[3/2] overflow-hidden rounded-sm mb-6 shadow-sm">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                                />
                            </div>
                            <div className="flex items-center space-x-4 mb-4 text-xs tracking-widest uppercase font-medium">
                                <span className="text-bakery-accent">{article.category}</span>
                                <span className="text-gray-400">•</span>
                                <span className="text-gray-400">{article.date}</span>
                            </div>
                            <h2 className="text-2xl font-serif font-bold text-bakery-dark mb-4 group-hover:text-bakery-accent transition-colors leading-tight">
                                {article.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                {article.excerpt}
                            </p>
                            <span className="inline-block text-bakery-dark font-bold border-b border-bakery-dark pb-1 group-hover:text-bakery-accent group-hover:border-bakery-accent transition-colors self-start">
                                Read Article
                            </span>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
