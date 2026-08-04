export type OfferTier = {
  id: string;
  name: string;
  deliverable: string;
  timeline: string;
  price: string;
  featured?: boolean;
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
