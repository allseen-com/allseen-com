type VideoFeatureProps = {
  title: string;
  youtubeVideoId: string;
};

export function VideoFeature({ title, youtubeVideoId }: VideoFeatureProps) {
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
    <section className="group relative bg-black">
      <iframe
        title={`${title} video`}
        src={embedUrl}
        className="aspect-video w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        aria-label={title}
      />
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-end justify-center pb-6 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100 sm:pb-8"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
          aria-hidden
        />
        <a
          href={`https://www.youtube.com/watch?v=${youtubeVideoId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="pointer-events-auto relative inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white/95 shadow-lg backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/12 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/70"
        >
          Watch on YouTube
          <span className="text-white/60" aria-hidden>
            ↗
          </span>
        </a>
      </div>
    </section>
  );
}
