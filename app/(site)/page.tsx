import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { VideoFeature } from "@/components/VideoFeature";
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

const FEATURED_VIDEO = {
  title: "All Seen — The Collection",
  youtubeVideoId: "q-cOesuqo_w",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <VideoFeature
        title={FEATURED_VIDEO.title}
        youtubeVideoId={FEATURED_VIDEO.youtubeVideoId}
      />

      <section className="border-y border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-bold leading-[1.12] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] xl:text-5xl xl:leading-tight">
            AI solutions to improve performance, in many aspects.
          </h2>
          <p className="mt-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent sm:mt-4">
            Powered by creativity.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/65">
            {SITE.name} builds cutting-edge platforms designed to help individuals
            and businesses improve performance through advanced automation and
            AI-driven solutions.
          </p>
        </div>
      </section>
    </>
  );
}
