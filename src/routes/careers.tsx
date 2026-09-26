import { createFileRoute } from '@tanstack/react-router'

import { Reveal, RevealHeading } from '../components/Reveal'
import { PageHeader } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { company, role, roleApplyHref } from '../site'

export const Route = createFileRoute('/careers')({ component: Careers })

function Careers() {
  useDocumentTitle('Careers')

  return (
    <Reveal>
      <PageHeader
        title="One open role"
        lede="We hire slowly and deliberately. Right now there is a single seat that matters more than any other."
      />
      <div className="section">
        <div className="wrap">
          <article className="card">
            <RevealHeading level={3}>{role.title}</RevealHeading>
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
          <RevealHeading>What you will do</RevealHeading>
          <ul className="plain-list">
            {role.duties.map((duty) => (
              <li key={duty}>{duty}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="section">
        <div className="wrap">
          <RevealHeading>What you need to bring</RevealHeading>
          <ul className="plain-list">
            {role.requirements.map((requirement) => (
              <li key={requirement}>{requirement}</li>
            ))}
          </ul>
          <p style={{ marginTop: '1.5rem' }}>{role.task}</p>
          <div className="action-row">
            <a className="btn btn-primary" href={roleApplyHref}>
              Apply by email
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
