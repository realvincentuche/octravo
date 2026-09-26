import { createFileRoute } from '@tanstack/react-router'

import { Reveal, RevealHeading } from '../components/Reveal'
import { ContactBand, PageHeader } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { products } from '../site'

export const Route = createFileRoute('/products')({ component: Products })

function Products() {
  useDocumentTitle('Products')

  return (
    <Reveal>
      <PageHeader
        title="Products we run ourselves"
        lede="Client work taught us which problems repeat. We turned two of them into software anyone can use."
      />
      <div className="section">
        <div className="wrap">
          <div className="grid-2">
            {products.map((product) => (
              <article className="card" key={product.name}>
                <div
                  className="product-frame"
                  role="img"
                  aria-label={`${product.name} preview placeholder`}
                >
                  Preview image coming soon
                </div>
                <RevealHeading level={3}>{product.name}</RevealHeading>
                <p>
                  <strong>{product.tag}.</strong> {product.body}
                </p>
                <ul className="plain-list">
                  {product.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="action-row">
                  <a
                    className="btn btn-primary"
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {product.cta}
                  </a>
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
