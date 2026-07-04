import type { MetadataRoute } from "next";
import { headers } from "next/headers";
import { CV_SITE, isCvHost } from "@/lib/cv/site";
import { SITE } from "@/lib/site";

/** Host-aware: cv.allseen.com vs allseen.com. */
export const dynamic = "force-dynamic";

export default async function robots(): Promise<MetadataRoute.Robots> {
  const host = (await headers()).get("host");

  if (isCvHost(host)) {
    return {
      rules: [
        {
          userAgent: "*",
          allow: "/",
        },
      ],
      sitemap: `${CV_SITE.url}/sitemap.xml`,
      host: CV_SITE.url,
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
