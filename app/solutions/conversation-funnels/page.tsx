"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, XCircle, ShieldCheck, Calculator, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
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
  { title: "AI-Powered Websites", description: "A full website built to capture leads and book clients.", href: "/solutions/ai-driven-websites" },
  { title: "AI Agents & Voice Assistants", description: "Automate support, bookings, and follow-ups 24/7.", href: "/solutions/ai-agents" },
  { title: "Conversation Intelligence", description: "Analyze conversations to improve your conversion rate.", href: "/solutions/conversation-intelligence" },
];

function FunnelAnimation() {
  const steps = ["Visitor Lands", "Starts Chat", "Answers Questions", "Qualified Lead", "Books Call"];

  return (
    <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-parchment p-5 sm:p-6">
      <div className="flex items-center justify-between border-b border-ink/15 pb-4">
        <span className="pill pill-marigold">
          <Sparkle className="h-3 w-3" />
          Funnel
        </span>
        <span className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink/40">
          5 steps
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
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-parchment font-mono text-[9px] font-bold text-ink/50">
                {i + 1}
              </span>
              {step}
              {i === steps.length - 1 && <Check className="ml-auto h-4 w-4" />}
            </div>
            {i < steps.length - 1 && (
              <div className="flex flex-col items-center py-1">
                <div className="h-2.5 w-px bg-ink/20" />
                <ArrowRight className="h-3.5 w-3.5 rotate-90 text-ink/35" />
                <div className="h-2.5 w-px bg-ink/20" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function ROICalculator() {
  const [visitors, setVisitors] = useState(1000);
  const [currentLeads, setCurrentLeads] = useState(20);
  const [uplift, setUplift] = useState(40);

  const extraLeads = Math.round(currentLeads * (uplift / 100));
  const totalLeads = currentLeads + extraLeads;

  return (
    <div className="stamp-marigold mx-auto max-w-lg overflow-hidden rounded-[40px] border border-ink bg-parchment">
      <div className="border-b border-ink/15 bg-sage/60 p-6 text-center">
        <span className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-marigold">
          <Calculator className="h-5 w-5 text-ink" />
        </span>
        <h3 className="mt-3 text-[26px] uppercase leading-none">ROI Calculator</h3>
        <p className="mt-2 text-[12.5px] font-medium text-ink/60">
          See how many extra leads a funnel could bring you.
        </p>
      </div>
      <div className="space-y-4 p-6">
        <div className="space-y-1.5">
          <Label htmlFor="visitors" className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/60">
            Monthly Visitors
          </Label>
          <Input id="visitors" type="number" value={visitors} onChange={(e) => setVisitors(Number(e.target.value))} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="leads" className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/60">
            Current Leads / Month
          </Label>
          <Input id="leads" type="number" value={currentLeads} onChange={(e) => setCurrentLeads(Number(e.target.value))} />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="uplift" className="text-[11px] font-bold uppercase tracking-[0.1em] text-ink/60">
            Expected Uplift (%)
          </Label>
          <Input id="uplift" type="number" value={uplift} onChange={(e) => setUplift(Number(e.target.value))} />
        </div>
        <div className="border-t border-ink/15 pt-4 text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink/50">
            Estimated extra leads per month
          </p>
          <p className="display mt-1 text-[52px] leading-none">+{extraLeads}</p>
          <p className="mt-1 text-[12px] font-medium text-ink/55">
            {totalLeads} total leads from {visitors.toLocaleString()} visitors
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ConversationFunnelsPage() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-clip bg-paper">
      <SolutionHero
        eyebrow="Conversation Funnels"
        title={
          <>
            Turn Visitors Into <span className="italic">Qualified Leads</span>
          </>
        }
        description="Replace static forms with guided conversations that convert more visitors into booked calls."
        bullets={["Higher Conversions", "Instant Replies", "Auto Booking"]}
        visual={<FunnelAnimation />}
      />

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Old vs new"
          title="Most Visitors Never Fill Out Contact Forms"
          description="Static forms feel cold. Conversations feel natural and convert better."
        />
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[36px] border border-ink/25 bg-cream/60 p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-parchment">
                <XCircle className="h-4 w-4 text-ink/45" />
              </span>
              <h3 className="text-[24px] uppercase leading-none text-ink/60">Old Contact Form</h3>
            </div>
            <ul className="mt-5 space-y-2.5 border-t border-ink/15 pt-4">
              {["Too many fields", "No instant answers", "Easy to ignore"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[13px] font-medium text-ink/50">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full border border-ink/15 bg-parchment text-[10px] font-bold">
                    -
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="stamp rounded-[36px] border border-ink bg-parchment p-6">
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <CheckCircle2 className="h-4 w-4 text-ink" />
              </span>
              <h3 className="text-[24px] uppercase leading-none">Smart Funnel</h3>
            </div>
            <ul className="mt-5 space-y-2.5 border-t border-ink/15 pt-4">
              {["Friendly first step", "Guided questions", "Higher completion rate"].map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-[13px] font-semibold text-ink/75">
                  <span className="flex h-4 w-4 items-center justify-center rounded-full bg-marigold">
                    <Check className="h-2.5 w-2.5 text-ink" strokeWidth={4} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Outcomes"
          title="Real Business Impact"
          description="Small lifts in completion rate compound into a very different pipeline."
        />
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {[
            { value: "More", label: "Qualified Leads" },
            { value: "Lower", label: "Drop-offs" },
            { value: "Faster", label: "Responses" },
            { value: "Better", label: "Booking Rate" },
          ].map((stat, i) => (
            <div key={i} className="rounded-[32px] border border-ink/25 bg-parchment p-6 text-center">
              <p className="display text-[38px] uppercase leading-none">{stat.value}</p>
              <p className="mt-2 text-[10.5px] font-extrabold uppercase tracking-[0.12em] text-ink/55">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="forest">
        <SolutionHead
          tone="forest"
          eyebrow="Calculator"
          title="Estimate Your Growth"
          description="See what a conversation funnel could do for your numbers."
        />
        <ROICalculator />
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Use cases"
          title="Who It Works For"
          description="Any business that needs a clearer first step than a blank contact form."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Clinic", desc: "Patients book appointments through a guided conversation." },
            { label: "Gym / Fitness", desc: "Visitors pick goals and sign up for trial sessions." },
            { label: "Real Estate", desc: "Buyers share budget and request a callback instantly." },
            { label: "Agency", desc: "Leads choose service type and submit a qualified inquiry." },
          ].map((u, i) => (
            <div key={i} className="rounded-[32px] border border-ink/25 bg-parchment p-6">
              <span className="pill pill-marigold">{u.label}</span>
              <p className="mt-4 text-[13px] font-medium leading-relaxed text-ink/65">{u.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="sage">
        <SolutionHead eyebrow="Why us" title="Why Work With Us" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Custom Builds", desc: "No templates. Every funnel is designed around your business." },
            { title: "Modern Fast Stack", desc: "Built with Next.js for speed and reliability." },
            { title: "Conversion Focused", desc: "Every step moves visitors closer to booking." },
            { title: "Clean UI", desc: "Simple experiences your visitors will actually use." },
            { title: "Real Automation", desc: "CRM sync, booking, and WhatsApp integration included." },
            { title: "Support After Launch", desc: "We stay available to optimize your funnel." },
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
          starter: ["Guided lead capture flow", "Contact collection", "Basic qualification steps", "Mobile-ready experience"],
          growth: ["Smart branching logic", "Booking integration", "CRM sync", "Funnel analytics", "Conversion improvements"],
          enterprise: ["Multi-service funnels", "Advanced routing logic", "Multi-location setup", "Custom integrations"]
        }}
      />

      <SolutionFinalCTA
        title="Ready to Convert More Traffic?"
        description="Let's build a conversation funnel that helps your business grow."
      />
    </div>
  );
}
