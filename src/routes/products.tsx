import { createFileRoute } from '@tanstack/react-router'

import { Reveal, RevealHeading } from '../components/Reveal'
import { Banner, ContactBand, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { products } from '../site'

export const Route = createFileRoute('/products')({ component: Products })

function Products() {
  useDocumentTitle('Products')

  return (
    <Reveal>
      <Banner
        title="Products we run ourselves"
        lede="Client work taught us which problems repeat. We turned two of them into software anyone can use."
        image={banners.products}
        cta
      />
      <div className="section">
        <div className="wrap">
          <div className="grid-2">
            {products.map((product) => (
              <article className="product-hero-card" key={product.name}>
                <img src={product.image} alt="" loading="lazy" />
                <div className="shade" aria-hidden="true" />
                <div className="card-body">
                  <span className="kicker on-dark">{product.tag}</span>
                  <RevealHeading level={3}>
                    <span style={{ color: '#fff' }}>{product.name}</span>
                  </RevealHeading>
                  <p>{product.body}</p>
                  <ul className="plain-list" style={{ color: 'rgba(255,255,255,0.85)' }}>
                    {product.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                  <div className="action-row">
                    <a
                      className="btn btn-light"
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.cta}
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
