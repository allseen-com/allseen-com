import { getResume } from "@/lib/cv/resume";
import { CV_SITE } from "@/lib/cv/site";

export function GET() {
  const resume = getResume();

  return Response.json(resume, {
    headers: {
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
      "Access-Control-Allow-Origin": "*",
      Link: `<${CV_SITE.url}>; rel="alternate"; type="text/html"`,
    },
  });
}
