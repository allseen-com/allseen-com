import type { Metadata } from "next";
import { CV_SITE } from "@/lib/cv/site";
import { getResume } from "@/lib/cv/resume";

const resume = getResume();

export const metadata: Metadata = {
  metadataBase: new URL(CV_SITE.url),
  title: {
    absolute: `${resume.basics.name} — Resume`,
  },
  description: resume.basics.summary,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: CV_SITE.url,
    types: {
      "application/json": `${CV_SITE.url}${CV_SITE.resumeJsonPath}`,
    },
  },
  openGraph: {
    title: `${resume.basics.name} — Resume`,
    description: resume.basics.label,
    url: CV_SITE.url,
    siteName: resume.basics.name,
    type: "profile",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: `${resume.basics.name} — Resume`,
    description: resume.basics.label,
  },
};

export default function CvLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-surface text-ink">
      <main>{children}</main>
    </div>
  );
}
