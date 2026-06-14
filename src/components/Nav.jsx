import { useEffect, useState } from 'react'
import { Menu, Close } from './Icons.jsx'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Work' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__brand" aria-label="Back to top">
          <span className="nav__brand-mark">AG</span>
          <span className="nav__brand-text">Apit Gilang</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__link">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--sm nav__cta">
          Let's talk
        </a>

        <button
          className="nav__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
        </button>
      </div>

      {open && (
        <div className="nav__mobile" onClick={() => setOpen(false)}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="nav__mobile-link">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="btn nav__mobile-cta">
            Let's talk
          </a>
        </div>
      )}
    </header>
  )
}
