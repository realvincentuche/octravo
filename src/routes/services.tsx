import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, ContactBand, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { useScrollToHash } from '../components/useScrollToHash'
import { Icon, type IconName } from '../components/icons'
import { company, services, serviceWhats } from '../site'

export const Route = createFileRoute('/services')({ component: Services })

function Services() {
  useDocumentTitle('Services')
  useScrollToHash()

  return (
    <Reveal>
      <Banner
        eyebrow="Services"
        title="Fix the work that eats your week"
        lede="Every group below is a full service area with its own photo, deliverables and next step. Start from the pain, end with a conversation."
        image={banners.services}
        tone={1}
        primary={{
          label: 'Chat on WhatsApp',
          href: company.whatsapp,
        }}
        secondary={{ label: 'All contact options', to: '/contact' }}
      />
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="All services"
            ghost="DO"
            title={
              <>
                Every way <span className="hl">we help</span>
              </>
            }
            lede="Browse each area, see what is inside, then discuss the one that matches your pain."
          />
          <div className="feature-list">
            {services.map((service, i) => (
              <article
                className={`feature-row${i % 2 === 1 ? ' flip' : ''}`}
                key={service.title}
                id={`service-${service.slug}`}
                style={{ scrollMarginTop: '90px' }}
              >
                <div className="feature-media">
                  <img src={service.image} alt="" loading="lazy" />
                </div>
                <div className={service.tone}>
                  <div className="card-icons">
                    <span className="card-badge">
                      <Icon name={service.icon as IconName} size={26} />
                    </span>
                  </div>
                  <h3>{service.title}</h3>
                  <p>{service.body}</p>
                  <ul>
                    {service.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="action-row">
                    <a
                      className="btn btn-primary"
                      href={serviceWhats(service.title)}
                    >
                      Discuss {service.short}
                      <span className="arr" aria-hidden="true">→</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <ContactBand
        title="Not sure which service fits"
        body="Describe the work that eats your week. We will tell you honestly whether software, automation, advice or nothing at all is the answer."
      />
    </Reveal>
  )
}
