import { experience } from '../data/resume.js'

export default function Experience() {
  return (
    <section id="experience" className="section section--alt">
      <div className="container">
        <div className="section__head" data-reveal>
          <span className="section__eyebrow">02 — Experience</span>
          <h2 className="section__title">A decade of building for mobile.</h2>
        </div>

        <ol className="timeline">
          {experience.map((job) => (
            <li className="timeline__item" key={job.company + job.period} data-reveal>
              <div className="timeline__marker" aria-hidden>
                <span className="timeline__dot" />
              </div>

              <div className="timeline__card">
                <div className="timeline__top">
                  <div>
                    <h3 className="timeline__role">{job.role}</h3>
                    <p className="timeline__company">{job.company}</p>
                  </div>
                  <span className="timeline__period">{job.period}</span>
                </div>

                <p className="timeline__summary">{job.summary}</p>

                <ul className="timeline__highlights">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
