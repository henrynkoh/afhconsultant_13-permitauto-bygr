import Link from "next/link";

const scripts = [
  {
    name: "Onboard (initial setup + install daemon)",
    cmd: "moltbot onboard --install-daemon",
    note: "Guided setup; headless: pnpm moltbot onboard --yes",
  },
  {
    name: "Gateway (run the Gateway)",
    cmd: "moltbot gateway --port 18789 --verbose",
    note: "Start long-running WebSocket control plane.",
  },
  {
    name: "Channels login (pair channels)",
    cmd: "moltbot channels login",
    note: "Pair channel adapters (e.g., WhatsApp Web QR).",
  },
  {
    name: "Message send (test outbound)",
    cmd: "moltbot message send --to +15555550123 --message \"Hello from Moltbot\"",
    note: "Verify outbound channel; use --target for older examples.",
  },
  {
    name: "Agent (talk to assistant)",
    cmd: "moltbot agent --message \"Ship checklist\" --thinking high",
    note: "Send tasks to agent; routes back to channels if desired.",
  },
  {
    name: "Doctor (health checks + repairs)",
    cmd: "moltbot doctor",
    note: "Also: --repair, --repair --force, --deep. Use --yes for headless.",
  },
  {
    name: "Status (gateway & agent snapshot)",
    cmd: "moltbot status",
    note: "Also: moltbot status --all, moltbot gateway status.",
  },
  {
    name: "Models status (provider auth)",
    cmd: "moltbot models status",
    note: "Check Anthropic, OpenAI, etc. availability.",
  },
  {
    name: "Logs (tail logs)",
    cmd: "moltbot logs --follow",
    note: "Debug runtime; use while reproducing issues.",
  },
  {
    name: "Config (get/set/unset)",
    cmd: "moltbot config",
    note: "Interactive wizard. Or: config get/set/unset keys (e.g. channels.whatsapp.allowFrom).",
  },
];

export default function MoltbotPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-slate-900 mb-2">
          Moltbot / Clawdbot Integration
        </h1>
        <p className="text-slate-600 max-w-2xl">
          Top 10 scripts to use clawdbot/moltbot for AFH inspection preparation
          paperwork. Use the personal AI assistant to handle most time-consuming
          tasks per WAC and best practices (floorplan → isometric → mixboard →
          notebooklm workflow).
        </p>
      </div>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Prerequisite
        </h2>
        <p className="text-slate-600 mb-2">
          Node ≥ 22. Install:{" "}
          <code className="bg-slate-100 px-1 rounded text-sm">
            npm install -g moltbot@latest
          </code>{" "}
          or{" "}
          <code className="bg-slate-100 px-1 rounded text-sm">
            pnpm add -g moltbot@latest
          </code>
          . From source: pnpm install, pnpm ui:build, pnpm build, then run via{" "}
          <code className="bg-slate-100 px-1 rounded text-sm">pnpm moltbot ...</code>{" "}
          or <code className="bg-slate-100 px-1 rounded text-sm">./bin/moltbot</code>.
          Compatibility alias: <code className="bg-slate-100 px-1 rounded text-sm">clawdbot</code>.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Top 10 Moltbot / Clawdbot commands
        </h2>
        <ul className="space-y-4">
          {scripts.map((s, i) => (
            <li
              key={i}
              className="p-4 rounded-lg border border-slate-200 bg-white"
            >
              <p className="font-medium text-slate-800">{i + 1}. {s.name}</p>
              <p className="text-slate-600 text-sm mt-1">
                <code className="bg-slate-100 px-1 rounded text-xs break-all">
                  {s.cmd}
                </code>
              </p>
              <p className="text-slate-500 text-sm mt-1">{s.note}</p>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          AFH-specific automation
        </h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
          <li>
            <strong>Checklists:</strong>{" "}
            <code className="bg-slate-100 px-1 rounded text-sm">
              moltbot agent --message &quot;Generate AFH licensing checklist based on WAC 388-76&quot; --thinking high
            </code>
          </li>
          <li>
            <strong>Floor plan analysis:</strong>{" "}
            <code className="bg-slate-100 px-1 rounded text-sm">
              moltbot agent --message &quot;Analyze floor plan for AFH compliance per WAC 388-76 and IRC R330&quot; --thinking high
            </code>
          </li>
          <li>
            <strong>WABO checklist:</strong>{" "}
            <code className="bg-slate-100 px-1 rounded text-sm">
              moltbot agent --message &quot;Fetch and fill WABO AFH checklist form&quot;
            </code>
          </li>
          <li>
            <strong>2D → 3D (Nano Banana / Gemini):</strong> Use agent to send
            prompt: &quot;Convert 2D floor plan to isometric 3D model, add AFH mods: black walls, ramps, grab bars.&quot;
          </li>
          <li>
            <strong>Config for AFH:</strong>{" "}
            <code className="bg-slate-100 px-1 rounded text-sm">
              moltbot config set messages.groupChat.mentionPatterns &apos;[&quot;@clawd&quot;]&apos;
            </code>
          </li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold text-slate-800 mb-2">
          Quick tips
        </h2>
        <ul className="list-disc list-inside text-slate-600 space-y-1">
          <li>Use <code className="bg-slate-100 px-1 rounded text-sm">--yes</code> for headless (e.g., moltbot doctor --yes).</li>
          <li>Run <code className="bg-slate-100 px-1 rounded text-sm">moltbot logs --follow</code> while reproducing issues.</li>
          <li>Multiple gateways: CLAWDBOT_CONFIG_PATH, CLAWDBOT_STATE_DIR, different --port.</li>
          <li>Debug: moltbot models status, moltbot doctor, moltbot gateway status, moltbot health --verbose.</li>
        </ul>
      </section>

      <p className="text-slate-600">
        <Link href="/curriculum" className="underline">
          Curriculum
        </Link>{" "}
        integrates these commands into consultant training.{" "}
        <Link href="/floor-plan" className="underline">
          Floor Plan
        </Link>{" "}
        and{" "}
        <Link href="/case-study" className="underline">
          Case Study
        </Link>{" "}
        show the workflow applied to real property.
      </p>
    </div>
    </div>
  );
}
