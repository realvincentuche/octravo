import { createFileRoute } from '@tanstack/react-router'

import { Reveal, RevealHeading } from '../components/Reveal'
import { Banner, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { company, emailHref } from '../site'

export const Route = createFileRoute('/contact')({ component: Contact })

function Contact() {
  useDocumentTitle('Contact')

  return (
    <Reveal>
      <Banner
        title="Talk to a person, fast"
        lede="No forms, no tickets, no waiting room. Pick the channel that suits you and we reply with next steps."
        image={banners.contact}
        cta
      />
      <div className="section">
        <div className="wrap">
          <ul className="channel-list">
            <li>
              <RevealHeading level={3}>WhatsApp</RevealHeading>
              <p>
                Fastest for first contact. Tell us what you do and what is not
                working. Photos and voice notes welcome.
              </p>
              <a className="btn btn-primary" href={company.whatsapp}>
                Chat on WhatsApp
              </a>
            </li>
            <li>
              <RevealHeading level={3}>Call</RevealHeading>
              <p>
                Prefer to talk it through. Calls run Monday to Friday, 9am to
                5pm West Africa Time.
              </p>
              <a className="btn btn-ghost" href={company.phoneHref}>
                Call {company.phoneDisplay}
              </a>
            </li>
            <li>
              <RevealHeading level={3}>Email</RevealHeading>
              <p>
                Best for detail. Include what you do, the problem, your timeline
                and any files that explain it.
              </p>
              <a className="btn btn-ghost" href={emailHref}>
                Send the email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="section section-alt">
        <div className="wrap">
          <RevealHeading>Visit or write</RevealHeading>
          <dl className="facts">
            <div>
              <dt>Office</dt>
              <dd>{company.address}</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>Monday to Friday, 9am to 5pm West Africa Time</dd>
            </div>
            <div>
              <dt>Response time</dt>
              <dd>Same business day for messages sent in hours</dd>
            </div>
            <div>
              <dt>First message guide</dt>
              <dd>What you do, what hurts, what good looks like, your timeline</dd>
            </div>
          </dl>
        </div>
      </div>
    </Reveal>
  )
}
