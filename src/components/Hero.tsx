import { SITE_CONFIG } from '../config'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-content">
        <p className="section-label">SEEIA Connect</p>
        <h1 id="hero-heading">
          <span>Africa’s Potential</span>
          <span>Our Shared Future</span>
        </h1>
        <div className="accent-bar hero-accent" aria-hidden="true" />
        <p className="hero-intro">
          SEEIA Connect is a diaspora-led organisation bringing together skills,
          capital and networks for economic and entrepreneurial development
          across Africa.
        </p>
        <div className="hero-actions">
          <a
            href={SITE_CONFIG.documents.pdf}
            className="btn btn-primary"
            target="_blank"
            rel="noopener"
          >
            Read the full document
            <span className="sr-only"> (PDF, opens in a new tab)</span>
          </a>
          <a href="#work" className="btn btn-outline-light">
            Explore our work <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
