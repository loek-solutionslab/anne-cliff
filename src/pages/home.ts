import '../style.css'
import { getHeader, initHeader } from '../components/header'
import { getFooter } from '../components/footer'

// Color swatches representing the product line
const swatches = [
  { name: 'Midnight', hex: '#1a1a1a' },
  { name: 'Forest', hex: '#2d4a3e' },
  { name: 'Suede', hex: '#c4a882' },
  { name: 'Slate', hex: '#6b7f99' },
  { name: 'Teal', hex: '#3a6b6b' },
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${getHeader('home')}
  <div class="grain" aria-hidden="true"></div>

  <!-- ════════ HERO ════════ -->
  <section class="relative min-h-[100svh] flex items-end bg-ac-warm overflow-hidden fabric-texture">
    <!-- Background gradient that evokes fabric -->
    <div class="absolute inset-0" style="background: radial-gradient(ellipse at 70% 20%, #4a3f35 0%, #2a2420 40%, #1a1615 100%);"></div>
    <div class="absolute inset-0" style="background: radial-gradient(ellipse at 20% 80%, rgba(196,168,130,0.15) 0%, transparent 60%);"></div>

    <div class="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-16 pb-16 md:pb-24 pt-32 md:pt-48">
      <div class="grid md:grid-cols-[1fr_340px] gap-12 md:gap-20 items-end">
        <div>
          <!-- Eyebrow -->
          <p class="reveal text-[11px] uppercase tracking-[0.35em] text-ac-suede mb-8 font-body">
            Premium underwear subscription
          </p>

          <!-- Main headline -->
          <h1 class="reveal reveal-delay-1 font-display text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.88] tracking-[-0.03em] text-ac-white">
            The only<br>
            boxer you'll<br>
            <span class="italic text-ac-suede">ever need</span>
          </h1>

          <!-- Separator -->
          <div class="line-draw w-24 mt-10 mb-8"></div>

          <!-- Subtitle -->
          <p class="reveal reveal-delay-2 text-white/50 text-[15px] leading-relaxed max-w-[420px] font-light">
            95% Tencel&trade; Lyocell. One fit. &euro;16. Delivered every six weeks to your letterbox. No prints. No fuss. Just the fabric you deserve.
          </p>

          <!-- CTA -->
          <div class="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-5">
            <a href="/pages/product.html" class="group inline-flex items-center gap-3 px-8 py-4 bg-ac-suede text-ac-dark text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-ac-white transition-colors duration-500">
              Start subscription
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </a>
            <a href="/pages/about.html" class="link-underline text-white/40 text-[13px] uppercase tracking-[0.15em] hover:text-white/70 transition-colors duration-300">
              Our story
            </a>
          </div>
        </div>

        <!-- Right column: product swatch tower -->
        <div class="reveal reveal-delay-4 hidden md:flex flex-col items-center gap-3">
          ${swatches.map((s, i) => `
            <div class="swatch w-full aspect-[4/3] relative cursor-pointer" style="background: ${s.hex};">
              <span class="absolute bottom-3 right-4 text-[10px] uppercase tracking-[0.2em] ${i === 0 || i === 1 || i === 4 ? 'text-white/40' : 'text-black/30'}">${s.name}</span>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Bottom stats bar -->
      <div class="reveal reveal-delay-5 mt-16 pt-8 border-t border-white/10 grid grid-cols-3 md:grid-cols-3 gap-8">
        <div>
          <p class="font-display text-3xl md:text-4xl font-light italic text-ac-suede">&euro;16</p>
          <p class="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-1">Per boxer</p>
        </div>
        <div>
          <p class="font-display text-3xl md:text-4xl font-light italic text-ac-suede">95%</p>
          <p class="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-1">Tencel&trade; Lyocell</p>
        </div>
        <div>
          <p class="font-display text-3xl md:text-4xl font-light italic text-ac-suede">6w</p>
          <p class="text-[10px] uppercase tracking-[0.25em] text-white/30 mt-1">Delivery cycle</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ════════ MARQUEE DIVIDER ════════ -->
  <div class="bg-ac-cream py-4 overflow-hidden border-y border-ac-border">
    <div class="flex whitespace-nowrap marquee-track">
      ${Array(8).fill('').map(() =>
        `<span class="font-display text-xl italic text-ac-muted/30 mx-8">Tencel&trade; Lyocell</span>
         <span class="text-ac-suede/40 mx-4">&bull;</span>
         <span class="font-display text-xl italic text-ac-muted/30 mx-8">Premium comfort</span>
         <span class="text-ac-suede/40 mx-4">&bull;</span>
         <span class="font-display text-xl italic text-ac-muted/30 mx-8">&euro;16 per pair</span>
         <span class="text-ac-suede/40 mx-4">&bull;</span>`
      ).join('')}
    </div>
  </div>

  <!-- ════════ THE FABRIC ════════ -->
  <section class="py-28 md:py-40 px-6 md:px-16 bg-ac-white">
    <div class="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-20 items-center">
      <!-- Left: large fabric swatch visualization -->
      <div class="reveal">
        <div class="relative aspect-square">
          <!-- Layered gradients to simulate fabric texture -->
          <div class="absolute inset-0" style="background: linear-gradient(145deg, #e8dfd4 0%, #d4c4a8 30%, #c4a882 60%, #b89a72 100%);"></div>
          <div class="absolute inset-0" style="background: repeating-linear-gradient(90deg, transparent, transparent 1px, rgba(255,255,255,0.03) 1px, rgba(255,255,255,0.03) 2px); mix-blend-mode: overlay;"></div>
          <div class="absolute inset-0" style="background: repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px); mix-blend-mode: multiply;"></div>
          <!-- Label -->
          <div class="absolute bottom-8 left-8 right-8">
            <p class="text-[10px] uppercase tracking-[0.3em] text-ac-warm/40 mb-2">Material</p>
            <p class="font-display text-3xl md:text-4xl font-light italic text-ac-warm/70">Tencel&trade; Lyocell</p>
          </div>
          <!-- Corner detail -->
          <div class="absolute top-8 right-8 text-right">
            <p class="text-[10px] uppercase tracking-[0.3em] text-ac-warm/30">95 / 5</p>
          </div>
        </div>
      </div>

      <!-- Right: content -->
      <div class="reveal reveal-delay-2">
        <p class="text-[11px] uppercase tracking-[0.35em] text-ac-muted mb-6">The fabric</p>
        <h2 class="font-display text-4xl md:text-5xl lg:text-6xl font-light leading-[0.95] tracking-tight text-ac-black mb-8">
          Silk-like softness.<br>
          <span class="italic text-ac-teal">Half the price.</span>
        </h2>
        <div class="space-y-5 text-ac-muted text-[15px] leading-relaxed">
          <p>Tencel is made from sustainably sourced wood pulp. Softer than cotton. More breathable. Naturally temperature-regulating. The same fiber used by &euro;35 premium brands.</p>
          <p>We use 95% Tencel Lyocell with 5% elastane for stretch that holds its shape. Wash after wash.</p>
        </div>
        <div class="grid grid-cols-2 gap-6 mt-10">
          <div class="py-4 border-t border-ac-border">
            <p class="text-[10px] uppercase tracking-[0.25em] text-ac-muted mb-1">Breathability</p>
            <p class="font-display text-xl italic text-ac-black">50% &gt; cotton</p>
          </div>
          <div class="py-4 border-t border-ac-border">
            <p class="text-[10px] uppercase tracking-[0.25em] text-ac-muted mb-1">Moisture</p>
            <p class="font-display text-xl italic text-ac-black">Wicks &amp; dries</p>
          </div>
          <div class="py-4 border-t border-ac-border">
            <p class="text-[10px] uppercase tracking-[0.25em] text-ac-muted mb-1">Production</p>
            <p class="font-display text-xl italic text-ac-black">Closed-loop</p>
          </div>
          <div class="py-4 border-t border-ac-border">
            <p class="text-[10px] uppercase tracking-[0.25em] text-ac-muted mb-1">Durability</p>
            <p class="font-display text-xl italic text-ac-black">Holds shape</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════════ HOW IT WORKS ════════ -->
  <section class="py-28 md:py-40 px-6 md:px-16 bg-ac-cream fabric-texture">
    <div class="max-w-[1400px] mx-auto">
      <div class="reveal mb-20 md:mb-28">
        <p class="text-[11px] uppercase tracking-[0.35em] text-ac-muted mb-6">Process</p>
        <h2 class="font-display text-4xl md:text-6xl lg:text-7xl font-light leading-[0.9] tracking-tight text-ac-black">
          No choices.<br>
          <span class="italic text-ac-forest">Just comfort.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-0">
        ${[
          { num: '01', title: 'Choose your size', body: 'One fit. One design. Select your size and frequency. We eliminated everything unnecessary.', color: '#2d4a3e' },
          { num: '02', title: 'We deliver', body: 'A fresh pair every 6 weeks. Letterbox-friendly. No signing. No waiting. It\u2019s just there.', color: '#3a6b6b' },
          { num: '03', title: 'You stay', body: 'No contracts. Pause or cancel anytime. But once you feel Tencel, you won\u2019t go back.', color: '#c4a882' },
        ].map((step, i) => `
          <div class="reveal reveal-delay-${i + 1} group relative p-10 md:p-12 border-b md:border-b-0 md:border-r border-ac-border last:border-r-0 last:border-b-0">
            <span class="display-number text-7xl md:text-8xl block mb-8">${step.num}</span>
            <h3 class="font-display text-2xl font-light text-ac-black mb-4">${step.title}</h3>
            <p class="text-ac-muted text-[14px] leading-relaxed">${step.body}</p>
            <!-- Accent line on hover -->
            <div class="absolute bottom-0 left-10 right-10 md:left-12 md:right-12 h-[2px] transition-transform duration-700 origin-left scale-x-0 group-hover:scale-x-100" style="background: ${step.color};"></div>
          </div>
        `).join('')}
      </div>
    </div>
  </section>

  <!-- ════════ PRICING / THE COMPARISON ════════ -->
  <section class="py-28 md:py-40 px-6 md:px-16 bg-ac-dark text-ac-white fabric-texture">
    <div class="max-w-[1400px] mx-auto">
      <div class="reveal mb-20">
        <p class="text-[11px] uppercase tracking-[0.35em] text-ac-suede mb-6">Honest pricing</p>
        <h2 class="font-display text-4xl md:text-6xl font-light leading-[0.95] tracking-tight">
          Same quality.<br>
          <span class="italic text-ac-suede">Fair price.</span>
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <!-- Competitor -->
        <div class="reveal reveal-delay-1 p-8 md:p-10 border border-white/8 bg-white/[0.02]">
          <p class="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-6">Premium brand</p>
          <p class="font-display text-5xl md:text-6xl font-light italic text-white/20">&euro;35</p>
          <div class="mt-8 space-y-3 text-[13px] text-white/30">
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>Material</span><span class="text-white/50">Tencel Lyocell</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>Subscription</span><span>No</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Design</span><span class="text-white/50">Clean</span>
            </div>
          </div>
        </div>

        <!-- Anne Cliff (featured) -->
        <div class="reveal reveal-delay-2 p-8 md:p-10 border border-ac-suede/40 bg-ac-suede/[0.06] relative">
          <div class="absolute top-0 left-0 right-0 h-[2px] bg-ac-suede"></div>
          <p class="text-[10px] uppercase tracking-[0.25em] text-ac-suede mb-6">Anne Cliff</p>
          <p class="font-display text-5xl md:text-6xl font-light italic text-ac-suede">&euro;16</p>
          <div class="mt-8 space-y-3 text-[13px] text-white/50">
            <div class="flex justify-between py-2 border-b border-white/8">
              <span>Material</span><span class="text-ac-white">Tencel Lyocell</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/8">
              <span>Subscription</span><span class="text-ac-white">Every 6 weeks</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Design</span><span class="text-ac-white">Clean, one fit</span>
            </div>
          </div>
          <a href="/pages/product.html" class="group mt-8 inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.15em] text-ac-suede hover:text-ac-white transition-colors">
            Select
            <svg class="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
        </div>

        <!-- Mass market -->
        <div class="reveal reveal-delay-3 p-8 md:p-10 border border-white/8 bg-white/[0.02]">
          <p class="text-[10px] uppercase tracking-[0.25em] text-white/30 mb-6">Mass market</p>
          <p class="font-display text-5xl md:text-6xl font-light italic text-white/20">&euro;12</p>
          <div class="mt-8 space-y-3 text-[13px] text-white/30">
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>Material</span><span>Cotton blend</span>
            </div>
            <div class="flex justify-between py-2 border-b border-white/5">
              <span>Subscription</span><span class="text-white/50">Yes</span>
            </div>
            <div class="flex justify-between py-2">
              <span>Design</span><span>Prints, loud</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ════════ BRAND QUOTE ════════ -->
  <section class="py-28 md:py-40 px-6 md:px-16 bg-ac-white relative">
    <div class="max-w-[900px] mx-auto text-center reveal">
      <div class="line-draw w-16 mx-auto mb-12"></div>
      <blockquote class="font-display text-3xl md:text-5xl lg:text-6xl font-light leading-[1.05] tracking-tight text-ac-black italic">
        &ldquo;Comfort is not a luxury.<br>
        Maturity doesn&rsquo;t need<br>
        loud prints.&rdquo;
      </blockquote>
      <div class="line-draw w-16 mx-auto mt-12 mb-10"></div>
      <p class="text-ac-muted text-[15px] leading-relaxed max-w-[480px] mx-auto">
        Every morning starts with a routine. Shower. Coffee. Shirt. Go. You don&rsquo;t think about your underwear. And that&rsquo;s exactly the point.
      </p>
      <a href="/pages/about.html" class="link-underline inline-block mt-8 text-[12px] uppercase tracking-[0.15em] text-ac-teal hover:text-ac-forest transition-colors">
        Read our story
      </a>
    </div>
  </section>

  <!-- ════════ SUBSCRIPTION CTA ════════ -->
  <section class="relative py-28 md:py-40 px-6 md:px-16 overflow-hidden" style="background: linear-gradient(135deg, #2d4a3e 0%, #1a332b 50%, #1a2520 100%);">
    <div class="absolute inset-0" style="background: radial-gradient(ellipse at 80% 50%, rgba(196,168,130,0.08) 0%, transparent 60%);"></div>
    <div class="relative z-10 max-w-[1400px] mx-auto grid md:grid-cols-[1fr_1fr] gap-16 items-center">
      <div class="reveal">
        <p class="text-[11px] uppercase tracking-[0.35em] text-ac-suede/60 mb-6">Subscribe</p>
        <h2 class="font-display text-4xl md:text-6xl font-light leading-[0.95] tracking-tight text-ac-white mb-6">
          Ready to feel<br>
          <span class="italic text-ac-suede">the difference?</span>
        </h2>
        <p class="text-white/40 text-[15px] leading-relaxed max-w-[400px]">
          &euro;16 per boxer. Every 6 weeks. Free shipping. Cancel anytime. Start with one &mdash; stay for the comfort.
        </p>
      </div>
      <div class="reveal reveal-delay-2 flex flex-col gap-4">
        <!-- Subscription tiers -->
        ${[
          { interval: 'Every 6 weeks', price: '16', note: '~8 per year', recommended: true },
          { interval: 'Every 2 months', price: '17', note: '6 per year', recommended: false },
          { interval: 'Every 3 months', price: '18', note: '4 per year', recommended: false },
        ].map(tier => `
          <div class="hover-lift group flex items-center justify-between p-6 ${tier.recommended ? 'border border-ac-suede/40 bg-white/[0.04]' : 'border border-white/8 bg-white/[0.02]'} cursor-pointer">
            <div class="flex items-center gap-4">
              ${tier.recommended ? '<span class="pulse-dot w-2 h-2 rounded-full bg-ac-suede flex-shrink-0"></span>' : '<span class="w-2 h-2 rounded-full bg-white/10 flex-shrink-0"></span>'}
              <div>
                <p class="text-ac-white text-[14px]">${tier.interval}</p>
                <p class="text-white/30 text-[11px] mt-0.5">${tier.note}</p>
              </div>
            </div>
            <div class="flex items-center gap-4">
              <span class="font-display text-2xl italic ${tier.recommended ? 'text-ac-suede' : 'text-white/40'}">&euro;${tier.price}</span>
              <svg class="w-4 h-4 text-white/20 group-hover:text-ac-suede transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/></svg>
            </div>
          </div>
        `).join('')}
        <a href="/pages/product.html" class="group mt-4 inline-flex items-center justify-center gap-3 px-8 py-4 bg-ac-suede text-ac-dark text-[13px] font-medium uppercase tracking-[0.15em] hover:bg-ac-white transition-colors duration-500">
          Start your subscription
          <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>

  ${getFooter()}
`

// Init
initHeader()

// Reveal observer
const revealEls = document.querySelectorAll('.reveal, .reveal-left, .line-draw')
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
)
revealEls.forEach((el) => revealObserver.observe(el))
