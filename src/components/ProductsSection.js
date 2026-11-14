import { abhimanConfig } from '../config/abhimanConfig.js';
import { renderProductCard } from './ProductCard.js';
import { icons } from '../utils/icons.js';

export function renderProductsSection() {
  return `
    <section id="products" class="py-8 sm:py-16 lg:py-20 bg-cream-50 border-b border-cream-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2.5 sm:space-y-3.5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-maroon-800 text-xs font-bold uppercase tracking-wider">
            <span>Our Current Range</span>
          </div>
          
          <h2 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            Crafted for Daily Crunch &amp; Flavour
          </h2>

          <p class="text-xs sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            Discover our core offerings: crispy, golden banana chips for your tea-time breaks and our special homemade fruit chaat masala to bring everyday fruits and salads alive.
          </p>

          <!-- Honest Notice Banner -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 sm:py-2 rounded-xl bg-amber-50 border border-amber-200 text-charcoal-700 text-xs text-left max-w-xl mx-auto">
            <span class="text-amber-800 shrink-0">${icons.info}</span>
            <span>All Abhiman products are sold directly through Amazon India for doorstep delivery with authentic small-batch freshness.</span>
          </div>
        </div>

        <!-- Reusable Product Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
          ${abhimanConfig.products.map(product => renderProductCard(product)).join('')}
        </div>

        <!-- Central Amazon Discovery Card (High-Contrast Text on Maroon Gradient) -->
        <div class="mt-8 sm:mt-12 max-w-4xl mx-auto p-5 sm:p-8 rounded-2xl sm:rounded-3xl bg-maroon-gradient text-white shadow-xl flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 sm:gap-6 border-2 border-amber-500/30">
          <div class="space-y-1 sm:space-y-1.5 text-center sm:text-left">
            <h3 class="font-serif text-xl sm:text-2xl font-bold text-amber-300 drop-shadow-xs">
              Ready to Order for Your Home?
            </h3>
            <p class="text-xs sm:text-sm text-cream-100 max-w-md leading-relaxed font-normal">
              Browse both products on Amazon with verified order tracking, secure payment options, and doorstep delivery across India.
            </p>
          </div>

          <a 
            href="${abhimanConfig.amazon.brandStoreUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="shrink-0 inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 rounded-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-extrabold text-xs sm:text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 min-h-[44px]"
          >
            ${icons.amazon}
            <span>Shop Full Range on Amazon</span>
            ${icons.externalLink}
          </a>
        </div>

      </div>
    </section>
  `;
}
