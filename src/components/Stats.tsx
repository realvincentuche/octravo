import { useEffect, useRef, useState } from 'react'

import { stats } from '../site'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [n, setN] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setN(value)
      return
    }
    let raf = 0
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return
        observer.disconnect()
        const start = performance.now()
        const tick = (t: number) => {
          const p = Math.min(1, (t - start) / 1200)
          setN(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => {
      observer.disconnect()
      cancelAnimationFrame(raf)
    }
  }, [value])

  return (
    <div className="stat-num" ref={ref}>
      {n}
      {suffix}
    </div>
  )
}

export function Stats() {
  return (
    <div className="stats-plain">
      {stats.map((s) => (
        <div key={s.label}>
          <Counter value={s.value} suffix={s.suffix} />
          <p className="stat-label">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
