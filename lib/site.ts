/**
 * Single source of truth for outbound URLs.
 * Replace placeholder targets when you have final destinations.
 */

export const SITE = {
  name: "All Seen",
  title: "All Seen — Technology, Art, Adventure",
  description:
    "Cutting-edge platforms and AI-driven solutions to help individuals and businesses improve performance through advanced automation.",
  url: "https://allseen.com",
} as const;

export const LOGO_URL =
  "https://allseen.com/wp-content/uploads/2024/04/Menu-Logo-Black.png";

export const CTA = {
  youtube: "https://www.youtube.com/@all_seen",
  whatsapp:
    "https://wa.me/19712679430?text=AllSeen.com",
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
  { label: "Terms of Service", href: "https://allseen.com/terms-of-service/" },
  { label: "Privacy Policy", href: "https://allseen.com/privacy-policy/" },
] as const;
