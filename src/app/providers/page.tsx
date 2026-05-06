import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { HorizonMark } from "@/components/horizon-mark";

export const metadata: Metadata = {
  title: "For Service Providers | LightPathAI",
  description:
    "For the therapists, attorneys, financial planners, funeral directors, and end-of-life doulas who serve grieving families. Qualified referrals, full context, and outcome data, delivered when it matters.",
};

export default function ProvidersPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          HERO
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[88vh]" style={{ marginTop: "-64px", background: "var(--color-surface)" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 70% 30%, rgba(149,152,232,0.08), transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, rgba(122,158,122,0.07), transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[72rem] px-6 sm:px-10 pt-52 sm:pt-64 pb-24 sm:pb-32">
          <div className="max-w-3xl">
            <Reveal>
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                For service providers
              </p>
              <h1 className="text-[2.5rem] sm:text-[3.75rem] lg:text-[4.5rem] font-serif leading-[1.0]" style={{ letterSpacing: "-0.045em", color: "var(--color-foreground)", fontWeight: 500 }}>
                The families who need you
                <br />
                <span style={{ color: "var(--color-body)" }}>are already on the platform.</span>
              </h1>
              <p className="mt-9 max-w-xl text-[17px] sm:text-[18px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                For therapists, attorneys, financial planners, funeral directors, and end-of-life doulas. Qualified referrals at the right moment, full context before session one, real outcome data for your practice.
              </p>
              <div className="mt-11 flex flex-col sm:flex-row gap-5 items-start sm:items-center">
                <Link href="/demo" className="btn-primary">
                  Join the network
                </Link>
                <span className="text-[14px]" style={{ color: "var(--color-muted)" }}>
                  Free to list. 10 to 14 percent on bookings.
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          SIX CAPABILITIES — typographic rows, deck slide 8.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                What you get
              </p>
              <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.04]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                Built for the way your practice
                <br />
                <span style={{ color: "var(--color-body)" }}>actually works.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-20 sm:mt-28">
            {[
              {
                num: "01",
                eyebrow: "Qualified referrals",
                title: "Not cold leads.",
                body: "Families matched to your specialty at the right moment. Loss type, life stage, location, what they have already tried. Warm handoffs. No discovery calls to qualify.",
              },
              {
                num: "02",
                eyebrow: "Full context",
                title: "Before session one.",
                body: "Skip intake. Weeks of background, screening scores, focus areas, and current emotional state delivered to you before the family even arrives. You spend session one helping, not interviewing.",
              },
              {
                num: "03",
                eyebrow: "Visibility that fits",
                title: "Surface during education, not ads.",
                body: "Families discover you while they are reading the article that names what they are feeling. Your profile lives next to the framework you actually practice. No banner ads. No pay-to-play ranking.",
              },
              {
                num: "04",
                eyebrow: "Outcome tracking",
                title: "Track what your work does.",
                body: "PHQ-9, PCL-5, PG-13-R over time, with the family's consent. See your impact measurably. Build the evidence your discipline has always asked for.",
              },
              {
                num: "05",
                eyebrow: "Demand intelligence",
                title: "Know what is needed in your area.",
                body: "Real-time view of which specialties families in your area are searching for, and where the supply gaps are. Move into adjacent practice with data, not guesswork.",
              },
              {
                num: "06",
                eyebrow: "Long arc",
                title: "Stay connected through milestones.",
                body: "Anniversaries. Tax season. The first holiday. Setbacks the family did not see coming. We surface the moment, you decide whether to reach out.",
              },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 50}>
                <div
                  className="grid grid-cols-12 gap-6 sm:gap-10 items-baseline py-10 sm:py-12"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <p
                    className="col-span-2 sm:col-span-1 text-[12px] uppercase"
                    style={{ color: "var(--color-primary)", letterSpacing: "0.18em" }}
                  >
                    {item.num}
                  </p>
                  <div className="col-span-10 sm:col-span-6">
                    <p className="text-[11px] uppercase mb-2.5" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
                      {item.eyebrow}
                    </p>
                    <h3
                      className="text-[1.4rem] sm:text-[1.875rem] lg:text-[2.125rem] font-serif leading-[1.1]"
                      style={{ letterSpacing: "-0.025em", color: "var(--color-foreground)", fontWeight: 500 }}
                    >
                      {item.title}
                    </h3>
                  </div>
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
          22 CATEGORIES — quiet enumeration, no card chrome.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-sage)", letterSpacing: "0.22em" }}>
                The marketplace
              </p>
              <h2 className="text-[2rem] sm:text-[3rem] font-serif leading-[1.05]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                Twenty-two grief-aware categories.
              </h2>
              <p className="mt-7 text-[16px] sm:text-[17px] leading-[1.8] max-w-xl" style={{ color: "var(--color-body)" }}>
                The professional roster families need across the long arc of loss. Not generic referrals. Vetted for grief literacy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 max-w-5xl">
              {[
                "Grief therapists",
                "Estate attorneys",
                "Financial planners",
                "Funeral directors",
                "End-of-life doulas",
                "Hospice and palliative care",
                "Children's grief specialists",
                "Tax preparation",
                "Insurance and benefits",
                "Probate specialists",
                "Estate cleanout",
                "Digital legacy",
                "Memorial and tribute",
                "Veterans services",
                "Pet loss",
                "Faith-based support",
                "Wellness and healing",
                "Home and property",
                "Administrative help",
                "Support communities",
                "Employer programs",
                "Free resources",
              ].map((cat) => (
                <p
                  key={cat}
                  className="text-[14px] sm:text-[15px] py-3 leading-[1.5]"
                  style={{ color: "var(--color-foreground)", borderTop: "1px solid var(--color-border-light)" }}
                >
                  {cat}
                </p>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          ECONOMICS — the deal, plainly stated.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 py-28 sm:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                  The deal
                </p>
                <h2 className="text-[2rem] sm:text-[2.75rem] font-serif leading-[1.05]" style={{ letterSpacing: "-0.035em", color: "var(--color-foreground)", fontWeight: 500 }}>
                  Plain and aligned.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-3">
              <Reveal delay={120}>
                <div className="grid grid-cols-2 gap-x-10 gap-y-10 max-w-md">
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>To list</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>Free</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>On bookings</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>10 to 14 percent</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>Premium tools</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>$49 per month</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase mb-2" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>What that includes</p>
                    <p className="text-[15px]" style={{ color: "var(--color-foreground)" }}>Demand intel, outcome tracking, profile analytics</p>
                  </div>
                </div>
                <p className="mt-10 text-[14px] leading-[1.75] max-w-md" style={{ color: "var(--color-muted)" }}>
                  No exclusivity. No pay-to-play ranking. Families pick the professional they want.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[48rem] px-6 sm:px-10 py-28 sm:py-40 text-center">
          <Reveal>
            <div className="mb-10 flex justify-center">
              <HorizonMark size={44} theme="light" />
            </div>
            <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3rem] font-serif leading-[1.05]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              Help families find the right help.
            </h2>
            <Link href="/demo" className="btn-primary mt-12">
              Join the network
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
