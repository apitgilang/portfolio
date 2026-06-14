import { profile } from '../data/resume.js'
import { Mail, ArrowUpRight, MapPin, LinkedIn, GitHub } from './Icons.jsx'

export default function Contact() {
  return (
    <section id="contact" className="section section--alt">
      <div className="container">
        <div className="contact" data-reveal>
          <div className="contact__glow" aria-hidden />
          <span className="section__eyebrow">04 — Contact</span>
          <h2 className="contact__title">
            Let's build something
            <br />
            worth shipping.
          </h2>
          <p className="contact__lead">
            Open to senior mobile roles, contract work, and Flutter / native
            migration projects. The fastest way to reach me is email.
          </p>

          <div className="contact__actions">
            <a href={`mailto:${profile.email}`} className="btn btn--lg">
              <Mail width={20} height={20} />
              {profile.email}
              <ArrowUpRight width={18} height={18} />
            </a>
          </div>

          <div className="contact__socials">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              <LinkedIn width={18} height={18} />
              LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="contact__social"
            >
              <GitHub width={18} height={18} />
              GitHub
            </a>
          </div>

          <p className="contact__location">
            <MapPin width={16} height={16} />
            {profile.location}
          </p>
        </div>
      </div>
    </section>
  )
}
