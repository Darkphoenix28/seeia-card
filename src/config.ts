/**
 * SEEIA Connect site configuration
 * All live links centralised here for easy updates.
 */
export const SITE_CONFIG = {
  org: {
    name: 'SEEIA Connect',
    fullName: 'Securing Economic and Entrepreneurial Initiatives in Africa',
    tagline: 'A diaspora-led movement for Africa\u2019s economic renewal',
    email: 'hello@seeia.org',
    website: 'https://seeia.org',
    dashboard: 'https://dashboard.seeia.org',
    cardDomain: 'card.seeia.org',
  },
  documents: {
    pdf: '/documents/SEEIA-Connect-Milestones.pdf',
    docx: '/documents/SEEIA-Connect-Milestones-Original.docx',
  },
  links: {
    partner: 'mailto:hello@seeia.org?subject=Partnership%20enquiry%20%E2%80%93%20SEEIA%20Connect',
    contribute: 'https://dashboard.seeia.org',
    website: 'https://seeia.org',
  },
  logos: {
    lightOnDark: '/assets/seeia-logo-light-on-dark.png',
    darkOnLight: '/assets/seeia-logo-dark-on-light.png',
  },
} as const;

export const COLORS = {
  nearBlack: '#171919',
  warmWhite: '#FAF8F3',
  orange: '#FF6600',
  darkGray: '#373435',
  midGray: '#6B6769',
} as const;

