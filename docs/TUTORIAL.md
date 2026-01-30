# AFH Permit Automation — Tutorial

Step-by-step tutorial: from zero to a permit-ready floor plan and checklist for an AFH in Washington State.

---

## Prerequisites

- Node.js installed (v18 or later).
- Terminal/command line.
- Browser (Chrome, Firefox, Safari, Edge).

---

## Step 1: Install and run the app

```bash
cd /path/to/your/afh-permit-app
npm install
npm run dev
```

Open **http://localhost:3000**. You should see the home page with links to Floor Plan, Compliance, Permit Forms, Case Study, Curriculum, Top 100, and Moltbot.

---

## Step 2: Enter your property (Floor Plan)

1. Click **Floor Plan** in the nav or home.
2. Fill in:
   - **Address** — e.g. `123 Main St`
   - **City** — e.g. `Centralia`
   - **ZIP** — e.g. `98531`
   - **Total sq ft** — e.g. `2400`
3. Check the boxes that already apply (or plan to add):
   - **Entry ramp (1:12)** — if you have or will add a ramp.
   - **32" doors** — if doors are already 32" or will be widened.
   - **Alarms every level** — smoke/CO on every floor.
   - **Fire extinguisher** — 2A:10B:C, one per floor.

---

## Step 3: Add floors (if you have a basement)

1. Under floors, click **+ Floor**.
2. You’ll see two tabs (e.g. Main Floor, New Floor). Click **New Floor** and rename it later if you like (e.g. “Basement” in your head; the app uses “New Floor” by default).
3. Click the floor you want to add rooms to.

---

## Step 4: Add rooms — main floor

1. Make sure **Main Floor** (or first floor) is selected.
2. Click **+ Add room**. A new bedroom appears (you can change type).
3. For **living room**: change type to **living**, label e.g. `Living`, set **W** and **D** (e.g. 20×15).
4. For **kitchen**: type **kitchen**, label `Kitchen`, e.g. 15×12.
5. For **bedrooms**: keep type **bedroom**, label Bed1, Bed2, …; set dimensions (e.g. 12×10). For each bedroom:
   - **Egress type** — choose **NS1** (grade-level), **NS2** (sprinklered), or **S** (stairs).
   - **Egress window (sq ft)** — enter at least **5.7** (IRC R310).
6. For **bathrooms**: type **bathroom**, label Bath1, Bath2, …; set size (e.g. 8×6). Check **Grab bars** and **30×48 shower**.
7. Add **hallway** or **entry** if you want them as separate rooms.
8. Use **Remove** on any room to delete it.

Repeat for **Basement** (or second floor) if applicable.

---

## Step 5: Read the text floor plan and compliance

1. Scroll down to **Text / ASCII floor plan**. You’ll see:
   - Property address, city, ZIP, total sq ft.
   - Each floor and its rooms with dimensions and mods (egress, grab bars, etc.).
   - Mods line: ramp, 32" doors, alarms, extinguisher.
2. Scroll to **Compliance snapshot**:
   - **All checks pass** (green) or **Some items need attention** (amber).
   - List of items (e.g. WAC 388-76-10685 bedroom size, IRC R310 egress, IRC R330.8 grab bars).
3. Fix any failures: add rooms, increase egress window to 5.7+, check grab bars/ramp/doors/alarms/extinguisher, then review again.

---

## Step 6: Use the workflow (floorplan → isometric → mixboard → notebooklm)

1. **Copy** the entire “Text / ASCII floor plan” block.
2. **Floorplan** — You’ve just produced it in the app.
3. **Isometric** — Paste the text into your 2D→3D tool (e.g. Nano Banana / Gemini): e.g. “Convert this 2D floor plan to isometric 3D; add AFH mods: ramp, grab bars, 5.7 sq ft egress windows.”
4. **Mixboard** — Use your design/mood-board tool to style the layout (e.g. “Accessible residential AFH”).
5. **NotebookLM** (or similar) — Compile the plan + checklist + narrative into a **proposal PDF** for the city.

You can do steps 3–5 outside the app; the app gives you the compliant floor plan text and checklist.

---

## Step 7: Prepare permit submission

1. Go to **Permit Forms**.
2. Note **City of Centralia** (or your city): building permit application, WABO AFH checklist, fees.
3. Note **Lewis County** (or your county): septic review for 6 residents if applicable.
4. Use the **WABO AFH Initial Inspection Preparation Checklist** list on that page as your to-do.
5. Attach your **letter-sized (8.5×11) floor plan** (from the app text diagram or from your isometric/PDF) and the checklist to the application.

---

## Step 8: Compare with the case study

1. Go to **Case Study: 2606 Cooks Hill Rd**.
2. Compare **Current** (single-family) vs **Future** (WABO AFH) floor plans.
3. Read **Modifications** and **Submission package**.
4. Use this as a template: same kinds of changes (ramp, 32" doors, egress 5.7+, grab bars, alarms, extinguisher, basement conversion) apply to your property.

---

## Step 9: Practice with Top 100 and Curriculum (optional)

- **Top 100** — Filter by category, answer questions, **Show answer & explanation** to see WAC/IRC references. Good for AFH admin training.
- **Curriculum** — Go through the 8 modules to see how a consultant uses the app and Moltbot for licensing, home prep, documentation, and inspection prep.

---

## Step 10: Automate with Moltbot (optional)

1. Go to **Moltbot / Clawdbot**.
2. Install: `npm install -g moltbot@latest`.
3. Run e.g. `moltbot agent --message "Generate AFH licensing checklist based on WAC 388-76" --thinking high` to get a checklist.
4. Use the **AFH-specific automation** examples on that page to generate checklists, analyze floor plans, and prepare documents.

---

## Summary

| Step | Action |
|------|--------|
| 1 | Install and run app (`npm run dev`) |
| 2 | Enter property (address, city, ZIP, sq ft, mods) |
| 3 | Add floors if needed |
| 4 | Add rooms (living, kitchen, bedrooms, bathrooms); set egress and grab bars |
| 5 | Read text floor plan and compliance; fix failures |
| 6 | Copy plan → isometric → mixboard → proposal PDF |
| 7 | Use Permit Forms and WABO checklist for submission |
| 8 | Use Case Study as template |
| 9 | Practice with Top 100 and Curriculum |
| 10 | Automate with Moltbot |

When you’re done, you have a permit-ready floor plan, a compliance checklist, and a path to submit to your city (e.g. Centralia) and county (e.g. Lewis).
