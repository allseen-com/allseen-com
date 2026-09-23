import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { CV_SITE } from "@/lib/cv/site";

type Vertical = {
  eyebrow: string;
  title: string;
  description: string;
  reveal: string;
  href: string;
  external?: boolean;
  visual: ReactNode;
};

const iconClass = "h-7 w-7 text-accent";

const VERTICALS: Vertical[] = [
  {
    eyebrow: "Who's behind it",
    title: "Meet the founder",
    description:
      "Meysam Soheilipour builds and runs the AI systems behind All Seen, from automation pipelines to a 20,000-listing marketplace.",
    reveal: "See the full CV",
    href: `${CV_SITE.url}/`,
    external: true,
    visual: (
      <Image
        src="/images/Meysam-Soheilipour-256.jpg"
        alt="Meysam Soheilipour"
        width={64}
        height={64}
        className="h-16 w-16 rounded-full object-cover ring-2 ring-accent/20"
      />
    ),
  },
  {
    eyebrow: "Automations",
    title: "Workflows that run themselves",
    description:
      "Intake agents, missed-call text-back, and ops pipelines that take repetitive work off your team's plate.",
    reveal: "See what we build",
    href: "/services",
    visual: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
        <circle cx="5" cy="6" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="19" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="5" cy="18" r="2.5" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M7.5 6h3a3 3 0 0 1 3 3v0a3 3 0 0 0 3 3M7.5 18h3a3 3 0 0 0 3-3v0a3 3 0 0 1 3-3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    eyebrow: "AI chatbots",
    title: "Assistants you can try now",
    description:
      "Custom chatbots trained for specific jobs. Chat with a live one and see how it could work for your customers.",
    reveal: "Try the chatbots",
    href: "https://poe.com/AllSeen",
    external: true,
    visual: (
      <svg className={iconClass} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v8a2.5 2.5 0 0 1-2.5 2.5H11l-4.5 4v-4a2.5 2.5 0 0 1-2.5-2.5v-8Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 9.5h.01M12 9.5h.01M15.5 9.5h.01"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function VerticalCard({ vertical }: { vertical: Vertical }) {
  const className =
    "group flex h-full flex-col rounded-2xl bg-white p-6 text-left shadow-sm ring-1 ring-black/[0.06] transition duration-200 hover:-translate-y-1 hover:shadow-lg hover:ring-accent/40 focus-visible:-translate-y-1 focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  const body = (
    <>
      <div className="flex h-16 items-center">{vertical.visual}</div>
      <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-accent">
        {vertical.eyebrow}
      </p>
      <h3 className="mt-2 font-display text-xl font-bold text-ink">
        {vertical.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-ink/65">
        {vertical.description}
      </p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink transition duration-200 md:translate-y-1 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100 md:group-focus-visible:translate-y-0 md:group-focus-visible:opacity-100">
        {vertical.reveal}
        <span
          aria-hidden
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          →
        </span>
      </span>
    </>
  );

  if (vertical.external) {
    return (
      <a
        href={vertical.href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {body}
      </a>
    );
  }

  return (
    <Link href={vertical.href} className={className}>
      {body}
    </Link>
  );
}

export function VerticalCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {VERTICALS.map((vertical) => (
        <VerticalCard key={vertical.title} vertical={vertical} />
      ))}
    </div>
  );
}
