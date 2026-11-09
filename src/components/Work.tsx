const initiatives = [
  {
    label: 'Flagship programme',
    title: 'SEEIA Empower 1.0',
    body:
      'A youth initiative designed to connect market-relevant digital and technical skills with structured mentorship and startup funding. It aims to mobilise diaspora networks and capital toward high-growth sectors: the digital economy, agritech, and green industries.',
    note: 'Three-year targets (2026–2028): 1,500 youth trained · 15 startups funded (planning targets, not completed outcomes)',
    status: 'In development',
    featured: true,
  },
  {
    label: 'Diaspora infrastructure',
    title: 'SEEIA Build',
    body:
      'Designed to help diaspora members build property at home with confidence—connecting clients with vetted professionals, milestone-based supervision, and payments tied to verified stages of work.',
    note: 'Phased introduction starting with foundation work and a controlled pilot.',
    status: 'Phased introduction',
  },
  {
    label: 'Skills & vocational',
    title: 'Kékòóyè',
    body:
      'Named from the phrase meaning “learning to assimilate”, Kékòóyè is an online platform for adults, focusing on flexible, bite-sized IT, vocational, and business skills taught by experienced practitioners.',
    note: 'Course architecture and learning platform currently under development.',
    status: 'Under development',
  },
]

export default function Work() {
  return (
    <section id="work" className="section work" aria-labelledby="work-heading">
      <div className="container">
        <p className="section-label">Our work</p>
        <h2 id="work-heading">Initiatives in development</h2>
        <p className="work-intro">
          SEEIA Connect is building structured pathways for capital, skills, and
          mentorship. The full document outlines the roadmap, operational models,
          and targets for each initiative.
        </p>
        <ul className="work-grid">
          {initiatives.map((item) => (
            <li
              key={item.title}
              className={`work-card${item.featured ? ' work-card--featured' : ''}`}
            >
              <div className="work-card-header">
                <span className="work-card-label">{item.label}</span>
                <span className="status-badge">{item.status}</span>
              </div>
              <h3>{item.title}</h3>
              <p className="work-card-body">{item.body}</p>
              {item.note && <p className="work-card-note">{item.note}</p>}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
