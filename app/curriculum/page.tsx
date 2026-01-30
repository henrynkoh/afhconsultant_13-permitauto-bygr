import Link from "next/link";
import { curriculum } from "@/lib/curriculum";

export default function CurriculumPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Consultant Curriculum
        </h1>
        <p className="text-slate-600 max-w-2xl">
          End-to-end training for prospective AFH consultants, advisors, and
          concierges: what to prepare and how to prepare for AFH business in
          compliance with the AFH Initial Inspection Preparation Checklist.
          Uses personal AI assistant (clawdbot, moltbot) to handle most
          time-consuming paperwork per WAC and best practices.
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Program overview
        </h2>
        <ul className="text-slate-600 list-disc list-inside space-y-1">
          <li>8 weeks, ~4–6 hours/week (lectures, hands-on moltbot, role-play).</li>
          <li>Assessment: quizzes on WAC/IRC, moltbot scripts, capstone AFH setup.</li>
          <li>Emphasis: what questions inspectors ask; how to select the right answer based on WAC, IRC, best practices.</li>
        </ul>
      </section>

      <div className="space-y-10">
        {curriculum.map((mod) => (
          <section
            key={mod.week}
            className="p-6 rounded-xl border border-slate-200 bg-white"
          >
            <h2 className="text-lg font-semibold text-slate-800 mb-2">
              Week {mod.week}: {mod.title}
            </h2>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Objectives
            </h3>
            <ul className="list-disc list-inside text-slate-600 text-sm mb-4">
              {mod.objectives.map((o, i) => (
                <li key={i}>{o}</li>
              ))}
            </ul>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Key content
            </h3>
            <ul className="list-disc list-inside text-slate-600 text-sm mb-4">
              {mod.content.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Moltbot / Clawdbot
            </h3>
            <ul className="list-disc list-inside text-slate-600 text-sm mb-4">
              {mod.moltbot.map((m, i) => (
                <li key={i}>
                  <code className="bg-slate-100 px-1 rounded text-xs">{m}</code>
                </li>
              ))}
            </ul>
            <h3 className="text-sm font-medium text-slate-600 mb-1">
              Sample questions to ask clients
            </h3>
            <ul className="list-disc list-inside text-slate-600 text-sm">
              {mod.questions.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <p className="text-slate-600">
        <Link href="/top-100" className="underline">
          Top 100 AFH Admin Questions
        </Link>{" "}
        for practice.{" "}
        <Link href="/moltbot" className="underline">
          Moltbot / Clawdbot
        </Link>{" "}
        for scripts and automation.
      </p>
    </div>
    </div>
  );
}
