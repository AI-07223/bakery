// src/config/siteConfig.js

export const siteConfig = {
    brand: {
      name: "Lumière Patisserie",
      logo: "https://cdn-icons-png.flaticon.com/512/3209/3209931.png",
      whatsappNumber: "1234567890",
      socialLinks: {
        instagram: "https://instagram.com",
        facebook: "https://facebook.com",
      },
      footerText: "© 2024 Lumière Patisserie. Art of Baking.",
    },

    theme: {
      colors: {
        primary: "#D4AF37",    // Gold
        secondary: "#F9F5F0",  // Cream / Off-white Background
        background: "#F9F5F0", // Same as secondary for main bg
        foreground: "#2D2D2D", // Charcoal Black
        accent: "#E5E5E5",     // Light Gray for subtle borders
      },
      fonts: {
        heading: "'Playfair Display', serif",
        body: "'Lato', sans-serif",
        googleFontsUrl: "https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&display=swap"
      },
      borderRadius: "0.5rem",

      // NEW: Configurable Cake Colors
      cakeTheme: {
        flavor: "chocolate", // 'chocolate', 'vanilla', 'strawberry'
        baseColor: "#5D4037",
        midColor: "#795548",
        topColor: "#8D6E63",
        frostingColor: "#FFF3E0",
        frostingShadow: "#FFE0B2",
      }
    },

    features: {
      enableMap: true,
      enableContactForm: true,
      enableReviews: true,
      enableCustomOrder: true,
    },

    layout: {
      galleryStyle: "grid",
      menuStyle: "cards",
      locationStyle: "card",
    },

    integrations: {
      googleSheetWebhookUrl: "",
      googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153169!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6a32f629c9!2sFlinders%20St%20Station!5e0!3m2!1sen!2sau!4v1606282860888!5m2!1sen!2sau",
      businessAddress: "123 Rue de la Paix, Paris, France",
    },

    content: {
      hero: {
        title: "The Art of Sweetness",
        subtitle: "Experience handcrafted perfection in every bite.",
        ctaText: "Explore Collection",
        backgroundImage: "https://images.unsplash.com/photo-1626127339091-a1286940a469?q=80&w=2940&auto=format&fit=crop",
      },

      gallery: [
        {
          id: 1,
          image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
          alt: "Chocolate Ganache",
          title: "Royal Chocolate"
        },
        {
          id: 2,
          image: "https://images.unsplash.com/photo-1563729768601-d6fa48b84892?auto=format&fit=crop&w=800&q=80",
          alt: "Macarons",
          title: "Parisian Macarons"
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
          title: "Artisan Cookies"
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1616031037011-087000171ea3?auto=format&fit=crop&w=800&q=80",
            alt: "Red Velvet",
            title: "Velvet Rose"
        }
      ],

      menu: [
        {
          category: "Signature Cakes",
          items: [
            { name: "The Noir", price: "$45", description: "70% Dark chocolate ganache with gold leaf." },
            { name: "Rouge", price: "$40", description: "Velvet sponge with mascarpone cream." },
            { name: "Vanilla Bean", price: "$35", description: "Infused with Tahitian vanilla." }
          ]
        },
        {
          category: "Viennoiserie",
          items: [
            { name: "Croissant au Beurre", price: "$4", description: "Layered perfection." },
            { name: "Pain au Chocolat", price: "$5", description: "Dark chocolate center." },
            { name: "Fruit Danish", price: "$6", description: "Seasonal fruit glaze." }
          ]
        },
        {
            category: "Espresso Bar",
            items: [
              { name: "Cappuccino", price: "$4.50", description: "Silky foam art." },
              { name: "Café Latte", price: "$4.50", description: "Smooth & creamy." },
              { name: "Chocolat Chaud", price: "$5.00", description: "Thick european style." }
            ]
          }
      ],

      about: {
        title: "Our Heritage",
        text: "Founded in 2010, Lumière began with a simple mission: to bring the elegance of French patisserie to your doorstep. We use only the finest ingredients—Belgian chocolate, Madagascar vanilla, and locally sourced organic flour.",
        image: "https://images.unsplash.com/photo-1556910103-1c02745a30bf?auto=format&fit=crop&w=800&q=80"
      },

      reviews: [
          { name: "Alice M.", text: "An absolute delight. The presentation is unmatched.", rating: 5 },
          { name: "John D.", text: "The croissant took me back to Paris.", rating: 5 },
      ]
    }
  };
