// src/config/siteConfig.js

export const siteConfig = {
    brand: {
      name: "Sweet Delights Bakery",
      logo: "https://cdn-icons-png.flaticon.com/512/3209/3209931.png", // Example Icon
      whatsappNumber: "1234567890", // Without +
      socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
      footerText: "© 2024 Sweet Delights Bakery. All rights reserved.",
    },

    theme: {
      preset: "rustic", // Options: 'rustic', 'elegant', 'pop' (This can be used to load different CSS sets if we want, or just stick to vars)
      colors: {
        // These will be applied to the CSS variables at runtime
        primary: "#d97706",
        secondary: "#fcd34d",
        background: "#fffbeb",
        foreground: "#451a03",
      },
      fonts: {
        heading: "serif",
        body: "sans-serif",
      }
    },

    features: {
      enableMap: true,
      enableContactForm: true,
      enableReviews: true,
      enableCustomOrder: true,
    },

    layout: {
      galleryStyle: "carousel", // 'carousel' or 'grid'
      menuStyle: "list", // 'list' or 'cards'
      locationStyle: "card", // 'iframe' or 'card'
    },

    integrations: {
      googleSheetWebhookUrl: "https://script.google.com/macros/s/AKfycbx_placeholder_id/exec",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f629c9!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1606282860888!5m2!1sen!2sau",
      businessAddress: "123 Bakery Street, Sweet City, SC 90000",
    },

    content: {
      hero: {
        title: "Baking Life Sweet",
        subtitle: "Handcrafted cakes, pastries, and treats made with love.",
        ctaText: "Order Now",
        backgroundImage: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?q=80&w=2880&auto=format&fit=crop", // Bakery background
      },

      gallery: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
          alt: "Chocolate Cake",
          title: "Signature Chocolate"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1563729768601-d6fa48b84892?auto=format&fit=crop&w=800&q=80",
          alt: "Macarons",
          title: "French Macarons"
        },
        {
          id: 3,
          image: "https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&w=800&q=80",
          alt: "Croissants",
          title: "Butter Croissants"
        },
        {
          id: 4,
          image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=800&q=80",
          alt: "Cookies",
          title: "Choco Chip Cookies"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1616031037011-087000171ea3?auto=format&fit=crop&w=800&q=80",
            alt: "Red Velvet",
            title: "Red Velvet"
        }
      ],

      menu: [
        {
          category: "Cakes",
          items: [
            { name: "Double Chocolate", price: "$45", description: "Rich chocolate ganache layers." },
            { name: "Red Velvet", price: "$40", description: "Classic sponge with cream cheese frosting." },
            { name: "Vanilla Bean", price: "$35", description: "Light and airy vanilla sponge." }
          ]
        },
        {
          category: "Pastries",
          items: [
            { name: "Croissant", price: "$4", description: "Buttery and flaky." },
            { name: "Danish", price: "$5", description: "Fruit filled puff pastry." },
            { name: "Eclair", price: "$6", description: "Choux pastry with custard." }
          ]
        },
        {
            category: "Beverages",
            items: [
              { name: "Cappuccino", price: "$4.50", description: "Espresso with steamed milk foam." },
              { name: "Latte", price: "$4.50", description: "Espresso with steamed milk." },
              { name: "Hot Chocolate", price: "$5.00", description: "Rich cocoa with whipped cream." }
            ]
          }
      ],

      about: {
        title: "Our Story",
        text: "Founded in 2010, Sweet Delights began as a small home kitchen project. Our passion for quality ingredients and traditional baking methods has allowed us to grow into the community's favorite spot for morning coffee and celebration cakes.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80"
      },

      reviews: [
          { name: "Alice M.", text: "The best chocolate cake I've ever had!", rating: 5 },
          { name: "John D.", text: "Lovely atmosphere and great coffee.", rating: 4 },
          { name: "Sarah K.", text: "Ordered a custom cake for my wedding, it was perfect.", rating: 5 }
      ]
    }
  };
