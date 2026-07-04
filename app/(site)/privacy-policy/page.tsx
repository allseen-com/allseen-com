import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { CTA, SITE } from "@/lib/site";

const LAST_UPDATED = "July 3, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${SITE.name} websites, products, and related services.`,
  openGraph: {
    title: `Privacy Policy · ${SITE.name}`,
    description: `Privacy Policy for ${SITE.name} websites, products, and related services.`,
    url: `${SITE.url}/privacy-policy`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument title="Privacy Policy" lastUpdated={LAST_UPDATED}>
      <LegalSection title="Overview">
        <p>
          This Privacy Policy explains how {SITE.name} (&ldquo;{SITE.name},&rdquo;
          &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
          uses, and shares information when you use the {SITE.name} website at{" "}
          {SITE.url} and related products, platforms, and services we make
          available (collectively, the &ldquo;Services&rdquo;).
        </p>
        <p>
          By using the Services, you acknowledge this Privacy Policy. If you do
          not agree, please do not use the Services.
        </p>
      </LegalSection>

      <LegalSection title="Information we collect">
        <ul>
          <li>
            <strong>Information you provide</strong>, such as when you contact
            us, request information, subscribe to updates, or create an account
            (if available). This may include your name, email address, phone
            number, and message content.
          </li>
          <li>
            <strong>Usage information</strong>, such as pages viewed, referring
            pages, timestamps, device and browser details, and approximate
            location derived from IP address.
          </li>
          <li>
            <strong>Cookies and similar technologies</strong> used to operate
            and improve the Services, remember preferences, and understand usage
            patterns.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="How we use information">
        <p>We use information to:</p>
        <ul>
          <li>provide, maintain, secure, and improve the Services;</li>
          <li>respond to inquiries and support requests;</li>
          <li>monitor and help prevent fraud, abuse, and security incidents;</li>
          <li>analyze usage to understand how the Services are used;</li>
          <li>comply with legal obligations and enforce our terms.</li>
        </ul>
      </LegalSection>

      <LegalSection title="How we share information">
        <p>We may share information:</p>
        <ul>
          <li>
            with service providers that help us operate the Services (for
            example, hosting, analytics, communications, or security), subject
            to appropriate confidentiality obligations;
          </li>
          <li>
            to comply with law or respond to lawful requests (for example, a
            subpoena or court order);
          </li>
          <li>
            to protect the rights, property, or safety of {SITE.name}, our
            users, or others;
          </li>
          <li>
            in connection with a merger, acquisition, financing, or sale of
            assets, where information may be transferred as part of the
            transaction.
          </li>
        </ul>
        <p>
          We do not sell your personal information for money. We may use
          standard advertising or analytics tools that process identifiers as
          described by those providers.
        </p>
      </LegalSection>

      <LegalSection title="Cookies">
        <p>
          You can control cookies through your browser settings. If you disable
          cookies, some features of the Services may not function properly.
        </p>
      </LegalSection>

      <LegalSection title="Data retention">
        <p>
          We retain information for as long as necessary to provide the Services
          and for legitimate business purposes, such as maintaining records,
          resolving disputes, enforcing agreements, and complying with legal
          obligations.
        </p>
      </LegalSection>

      <LegalSection title="Security">
        <p>
          We use reasonable administrative, technical, and organizational
          safeguards designed to protect information. No method of transmission
          or storage is completely secure, and we cannot guarantee absolute
          security.
        </p>
      </LegalSection>

      <LegalSection title="Your choices">
        <ul>
          <li>
            <strong>Access and updates</strong>: If you have an account, you may
            be able to access and update certain information through account
            settings. You may also contact us to request access or correction
            where applicable.
          </li>
          <li>
            <strong>Communications</strong>: If we send marketing emails, you
            can opt out by following the unsubscribe instructions in those
            messages.
          </li>
          <li>
            <strong>Cookies</strong>: You can manage cookies through your
            browser or device settings.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Children&apos;s privacy">
        <p>
          The Services are not directed to children under 13 (or the minimum age
          required by your jurisdiction). We do not knowingly collect personal
          information from children. If you believe a child has provided us
          information, please contact us so we can take appropriate action.
        </p>
      </LegalSection>

      <LegalSection title="International transfers">
        <p>
          Your information may be processed in countries other than where you
          live. Those countries may have different data protection laws. Where
          we transfer information, we take steps designed to protect it in
          accordance with this Privacy Policy.
        </p>
      </LegalSection>

      <LegalSection title="Changes to this policy">
        <p>
          We may update this Privacy Policy from time to time. We will update
          the &ldquo;Last updated&rdquo; date above when changes take effect.
          Continued use of the Services after an update means you acknowledge
          the revised policy.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about this Privacy Policy? Reach us through{" "}
          <a
            href={CTA.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink underline decoration-ink/20 underline-offset-2 transition-colors hover:decoration-ink"
          >
            WhatsApp
          </a>{" "}
          or the social channels listed in the site footer. You can also return
          to the{" "}
          <Link
            href="/"
            className="font-medium text-ink underline decoration-ink/20 underline-offset-2 transition-colors hover:decoration-ink"
          >
            home page
          </Link>
          .
        </p>
      </LegalSection>
    </LegalDocument>
  );
}
