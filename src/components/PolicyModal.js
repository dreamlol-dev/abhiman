import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderPolicyModal() {
  return `
    <div 
      id="policy-modal" 
      class="fixed inset-0 z-50 hidden flex items-center justify-center p-2.5 sm:p-6" 
      role="dialog" 
      aria-modal="true" 
      aria-hidden="true"
      aria-labelledby="policy-modal-title"
    >
      <div id="policy-backdrop" class="fixed inset-0 bg-charcoal-900/75 backdrop-blur-sm transition-opacity"></div>

      <div class="relative bg-white rounded-2xl sm:rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] sm:max-h-[85vh] overflow-y-auto z-10 border border-cream-300 animate-modal p-4 sm:p-8">
        
        <div class="flex items-center justify-between border-b border-cream-200 pb-3 sm:pb-4 mb-4 sm:mb-6">
          <h3 id="policy-modal-title" class="font-serif text-lg sm:text-2xl font-bold text-maroon-900">
            Legal Information
          </h3>
          <button 
            id="close-policy-modal-btn" 
            type="button" 
            class="w-10 h-10 flex items-center justify-center rounded-full text-charcoal-500 hover:text-maroon-800 hover:bg-cream-200 active:bg-cream-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 transition-colors"
            aria-label="Close legal policy dialog"
          >
            ${icons.close}
          </button>
        </div>

        <div id="policy-modal-content" class="text-charcoal-700 text-xs sm:text-sm leading-relaxed space-y-3.5 sm:space-y-4">
          <!-- Populated by JavaScript -->
        </div>

        <div class="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-cream-200 flex justify-end">
          <button 
            id="policy-dismiss-btn" 
            type="button" 
            class="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cream-200 hover:bg-cream-300 active:bg-cream-400 text-charcoal-900 font-bold text-xs min-h-[40px] flex items-center justify-center"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  `;
}

export function initPolicyModal() {
  const modal = document.getElementById('policy-modal');
  const backdrop = document.getElementById('policy-backdrop');
  const closeBtn = document.getElementById('close-policy-modal-btn');
  const dismissBtn = document.getElementById('policy-dismiss-btn');
  const contentEl = document.getElementById('policy-modal-content');
  const titleEl = document.getElementById('policy-modal-title');

  if (!modal || !contentEl) return;

  const policies = {
    privacy: {
      title: 'Privacy Policy',
      content: `
        <p class="font-semibold text-charcoal-900">1. Information We Collect</p>
        <p>This brand website is an informational catalogue designed to help you discover Abhiman snacks and masalas. We do not store cookies or track you across the web. If you submit our contact inquiry form, we only receive the name, email, phone number, and message you provide.</p>
        
        <p class="font-semibold text-charcoal-900 mt-4">2. How Your Information is Handled</p>
        <p>Contact details submitted through this website are used strictly to reply to your inquiry, answer product questions, or discuss trade arrangements. We do not sell, rent, or trade your contact information with any marketing agency or third-party entity.</p>

        <p class="font-semibold text-charcoal-900 mt-4">3. Amazon Purchases</p>
        <p>All product purchases occur on Amazon India. Payment information, delivery addresses, and personal customer data related to orders are governed exclusively by Amazon's Privacy Notice.</p>
      `
    },
    terms: {
      title: 'Terms of Use',
      content: `
        <p class="font-semibold text-charcoal-900">1. Website Purpose</p>
        <p>This website is presented by Abhiman for brand presentation, customer education, and product discovery. No online checkout or payments are conducted on this website.</p>

        <p class="font-semibold text-charcoal-900 mt-4">2. External Purchases &amp; Pricing</p>
        <p>When you click “Buy on Amazon” or “Shop on Amazon”, you are directed to Amazon India. Product pricing, MRP, shipping timelines, packaging variations, seller promotions, and customer support for delivery are subject to Amazon.in conditions.</p>

        <p class="font-semibold text-charcoal-900 mt-4">3. Intellectual Property</p>
        <p>“Abhiman” name, logos, packaging artwork, and brand presentation are proprietary to Abhiman. All trademarks relating to Amazon are the property of Amazon.com, Inc. or its affiliates.</p>
      `
    },
    amazon: {
      title: 'Amazon Fulfillment Notice',
      content: `
        <p class="font-semibold text-charcoal-900">Ordering with Peace of Mind</p>
        <p>To provide reliable pan-India delivery, prompt customer returns, and secure payment processing for every customer, Abhiman lists its products through Amazon India.</p>

        <p class="mt-3">When ordering on Amazon:</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>You enjoy Amazon-verified payment options (UPI, Net Banking, Credit/Debit cards, Cash on Delivery where applicable).</li>
          <li>Packages are tracked securely right to your doorstep.</li>
          <li>Customer assistance regarding courier status and delivery dates is handled in accordance with Amazon India logistics.</li>
        </ul>
      `
    }
  };

  function openPolicy(type) {
    const data = policies[type] || policies.privacy;
    titleEl.textContent = data.title;
    contentEl.innerHTML = data.content;
    modal.classList.remove('hidden');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closePolicy() {
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.open-policy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const type = btn.getAttribute('data-open-policy');
      openPolicy(type);
    });
  });

  closeBtn.addEventListener('click', closePolicy);
  dismissBtn?.addEventListener('click', closePolicy);
  backdrop.addEventListener('click', closePolicy);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closePolicy();
    }
  });
}
