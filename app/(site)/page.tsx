import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { Offers } from "@/components/Offers";
import { TripwaysCaseStudy } from "@/components/TripwaysCaseStudy";
import { SITE } from "@/lib/site";

/** Homepage: brand-led title, no layout `title.template` suffix. */
export const metadata: Metadata = {
  title: { absolute: SITE.title },
  description: SITE.description,
  openGraph: {
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TripwaysCaseStudy />
      <Offers />
    </>
  );
}
