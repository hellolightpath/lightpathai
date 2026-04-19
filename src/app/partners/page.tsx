import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "For Hospice & Funeral Partners | LightPathAI",
  description:
    "Extend your care beyond the service. Give every family a clear path forward.",
};

export default function PartnersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section data-hero-dark className="relative overflow-hidden min-h-[92vh]" style={{ marginTop: "-64px" }}>
        <NightSky />
        <StarField />
        <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 70%, rgba(212,160,192,0.06), transparent)" }} />
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 mx-auto max-w-[72rem] pt-56 sm:pt-68 pb-32 sm:pb-40">
          <Reveal>
            <h1 className="text-[2.25rem] sm:text-[3.25rem] lg:text-[4rem] font-serif font-normal leading-[1.04] max-w-3xl mx-auto text-white" style={{ letterSpacing: "-0.04em" }}>
              The service ends.{" "}<br className="hidden sm:block" />
              <span style={{ color: "rgba(255,255,255,0.4)" }}>Support doesn&rsquo;t have to.</span>
            </h1>
            <p className="mt-8 max-w-md mx-auto text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Extend your care into the months that follow.
            </p>
            <div className="mt-12">
              <Link href="/demo" className="btn-white">
                Partner with us
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
              { stat: "570", unit: "hrs", label: "of tasks per loss", color: "#E59524" },
              { stat: "$15.5B", unit: "", label: "in benefits unclaimed yearly", color: "#D4A0C0" },
              { stat: "89", unit: "%", label: "get no follow-up support", color: "var(--color-primary)" },
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

      {/* ── For hospice ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-40 relative z-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: "#D4A0C0" }}>
              For hospice
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] max-w-xl" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              End-of-life care becomes whole-family care.
            </h2>
          </Reveal>

          <div className="mt-16 sm:mt-20 grid gap-px sm:grid-cols-2 rounded-2xl overflow-hidden" style={{ background: "var(--color-border-light)" }}>
            {[
              { title: "Activate before discharge", desc: "Support begins while your team is still alongside the family." },
              { title: "570 hours, organized", desc: "Estate, insurance, benefits, documents. Step by step." },
              { title: "13 months, extended", desc: "Bereavement becomes a foundation, not a cutoff." },
              { title: "Outcomes, measured", desc: "Engagement, task completion, benefit recovery. Real data." },
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

      {/* ── For funeral homes ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-surface-alt)" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-40">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-5" style={{ color: "#E59524" }}>
              For funeral homes
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] max-w-xl" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              The arrangement is one moment. The relationship is forever.
            </h2>
          </Reveal>

          <div className="mt-16 sm:mt-20 grid gap-px sm:grid-cols-2 rounded-2xl overflow-hidden" style={{ background: "var(--color-border-light)" }}>
            {[
              { title: "A gift, not a pamphlet", desc: "A personalized care plan at the moment they need it most." },
              { title: "Benefits no one mentions", desc: "Survivor benefits, unclaimed insurance, tax credits. Found." },
              { title: "Professionals, matched", desc: "Attorneys, counselors, advisors. Right fit, right location." },
              { title: "Aftercare that differentiates", desc: "Ongoing support becomes your signature. Referrals follow." },
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

      {/* ── How it works — large numbers ── */}
      <section className="relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2E3658 0%, #262F4C 50%, #2E3658 100%)" }} />

        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-40 relative z-10">
          <div className="max-w-4xl mx-auto grid gap-20 sm:grid-cols-3 text-center">
            {[
              { n: "1", title: "You introduce", desc: "A link, a QR, or a card. Two minutes.", color: "#D4A0C0" },
              { n: "2", title: "LightPath guides", desc: "Personalized care plan. Adapts over months.", color: "var(--color-primary)" },
              { n: "3", title: "Care continues", desc: "Your name stays. Your legacy grows.", color: "#E59524" },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i * 120}>
                <div>
                  <span className="font-serif block leading-none mb-6" style={{ fontSize: "5rem", color: s.color, opacity: 0.08, letterSpacing: "-0.06em" }}>
                    {s.n}
                  </span>
                  <h3 className="text-[15px] font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--white-40)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Free ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32 relative z-10 text-center">
          <Reveal>
            <p className="text-[13px] font-serif italic mb-2" style={{ color: "var(--color-body)" }}>
              During our founding partner period
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Free for families. Free to integrate.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden">
        <NightSky />
        <StarField />
        <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,160,192,0.06), transparent)" }} />
        <div className="relative z-10 px-6 sm:px-8 mx-auto max-w-[72rem] py-32 sm:py-44 text-center">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-normal leading-[1.08] text-white max-w-xl mx-auto" style={{ letterSpacing: "-0.04em" }}>
              Families remember how you made them feel.
            </h2>
            <div className="mt-12">
              <Link href="/demo" className="btn-white">
                Become a partner
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
