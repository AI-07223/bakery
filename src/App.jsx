// src/App.jsx
import React, { useEffect } from 'react';
import { createBrowserRouter, RouterProvider, ScrollRestoration } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { siteConfig } from './config/siteConfig';

// Layouts & Pages
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

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
        path: "shop",
        element: <ProductPage />,
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
