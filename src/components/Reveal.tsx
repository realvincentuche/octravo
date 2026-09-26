import { useEffect } from 'react'

export function Reveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-visible)'),
    )
    if (targets.length === 0) return
    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      targets.forEach((t) => t.classList.add('is-visible'))
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
      { threshold: 0.2 },
    )
    targets.forEach((t) => observer.observe(t))
    return () => observer.disconnect()
  }, [])

  return <>{children}</>
}

export function RevealHeading({
  level = 2,
  children,
}: {
  level?: 2 | 3
  children: React.ReactNode
}) {
  const Tag = level === 3 ? 'h3' : 'h2'
  return <Tag data-reveal>{children}</Tag>
}
