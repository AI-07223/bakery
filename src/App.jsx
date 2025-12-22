import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { siteConfig } from './config/siteConfig';

// Layouts & Pages
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import GiftingPage from './pages/GiftingPage';
import LocationsPage from './pages/LocationsPage';
import BlogPage from './pages/BlogPage';
import StoryPage from './pages/StoryPage';
import ProductPage from './pages/ProductPage';
import ProductDetails from './pages/ProductDetails';
import ContactPage from './pages/ContactPage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollRestoration />
        <MainLayout />
      </>
    ),
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "menu",
        element: <MenuPage />,
      },
      {
        path: "gifting",
        element: <GiftingPage />,
      },
      {
        path: "locations",
        element: <LocationsPage />,
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "story",
        element: <StoryPage />,
      },
      {
        path: "shop",
        element: <ProductPage />,
      },
      {
        path: "product/:id",
        element: <ProductDetails />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      // Catch-all for category links to show the placeholder
      {
        path: "category/:slug",
        element: <ProductPage />,
      },
      {
        path: "*",
        element: <div className="p-20 text-center font-heading text-2xl">Page Not Found</div>
      }
    ],
  },
]);

function App() {
  // Apply theme variables
  useEffect(() => {
    const root = document.documentElement;
    const { colors, fonts } = siteConfig.theme;

    root.style.setProperty('--color-primary', colors.primary);
    root.style.setProperty('--color-secondary', colors.secondary);
    root.style.setProperty('--font-heading', fonts.heading);
    root.style.setProperty('--font-body', fonts.body);
  }, []);

  return (
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}

export default App;
