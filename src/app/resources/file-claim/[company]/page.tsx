import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import insuranceGuides from "@/data/insurance-claims-guides.json";

type InsuranceGuide = (typeof insuranceGuides)[number];

export async function generateStaticParams() {
  return insuranceGuides.map((guide) => ({ company: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ company: string }>;
}): Promise<Metadata> {
  const { company } = await params;
  const guide = insuranceGuides.find((g) => g.slug === company);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: guide.seo_title,
    description: guide.seo_description,
  };
}

export default async function InsuranceClaimGuidePage({
  params,
}: {
  params: Promise<{ company: string }>;
}) {
  const { company } = await params;
  const guide = insuranceGuides.find((g) => g.slug === company) as InsuranceGuide | undefined;
  if (!guide) notFound();

  return (
    <>
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="section relative z-10 pt-36 sm:pt-44 pb-8 sm:pb-12 max-w-2xl mx-auto">
          <Reveal>
            <Link
              href="/resources"
              className="text-xs font-medium uppercase tracking-wider mb-6 inline-block"
              style={{ color: "var(--color-primary)" }}
            >
              &larr; All guides
            </Link>
            <h1
              className="text-[1.75rem] sm:text-[2.25rem] font-serif font-normal leading-[1.12]"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.03em" }}
            >
              How to File a {guide.company} Life Insurance Claim
            </h1>
            <p className="mt-4 text-base" style={{ color: "var(--color-muted)" }}>
              A step-by-step guide for beneficiaries filing a death claim.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pb-20 max-w-2xl mx-auto">
        {/* Quick info card */}
        <Reveal>
          <div
            className="p-6 rounded-xl mb-10 border"
            style={{
              backgroundColor: "rgba(138,142,229,0.04)",
              borderColor: "rgba(138,142,229,0.12)",
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-primary)" }}>
                  Claims phone
                </p>
                <a
                  href={`tel:${guide.claims_phone.replace(/[^0-9+]/g, "")}`}
                  className="text-lg font-medium"
                  style={{ color: "var(--color-foreground)" }}
                >
                  {guide.claims_phone}
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--color-primary)" }}>
                  Typical timeline
                </p>
                <p className="text-lg font-medium" style={{ color: "var(--color-foreground)" }}>
                  {guide.typical_timeline}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Steps */}
        <Reveal>
          <h2 className="text-lg font-serif mb-6" style={{ color: "var(--color-foreground)" }}>
            Steps to file your claim
          </h2>
          <ol className="space-y-4 mb-10">
            {guide.steps.map((step, i) => (
              <li key={i} className="flex gap-4">
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {i + 1}
                </span>
                <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--color-foreground)" }}>
                  {step}
                </p>
              </li>
            ))}
          </ol>
        </Reveal>

        {/* Documents needed */}
        <Reveal>
          <h2 className="text-lg font-serif mb-4" style={{ color: "var(--color-foreground)" }}>
            Documents you will need
          </h2>
          <ul className="space-y-2 mb-10">
            {guide.documents_needed.map((doc, i) => (
              <li key={i} className="flex items-center gap-3">
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: "var(--color-primary)" }} />
                <p className="text-sm" style={{ color: "var(--color-foreground)" }}>{doc}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* What else section */}
        <Reveal>
          <div
            className="p-8 rounded-2xl"
            style={{ backgroundColor: "var(--color-surface-alt)" }}
          >
            <h2 className="font-serif text-lg mb-3" style={{ color: "var(--color-foreground)" }}>
              {guide.what_else?.intro || "This claim is just 1 of 30+ things you need to handle"}
            </h2>
            <ul className="space-y-2 mb-6">
              {(guide.what_else?.urgent_tasks || []).map((task, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: "var(--color-primary)" }} />
                  <p className="text-sm" style={{ color: "var(--color-foreground)" }}>{task}</p>
                </li>
              ))}
            </ul>
            <p className="text-sm mb-6" style={{ color: "var(--color-muted)" }}>
              {guide.what_else?.cta || "LightPath tracks all 30+ tasks for you. Free forever."}
            </p>
            <Link
              href={guide.what_else?.signup_url || "https://dev-lightpath-app.pages.dev"}
              className="inline-block px-8 py-3.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Start your care plan — free
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
