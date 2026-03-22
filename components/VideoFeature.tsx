type VideoFeatureProps = {
  title: string;
  description: string;
  src: string;
  poster?: string;
};

export function VideoFeature({
  title,
  description,
  src,
  poster,
}: VideoFeatureProps) {
  return (
    <section className="relative bg-mist text-white">
      <div className="grain absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {description}
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          <video
            className="aspect-video w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={poster}
            aria-label={title}
          >
            <source src={src} type="video/mp4" />
            Your browser does not support embedded video.
          </video>
        </div>
      </div>
    </section>
  );
}
