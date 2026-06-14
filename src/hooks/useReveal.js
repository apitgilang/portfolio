import { useEffect } from 'react'

/**
 * Adds an `is-visible` class to any element with the `data-reveal` attribute
 * once it scrolls into view. Respects prefers-reduced-motion by revealing
 * everything immediately.
 */
export function useReveal() {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-reveal]'))
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduce || !('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
