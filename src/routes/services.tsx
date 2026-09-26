import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, ContactBand, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon, type IconName } from '../components/icons'
import { serviceClusters } from '../site'

export const Route = createFileRoute('/services')({ component: Services })

function Services() {
  useDocumentTitle('Services')

  return (
    <Reveal>
      <Banner
        title="Services that match your problem"
        lede="Start from the pain you feel. Each group below lists what we deliver and ends with a conversation, not a quote form."
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
          <div className="grid-2">
            {serviceClusters.map((cluster) => (
              <article className={`card ${cluster.tone}`} key={cluster.title}>
                <div className="card-icons">
                  <span className="card-badge">
                    <Icon name={cluster.icon as IconName} size={24} />
                  </span>
                  <span className="card-ghost" aria-hidden="true">
                    <Icon name={cluster.icon as IconName} size={120} />
                  </span>
                </div>
                <h3>{cluster.title}</h3>
                <p>{cluster.body}</p>
                <ul>
                  {cluster.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
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
