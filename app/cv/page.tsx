import { ResumeView } from "@/components/cv/ResumeView";
import {
  buildPersonJsonLd,
  getResume,
  getResumeJsonUrl,
} from "@/lib/cv/resume";

export default function CvPage() {
  const resume = getResume();
  const jsonLd = buildPersonJsonLd(resume);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ResumeView resume={resume} jsonUrl={getResumeJsonUrl()} />
    </>
  );
}
