"use client";

import { useState } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Clock,
  UserCheck,
  Database,
  Mail,
  Bell,
  CheckSquare,
  BarChart2,
  Puzzle,
} from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import {
  SolutionFinalCTA,
  SolutionHead,
  SolutionHero,
  SolutionSection,
} from "@/components/solutions/SolutionUI";
import { Sparkle, SunBurst } from "@/components/brand/Botanical";

const relatedSolutions = [
  { title: "AI Agents & Voice Assistants", description: "Automate conversations and handle leads around the clock.", href: "/solutions/ai-agents" },
  { title: "Conversation Intelligence", description: "Use conversation data to improve your workflows further.", href: "/solutions/conversation-intelligence" },
  { title: "AI-Powered Websites", description: "Start the workflow with a website built to capture leads.", href: "/solutions/ai-driven-websites" },
];

const features = [
  { icon: UserCheck, title: "Lead Routing", desc: "Send inquiries to the right person instantly." },
  { icon: Database, title: "CRM Sync", desc: "Sync records automatically." },
  { icon: BarChart2, title: "Reporting", desc: "Generate recurring reports automatically." },
  { icon: Bell, title: "Notifications", desc: "Alert teams when action is needed." },
  { icon: CheckSquare, title: "Approval Flows", desc: "Move requests through clear steps." },
  { icon: Mail, title: "Follow-ups", desc: "Send emails, reminders, and updates." },
  { icon: Puzzle, title: "Multi-app Workflows", desc: "Connect tools into one system." },
];

const departmentWorkflows: Record<string, { steps: string[]; desc: string }> = {
  Sales: {
    desc: "New lead enters, gets scored, assigned to rep, CRM updated, follow-up scheduled.",
    steps: ["New Lead", "Score Lead", "Assign Rep", "Update CRM", "Schedule Follow-up"],
  },
  HR: {
    desc: "Application received, screened, interview scheduled, team notified, offer drafted.",
    steps: ["Application", "Screen", "Schedule Interview", "Notify Team", "Draft Offer"],
  },
  Operations: {
    desc: "Task requested, approved, assigned, tracked, completed, reported.",
    steps: ["Request", "Approve", "Assign", "Track", "Complete", "Report"],
  },
  Support: {
    desc: "Ticket created, categorized, assigned, resolved, feedback collected.",
    steps: ["New Ticket", "Categorize", "Assign Agent", "Resolve", "Collect Feedback"],
  },
};

const integrations = ["CRM", "Email", "Sheets", "Slack", "WhatsApp", "Internal Tools"];

function WorkflowMap({ steps, light = false }: { steps: string[]; light?: boolean }) {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
      {steps.map((step, i) => (
        <div key={i} className="flex items-center gap-2">
          <div
            className={`rounded-full border px-3.5 py-2 text-[11px] font-bold ${
              light
                ? "border-paper/25 bg-paper/[0.06] text-paper"
                : "border-ink/25 bg-cream text-ink"
            }`}
          >
            {step}
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className={`h-3.5 w-3.5 shrink-0 ${light ? "text-marigold" : "text-ink/35"}`} />
          )}
        </div>
      ))}
    </div>
  );
}

function TimeSavedEstimator() {
  const [tasks, setTasks] = useState(10);
  const [minutesPerTask, setMinutesPerTask] = useState(15);
  const hoursSaved = Math.round((tasks * minutesPerTask * 5) / 60);

  return (
    <div className="stamp mx-auto max-w-lg overflow-hidden rounded-[40px] border border-ink bg-parchment">
      <div className="border-b border-ink/15 bg-sage/60 p-6 text-center">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-marigold">
          <Clock className="h-5 w-5 text-ink" />
        </span>
        <h3 className="mt-3 text-[26px] uppercase leading-none">Time Saved Estimator</h3>
        <p className="mt-2 text-[12.5px] font-medium text-ink/60">
          See how much time automation could save your team weekly.
        </p>
      </div>
      <div className="space-y-5 p-6">
        <div className="space-y-2">
          <label className="flex items-center justify-between text-[12px] font-bold">
            <span>Repetitive tasks per day</span>
            <span className="pill pill-sage">{tasks}</span>
          </label>
          <input
            type="range"
            min={1}
            max={50}
            value={tasks}
            onChange={(e) => setTasks(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <p className="text-[11px] font-medium text-ink/50">tasks / day</p>
        </div>
        <div className="space-y-2">
          <label className="flex items-center justify-between text-[12px] font-bold">
            <span>Minutes per task</span>
            <span className="pill pill-sage">{minutesPerTask} min</span>
          </label>
          <input
            type="range"
            min={1}
            max={60}
            value={minutesPerTask}
            onChange={(e) => setMinutesPerTask(Number(e.target.value))}
            className="w-full accent-primary"
          />
          <p className="text-[11px] font-medium text-ink/50">min each</p>
        </div>
        <div className="border-t border-ink/15 pt-4 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink/50">
            Estimated hours saved per week
          </p>
          <p className="display mt-1 text-[56px] leading-none">{hoursSaved}h</p>
          <p className="mt-1 text-[12px] font-medium text-ink/55">
            That&apos;s {Math.round(hoursSaved / 40 * 100)}% of a full work week
          </p>
        </div>
      </div>
    </div>
  );
}

export default function AutonomousWorkflowsPage() {
  const [activeDept, setActiveDept] = useState("Sales");

  return (
    <div className="flex w-full flex-col items-center overflow-x-clip bg-paper">
      <SolutionHero
        eyebrow="Autonomous Workflows"
        title={
          <>
            Systems That Run <span className="italic">Without Constant Oversight</span>
          </>
        }
        description="Automate repetitive operations, reduce errors, and scale faster."
        bullets={["Saves Time", "Fewer Errors", "Built to Scale"]}
        visual={
          <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-parchment p-5 sm:p-6">
            <SunBurst className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 text-ink/[0.07]" />
            <div className="flex items-center justify-between border-b border-ink/15 pb-4">
              <span className="pill pill-marigold">
                <Sparkle className="h-3 w-3" />
                Workflow map
              </span>
              <span className="display text-[34px] leading-none">01</span>
            </div>
            <div className="relative mt-4 rounded-[24px] border border-ink/15 bg-cream/60 p-4">
              <WorkflowMap steps={["New Lead", "Check Rules", "Assign", "CRM Update", "Notify Team", "Follow-up"]} />
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-[20px] border border-ink/15 bg-sage/70 px-3.5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <p className="text-[11px] font-bold text-ink/65">Runs quietly, logs every step</p>
            </div>
          </div>
        }
      />

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="The leak"
          title="Where Time Gets Lost"
          description="Small manual gaps compound into days of lost capacity every month."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Manual entry", "Missed handoffs", "Slow approvals", "Repeated admin work"].map((pain, i) => (
            <div key={i} className="flex items-start gap-4 rounded-[28px] border border-ink/25 bg-parchment p-5">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <Clock className="h-4 w-4 text-ink" />
              </span>
              <div>
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink/40">
                  0{i + 1}
                </p>
                <p className="mt-1 text-[13px] font-bold leading-snug text-ink/80">{pain}</p>
              </div>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Automation"
          title="What We Automate"
          description="The connective tissue between your tools, your team and your customers."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[32px] border border-ink/25 bg-parchment p-5 transition hover:-translate-y-1 hover:border-ink"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <f.icon className="h-4 w-4 text-ink" />
              </span>
              <h3 className="mt-4 text-[21px] uppercase leading-none">{f.title}</h3>
              <p className="mt-2 text-[12px] font-medium leading-relaxed text-ink/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="forest">
        <SolutionHead
          tone="forest"
          eyebrow="By team"
          title="Department Workflow Examples"
          description="See how automation applies to different teams."
        />
        <div className="mb-7 flex flex-wrap justify-center gap-2">
          {Object.keys(departmentWorkflows).map((dept) => (
            <button
              key={dept}
              onClick={() => setActiveDept(dept)}
              className={`rounded-full border px-5 py-2.5 text-[12px] font-bold transition ${
                activeDept === dept
                  ? "border-marigold bg-marigold text-ink"
                  : "border-paper/25 bg-transparent text-paper/70 hover:border-paper/60 hover:text-paper"
              }`}
            >
              {dept}
            </button>
          ))}
        </div>
        <div className="mx-auto max-w-4xl rounded-[40px] border border-paper/20 bg-paper/[0.06] p-6 sm:p-8">
          <p className="mb-2 text-center text-[13px] font-medium leading-relaxed text-paper/65">
            {departmentWorkflows[activeDept].desc}
          </p>
          <WorkflowMap steps={departmentWorkflows[activeDept].steps} light />
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Estimate"
          title="How Much Time Could You Save?"
          description="A quick estimate based on the repetitive work your team handles."
        />
        <TimeSavedEstimator />
      </SolutionSection>

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Integrations"
          title="Connects With Your Tools"
          description="We wire your existing stack together instead of replacing it."
        />
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {integrations.map((int, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2 rounded-[24px] border border-ink/25 bg-parchment p-5 transition hover:-translate-y-0.5 hover:border-ink"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-ink/40" />
              <span className="text-[12px] font-bold">{int}</span>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead eyebrow="Why us" title="Why Work With Us" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Business-First", desc: "Every workflow is designed around your actual operations." },
            { title: "Hands-on Experience", desc: "We have built real automation systems across industries." },
            { title: "Custom Solutions", desc: "No generic templates. Everything fits your process." },
            { title: "Clean Integrations", desc: "We connect your tools without technical headaches." },
            { title: "Fast Setup", desc: "Most workflows are live within 2 to 4 weeks." },
            { title: "Ongoing Support", desc: "We adjust and improve as your business changes." },
          ].map((item, i) => (
            <div key={i} className="rounded-[32px] border border-ink/25 bg-parchment p-6">
              <ShieldCheck className="h-6 w-6 text-ink/70" />
              <h3 className="mt-4 text-[22px] uppercase leading-none">{item.title}</h3>
              <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-ink/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <RelatedSolutions solutions={relatedSolutions} />

      <SolutionPricing
        features={{
          starter: ["One workflow automation", "Notifications", "Basic CRM sync", "Process cleanup"],
          growth: ["Multi-step workflows", "Tool integrations", "Reporting automation", "Team handoff systems", "Ongoing improvements"],
          enterprise: ["Department-wide automation", "Approval systems", "Multi-tool architecture", "Scalable operations workflows"]
        }}
      />

      <SolutionFinalCTA
        title="Automate the Work Slowing Growth"
        description="Let's build workflows that save time, reduce friction, and help your business scale."
      />
    </div>
  );
}
