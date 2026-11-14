import { icons } from '../utils/icons.js';

export function renderProductCard(product) {
  return `
    <article 
      class="flex flex-col bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-cream-300 shadow-sm card-hover-effect focus-within:ring-2 focus-within:ring-amber-500 transition-all duration-300"
      aria-labelledby="product-title-${product.id}"
    >
      <!-- Product Header & Visual Preview -->
      <div class="relative bg-cream-100 overflow-hidden aspect-4/3 flex items-center justify-center p-2.5 sm:p-4">
        
        <!-- Category & Best-Seller Badges with High Contrast -->
        <div class="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5 z-10 flex flex-wrap gap-1.5 sm:gap-2">
          <span class="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
            product.category === 'Snack' ? 'bg-amber-500 text-charcoal-950 border border-amber-400 shadow-sm' : 'bg-maroon-800 text-cream-50 border border-maroon-700 shadow-sm'
          }">
            ${product.category}
          </span>
          <span class="px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-semibold bg-charcoal-900/85 backdrop-blur-xs text-cream-50 border border-white/20 shadow-sm">
            ${product.badge}
          </span>
        </div>

        <!-- Product Image -->
        <img 
          src="${product.primaryImage}" 
          alt="${product.altText}" 
          class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500 rounded-xl sm:rounded-2xl"
          loading="lazy"
        />

        <!-- Secondary Packaging Thumbnail Badge -->
        <div class="absolute bottom-2.5 right-2.5 sm:bottom-3 sm:right-3 bg-white/95 backdrop-blur-xs rounded-xl p-1 sm:p-1.5 shadow-md border border-cream-200 w-11 h-13 sm:w-14 sm:h-16 flex items-center justify-center pointer-events-none" title="Pack Preview">
          <img src="${product.packMockupImage}" alt="Pack illustration for ${product.name}" class="w-full h-full object-contain" />
        </div>
      </div>

      <!-- Content Body with Guaranteed Bottom Alignment -->
      <div class="flex-1 p-4 sm:p-5 lg:p-6 flex flex-col justify-between">
        <!-- Top Info -->
        <div class="space-y-1.5 sm:space-y-2">
          <h3 id="product-title-${product.id}" class="font-serif text-lg sm:text-2xl font-bold text-maroon-900 tracking-tight leading-snug">
            ${product.name}
          </h3>
          <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
            ${product.shortDescription}
          </p>
        </div>

        <!-- Flexible Spacer to Align Ideal For & Buttons Across All Cards -->
        <div class="flex-1 min-h-3 sm:min-h-4"></div>

        <!-- Bottom Container -->
        <div class="space-y-3 pt-2">
          <!-- Serving Highlights Pills -->
          <div class="pt-2.5 border-t border-cream-200">
            <p class="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500 mb-1.5">Ideal For</p>
            <div class="flex flex-wrap gap-1.5">
              ${product.servingIdeas.map(idea => `
                <span class="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-cream-100 text-charcoal-700 text-[11px] sm:text-xs font-medium">
                  ${idea.title}
                </span>
              `).join('')}
            </div>
          </div>

          <!-- Card Action Buttons (Touch Friendly 44px+ height) -->
          <div class="pt-1 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
            <!-- View Product Details (Opens Accessible Modal) -->
            <button 
              type="button"
              data-open-modal="${product.id}"
              class="open-product-modal-btn w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2.5 rounded-xl bg-cream-200 hover:bg-cream-300 active:bg-cream-400 text-charcoal-900 font-bold text-xs sm:text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[42px] sm:min-h-[44px]"
              aria-haspopup="dialog"
            >
              ${icons.eye}
              <span>View Details</span>
            </button>

            <!-- Direct Buy on Amazon CTA -->
            <a 
              href="${product.amazonUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-charcoal-900 font-bold text-xs sm:text-sm shadow-xs hover:shadow transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[42px] sm:min-h-[44px]"
              aria-label="Buy ${product.name} on Amazon (opens in a new tab)"
            >
              ${icons.amazon}
              <span>Buy on Amazon</span>
              ${icons.externalLink}
            </a>
          </div>
        </div>

      </div>
    </article>
  `;
}
