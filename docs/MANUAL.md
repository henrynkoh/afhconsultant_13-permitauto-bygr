# AFH Permit Automation — User Manual

This manual describes how to use the AFH Permit Automation app to prepare Adult Family Home (AFH) permits for Washington State cities (Centralia, Lewis County, Chehalis, Lacey, Tumwater, Olympia).

---

## 1. Overview

The app helps you:

- Enter property and floor plan data (rooms, dimensions).
- Check WAC / IRC / WABO compliance (bedroom size, egress, grab bars, alarms, ramps, doors).
- Generate permit-ready text floor plans and use the workflow: **floorplan → isometric → mixboard → notebooklm** for city submission.
- Use the **Case Study (2606 Cooks Hill Rd)** as a reference for converting a single-family home to a WABO-compliant AFH.
- Train as a consultant with the **Curriculum** and **Top 100 AFH Admin Questions**.
- Automate paperwork with **Moltbot / Clawdbot** scripts.

**Audience:** AFH operators, consultants, advisors, and anyone preparing AFH permits in WA without hiring a third-party architect.

---

## 2. Getting Started

### 2.1 Run the app

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

### 2.2 Main navigation

- **Home** — Overview and links to all sections.
- **Floor Plan** — Enter property and rooms; see text diagram and compliance.
- **Compliance** — Key WAC/IRC/WABO codes and current vs future (case study) compliance.
- **Permit Forms** — City of Centralia, Lewis County, WABO checklist, other WA cities.
- **Case Study: 2606 Cooks Hill Rd** — Full example: current vs future floor plans and submission package.
- **Curriculum** — 8-week consultant training and Moltbot integration.
- **Top 100 Questions** — AFH admin practice questions with answers and code references.
- **Moltbot / Clawdbot** — Top 10 commands and AFH automation examples.

---

## 3. Floor Plan Entry

**Path:** Home → **Floor Plan** (or `/floor-plan`).

### 3.1 Property

- **Address** — Street address.
- **City** — e.g. Centralia (default).
- **ZIP** — e.g. 98531.
- **Total sq ft** — Total building area.
- **Modifications (checkboxes):**
  - **Entry ramp (1:12)** — IRC R330.9.
  - **32" doors** — IRC R330.4.
  - **Alarms every level** — Smoke/CO per IRC R314/R315/R330.5.
  - **Fire extinguisher** — 2A:10B:C per IRC R330.5.

### 3.2 Floors

- Use **+ Floor** to add another level (e.g. Basement).
- Click a floor name to edit rooms on that floor.

### 3.3 Rooms

- **+ Add room** — Adds a room to the current floor.
- For each room:
  - **Label** — e.g. Bed1, Bath1, Living.
  - **Type** — bedroom, bathroom, living, kitchen, hallway, entry, utility, other.
  - **Width (ft)** and **Depth (ft)** — Dimensions.
- **Bedrooms:** set **Egress type** (NS1 / NS2 / S) and **Egress window (sq ft)** — minimum 5.7 per IRC R310.
- **Bathrooms:** check **Grab bars** and **30×48 shower** (IRC R330.8).
- **Remove** — Deletes the room.

### 3.4 Output

- **Text / ASCII floor plan** — Permit-ready summary (property, floors, rooms, mods). Copy for submission or for the next step (isometric / mixboard / notebooklm).
- **Compliance snapshot** — Pass/fail for key items; link to full **Compliance** page.

---

## 4. Compliance

**Path:** **Compliance** (or `/compliance`).

- **Key codes** — WAC 388-76 (bedroom size, egress, resident rights), IRC R310/R330 (egress, doors, grab bars, ramp, alarms, extinguisher).
- **Current plan (example)** — Gaps for the case study property before modifications.
- **Future plan (example)** — Compliance after AFH modifications.

Use this page to understand what inspectors expect and how your floor plan compares.

---

## 5. Permit Forms

**Path:** **Permit Forms** (or `/permits`).

- **City of Centralia** — Building permit application, WABO AFH checklist, fees (~$500 base; confirm at centraliawa.gov).
- **Lewis County** — Septic review for 6 residents; health/environmental as needed.
- **WABO AFH Initial Inspection Preparation Checklist** — Summary: floor plan, egress, doors, alarms, extinguisher, grab bars, ramp, postings.
- **Other WA cities** — Same workflow for Chehalis, Lacey, Tumwater, Olympia; submit to each city’s Building Division.

Use the text floor plan and checklist from the app when filling out and attaching to permit applications.

---

## 6. Case Study: 2606 Cooks Hill Rd

**Path:** **Case Study** (or `/case-study`).

- **Subject property** — 2606 Cooks Hill Rd, Centralia 98531; 2,836 sq ft single-family with basement.
- **Current floor plan** — Single-family layout (no ramp, 28" doors, no grab bars, egress &lt;5.7 sq ft).
- **Future floor plan** — WABO AFH layout (ramp, 32" doors, 5.7 sq ft egress, grab bars, alarms, extinguisher, basement Bed5/Bed6).
- **Modifications list** — What was added or changed.
- **Compliance snapshot** — Future plan checklist.
- **Submission package** — What to submit to Centralia and Lewis County (application, floor plan, WABO checklist).

Use this as a template for your own property.

---

## 7. Curriculum

**Path:** **Curriculum** (or `/curriculum`).

- **8 modules (weeks):** Intro, Licensing, Home Prep (2), Documentation, Staffing, Inspection, Capstone + Top 100.
- Each module: **Objectives**, **Key content**, **Moltbot/Clawdbot** commands, **Sample questions** to ask clients.
- Designed for consultants/advisors who guide AFH operators from start to finish and use AI (Moltbot/Clawdbot) for paperwork.

---

## 8. Top 100 AFH Admin Questions

**Path:** **Top 100** (or `/top-100`).

- Filter by category: **Licensing**, **Physical Environment**, **Safety/Fire**, **Resident Care**, **Operations** (or **all**).
- Each question: multiple choice, **Code** (WAC/IRC), **Show/Hide** answer and explanation.
- Use for AFH admin training and exam prep; answers are based on WAC/IRC and best practices.

---

## 9. Moltbot / Clawdbot

**Path:** **Moltbot** (or `/moltbot`).

- **Prerequisite** — Node ≥22; install: `npm install -g moltbot@latest` (or pnpm; clawdbot is compatibility alias).
- **Top 10 commands** — onboard, gateway, channels login, message send, agent, doctor, status, models status, logs, config.
- **AFH-specific automation** — Generate checklists, analyze floor plans, fill WABO form, 2D→3D prompt (Nano Banana/Gemini), config for AFH.
- **Quick tips** — Headless (`--yes`), logs (`--follow`), multiple gateways, debugging.

Use these scripts to automate inspection prep and paperwork alongside the app.

---

## 10. Workflow Summary

1. **Enter** property and floor plan on **Floor Plan**.
2. **Check** compliance on the same page and on **Compliance**; fix gaps (bedroom size, egress, grab bars, ramp, doors, alarms, extinguisher).
3. **Copy** the text floor plan; use it in your **floorplan → isometric → mixboard → notebooklm** pipeline (e.g. Nano Banana/Gemini for 3D, then proposal PDF).
4. **Use** **Permit Forms** and **Case Study** to prepare Centralia/Lewis County (or other WA city) submission.
5. **Train** with **Curriculum** and **Top 100**; automate with **Moltbot** scripts.

---

## 11. References

- **WAC 388-76** — Adult Family Homes (DSHS).
- **IRC R310** — Egress openings; **IRC R330** — AFH provisions (WABO).
- **WABO** — AFH Local Building Inspection Checklist (wabo.org).
- **DSHS** — AFH licensing (dshs.wa.gov).

---

## 12. Support

For app bugs or feature requests, use your project’s issue tracker or contact your development team. For WAC/IRC/permitting questions, refer to DSHS, WABO, and your local building department.
