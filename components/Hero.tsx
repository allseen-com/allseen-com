import Image from "next/image";

const HERO_IMAGE = "/images/hero-many-lenses.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
      <div className="mx-auto grid max-w-6xl gap-10 sm:gap-12 lg:grid-cols-2 lg:items-center lg:gap-8">
        <div className="min-w-0">
          <p className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
            <span className="block text-balance">World,</span>
            <span className="block text-balance">through many</span>
            <span className="block text-balance">lenses</span>
          </p>
          <h1 className="font-display mt-6 text-4xl font-bold leading-tight tracking-tight text-ink sm:mt-8 sm:text-5xl lg:mt-6 lg:text-[3.25rem] xl:text-6xl">
            <span className="relative inline-block">
              <span className="relative z-10">All seen</span>
              <svg
                className="absolute -bottom-1 left-0 w-full text-highlight sm:-bottom-2"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden
                preserveAspectRatio="none"
              >
                <path
                  d="M2 8c28-6 72-6 98-2s72 4 98-2"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            by us.
          </h1>
        </div>

        <div className="relative mx-auto w-full min-w-0 max-w-lg lg:mx-0 lg:max-w-none">
          <div className="relative aspect-square w-full overflow-hidden rounded-3xl bg-slate-100 shadow-xl shadow-black/10 ring-1 ring-black/5">
            <Image
              src={HERO_IMAGE}
              alt="Nine perspectives on seeing: people with lenses, optics, and creative tools — many lenses, one studio."
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
