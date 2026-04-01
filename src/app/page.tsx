import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { PlatformShowcase } from "@/components/platform-showcase";
import Image from "next/image";
import { SectionClouds } from "@/components/section-clouds";
import { NightSky } from "@/components/night-sky";
import { LivingSky } from "@/components/living-sky";
import { StarField } from "@/components/star-field";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — Living Sky (light, spiritual)
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[90vh]" style={{ marginTop: "-64px" }}>
        <LivingSky />
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-52 sm:pt-64 pb-24 sm:pb-32 hero-animate">
          <h1 className="text-[2.5rem] sm:text-[3.5rem] lg:text-[4.25rem] font-serif font-normal leading-[1.04] max-w-3xl" style={{ letterSpacing: "-0.04em" }}>
            <span style={{ color: "#6B6E8D" }}>Redefining care for</span>
            <br />
            <span style={{ color: "#1C1C2E" }}>life&rsquo;s hardest transitions</span>
          </h1>

          <p className="mt-8 max-w-md text-[17px] leading-relaxed" style={{ color: "#6B6E8D" }}>
            When you lose someone, everything feels impossible. We help you find the path forward.
          </p>

          <div className="mt-10">
            <Link href="/demo" className="btn-primary">
              Get early access
            </Link>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          THE PROBLEM — dark immersive section
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden impact-section" style={{ marginTop: "-1px" }}>
        {/* Dark base — sharp edges, no fading */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }} />

        {/* Gradient blobs */}
        <div className="impact-blob impact-blob-1" />
        <div className="impact-blob impact-blob-2" />
        <div className="impact-blob impact-blob-3" />

        <div className="mx-auto max-w-5xl px-6 pt-14 sm:pt-20 pb-20 sm:pb-28 relative z-10">

          {/* Section label */}
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-center mb-5" style={{ color: "rgba(138,142,229,0.65)" }}>
              What grieving families face
            </p>
          </Reveal>

          {/* Bold headline */}
          <Reveal>
            <h2 className="text-center text-[1.75rem] sm:text-[3rem] lg:text-[3.75rem] font-serif font-normal leading-[1.08] max-w-3xl mx-auto" style={{ color: "#FFFFFF", letterSpacing: "-0.04em" }}>
              Through the weight of loss.<br />
              <span className="text-[1.25rem] sm:text-[2rem] lg:text-[2.5rem]" style={{ color: "var(--white-40)" }}>The emotional burden and the practical chaos.</span>
            </h2>
          </Reveal>


          {/* Stats — presented as human stories, not dashboard metrics */}
          <Reveal delay={150}>
          <div className="mt-12 sm:mt-16 grid gap-6 sm:gap-8 md:grid-cols-2 items-stretch">

            {/* ── The emotional weight ── */}
              <div className="impact-card h-full">
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The emotional weight</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "var(--color-primary)", letterSpacing: "-0.04em" }}>3M+</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      families face loss each year — most with no one to guide them through it.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--white-8)", paddingTop: "1rem" }}>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "var(--color-primary)", letterSpacing: "-0.04em" }}>57%</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      say they felt completely unprepared for everything that followed.
                    </p>
                  </div>
                </div>
              </div>

            {/* ── The practical chaos ── */}
              <div className="impact-card h-full">
                <p className="text-[13px] font-serif italic mb-4" style={{ color: "var(--white-40)" }}>The practical chaos</p>
                <div className="space-y-4">
                  <div>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#E59524", letterSpacing: "-0.04em" }}>570 hrs</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      of paperwork, phone calls, and decisions — stretched over 16 months on average.
                    </p>
                  </div>
                  <div style={{ borderTop: "1px solid var(--white-8)", paddingTop: "1rem" }}>
                    <span className="font-serif leading-none" style={{ fontSize: "clamp(2.25rem, 5.5vw, 3rem)", color: "#E59524", letterSpacing: "-0.04em" }}>$15.5B</span>
                    <p className="mt-1.5 text-[14px] leading-relaxed" style={{ color: "var(--white-60)" }}>
                      in benefits go unclaimed every year — because no one told families they existed.
                    </p>
                  </div>
                </div>
              </div>
          </div>
          </Reveal>

          {/* Sources */}
          <p className="mt-8 text-center text-[11px]" style={{ color: "var(--white-20)" }}>
            Sources: CDC NVSS 2024 &middot; Columbia Univ. Center for Prolonged Grief &middot; EstateExec &middot; PBGC &middot; AARP Grief Experience Study
          </p>

        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PLATFORM SHOWCASE — alternating feature blocks
      ══════════════════════════════════════════════ */}
      <section id="features" className="relative overflow-hidden">
        {/* Warm ambient glow — soft drifting orbs */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Large lavender glow — left side */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "55%",
              height: "65%",
              top: "0%",
              left: "-10%",
              background: "radial-gradient(ellipse at center, rgba(220,215,245,0.7) 0%, rgba(210,205,240,0.35) 35%, transparent 65%)",
              filter: "blur(55px)",
              animation: "featureGlow1 14s ease-in-out infinite",
            }}
          />
          {/* Blue-lavender glow — right side */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "50%",
              height: "55%",
              top: "25%",
              right: "-8%",
              background: "radial-gradient(ellipse at center, rgba(195,208,248,0.6) 0%, rgba(185,200,245,0.3) 35%, transparent 65%)",
              filter: "blur(55px)",
              animation: "featureGlow2 18s ease-in-out infinite",
            }}
          />
          {/* Warm ivory glow — bottom center */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "40%",
              height: "40%",
              bottom: "5%",
              left: "18%",
              background: "radial-gradient(ellipse at center, rgba(245,235,218,0.6) 0%, rgba(240,228,208,0.3) 35%, transparent 65%)",
              filter: "blur(50px)",
              animation: "featureGlow1 12s ease-in-out infinite reverse",
            }}
          />
          {/* Soft peachy accent — mid-right */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "30%",
              height: "30%",
              top: "50%",
              right: "10%",
              background: "radial-gradient(ellipse at center, rgba(245,220,215,0.4) 0%, rgba(240,212,205,0.18) 40%, transparent 65%)",
              filter: "blur(45px)",
              animation: "featureGlow2 15s ease-in-out infinite reverse",
            }}
          />
          {/* Lavender whisper — top center */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "45%",
              height: "35%",
              top: "-5%",
              left: "30%",
              background: "radial-gradient(ellipse at center, rgba(215,210,242,0.5) 0%, rgba(208,202,238,0.22) 40%, transparent 65%)",
              filter: "blur(50px)",
              animation: "featureGlow1 16s ease-in-out infinite",
            }}
          />
        </div>
        <div className="section relative z-10">
          <Reveal>
            <div className="text-center mb-16 sm:mb-24">
              <p className="label mb-4">What LightPath does</p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif font-normal leading-[1.06] max-w-2xl mx-auto" style={{ color: "var(--color-foreground)", letterSpacing: "-0.03em" }}>
                A clear path through{" "}<br className="hidden sm:block" />
                <span style={{ color: "var(--color-body)" }}>the hardest part.</span>
              </h2>
            </div>
          </Reveal>

          <PlatformShowcase />
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          EMOTIONAL INTELLIGENCE — the differentiator
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }}>
        <NightSky />
        <div className="relative z-10 mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <Reveal>
            <div className="text-center mb-14 sm:mb-20">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(138,142,229,0.65)" }}>
                Emotional intelligence
              </p>
              <h2 className="mt-5 text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif font-normal text-white leading-[1.06] max-w-3xl mx-auto" style={{ letterSpacing: "-0.03em" }}>
                A platform that feels{" "}<br className="hidden sm:block" />
                <span style={{ color: "var(--white-40)" }}>what you&rsquo;re going through.</span>
              </h2>
              <p className="mt-5 text-[16px] max-w-xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                LightPath doesn&rsquo;t just organize tasks. It reads your emotional state in real time and reshapes itself around what you need right now.
              </p>
            </div>
          </Reveal>

          {/* Support Modes */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 sm:gap-4 mb-16">
            {[
              { mode: "Crisis", desc: "Everything stops. Safety resources, grounding, nothing else.", color: "#D4725C", active: true },
              { mode: "Grounding", desc: "Stabilization tools prioritized. Gentle pacing.", color: "#E5A030", active: false },
              { mode: "Rest", desc: "Minimal content. Comfort only. Late-night quiet.", color: "#8F82CD", active: false },
              { mode: "Gentle action", desc: "Soft tasks. One step at a time. No pressure.", color: "#D4A0C0", active: false },
              { mode: "Reflection", desc: "Full access. Meaning-making. Celebration unlocked.", color: "#7BA88E", active: false },
            ].map((item, i) => (
              <Reveal key={item.mode} delay={i * 60}>
                <div className="rounded-xl p-5 h-full" style={{ backgroundColor: item.active ? "rgba(255,255,255,0.08)" : "rgba(255,255,255,0.03)", border: `1px solid ${item.active ? "rgba(255,255,255,0.12)" : "rgba(255,255,255,0.06)"}` }}>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[13px] font-semibold text-white">{item.mode}</span>
                  </div>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Intelligence signals */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Grief wave detection",
                desc: "Detects acute emotional drops in real time. When the wave hits, the platform shifts \u2014 suppressing tasks, surfacing grounding tools, and protecting you from overwhelm.",
                color: "#8A8EE5",
              },
              {
                title: "Rumination awareness",
                desc: "Distinguishes intrusive thought patterns from healthy reflection. Adjusts recommendations to gently redirect circular thinking without dismissing your process.",
                color: "#E59524",
              },
              {
                title: "Faith-aware timing",
                desc: "Recognizes cultural and faith milestones \u2014 Islamic Arba\u2019in, Jewish Shloshim, Hindu Shraddha \u2014 and adjusts grief phase computation and task timing accordingly.",
                color: "#D4A0C0",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 80}>
                <div className="rounded-xl p-6" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: item.color }} />
                  <h3 className="text-[16px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Clinical credibility bar */}
          <Reveal delay={200}>
            <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              <span>88 clinical interventions</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>16 therapeutic frameworks</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>5 real-time support modes</span>
              <span className="hidden sm:inline">&middot;</span>
              <span>9 therapeutic progression tracks</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          THE SUPPORT SYSTEM
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        {/* Smooth top fade — white into lavender */}
        <div className="absolute top-0 left-0 right-0 h-40 z-[1]" style={{ background: "linear-gradient(180deg, var(--color-surface) 0%, transparent 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 80% 70% at 50% 45%, #E4DBF4 0%, #D8CEF0 25%, #EEEDF5 55%, #F5F4FA 100%)" }} />
        {/* Smooth bottom fade — lavender into white */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-[1]" style={{ background: "linear-gradient(0deg, var(--color-surface) 0%, transparent 100%)" }} />

        <div className="relative z-10 px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-36">
          <Reveal>
            <div className="text-center mb-14 sm:mb-20">
              <p className="label mb-4">The support system</p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif font-normal leading-[1.06] max-w-3xl mx-auto" style={{ color: "var(--color-foreground)", letterSpacing: "-0.03em" }}>
                Families are already surrounded{" "}<br className="hidden sm:block" />
                <span style={{ color: "var(--color-body)" }}>by people who care.</span>
              </h2>
              <p className="mt-5 text-[17px] max-w-lg mx-auto leading-relaxed" style={{ color: "var(--color-body)" }}>
                We activate their support system to deliver real help.
              </p>
            </div>
          </Reveal>

          {/* ── Desktop: 2×2 grid + center circle ── */}
          <Reveal delay={100}>
            <div className="hidden md:block relative mx-auto" style={{ maxWidth: "48rem" }}>
              <div className="grid grid-cols-2" style={{ gap: "16px" }}>
                {/* TL: Hospice */}
                <div className="rounded-2xl p-7 lg:p-8 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #8A8EE5, #8A8EE566)" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#8A8EE5" }}>Partners</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Hospice</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>End-of-life care becomes whole-family care. A plan begins while the hospice team is still by their side.</p>
                </div>
                {/* TR: Funeral homes */}
                <div className="rounded-2xl p-7 lg:p-8 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #8A8EE5, #8A8EE566)" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#8A8EE5" }}>Partners</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Funeral homes</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>The service ends, but support continues. Families leave with a clear plan — not just a folder of paperwork.</p>
                </div>
                {/* BL: Employers */}
                <div className="rounded-2xl p-7 lg:p-8 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #63D583, #63D58366)" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#63D583" }}>Enterprise</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Employers</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>Bereavement leave becomes bereavement support. Employees in grief get more than time off — they get a path forward.</p>
                </div>
                {/* BR: Life insurers */}
                <div className="rounded-2xl p-7 lg:p-8 relative overflow-hidden" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #63D583, #63D58366)" }} />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#63D583" }}>Enterprise</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Life insurers</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>A claim becomes a care moment. Beneficiaries receive guided support — not just a payout.</p>
                </div>
              </div>

              {/* Center circle */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                <div className="rounded-full flex items-center justify-center" style={{ width: "110px", height: "110px", background: "#EDE7F6", boxShadow: "0 4px 20px rgba(138,142,229,0.15)" }}>
                  <span className="font-serif text-[1rem]" style={{ color: "#3D3875" }}>Families</span>
                </div>
              </div>
            </div>

            {/* ── Mobile: stacked ── */}
            <div className="md:hidden space-y-3">
              {/* Partners */}
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#8A8EE5" }}>Partners</span>
                <div className="mt-3">
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Hospice</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>End-of-life care becomes whole-family care. A plan begins while the hospice team is still by their side.</p>
                </div>
                <div className="my-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />
                <div>
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Funeral homes</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>The service ends, but support continues. Families leave with a clear plan — not just a folder of paperwork.</p>
                </div>
              </div>

              {/* Families */}
              <div className="flex justify-center py-2">
                <div className="rounded-full flex items-center justify-center" style={{ width: "80px", height: "80px", background: "#EDE7F6" }}>
                  <span className="font-serif text-[0.9rem]" style={{ color: "#3D3875" }}>Families</span>
                </div>
              </div>

              {/* Enterprise */}
              <div className="rounded-2xl p-6" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#63D583" }}>Enterprise</span>
                <div className="mt-3">
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Employers</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>Bereavement leave becomes bereavement support. Employees in grief get more than time off — they get a path forward.</p>
                </div>
                <div className="my-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />
                <div>
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Life insurers</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>A claim becomes a care moment. Beneficiaries receive guided support — not just a payout.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          VAULT + SUPPORTERS — side by side context
      ══════════════════════════════════════════════ */}
      <section id="supporters" className="relative overflow-hidden">
        <div className="section relative z-10">
          <Reveal>
            <div className="mx-auto max-w-5xl grid gap-14 lg:grid-cols-2 items-center">
              <div>
                <p className="tag-pill mb-6" style={{ width: "fit-content" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A8EE5" }} />
                  Circle of Care
                </p>
                <h2 className="heading-lg">Help without<br />guessing.</h2>
                <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#475569" }}>
                  Invite up to 5 trusted people into your plan. Assign tasks, share documents, and let them carry some of the weight &mdash; while you stay in control of what they see.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    "Assign specific tasks to specific people",
                    "Granular privacy \u2014 each supporter sees only what you share",
                    "Dual context: built for both grievers and those supporting them",
                    "Revoke access any time, no questions asked",
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-3">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#8A8EE5" }} />
                      <span className="text-[14px] leading-relaxed" style={{ color: "#475569" }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative min-h-[280px]">
                <div className="!p-6 !rounded-2xl relative" style={{ transform: "rotate(-2deg)", boxShadow: "0 8px 32px rgba(0,0,0,0.06)", background: "rgba(255,255,255,0.85)", backdropFilter: "blur(16px)" }}>
                  <p className="label !text-[10px]" style={{ color: "var(--color-body)" }}>Your view</p>
                  <div className="mt-3 space-y-2">
                    {[
                      { label: "Notify life insurance", bg: "#f0f0ff", dot: "#8A8EE5" },
                      { label: "Update bank accounts", bg: "#FFF8F0", dot: "#E59524" },
                    ].map((t) => (
                      <div key={t.label} className="rounded-xl px-3.5 py-3 flex items-center gap-3" style={{ background: t.bg }}>
                        <div className="h-2.5 w-2.5 rounded-full" style={{ background: t.dot }} />
                        <span className="text-[13px] font-medium" style={{ color: "var(--color-foreground)" }}>{t.label}</span>
                      </div>
                    ))}
                    <div className="rounded-xl px-3.5 py-3 flex items-center gap-3 opacity-40" style={{ background: "#F5F5F7" }}>
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#94A3B8" }} />
                      <span className="text-[13px] font-medium" style={{ color: "var(--color-body)" }}>Cancel subscriptions</span>
                    </div>
                  </div>
                </div>
                <div className="!p-6 !rounded-2xl absolute top-14 -right-2 sm:-right-6 w-[80%]" style={{ transform: "rotate(1.5deg)", boxShadow: "0 16px 48px rgba(0,0,0,0.08)", background: "rgba(255,255,255,0.9)", backdropFilter: "blur(16px)" }}>
                  <p className="label !text-[10px]">Supporter sees</p>
                  <div className="mt-3">
                    <div className="rounded-xl px-3.5 py-3 flex items-center gap-3" style={{ background: "#f0f0ff" }}>
                      <div className="h-2.5 w-2.5 rounded-full" style={{ background: "#8A8EE5" }} />
                      <div>
                        <span className="text-[13px] font-medium block" style={{ color: "var(--color-foreground)" }}>Cancel subscriptions</span>
                        <span className="text-[11px]" style={{ color: "#8A8EE5" }}>Assigned to you</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          VAULT — secure document storage
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)" }}>
        <div className="section relative z-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="tag-pill mb-6 mx-auto" style={{ width: "fit-content" }}>
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#E59524" }} />
                Vault
              </p>
              <h2 className="heading-lg">Your most important<br />documents, protected.</h2>
              <p className="mt-5 text-[17px] leading-relaxed max-w-lg mx-auto" style={{ color: "#475569" }}>
                Death certificates, wills, insurance policies, account records &mdash; stored behind a PIN in one secure place. Share specific documents with specific people, and revoke access at any time.
              </p>
              <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-xl mx-auto">
                {[
                  { label: "PIN-protected", color: "#8A8EE5" },
                  { label: "Upload any file", color: "#E59524" },
                  { label: "Selective sharing", color: "#5A8A6E" },
                  { label: "Encrypted at rest", color: "#8F82CD" },
                ].map((item) => (
                  <div key={item.label} className="rounded-xl p-3 text-center" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                    <div className="w-1.5 h-1.5 rounded-full mx-auto mb-2" style={{ backgroundColor: item.color }} />
                    <p className="text-[12px] font-medium" style={{ color: "var(--color-foreground)" }}>{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          PARTNERS BANNER — dark sky
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <NightSky />
        <StarField />
        <div className="relative px-6 sm:px-8 mx-auto max-w-[72rem] text-center py-24 sm:py-32 z-[2]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(138,142,229,0.7)" }}>For partners &amp; organizations</p>
            <h2 className="mt-6 text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif font-normal text-white leading-[1.04] max-w-2xl mx-auto" style={{ letterSpacing: "-0.04em" }}>
              Bring LightPathAI to<br />the families you serve.
            </h2>
            <p className="mt-5 text-[16px] max-w-lg mx-auto leading-relaxed" style={{ color: "var(--white-50)" }}>
              Whether you&rsquo;re a hospice, funeral home, employer, or insurer — we make it easy to offer real support.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10 flex justify-center">
              <Link href="/enterprise" className="btn-white">
                For employers &amp; insurers
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FAQ — clean editorial
      ══════════════════════════════════════════════ */}
      <section className="relative bg-section-subtle">
        <div className="section">
          <Reveal>
            <div className="mx-auto max-w-2xl">
              <h2 className="heading-lg text-center mb-14">What you should know</h2>
              <div
                className="rounded-2xl p-6 sm:p-8"
                style={{
                  background: "rgba(255,255,255,0.55)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.6)",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.02)",
                }}
              >
                {faqTeaser.map((f, i) => (
                  <Reveal key={f.q} delay={i * 80}>
                    <div className="py-6" style={{ borderBottom: i < faqTeaser.length - 1 ? "1px solid rgba(0,0,0,0.05)" : "none" }}>
                      <h3 className="font-serif text-[17px]" style={{ color: "var(--color-foreground)" }}>{f.q}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--color-body)" }}>{f.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link href="/faq" className="text-[14px] font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5 hover:gap-3" style={{ color: "#8A8EE5" }}>
                  See all questions <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, transparent, #EEEDF5)" }}>
        <SectionClouds count={3} opacity={0.6} />
        <div className="relative section flex flex-col items-center text-center !py-32 sm:!py-48 z-10">
          <Reveal>
            <div className="mb-10 flex justify-center" style={{ marginLeft: "-2rem" }}>
              <div className="logo-animated">
                <Image src="/logo.png" alt="LightPathAI" width={56} height={56} className="logo-animated-img" />
              </div>
            </div>
            <h2 className="text-[2rem] sm:text-[3.25rem] lg:text-[3.75rem] font-serif font-normal leading-[1.04]" style={{ color: "#1C1C1E", letterSpacing: "-0.04em" }}>
              You found us.<br />That took courage.
            </h2>
            <p className="mt-6 text-xl font-serif" style={{ color: "var(--color-body)" }}>
              Whenever you&rsquo;re ready, we&rsquo;re here.
            </p>
            <Link href="/demo" className="btn-primary mt-10">
              Get early access
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ══════════════════════════════════════════════════
   DATA
   ══════════════════════════════════════════════════ */

const faqTeaser = [
  { q: "Do I need documents to start?", a: "No. Start with what you know. Add documents when you're ready." },
  { q: "Is this only for recent loss?", a: "No. Whether it's been days or years, we start with what matters now." },
  { q: "What's free and what's paid?", a: "During our soft launch, everything is free \u2014 Care Plan, Inner Light, LightKeeper, Benefits Discovery, and Find Care. Premium tiers with advanced Assist automation are coming soon." },
  { q: "How is this different from ChatGPT or a grief app?", a: "Grief apps offer reflection. ChatGPT gives broad answers. LightPath builds a structured plan with 147 tasks across 18 categories, drafts your paperwork, scans 40+ benefit programs, adapts to your emotional state in real time, and stores your documents in a secure vault." },
];
