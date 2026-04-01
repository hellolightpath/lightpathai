import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "For Providers | LightPathAI",
  description:
    "Join the LightPathAI provider network. 11,000+ providers already listed. Claim your profile, get matched with grieving families, and grow your practice with real demand intelligence.",
};

/* ── Inline SVG Icons ── */
const icons = {
  arrowRight: (color: string) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  search: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="9" cy="9" r="5.5" stroke={color} strokeWidth="1.3"/>
      <path d="M13 13l4 4" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
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
  chart: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <rect x="3" y="10" width="3" height="7" rx="1" stroke={color} strokeWidth="1.3"/>
      <rect x="8.5" y="6" width="3" height="11" rx="1" stroke={color} strokeWidth="1.3"/>
      <rect x="14" y="3" width="3" height="14" rx="1" stroke={color} strokeWidth="1.3"/>
    </svg>
  ),
  shield: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5l6 2.5v4c0 4.4-2.6 7.5-6 9-3.4-1.5-6-4.6-6-9V5l6-2.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 10l2 2 3.5-4" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  sparkle: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5l2 4.5 5 .7-3.6 3.5.8 5-4.2-2.2-4.2 2.2.8-5L3 7.7l5-.7 2-4.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  heart: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 17S3 12.5 3 7.5a4 4 0 017-2.6 4 4 0 017 2.6c0 5-7 9.5-7 9.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  globe: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.3"/>
      <path d="M3 10h14M10 3c2 2.5 3 5 3 7s-1 4.5-3 7c-2-2.5-3-5-3-7s1-4.5 3-7z" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
  zap: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M11 2.5L4.5 11h5l-1 6.5L15 9h-5l1-6.5z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  checkCircle: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.3"/>
      <path d="M7 10l2.5 2.5L13.5 8" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  bell: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2.5a5 5 0 00-5 5v3l-1.5 2h13L15 10.5v-3a5 5 0 00-5-5zM8.5 16.5a1.5 1.5 0 003 0" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  fileText: (color: string) => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M12 2.5H6c-.55 0-1 .45-1 1v13c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V5.5l-3-3z" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.5 9h5M7.5 11.5h5M7.5 14h3" stroke={color} strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  ),
};

export default function ProvidersPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32 text-center" data-hero-dark>
        <StarField />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="label" style={{ color: "rgba(255,255,255,0.35)" }}>
              For grief professionals
            </span>
          </Reveal>
          <Reveal delay={50}>
            <h1 className="mt-5 text-[2rem] sm:text-[3.75rem] font-serif font-normal leading-[1.04]" style={{ letterSpacing: "-0.04em" }}>
              <span className="text-white">The families who need you</span><br />
              <span className="text-shimmer">are already here.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-xl mx-auto text-[16px] sm:text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              LightPathAI matches grieving families with the right professional at the right moment &mdash; based on loss type, location, grief stage, and what they need right now.
            </p>
          </Reveal>
          <Reveal delay={250}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/demo" className="btn-white">
                Join the network
              </Link>
            </div>
            <div className="mt-6 flex items-center justify-center gap-6 text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              <span>Free to join</span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
              <span>No referral fees</span>
              <span className="w-1 h-1 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.2)" }} />
              <span>Reviewed within 2 business days</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── You Might Already Be Listed ── */}
      <section className="relative overflow-hidden py-16 sm:py-20" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 50%, #FDFCFB 100%)" }}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <div className="rounded-2xl p-8 sm:p-10" style={{ backgroundColor: "rgba(255,255,255,0.7)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.8)", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ backgroundColor: "rgba(138,142,229,0.08)" }}>
                {icons.search("#8A8EE5")}
              </div>
              <h2 className="text-[1.25rem] sm:text-[1.75rem] font-serif font-normal leading-[1.15]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>
                You might already be listed.
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed max-w-lg mx-auto" style={{ color: "var(--color-body)" }}>
                We&rsquo;ve seeded 11,000+ provider profiles from public directories &mdash; NPI Registry, OpenStreetMap, CMS, and curated lists. If your practice appears, you can claim your existing profile with ratings and location data already attached. No starting from scratch.
              </p>
              <Link href="/demo" className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold transition-all duration-300 hover:gap-3" style={{ color: "#8A8EE5" }}>
                Check if you&rsquo;re listed {icons.arrowRight("#8A8EE5")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── The Opportunity ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }}>
        <NightSky />
        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="label" style={{ color: "rgba(255,255,255,0.25)" }}>
              The landscape
            </span>
          </Reveal>
          <Reveal delay={50}>
            <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white" style={{ letterSpacing: "-0.035em" }}>
              3 million families lose someone every year.<br className="hidden sm:block" />
              Most never find the help they need.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { value: "57%", label: "of families feel completely unprepared for what follows a death", source: "AARP Grief Experience Study" },
              { value: "570 hrs", label: "of paperwork, calls, and decisions over 16 months on average", source: "EstateExec" },
              { value: "89%", label: "receive no follow-up support from any provider after the first week", source: "NFDA" },
              { value: "$15.5B", label: "in survivor benefits go unclaimed every year", source: "PBGC & SSA" },
            ].map((stat, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl p-6 text-left" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <p className="text-[2rem] font-serif font-normal text-white stat-glow" style={{ letterSpacing: "-0.02em" }}>{stat.value}</p>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{stat.label}</p>
                  <p className="mt-3 text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>Source: {stat.source}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Grief Specialties ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>
                We speak your language
              </span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                Matching goes deeper than &ldquo;therapist near me.&rdquo;
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                Families are matched to providers who specialize in their specific type of loss. Your expertise is what makes you the right fit &mdash; not just your zip code.
              </p>
            </Reveal>
          </div>

          {/* Grief specialties */}
          <Reveal delay={100}>
            <div className="mt-12 mb-14">
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 text-center" style={{ color: "var(--color-primary)", opacity: 0.5 }}>15 grief specialties</p>
              <div className="flex flex-wrap justify-center gap-2.5">
                {[
                  "Spouse / partner loss", "Parent loss", "Child loss", "Sibling loss",
                  "Sudden / traumatic loss", "Suicide loss", "Overdose loss",
                  "Anticipatory grief", "Complicated grief", "Dementia caregiving",
                  "Disenfranchised grief", "Pregnancy / infant loss",
                  "Military / line-of-duty loss", "Pet loss", "Multiple loss",
                ].map((spec) => (
                  <span key={spec} className="px-3.5 py-2 rounded-full text-[13px] font-medium" style={{ backgroundColor: "rgba(138,142,229,0.06)", color: "var(--color-foreground)", border: "1px solid rgba(138,142,229,0.08)" }}>
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>

          {/* 14 service categories */}
          <Reveal delay={150}>
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4 text-center" style={{ color: "var(--color-primary)", opacity: 0.5 }}>14 service categories</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  { name: "Mental health", color: "#8A8EE5" },
                  { name: "Legal", color: "#8F82CD" },
                  { name: "Financial advising", color: "#E59524" },
                  { name: "Funeral services", color: "#D4A0C0" },
                  { name: "Tax preparation", color: "#5A8A6E" },
                  { name: "Benefits specialists", color: "#8A8EE5" },
                  { name: "Home & property", color: "#E59524" },
                  { name: "Wellness & healing", color: "#D4A0C0" },
                  { name: "Estate cleanout", color: "#8F82CD" },
                  { name: "Digital legacy", color: "#5A8A6E" },
                  { name: "Support communities", color: "#8A8EE5" },
                  { name: "Administrative", color: "#E59524" },
                  { name: "Memorial & tribute", color: "#D4A0C0" },
                  { name: "Free resources", color: "#5A8A6E" },
                ].map((cat, i) => (
                  <div key={i} className="rounded-xl p-3.5 text-center" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                    <div className="w-2 h-2 rounded-full mx-auto mb-2.5" style={{ backgroundColor: cat.color }} />
                    <p className="text-[13px] font-medium" style={{ color: "var(--color-foreground)" }}>{cat.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── How It Works (5 steps) ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>How it works</span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                From signup to your first family.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 space-y-6">
            {[
              {
                step: "01",
                title: "Create your account or claim your profile",
                desc: "If your practice already appears in our 11,000+ provider directory, claim it in seconds \u2014 your location data and public ratings come with you. Otherwise, create a new profile in under 10 minutes.",
                color: "#8A8EE5",
                detail: "Account details, practice info, service category, and primary state.",
              },
              {
                step: "02",
                title: "Set your specialties and preferences",
                desc: "Select from 15 grief specialties, define your service areas, add languages spoken, and configure notification preferences \u2014 choose immediate, daily, or weekly alerts for 5 different event types.",
                color: "#E59524",
                detail: "Grief specialties, service areas, languages (15 options incl. ASL), availability status.",
              },
              {
                step: "03",
                title: "Get reviewed and approved",
                desc: "Every provider on LightPathAI is vetted. We review your credentials and approve your profile within 2 business days. This is how families trust who they meet on the platform.",
                color: "#8F82CD",
                detail: "Quality control \u2014 not friction. Families deserve a vetted network.",
              },
              {
                step: "04",
                title: "Start receiving matched requests",
                desc: "Our 6-dimension matching algorithm connects you with families based on loss type, grief phase, location, your specialization depth, and current availability. You choose which requests to respond to.",
                color: "#5A8A6E",
                detail: "Matching dimensions: quality (25%), specialization (25%), phase (15%), context (15%), behavioral (10%), availability (10%).",
              },
              {
                step: "05",
                title: "Publish content and grow your reputation",
                desc: "Write grief education guides and create service packages. Your content goes through editorial review, then appears in the platform \u2014 reaching families before they even send a request. Your content drives your referrals.",
                color: "#D4A0C0",
                detail: "Content lifecycle: draft \u2192 review \u2192 published. Performance tracking included.",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-2xl p-7 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.03)" }}>
                  <div className="flex items-start gap-5">
                    <span className="text-[15px] font-bold shrink-0 mt-0.5" style={{ color: item.color }}>{item.step}</span>
                    <div>
                      <h3 className="text-[17px] font-semibold" style={{ color: "var(--color-foreground)" }}>{item.title}</h3>
                      <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{item.desc}</p>
                      <p className="mt-3 text-[12px]" style={{ color: "var(--color-muted)" }}>{item.detail}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Intelligence Engine (dedicated section) ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }}>
        <NightSky />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <Reveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(138,142,229,0.65)" }}>
                Intelligence engine
              </span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white" style={{ letterSpacing: "-0.035em" }}>
                Know where the need is<br className="hidden sm:block" />
                <span style={{ color: "rgba(255,255,255,0.4)" }}>before it arrives.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                No other grief marketplace gives providers this level of demand intelligence. Built on CDC mortality data, Census ACS household composition, and platform behavioral signals &mdash; updated weekly.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: "Survivor population segments",
                desc: "Estimated bereaved spouses, parents, minor children, adult children, and peers in your county \u2014 derived from Census ACS household data + CDC NCHS mortality.",
                color: "#8A8EE5",
              },
              {
                title: "30-day demand forecast",
                desc: "Projected service demand per category using mortality trends + grief wave timing windows. Know when families will need you, not just that they exist.",
                color: "#E59524",
              },
              {
                title: "Milestone timeline",
                desc: "Clusters of grief milestones \u2014 1 month, 6 months, 1 year anniversaries \u2014 for recently bereaved families in your area. Demand spikes are predictable.",
                color: "#D4A0C0",
              },
              {
                title: "Supply vs. demand matrix",
                desc: "Side-by-side view of provider availability vs. family need across all 14 categories in your region. See exactly where the gaps are.",
                color: "#5A8A6E",
              },
              {
                title: "Cause-of-death distribution",
                desc: "Proportional visualization of death causes in your service area \u2014 sudden vs. expected, by category. Cause of death shapes the type of grief and the services needed.",
                color: "#8F82CD",
              },
              {
                title: "Community profile",
                desc: "Demographics, mortality counts, age distribution, and family structure of your service area. Context that helps you understand who you\u2019re serving.",
                color: "#8A8EE5",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="rounded-xl p-6 h-full" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: card.color }} />
                  <h3 className="text-[15px] font-semibold text-white mb-2">{card.title}</h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <p className="mt-10 text-center text-[11px]" style={{ color: "rgba(255,255,255,0.2)" }}>
              Data sources: CDC NCHS weekly mortality &middot; Census ACS 2022 &middot; California CDPH &middot; Platform behavioral signals &middot; Privacy threshold: counts &lt;10 suppressed per CDC standard
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Dashboard Features ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>Your dashboard</span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                Everything you need. Nothing you don&rsquo;t.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: icons.zap("#5A8A6E"),
                title: "Service requests",
                desc: "Filter by category, urgency, and city. See match context and 6-dimension scores. Families compare responses side-by-side before choosing. Urgency triage: crisis \u2192 urgent \u2192 standard \u2192 flexible.",
                color: "#5A8A6E",
              },
              {
                icon: icons.users("#E59524"),
                title: "Family relationships",
                desc: "Track active families, follow-ups, and care history. AI-generated care suggestions. Cross-referral service when a family needs expertise outside your specialty. Families are privacy-protected \u2014 you see only what they share.",
                color: "#E59524",
              },
              {
                icon: icons.fileText("#8F82CD"),
                title: "Content publishing",
                desc: "Write grief education guides and create service packages. Content goes through editorial review, then appears in the platform for families. Performance tracking shows how your content drives requests.",
                color: "#8F82CD",
              },
              {
                icon: icons.globe("#D4A0C0"),
                title: "Community landscape",
                desc: "Supply vs. demand across your region. Which specialties are underserved, where your practice can grow, and what services families are searching for.",
                color: "#D4A0C0",
              },
              {
                icon: icons.bell("#8A8EE5"),
                title: "Smart notifications",
                desc: "5 event types: new matched requests, family selected you, content review decisions, follow-up reminders, community intelligence updates. Choose immediate, daily, or weekly for each.",
                color: "#8A8EE5",
              },
              {
                icon: icons.shield("#8A8EE5"),
                title: "Privacy-first design",
                desc: "Families control what you see. Anonymized identifiers until families choose to share. Full audit trails on all data access. HIPAA-conscious architecture throughout.",
                color: "#8A8EE5",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl p-7 h-full" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.03)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${card.color}10` }}>
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold" style={{ color: "var(--color-foreground)" }}>{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* New provider onboarding */}
          <Reveal delay={200}>
            <div className="mt-14 rounded-2xl p-7 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "var(--color-primary)", opacity: 0.6 }}>New provider onboarding</p>
              <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                When you first join, your dashboard shows a guided 3-step checklist: complete your profile, publish your first guide, and get your personal referral link. The referral link lets you bring families directly to LightPathAI &mdash; and every family who joins through your link is automatically connected to your practice.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>Why providers join</span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                Grow your practice by doing meaningful work.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 space-y-4">
            {[
              { text: "Families are pre-qualified and matched to your specific grief specialty \u2014 no cold outreach, no generic leads", color: "#8A8EE5" },
              { text: "Demand intelligence no other marketplace has \u2014 CDC mortality data, survivor population estimates, milestone timing", color: "#E59524" },
              { text: "Free to join, free to use \u2014 no referral fees, no subscription costs during launch", color: "#5A8A6E" },
              { text: "Your services surface inside the family\u2019s Care Plan at the exact moment of need \u2014 not buried in a directory", color: "#8F82CD" },
              { text: "Content you publish builds your reputation and drives inbound requests before families even search", color: "#D4A0C0" },
              { text: "Personal referral link \u2014 bring families to LightPathAI and they\u2019re automatically connected to your practice", color: "#8A8EE5" },
              { text: "You control your notifications \u2014 5 event types, 3 frequency options (immediate, daily, weekly)", color: "#E59524" },
              { text: "Every provider is vetted \u2014 families trust the network because we review who\u2019s in it", color: "#5A8A6E" },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="mt-0.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
                  <p className="text-[15px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-24 sm:py-32 text-center">
        <StarField />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <Reveal>
            <div className="mb-10">
              {icons.heart("rgba(212,160,192,0.6)")}
            </div>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
              The families who need your help{" "}<br className="hidden sm:block" />
              <span className="font-serif italic" style={{ color: "rgba(212,160,192,0.8)" }}>shouldn&rsquo;t have to search for it.</span>
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Join the LightPathAI provider network. Claim your profile, get matched with families, and access demand intelligence no one else has.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Link href="/demo" className="btn-white">
                Join the network
              </Link>
              <Link href="/partners" className="inline-flex items-center gap-2 text-[14px] font-medium transition-opacity hover:opacity-100" style={{ color: "rgba(255,255,255,0.45)" }}>
                For hospice &amp; funeral homes {icons.arrowRight("rgba(255,255,255,0.35)")}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
