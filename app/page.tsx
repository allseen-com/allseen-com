import { Hero } from "@/components/Hero";
import { ShowcaseGrid } from "@/components/ShowcaseGrid";
import { VideoFeature } from "@/components/VideoFeature";
import { SHOWCASE_ITEMS } from "@/lib/showcase";
import { SITE } from "@/lib/site";
import { TESTIMONIALS } from "@/lib/testimonials";

const FEATURED_VIDEO = {
  title: "Cosmic Consciousness",
  description:
    "The psychedelic brain feels the cosmic consciousness and its connection to our neural pathways. This experience traces cosmic connections that shape how we understand existence — mind, consciousness, and the universe within.",
  src: "https://allseen.com/wp-content/uploads/2024/08/Psychedelic%20Brain%20-%20Cosmic%20Consciousness%20Trippy%20Video.mp4",
};

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="border-y border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            AI solutions to improve performance, in many aspects.
          </p>
          <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Powered by creativity.
          </p>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/65">
            {SITE.name} builds cutting-edge platforms designed to help individuals
            and businesses improve performance through advanced automation and
            AI-driven solutions.
          </p>
        </div>
      </section>

      <VideoFeature
        title={FEATURED_VIDEO.title}
        description={FEATURED_VIDEO.description}
        src={FEATURED_VIDEO.src}
      />

      <section
        id="work"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 max-w-2xl">
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Work in every medium
            </h2>
            <p className="mt-3 text-base leading-relaxed text-ink/60">
              Video, stills, product, and code — one grid to present what you ship.
              Add rows as you migrate assets from WordPress or elsewhere.
            </p>
          </div>
          <ShowcaseGrid items={SHOWCASE_ITEMS} />
        </div>
      </section>

      <section className="border-t border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Seen by audiences worldwide
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-center text-sm text-ink/55">
            Brands and teams use these systems every day — here is what they
            report back.
          </p>
          <ul className="mt-12 grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <li
                key={t.name}
                className="flex flex-col rounded-2xl border border-black/[0.06] bg-surface p-6 shadow-sm"
              >
                <p className="text-sm leading-relaxed text-ink/75">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-4 border-t border-black/5 pt-4">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink/50">{t.role}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
