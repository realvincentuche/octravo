import { Link, createFileRoute } from '@tanstack/react-router'

import { HeroSlider } from '../components/HeroSlider'
import { Reveal } from '../components/Reveal'
import { ContactBand, SectionHead } from '../components/Sections'
import { Stats } from '../components/Stats'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon, type IconName } from '../components/icons'
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
          <SectionHead
            eyebrow="What we do"
            ghost="BUILD"
            title={
              <>
                Pick the problem. <span className="hl">We bring the system.</span>
              </>
            }
            lede="Twelve service areas in four groups. Every card below is real work we ship."
          />
          <div className="grid-2">
            {serviceClusters.map((cluster) => (
              <article className="card image-card" key={cluster.title}>
                <img src={cluster.image} alt="" loading="lazy" />
                <div className={`card-body ${cluster.tone}`}>
                  <div className="card-icons">
                    <span className="card-badge">
                      <Icon name={cluster.icon as IconName} size={24} />
                    </span>
                  </div>
                  <h3>{cluster.title}</h3>
                  <p>{cluster.body}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="action-row">
            <Link className="btn btn-primary" to="/services">
              Full service list
              <span className="arr" aria-hidden="true">→</span>
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
            <SectionHead
              eyebrow="Why Octravo"
              ghost="TEAM"
              title={
                <>
                  One team from <span className="hl">idea to support</span>
                </>
              }
              lede="We study your workflow before we write code. You get docs, access and training. And one number to call after launch."
            />
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
          <SectionHead
            eyebrow="Products"
            ghost="LIVE"
            title={
              <>
                Software you can <span className="hl">use today</span>
              </>
            }
            lede="Client work taught us which problems repeat. We turned two of them into products."
          />
          <div className="grid-2">
            {products.map((product) => (
              <article className="product-hero-card" key={product.name}>
                <img src={product.image} alt="" loading="lazy" />
                <div className="shade" aria-hidden="true" />
                <div className="card-body">
                  <span className="product-icon">
                    <Icon name={product.icon as IconName} size={24} />
                  </span>
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
                      <span className="arr" aria-hidden="true">→</span>
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
          <SectionHead
            eyebrow="Process"
            ghost="HOW"
            title={
              <>
                Six steps. <span className="hl">No surprises.</span>
              </>
            }
          />
          <ol className="steps">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <div className="step-top">
                  <span className="step-pill">Step {i + 1}</span>
                  <span className="step-icon">
                    <Icon name={step.icon as IconName} size={22} />
                  </span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section section-alt">
        <div className="wrap">
          <SectionHead
            eyebrow="In the field"
            ghost="FIELD"
            title={
              <>
                Teams, tools and <span className="hl">real desks</span>
              </>
            }
          />
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
