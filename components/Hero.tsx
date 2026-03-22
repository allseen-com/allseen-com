import Link from "next/link";
import { CTA } from "@/lib/site";

function TrendIcon() {
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

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div>
          <p className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            <span className="block">World,</span>
            <span className="block">through many</span>
            <span className="block">lenses</span>
          </p>
          <p className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            <span className="relative inline-block">
              <span className="relative z-10">All seen</span>
              <svg
                className="absolute -bottom-1 left-0 w-full text-highlight sm:-bottom-2"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c28-6 72-6 98-2s72 4 98-2"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            by us.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={CTA.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              <TrendIcon />
              YouTube Channel
            </a>
            <Link
              href="/#work"
              className="text-sm font-semibold text-ink/70 underline-offset-4 transition-colors hover:text-ink hover:underline"
            >
              View featured work
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:mx-0 lg:max-w-none">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-highlight/90 via-white to-sky-400/80 shadow-xl shadow-black/10 ring-1 ring-black/5">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,255,255,0.5),transparent_50%)]" />
            <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/90 shadow-md ring-1 ring-black/5">
              <svg
                className="h-8 w-8 text-ink"
                viewBox="0 0 32 32"
                fill="none"
                aria-hidden
              >
                <ellipse cx="11" cy="14" rx="4" ry="5" fill="currentColor" />
                <ellipse cx="21" cy="14" rx="4" ry="5" fill="currentColor" />
              </svg>
            </div>
            <p className="absolute bottom-6 left-6 right-6 font-display text-lg font-bold leading-snug text-ink/85 drop-shadow-sm">
              Technology, art, adventure — one studio, many outputs.
            </p>
          </div>
          <div className="absolute -bottom-4 -right-2 flex max-w-[9rem] rotate-3 items-center gap-2 rounded-2xl bg-white p-3 shadow-lg ring-1 ring-black/5 sm:-right-4">
            <span className="font-mono text-2xl font-bold text-accent" aria-hidden>
              {"{}"}
            </span>
            <span className="text-[10px] font-medium leading-tight text-ink/70">
              Code, film, product — all in flow.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
