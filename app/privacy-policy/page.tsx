import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-ink/55">
          Last updated: April 2, 2026
        </p>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink/70 prose-li:text-ink/70">
          <p>
            This Privacy Policy explains how Allseen LLC (&ldquo;Allseen,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects,
            uses, and shares information when you use the Allseen website and
            related products and services (collectively, the
            &ldquo;Services&rdquo;).
          </p>

          <h2>Information we collect</h2>
          <ul>
            <li>
              <strong>Information you provide</strong>, such as when you contact
              us, request information, or create an account (if available).
            </li>
            <li>
              <strong>Usage information</strong>, such as pages viewed, referring
              pages, device/browser details, and approximate location derived
              from IP address.
            </li>
            <li>
              <strong>Cookies and similar technologies</strong> used to operate
              and improve the Services, remember preferences, and understand
              usage patterns.
            </li>
          </ul>

          <h2>How we use information</h2>
          <p>We use information to:</p>
          <ul>
            <li>provide, maintain, and improve the Services;</li>
            <li>respond to inquiries and support requests;</li>
            <li>monitor and help prevent fraud, abuse, and security incidents;</li>
            <li>comply with legal obligations.</li>
          </ul>

          <h2>How we share information</h2>
          <p>We may share information:</p>
          <ul>
            <li>
              with service providers that help us operate the Services (for
              example, hosting, analytics, communications), subject to
              appropriate confidentiality obligations;
            </li>
            <li>
              to comply with law or respond to lawful requests (for example, a
              subpoena or court order);
            </li>
            <li>
              to protect the rights, property, or safety of Allseen, our users,
              or others;
            </li>
            <li>
              in connection with a merger, acquisition, financing, or sale of
              assets, where information may be transferred as part of the
              transaction.
            </li>
          </ul>

          <h2>Cookies</h2>
          <p>
            You can control cookies through your browser settings. If you choose
            to disable cookies, some features of the Services may not function
            properly.
          </p>

          <h2>Data retention</h2>
          <p>
            We retain information for as long as necessary to provide the
            Services and for legitimate business purposes, such as maintaining
            records, resolving disputes, enforcing agreements, and complying
            with legal obligations.
          </p>

          <h2>Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards
            designed to protect information. No method of transmission or
            storage is completely secure, and we cannot guarantee absolute
            security.
          </p>

          <h2>Your choices</h2>
          <ul>
            <li>
              <strong>Access and updates</strong>: If you have an account, you
              may be able to access and update certain information through the
              account settings.
            </li>
            <li>
              <strong>Communications</strong>: If we send marketing emails, you
              can opt out by following the unsubscribe instructions in those
              messages.
            </li>
          </ul>

          <h2>Children&apos;s privacy</h2>
          <p>
            The Services are not directed to children under 13 (or the minimum
            age required by your jurisdiction). We do not knowingly collect
            personal information from children.
          </p>

          <h2>International transfers</h2>
          <p>
            Your information may be processed in countries other than where you
            live. These countries may have different data protection laws.
          </p>

          <h2>Changes to this policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will update
            the &ldquo;Last updated&rdquo; date above when changes take effect.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about this Privacy Policy? Contact us via the channels
            listed on the Allseen website.
          </p>
        </div>
      </div>
    </section>
  );
}

