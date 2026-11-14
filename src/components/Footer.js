import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderFooter() {
  const { brand, contact, footer, amazon } = abhimanConfig;

  return `
    <footer class="bg-stone-950 text-stone-100 border-t border-stone-800 pt-10 sm:pt-16 pb-12 safe-bottom">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Main Footer Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 sm:pb-12 border-b border-stone-800">
          
          <!-- Column 1: Brand & Identity (lg:col-span-4) -->
          <div class="lg:col-span-4 space-y-3.5 sm:space-y-4">
            <div class="flex items-center gap-2.5 sm:gap-3">
              <img 
                src="${brand.logo}" 
                alt="Abhiman Logo" 
                class="h-10 sm:h-12 w-auto object-contain shrink-0" 
              />
              <span class="font-serif text-xl sm:text-2xl font-bold tracking-wider text-white">
                ABHIMAN
              </span>
            </div>

            <p class="text-xs sm:text-sm text-stone-300 leading-relaxed max-w-sm">
              Authentic Indian snacks and special homemade masalas, made with care in Allahabad and delivered nationwide via Amazon.
            </p>

            <div class="pt-1 sm:pt-2">
              <a 
                href="${amazon.brandStoreUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-bold text-xs transition-colors shadow-xs min-h-[40px]"
              >
                ${icons.amazon}
                <span>Visit Amazon Brand Store</span>
                ${icons.externalLink}
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links (lg:col-span-2) -->
          <div class="lg:col-span-2 space-y-2.5 sm:space-y-3">
            <h4 class="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
              Navigation
            </h4>
            <ul class="space-y-1.5 sm:space-y-2 text-xs text-stone-300">
              <li><a href="#hero" class="hover:text-amber-400 transition-colors py-1 block">Home</a></li>
              <li><a href="#products" class="hover:text-amber-400 transition-colors py-1 block">Products</a></li>
              <li><a href="#why-choose-us" class="hover:text-amber-400 transition-colors py-1 block">Why Choose Us</a></li>
              <li><a href="#how-to-enjoy" class="hover:text-amber-400 transition-colors py-1 block">How to Enjoy</a></li>
              <li><a href="#about" class="hover:text-amber-400 transition-colors py-1 block">About Our Brand</a></li>
              <li><a href="#contact" class="hover:text-amber-400 transition-colors py-1 block">Contact &amp; Inquiries</a></li>
            </ul>
          </div>

          <!-- Column 3: Product Links (lg:col-span-3) -->
          <div class="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 class="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
              Our Products
            </h4>
            <ul class="space-y-2 text-xs text-stone-300">
              ${abhimanConfig.products.map(p => `
                <li>
                  <a href="${p.amazonUrl}" target="_blank" rel="noopener noreferrer" class="hover:text-amber-400 transition-colors flex items-center justify-between group py-1">
                    <span class="break-words">${p.name}</span>
                    <span class="text-[10px] text-amber-400 group-hover:translate-x-0.5 transition-transform shrink-0 ml-2">Amazon &rarr;</span>
                  </a>
                </li>
              `).join('')}
            </ul>

            <div class="pt-2 sm:pt-3 border-t border-stone-800 text-[10px] sm:text-[11px] text-stone-400">
              <span>Fulfillment &amp; dispatch handled via Amazon India</span>
            </div>
          </div>

          <!-- Column 4: Contact & Social Placeholders (lg:col-span-3) -->
          <div class="lg:col-span-3 space-y-2.5 sm:space-y-3">
            <h4 class="font-serif text-xs sm:text-sm font-bold uppercase tracking-wider text-amber-400">
              Connect With Us
            </h4>
            <div class="space-y-1.5 sm:space-y-2 text-xs text-stone-300">
              <p class="break-words"><strong class="text-white">Location:</strong> ${contact.locationPlaceholder}</p>
              <p class="break-words"><strong class="text-white">Support:</strong> <a href="mailto:${contact.emailPlaceholder}" class="hover:text-amber-400 transition-colors">${contact.emailPlaceholder}</a></p>
              <p class="break-words"><strong class="text-white">Phone:</strong> <a href="tel:${contact.phonePlaceholder.replace(/[^0-9+]/g, '')}" class="hover:text-amber-400 transition-colors">${contact.phonePlaceholder}</a></p>
            </div>

            <!-- Social Channels -->
            <div class="pt-2 sm:pt-3 border-t border-stone-800 space-y-1">
              <span class="block text-[10px] font-bold uppercase tracking-wider text-stone-400">Official Social Channels</span>
              <div class="flex items-center gap-2.5 sm:gap-3 text-xs text-amber-400 flex-wrap">
                <a href="${contact.socialLinks.instagram.url}" target="_blank" rel="noopener noreferrer" class="hover:underline py-1">Instagram</a>
                <span class="text-stone-600">•</span>
                <a href="${contact.socialLinks.facebook.url}" target="_blank" rel="noopener noreferrer" class="hover:underline py-1">Facebook</a>
                <span class="text-stone-600">•</span>
                <a href="${amazon.brandStoreUrl}" target="_blank" rel="noopener noreferrer" class="hover:underline py-1">Amazon</a>
              </div>
            </div>
          </div>

        </div>

        <!-- Bottom Bar: Copyright & Legal Placeholders -->
        <div class="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-stone-400 text-center sm:text-left">
          <p class="text-[11px] sm:text-xs">
            &copy; ${footer.copyrightYear} ${footer.copyrightText}
          </p>

          <div class="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-[10px] sm:text-[11px]">
            <button 
              type="button" 
              data-open-policy="privacy"
              class="open-policy-btn hover:text-amber-400 transition-colors focus:outline-none underline underline-offset-4 py-1"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button 
              type="button" 
              data-open-policy="terms"
              class="open-policy-btn hover:text-amber-400 transition-colors focus:outline-none underline underline-offset-4 py-1"
            >
              Terms of Use
            </button>
            <span>•</span>
            <button 
              type="button" 
              data-open-policy="amazon"
              class="open-policy-btn hover:text-amber-400 transition-colors focus:outline-none underline underline-offset-4 py-1"
            >
              Amazon Fulfillment Notice
            </button>
          </div>
        </div>

        <!-- Disclaimer -->
        <div class="mt-4 sm:mt-6 text-[10px] text-stone-400 text-center leading-normal max-w-2xl mx-auto">
          ${footer.disclaimer}
        </div>

      </div>
    </footer>
  `;
}
