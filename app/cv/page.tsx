import { ResumeView } from "@/components/cv/ResumeView";
import { buildResumeJsonLd, getResume } from "@/lib/cv/resume";

/** Fully static HTML — resume body is in the first response, no client fetch. */
export const dynamic = "force-static";

export default function CvPage() {
  const resume = getResume();
  const jsonLd = buildResumeJsonLd(resume);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ResumeView resume={resume} />
    </>
  );
}
