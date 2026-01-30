# AFH Permit Automation – Task Plan

## Goal
Build a Next.js app that automates AFH (Adult Family Home) permit preparation for WA cities (Centralia, Chehalis, Lacey, Tumwater, Olympia), focusing on:
- Floor plan entry → WABO-compliant drawings (workflow: floorplan → isometric → mixboard → notebooklm)
- WAC/IRC/WABO compliance and building inspector requirements
- Design-agent / Moltbot-style automation (~80% of app)
- Case study: 2606 Cooks Hill Rd, Centralia 98531 → permit-ready package for City of Centralia & Lewis County
- Consultant curriculum + Top 100 AFH admin questions

## Tasks

- [x] **T1** Scaffold Next.js (App Router, TypeScript, Tailwind)
- [x] **T2** Floor plan data model + entry UI (rooms, dimensions, property address)
- [x] **T3** WAC/IRC/WABO compliance engine (bedroom size, egress, grab bars, alarms, ramps, doors)
- [x] **T4** Current vs future floor plan views (ASCII/text + optional 2D/3D placeholders)
- [x] **T5** Permit forms & document generators (Centralia Building Permit, Lewis County, WABO checklist)
- [x] **T6** Case study page: 2606 Cooks Hill Rd – current plan, modified plan, submission package
- [x] **T7** Curriculum pages (consultant training, AFH Initial Inspection Preparation Checklist)
- [x] **T8** Top 100 AFH admin questions (WAC/IRC/best-practice Q&A with explanations)
- [x] **T9** Moltbot/Clawdbot integration guide + top 10 scripts for AFH paperwork automation
- [x] **T10** README, env example, and review section in this file

## Review

### Summary of changes
- **Next.js app** (App Router, TypeScript, Tailwind): `app/`, `lib/`, `package.json`, `tsconfig.json`, `tailwind.config.ts`, `next.config.ts`, `postcss.config.mjs`, `next-env.d.ts`.
- **Floor plan**: `lib/types.ts`, `lib/floorPlanText.ts`, `lib/compliance.ts`; `app/floor-plan/page.tsx` (property + floors + rooms entry, text diagram, compliance snapshot).
- **Compliance**: `app/compliance/page.tsx` (key codes + current vs future compliance using case study data).
- **Permits**: `app/permits/page.tsx` (Centralia, Lewis County, WABO checklist, other WA cities).
- **Case study**: `lib/caseStudy.ts` (2606 Cooks Hill Rd current/future); `app/case-study/page.tsx` (current vs future floor plans, modifications, compliance, submission package).
- **Curriculum**: `lib/curriculum.ts` (8 modules); `app/curriculum/page.tsx` (objectives, content, moltbot, questions).
- **Top 100**: `lib/top100.ts` (questions with code + explanation; 20 full + 80 placeholders); `app/top-100/page.tsx` (filter by category, show/hide answer).
- **Moltbot**: `app/moltbot/page.tsx` (top 10 commands, AFH automation, quick tips).
- **Home**: `app/page.tsx` (overview + links to all sections); `app/layout.tsx` (nav, metadata); `app/globals.css`.
- **Docs**: `README.md`, `.gitignore`, `tasks/todo.md` (plan + review).

### File structure
```
app/
  layout.tsx, page.tsx, globals.css
  floor-plan/page.tsx, compliance/page.tsx, permits/page.tsx
  case-study/page.tsx, curriculum/page.tsx, top-100/page.tsx, moltbot/page.tsx
lib/
  types.ts, compliance.ts, floorPlanText.ts, caseStudy.ts
  curriculum.ts, top100.ts
tasks/
  todo.md
package.json, tsconfig.json, tailwind.config.ts, next.config.ts, postcss.config.mjs, next-env.d.ts
README.md, .gitignore
```
