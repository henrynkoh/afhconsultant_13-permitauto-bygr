# AFH Permit Automation

Next.js app for **Adult Family Home (AFH) permit preparation** in Washington State. Enter basic floor plan data and dimensions to generate WABO-compliant permit-ready drawings and paperwork for City of Centralia, Lewis County, Chehalis, Lacey, Tumwater, Olympia—DIY, without a third-party architect.

## Landing page (first page)

The home page (`/`) is a **landing page** with:

- **Left sidebar** — Scrollable navigation to sections: Home, Floor Plan, Compliance, Permit Forms, Case Study, Curriculum, Top 100 Questions, Moltbot, Features & Functions. Click a section to smooth-scroll. Active section is highlighted.
- **Main content** — All sections visible; each section links to the corresponding app page.
- **Bottom-right** — **GitHub** button linking to your repo. Set `NEXT_PUBLIC_GITHUB_URL` in `.env` (see `.env.example`).

## Features

- **Floor Plan Entry** — Rooms, dimensions, egress type, grab bars, alarms. Workflow: floorplan → isometric → mixboard → notebooklm for city permit application.
- **WAC / IRC / WABO Compliance** — Bedroom size (70 sq ft), egress (5.7 sq ft), doors (32"), grab bars, ramps, alarms, extinguisher. Meets local building inspector AFH requirements.
- **Permit Forms & Checklist** — City of Centralia, Lewis County, WABO AFH Initial Inspection Preparation Checklist.
- **Case Study: 2606 Cooks Hill Rd, Centralia 98531** — Single-family → WABO AFH conversion with current and future floor plans and Centralia submission package.
- **Consultant Curriculum** — 8-week training for AFH consultants: what to prepare, how to prepare, AFH Initial Inspection Preparation Checklist; integration with Moltbot/Clawdbot.
- **Top 100 AFH Admin Questions** — WAC, IRC, best-practice Q&A with explanations for AFH admin training.
- **Moltbot / Clawdbot** — Top 10 scripts and AFH-specific automation for inspection paperwork.

## Tech

- Next.js 15 (App Router), TypeScript, Tailwind CSS.

## Commands

```bash
npm install
npm run dev    # http://localhost:3000
npm run build
npm run start
npm run lint
```

## Documentation

- **[Quick Start](docs/QUICKSTART.md)** — Get a permit-ready floor plan in minutes.
- **[Manual](docs/MANUAL.md)** — Full user manual (overview, Floor Plan, Compliance, Permits, Case Study, Curriculum, Top 100, Moltbot).
- **[Tutorial](docs/TUTORIAL.md)** — Step-by-step from install to submission.

## Ads & marketing copy

Ready-to-use ad copy for social and email:

- **[docs/ads/](docs/ads/)** — Facebook, Instagram, Threads, Blogger, Naver Blog, Tistory, WordPress, Newsletter, Email. Replace `[YOUR_URL]` and `[YOUR_BRAND]` with your link and brand.

## References

- WAC 388-76 (Adult Family Homes)
- IRC R330 (AFH provisions), R310 (egress)
- WABO AFH Local Building Inspection Checklist (wabo.org)
- DSHS AFH licensing (dshs.wa.gov)
