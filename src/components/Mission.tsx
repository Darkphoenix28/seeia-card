export default function Mission() {
  return (
    <section id="mission" className="section mission" aria-labelledby="mission-heading">
      <div className="container mission-grid">
        <div className="mission-heading-col">
          <p className="section-label">Mission</p>
          <h2 id="mission-heading">
            See what we’re building.
            <br />
            Help shape what comes next.
          </h2>
          <div className="accent-bar" aria-hidden="true" style={{ marginTop: '1.25rem' }} />
        </div>
        <div className="mission-text-col">
          <p className="mission-lead">
            SEEIA Connect (Securing Economic and Entrepreneurial Initiatives in Africa)
            is a diaspora-led organisation created to educate communities, illuminate
            economic challenges and investment opportunities across the continent, and
            build sustainable, locally anchored solutions.
          </p>
          <p>
            We believe Africa’s young population is the core driver of long-term economic
            resilience. When diaspora capital, professional expertise, and international
            networks are structured collaboratively, they can accelerate opportunity on
            the ground.
          </p>
          <div className="mission-distinction">
            <strong>About our platform:</strong> SEEIA Connect is the overarching
            development organisation. Its dedicated contribution dashboard at{' '}
            <a
              href="https://dashboard.seeia.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-link"
            >
              dashboard.seeia.org
            </a>{' '}
            provides secure contribution channels for sponsors and donors.
          </div>
        </div>
      </div>
    </section>
  )
}
