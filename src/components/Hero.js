import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderHero() {
  const bananaChips = abhimanConfig.products.find(p => p.id === 'banana-chips') || abhimanConfig.products[0];

  return `
    <section id="hero" class="relative overflow-hidden pt-4 pb-8 sm:pt-8 sm:pb-14 lg:py-16 bg-cream-50 border-b border-cream-200">
      
      <!-- Subtle Spice Aura Background Accents -->
      <div class="absolute top-0 right-0 -mr-24 -mt-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" aria-hidden="true"></div>
      <div class="absolute bottom-0 left-0 -ml-24 -mb-24 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-maroon-800/5 blur-3xl pointer-events-none" aria-hidden="true"></div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          <!-- Left Column: Value Proposition & CTAs -->
          <div class="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-4 sm:space-y-5">
            
            <!-- Trust Badge: Honest & Non-Exaggerated -->
            <div class="inline-flex items-center gap-2 self-center lg:self-start px-3 py-1 rounded-full bg-cream-200 border border-amber-500/20 text-maroon-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span class="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
              <span>${abhimanConfig.brand.trustMessage}</span>
            </div>

            <!-- Main Headline -->
            <h1 class="font-serif text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-maroon-900 tracking-tight leading-[1.2] sm:leading-[1.15] break-words">
              ${abhimanConfig.brand.tagline}
            </h1>

            <!-- Supporting Paragraph -->
            <p class="text-xs sm:text-base lg:text-lg text-charcoal-700 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              ${abhimanConfig.brand.heroDescription}
            </p>

            <!-- Action CTAs (Mobile Full-Width Buttons for Easy Thumb Tapping) -->
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-4 pt-1">
              <a 
                href="#products" 
                class="w-full sm:w-auto text-center px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-maroon-800 hover:bg-maroon-900 active:bg-maroon-950 text-white font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-700 min-h-[46px] flex items-center justify-center"
              >
                Explore Products
              </a>

              <a 
                href="${abhimanConfig.amazon.brandStoreUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-stone-950 font-bold text-sm sm:text-base shadow-md hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[46px]"
                aria-label="Buy on Amazon (opens in a new tab)"
              >
                ${icons.amazon}
                <span>Buy on Amazon</span>
                ${icons.externalLink}
              </a>
            </div>

            <!-- Key Reassurance Points (Compact & Responsive on Mobile) -->
            <div class="pt-3 border-t border-cream-200 flex flex-wrap items-center justify-center lg:justify-start gap-x-4 sm:gap-x-6 gap-y-1.5 text-xs text-charcoal-600 font-medium">
              <div class="flex items-center gap-1.5">
                <span class="text-emerald-700">${icons.check}</span>
                <span>Authentic Recipes</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-emerald-700">${icons.check}</span>
                <span>Everyday Snacking</span>
              </div>
              <div class="flex items-center gap-1.5">
                <span class="text-emerald-700">${icons.check}</span>
                <span>Delivered via Amazon</span>
              </div>
            </div>

          </div>

          <!-- Right Column: Appetizing Food Image Hero Card -->
          <div class="lg:col-span-5 relative mt-2 lg:mt-0">
            <div class="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              <!-- Food Image Display Container with Warm Frame -->
              <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden bg-cream-100 border-2 sm:border-4 border-white shadow-xl sm:shadow-2xl p-2 sm:p-2.5 card-hover-effect">
                <div class="relative rounded-xl sm:rounded-2xl overflow-hidden aspect-4/3 bg-cream-200">
                  <img 
                    src="${bananaChips.primaryImage}" 
                    alt="${bananaChips.altText}" 
                    class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <!-- Gradient overlay for text contrast -->
                  <div class="absolute inset-0 bg-gradient-to-t from-charcoal-950/90 via-charcoal-950/40 to-transparent pointer-events-none"></div>
                  
                  <!-- Inset High-Contrast Product Badge Card -->
                  <div class="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-3 sm:left-3 sm:right-3 p-3 sm:p-3.5 rounded-xl bg-stone-950/90 backdrop-blur-md border border-white/20 text-white shadow-xl">
                    <div class="flex items-center justify-between gap-2 mb-1">
                      <span class="inline-block px-2.5 py-0.5 rounded-full bg-amber-500 text-stone-950 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-xs">
                        Featured Snack
                      </span>
                      <span class="text-[11px] text-amber-300 font-bold">100% Vegetarian</span>
                    </div>
                    <h2 class="font-serif text-base sm:text-xl font-bold tracking-wide text-white leading-snug drop-shadow-xs">
                      ${bananaChips.name}
                    </h2>
                    <p class="text-xs text-stone-200 mt-0.5 line-clamp-1 font-normal">
                      ${bananaChips.tagline}
                    </p>
                  </div>
                </div>
              </div>

              <!-- Floating Amazon Badge Sticker (Positioned safely with high contrast) -->
              <div class="absolute top-2 right-2 sm:-top-3 sm:-right-3 bg-amber-500 text-charcoal-950 rounded-xl sm:rounded-2xl px-2.5 py-1.5 sm:px-3 sm:py-2 shadow-lg border-2 border-white flex items-center gap-2 transform sm:rotate-2 hover:rotate-0 transition-transform z-10">
                <div class="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-charcoal-950 text-amber-400 flex items-center justify-center font-bold text-[10px] sm:text-xs shrink-0">
                  IN
                </div>
                <div class="text-left leading-tight pr-0.5">
                  <div class="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-charcoal-900">Pan-India Delivery</div>
                  <div class="text-[11px] sm:text-xs font-black">Order on Amazon</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  `;
}
