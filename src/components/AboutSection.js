import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderAboutSection() {
  const { aboutUs } = abhimanConfig;

  return `
    <section id="about" class="py-8 sm:py-16 lg:py-20 bg-cream-50 border-b border-cream-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-center">
          
          <!-- Left Column: Business Snapshot & Ingredients Visual -->
          <div class="lg:col-span-5 space-y-3.5 sm:space-y-5">
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-cream-200 shadow-md space-y-3.5 sm:space-y-5">
              
              <div class="flex items-center justify-between border-b border-cream-200 pb-2.5 sm:pb-3.5">
                <span class="font-serif text-base sm:text-lg font-bold text-maroon-900">Brand Snapshot</span>
                <span class="text-[10px] sm:text-xs px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 font-semibold">
                  Local to Pan-India
                </span>
              </div>

              <!-- Key business metadata -->
              <div class="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
                
                <!-- Business Location -->
                <div class="p-2.5 sm:p-3 rounded-xl bg-cream-50 border border-cream-200 flex items-start gap-2.5 sm:gap-3">
                  <div class="mt-0.5 text-amber-700 shrink-0">
                    ${icons.mapPin}
                  </div>
                  <div class="min-w-0 flex-1">
                    <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500">Origin / Location</span>
                    <span class="font-semibold text-charcoal-800 break-words">${aboutUs.placeholders.businessLocation}</span>
                  </div>
                </div>

                <!-- Founding Story & Journey -->
                <div class="p-2.5 sm:p-3 rounded-xl bg-cream-50 border border-cream-200 flex items-start gap-2.5 sm:gap-3">
                  <div class="mt-0.5 text-amber-700 shrink-0">
                    ${icons.heartHandshake}
                  </div>
                  <div class="min-w-0 flex-1">
                    <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500">Founding Roots</span>
                    <span class="font-semibold text-charcoal-800 break-words">${aboutUs.placeholders.foundingStory}</span>
                  </div>
                </div>

                <!-- Years of Operation -->
                <div class="p-2.5 sm:p-3 rounded-xl bg-cream-50 border border-cream-200 flex items-start gap-2.5 sm:gap-3">
                  <div class="mt-0.5 text-amber-700 shrink-0">
                    ${icons.sparkles}
                  </div>
                  <div class="min-w-0 flex-1">
                    <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500">Journey</span>
                    <span class="font-semibold text-charcoal-800 break-words">${aboutUs.placeholders.yearsOfOperation}</span>
                  </div>
                </div>

              </div>

              <!-- Spices flatlay photo with High-Contrast Overlay -->
              <div class="rounded-xl sm:rounded-2xl overflow-hidden aspect-16/9 bg-cream-100 border border-cream-300 relative shadow-inner">
                <img 
                  src="./images/spices-market.jpg" 
                  alt="Authentic Indian culinary spices and ingredients" 
                  class="w-full h-full object-cover"
                  loading="lazy"
                />
                <div class="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-charcoal-950/85 to-transparent pointer-events-none"></div>
                <div class="absolute bottom-2 inset-x-2 px-2.5 py-1.5 rounded-md bg-stone-950/90 backdrop-blur-xs text-[11px] sm:text-xs text-white text-center font-semibold border border-white/20 shadow-md">
                  Traditional Spice Heritage • Pure &amp; Aromatic
                </div>
              </div>

            </div>
          </div>

          <!-- Right Column: Warm Brand Narrative -->
          <div class="lg:col-span-7 space-y-3.5 sm:space-y-5">
            
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-maroon-800 text-xs font-bold uppercase tracking-wider">
              <span>About Us</span>
            </div>

            <h2 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight leading-tight">
              ${aboutUs.title}
            </h2>

            <p class="text-xs sm:text-base lg:text-lg text-charcoal-800 font-medium leading-relaxed">
              ${aboutUs.introduction}
            </p>

            ${aboutUs.paragraphs.map(p => `
              <p class="text-xs sm:text-sm lg:text-base text-charcoal-600 leading-relaxed">
                ${p}
              </p>
            `).join('')}

            <!-- Offline to Online Growth Highlight -->
            <div class="p-3.5 sm:p-5 rounded-2xl bg-amber-50/90 border border-amber-200 space-y-1 sm:space-y-1.5">
              <h3 class="font-serif text-sm sm:text-base font-bold text-maroon-900">
                From Local Neighbourhood Favourites to Amazon
              </h3>
              <p class="text-xs sm:text-sm text-charcoal-700 leading-relaxed">
                As a homegrown business in Allahabad, our heart stays in the kitchen. To ensure reliable pan-India delivery without compromising small-batch quality, we partner with Amazon for logistics, payment security, and customer delivery.
              </p>
            </div>

            <div class="pt-1 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-semibold text-charcoal-600">
              <span class="flex items-center gap-1.5"><span class="text-emerald-700">${icons.check}</span> Small Indian Enterprise</span>
              <span class="flex items-center gap-1.5"><span class="text-emerald-700">${icons.check}</span> Honest Label Disclosures</span>
              <span class="flex items-center gap-1.5"><span class="text-emerald-700">${icons.check}</span> Genuine Homemade Masala</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
