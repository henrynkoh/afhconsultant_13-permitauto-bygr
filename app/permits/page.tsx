import Link from "next/link";

export default function PermitsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Permit Forms &amp; Checklist
        </h1>
        <p className="text-slate-600 max-w-2xl">
          City of Centralia, Lewis County, and WABO AFH Initial Inspection
          Preparation Checklist. Use these with your floor plan and compliance
          data for permit submission.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          City of Centralia
        </h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
          <li>
            Building Permit Application — submit to Community Development /
            Building Division with site plan, floor plan (8.5×11 letter-sized),
            elevations, and details.
          </li>
          <li>
            WABO AFH Local Building Inspection Checklist (April 7, 2024) —
            rooms, dimensions, hallways, doorways, exits, classifications (Type
            NS1/NS2/S), alarms, extinguishers, grab bars, ramps.
          </li>
          <li>
            Fees: ~$500 base plus valuation-based costs (confirm at{" "}
            <a
              href="https://www.centraliawa.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              centraliawa.gov
            </a>
            ).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Lewis County
        </h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
          <li>
            Septic review — required for 6 residents; verify capacity and
            approval for AFH use.
          </li>
          <li>
            Health / environmental review as applicable (Lewis County Health
            Department).
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          WABO AFH Initial Inspection Preparation Checklist (summary)
        </h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
          <li>Letter-sized (8.5×11) floor plan with all rooms, dimensions, hallways, doorways, exits.</li>
          <li>Sleeping room classification (Type NS1, NS2, S) on plan.</li>
          <li>Egress windows ≥ 5.7 sq ft (IRC R310).</li>
          <li>Doors ≥ 32&quot; clear, one-hand operable (IRC R330.4).</li>
          <li>Smoke/CO alarms every level (IRC R314/R315/R330.5).</li>
          <li>Fire extinguisher 2A:10B:C, one per floor (IRC R330.5).</li>
          <li>Grab bars in all bathrooms (IRC R330.8); 30×48 shower clear.</li>
          <li>Entry ramp 1:12 slope, 36&quot; wide, handrails (IRC R330.9).</li>
          <li>Postings: resident rights (WAC 388-76-10530).</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Other WA cities (same workflow)
        </h2>
        <p className="text-slate-600">
          Chehalis, Lacey, Tumwater, Olympia — use the same floor plan workflow
          (floorplan → isometric → mixboard → notebooklm) and WAC/IRC/WABO
          requirements. Submit to each city&apos;s Building Division with their
          local permit application and fee schedule.
        </p>
      </section>

      <p className="text-slate-600">
        <Link href="/case-study" className="underline">
          Case Study: 2606 Cooks Hill Rd
        </Link>{" "}
        includes a full submission package for Centralia.{" "}
        <Link href="/floor-plan" className="underline">
          Floor Plan Entry
        </Link>{" "}
        generates permit-ready text diagrams you can attach to applications.
      </p>
    </div>
    </div>
  );
}
