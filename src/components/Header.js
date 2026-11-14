import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderHeader() {
  return `
    <header id="site-header" class="sticky top-0 z-40 transition-all duration-300 bg-cream-50/95 backdrop-blur-md border-b border-cream-200/80">
      <div class="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-14 sm:h-20">
          
          <!-- Logo & Wordmark (Sleek, Compact on Mobile) -->
          <a href="#hero" class="flex items-center gap-2 sm:gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-xl py-1" aria-label="Abhiman Home">
            <img 
              src="${abhimanConfig.brand.logo}" 
              alt="Abhiman Logo" 
              class="h-8 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-105 shrink-0 drop-shadow-xs" 
            />
            <div class="flex flex-col">
              <span class="font-serif text-lg sm:text-2xl font-bold tracking-wider text-maroon-900 leading-none group-hover:text-maroon-800 transition-colors">
                ABHIMAN
              </span>
              <span class="text-[9px] sm:text-[11px] uppercase tracking-widest text-amber-800 font-semibold mt-0.5">
                Snacks &amp; Masala
              </span>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <nav class="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium text-stone-700" aria-label="Main Navigation">
            <a href="#hero" class="hover:text-maroon-800 transition-colors py-2 border-b-2 border-transparent hover:border-maroon-700">Home</a>
            <a href="#products" class="hover:text-maroon-800 transition-colors py-2 border-b-2 border-transparent hover:border-maroon-700">Products</a>
            <a href="#why-choose-us" class="hover:text-maroon-800 transition-colors py-2 border-b-2 border-transparent hover:border-maroon-700">Why Us</a>
            <a href="#how-to-enjoy" class="hover:text-maroon-800 transition-colors py-2 border-b-2 border-transparent hover:border-maroon-700">How to Enjoy</a>
            <a href="#about" class="hover:text-maroon-800 transition-colors py-2 border-b-2 border-transparent hover:border-maroon-700">About Us</a>
            <a href="#contact" class="hover:text-maroon-800 transition-colors py-2 border-b-2 border-transparent hover:border-maroon-700">Contact</a>
          </nav>

          <!-- Desktop Amazon CTA Button -->
          <div class="hidden md:flex items-center gap-3">
            <a 
              href="${abhimanConfig.amazon.brandStoreUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-bold text-sm shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-600"
              aria-label="Shop Abhiman on Amazon (opens in a new tab)"
            >
              ${icons.amazon}
              <span>${abhimanConfig.amazon.ctaText}</span>
              ${icons.externalLink}
            </a>
          </div>

          <!-- Mobile Actions: Sleek Compact Amazon Pill + Minimalist Hamburger -->
          <div class="flex md:hidden items-center gap-1.5">
            <a 
              href="${abhimanConfig.amazon.brandStoreUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-amber-500 active:bg-amber-600 text-stone-950 font-extrabold text-[11px] shadow-xs border border-amber-400 transition-all"
              aria-label="Shop on Amazon"
            >
              ${icons.amazon}
              <span>Amazon</span>
              ${icons.externalLink}
            </a>

            <button 
              id="mobile-menu-toggle" 
              type="button" 
              class="w-9 h-9 flex items-center justify-center rounded-lg text-stone-800 hover:text-maroon-900 hover:bg-cream-200 active:bg-cream-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
              aria-label="Open navigation menu" 
              aria-expanded="false" 
              aria-controls="mobile-menu"
            >
              <span id="menu-icon-open">${icons.menu}</span>
              <span id="menu-icon-close" class="hidden">${icons.close}</span>
            </button>
          </div>

        </div>
      </div>

      <!-- Mobile Dropdown / Drawer with Backdrop (Aligned flush below 56px mobile header) -->
      <div id="mobile-menu-container" class="hidden md:hidden fixed inset-x-0 top-14 sm:top-20 z-30">
        <!-- Backdrop -->
        <div id="mobile-menu-backdrop" class="fixed inset-0 top-14 sm:top-20 bg-stone-950/60 backdrop-blur-xs transition-opacity"></div>

        <!-- Drawer Content -->
        <nav id="mobile-menu" class="relative bg-cream-50/98 backdrop-blur-md border-b border-cream-200 shadow-2xl max-h-[calc(100vh-3.5rem)] overflow-y-auto z-10" aria-label="Mobile Navigation">
          <div class="px-4 pt-3 pb-6 space-y-1">
            <a href="#hero" class="mobile-nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-800 hover:bg-cream-200 active:bg-cream-300 hover:text-maroon-900 transition-colors">
              <span>Home</span>
            </a>
            <a href="#products" class="mobile-nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-800 hover:bg-cream-200 active:bg-cream-300 hover:text-maroon-900 transition-colors">
              <span>Our Products</span>
            </a>
            <a href="#why-choose-us" class="mobile-nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-800 hover:bg-cream-200 active:bg-cream-300 hover:text-maroon-900 transition-colors">
              <span>Why Choose Abhiman</span>
            </a>
            <a href="#how-to-enjoy" class="mobile-nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-800 hover:bg-cream-200 active:bg-cream-300 hover:text-maroon-900 transition-colors">
              <span>How to Enjoy</span>
            </a>
            <a href="#about" class="mobile-nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-800 hover:bg-cream-200 active:bg-cream-300 hover:text-maroon-900 transition-colors">
              <span>About Our Brand</span>
            </a>
            <a href="#contact" class="mobile-nav-link flex items-center px-4 py-2.5 rounded-xl text-sm font-semibold text-stone-800 hover:bg-cream-200 active:bg-cream-300 hover:text-maroon-900 transition-colors">
              <span>Contact Us</span>
            </a>

            <div class="pt-3 pb-1 border-t border-cream-200 mt-2">
              <a 
                href="${abhimanConfig.amazon.brandStoreUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-extrabold text-sm shadow-md transition-all"
              >
                ${icons.amazon}
                <span>${abhimanConfig.amazon.ctaText} (All Products)</span>
                ${icons.externalLink}
              </a>
            </div>
          </div>
        </nav>
      </div>
    </header>
  `;
}

export function initHeader() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const menuContainer = document.getElementById('mobile-menu-container');
  const menuBackdrop = document.getElementById('mobile-menu-backdrop');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!toggleBtn || !menuContainer) return;

  function toggleMenu(forceClose = false) {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    const nextState = forceClose ? false : !isExpanded;

    toggleBtn.setAttribute('aria-expanded', String(nextState));
    if (nextState) {
      menuContainer.classList.remove('hidden');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // prevent background body scroll when drawer open
    } else {
      menuContainer.classList.add('hidden');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  toggleBtn.addEventListener('click', () => toggleMenu());
  menuBackdrop?.addEventListener('click', () => toggleMenu(true));

  navLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMenu(true));
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && toggleBtn.getAttribute('aria-expanded') === 'true') {
      toggleMenu(true);
      toggleBtn.focus();
    }
  });

  // Sticky header elevation on scroll
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 15) {
      header.classList.add('shadow-md');
    } else {
      header.classList.remove('shadow-md');
    }
  }, { passive: true });
}
