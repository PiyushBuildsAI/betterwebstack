"use client";

import {
  Bot,
  Phone,
  MessageSquare,
  Mail,
  CheckCircle2,
  ShieldCheck,
  User,
  ArrowDown,
  Sparkles,
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
import { RoundCactus, Sparkle } from "@/components/brand/Botanical";

const relatedSolutions = [
  { title: "Conversation Funnels", description: "Turn visitors into qualified leads with guided chat flows.", href: "/solutions/conversation-funnels" },
  { title: "Autonomous Workflows", description: "Automate internal operations and reduce manual work.", href: "/solutions/autonomous-workflows" },
  { title: "Conversation Intelligence", description: "Learn from every call and chat to improve performance.", href: "/solutions/conversation-intelligence" },
];

const channels = [
  { icon: MessageSquare, label: "Website Chat", tint: "bg-sage text-ink" },
  { icon: Phone, label: "Phone Call", tint: "bg-marigold text-ink" },
  { icon: MessageSquare, label: "WhatsApp", tint: "bg-parchment text-ink" },
  { icon: Mail, label: "Email", tint: "bg-cream text-ink" },
];

const features = [
  { title: "Chat Support", desc: "Instant answers on your website." },
  { title: "Voice Calls", desc: "AI picks up and guides callers." },
  { title: "Lead Qualification", desc: "Asks the right questions automatically." },
  { title: "Appointment Booking", desc: "Schedules directly into your calendar." },
  { title: "Follow-ups", desc: "Sends reminders and updates." },
  { title: "Internal Routing", desc: "Passes requests to the right team." },
];

function HandoffDiagram() {
  const steps = [
    { label: "Customer asks", sub: "via any channel", highlight: false },
    { label: "AI handles instantly", sub: "answers, collects info", highlight: true },
    { label: "Needs human?", sub: "complex or sensitive case", highlight: false },
    { label: "Passes full context to team", sub: "no repeat, no delay", highlight: true },
  ];

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex w-full flex-col items-center">
          <div
            className={`w-full rounded-[24px] border px-6 py-4 text-center transition-all ${
              step.highlight
                ? "border-marigold bg-marigold text-ink"
                : "border-paper/25 bg-paper/[0.06] text-paper"
            }`}
          >
            <p className="display text-[20px] uppercase leading-none">{step.label}</p>
            <p className={`mt-1.5 text-[11px] font-semibold ${step.highlight ? "text-ink/60" : "text-paper/55"}`}>
              {step.sub}
            </p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="h-3 w-px bg-paper/25" />
              <ArrowDown className="h-4 w-4 text-marigold" />
              <div className="h-3 w-px bg-paper/25" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function AvailabilityBar() {
  return (
    <div className="stamp mx-auto max-w-2xl rounded-[40px] border border-ink bg-parchment p-6 sm:p-8">
      <div className="mb-6 flex items-end justify-between border-b border-ink/15 pb-4">
        <div>
          <p className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-ink/45">
            Coverage
          </p>
          <p className="display mt-1 text-[28px] uppercase leading-none">Always available</p>
        </div>
        <Sparkle className="h-5 w-5 text-ink/30" />
      </div>

      <div className="space-y-6">
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="flex items-center gap-2 font-bold">
              <User className="h-4 w-4 text-ink/50" /> Human Team
            </span>
            <span className="text-ink/55">8 hrs / day</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full border border-ink/15 bg-sage/60">
            <div className="h-full w-[33%] rounded-full bg-ink/30" />
          </div>
        </div>
        <div>
          <div className="mb-2 flex justify-between text-sm">
            <span className="flex items-center gap-2 font-bold">
              <Bot className="h-4 w-4 text-ink" /> AI Assistant
            </span>
            <span className="font-bold text-ink">24 hrs / day</span>
          </div>
          <div className="h-4 overflow-hidden rounded-full border border-ink/15 bg-sage/60">
            <div className="h-full w-full rounded-full bg-ink" />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center gap-2 border-t border-ink/15 pt-4 text-[11px] font-bold uppercase tracking-[0.1em] text-ink/55">
        <CheckCircle2 className="h-3.5 w-3.5" />
        No missed calls, no after-hours gaps
      </div>
    </div>
  );
}

export default function AIAgentsPage() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-clip bg-paper">
      <SolutionHero
        eyebrow="AI Agents & Voice Assistants"
        title={
          <>
            AI Team Members Working <span className="italic">24/7</span>
          </>
        }
        description="Answer questions, take calls, qualify leads, and book appointments automatically."
        bullets={["24/7 Availability", "Fast Setup", "Custom Workflows"]}
        visual={
          <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-parchment p-5 sm:p-6">
            <RoundCactus className="pointer-events-none absolute -bottom-7 -right-3 h-28 w-24 rotate-[8deg] text-ink/10" />
            <div className="flex items-center justify-between border-b border-ink/15 pb-4">
              <span className="pill pill-marigold">
                <Sparkles className="h-3 w-3" />
                Live coverage
              </span>
              <span className="display text-[34px] leading-none">24/7</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {channels.map((ch, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-[24px] border border-ink/20 bg-cream/60 p-3.5 transition hover:-translate-y-0.5 hover:border-ink/40"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/20 ${ch.tint}`}>
                    <ch.icon className="h-4 w-4" />
                  </div>
                  <span className="text-[12.5px] font-bold leading-tight">{ch.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 rounded-[20px] border border-ink/15 bg-sage/70 px-3.5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-ink" />
              <p className="text-[11px] font-bold text-ink/65">Every conversation logged and routed</p>
            </div>
          </div>
        }
      />

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="The gap"
          title="What Happens Without AI"
          description="Every unanswered call and slow reply is a customer choosing someone faster."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {["Missed calls after hours", "Slow replies lose leads", "Staff answering same questions", "Follow-ups forgotten"].map((pain, i) => (
            <div key={i} className="flex items-start gap-4 rounded-[28px] border border-ink/25 bg-parchment p-5">
              <NumberBadge>{String(i + 1).padStart(2, "0")}</NumberBadge>
              <p className="text-[13px] font-bold leading-snug text-ink/80">{pain}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Coverage"
          title="What AI Handles"
          description="The repetitive work that eats your day, handled instantly and consistently."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-[32px] border border-ink/25 bg-parchment p-6 transition hover:-translate-y-1 hover:border-ink"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <CheckCircle2 className="h-4 w-4 text-ink" />
              </span>
              <h3 className="mt-4 text-[22px] uppercase leading-none">{f.title}</h3>
              <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-ink/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="forest">
        <SolutionHead
          tone="forest"
          eyebrow="Escalation"
          title="Human + AI Handoff"
          description="AI handles the routine. Humans step in when it matters."
        />
        <HandoffDiagram />
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Uptime"
          title="Always Available"
          description="Human hours vs AI 24/7 coverage."
        />
        <AvailabilityBar />
      </SolutionSection>

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Use cases"
          title="Industries We Serve"
          description="Trained on your services, timings, pricing and tone of voice."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Clinic", desc: "Voice assistant answers calls, shares timings, books appointments." },
            { label: "Real Estate", desc: "Agent handles inquiries, collects budget, schedules callbacks." },
            { label: "Agency", desc: "Website assistant qualifies leads and routes service requests." },
            { label: "Ecommerce", desc: "Support agent answers shipping, returns, and product questions." },
            { label: "Services", desc: "AI assistant handles FAQs, quotes, and booking requests." },
          ].map((u, i) => (
            <div key={i} className="rounded-[32px] border border-ink/25 bg-parchment p-6">
              <span className="pill pill-marigold">{u.label}</span>
              <p className="mt-4 text-[13px] font-medium leading-relaxed text-ink/65">{u.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead eyebrow="Why us" title="Why Work With Us" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Custom Solutions", desc: "Not generic bots. Your agent is trained for your business." },
            { title: "Modern Tech", desc: "Built on proven AI infrastructure with reliable performance." },
            { title: "Real Experience", desc: "We have built agents for real business workflows." },
            { title: "Fast Setup", desc: "Most agents are live within 2 to 3 weeks." },
            { title: "Clean UX", desc: "Natural, helpful conversations your customers enjoy." },
            { title: "Ongoing Support", desc: "We retrain and improve the agent over time." },
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
          starter: ["Chat or voice assistant setup", "FAQ responses", "Lead capture", "Basic booking actions"],
          growth: ["Multi-channel assistant", "Human handoff flow", "CRM connection", "Follow-up actions", "Ongoing tuning"],
          enterprise: ["Advanced AI agents", "Multi-team workflows", "Custom training data", "Scalable automation systems"]
        }}
      />

      <SolutionFinalCTA
        title="Build Your AI Assistant"
        description="Let's build an AI assistant that saves time and helps your business grow."
      />
    </div>
  );
}
