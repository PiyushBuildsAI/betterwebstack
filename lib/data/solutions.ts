import { Code2, Search, Bot, BarChart3, Zap, Palette, LucideIcon } from "lucide-react";

export interface SolutionItem {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
  badge: string;
  color: string;
  features: string[];
  detailedContent: string;
  benefits: string[];
}

export const solutions: SolutionItem[] = [
  {
    id: "ai-driven-websites",
    icon: Code2,
    title: "AI-Powered Websites",
    description: "Websites built as active systems that talk to visitors, capture intent, and trigger actions automatically.",
    badge: "Core",
    color: "text-ink/70",
    features: ["Real-Time Interaction", "Action-Based Flows", "Scalable Systems"],
    detailedContent: "I build websites that do more than display information. These systems interact with visitors, understand intent, and trigger actions like lead capture or booking automatically. Each setup is designed to turn traffic into real business outcomes while staying fast and reliable. We integrate these seamlessly with [Conversation Funnels](/solutions/conversation-funnels) to guide users from interest to action.",
    benefits: ["Captures leads automatically", "Engages visitors instantly", "Built for real business use", "Scales as you grow"]
  },
  {
    id: "conversation-funnels",
    icon: Search,
    title: "Conversation Funnels",
    description: "Turn visitors into conversations and qualified leads using AI-driven flows designed for conversion.",
    badge: "Growth",
    color: "text-ink",
    features: ["Dynamic Responses", "Intent Detection", "Conversion Paths"],
    detailedContent: "Instead of static pages, I build flows that guide users through conversations. Visitors are engaged, asked the right questions, and moved toward action. This creates a natural path from interest to qualified lead without friction. This pairs perfectly with our [Interaction-Focused Design](/solutions/interaction-focused-design) to ensure a smooth and intuitive user experience.",
    benefits: ["Higher conversion rates", "Better lead quality", "Clear user journeys", "More engagement"]
  },
  {
    id: "ai-agents",
    icon: Bot,
    title: "AI Agents & Voice Assistants",
    description: "AI that can chat, call, qualify leads, and handle real customer interactions without manual effort.",
    badge: "AI",
    color: "text-ink/70",
    features: ["Voice Agents", "Multi-Step Actions", "Context Awareness"],
    detailedContent: "I build AI systems that handle real conversations across chat and voice. These agents can answer questions, qualify leads, and take actions like booking or routing. They work continuously and adapt based on context. When combined with [Autonomous Workflows](/solutions/autonomous-workflows), these agents can sync directly to your CRM.",
    benefits: ["Handles conversations automatically", "Works 24/7", "Reduces manual work", "Improves response speed"]
  },
  {
    id: "conversation-intelligence",
    icon: BarChart3,
    title: "Conversation Intelligence",
    description: "Understand what users ask, want, and do through real interactions and turn it into actionable insights.",
    badge: "Data",
    color: "text-ink/60",
    features: ["Intent Tracking", "Lead Signals", "Behavior Insights"],
    detailedContent: "I track conversations, actions, and user behavior to give you a clear view of what is working. Instead of just clicks, you see real intent and patterns that help you improve performance and decision making. These insights power our [AI Agents & Voice Assistants](/solutions/ai-agents) to deliver hyper-personalized experiences connected directly to your sales pipeline.",
    benefits: ["Clear understanding of user intent", "Better decision making", "Improved conversion insights", "Data that actually matters"]
  },
  {
    id: "autonomous-workflows",
    icon: Zap,
    title: "Autonomous Workflows",
    description: "AI systems that take actions like booking, routing, updating, and following up without manual work.",
    badge: "Efficiency",
    color: "text-ink/70",
    features: ["Auto Booking", "Lead Routing", "Task Execution"],
    detailedContent: "I create workflows where AI does the work. From handling new leads to triggering follow-ups and updating systems, everything runs automatically. This reduces delays and keeps your business moving without constant input. We can even pass data seamlessly into your [Conversation Intelligence](/solutions/conversation-intelligence) systems so everything stays perfectly synced.",
    benefits: ["Saves time daily", "No missed opportunities", "Faster operations", "Scales without extra effort"]
  },
  {
    id: "custom-ai-solutions",
    icon: Palette,
    title: "Custom AI Solutions",
    description: "We design practical AI systems, assistants, and automations tailored to your workflow, customers, and growth goals.",
    badge: "Custom",
    color: "text-ink/60",
    features: ["Custom Workflows", "Smart Assistants", "Growth Automation"],
    detailedContent: "Every business works differently. We build custom AI systems designed around your specific processes, customer journey, and goals. From lead generation to internal automation, we create practical solutions that fit how you actually operate. Explore our [AI Agents & Voice Assistants](/solutions/ai-agents) and [Autonomous Workflows](/solutions/autonomous-workflows) to see what is possible.",
    benefits: ["Built around your business", "Practical and outcome-focused", "Scales with your growth", "No generic templates"]
  }
]