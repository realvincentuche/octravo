import { Link, useLocation } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

import { company, nav, services } from '../site'
import { Icon, type IconName } from './icons'

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="wrap header-bar">
          <Link to="/" className="brand-link" aria-label="Octravo home">
            <img
              src="/logo-white.png"
              alt="Octravo logo"
              width={88}
              height={88}
              className="brand-logo"
            />
            <span>Octravo</span>
          </Link>
          <button
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="site-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
          <nav
            id="site-nav"
            className="site-nav"
            data-open={open}
            aria-label="Primary"
          >
            <ul>
              {nav.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    aria-current={
                      location.pathname === item.to ? 'page' : undefined
                    }
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="nav-cta"
                  href={company.whatsapp}
                  onClick={() => setOpen(false)}
                >
                  Start a project
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main id="main">
        <div key={location.pathname} className="page-enter">
          {children}
        </div>
      </main>
      <footer className="site-footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <span className="footer-brand">
                <img
                  src="/logo-white.png"
                  alt="Octravo logo"
                  width={96}
                  height={96}
                  className="brand-logo"
                />
                <span>Octravo</span>
              </span>
              <p>{company.tagline}.</p>
              <p>{company.address}.</p>
              <div className="icon-row">
                <a
                  className="icon-btn"
                  href={company.whatsapp}
                  aria-label="Chat with Octravo on WhatsApp"
                >
                  <Icon name="chat" />
                </a>
                <a
                  className="icon-btn"
                  href={company.phoneHref}
                  aria-label={`Call Octravo on ${company.phoneDisplay}`}
                >
                  <Icon name="phone" />
                </a>
                <a
                  className="icon-btn"
                  href={`mailto:${company.email}`}
                  aria-label={`Email Octravo at ${company.email}`}
                >
                  <Icon name="mail" />
                </a>
              </div>
            </div>
            <nav aria-label="Footer">
              <p className="footer-title">Explore</p>
              <ul className="footer-nav">
                {nav.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to}>{item.label}</Link>
                  </li>
                ))}
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
              </ul>
            </nav>
            <nav aria-label="Services">
              <p className="footer-title">Services</p>
              <ul className="footer-nav">
                {services.map((service) => (
                  <li key={service.title}>
                    <Link to="/services">
                      <Icon name={service.icon as IconName} size={17} />
                      <span>{service.short}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <p className="footer-title">Reach us</p>
              <ul className="footer-nav">
                <li>
                  <a href={company.whatsapp}>
                    <Icon name="chat" size={17} />
                    <span>WhatsApp: {company.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={company.phoneHref}>
                    <Icon name="phone" size={17} />
                    <span>Call: {company.phoneDisplay}</span>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`}>
                    <Icon name="mail" size={17} />
                    <span>{company.email}</span>
                  </a>
                </li>
                <li>
                  <span
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                    }}
                  >
                    <Icon name="pin" size={17} />
                    <span>Oregun, Lagos, Nigeria</span>
                  </span>
                </li>
              </ul>
              <p className="footer-title" style={{ marginTop: '1.4rem' }}>
                Products
              </p>
              <ul className="footer-nav">
                <li>
                  <a
                    href="https://cvtoedge.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="doc" size={17} />
                    <span>CVToEdge</span>
                  </a>
                </li>
                <li>
                  <a
                    href="https://assistant.octravo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Icon name="cpu" size={17} />
                    <span>Octravo Assistant</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-ghost" aria-hidden="true">
            OCTRAVO
          </div>
          <div className="footer-base">
            <span>© Octravo Limited</span>
            <span>{company.registration}</span>
            <span>{company.website}</span>
            <a className="to-top" href="#main" aria-label="Back to top">
              <Icon name="up" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
