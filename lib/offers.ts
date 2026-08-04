export type OfferTier = {
  id: string;
  name: string;
  deliverable: string;
  timeline: string;
  price: string;
  featured?: boolean;
  href?: string;
};

/** Productized menu — ranges to validate with the first real conversations. */
export const OFFERS: OfferTier[] = [
  {
    id: "audit",
    name: "Automation Audit Sprint",
    deliverable:
      "Mapped workflows, 3–5 prioritized automation or agent opportunities, and a clear ROI estimate.",
    timeline: "3–5 days",
    price: "$500–$1,500",
    featured: true,
    href: "/audit",
  },
  {
    id: "build",
    name: "Build Sprint",
    deliverable:
      "1–3 working n8n workflows or AI agents that close the highest-priority gaps from the audit.",
    timeline: "2–4 weeks",
    price: "$2,500–$7,500",
  },
  {
    id: "retainer",
    name: "AI Ops Retainer",
    deliverable:
      "Ongoing agent building, monitoring, and scaling — agentification as a continuing ops relationship.",
    timeline: "Monthly",
    price: "$1,500–$5,000/mo",
  },
];

export const AUDIT_OFFER = {
  name: "Automation Audit Sprint",
  eyebrow: "Start here",
  headline: "See what's costing you hours before you buy a build.",
  summary:
    "A short, written audit of your current ops: mapped workflows, the highest-leverage automation and agent opportunities, and a plain-language ROI estimate — so you know what to fix first.",
  price: "$500–$1,500",
  timeline: "3–5 days",
  freeGapCheck:
    "Not ready for a paid sprint? Start with a free automation gap check — a short WhatsApp exchange that surfaces the obvious time sinks.",
  includes: [
    "Current-state map of the repetitive workflows that keep your team in the tools",
    "3–5 prioritized automation or AI-agent opportunities, ranked by leverage",
    "Rough ROI estimate: time saved, error risk reduced, and what to build first",
    "A clear recommendation on whether a Build Sprint (or retainer) is worth it",
  ],
  fit: [
    "Solo founders and 2–10 person teams with multi-tool manual workflows",
    "E-commerce, marketplaces, travel/booking, and service businesses",
    "Teams already feeling data entry, support, reporting, or vendor-ops drag",
  ],
  steps: [
    {
      title: "Gap check",
      body: "Tell me what still gets done by hand. I’ll reply with a specific first read — free.",
    },
    {
      title: "Audit Sprint",
      body: "We dig into your stack and workflows. You get a written prioritization in 3–5 days.",
    },
    {
      title: "Build or stop",
      body: "If the ROI is clear, we move into a Build Sprint. If not, you keep the map and walk away smarter.",
    },
  ],
} as const;
