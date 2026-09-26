import { Link, createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, ContactBand, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon, type IconName } from '../components/icons'
import { company, industries, values } from '../site'

export const Route = createFileRoute('/about')({ component: About })

function About() {
  useDocumentTitle('About')

  return (
    <Reveal>
      <Banner
        eyebrow="Who we are"
        title="Business minds that build software"
        lede="We started Octravo to close the gap between business needs and usable technology. Workflow first, code second, support always."
        image={banners.about}
        tone={3}
        primary={{ label: 'See what we do', href: '/services' }}
        secondary={{ label: 'Talk to us', to: '/contact' }}
      />
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Values"
            ghost="WHY"
            title={
              <>
                What we <span className="hl">believe</span>
              </>
            }
          />
          <div className="grid-3">
            {values.map((value) => (
              <div className={`card ${value.tone}`} key={value.title}>
                <div className="card-icons">
                  <span className="card-badge">
                    <Icon name={value.icon as IconName} size={24} />
                  </span>
                  <span className="card-ghost" aria-hidden="true">
                    <Icon name={value.icon as IconName} size={120} />
                  </span>
                </div>
                <h3>{value.title}</h3>
                <p>{value.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="section section-alt">
        <div className="wrap">
          <SectionHead
            eyebrow="Structure"
            ghost="TWO"
            title={
              <>
                Two sides of <span className="hl">one company</span>
              </>
            }
          />
          <div className="grid-2">
            <div className="card tone-red">
              <div className="card-icons">
                <span className="card-badge">
                  <Icon name="sliders" size={24} />
                </span>
                <span className="card-ghost" aria-hidden="true">
                  <Icon name="sliders" size={120} />
                </span>
              </div>
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
            <div className="card tone-gold">
              <div className="card-icons">
                <span className="card-badge">
                  <Icon name="rocket" size={24} />
                </span>
                <span className="card-ghost" aria-hidden="true">
                  <Icon name="rocket" size={120} />
                </span>
              </div>
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
        <div className="wrap split">
          <div>
            <SectionHead
              eyebrow="Customers"
              ghost="WHO"
              title={
                <>
                  Who we <span className="hl">serve</span>
                </>
              }
              lede="Our work fits any team where software, automation or better customer communication moves the needle."
            />
            <ul className="plain-list">
              {industries.map((industry) => (
                <li key={industry}>{industry}</li>
              ))}
            </ul>
          </div>
          <div className="split-media">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=70"
              alt="Team members working together around a table"
              loading="lazy"
            />
            <div className="float-chip">Eleven industries. One approach.</div>
          </div>
        </div>
      </div>
      <div className="section section-alt">
        <div className="wrap">
          <SectionHead
            eyebrow="Facts"
            ghost="RC"
            title={
              <>
                Company <span className="hl">facts</span>
              </>
            }
          />
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
