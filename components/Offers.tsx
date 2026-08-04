import Link from "next/link";
import { OFFERS } from "@/lib/offers";
import { CTA } from "@/lib/site";

export function Offers() {
  return (
    <section
      id="offers"
      className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            How we work
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Three clear offers. No open-ended consulting fog.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink/65">
            Start with a fast audit, then build only what pays for itself —
            or keep a retainer when agentification becomes part of how you
            operate.
          </p>
        </div>

        <ol className="mt-12 grid gap-8 lg:grid-cols-3">
          {OFFERS.map((offer, index) => (
            <li
              key={offer.id}
              className={
                offer.featured
                  ? "flex flex-col border-t-2 border-accent pt-6"
                  : "flex flex-col border-t border-black/10 pt-6"
              }
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/40">
                0{index + 1}
              </p>
              <h3 className="font-display mt-3 text-xl font-bold tracking-tight text-ink">
                {offer.href ? (
                  <Link
                    href={offer.href}
                    className="transition-colors hover:text-accent"
                  >
                    {offer.name}
                  </Link>
                ) : (
                  offer.name
                )}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/65">
                {offer.deliverable}
              </p>
              <div className="mt-6 space-y-1 border-t border-black/5 pt-4">
                <p className="text-sm font-semibold text-ink">{offer.price}</p>
                <p className="text-xs text-ink/50">{offer.timeline}</p>
                {offer.href ? (
                  <Link
                    href={offer.href}
                    className="mt-3 inline-block text-sm font-semibold text-accent transition-colors hover:text-accent-hover"
                  >
                    View Audit Sprint →
                  </Link>
                ) : null}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 max-w-2xl">
          <h3 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Start with the gap check.
          </h3>
          <p className="mt-3 text-base leading-relaxed text-ink/65">
            Tell me what your team still does by hand. I&apos;ll reply with a
            short, specific read on where automation or agents would buy back
            the most time — free, no pitch deck.
          </p>
          <Link
            href={CTA.auditPage}
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Get a free automation gap check
          </Link>
        </div>
      </div>
    </section>
  );
}
