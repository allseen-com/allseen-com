import type { NavItem } from "@/lib/site";

const className = "h-4 w-4 shrink-0 text-ink";

export function NavIcon({ icon }: Pick<NavItem, "icon">) {
  switch (icon) {
    case "rocket":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M12 2.5c2.2 3.2 3.5 6.5 3.5 9.8a3.5 3.5 0 1 1-7 0c0-3.3 1.3-6.6 3.5-9.8Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="M9 15.5 7 20l2-1 2 1-1-4M15 15.5l2 4.5-1-1.5-2 1 1-4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "external":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M14 3h7v7M10 14 21 3M21 14v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "binoculars":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <circle cx="8" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="16" cy="14" r="4" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M10 14h4M6 10V8a2 2 0 0 1 2-2h1M18 10V8a2 2 0 0 0-2-2h-1"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "lock":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="5"
            y="11"
            width="14"
            height="10"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M8 11V8a4 4 0 0 1 8 0v3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "id":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="9" cy="11" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path
            d="M14 10h4M14 13h3"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case "film":
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect
            x="3"
            y="5"
            width="18"
            height="14"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M7 5v14M17 5v14M10 9l2 2-2 2"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    default:
      return null;
  }
}
