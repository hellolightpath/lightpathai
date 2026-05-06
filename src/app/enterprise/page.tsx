import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";
import { EnterpriseDashboard } from "@/components/enterprise-dashboard";

export const metadata: Metadata = {
  title: "For Employers & Life Insurance | LightPathAI",
  description:
    "Bereavement leave ends. Grief doesn't. LightPath is the bereavement infrastructure your EAP doesn't ship. Built for employers and life insurance carriers.",
};

/* ── Inline SVG Icons (only those used on this page) ── */
const icons = {
  xCircle: (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.3"/>
      <path d="M6 6l4 4M10 6l-4 4" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  fileText: (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M9.5 1.5H4.5C3.95 1.5 3.5 1.95 3.5 2.5v11c0 .55.45 1 1 1h7c.55 0 1-.45 1-1v-8l-3-3z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 7h4M6 9.5h4M6 12h2" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  sparkle: (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.5v3M8 11.5v3M1.5 8h3M11.5 8h3M3.5 3.5l2 2M10.5 10.5l2 2M10.5 3.5l2 2M3.5 10.5l-2 2" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  checkCircle: (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.3"/>
      <path d="M5.5 8l2 2 3.5-4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  heart: (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 13.5S2 10 2 6a3 3 0 015.5-1.7L8 5l.5-.7A3 3 0 0114 6c0 4-6 7.5-6 7.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  zap: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M11 2L4 11h5l-1 7 7-9h-5l1-7z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  shieldPlus: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L3.5 5.5v4c0 4.2 2.8 8 6.5 9 3.7-1 6.5-4.8 6.5-9v-4L10 2.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 8v4M8 10h4" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  star: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 3l2.2 4.5 5 .7-3.6 3.5.9 5L10 14.3 5.5 16.7l.9-5-3.6-3.5 5-.7L10 3z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  barChart: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M3 17h14" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <rect x="5" y="9" width="2.5" height="8" rx="0.5" stroke={color} strokeWidth="1.3"/>
      <rect x="8.75" y="5" width="2.5" height="12" rx="0.5" stroke={color} strokeWidth="1.3"/>
      <rect x="12.5" y="3" width="2.5" height="14" rx="0.5" stroke={color} strokeWidth="1.3"/>
    </svg>
  ),
  brain: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 17V10" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M7 10a3 3 0 01-3-3c0-1.1.6-2.1 1.5-2.6A3 3 0 018 2c1 0 1.9.5 2.5 1.2A2.5 2.5 0 0113 2.5a3 3 0 013 3c0 1.1-.6 2-1.5 2.6A3 3 0 0113 10" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.5 10c-1 .5-2 1.8-2 3.2 0 2 1.6 3.8 3.5 3.8h4c1.9 0 3.5-1.8 3.5-3.8 0-1.4-1-2.7-2-3.2" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  check: (color: string) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7l3 3 5-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

/* ── Icon Box Helper ── */
function IconBox({ icon, color, size = "sm" }: { icon: React.ReactNode; color: string; size?: "sm" | "md" | "lg" }) {
  const dim = size === "lg" ? "h-12 w-12 rounded-2xl" : size === "md" ? "h-10 w-10 rounded-xl" : "h-7 w-7 rounded-lg";
  return (
    <div
      className={`shrink-0 ${dim} flex items-center justify-center`}
      aria-hidden="true"
      style={{
        background: `linear-gradient(135deg, ${color}18, ${color}0A)`,
        border: `1px solid ${color}20`,
        boxShadow: `0 2px 8px ${color}08`,
      }}
    >
      {icon}
    </div>
  );
}

export default function EnterprisePage() {
  return (
    <>
      {/* ── Hero — warm editorial canvas, sage-leaning. Distinct from /our-story. ── */}
      <section className="relative overflow-hidden min-h-[88vh]" style={{ marginTop: "-64px", background: "var(--color-surface)" }}>
        {/* Soft sage wash — quiet competence, not drama */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 30% 30%, rgba(122,158,122,0.10), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(149,152,232,0.07), transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[72rem] px-6 sm:px-8 pt-52 sm:pt-64 pb-24 sm:pb-32">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-sage)", letterSpacing: "0.22em" }}>
                For employers &amp; life insurance carriers
              </p>
              <h1 className="text-[2.25rem] sm:text-[3.5rem] lg:text-[4.25rem] font-serif leading-[1.02]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                Bereavement leave ends.
                <br />
                <span style={{ color: "var(--color-body)" }}>Grief doesn&rsquo;t.</span>
              </h1>
              <p className="mt-8 max-w-xl text-[17px] sm:text-[18px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                LightPath is the bereavement infrastructure your EAP doesn&rsquo;t ship.
                Real support for the people, families, and policyholders you serve.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
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

      {/* ── Stats — clean editorial data ── */}
      <section style={{ background: "var(--color-dark-base)", marginTop: "-1px" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32">
          <Reveal>
            <div className="text-center mb-16 sm:mb-20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "rgba(138,142,229,0.5)" }}>
                The reality
              </p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
                Grief doesn&rsquo;t stay at home.{" "}<br className="hidden sm:block" />
                <span style={{ color: "rgba(255,255,255,0.45)" }}>It walks into work every day.</span>
              </h2>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto grid gap-16 sm:gap-y-20 sm:gap-x-20 grid-cols-1 sm:grid-cols-2 justify-items-center">
            {[
              { category: "Emotional toll", stat: "1 in 4", desc: "employees are navigating grief at any given time.", color: "#9598E8", source: "Grief Recovery Institute" },
              { category: "Retention risk", stat: "79%", desc: "of grieving employees considered leaving their job.", color: "#D4856A", source: "SHRM Grief & Bereavement Survey" },
              { category: "Support gap", stat: "<5%", desc: "of employers offer any dedicated grief support.", color: "#9598E8", source: "Internal benefits-coverage research" },
              { category: "Business impact", stat: "$225.8B", desc: "in annual productivity lost to grieving employees in the U.S.", color: "#7A9E7A", source: "CDC 2023" },
            ].map((d, i) => (
              <Reveal key={d.stat} delay={i * 100}>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2.5 mb-5">
                    <div className="w-2 h-2 rounded-full" style={{ background: d.color }} />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: d.color }}>{d.category}</span>
                  </div>
                  <span className="font-serif block leading-none" style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", color: d.color, letterSpacing: "-0.04em" }}>
                    {d.stat}
                  </span>
                  <p className="mt-5 text-[15px] leading-relaxed max-w-sm mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>{d.desc}</p>
                  <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.1em]" style={{ color: "rgba(255,255,255,0.12)" }}>{d.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Without / With Comparison ── */}
      <section style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #FBFBFD 50%, #FAFAFA 100%)" }}>
        <div className="section-divider" />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              More than a benefit checkbox.
            </h2>
          </Reveal>

          <div className="mt-16 max-w-4xl mx-auto">
            <div className="hidden sm:grid grid-cols-2 gap-4 mb-2 px-4">
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(0,0,0,0.25)" }}>Without LightPathAI</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "#8A8EE5" }}>With LightPathAI</span>
            </div>
            {[
              { without: "3 days of bereavement leave", wit: "Ongoing, structured support from day one" },
              { without: "A pamphlet and an EAP number", wit: "A care plan built around their specific loss" },
              { without: 'Employee Googles "what to do when someone dies"', wit: "Every task, deadline, and document, organized" },
              { without: "No follow-up. No visibility.", wit: "Ongoing check-ins and adaptive care that evolves with them" },
              { without: "HR scrambles when someone asks", wit: "A benefit that activates and runs itself" },
            ].map((row, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 py-5 px-4" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{icons.xCircle("rgba(0,0,0,0.18)")}</div>
                    <span className="text-[14px] leading-relaxed" style={{ color: "rgba(0,0,0,0.35)" }}>{row.without}</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 shrink-0">{icons.checkCircle("#8A8EE5")}</div>
                    <span className="text-[14px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>{row.wit}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What Your People Get — side-by-side timeline + dashboard ── */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-base)" }}>
        <div className="section-divider" />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32">
          <div className="mx-auto max-w-6xl">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 text-center" style={{ color: "rgba(138,142,229,0.5)" }}>
                What your people get
              </p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center text-white" style={{ letterSpacing: "-0.035em" }}>
                Real support, from day one through every milestone.
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-center max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.4)" }}>
                Your employee just lost someone. Here&rsquo;s what happens when they activate LightPathAI.
              </p>
            </Reveal>

            {/* Keyframes for dashboard mockup */}
            <style dangerouslySetInnerHTML={{ __html: `
              @keyframes lpFillBar { from { width: 0 } to { width: 26% } }
              @keyframes lpFadeUp { from { opacity: 0; transform: translateY(10px) } to { opacity: 1; transform: translateY(0) } }
              @keyframes lpPopCheck { 0% { transform: scale(0) } 60% { transform: scale(1.3) } 100% { transform: scale(1) } }
              @keyframes lpDots { 0%,20% { opacity: 0.2 } 50% { opacity: 1 } 80%,100% { opacity: 0.2 } }
              @keyframes lpSlideUp { from { opacity: 0; transform: translateY(16px) } to { opacity: 1; transform: translateY(0) } }
            ` }} />

            {/* Side-by-side: timeline left, dashboard right */}
            <div className="mt-16 grid lg:grid-cols-[5fr_7fr] gap-8 lg:gap-10 items-start">

              {/* ── Left: Employee journey timeline ── */}
              <div className="space-y-4">
                {[
                  {
                    time: "Day 1",
                    title: "A plan built around their loss",
                    detail: "Personalized to who they lost, their state, and their responsibilities. Every task and deadline mapped.",
                    color: "#8A8EE5",
                    icon: icons.sparkle("#8A8EE5"),
                    metric: "570 hrs",
                    metricLabel: "organized",
                  },
                  {
                    time: "Week 1",
                    title: "Paperwork handled, not piled up",
                    detail: "Documents generated, pre-filled, and routed. They know exactly what to send and where.",
                    color: "#E59524",
                    icon: icons.fileText("#E59524"),
                    metric: "39",
                    metricLabel: "benefit programs",
                  },
                  {
                    time: "Month 1\u20133",
                    title: "A companion who actually shows up",
                    detail: "A trained peer who\u2019s been through it checks in regularly. Not therapy. Just someone who listens.",
                    color: "#63D583",
                    icon: icons.heart("#63D583"),
                    metric: "Ongoing",
                    metricLabel: "companionship",
                  },
                  {
                    time: "Month 3+",
                    title: "Care that adapts as they heal",
                    detail: "The plan evolves \u2014 tax season, anniversaries, legal deadlines \u2014 with reflection tools along the way.",
                    color: "#8F82CD",
                    icon: icons.brain("#8F82CD"),
                    metric: "Adapts",
                    metricLabel: "to their pace",
                  },
                ].map((item, i) => (
                  <Reveal key={item.time} delay={i * 80}>
                    <div
                      className="rounded-2xl relative overflow-hidden transition-all duration-300 hover:-translate-y-0.5 group"
                      style={{
                        background: `${item.color}06`,
                        border: `1px solid ${item.color}12`,
                      }}
                    >
                      {/* Left accent bar */}
                      <div className="absolute top-0 left-0 w-[3px] h-full" style={{ background: `linear-gradient(180deg, ${item.color}, ${item.color}30)` }} />
                      {/* Hover glow */}
                      <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" style={{ background: `${item.color}08` }} />

                      <div className="relative p-5 sm:p-6 flex gap-4 sm:gap-5 items-start">
                        {/* Time badge + icon */}
                        <div className="shrink-0 flex flex-col items-start gap-2.5">
                          <span className="text-[9px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full" style={{ background: `${item.color}10`, color: item.color, border: `1px solid ${item.color}18` }}>
                            {item.time}
                          </span>
                          <IconBox icon={item.icon} color={item.color} />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <h3 className="font-serif text-[1rem] sm:text-[1.1rem] text-white leading-snug" style={{ letterSpacing: "-0.01em" }}>{item.title}</h3>
                          <p className="mt-1.5 text-[12.5px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{item.detail}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* ── Right: Animated feature dashboard ── */}
              <Reveal delay={200}>
                <EnterpriseDashboard />
              </Reveal>

            </div>
          </div>
        </div>
      </section>

      {/* ── For Life Insurance — premium section ── */}
      <section style={{ background: "linear-gradient(180deg, #FAFAFA 0%, #FEF9F0 40%, #FFF8ED 60%, #FAFAFA 100%)" }}>
        <div className="section-divider" />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32">
          <div className="mx-auto max-w-5xl">
            <Reveal>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 text-center" style={{ color: "#E59524" }}>
                For life insurance companies
              </p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                A claim is a family&rsquo;s first step.<br className="hidden sm:block" /> Make sure they don&rsquo;t walk it alone.
              </h2>
              <p className="mt-5 text-[15px] leading-relaxed text-center max-w-2xl mx-auto" style={{ color: "var(--color-body)" }}>
                When a beneficiary reaches out, they&rsquo;re navigating one of the hardest moments of their life. LightPathAI meets them there.
              </p>
            </Reveal>

            <div className="mt-16 grid gap-5 sm:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  icon: icons.zap("#E59524"),
                  title: "Activate at the moment of claim",
                  desc: "When a beneficiary reaches out, LightPathAI meets them with a personalized care plan \u2014 not just a check.",
                  color: "#E59524",
                  accent: "Seamless integration",
                },
                {
                  icon: icons.shieldPlus("#8A8EE5"),
                  title: "Care that continues",
                  desc: "Ongoing structured support \u2014 tasks, documents, emotional tools, and peer companionship. Families remember who showed up.",
                  color: "#8A8EE5",
                  accent: "Beyond the payout",
                },
                {
                  icon: icons.star("#63D583"),
                  title: "A reason to be remembered",
                  desc: "The only life insurance benefit that supports the living. A genuine differentiator in a market where products look the same.",
                  color: "#63D583",
                  accent: "Meaningful difference",
                },
                {
                  icon: icons.barChart("#8F82CD"),
                  title: "See the impact",
                  desc: "Engagement and satisfaction data that shows the real impact of your bereavement benefit.",
                  color: "#8F82CD",
                  accent: "Measurable outcomes",
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 100} className="flex">
                  <div
                    className="rounded-2xl p-7 sm:p-8 relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group flex-1 flex flex-col"
                    style={{
                      background: "rgba(255,255,255,0.85)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      backdropFilter: "blur(12px)",
                      boxShadow: "0 2px 16px rgba(0,0,0,0.03), 0 0 0 1px rgba(0,0,0,0.02)",
                    }}
                  >
                    {/* Subtle glow on hover */}
                    <div className="absolute top-0 left-0 w-16 h-16 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -translate-y-1/2 -translate-x-1/2" style={{ background: `${item.color}15` }} />

                    <div className="relative flex-1">
                      <div className="flex items-start justify-between mb-5">
                        <IconBox icon={item.icon} color={item.color} size="lg" />
                        <span className="text-[9px] font-bold uppercase tracking-[0.14em] px-2.5 py-1 rounded-full" style={{ background: `${item.color}08`, color: item.color, border: `1px solid ${item.color}12` }}>
                          {item.accent}
                        </span>
                      </div>
                      <h3 className="font-serif text-[1.1rem]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>{item.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>{item.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Deployment options */}
            <Reveal delay={200}>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {["API Integration", "Co-Branded Portal", "White-Label"].map((opt) => (
                  <span key={opt} className="text-[11px] font-medium px-4 py-2 rounded-full" style={{ background: "rgba(229,149,36,0.06)", color: "#E59524", border: "1px solid rgba(229,149,36,0.1)" }}>
                    {opt}
                  </span>
                ))}
              </div>
              <p className="mt-3 text-[12px] text-center" style={{ color: "var(--color-muted)" }}>
                Implementation in weeks, not quarters. We meet your infrastructure where it is.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Enterprise Trust Bar ── */}
      <section style={{ background: "var(--color-dark-base)" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-14 sm:py-16">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-8 text-center" style={{ color: "rgba(255,255,255,0.15)" }}>
              Enterprise-ready by design
            </p>
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
              {["SOC 2 Aligned", "HIPAA Aligned", "Data Isolation", "Zero Data Sales", "Role-Based Access"].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center" style={{ background: "rgba(99,213,131,0.1)", border: "1px solid rgba(99,213,131,0.15)" }}>
                    {icons.check("rgba(99,213,131,0.6)")}
                  </div>
                  <span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.35)" }}>{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-[12px]" style={{ color: "rgba(255,255,255,0.12)" }}>
              Flexible contracting. PEPM, per-activation, or enterprise license
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Final CTA — Night Sky ── */}
      <section className="relative overflow-hidden">
        <NightSky />
        <StarField />
        {/* Warm glow overlay */}
        <div className="absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 60%, rgba(138,142,229,0.06), transparent)" }} />
        <div className="relative px-6 sm:px-8 mx-auto max-w-[72rem] text-center py-32 sm:py-44 z-[2]">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-7" style={{ color: "rgba(138,142,229,0.5)" }}>
              Ready to start?
            </p>
            <p className="font-serif text-[1.5rem] sm:text-[2rem] lg:text-[2.75rem] leading-[1.12] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.03em" }}>
              The kind of support that makes people say: &ldquo;They actually cared.&rdquo;
            </p>
            <p className="mt-5 text-[15px] max-w-md mx-auto" style={{ color: "rgba(255,255,255,0.35)" }}>
              See how LightPathAI can transform your bereavement benefit in a 15-minute walkthrough.
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
