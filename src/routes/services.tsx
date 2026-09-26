import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, ContactBand, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon, type IconName } from '../components/icons'
import { company, serviceClusters } from '../site'

export const Route = createFileRoute('/services')({ component: Services })

function Services() {
  useDocumentTitle('Services')

  return (
    <Reveal>
      <Banner
        title="Services that match your problem"
        lede="Start from the pain you feel. Each section below is a full group with its own photo, deliverables and next step."
        image={banners.services}
        cta
      />
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Service groups"
            ghost="DO"
            title={
              <>
                Four groups. <span className="hl">Twelve ways we help.</span>
              </>
            }
          />
          <div className="feature-list">
            {serviceClusters.map((cluster, i) => (
              <article
                className={`feature-row${i % 2 === 1 ? ' flip' : ''}`}
                key={cluster.title}
              >
                <div className="feature-media">
                  <img src={cluster.image} alt="" loading="lazy" />
                </div>
                <div className={cluster.tone}>
                  <div className="feature-num">0{i + 1}</div>
                  <div className="card-icons">
                    <span className="card-badge">
                      <Icon name={cluster.icon as IconName} size={26} />
                    </span>
                  </div>
                  <h3>{cluster.title}</h3>
                  <p>{cluster.body}</p>
                  <ul>
                    {cluster.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="action-row">
                    <a className="btn btn-primary" href={company.whatsapp}>
                      Discuss this
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
        title="Not sure which group fits"
        body="Describe the work that eats your week. We will tell you honestly whether software, automation, advice or nothing at all is the answer."
      />
    </Reveal>
  )
}
