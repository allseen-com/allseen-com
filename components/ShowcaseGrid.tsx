import Image from "next/image";
import type { ReactNode } from "react";
import type { ShowcaseItem } from "@/lib/showcase";

function YouTubeEmbed({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="aspect-video overflow-hidden rounded-xl bg-black shadow-inner ring-1 ring-black/10">
      <iframe
        title={title}
        src={`https://www.youtube-nocookie.com/embed/${videoId}`}
        className="h-full w-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
      />
    </div>
  );
}

function CodeBlock({
  code,
  language,
}: {
  code: string;
  language: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl bg-[#0d1117] shadow-inner ring-1 ring-white/10">
      <div className="border-b border-white/10 px-4 py-2 text-xs font-medium uppercase tracking-wider text-white/50">
        {language}
      </div>
      <pre className="overflow-x-auto p-4 text-left text-sm leading-relaxed text-[#e6edf3]">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ShowcaseCard({ children }: { children: ReactNode }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-black/[0.06]">
      {children}
    </article>
  );
}

export function ShowcaseGrid({ items }: { items: ShowcaseItem[] }) {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {items.map((item) => {
        if (item.kind === "video") {
          return (
            <ShowcaseCard key={item.id}>
              <div className="aspect-video bg-mist">
                <video
                  className="h-full w-full object-cover"
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={item.title}
                >
                  <source src={item.src} type="video/mp4" />
                </video>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {item.caption}
                </p>
              </div>
            </ShowcaseCard>
          );
        }

        if (item.kind === "youtube") {
          return (
            <ShowcaseCard key={item.id}>
              <YouTubeEmbed videoId={item.videoId} title={item.title} />
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {item.caption}
                </p>
              </div>
            </ShowcaseCard>
          );
        }

        if (item.kind === "image") {
          return (
            <ShowcaseCard key={item.id}>
              <div className="relative flex aspect-video items-center justify-center bg-surface">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={360}
                  className="max-h-full max-w-full object-contain p-8"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {item.caption}
                </p>
              </div>
            </ShowcaseCard>
          );
        }

        return (
          <ShowcaseCard key={item.id}>
            <CodeBlock code={item.code} language={item.language} />
            <div className="p-6">
              <h3 className="font-display text-xl font-bold text-ink">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/65">
                {item.caption}
              </p>
            </div>
          </ShowcaseCard>
        );
      })}
    </div>
  );
}
