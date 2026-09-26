import { Link } from '@tanstack/react-router'

import { company } from '../site'

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

export function ContactBand({
  title = 'Tell us what is not working',
  body = 'Send a message on WhatsApp, call the office or write an email. We reply with next steps, not a sales script.',
}: {
  title?: string
  body?: string
}) {
  return (
    <div className="section">
      <div className="wrap">
        <h2 data-reveal>{title}</h2>
        <p>{body}</p>
        <div className="action-row">
          <a className="btn btn-primary" href={company.whatsapp}>
            Chat on WhatsApp
          </a>
          <a className="btn btn-ghost" href={company.phoneHref}>
            Call the office
          </a>
          <Link className="btn btn-ghost" to="/contact">
            All contact options
          </Link>
        </div>
      </div>
    </div>
  )
}
