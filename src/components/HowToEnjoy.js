import { abhimanConfig } from '../config/abhimanConfig.js';

export function renderHowToEnjoy() {
  return `
    <section id="how-to-enjoy" class="py-8 sm:py-16 lg:py-20 bg-cream-50 border-b border-cream-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2.5 sm:space-y-3.5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-maroon-800 text-xs font-bold uppercase tracking-wider">
            <span>Everyday Inspirations</span>
          </div>

          <h2 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            How to Enjoy Abhiman
          </h2>

          <p class="text-xs sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            Simple, versatile ways to make every tea break, fruit bowl, and family gathering more memorable.
          </p>
        </div>

        <!-- 4 Usage Ideas Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          ${abhimanConfig.howToEnjoy.map((item, index) => `
            <div class="bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-cream-200 shadow-xs card-hover-effect flex flex-col justify-between">
              
              <!-- Food Image Display with High-Contrast Brand Badges -->
              <div class="relative aspect-16/9 sm:aspect-4/3 overflow-hidden bg-cream-100">
                <img 
                  src="${item.image}" 
                  alt="${item.alt}" 
                  class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />

                <!-- High-Contrast Product Badge Pill (Vibrant, Bold & Clear) -->
                <span class="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md ${
                  item.productBadge === 'Banana Chips' 
                    ? 'bg-amber-500 text-stone-950 border border-amber-300' 
                    : 'bg-maroon-800 text-white border border-maroon-600'
                }">
                  ${item.productBadge}
                </span>
              </div>

              <!-- Content Body with Fixed Baseline Alignment -->
              <div class="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-800 block">
                    ${item.subtitle}
                  </span>
                  <h3 class="font-serif text-base sm:text-lg font-bold text-maroon-900 mt-1 mb-1.5 leading-snug">
                    ${item.title}
                  </h3>
                  <p class="text-xs text-charcoal-600 leading-relaxed">
                    ${item.description}
                  </p>
                </div>

                <div class="pt-2.5 sm:pt-3 mt-3 sm:mt-4 border-t border-cream-100 flex items-center justify-between text-[11px] text-charcoal-500 font-medium">
                  <span>Serving Idea 0${index + 1}</span>
                  <a href="#products" class="text-maroon-800 font-bold hover:underline flex items-center gap-1">
                    <span>View Product</span>
                    <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}
