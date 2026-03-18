import '../style.css'
import { getHeader, initHeader } from '../components/header'
import { getFooter } from '../components/footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  ${getHeader('contact')}

  <section class="py-20 md:py-32 px-6 md:px-16 bg-ac-white">
    <div class="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-16">
      <div class="space-y-8 reveal">
        <div>
          <p class="text-[11px] uppercase tracking-[0.35em] text-ac-muted mb-4">Contact</p>
          <h1 class="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-light italic text-ac-black">
            Get in touch
          </h1>
        </div>
        <p class="text-ac-muted text-lg leading-relaxed">
          Questions about sizing, subscriptions, or anything else? We're here.
        </p>

        <div class="space-y-6 pt-4">
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-ac-border flex-shrink-0">
              <svg class="w-5 h-5 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
            </div>
            <div>
              <p class="text-sm font-medium text-ac-black">Email</p>
              <a href="mailto:hello@annecliff.com" class="text-ac-muted text-sm hover:text-ac-teal transition-colors">hello@annecliff.com</a>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-ac-border flex-shrink-0">
              <svg class="w-5 h-5 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            </div>
            <div>
              <p class="text-sm font-medium text-ac-black">Location</p>
              <p class="text-ac-muted text-sm">Amsterdam, The Netherlands</p>
            </div>
          </div>
          <div class="flex items-start gap-4">
            <div class="w-10 h-10 flex items-center justify-center border border-ac-border flex-shrink-0">
              <svg class="w-5 h-5 text-ac-teal" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            </div>
            <div>
              <p class="text-sm font-medium text-ac-black">Response time</p>
              <p class="text-ac-muted text-sm">Within 24 hours on business days</p>
            </div>
          </div>
        </div>
      </div>

      <div class="reveal reveal-delay-2">
        <form class="space-y-6 bg-ac-cream fabric-texture p-8 md:p-10" onsubmit="event.preventDefault(); alert('Demo site — form submission disabled')">
          <div>
            <label class="block text-xs uppercase tracking-widest text-ac-muted mb-2">Name</label>
            <input type="text" class="w-full px-4 py-3 bg-ac-white border border-ac-border text-ac-black focus:outline-none focus:border-ac-black transition-colors" placeholder="Your name" />
          </div>
          <div>
            <label class="block text-xs uppercase tracking-widest text-ac-muted mb-2">Email</label>
            <input type="email" class="w-full px-4 py-3 bg-ac-white border border-ac-border text-ac-black focus:outline-none focus:border-ac-black transition-colors" placeholder="you@email.com" />
          </div>
          <div>
            <label class="block text-xs uppercase tracking-widest text-ac-muted mb-2">Subject</label>
            <select class="w-full px-4 py-3 bg-ac-white border border-ac-border text-ac-muted focus:outline-none focus:border-ac-black transition-colors">
              <option>Sizing question</option>
              <option>Subscription inquiry</option>
              <option>Return / exchange</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label class="block text-xs uppercase tracking-widest text-ac-muted mb-2">Message</label>
            <textarea rows="5" class="w-full px-4 py-3 bg-ac-white border border-ac-border text-ac-black focus:outline-none focus:border-ac-black transition-colors resize-none" placeholder="Your message..."></textarea>
          </div>
          <button type="submit" class="w-full flex items-center justify-center gap-3 px-8 py-4 bg-ac-black text-ac-white text-sm tracking-wide hover:bg-ac-forest transition-colors duration-300">
            Send message
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </button>
        </form>
      </div>
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
