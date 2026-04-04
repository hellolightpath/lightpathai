import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";

export const metadata: Metadata = {
  title: "Press | LightPathAI",
  description:
    "Press resources, founder bio, and media assets for LightPathAI — redefining care for life's hardest transitions.",
};

export default function PressPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="section relative z-10 pt-40 sm:pt-48 pb-16 sm:pb-20">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <p
                className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5"
                style={{ color: "rgba(138,142,229,0.7)" }}
              >
                Press
              </p>
              <h1
                className="text-[2rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]"
                style={{ color: "#1C1C1E", letterSpacing: "-0.03em" }}
              >
                Media Resources
              </h1>
              <p className="mt-5 text-[1.0625rem] leading-[1.7]" style={{ color: "#5C6578" }}>
                Everything reporters need to cover LightPathAI. For press
                inquiries, contact{" "}
                <a
                  href="mailto:hello@getlightpath.ai"
                  style={{ color: "#9598E8" }}
                >
                  hello@getlightpath.ai
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Key Facts ── */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2
                className="text-[1.5rem] sm:text-[1.75rem] font-serif font-normal mb-8"
                style={{ color: "#1C1C1E", letterSpacing: "-0.02em" }}
              >
                Key Facts
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
              {[
                { value: "3M+", label: "Families face loss annually" },
                { value: "570", label: "Hours of paperwork per loss" },
                { value: "$15.5B", label: "Unclaimed benefits yearly" },
                { value: "57%", label: "Feel completely unprepared" },
              ].map((stat) => (
                <Reveal key={stat.label}>
                  <div
                    className="rounded-2xl p-5 text-center"
                    style={{
                      background: "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.7)",
                    }}
                  >
                    <div
                      className="text-[1.75rem] font-serif font-normal mb-1"
                      style={{ color: "#9598E8" }}
                    >
                      {stat.value}
                    </div>
                    <div
                      className="text-[0.8125rem] leading-[1.4]"
                      style={{ color: "#5C6578" }}
                    >
                      {stat.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Company Overview ── */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)",
        }}
      >
        <div className="section">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2
                className="text-[1.5rem] sm:text-[1.75rem] font-serif font-normal mb-6"
                style={{ color: "#1C1C1E", letterSpacing: "-0.02em" }}
              >
                About LightPathAI
              </h2>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75] mb-5"
                style={{ color: "#5C6578" }}
              >
                LightPathAI is a grief support platform that helps families
                navigate both the emotional weight and the practical chaos that
                follows a loss. The platform adapts to each person's emotional
                state and provides jurisdiction-aware guidance for the 570 hours
                of paperwork, legal decisions, and benefits claims that follow a
                death.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75] mb-5"
                style={{ color: "#5C6578" }}
              >
                Unlike existing solutions that focus on either logistics or
                generic emotional content, LightPathAI addresses both sides
                simultaneously through 94 clinical interventions across 16
                therapeutic frameworks, 146 task templates with jurisdiction-aware
                guidance, validated screening instruments, AI companions matched
                to each person's story, and a managed marketplace connecting
                families with 11,000+ grief professionals.
              </p>
            </Reveal>

            <Reveal>
              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                {[
                  { label: "Founded", value: "2025" },
                  { label: "Headquarters", value: "San Francisco Bay Area, CA" },
                  { label: "Stage", value: "Launching May 19, 2026" },
                  { label: "Founder", value: "Sara Tashakorinia" },
                  { label: "Website", value: "getlightpath.ai" },
                  { label: "Contact", value: "hello@getlightpath.ai" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="flex gap-3 py-2"
                    style={{
                      borderBottom: "1px solid rgba(226,232,240,0.6)",
                    }}
                  >
                    <span
                      className="text-[0.875rem] font-medium min-w-[120px]"
                      style={{ color: "#1C1C1E" }}
                    >
                      {item.label}
                    </span>
                    <span
                      className="text-[0.875rem]"
                      style={{ color: "#5C6578" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Founder Bio ── */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2
                className="text-[1.5rem] sm:text-[1.75rem] font-serif font-normal mb-6"
                style={{ color: "#1C1C1E", letterSpacing: "-0.02em" }}
              >
                Founder
              </h2>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75] mb-5"
                style={{ color: "#5C6578" }}
              >
                <strong style={{ color: "#1C1C1E" }}>Sara Tashakorinia</strong>{" "}
                is the founder and CEO of LightPathAI. She has over a decade of
                experience building products in AI, design, and health tech, with
                roles at Lucid Motors, Lookout, and several startups. She holds a
                Master of Design from IIT Institute of Design and an MBA from IIT
                Stuart School of Business.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75] mb-5"
                style={{ color: "#5C6578" }}
              >
                On May 19, 2018, Sara's husband Jaryd Dock was killed in a
                head-on collision on Highway 29 in Napa Valley. They were
                celebrating their first wedding anniversary. Sara was in the car.
                She survived.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75] mb-5"
                style={{ color: "#5C6578" }}
              >
                In the aftermath, Sara faced 570 hours of paperwork, legal
                deadlines, and decisions while barely functioning. Nothing existed
                that helped with both the emotional weight and the practical
                chaos of loss. She spent the following years building expertise
                in AI and product strategy, then channeled everything into
                building LightPathAI.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75]"
                style={{ color: "#5C6578" }}
              >
                LightPathAI launches on May 19, 2026 — eight years to the day.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What Makes Us Different ── */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)",
        }}
      >
        <div className="section">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2
                className="text-[1.5rem] sm:text-[1.75rem] font-serif font-normal mb-8"
                style={{ color: "#1C1C1E", letterSpacing: "-0.02em" }}
              >
                What Makes LightPathAI Different
              </h2>
            </Reveal>
            <div className="flex flex-col gap-4">
              {[
                "Grief-specific, not generic wellness — built from the ground up for bereavement",
                "Both practical and emotional — helps with death certificates AND midnight anxiety",
                "94 clinical interventions across 16 therapeutic frameworks — not generic mindfulness",
                "146 deterministic task templates — jurisdiction-aware, authority-sensitive, deadline-tracking",
                "Managed provider marketplace — 11,000+ providers with intelligent 6-dimension matching",
                "5 adaptive support modes — the entire experience shifts based on emotional state",
                "Benefits discovery — AI scans for unclaimed survivor benefits, insurance claims, tax credits",
                "AI companions — 16 personas with relational memory and cross-feature awareness",
                "Dual-mode — serves both grieving individuals and the people supporting them",
                "The 2am test — every feature designed to feel safe at someone's lowest moment",
              ].map((item, i) => (
                <Reveal key={i}>
                  <div className="flex gap-3 items-start">
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-2.5 shrink-0"
                      style={{ background: "rgba(138,142,229,0.4)" }}
                    />
                    <p
                      className="text-[0.9375rem] leading-[1.6]"
                      style={{ color: "#5C6578" }}
                    >
                      {item}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Competitive Context ── */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className="section">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h2
                className="text-[1.5rem] sm:text-[1.75rem] font-serif font-normal mb-6"
                style={{ color: "#1C1C1E", letterSpacing: "-0.02em" }}
              >
                Competitive Context
              </h2>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75] mb-5"
                style={{ color: "#5C6578" }}
              >
                Empathy.com has raised $162M to address grief through estate
                logistics — probate, account closures, and claims management.
                They serve 9 of the top 10 US life insurance carriers.
              </p>
            </Reveal>
            <Reveal>
              <p
                className="text-[1.0625rem] leading-[1.75]"
                style={{ color: "#5C6578" }}
              >
                LightPathAI takes a fundamentally different approach: emotional
                support and practical support together. Where Empathy focuses on
                estate logistics, LightPathAI addresses the full experience of
                grief — clinical interventions, adaptive emotional support, and
                practical task management in one platform.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section
        className="relative overflow-hidden py-16 sm:py-20"
        style={{
          background:
            "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)",
        }}
      >
        <div className="section">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <h2
                className="text-[1.5rem] sm:text-[1.75rem] font-serif font-normal mb-5"
                style={{ color: "#1C1C1E", letterSpacing: "-0.02em" }}
              >
                Press Inquiries
              </h2>
              <p
                className="text-[1.0625rem] leading-[1.75] mb-8"
                style={{ color: "#5C6578" }}
              >
                For interviews, product demos, or additional materials, contact:
              </p>
              <a
                href="mailto:hello@getlightpath.ai"
                className="inline-flex items-center gap-2 rounded-full px-8 py-3.5 text-[0.9375rem] font-medium transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  background: "rgba(118,122,210,0.9)",
                  color: "white",
                }}
              >
                hello@getlightpath.ai
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Boilerplate ── */}
      <section className="relative overflow-hidden py-12 sm:py-16 border-t" style={{ borderColor: "rgba(226,232,240,0.5)" }}>
        <div className="section">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <p
                className="text-[0.8125rem] leading-[1.65] italic"
                style={{ color: "#8E96A6" }}
              >
                <strong style={{ color: "#5C6578", fontStyle: "normal" }}>
                  About LightPathAI:
                </strong>{" "}
                LightPathAI is the first grief support platform combining
                clinical-grade emotional interventions with practical task
                management. Founded in 2025 by Sara Tashakorinia and launching
                May 19, 2026, LightPathAI helps families navigate 570+ hours of
                paperwork, decisions, and emotional weight following loss.
                Learn more at{" "}
                <Link href="/" style={{ color: "#9598E8" }}>
                  getlightpath.ai
                </Link>
                .
              </p>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
