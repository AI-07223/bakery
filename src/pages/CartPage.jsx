import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import SeoHead from '../components/seo/SeoHead';
import { Plus, Minus, Trash2, ArrowRight, ShoppingBag } from 'lucide-react';

export default function CartPage() {
    const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

    const handleWhatsAppCheckout = () => {
        const phoneNumber = "1234567890"; // Replace with actual bakery number
        let message = "Hello! I'd like to place an order:\n\n";

        cartItems.forEach(item => {
            message += `- ${item.quantity}x ${item.name} (${item.price})\n`;
        });

        message += `\n*Total: $${cartTotal.toFixed(2)}*\n\nPlease confirm availability. Thanks!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    return (
        <div className="pt-24 min-h-screen bg-bakery-paper">
            <SeoHead title="Shopping Cart | Lumière Bakery" description="Review your cart and checkout." />

            <div className="container mx-auto px-6 py-12">
                <h1 className="text-4xl md:text-5xl font-serif text-bakery-dark font-bold mb-12">Your Cart</h1>

                {cartItems.length === 0 ? (
                    <div className="bg-white rounded-lg p-16 text-center shadow-sm">
                        <ShoppingBag size={64} className="mx-auto mb-6 text-gray-300" />
                        <h2 className="text-2xl font-serif text-bakery-dark mb-4">Your cart is empty</h2>
                        <p className="text-gray-600 mb-8">Discover our delicious selection of breads, pastries, and cakes.</p>
                        <Link
                            to="/menu"
                            className="inline-flex items-center bg-bakery-dark text-white font-bold px-8 py-4 rounded-full hover:bg-bakery-accent hover:text-bakery-dark transition-colors"
                        >
                            Browse Menu
                            <ArrowRight size={20} className="ml-2" />
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Cart Items */}
                        <div className="lg:col-span-2 space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm flex gap-6">
                                    <div className="w-32 h-32 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-grow flex flex-col justify-between">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-serif font-bold text-bakery-dark mb-1">{item.name}</h3>
                                                {item.category && (
                                                    <span className="text-xs text-bakery-accent font-bold uppercase tracking-widest">{item.category}</span>
                                                )}
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-2"
                                                title="Remove item"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-center mt-4">
                                            <div className="flex items-center border border-gray-300 rounded-full">
                                                <button
                                                    onClick={() => updateQuantity(item.id, -1)}
                                                    className="p-2 px-4 hover:text-bakery-accent transition-colors"
                                                >
                                                    <Minus size={18} />
                                                </button>
                                                <span className="text-lg font-bold min-w-[40px] text-center">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, 1)}
                                                    className="p-2 px-4 hover:text-bakery-accent transition-colors"
                                                >
                                                    <Plus size={18} />
                                                </button>
                                            </div>
                                            <span className="text-2xl font-serif font-bold text-bakery-dark">{item.price}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-1">
                            <div className="bg-white p-8 rounded-lg shadow-sm sticky top-32">
                                <h2 className="text-2xl font-serif font-bold text-bakery-dark mb-6">Order Summary</h2>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-gray-600">
                                        <span>Subtotal ({cartItems.reduce((acc, item) => acc + item.quantity, 0)} items)</span>
                                        <span className="font-medium">${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-gray-600">
                                        <span>Delivery</span>
                                        <span className="text-sm text-gray-500">Calculated at checkout</span>
                                    </div>
                                </div>

                                <div className="border-t border-gray-200 pt-4 mb-6">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xl font-bold text-bakery-dark">Total</span>
                                        <span className="text-2xl font-serif font-bold text-bakery-dark">${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>

                                <button
                                    onClick={handleWhatsAppCheckout}
                                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded-full hover:bg-[#128C7E] transition-all flex justify-center items-center shadow-lg hover:shadow-xl mb-4"
                                >
                                    <span>Checkout</span>
                                    <ArrowRight size={20} className="ml-2" />
                                </button>

                                <Link
                                    to="/menu"
                                    className="block text-center text-bakery-medium hover:text-bakery-dark transition-colors font-medium"
                                >
                                    Continue Shopping
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
