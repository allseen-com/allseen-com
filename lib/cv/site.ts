/** Public CV subdomain — human page and machine-readable JSON. */
export const CV_SITE = {
  url: "https://cv.allseen.com",
  /** Public path on the CV host (rewritten from /cv/resume.json). */
  resumeJsonPath: "/resume.json",
} as const;

export const CV_HOSTS = new Set(["cv.allseen.com", "cv.localhost"]);

export const MAIN_HOSTS = new Set([
  "allseen.com",
  "www.allseen.com",
]);

export function getHostname(hostHeader: string | null): string {
  return (hostHeader ?? "").split(":")[0]?.toLowerCase() ?? "";
}

export function isCvHost(hostHeader: string | null): boolean {
  return CV_HOSTS.has(getHostname(hostHeader));
}

export function isMainHost(hostHeader: string | null): boolean {
  return MAIN_HOSTS.has(getHostname(hostHeader));
}
