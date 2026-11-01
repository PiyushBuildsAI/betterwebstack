"use client";

import {
  CheckCircle2,
  ShieldCheck,
  Search,
  ArrowDown,
  TrendingUp,
  TrendingDown,
} from "lucide-react";
import RelatedSolutions from "@/components/solutions/RelatedSolutions";
import SolutionPricing from "@/components/solutions/SolutionPricing";
import {
  SolutionFinalCTA,
  SolutionHead,
  SolutionHero,
  SolutionSection,
} from "@/components/solutions/SolutionUI";
import { Sparkle } from "@/components/brand/Botanical";

const relatedSolutions = [
  { title: "AI Agents & Voice Assistants", description: "Automate conversations and capture more leads.", href: "/solutions/ai-agents" },
  { title: "Autonomous Workflows", description: "Act on insights automatically with smart workflows.", href: "/solutions/autonomous-workflows" },
  { title: "AI-Powered Websites", description: "A website that captures leads and books appointments.", href: "/solutions/ai-driven-websites" },
];

function InsightLossTimeline() {
  const steps = [
    { label: "Call happens", opacity: "opacity-100" },
    { label: "Conversation forgotten", opacity: "opacity-70" },
    { label: "No learning", opacity: "opacity-45" },
    { label: "Repeat mistakes", opacity: "opacity-25" },
  ];

  return (
    <div className="mx-auto flex max-w-md flex-col items-center gap-0">
      {steps.map((step, i) => (
        <div key={i} className="flex w-full flex-col items-center">
          <div
            className={`w-full rounded-[24px] border border-ink/25 bg-parchment px-6 py-4 text-center ${step.opacity}`}
          >
            <p className="display text-[21px] uppercase leading-none">{step.label}</p>
          </div>
          {i < steps.length - 1 && (
            <div className="flex flex-col items-center py-1">
              <div className="h-3 w-px bg-ink/20" />
              <ArrowDown className="h-4 w-4 text-ink/35" />
              <div className="h-3 w-px bg-ink/20" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function SampleCharts() {
  const objections = [
    { label: "Price too high", pct: 38 },
    { label: "Not ready yet", pct: 25 },
    { label: "Need approval", pct: 20 },
    { label: "Using competitor", pct: 17 },
  ];

  return (
    <div className="grid gap-5 md:grid-cols-3">
      <div className="rounded-[32px] border border-ink/25 bg-parchment p-6">
        <h3 className="text-[22px] uppercase leading-none">Top Objections</h3>
        <div className="mt-5 space-y-3.5">
          {objections.map((o, i) => (
            <div key={i}>
              <div className="mb-1.5 flex justify-between text-[12px]">
                <span className="font-medium text-ink/60">{o.label}</span>
                <span className="font-bold">{o.pct}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-sage">
                <div className="h-full rounded-full bg-ink/70" style={{ width: `${o.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] border border-ink/25 bg-parchment p-6">
        <h3 className="text-[22px] uppercase leading-none">Sentiment Trend</h3>
        <div className="flex min-h-[180px] flex-col items-center justify-center gap-4">
          <div className="flex h-24 items-end gap-2">
            {[40, 55, 45, 60, 70, 65, 80, 75, 85].map((h, i) => (
              <div
                key={i}
                className="w-4 rounded-t bg-ink/60"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex items-center gap-2 text-[12px] font-bold">
            <TrendingUp className="h-4 w-4" /> Improving over 9 weeks
          </div>
        </div>
      </div>

      <div className="rounded-[32px] border border-ink/25 bg-parchment p-6">
        <h3 className="text-[22px] uppercase leading-none">Close Rate by Rep</h3>
        <div className="mt-5 space-y-4">
          {[
            { name: "Rep A", rate: 72, color: "bg-ink" },
            { name: "Rep B", rate: 48, color: "bg-ink/35" },
            { name: "Rep C", rate: 61, color: "bg-ink/60" },
          ].map((rep, i) => (
            <div key={i}>
              <div className="mb-1.5 flex justify-between text-[12px]">
                <span className="font-medium text-ink/60">{rep.name}</span>
                <span className="font-bold">{rep.rate}%</span>
              </div>
              <div className="h-2.5 overflow-hidden rounded-full bg-sage">
                <div className={`h-full rounded-full ${rep.color}`} style={{ width: `${rep.rate}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamScorecards() {
  return (
    <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
      <div className="rounded-[36px] border border-ink bg-sage p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-marigold">
            <TrendingUp className="h-4 w-4 text-ink" />
          </span>
          <h3 className="text-[24px] uppercase leading-none">Rep A</h3>
        </div>
        <p className="mt-4 text-[13px] font-medium leading-relaxed text-ink/65">
          Strong closing technique. Handles objections well.
        </p>
        <span className="pill pill-forest mt-4">Top performer</span>
      </div>
      <div className="rounded-[36px] border border-ink/25 bg-parchment p-6">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-cream">
            <TrendingDown className="h-4 w-4 text-ink/60" />
          </span>
          <h3 className="text-[24px] uppercase leading-none text-ink/75">Rep B</h3>
        </div>
        <p className="mt-4 text-[13px] font-medium leading-relaxed text-ink/60">
          Weak objection handling. Misses follow-up signals.
        </p>
        <span className="pill pill-marigold mt-4">Needs coaching</span>
      </div>
    </div>
  );
}

function TranscriptSearch() {
  return (
    <div className="stamp mx-auto max-w-2xl overflow-hidden rounded-[40px] border border-ink bg-parchment">
      <div className="flex items-center gap-2 border-b border-ink/15 bg-sage/60 px-6 py-5">
        <Search className="h-4 w-4 text-ink" />
        <h3 className="text-[22px] uppercase leading-none">Searchable Transcripts</h3>
      </div>
      <div className="p-6">
        <p className="text-[12px] font-medium text-ink/55">
          Find key moments across all conversations instantly.
        </p>
        <div className="mt-4 flex items-center gap-2 rounded-full border border-ink/20 bg-cream px-4 py-2.5 text-[12px]">
          <Search className="h-4 w-4 shrink-0 text-ink/40" />
          <span className="font-medium text-ink/45">pricing concern</span>
        </div>
        <div className="mt-4 space-y-2">
          {[
            { time: "2:34", text: '"The price seems higher than what we budgeted for this quarter..."' },
            { time: "5:12", text: '"Can you break down the pricing? We need to compare with another vendor."' },
            { time: "8:45", text: '"Is there a smaller package? Our concern is mainly the initial cost."' },
          ].map((r, i) => (
            <div
              key={i}
              className="flex gap-3 rounded-[18px] border border-ink/15 bg-cream/60 p-3 transition-colors hover:border-ink/35"
            >
              <span className="mt-0.5 shrink-0 font-mono text-[10px] font-bold text-ink/55">{r.time}</span>
              <p className="text-[12px] font-medium italic leading-relaxed text-ink/60">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ConversationIntelligencePage() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-clip bg-paper">
      <SolutionHero
        eyebrow="Conversation Intelligence"
        title={
          <>
            Turn Calls and Chats Into <span className="italic">Revenue Insights</span>
          </>
        }
        description="Analyze conversations to uncover objections, buying signals, and growth opportunities."
        bullets={["Actionable Insights", "Better Conversions", "Team Coaching"]}
        visual={
          <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-parchment p-5 sm:p-6">
            <div className="flex items-center justify-between border-b border-ink/15 pb-4">
              <span className="pill pill-marigold">
                <Sparkle className="h-3 w-3" />
                Signals
              </span>
              <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink/40">
                Last 30 days
              </span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Objections", value: "38%", sub: "price related" },
                { label: "Sentiment", value: "+12%", sub: "improving" },
                { label: "Lead Quality", value: "High", sub: "72% qualified" },
                { label: "Team Score", value: "B+", sub: "avg performance" },
              ].map((d, i) => (
                <div
                  key={i}
                  className="rounded-[24px] border border-ink/20 bg-cream/60 p-4 text-center transition hover:-translate-y-0.5 hover:border-ink/40"
                >
                  <p className="font-mono text-[9px] font-bold uppercase tracking-[0.12em] text-ink/45">
                    {d.label}
                  </p>
                  <p className="display mt-1 text-[28px] leading-none">{d.value}</p>
                  <p className="mt-1 text-[10.5px] font-medium text-ink/50">{d.sub}</p>
                </div>
              ))}
            </div>
          </div>
        }
      />

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="The blind spot"
          title="What Most Businesses Miss"
          description="Valuable signals disappear after every call or chat."
        />
        <InsightLossTimeline />
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Detection"
          title="What We Detect"
          description="Patterns that are obvious in aggregate, invisible one conversation at a time."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Price Objections", desc: "Surface recurring cost concerns." },
            { title: "Buyer Urgency", desc: "Spot ready-to-buy signals faster." },
            { title: "Script Quality", desc: "Identify what talk tracks close deals." },
            { title: "Repeated Complaints", desc: "Track patterns in support issues." },
            { title: "Winning Patterns", desc: "Find what top reps do differently." },
            { title: "Drop Reasons", desc: "Know exactly why leads fall off." },
          ].map((f, i) => (
            <div
              key={i}
              className="rounded-[32px] border border-ink/25 bg-parchment p-6 transition hover:-translate-y-1 hover:border-ink"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <CheckCircle2 className="h-4 w-4 text-ink" />
              </span>
              <h3 className="mt-4 text-[22px] uppercase leading-none">{f.title}</h3>
              <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-ink/60">{f.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Dashboard"
          title="Sample Insights"
          description="Real data patterns from conversation analysis."
        />
        <SampleCharts />
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Coaching"
          title="Team Coaching"
          description="Identify strengths and coaching opportunities per rep."
        />
        <TeamScorecards />
      </SolutionSection>

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Transcripts"
          title="Find Key Moments Instantly"
          description="Search every call and chat without scrubbing through recordings."
        />
        <TranscriptSearch />
      </SolutionSection>

      <SolutionSection>
        <SolutionHead eyebrow="Why us" title="Why Work With Us" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Business-First", desc: "We focus on what data means for your revenue." },
            { title: "Custom Workflows", desc: "Not generic dashboards. Built around your goals." },
            { title: "Modern Stack", desc: "Fast integrations and clean reporting tools." },
            { title: "Easy Reporting", desc: "Clear summaries your team can actually act on." },
            { title: "Fast Setup", desc: "Most setups ready within 2 to 3 weeks." },
            { title: "Ongoing Support", desc: "We review insights with you and keep improving." },
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
          starter: ["Call/chat summaries", "Basic trend insights", "Searchable conversations", "Monthly reports"],
          growth: ["Objection detection", "Lead quality insights", "Team coaching reports", "Performance dashboards", "Better close-rate insights"],
          enterprise: ["Multi-team analytics", "Custom dashboards", "Advanced reporting", "Secure data workflows"]
        }}
      />

      <SolutionFinalCTA
        title="Start Learning From Every Conversation"
        description="Let's build a system that turns calls and chats into smarter growth decisions."
      />
    </div>
  );
}
