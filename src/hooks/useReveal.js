import { useEffect } from 'react'

// Agrega la clase .in a cada .rv cuando entra en pantalla, escalonando hermanos 70 ms.
export default function useReveal(deps = []) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const items = [...document.querySelectorAll('.rv:not(.in)')]
    if (reduce || !('IntersectionObserver' in window)) {
      items.forEach(n => n.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (!e.isIntersecting) return
          const sibs = [...e.target.parentNode.children].filter(n => n.classList.contains('rv'))
          const i = Math.max(0, sibs.indexOf(e.target))
          e.target.style.transitionDelay = `${i * 70}ms`
          e.target.classList.add('in')
          io.unobserve(e.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.08 },
    )
    items.forEach(n => io.observe(n))
    return () => io.disconnect()
  }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}
