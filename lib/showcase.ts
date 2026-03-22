export type ShowcaseKind = "video" | "youtube" | "image" | "code";

export type ShowcaseItem =
  | {
      id: string;
      kind: "video";
      title: string;
      caption: string;
      src: string;
      poster?: string;
    }
  | {
      id: string;
      kind: "youtube";
      title: string;
      caption: string;
      videoId: string;
    }
  | {
      id: string;
      kind: "image";
      title: string;
      caption: string;
      src: string;
      alt: string;
    }
  | {
      id: string;
      kind: "code";
      title: string;
      caption: string;
      language: string;
      code: string;
    };

/** Featured work and experiments — extend as you migrate content off WordPress. */
export const SHOWCASE_ITEMS: ShowcaseItem[] = [
  {
    id: "brand-mark",
    kind: "image",
    title: "Identity in motion",
    caption:
      "Drop campaign stills, UI captures, or mood boards here — same grid as video and code.",
    src: "https://allseen.com/wp-content/uploads/2024/04/Menu-Logo-Black.png",
    alt: "All Seen logo mark",
  },
  {
    id: "automation-snippet",
    kind: "code",
    title: "Automation, expressed clearly",
    caption:
      "Room for snippets from n8n, APIs, or agents — swap this block for a real pipeline you ship.",
    language: "typescript",
    code: `// Example: trigger when form data lands, enrich, notify
export async function POST(req: Request) {
  const payload = await req.json();
  await enrichAndRoute(payload);
  return Response.json({ ok: true });
}`,
  },
];
