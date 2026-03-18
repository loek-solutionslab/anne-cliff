export function getAnnouncementBar(): string {
  return `
    <div class="announcement-bar py-2 px-4 text-center">
      <a href="/pages/solutionslab.html" class="inline-flex items-center gap-2 hover:opacity-80 transition-opacity">
        <span>This is a demo site built by</span>
        <span class="sl-accent font-semibold">&#9679; solutions lab</span>
        <span>&rarr; see the full proposal</span>
      </a>
    </div>
  `
}

export function getHeader(currentPage: string = ''): string {
  const navItems = [
    { href: '/', label: 'Home', id: 'home' },
    { href: '/pages/product.html', label: 'The Boxer', id: 'product' },
    { href: '/pages/about.html', label: 'About', id: 'about' },
    { href: '/pages/faq.html', label: 'FAQ', id: 'faq' },
    { href: '/pages/contact.html', label: 'Contact', id: 'contact' },
  ]

  const navLinks = navItems
    .map(item => {
      const active = currentPage === item.id ? 'text-ac-black' : 'text-ac-muted hover:text-ac-black'
      return `<a href="${item.href}" class="${active} text-sm tracking-wide transition-colors duration-300">${item.label}</a>`
    })
    .join('\n')

  return `
    ${getAnnouncementBar()}
    <header class="sticky top-0 z-50 bg-ac-white/95 backdrop-blur-sm border-b border-ac-border">
      <nav class="max-w-6xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <a href="/" class="font-display text-2xl md:text-3xl font-light tracking-tight text-ac-black">
          Anne Cliff
        </a>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          ${navLinks}
        </div>

        <!-- Mobile menu button -->
        <button id="mobile-menu-btn" class="md:hidden p-2" aria-label="Menu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
      </nav>

      <!-- Mobile menu -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-ac-border bg-ac-white">
        <div class="px-6 py-4 flex flex-col gap-4">
          ${navItems.map(item => `<a href="${item.href}" class="text-ac-muted hover:text-ac-black text-sm tracking-wide py-2">${item.label}</a>`).join('\n')}
        </div>
      </div>
    </header>
  `
}

export function initHeader(): void {
  const btn = document.getElementById('mobile-menu-btn')
  const menu = document.getElementById('mobile-menu')
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden')
    })
  }
}
