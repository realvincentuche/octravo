import { Link, createFileRoute } from '@tanstack/react-router'

import { HeroSlider } from '../components/HeroSlider'
import { Reveal, RevealHeading } from '../components/Reveal'
import { ContactBand } from '../components/Sections'
import { Stats } from '../components/Stats'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { company, gallery, industries, processSteps, products, serviceClusters } from '../site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  useDocumentTitle('Practical software, AI and automation')

  return (
    <Reveal>
      <HeroSlider />

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {industries.concat(industries).map((name, i) => (
            <span key={`${name}-${i}`}>{name} ✦</span>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <Stats />
        </div>
      </div>

      <div className="section section-alt" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <span className="kicker">What we do</span>
          <RevealHeading>Pick the problem. We bring the system.</RevealHeading>
          <p className="lede">
            Twelve service areas in four groups. Every card below is real work
            we ship, with photos from the kind of teams we serve.
          </p>
          <div className="grid-2">
            {serviceClusters.map((cluster) => (
              <article className="card image-card" key={cluster.title}>
                <img src={cluster.image} alt="" loading="lazy" />
                <div className="card-body">
                  <h3>{cluster.title}</h3>
                  <p>{cluster.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="action-row">
            <Link className="btn btn-primary" to="/services">
              Full service list
            </Link>
            <a className="btn btn-ghost" href={company.whatsapp}>
              Ask which fits me
            </a>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap split">
          <div>
            <span className="kicker">Why Octravo</span>
            <RevealHeading>One team from idea to support</RevealHeading>
            <p className="lede">
              We study your workflow before we write code. You get docs, access
              and training. And one number to call after launch.
            </p>
            <ul className="plain-list">
              <li>Business first. The system fits the work, not the reverse.</li>
              <li>Built to hand over. Your team can run it with or without us.</li>
              <li>Supported after launch. Updates, issues and small changes.</li>
            </ul>
            <div className="action-row">
              <Link className="btn btn-ghost" to="/about">
                More about us
              </Link>
            </div>
          </div>
          <div className="split-media">
            <img
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=70"
              alt="Two colleagues planning around a laptop"
              loading="lazy"
            />
            <div className="float-chip">Based in Lagos. Built for growth.</div>
          </div>
        </div>
      </div>

      <div className="section section-ink">
        <div className="wrap">
          <span className="kicker on-dark">Products</span>
          <RevealHeading>Software you can use today</RevealHeading>
          <p className="lede">
            Client work taught us which problems repeat. We turned two of them
            into products.
          </p>
          <div className="grid-2">
            {products.map((product) => (
              <article className="product-hero-card" key={product.name}>
                <img src={product.image} alt="" loading="lazy" />
                <div className="shade" aria-hidden="true" />
                <div className="card-body">
                  <span className="kicker on-dark">{product.tag}</span>
                  <h3 style={{ color: '#fff', fontSize: '1.6rem' }}>{product.name}</h3>
                  <p>{product.body}</p>
                  <div className="action-row">
                    <a
                      className="btn btn-light"
                      href={product.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {product.cta}
                    </a>
                    <Link className="btn btn-ghost on-dark" to="/products">
                      Learn more
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <span className="kicker">Process</span>
          <RevealHeading>Six steps. No surprises.</RevealHeading>
          <ol className="steps">
            {processSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section section-alt">
        <div className="wrap">
          <span className="kicker">In the field</span>
          <RevealHeading>Teams, tools and real desks</RevealHeading>
          <div className="gallery-strip">
            {gallery.map((g) => (
              <img key={g.image} src={g.image} alt={g.alt} loading="lazy" />
            ))}
          </div>
        </div>
      </div>

      <ContactBand />
    </Reveal>
  )
}
