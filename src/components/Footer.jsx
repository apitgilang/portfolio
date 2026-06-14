import { profile } from '../data/resume.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="footer__brand">{profile.name}</span>
        <p className="footer__note">
          Designed & built with React + Vite — {new Date().getFullYear()}
        </p>
        <a href="#top" className="footer__top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
