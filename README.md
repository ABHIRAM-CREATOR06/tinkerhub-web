<div align="center">

<pre>
████████╗██╗███╗   ██╗██╗  ██╗███████╗██████╗ ██╗  ██╗██╗   ██╗██████╗ 
╚══██╔══╝██║████╗  ██║██║ ██╔╝██╔════╝██╔══██╗██║  ██║██║   ██║██╔══██╗
   ██║   ██║██╔██╗ ██║█████╔╝ █████╗  ██████╔╝███████║██║   ██║██████╔╝
   ██║   ██║██║╚██╗██║██╔═██╗ ██╔══╝  ██╔══██╗██╔══██║██║   ██║██╔══██╗
   ██║   ██║██║ ╚████║██║  ██╗███████╗██║  ██║██║  ██║╚██████╔╝██████╔╝
   ╚═╝   ╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═════╝ 
                          S N G C E   C H A P T E R
</pre>

**the space between dream & reality — TinkerHub SNGCE campus chapter website**

<img src="https://img.shields.io/badge/Next.js-0A0A0A?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
<img src="https://img.shields.io/badge/TypeScript-0A0A0A?style=for-the-badge&logo=typescript&logoColor=38bdf8" alt="TypeScript" />
<img src="https://img.shields.io/badge/MAKERS-FF4FD1?style=for-the-badge&logoColor=white" alt="Makers" />
<img src="https://img.shields.io/badge/BUILD%20IN%20PUBLIC-C6FF00?style=for-the-badge&color=C6FF00&labelColor=0A0A0A" alt="Build in public" />

<br/>

<img src="https://img.shields.io/badge/PRs-welcome-C6FF00?style=flat-square&labelColor=0A0A0A" alt="PRs welcome" />
<img src="https://img.shields.io/badge/status-active-FF4FD1?style=flat-square&labelColor=0A0A0A" alt="Status: active" />
<img src="https://img.shields.io/badge/chapter-SNGCE-C9B8F5?style=flat-square&labelColor=0A0A0A" alt="Chapter: SNGCE" />
<img src="https://img.shields.io/badge/license-TBD-lightgrey?style=flat-square&labelColor=0A0A0A" alt="License: TBD" />

[Live Site](#) · [Design System](#-design-system) · [Contributing](#-contributing) · [Roadmap](#-roadmap)

</div>

---

**TinkerHub SNGCE** is the website for the Sree Narayana Gurukulam College of Engineering chapter of TinkerHub — a community of tinkerers, makers, and students building things together on campus. It's a scrapbook/zine-styled site: polaroid photo cards, pushpins, marquee tickers, and a full-screen nav overlay, built with Next.js.

> *"Everyone has access to the knowledge required to set the course for a better future."*

---

## ✦ Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Getting Started](#-getting-started)
- [Scripts](#-scripts)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Contributing](#-contributing)
- [Roadmap](#-roadmap)
- [Team](#-team)
- [Deployment](#-deployment)
- [License](#-license)

---

## ✦ Features

- 📌 **Polaroid-style spotlight cards** — pinned, rotated maker/volunteer/project shoutouts for the campus community
- 📣 **Marquee ticker banner** — hot-pink scrolling announcement strip with sparkle separators
- 🗂️ **Full-screen nav overlay** — large italic-serif menu instead of a slim header bar
- ☀️ **Sunburst photo treatment** — lavender ray graphics behind circular member photos
- 🖋️ **Deliberately mixed typography** — pixel display font, condensed caps, italic serif, stencil stickers, script captions, all used with intent
- 📅 **Events section** — upcoming campus events pulled into a scannable list
- 🤝 **Get Involved CTAs** — Donate / Volunteer / Start a Campus style action cards, scoped to this chapter

---

## ✦ Tech Stack

| | |
|---|---|
| **Framework** | Next.js (App Router) |
| **Language** | TypeScript |
| **Styling** | CSS Modules / Tailwind *(confirm before contributing — see `AGENT.md`)* |
| **Fonts** | Google Fonts via `next/font` (Press Start 2P, Anton, Playfair Display, Special Elite, Caveat, Poppins) |
| **Deployment** | TBD — see [Deployment](#-deployment) |

---

## ✦ Getting Started

**Prerequisites:** Node.js 18+

```bash
git clone <repo-url>
cd tinkerhub-sngce
npm install
npm run dev
```

Open **[localhost:3000](http://localhost:3000)** 🚀

---

## ✦ Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build locally |
| `npm run lint` | Run the linter |

---

## ✦ Project Structure

```
tinkerhub-sngce/
├── app/                    # routes (App Router)
│   ├── page.tsx            # homepage — hero, spotlight, events, get involved
│   ├── events/              # events listing + detail pages
│   └── layout.tsx
├── components/
│   ├── Marquee.tsx          # ticker banner
│   ├── NavOverlay.tsx       # full-screen nav menu
│   ├── SpotlightCard.tsx    # pinned polaroid-style member card
│   ├── SpotlightColumn.tsx  # vertical stack of SpotlightCards
│   ├── ActionPlanRow.tsx    # numbered "how we bring it to life" rows
│   ├── EventRow.tsx
│   └── GetInvolvedCard.tsx
├── public/                  # static assets — images, favicon
├── private/                  # local-only content/config — never committed
├── design.md                 # design system source of truth (gitignored)
├── demo.html                  # static prototype of the design system (gitignored)
├── AGENT.md                   # AI coding agent conventions (gitignored)
├── .gitignore
└── README.md
```

---

## ✦ Design System

<div align="center">
<img src="https://img.shields.io/badge/%23FFFFFF-FFFFFF?style=flat-square&labelColor=FFFFFF&color=FFFFFF" height="28"/>
<img src="https://img.shields.io/badge/%230A0A0A-0A0A0A?style=flat-square&labelColor=0A0A0A&color=0A0A0A" height="28"/>
<img src="https://img.shields.io/badge/%23FF4FD1-FF4FD1?style=flat-square&labelColor=FF4FD1&color=FF4FD1" height="28"/>
<img src="https://img.shields.io/badge/%23C6FF00-C6FF00?style=flat-square&labelColor=C6FF00&color=C6FF00" height="28"/>
<img src="https://img.shields.io/badge/%23C9B8F5-C9B8F5?style=flat-square&labelColor=C9B8F5&color=C9B8F5" height="28"/>
<img src="https://img.shields.io/badge/%236B6B6B-6B6B6B?style=flat-square&labelColor=6B6B6B&color=6B6B6B" height="28"/>
</div>

TinkerHub SNGCE follows a **scrapbook / zine** aesthetic, not a minimal corporate one:

| Layer | Choice |
|---|---|
| Base | White `#FFFFFF` background, near-black `#0A0A0A` ink |
| Accents | Hot pink `#FF4FD1`, lime `#C6FF00`, lavender `#C9B8F5` — used sparingly, as punctuation |
| Display font | Pixel/8-bit (Press Start 2P) — reserved for the single biggest hero statement |
| Headline font | Bold condensed caps (Anton) — ticker text, supporting headlines |
| Nav font | Italic serif (Playfair Display) — large-scale primary navigation |
| Sticker font | Distressed stencil (Special Elite) — "BE KIND.", "GET INVOLVED" callouts |
| Caption font | Script (Caveat) — handwritten-feel photo captions |
| Body font | Clean geometric sans (Poppins) — wordmark and body copy |

Full component reference lives in `design.md` and the rendered prototype `demo.html` — both intentionally kept out of version control (see `.gitignore`). Ask a maintainer for access.

---

## ✦ Contributing

1. Fork or branch from `main`.
2. Follow the conventions in `AGENT.md` (request access if you don't have it).
3. Open a PR with a short description and, if it's a visual change, a screenshot.

We're a student community — first-time contributors welcome. 🤝

---

## ✦ Roadmap

- [x] Design system defined (`design.md`)
- [x] Static HTML prototype (`demo.html`)
- [x] Nav overlay + marquee ticker components
- [x] Campus Spotlight column
- [ ] Homepage build in Next.js
- [ ] Events listing + detail pages
- [ ] Get Involved / Donate flow
- [ ] Real campus member photos + copy
- [ ] Deployment pipeline
- [ ] Analytics / basic SEO pass

---

## ✦ Team

Built by **TinkerHub SNGCE** makers.

| Name | Role |
|---|---|
| — | — |
| — | — |

*(Fill in your chapter's core team here.)*

---

## ✦ Deployment

*(Fill in once decided — e.g. Vercel, Netlify.)*

## ✦ License

*(Add a license, or note this is an internal chapter project if not open source.)*

---

<div align="center"><sub>made with ✦ by TinkerHub SNGCE — the space between dream & reality</sub></div>
