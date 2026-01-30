import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AFH Permit Automation | WABO-Compliant Drawings & City Submissions",
  description:
    "Automate AFH permit preparation: floor plans, WAC/IRC compliance, City of Centralia & Lewis County submissions. Design agent workflow: floorplan → isometric → mixboard → notebooklm.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        <header className="border-b border-slate-200 bg-white/90 sticky top-0 z-10">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex flex-wrap items-center gap-4">
            <a href="/" className="font-semibold text-slate-800">
              AFH Permit Automation
            </a>
            <a href="/floor-plan" className="text-slate-600 hover:text-slate-900">
              Floor Plan
            </a>
            <a href="/compliance" className="text-slate-600 hover:text-slate-900">
              Compliance
            </a>
            <a href="/permits" className="text-slate-600 hover:text-slate-900">
              Permit Forms
            </a>
            <a href="/case-study" className="text-slate-600 hover:text-slate-900">
              Case Study: 2606 Cooks Hill Rd
            </a>
            <a href="/curriculum" className="text-slate-600 hover:text-slate-900">
              Curriculum
            </a>
            <a href="/top-100" className="text-slate-600 hover:text-slate-900">
              Top 100 Questions
            </a>
            <a href="/moltbot" className="text-slate-600 hover:text-slate-900">
              Moltbot / Clawdbot
            </a>
          </nav>
        </header>
        <main className="min-h-screen w-full">{children}</main>
      </body>
    </html>
  );
}
