import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import MobileNav from '../components/layout/MobileNav';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MobileNav />
    </div>
  );
}
