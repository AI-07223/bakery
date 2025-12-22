import React, { useState } from 'react';
import SeoHead from '../components/seo/SeoHead';
import { ShoppingBag, Search } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products, categories } from '../data/products';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");
    const { addToCart } = useCart();

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "All" || product.category === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-24 min-h-screen bg-bakery-paper">
            <SeoHead title="Menu | Lumière Bakery" description="Explore our artisanal selection of breads, pastries, and cakes." />

            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-serif text-bakery-dark font-bold text-center mb-12">Our Menu</h1>

                {/* Filters */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((cat) => (
                            <button
                                key={cat.name}
                                onClick={() => setActiveCategory(cat.name)}
                                className={`px-6 py-2 rounded-full font-medium transition-all ${activeCategory === cat.name
                                    ? 'bg-bakery-dark text-white shadow-md'
                                    : 'bg-white text-bakery-medium hover:bg-bakery-light'
                                    }`}
                            >
                                {cat.name}
                            </button>
                        ))}
                    </div>

                    {/* Search */}
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 rounded-full border border-bakery-medium/20 focus:outline-none focus:border-bakery-accent w-64 bg-white"
                        />
                        <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-bakery-medium/50" />
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="group bg-white rounded-sm shadow-sm hover:shadow-lg transition-shadow overflow-hidden"
                            >
                                <div className="aspect-[4/3] overflow-hidden relative">
                                    <img src={product.image} alt={product.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <button
                                            onClick={() => addToCart(product)}
                                            className="bg-white text-bakery-dark px-6 py-2 rounded-full font-bold flex items-center space-x-2 text-sm hover:bg-bakery-accent"
                                        >
                                            <ShoppingBag size={16} />
                                            <span>Add</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 text-center">
                                    <span className="text-xs text-bakery-accent font-bold uppercase tracking-widest block mb-1">{product.category}</span>
                                    <h3 className="font-serif text-lg text-bakery-dark font-bold mb-2">{product.name}</h3>
                                    <span className="text-bakery-medium font-medium">{product.price}</span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 opacity-60">
                        <p className="text-xl font-serif">No products found matching your criteria.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
