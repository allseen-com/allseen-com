import Image from "next/image";
import { formatDateRange } from "@/lib/cv/resume";
import type { Resume } from "@/lib/cv/types";
import { SITE } from "@/lib/site";

const PROFILE_IMAGE = "/images/Meysam-Soheilipour.jpeg";

type ResumeViewProps = {
  resume: Resume;
};

export function ResumeView({ resume }: ResumeViewProps) {
  const { basics, work, skills, education, meta } = resume;

  const linkClassName =
    "underline decoration-black/15 underline-offset-2 transition-colors hover:text-ink hover:decoration-accent";

  const linkedIn = basics.profiles.find(
    (profile) => profile.network.toLowerCase() === "linkedin",
  );

  const contactItems = [
    {
      key: "citizenship",
      label: "Citizenship",
      node: <span className="whitespace-nowrap">{basics.citizenship}</span>,
    },
    {
      key: "location",
      label: "Location",
      node: (
        <span className="whitespace-nowrap">{basics.location.displayText}</span>
      ),
    },
    {
      key: "email",
      label: "Email",
      node: (
        <a
          href={`mailto:${basics.contact.email}`}
          className={`${linkClassName} whitespace-nowrap`}
        >
          Email
        </a>
      ),
    },
    {
      key: "mobile",
      label: "Mobile",
      node: (
        <a
          href={`tel:${basics.contact.phone.replace(/[^\d+]/g, "")}`}
          className={`${linkClassName} whitespace-nowrap`}
        >
          Mobile
        </a>
      ),
    },
    ...(linkedIn
      ? [
          {
            key: "linkedin",
            label: "LinkedIn",
            node: (
              <a
                href={linkedIn.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${linkClassName} whitespace-nowrap`}
              >
                LinkedIn
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <article className="cv-print mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
      <header className="border-b border-black/10 pb-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Curriculum Vitae
        </p>

        <div className="mt-4 flex items-start gap-5 sm:gap-6">
          <Image
            src={PROFILE_IMAGE}
            alt={basics.name}
            width={112}
            height={112}
            className="h-24 w-24 shrink-0 rounded-full object-cover ring-1 ring-black/5 sm:h-28 sm:w-28"
            priority
          />

          <div className="min-w-0 flex-1">
            <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              {basics.name}
            </h1>
            <p className="mt-2 text-base font-medium leading-snug text-ink/80 sm:text-lg">
              {basics.label}
            </p>

            <dl className="mt-4 flex flex-wrap items-center gap-x-0 gap-y-1 text-sm text-ink/65">
              {contactItems.map((item, index) => (
                <div key={item.key} className="flex items-center">
                  {index > 0 ? (
                    <span className="mx-2.5 text-ink/25" aria-hidden>
                      •
                    </span>
                  ) : null}
                  <dt className="sr-only">{item.label}</dt>
                  <dd>{item.node}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
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
            <li
              key={job.id}
              className="border-t border-black/5 pt-8 first:border-t-0 first:pt-0"
            >
              <div className="grid grid-cols-1 gap-x-6 gap-y-0.5 sm:grid-cols-[minmax(0,1fr)_auto]">
                <h3 className="text-lg font-bold tracking-tight text-ink">
                  {job.company}
                </h3>
                <p className="text-sm text-ink/50 sm:text-right">
                  {formatDateRange(job.startDate, job.endDate)}
                </p>
                <p className="text-[0.95rem] italic text-ink/60">
                  {job.title}
                  {job.titleSecondary ? ` · ${job.titleSecondary}` : ""}
                </p>
                <p className="text-sm italic text-ink/50 sm:text-right">
                  {job.location}
                </p>
              </div>
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
            href="/resume.json"
            className="font-medium text-ink/60 underline decoration-black/15 underline-offset-2 transition-colors hover:text-ink"
          >
            Machine-readable resume (JSON)
          </a>
        </p>
      </footer>
    </article>
  );
}
