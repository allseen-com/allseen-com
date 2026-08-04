import type { Metadata } from "next";
import Link from "next/link";
import { AUDIT_OFFER } from "@/lib/offers";
import { CTA, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Automation Audit Sprint",
  description: AUDIT_OFFER.summary,
  openGraph: {
    title: `Automation Audit Sprint · ${SITE.name}`,
    description: AUDIT_OFFER.summary,
    url: `${SITE.url}/audit`,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `Automation Audit Sprint · ${SITE.name}`,
    description: AUDIT_OFFER.summary,
  },
};

export default function AuditPage() {
  const {
    eyebrow,
    headline,
    summary,
    price,
    timeline,
    freeGapCheck,
    includes,
    fit,
    steps,
  } = AUDIT_OFFER;

  return (
    <>
      <section className="px-4 pb-12 pt-14 sm:px-6 sm:pb-16 sm:pt-20 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl">
            {headline}
          </h1>
          <p className="mt-6 text-base leading-relaxed text-ink/65 sm:text-lg">
            {summary}
          </p>
          <div className="mt-8 flex flex-wrap items-end gap-x-8 gap-y-3 border-t border-black/10 pt-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                Investment
              </p>
              <p className="mt-1 font-display text-2xl font-bold text-ink">
                {price}
              </p>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                Timeline
              </p>
              <p className="mt-1 text-lg font-semibold text-ink">{timeline}</p>
            </div>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={CTA.auditWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              Get a free automation gap check
            </a>
            <Link
              href="/#tripways"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-ink/70 transition-colors hover:bg-black/[0.04] hover:text-ink"
            >
              See Trip Ways proof
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              What you get
            </h2>
            <ul className="mt-6 space-y-4">
              {includes.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-ink/75"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
              Best fit
            </h2>
            <ul className="mt-6 space-y-4">
              {fit.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-base leading-relaxed text-ink/75"
                >
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ink/25"
                    aria-hidden
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            How it works
          </h2>
          <ol className="mt-10 grid gap-8 sm:grid-cols-3">
            {steps.map((step, index) => (
              <li
                key={step.title}
                className="border-t border-black/10 pt-5"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                  0{index + 1}
                </p>
                <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-black/5 bg-mist px-4 py-16 text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="relative mx-auto max-w-3xl">
          <div className="grain absolute inset-0" aria-hidden />
          <div className="relative">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Start with the gap check.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70">
              {freeGapCheck}
            </p>
            <a
              href={CTA.auditWhatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              Message me on WhatsApp
            </a>
            <p className="mt-4 text-sm text-white/45">
              Or browse{" "}
              <Link href="/#offers" className="underline underline-offset-4 hover:text-white">
                all three offers
              </Link>{" "}
              on the homepage.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
