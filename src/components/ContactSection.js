import { abhimanConfig } from '../config/abhimanConfig.js';
import { icons } from '../utils/icons.js';

export function renderContactSection() {
  const { contact } = abhimanConfig;
  const isWhatsAppConfigured = contact.whatsApp.enabled && contact.whatsApp.phoneNumber.trim().length > 0;

  return `
    <section id="contact" class="py-8 sm:py-16 lg:py-20 bg-cream-100 border-b border-cream-200">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Header -->
        <div class="text-center max-w-3xl mx-auto mb-6 sm:mb-12 space-y-2.5 sm:space-y-3.5">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cream-200 text-maroon-800 text-xs font-bold uppercase tracking-wider">
            <span>Get in Touch</span>
          </div>

          <h2 class="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-maroon-900 tracking-tight">
            Contact Abhiman
          </h2>

          <p class="text-xs sm:text-base lg:text-lg text-charcoal-700 leading-relaxed">
            Have questions about our banana chips, special chaat masala, or bulk retail queries? We'd love to hear from you.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
          
          <!-- Left Column: Business Details -->
          <div class="lg:col-span-5 space-y-3.5 sm:space-y-5">
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-7 border border-cream-200 shadow-md space-y-4 sm:space-y-5">
              
              <div class="border-b border-cream-200 pb-3">
                <h3 class="font-serif text-lg sm:text-2xl font-bold text-maroon-900">${contact.businessName}</h3>
                <p class="text-xs text-charcoal-500 mt-0.5">Indian Snacks &amp; Homemade Masala Enterprise</p>
              </div>

              <!-- Official contact channels -->
              <div class="space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm">
                
                <!-- Location -->
                <div class="flex items-start gap-3 p-3 rounded-xl bg-cream-50 border border-cream-200">
                  <div class="mt-0.5 text-amber-700 shrink-0">${icons.mapPin}</div>
                  <div class="min-w-0 flex-1">
                    <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500">Business Location</span>
                    <span class="text-charcoal-800 font-medium break-words">${contact.locationPlaceholder}</span>
                    <span class="block text-[10px] text-emerald-800 font-semibold mt-0.5 flex items-center gap-1">${icons.check} Packhouse &amp; Distribution Hub</span>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start gap-3 p-3 rounded-xl bg-cream-50 border border-cream-200">
                  <div class="mt-0.5 text-amber-700 shrink-0">${icons.phone}</div>
                  <div class="min-w-0 flex-1">
                    <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500">Telephone / Support</span>
                    <a href="tel:${contact.phonePlaceholder.replace(/[^0-9+]/g, '')}" class="text-charcoal-800 hover:text-maroon-800 font-medium break-words">${contact.phonePlaceholder}</a>
                    <span class="block text-[10px] text-emerald-800 font-semibold mt-0.5 flex items-center gap-1">${icons.check} Mon–Sat, 9:00 AM – 7:00 PM IST</span>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start gap-3 p-3 rounded-xl bg-cream-50 border border-cream-200">
                  <div class="mt-0.5 text-amber-700 shrink-0">${icons.mail}</div>
                  <div class="min-w-0 flex-1">
                    <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500">Email Address</span>
                    <a href="mailto:${contact.emailPlaceholder}" class="text-charcoal-800 hover:text-maroon-800 font-medium break-words">${contact.emailPlaceholder}</a>
                    <span class="block text-[10px] text-emerald-800 font-semibold mt-0.5 flex items-center gap-1">${icons.check} Order support &amp; trade inquiries</span>
                  </div>
                </div>

                <!-- Social Channels -->
                <div class="p-3 rounded-xl bg-cream-50 border border-cream-200 space-y-2">
                  <span class="block text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-charcoal-500">Social Media Channels</span>
                  <div class="space-y-1.5 text-xs text-charcoal-700">
                    <a href="${contact.socialLinks.instagram.url}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-2 rounded-lg bg-white border border-cream-200 hover:border-amber-400 transition-colors">
                      <strong class="text-maroon-900">Instagram</strong>
                      <span class="text-charcoal-600 font-mono text-[11px] flex items-center gap-1">${contact.socialLinks.instagram.placeholder} ${icons.externalLink}</span>
                    </a>
                    <a href="${contact.socialLinks.facebook.url}" target="_blank" rel="noopener noreferrer" class="flex items-center justify-between p-2 rounded-lg bg-white border border-cream-200 hover:border-amber-400 transition-colors">
                      <strong class="text-maroon-900">Facebook</strong>
                      <span class="text-charcoal-600 font-mono text-[11px] flex items-center gap-1">${contact.socialLinks.facebook.placeholder} ${icons.externalLink}</span>
                    </a>
                  </div>
                </div>

              </div>

              <!-- Conditional WhatsApp Button -->
              ${isWhatsAppConfigured ? `
                <div class="pt-1">
                  <a 
                    href="https://wa.me/${contact.whatsApp.phoneNumber}?text=${encodeURIComponent(contact.whatsApp.defaultMessage)}" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    class="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors min-h-[44px]"
                  >
                    ${icons.whatsapp}
                    <span>Chat on WhatsApp</span>
                    ${icons.externalLink}
                  </a>
                </div>
              ` : ''}

            </div>
          </div>

          <!-- Right Column: Interactive Contact Inquiry Form -->
          <div class="lg:col-span-7">
            <div class="bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 lg:p-10 border border-cream-200 shadow-md">
              
              <div class="mb-4 sm:mb-6">
                <h3 class="font-serif text-lg sm:text-2xl font-bold text-maroon-900">Send an Inquiry</h3>
                <p class="text-xs sm:text-sm text-charcoal-600 mt-0.5 sm:mt-1">
                  Fill in your details below. We typically respond within 24–48 business hours.
                </p>
              </div>

              <!-- Success Feedback Box (Initially Hidden) -->
              <div id="contact-form-success" class="hidden mb-6 p-4 sm:p-5 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-950 space-y-2 animate-modal">
                <div class="flex items-center gap-2 font-bold text-sm text-emerald-800">
                  ${icons.check}
                  <span>Thank you for reaching out to Abhiman!</span>
                </div>
                <p class="text-xs text-emerald-900 leading-relaxed">
                  Your message has been recorded. Our team will review your inquiry and connect back with you soon. We respect your privacy and never spam.
                </p>
                <button 
                  id="reset-contact-form-btn" 
                  type="button" 
                  class="mt-2 text-xs font-bold text-emerald-800 underline hover:text-emerald-900 focus:outline-none min-h-[38px] inline-flex items-center"
                >
                  Send another message
                </button>
              </div>

              <!-- Contact Form -->
              <form id="contact-form" class="space-y-3.5 sm:space-y-4" novalidate>
                
                <!-- Name -->
                <div>
                  <label for="contact-name" class="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Your Name <span class="text-maroon-800" aria-hidden="true">*</span>
                  </label>
                  <input 
                    type="text" 
                    id="contact-name" 
                    name="name" 
                    required 
                    placeholder="e.g. Ananya Sharma" 
                    class="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 text-base sm:text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                  />
                  <p id="name-error" class="hidden text-xs text-maroon-800 mt-1">Please enter your name.</p>
                </div>

                <!-- Email or Phone -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label for="contact-email" class="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                      Email Address <span class="text-maroon-800" aria-hidden="true">*</span>
                    </label>
                    <input 
                      type="email" 
                      id="contact-email" 
                      name="email" 
                      required 
                      placeholder="e.g. ananya@example.com" 
                      class="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 text-base sm:text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                    />
                    <p id="email-error" class="hidden text-xs text-maroon-800 mt-1">Please enter a valid email address.</p>
                  </div>

                  <div>
                    <label for="contact-phone" class="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input 
                      type="tel" 
                      id="contact-phone" 
                      name="phone" 
                      placeholder="e.g. +91 98765 43210" 
                      class="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 text-base sm:text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                    />
                  </div>
                </div>

                <!-- Subject / Topic -->
                <div>
                  <label for="contact-subject" class="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Inquiry Topic
                  </label>
                  <select 
                    id="contact-subject" 
                    name="subject" 
                    class="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 text-base sm:text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                  >
                    <option value="Product Discovery">Product Information &amp; Serving Ideas</option>
                    <option value="Amazon Order Support">Amazon Order Assistance</option>
                    <option value="Bulk Order">Local Retail / Bulk Celebration Order</option>
                    <option value="Feedback">Recipe Feedback &amp; Suggestions</option>
                    <option value="Other">Other Business Inquiry</option>
                  </select>
                </div>

                <!-- Message -->
                <div>
                  <label for="contact-message" class="block text-xs font-bold uppercase tracking-wider text-charcoal-700 mb-1">
                    Your Message <span class="text-maroon-800" aria-hidden="true">*</span>
                  </label>
                  <textarea 
                    id="contact-message" 
                    name="message" 
                    rows="3" 
                    required 
                    placeholder="Tell us what you would like to know..." 
                    class="w-full px-3.5 py-2.5 sm:py-3 rounded-xl bg-cream-50 border border-cream-300 text-charcoal-900 text-base sm:text-sm focus:bg-white focus:border-amber-500 focus:ring-2 focus:ring-amber-200 transition-colors"
                  ></textarea>
                  <p id="message-error" class="hidden text-xs text-maroon-800 mt-1">Please enter your message.</p>
                </div>

                <!-- Privacy Friendly Note -->
                <p class="text-xs text-charcoal-500 leading-normal">
                  ${contact.formNotice}
                </p>

                <!-- Submit Button -->
                <div>
                  <button 
                    type="submit" 
                    id="submit-contact-btn" 
                    class="w-full sm:w-auto px-7 py-3 rounded-xl bg-maroon-800 hover:bg-maroon-900 active:bg-maroon-950 text-cream-50 font-bold text-sm sm:text-base shadow-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-maroon-700 min-h-[46px]"
                  >
                    Send Message to Abhiman
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

export function initContactSection() {
  const form = document.getElementById('contact-form');
  const successBox = document.getElementById('contact-form-success');
  const resetBtn = document.getElementById('reset-contact-form-btn');

  if (!form || !successBox) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('contact-name');
    const email = document.getElementById('contact-email');
    const message = document.getElementById('contact-message');

    let isValid = true;

    // Name validate
    if (!name.value.trim()) {
      document.getElementById('name-error').classList.remove('hidden');
      name.classList.add('border-maroon-800');
      isValid = false;
    } else {
      document.getElementById('name-error').classList.add('hidden');
      name.classList.remove('border-maroon-800');
    }

    // Email validate
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailPattern.test(email.value)) {
      document.getElementById('email-error').classList.remove('hidden');
      email.classList.add('border-maroon-800');
      isValid = false;
    } else {
      document.getElementById('email-error').classList.add('hidden');
      email.classList.remove('border-maroon-800');
    }

    // Message validate
    if (!message.value.trim()) {
      document.getElementById('message-error').classList.remove('hidden');
      message.classList.add('border-maroon-800');
      isValid = false;
    } else {
      document.getElementById('message-error').classList.add('hidden');
      message.classList.remove('border-maroon-800');
    }

    if (isValid) {
      // Simulate successful client-side submission
      form.classList.add('hidden');
      successBox.classList.remove('hidden');
      successBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  });

  resetBtn?.addEventListener('click', () => {
    form.reset();
    form.classList.remove('hidden');
    successBox.classList.add('hidden');
  });
}
