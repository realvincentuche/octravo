import { Link } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'

import { company, heroSlides } from '../site'

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
  const right = index % 2 === 1

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
        <div className="hero-shade" />
      </div>
      <div className="orb orb-a" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />

      <div
        className={`hero-content${right ? ' align-right' : ''}`}
        key={index}
      >
        <div className="hero-inner">
          <span className="kicker on-dark">{slide.kicker}</span>
          <h1>{slide.title}</h1>
          <p>{slide.body}</p>
          <div className="action-row">
            <a className="btn btn-primary" href={company.whatsapp}>
              Chat on WhatsApp
              <span className="arr" aria-hidden="true">→</span>
            </a>
            <Link className="btn btn-ghost on-dark" to="/services">
              See services
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
