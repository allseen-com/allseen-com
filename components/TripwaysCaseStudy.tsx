import { TRIPWAYS_CASE } from "@/lib/case-study";

export function TripwaysCaseStudy() {
  const { eyebrow, headline, summary, metrics, bullets, company, url } =
    TRIPWAYS_CASE;

  return (
    <section
      id="tripways"
      className="scroll-mt-24 border-y border-black/5 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
            {headline}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-ink/65">
            {summary}
          </p>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="border-t border-black/10 pt-4">
              <dt className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
                {metric.value}
              </dt>
              <dd className="mt-2 text-sm leading-snug text-ink/55">
                {metric.label}
              </dd>
            </div>
          ))}
        </dl>

        <ul className="mt-12 max-w-3xl space-y-3">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-3 text-base leading-relaxed text-ink/75"
            >
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>

        <p className="mt-8">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-ink underline decoration-black/20 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Visit {company}
            <span className="ml-1 text-ink/40" aria-hidden>
              ↗
            </span>
          </a>
        </p>
      </div>
    </section>
  );
}
