import Link from "next/link";
import Image from "next/image";
import { Reveal } from "@/components/reveal";
import { HorizonMark } from "@/components/horizon-mark";
import { PhaseExplorer } from "@/components/phase-explorer";

export default function HomePage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          HERO — visual, sparse. A single quiet atmosphere, a giant
          Horizon watermark, two lines of type. No body paragraph.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden min-h-[92vh]" style={{ marginTop: "-64px", background: "var(--color-surface)" }}>
        {/* A single, low-opacity lavender wash. No animation. */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 85% 15%, rgba(149,152,232,0.14), transparent 70%), radial-gradient(ellipse 55% 45% at 15% 90%, rgba(212,133,106,0.05), transparent 65%)",
          }}
        />

        {/* Large Horizon mark — watermark moment. Brand sign in the canvas. */}
        <div
          className="absolute pointer-events-none hidden md:block"
          aria-hidden="true"
          style={{ top: "14%", right: "8%", opacity: 0.10 }}
        >
          <HorizonMark size={360} theme="light" />
        </div>
        <div
          className="absolute pointer-events-none md:hidden"
          aria-hidden="true"
          style={{ top: "12%", right: "-8%", opacity: 0.08 }}
        >
          <HorizonMark size={220} theme="light" />
        </div>

        <div className="relative z-10 mx-auto max-w-[64rem] px-6 sm:px-10 pt-56 sm:pt-72 pb-28 sm:pb-36 text-center hero-animate">
          <p className="text-[11px] font-semibold uppercase mb-8" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
            The grief intelligence platform
          </p>
          <h1
            className="font-serif leading-[0.98] mx-auto"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              letterSpacing: "-0.045em",
              color: "var(--color-foreground)",
              fontWeight: 500,
              maxWidth: "20ch",
            }}
          >
            Care for the year
            <br />
            <span style={{ color: "var(--color-body)" }}>after a death.</span>
          </h1>
          <p
            className="mt-10 mx-auto font-serif italic"
            style={{
              fontSize: "clamp(1.25rem, 2.2vw, 1.625rem)",
              color: "var(--color-primary-deep)",
              letterSpacing: "-0.015em",
              fontWeight: 500,
              maxWidth: "32rem",
            }}
          >
            Just enough light to not fall.
          </p>
          <div className="mt-14">
            <Link href="/demo" className="btn-primary">When you&rsquo;re ready</Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CREDIBILITY ROW — quiet editorial credit. No logos, no big
          claims. Just: this work is grounded in clinical research at
          institutions you have heard of.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 pb-16 sm:pb-20">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 sm:gap-12 items-baseline" style={{ borderTop: "1px solid var(--color-border-light)", paddingTop: "2rem" }}>
            <p
              className="sm:col-span-4 text-[11px] uppercase"
              style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}
            >
              Built with clinicians at
            </p>
            <p
              className="sm:col-span-8 font-serif leading-[1.4]"
              style={{
                fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                color: "var(--color-foreground)",
                letterSpacing: "-0.015em",
                fontWeight: 500,
              }}
            >
              Stanford. Columbia. Yale. The Center for Prolonged Grief.
            </p>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE WEIGHT — three numbers, editorial scale.
          No cards. No glass. No icons. Just type.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ background: "#171520" }}>
        {/* Subtle atmospheric depth, no animation */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 60% 45% at 80% 25%, rgba(149,152,232,0.10), transparent 70%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-[72rem] px-6 sm:px-10 py-32 sm:py-44">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-10 sm:mb-14" style={{ color: "rgba(149,152,232,0.65)", letterSpacing: "0.22em" }}>
              The weight
            </p>
          </Reveal>
          <Reveal>
            <h2 className="text-[2rem] sm:text-[3.25rem] lg:text-[4rem] font-serif leading-[1.05] max-w-3xl" style={{ letterSpacing: "-0.04em", color: "#FFFFFF", fontWeight: 500 }}>
              When someone dies,
              <br />
              <span style={{ color: "rgba(255,255,255,0.45)" }}>their family is left alone.</span>
            </h2>
            <p className="mt-7 max-w-lg text-[16px] sm:text-[17px] leading-[1.7]" style={{ color: "rgba(255,255,255,0.55)" }}>
              No guide. No coordination. No safety net. Hundreds of tasks land while the world is loud and quiet at once.
            </p>
          </Reveal>

          <div className="mt-20 sm:mt-28 grid gap-14 sm:gap-16 sm:grid-cols-3 max-w-5xl">
            {[
              { num: "3M", body: "U.S. families face a death every year." },
              { num: "570 hrs", body: "of paperwork, calls, and decisions per loss. While in shock." },
              { num: "1 in 10", body: "develop prolonged grief disorder. Clinical condition. Largely untreated." },
            ].map((stat, i) => (
              <Reveal key={stat.num} delay={i * 90}>
                <div>
                  <p
                    className="font-serif leading-[0.95]"
                    style={{
                      fontSize: "clamp(3rem, 6vw, 4.5rem)",
                      letterSpacing: "-0.045em",
                      color: "#FFFFFF",
                      fontWeight: 500,
                    }}
                  >
                    {stat.num}
                  </p>
                  <p className="mt-5 text-[15px] leading-[1.7] max-w-[20rem]" style={{ color: "rgba(255,255,255,0.55)" }}>
                    {stat.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-20 text-[11px]" style={{ color: "rgba(255,255,255,0.30)", letterSpacing: "0.04em" }}>
            CDC NVSS 2024 · APA 2023 · DSM-5-TR (2022) · Columbia Center for Prolonged Grief
          </p>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          WHAT WE DO — four sparse typographic moments.
          No mockups, no bullets, no icons. Type only.
          ───────────────────────────────────────────────────────────── */}
      <section id="features" className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                For families
              </p>
              <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.04]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                Day one,
                <br />
                <span style={{ color: "var(--color-body)" }}>and every day after.</span>
              </h2>
            </div>
          </Reveal>

          <div className="mt-20 sm:mt-28">
            {[
              { num: "01", eyebrow: "Your Path",   title: "Knows what needs doing." },
              { num: "02", eyebrow: "Connect",     title: "Holds the emotional weight." },
              { num: "03", eyebrow: "Discover",    title: "Teaches you through it." },
              { num: "04", eyebrow: "Benefits",    title: "Finds the money you don't know is yours." },
              { num: "05", eyebrow: "Find Care",   title: "Connects you to the right help." },
              { num: "06", eyebrow: "Intelligence", title: "Adapts in real time." },
            ].map((item, i) => (
              <Reveal key={item.num} delay={i * 50}>
                <div
                  className="grid grid-cols-12 gap-6 sm:gap-12 items-baseline py-10 sm:py-14"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <p
                    className="col-span-2 sm:col-span-1 text-[12px] uppercase"
                    style={{ color: "var(--color-primary)", letterSpacing: "0.18em" }}
                  >
                    {item.num}
                  </p>
                  <p
                    className="col-span-10 sm:col-span-3 text-[12px] uppercase"
                    style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}
                  >
                    {item.eyebrow}
                  </p>
                  <h3
                    className="col-span-12 sm:col-span-8 font-serif leading-[1.05]"
                    style={{
                      fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)",
                      color: "var(--color-foreground)",
                      letterSpacing: "-0.03em",
                      fontWeight: 500,
                    }}
                  >
                    {item.title}
                  </h3>
                </div>
              </Reveal>
            ))}
            {/* Closing rule under final item */}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PHASE EXPLORER — interactive, type-led product tour.
          Five phases of grief; click through to see what LightPath
          surfaces at each. No mockups. Pure typography.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <div className="max-w-2xl mb-16 sm:mb-20">
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                The intelligence layer
              </p>
              <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.04]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                We adapt as you adapt.
              </h2>
              <p className="mt-7 text-[16px] sm:text-[17px] leading-[1.8] max-w-xl" style={{ color: "var(--color-body)" }}>
                The platform reads what is in front of you and reshapes itself. You never pick a mode. We do not ask how you are feeling. Click through five phases to see what changes, and what stays steady.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <PhaseExplorer />
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MANIFESTO — what we will never do.
          Modeled on Modern Loss's refusal-as-identity move. Brand-canon
          non-negotiables made public. No competitor does this.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-4">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-coral)", letterSpacing: "0.22em" }}>
                  What we refuse
                </p>
                <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3rem] font-serif leading-[1.05]" style={{ letterSpacing: "-0.04em", color: "var(--color-foreground)", fontWeight: 500 }}>
                  We will never.
                </h2>
                <p className="mt-7 text-[16px] leading-[1.8] max-w-sm" style={{ color: "var(--color-body)" }}>
                  The brand is defined as much by what it refuses as by what it builds. These are non-negotiable.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-8">
              <Reveal delay={120}>
                <ul>
                  {[
                    "Ask how you are feeling.",
                    "Gamify grief.",
                    "Sell your data.",
                    "Simulate the person you lost.",
                    "Gate the crisis line.",
                  ].map((line, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-12 gap-5 sm:gap-8 items-baseline py-7 sm:py-8"
                      style={{ borderTop: "1px solid var(--color-border-light)" }}
                    >
                      <span
                        className="col-span-2 sm:col-span-1 text-[11px] uppercase"
                        style={{ color: "var(--color-coral)", letterSpacing: "0.18em" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="col-span-10 sm:col-span-11 font-serif text-[1.25rem] sm:text-[1.5rem] lg:text-[1.75rem] leading-[1.25]"
                        style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em", fontWeight: 500 }}
                      >
                        {line}
                      </span>
                    </li>
                  ))}
                  <li style={{ borderTop: "1px solid var(--color-border-light)", height: 0 }} aria-hidden="true" />
                </ul>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOUNDER — quiet portrait + signed line.
          The whole point of this brand. No SaaS card.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 py-28 sm:py-40">
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-12 sm:gap-16 items-start">
            <div className="sm:col-span-4">
              <Reveal>
                <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ borderRadius: "2px" }}>
                  <Image
                    src="/sara-founder.jpg"
                    alt="Sara Tashakorinia, founder of LightPath"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 320px"
                  />
                </div>
              </Reveal>
            </div>
            <div className="sm:col-span-8 sm:pt-6">
              <Reveal delay={120}>
                <p className="text-[11px] font-semibold uppercase mb-8" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                  From the founder
                </p>
                <p
                  className="font-serif italic text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] leading-[1.25]"
                  style={{ letterSpacing: "-0.02em", color: "var(--color-foreground)", fontWeight: 500 }}
                >
                  &ldquo;On the evening of our first wedding anniversary, I lost my husband. LightPath was built from that.&rdquo;
                </p>
                <p className="mt-8 text-[12px] uppercase" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                  Sara Tashakorinia, founder
                </p>
                <Link
                  href="/our-story"
                  className="mt-10 inline-flex items-center gap-2 text-[14px] font-medium transition-colors duration-300 hover:opacity-70"
                  style={{ color: "var(--color-foreground)" }}
                >
                  Read the full story
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FOR PARTNERS — one quiet row, no card grid.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-sage)", letterSpacing: "0.22em" }}>
                  For partners and organizations
                </p>
                <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3rem] font-serif leading-[1.05]" style={{ letterSpacing: "-0.035em", color: "var(--color-foreground)", fontWeight: 500 }}>
                  Embedded at the point of loss.
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-3">
              <Reveal delay={120}>
                <p className="text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--color-body)" }}>
                  Hospice. Funeral homes. Employers. Life insurance carriers. We extend your care into the months and years that follow, with the structure your team can&rsquo;t deliver alone.
                </p>
                <Link
                  href="/enterprise"
                  className="mt-9 inline-flex items-center gap-2 text-[14px] font-medium transition-colors duration-300 hover:opacity-70"
                  style={{ color: "var(--color-foreground)" }}
                >
                  See how partnership works
                  <span aria-hidden="true">→</span>
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FAQ — plain text, no card chrome.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[56rem] px-6 sm:px-10 py-28 sm:py-36">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-10" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              Questions
            </p>
          </Reveal>
          <div>
            {faqTeaser.map((f, i) => (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-12 py-9 sm:py-11"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <h3
                    className="sm:col-span-5 text-[18px] sm:text-[20px] font-serif leading-[1.25]"
                    style={{ color: "var(--color-foreground)", letterSpacing: "-0.015em", fontWeight: 500 }}
                  >
                    {f.q}
                  </h3>
                  <p className="sm:col-span-7 text-[15px] sm:text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
          <div className="mt-12">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-[14px] font-medium transition-colors duration-300 hover:opacity-70"
              style={{ color: "var(--color-foreground)" }}
            >
              All questions
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          FINAL CTA — Horizon mark + one line + one button.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[48rem] px-6 sm:px-10 py-32 sm:py-48 text-center">
          <Reveal>
            <div className="mb-12 flex justify-center">
              <HorizonMark size={56} theme="light" />
            </div>
            <h2
              className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif leading-[1.04]"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}
            >
              One small step today.
            </h2>
            <p className="mt-6 text-[18px] sm:text-[20px] leading-[1.7]" style={{ color: "var(--color-body)" }}>
              We&rsquo;ll be here when you&rsquo;re ready.
            </p>
            <Link href="/demo" className="btn-primary mt-12">
              When you&rsquo;re ready
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

/* ─────────────────────────────────────────────────────────────
   FAQ teaser data. Tight, declarative, no em dashes.
   ───────────────────────────────────────────────────────────── */
const faqTeaser = [
  {
    q: "Do I need documents to start?",
    a: "No. Start with what you know. Add documents when you are ready.",
  },
  {
    q: "Is this only for recent loss?",
    a: "No. Whether it has been days or years, we begin with what matters now.",
  },
  {
    q: "What is free, and what is paid?",
    a: "Your Care Plan, task guidance, and Inner Light are free. Premium adds drafted documents, live human review, and benefits filing.",
  },
  {
    q: "How is this different from a grief app or a chatbot?",
    a: "Grief apps offer reflection. Chatbots give general answers. We build a structured plan for your specific situation, with real forms, real deadlines, and real people.",
  },
];
