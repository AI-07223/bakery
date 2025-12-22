import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartDrawer() {
    const { cartOpen, toggleCart, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

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
        <AnimatePresence>
            {cartOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                        className="fixed inset-0 bg-black/50 z-[60] backdrop-blur-sm"
                    />

                    {/* Drawer */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-bakery-paper z-[70] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-bakery-medium/10 flex justify-between items-center bg-white">
                            <h2 className="text-2xl font-serif font-bold text-bakery-dark">Your Bag</h2>
                            <button onClick={toggleCart} className="p-2 hover:bg-gray-100 rounded-full transition-colors text-bakery-dark">
                                <X size={24} />
                            </button>
                        </div>

                        {/* Items */}
                        <div className="flex-grow overflow-y-auto p-6 space-y-6">
                            {cartItems.length === 0 ? (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
                                    <span className="text-6xl mb-4">🥐</span>
                                    <p className="text-xl font-serif text-bakery-dark">Your cart is empty</p>
                                    <p className="text-sm">Time to fill it with delicious treats!</p>
                                    <button onClick={toggleCart} className="mt-6 text-bakery-accent font-bold hover:underline">Continue Shopping</button>
                                </div>
                            ) : (
                                cartItems.map((item) => (
                                    <div key={item.id} className="flex gap-4">
                                        <div className="w-24 h-24 rounded overflow-hidden flex-shrink-0 bg-gray-100">
                                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-grow flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <h3 className="font-serif font-bold text-bakery-dark">{item.name}</h3>
                                                <span className="font-medium text-bakery-medium">{item.price}</span>
                                            </div>
                                            <p className="text-xs text-gray-500 line-clamp-1">{item.category}</p>

                                            <div className="flex justify-between items-center mt-2">
                                                <div className="flex items-center border border-bakery-medium/20 rounded-full">
                                                    <button onClick={() => updateQuantity(item.id, -1)} className="p-1 px-3 hover:text-bakery-accent transition-colors"><Minus size={14} /></button>
                                                    <span className="text-sm font-bold min-w-[20px] text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.id, 1)} className="p-1 px-3 hover:text-bakery-accent transition-colors"><Plus size={14} /></button>
                                                </div>
                                                <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        {cartItems.length > 0 && (
                            <div className="p-6 bg-white border-t border-bakery-medium/10">
                                <div className="flex justify-between items-center mb-6 text-lg font-bold text-bakery-dark">
                                    <span>Subtotal</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <p className="text-xs text-gray-500 mb-6 text-center">Checkout will redirect to WhatsApp to complete your order.</p>
                                <button
                                    onClick={handleWhatsAppCheckout}
                                    className="w-full bg-[#25D366] text-white font-bold py-4 rounded hover:bg-[#128C7E] transition-all flex justify-center items-center group shadow-md"
                                >
                                    <span>Checkout</span>
                                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
