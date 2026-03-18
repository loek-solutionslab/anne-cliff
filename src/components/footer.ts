export function getFooter(): string {
  return `
    <footer class="bg-ac-dark text-white/40 pt-20 pb-12 px-6 md:px-16">
      <div class="max-w-[1400px] mx-auto">
        <!-- Top: brand + newsletter hint -->
        <div class="grid md:grid-cols-[1fr_1fr] gap-16 mb-16">
          <div>
            <p class="font-display text-4xl md:text-5xl font-light italic text-ac-white mb-4">Anne Cliff</p>
            <p class="text-[14px] leading-relaxed max-w-[320px]">
              Premium comfort. Honest price.<br>
              95% Tencel&trade; Lyocell. One fit. Subscription.
            </p>
          </div>
          <div class="flex flex-col md:items-end justify-end">
            <p class="text-[10px] uppercase tracking-[0.25em] text-white/20 mb-3">Stay informed</p>
            <div class="flex gap-0 max-w-sm w-full md:w-auto">
              <input type="email" placeholder="your@email.com" class="flex-1 md:w-64 px-4 py-3 bg-white/5 border border-white/10 text-white text-[13px] placeholder:text-white/20 focus:outline-none focus:border-ac-suede/40 transition-colors" />
              <button class="px-6 py-3 bg-ac-suede text-ac-dark text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-ac-white transition-colors duration-300">
                Join
              </button>
            </div>
          </div>
        </div>

        <!-- Links grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-white/8">
          <div>
            <p class="text-[10px] uppercase tracking-[0.25em] text-white/20 mb-4">Shop</p>
            <div class="flex flex-col gap-2.5">
              <a href="/pages/product.html" class="text-[13px] hover:text-ac-white transition-colors">The Boxer</a>
              <a href="/pages/product.html" class="text-[13px] hover:text-ac-white transition-colors">Subscription</a>
              <a href="/pages/faq.html" class="text-[13px] hover:text-ac-white transition-colors">Size Guide</a>
            </div>
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-[0.25em] text-white/20 mb-4">Company</p>
            <div class="flex flex-col gap-2.5">
              <a href="/pages/about.html" class="text-[13px] hover:text-ac-white transition-colors">About</a>
              <a href="/pages/faq.html" class="text-[13px] hover:text-ac-white transition-colors">FAQ</a>
              <a href="/pages/contact.html" class="text-[13px] hover:text-ac-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-[0.25em] text-white/20 mb-4">Legal</p>
            <div class="flex flex-col gap-2.5">
              <span class="text-[13px] text-white/20">Privacy Policy</span>
              <span class="text-[13px] text-white/20">Terms of Service</span>
              <span class="text-[13px] text-white/20">Returns</span>
            </div>
          </div>
          <div>
            <p class="text-[10px] uppercase tracking-[0.25em] text-white/20 mb-4">Contact</p>
            <div class="flex flex-col gap-2.5">
              <a href="mailto:hello@annecliff.com" class="text-[13px] hover:text-ac-white transition-colors">hello@annecliff.com</a>
              <p class="text-[13px]">Amsterdam, NL</p>
            </div>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p class="text-[11px] text-white/20">&copy; 2026 Anne Cliff. All rights reserved.</p>
          <a href="/pages/solutionslab.html" class="text-[11px] text-white/10 hover:text-white/30 transition-colors">
            Site by solutions lab
          </a>
        </div>
      </div>
    </footer>
  `
}
