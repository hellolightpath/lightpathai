import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "For Providers | LightPathAI",
  description:
    "Join the LightPathAI provider network. Connect with grieving families who need your expertise — matched by loss type, location, and grief stage.",
};

/* ── Inline SVG Icons ── */
const icons = {
  arrowRight: (color: string) => (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
};

export default function ProvidersPage() {
  return (
    <>
      {/* ── Hero (Night Sky) ── */}
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
              LightPathAI matches grieving families with the right professional at the right moment — based on their loss type, location, grief stage, and what they need right now.
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
              <span>Launch in days</span>
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

      {/* ── Who We Serve ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>
                14 service categories
              </span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                Whatever your expertise, families need it.
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                LightPathAI connects families with professionals across every category of post-loss need.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
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
              <Reveal key={i} delay={i * 40}>
                <div className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ backgroundColor: cat.color }} />
                  <p className="text-[14px] font-medium" style={{ color: "var(--color-foreground)" }}>{cat.name}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>
              How it works
            </span>
          </Reveal>
          <Reveal delay={50}>
            <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Families find you. Not the other way around.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Create your profile",
                desc: "Add your credentials, specialties, service areas, and the types of loss you specialize in. Takes under 10 minutes.",
                color: "#8A8EE5",
              },
              {
                step: "02",
                title: "Get matched",
                desc: "Our 6-dimension matching algorithm connects you with families based on loss type, location, grief stage, and your specific expertise.",
                color: "#E59524",
              },
              {
                step: "03",
                title: "Provide care",
                desc: "Respond to service requests, manage family relationships, and track outcomes through your dedicated provider dashboard.",
                color: "#5A8A6E",
              },
            ].map((item, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="text-left rounded-2xl p-8" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)" }}>
                  <span className="text-[13px] font-semibold" style={{ color: item.color }}>{item.step}</span>
                  <h3 className="mt-3 text-[18px] font-semibold" style={{ color: "var(--color-foreground)" }}>{item.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--color-body)" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Provider Dashboard ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>
                Your dashboard
              </span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                Built for the way you actually work.
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                A dedicated dashboard designed for grief professionals — not repurposed CRM software.
              </p>
            </Reveal>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: icons.chart("#8A8EE5"),
                title: "Practice intelligence",
                desc: "Survivor population data, grief wave forecasts, and demand signals for your service area. Know where the need is before it arrives.",
                color: "#8A8EE5",
              },
              {
                icon: icons.users("#E59524"),
                title: "Family relationships",
                desc: "Track active families, follow-ups, and care history. See each family's grief stage, tasks, and what they need from you.",
                color: "#E59524",
              },
              {
                icon: icons.zap("#5A8A6E"),
                title: "Service requests",
                desc: "Filter, sort, and respond to incoming requests. Families compare responses side-by-side before choosing a provider.",
                color: "#5A8A6E",
              },
              {
                icon: icons.sparkle("#8F82CD"),
                title: "Content & guides",
                desc: "Publish grief education guides and service packages. Your expertise reaches families before they even send a request.",
                color: "#8F82CD",
              },
              {
                icon: icons.globe("#D4A0C0"),
                title: "Community landscape",
                desc: "See supply vs. need in your region. Understand which services are underserved and where your practice can grow.",
                color: "#D4A0C0",
              },
              {
                icon: icons.shield("#8A8EE5"),
                title: "Privacy-first design",
                desc: "Families control what you see. You only access information they choose to share. HIPAA-conscious architecture throughout.",
                color: "#8A8EE5",
              },
            ].map((card, i) => (
              <Reveal key={i} delay={i * 80}>
                <div className="rounded-2xl p-7 h-full" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02), 0 4px 16px rgba(0,0,0,0.03), 0 12px 40px rgba(0,0,0,0.04)" }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: `${card.color}10` }}>
                    {card.icon}
                  </div>
                  <h3 className="mt-4 text-[17px] font-semibold" style={{ color: "var(--color-foreground)" }}>{card.title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Join ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>
                Why providers join
              </span>
            </Reveal>
            <Reveal delay={50}>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                Grow your practice by doing meaningful work.
              </h2>
            </Reveal>
          </div>

          <div className="mt-16 space-y-4">
            {[
              { text: "Families are pre-qualified and matched to your expertise — no cold outreach", color: "#8A8EE5" },
              { text: "Intelligent matching across 6 dimensions: quality, specialization, grief phase, context, behavior, and availability", color: "#E59524" },
              { text: "Free to join, free to use — no referral fees, no subscription costs during launch", color: "#5A8A6E" },
              { text: "Dedicated dashboard with practice intelligence, demand signals, and family management", color: "#8F82CD" },
              { text: "Publish grief education content that reaches families before they send a request", color: "#D4A0C0" },
              { text: "Integrated with the family's Care Plan — your services appear at the moment of need", color: "#8A8EE5" },
              { text: "Privacy-first: families control what information you see, with full audit trails", color: "#E59524" },
              { text: "Email notifications when new families match your profile — respond on your schedule", color: "#5A8A6E" },
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

      {/* ── CTA (Night Sky) ── */}
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
              Join the LightPathAI provider network. Be matched with families who need exactly what you offer.
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
