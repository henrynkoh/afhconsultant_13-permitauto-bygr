# AFH Permit Automation — Quick Start

Get from zero to a permit-ready floor plan in a few minutes.

---

## 1. Run the app

```bash
npm install
npm run dev
```

Open **http://localhost:3000**.

---

## 2. Go to Floor Plan

Click **Floor Plan** in the navigation (or open `/floor-plan`).

---

## 3. Fill property once

- **Address** — Your property address.
- **City** — e.g. Centralia.
- **ZIP** — e.g. 98531.
- **Total sq ft** — Building area.
- Check: **Entry ramp**, **32" doors**, **Alarms every level**, **Fire extinguisher** (if present or planned).

---

## 4. Add rooms

- Click **+ Add room** for each room.
- Set **Type** (bedroom, bathroom, living, kitchen, …), **Label**, **Width (ft)**, **Depth (ft)**.
- **Bedrooms:** Egress type = **NS1** (or NS2/S), Egress window = **5.7** sq ft or more.
- **Bathrooms:** Check **Grab bars** and **30×48 shower**.

Need a second floor or basement? Click **+ Floor**, then add rooms on that floor.

---

## 5. Use the output

- **Text / ASCII floor plan** — Copy and use for permit attachment or for isometric/3D tools (e.g. Nano Banana).
- **Compliance snapshot** — Fix any red/amber items (bedroom size, egress, grab bars, ramp, doors, alarms, extinguisher).

---

## 6. Next steps

- **Permit Forms** — What to submit to Centralia, Lewis County, WABO.
- **Case Study** — See 2606 Cooks Hill Rd current vs future plan and submission package.
- **Curriculum** & **Top 100** — Training and practice questions.
- **Moltbot** — Scripts to automate checklists and paperwork.

---

## Workflow in one line

**Enter property + rooms → get text floor plan + compliance → use floorplan → isometric → mixboard → notebooklm → submit to city.**

For full details: **Manual** (`docs/MANUAL.md`), **Tutorial** (`docs/TUTORIAL.md`).
