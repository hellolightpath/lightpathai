import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { PlatformShowcase } from "@/components/platform-showcase";
import { SectionClouds } from "@/components/section-clouds";
import { NightSky } from "@/components/night-sky";
import { LivingSky } from "@/components/living-sky";
import { StarField } from "@/components/star-field";
import { HorizonMark } from "@/components/horizon-mark";

export default function HomePage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — Living Sky (light, spiritual)
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden min-h-[92vh]" style={{ marginTop: "-64px" }}>
        <LivingSky />
        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-56 sm:pt-72 pb-28 sm:pb-36 hero-animate">
          <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
            The grief intelligence platform
          </p>
          <h1 className="text-[2.75rem] sm:text-[4.25rem] lg:text-[5.5rem] font-serif leading-[1.0] max-w-4xl" style={{ letterSpacing: "-0.045em", color: "var(--color-foreground)", fontWeight: 500 }}>
            Just enough light
            <br />
            to not fall.
          </h1>

          <p className="mt-9 max-w-lg text-[17px] sm:text-[18px] leading-[1.7]" style={{ color: "var(--color-body)" }}>
            When someone you love dies, everything changes at once.
            <br className="hidden sm:block" />{" "}
            We help you carry what comes after.
          </p>

          <div className="mt-11">
            <Link href="/demo" className="btn-primary">
              When you&rsquo;re ready
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-center mb-5" style={{ color: "rgba(149,152,232,0.7)" }}>
              The Problem
            </p>
          </Reveal>

          {/* Bold headline */}
          <Reveal>
            <h2 className="text-center text-[1.75rem] sm:text-[3rem] lg:text-[3.75rem] font-serif font-normal leading-[1.08] max-w-3xl mx-auto" style={{ color: "#FFFFFF", letterSpacing: "-0.04em" }}>
              When someone dies,<br />
              their family is left alone.
            </h2>
            <p className="mt-6 text-center text-[15px] sm:text-[17px] max-w-xl mx-auto leading-[1.7]" style={{ color: "var(--white-60)" }}>
              No guide. No coordination. No safety net.<br />
              Just chaos at life&rsquo;s hardest moment.
            </p>
          </Reveal>


          {/* Stats — three deck-aligned proof points */}
          <Reveal delay={150}>
          <div className="mt-14 sm:mt-20 grid gap-6 sm:gap-8 md:grid-cols-3 items-stretch">

            {/* ── 3M deaths ── */}
              <div className="impact-card h-full">
                <span className="font-serif leading-none block" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#9598E8", letterSpacing: "-0.04em" }}>3M</span>
                <p className="mt-3 text-[14px] leading-[1.65]" style={{ color: "var(--white-70)" }}>
                  deaths in the U.S. every year.
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.6]" style={{ color: "var(--white-50)" }}>
                  Each leaves 5+ grieving family members.
                </p>
              </div>

            {/* ── 570 hrs of tasks ── */}
              <div className="impact-card h-full">
                <span className="font-serif leading-none block" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#D4856A", letterSpacing: "-0.04em" }}>570 hrs</span>
                <p className="mt-3 text-[14px] leading-[1.65]" style={{ color: "var(--white-70)" }}>
                  of tasks per loss.
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.6]" style={{ color: "var(--white-50)" }}>
                  Paperwork, calls, decisions. While in shock.
                </p>
              </div>

            {/* ── 1 in 10 prolonged grief disorder ── */}
              <div className="impact-card h-full">
                <span className="font-serif leading-none block" style={{ fontSize: "clamp(2.5rem, 6vw, 3.5rem)", color: "#9598E8", letterSpacing: "-0.04em" }}>1 in 10</span>
                <p className="mt-3 text-[14px] leading-[1.65]" style={{ color: "var(--white-70)" }}>
                  develop prolonged grief disorder.
                </p>
                <p className="mt-1.5 text-[13px] leading-[1.6]" style={{ color: "var(--white-50)" }}>
                  Clinical condition. In DSM-5. Largely untreated.
                </p>
              </div>
          </div>
          </Reveal>

          {/* Sources */}
          <p className="mt-10 text-center text-[11px]" style={{ color: "var(--white-30)" }}>
            Sources: CDC NVSS 2024 · APA 2023 · DSM-5-TR (2022) · Columbia Center for Prolonged Grief
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
              <p className="label mb-4">The Solution</p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif font-normal leading-[1.06] max-w-2xl mx-auto" style={{ color: "#3D3630", letterSpacing: "-0.03em" }}>
                Not an app.{" "}<br className="hidden sm:block" />
                <span style={{ color: "#5C564F" }}>An intelligence layer.</span>
              </h2>
              <p className="mt-6 text-[16px] sm:text-[17px] max-w-xl mx-auto leading-[1.7]" style={{ color: "#5C564F" }}>
                One platform. Three pillars. Six capabilities for families. Day one, and every day after.
              </p>
            </div>
          </Reveal>

          <PlatformShowcase />
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
              <p className="label mb-4">The Ecosystem</p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif font-normal leading-[1.06] max-w-3xl mx-auto" style={{ color: "#3D3630", letterSpacing: "-0.03em" }}>
                Families at the center.{" "}<br className="hidden sm:block" />
                <span style={{ color: "#5C564F" }}>An embedded marketplace around them.</span>
              </h2>
              <p className="mt-5 text-[16px] max-w-lg mx-auto leading-[1.7]" style={{ color: "#5C564F" }}>
                Every partner that touches loss can extend real care. Not just paperwork.
              </p>
            </div>
          </Reveal>

          {/* ── Desktop: 2×2 grid + center circle ── */}
          <Reveal delay={100}>
            <div className="hidden md:block relative mx-auto" style={{ maxWidth: "48rem" }}>
              <div className="grid grid-cols-2" style={{ gap: "16px" }}>
                {/* TL: Hospice */}
                <div className="rounded-2xl p-7 lg:p-8" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-primary)" }}>Partners</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Hospice</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>End-of-life care becomes whole-family care. A plan begins while the hospice team is still by their side.</p>
                </div>
                {/* TR: Funeral homes */}
                <div className="rounded-2xl p-7 lg:p-8" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-primary)" }}>Partners</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Funeral homes</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>The service ends, but support continues. Families leave with a clear plan. Not just a folder of paperwork.</p>
                </div>
                {/* BL: Employers */}
                <div className="rounded-2xl p-7 lg:p-8" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-sage)" }}>Enterprise</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Employers</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>Bereavement leave becomes bereavement support. Employees in grief get more than time off. They get a path forward.</p>
                </div>
                {/* BR: Life insurers */}
                <div className="rounded-2xl p-7 lg:p-8" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 2px 16px rgba(0,0,0,0.04)" }}>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-sage)" }}>Enterprise</span>
                  <h3 className="font-serif text-[1.2rem] lg:text-[1.3rem] leading-tight mt-2.5 mb-2.5" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Life insurers</h3>
                  <p className="text-[13.5px] leading-[1.65]" style={{ color: "var(--color-body)" }}>A claim becomes a care moment. Beneficiaries receive guided support, not just a payout.</p>
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
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-primary)" }}>Partners</span>
                <div className="mt-3">
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Hospice</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>End-of-life care becomes whole-family care. A plan begins while the hospice team is still by their side.</p>
                </div>
                <div className="my-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />
                <div>
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Funeral homes</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>The service ends, but support continues. Families leave with a clear plan. Not just a folder of paperwork.</p>
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
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--color-sage)" }}>Enterprise</span>
                <div className="mt-3">
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Employers</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>Bereavement leave becomes bereavement support. Employees in grief get more than time off. They get a path forward.</p>
                </div>
                <div className="my-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }} />
                <div>
                  <h3 className="font-serif text-[1.1rem] leading-tight mb-2" style={{ color: "var(--color-foreground)" }}>Life insurers</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>A claim becomes a care moment. Beneficiaries receive guided support, not just a payout.</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider" />

      {/* ══════════════════════════════════════════════
          SUPPORTERS
      ══════════════════════════════════════════════ */}
      <section id="supporters" className="relative overflow-hidden">
        <div className="section relative z-10">
          <Reveal>
            <div className="mx-auto max-w-5xl grid gap-14 lg:grid-cols-2 items-center">
              <div>
                <p className="tag-pill mb-6" style={{ width: "fit-content" }}>
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#9598E8" }} />
                  For supporters
                </p>
                <h2 className="heading-lg" style={{ color: "#3D3630" }}>Help without<br />guessing.</h2>
                <p className="mt-5 text-[17px] leading-[1.7]" style={{ color: "#5C564F" }}>
                  Invite someone into your plan. They see only what you share. Nothing more.
                </p>
                <Link href="#features" className="mt-8 text-[14px] font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5 hover:gap-3" style={{ color: "#9598E8" }}>
                  How supporters help <span>&rarr;</span>
                </Link>
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
                        <span className="text-[11px]" style={{ color: "var(--color-primary)" }}>Assigned to you</span>
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
          PARTNERS BANNER — dark sky
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <NightSky />
        <StarField />
        <div className="relative px-6 sm:px-8 mx-auto max-w-[72rem] text-center py-24 sm:py-32 z-[2]">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(149,152,232,0.75)" }}>For partners &amp; organizations</p>
            <h2 className="mt-6 text-[1.75rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif font-normal text-white leading-[1.04] max-w-2xl mx-auto" style={{ letterSpacing: "-0.04em" }}>
              The infrastructure<br />the grief field has been missing.
            </h2>
            <p className="mt-5 text-[16px] max-w-xl mx-auto leading-[1.7]" style={{ color: "var(--white-60)" }}>
              Hospice. Funeral homes. Employers. Insurers. Every partner pays and sends families.
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
              <div>
                {faqTeaser.map((f, i) => (
                  <Reveal key={f.q} delay={i * 80}>
                    <div className="py-7" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                      <h3 className="font-serif text-[17px]" style={{ color: "var(--color-foreground)" }}>{f.q}</h3>
                      <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--color-body)" }}>{f.a}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Link href="/faq" className="text-[14px] font-semibold inline-flex items-center gap-2 transition-all duration-300 hover:translate-x-1.5 hover:gap-3" style={{ color: "var(--color-primary)" }}>
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
            <div className="mb-10 flex justify-center">
              <HorizonMark size={48} theme="light" />
            </div>
            <h2 className="text-[2rem] sm:text-[3.25rem] lg:text-[3.75rem] font-serif leading-[1.04]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              One small step today.
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] leading-[1.7] max-w-md mx-auto" style={{ color: "var(--color-body)" }}>
              We&rsquo;ll be here when you&rsquo;re ready.
            </p>
            <Link href="/demo" className="btn-primary mt-10">
              When you&rsquo;re ready
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
  { q: "What's free and what's paid?", a: "Your Care Plan, task guidance, and Inner Light are free. Premium adds drafted documents, live human review, and benefits discovery with claims filing." },
  { q: "How is this different from ChatGPT or a grief app?", a: "Grief apps offer reflection. ChatGPT gives broad answers. LightPath builds a structured plan for your specific situation\u2014with real forms, real deadlines, and real people." },
];
