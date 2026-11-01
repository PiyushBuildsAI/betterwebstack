"use client";

import { useState } from "react";
import {
  ShieldCheck,
  Box,
  MessageSquare,
  Workflow,
  TrendingUp,
  Cpu,
  Lightbulb,
  UserCheck,
  Target,
  Zap,
  Clock,
  Smartphone,
} from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import {
  NumberBadge,
  SolutionFinalCTA,
  SolutionHead,
  SolutionHero,
  SolutionSection,
} from "@/components/solutions/SolutionUI";
import { Sparkle, SunBurst } from "@/components/brand/Botanical";

const relatedSolutions = [
  { title: "AI Agents & Voice Assistants", description: "Automate conversations and handle leads around the clock.", href: "/solutions/ai-agents" },
  { title: "Autonomous Workflows", description: "Act on insights automatically with smart workflows.", href: "/solutions/autonomous-workflows" },
  { title: "Conversation Funnels", description: "Turn visitors into qualified leads with guided chat flows.", href: "/solutions/conversation-funnels" },
];

function ModularSystemBuilder() {
  const steps = [
    { label: "Your Business Inputs", icon: Database },
    { label: "AI Logic", icon: Cpu },
    { label: "Automations", icon: Workflow },
    { label: "Results", icon: Target },
  ];

  return (
    <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-parchment p-5 sm:p-6">
      <SunBurst className="pointer-events-none absolute -right-10 -top-12 h-40 w-40 text-ink/[0.07]" />
      <div className="flex items-center justify-between border-b border-ink/15 pb-4">
        <span className="pill pill-marigold">
          <Sparkle className="h-3 w-3" />
          System build
        </span>
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink/40">
          Modular
        </span>
      </div>
      <div className="mt-4 flex flex-col items-center gap-0">
        {steps.map((step, i) => (
          <div key={i} className="flex w-full flex-col items-center">
            <div
              className={`flex w-full items-center gap-3 rounded-[22px] border px-4 py-3 text-[12.5px] font-bold ${
                i === steps.length - 1
                  ? "border-ink bg-marigold text-ink"
                  : "border-ink/20 bg-cream/70 text-ink/80"
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-parchment">
                <step.icon className="h-3.5 w-3.5" />
              </span>
              {step.label}
              <span className="ml-auto font-mono text-[9px] font-bold text-ink/35">0{i + 1}</span>
            </div>
            {i < steps.length - 1 && (
              <div className="flex flex-col items-center py-1">
                <div className="h-2.5 w-px bg-ink/20" />
                <span className="h-1.5 w-1.5 rounded-full bg-ink/30" />
                <div className="h-2.5 w-px bg-ink/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function CustomAISolutionsPage() {
  const [activeGoal, setActiveGoal] = useState("More Leads");

  const goals: Record<string, { desc: string; icon: typeof UserCheck }> = {
    "More Leads": { desc: "Capture and qualify more inquiries automatically.", icon: UserCheck },
    "Save Time": { desc: "Reduce repetitive admin work.", icon: Clock },
    "Better Customer Experience": { desc: "Faster responses and smoother journeys.", icon: Smartphone },
    "Higher Efficiency": { desc: "Teams focus on high-value work.", icon: Zap },
    "Smarter Decisions": { desc: "Use AI insights to improve performance.", icon: Target },
  };

  return (
    <div className="flex w-full flex-col items-center overflow-x-clip bg-paper">
      <SolutionHero
        eyebrow="Custom AI Solutions"
        title={
          <>
            AI Built Around How Your Business <span className="italic">Actually Works</span>
          </>
        }
        description="We design custom AI systems, assistants, automations, and growth solutions tailored to your workflow, customers, industry, and business goals."
        bullets={["Fully Custom Built", "Practical Use Cases", "Growth Focused", "Future Ready"]}
        primaryLabel="Book Free Call"
        secondaryLabel="Get a Quote"
        visual={<ModularSystemBuilder />}
      />

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Fit"
          title="Why Custom Beats Generic Tools"
          description="Most AI tools are built for everyone. Your business is not everyone."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[36px] border border-ink/25 bg-cream/60 p-6">
            <h3 className="text-[24px] uppercase leading-none text-ink/60">Generic Tools Create:</h3>
            <ul className="mt-5 space-y-3 border-t border-ink/15 pt-4">
              {[
                "Poor fit for real workflows",
                "Extra manual work",
                "Weak customer experience",
                "Limited integrations",
                "Low adoption by teams",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-[13px] font-medium text-ink/50">
                  <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-parchment text-[10px] font-bold">
                    -
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="stamp rounded-[36px] border border-ink bg-parchment p-6">
            <h3 className="text-[24px] uppercase leading-none">Custom Solutions Offer:</h3>
            <p className="mt-5 border-t border-ink/15 pt-4 text-[14px] font-medium leading-relaxed text-ink/70">
              Systems built precisely around how you already operate. No forced workflows. We fit the
              technology to your business, not the other way around.
            </p>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Capabilities"
          title="What We Build"
          description="Practical systems, not AI for the sake of AI."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "AI Assistants", desc: "Chat, voice, lead qualification, booking, support.", icon: MessageSquare },
            { title: "Internal Automation", desc: "Reduce repetitive tasks and connect tools.", icon: Workflow },
            { title: "Lead Generation Systems", desc: "Funnels, outreach systems, qualification flows.", icon: UserCheck },
            { title: "Reporting & Insights", desc: "Dashboards, alerts, customer intelligence.", icon: TrendingUp },
            { title: "Industry-Specific AI Tools", desc: "Custom systems for clinics, agencies, real estate, ecommerce, and more.", icon: Box },
            { title: "Experimental Growth Systems", desc: "Trend-based solutions built for current market opportunities.", icon: Lightbulb },
          ].map((cat, i) => (
            <div
              key={i}
              className="flex flex-col rounded-[32px] border border-ink/25 bg-parchment p-6 transition hover:-translate-y-1 hover:border-ink"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <cat.icon className="h-4 w-4 text-ink" />
              </span>
              <h3 className="mt-4 text-[22px] uppercase leading-none">{cat.title}</h3>
              <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-ink/60">{cat.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Goals"
          title="Built for Real Business Goals"
          description="Pick the outcome you need. We will map the system backwards from it."
        />
        <div className="mb-7 flex flex-wrap justify-center gap-2">
          {Object.keys(goals).map((goal) => (
            <button
              key={goal}
              onClick={() => setActiveGoal(goal)}
              className={`flex items-center gap-2 rounded-full border px-5 py-2.5 text-[12px] font-bold transition ${
                activeGoal === goal
                  ? "border-ink bg-ink text-paper"
                  : "border-ink/25 bg-parchment text-ink/70 hover:border-ink/60 hover:text-ink"
              }`}
            >
              {activeGoal === goal && (() => {
                const Icon = goals[goal].icon;
                return <Icon className="h-3.5 w-3.5 text-marigold" />;
              })()}
              {goal}
            </button>
          ))}
        </div>
        <div className="stamp mx-auto max-w-2xl rounded-[36px] border border-ink bg-parchment p-8 text-center sm:p-10">
          {(() => {
            const Icon = goals[activeGoal].icon;
            return (
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <Icon className="h-6 w-6 text-ink" />
              </span>
            );
          })()}
          <h3 className="mt-4 text-[30px] uppercase leading-none">{activeGoal}</h3>
          <p className="mt-3 text-[14px] font-medium leading-relaxed text-ink/60">
            {goals[activeGoal].desc}
          </p>
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Trends"
          title="Built Around What Is Working Right Now"
          description="We also create solutions based on current market trends, customer behavior shifts, and new platform opportunities."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Instagram Lead Systems", desc: "Turn comments and messages into qualified leads." },
            { title: "AI Booking Assistants", desc: "Instant scheduling for service businesses." },
            { title: "Voice Reception AI", desc: "Never miss calls after hours." },
            { title: "Content Repurposing Systems", desc: "Turn one input into multi-platform content." },
            { title: "CRM Follow-up Engines", desc: "Automated reminders and reactivation flows." },
            { title: "Industry Trend Opportunities", desc: "Rapid custom builds for new demand." },
          ].map((trend, i) => (
            <div key={i} className="rounded-[32px] border border-ink/25 bg-parchment p-6">
              <h3 className="flex items-center gap-2 text-[21px] uppercase leading-none">
                <SparklesIcon className="h-4 w-4 text-ink/50" />
                {trend.title}
              </h3>
              <p className="mt-2.5 text-[12.5px] font-medium leading-relaxed text-ink/60">{trend.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="forest">
        <SolutionHead
          tone="forest"
          eyebrow="Process"
          title="How We Work"
          description="From discovery to launch, one clear path with no mystery hand-offs."
        />
        <div className="grid gap-5 sm:grid-cols-2">
          {[
            { title: "Discovery", desc: "Understand your workflow, pain points, and growth goals." },
            { title: "Solution Design", desc: "Map the best AI system for your business." },
            { title: "Build + Integrate", desc: "Develop and connect everything cleanly." },
            { title: "Launch + Improve", desc: "Deploy, monitor, and optimize continuously." },
          ].map((step, i) => (
            <div
              key={i}
              className="flex gap-4 rounded-[32px] border border-paper/20 bg-paper/[0.06] p-6"
            >
              <NumberBadge tone="marigold">{String(i + 1).padStart(2, "0")}</NumberBadge>
              <div>
                <h3 className="text-[24px] uppercase leading-none text-paper">{step.title}</h3>
                <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-paper/60">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead eyebrow="Why us" title="Why BetterWebStack" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Business-First Thinking", desc: "We focus on outcomes, not hype." },
            { title: "Modern Build Stack", desc: "Fast, scalable, reliable systems." },
            { title: "Custom Execution", desc: "No copy-paste templates." },
            { title: "Practical AI Experience", desc: "Solutions designed to be used daily." },
            { title: "Flexible Scope", desc: "Start small or build larger systems over time." },
            { title: "Ongoing Support", desc: "We stay available after launch." },
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
          starter: ["One custom use-case build", "Basic setup", "Core integration", "Launch support"],
          growth: ["Tailored AI system", "Multi-step logic", "Better integrations", "Optimization support", "Priority execution"],
          enterprise: ["Full custom architecture", "Team systems", "Advanced integrations", "Long-term roadmap"]
        }}
      />

      <SolutionFinalCTA
        title="Need an AI Solution Built for Your Business?"
        description="Let's design something practical, useful, and built to grow with you."
        primaryLabel="Contact Us Today"
        secondaryLabel="Book Free Call"
        secondaryHref="/contact"
      />
    </div>
  );
}

function Database(props: import("react").SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  );
}

function SparklesIcon(props: import("react").SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
      <path d="M5 3v4" />
      <path d="M19 17v4" />
      <path d="M3 5h4" />
      <path d="M17 19h4" />
    </svg>
  );
}
