import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "For Hospice & Funeral Homes | LightPathAI",
  description:
    "Extend your care beyond the service. Give every family a clear path forward with LightPathAI.",
};

/* ── Inline SVG Icons ── */
const icons = {
  check: (color: string) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7l3 3 5-6" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  checkCircle: (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke={color} strokeWidth="1.3"/>
      <path d="M5.5 8l2 2 3.5-4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  heart: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 17S3 12.5 3 7.5a4 4 0 017-2.6 4 4 0 017 2.6c0 5-7 9.5-7 9.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  users: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="7" cy="7" r="3" stroke={color} strokeWidth="1.3"/>
      <path d="M2 16c0-2.8 2.2-5 5-5s5 2.2 5 5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
      <circle cx="14" cy="8" r="2.5" stroke={color} strokeWidth="1.3"/>
      <path d="M14 12.5c2.2 0 4 1.8 4 4" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  fileText: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 2.5H6c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5.5l-3-3z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 9h5M7.5 11.5h5M7.5 14h3" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  sparkle: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5l2 4.5 5 .7-3.6 3.5.8 5-4.2-2.2-4.2 2.2.8-5L3 7.7l5-.7 2-4.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  clock: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.3"/>
      <path d="M10 6v4l2.5 2.5" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  shield: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5L3.5 5.5v4c0 4.2 2.8 8 6.5 9 3.7-1 6.5-4.8 6.5-9v-4L10 2.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  gift: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="9" width="14" height="8" rx="1" stroke={color} strokeWidth="1.3"/>
      <rect x="2" y="6" width="16" height="3" rx="1" stroke={color} strokeWidth="1.3"/>
      <path d="M10 6v11" stroke={color} strokeWidth="1.3"/>
      <path d="M10 6c0-2-1.5-3.5-3-3.5S5 4 6.5 5.5L10 6zM10 6c0-2 1.5-3.5 3-3.5S15 4 13.5 5.5L10 6z" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  arrowRight: (color: string) => (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

function IconBox({ icon, color, size = "md" }: { icon: React.ReactNode; color: string; size?: "sm" | "md" | "lg" }) {
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

export default function PartnersPage() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          HERO — Night Sky
      ══════════════════════════════════════════════ */}
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
              Your care doesn&rsquo;t have to end when the service does.
            </h1>
            <p className="mt-6 max-w-xl mx-auto text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Every family you serve walks away carrying 570 hours of paperwork, decisions, and unanswered questions. LightPathAI gives them a path forward — and gives you a way to stay present.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 items-center justify-center">
              <Link href="/demo" className="btn-white">
                Partner with us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-16 flex flex-wrap justify-center gap-6 sm:gap-10">
              {[
                { text: "Free for families", icon: icons.check("rgba(99,213,131,0.7)") },
                { text: "White-label available", icon: icons.check("rgba(99,213,131,0.7)") },
                { text: "Launch in days", icon: icons.check("rgba(99,213,131,0.7)") },
              ].map((badge) => (
                <div key={badge.text} className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded-full flex items-center justify-center" style={{ background: "rgba(99,213,131,0.1)", border: "1px solid rgba(99,213,131,0.15)" }}>
                    {badge.icon}
                  </div>
                  <span className="text-[12px] font-medium" style={{ color: "rgba(255,255,255,0.4)" }}>{badge.text}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          THE GAP — What happens after you
      ══════════════════════════════════════════════ */}
      <section style={{ background: "var(--color-dark-base)", marginTop: "-1px" }}>
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32">
          <Reveal>
            <div className="text-center mb-16 sm:mb-20">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4" style={{ color: "rgba(212,160,192,0.5)" }}>
                After the service
              </p>
              <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
                Families leave with a folder.{" "}<br className="hidden sm:block" />
                <span style={{ color: "rgba(255,255,255,0.45)" }}>What they need is a guide.</span>
              </h2>
            </div>
          </Reveal>

          <div className="max-w-4xl mx-auto grid gap-16 sm:gap-y-20 sm:gap-x-20 grid-cols-1 sm:grid-cols-2 justify-items-center">
            {[
              { category: "Overwhelmed", stat: "57%", desc: "of families feel completely unprepared for what comes after the funeral.", color: "#D4A0C0", source: "AARP Grief Experience Study" },
              { category: "Left alone", stat: "89%", desc: "receive no follow-up support from any provider after the first week.", color: "#8A8EE5", source: "National Funeral Directors Association" },
              { category: "Unclaimed", stat: "$15.5B", desc: "in survivor benefits go unclaimed every year because no one told families they existed.", color: "#E59524", source: "PBGC & SSA" },
              { category: "Administrative burden", stat: "570 hrs", desc: "of paperwork, phone calls, and decisions stretched over 16 months.", color: "#D4A0C0", source: "EstateExec" },
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

      {/* ══════════════════════════════════════════════
          FOR HOSPICE — Extend end-of-life into whole-family care
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="section-divider" />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32 relative z-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 text-center" style={{ color: "rgba(212,160,192,0.7)" }}>
              For hospice organizations
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              End-of-life care becomes{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>whole-family care.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-center max-w-2xl mx-auto" style={{ color: "var(--color-body)" }}>
              Your bereavement counselors already do extraordinary work. LightPathAI extends that support with practical guidance families need but counselors can&rsquo;t always provide — estate tasks, benefit claims, document preparation, and ongoing check-ins.
            </p>
          </Reveal>

          <div className="mt-16 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: icons.clock("#D4A0C0"),
                title: "Activate before discharge",
                desc: "Begin the care plan while your team is still alongside the family. The support starts before grief hits its hardest.",
                color: "#D4A0C0",
              },
              {
                icon: icons.fileText("#8A8EE5"),
                title: "Practical guidance you can\u2019t provide",
                desc: "Estate administration, insurance claims, employer notifications, benefits discovery. 570 hours of tasks, organized.",
                color: "#8A8EE5",
              },
              {
                icon: icons.heart("#D4A0C0"),
                title: "13 months of bereavement, extended",
                desc: "Your mandated bereavement period becomes a launchpad for ongoing support, not a cutoff.",
                color: "#D4A0C0",
              },
              {
                icon: icons.users("#8F82CD"),
                title: "LightKeeper companions",
                desc: "Matched peer companions with verified lived experience. Emotional support that scales without burdening your clinical staff.",
                color: "#8F82CD",
              },
              {
                icon: icons.sparkle("#E59524"),
                title: "Measurable outcomes",
                desc: "Track family engagement, task completion, benefit recovery. Data that demonstrates the value of your bereavement program.",
                color: "#E59524",
              },
              {
                icon: icons.shield("#5A8A6E"),
                title: "White-label or co-branded",
                desc: "Offer under your hospice\u2019s name or co-branded with LightPathAI. Families see continuity, not a handoff.",
                color: "#5A8A6E",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.03)",
                  }}
                >
                  <IconBox icon={card.icon} color={card.color} size="md" />
                  <h3 className="mt-4 text-[15px] font-semibold" style={{ color: "var(--color-foreground)" }}>{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FOR FUNERAL HOMES — The service ends, support continues
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)" }}>
        <div className="section-divider" />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32 relative z-10">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 text-center" style={{ color: "rgba(229,149,36,0.7)" }}>
              For funeral homes
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              The service ends.{" "}<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>Support doesn&rsquo;t have to.</span>
            </h2>
            <p className="mt-5 text-[16px] leading-relaxed text-center max-w-2xl mx-auto" style={{ color: "var(--color-body)" }}>
              Families remember how you made them feel. Offering LightPathAI at the arrangement conference transforms a transactional moment into lasting care — and gives every family something they&rsquo;ll tell others about.
            </p>
          </Reveal>

          <div className="mt-16 sm:mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {[
              {
                icon: icons.gift("#E59524"),
                title: "A gift at the arrangement",
                desc: "Hand families a clear path forward at the moment they need it most. Not a pamphlet — a personalized care plan.",
                color: "#E59524",
              },
              {
                icon: icons.fileText("#8A8EE5"),
                title: "Beyond the obituary",
                desc: "Death certificates, estate filing, bank notifications, insurance claims — organized by urgency with step-by-step guidance.",
                color: "#8A8EE5",
              },
              {
                icon: icons.sparkle("#D4A0C0"),
                title: "Benefits no one mentions",
                desc: "LightPathAI surfaces survivor benefits, unclaimed insurance, and tax credits families don\u2019t know about. $15.5B goes unclaimed yearly.",
                color: "#D4A0C0",
              },
              {
                icon: icons.users("#8F82CD"),
                title: "Referrals that feel like care",
                desc: "Find Care connects families with vetted attorneys, counselors, and financial advisors. Matched to their loss type and location.",
                color: "#8F82CD",
              },
              {
                icon: icons.heart("#E59524"),
                title: "Aftercare that differentiates",
                desc: "In a competitive market, ongoing family support becomes your signature. The kind of care that drives referrals.",
                color: "#E59524",
              },
              {
                icon: icons.shield("#5A8A6E"),
                title: "Simple integration",
                desc: "Works with your existing systems. QR code in packets, link in emails, tablet at the arrangement. No IT needed.",
                color: "#5A8A6E",
              },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 80}>
                <div
                  className="rounded-2xl p-6 h-full"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(20px)",
                    border: "1px solid rgba(255,255,255,0.7)",
                    boxShadow: "0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.03)",
                  }}
                >
                  <IconBox icon={card.icon} color={card.color} size="md" />
                  <h3 className="mt-4 text-[15px] font-semibold" style={{ color: "var(--color-foreground)" }}>{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          HOW IT WORKS — Simple 3-step flow
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "var(--color-dark-base)" }}>
        <div className="section-divider" />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32">
          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] mb-4 text-center" style={{ color: "rgba(138,142,229,0.5)" }}>
              How it works
            </p>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center text-white" style={{ letterSpacing: "-0.035em" }}>
              Three steps. Zero friction.
            </h2>
          </Reveal>

          <div className="mt-16 max-w-4xl mx-auto grid gap-8 sm:grid-cols-3">
            {[
              {
                step: "01",
                title: "You activate",
                desc: "Share a link, scan a QR code, or hand a card. The family creates their account in under 2 minutes.",
                color: "#D4A0C0",
              },
              {
                step: "02",
                title: "LightPath guides",
                desc: "A personalized care plan, benefit discovery, and matched professionals. Adapts to their pace and needs.",
                color: "#8A8EE5",
              },
              {
                step: "03",
                title: "You stay present",
                desc: "Your name stays with the family throughout their journey. Optional engagement reports show the impact of your referral.",
                color: "#E59524",
              },
            ].map((s, i) => (
              <Reveal key={s.step} delay={i * 120}>
                <div className="text-center">
                  <span className="text-[11px] font-bold tabular-nums block mb-4" style={{ color: s.color, opacity: 0.5 }}>{s.step}</span>
                  <div className="h-12 w-12 rounded-2xl mx-auto flex items-center justify-center mb-5" style={{ background: `linear-gradient(135deg, ${s.color}18, ${s.color}0A)`, border: `1px solid ${s.color}20` }}>
                    <div className="h-2.5 w-2.5 rounded-full" style={{ background: s.color }} />
                  </div>
                  <h3 className="text-[16px] font-semibold text-white mb-2">{s.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          WHAT SETS US APART
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="section-divider" />
        <div className="px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32 relative z-10">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-center" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Why partners choose LightPathAI
            </h2>
          </Reveal>

          <div className="mt-16 max-w-3xl mx-auto space-y-4">
            {[
              { text: "Clinical-grade emotional support — 50+ interventions across 14 grief frameworks", color: "#8A8EE5" },
              { text: "Real human companions (LightKeepers) matched by loss type, not chatbots", color: "#E59524" },
              { text: "Jurisdiction-aware estate guidance — accurate to each family\u2019s state", color: "#8F82CD" },
              { text: "Benefits discovery surfaces an average of $55,000+ per family", color: "#D4A0C0" },
              { text: "Find Care marketplace — vetted attorneys, therapists, and financial advisors", color: "#5A8A6E" },
              { text: "100% free for families during launch — zero cost barrier to adoption", color: "#63D583" },
              { text: "Privacy-first architecture — grief data treated with more care than financial data", color: "#8A8EE5" },
              { text: "White-label, co-branded, or standalone — flexible deployment for any partner", color: "#E59524" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 50}>
                <div
                  className="flex items-start gap-4 rounded-2xl px-6 py-5"
                  style={{
                    background: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(16px)",
                    border: "1px solid rgba(255,255,255,0.7)",
                  }}
                >
                  <div className="mt-0.5 shrink-0">{icons.checkCircle(item.color)}</div>
                  <span className="text-[15px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>{item.text}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          FINAL CTA — Night Sky
      ══════════════════════════════════════════════ */}
      <section className="relative overflow-hidden" style={{ marginTop: "-1px" }}>
        <NightSky />
        <StarField />
        <div className="relative z-10 px-6 sm:px-8 mx-auto max-w-[72rem] py-24 sm:py-32 text-center">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
              The kind of support that makes families say:{" "}<br className="hidden sm:block" />
              <span className="font-serif italic" style={{ color: "rgba(212,160,192,0.8)" }}>&ldquo;They actually cared.&rdquo;</span>
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Become a founding partner. Shape the future of grief support together.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/demo" className="btn-white">
                Become a partner
              </Link>
              <Link href="/enterprise" className="inline-flex items-center gap-2 text-[14px] font-medium transition-opacity hover:opacity-100" style={{ color: "rgba(255,255,255,0.45)" }}>
                For employers &amp; insurers {icons.arrowRight("rgba(255,255,255,0.35)")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
