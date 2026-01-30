"use client";

import { useState } from "react";
import { top100 } from "@/lib/top100";

export default function Top100Page() {
  const [filter, setFilter] = useState<string>("all");
  const [reveal, setReveal] = useState<Record<number, boolean>>({});

  const categories = ["all", ...Array.from(new Set(top100.map((q) => q.category)))];
  const filtered =
    filter === "all"
      ? top100
      : top100.filter((q) => q.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Top 100 AFH Admin Questions
        </h1>
        <p className="text-slate-600 max-w-2xl">
          WAC, IRC, and best-practice Q&A with explanations for AFH admin
          training. Select the right answer based on WAC/IRC and logical
          reasoning.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1.5 rounded ${
              filter === cat ? "bg-slate-800 text-white" : "bg-slate-200 text-slate-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <ul className="space-y-6">
        {filtered.map((q) => (
          <li
            key={q.id}
            className="p-4 rounded-lg border border-slate-200 bg-white"
          >
            <p className="font-medium text-slate-800 mb-2">
              {q.id}. [{q.category}] {q.question}
            </p>
            <ul className="space-y-1 mb-2">
              {q.options.map((opt) => (
                <li key={opt.letter} className="text-slate-600">
                  {opt.letter}) {opt.text}
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mb-1">
              <strong>Code:</strong> {q.code}
            </p>
            <button
              type="button"
              onClick={() =>
                setReveal((r) => ({ ...r, [q.id]: !r[q.id] }))
              }
              className="text-sm text-slate-600 underline"
            >
              {reveal[q.id] ? "Hide" : "Show"} answer &amp; explanation
            </button>
            {reveal[q.id] && (
              <div className="mt-2 p-2 rounded bg-slate-100 text-sm">
                <p className="text-green-700 font-medium">
                  Correct: {q.correct}){" "}
                  {q.options.find((o) => o.letter === q.correct)?.text}
                </p>
                <p className="text-slate-600 mt-1">{q.explanation}</p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
}
