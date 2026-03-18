import '../style.css'
import { getHeader, initHeader } from '../components/header'
import { getFooter } from '../components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${getHeader('about')}

  <!-- Hero -->
  <section class="py-20 md:py-32 px-6 md:px-16 bg-ac-cream fabric-texture">
    <div class="max-w-3xl mx-auto text-center space-y-8 reveal">
      <p class="text-[11px] uppercase tracking-[0.35em] text-ac-muted">Our story</p>
      <h1 class="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light leading-tight text-ac-black italic">
        We believe comfort<br><span class="not-italic text-ac-teal">is not a luxury</span>
      </h1>
      <p class="text-ac-muted text-lg leading-relaxed max-w-xl mx-auto">
        And maturity doesn't need loud prints.
      </p>
    </div>
  </section>

  <!-- Brand story -->
  <section class="py-20 md:py-32 px-6 md:px-16 bg-ac-white">
    <div class="max-w-[1400px] mx-auto space-y-16">
      <div class="space-y-6 reveal">
        <h2 class="font-display text-2xl md:text-3xl font-light italic text-ac-black">The routine</h2>
        <div class="space-y-4 text-ac-muted leading-relaxed text-lg">
          <p>Every morning starts with a routine. Shower. Coffee. Shirt. Go.</p>
          <p>You don't think about your underwear. And that's exactly the point.</p>
          <p>If the fit is right, you stay. If the comfort is right, you reorder. We just made both automatic.</p>
        </div>
      </div>

      <div class="w-full h-px bg-ac-border"></div>

      <div class="space-y-6 reveal">
        <h2 class="font-display text-2xl md:text-3xl font-light italic text-ac-black">The gap</h2>
        <div class="space-y-4 text-ac-muted leading-relaxed text-lg">
          <p>There is no premium underwear subscription in Europe. The man who wants premium comfort has to overpay, or settle for cotton, or choose loud prints, or buy one-off.</p>
          <p>We saw a gap between cheap &amp; loud and premium &amp; overpriced. Anne Cliff fills it.</p>
        </div>
      </div>

      <div class="w-full h-px bg-ac-border"></div>

      <div class="space-y-6 reveal">
        <h2 class="font-display text-2xl md:text-3xl font-light italic text-ac-black">The values</h2>
        <div class="grid sm:grid-cols-2 gap-8">
          <div class="space-y-2">
            <h3 class="text-ac-black font-medium">Calm</h3>
            <p class="text-ac-muted text-sm leading-relaxed">No shouting. No hype. No unnecessary claims. We let the product speak.</p>
          </div>
          <div class="space-y-2">
            <h3 class="text-ac-black font-medium">Certainty</h3>
            <p class="text-ac-muted text-sm leading-relaxed">Same quality. Same fit. Every time. You know what you're getting.</p>
          </div>
          <div class="space-y-2">
            <h3 class="text-ac-black font-medium">Consistency</h3>
            <p class="text-ac-muted text-sm leading-relaxed">One product, perfected. Not ten options that are all mediocre.</p>
          </div>
          <div class="space-y-2">
            <h3 class="text-ac-black font-medium">Quality</h3>
            <p class="text-ac-muted text-sm leading-relaxed">95% Tencel Lyocell. The same fabric used by brands charging double.</p>
          </div>
        </div>
      </div>

      <div class="w-full h-px bg-ac-border"></div>

      <div class="space-y-6 reveal">
        <h2 class="font-display text-2xl md:text-3xl font-light italic text-ac-black">For whom</h2>
        <div class="space-y-4 text-ac-muted leading-relaxed text-lg">
          <p>Men, 28&ndash;55. Buys underwear functionally. Sticks with a brand when fit and quality are right.</p>
          <p>What they want: comfort, no hassle, no excessive choice. Premium feel without premium attitude or price.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 md:py-32 px-6 md:px-16 bg-ac-forest text-ac-white text-center fabric-texture">
    <div class="max-w-3xl mx-auto space-y-8 reveal">
      <h2 class="font-display text-3xl md:text-5xl font-light italic">
        Premium comfort. Without the fuss.
      </h2>
      <a href="/pages/product.html" class="inline-flex items-center gap-3 px-10 py-4 bg-ac-white text-ac-black text-sm tracking-wide hover:bg-ac-suede hover:text-ac-white transition-colors duration-300">
        Discover the boxer
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </section>

  ${getFooter()}
`

initHeader()

const elements = document.querySelectorAll('.reveal, .reveal-left, .line-draw')
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
