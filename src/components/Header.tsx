import { useState, useEffect } from 'react'
import { SITE_CONFIG } from '../config'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll and listen for Escape key when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      const onKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMenuOpen(false)
      }
      window.addEventListener('keydown', onKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  const navItems = [
    { label: 'Mission', href: '#mission' },
    { label: 'Our work', href: '#work' },
    { label: 'The document', href: '#document' },
    { label: 'Support', href: '#support' },
  ]

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a href="#" className="header-logo" aria-label="SEEIA Connect — back to top">
          <img
            src={SITE_CONFIG.logos.lightOnDark}
            alt="SEEIA Connect logo"
            width="180"
            height="43"
          />
        </a>

        {/* Desktop nav */}
        <nav className="nav-desktop" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="nav-link">
              {item.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.documents.pdf}
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read the full document
            <span className="sr-only"> (opens PDF in a new tab)</span>
          </a>
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="menu-toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span className="menu-toggle-bar" aria-hidden="true" />
        </button>

        {/* Mobile nav overlay */}
        <nav
          id="mobile-nav"
          className={`nav-mobile${menuOpen ? ' open' : ''}`}
          aria-label="Mobile navigation"
          aria-hidden={!menuOpen}
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="nav-link"
              onClick={closeMenu}
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}
          <a
            href={SITE_CONFIG.documents.pdf}
            className="nav-cta"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
          >
            Read the full document
          </a>
        </nav>
      </div>
    </header>
  )
}
