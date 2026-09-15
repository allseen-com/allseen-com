import type { Metadata } from "next";
import { CTA, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "AI automation systems for local service businesses and marketplace operators — built and operated by All Seen.",
  openGraph: {
    title: `Services · ${SITE.name}`,
    description:
      "AI automation systems for local service businesses and marketplace operators — built and operated by All Seen.",
    url: `${SITE.url}/services`,
    siteName: SITE.name,
    type: "website",
  },
};

const TRUST_STATS = [
  "Vendor onboarding: days → under 30 minutes",
  "Support workload cut by up to 65% with a well-built intake agent",
  "Built and operated end-to-end by operators, not a reseller of templates",
];

const LOCAL_SERVICE_PAINS = [
  "Calls go to voicemail after hours — and most callers just call the next place",
  "Leads go cold because follow-up happens hours (or days) later",
  "Your team re-types the same booking info into three different tools",
  "Reviews pile up unanswered, and the bad ones get seen first",
];

const LOCAL_SERVICE_OFFERS = [
  {
    name: "AI Intake & Booking Agent",
    description:
      "Answers calls and chats, qualifies the caller, books it straight into your calendar — day or night.",
  },
  {
    name: "Missed-Call Text-Back",
    description:
      "The instant a call is missed, we text the caller back and keep nudging until they book.",
  },
  {
    name: "Review & Reputation Automation",
    description:
      "Requests reviews automatically after every job, drafts your responses, flags anything negative before it goes public.",
  },
  {
    name: "Ops Workflow Automation",
    description:
      "Connects your booking form, CRM, and payments so nothing gets typed twice and no-shows drop.",
  },
  {
    name: "Website FAQ Agent",
    description:
      "A trained widget on your site that answers pricing and availability questions before the phone even rings.",
  },
];

const MARKETPLACE_PAINS = [
  "Vendor/partner onboarding eats days of manual review per applicant",
  "Catalog and listing data is inconsistent, undercutting search and conversion",
  "Support tickets pile up on repetitive order and return questions",
  "Traffic, conversion, and vendor performance data live in three disconnected tools",
];

const MARKETPLACE_OFFERS = [
  {
    name: "Vendor/Partner Onboarding Automation",
    description:
      "Automates application review, content standardization, tagging, and compliance checks.",
  },
  {
    name: "Catalog & Listing Data Enrichment",
    description:
      "AI classifies and normalizes your product/listing data for better search, filtering, and feed compliance.",
  },
  {
    name: "AI Customer Support Agent",
    description:
      "Handles order status, returns, and FAQs, with clean escalation to a human when it matters.",
  },
  {
    name: "Semantic Search & Recommendations",
    description:
      "AI-powered search and recommendations over your own inventory — built to improve discovery and conversion.",
  },
  {
    name: "Full-Funnel Analytics Pipeline",
    description:
      "Unifies traffic, conversion, and vendor performance into one dashboard, so you know where the drop-offs actually are.",
  },
];

const PROCESS_STEPS = [
  {
    step: "1",
    title: "Audit",
    description:
      "We map your current manual hours and missed opportunities, and hand you a report with real dollar estimates — free, no obligation.",
  },
  {
    step: "2",
    title: "Build",
    description:
      "We design and ship the specific automation(s) that pay off fastest, scoped and priced up front.",
  },
  {
    step: "3",
    title: "Run",
    description:
      "We keep it running, tuned, and maintained — you focus on the business, not the tooling.",
  },
];

function PainList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/70">
          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function OfferGrid({
  offers,
}: {
  offers: { name: string; description: string }[];
}) {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2">
      {offers.map((offer) => (
        <div
          key={offer.name}
          className="rounded-2xl border border-black/[0.06] bg-surface p-6"
        >
          <h3 className="font-display text-lg font-bold text-ink">
            {offer.name}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-ink/65">
            {offer.description}
          </p>
        </div>
      ))}
    </div>
  );
}

function AuditCta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={CTA.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-10 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
    >
      {children}
    </a>
  );
}

export default function ServicesPage() {
  return (
    <>
      <section className="px-4 pb-16 pt-12 sm:px-6 sm:pb-20 sm:pt-16 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]">
            AI Automation That Actually Runs Your Business — Not Just Another
            Chatbot
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
            We build and operate AI systems that handle the calls, admin, and
            manual ops eating your week — the same solo-plus-AI model we use
            to run a 20,000-listing marketplace ourselves.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CTA.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
            >
              Get Your Free Automation Audit
            </a>
            <a
              href="#local-service"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-ink/70 transition-colors hover:text-ink"
            >
              See What We Build ↓
            </a>
          </div>
        </div>
      </section>

      <section className="border-y border-black/5 bg-surface px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-6 text-center sm:grid-cols-3">
          {TRUST_STATS.map((stat) => (
            <p key={stat} className="text-sm font-medium text-ink/75">
              {stat}
            </p>
          ))}
        </div>
      </section>

      <section
        id="local-service"
        className="scroll-mt-24 px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            For local service businesses
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Stop Losing Customers to a Missed Call
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65">
            Every unanswered call, unbooked slot, and unread review is revenue
            walking to your competitor. We build the systems that catch it —
            running quietly in the background, 24/7.
          </p>
          <PainList items={LOCAL_SERVICE_PAINS} />
          <OfferGrid offers={LOCAL_SERVICE_OFFERS} />
          <AuditCta>Get Your Free Automation Audit — See What&rsquo;s Costing You</AuditCta>
        </div>
      </section>

      <section
        id="marketplace"
        className="scroll-mt-24 border-t border-black/5 bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            For marketplace &amp; e-commerce operators
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            We&rsquo;ve Run the Marketplace. We Know Where the Time Goes.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink/65">
            Vendor onboarding, catalog upkeep, support tickets, fragmented
            analytics — this isn&rsquo;t theory for us. We built these systems
            to operate our own multi-vendor platform, then packaged them.
          </p>
          <blockquote className="mt-8 border-l-2 border-accent pl-5 text-base italic leading-relaxed text-ink/75">
            &ldquo;We took our own vendor onboarding process from multiple
            days to under 30 minutes using the exact automation stack we
            build for clients.&rdquo;
          </blockquote>
          <PainList items={MARKETPLACE_PAINS} />
          <OfferGrid offers={MARKETPLACE_OFFERS} />
          <AuditCta>Get Your Free Marketplace Ops Audit</AuditCta>
        </div>
      </section>

      <section className="border-t border-black/5 bg-surface px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Three Steps. No Long Sales Process.
          </h2>
          <div className="mt-10 grid gap-8 text-left sm:grid-cols-3">
            {PROCESS_STEPS.map((s) => (
              <div key={s.step}>
                <span className="font-display text-3xl font-bold text-accent">
                  {s.step}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-ink">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/65">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
          <AuditCta>Start With the Free Audit</AuditCta>
        </div>
      </section>

      <section className="border-t border-black/5 bg-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
            Built by Operators Who Use This Stack Daily
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-ink/65">
            {SITE.name} isn&rsquo;t a reseller of off-the-shelf automation
            templates. We operate our own AI-native business day to day —
            which means every system we build for you has already been
            stress-tested on something we depend on ourselves.
          </p>
        </div>
      </section>

      <section className="border-t border-black/5 bg-mist px-4 py-16 text-center text-white sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to See What&rsquo;s Costing You?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            The audit is free, takes about 20 minutes of your time, and comes
            with real numbers — not a sales pitch.
          </p>
          <a
            href={CTA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-accent-hover"
          >
            Get My Free Automation Audit
          </a>
        </div>
      </section>
    </>
  );
}
