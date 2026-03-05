import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Terms of Service | LightPathAI",
  description: "Terms and conditions for using LightPathAI.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden hero-gradient min-h-[90vh]">
        <div className="section relative z-10 pt-36 sm:pt-48 pb-24 sm:pb-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="heading-xl">Terms of Service</h1>
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
    title: "1. Acceptance of Terms",
    content:
      "By accessing or using LightPathAI (\u201CService\u201D), you agree to be bound by these Terms of Service. If you do not agree to these terms, you may not use the Service.",
  },
  {
    title: "2. Description of Service",
    content:
      "LightPathAI provides a personalized Care Plan, document management, emotional wellness tools, and peer companionship to help individuals navigate life after a loss. The Service is provided \u201Cas is\u201D and may be updated or modified at any time.",
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
