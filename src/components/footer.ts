export function getFooter(): string {
  return `
    <footer class="bg-ac-dark text-ac-white/60 py-16 px-6 md:px-12">
      <div class="max-w-6xl mx-auto">
        <div class="grid md:grid-cols-4 gap-12 mb-12">
          <!-- Brand -->
          <div class="md:col-span-2">
            <h3 class="font-display text-3xl font-light text-ac-white mb-4">Anne Cliff</h3>
            <p class="text-sm leading-relaxed max-w-sm">
              Premium draagcomfort. Zonder gedoe. Altijd goed.<br>
              95% Tencel&trade; Lyocell. &Eacute;&eacute;n fit. Subscription.
            </p>
          </div>

          <!-- Links -->
          <div>
            <h4 class="text-ac-white text-xs uppercase tracking-widest mb-4">Navigate</h4>
            <div class="flex flex-col gap-2 text-sm">
              <a href="/" class="hover:text-ac-white transition-colors">Home</a>
              <a href="/pages/product.html" class="hover:text-ac-white transition-colors">The Boxer</a>
              <a href="/pages/about.html" class="hover:text-ac-white transition-colors">About</a>
              <a href="/pages/faq.html" class="hover:text-ac-white transition-colors">FAQ</a>
              <a href="/pages/contact.html" class="hover:text-ac-white transition-colors">Contact</a>
            </div>
          </div>

          <!-- Contact -->
          <div>
            <h4 class="text-ac-white text-xs uppercase tracking-widest mb-4">Contact</h4>
            <div class="flex flex-col gap-2 text-sm">
              <a href="mailto:hello@annecliff.com" class="hover:text-ac-white transition-colors">hello@annecliff.com</a>
              <p>Amsterdam, NL</p>
            </div>
          </div>
        </div>

        <div class="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; 2026 Anne Cliff. All rights reserved.</p>
          <a href="/pages/solutionslab.html" class="hover:text-ac-white transition-colors opacity-50 hover:opacity-100">
            Site by solutions lab
          </a>
        </div>
      </div>
    </footer>
  `
}
