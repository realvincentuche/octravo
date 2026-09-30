import { createFileRoute } from '@tanstack/react-router'

import { Reveal } from '../components/Reveal'
import { Banner, ContactBand, SectionHead, banners } from '../components/Sections'
import { useDocumentTitle } from '../components/useDocumentTitle'
import { Icon } from '../components/icons'
import { role, roleApplyHref, roleWhats } from '../site'

export const Route = createFileRoute('/careers')({ component: Careers })

function Careers() {
  useDocumentTitle('Careers')

  return (
    <Reveal>
      <Banner
        eyebrow="Careers"
        title="Work at Octravo."
        lede="Small team, real customers, work that ships. Here is what it is like here, and what we are hiring for right now."
        image={banners.careers}
        tone={0}
        primary={{ label: 'See open roles', href: '#open-roles' }}
        secondary={{ label: 'Talk to us', to: '/contact' }}
      />
      <div className="section">
        <div className="wrap">
          <SectionHead
            eyebrow="The team"
            ghost="TEAM"
            title={
              <>
                Small team, <span className="hl">real work.</span>
              </>
            }
            lede="We build websites, software, automation and AI tools for businesses that need them to work. No layers, no theatre. You talk to customers directly, you watch your work go live, and you learn fast because there is nowhere to hide."
          />
          <div className="grid-3">
            <article className="card tone-red">
              <div className="card-icons">
                <span className="card-badge">
                  <Icon name="users" size={24} />
                </span>
              </div>
              <h3>Customers, not tickets</h3>
              <p>
                You speak to the people who use what we build. Feedback arrives
                unfiltered, and good ideas ship quickly.
              </p>
            </article>
            <article className="card tone-gold">
              <div className="card-icons">
                <span className="card-badge">
                  <Icon name="rocket" size={24} />
                </span>
              </div>
              <h3>Work that goes live</h3>
              <p>
                Projects leave the laptop and run in real businesses. Your name
                is on things people rely on every day.
              </p>
            </article>
            <article className="card tone-plum">
              <div className="card-icons">
                <span className="card-badge">
                  <Icon name="bulb" size={24} />
                </span>
              </div>
              <h3>Room to grow</h3>
              <p>
                You will pick up sales, marketing and technology side by side.
                Curiosity counts for more than credentials here.
              </p>
            </article>
          </div>
        </div>
      </div>
      <div className="section section-alt" id="open-roles" style={{ scrollMarginTop: '90px' }}>
        <div className="wrap">
          <SectionHead
            eyebrow="Open roles"
            ghost="JOIN"
            title={
              <>
                What we are <span className="hl">hiring for.</span>
              </>
            }
            lede="This is the full picture for the role open at the moment. If it sounds like you, apply below."
          />
          <article className="card tone-red">
            <div className="card-icons">
              <span className="card-badge">
                <Icon name="flag" size={24} />
              </span>
              <span className="card-ghost" aria-hidden="true">
                <Icon name="flag" size={120} />
              </span>
            </div>
            <h3>{role.title}</h3>
            <p className="lede">{role.summary}</p>
            <dl className="facts">
              <div>
                <dt>Employment</dt>
                <dd>{role.type}</dd>
              </div>
              <div>
                <dt>Work mode</dt>
                <dd>{role.mode}</dd>
              </div>
              <div>
                <dt>Closing</dt>
                <dd>{role.closeNote}</dd>
              </div>
            </dl>
            <h4 className="role-sub">Responsibilities</h4>
            <ul className="plain-list">
              {role.duties.map((duty) => (
                <li key={duty}>{duty}</li>
              ))}
            </ul>
            <h4 className="role-sub">Requirements</h4>
            <ul className="plain-list">
              {role.requirements.map((requirement) => (
                <li key={requirement}>{requirement}</li>
              ))}
            </ul>
            <p style={{ marginTop: '1.25rem' }}>{role.advantage}</p>
            <h4 className="role-sub">How to apply</h4>
            <p>
              Send your CV and a short note on why you fit this role to{' '}
              <a href={roleApplyHref}>{role.applyEmail}</a> with the subject{' '}
              "{role.applySubject}".
            </p>
            <div className="action-row">
              <a className="btn btn-primary" href={roleApplyHref}>
                Apply by email
                <span className="arr" aria-hidden="true">→</span>
              </a>
              <a className="btn btn-ghost" href={roleWhats(role.title)}>
                Ask about the role
              </a>
            </div>
          </article>
        </div>
      </div>
      <ContactBand
        title="Nothing for you right now"
        body="Roles open and close as the team grows. Send your CV to careers@octravo.com anyway and tell us what you do well. We read everything."
      />
    </Reveal>
  )
}
