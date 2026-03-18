import './style.css'
import { initHeader } from './components/header'

document.addEventListener('DOMContentLoaded', () => {
  initHeader()
  initFadeIn()
})

function initFadeIn(): void {
  const elements = document.querySelectorAll('.fade-in')
  if (!elements.length) return

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
}
