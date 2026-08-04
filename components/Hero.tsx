import Image from "next/image";
import { CTA, SITE } from "@/lib/site";

const HERO_IMAGE = "/images/All-Seen-By-Us-Header.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="min-w-0">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {SITE.name}
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            <span className="relative inline-block">
              <span className="relative z-10">Automation</span>
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
            that runs like a real ops stack.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/65 sm:text-lg">
            I automate lean businesses the way I automated my own — Trip Ways
            runs a global travel marketplace as a team of one. I&apos;ll build
            the same leverage into yours.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CTA.auditWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              Get a free automation gap check
            </a>
            <a
              href="#tripways"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-ink/70 transition-colors hover:bg-black/[0.04] hover:text-ink"
            >
              See the Trip Ways proof
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-lg lg:mx-0 lg:max-w-none">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-black/10 ring-1 ring-black/5">
            <Image
              src={HERO_IMAGE}
              alt="Many lenses on one studio — All Seen builds automation with the same multi-angle craft."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
