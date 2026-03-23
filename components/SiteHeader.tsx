import Image from "next/image";
import Link from "next/link";
import { CTA, LOGO_URL, NAV_ITEMS, SITE } from "@/lib/site";
import { NavIcon } from "@/components/NavIcons";

function ChartIcon() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 19V5M4 19h16M8 15l3-4 3 2 5-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-surface/90 backdrop-blur-md">
      <div className="mx-auto grid max-w-6xl grid-cols-[auto_1fr_auto] items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 lg:px-8">
        <a
          href={CTA.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-2 justify-self-start rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
        >
          <ChartIcon />
          <span className="hidden sm:inline">Chat with Human</span>
          <span className="sm:hidden">Chat</span>
        </a>

        <nav
          className="hidden justify-center justify-self-center lg:flex lg:items-center lg:gap-0.5"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium text-ink/80 transition-colors hover:bg-black/[0.04] hover:text-ink"
            >
              <NavIcon icon={item.icon} />
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <Link
          href="/"
          className="flex shrink-0 items-center justify-self-end transition-opacity hover:opacity-80"
        >
          <Image
            src={LOGO_URL}
            alt={`${SITE.name} logo`}
            width={230}
            height={55}
            className="h-[2.59rem] w-auto sm:h-[2.88rem]"
            priority
          />
        </Link>
      </div>

      <nav
        className="flex flex-wrap justify-center gap-x-2 gap-y-1 border-t border-black/5 px-3 py-2 lg:hidden"
        aria-label="Primary mobile"
      >
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            {...(item.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            className="inline-flex items-center gap-1 rounded-full bg-black/[0.04] px-2.5 py-1 text-xs font-medium text-ink"
          >
            <NavIcon icon={item.icon} />
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}
