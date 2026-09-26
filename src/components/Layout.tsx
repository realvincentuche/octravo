import { Link, useLocation } from '@tanstack/react-router'
import { useState } from 'react'

import { company, nav } from '../site'

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const [open, setOpen] = useState(false)

  return (
    <div className="shell">
      <a className="skip-link" href="#main">
        Skip to main content
      </a>
      <header className="site-header">
        <div className="wrap header-bar">
          <Link to="/" className="brand-link" aria-label="Octravo home">
            <img
              src="/logo.png"
              alt=""
              width={76}
              height={76}
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
                  src="/logo.png"
                  alt=""
                  width={76}
                  height={76}
                  className="brand-logo"
                />
                <span>Octravo</span>
              </span>
              <p>{company.tagline}.</p>
              <p>{company.address}.</p>
            </div>
            <nav aria-label="Footer">
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
            <div>
              <ul className="footer-nav">
                <li>
                  <a href={company.whatsapp}>WhatsApp: {company.phoneDisplay}</a>
                </li>
                <li>
                  <a href={company.phoneHref}>Call: {company.phoneDisplay}</a>
                </li>
                <li>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </li>
                <li>
                  <a
                    href="https://cvtoedge.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    CVToEdge
                  </a>
                </li>
                <li>
                  <a
                    href="https://assistant.octravo.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Octravo Assistant
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-base">
            <span>© Octravo Limited</span>
            <span>{company.registration}</span>
            <span>{company.website}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
