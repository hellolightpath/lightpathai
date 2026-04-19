import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "For Employers & Insurers | LightPathAI",
  description:
    "Real bereavement support for your people. Not just time off. Not just a hotline number.",
};

export default function EnterprisePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section data-hero-dark className="relative overflow-hidden min-h-[92vh]" style={{ marginTop: "-64px" }}>
        <NightSky />
        <StarField />
        <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(138,142,229,0.08), transparent)" }} />
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 mx-auto max-w-[72rem] pt-52 sm:pt-64 pb-28 sm:pb-36">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-7" style={{ color: "rgba(229,149,36,0.65)" }}>
              For employers &amp; life insurance
            </p>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[3.75rem] font-serif font-normal leading-[1.04] max-w-3xl mx-auto text-white" style={{ letterSpacing: "-0.04em" }}>
              Your people deserve more than &ldquo;take a few days off.&rdquo;
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Bereavement leave ends. Grief doesn&rsquo;t. LightPath fills the gap between what EAPs offer and what people actually need.
            </p>
            <div className="mt-10">
              <Link href="/demo" className="btn-white">
                Request a demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The reality — immersive data ── */}
      <section className="relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }} />
        <div className="impact-blob impact-blob-1" />
        <div className="impact-blob impact-blob-2" />

        <div className="px-6 sm:px-8 mx-auto max-w-5xl py-24 sm:py-32 relative z-10">
          <Reveal>
            <h2 className="text-center text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto mb-16" style={{ letterSpacing: "-0.035em" }}>
              Grief doesn&rsquo;t stay at home.{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--white-40)" }}>It walks into work every day.</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
            <Reveal delay={50}>
              <div className="impact-card h-full">
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The human cost</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "var(--color-primary)", letterSpacing: "-0.04em" }}>1 in 4</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      employees are navigating grief at any given moment.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--white-8)", paddingTop: "1rem" }}>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "var(--color-primary)", letterSpacing: "-0.04em" }}>85%</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      say they received no meaningful support from their employer.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="impact-card h-full">
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The business impact</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#E59524", letterSpacing: "-0.04em" }}>79%</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      of grieving employees considered leaving their job.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--white-8)", paddingTop: "1rem" }}>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#E59524", letterSpacing: "-0.04em" }}>30 days</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      average recovery to baseline productivity. Most get 3 days of leave.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── The difference — editorial comparison ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36 relative z-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center mb-4" style={{ color: "var(--color-primary)" }}>
              The difference
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center max-w-2xl mx-auto" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              More than a benefit checkbox.
            </h2>
          </Reveal>

          <div className="mt-20 max-w-3xl mx-auto">
            <div className="hidden sm:grid grid-cols-2 gap-8 mb-2 px-2">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-muted)" }}>Today</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-primary)" }}>With LightPath</span>
            </div>
            {[
              { before: "3 days of bereavement leave", after: "Structured support from day one through every milestone" },
              { before: "A pamphlet and an EAP number", after: "A care plan built around their specific loss" },
              { before: "Employee Googles what to do next", after: "Every task, deadline, and benefit — organized" },
              { before: "No follow-up after the first week", after: "Adaptive care that evolves with them" },
              { before: "HR scrambles when someone asks", after: "A benefit that activates and runs itself" },
            ].map((row, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 py-6" style={{ borderTop: "1px solid var(--color-border-light)" }}>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-muted)", textDecoration: "line-through", textDecorationColor: "var(--color-border)" }}>{row.before}</p>
                  <p className="text-[14px] leading-relaxed font-medium" style={{ color: "var(--color-foreground)" }}>{row.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── For life insurance — elegant section ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-surface-alt)" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center mb-4" style={{ color: "#E59524" }}>
              For life insurance companies
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center max-w-2xl mx-auto" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              A claim is a family&rsquo;s worst day.{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>Don&rsquo;t let it end with a check.</span>
            </h2>
          </Reveal>

          <div className="mt-20 max-w-3xl mx-auto grid gap-16 sm:gap-20 sm:grid-cols-3">
            {[
              { title: "Activate at the claim", desc: "A personalized care plan — not just a payout and a goodbye.", color: "#E59524" },
              { title: "Continue the care", desc: "Tasks, documents, emotional support, and matched professionals. For months, not minutes.", color: "#8A8EE5" },
              { title: "Be remembered", desc: "The only life insurance benefit that supports the living. Families remember who showed up.", color: "#63D583" },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div>
                  <div className="w-8 h-[3px] rounded-full mb-6" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.color}40)` }} />
                  <h3 className="text-[1.125rem] font-serif font-normal mb-3" style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
                    {item.title}
                  </h3>
                  <p className="text-[14px] leading-[1.75]" style={{ color: "var(--color-body)" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <NightSky />
        <StarField />
        <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(138,142,229,0.06), transparent)" }} />
        <div className="relative z-10 px-6 sm:px-8 mx-auto max-w-[72rem] py-32 sm:py-44 text-center">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
              The kind of support that makes people say:{" "}<br className="hidden sm:block" />
              <span className="italic" style={{ color: "rgba(212,160,192,0.8)" }}>&ldquo;They actually cared.&rdquo;</span>
            </h2>
            <p className="mt-6 max-w-md mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              See how LightPath can transform your bereavement benefit in a 15-minute walkthrough.
            </p>
            <div className="mt-10">
              <Link href="/demo" className="btn-white">
                Request a demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
