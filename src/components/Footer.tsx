import { SITE_CONFIG } from '../config'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="pattern-band" aria-hidden="true" />
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <img
              src={SITE_CONFIG.logos.lightOnDark}
              alt="SEEIA Connect logo"
              className="footer-logo"
              width="240"
              height="58"
              loading="lazy"
            />
            <p className="footer-tagline">{SITE_CONFIG.org.tagline}</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Explore</h3>
              <a href="#mission">Mission</a>
              <a href="#work">Our work</a>
              <a href="#document">The full document</a>
              <a href="#support">Support</a>
            </div>
            <div className="footer-nav-group">
              <h3 className="footer-nav-title">Contact</h3>
              <a href={`mailto:${SITE_CONFIG.org.email}`}>{SITE_CONFIG.org.email}</a>
              <a href={SITE_CONFIG.links.website} target="_blank" rel="noopener noreferrer">
                seeia.org
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            </div>
          </nav>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SEEIA Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
