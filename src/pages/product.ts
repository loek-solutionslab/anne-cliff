import '../style.css'
import { getHeader, initHeader } from '../components/header'
import { getFooter } from '../components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${getHeader('product')}

  <!-- Hero -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div class="space-y-8 fade-in">
        <p class="text-xs uppercase tracking-[0.2em] text-ac-muted">The boxer</p>
        <h1 class="font-display text-4xl md:text-6xl font-light leading-tight text-ac-black">
          One fit.<br>
          <span class="italic text-ac-teal">Always right.</span>
        </h1>
        <p class="text-ac-muted text-lg leading-relaxed max-w-md">
          We didn't design ten options and let you guess. We perfected one. 95% Tencel&trade; Lyocell, 5% elastane. The same fabric as &euro;35 premium brands. At &euro;16.
        </p>
      </div>
      <div class="fade-in fade-in-delay-2">
        <div class="aspect-square bg-ac-cream flex items-center justify-center">
          <div class="text-center space-y-4">
            <div class="w-48 h-48 mx-auto bg-ac-forest/10 rounded-full flex items-center justify-center">
              <span class="font-display text-6xl font-light text-ac-forest">AC</span>
            </div>
            <p class="text-xs text-ac-muted uppercase tracking-widest">Product visual placeholder</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Material -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-cream">
    <div class="max-w-6xl mx-auto">
      <div class="mb-16 fade-in">
        <p class="text-xs uppercase tracking-[0.2em] text-ac-muted mb-4">Material</p>
        <h2 class="font-display text-3xl md:text-5xl font-light text-ac-black">
          Tencel&trade; Lyocell
        </h2>
      </div>

      <div class="grid md:grid-cols-2 gap-16">
        <div class="space-y-8 fade-in">
          <div class="space-y-4">
            <h3 class="font-display text-xl text-ac-black">95% Tencel&trade; Lyocell, 5% Elastane</h3>
            <p class="text-ac-muted leading-relaxed">
              Tencel is made from sustainably sourced wood pulp. It's softer than cotton, more breathable, and naturally temperature-regulating. The 5% elastane gives it stretch without losing shape.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-6">
            <div class="space-y-2">
              <div class="w-10 h-10 flex items-center justify-center border border-ac-border">
                <svg class="w-5 h-5 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"/></svg>
              </div>
              <h4 class="text-sm font-medium text-ac-black">Breathable</h4>
              <p class="text-xs text-ac-muted">50% more moisture absorption than cotton</p>
            </div>
            <div class="space-y-2">
              <div class="w-10 h-10 flex items-center justify-center border border-ac-border">
                <svg class="w-5 h-5 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"/></svg>
              </div>
              <h4 class="text-sm font-medium text-ac-black">Silk-like</h4>
              <p class="text-xs text-ac-muted">Smooth fiber surface, gentle on skin</p>
            </div>
            <div class="space-y-2">
              <div class="w-10 h-10 flex items-center justify-center border border-ac-border">
                <svg class="w-5 h-5 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h4 class="text-sm font-medium text-ac-black">Sustainable</h4>
              <p class="text-xs text-ac-muted">Biodegradable, closed-loop production</p>
            </div>
            <div class="space-y-2">
              <div class="w-10 h-10 flex items-center justify-center border border-ac-border">
                <svg class="w-5 h-5 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              </div>
              <h4 class="text-sm font-medium text-ac-black">Durable</h4>
              <p class="text-xs text-ac-muted">Keeps shape wash after wash</p>
            </div>
          </div>
        </div>

        <div class="space-y-6 fade-in fade-in-delay-2">
          <div class="bg-ac-white p-8 border border-ac-border">
            <h3 class="font-display text-xl text-ac-black mb-4">The comparison</h3>
            <table class="w-full text-sm">
              <thead>
                <tr class="border-b border-ac-border">
                  <th class="text-left py-3 text-ac-muted font-normal"></th>
                  <th class="text-center py-3 text-ac-teal font-medium">Anne Cliff</th>
                  <th class="text-center py-3 text-ac-muted font-normal">Premium brand</th>
                  <th class="text-center py-3 text-ac-muted font-normal">Mass market</th>
                </tr>
              </thead>
              <tbody class="text-ac-muted">
                <tr class="border-b border-ac-border/50">
                  <td class="py-3">Material</td>
                  <td class="text-center text-ac-black">Tencel Lyocell</td>
                  <td class="text-center">Tencel Lyocell</td>
                  <td class="text-center">Cotton blend</td>
                </tr>
                <tr class="border-b border-ac-border/50">
                  <td class="py-3">Price</td>
                  <td class="text-center text-ac-black">&euro;16</td>
                  <td class="text-center">&euro;35</td>
                  <td class="text-center">&euro;12</td>
                </tr>
                <tr class="border-b border-ac-border/50">
                  <td class="py-3">Subscription</td>
                  <td class="text-center text-ac-black">&check;</td>
                  <td class="text-center">&times;</td>
                  <td class="text-center">&check;</td>
                </tr>
                <tr>
                  <td class="py-3">Design</td>
                  <td class="text-center text-ac-black">Clean</td>
                  <td class="text-center">Clean</td>
                  <td class="text-center">Prints</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Subscription options -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 fade-in">
        <p class="text-xs uppercase tracking-[0.2em] text-ac-muted mb-4">Subscription</p>
        <h2 class="font-display text-3xl md:text-5xl font-light text-ac-black">
          Choose your rhythm
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div class="border border-ac-border p-8 text-center space-y-4 fade-in fade-in-delay-1 hover:border-ac-black transition-colors">
          <p class="text-xs uppercase tracking-widest text-ac-muted">Every 6 weeks</p>
          <p class="font-display text-4xl text-ac-black">&euro;16</p>
          <p class="text-xs text-ac-muted">per boxer &middot; ~8 per year</p>
          <div class="pt-4">
            <span class="inline-block px-3 py-1 bg-ac-forest/10 text-ac-forest text-xs">Recommended</span>
          </div>
        </div>
        <div class="border border-ac-border p-8 text-center space-y-4 fade-in fade-in-delay-2 hover:border-ac-black transition-colors">
          <p class="text-xs uppercase tracking-widest text-ac-muted">Every 2 months</p>
          <p class="font-display text-4xl text-ac-black">&euro;17</p>
          <p class="text-xs text-ac-muted">per boxer &middot; 6 per year</p>
        </div>
        <div class="border border-ac-border p-8 text-center space-y-4 fade-in fade-in-delay-3 hover:border-ac-black transition-colors">
          <p class="text-xs uppercase tracking-widest text-ac-muted">Every 3 months</p>
          <p class="font-display text-4xl text-ac-black">&euro;18</p>
          <p class="text-xs text-ac-muted">per boxer &middot; 4 per year</p>
        </div>
      </div>

      <div class="text-center mt-12 fade-in">
        <p class="text-sm text-ac-muted mb-6">Free shipping. Cancel or pause anytime. No strings.</p>
        <a href="/pages/contact.html" class="inline-flex items-center gap-3 px-10 py-4 bg-ac-black text-ac-white text-sm tracking-wide hover:bg-ac-forest transition-colors duration-300">
          Start your subscription
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>

  ${getFooter()}
`

initHeader()

const elements = document.querySelectorAll('.fade-in')
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        observer.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.1 }
)
elements.forEach((el) => observer.observe(el))
