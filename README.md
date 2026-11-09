# SEEIA Connect Card Website (`card.seeia.org`)

A high-performance, accessible, editorial static web application designed as the primary digital destination for the physical SEEIA Connect QR card given to prospective sponsors, diaspora partners, and institutions.

---

## 1. Quick Start / Local Development

### Requirements
- **Node.js**: v18+ (tested on Node v24)
- **npm**: v9+

### Commands
```bash
# Install dependencies
npm install

# Start local development server with hot-reload
npm run dev

# Run TypeScript checks and build for production
npm run build

# Preview the production build locally
npm run preview
```

The production output will be generated into the `dist/` directory.

---

## 2. Architecture & Design Implementation

- **Framework**: React 19 + TypeScript bundled with Vite 6.
- **Typography**: Montserrat (weights 400, 500, 600, 700) self-hosted via `@fontsource/montserrat`—zero external third-party tracking or Google Fonts CDN dependencies.
- **Design Tokens**:
  - Near-Black: `#171919` (Hero, Document section, Footer background)
  - Warm White: `#FAF8F3` (Page body, card backgrounds)
  - Muted Warm White: `#F2EFE8` (Initiatives section background, notes)
  - SEEIA Orange: `#FF6600` (Accents, labels, CTA buttons)
  - Dark Gray: `#373435` (Body copy)
- **Accessibility**:
  - Semantic HTML5 landmark structure (`header`, `main`, `section`, `nav`, `footer`).
  - High-contrast button styles: near-black `#171919` on `#FF6600` orange provides a **6.03:1 contrast ratio**, exceeding WCAG AA standards (4.5:1).
  - Visible `:focus-visible` outline for keyboard navigation.
  - Skip-to-content link for screen reader and keyboard users.
  - Full support for `prefers-reduced-motion`.
  - Accessible mobile navigation drawer with Escape key handling and background scroll lock.
- **Authentic Brand Motif**:
  - Includes subtle curved pearl-white bands in the dark hero and document sections.
  - The distinctive geometric patterned edge from the approved SEEIA business card (vertical wavy lines, concentric arcs, spirals, and nested squares) is integrated as a restrained top accent band (`pattern-band`) on the footer, derived directly from the supplied card artwork.

---

## 3. Document Management & File Paths

The site provides direct access to the founder-approved milestone document in two formats without sign-in, tracking, or iframe dependencies:

| Asset | Public URL Path | Source File in Pack | Description |
|---|---|---|---|
| **View / Download PDF** | `/documents/SEEIA-Connect-Milestones.pdf` | `document/SEEIA-Connect-Milestones.pdf` | Formatted PDF for browser reading and direct download |
| **Original DOCX** | `/documents/SEEIA-Connect-Milestones-Original.docx` | `document/SEEIA-Connect-Milestones-Original.docx` | Founder-approved original Word source document |

### How to Update or Swap Documents While Keeping Stable URLs
1. To replace either file with an updated version, replace the corresponding file in `public/documents/`:
   - `public/documents/SEEIA-Connect-Milestones.pdf`
   - `public/documents/SEEIA-Connect-Milestones-Original.docx`
2. **Preserve exact filenames** so existing physical cards, printed materials, and bookmarks continue to resolve smoothly.
3. Re-run `npm run build` and deploy the updated `dist/` directory.

### Centralized Configuration
All external URLs and mailto links are centralized in `src/config.ts`:
```ts
export const SITE_CONFIG = {
  org: {
    name: 'SEEIA Connect',
    fullName: 'Securing Economic and Entrepreneurial Initiatives in Africa',
    tagline: 'A diaspora-led movement for Africa’s economic renewal',
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
```

---

## 4. Deployment as a Static Site

This project compiles to pure static HTML/CSS/JS with static binary assets. It can be hosted on any static hosting provider (Cloudflare Pages, Vercel, Netlify, AWS S3 + CloudFront, or GitHub Pages).

### Build Output Files to Deploy
Deploy the entire contents of the `dist/` directory:
```
dist/
├── index.html
├── favicon.ico
├── apple-touch-icon.png
├── icon-192.png
├── documents/
│   ├── SEEIA-Connect-Milestones.pdf
│   └── SEEIA-Connect-Milestones-Original.docx
└── assets/
    ├── seeia-logo-light-on-dark.png
    ├── seeia-logo-dark-on-light.png
    ├── seeia-logo-original.svg
    ├── pattern-strip-tile-h.png
    ├── pattern-strip.png
    ├── index-[hash].css
    ├── index-[hash].js
    └── montserrat-latin-[weight]-[hash].woff2
```

### Static Host MIME Types
Ensure your hosting platform serves the correct `Content-Type` headers:
- `.pdf` -> `application/pdf`
- `.docx` -> `application/vnd.openxmlformats-officedocument.wordprocessingml.document`
- `.woff2` -> `font/woff2`
- `.svg` -> `image/svg+xml`

---

## 5. Connecting `card.seeia.org` via DNS

To point `card.seeia.org` to your static host:

1. Log in to the DNS provider managing the `seeia.org` zone.
2. Add a `CNAME` record for the subdomain:
   - **Type**: `CNAME`
   - **Host / Name**: `card`
   - **Value / Target**: The hostname provided by your static host (e.g., `<project>.pages.dev`, `<project>.vercel.app`, or `<site>.netlify.app`).
   - **TTL**: `3600` (or automatic).
3. If using Cloudflare Pages / Vercel / Netlify:
   - In the host project dashboard, go to **Custom Domains** and add `card.seeia.org`.
   - The provider will automatically provision and renew a free Let’s Encrypt TLS/SSL certificate.
4. Verify SSL/TLS status once DNS propagates before distributing cards widely.

