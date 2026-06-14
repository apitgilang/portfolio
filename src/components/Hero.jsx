import { profile, stats } from '../data/resume.js'
import { ArrowDown, ArrowUpRight, MapPin } from './Icons.jsx'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="hero__glow" aria-hidden />
      <div className="hero__grid-overlay" aria-hidden />

      <div className="container hero__inner">
        <p className="hero__status" data-reveal>
          <span className="hero__status-dot" />
          {profile.availability}
        </p>

        <h1 className="hero__title" data-reveal>
          Senior Mobile Engineer
          <br />
          crafting <span className="hero__accent">high-performance</span> apps.
        </h1>

        <p className="hero__lead" data-reveal>
          {profile.tagline}
        </p>

        <div className="hero__meta" data-reveal>
          <span className="hero__meta-item">
            <MapPin width={18} height={18} />
            {profile.location}
          </span>
          <span className="hero__sep" aria-hidden>
            •
          </span>
          <span className="hero__meta-item">9+ years experience</span>
        </div>

        <div className="hero__actions" data-reveal>
          <a href="#projects" className="btn">
            View my work
            <ArrowUpRight width={18} height={18} />
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn--ghost">
            Get in touch
          </a>
        </div>

        <dl className="hero__stats" data-reveal>
          {stats.map((s) => (
            <div key={s.label} className="hero__stat">
              <dt className="hero__stat-value">{s.value}</dt>
              <dd className="hero__stat-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to about section">
        <ArrowDown width={20} height={20} />
      </a>
    </section>
  )
}
