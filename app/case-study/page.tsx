import Link from "next/link";
import { caseStudyProperty } from "@/lib/caseStudy";
import { floorPlanToText } from "@/lib/floorPlanText";
import { checkCompliance, complianceOverall } from "@/lib/compliance";

export default function CaseStudyPage() {
  const { current, future } = caseStudyProperty();
  const currentText = floorPlanToText(current);
  const futureText = floorPlanToText(future);
  const currentItems = checkCompliance(current);
  const futureItems = checkCompliance(future);
  const futureOk = complianceOverall(futureItems);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="space-y-10">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Case Study: 2606 Cooks Hill Rd, Centralia 98531
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Single-family home → WABO-compliant AFH conversion. Current floor
          plan vs future (modified) floor plan, with submission package for City
          of Centralia and Lewis County.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Subject property
        </h2>
        <ul className="text-slate-600 list-disc list-inside space-y-1">
          <li>Address: 2606 Cooks Hill Rd, Centralia, WA 98531</li>
          <li>1948-built, 2,836 sq ft single-family rambler with basement</li>
          <li>4.51 acres; 4 main-floor bedrooms, 3 baths (1 full, 2 three-quarter)</li>
          <li>Basement rec room; hardwood floors, heat pump/AC, granite kitchen</li>
          <li>Back patio with fireplace; detached 9-car garage/carport</li>
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">
            Current floor plan (single-family)
          </h2>
          <pre className="p-4 rounded-lg bg-slate-100 text-sm overflow-auto max-h-96 whitespace-pre-wrap font-mono">
            {currentText}
          </pre>
          <p className="mt-2 text-sm text-amber-700">
            Gaps: no ramp, 28&quot; doors, no grab bars, egress windows &lt;5.7 sq
            ft, no alarms/extinguisher noted.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">
            Future floor plan (WABO AFH)
          </h2>
          <pre className="p-4 rounded-lg bg-slate-100 text-sm overflow-auto max-h-96 whitespace-pre-wrap font-mono">
            {futureText}
          </pre>
          <p className={`mt-2 text-sm font-medium ${futureOk ? "text-green-700" : "text-amber-700"}`}>
            {futureOk ? "All WAC/IRC/WABO checks pass." : "Some items still need attention."}
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Modifications (current → future)
        </h2>
        <ul className="text-slate-600 list-disc list-inside space-y-1">
          <li>Entry: add 20 ft ramp (1:12 slope), 36&quot; wide, handrails (IRC R330.9).</li>
          <li>Doors: widen to 32&quot;, lever hardware (IRC R330.4).</li>
          <li>Bedrooms: upgrade egress windows to ≥5.7 sq ft (IRC R310); label Type NS1 main, Type NS2 basement.</li>
          <li>Bathrooms: add grab bars (IRC R330.8), 30×48 shower clear.</li>
          <li>Alarms: smoke/CO interconnected, every level (IRC R314/R315/R330.5).</li>
          <li>Fire extinguisher: 2A:10B:C, one per floor (IRC R330.5).</li>
          <li>Basement: partition rec into Bed5 &amp; Bed6 (10×10 ft each); add sprinklers for Type NS2; add grab bars in Bath3.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Compliance snapshot (future plan)
        </h2>
        <ul className="space-y-1 text-sm">
          {futureItems.map((i) => (
            <li
              key={i.id}
              className={i.met ? "text-green-700" : "text-amber-700"}
            >
              {i.met ? "✓" : "○"} {i.code}: {i.title}
              {i.note && ` — ${i.note}`}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Submission package (City of Centralia &amp; Lewis County)
        </h2>
        <ul className="text-slate-600 list-disc list-inside space-y-1">
          <li>
            <strong>Centralia Building Permit</strong> — Application with site
            plan, floor plan (8.5×11) showing rooms, dimensions, exits,
            classifications; WABO AFH Local Building Inspection Checklist
            (passed: alarms, egress, grab bars, ramp).
          </li>
          <li>
            <strong>Lewis County</strong> — Septic review for 6 residents;
            confirm capacity for AFH use.
          </li>
          <li>
            Attach the &quot;Future floor plan&quot; text diagram (or
            isometric/PDF from floorplan → isometric → mixboard → notebooklm
            workflow) and compliance checklist.
          </li>
        </ul>
      </section>

      <p className="text-slate-600">
        <Link href="/floor-plan" className="underline">
          Floor Plan Entry
        </Link>{" "}
        lets you replicate this workflow for any property.{" "}
        <Link href="/permits" className="underline">
          Permit Forms
        </Link>{" "}
        lists required forms and checklist items.
      </p>
    </div>
    </div>
  );
}
