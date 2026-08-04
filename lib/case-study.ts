/**
 * Trip Ways proof points for the homepage case-study block.
 * Numbers drawn from the live resume source of truth.
 */
export const TRIPWAYS_CASE = {
  company: "Trip Ways",
  url: "https://tripways.com",
  eyebrow: "Proof, not theory",
  headline: "A global marketplace, run as a team of one",
  summary:
    "I automate lean businesses the way I automated my own. Trip Ways is a B2B2C travel marketplace I operate end-to-end — booking, vendor ops, GTTD compliance, and growth — with n8n and AI agents carrying the repetitive load.",
  metrics: [
    {
      value: "1,000+",
      label: "Vendor partners across 90+ countries",
    },
    {
      value: "20K+",
      label: "Bookable tours & activities",
    },
    {
      value: "<30 min",
      label: "Vendor onboarding (was days)",
    },
    {
      value: "GTTD",
      label: "Google Things to Do live approval",
    },
  ],
  bullets: [
    "Owned end-to-end Google Things to Do approval with data-quality validation and agentic compliance pipelines.",
    "Built n8n + LLM vendor-ops workflows for onboarding, content standardization, tagging, and localization.",
    "Shipped autonomous agents for POI assignment and inventory classification across thousands of partner tours.",
  ],
} as const;
