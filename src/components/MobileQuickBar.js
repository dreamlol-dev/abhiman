import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderMobileQuickBar() {
  return `
    <!-- Mobile-Only Floating Quick Amazon Action Bar -->
    <div 
      id="mobile-quick-bar" 
      class="fixed bottom-0 inset-x-0 z-30 md:hidden transition-transform duration-300 translate-y-full bg-cream-50/95 backdrop-blur-md border-t border-cream-300 shadow-2xl px-4 py-2.5 safe-bottom"
      aria-label="Mobile Quick Action"
    >
      <div class="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div class="flex items-center gap-2 min-w-0">
          <img 
            src="${abhimanConfig.brand.logo}" 
            alt="Abhiman" 
            class="w-8 h-8 object-contain shrink-0" 
          />
          <div class="truncate">
            <span class="block text-xs font-bold text-maroon-900 leading-tight truncate">Abhiman Snacks &amp; Masala</span>
            <span class="block text-[10px] text-amber-800 font-medium">Pan-India via Amazon</span>
          </div>
        </div>

        <a 
          href="${abhimanConfig.amazon.brandStoreUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-500 active:bg-amber-600 text-charcoal-900 font-extrabold text-xs shadow-md"
        >
          ${icons.amazon}
          <span>Shop on Amazon</span>
          ${icons.externalLink}
        </a>
      </div>
    </div>
  `;
}

export function initMobileQuickBar() {
  const quickBar = document.getElementById('mobile-quick-bar');
  if (!quickBar) return;

  let isHiddenByModal = false;

  // Show only after scrolling past the hero section on mobile
  const heroSection = document.getElementById('hero');

  function updateVisibility() {
    if (window.innerWidth >= 768) {
      quickBar.classList.add('translate-y-full');
      return;
    }

    // If modal is currently open, hide the bar so it never overlaps modal controls
    const productModal = document.getElementById('product-detail-modal');
    const policyModal = document.getElementById('policy-modal');
    const mobileMenu = document.getElementById('mobile-menu-container');

    const modalOpen = 
      (productModal && !productModal.classList.contains('hidden')) ||
      (policyModal && !policyModal.classList.contains('hidden')) ||
      (mobileMenu && !mobileMenu.classList.contains('hidden'));

    if (modalOpen) {
      quickBar.classList.add('translate-y-full');
      return;
    }

    if (heroSection) {
      const heroBottom = heroSection.getBoundingClientRect().bottom;
      if (heroBottom < 100) {
        quickBar.classList.remove('translate-y-full');
      } else {
        quickBar.classList.add('translate-y-full');
      }
    }
  }

  window.addEventListener('scroll', updateVisibility, { passive: true });
  window.addEventListener('resize', updateVisibility, { passive: true });
  
  // Observe DOM attributes for modal changes
  const observer = new MutationObserver(updateVisibility);
  const pModal = document.getElementById('product-detail-modal');
  if (pModal) observer.observe(pModal, { attributes: true, attributeFilter: ['class'] });
  const polModal = document.getElementById('policy-modal');
  if (polModal) observer.observe(polModal, { attributes: true, attributeFilter: ['class'] });
  const mMenu = document.getElementById('mobile-menu-container');
  if (mMenu) observer.observe(mMenu, { attributes: true, attributeFilter: ['class'] });
}
