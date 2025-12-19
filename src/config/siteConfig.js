// src/config/siteConfig.js

export const siteConfig = {
    brand: {
      name: "Lumière Patisserie",
      logo: "https://cdn-icons-png.flaticon.com/512/3209/3209931.png", // Keeping the old logo or use a new one
      favicon: "/favicon.ico",
      phone: "+91 9929807333",
      email: "bonjour@lumierepatisserie.com",
      address: "123 Rue de la Paix, Paris, France",
      copyright: "© 2025 Lumière Patisserie | All Rights Reserved.",
      socialLinks: {
        facebook: "https://facebook.com",
        instagram: "https://instagram.com",
        twitter: "https://twitter.com"
      }
    },

    seo: {
      defaultTitle: "Lumière Patisserie | Artisan French Bakery",
      titleTemplate: "%s | Lumière Patisserie",
      description: "Experience the art of French baking. Handcrafted croissants, macarons, and artisanal breads delivered to your doorstep.",
      keywords: ["bakery", "patisserie", "croissant", "macaron", "cake", "delivery", "artisan"],
      openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://lumierepatisserie.com",
        site_name: "Lumière Patisserie",
      }
    },

    theme: {
      colors: {
        primary: "#D4AF37",    // Gold
        secondary: "#F9F5F0",  // Cream
        accent: "#2D2D2D",     // Charcoal
        background: "#FFFFFF",
        text: "#333333",
        muted: "#9CA3AF"
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Lato', sans-serif",
        googleFontsUrl: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
      }
    },

    layout: {
      announcementBar: "Free Delivery on Orders Above ₹1,499 now!",
    },

    navigation: {
      main: [
        { name: "Home", path: "/" },
        { name: "Cakes & Tarts", path: "/category/cakes-tarts" },
        { name: "Breads", path: "/category/breads" },
        { name: "Confectionery", path: "/category/confectionery" },
        { name: "Gifting", path: "/category/gifting" },
        { name: "About", path: "/about" },
      ],
      mobileBottom: [
        { name: "Home", icon: "Home", path: "/" },
        { name: "Menu", icon: "Menu", path: "/menu" },
        { name: "Shop", icon: "ShoppingBag", path: "/shop" },
        { name: "Account", icon: "User", path: "/account" },
      ]
    },

    // HERO SLIDER IMAGES
    heroBanners: [
      {
        id: 1,
        image: "https://images.unsplash.com/photo-1626127339091-a1286940a469?q=80&w=2940&auto=format&fit=crop", // Elegant Cake
        alt: "Signature Wedding Cakes",
        link: "/category/cakes-tarts"
      },
      {
        id: 2,
        image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2000&auto=format&fit=crop", // Bakery Interior or Breads
        alt: "Freshly Baked Breads",
        link: "/category/breads"
      },
      {
        id: 3,
        image: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?q=80&w=2000&auto=format&fit=crop", // Pastries
        alt: "Artisan Pastries",
        link: "/category/confectionery"
      }
    ],

    // CIRCULAR CATEGORY RAIL
    categories: [
      { id: 1, name: "Cakes", image: "https://howsweet.co.in/cdn/shop/files/Updated_Phone_Size_Banners_500bb182-3f6a-4cf9-919d-fbe0a1565726.png?v=1762865486&width=1500", link: "/category/cakes" }, // Placeholder, replacing with scrape data if available, using similar concept
      { id: 2, name: "Breads", image: "https://howsweet.co.in/cdn/shop/files/ButterKhari.png?v=1685884943&width=600", link: "/category/breads" },
      { id: 3, name: "Cookies", image: "https://howsweet.co.in/cdn/shop/files/IMG_6601.jpg?v=1754316017&width=600", link: "/category/cookies" },
      { id: 4, name: "Hampers", image: "https://howsweet.co.in/cdn/shop/files/IMG_3557_jpg.jpg?v=1738757808&width=600", link: "/category/hampers" },
      { id: 5, name: "Gluten Free", image: "https://howsweet.co.in/cdn/shop/files/PishtachioCranberryBiscotti.png?v=1694338302&width=600", link: "/category/gluten-free" },
      { id: 6, name: "Savouries", image: "https://howsweet.co.in/cdn/shop/files/IMG_6614.jpg?v=1754317031&width=600", link: "/category/savouries" },
    ],

    // "OUR DELICACIES" (Grid)
    featureCollections: [
        { title: "Breads", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80", link: "/category/breads" },
        { title: "Gluten Free", image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80", link: "/category/gluten-free" },
        { title: "Chai Dips", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80", link: "/category/chai-dips" },
        { title: "Salty Sliders", image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=800&q=80", link: "/category/salty-sliders" },
        { title: "Chocolates", image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?auto=format&fit=crop&w=800&q=80", link: "/category/chocolates" },
        { title: "Health Kart", image: "https://images.unsplash.com/photo-1598511726623-d219f9652c71?auto=format&fit=crop&w=800&q=80", link: "/category/health" },
    ],

    // PRODUCTS DATABASE (Mapped from scrape)
    products: [
      {
        id: "p1",
        name: "Butter Khari",
        price: "₹160.00",
        category: "Breads",
        image: "https://howsweet.co.in/cdn/shop/files/ButterKhari.png?v=1685884943&width=600",
        isBestSeller: true
      },
      {
        id: "p2",
        name: "Ajwain Phen",
        price: "₹250.00",
        category: "Breads",
        image: "https://howsweet.co.in/cdn/shop/files/AjwainPhen.png?v=1685881467&width=600",
        isNew: true
      },
      {
        id: "p3",
        name: "Jeera Cookies",
        price: "₹175.00",
        category: "Cookies",
        image: "https://howsweet.co.in/cdn/shop/files/IMG_6601.jpg?v=1754316017&width=600"
      },
      {
        id: "p4",
        name: "Pistachio Cranberry Biscotti",
        price: "₹285.00",
        category: "Cookies",
        image: "https://howsweet.co.in/cdn/shop/files/PishtachioCranberryBiscotti.png?v=1694338302&width=600",
        isBestSeller: true
      },
      {
        id: "p5",
        name: "Cinnamon Phen",
        price: "₹235.00",
        category: "Breads",
        image: "https://howsweet.co.in/cdn/shop/files/IMG_8160a.jpg?v=1744183916&width=600"
      },
      {
        id: "p6",
        name: "Coconut Cookies",
        price: "₹210.00",
        category: "Cookies",
        image: "https://howsweet.co.in/cdn/shop/files/IMG_6589.jpg?v=1754316182&width=600"
      },
      {
        id: "p7",
        name: "French Hearts",
        price: "₹295.00",
        category: "Puff Pastry",
        image: "https://howsweet.co.in/cdn/shop/files/IMG_4453a.jpg?v=1740058444&width=600",
        isBestSeller: true
      },
      {
        id: "p8",
        name: "Ajwain Cookies",
        price: "₹165.00",
        category: "Cookies",
        image: "https://howsweet.co.in/cdn/shop/files/IMG_6593.jpg?v=1754315846&width=600"
      },
      {
        id: "p9",
        name: "Tahini Choco Chips",
        price: "₹340.00",
        category: "Cookies",
        image: "https://howsweet.co.in/cdn/shop/files/Tahinichocolatechunk.png?v=1683606289&width=600"
      },
      {
        id: "p10",
        name: "Garlic Crostini",
        price: "₹285.00",
        category: "Savouries",
        image: "https://howsweet.co.in/cdn/shop/files/VWP_1295.jpg?v=1724833990&width=600"
      },
      {
        id: "p11",
        name: "The Perfect Hamper",
        price: "₹2,400.00",
        category: "Hampers",
        image: "https://howsweet.co.in/cdn/shop/files/IMG_3557_jpg.jpg?v=1738757808&width=600",
        isNew: true
      },
      {
        id: "p12",
        name: "Almond Brittle",
        price: "₹525.00",
        category: "Confectionery",
        image: "https://howsweet.co.in/cdn/shop/files/IMG_8426a.jpg?v=1762858385&width=600",
        isBestSeller: true
      }
    ],

    testimonials: [
      { id: 1, name: "Jatin Shah", text: "One of the most famous bakeries. A must visit and also perfect for gifting. Quality is fantastic.", rating: 5 },
      { id: 2, name: "Radhika K.", text: "Amazing desserts... everything worth a try. My favourite are jaggery cake and cheese cakes.", rating: 5 },
      { id: 3, name: "Ark Kothari", text: "Fantastic products, each one crafted very well. Excellent hygiene maintained.", rating: 5 },
      { id: 4, name: "Vinita Kothari", text: "Excellent hummus sandwich and coffee... Heavenly! Good work, guys!", rating: 5 },
      { id: 5, name: "Giriraj P.", text: "Very aesthetically pleasing bakery with huge variety. Biggest croissants I've ever seen!", rating: 5 },
    ]
  };
