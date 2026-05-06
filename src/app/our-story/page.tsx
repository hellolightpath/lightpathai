import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "Our Story | LightPathAI",
  description:
    "On the evening of her first wedding anniversary, our founder Sara lost her husband. LightPath was built from that loss. So no one navigates what comes after alone.",
};

export default function OurStoryPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section data-hero-dark className="relative overflow-hidden min-h-[90vh]" style={{ marginTop: "-64px" }}>
        <NightSky />
        <StarField />
        <div className="section relative z-10 flex flex-col items-center text-center pt-52 sm:pt-64 pb-24 sm:pb-32">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(149,152,232,0.8)" }}>
              From the founder
            </p>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[3.75rem] font-serif font-normal leading-[1.06] max-w-3xl text-white" style={{ letterSpacing: "-0.04em" }}>
              On the evening of our first<br />wedding anniversary,<br />
              <span style={{ color: "rgba(255,255,255,0.6)" }}>I lost my husband.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── The Story ── */}
      <section className="relative overflow-hidden">
        <div className="section">
          <div className="mx-auto max-w-[40rem]">

            {/* Our Founding Story */}
            <Reveal>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "#9598E8" }}>
                Our founding story
              </p>
              <p className="mt-6 text-[1.35rem] sm:text-[1.5rem] font-serif leading-[1.35]" style={{ color: "#3D3630", letterSpacing: "-0.02em" }}>
                LightPath was built from a single, lived experience.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.7]" style={{ color: "#5C564F" }}>
                <p>
                  On the evening of her first wedding anniversary, our founder Sara lost her husband
                  in a tragic car accident. In an instant, the future she had imagined disappeared.
                </p>

                <p>
                  Beyond grief, there was everything that comes with loss. Paperwork. Phone calls.
                  Decisions. Hours and hours of administrative work, while in shock. Doing the hard
                  while dealing with the impossible.
                </p>
              </div>
            </Reveal>

            {/* Sara's first-person reflection. Editorial pull-quote, no orange decoration. */}
            <Reveal>
              <blockquote className="my-14 sm:my-16 max-w-[36rem]">
                <div
                  className="space-y-5 font-serif italic text-[1.25rem] sm:text-[1.5rem] leading-[1.45]"
                  style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em", fontWeight: 500 }}
                >
                  <p>
                    &ldquo;I remember any day dealing with all of it felt like hell. It was so heavy
                    that I just wanted it to be over. Every day that passed, every week that passed,
                    felt like I was closer to a survival line.
                  </p>
                  <p>
                    Sometimes I just wanted to open my eyes and feel like a year had already passed.
                    Even the smallest tasks were painful and hard to do.&rdquo;
                  </p>
                </div>
              </blockquote>
            </Reveal>

            <Reveal>
              <div className="space-y-5 text-[17px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                <p>
                  Slowly, through connection, through cherishing stories, through the courage to keep
                  living, Sara found her way back. Not over it. Through it. With it.
                </p>
                <p>
                  Along the way, she met countless others carrying the same weight. People facing grief
                  while also navigating what comes after a death. Doing the hard while dealing with the
                  impossible. That is when she knew there had to be a better way.
                </p>
                <p>
                  LightPath was built from that realization. A system that helps people navigate what
                  comes after loss with more clarity, more compassion, and a path forward when
                  everything feels overwhelming.
                </p>
              </div>
            </Reveal>

            {/* Founder attribution: editorial credit line, no orange ring photo. */}
            <Reveal>
              <div className="mt-20 sm:mt-24 pt-12 grid grid-cols-1 sm:grid-cols-12 gap-8 sm:gap-12 items-start" style={{ borderTop: "1px solid var(--color-border-light)" }}>
                <div className="sm:col-span-3">
                  <div className="relative aspect-[4/5] w-full overflow-hidden" style={{ borderRadius: "2px" }}>
                    <Image
                      src="/sara-founder.jpg"
                      alt="Sara Tashakorinia, founder of LightPath"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 240px"
                    />
                  </div>
                </div>
                <div className="sm:col-span-9 sm:pt-1">
                  <p className="text-[12px] uppercase mb-2" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                    Sara Tashakorinia
                  </p>
                  <p className="text-[12px] uppercase mb-6" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
                    Founder &amp; CEO
                  </p>
                  <p className="text-[15px] leading-[1.75] max-w-md" style={{ color: "var(--color-body)" }}>
                    Built from lived experience. Designed with the empathy only someone who has been there can bring.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          WHAT WE BELIEVE — editorial values, no card stack.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              What we believe
            </p>
            <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.25rem] font-serif leading-[1.06] max-w-2xl" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              The principles we built this on.
            </h2>
          </Reveal>
          <div className="mt-20 sm:mt-24">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 60}>
                <div
                  className="grid grid-cols-12 gap-6 sm:gap-12 items-baseline py-9 sm:py-11"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <h3
                    className="col-span-12 sm:col-span-5 font-serif text-[1.25rem] sm:text-[1.5rem] leading-[1.2]"
                    style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em", fontWeight: 500 }}
                  >
                    {v.title}
                  </h3>
                  <p className="col-span-12 sm:col-span-7 text-[15px] sm:text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          MISSION CTA — quiet, single line.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[48rem] px-6 sm:px-10 py-32 sm:py-44 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              Our mission
            </p>
            <h2 className="text-[2rem] sm:text-[2.75rem] lg:text-[3rem] font-serif leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              No one should navigate what comes after loss alone.
            </h2>
            <Link href="/demo" className="btn-primary mt-12">
              When you&rsquo;re ready
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const values = [
  {
    title: "We lead with empathy, not efficiency.",
    description: "Every screen, every word, every interaction is designed for someone on their worst day.",
  },
  {
    title: "We carry what we can.",
    description: "The paperwork, the logistics, the administrative mountain. That weight shouldn\u2019t fall on someone who\u2019s already carrying everything they can hold.",
  },
  {
    title: "We believe in the light.",
    description: "The name isn\u2019t accidental. Even in the darkest chapter, there is a path forward.",
  },
  {
    title: "We protect what\u2019s sacred.",
    description: "People trust us with their most sensitive documents and their most vulnerable moments. That trust is the foundation.",
  },
  {
    title: "We build for the person, not the persona.",
    description: "No two losses are the same. Our product adapts to real people in real situations.",
  },
];
