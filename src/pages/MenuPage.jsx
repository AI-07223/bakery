import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import SeoHead from '../components/seo/SeoHead';
import { ShoppingBag, Search, X, Filter, ChevronRight, Grid, List, SlidersHorizontal, Home, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { products, categories } from '../data/products';

// Add "All" category at the beginning
const allCategories = [{ name: "All", image: "" }, ...categories];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.3 }
    },
    exit: {
        opacity: 0,
        scale: 0.95,
        transition: { duration: 0.2 }
    }
};

export default function MenuPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const initialCategory = searchParams.get('category') || "All";

    const [activeCategory, setActiveCategory] = useState(initialCategory);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("default");
    const [viewMode, setViewMode] = useState("grid"); // grid or list
    const [showFilters, setShowFilters] = useState(false);
    const [priceRange, setPriceRange] = useState("all");

    const { addToCart } = useCart();

    // Handle category change and update URL
    const handleCategoryChange = (categoryName) => {
        setActiveCategory(categoryName);
        if (categoryName === "All") {
            searchParams.delete('category');
        } else {
            searchParams.set('category', categoryName);
        }
        setSearchParams(searchParams);
    };

    // Filter and sort products
    const filteredProducts = useMemo(() => {
        let result = products.filter(product => {
            const matchesCategory = activeCategory === "All" || product.category === activeCategory;
            const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.desc.toLowerCase().includes(searchQuery.toLowerCase());

            // Price filter
            const price = parseFloat(product.price.replace('$', ''));
            let matchesPrice = true;
            if (priceRange === "under10") matchesPrice = price < 10;
            else if (priceRange === "10to25") matchesPrice = price >= 10 && price <= 25;
            else if (priceRange === "over25") matchesPrice = price > 25;

            return matchesCategory && matchesSearch && matchesPrice;
        });

        // Sort
        if (sortBy === "priceAsc") {
            result.sort((a, b) => parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', '')));
        } else if (sortBy === "priceDesc") {
            result.sort((a, b) => parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', '')));
        } else if (sortBy === "name") {
            result.sort((a, b) => a.name.localeCompare(b.name));
        }

        return result;
    }, [activeCategory, searchQuery, sortBy, priceRange]);

    const clearFilters = () => {
        setSearchQuery("");
        setActiveCategory("All");
        setSortBy("default");
        setPriceRange("all");
        setSearchParams({});
    };

    const hasActiveFilters = searchQuery || activeCategory !== "All" || sortBy !== "default" || priceRange !== "all";

    return (
        <div className="pt-20 min-h-screen bg-bakery-paper">
            <SeoHead title={`${activeCategory === "All" ? "Menu" : activeCategory} | Lumière Bakery`} description="Explore our artisanal selection of breads, pastries, and cakes." />

            {/* Hero Banner */}
            <div className="bg-bakery-dark text-white py-12 md:py-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-20"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-bakery-dark via-bakery-dark/80 to-bakery-dark/60"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Breadcrumbs */}
                    <motion.nav
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center text-sm text-white/60 mb-4 flex-wrap"
                    >
                        <Link to="/" className="hover:text-bakery-accent transition-colors flex items-center">
                            <Home size={14} className="mr-1" />
                            Home
                        </Link>
                        <ChevronRight size={14} className="mx-2" />
                        <Link to="/menu" className="hover:text-bakery-accent transition-colors">Menu</Link>
                        {activeCategory !== "All" && (
                            <>
                                <ChevronRight size={14} className="mx-2" />
                                <span className="text-bakery-accent font-medium">{activeCategory}</span>
                            </>
                        )}
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                    >
                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                            {activeCategory === "All" ? "Our Menu" : activeCategory}
                        </h1>
                        <p className="text-white/70 text-base md:text-lg max-w-2xl">
                            {activeCategory === "All"
                                ? "Explore our complete collection of artisanal baked goods, crafted with love daily."
                                : `Discover our selection of freshly baked ${activeCategory.toLowerCase()}.`
                            }
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-8">
                {/* Search and Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm p-4 md:p-6 mb-8 sticky top-20 z-30"
                >
                    <div className="flex flex-col lg:flex-row gap-4 items-stretch lg:items-center">
                        {/* Search Input */}
                        <div className="relative flex-grow">
                            <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-bakery-medium/50" />
                            <input
                                type="text"
                                placeholder="Search for breads, pastries, cakes..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-10 py-3 rounded-full border-2 border-gray-100 focus:border-bakery-accent focus:outline-none transition-colors bg-gray-50"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery("")}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>

                        {/* Desktop Filters */}
                        <div className="hidden lg:flex items-center gap-3">
                            {/* Sort Dropdown */}
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="px-4 py-3 rounded-full border-2 border-gray-100 bg-gray-50 focus:border-bakery-accent focus:outline-none text-sm font-medium"
                            >
                                <option value="default">Sort by</option>
                                <option value="name">Name A-Z</option>
                                <option value="priceAsc">Price: Low to High</option>
                                <option value="priceDesc">Price: High to Low</option>
                            </select>

                            {/* Price Filter */}
                            <select
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="px-4 py-3 rounded-full border-2 border-gray-100 bg-gray-50 focus:border-bakery-accent focus:outline-none text-sm font-medium"
                            >
                                <option value="all">All Prices</option>
                                <option value="under10">Under $10</option>
                                <option value="10to25">$10 - $25</option>
                                <option value="over25">Over $25</option>
                            </select>

                            {/* View Toggle */}
                            <div className="flex bg-gray-100 rounded-full p-1">
                                <button
                                    onClick={() => setViewMode("grid")}
                                    className={`p-2 rounded-full transition-colors ${viewMode === "grid" ? "bg-bakery-dark text-white" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    <Grid size={18} />
                                </button>
                                <button
                                    onClick={() => setViewMode("list")}
                                    className={`p-2 rounded-full transition-colors ${viewMode === "list" ? "bg-bakery-dark text-white" : "text-gray-500 hover:text-gray-700"}`}
                                >
                                    <List size={18} />
                                </button>
                            </div>
                        </div>

                        {/* Mobile Filter Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden flex items-center justify-center gap-2 px-4 py-3 rounded-full border-2 border-gray-100 bg-gray-50 font-medium"
                        >
                            <SlidersHorizontal size={18} />
                            Filters
                            {hasActiveFilters && (
                                <span className="w-2 h-2 bg-bakery-accent rounded-full"></span>
                            )}
                        </button>
                    </div>

                    {/* Mobile Filters Panel */}
                    <AnimatePresence>
                        {showFilters && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="lg:hidden overflow-hidden"
                            >
                                <div className="pt-4 mt-4 border-t border-gray-100 grid grid-cols-2 gap-3">
                                    <select
                                        value={sortBy}
                                        onChange={(e) => setSortBy(e.target.value)}
                                        className="px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm"
                                    >
                                        <option value="default">Sort by</option>
                                        <option value="name">Name A-Z</option>
                                        <option value="priceAsc">Low to High</option>
                                        <option value="priceDesc">High to Low</option>
                                    </select>

                                    <select
                                        value={priceRange}
                                        onChange={(e) => setPriceRange(e.target.value)}
                                        className="px-4 py-3 rounded-xl border-2 border-gray-100 bg-gray-50 text-sm"
                                    >
                                        <option value="all">All Prices</option>
                                        <option value="under10">Under $10</option>
                                        <option value="10to25">$10 - $25</option>
                                        <option value="over25">Over $25</option>
                                    </select>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Active Filters */}
                    {hasActiveFilters && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-100"
                        >
                            <span className="text-sm text-gray-500">Active filters:</span>
                            {activeCategory !== "All" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-bakery-accent/20 text-bakery-dark rounded-full text-sm">
                                    {activeCategory}
                                    <button onClick={() => handleCategoryChange("All")}><X size={14} /></button>
                                </span>
                            )}
                            {searchQuery && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-bakery-accent/20 text-bakery-dark rounded-full text-sm">
                                    "{searchQuery}"
                                    <button onClick={() => setSearchQuery("")}><X size={14} /></button>
                                </span>
                            )}
                            {priceRange !== "all" && (
                                <span className="inline-flex items-center gap-1 px-3 py-1 bg-bakery-accent/20 text-bakery-dark rounded-full text-sm">
                                    {priceRange === "under10" ? "Under $10" : priceRange === "10to25" ? "$10-$25" : "Over $25"}
                                    <button onClick={() => setPriceRange("all")}><X size={14} /></button>
                                </span>
                            )}
                            <button
                                onClick={clearFilters}
                                className="text-sm text-bakery-accent hover:underline ml-2"
                            >
                                Clear all
                            </button>
                        </motion.div>
                    )}
                </motion.div>

                {/* Category Pills - Horizontal Scroll on Mobile */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="mb-8 -mx-4 px-4 md:mx-0 md:px-0"
                >
                    <div className="flex gap-3 overflow-x-auto pb-4 md:pb-0 md:flex-wrap md:justify-center scrollbar-hide">
                        {allCategories.map((cat, index) => (
                            <motion.button
                                key={cat.name}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => handleCategoryChange(cat.name)}
                                className={`flex-shrink-0 px-5 py-2.5 rounded-full font-medium transition-all text-sm md:text-base flex items-center gap-2 ${activeCategory === cat.name
                                        ? 'bg-bakery-dark text-white shadow-lg shadow-bakery-dark/20'
                                        : 'bg-white text-bakery-medium hover:bg-bakery-light border border-gray-100'
                                    }`}
                            >
                                {cat.name === "All" && <Sparkles size={14} />}
                                {cat.name}
                                {cat.name !== "All" && (
                                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${activeCategory === cat.name ? 'bg-white/20' : 'bg-gray-100'
                                        }`}>
                                        {products.filter(p => p.category === cat.name).length}
                                    </span>
                                )}
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Results Count */}
                <div className="flex justify-between items-center mb-6">
                    <p className="text-gray-600">
                        Showing <span className="font-bold text-bakery-dark">{filteredProducts.length}</span> products
                    </p>
                </div>

                {/* Product Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className={viewMode === "grid"
                        ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6"
                        : "flex flex-col gap-4"
                    }
                >
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                variants={itemVariants}
                                exit="exit"
                                className={`group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${viewMode === "list" ? "flex flex-row" : ""
                                    }`}
                            >
                                {/* Product Image */}
                                <Link
                                    to={`/product/${product.id}`}
                                    className={viewMode === "list" ? "w-32 md:w-48 flex-shrink-0" : "block"}
                                >
                                    <div className={`overflow-hidden relative ${viewMode === "grid" ? "aspect-[4/3]" : "h-full min-h-[120px]"}`}>
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                        />
                                        {/* Quick Add Overlay - Grid Only */}
                                        {viewMode === "grid" && (
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        addToCart(product);
                                                    }}
                                                    className="bg-white text-bakery-dark px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-bakery-accent transition-colors shadow-lg"
                                                >
                                                    <ShoppingBag size={16} />
                                                    <span className="hidden md:inline">Add to Cart</span>
                                                    <span className="md:hidden">Add</span>
                                                </motion.button>
                                            </div>
                                        )}
                                    </div>
                                </Link>

                                {/* Product Info */}
                                <div className={`p-3 md:p-4 ${viewMode === "list" ? "flex-grow flex flex-col justify-center" : "text-center"}`}>
                                    <span className="text-xs text-bakery-accent font-bold uppercase tracking-widest block mb-1">
                                        {product.category}
                                    </span>
                                    <Link to={`/product/${product.id}`}>
                                        <h3 className={`font-serif text-bakery-dark font-bold mb-1 group-hover:text-bakery-accent transition-colors ${viewMode === "grid" ? "text-sm md:text-lg" : "text-lg"
                                            }`}>
                                            {product.name}
                                        </h3>
                                    </Link>
                                    {viewMode === "list" && (
                                        <p className="text-gray-500 text-sm mb-2 line-clamp-2 hidden md:block">{product.desc}</p>
                                    )}
                                    <div className={`flex items-center ${viewMode === "list" ? "justify-between" : "justify-center"} gap-2 mt-2`}>
                                        <span className="text-bakery-dark font-bold">{product.price}</span>
                                        {viewMode === "list" && (
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={() => addToCart(product)}
                                                className="bg-bakery-dark text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 text-sm hover:bg-bakery-accent hover:text-bakery-dark transition-colors"
                                            >
                                                <ShoppingBag size={16} />
                                                Add
                                            </motion.button>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center py-20"
                    >
                        <div className="w-24 h-24 bg-bakery-light rounded-full flex items-center justify-center mx-auto mb-6">
                            <Search size={40} className="text-bakery-medium/50" />
                        </div>
                        <h3 className="text-2xl font-serif font-bold text-bakery-dark mb-2">No products found</h3>
                        <p className="text-gray-500 mb-6">Try adjusting your search or filter criteria</p>
                        <button
                            onClick={clearFilters}
                            className="bg-bakery-dark text-white px-6 py-3 rounded-full font-bold hover:bg-bakery-accent hover:text-bakery-dark transition-colors"
                        >
                            Clear All Filters
                        </button>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
