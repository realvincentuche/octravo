import { Link, createFileRoute } from '@tanstack/react-router'

import { OMark } from '../components/OMark'
import { Reveal, RevealHeading } from '../components/Reveal'
import { ContactBand } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { company, processSteps, products, serviceClusters } from '../site'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  useDocumentTitle('Practical software, AI and automation')

  return (
    <Reveal>
      <div className="hero">
        <div className="wrap hero-grid">
          <div className="hero-fade">
            <h1>Software that fixes how your business runs</h1>
            <p className="lede">
              Octravo designs and builds websites, web apps, AI assistants and
              automation for small and medium businesses. Practical systems,
              built in Lagos, supported after launch.
            </p>
            <div className="action-row">
              <a className="btn btn-primary" href={company.whatsapp}>
                Chat on WhatsApp
              </a>
              <Link className="btn btn-ghost" to="/services">
                See services
              </Link>
            </div>
          </div>
          <div className="hero-mark" aria-hidden="true">
            <OMark animated />
          </div>
        </div>
      </div>

      <div className="section section-alt">
        <div className="wrap">
          <RevealHeading>One team from idea to support</RevealHeading>
          <div className="grid-3">
            <div className="card">
              <h3>Business first</h3>
              <p>
                We study your workflow before we write code, so the system fits
                the work instead of forcing new habits.
              </p>
            </div>
            <div className="card">
              <h3>Built to hand over</h3>
              <p>
                You get docs, access and training. Your team can run the system
                with or without us.
              </p>
            </div>
            <div className="card">
              <h3>Supported after launch</h3>
              <p>
                We monitor, fix and improve. One call covers updates, issues
                and small changes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <RevealHeading>What we can build for you</RevealHeading>
          <p>
            Twelve service areas, grouped by the problem they fix. Start with
            the group that matches your pain.
          </p>
          <div className="grid-2">
            {serviceClusters.map((cluster) => (
              <div className="card cluster-card" key={cluster.title}>
                <h3>{cluster.title}</h3>
                <p>{cluster.body}</p>
              </div>
            ))}
          </div>
          <div className="action-row">
            <Link className="btn btn-ghost" to="/services">
              Full service list
            </Link>
          </div>
        </div>
      </div>

      <div className="section section-alt">
        <div className="wrap">
          <RevealHeading>Software you can use today</RevealHeading>
          <p>
            Alongside client work, we run our own products for recurring needs.
          </p>
          <div className="grid-2">
            {products.map((product) => (
              <div className="card" key={product.name}>
                <div className="product-frame" role="img" aria-label={`${product.name} preview placeholder`}>
                  Preview image coming soon
                </div>
                <h3>{product.name}</h3>
                <p>{product.body}</p>
                <div className="action-row">
                  <a
                    className="btn btn-ghost"
                    href={product.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {product.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>
          <div className="action-row">
            <Link className="btn btn-ghost" to="/products">
              About the products
            </Link>
          </div>
        </div>
      </div>

      <div className="section">
        <div className="wrap">
          <RevealHeading>How a project runs</RevealHeading>
          <p>
            Six steps, in order. You always know what happens next and what we
            need from you.
          </p>
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
          <RevealHeading>Octravo at a glance</RevealHeading>
          <dl className="facts">
            <div>
              <dt>Company</dt>
              <dd>Octravo Limited, a private technology company</dd>
            </div>
            <div>
              <dt>Base</dt>
              <dd>Oregun, Lagos, Nigeria. Serves clients across Africa</dd>
            </div>
            <div>
              <dt>Services</dt>
              <dd>Websites, web apps, custom software, AI, automation, integrations and support</dd>
            </div>
            <div>
              <dt>Products</dt>
              <dd>CVToEdge for job seekers, Octravo Assistant for businesses</dd>
            </div>
          </dl>
          <div className="action-row">
            <Link className="btn btn-ghost" to="/about">
              More about us
            </Link>
          </div>
        </div>
      </div>

      <ContactBand />
    </Reveal>
  )
}
