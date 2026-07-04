import resumeData from "@/content/cv/Meysam_Soheilipour_Main_Resume.json";
import { CV_SITE } from "@/lib/cv/site";
import type { Resume } from "@/lib/cv/types";

export function getResume(): Resume {
  return resumeData as Resume;
}

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
] as const;

/** Formats `YYYY-MM` or `YYYY` for display. */
export function formatResumeDate(value: string | null): string {
  if (!value) return "Present";

  const [year, month] = value.split("-");
  if (!month) return year;

  const monthIndex = Number(month) - 1;
  if (monthIndex < 0 || monthIndex > 11) return value;

  return `${MONTHS[monthIndex]} ${year}`;
}

export function formatDateRange(
  startDate: string,
  endDate: string | null,
): string {
  return `${formatResumeDate(startDate)} – ${formatResumeDate(endDate)}`;
}

export function getResumeJsonUrl(): string {
  return `${CV_SITE.url}${CV_SITE.resumeJsonPath}`;
}

/** schema.org ProfilePage + Person graph for search and answer engines. */
export function buildResumeJsonLd(resume: Resume) {
  const { basics, work, skills, education } = resume;
  const personId = `${CV_SITE.url}/#person`;
  const pageId = `${CV_SITE.url}/#page`;

  const knowsAbout = [
    ...new Set(skills.flatMap((group) => group.keywords)),
  ];

  const worksFor = work.map((job) => ({
    "@type": "Organization",
    name: job.company,
  }));

  const alumniOf = education.map((item) => ({
    "@type": "EducationalOrganization",
    name: item.institution,
  }));

  const hasOccupation = work.map((job) => ({
    "@type": "Occupation",
    name: job.titleSecondary
      ? `${job.title} — ${job.titleSecondary}`
      : job.title,
    occupationLocation: {
      "@type": "Place",
      name: job.location,
    },
  }));

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": pageId,
        url: CV_SITE.url,
        name: `${basics.name} — Resume`,
        description: basics.summary,
        isPartOf: {
          "@type": "WebSite",
          name: basics.name,
          url: CV_SITE.url,
        },
        mainEntity: { "@id": personId },
        about: { "@id": personId },
        relatedLink: getResumeJsonUrl(),
      },
      {
        "@type": "Person",
        "@id": personId,
        name: basics.name,
        jobTitle: basics.label,
        description: basics.summary,
        email: basics.contact.email,
        telephone: basics.contact.phone,
        address: {
          "@type": "PostalAddress",
          addressLocality: basics.location.city,
          addressCountry: basics.location.country,
        },
        url: CV_SITE.url,
        sameAs: basics.profiles.map((profile) => profile.url),
        nationality: basics.citizenship,
        worksFor,
        alumniOf,
        knowsAbout,
        hasOccupation,
      },
    ],
  };
}
