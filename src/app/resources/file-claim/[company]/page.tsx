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
    <section className="relative overflow-hidden" style={{ marginTop: "-64px" }}>
      <WarmGlow />

      <div className="relative z-10 px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Reveal>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium mb-10 transition-colors hover:opacity-70"
              style={{ color: "#8A8EE5" }}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All resources
            </Link>
          </Reveal>

          {/* Hero */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: "rgba(107,163,217,0.1)", color: "#6BA3D9" }}
                >
                  Insurance Claims
                </span>
                <span className="text-[12px]" style={{ color: "#94A3B8" }}>
                  3 min read
                </span>
              </div>
              <h1
                className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-normal leading-[1.1] mb-4"
                style={{ letterSpacing: "-0.03em", color: "#1C1C2E" }}
              >
                How to File a {guide.company} Life Insurance Claim
              </h1>
              <p className="text-[17px] leading-relaxed max-w-2xl" style={{ color: "#6B6E8D" }}>
                A step-by-step guide for beneficiaries filing a death claim with {guide.company}.
              </p>
            </div>
          </Reveal>

          {/* Quick info card */}
          <Reveal delay={50}>
            <div
              className="rounded-2xl p-6 sm:p-8 mb-10 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(24px) saturate(1.3)",
                WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                border: "1px solid rgba(138,142,229,0.15)",
                boxShadow: "0 4px 32px rgba(138,142,229,0.06), 0 1px 4px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #6BA3D9, #8A8EE5)" }} />
              <div className="grid grid-cols-2 gap-6 mt-2">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#8A8EE5" }}>
                    Claims phone
                  </p>
                  <a
                    href={`tel:${guide.claims_phone.replace(/[^0-9+]/g, "")}`}
                    className="text-[1.25rem] font-serif font-normal hover:opacity-70 transition-opacity"
                    style={{ color: "#1C1C2E" }}
                  >
                    {guide.claims_phone}
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-2" style={{ color: "#8A8EE5" }}>
                    Typical timeline
                  </p>
                  <p className="text-[1.25rem] font-serif font-normal" style={{ color: "#1C1C2E" }}>
                    {guide.typical_timeline}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Steps */}
          <Reveal delay={50}>
            <div className="mb-12">
              <h2
                className="text-[1.5rem] sm:text-[1.75rem] font-serif font-normal mb-8"
                style={{ color: "#1C1C2E", letterSpacing: "-0.02em" }}
              >
                Steps to file your claim
              </h2>
              <div className="space-y-4">
                {guide.steps.map((step, i) => (
                  <Reveal key={i} delay={50 + i * 30}>
                    <div
                      className="flex gap-5 p-5 sm:p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-0.5"
                      style={{
                        backgroundColor: "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(16px)",
                        WebkitBackdropFilter: "blur(16px)",
                        borderColor: "rgba(138,142,229,0.06)",
                      }}
                    >
                      <span
                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-[13px] font-semibold"
                        style={{ backgroundColor: "rgba(107,163,217,0.12)", color: "#6BA3D9" }}
                      >
                        {i + 1}
                      </span>
                      <p className="text-[15px] leading-relaxed pt-1" style={{ color: "#1C1C2E" }}>
                        {step}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Documents needed */}
          <Reveal delay={100}>
            <div
              className="p-6 sm:p-8 rounded-2xl mb-12 border"
              style={{
                backgroundColor: "rgba(255,255,255,0.4)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                borderColor: "rgba(138,142,229,0.08)",
              }}
            >
              <h3 className="text-[15px] font-semibold mb-4" style={{ color: "#1C1C2E" }}>
                Documents you will need
              </h3>
              <ul className="space-y-2.5">
                {guide.documents_needed.map((doc, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: "#6BA3D9" }} />
                    <p className="text-[14px] leading-relaxed" style={{ color: "#1C1C2E" }}>{doc}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* What else section */}
          <Reveal delay={100}>
            <div className="blog-prose mb-10">
              <h2>But the insurance claim is just the beginning</h2>
              <p>
                Filing your {guide.company} claim is one of 30+ tasks families typically need to handle
                after a loss. Here are some of the most urgent ones many people miss:
              </p>
            </div>
            <div className="space-y-3 mb-12">
              {(guide.what_else?.urgent_tasks || []).map((task, i) => (
                <Reveal key={i} delay={50 + i * 20}>
                  <div
                    className="flex gap-4 p-4 rounded-xl border"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.5)",
                      borderColor: "rgba(138,142,229,0.06)",
                    }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2" style={{ backgroundColor: "#E59524" }} />
                    <p className="text-[14px] leading-relaxed" style={{ color: "#1C1C2E" }}>{task}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>

          {/* CTA — matches blog article pattern exactly */}
          <Reveal delay={100}>
            <div
              className="rounded-2xl p-8 sm:p-10 text-center relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(24px) saturate(1.3)",
                WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                border: "1px solid rgba(138,142,229,0.15)",
                boxShadow: "0 4px 32px rgba(138,142,229,0.06), 0 1px 4px rgba(0,0,0,0.02)",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #6BA3D9, #8A8EE5)" }} />
              <p
                className="text-[1.375rem] sm:text-[1.625rem] font-serif font-normal leading-[1.2] mb-3"
                style={{ color: "#1C1C2E", letterSpacing: "-0.02em" }}
              >
                LightPath tracks all 30+ tasks for you
              </p>
              <p
                className="text-[15px] leading-relaxed mb-6 max-w-md mx-auto"
                style={{ color: "#6B6E8D" }}
              >
                A personalized care plan for your state, your relationship, and your situation. Free forever.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full font-sans font-medium text-[15px] transition-all duration-300 ease-out"
                style={{
                  padding: "0.875rem 2rem",
                  background: "rgba(90, 95, 180, 0.85)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 1px 3px rgba(90,95,180,0.2), 0 4px 16px rgba(90,95,180,0.12)",
                  letterSpacing: "0.015em",
                }}
              >
                Get early access
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
