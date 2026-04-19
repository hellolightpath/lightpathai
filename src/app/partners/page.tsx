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
        <div className="relative z-10 flex flex-col items-center text-center px-6 sm:px-8 mx-auto max-w-[72rem] pt-52 sm:pt-64 pb-28 sm:pb-36">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-7" style={{ color: "rgba(212,160,192,0.65)" }}>
              For hospice &amp; funeral home partners
            </p>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[3.75rem] font-serif font-normal leading-[1.04] max-w-3xl mx-auto text-white" style={{ letterSpacing: "-0.04em" }}>
              The service ends.{" "}<br className="hidden sm:block" />
              Support doesn&rsquo;t have to.
            </h1>
            <p className="mt-6 max-w-lg mx-auto text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              You&rsquo;re with families at the hardest moment. LightPath extends your care into the months that follow&nbsp;&mdash; when they need guidance most and have it least.
            </p>
            <div className="mt-10">
              <Link href="/demo" className="btn-white">
                Partner with us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The reality ── */}
      <section className="relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }} />
        <div className="impact-blob impact-blob-1" />
        <div className="impact-blob impact-blob-2" />

        <div className="px-6 sm:px-8 mx-auto max-w-5xl py-28 sm:py-36 relative z-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center mb-5" style={{ color: "rgba(212,160,192,0.5)" }}>
              After the service
            </p>
            <h2 className="text-center text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
              Families leave with a folder.{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--white-40)" }}>What they need is a guide.</span>
            </h2>
          </Reveal>

          <div className="mt-16 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
            <Reveal delay={50}>
              <div className="impact-card h-full">
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The practical burden</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#E59524", letterSpacing: "-0.04em" }}>570 hrs</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      of paperwork, calls, and decisions. Probate, insurance, benefits, accounts&nbsp;&mdash; all while grieving.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--white-8)", paddingTop: "1rem" }}>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#E59524", letterSpacing: "-0.04em" }}>$15.5B</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      in survivor benefits go unclaimed every year. No one told families they existed.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={150}>
              <div className="impact-card h-full">
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The support gap</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#D4A0C0", letterSpacing: "-0.04em" }}>89%</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      receive no follow-up support from any provider after the first week.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--white-8)", paddingTop: "1rem" }}>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#D4A0C0", letterSpacing: "-0.04em" }}>57%</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      of families feel completely unprepared for what comes after.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── For hospice ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36 relative z-10">
          <div className="max-w-4xl mx-auto grid gap-16 lg:grid-cols-[2fr_3fr] items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "#D4A0C0" }}>
                  For hospice organizations
                </p>
                <h2 className="text-[1.75rem] sm:text-[2.25rem] font-serif font-normal leading-[1.12]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                  End-of-life care becomes whole-family care.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                  Your bereavement counselors already do extraordinary work. LightPath extends that support with the practical guidance families need but counselors can&rsquo;t always provide.
                </p>
              </div>
            </Reveal>
            <div className="space-y-8">
              {[
                { title: "Activate before discharge", desc: "Begin the care plan while your team is still alongside the family. Support starts before grief hits its hardest.", color: "#D4A0C0" },
                { title: "570 hours of tasks, organized", desc: "Estate administration, insurance claims, benefit applications, document preparation. Everything families need to do, step by step, specific to their state.", color: "#8A8EE5" },
                { title: "13 months of bereavement, extended", desc: "Your mandated bereavement period becomes a foundation for ongoing support, not a cutoff.", color: "#E59524" },
                { title: "Measurable outcomes", desc: "Track family engagement, task completion, and benefit recovery. Show the real impact of your bereavement program.", color: "#8F82CD" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex gap-5">
                    <div className="w-[3px] rounded-full shrink-0 mt-1" style={{ background: `linear-gradient(180deg, ${item.color}, ${item.color}20)`, height: 48 }} />
                    <div>
                      <h3 className="text-[15px] font-semibold" style={{ color: "var(--color-foreground)" }}>{item.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-[1.75]" style={{ color: "var(--color-body)" }}>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── For funeral homes ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-surface-alt)" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36">
          <div className="max-w-4xl mx-auto grid gap-16 lg:grid-cols-[2fr_3fr] items-start">
            <Reveal>
              <div className="lg:sticky lg:top-32">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "#E59524" }}>
                  For funeral homes
                </p>
                <h2 className="text-[1.75rem] sm:text-[2.25rem] font-serif font-normal leading-[1.12]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                  The arrangement is one moment.{" "}<br className="hidden lg:block" />
                  The relationship is forever.
                </h2>
                <p className="mt-4 text-[15px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                  Families remember how you made them feel. Offering LightPath transforms a transaction into lasting care&nbsp;&mdash; and gives every family something they&rsquo;ll tell others about.
                </p>
              </div>
            </Reveal>
            <div className="space-y-8">
              {[
                { title: "A gift at the arrangement", desc: "Hand families a clear path forward at the moment they need it most. Not a pamphlet&nbsp;&mdash; a personalized care plan built around their loss.", color: "#E59524" },
                { title: "Benefits no one mentions", desc: "LightPath surfaces survivor benefits, unclaimed insurance, and tax credits families don\u2019t know about. $15.5B goes unclaimed every year.", color: "#D4A0C0" },
                { title: "Professionals, matched", desc: "Attorneys, counselors, financial advisors&nbsp;&mdash; matched to the family\u2019s loss type, location, and needs. Referrals that feel like care.", color: "#8A8EE5" },
                { title: "Aftercare that differentiates", desc: "In a competitive market, ongoing family support becomes your signature. The kind of care that generates referrals.", color: "#8F82CD" },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="flex gap-5">
                    <div className="w-[3px] rounded-full shrink-0 mt-1" style={{ background: `linear-gradient(180deg, ${item.color}, ${item.color}20)`, height: 48 }} />
                    <div>
                      <h3 className="text-[15px] font-semibold" style={{ color: "var(--color-foreground)" }}>{item.title}</h3>
                      <p className="mt-1.5 text-[14px] leading-[1.75]" style={{ color: "var(--color-body)" }} dangerouslySetInnerHTML={{ __html: item.desc }} />
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2E3658 0%, #262F4C 50%, #2E3658 100%)" }} />
        <div className="impact-blob impact-blob-1" style={{ opacity: 0.3 }} />

        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36 relative z-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center mb-4" style={{ color: "rgba(138,142,229,0.5)" }}>
              How it works
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center text-white" style={{ letterSpacing: "-0.035em" }}>
              Simple for you. Transformative for families.
            </h2>
          </Reveal>

          <div className="mt-20 max-w-4xl mx-auto">
            {[
              { step: "01", title: "You introduce", desc: "A link, a QR code, or a card at the arrangement or discharge. The family creates their account in under two minutes. Your name stays attached.", color: "#D4A0C0" },
              { step: "02", title: "LightPath guides", desc: "A personalized care plan generates automatically — tasks organized by urgency, benefits surfaced, professionals matched. It adapts to their pace and needs over months.", color: "#8A8EE5" },
              { step: "03", title: "Care continues", desc: "What used to end at the service now extends through the entire first year. Families remember who gave them this. That\u2019s your legacy.", color: "#E59524" },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div
                  className="flex items-start gap-8 sm:gap-12 py-10"
                  style={{ borderTop: i > 0 ? "1px solid var(--white-8)" : "none" }}
                >
                  <span
                    className="text-[2.5rem] sm:text-[3.5rem] font-serif leading-none shrink-0 tabular-nums"
                    style={{ color: s.color, opacity: 0.15, letterSpacing: "-0.04em" }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[1.125rem] font-serif font-normal mb-2 text-white" style={{ letterSpacing: "-0.01em" }}>
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-[1.75]" style={{ color: "var(--white-40)" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Integration note */}
          <Reveal delay={200}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["White-label", "Co-branded", "QR in packets", "Link in emails", "No IT needed"].map((opt) => (
                <span key={opt} className="text-[11px] font-medium px-4 py-2 rounded-full" style={{ background: "var(--white-4)", color: "var(--white-40)", border: "1px solid var(--white-8)" }}>
                  {opt}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Free for everyone ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36 relative z-10 text-center">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] max-w-2xl mx-auto" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Free for families.{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>Free to integrate.</span>
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
              No cost to the family. No setup fee for partners. No paywall on grief support. During our founding partner period, everything is free&nbsp;&mdash; because getting this right matters more than getting paid.
            </p>
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
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
              Families remember{" "}<br className="hidden sm:block" />
              how you made them feel.
            </h2>
            <p className="mt-6 max-w-md mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Become a founding partner. Shape the future of grief support together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/demo" className="btn-white">
                Become a partner
              </Link>
              <Link href="/enterprise" className="inline-flex items-center gap-2 text-[14px] font-medium transition-opacity hover:opacity-100" style={{ color: "rgba(255,255,255,0.45)" }}>
                For employers &amp; insurers
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
