import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Minus, ShoppingBag, ArrowLeft, Star } from 'lucide-react';
import SeoHead from '../components/seo/SeoHead';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

export default function ProductDetails() {
    const { id } = useParams();
    const { addToCart } = useCart();
    const [quantity, setQuantity] = useState(1);
    const [activeTab, setActiveTab] = useState('desc');

    const product = products.find(p => p.id === parseInt(id)) || products[0];

    const handleAddToCart = () => {
        addToCart({ ...product, quantity });
    };

    return (
        <div className="pt-24 min-h-screen bg-bakery-paper">
            <SeoHead title={`${product.name} | Lumière Bakery`} description={product.desc} />

            <div className="container mx-auto px-6 py-12">
                <Link to="/menu" className="inline-flex items-center text-gray-500 hover:text-bakery-dark mb-8 group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Menu
                </Link>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
                    {/* Image Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square rounded-sm overflow-hidden bg-gray-100 relative">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                            <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-bakery-dark">
                                Best Seller
                            </div>
                        </div>
                        <div className="grid grid-cols-4 gap-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="aspect-square rounded-sm overflow-hidden bg-gray-100 cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
                                    <img src={product.image} alt="Thumbnail relative" className="w-full h-full object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col h-full justify-center">
                        <span className="text-bakery-accent font-bold tracking-widest uppercase mb-2 block">{product.category}</span>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-bakery-dark mb-4">{product.name}</h1>
                        <div className="flex items-center space-x-4 mb-6">
                            <span className="text-3xl font-medium text-bakery-dark">{product.price}</span>
                            <div className="flex items-center text-yellow-500">
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <Star size={16} fill="currentColor" />
                                <span className="text-gray-400 text-sm ml-2">(128 reviews)</span>
                            </div>
                        </div>

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            {product.desc}
                        </p>

                        <div className="flex items-center space-x-6 mb-10">
                            <div className="flex items-center border border-gray-300 rounded-full">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 hover:text-bakery-accent transition-colors"><Minus size={20} /></button>
                                <span className="text-xl font-bold min-w-[40px] text-center">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="p-3 hover:text-bakery-accent transition-colors"><Plus size={20} /></button>
                            </div>
                            <button
                                onClick={handleAddToCart}
                                className="flex-grow bg-bakery-dark text-white font-bold py-4 rounded-full hover:bg-bakery-accent hover:text-bakery-dark transition-all flex justify-center items-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                            >
                                <ShoppingBag size={20} className="mr-2" />
                                Add to Order
                            </button>
                        </div>

                        {/* Tabs */}
                        <div className="border-t border-gray-200 pt-8">
                            <div className="flex space-x-8 mb-6 border-b border-gray-100 pb-4">
                                <button onClick={() => setActiveTab('desc')} className={`font-serif font-bold text-lg pb-2 border-b-2 transition-colors ${activeTab === 'desc' ? 'border-bakery-accent text-bakery-dark' : 'border-transparent text-gray-400'}`}>Description</button>
                                <button onClick={() => setActiveTab('ingredients')} className={`font-serif font-bold text-lg pb-2 border-b-2 transition-colors ${activeTab === 'ingredients' ? 'border-bakery-accent text-bakery-dark' : 'border-transparent text-gray-400'}`}>Ingredients</button>
                                <button onClick={() => setActiveTab('delivery')} className={`font-serif font-bold text-lg pb-2 border-b-2 transition-colors ${activeTab === 'delivery' ? 'border-bakery-accent text-bakery-dark' : 'border-transparent text-gray-400'}`}>Delivery</button>
                            </div>
                            <div className="min-h-[100px] text-gray-600 leading-relaxed">
                                {activeTab === 'desc' && <p>Our bakers start at 3am every morning to ensure this {product.name.toLowerCase()} is fresh for you. We use only organic flour and time-honored techniques.</p>}
                                {activeTab === 'ingredients' && <p>Organic Wheat Flour, Water, Sea Salt, Natural Leaven (Wild Yeast). Contains Gluten. May contain traces of nuts.</p>}
                                {activeTab === 'delivery' && <p>Available for local NYC delivery or store pickup. Best consumed within 24 hours of purchase.</p>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
