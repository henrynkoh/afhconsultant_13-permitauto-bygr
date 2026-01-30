"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const SECTIONS = [
  { id: "hero", label: "Home", href: "#hero" },
  { id: "floor-plan", label: "Floor Plan", href: "#floor-plan" },
  { id: "compliance", label: "Compliance", href: "#compliance" },
  { id: "permits", label: "Permit Forms", href: "#permits" },
  { id: "case-study", label: "Case Study", href: "#case-study" },
  { id: "curriculum", label: "Curriculum", href: "#curriculum" },
  { id: "top-100", label: "Top 100 Questions", href: "#top-100" },
  { id: "moltbot", label: "Moltbot / Clawdbot", href: "#moltbot" },
  { id: "features", label: "Features & Functions", href: "#features" },
];

// Repo URL (override with NEXT_PUBLIC_GITHUB_URL in .env)
const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || "https://github.com/henrynkoh/afhconsultant_13-permitauto-bygr";

function NavSidebar() {
  const [activeId, setActiveId] = useState<string>("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <aside className="w-56 shrink-0 sticky top-[57px] h-[calc(100vh-57px)] overflow-y-auto border-r border-slate-200/80 bg-white/95 backdrop-blur supports-[overflow:overlay]:overflow-y-overlay">
      <nav className="p-4 space-y-0.5" aria-label="Section navigation">
        {SECTIONS.map(({ id, label, href }) => (
          <a
            key={id}
            href={href}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
            }}
            className={`block rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
              activeId === id
                ? "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

function Section({
  id,
  title,
  children,
  className = "",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-20 py-12 md:py-16 ${className}`}
      aria-labelledby={`${id}-heading`}
    >
      <h2
        id={`${id}-heading`}
        className="text-2xl font-bold text-slate-900 dark:text-white mb-6"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function Card({
  href,
  title,
  description,
  accent = "emerald",
}: {
  href: string;
  title: string;
  description: string;
  accent?: "emerald" | "violet" | "amber" | "sky" | "rose";
}) {
  const accents = {
    emerald: "border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-100 dark:border-emerald-800 dark:hover:border-emerald-600",
    violet: "border-violet-200 hover:border-violet-400 hover:shadow-violet-100 dark:border-violet-800 dark:hover:border-violet-600",
    amber: "border-amber-200 hover:border-amber-400 hover:shadow-amber-100 dark:border-amber-800 dark:hover:border-amber-600",
    sky: "border-sky-200 hover:border-sky-400 hover:shadow-sky-100 dark:border-sky-800 dark:hover:border-sky-600",
    rose: "border-rose-200 hover:border-rose-400 hover:shadow-rose-100 dark:border-rose-800 dark:hover:border-rose-600",
  };
  return (
    <Link
      href={href}
      className={`block p-5 rounded-xl border-2 bg-white dark:bg-slate-800/80 shadow-sm hover:shadow-md transition-all duration-200 ${accents[accent]}`}
    >
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 dark:text-slate-300">{description}</p>
    </Link>
  );
}

export default function LandingPage() {
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-950">
      <NavSidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="max-w-4xl mx-auto px-6 pb-24">
          {/* Hero */}
          <section
            id="hero"
            className="scroll-mt-20 pt-12 pb-16 md:pt-16 md:pb-24"
            aria-labelledby="hero-heading"
          >
            <h1
              id="hero-heading"
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              AFH Permit Automation
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mb-6">
              Prepare WABO-compliant Adult Family Home permits for Washington
              cities. Enter floor plan data and dimensions → get permit-ready
              drawings and paperwork. DIY, without a third-party architect.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/floor-plan"
                className="inline-flex items-center justify-center rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Start Floor Plan
              </Link>
              <Link
                href="/case-study"
                className="inline-flex items-center justify-center rounded-lg border-2 border-slate-300 dark:border-slate-600 px-5 py-2.5 text-sm font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                View Case Study
              </Link>
            </div>
            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Centralia · Lewis County · Chehalis · Lacey · Tumwater · Olympia
            </p>
          </section>

          {/* Floor Plan */}
          <Section id="floor-plan" title="Floor Plan Entry">
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              Enter rooms and dimensions. Workflow: floorplan → isometric →
              mixboard → notebooklm for city permit application.
            </p>
            <Card
              href="/floor-plan"
              title="Floor Plan Entry"
              description="Property, floors, rooms (bedrooms, bathrooms, living, kitchen). Egress type, grab bars, alarms. Get permit-ready text floor plan and compliance snapshot."
              accent="emerald"
            />
          </Section>

          {/* Compliance */}
          <Section id="compliance" title="WAC / IRC / WABO Compliance">
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              Bedroom size, egress, grab bars, alarms, ramps, doors—meet local
              building inspector AFH requirements.
            </p>
            <Card
              href="/compliance"
              title="Compliance"
              description="Key codes (WAC 388-76, IRC R310/R330). Current vs future plan comparison. Fix gaps before submission."
              accent="violet"
            />
          </Section>

          {/* Permits */}
          <Section id="permits" title="Permit Forms & Checklist">
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              City of Centralia, Lewis County, and WABO AFH Initial Inspection
              Preparation Checklist.
            </p>
            <Card
              href="/permits"
              title="Permit Forms"
              description="Centralia Building Permit, Lewis County (septic), WABO checklist. Other WA cities: same workflow."
              accent="sky"
            />
          </Section>

          {/* Case Study */}
          <Section id="case-study" title="Case Study: 2606 Cooks Hill Rd">
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              Single-family home → WABO AFH conversion with current and future
              floor plans and Centralia submission package.
            </p>
            <Card
              href="/case-study"
              title="2606 Cooks Hill Rd, Centralia 98531"
              description="Current vs future floor plans, modifications list, compliance snapshot, submission package for Centralia & Lewis County."
              accent="amber"
            />
          </Section>

          {/* Curriculum */}
          <Section id="curriculum" title="Consultant Curriculum">
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              End-to-end training for AFH consultants: what to prepare, how to
              prepare, AFH Initial Inspection Preparation Checklist.
            </p>
            <Card
              href="/curriculum"
              title="8-Week Curriculum"
              description="Intro, Licensing, Home Prep, Documentation, Staffing, Inspection, Capstone. Moltbot integration per week."
              accent="emerald"
            />
          </Section>

          {/* Top 100 */}
          <Section id="top-100" title="Top 100 AFH Admin Questions">
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              WAC, IRC, and best-practice Q&A with explanations for AFH admin
              training.
            </p>
            <Card
              href="/top-100"
              title="Top 100 Questions"
              description="Filter by category. Show/hide answers and code references. Licensing, Physical Environment, Safety, Resident Care, Operations."
              accent="rose"
            />
          </Section>

          {/* Moltbot */}
          <Section id="moltbot" title="Moltbot / Clawdbot Integration">
            <p className="text-slate-600 dark:text-slate-300 mb-6 max-w-2xl">
              Top 10 scripts and workflows to automate AFH inspection paperwork
              with personal AI assistant (clawdbot, moltbot).
            </p>
            <Card
              href="/moltbot"
              title="Moltbot / Clawdbot"
              description="Onboard, gateway, channels, agent, doctor, status, models, logs, config. AFH-specific automation examples."
              accent="violet"
            />
          </Section>

          {/* Features & Functions */}
          <Section id="features" title="Features & Functions">
            <ul className="grid gap-4 sm:grid-cols-2 text-slate-600 dark:text-slate-300">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5" aria-hidden>✓</span>
                <span>Floor plan entry with property, floors, rooms, dimensions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5" aria-hidden>✓</span>
                <span>WAC/IRC/WABO compliance checks (bedroom, egress, grab bars, ramp, doors, alarms)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5" aria-hidden>✓</span>
                <span>Permit-ready text floor plan for submission or 2D→3D pipeline</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5" aria-hidden>✓</span>
                <span>Permit forms: Centralia, Lewis County, WABO checklist</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5" aria-hidden>✓</span>
                <span>Case study: 2606 Cooks Hill Rd — current vs future plan</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5" aria-hidden>✓</span>
                <span>8-week consultant curriculum + Top 100 AFH questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5" aria-hidden>✓</span>
                <span>Moltbot/Clawdbot scripts for paperwork automation</span>
              </li>
            </ul>
          </Section>
        </div>
      </div>

      {/* Bottom-right GitHub link */}
      <a
        href={GITHUB_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 px-4 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
        aria-label="Open repository on GitHub"
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
        GitHub
      </a>
    </div>
  );
}
