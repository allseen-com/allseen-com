import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 text-sm text-ink/55">
          Last updated: April 2, 2026
        </p>

        <div className="prose prose-neutral mt-10 max-w-none prose-headings:font-display prose-headings:text-ink prose-p:text-ink/70 prose-li:text-ink/70">
          <p>
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to
            and use of the Allseen website and related products and services
            (collectively, the &ldquo;Services&rdquo;). The Services are
            provided by Allseen LLC (&ldquo;Allseen,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </p>

          <h2>Acceptance of these Terms</h2>
          <p>
            By accessing or using the Services, you agree to be bound by these
            Terms. If you do not agree, do not use the Services.
          </p>

          <h2>Who may use the Services</h2>
          <p>
            You may use the Services only if you can form a binding contract
            with Allseen and are not prohibited from using the Services under
            applicable laws.
          </p>

          <h2>Changes to the Services or Terms</h2>
          <p>
            We may modify the Services or these Terms from time to time. If we
            make material changes, we will update the &ldquo;Last updated&rdquo;
            date above. Your continued use of the Services after changes become
            effective means you accept the updated Terms.
          </p>

          <h2>Accounts and security</h2>
          <p>
            Some features may require an account. You are responsible for
            maintaining the confidentiality of your credentials and for all
            activity that occurs under your account.
          </p>

          <h2>Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              misuse the Services, interfere with their normal operation, or
              attempt to access them using a method other than the interface and
              instructions we provide;
            </li>
            <li>
              reverse engineer, decompile, or attempt to discover source code
              or underlying components of the Services, except to the extent
              prohibited by applicable law;
            </li>
            <li>
              use the Services to violate any law, infringe the rights of others,
              or transmit harmful, deceptive, or unlawful content.
            </li>
          </ul>

          <h2>Third-party services and links</h2>
          <p>
            The Services may link to or integrate with third-party services. We
            are not responsible for third-party content, policies, or practices.
            Your use of third-party services is governed by their terms.
          </p>

          <h2>Intellectual property</h2>
          <p>
            The Services and all associated content (excluding content you
            provide) are owned by Allseen or its licensors and are protected by
            applicable intellectual property laws. Subject to these Terms, we
            grant you a limited, non-exclusive, non-transferable license to use
            the Services for your personal or internal business purposes.
          </p>

          <h2>Your content</h2>
          <p>
            If you submit, upload, or otherwise provide content to the Services,
            you retain your rights in that content. You grant Allseen a license
            to host, store, reproduce, modify (for formatting), and display that
            content solely to operate and improve the Services.
          </p>

          <h2>Disclaimers</h2>
          <p>
            The Services are provided on an &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; basis. To the fullest extent permitted by law,
            Allseen disclaims all warranties, express or implied, including
            implied warranties of merchantability, fitness for a particular
            purpose, and non-infringement.
          </p>

          <h2>Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, Allseen will not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages, or any loss of profits, revenues, data, or goodwill, arising
            out of or related to your use of the Services.
          </p>

          <h2>Indemnification</h2>
          <p>
            To the fullest extent permitted by law, you agree to indemnify and
            hold harmless Allseen from and against any claims, liabilities,
            damages, losses, and expenses (including reasonable attorneys&apos;
            fees) arising out of or related to your use of the Services or your
            violation of these Terms.
          </p>

          <h2>Termination</h2>
          <p>
            We may suspend or terminate your access to the Services at any time
            if we reasonably believe you have violated these Terms or if needed
            to protect the Services, other users, or Allseen.
          </p>

          <h2>Governing law</h2>
          <p>
            These Terms are governed by the laws of the jurisdiction in which
            Allseen is organized, without regard to conflict of laws principles.
          </p>

          <h2>Contact</h2>
          <p>
            Questions about these Terms? Contact us via the channels listed on
            the Allseen website.
          </p>
        </div>
      </div>
    </section>
  );
}

