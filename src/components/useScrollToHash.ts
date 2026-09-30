import { useEffect } from 'react'

// Scrolls to the element matching the current URL hash after navigation.
// Complements the router's scroll restoration: re-runs on hash change and
// defers past first paint so lazy images and reveal animations have settled.
export function useScrollToHash() {
  useEffect(() => {
    const scroll = () => {
      const hash = window.location.hash
      if (!hash) return
      const el = document.querySelector(hash)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

    const raf = requestAnimationFrame(() => {
      scroll()
      const timer = window.setTimeout(scroll, 150)
      return () => window.clearTimeout(timer)
    })

    window.addEventListener('hashchange', scroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('hashchange', scroll)
    }
  }, [])
}
