import {
  formatDateRange,
  getResumeJsonUrl,
} from "@/lib/cv/resume";
import type { Resume } from "@/lib/cv/types";
import { SITE } from "@/lib/site";

type ResumeViewProps = {
  resume: Resume;
  /** Public JSON URL shown to humans and crawlers (host-aware in page). */
  jsonUrl?: string;
};

export function ResumeView({
  resume,
  jsonUrl = getResumeJsonUrl(),
}: ResumeViewProps) {
  const { basics, work, skills, education, meta } = resume;

  return (
    <article className="cv-print mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="border-b border-black/10 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Curriculum Vitae
        </p>
        <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          {basics.name}
        </h1>
        <p className="mt-2 text-base font-medium leading-snug text-ink/80 sm:text-lg">
          {basics.label}
        </p>

        <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink/65">
          <div>
            <dt className="sr-only">Location</dt>
            <dd>{basics.location.displayText}</dd>
          </div>
          <div>
            <dt className="sr-only">Citizenship</dt>
            <dd>{basics.citizenship}</dd>
          </div>
          <div>
            <dt className="sr-only">Email</dt>
            <dd>
              <a
                href={`mailto:${basics.contact.email}`}
                className="underline decoration-black/15 underline-offset-2 transition-colors hover:text-ink hover:decoration-accent"
              >
                {basics.contact.email}
              </a>
            </dd>
          </div>
          <div>
            <dt className="sr-only">Phone</dt>
            <dd>
              <a
                href={`tel:${basics.contact.phone.replace(/[^\d+]/g, "")}`}
                className="underline decoration-black/15 underline-offset-2 transition-colors hover:text-ink hover:decoration-accent"
              >
                {basics.contact.phone}
              </a>
            </dd>
          </div>
          {basics.profiles.map((profile) => (
            <div key={profile.network}>
              <dt className="sr-only">{profile.network}</dt>
              <dd>
                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-black/15 underline-offset-2 transition-colors hover:text-ink hover:decoration-accent"
                >
                  {profile.displayText}
                </a>
              </dd>
            </div>
          ))}
        </dl>
      </header>

      <section className="mt-8" aria-labelledby="summary-heading">
        <h2
          id="summary-heading"
          className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink"
        >
          Summary
        </h2>
        <p className="mt-3 text-[0.95rem] leading-relaxed text-ink/75">
          {basics.summary}
        </p>
      </section>

      <section className="mt-10" aria-labelledby="experience-heading">
        <h2
          id="experience-heading"
          className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink"
        >
          Experience
        </h2>
        <ul className="mt-5 space-y-8">
          {work.map((job) => (
            <li key={job.id} className="border-t border-black/5 pt-8 first:border-t-0 first:pt-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <div>
                  <h3 className="text-lg font-semibold tracking-tight text-ink">
                    {job.title}
                    {job.titleSecondary ? (
                      <span className="font-normal text-ink/60">
                        {" "}
                        · {job.titleSecondary}
                      </span>
                    ) : null}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-ink/80">
                    {job.company}
                  </p>
                </div>
                <p className="shrink-0 text-sm text-ink/50">
                  {formatDateRange(job.startDate, job.endDate)}
                </p>
              </div>
              <p className="mt-1 text-sm text-ink/50">{job.location}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-[0.95rem] leading-relaxed text-ink/75">
                {job.highlights.map((highlight, index) => (
                  <li key={`${job.id}-${index}`}>{highlight}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink"
        >
          Skills
        </h2>
        <ul className="mt-5 space-y-4">
          {skills.map((group) => (
            <li key={group.category}>
              <h3 className="text-sm font-semibold text-ink">
                {group.category}
              </h3>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-ink/70">
                {group.keywords.join(" · ")}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-10" aria-labelledby="education-heading">
        <h2
          id="education-heading"
          className="font-display text-sm font-bold uppercase tracking-[0.16em] text-ink"
        >
          Education
        </h2>
        <ul className="mt-5 space-y-5">
          {education.map((item) => (
            <li
              key={`${item.institution}-${item.startDate}`}
              className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4"
            >
              <div>
                <h3 className="text-base font-semibold text-ink">
                  {item.studyType}
                  {item.area ? `, ${item.area}` : ""}
                  {item.minor ? (
                    <span className="font-normal text-ink/60">
                      {" "}
                      · Minor in {item.minor}
                    </span>
                  ) : null}
                </h3>
                <p className="mt-0.5 text-sm text-ink/70">
                  {item.institution}
                  {item.location ? ` · ${item.location}` : ""}
                </p>
              </div>
              <p className="shrink-0 text-sm text-ink/50">
                {formatDateRange(item.startDate, item.endDate)}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <footer className="mt-12 flex flex-col gap-3 border-t border-black/10 pt-6 text-sm text-ink/50 sm:flex-row sm:items-center sm:justify-between">
        <p>
          Updated {meta.lastUpdated}
          <span className="mx-2 text-ink/20" aria-hidden>
            ·
          </span>
          <a
            href={SITE.url}
            className="underline decoration-black/15 underline-offset-2 transition-colors hover:text-ink"
          >
            {SITE.name}
          </a>
        </p>
        <p>
          <a
            href={jsonUrl}
            className="font-medium text-ink/60 underline decoration-black/15 underline-offset-2 transition-colors hover:text-ink"
          >
            Machine-readable resume (JSON)
          </a>
        </p>
      </footer>
    </article>
  );
}
