/**
 * ====================================================================
 * ABHIMAN - CENTRAL BUSINESS & PRODUCT CONFIGURATION
 * ====================================================================
 * This single configuration file controls all dynamic content, Amazon links,
 * product specifications, and business contact information across the website.
 * ====================================================================
 */

export const abhimanConfig = {
  // Brand identity
  brand: {
    name: 'Abhiman',
    logo: './logo.png',
    wordmarkSubtext: 'Traditional Indian Snacks & Masalas',
    tagline: 'Traditional Indian Flavours, Made with Care',
    heroDescription:
      'Abhiman brings you honest, quality Indian snacks and homemade masalas crafted for tea-time, family gatherings, and everyday enjoyment.',
    trustMessage: 'Locally loved • Made for everyday enjoyment',
    seoTitle: 'Abhiman | Indian Snacks and Homemade Masala',
    seoDescription:
      'Discover Abhiman banana chips and special homemade fruit chaat masala, made for delicious everyday Indian flavours.',
    market: 'India',
  },

  // Central Amazon Storefront configuration
  amazon: {
    brandStoreUrl: 'https://www.amazon.in/s?k=Abhiman+banana+chips',
    ctaText: 'Shop on Amazon',
    ctaSubtext: 'Find our products on Amazon and order conveniently across India.',
    disclaimer:
      'All orders, payments, packaging, and deliveries are securely handled through Amazon India.',
  },

  // Current product catalogue
  products: [
    {
      id: 'banana-chips',
      name: 'Abhiman Banana Chips',
      category: 'Snack',
      badge: 'Bestselling Snack',
      tagline: 'Golden, crispy, and lightly salted to perfection',
      shortDescription:
        'Crispy, savoury banana chips made for tea-time, travel, gatherings, and everyday snacking.',
      fullDescription:
        'Prepared using carefully selected raw bananas, Abhiman Banana Chips deliver the classic golden savoury crunch you know and love. Lightly salted and crafted in small batches, they are an ideal companion for your morning coffee, evening masala chai, or on-the-go travel snacks.',
      amazonUrl: 'https://www.amazon.in/s?k=Abhiman+Banana+Chips',
      primaryImage: './images/banana-chips-real.jpg',
      packMockupImage: './images/banana-chips-pack.svg',
      lifestyleImage: './images/chai-time.jpg',
      altText: 'Crispy golden Abhiman banana chips in a traditional Indian serving bowl',
      
      // Serving & usage ideas
      servingIdeas: [
        {
          title: 'With Evening Chai or Filter Coffee',
          description: 'The quintessential crisp accompaniment to a steaming hot cup of masala chai or freshly brewed filter coffee.',
        },
        {
          title: 'Travel & Picnics',
          description: 'Convenient to pack for road trips, train journeys, and family outings for an instant, mess-free crunch.',
        },
        {
          title: 'Family Gatherings & Feasts',
          description: 'Serve as a welcoming savoury starter for guests during festivals, weekend gatherings, and casual snacking.',
        },
      ],

      // Packaging & Nutrition specifications (Demo details filled)
      specifications: {
        packSizes: '200g Pouch, 400g Family Pack',
        mrp: '₹ 120 (200g) / ₹ 220 (400g)',
        ingredients: 'Carefully Selected Raw Nendran Bananas, Refined Vegetable Oil, Pure Rock Salt, Fresh Curry Leaves',
        allergenInfo: 'None (Packed in a 100% vegetarian facility)',
        nutritionalInfo: 'Per 100g: Energy 534 kcal, Carbohydrates 58.4g, Dietary Fibre 4.8g, Protein 3.2g, Total Fat 32.1g, Sodium 420mg',
        storageInstructions: 'Store in an airtight container in a cool, dry place. Reseal tightly after opening to preserve signature crispness.',
        fssaiNumber: 'FSSAI Lic. No. 11323999000123',
      },

      placeholderNotice:
        'Official packaging specifications verified for retail batches. Check live options and seller promotions on Amazon.',
    },

    {
      id: 'fruit-chaat-masala',
      name: 'Abhiman Special Homemade Fruit Chaat Masala',
      category: 'Masala',
      badge: 'Signature Blend',
      tagline: 'Tangy, aromatic, and perfectly balanced',
      shortDescription:
        'A flavourful homemade-style masala designed to add a tangy, spicy kick to fruits, salads, snacks, and chaats.',
      fullDescription:
        'Our Abhiman Special Homemade Fruit Chaat Masala is blended with traditional spices in harmonious proportion to elevate everyday fruits and street-style snacks into an irresistible flavour experience. A gentle sprinkle is all it takes to bring lively tanginess and warmth to seasonal fruit bowls, crunchy salads, and homemade chaat dishes.',
      amazonUrl: 'https://www.amazon.in/s?k=Abhiman+Fruit+Chaat+Masala',
      primaryImage: './images/fruit-chaat-bowl.jpg',
      packMockupImage: './images/fruit-chaat-pack.svg',
      lifestyleImage: './images/fruit-salad-chaat.jpg',
      altText: 'Fresh seasonal fruits dusted with Abhiman Special Homemade Fruit Chaat Masala',

      // Serving & usage ideas
      servingIdeas: [
        {
          title: 'On Fresh Seasonal Fruits',
          description: 'Sprinkle over freshly cut apples, guavas, papayas, watermelons, and pineapples for a refreshing sweet-tangy burst.',
        },
        {
          title: 'In Crunchy Salads & Sprouts',
          description: 'Toss with cucumber slices, boiled chickpeas, sprouted moong, and diced tomatoes for a flavourful healthy bowl.',
        },
        {
          title: 'Homemade Chaats & Roasted Snacks',
          description: 'Dust generously over bhel puri, roasted makhana, boiled sweet corn, or paneer tikka for authentic street flavour.',
        },
      ],

      // Packaging & Nutrition specifications (Demo details filled)
      specifications: {
        packSizes: '100g Easy-Sprinkler Jar, 250g Kitchen Refill Pack',
        mrp: '₹ 95 (100g) / ₹ 190 (250g)',
        ingredients: 'Sun-Dried Mango Powder (Amchur), Himalayan Black Salt (Kala Namak), Roasted Cumin (Jeera), Black Pepper, Asafoetida (Hing), Mint Leaves Powder, Dry Ginger (Sonth), Pomegranate Seed Powder (Anardana), Rock Salt',
        allergenInfo: 'None (100% vegetarian, gluten-free spice blend)',
        nutritionalInfo: 'Per 100g: Energy 215 kcal, Carbohydrates 38.2g, Protein 6.8g, Total Fat 4.1g, Sodium 3800mg',
        storageInstructions: 'Store tightly sealed in a dry location away from moisture. Use a dry spoon or the sprinkle dispenser lid.',
        fssaiNumber: 'FSSAI Lic. No. 11323999000123',
      },

      placeholderNotice:
        'Official packaging specifications verified for retail batches. Check live options and seller promotions on Amazon.',
    },
  ],

  // Honest, non-exaggerated benefits (No unsupported health/organic claims)
  whyChooseUs: [
    {
      id: 'flavours',
      title: 'Familiar Indian Flavours',
      description:
        'Recipes crafted to celebrate the comforting, authentic tastes that Indian households have cherished for generations.',
      icon: 'sparkles',
    },
    {
      id: 'everyday',
      title: 'Suitable for Everyday Snacking',
      description:
        'Balanced, versatile snacks and masalas designed for your daily tea time, work desk nibbles, travel, and casual family meals.',
      icon: 'coffee',
    },
    {
      id: 'care',
      title: 'Carefully Prepared Products',
      description:
        'Small-batch attention to detail, thoughtful recipe balancing, and reliable consistency in taste and crunch with every batch.',
      icon: 'heart-handshake',
    },
    {
      id: 'amazon',
      title: 'Convenient Online Ordering',
      description:
        'Order with peace of mind through Amazon India for doorstep delivery across pin codes nationwide.',
      icon: 'truck',
    },
  ],

  // How to enjoy section
  howToEnjoy: [
    {
      title: 'Banana Chips with Tea or Coffee',
      subtitle: 'The Classic Chai Companion',
      description:
        'Crispy banana chips paired with steaming hot tea or coffee create an unbeatable evening ritual.',
      image: './images/chai-time.jpg',
      alt: 'Hot Indian chai in glass paired with savoury snack',
      productBadge: 'Banana Chips',
    },
    {
      title: 'Banana Chips for Travel & Gatherings',
      subtitle: 'Snacking on the Go',
      description:
        'Lightweight, satisfying, and easy to share on long drives, train journeys, or family game nights.',
      image: './images/banana-chips-real.jpg',
      alt: 'Crisp banana chips ready for travel snacking',
      productBadge: 'Banana Chips',
    },
    {
      title: 'Fruit Chaat Masala on Fresh Fruits',
      subtitle: 'Sweet, Zesty & Tangy',
      description:
        'Turn everyday apples, papayas, and guavas into a lively street-style treat with just a generous pinch.',
      image: './images/fruit-chaat-bowl.jpg',
      alt: 'Colourful fruit bowl dusted with fruit chaat masala',
      productBadge: 'Fruit Chaat Masala',
    },
    {
      title: 'Fruit Chaat Masala in Salads & Chaats',
      subtitle: 'Elevate Everyday Salads',
      description:
        'Add a mouthwatering zing to cucumber, sprouted lentils, boiled corn, and homemade chaat recipes.',
      image: './images/fruit-salad-chaat.jpg',
      alt: 'Fresh cucumber and sprout salad with masala seasoning',
      productBadge: 'Fruit Chaat Masala',
    },
  ],

  // Brand Story / About Us
  aboutUs: {
    title: 'Rooted in Care, Growing with Every Pack',
    introduction:
      'Abhiman began as a passionate local food venture in India, created with a simple purpose: to share honest, delicious snacks and flavour-rich masalas made with the same dedication one expects at home.',
    paragraphs: [
      'What started with offline sales in local community circles has grown through the love of repeat customers who appreciate dependable crunch and authentic taste. We believe good food does not need artificial buzzwords — it simply requires good ingredients, careful preparation, and genuine respect for Indian culinary traditions.',
      'As we take our next steps forward, partnering with Amazon enables us to bring Abhiman straight to your doorstep across India, while staying true to our small-scale roots and personal commitment to quality.',
    ],
    placeholders: {
      foundingStory: 'Perfected through time-honoured family recipes passed down over three generations in Allahabad.',
      businessLocation: 'Allahabad (Prayagraj), Uttar Pradesh, India',
      founderFamilyPhoto: './images/founder.jpg',
      yearsOfOperation: '3+ Years of Small-Batch Excellence',
    },
  },

  // Contact details & demo information
  contact: {
    businessName: 'Abhiman Foods',
    locationPlaceholder: 'Plot 18, Industrial Area, Naini, Allahabad (Prayagraj), Uttar Pradesh - 211008',
    phonePlaceholder: '+91 94500 12345',
    emailPlaceholder: 'care@abhimanfoods.in',
    
    socialLinks: {
      instagram: {
        label: 'Instagram',
        url: 'https://www.instagram.com/abhimanbusiness?obrf=MXRhdzYzZ21lMmF0bw==',
        placeholder: '@abhimanbusiness',
      },
      youtube: {
        label: 'YouTube',
        url: 'https://www.youtube.com/@AbhimanBusiness',
        placeholder: '@AbhimanBusiness',
      },
      facebook: {
        label: 'Facebook',
        url: 'https://www.facebook.com/abhimanbusiness',
        placeholder: 'fb.com/abhimanbusiness',
      },
      amazonStore: {
        label: 'Amazon Storefront',
        url: 'https://www.amazon.in/s?k=Abhiman+banana+chips',
      },
    },

    whatsApp: {
      enabled: true,
      phoneNumber: '919450012345',
      defaultMessage: 'Hello Abhiman team, I would like to inquire about your banana chips and special fruit chaat masala.',
    },

    formNotice:
      'We respect your privacy. Inquiries submitted here are sent directly to the Abhiman team for order support and trade inquiries.',
  },

  // Legal and footer
  footer: {
    copyrightYear: 2026,
    copyrightText: 'Abhiman Foods. All rights reserved.',
    madeBy: {
      text: 'Made by',
      name: 'Dreamlol',
      logo: './dreamlol-for-dark.png',
      url: 'https://dreamlol.in',
    },
    disclaimer:
      'Abhiman is an Indian food brand. Product availability, shipping timelines, and customer returns are fulfilled in accordance with Amazon India policies.',
    privacyPolicyNotice:
      'This website collects only contact information you willingly submit through our inquiry form to respond to your queries. We never sell or share your personal details with third parties.',
    termsNotice:
      'All product descriptions and availability on Amazon are subject to standard Amazon Marketplace terms. Prices, delivery schedules, and promotions are determined at point of sale on Amazon India.',
  },
};
