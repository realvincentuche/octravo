import { useCallback, useEffect, useRef, useState } from 'react'

import { company, heroSlides } from '../site'

export function HeroSlider() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const timer = useRef<number | null>(null)

  const go = useCallback((dir: 1 | -1) => {
    setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length)
  }, [])

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

  return (
    <div
      className="hero-slider"
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
        <div className="hero-shade" />
      </div>

      <div className="hero-content" key={index}>
        <span className="kicker on-dark">{slide.kicker}</span>
        <h1>{slide.title}</h1>
        <p>{slide.body}</p>
        <div className="action-row">
          <a className="btn btn-primary" href={company.whatsapp}>
            Chat on WhatsApp
          </a>
          <a className="btn btn-ghost on-dark" href="/services">
            See services
          </a>
        </div>
      </div>

      <div className="hero-arrows">
        <button type="button" aria-label="Previous slide" onClick={() => go(-1)}>
          ‹
        </button>
        <button type="button" aria-label="Next slide" onClick={() => go(1)}>
          ›
        </button>
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
