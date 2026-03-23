type VideoFeatureProps = {
  title: string;
  description: string;
  youtubeVideoId: string;
};

export function VideoFeature({
  title,
  description,
  youtubeVideoId,
}: VideoFeatureProps) {
  const embedParams = new URLSearchParams({
    autoplay: "1",
    mute: "1",
    controls: "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
    loop: "1",
    playlist: youtubeVideoId,
  });

  const embedUrl = `https://www.youtube-nocookie.com/embed/${youtubeVideoId}?${embedParams.toString()}`;

  return (
    <section className="relative bg-mist text-white">
      <div className="grain absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.16),transparent_45%),radial-gradient(circle_at_20%_90%,rgba(255,255,255,0.06),transparent_45%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mb-10 max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            {description}
          </p>
        </div>

        <div className="group relative overflow-hidden rounded-2xl bg-black shadow-2xl ring-1 ring-white/10">
          <div
            className="pointer-events-none absolute inset-0 z-10 bg-[linear-gradient(to_top,rgba(7,13,31,0.62),transparent_35%),radial-gradient(circle_at_center,transparent_60%,rgba(7,13,31,0.4)_100%)]"
            aria-hidden
          />
          <iframe
            title={`${title} video`}
            src={embedUrl}
            className="aspect-video w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            aria-label={title}
          />
        </div>
      </div>
    </section>
  );
}
