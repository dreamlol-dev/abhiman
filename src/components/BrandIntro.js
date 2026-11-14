import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderBrandIntro() {
  return `
    <section id="brand-intro" class="py-8 sm:py-16 lg:py-20 bg-cream-100 border-b border-cream-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-center">
          
          <!-- Left Column: Honest & Warm Story -->
          <div class="lg:col-span-7 space-y-3.5 sm:space-y-5">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-maroon-800 text-xs font-bold tracking-wider uppercase">
              <span>Our Story &amp; Philosophy</span>
            </div>

            <h2 class="font-serif text-2xl sm:text-4xl font-bold text-maroon-900 tracking-tight leading-tight">
              Honest flavours, made with small-batch dedication
            </h2>

            <p class="text-xs sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
              Abhiman is a small-scale Indian food enterprise rooted in the simple joy of everyday snacking. We started locally, crafting authentic snacks and homemade spice blends with genuine care, focusing on the balanced, comforting flavours Indian families cherish.
            </p>

            <p class="text-xs sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
              We do not believe in exaggerations or artificial claims. Instead, our focus is on dependable crunch, traditional recipe balance, and consistent taste in every single pack. Whether it is our crisp, lightly salted banana chips or our lively special homemade fruit chaat masala, each product is made to brighten tea-times and family tables across India.
            </p>

            <!-- Brand Values Grid -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              <div class="p-3.5 sm:p-4 rounded-xl bg-white border border-cream-200 shadow-xs">
                <div class="flex items-center gap-2 font-bold text-maroon-800 text-xs sm:text-sm mb-1">
                  <span class="text-emerald-700">${icons.check}</span>
                  <span>Authentic Recipe Crafting</span>
                </div>
                <p class="text-xs text-charcoal-600 leading-normal">
                  Rooted in familiar Indian taste memories that pair seamlessly with your daily tea, coffee, and fresh salads.
                </p>
              </div>

              <div class="p-3.5 sm:p-4 rounded-xl bg-white border border-cream-200 shadow-xs">
                <div class="flex items-center gap-2 font-bold text-maroon-800 text-xs sm:text-sm mb-1">
                  <span class="text-emerald-700">${icons.check}</span>
                  <span>Transparent &amp; Accessible</span>
                </div>
                <p class="text-xs text-charcoal-600 leading-normal">
                  Sold through trusted Amazon delivery channels so you can enjoy fresh batches anywhere in India.
                </p>
              </div>
            </div>

            <!-- Founder Quote / Small-scale pride -->
            <div class="p-3 sm:p-3.5 rounded-xl bg-amber-50 border-l-4 border-amber-500 text-charcoal-800 text-xs sm:text-sm italic">
              “Every batch we prepare carries our personal pride and devotion to Indian flavour traditions.”
              <span class="block not-italic text-xs font-semibold text-amber-800 mt-0.5">
                — Team Abhiman, Allahabad
              </span>
            </div>

          </div>

          <!-- Right Column: Business / Founder Image -->
          <div class="lg:col-span-5">
            <div class="relative bg-white rounded-2xl sm:rounded-3xl p-3.5 sm:p-5 border border-cream-300 shadow-lg">
              
              <!-- Brand Visual Card Header -->
              <div class="mb-2.5 sm:mb-3 flex items-center justify-between text-xs">
                <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 font-semibold text-[11px] sm:text-xs">
                  ${icons.sparkles}
                  <span>Our Culinary Heritage</span>
                </span>
                <span class="text-amber-800 text-[11px] sm:text-xs font-medium">Small-Batch Dedication</span>
              </div>

              <!-- Founder / Kitchen Photo with High-Contrast Identification Overlay -->
              <div class="rounded-xl sm:rounded-2xl overflow-hidden aspect-16/9 sm:aspect-4/3 bg-cream-200 relative border border-cream-200 shadow-inner">
                <img 
                  src="${abhimanConfig.aboutUs.placeholders.founderFamilyPhoto}" 
                  alt="Founder of Abhiman crafting authentic snacks and spice blends in Allahabad"
                  class="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <!-- Gradient Scrim for Bottom Badge -->
                <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-charcoal-950/80 to-transparent pointer-events-none"></div>

                <!-- High-Contrast Caption Overlay Above Image -->
                <div class="absolute bottom-2.5 left-2.5 right-2.5 px-3 py-1.5 rounded-lg bg-stone-950/90 backdrop-blur-xs border border-white/20 text-white flex items-center justify-between text-xs shadow-md">
                  <span class="font-bold text-white">Founder &amp; Master Blender</span>
                  <span class="text-amber-300 font-semibold">Allahabad, UP</span>
                </div>
              </div>

              <!-- Founder Story Caption -->
              <div class="mt-3 p-3 sm:p-3.5 rounded-xl bg-cream-50 border border-cream-200 text-xs text-charcoal-700 space-y-1">
                <p class="font-bold text-maroon-900 flex items-center gap-1.5">
                  <span class="text-emerald-700">${icons.heartHandshake}</span>
                  <span>Handcrafted in Small Batches</span>
                </p>
                <p class="leading-relaxed text-charcoal-600 text-[11px] sm:text-xs">
                  Every batch of banana chips and special fruit chaat masala is prepared with traditional time-tested family recipes in Allahabad, ensuring authentic taste and genuine freshness.
                </p>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}
