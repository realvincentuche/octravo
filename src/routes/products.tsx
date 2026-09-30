import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, ContactBand, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon, type IconName } from '../components/icons'
import { products, productWhats } from '../site'

export const Route = createFileRoute('/products')({ component: Products })

const tones = ['tone-red', 'tone-gold'] as const

function Products() {
  useDocumentTitle('Products')

  return (
    <Reveal>
      <Banner
        eyebrow="Live products"
        title="Software that already works"
        lede="Two products, running in the market today. One sharpens careers, the other answers customers. Try either in minutes."
        image={banners.products}
        tone={2}
        primary={{ label: 'Visit CVToEdge', href: 'https://cvtoedge.com' }}
        secondary={{ label: 'Talk to us', to: '/contact' }}
      />
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Live products"
            ghost="LIVE"
            title={
              <>
                Two products. <span className="hl">One standard.</span>
              </>
            }
            lede="Built to the same bar as client work. Practical, maintained and supported."
          />
          <div className="product-panels">
            {products.map((product, i) => (
              <article
                className={`product-panel${i % 2 === 1 ? ' flip' : ''}`}
                key={product.name}
              >
                <div className="panel-media">
                  <img src={product.image} alt={`${product.name} preview`} loading="lazy" />
                </div>
                <div className="panel-body">
                  <div className={`panel-top ${tones[i % tones.length]}`}>
                    <span className="card-badge">
                      <Icon name={product.icon as IconName} size={24} />
                    </span>
                    <span>
                      <span className="panel-tag">{product.tag}</span>
                      <h3 style={{ margin: 0 }}>{product.name}</h3>
                    </span>
                  </div>
                  <p>{product.body}</p>
                  <ul className="panel-points">
                    {product.points.map((point) => (
                      <li key={point}>
                        <Icon name="check" size={18} />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="panel-extra">{product.extra}</p>
                  <div className="action-row">
                    <a
                      className="btn btn-primary"
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.cta}
                      <span className="arr" aria-hidden="true">→</span>
                    </a>
                    <a className="btn btn-ghost" href={productWhats(product.name)}>
                      Ask about it
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      <ContactBand
        title="Need something similar for your business"
        body="If a product is close but not quite right, we adapt the idea into a system built for your workflow."
      />
    </Reveal>
  )
}
