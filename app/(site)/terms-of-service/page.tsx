import type { Metadata } from "next";
import Link from "next/link";
import { LegalDocument, LegalSection } from "@/components/LegalDocument";
import { CTA, SITE } from "@/lib/site";

const LAST_UPDATED = "July 3, 2026";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${SITE.name} websites, products, and related services.`,
  openGraph: {
    title: `Terms of Service · ${SITE.name}`,
    description: `Terms of Service for ${SITE.name} websites, products, and related services.`,
    url: `${SITE.url}/terms-of-service`,
    siteName: SITE.name,
    type: "website",
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalDocument title="Terms of Service" lastUpdated={LAST_UPDATED}>
      <LegalSection title="Overview">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
          use of the {SITE.name} website at {SITE.url} and related products,
          platforms, and services we make available (collectively, the
          &ldquo;Services&rdquo;). The Services are operated by {SITE.name}{" "}
          (&ldquo;{SITE.name},&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
          &ldquo;our&rdquo;).
        </p>
        <p>
          By accessing or using the Services, you agree to these Terms. If you
          do not agree, please do not use the Services.
        </p>
      </LegalSection>

      <LegalSection title="Who may use the Services">
        <p>
          You may use the Services only if you can form a binding contract with{" "}
          {SITE.name} and are not barred from using the Services under
          applicable law. If you use the Services on behalf of an organization,
          you represent that you have authority to bind that organization to
          these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Changes to the Services or Terms">
        <p>
          We may update the Services or these Terms from time to time. When we
          make material changes, we will update the &ldquo;Last updated&rdquo;
          date above. Your continued use of the Services after changes take
          effect means you accept the updated Terms.
        </p>
      </LegalSection>

      <LegalSection title="Accounts and security">
        <p>
          Some features may require an account or credentials. You are
          responsible for maintaining the confidentiality of your credentials
          and for activity that occurs under your account. Notify us promptly if
          you suspect unauthorized access.
        </p>
      </LegalSection>

      <LegalSection title="Acceptable use">
        <p>You agree not to:</p>
        <ul>
          <li>
            misuse the Services, interfere with their normal operation, or
            attempt to access them through means other than the interfaces and
            instructions we provide;
          </li>
          <li>
            reverse engineer, decompile, or attempt to discover source code or
            underlying components of the Services, except where applicable law
            prohibits this restriction;
          </li>
          <li>
            use the Services to violate any law, infringe the rights of others,
            or transmit harmful, deceptive, spam, or unlawful content;
          </li>
          <li>
            scrape, harvest, or collect information from the Services in a way
            that burdens our systems or violates these Terms.
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="Third-party services and links">
        <p>
          The Services may link to or integrate with third-party websites,
          products, or services (for example, social platforms, automation
          tools, or messaging apps). We do not control and are not responsible
          for third-party content, policies, or practices. Your use of
          third-party services is governed by their own terms and privacy
          policies.
        </p>
      </LegalSection>

      <LegalSection title="Intellectual property">
        <p>
          The Services and all associated content, branding, and materials
          (excluding content you provide) are owned by {SITE.name} or its
          licensors and are protected by intellectual property laws. Subject to
          these Terms, we grant you a limited, non-exclusive, non-transferable,
          revocable license to access and use the Services for your personal or
          internal business purposes.
        </p>
      </LegalSection>

      <LegalSection title="Your content">
        <p>
          If you submit, upload, or otherwise provide content to the Services,
          you retain your rights in that content. You grant {SITE.name} a
          worldwide, non-exclusive license to host, store, reproduce, modify
          (for formatting or technical purposes), and display that content solely
          as needed to operate, maintain, and improve the Services.
        </p>
      </LegalSection>

      <LegalSection title="Disclaimers">
        <p>
          The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; basis. To the fullest extent permitted by law,{" "}
          {SITE.name} disclaims all warranties, express or implied, including
          implied warranties of merchantability, fitness for a particular
          purpose, and non-infringement. We do not warrant that the Services
          will be uninterrupted, error-free, or free of harmful components.
        </p>
      </LegalSection>

      <LegalSection title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, {SITE.name} will not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits, revenues, data, or goodwill, arising
          out of or related to your use of the Services.
        </p>
      </LegalSection>

      <LegalSection title="Indemnification">
        <p>
          To the fullest extent permitted by law, you agree to indemnify and
          hold harmless {SITE.name} from and against claims, liabilities,
          damages, losses, and expenses (including reasonable attorneys&apos;
          fees) arising out of or related to your use of the Services or your
          violation of these Terms.
        </p>
      </LegalSection>

      <LegalSection title="Termination">
        <p>
          We may suspend or terminate your access to the Services at any time if
          we reasonably believe you have violated these Terms or if needed to
          protect the Services, other users, or {SITE.name}. You may stop using
          the Services at any time.
        </p>
      </LegalSection>

      <LegalSection title="Governing law">
        <p>
          These Terms are governed by the laws applicable in the jurisdiction
          where {SITE.name} operates, without regard to conflict-of-laws
          principles. Courts in that jurisdiction will have exclusive venue for
          disputes arising from these Terms, except where applicable law
          requires otherwise.
        </p>
      </LegalSection>

      <LegalSection title="Contact">
        <p>
          Questions about these Terms? Reach us through{" "}
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
