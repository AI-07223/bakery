import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';

// Select specific products for the featured section
const featuredIds = [1, 2, 9];
const featuredProducts = products.filter(p => featuredIds.includes(p.id));

export default function FeaturedProducts() {
    const { addToCart } = useCart();

    return (
        <section className="py-16 md:py-24 bg-bakery-paper">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-bakery-accent text-sm tracking-widest uppercase font-bold mb-2 block">Curated Selection</span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-bakery-dark">Our Signatures</h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="hidden md:block"
                    >
                        <Link to="/menu" className="group flex items-center text-bakery-medium hover:text-bakery-accent transition-colors">
                            <span className="mr-2">View Full Menu</span>
                            <ArrowRight size={20} className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
                    {featuredProducts.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group cursor-pointer"
                        >
                            <div className="relative aspect-[4/5] sm:aspect-[4/5] overflow-hidden rounded-sm mb-4 md:mb-6 bg-gray-100 group-hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                                {/* Overlay - Hover on Desktop, Tap trigger on Mobile */}
                                <div className="absolute inset-0 bg-bakery-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6 backdrop-blur-sm">
                                    <span className="text-bakery-accent text-xs font-bold tracking-widest uppercase mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">Ingredients</span>
                                    <p className="text-bakery-paper/90 text-sm mb-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                        Organic Flour, Natural Leaven, Sea Salt<br />(Contains Gluten)
                                    </p>
                                    <button
                                        onClick={() => addToCart(product)}
                                        className="bg-bakery-accent text-bakery-dark font-bold px-8 py-3 rounded-full flex items-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-white delay-150"
                                    >
                                        <ShoppingBag size={18} />
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>

                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-serif text-bakery-dark mb-1 group-hover:text-bakery-accent transition-colors">{product.name}</h3>
                                    <p className="text-gray-600 text-sm max-w-[250px]">{product.desc}</p>
                                </div>
                                <span className="text-lg font-medium text-bakery-dark font-serif">{product.price}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:hidden text-center">
                    <Link to="/menu" className="inline-flex items-center text-bakery-medium hover:text-bakery-accent transition-colors">
                        <span className="mr-2">View Full Menu</span>
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
