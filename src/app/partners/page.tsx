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
              Every family you serve walks away carrying 570 hours of paperwork, decisions, and unanswered questions alone.
            </p>
            <div className="mt-10">
              <Link href="/demo" className="btn-white">
                Partner with us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The reality — immersive data section ── */}
      <section className="relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }} />
        <div className="impact-blob impact-blob-1" />
        <div className="impact-blob impact-blob-2" />

        <div className="px-6 sm:px-8 mx-auto max-w-5xl py-24 sm:py-32 relative z-10">
          <Reveal>
            <h2 className="text-center text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto mb-16" style={{ letterSpacing: "-0.035em" }}>
              After the service,{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--white-40)" }}>families face this alone.</span>
            </h2>
          </Reveal>

          <div className="grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">
            <Reveal delay={50}>
              <div className="impact-card h-full">
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The practical burden</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#E59524", letterSpacing: "-0.04em" }}>570 hrs</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      of paperwork, calls, and decisions — stretched over 16 months while in shock.
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
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The emotional reality</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#D4A0C0", letterSpacing: "-0.04em" }}>57%</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      of families feel completely unprepared for what comes after the funeral.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--white-8)", paddingTop: "1rem" }}>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#D4A0C0", letterSpacing: "-0.04em" }}>89%</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      receive no follow-up support from any provider after the first week.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── What LightPath does — editorial, restrained ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36 relative z-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center mb-4" style={{ color: "var(--color-primary)" }}>
              What families get
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center max-w-2xl mx-auto" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              A path forward, not a pamphlet.
            </h2>
          </Reveal>

          <div className="mt-20 max-w-3xl mx-auto grid gap-16 sm:gap-20 sm:grid-cols-2">
            {[
              { title: "Every task, organized", desc: "Probate, insurance, benefits, accounts — organized by urgency with step-by-step guidance for their state.", color: "#8A8EE5" },
              { title: "Benefits they don\u2019t know about", desc: "Survivor benefits, unclaimed insurance, tax credits. Families miss thousands because no one tells them.", color: "#E59524" },
              { title: "The right professionals", desc: "Attorneys, counselors, financial advisors — matched to their loss type, location, and what they actually need.", color: "#D4A0C0" },
              { title: "Adapts over time", desc: "From the first week through the first anniversary. Milestones, check-ins, and care that evolves with them.", color: "#8F82CD" },
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

      {/* ── How it works — editorial steps ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-surface-alt)" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-28 sm:py-36">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-center mb-4" style={{ color: "var(--color-primary)" }}>
              How it works
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Three steps. Zero friction.
            </h2>
          </Reveal>

          <div className="mt-20 max-w-4xl mx-auto">
            {[
              { step: "01", title: "You activate", desc: "A link, a QR code, or a card at the arrangement. The family creates their account in under two minutes.", color: "#D4A0C0" },
              { step: "02", title: "LightPath guides", desc: "A personalized care plan generates — tasks, benefits, matched professionals. Adapts to their pace and needs.", color: "#8A8EE5" },
              { step: "03", title: "You stay present", desc: "Your name stays with the family throughout their journey. You extended care far beyond the service.", color: "#E59524" },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 100}>
                <div
                  className="flex items-start gap-8 sm:gap-12 py-10"
                  style={{ borderTop: i > 0 ? "1px solid var(--color-border)" : "none" }}
                >
                  <span
                    className="text-[2.5rem] sm:text-[3.5rem] font-serif leading-none shrink-0 tabular-nums"
                    style={{ color: s.color, opacity: 0.2, letterSpacing: "-0.04em" }}
                  >
                    {s.step}
                  </span>
                  <div>
                    <h3 className="text-[1.125rem] font-serif font-normal mb-2" style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
                      {s.title}
                    </h3>
                    <p className="text-[15px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                      {s.desc}
                    </p>
                  </div>
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
        <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(212,160,192,0.06), transparent)" }} />
        <div className="relative z-10 px-6 sm:px-8 mx-auto max-w-[72rem] py-32 sm:py-44 text-center">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
              Families remember{" "}<br className="hidden sm:block" />
              how you made them feel.
            </h2>
            <p className="mt-6 max-w-md mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
              Free for families. Free to integrate. Become a founding partner.
            </p>
            <div className="mt-10">
              <Link href="/demo" className="btn-white">
                Partner with us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
