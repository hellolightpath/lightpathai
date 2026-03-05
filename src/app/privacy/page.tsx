import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy | LightPathAI",
  description: "How LightPathAI collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden hero-gradient min-h-[90vh]">
        <div className="section relative z-10 pt-36 sm:pt-48 pb-24 sm:pb-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="heading-xl">Privacy Policy</h1>
              <p className="mt-3 text-sm" style={{ color: "#94A3B8" }}>
                Last updated: February 2026
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="mx-auto max-w-3xl space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div>
                  <h2 className="heading-sm">{s.title}</h2>
                  <p className="mt-3 text-[17px] leading-relaxed" style={{ color: "#475569" }}>
                    {s.content}
                  </p>
                </div>
              </Reveal>
            ))}
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
      "Your data is encrypted in transit and at rest. We use industry-standard security practices including regular security audits and role-based access controls to protect your information.",
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
