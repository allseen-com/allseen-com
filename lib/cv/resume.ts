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

export function buildPersonJsonLd(resume: Resume) {
  const { basics } = resume;
  const sameAs = basics.profiles.map((profile) => profile.url);

  return {
    "@context": "https://schema.org",
    "@type": "Person",
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
    sameAs,
    nationality: basics.citizenship,
  };
}
