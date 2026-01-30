/**
 * Consultant curriculum: AFH operations in compliance with WA Initial Inspection.
 * Cookbook-style guidance using AI (clawdbot, moltbot) for paperwork automation.
 */

export interface Module {
  week: number;
  title: string;
  objectives: string[];
  content: string[];
  moltbot: string[];
  questions: string[];
}

export const curriculum: Module[] = [
  {
    week: 1,
    title: "Introduction to AFH Operations and Consultant Role",
    objectives: [
      "Understand AFH basics, challenges, and consultant value.",
      "Set up moltbot and run first automation.",
    ],
    content: [
      "AFH definition: residential homes licensed for up to 6 (or 8 with approval) unrelated adults needing care (RCW 70.128; WAC 388-76).",
      "Common pitfalls: lack of preparation → failed inspections (e.g., non-compliant bedrooms per IRC R330), high staff turnover, insurance issues. 30–40% of new operators face citations in first inspections due to incomplete paperwork.",
      "Consultant role: concierge guiding clients from ideation to post-inspection operations; use AI to handle ~80% of admin work.",
      "Best practices: base advice on WAC (e.g., resident rights WAC 388-76-10500), IRC (egress R310), and community insights.",
    ],
    moltbot: [
      "moltbot onboard --install-daemon",
      "moltbot doctor",
      "moltbot agent --message \"Summarize WAC 388-76 requirements for AFH licensing\" --thinking high",
    ],
    questions: [
      "What is your plan for resident egress in emergencies? (IRC R330.3; Type NS1 rooms need grade-level exits.)",
    ],
  },
  {
    week: 2,
    title: "Licensing and Qualification Requirements",
    objectives: [
      "Guide clients through pre-licensure steps.",
      "Automate checklists and reminders with moltbot.",
    ],
    content: [
      "75-hour basic training + specialty (e.g., dementia WAC 388-112A).",
      "Background checks: all staff/household (WAC 388-76-10180).",
      "Liability insurance: minimum $1M (WAC 388-76-10191).",
      "Application: DSHS portal; fee ~$450/bed (confirm current rate).",
    ],
    moltbot: [
      "moltbot channels login",
      "moltbot agent --message \"Generate AFH licensing checklist based on WAC 388-76\"",
      "Cron/skills for weekly training progress reminders.",
    ],
    questions: [
      "How will you ensure staff meet disqualifying crimes criteria? (WAC 388-76-10180; protects residents per DSHS SOP.)",
    ],
  },
  {
    week: 3,
    title: "Home Preparation and Building Compliance (Part 1)",
    objectives: [
      "Assess and modify homes for WABO compliance.",
      "Use moltbot for 80% of drawing/checklist automation.",
    ],
    content: [
      "Site selection: safe, accessible (WAC 388-76-10760).",
      "Bedrooms ≥70 sq ft (WAC 388-76-10685); grab bars (IRC R330.8); smoke/CO alarms (IRC R314/R315).",
      "WABO checklist: egress types NS1/NS2/S (IRC R330.3); ramps (IRC R330.9).",
    ],
    moltbot: [
      "moltbot agent --message \"Generate WABO-compliant floor plan for AFH conversion using IRC R330; input: [beds], [sq ft]\" --thinking high",
      "Workflow: floorplan → isometric (Nano Banana/Gemini) → mixboard → notebooklm for proposal PDF.",
    ],
    questions: [
      "Does each bedroom meet 5.7 sq ft egress window requirements? (IRC R310; escape in fires, WABO best practices.)",
    ],
  },
  {
    week: 4,
    title: "Home Preparation and Building Compliance (Part 2)",
    objectives: [
      "Complete physical modifications and local permit prep.",
      "Automate 2D→3D and submission forms.",
    ],
    content: [
      "Local inspections: WABO AFH Local Building Inspection Checklist; letter-sized floor plan with dimensions, exits, classifications.",
      "Centralia/Chehalis/Lacey/Tumwater/Olympia: submit to Building Division with site plan, elevations, details.",
    ],
    moltbot: [
      "moltbot agent --message \"Convert 2D floor plan to isometric using Nano Banana prompt: turn into isometric 3D, black walls, AFH mods\"",
      "moltbot models status",
    ],
    questions: [
      "Does the home have Type NS1 egress for all main-floor bedrooms? (IRC R330.3; quick evacuation, WABO fire safety.)",
    ],
  },
  {
    week: 5,
    title: "Documentation and Paperwork Automation",
    objectives: [
      "Automate resident agreements, care plans, submissions.",
    ],
    content: [
      "Negotiated care plans (WAC 388-76-10350); resident rights (WAC 388-76-10540); emergency plans (WAC 388-76-10820).",
      "Use DSHS templates; maintain records digitally.",
    ],
    moltbot: [
      "moltbot message send --to [client] --message \"Generated care plan PDF per WAC\"",
      "moltbot config set for AFH-specific prompts.",
    ],
    questions: [
      "How will you manage resident funds over $100? (WAC 388-76-10561; interest-bearing accounts, best practices.)",
    ],
  },
  {
    week: 6,
    title: "Staffing and Operations",
    objectives: [
      "Hire, train, and manage staff compliantly.",
    ],
    content: [
      "Qualified caregiver always present (WAC 388-76-10200); 75 hours + CE (WAC 388-112A); succession planning (WAC 388-76-10201).",
    ],
    moltbot: [
      "moltbot agent --message \"Screen resumes for AFH caregiver qualifications per WAC\"",
      "moltbot status --all",
    ],
    questions: [
      "What training is required for dementia care? (WAC 388-112A-0440; 8 hours specialized support.)",
    ],
  },
  {
    week: 7,
    title: "Initial Inspection and Post-Inspection",
    objectives: [
      "Prepare for and pass inspection; sustain compliance.",
    ],
    content: [
      "DSHS AFH Initial Inspection Preparation Checklist: postings, rooms, safety, drills (every 2 months WAC 388-76-10895).",
      "Inspections every 15–24 months; POC for deficiencies (WAC 388-76-10930).",
    ],
    moltbot: [
      "moltbot doctor --repair",
      "Automate mock checklists via agent.",
    ],
    questions: [
      "What must be posted for resident rights? (WAC 388-76-10530; written notice.)",
    ],
  },
  {
    week: 8,
    title: "Capstone and Top 100 Questions",
    objectives: [
      "Synthesize knowledge; prepare for AFH admin training.",
    ],
    content: [
      "Review all modules; emphasize logical reasoning: select answers based on WAC priority over opinion.",
      "Top 100 questions: Licensing (1–20), Physical Environment (21–40), Safety/Fire (41–60), Resident Care (61–80), Operations (81–100).",
    ],
    moltbot: [
      "moltbot agent --message \"Generate AFH admin practice quiz from WAC 388-76 and IRC R330\" --thinking high",
    ],
    questions: [
      "Minimum bedroom size? (70 sq ft; WAC 388-76-10685.)",
      "Fire extinguisher rating? (2A:10B:C; IRC R330.5.)",
    ],
  },
];
