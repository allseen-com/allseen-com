import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { getResume } from "@/lib/cv/resume";
import { CV_SITE, isCvHost } from "@/lib/cv/site";
import { SITE } from "@/lib/site";

/** Host-aware: cv.allseen.com vs allseen.com. */
export const dynamic = "force-dynamic";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = (await headers()).get("host");
  const resume = getResume();
  const lastModified = new Date(resume.meta.lastUpdated);

  if (isCvHost(host)) {
    return [
      {
        url: CV_SITE.url,
        lastModified,
        changeFrequency: "monthly",
        priority: 1,
      },
      {
        url: `${CV_SITE.url}${CV_SITE.resumeJsonPath}`,
        lastModified,
        changeFrequency: "monthly",
        priority: 0.9,
      },
    ];
  }

  return [
    {
      url: SITE.url,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${SITE.url}/privacy-policy`,
      lastModified: new Date("2026-07-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${SITE.url}/terms-of-service`,
      lastModified: new Date("2026-07-03"),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: CV_SITE.url,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${CV_SITE.url}${CV_SITE.resumeJsonPath}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
