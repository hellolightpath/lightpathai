import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import guides from "@/data/seo-guides.json";
import stateGuides from "@/data/seo-guides-by-state.json";

type Guide = (typeof guides)[number];
type StateGuide = (typeof stateGuides)[number];

// Combine both guide sets for static generation
const allGuides: (Guide | StateGuide)[] = [...guides, ...stateGuides];

export async function generateStaticParams() {
  return allGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = allGuides.find((g) => g.slug === slug);
  if (!guide) return { title: "Guide Not Found" };
  return {
    title: guide.seo_title,
    description: guide.seo_description,
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = allGuides.find((g) => g.slug === slug);
  if (!guide) notFound();

  const stateNote = "state_note" in guide ? (guide as StateGuide).state_note : null;

  return (
    <>
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="section relative z-10 pt-36 sm:pt-44 pb-8 sm:pb-12 max-w-2xl mx-auto">
          <Reveal>
            <Link
              href="/guides"
              className="text-xs font-medium uppercase tracking-wider mb-6 inline-block"
              style={{ color: "var(--color-primary)" }}
            >
              &larr; All guides
            </Link>
            <h1
              className="text-[1.75rem] sm:text-[2.25rem] font-serif font-normal leading-[1.12]"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.03em" }}
            >
              {guide.title}
            </h1>
            {guide.description && (
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {guide.description}
              </p>
            )}
          </Reveal>
        </div>
      </section>

      <section className="section pb-20 max-w-2xl mx-auto">
        {/* State-specific note */}
        {stateNote && (
          <Reveal>
            <div
              className="p-5 rounded-xl mb-8 border"
              style={{
                backgroundColor: "rgba(138,142,229,0.04)",
                borderColor: "rgba(138,142,229,0.12)",
              }}
            >
              <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "var(--color-primary)" }}>
                State-specific information
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                {stateNote}
              </p>
            </div>
          </Reveal>
        )}

        {/* Overview */}
        {guide.overview && (
          <Reveal>
            <div className="mb-10">
              <p className="text-base leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                {guide.overview}
              </p>
            </div>
          </Reveal>
        )}

        {/* Steps */}
        {guide.steps && guide.steps.length > 0 && (
          <Reveal>
            <h2 className="text-lg font-serif mb-6" style={{ color: "var(--color-foreground)" }}>
              Steps
            </h2>
            <ol className="space-y-4">
              {guide.steps.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs font-medium text-white"
                    style={{ backgroundColor: "var(--color-primary)" }}
                  >
                    {i + 1}
                  </span>
                  <p className="text-sm leading-relaxed pt-1" style={{ color: "var(--color-foreground)" }}>
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </Reveal>
        )}

        {/* CTA */}
        <Reveal>
          <div
            className="mt-12 p-8 rounded-2xl text-center"
            style={{ backgroundColor: "var(--color-surface-alt)" }}
          >
            <p className="font-serif text-lg mb-2" style={{ color: "var(--color-foreground)" }}>
              This is 1 of 30+ tasks you may need to handle
            </p>
            <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--color-muted)" }}>
              LightPath creates a personalized care plan that tracks every task, deadline, and
              benefit for your specific situation. Free forever.
            </p>
            <Link
              href="https://dev-lightpath-app.pages.dev"
              className="inline-block px-8 py-3.5 rounded-full text-sm font-medium text-white transition-all hover:opacity-90"
              style={{ backgroundColor: "var(--color-primary)" }}
            >
              Start your care plan — free
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
