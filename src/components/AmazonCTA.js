import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderAmazonCTA() {
  return `
    <section id="amazon-cta" class="py-8 sm:py-16 lg:py-20 bg-cream-100 border-b border-cream-200 relative overflow-hidden">
      
      <!-- Decorative Backdrop Circles -->
      <div class="absolute -top-12 -left-12 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-amber-400/10 blur-2xl pointer-events-none" aria-hidden="true"></div>
      <div class="absolute -bottom-12 -right-12 w-48 sm:w-64 h-48 sm:h-64 rounded-full bg-maroon-800/10 blur-2xl pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-maroon-gradient p-6 sm:p-12 lg:p-14 text-center text-white shadow-2xl border-2 sm:border-4 border-amber-500/30 relative">
          
          <!-- Amazon Prime / Delivery Stamp -->
          <div class="inline-flex items-center gap-2 px-3.5 py-1 sm:px-4 sm:py-1.5 rounded-full bg-white/10 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-5 border border-amber-400/40 shadow-xs">
            ${icons.truck}
            <span>Pan-India Delivery</span>
          </div>

          <!-- Main Heading (Crisp White with Subtle Drop Shadow) -->
          <h2 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-2 sm:mb-3 leading-tight drop-shadow-sm">
            Enjoy Abhiman at Home
          </h2>

          <!-- Subtext (Bright Cream / Off-White for Maximum Legibility) -->
          <p class="text-sm sm:text-base lg:text-lg text-cream-100 max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed font-normal">
            ${abhimanConfig.amazon.ctaSubtext}
          </p>

          <!-- Primary Amazon Shop CTA Button (Full width on mobile) -->
          <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a 
              href="${abhimanConfig.amazon.brandStoreUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-extrabold text-sm sm:text-base shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-amber-300 min-h-[46px]"
              aria-label="Shop Abhiman on Amazon (opens in a new tab)"
            >
              ${icons.amazon}
              <span>${abhimanConfig.amazon.ctaText}</span>
              ${icons.externalLink}
            </a>

            <a 
              href="#products" 
              class="w-full sm:w-auto px-7 py-3 rounded-full bg-white/15 hover:bg-white/25 active:bg-white/30 text-white font-bold text-xs sm:text-sm border border-white/40 shadow-sm transition-all duration-200 min-h-[44px] flex items-center justify-center"
            >
              Review Both Products
            </a>
          </div>

          <!-- Small print reassurance -->
          <p class="text-[11px] sm:text-xs text-cream-200 mt-5 sm:mt-6 max-w-md mx-auto leading-normal font-light">
            ${abhimanConfig.amazon.disclaimer}
          </p>

        </div>
      </div>
    </section>
  `;
}
