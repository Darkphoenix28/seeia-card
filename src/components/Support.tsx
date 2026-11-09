import { SITE_CONFIG } from '../config'

export default function Support() {
  return (
    <section id="support" className="section support" aria-labelledby="support-heading">
      <div className="container">
        <div className="support-header">
          <p className="section-label">Support &amp; Engage</p>
          <h2 id="support-heading">Ways to get involved</h2>
          <p className="support-text">
            Whether you live in Lagos, London, or Toronto, there are direct ways
            to participate. Connect with us on institutional partnerships, mentorship,
            or contribute through our live dashboard.
          </p>
        </div>

        <div className="support-grid">
          <div className="support-card">
            <span className="support-card-tag">Partnerships</span>
            <h3>Partner with SEEIA</h3>
            <p>
              Foundations, enterprises, and diaspora professionals can collaborate
              on co-funding, strategic initiatives, or mentorship programmes.
            </p>
            <a href={SITE_CONFIG.links.partner} className="btn btn-primary">
              Partner with SEEIA
              <span className="sr-only"> (opens your email client)</span>
            </a>
          </div>

          <div className="support-card">
            <span className="support-card-tag">Live platform</span>
            <h3>Contribute</h3>
            <p>
              Make direct contributions through SEEIA’s live dashboard platform
              at dashboard.seeia.org.
            </p>
            <a
              href={SITE_CONFIG.links.contribute}
              className="btn btn-outline-dark"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contribute at dashboard.seeia.org
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>

        <div className="support-more">
          <p>
            Learn more about our broader work at{' '}
            <a
              href={SITE_CONFIG.links.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              seeia.org
            </a>{' '}
            or write directly to{' '}
            <a href={`mailto:${SITE_CONFIG.org.email}`} className="inline-link">
              {SITE_CONFIG.org.email}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
