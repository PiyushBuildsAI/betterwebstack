import { Badge } from "@/components/ui/badge";
import {
  Bot,
  CalendarClock,
  MessageSquareText,
  TrendingUp,
  ShieldCheck,
  Check,
  X,
  Plus,
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

const relatedSolutions = [
  { title: "Conversation Funnels", description: "Turn visitors into qualified leads with guided chat flows.", href: "/solutions/conversation-funnels" },
  { title: "AI Agents & Voice Assistants", description: "Automate support, bookings, and follow-ups 24/7.", href: "/solutions/ai-agents" },
  { title: "Autonomous Workflows", description: "Automate internal operations and reduce manual work.", href: "/solutions/autonomous-workflows" },
];

const solutionCards = [
  {
    icon: Bot,
    title: "AI Chat Assistant",
    desc: "Answer common questions instantly and capture lead information 24/7.",
  },
  {
    icon: MessageSquareText,
    title: "Smart Forms",
    desc: "Instant lead capture forms that route directly to your inbox or CRM.",
  },
  {
    icon: CalendarClock,
    title: "Booking System",
    desc: "Let clients schedule appointments directly without the back-and-forth.",
  },
  {
    icon: TrendingUp,
    title: "SEO & Analytics",
    desc: "Built to rank on Google and track what actually brings you customers.",
  },
];

export default function AIWebsitesPage() {
  return (
    <div className="flex w-full flex-col items-center overflow-x-clip bg-paper">
      <SolutionHero
        centered
        eyebrow="Built for Growth"
        title={
          <>
            Turn Your Website Into a <span className="italic">24/7 Sales System</span>
          </>
        }
        description="Custom websites with smart automation, instant responses, and booking flows that help your business grow."
        bullets={["Fast Delivery", "Mobile Ready", "Custom Built"]}
        primaryLabel="Book a Free Call"
        secondaryLabel="Get a Quote"
      />

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="The problem"
          title="Why Most Business Websites Underperform"
          description="Your website should be an asset, not just a digital brochure."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Visitors leave without contacting you",
            "Slow replies lose leads",
            "Missed calls after hours",
            "Paid traffic gets wasted",
            "No clear booking path",
            "Outdated design hurts trust",
          ].map((pain, i) => (
            <div key={i} className="flex items-start gap-4 rounded-[28px] border border-ink/25 bg-parchment p-5">
              <NumberBadge>{String(i + 1).padStart(2, "0")}</NumberBadge>
              <p className="text-[13px] font-bold leading-snug text-ink/80">{pain}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="The build"
          title="What Your New Website Can Do"
          description="Smart features built to capture and convert."
        />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {solutionCards.map((item, i) => (
            <div
              key={i}
              className="group flex flex-col rounded-[32px] border border-ink/25 bg-parchment p-6 transition hover:-translate-y-1 hover:border-ink"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/20 bg-marigold">
                <item.icon className="h-5 w-5 text-ink" />
              </span>
              <h3 className="mt-4 text-[23px] uppercase leading-none">{item.title}</h3>
              <p className="mt-2 text-[12.5px] font-medium leading-relaxed text-ink/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="forest">
        <SolutionHead
          tone="forest"
          eyebrow="The outcome"
          title="Real Business Impact"
          description="A website that works while you work on everything else."
        />
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-5 md:divide-x md:divide-paper/15">
          {[
            { value: "+", label: "Qualified Leads" },
            { value: "Fast", label: "Response Times" },
            { value: "Zero", label: "Missed Inquiries" },
            { value: "High", label: "Brand Trust" },
            { value: "Better", label: "Ad Conversion" },
          ].map((item) => (
            <div key={item.label} className="text-center md:px-4 md:first:pl-0 md:last:pr-0">
              <p className="display text-[42px] uppercase leading-none text-marigold">{item.value}</p>
              <p className="mt-2 text-[11px] font-extrabold uppercase leading-tight tracking-[0.12em] text-paper/70">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead
          eyebrow="Proof"
          title="Example Results"
          description="See how these smart systems transform businesses."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              badge: "Local Dental Clinic",
              title: "More Appointments",
              lines: [
                { type: "minus", text: "Old site had low inquiries" },
                { type: "plus", text: "New booking flow & instant answers" },
                { type: "plus", text: "40% more appointments in month one" },
              ],
            },
            {
              badge: "Fitness Studio",
              title: "Higher Trial Bookings",
              lines: [
                { type: "minus", text: "Visitors dropped off early" },
                { type: "plus", text: "Added lead form & schedule preview" },
                { type: "plus", text: "Consistent trial class bookings" },
              ],
            },
            {
              badge: "Real Estate Agent",
              title: "Organized Lead Flow",
              lines: [
                { type: "minus", text: "Messy leads from many channels" },
                { type: "plus", text: "Smart intake landing pages" },
                { type: "plus", text: "Better lead quality & fast follow-up" },
              ],
            },
          ].map((study, i) => (
            <div key={i} className="flex flex-col rounded-[36px] border border-ink/25 bg-parchment p-6">
              <Badge className="w-fit">{study.badge}</Badge>
              <h3 className="mt-4 text-[25px] uppercase leading-none">{study.title}</h3>
              <ul className="mt-4 space-y-2.5 border-t border-ink/15 pt-4">
                {study.lines.map((line, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-[12.5px] leading-snug">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-cream">
                      {line.type === "minus" ? (
                        <X className="h-2.5 w-2.5 text-ink/40" />
                      ) : (
                        <Check className="h-2.5 w-2.5 text-ink" strokeWidth={4} />
                      )}
                    </span>
                    <span className={line.type === "minus" ? "text-ink/45" : "font-semibold text-ink/75"}>
                      {line.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection band="sage">
        <SolutionHead
          eyebrow="Process"
          title="Simple Process, Fast Delivery"
          description="Four clear steps from first call to a live, converting website."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {[
            { title: "Discovery Call & Goals", desc: "We learn about your business and what you want to achieve." },
            { title: "Strategy & Page Plan", desc: "We map out the content, booking flows, and automation steps." },
            { title: "Design & Development", desc: "We build your custom, mobile-ready website from scratch." },
            { title: "Launch & Optimize", desc: "We test everything, launch, and ensure it runs perfectly." },
          ].map((step, i) => (
            <div key={i} className="flex gap-4 rounded-[32px] border border-ink/25 bg-parchment p-6">
              <NumberBadge tone="forest">{String(i + 1).padStart(2, "0")}</NumberBadge>
              <div>
                <h3 className="text-[24px] uppercase leading-none">{step.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-relaxed text-ink/60">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SolutionSection>

      <SolutionSection>
        <SolutionHead eyebrow="Why us" title="Why Work With Us" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Custom Builds", desc: "No cheap templates. Everything is tailored to your brand." },
            { title: "Modern Tech", desc: "Built with Next.js for lightning-fast loading speeds." },
            { title: "Automation Experts", desc: "We know how to connect your site to your CRM or WhatsApp." },
            { title: "Clear Communication", desc: "No confusing jargon. Just straightforward business talk." },
            { title: "Clean Performance", desc: "Optimized for Google, ensuring you rank higher." },
            { title: "Ongoing Support", desc: "We don't just launch and leave. We are here to help." },
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

      <SolutionSection band="sage">
        <SolutionHead eyebrow="FAQ" title="Common Questions" />
        <div className="mx-auto max-w-3xl space-y-3">
          {[
            { q: "How much does a project cost?", a: "Every business has different needs, so we provide custom quotes after a brief discovery call. Our solutions are designed to deliver clear ROI." },
            { q: "How long does it take?", a: "Most projects take between 2 to 4 weeks depending on the complexity of the booking flows and automations." },
            { q: "Can you redesign my current website?", a: "Yes, we can rebuild your existing site on our modern stack while keeping your branding and content." },
            { q: "Can it connect with WhatsApp or CRM tools?", a: "Absolutely. We specialize in integrating websites directly with tools like WhatsApp, HubSpot, and others." },
            { q: "Is the chatbot custom to my business?", a: "Yes. We train the AI specifically on your business information, services, and FAQ so it answers accurately." },
            { q: "Will the website work well on mobile?", a: "100%. We design 'mobile-first' since most of your visitors will be using their phones." },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-[24px] border border-ink/25 bg-parchment px-5 py-4 [&_summary::-webkit-details-marker]:hidden"
            >
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-[15px] font-bold leading-snug">
                {faq.q}
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-ink/20 bg-cream transition-transform group-open:rotate-45">
                  <Plus className="h-3.5 w-3.5" />
                </span>
              </summary>
              <p className="mt-3 border-t border-ink/15 pt-3 text-[13px] font-medium leading-relaxed text-ink/60">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </SolutionSection>

      <SolutionPricing
        features={{
          starter: ["Responsive website", "Mobile first design", "Contact forms", "Speed optimized"],
          growth: ["Lead capture flows", "Booking integration", "SEO-ready pages", "Basic automations", "Analytics setup"],
          enterprise: ["Custom web apps", "Advanced integrations", "Multi-page architecture", "Scalable backend"]
        }}
      />

      <SolutionFinalCTA
        title="Ready for a Website That Brings Results?"
        description="Let's build something that helps your business grow."
      />
    </div>
  );
}
