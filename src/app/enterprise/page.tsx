import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "For Employers & Insurers | LightPathAI",
  description:
    "Real bereavement support for your people. Not just time off.",
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
            <h1 className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4rem] font-serif font-normal leading-[1.04] max-w-3xl mx-auto text-white" style={{ letterSpacing: "-0.04em" }}>
              Your people deserve more than{" "}<br className="hidden sm:block" />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>&ldquo;take a few days off.&rdquo;</span>
            </h1>
            <p className="mt-8 max-w-md mx-auto text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Bereavement leave ends. Grief doesn&rsquo;t.
            </p>
            <div className="mt-12">
              <Link href="/demo" className="btn-white">
                Request a demo
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Three numbers ── */}
      <section className="relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2E3658 0%, #262F4C 50%, #2E3658 100%)" }} />
        <div className="impact-blob impact-blob-1" />

        <div className="px-6 sm:px-8 mx-auto max-w-5xl py-28 sm:py-36 relative z-10">
          <div className="grid gap-16 sm:gap-8 sm:grid-cols-3 text-center">
            {[
              { stat: "1 in 4", unit: "", label: "employees navigating grief right now", color: "var(--color-primary)" },
              { stat: "85", unit: "%", label: "received no meaningful support", color: "#E59524" },
              { stat: "79", unit: "%", label: "considered leaving their job", color: "#D4A0C0" },
            ].map((d, i) => (
              <Reveal key={d.stat} delay={i * 120}>
                <div>
                  <span className="font-serif block leading-none" style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", color: d.color, letterSpacing: "-0.05em" }}>
                    {d.stat}<span className="font-serif" style={{ fontSize: "0.45em", opacity: 0.5 }}>{d.unit}</span>
                  </span>
                  <p className="mt-5 text-[13px] tracking-wide uppercase" style={{ color: "var(--white-20)" }}>{d.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── The difference ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-40 relative z-10">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center max-w-xl mx-auto mb-20" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              More than a benefit checkbox.
            </h2>
          </Reveal>

          <div className="max-w-2xl mx-auto">
            {[
              { before: "3 days of bereavement leave", after: "Structured support from day one" },
              { before: "A pamphlet and an EAP number", after: "A care plan built around their loss" },
              { before: "Employee Googles what to do", after: "Every task and deadline, organized" },
              { before: "No follow-up after week one", after: "Care that adapts over months" },
              { before: "HR scrambles when someone asks", after: "A benefit that runs itself" },
            ].map((row, i) => (
              <Reveal key={i} delay={i * 50}>
                <div className="grid grid-cols-2 gap-8 py-6" style={{ borderTop: i === 0 ? "none" : "1px solid var(--color-border-light)" }}>
                  <p className="text-[14px] leading-relaxed line-through" style={{ color: "var(--color-muted)" }}>{row.before}</p>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>{row.after}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── For life insurance ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-surface-alt)" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-40">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: "#E59524" }}>
              For life insurance
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] max-w-xl mb-20" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              A claim is a family&rsquo;s worst day.{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>Don&rsquo;t let it end with a check.</span>
            </h2>
          </Reveal>

          <div className="grid gap-px sm:grid-cols-3 rounded-2xl overflow-hidden" style={{ background: "var(--color-border-light)" }}>
            {[
              { title: "Activate at the claim", desc: "A personalized care plan, not just a payout." },
              { title: "Continue the care", desc: "Tasks, documents, support. For months, not minutes." },
              { title: "Be remembered", desc: "The only benefit that supports the living." },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 60}>
                <div className="p-8 sm:p-10 h-full" style={{ background: "var(--color-surface)" }}>
                  <h3 className="text-[15px] font-semibold mb-2" style={{ color: "var(--color-foreground)" }}>{item.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{item.desc}</p>
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
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-normal leading-[1.08] text-white max-w-xl mx-auto" style={{ letterSpacing: "-0.04em" }}>
              The kind of support that makes people say:{" "}<br className="hidden sm:block" />
              <span className="italic" style={{ color: "rgba(212,160,192,0.8)" }}>&ldquo;They actually cared.&rdquo;</span>
            </h2>
            <div className="mt-12">
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
