import { Link } from '@tanstack/react-router'

import { banners, company } from '../site'

export function PageHeader({
  title,
  lede,
}: {
  title: string
  lede: string
}) {
  return (
    <div className="section">
      <div className="wrap">
        <h1>{title}</h1>
        <p className="lede">{lede}</p>
      </div>
    </div>
  )
}

export function Banner({
  title,
  lede,
  image,
  cta,
}: {
  title: string
  lede: string
  image: string
  cta?: boolean
}) {
  return (
    <div className="banner">
      <img src={image} alt="" loading="eager" fetchPriority="high" />
      <div className="banner-shade" aria-hidden="true" />
      <div className="wrap banner-inner">
        <span className="kicker on-dark">Octravo Limited</span>
        <h1>{title}</h1>
        <p>{lede}</p>
        {cta && (
          <div className="action-row">
            <a className="btn btn-primary" href={company.whatsapp}>
              Chat on WhatsApp
              <span className="arr" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost on-dark" href={company.phoneHref}>
              Call the office
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export { banners }

export function SectionHead({
  eyebrow,
  title,
  lede,
  ghost,
  center = false,
}: {
  eyebrow: string
  title: React.ReactNode
  lede?: string
  ghost?: string
  center?: boolean
}) {
  return (
    <div className={`sec-head${center ? ' sec-head-center' : ''}`} data-reveal>
      {ghost && (
        <span className="sec-ghost" aria-hidden="true">
          {ghost}
        </span>
      )}
      <span className="kicker">{eyebrow}</span>
      <h2>{title}</h2>
      {lede && <p className="lede">{lede}</p>}
    </div>
  )
}

export function ContactBand({
  title = 'Tell us what is not working',
  body = 'Send a message on WhatsApp, call the office or write an email. We reply with next steps, not a sales script.',
}: {
  title?: string
  body?: string
}) {
  return (
    <div className="cta-full">
      <img src={banners.cta} alt="" loading="lazy" />
      <div className="shade" aria-hidden="true" />
      <div className="orb orb-b" aria-hidden="true" />
      <div className="wrap cta-inner">
        <span className="kicker on-dark" data-reveal>
          Start here
        </span>
        <h2 data-reveal>{title}</h2>
        <p>{body}</p>
        <div className="action-row">
          <a className="btn btn-light" href={company.whatsapp}>
            Chat on WhatsApp
            <span className="arr" aria-hidden="true">→</span>
          </a>
          <a className="btn btn-ghost on-dark" href={company.phoneHref}>
            Call the office
          </a>
          <Link className="btn btn-ghost on-dark" to="/contact">
            All contact options
          </Link>
        </div>
      </div>
    </div>
  )
}
