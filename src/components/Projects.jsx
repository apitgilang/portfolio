import { projects } from '../data/resume.js'
import { ArrowUpRight, Apple } from './Icons.jsx'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">03 — Selected Work</span>
          <h2 className="section__title">
            Apps shipped to real users on both stores.
          </h2>
        </div>

        <div className="projects__grid">
          {projects.map((p, i) => {
            const Wrapper = p.link ? 'a' : 'div'
            const linkProps = p.link
              ? { href: p.link, target: '_blank', rel: 'noreferrer' }
              : {}
            return (
              <Wrapper
                key={p.name}
                className={`project-card ${p.link ? 'project-card--link' : ''}`}
                data-reveal
                style={{ '--d': `${i * 70}ms` }}
                {...linkProps}
                aria-label={
                  p.link ? `${p.name} — open on the App Store` : p.name
                }
              >
                <div className="project-card__top">
                  <span className="project-card__category">{p.category}</span>
                  {p.link && (
                    <span className="project-card__store">
                      <Apple width={16} height={16} />
                      <ArrowUpRight width={16} height={16} />
                    </span>
                  )}
                </div>

                <h3 className="project-card__name">{p.name}</h3>
                <p className="project-card__desc">{p.description}</p>

                <ul className="project-card__tags">
                  {p.tags.map((t) => (
                    <li key={t} className="tag">
                      {t}
                    </li>
                  ))}
                </ul>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
