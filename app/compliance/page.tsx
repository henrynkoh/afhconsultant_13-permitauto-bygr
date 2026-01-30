import Link from "next/link";
import { caseStudyProperty } from "@/lib/caseStudy";
import { checkCompliance } from "@/lib/compliance";

export default function CompliancePage() {
  const { current, future } = caseStudyProperty();
  const currentItems = checkCompliance(current);
  const futureItems = checkCompliance(future);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          WAC / IRC / WABO Compliance
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Requirements for AFH permit and local building inspector (WABO). Each
          drawing component must meet WAC, IRC, and best practices for AFH
          Initial Inspection.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Key codes
        </h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
          <li>
            <strong>WAC 388-76-10685</strong> — Bedroom minimum 70 sq ft single
          </li>
          <li>
            <strong>WAC 388-76-10690</strong> — Usable floor space (exclude
            closets/toilets)
          </li>
          <li>
            <strong>WAC 388-76-10795</strong> — Egress windows (sill, size,
            operability)
          </li>
          <li>
            <strong>IRC R310</strong> — Egress opening ≥ 5.7 sq ft (24&quot; H,
            20&quot; W, sill ≤ 44&quot;)
          </li>
          <li>
            <strong>IRC R330.3</strong> — Sleeping room classification (Type
            NS1, NS2, S)
          </li>
          <li>
            <strong>IRC R330.4</strong> — Doors ≥ 32&quot;, one-hand operable
          </li>
          <li>
            <strong>IRC R330.5</strong> — Smoke/CO alarms, fire extinguisher
            2A:10B:C
          </li>
          <li>
            <strong>IRC R330.8</strong> — Grab bars (1¼–2&quot;, 250 lb
            strength)
          </li>
          <li>
            <strong>IRC R330.9</strong> — Ramp 1:12 slope, 36&quot; wide,
            handrails
          </li>
        </ul>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">
            Current plan (example: 2606 Cooks Hill Rd) — gaps
          </h2>
          <ul className="space-y-1 text-sm">
            {currentItems.map((i) => (
              <li
                key={i.id}
                className={i.met ? "text-slate-600" : "text-amber-700"}
              >
                {i.met ? "✓" : "○"} {i.code}: {i.title}
                {i.note && ` — ${i.note}`}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-slate-800 mb-2">
            Future (AFH-modified) plan — compliance
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
        </div>
      </section>

      <p className="text-slate-600">
        <Link href="/floor-plan" className="underline">
          Floor Plan Entry
        </Link>{" "}
        lets you enter your own dimensions and see live compliance.{" "}
        <Link href="/case-study" className="underline">
          Case Study: 2606 Cooks Hill Rd
        </Link>{" "}
        shows full current vs future plans.
      </p>
    </div>
    </div>
  );
}
