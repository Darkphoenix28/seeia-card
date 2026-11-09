import { SITE_CONFIG } from '../config'

export default function Document() {
  return (
    <section
      id="document"
      className="section document-section"
      aria-labelledby="document-heading"
    >
      <div className="container document-inner">
        <div className="document-grid">
          <div className="document-content">
            <p className="section-label">The full story</p>
            <h2 id="document-heading">SEEIA Connect: Milestones</h2>
            <p className="document-lead">
              Discover our milestones, explore our mission, and find your place
              in Africa’s next chapter.
            </p>
            <p className="document-description">
              The founder-approved document provides complete context on our
              background, the SEEIA Empower 1.0 architecture, planned operational
              models, alignment with the Sustainable Development Goals (SDGs),
              and pathways to engage.
            </p>
          </div>

          <div className="document-panel">
            <div className="document-meta">
              <span className="document-meta-badge">Approved source</span>
              <p className="document-meta-title">SEEIA-Connect-Milestones.pdf</p>
              <p className="document-meta-details">
                9 pages · Complete context &amp; roadmap
              </p>
            </div>

            <div className="document-actions">
              <a
                href={SITE_CONFIG.documents.pdf}
                className="btn btn-primary"
                target="_blank"
                rel="noopener"
              >
                Read the full document
                <span className="sr-only"> (opens PDF in a new browser tab)</span>
              </a>
              <div className="document-downloads">
                <a
                  href={SITE_CONFIG.documents.pdf}
                  className="btn btn-outline-light btn-sm"
                  download="SEEIA-Connect-Milestones.pdf"
                >
                  Download PDF
                </a>
                <a
                  href={SITE_CONFIG.documents.docx}
                  className="btn btn-outline-light btn-sm"
                  download="SEEIA-Connect-Milestones-Original.docx"
                >
                  Download original DOCX
                </a>
              </div>
            </div>

            <p className="document-note">
              No account, sign-in, or tracking required. Direct PDF link works across
              mobile and desktop browsers with offline download fallback.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
