import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms of Service | LightPathAI",
  description: "Terms and conditions for using LightPathAI.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative" style={{ background: "var(--color-surface)", marginTop: "-64px" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 pt-44 sm:pt-56 pb-16 sm:pb-20">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              Legal
            </p>
            <h1 className="text-[2.5rem] sm:text-[3.75rem] font-serif leading-[1.0]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.045em", fontWeight: 500 }}>
              Terms of service.
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
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using LightPathAI (\u201CService\u201D), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.",
  },
  {
    title: "2. Description of Service",
    content:
      "LightPathAI provides a personalized Care Plan, document management, emotional wellness tools, an AI companion, and access to a curated marketplace of grief-aware professionals to help individuals navigate life after a loss. The Service is provided \u201Cas is\u201D and may be updated or modified at any time.",
  },
  {
    title: "3. User Accounts",
    content:
      "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.",
  },
  {
    title: "4. Acceptable Use",
    content:
      "You agree not to use the Service for any unlawful purpose, to infringe on the rights of others, or to interfere with the operation of the Service. We reserve the right to suspend or terminate accounts that violate these terms.",
  },
  {
    title: "5. Intellectual Property",
    content:
      "All content, features, and functionality of the Service are owned by LightPathAI and are protected by copyright, trademark, and other intellectual property laws. Your data remains yours \u2014 we claim no ownership over content you create or upload.",
  },
  {
    title: "6. Limitation of Liability",
    content:
      "To the fullest extent permitted by law, LightPathAI shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Service.",
  },
  {
    title: "7. Changes to Terms",
    content:
      "We reserve the right to modify these terms at any time. We will provide reasonable notice of significant changes. Continued use of the Service after changes constitutes acceptance of the updated terms.",
  },
  {
    title: "8. Contact Us",
    content:
      "If you have any questions about these Terms, please contact us at legal@getlightpath.ai.",
  },
];
