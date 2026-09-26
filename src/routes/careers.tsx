import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon } from '../components/icons'
import { company, role, roleApplyHref } from '../site'

export const Route = createFileRoute('/careers')({ component: Careers })

function Careers() {
  useDocumentTitle('Careers')

  return (
    <Reveal>
      <Banner
        title="One open role"
        lede="We hire slowly and deliberately. Right now there is a single seat that matters more than any other."
        image={banners.careers}
        cta
      />
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Open role"
            ghost="JOIN"
            title={
              <>
                {role.title} <span className="hl">wanted</span>
              </>
            }
          />
          <article className="card tone-red">
            <div className="card-icons">
              <span className="card-badge">
                <Icon name="users" size={24} />
              </span>
              <span className="card-ghost" aria-hidden="true">
                <Icon name="users" size={120} />
              </span>
            </div>
            <h3>{role.title}</h3>
            <p className="lede">{role.summary}</p>
            <dl className="facts">
              <div>
                <dt>Location</dt>
                <dd>{role.location}</dd>
              </div>
              <div>
                <dt>Work mode</dt>
                <dd>{role.mode}</dd>
              </div>
              <div>
                <dt>Employment</dt>
                <dd>{role.type}</dd>
              </div>
              <div>
                <dt>Closing</dt>
                <dd>{role.closeNote}</dd>
              </div>
            </dl>
          </article>
        </div>
      </div>
      <div className="section section-alt">
        <div className="wrap">
          <SectionHead
            eyebrow="Duties"
            ghost="DO"
            title={
              <>
                What you will <span className="hl">do</span>
              </>
            }
          />
          <ul className="plain-list">
            {role.duties.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="Requirements"
            ghost="YOU"
            title={
              <>
                What you <span className="hl">bring</span>
              </>
            }
          />
          <ul className="plain-list">
            {role.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1.5rem' }}>{role.task}</p>
          <div className="action-row">
            <a className="btn btn-primary" href={roleApplyHref}>
              Apply by email
              <span className="arr" aria-hidden="true">→</span>
            </a>
            <a className="btn btn-ghost" href={company.whatsapp}>
              Ask about the role
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
