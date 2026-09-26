import { createFileRoute } from '@tanstack/react-router'

import { Reveal, RevealHeading } from '../components/Reveal'
import { Banner, ContactBand, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
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
          <div className="grid-2">
            {serviceClusters.map((cluster) => (
              <article className="card image-card" key={cluster.title}>
                <img src={cluster.image} alt="" loading="lazy" />
                <div className="card-body">
                  <RevealHeading level={3}>{cluster.title}</RevealHeading>
                  <p>{cluster.body}</p>
                  <ul>
                    {cluster.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
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
