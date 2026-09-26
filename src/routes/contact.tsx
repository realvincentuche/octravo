import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon } from '../components/icons'
import { company, emailHref } from '../site'

export const Route = createFileRoute('/contact')({ component: Contact })

const channels = [
  {
    icon: 'chat',
    tone: 'tone-red',
    title: 'WhatsApp',
    body: 'Fastest for first contact. Tell us what you do and what is not working. Photos and voice notes welcome.',
    href: company.whatsapp,
    cta: 'Chat on WhatsApp',
    primary: true,
  },
  {
    icon: 'phone',
    tone: 'tone-gold',
    title: 'Call',
    body: 'Prefer to talk it through. Calls run Monday to Friday, 9am to 5pm West Africa Time.',
    href: company.phoneHref,
    cta: `Call ${company.phoneDisplay}`,
    primary: false,
  },
  {
    icon: 'mail',
    tone: 'tone-plum',
    title: 'Email',
    body: 'Best for detail. Include what you do, the problem, your timeline and any files that explain it.',
    href: emailHref,
    cta: 'Send the email',
    primary: false,
  },
] as const

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
          <SectionHead
            eyebrow="Channels"
            ghost="HI"
            title={
              <>
                Pick your <span className="hl">channel</span>
              </>
            }
          />
          <ul className="channel-list">
            {channels.map((channel) => (
              <li key={channel.title}>
                <div className={`card-icons ${channel.tone}`}>
                  <span className="card-badge">
                    <Icon name={channel.icon} size={24} />
                  </span>
                  <span className="card-ghost" aria-hidden="true">
                    <Icon name={channel.icon} size={120} />
                  </span>
                </div>
                <h3>{channel.title}</h3>
                <p>{channel.body}</p>
                <a
                  className={`btn ${channel.primary ? 'btn-primary' : 'btn-ghost'}`}
                  href={channel.href}
                >
                  {channel.cta}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section section-alt">
        <div className="wrap">
          <SectionHead
            eyebrow="Visit"
            ghost="HQ"
            title={
              <>
                Visit or <span className="hl">write</span>
              </>
            }
          />
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
