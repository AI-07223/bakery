import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import CartDrawer from '../components/layout/CartDrawer';

export default function MainLayout() {
  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-bakery-paper">
        <Navbar />
        <CartDrawer />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
