import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import guides from "@/data/seo-guides.json";
import insuranceGuides from "@/data/insurance-claims-guides.json";

export const metadata: Metadata = {
  title: "Free Grief & Estate Guides | LightPathAI",
  description:
    "352 free guides for families navigating loss. Probate, insurance claims, benefits, tax, and more — step by step, state by state.",
};

const STAGE_LABELS: Record<string, string> = {
  immediate_arrangements: "First 48 Hours",
  funeral: "Funeral & Memorial",
  informing_others: "Notifying People",
  bills_debt: "Bills & Debt",
  benefits: "Benefits & Claims",
  house: "Home & Property",
  legal: "Legal & Estate",
  documents: "Documents",
  insurance: "Insurance",
  government: "Government",
  employer: "Employer & Work",
  digital: "Digital & Online",
  health_medical: "Health & Medical",
  retirement: "Retirement",
  vehicles: "Vehicles",
  self_care: "Self-Care & Healing",
  emotional: "Emotional Support",
  financial: "Financial",
};

export default function GuidesIndexPage() {
  // Group guides by stage
  const byStage: Record<string, typeof guides> = {};
  for (const guide of guides) {
    const stage = guide.id.split(".")[0];
    if (!byStage[stage]) byStage[stage] = [];
    byStage[stage].push(guide);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="section relative z-10 text-center pt-36 sm:pt-44 pb-12 sm:pb-16">
          <Reveal>
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5"
              style={{ color: "var(--color-primary)" }}
            >
              Free guides
            </p>
            <h1
              className="text-[2rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] max-w-2xl mx-auto"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}
            >
              Everything you need to know, step by step
            </h1>
            <p className="mt-4 text-base max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
              {guides.length} free guides covering every task families face after a loss.
              Written with care. No jargon. No judgment.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Insurance Claims Section */}
      <section className="section pb-16">
        <Reveal>
          <h2 className="text-xl font-serif mb-6" style={{ color: "var(--color-foreground)" }}>
            Life Insurance Claims
          </h2>
          <p className="text-sm mb-8" style={{ color: "var(--color-muted)" }}>
            Step-by-step guides for filing a claim with your insurance company.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {insuranceGuides.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/file-claim/${guide.slug}`}
                className="block p-4 rounded-xl border transition-all hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "rgba(138,142,229,0.12)",
                }}
              >
                <p className="text-sm font-medium" style={{ color: "var(--color-foreground)" }}>
                  {guide.company}
                </p>
                <p className="text-xs mt-1" style={{ color: "var(--color-muted)" }}>
                  {guide.claims_phone}
                </p>
              </Link>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Task Guides by Category */}
      {Object.entries(byStage).map(([stage, stageGuides]) => (
        <section key={stage} className="section pb-12">
          <Reveal>
            <h2 className="text-xl font-serif mb-6" style={{ color: "var(--color-foreground)" }}>
              {STAGE_LABELS[stage] || stage.replace(/_/g, " ")}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {stageGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/guides/${guide.slug}`}
                  className="block p-5 rounded-xl border transition-all hover:-translate-y-0.5"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    borderColor: "rgba(138,142,229,0.08)",
                  }}
                >
                  <h3 className="text-sm font-medium leading-snug" style={{ color: "var(--color-foreground)" }}>
                    {guide.title}
                  </h3>
                  {guide.description && (
                    <p className="text-xs mt-2 line-clamp-2" style={{ color: "var(--color-muted)" }}>
                      {guide.description}
                    </p>
                  )}
                  <p className="text-xs mt-3" style={{ color: "var(--color-primary)" }}>
                    {guide.steps?.length || 0} steps &rarr;
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>
        </section>
      ))}

      {/* CTA */}
      <section className="section py-20 text-center">
        <Reveal>
          <h2
            className="text-2xl sm:text-3xl font-serif font-normal mb-4"
            style={{ color: "var(--color-foreground)" }}
          >
            These guides are just the beginning
          </h2>
          <p className="text-base max-w-lg mx-auto mb-8" style={{ color: "var(--color-muted)" }}>
            LightPath creates a personalized care plan that tracks every task, deadline, and benefit
            for your specific situation. Free forever.
          </p>
          <Link
            href="https://dev-lightpath-app.pages.dev"
            className="inline-block px-8 py-3.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
            style={{ backgroundColor: "var(--color-primary)" }}
          >
            Start your care plan — free
          </Link>
        </Reveal>
      </section>
    </>
  );
}
