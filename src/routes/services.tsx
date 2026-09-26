import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, ContactBand, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon, type IconName } from '../components/icons'
import { services, serviceWhats } from '../site'

export const Route = createFileRoute('/services')({ component: Services })

function Services() {
  useDocumentTitle('Services')

  return (
    <Reveal>
      <Banner
        title="Services that match your problem"
        lede="Twelve service areas, each with real deliverables. Start from the pain you feel and end with a conversation, not a quote form."
        image={banners.services}
        cta
      />
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="All services"
            ghost="DO"
            title={
              <>
                Twelve ways <span className="hl">we help</span>
              </>
            }
          />
          <div className="feature-list">
            {services.map((service, i) => (
              <article
                className={`feature-row${i % 2 === 1 ? ' flip' : ''}`}
                key={service.title}
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
