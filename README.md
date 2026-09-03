<div align="center">

# 🚀 Career Command Center — Landing Site

**The official 3D landing page for [Career Command Center](https://github.com/FinTechResearch/CareerCommandCenter)** — an AI-powered desktop career toolkit.

Track • Apply • Interview • Get Hired

[Product Repo](https://github.com/FinTechResearch/CareerCommandCenter) · [Download v2.1](https://github.com/FinTechResearch/CareerCommandCenter/releases/tag/v2.0.0) · [Gumroad](https://adityamadhok.gumroad.com/l/Career-Command-Center) · [dev.to write-up](https://dev.to/adityamadhok/i-built-career-command-center-an-ai-powered-job-search-dashboard-with-python-textual-496d)

</div>

---

## ✨ About

Career Command Center is an AI-powered terminal dashboard (Python + Textual) that
replaces job-search chaos — spreadsheets, bookmarks, sticky notes — with one
command center:

- ✔ Application Tracker (SQLite, offline)
- ✔ Resume Match with ATS-style feedback
- ✔ AI Job Analyzer
- ✔ Cover Letter Generator
- ✔ Interview Preparation
- ✔ Remote Job Search (RemoteOK)
- ✔ Career Statistics dashboard

As of **v2.1** the product is fully **open source (GPL-3.0)** with animated UI,
Windows EXE and Linux `.deb` packages, and free AI via a Groq API key.

This repository contains the product's **marketing/landing site**: a dark,
terminal-inspired, WebGL-powered single page built with the modern Next.js
creative stack — a 3D "radar core" hero scene, buttery smooth scrolling, and
scroll-driven motion.

## 🧰 Tech Stack

| Layer | Tools |
| --- | --- |
| Framework | [Next.js 16](https://nextjs.org) (App Router), React 19, TypeScript |
| 3D / WebGL | [three.js](https://threejs.org), [@react-three/fiber](https://docs.pmnd.rs), [@react-three/drei](https://drei.docs.pmnd.rs) |
| Motion | [GSAP](https://gsap.com) + ScrollTrigger, [Framer Motion](https://www.framer.com/motion/), [Lenis](https://lenis.darkroom.engineering) smooth scroll |
| UI | [Tailwind CSS v4](https://tailwindcss.com), [shadcn/ui](https://ui.shadcn.com), [lucide-react](https://lucide.dev), class-variance-authority, clsx, tailwind-merge |
| Forms | react-hook-form + zod (custom zod resolver, no extra deps) |
## 🚦 Getting Started

> Prerequisites: **Node.js 18.18+ (20+ recommended)** and npm.

### 1. Tooling (optional, for AI-assisted dev & testing)

```bash
npm install -g @anthropic-ai/claude-code
npm install -g @upstash/context7-mcp
npm install -g @playwright/mcp
npm install -g @modelcontextprotocol/server-filesystem
npx playwright install
```

### 2. Create the project (how this site was scaffolded)

```bash
npx create-next-app@latest my-site
cd my-site
npx shadcn@latest init
npm install framer-motion gsap lenis
npm install three
npm install @react-three/fiber
npm install @react-three/drei
npm install lucide-react clsx tailwind-merge class-variance-authority
npm install react-hook-form zod
```

Or clone this repo and skip straight to step 3 — everything is already wired.

### 3. Run it

```bash
npm install
npm run dev      # http://localhost:3000
```

### Production build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
career-command-center-landing-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Fonts, metadata, dark theme
│   │   ├── page.tsx                # Page assembly (all sections)
│   │   └── globals.css             # Tailwind v4 theme + custom keyframes
│   ├── components/
│   │   ├── providers/
│   │   │   └── smooth-scroll.tsx   # Lenis + GSAP ticker integration
│   │   ├── three/
│   │   │   ├── command-scene.tsx   # R3F hero scene (radar core, rings, grid)
│   │   │   └── scene-wrapper.tsx   # Dynamic import (client-only WebGL)
│   │   ├── site/                   # navbar, hero, marquee, features,
│   │   │   #                       # how-it-works, stats-band, stack-section,
│   │   │   #                       # faq, feature-form, cta, footer, reveal
│   │   └── ui/                     # shadcn/ui primitives
│   └── lib/utils.ts                # cn() helper
└── components.json                 # shadcn config
```

## 🎨 Design Notes

- **Palette:** near-black green `oklch(0.14 0.012 165)` background, emerald
  `oklch(0.83 0.18 156)` primary — terminal green on a command-center dark theme.
- **3D hero:** a distorted icosahedron "radar core" with a wireframe shell,
  three orbiting rings, a rotating radar sweep arm, sparkles, stars and an
  infinite grid floor — all with mouse-parallax damping.
- **Motion:** Lenis drives smooth scroll, GSAP ScrollTrigger reveals sections
  once as they enter the viewport, Framer Motion handles hero stagger, hover
  lifts and animated counters.
- The feature-request form currently simulates submission — wire
  `onSubmit` in `src/components/site/feature-form.tsx` to your API route.

## ☁️ Deploy

One-click on [Vercel](https://vercel.com/new): import the repo and deploy with
defaults (`next build`). Also works on Netlify, Cloudflare Pages or any Node host.

## 🤝 Supporting the Product

- 🛒 Purchase builds: [Gumroad](https://adityamadhok.gumroad.com/l/Career-Command-Center)
- ☕ Donate: [Ko-fi](https://ko-fi.com/adityamadhok) or GitHub Sponsorships
- 🐛 Report issues / PRs on the [product repo](https://github.com/FinTechResearch/CareerCommandCenter)

## 📄 License

The Career Command Center product is licensed under **GPL-3.0**; this landing
site follows the same license to stay consistent with the product ecosystem.

---

<div align="center">
<sub>Powered by <a href="https://groq.com">Groq</a> · Jobs from <a href="https://remoteok.com">RemoteOK</a></sub>
</div>
