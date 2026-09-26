import { Link, createFileRoute } from '@tanstack/react-router'

import { Reveal, RevealHeading } from '../components/Reveal'
import { Banner, ContactBand, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { company, industries, values } from '../site'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  useDocumentTitle('About')

  return (
    <Reveal>
      <Banner
        title="A technology partner, not a vendor"
        lede="Octravo exists because too many businesses buy software that ignores how they work. We start from the workflow, then choose the technology."
        image={banners.about}
        cta
      />
      <div className="section">
        <div className="wrap">
          <RevealHeading>What we believe</RevealHeading>
          <div className="grid-3">
            {values.map((value) => (
              <div className="card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section section-alt">
        <div className="wrap">
          <RevealHeading>Two sides of one company</RevealHeading>
          <div className="grid-2">
            <div className="card">
              <h3>Technology services</h3>
              <p>
                Custom software, websites, apps, AI, automation, integrations,
                deployment and support. Built for one client at a time, around
                real operations.
              </p>
              <div className="action-row">
                <Link className="btn btn-ghost" to="/services">
                  Browse services
                </Link>
              </div>
            </div>
            <div className="card">
              <h3>Software products</h3>
              <p>
                CVToEdge helps job seekers present their experience. Octravo
                Assistant helps businesses answer customers. Both run as
                subscriptions anyone can join.
              </p>
              <div className="action-row">
                <Link className="btn btn-ghost" to="/products">
                  Meet the products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="wrap">
          <RevealHeading>Who we serve</RevealHeading>
          <p>
            Our work fits any team where software, automation or better customer
            communication moves the needle. Recent demand comes from these
            corners.
          </p>
          <ul className="plain-list">
            {industries.map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section section-alt">
        <div className="wrap">
          <RevealHeading>Company facts</RevealHeading>
          <dl className="facts">
            <div>
              <dt>Legal name</dt>
              <dd>Octravo Limited, {company.registration}</dd>
            </div>
            <div>
              <dt>Head office</dt>
              <dd>{company.address}</dd>
            </div>
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </dd>
            </div>
            <div>
              <dt>Phone</dt>
              <dd>
                <a href={company.phoneHref}>{company.phoneDisplay}</a>
              </dd>
            </div>
            <div>
              <dt>Market</dt>
              <dd>Nigeria, expanding across Africa and beyond</dd>
            </div>
            <div>
              <dt>Hiring</dt>
              <dd>
                One open role. <Link to="/careers">See careers</Link>
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <ContactBand />
    </Reveal>
  )
}
