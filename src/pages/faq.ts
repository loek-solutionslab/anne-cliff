import '../style.css'
import { getHeader, initHeader } from '../components/header'
import { getFooter } from '../components/footer'

const faqs = [
  {
    q: 'What is Anne Cliff made of?',
    a: '95% Tencel&trade; Lyocell and 5% elastane. Tencel is a sustainably produced fiber from wood pulp &mdash; softer than cotton, more breathable, and naturally temperature-regulating. The elastane adds stretch without losing shape.'
  },
  {
    q: 'How does the subscription work?',
    a: 'Choose your size and your preferred delivery interval (every 6 weeks, 2 months, or 3 months). We ship a fresh boxer to your door. Pause or cancel anytime. No minimum commitment.'
  },
  {
    q: 'Why only one fit?',
    a: 'We believe in doing one thing exceptionally well. Instead of offering 10 mediocre options, we perfected one fit. Less choice, less hassle, better quality.'
  },
  {
    q: 'How does the pricing compare?',
    a: 'Our Tencel Lyocell is the same quality used by brands like CDLP (&euro;35/pair). We sell at &euro;16-18 because we cut out the middleman and keep things simple: one product, direct to you.'
  },
  {
    q: 'Can I try before subscribing?',
    a: 'Yes. You can order a single boxer first. If you like it (and you will), you can start your subscription afterwards.'
  },
  {
    q: 'What if the fit is wrong?',
    a: 'We have a detailed size guide to get it right the first time. If it doesn&rsquo;t fit, we&rsquo;ll exchange it &mdash; no questions asked.'
  },
  {
    q: 'How is it shipped?',
    a: 'In a letterbox-friendly package. No signing needed. The packaging is minimal, premium, and designed to fit through your mail slot.'
  },
  {
    q: 'Is it sustainable?',
    a: 'Tencel is biodegradable and produced in a closed-loop process that reuses 99% of solvents and water. Our packaging is recyclable. We&rsquo;re also working on a return &amp; recycle program.'
  },
  {
    q: 'Where is it produced?',
    a: 'Our boxers are manufactured in China with strict quality control. The Tencel fiber itself is produced by Lenzing AG in Austria.'
  },
]

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${getHeader('faq')}

  <section class="py-20 md:py-32 px-6 md:px-12 bg-ac-white">
    <div class="max-w-3xl mx-auto">
      <div class="text-center mb-16 fade-in">
        <p class="text-xs uppercase tracking-[0.2em] text-ac-muted mb-4">FAQ</p>
        <h1 class="font-display text-4xl md:text-6xl font-light text-ac-black">
          Frequently asked
        </h1>
      </div>

      <div class="space-y-0">
        ${faqs.map((faq, i) => `
          <div class="border-b border-ac-border fade-in fade-in-delay-${Math.min(i + 1, 4)}">
            <button class="faq-toggle w-full flex items-center justify-between py-6 text-left" data-index="${i}">
              <span class="font-display text-lg text-ac-black pr-8">${faq.q}</span>
              <svg class="faq-icon w-5 h-5 text-ac-muted flex-shrink-0 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 6v12m6-6H6"/>
              </svg>
            </button>
            <div class="faq-answer hidden pb-6">
              <p class="text-ac-muted leading-relaxed">${faq.a}</p>
            </div>
          </div>
        `).join('')}
      </div>

      <div class="text-center mt-16 fade-in">
        <p class="text-ac-muted mb-4">Still have questions?</p>
        <a href="/pages/contact.html" class="inline-flex items-center gap-3 px-8 py-4 bg-ac-black text-ac-white text-sm tracking-wide hover:bg-ac-forest transition-colors duration-300">
          Get in touch
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
        </a>
      </div>
    </div>
  </section>

  ${getFooter()}
`

initHeader()

// FAQ toggle
document.querySelectorAll('.faq-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling as HTMLElement
    const icon = btn.querySelector('.faq-icon') as HTMLElement
    const isOpen = !answer.classList.contains('hidden')

    // Close all
    document.querySelectorAll('.faq-answer').forEach(a => a.classList.add('hidden'))
    document.querySelectorAll('.faq-icon').forEach(i => (i as HTMLElement).style.transform = '')

    if (!isOpen) {
      answer.classList.remove('hidden')
      icon.style.transform = 'rotate(45deg)'
    }
  })
})

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
