import '../style.css'
import { getHeader, initHeader } from '../components/header'
import { getFooter } from '../components/footer'

const heroImages = [
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=80&auto=format',
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format',
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${getHeader('home')}

  <!-- Hero -->
  <section class="min-h-[90vh] flex items-center bg-ac-cream relative overflow-hidden">
    <div class="max-w-6xl mx-auto px-6 md:px-12 py-20 md:py-32 grid md:grid-cols-2 gap-12 items-center w-full">
      <div class="space-y-8 fade-in">
        <div>
          <p class="text-xs uppercase tracking-[0.2em] text-ac-muted mb-6">Premium underwear subscription</p>
          <h1 class="font-display text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight text-ac-black">
            Comfort<br>
            <span class="italic text-ac-teal">without</span><br>
            compromise
          </h1>
        </div>
        <p class="text-ac-muted text-lg md:text-xl max-w-md leading-relaxed">
          95% Tencel&trade; Lyocell. One perfect fit. Delivered every 6 weeks. No prints. No fuss. Just premium comfort at an honest price.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/pages/product.html" class="inline-flex items-center justify-center gap-3 px-8 py-4 bg-ac-black text-ac-white text-sm tracking-wide hover:bg-ac-forest transition-colors duration-300">
            Start your subscription
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a href="/pages/about.html" class="inline-flex items-center justify-center gap-3 px-8 py-4 border border-ac-black text-ac-black text-sm tracking-wide hover:bg-ac-black hover:text-ac-white transition-colors duration-300">
            Our story
          </a>
        </div>
        <div class="flex items-center gap-8 pt-4">
          <div class="text-center">
            <p class="font-display text-2xl text-ac-black">&euro;16</p>
            <p class="text-xs text-ac-muted uppercase tracking-wider">per boxer</p>
          </div>
          <div class="w-px h-8 bg-ac-border"></div>
          <div class="text-center">
            <p class="font-display text-2xl text-ac-black">1</p>
            <p class="text-xs text-ac-muted uppercase tracking-wider">perfect fit</p>
          </div>
          <div class="w-px h-8 bg-ac-border"></div>
          <div class="text-center">
            <p class="font-display text-2xl text-ac-black">6w</p>
            <p class="text-xs text-ac-muted uppercase tracking-wider">delivery cycle</p>
          </div>
        </div>
      </div>
      <div class="relative fade-in fade-in-delay-2">
        <div class="aspect-[3/4] bg-ac-forest/10 overflow-hidden">
          <img src="${heroImages[0]}" alt="Anne Cliff premium boxer" class="w-full h-full object-cover object-center" loading="eager" />
        </div>
        <div class="absolute -bottom-6 -left-6 w-32 h-32 bg-ac-suede/20 -z-10"></div>
      </div>
    </div>
  </section>

  <!-- Value props -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-white">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 fade-in">
        <p class="text-xs uppercase tracking-[0.2em] text-ac-muted mb-4">Why Anne Cliff</p>
        <h2 class="font-display text-3xl md:text-5xl font-light text-ac-black">
          Premium comfort.<br>Honest price.
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-8 md:gap-12">
        <div class="text-center space-y-4 fade-in fade-in-delay-1">
          <div class="w-16 h-16 mx-auto flex items-center justify-center border border-ac-border">
            <svg class="w-7 h-7 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>
          </div>
          <h3 class="font-display text-xl text-ac-black">95% Tencel&trade; Lyocell</h3>
          <p class="text-ac-muted text-sm leading-relaxed">
            CDLP-level quality at an honest price. Silk-like softness, breathable, sustainable. The fabric you deserve.
          </p>
        </div>
        <div class="text-center space-y-4 fade-in fade-in-delay-2">
          <div class="w-16 h-16 mx-auto flex items-center justify-center border border-ac-border">
            <svg class="w-7 h-7 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
          </div>
          <h3 class="font-display text-xl text-ac-black">One perfect fit</h3>
          <p class="text-ac-muted text-sm leading-relaxed">
            No choice overload. We perfected one fit and one design. If it fits, you stay. That's the deal.
          </p>
        </div>
        <div class="text-center space-y-4 fade-in fade-in-delay-3">
          <div class="w-16 h-16 mx-auto flex items-center justify-center border border-ac-border">
            <svg class="w-7 h-7 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
          </div>
          <h3 class="font-display text-xl text-ac-black">Every 6 weeks</h3>
          <p class="text-ac-muted text-sm leading-relaxed">
            Fresh comfort on your doorstep. No reordering. No thinking. Cancel anytime. 8-9 pairs per year.
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- The problem -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-dark text-ac-white">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div class="space-y-6 fade-in">
        <p class="text-xs uppercase tracking-[0.2em] text-ac-suede">The problem</p>
        <h2 class="font-display text-3xl md:text-5xl font-light leading-tight">
          Premium underwear<br>shouldn't cost &euro;35<br>per pair
        </h2>
        <p class="text-white/60 text-lg leading-relaxed">
          The grown man is stuck. Cheap &amp; loud, or premium &amp; overpriced. There's no subscription for quality. No way to get CDLP comfort without CDLP prices.
        </p>
        <div class="space-y-3 pt-4">
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-ac-suede mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            <p class="text-white/60">Too old for loud prints and fast-fashion polyester</p>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-ac-suede mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            <p class="text-white/60">Too quality-conscious for cotton blends</p>
          </div>
          <div class="flex items-start gap-3">
            <svg class="w-5 h-5 text-ac-suede mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            <p class="text-white/60">Unwilling to pay &euro;35 per piece for basics</p>
          </div>
        </div>
      </div>
      <div class="fade-in fade-in-delay-2">
        <div class="space-y-4">
          <div class="bg-white/5 p-6 border border-white/10">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-white/40">Competitor A</span>
              <span class="font-display text-xl">&euro;35</span>
            </div>
            <p class="text-xs text-white/30">Premium quality. Premium price. No subscription.</p>
          </div>
          <div class="bg-white/5 p-6 border border-white/10">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-white/40">Competitor B</span>
              <span class="font-display text-xl">&euro;12</span>
            </div>
            <p class="text-xs text-white/30">Subscription available. Cotton. Loud prints.</p>
          </div>
          <div class="bg-ac-forest p-6 border border-ac-suede/30">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm text-ac-suede">Anne Cliff</span>
              <span class="font-display text-xl text-ac-white">&euro;16</span>
            </div>
            <p class="text-xs text-white/60">Premium Tencel Lyocell. Subscription. Clean design.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- How it works -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-cream">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-16 fade-in">
        <p class="text-xs uppercase tracking-[0.2em] text-ac-muted mb-4">How it works</p>
        <h2 class="font-display text-3xl md:text-5xl font-light text-ac-black">
          Three steps. Zero hassle.
        </h2>
      </div>

      <div class="grid md:grid-cols-3 gap-12">
        <div class="fade-in fade-in-delay-1">
          <span class="font-display text-6xl font-light text-ac-border">01</span>
          <h3 class="font-display text-xl text-ac-black mt-4 mb-3">Pick your size</h3>
          <p class="text-ac-muted text-sm leading-relaxed">One fit. Choose your size. That's it. No color selection, no style options. We made the decisions so you don't have to.</p>
        </div>
        <div class="fade-in fade-in-delay-2">
          <span class="font-display text-6xl font-light text-ac-border">02</span>
          <h3 class="font-display text-xl text-ac-black mt-4 mb-3">We ship every 6 weeks</h3>
          <p class="text-ac-muted text-sm leading-relaxed">A fresh pair arrives at your door. Letterbox-friendly packaging. No signing. No waiting. Just there when you need it.</p>
        </div>
        <div class="fade-in fade-in-delay-3">
          <span class="font-display text-6xl font-light text-ac-border">03</span>
          <h3 class="font-display text-xl text-ac-black mt-4 mb-3">Stay or go</h3>
          <p class="text-ac-muted text-sm leading-relaxed">No lock-in. Pause or cancel anytime. But once you feel the difference, you'll stay. That's not marketing. That's Tencel.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Brand story snippet -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-white">
    <div class="max-w-3xl mx-auto text-center space-y-8 fade-in">
      <p class="text-xs uppercase tracking-[0.2em] text-ac-muted">Our belief</p>
      <blockquote class="font-display text-2xl md:text-4xl font-light leading-snug text-ac-black italic">
        &ldquo;Comfort is not a luxury.<br>And maturity doesn't need loud prints.&rdquo;
      </blockquote>
      <p class="text-ac-muted text-lg leading-relaxed max-w-xl mx-auto">
        Every morning starts with a routine. Shower. Coffee. Shirt. Go. You don't think about your underwear. And that's exactly the point.
      </p>
      <a href="/pages/about.html" class="inline-flex items-center gap-2 text-sm text-ac-teal hover:text-ac-forest transition-colors tracking-wide">
        Read our full story
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-forest text-ac-white text-center">
    <div class="max-w-3xl mx-auto space-y-8 fade-in">
      <h2 class="font-display text-3xl md:text-5xl font-light">
        Ready for better?
      </h2>
      <p class="text-white/70 text-lg">
        &euro;16 per boxer. Every 6 weeks. Cancel anytime.
      </p>
      <a href="/pages/product.html" class="inline-flex items-center gap-3 px-10 py-4 bg-ac-white text-ac-black text-sm tracking-wide hover:bg-ac-suede hover:text-ac-white transition-colors duration-300">
        Start your subscription
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
      </a>
    </div>
  </section>

  ${getFooter()}
`

initHeader()

// Fade in observer
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
