import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "Our Story | LightPathAI",
  description:
    "LightPathAI was born from a deeply personal journey. Built to bring light to life's darkest moments.",
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
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "rgba(229,149,36,0.8)" }}>
              Forged from darkness. Built with purpose.
            </p>
            <h1 className="text-[2rem] sm:text-[3rem] lg:text-[3.75rem] font-serif font-normal leading-[1.04] max-w-3xl text-white" style={{ letterSpacing: "-0.04em" }}>
              We are on a mission to bring light to the darkest moments of life.
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
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "var(--color-primary)" }}>
                Our Founding Story
              </p>
              <p className="mt-6 text-[1.35rem] sm:text-[1.5rem] font-serif leading-[1.35]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>
                LightPathAI was born from a deeply personal journey.
              </p>
            </Reveal>

            <Reveal>
              <div className="mt-10 space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                <p>
                  On the evening of her first wedding anniversary, our founder Sara lost her husband
                  in a tragic car accident. In an instant, her world as she knew it disappeared. And
                  as life often shows us, when it rains, it pours. Grief did not come alone. It
                  washed away her sense of self and the future she had imagined. Work felt distant,
                  the world felt quiet, and even the strongest parts of her felt shattered.
                </p>

                <p>
                  Beyond the emotional burden of grief, there was everything that comes with loss.
                </p>
              </div>
            </Reveal>

            {/* Sara's first-person quote */}
            <Reveal>
              <blockquote
                className="my-10 py-6 pl-6 pr-4"
                style={{
                  borderLeft: "3px solid #E59524",
                  background: "linear-gradient(135deg, rgba(229,149,36,0.03), transparent)",
                  borderRadius: "0 12px 12px 0",
                }}
              >
                <div className="space-y-4 text-[17px] font-serif italic leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                  <p>
                    &ldquo;I remember any day dealing with all of it felt like hell. It was so heavy
                    that I just wanted it to be over. Every day that passed, every week that passed,
                    felt like I was closer to a survival line.
                  </p>
                  <p>
                    Sometimes I just wanted to open my eyes and feel like a year had already passed.
                    A year where I would not have to deal with anything that forced me to think about
                    his death again. Even the smallest tasks were painful and hard to do.&rdquo;
                  </p>
                </div>
                <p className="mt-4 text-[14px] font-semibold not-italic" style={{ color: "#E59524" }}>
                  &mdash; Sara
                </p>
              </blockquote>
            </Reveal>

            <Reveal>
              <div className="space-y-5 text-[17px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                <p>
                  Through connection, cherishing stories, and the courage to keep living, Sara slowly
                  found her way back to the light. New relationships, rediscovery, and the simple act
                  of sharing truth helped her feel whole again. She learned to celebrate life not in
                  spite of its fragility, but because of it.
                </p>
                <p>
                  Along that journey, she met countless others carrying the same weight. People facing
                  grief while also carrying the weight of everything that comes with losing a loved one.
                  Doing the hard while dealing with the impossible. That is when she knew there had to
                  be a better way.
                </p>
                <p>
                  LightPathAI was created from that realization. A way to make those days lighter.
                  A system that helps people navigate what comes after loss with more clarity, more
                  support, and a path forward when everything feels overwhelming.
                </p>
              </div>
            </Reveal>

            {/* Founder attribution */}
            <Reveal variant="scale">
              <div className="mt-20 pt-12" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                <div className="flex flex-col items-center text-center">
                  <div className="relative h-24 w-24 rounded-full overflow-hidden"
                    style={{
                      boxShadow: "0 8px 24px rgba(229,149,36,0.25), 0 2px 8px rgba(229,149,36,0.15)",
                      border: "3px solid rgba(255,255,255,0.8)",
                    }}>
                    <Image
                      src="/sara-founder.jpg"
                      alt="Sara Tashakorinia, Founder & CEO of LightPathAI"
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <p className="mt-5 text-[17px] font-semibold" style={{ color: "var(--color-foreground)" }}>Sara Tashakorinia</p>
                  <p className="text-[14px] mt-1" style={{ color: "var(--color-primary)" }}>Founder and CEO</p>
                  <p className="mt-3 text-[14px] max-w-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                    Built from lived experience. Designed with the empathy only someone who&rsquo;s been there can bring.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="relative bg-section-subtle">
        <div className="section">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] font-serif font-normal leading-[1.08] text-center" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Our Values
            </h2>
          </Reveal>
          <div className="mt-14 mx-auto max-w-[40rem] space-y-8">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 100}>
                <div className="py-6" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                  <h3 className="font-serif text-[1.1rem] font-normal" style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>{v.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed" style={{ color: "var(--color-body)" }}>{v.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission CTA ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, transparent, rgba(245,243,250,0.5))" }}>
        <div className="section relative z-10 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-6" style={{ color: "var(--color-primary)" }}>Our mission</p>
            <h2 className="text-[1.5rem] sm:text-[2rem] lg:text-[2.5rem] font-serif font-normal leading-[1.15] mx-auto max-w-3xl" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              To ensure that no one navigates life&rsquo;s hardest transitions alone. And that
              everyone has a path that leads them back to the light.
            </h2>
            <Link href="/demo" className="btn-primary mt-10">
              Get early access
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
