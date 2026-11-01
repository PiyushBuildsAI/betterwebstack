/**
 * Single source of truth for the marketing site.
 * Replace the placeholder phone, WhatsApp number, email and proof numbers
 * with your real details before you publish.
 */

export const SITE = {
  name: "BetterWebStack",
  url: "https://betterwebstack.com",
  tagline: "Websites that bring you customers.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@betterwebstack.com",
  whatsappNumber: "919876543210",
  whatsapp:
    "https://wa.me/919876543210?text=Hi%20BetterWebStack%2C%20I%20run%20a%20business%20in%20Tricity%20and%20I%27d%20like%20a%20free%20website%20audit.",
  location: "Chandigarh · Mohali · Panchkula",
  hours: "Mon–Sat · 10:00–19:00 IST",
  responseTime: "We reply within 2 working hours",
  packages: [
    {
      name: "Launch",
      price: "₹24,999",
      priceValue: "24999",
      description: "A sharp 5-page website for a local business that needs to look credible and get calls.",
    },
    {
      name: "Growth",
      price: "₹49,999",
      priceValue: "49999",
      description: "An 8–10 page website with copywriting, local SEO and a lead routing setup.",
    },
    {
      name: "Scale",
      price: "₹99,999",
      priceValue: "99999",
      description: "E-commerce, booking or automation-heavy builds wired into your sales process.",
    },
  ],
} as const;

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const BUSINESS_TYPES = [
  "Clinic / dental",
  "Real estate",
  "Retail / D2C",
  "Restaurant / cafe",
  "Education / coaching",
  "Manufacturing / B2B",
  "Services / consultant",
  "Something else",
];

export const BUDGETS = [
  "Under ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Not sure yet",
];

export const TIMELINES = ["ASAP", "Within 30 days", "1–3 months", "Just exploring"];

export const STATS = [
  { value: 120, suffix: "+", label: "Websites shipped", note: "since 2021" },
  { value: 3.1, suffix: "×", label: "Average enquiry lift", note: "first 90 days" },
  { value: 18, suffix: " days", label: "Average launch", note: "from kickoff" },
  { value: 97, suffix: "%", label: "Delivered on time", note: "last 40 builds" },
];

export type ServiceKey =
  | "business"
  | "ecommerce"
  | "landing"
  | "local-seo"
  | "automation"
  | "care";

export const SERVICES: {
  key: ServiceKey;
  title: string;
  short: string;
  price: string;
  description: string;
  outcomes: string[];
  timeline: string;
}[] = [
  {
    key: "business",
    title: "Business websites",
    short: "Business site",
    price: "from ₹24,999",
    description:
      "A 5–8 page website that answers buying questions before the first call and makes contacting you the obvious next step.",
    outcomes: [
      "Written copy, not Lorem Ipsum",
      "Click-to-call + WhatsApp on every page",
      "Google Business Profile setup",
      "Loads in under 2 seconds",
    ],
    timeline: "7–10 days",
  },
  {
    key: "ecommerce",
    title: "E-commerce stores",
    short: "Online store",
    price: "from ₹79,999",
    description:
      "A storefront built around the way Tricity buyers actually shop — UPI, COD, WhatsApp order confirmation and clean product pages.",
    outcomes: [
      "UPI, cards, COD and shipping rules",
      "Size guides and product FAQs",
      "Abandoned-cart follow-up",
      "Catalog and inventory ready",
    ],
    timeline: "3–5 weeks",
  },
  {
    key: "landing",
    title: "Ad landing pages",
    short: "Landing page",
    price: "from ₹18,999",
    description:
      "One page, one offer. Built to convert the Meta and Google traffic you are already paying for instead of leaking it.",
    outcomes: [
      "Offer-led structure and proof blocks",
      "Form + WhatsApp + call tracking",
      "A/B ready sections",
      "Ship in 5 days",
    ],
    timeline: "5–7 days",
  },
  {
    key: "local-seo",
    title: "Local SEO",
    short: "Local SEO",
    price: "from ₹12,999/mo",
    description:
      "Show up when someone in Chandigarh, Mohali or Panchkula searches for what you sell — not just when they already know your name.",
    outcomes: [
      "Google Business Profile optimisation",
      "Location + service page architecture",
      "Schema, reviews and citation cleanup",
      "Monthly ranking report",
    ],
    timeline: "Ongoing",
  },
  {
    key: "automation",
    title: "AI chat + automation",
    short: "AI automation",
    price: "from ₹29,999",
    description:
      "A site that answers in seconds, qualifies the enquiry, and books the appointment while you are with another customer.",
    outcomes: [
      "WhatsApp + website chat agent",
      "Lead qualification questions",
      "Calendar booking and reminders",
      "Sync to Sheets or your CRM",
    ],
    timeline: "2–3 weeks",
  },
  {
    key: "care",
    title: "Care & growth",
    short: "Care plan",
    price: "₹4,999/mo",
    description:
      "The unglamorous part that keeps a website converting: updates, backups, speed checks and a monthly look at what leads came in.",
    outcomes: [
      "Hosting, backups and security",
      "2 hours of edits each month",
      "Speed and form checks",
      "Monthly lead report",
    ],
    timeline: "Monthly",
  },
];

export const INDUSTRIES = [
  "Dental & skin clinics",
  "Real estate",
  "Restaurants & cafes",
  "D2C brands",
  "Schools & coaching",
  "Interior designers",
  "Manufacturing",
  "Fitness studios",
  "Wedding vendors",
  "CA & legal firms",
];

export const WORK = [
  {
    id: "dental",
    tag: "Clinic · Sector 34, Chandigarh",
    title: "Dental clinic website + booking",
    summary:
      "A trust-first site with treatment pricing, doctor credentials and one-tap WhatsApp booking. The front desk stopped answering the same five questions.",
    metric: "+212%",
    metricLabel: "appointment enquiries",
    extra: "0.9s load · 3 weeks",
    accent: "#0F766E",
    mockup: "clinic" as const,
  },
  {
    id: "realestate",
    tag: "Real estate · Mohali",
    title: "Project site for a local developer",
    summary:
      "Each project got a page built around possession date, price band and a site-visit booking flow — then wired to WhatsApp for instant follow-up.",
    metric: "3.4×",
    metricLabel: "qualified site enquiries",
    extra: "41 leads/mo · 18 days",
    accent: "#C4EC2F",
    mockup: "realestate" as const,
  },
  {
    id: "d2c",
    tag: "D2C skincare · Panchkula",
    title: "Store rebuild with COD clarity",
    summary:
      "Product pages now answer shipping, COD and ingredient questions up front. Cart recovery and WhatsApp confirmations do the follow-up.",
    metric: "+68%",
    metricLabel: "revenue in 90 days",
    extra: "4.3% conversion · 26 days",
    accent: "#EA580C",
    mockup: "shop" as const,
  },
];

export const PROCESS = [
  {
    step: "01",
    title: "Free audit",
    time: "Day 0",
    body: "We look at your current site (or your Google listing if you do not have one) and send a short, specific fix list — not a sales deck.",
  },
  {
    step: "02",
    title: "Blueprint",
    time: "Day 1–2",
    body: "Pages, offer, enquiry flow and tech stack agreed in writing. One fixed quote. You approve before anything is built.",
  },
  {
    step: "03",
    title: "Design & build",
    time: "Week 1–2",
    body: "Copy, design and build in a live preview link. You review on your phone, we tune, then we test forms and speed.",
  },
  {
    step: "04",
    title: "Launch & grow",
    time: "Week 3+",
    body: "We ship, connect analytics and lead alerts, then review the first 30 days of enquiries with you.",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We were getting calls from people who had already seen the price list. The new site filters them for us, so the front desk spends time on patients who are ready to book.",
    name: "Dr. Amanpreet Kaur",
    role: "Dental clinic, Sector 34, Chandigarh",
    initials: "AK",
    result: "+212% enquiries",
  },
  {
    quote:
      "The project pages went live in 18 days and the first site visit came from Google two days later. The WhatsApp handoff is what sold me.",
    name: "Rahul Mehta",
    role: "Real estate, Mohali",
    initials: "RM",
    result: "41 leads / month",
  },
  {
    quote:
      "Our old store had a 2% conversion rate. The rebuild made COD and delivery timelines obvious, and the cart follow-ups paid for the project.",
    name: "Sneha Jain",
    role: "D2C skincare, Panchkula",
    initials: "SJ",
    result: "+68% revenue",
  },
];

export const COMPARISON = [
  { label: "Fixed quote before work starts", us: true },
  { label: "Written scope and launch date", us: true },
  { label: "Copywriting included", us: true },
  { label: "Local SEO built into the build", us: true },
  { label: "WhatsApp lead routing", us: true },
  { label: "Post-launch support plan", us: true },
  { label: "You own domain, code and accounts", us: true },
];

export const FAQS = [
  {
    q: "How much does a website cost in Chandigarh?",
    a: "Our business websites start at ₹24,999, ad landing pages at ₹18,999 and online stores at ₹79,999. You get a fixed quote after a free audit — no hourly surprises, no charge for the first revision round. GST is extra where applicable.",
  },
  {
    q: "How long does the build take?",
    a: "A 5-page business site usually ships in 7–10 days and an 8–10 page site in 2–3 weeks. E-commerce and automation projects take 3–5 weeks. The single biggest delay is usually content, so we write the copy for you.",
  },
  {
    q: "Do you work with businesses outside Tricity?",
    a: "Yes. We build remotely for clients across India and abroad. If you are in Chandigarh, Mohali, Panchkula or Zirakpur we can meet in person for the kickoff and final review.",
  },
  {
    q: "Do I own the website, domain and content?",
    a: "Always. The domain, hosting account, code and content are registered in your name. There is no lock-in: if you ever move to another team, everything goes with you.",
  },
  {
    q: "Will my business rank on Google?",
    a: "We build the local SEO groundwork in — Google Business Profile, location pages, schema, fast pages, review flow. New sites typically start showing local ranking movement in 8–12 weeks. Nobody honest can promise a #1 position.",
  },
  {
    q: "My website exists but looks dated. Can you fix it?",
    a: "That is most of our work. We start with a free audit, tell you what is worth keeping, and redesign around the pages that already get traffic instead of starting from zero.",
  },
  {
    q: "Do you offer support after launch?",
    a: "Every build includes 30–90 days of support depending on the package. After that, plans start at ₹4,999/month for hosting, backups, edits and a monthly lead report.",
  },
  {
    q: "What do you need from me to start?",
    a: "A 30-minute call, your logo if you have one, and access to your domain or Google Business Profile. Everything else — structure, copy, images, forms — is handled by us.",
  },
];

export const AREAS = [
  "Sector 17",
  "Sector 34",
  "Sector 35",
  "Panchkula",
  "Mohali",
  "Airport Road",
  "Zirakpur",
  "Kharar",
  "New Chandigarh",
  "Industrial Area",
  "IT Park",
  "Peer Muchalla",
];
