import { profile, skills, specialties } from '../data/resume.js'
import { Sparkle } from './Icons.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">01 — About</span>
          <h2 className="section__title">
            Clean code, scalable architecture, shipped products.
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__lead" data-reveal>
            <p>{profile.summary}</p>
            <p>
              Proven track record of shipping apps to the App Store and Play
              Store and collaborating with cross-functional teams in fast-paced,
              remote-first environments.
            </p>

            <ul className="about__specialties">
              {specialties.map((s) => (
                <li key={s} className="about__specialty">
                  <Sparkle width={16} height={16} />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <div className="about__skills">
            {skills.map((group, i) => (
              <div
                className="skill-card"
                key={group.title}
                data-reveal
                style={{ '--d': `${i * 60}ms` }}
              >
                <h3 className="skill-card__title">{group.title}</h3>
                <ul className="skill-card__list">
                  {group.items.map((item) => (
                    <li key={item} className="chip">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
