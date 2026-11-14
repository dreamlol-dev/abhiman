import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderProductDetailModal() {
  return `
    <!-- Product Detail Modal Dialog Container -->
    <div 
      id="product-detail-modal" 
      class="fixed inset-0 z-50 hidden flex items-center justify-center p-2.5 sm:p-6 lg:p-8" 
      role="dialog" 
      aria-modal="true" 
      aria-hidden="true"
      aria-labelledby="modal-product-title"
    >
      <!-- Backdrop with blur -->
      <div id="modal-backdrop" class="fixed inset-0 bg-charcoal-900/75 backdrop-blur-sm transition-opacity"></div>

      <!-- Modal Card -->
      <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-3xl w-full max-h-[94vh] sm:max-h-[90vh] overflow-y-auto z-10 border border-cream-300 animate-modal">
        
        <!-- Sticky Modal Header / Close Button -->
        <div class="sticky top-0 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3 sm:py-4 border-b border-cream-200 flex items-center justify-between z-20">
          <div class="flex items-center gap-2">
            <span id="modal-product-category" class="px-2.5 sm:px-3 py-0.5 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900">
              Category
            </span>
            <span id="modal-product-badge" class="px-2 sm:px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-cream-100 text-charcoal-700">
              Badge
            </span>
          </div>

          <button 
            id="close-product-modal-btn" 
            type="button" 
            class="w-10 h-10 flex items-center justify-center rounded-full text-charcoal-500 hover:text-maroon-800 hover:bg-cream-200 active:bg-cream-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
            aria-label="Close product details dialog"
          >
            ${icons.close}
          </button>
        </div>

        <!-- Modal Scrollable Body -->
        <div class="p-4 sm:p-8 space-y-6 sm:space-y-8">
          
          <!-- Product Title & Tagline -->
          <div>
            <h2 id="modal-product-title" class="font-serif text-xl sm:text-3xl font-bold text-maroon-900 leading-tight">
              Product Title
            </h2>
            <p id="modal-product-tagline" class="text-xs sm:text-sm font-medium text-amber-800 mt-1">
              Product Tagline
            </p>
          </div>

          <!-- Product Image & Visual Presentation (Mobile Optimized Layout) -->
          <div class="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 items-center bg-cream-100 p-3.5 sm:p-6 rounded-2xl border border-cream-200">
            <div class="sm:col-span-7 aspect-16/9 sm:aspect-4/3 rounded-xl overflow-hidden bg-cream-200 shadow-xs">
              <img 
                id="modal-product-image" 
                src="" 
                alt="" 
                class="w-full h-full object-cover"
              />
            </div>
            
            <div class="sm:col-span-5 flex flex-row sm:flex-col items-center justify-center gap-3 sm:gap-1 text-center p-1 sm:p-2">
              <div class="w-20 h-24 sm:w-32 sm:h-40 bg-white rounded-xl p-1.5 sm:p-2 shadow-xs border border-cream-300 flex items-center justify-center shrink-0">
                <img 
                  id="modal-pack-mockup" 
                  src="" 
                  alt="Packaging Mockup" 
                  class="w-full h-full object-contain"
                />
              </div>
              <div class="text-left sm:text-center">
                <span class="block text-[11px] font-semibold text-charcoal-700 sm:text-charcoal-500 sm:mt-2">
                  Authentic Packaging
                </span>
                <span class="block text-[10px] text-amber-800 font-medium">
                  Shipped Fresh via Amazon
                </span>
              </div>
            </div>
          </div>

          <!-- Full Description -->
          <div class="space-y-2 sm:space-y-3">
            <h3 class="font-serif text-base sm:text-lg font-bold text-maroon-900 border-b border-cream-200 pb-2">
              About This Product
            </h3>
            <p id="modal-product-description" class="text-charcoal-700 text-xs sm:text-base leading-relaxed">
              Product description goes here...
            </p>
          </div>

          <!-- Suggested Usage & Serving Ideas -->
          <div class="space-y-3 sm:space-y-4">
            <h3 class="font-serif text-base sm:text-lg font-bold text-maroon-900 border-b border-cream-200 pb-2 flex items-center justify-between">
              <span>Suggested Usage &amp; Serving Ideas</span>
              <span class="text-[11px] sm:text-xs font-sans font-normal text-amber-700">Everyday Pairing</span>
            </h3>

            <div id="modal-serving-ideas" class="grid grid-cols-1 gap-2.5 sm:gap-3">
              <!-- Dynamically populated -->
            </div>
          </div>

          <!-- Official Packaging Specifications & Nutritional Information -->
          <div class="space-y-3 sm:space-y-4">
            <div class="flex items-center justify-between border-b border-cream-200 pb-2">
              <h3 class="font-serif text-base sm:text-lg font-bold text-maroon-900">
                Packaging Specifications &amp; Label Details
              </h3>
              <span class="text-[10px] sm:text-[11px] font-semibold px-2 py-0.5 rounded-full bg-cream-200 text-charcoal-700">
                Transparency
              </span>
            </div>

            <!-- Dynamic specifications container: Hides empty labels, shows verified placeholders -->
            <div id="modal-specs-container">
              <!-- Rendered via JavaScript -->
            </div>
          </div>

          <!-- Purchase Action Banner -->
          <div class="p-4 sm:p-6 rounded-2xl bg-cream-100 border border-amber-300/60 shadow-xs flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3.5 sm:gap-4">
            <div class="text-center sm:text-left space-y-1">
              <span class="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-amber-800">Available Purchase Option</span>
              <h4 class="font-serif text-base sm:text-lg font-bold text-maroon-900">Order Online via Amazon India</h4>
              <p class="text-[11px] sm:text-xs text-charcoal-600">
                Direct doorstep dispatch, secure payment methods, and trusted tracking.
              </p>
            </div>

            <a 
              id="modal-amazon-btn" 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-amber-500 hover:bg-amber-600 active:bg-amber-700 text-charcoal-900 font-bold text-sm shadow-md transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600 min-h-[44px]"
            >
              ${icons.amazon}
              <span>Buy on Amazon</span>
              ${icons.externalLink}
            </a>
          </div>

          <!-- Quality & Transparency Note -->
          <div class="text-[11px] text-charcoal-600 bg-cream-50 p-3 sm:p-3.5 rounded-xl border border-cream-200 flex items-start gap-2">
            <span class="text-emerald-700 shrink-0 mt-0.5">${icons.check}</span>
            <div class="leading-relaxed">
              <strong class="text-charcoal-800">Abhiman Quality Promise:</strong>
              All ingredient disclosures and nutritional details adhere to Indian food packaging guidelines. Actual pack weights and seasonal seller offers are reflected during checkout on Amazon India.
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}

export function initProductDetailModal() {
  const modal = document.getElementById('product-detail-modal');
  const backdrop = document.getElementById('modal-backdrop');
  const closeBtn = document.getElementById('close-product-modal-btn');
  let lastActiveElement = null;

  if (!modal || !closeBtn) return;

  function openModal(productId) {
    const product = abhimanConfig.products.find(p => p.id === productId);
    if (!product) return;

    lastActiveElement = document.activeElement;

    // Populate data
    document.getElementById('modal-product-category').textContent = product.category;
    document.getElementById('modal-product-badge').textContent = product.badge;
    document.getElementById('modal-product-title').textContent = product.name;
    document.getElementById('modal-product-tagline').textContent = product.tagline;
    document.getElementById('modal-product-description').textContent = product.fullDescription;
    
    const imgEl = document.getElementById('modal-product-image');
    imgEl.src = product.primaryImage;
    imgEl.alt = product.altText;

    const mockupEl = document.getElementById('modal-pack-mockup');
    mockupEl.src = product.packMockupImage;

    // Serving ideas
    const servingContainer = document.getElementById('modal-serving-ideas');
    servingContainer.innerHTML = product.servingIdeas.map(idea => `
      <div class="p-3 sm:p-3.5 rounded-xl bg-white border border-cream-200 shadow-xs flex items-start gap-2.5 sm:gap-3">
        <div class="mt-0.5 text-amber-600 shrink-0">
          ${icons.check}
        </div>
        <div>
          <h4 class="font-bold text-maroon-800 text-xs sm:text-sm">${idea.title}</h4>
          <p class="text-[11px] sm:text-xs text-charcoal-600 mt-0.5 leading-relaxed">${idea.description}</p>
        </div>
      </div>
    `).join('');

    // Amazon button link
    const amazonBtn = document.getElementById('modal-amazon-btn');
    amazonBtn.href = product.amazonUrl;
    amazonBtn.setAttribute('aria-label', `Buy ${product.name} on Amazon (opens in a new tab)`);

    // Specifications section
    const specsContainer = document.getElementById('modal-specs-container');
    const specs = product.specifications;
    const availableSpecs = Object.entries(specs).filter(([_, value]) => value !== null && value !== undefined && value.trim?.() !== '');

    if (availableSpecs.length > 0) {
      const specLabels = {
        packSizes: 'Pack Sizes',
        mrp: 'MRP',
        ingredients: 'Ingredients',
        allergenInfo: 'Allergen Information',
        nutritionalInfo: 'Nutritional Facts',
        storageInstructions: 'Storage Instructions',
        fssaiNumber: 'FSSAI License No.',
      };

      specsContainer.innerHTML = `
        <div class="overflow-x-auto rounded-xl border border-cream-200 bg-white shadow-xs">
          <table class="w-full text-left text-xs border-collapse">
            <tbody>
              ${availableSpecs.map(([key, value]) => `
                <tr class="border-b border-cream-200 last:border-b-0 hover:bg-cream-50 transition-colors">
                  <td class="py-2.5 px-3 sm:px-4 font-bold text-maroon-900 bg-cream-100/60 w-1/3 sm:w-1/4 align-top">${specLabels[key] || key}</td>
                  <td class="py-2.5 px-3 sm:px-4 text-charcoal-700 leading-relaxed">${value}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      `;
    } else {
      specsContainer.innerHTML = `
        <div class="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-amber-50/80 border border-amber-200 text-charcoal-700 space-y-2">
          <div class="flex items-center gap-2 text-amber-800 font-bold text-xs uppercase tracking-wide">
            <span class="w-2 h-2 rounded-full bg-amber-600 animate-pulse"></span>
            <span>Packaging &amp; Label Specifications In Progress</span>
          </div>
          <p class="text-xs text-charcoal-700 leading-relaxed">
            ${product.placeholderNotice}
          </p>
          <div class="pt-1.5 flex flex-wrap gap-1.5 text-[10px] sm:text-[11px] text-charcoal-600">
            <span class="px-2 py-0.5 rounded bg-amber-100/80 border border-amber-200">[Pack sizes pending]</span>
            <span class="px-2 py-0.5 rounded bg-amber-100/80 border border-amber-200">[Nutritional table pending]</span>
            <span class="px-2 py-0.5 rounded bg-amber-100/80 border border-amber-200">[Ingredients label pending]</span>
            <span class="px-2 py-0.5 rounded bg-amber-100/80 border border-amber-200">[MRP per Amazon listing]</span>
          </div>
        </div>
      `;
    }

    // Show modal
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeModal() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  }

  // Click triggers
  document.querySelectorAll('.open-product-modal-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const productId = btn.getAttribute('data-open-modal');
      openModal(productId);
    });
  });

  closeBtn.addEventListener('click', closeModal);
  backdrop.addEventListener('click', closeModal);

  // Keyboard accessibility
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });

  // Deep linking
  function checkUrlHash() {
    const hash = window.location.hash;
    if (hash === '#product-banana-chips') {
      openModal('banana-chips');
    } else if (hash === '#product-fruit-chaat-masala') {
      openModal('fruit-chaat-masala');
    }
  }

  window.addEventListener('hashchange', checkUrlHash);
  checkUrlHash();
}
