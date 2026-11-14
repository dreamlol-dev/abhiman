import './styles/main.css';
import { abhimanConfig } from './config/abhimanConfig.js';
import { renderHeader, initHeader } from './components/Header.js';
import { renderHero } from './components/Hero.js';
import { renderBrandIntro } from './components/BrandIntro.js';
import { renderProductsSection } from './components/ProductsSection.js';
import { renderProductDetailModal, initProductDetailModal } from './components/ProductDetailModal.js';
import { renderWhyChooseUs } from './components/WhyChooseUs.js';
import { renderHowToEnjoy } from './components/HowToEnjoy.js';
import { renderAmazonCTA } from './components/AmazonCTA.js';
import { renderAboutSection } from './components/AboutSection.js';
import { renderContactSection, initContactSection } from './components/ContactSection.js';
import { renderFooter } from './components/Footer.js';
import { renderPolicyModal, initPolicyModal } from './components/PolicyModal.js';
import { renderMobileQuickBar, initMobileQuickBar } from './components/MobileQuickBar.js';

function injectJsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': '#organization',
        name: abhimanConfig.brand.name,
        description: abhimanConfig.brand.seoDescription,
        url: window.location.origin || 'https://abhimanfoods.in',
        logo: new URL(abhimanConfig.brand.logo, window.location.href).href,
        sameAs: [
          abhimanConfig.amazon.brandStoreUrl
        ]
      },
      ...abhimanConfig.products.map(product => ({
        '@type': 'Product',
        name: product.name,
        description: product.shortDescription,
        category: product.category,
        brand: {
          '@type': 'Brand',
          name: abhimanConfig.brand.name
        },
        image: (window.location.origin || 'https://abhimanfoods.in') + product.primaryImage,
        offers: {
          '@type': 'Offer',
          url: product.amazonUrl,
          availability: 'https://schema.org/InStock',
          priceCurrency: 'INR'
        }
      }))
    ]
  };

  const scriptTag = document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.text = JSON.stringify(structuredData, null, 2);
  document.head.appendChild(scriptTag);
}

function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  app.innerHTML = `
    <!-- Top Announcement Bar (Strict Single-Line on Mobile & Desktop) -->
    <aside class="bg-maroon-950 text-white py-1.5 px-3 text-center text-[10.5px] sm:text-xs font-medium border-b border-maroon-800/80 select-none" aria-label="Announcement">
      <div class="max-w-7xl mx-auto flex items-center justify-center gap-1.5 sm:gap-2 whitespace-nowrap overflow-hidden text-ellipsis">
        <span class="w-1.5 h-1.5 rounded-full bg-amber-400 shrink-0 animate-pulse" aria-hidden="true"></span>
        <span class="text-cream-100 hidden sm:inline">Order Abhiman Banana Chips &amp; Chaat Masala across India:</span>
        <span class="text-cream-100 sm:hidden">Pan-India Delivery on Amazon:</span>
        <a href="${abhimanConfig.amazon.brandStoreUrl}" target="_blank" rel="noopener noreferrer" class="font-bold text-amber-400 hover:text-amber-300 underline underline-offset-2 shrink-0 flex items-center gap-1">
          <span>Shop on Amazon</span>
          <span aria-hidden="true">&rarr;</span>
        </a>
      </div>
    </aside>

    ${renderHeader()}

    <main id="main-content">
      ${renderHero()}
      ${renderBrandIntro()}
      ${renderProductsSection()}
      ${renderWhyChooseUs()}
      ${renderHowToEnjoy()}
      ${renderAmazonCTA()}
      ${renderAboutSection()}
      ${renderContactSection()}
    </main>

    ${renderFooter()}

    <!-- Mobile-Only Floating Quick Action Bar -->
    ${renderMobileQuickBar()}

    <!-- Modals -->
    ${renderProductDetailModal()}
    ${renderPolicyModal()}
  `;

  // Initialize interactive controllers
  initHeader();
  initProductDetailModal();
  initContactSection();
  initPolicyModal();
  initMobileQuickBar();
  injectJsonLd();
}

// Bootstrap on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderApp);
} else {
  renderApp();
}
