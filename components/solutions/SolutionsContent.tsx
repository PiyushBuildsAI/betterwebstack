"use client";

import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Check,
  Code2,
  Palette,
  Rocket,
  Search,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { DesertScene, Sparkle, SunBurst } from "@/components/brand/Botanical";

type Solution = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  badge: string;
  tint: string;
  features: string[];
  benefits: string[];
};

const detailedSolutions: Solution[] = [
  {
    id: "nextjs-development",
    title: "Next.js Development",
    subtitle: "High-Performance Web Applications",
    description:
      "We build cutting-edge web applications using Next.js, the React framework for production. Our solution ensures lightning-fast performance, superior SEO through server-side rendering, and a robust architecture that scales with your business.",
    icon: Code2,
    badge: "Core Technology",
    tint: "bg-marigold",
    features: [
      "Server-Side Rendering (SSR) & Static Site Generation (SSG)",
      "App Router & Server Components Architecture",
      "Edge Runtime & Middleware Integration",
      "API Route Optimization & Type-Safe Codebase",
      "Incremental Static Regeneration (ISR)",
    ],
    benefits: [
      "Load times under 1 second",
      "Perfect Lighthouse scores",
      "Enhanced security",
      "Seamless scalability",
    ],
  },
  {
    id: "seo-optimization",
    title: "SEO Optimization",
    subtitle: "Dominate Search Rankings",
    description:
      "Our comprehensive SEO strategy goes beyond basic meta tags. We implement technical SEO, structured data, and content optimization to ensure your site starts ranking from day one and continues to grow its organic reach.",
    icon: Search,
    badge: "Growth Engine",
    tint: "bg-sage",
    features: [
      "Schema Markup & JSON-LD Structured Data",
      "Dynamic Sitemap & Robots.txt Management",
      "Core Web Vitals Optimization",
      "Semantic HTML Structure & Accessibility",
      "Open Graph & Twitter Card Integration",
    ],
    benefits: [
      "Higher organic traffic",
      "Better click-through rates",
      "Increased domain authority",
      "Local SEO dominance",
    ],
  },
  {
    id: "ai-chatbots",
    title: "AI Chatbots",
    subtitle: "24/7 Intelligent Customer Support",
    description:
      "Transform your customer service with custom-trained AI chatbots. Using advanced LLMs, we create assistants that understand your business context, answer queries instantly, and even qualify leads while you sleep.",
    icon: Bot,
    badge: "Innovation",
    tint: "bg-parchment",
    features: [
      "Custom Knowledge Base Training",
      "Natural Language Processing (NLP)",
      "Seamless Human Handoff Protocols",
      "Multi-platform Integration (Web, WhatsApp, Slack)",
      "Conversation History & Analytics",
    ],
    benefits: [
      "Instant response times",
      "Reduced support costs",
      "Higher lead conversion",
      "Brand consistency",
    ],
  },
  {
    id: "analytics-crm",
    title: "Analytics & CRM",
    subtitle: "Data-Driven Decision Making",
    description:
      "Stop guessing and start knowing. We integrate powerful analytics and CRM tools directly into your application, giving you a 360-degree view of your users and keeping your sales pipeline flowing efficiently.",
    icon: BarChart3,
    badge: "Business Intelligence",
    tint: "bg-marigold",
    features: [
      "Custom Event Tracking & User Journeys",
      "Real-time Dashboard Integration",
      "Lead Scoring & Segmentation",
      "Automated Deal Flow Pipelines",
      "Conversion Rate Optimization (CRO) Setup",
    ],
    benefits: [
      "Deep user insights",
      "Improved retention",
      "Streamlined sales process",
      "Measurable ROI",
    ],
  },
  {
    id: "automation",
    title: "Automation",
    subtitle: "Streamlined Workflows",
    description:
      "Eliminate repetitive tasks and human error. We connect your web app with your favorite tools via webhooks and APIs to automate email sequences, client onboarding, invoicing, and more.",
    icon: Zap,
    badge: "Efficiency",
    tint: "bg-sage",
    features: [
      "Zapier / n8n / Make Integration",
      "Automated Email Marketing Flows",
      "Dynamic Form Handling & Routing",
      "Scheduled Background Jobs",
      "Third-party API Orchestration",
    ],
    benefits: [
      "Hours saved daily",
      "Reduced operational costs",
      "Faster turnaround times",
      "Consistency in processes",
    ],
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    subtitle: "Captivating User Experiences",
    description:
      "We don't just write code; we craft experiences. Our design philosophy centers on user-centric principles, modern aesthetics, and intuitive navigation to ensure your visitors stay longer and convert more.",
    icon: Palette,
    badge: "Design",
    tint: "bg-parchment",
    features: [
      "Mobile-First Responsive Design",
      "Dark Mode & Theming Support",
      "Micro-interactions & Animations",
      "WCAG 2.1 Accessibility Compliance",
      "Design System Creation",
    ],
    benefits: [
      "Lower bounce rates",
      "Higher engagement",
      "Premium brand perception",
      "Universal accessibility",
    ],
  },
];

export default function SolutionsContent() {
  return (
    <div className="w-full">
      {/* Hero */}
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-36">
        <div className="pointer-events-none absolute inset-0 sunlit-dots opacity-25 [mask-image:radial-gradient(ellipse_at_55%_0%,black_0%,transparent_70%)]" />
        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="animate-rise">
              <span className="pill pill-marigold">
                <Sparkle className="h-3 w-3 text-ink" />
                Our Expertise
              </span>
              <h1 className="display-bold mt-6 max-w-[15ch] text-[50px] uppercase leading-[0.86] sm:text-[76px] lg:text-[86px]">
                Comprehensive Digital Solutions
              </h1>
              <p className="mt-6 max-w-2xl text-[15.5px] font-medium leading-relaxed text-ink/65 sm:text-[17px]">
                We combine technical excellence with business strategy to deliver digital products
                that drive real growth.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="#nextjs-development" className="btn-lime group">
                  Explore the stack
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link href="/contact" className="btn-ghost">
                  Talk to us
                </Link>
              </div>
            </div>

            <div className="relative hidden h-[420px] lg:block">
              <div className="absolute inset-0 text-ink/20">
                <DesertScene />
              </div>
              <div className="stamp absolute bottom-4 left-0 w-[230px] rotate-[-2deg] rounded-[28px] border border-ink bg-parchment p-5">
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.14em] text-ink/45">
                  The full stack
                </p>
                <p className="display mt-2 text-[52px] leading-none">6</p>
                <p className="mt-1 text-[12px] font-bold uppercase tracking-[0.1em] text-ink/60">
                  connected systems
                </p>
                <div className="mt-3 flex gap-1">
                  {["", "", "", "", "", ""].map((_, i) => (
                    <span
                      key={i}
                      className={`h-1.5 flex-1 rounded-full ${i < 3 ? "bg-ink" : "bg-sage"}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <div className="mx-auto max-w-6xl space-y-20 px-5 pb-20 sm:space-y-28 sm:px-8">
        {detailedSolutions.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <div
              id={solution.id}
              key={solution.id}
              className={`flex scroll-mt-32 flex-col items-center gap-10 lg:gap-14 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              {/* Visual Side */}
              <div className="w-full lg:w-1/2">
                <div className="stamp relative overflow-hidden rounded-[40px] border border-ink bg-parchment p-6 sm:p-8">
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full ${solution.tint} opacity-70`}
                  />
                  <SunBurst className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 text-ink/10" />
                  <span className="absolute right-6 top-5 font-display text-[54px] font-semibold leading-none text-ink/10">
                    0{index + 1}
                  </span>

                  <div className="relative">
                    <div className="flex items-center gap-3">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink bg-marigold text-ink">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="pill">{solution.badge}</span>
                    </div>

                    <h3 className="mt-5 max-w-[15ch] text-[30px] font-semibold uppercase leading-[0.95] tracking-[-0.01em] sm:text-[36px]">
                      {solution.title}
                    </h3>
                    <p className="mt-1 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-ink/50">
                      {solution.subtitle}
                    </p>
                    <p className="mt-4 text-[13.5px] font-medium leading-relaxed text-ink/65">
                      {solution.description}
                    </p>

                    <div className="mt-6 grid grid-cols-1 gap-2 border-t border-ink/15 pt-5 sm:grid-cols-2">
                      {solution.benefits.map((benefit) => (
                        <div
                          key={benefit}
                          className="flex items-center gap-2 text-[12px] font-bold text-ink/75"
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-marigold">
                            <Check className="h-2.5 w-2.5 text-ink" strokeWidth={4} />
                          </span>
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content Side */}
              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink/45">
                    What is inside
                  </span>
                  <span className="h-px flex-1 bg-ink/20" />
                </div>
                <h3 className="mt-3 flex items-center gap-2 text-[28px] font-semibold uppercase leading-[1] tracking-[-0.005em] sm:text-[34px]">
                  Technical Features
                </h3>
                <ul className="mt-5">
                  {solution.features.map((feature, idx) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 border-b border-ink/15 py-3.5 last:border-0"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-ink/30 bg-parchment font-mono text-[8.5px] font-bold text-ink/60">
                        0{idx + 1}
                      </span>
                      <span className="text-[13px] font-semibold leading-snug text-ink/75">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <Link href="/#booking" className="btn-ink group">
                    Get Started with {solution.title}
                    <Rocket className="h-4 w-4 text-marigold transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA Section */}
      <section className="px-5 pb-20 sm:px-8">
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[40px] border border-ink bg-ink px-6 py-12 text-center text-paper sm:px-10">
          <div className="pointer-events-none absolute inset-0 forest-lines opacity-60" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-paper/10">
            <SunBurst />
          </div>
          <Sparkle className="pointer-events-none absolute left-10 top-10 h-4 w-4 text-marigold/70" />
          <div className="relative">
            <h2 className="display mx-auto max-w-[20ch] text-[38px] uppercase leading-[0.9] text-paper sm:text-[50px]">
              Ready to Build Something Amazing?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[13.5px] font-medium leading-relaxed text-paper/65">
              Let&apos;s turn your vision into a high-performance reality. Schedule a free
              consultation call with us today.
            </p>
            <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
              <Link href="/#booking" className="btn-lime">
                Book a Free Call
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-paper/35 px-6 py-3 text-[13px] font-bold text-paper transition hover:-translate-y-0.5 hover:border-paper/70"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
