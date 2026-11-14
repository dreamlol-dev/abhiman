import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderWhyChooseUs() {
  const iconMap = {
    sparkles: icons.sparkles,
    coffee: icons.coffee,
    'heart-handshake': icons.heartHandshake,
    truck: icons.truck,
  };

  return `
    <section id="why-choose-us" class="py-8 sm:py-16 lg:py-20 bg-cream-100 border-b border-cream-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2.5 sm:space-y-3.5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-maroon-800 text-xs font-bold uppercase tracking-wider">
            <span>Our Commitment</span>
          </div>

          <h2 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            Why Choose Abhiman
          </h2>

          <p class="text-xs sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            Honest, dependable Indian snacks and home-style masalas made for everyday Indian households.
          </p>
        </div>

        <!-- 4 Honest Benefit Cards Grid (Even Heights & Aligned Baselines) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 items-stretch">
          ${abhimanConfig.whyChooseUs.map((benefit, index) => `
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-7 border border-cream-200 shadow-xs card-hover-effect flex flex-col justify-between">
              <div>
                <!-- Icon & Counter -->
                <div class="flex items-center justify-between mb-3.5 sm:mb-5">
                  <div class="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-cream-100 border border-amber-200 flex items-center justify-center text-amber-700">
                    ${iconMap[benefit.icon] || icons.sparkles}
                  </div>
                  <span class="font-serif text-base sm:text-xl font-bold text-cream-300">
                    0${index + 1}
                  </span>
                </div>

                <h3 class="font-serif text-base sm:text-xl font-bold text-maroon-900 mb-1.5 sm:mb-2.5 leading-snug">
                  ${benefit.title}
                </h3>

                <p class="text-xs sm:text-sm text-charcoal-600 leading-relaxed">
                  ${benefit.description}
                </p>
              </div>

              <div class="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-cream-100 flex items-center text-xs font-semibold text-emerald-800">
                <span class="text-emerald-700 mr-1.5">${icons.check}</span>
                <span>No artificial claims</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Transparent Promise Strip -->
        <div class="mt-6 sm:mt-10 p-3.5 sm:p-5 rounded-2xl bg-cream-50 border border-cream-200 text-center max-w-2xl mx-auto text-xs text-charcoal-600 leading-relaxed">
          <span class="font-bold text-maroon-800">Our Honest Standard:</span>
          We refrain from unsubstantiated claims such as “100% organic” or medical promises. We simply deliver genuine taste, crisp texture, and reliable recipes you can trust every day.
        </div>

      </div>
    </section>
  `;
}
