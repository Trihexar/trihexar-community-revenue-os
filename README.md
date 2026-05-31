# Trihexar Community — Web3 Community Revenue OS

Trihexar Community is an open-source static website starter for a **Web3 Community Revenue OS**. It is designed as the public identity layer for a community that wants to grow, organize contributors, document operations, and turn attention into sustainable revenue systems.

> This project is a frontend starter. It does not include smart contracts, wallets, payment processing, token issuance, or investment functionality.

## Purpose

Trihexar Community gives the project a clean public foundation:

- A modern landing page for Web3 builders and community members.
- A clear explanation of the community revenue operating system concept.
- A modular structure that can later expand into dashboards, documentation, SaaS tools, or governance interfaces.
- A contribution-friendly open-source repository layout.
- A safe positioning boundary: revenue operations and community infrastructure, not speculative financial promises.

## Tech Stack

- **HTML5** for semantic page structure.
- **CSS3** for responsive modern design, glass UI, animations, and theme styling.
- **Vanilla JavaScript** for navigation, theme toggle, counters, module preview, scroll reveal, and revenue calculator.
- **SVG assets** for logo and favicon usage.

No build step is required.

## Folder Structure

```txt
trihexar-community-revenue-os/
├── assets/
│   └── TrihexarLogo.svg
├── css/
│   └── styles.css
├── docs/
│   ├── BRAND_GUIDE.md
│   └── PROJECT_SCOPE.md
├── js/
│   └── main.js
├── .gitignore
├── CODE_OF_CONDUCT.md
├── CONTRIBUTING.md
├── LICENSE
├── README.md
└── index.html
```

## Quick Start

### Option 1 — Open directly

Open `index.html` in your browser.

### Option 2 — Run with a local static server

From the project root:

```bash
python3 -m http.server 8080
```

Then open:

```txt
http://localhost:8080
```

## Customization Guide

### Change logo

Replace this file:

```txt
assets/TrihexarLogo.svg
```

Keep the same filename if you do not want to edit HTML references.

### Edit main content

Edit:

```txt
index.html
```

Recommended sections to customize first:

- Hero headline
- Platform thesis
- Core modules
- Roadmap
- Contribution section
- Footer links

### Edit visual style

Edit:

```txt
css/styles.css
```

Important CSS variables are located at the top of the file:

```css
:root {
  --bg: #08111f;
  --gold: #e3d0a6;
  --copper: #a36d48;
}
```

### Edit interactions

Edit:

```txt
js/main.js
```

Main JavaScript features:

- Mobile navigation
- Theme toggle
- Animated counters
- Module switcher
- Revenue calculator
- Scroll reveal animation
- Active navigation state

## Recommended GitHub Repository Settings

For a public open-source launch:

- Visibility: **Public**
- License: **MIT**
- Default branch: `main`
- Enable Issues
- Enable Discussions if community feedback is expected
- Enable GitHub Pages for static hosting

## Deploy to GitHub Pages

1. Push this project to GitHub.
2. Open repository **Settings**.
3. Go to **Pages**.
4. Source: **Deploy from a branch**.
5. Branch: `main`.
6. Folder: `/root`.
7. Save.

GitHub will publish the static site after deployment completes.

## Contribution Areas

Good first contributions:

- Improve responsive UI details.
- Add more dashboard mock sections.
- Add documentation pages.
- Add issue templates.
- Add accessibility improvements.
- Add localization for Indonesian and English.
- Add community onboarding content.
- Add Web3-safe educational content.

## Roadmap

### Phase 0 — Public Foundation

- Landing page
- README
- License
- Contribution rules
- Code of conduct
- Basic brand guide

### Phase 1 — Community Activation

- Contributor onboarding
- Discord or Telegram structure
- Public issue board
- Community playbook
- Content calendar

### Phase 2 — Revenue Operations

- Pricing page concept
- Service offer page
- Sponsorship pipeline
- Metrics dashboard mockup
- Case study template

### Phase 3 — Web3 Expansion

- Governance documentation
- Treasury transparency template
- Grant workflow
- Wallet integration planning
- Token-safe communication policy

## Safety and Compliance Notes

This repository should not promise guaranteed income, token appreciation, investment returns, or financial outcomes. It should present Trihexar as a community, software, and operations project.

Recommended wording:

- “Revenue operations”
- “Community monetization systems”
- “Open-source infrastructure”
- “Governance documentation”
- “Builder network”

Avoid wording like:

- “Guaranteed profit”
- “Risk-free return”
- “Token will pump”
- “Everyone will earn money”
- “Investment opportunity”

## License

Released under the MIT License. See [`LICENSE`](LICENSE).
