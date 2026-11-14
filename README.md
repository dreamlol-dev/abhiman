# Abhiman (अभिमान) — Indian Snacks & Homemade Masala

A modern, fast, responsive, and trustworthy website built for **Abhiman**, an Indian food business bringing authentic snacks and traditional homemade masalas to households across India.

The website is designed for brand presentation, product discovery, trust-building, and seamlessly directing customers to Amazon India for purchases.

---

## 🎨 Design Philosophy & Brand Identity

- **Aesthetic**: Premium yet approachable Indian food-brand styling.
- **Palette**:
  - **Official Brand Green** (`#00522E`, `#003D22`, `#002917`): Primary brand color matching the official Abhiman logo.
  - **Warm Turmeric Gold** (`#D97706`, `#F59E0B`, `#FBBF24`): Crisp banana chips, turmeric, and warmth.
  - **Spiced Cream / Off-White** (`#FDFBF7`, `#FAF5EF`): Clean, warm contrast.
  - **Dark Charcoal** (`#1C1917`, `#292524`): Ultra-readable typography for all age groups.
- **Honest Branding**: Avoids unsubstantiated health, purity, or organic claims. Clearly marks placeholders where official certified data is pending.

---

## 🚀 Quick Start

### 1. Installation & Local Development
```bash
# Install dependencies
npm install

# Start local development server with Hot Module Replacement
npm run dev

# Build production-ready static assets (output in dist/)
npm run build

# Preview production build locally
npm run preview
```

---

## 🛠️ Single Central Configuration File

All business information, Amazon URLs, contact details, and product specifications are centrally managed in:
👉 `src/config/abhimanConfig.js`

You do **not** need to touch HTML or component files to update business data.

---

## 📋 Where to Update Business Information

### 1. Updating Amazon Store & Product URLs
In `src/config/abhimanConfig.js`:
```javascript
// Main storefront link (Header CTA, Hero secondary CTA, Footer)
amazon: {
  brandStoreUrl: 'https://www.amazon.in/s?k=YOUR_LIVE_STORE_URL',
  ctaText: 'Shop on Amazon',
  ...
}

// Product 1: Banana Chips
products[0].amazonUrl = 'https://www.amazon.in/dp/YOUR_BANANA_CHIPS_ASIN';

// Product 2: Special Homemade Fruit Chaat Masala
products[1].amazonUrl = 'https://www.amazon.in/dp/YOUR_CHAAT_MASALA_ASIN';
```

### 2. Updating Contact Information & Business Location
In `src/config/abhimanConfig.js` under `contact`:
```javascript
contact: {
  businessName: 'Abhiman',
  // Replace placeholders with real details:
  locationPlaceholder: 'Plot 18, Industrial Area, Naini, Allahabad (Prayagraj), Uttar Pradesh - 211008',
  phonePlaceholder: '+91 94500 12345',
  emailPlaceholder: 'care@abhimanfoods.in',
  
  socialLinks: {
    instagram: {
      label: 'Instagram',
      url: 'https://instagram.com/abhiman_foods',
    },
    facebook: {
      label: 'Facebook',
      url: 'https://facebook.com/abhimanfoods',
    },
  },
  
  // WhatsApp Button (disabled by default until real number is added):
  whatsApp: {
    enabled: true, // Set to true when ready
    phoneNumber: '919876543210', // Country code (91) + 10 digits without + or spaces
    defaultMessage: 'Hello Abhiman, I would like to inquire about your products.',
  }
}
```

### 3. Updating Founding Story & Business Journey
In `src/config/abhimanConfig.js` under `aboutUs`:
```javascript
aboutUs: {
  placeholders: {
    foundingStory: 'Founded with family recipes perfected over generations in Allahabad',
    businessLocation: 'Allahabad (Prayagraj), Uttar Pradesh, India',
    founderFamilyPhoto: '/images/founder.jpg', // Place your image in public/images/
    yearsOfOperation: '2+ years of local retail love',
  }
}
```

### 4. Updating Product Ingredients, MRP & Nutritional Facts
The website strictly enforces honesty: **no empty tables or fake nutritional values are shown to customers**.

When your official laboratory tests and certified packaging labels are ready, simply fill the `specifications` object for each product in `src/config/abhimanConfig.js`:

```javascript
// Example: Abhiman Banana Chips
specifications: {
  packSizes: '200g, 400g Family Pack',
  mrp: '₹ 120 (Subject to Amazon seller promotions)',
  ingredients: 'Raw Banana, Refined Edible Vegetable Oil, Common Salt',
  allergenInfo: 'Processed in a facility that also handles mustard and nuts',
  nutritionalInfo: 'Per 100g: Energy 530 kcal, Protein 3.2g, Carbohydrates 58g, Fat 32g',
  storageInstructions: 'Store in an airtight container in a cool, dry place away from direct sunlight',
  fssaiNumber: 'FSSAI Lic. No. 100XXXXXXXXXXX',
}
```
> **Automatic UI Behavior**: As soon as these values are non-null, the Product Detail Modal automatically switches from the pending status box to a clean, formatted table.

### 5. Brand Logo & Product Images
- **Official Brand Logo**: `public/logo.png` (Used across Header, Footer, Mobile Quick Bar, and Structured Data).
- **Favicon**: Automatically generated from `public/logo.png` as `public/favicon.png`.
- Place your high-resolution product photographs in `public/images/`:
  - `public/images/banana-chips-real.jpg` (Hero & Product card for Banana Chips)
  - `public/images/fruit-chaat-bowl.jpg` (Product card for Fruit Chaat Masala)
  - `public/images/chai-time.jpg` (Serving suggestion with tea)
  - `public/images/fruit-salad-chaat.jpg` (Serving suggestion on fresh fruit)
  - `public/images/founder.jpg` (Founder or family kitchen photo)

---

## 📱 Mobile-First & Accessibility Features

- **Thumb-Friendly Touch Targets**: All buttons, links, and hamburger menu controls feature at least 44x44px minimum tap target sizes adhering to Apple Human Interface Guidelines and WCAG standards.
- **iOS Safari Auto-Zoom Prevention**: Form inputs (`input`, `select`, `textarea`) enforce a minimum font-size of 16px on mobile screens, preventing unwanted Safari viewport auto-zooming upon field focus.
- **Modern Safe-Area Inset Support**: Uses `env(safe-area-inset-bottom)` to ensure zero clipping on modern bezel-less iPhones and Android navigation bars.
- **Backdrop-Dismissable Drawer**: The mobile navigation drawer includes a tap-to-dismiss backdrop and auto-scroll locking (`overflow: hidden` on body while open).
- **Mobile Quick Action Bar**: On mobile devices, a floating bottom shopping bar smoothly slides in as users scroll down, offering one-tap access to the Amazon storefront.
- **Keyboard Accessible**: Full tab navigation, skip-to-content anchor, visible focus rings, ESC key closes modals.
- **Screen Reader Friendly**: Semantic HTML5 tags (`<header>`, `<main>`, `<nav>`, `<article>`, `<section>`, `<footer>`), ARIA attributes (`aria-expanded`, `aria-controls`, `aria-hidden`, `aria-modal`).
- **Responsive Layout**: Zero horizontal overflow on narrow screens down to 320px width. Fluid typography and responsive CSS grid.
- **SEO & Open Graph**: Pre-configured meta tags, Twitter card, favicon, and valid JSON-LD structured data (`Organization` and `Product` schemas).

---

## 📦 Deployment & GitHub Pages Hosting

The repository is pre-configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`) to automatically build and deploy to **GitHub Pages** on every push to `main`.

### Live Demo URL
🔗 **[https://dreamlol-dev.github.io/abhiman/](https://dreamlol-dev.github.io/abhiman/)**

### To Enable GitHub Pages:
1. Go to your repository on GitHub: `https://github.com/dreamlol-dev/abhiman`
2. Click **Settings** → **Pages** (under the "Code and automation" section).
3. Under **Build and deployment** → **Source**, select **GitHub Actions**.
4. Once selected, pushing to `main` will automatically trigger the build and deploy pipeline!

---

&copy; 2026 Abhiman. Traditional Indian Flavours, Made with Care.
