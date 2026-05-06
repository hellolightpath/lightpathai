import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | LightPathAI",
  description: "How LightPathAI collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative" style={{ background: "var(--color-surface)", marginTop: "-64px" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 pt-44 sm:pt-56 pb-16 sm:pb-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              Legal
            </p>
            <h1 className="text-[2.5rem] sm:text-[3.75rem] font-serif leading-[1.0]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.045em", fontWeight: 500 }}>
              Privacy policy.
            </h1>
            <p className="mt-7 text-[13px]" style={{ color: "var(--color-muted)" }}>
              Last updated May 2026
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 pb-32 sm:pb-44">
          <div>
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 40}>
                <div
                  className="grid grid-cols-12 gap-6 sm:gap-12 py-10 sm:py-12"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <h2
                    className="col-span-12 sm:col-span-4 text-[1.125rem] sm:text-[1.25rem] font-serif leading-[1.3]"
                    style={{ color: "var(--color-foreground)", letterSpacing: "-0.015em", fontWeight: 500 }}
                  >
                    {s.title}
                  </h2>
                  <p className="col-span-12 sm:col-span-8 text-[15px] sm:text-[16px] leading-[1.8]" style={{ color: "var(--color-body)" }}>
                    {s.content}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
        </div>
      </section>
    </>
  );
}

const sections = [
  {
    title: "1. Information We Collect",
    content:
      "We collect information you provide directly, such as your name, email address, and company name when you join our waitlist or create an account. We also collect usage data such as pages visited, features used, and performance metrics to improve our service.",
  },
  {
    title: "2. How We Use Your Information",
    content:
      "We use collected information to provide and improve LightPathAI, communicate with you about your account and product updates, and ensure the security and integrity of our platform. We do not sell your personal information to third parties.",
  },
  {
    title: "3. Data Storage & Security",
    content:
      "Your data is encrypted in transit. Data is stored on infrastructure that provides encryption at rest by default (Supabase / Postgres). We use role-based access controls and conduct internal security reviews. We are working toward a formal security certification ahead of public launch; current posture is described in plain language on our /trust page.",
  },
  {
    title: "4. Third-Party Services",
    content:
      "We may use third-party services for analytics, email communication, and infrastructure. These partners are contractually obligated to protect your data and only use it as directed by us.",
  },
  {
    title: "5. Your Rights",
    content:
      "You have the right to access, correct, or delete your personal data at any time. You may also opt out of marketing communications by clicking the unsubscribe link in any email. For data requests, contact us at privacy@getlightpath.ai.",
  },
  {
    title: "6. Changes to This Policy",
    content:
      "We may update this privacy policy from time to time. We will notify you of significant changes by email or through a notice on our website.",
  },
  {
    title: "7. Contact Us",
    content:
      "If you have any questions about this Privacy Policy, please contact us at privacy@getlightpath.ai.",
  },
];
