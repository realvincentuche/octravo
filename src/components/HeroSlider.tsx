import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

import { heroSlides } from '../site'

function isExternal(href: string) {
  return href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')
}

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<number | null>(null)

  useEffect(() => {
    if (paused) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    timer.current = window.setTimeout(() => {
      setIndex((i) => (i + 1) % heroSlides.length)
    }, 6000)
    return () => {
      if (timer.current) window.clearTimeout(timer.current)
    }
  }, [index, paused])

  const slide = heroSlides[index]
  const align = index === 0 ? 'center' : index % 2 === 1 ? 'right' : 'left'
  const right = align === 'right'

  return (
    <div
      className={`hero-slider${right ? ' is-right' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="hero-track" aria-hidden="true">
        {heroSlides.map((s, i) => (
          <div
            key={s.title}
            className={`hero-slide${i === index ? ' is-active' : ''}`}
          >
            <img
              src={s.image}
              alt=""
              fetchPriority={i === 0 ? 'high' : undefined}
              loading={i === 0 ? 'eager' : 'lazy'}
            />
          </div>
        ))}
        <div className={`hero-shade tone-${slide.tone}`} />
      </div>
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />

      <div
        className={`hero-content${align === 'right' ? ' align-right' : align === 'center' ? ' align-center' : ''}`}
        key={index}
      >
        <div className="hero-inner">
          <span className="kicker on-dark">{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p>{slide.body}</p>
          <div className="action-row">
            {isExternal(slide.primary.href) ? (
              <a
                className="btn btn-primary"
                href={slide.primary.href}
                {...(slide.primary.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                {slide.primary.label}
                <span className="arr" aria-hidden="true">→</span>
              </a>
            ) : (
              <Link className="btn btn-primary" to={slide.primary.href}>
                {slide.primary.label}
                <span className="arr" aria-hidden="true">→</span>
              </Link>
            )}
            <Link className="btn btn-ghost on-dark" to={slide.secondary.to}>
              {slide.secondary.label}
              <span className="arr" aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="scroll-cue" aria-hidden="true">
        <span />
      </div>

      <div className="hero-dots" role="tablist" aria-label="Hero slides">
        {heroSlides.map((s, i) => (
          <button
            key={s.title}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-current={i === index}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
