/**
 * Single source of truth for outbound URLs and brand copy.
 */

export const SITE = {
  name: "All Seen",
  /** Browser `<title>` and social previews — brand name first. */
  title: "All Seen — Automation for lean businesses",
  description:
    "I automate lean businesses the way I automated my own. Trip Ways runs a global travel marketplace as a team of one — I'll build the same leverage into yours with n8n, AI agents, and practical ops systems.",
  url: "https://allseen.com",
} as const;

export const LOGO_URL = "/images/Menu-Logo-Black.png";

export const CTA = {
  youtube: "https://www.youtube.com/@all_seen",
  whatsapp: "https://wa.me/19712679430?text=AllSeen.com",
  /** Primary homepage conversion path until the Audit Sprint offer page ships. */
  auditWhatsapp:
    "https://wa.me/19712679430?text=Hi%20%E2%80%94%20I%27d%20like%20a%20free%20automation%20gap%20check%20for%20my%20business.",
} as const;

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  icon: "rocket" | "external" | "binoculars" | "lock" | "id" | "film";
};

/** Primary header navigation — order matches current live menu. */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "N8N",
    href: "https://n8n.allseen.com",
    external: true,
    icon: "rocket",
  },
  {
    label: "Chatbots",
    href: "https://poe.com/AllSeen",
    external: true,
    icon: "external",
  },
  {
    label: "TripWays",
    href: "https://tripways.com",
    external: true,
    icon: "binoculars",
  },
  {
    label: "OTSI",
    href: "https://allseen.com/otsi/",
    external: true,
    icon: "lock",
  },
  {
    label: "CV",
    href: "https://cv.allseen.com/",
    external: true,
    icon: "id",
  },
  {
    label: "Footage",
    href: "https://videohive.net/user/allseen/portfolio",
    external: true,
    icon: "film",
  },
];

export const SOCIAL = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/@all_seen",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/meysamsoheili/",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/_all_seen_/",
  },
  {
    label: "ThemeForest",
    href: "https://themeforest.net/user/allseen",
  },
] as const;

export const LEGAL = [
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Privacy Policy", href: "/privacy-policy" },
] as const;
