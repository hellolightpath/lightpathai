import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { HorizonMark } from "@/components/horizon-mark";

export const metadata: Metadata = {
  title: "For Employers & Life Insurance | LightPathAI",
  description:
    "Bereavement leave ends. Grief doesn't. LightPath is the bereavement infrastructure your EAP doesn't ship. Built for employers and life insurance carriers.",
};

export default function EnterprisePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          HERO — warm canvas, sage-leaning. Distinct from /our-story.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[88vh]" style={{ marginTop: "-64px", background: "var(--color-surface)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 30%, rgba(122,158,122,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(149,152,232,0.07), transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[72rem] px-6 sm:px-10 pt-52 sm:pt-64 pb-24 sm:pb-32">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-sage)", letterSpacing: "0.22em" }}>
                For employers and life insurance carriers
              </p>
              <h1 className="text-[2.5rem] sm:text-[3.75rem] lg:text-[4.5rem] font-serif leading-[1.0]" style={{ letterSpacing: "-0.045em", color: "var(--color-foreground)", fontWeight: 500 }}>
                Bereavement leave ends.
                <br />
                <span style={{ color: "var(--color-body)" }}>Grief doesn&rsquo;t.</span>
              </h1>
              <p className="mt-9 max-w-xl text-[17px] sm:text-[18px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                LightPath is the bereavement infrastructure your EAP doesn&rsquo;t ship. Real support for the people, families, and policyholders you serve.
              </p>
              <div className="mt-11 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Link href="/demo" className="btn-primary">
                  Request a demo
                </Link>
                <span className="text-[14px]" style={{ color: "var(--color-muted)" }}>
                  Live in days. No IT integration required.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE REALITY — four stats on dark, no card chrome.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#1F1B26" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-10 sm:mb-14" style={{ color: "rgba(149,152,232,0.65)", letterSpacing: "0.22em" }}>
              The reality
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.75rem] font-serif leading-[1.05] max-w-3xl" style={{ letterSpacing: "-0.04em", color: "#FFFFFF", fontWeight: 500 }}>
              Grief doesn&rsquo;t stay at home.
              <br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>It walks into work, and into every claim.</span>
            </h2>
          </Reveal>

          <div className="mt-20 sm:mt-28 grid gap-14 sm:gap-16 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: "1 in 4", body: "employees are navigating grief at any given moment.", source: "Grief Recovery Institute" },
              { num: "79%", body: "of grieving employees considered leaving their job.", source: "SHRM" },
              { num: "<5%", body: "of employers offer dedicated grief support today.", source: "Internal benefits research" },
              { num: "$225.8B", body: "in U.S. annual productivity lost to grieving employees.", source: "CDC, 2023" },
            ].map((stat, i) => (
              <Reveal key={stat.num} delay={i * 70}>
                <div>
                  <p
                    className="font-serif leading-[0.95]"
                    style={{
                      fontSize: "clamp(2.75rem, 5.5vw, 3.75rem)",
                      letterSpacing: "-0.045em",
                      color: "#FFFFFF",
                      fontWeight: 500,
                    }}
                  >
                    {stat.num}
                  </p>
                  <p className="mt-5 text-[15px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.6)" }}>
                    {stat.body}
                  </p>
                  <p className="mt-4 text-[10px] uppercase" style={{ color: "rgba(255,255,255,0.30)", letterSpacing: "0.18em" }}>
                    {stat.source}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE DIFFERENCE — editorial before / after, no icon decoration.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                The difference
              </p>
              <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.04]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                What your people get,
                <br />
                <span style={{ color: "var(--color-body)" }}>that they don&rsquo;t get anywhere else.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-20 sm:mt-28 grid grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-12">
            <Reveal>
              <div>
                <p className="text-[11px] uppercase mb-6" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
                  Without LightPath
                </p>
                {[
                  "An employee Googles “what to do when someone dies.”",
                  "A policyholder waits weeks for a check that arrives without a single human contact.",
                  "Bereavement leave ends. The person returns to work in shock.",
                  "An EAP referral expires unused.",
                ].map((line) => (
                  <p
                    key={line}
                    className="text-[16px] leading-[1.7] py-4"
                    style={{ color: "var(--color-body)", borderTop: "1px solid var(--color-border-light)" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div>
                <p className="text-[11px] uppercase mb-6" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                  With LightPath
                </p>
                {[
                  "Every task, deadline, and document, organized for their state and their loss.",
                  "A claim becomes a care moment. The check still arrives. The support arrives with it.",
                  "Bereavement leave ends. The 13 months of guidance keep going.",
                  "A trained peer companion who has been through what they are facing.",
                ].map((line) => (
                  <p
                    key={line}
                    className="text-[16px] leading-[1.7] py-4"
                    style={{ color: "var(--color-foreground)", borderTop: "1px solid rgba(149,152,232,0.25)" }}
                  >
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          WHAT WE DELIVER — typographic rows, no icons or mockups.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                What we deliver
              </p>
              <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.04]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                Bereavement infrastructure,
                <br />
                <span style={{ color: "var(--color-body)" }}>not a benefit pamphlet.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-20 sm:mt-28">
            {[
              {
                num: "01",
                title: "Day-one activation.",
                body: "Your population sees LightPath the moment loss is reported. Through your benefits portal, your claims pipeline, or our white-label invitation. Live in days, not quarters.",
              },
              {
                num: "02",
                title: "A plan that follows the family.",
                body: "Personalized, jurisdiction-aware, with the deadlines that matter. 39 federal and state benefit programs surfaced and tracked. Letters drafted. Forms filled.",
              },
              {
                num: "03",
                title: "Clinical-grade emotional support.",
                body: "88 verified interventions across 17 grief frameworks. Built with researchers from Stanford, Columbia, and Yale. Peer companions matched by loss type and life stage.",
              },
              {
                num: "04",
                title: "Outcome data, not vanity metrics.",
                body: "Engagement, return-to-work, claims experience, NPS. Reported back to you with k-anonymous aggregates. We measure what your CFO and your CHRO need.",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 60}>
                <div
                  className="grid grid-cols-12 gap-6 sm:gap-10 items-baseline py-10 sm:py-14"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <p
                    className="col-span-2 sm:col-span-1 text-[12px] uppercase"
                    style={{ color: "var(--color-primary)", letterSpacing: "0.18em" }}
                  >
                    {item.num}
                  </p>
                  <h3
                    className="col-span-10 sm:col-span-6 text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] font-serif leading-[1.1]"
                    style={{ letterSpacing: "-0.025em", color: "var(--color-foreground)", fontWeight: 500 }}
                  >
                    {item.title}
                  </h3>
                  <p className="col-span-12 sm:col-span-5 text-[15px] sm:text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOR LIFE INSURERS — distinct editorial section.
          The deck names this 'The Scale' channel. PMPM model.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                  For life insurance carriers
                </p>
                <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3rem] font-serif leading-[1.05]" style={{ letterSpacing: "-0.035em", color: "var(--color-foreground)", fontWeight: 500 }}>
                  A claim becomes a care moment.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-3">
              <Reveal delay={120}>
                <p className="text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--color-body)" }}>
                  The check still arrives. We do not advise on the policy. We do not interfere with claim adjudication. We engage at first beneficiary contact and stay with the family through the months that follow.
                </p>
                <p className="mt-7 text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--color-body)" }}>
                  Outcome: lower complaint volume, lower NIGO claim friction, measurable improvement in claimant NPS.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 max-w-md">
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}>Pricing</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>$0.10 to $0.25 PMPM</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}>Trigger</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>Claim filed</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOR EMPLOYERS — distinct editorial section.
          The deck names this 'The Layer' channel. PEPM model.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-sage)", letterSpacing: "0.22em" }}>
                  For employers
                </p>
                <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3rem] font-serif leading-[1.05]" style={{ letterSpacing: "-0.035em", color: "var(--color-foreground)", fontWeight: 500 }}>
                  Bereavement leave becomes bereavement support.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-3">
              <Reveal delay={120}>
                <p className="text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--color-body)" }}>
                  Live alongside your existing EAP, not on top of it. Activated through your benefits portal. Used by the employee, by their family, by the people they support.
                </p>
                <p className="mt-7 text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--color-body)" }}>
                  Outcome: reduced absenteeism through the year following loss, measurable retention impact, improved benefits NPS.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-x-10 gap-y-6 max-w-md">
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}>Pricing</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>$1.50 to $2.50 PEPM</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}>Surface</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>Benefits portal</p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PARTNERSHIP — quiet editorial, deck-aligned founding partner program.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              Founding partnership
            </p>
            <h2 className="text-[2rem] sm:text-[3rem] font-serif leading-[1.05] max-w-2xl" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
              The first five carriers and employers we work with co-build this with us.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8 max-w-3xl">
              {[
                { label: "What we offer", body: "Three months free, full access. 50 percent off Year 1. A monthly co-design call with the founder. Priority on every feature request." },
                { label: "What we ask", body: "Real product feedback. A launch-day quote. The first testimonial. The first revenue in Year 2." },
              ].map((c) => (
                <div key={c.label}>
                  <p className="text-[11px] uppercase mb-3" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
                    {c.label}
                  </p>
                  <p className="text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FINAL CTA — Horizon mark + one line + one button.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[48rem] px-6 sm:px-10 py-32 sm:py-48 text-center">
          <Reveal>
            <div className="mb-12 flex justify-center">
              <HorizonMark size={48} theme="light" />
            </div>
            <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3rem] font-serif leading-[1.05]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              Let&rsquo;s build the standard of bereavement care together.
            </h2>
            <Link href="/demo" className="btn-primary mt-12">
              Request a demo
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
