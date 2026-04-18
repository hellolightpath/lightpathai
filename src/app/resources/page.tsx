import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { BlogListing } from "@/components/blog-listing";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import insuranceGuides from "@/data/insurance-claims-guides.json";

export const metadata: Metadata = {
  title: "Resources | LightPathAI",
  description:
    "Expert guidance on navigating loss: immediate steps, financial benefits, legal matters, workplace support, emotional wellness, and family relationships. Resources from LightPathAI.",
};

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden" style={{ marginTop: "-64px" }}>
      <WarmGlow />

      <div className="relative z-10 px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <Reveal>
            <div className="text-center mb-8 sm:mb-10">
              <p
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide mb-6"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  color: "#5B5F9E",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A8EE5" }} />
                Resources
              </p>
              <h1
                className="text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif font-normal leading-[1.06]"
                style={{ letterSpacing: "-0.04em", color: "#1C1C2E" }}
              >
                Guidance for life&rsquo;s{" "}
                <br className="hidden sm:block" />
                hardest moments
              </h1>
              <p
                className="mt-4 text-[17px] leading-relaxed max-w-lg mx-auto"
                style={{ color: "#6B6E8D" }}
              >
                Practical advice, financial insights, and wellness tools to help you
                navigate loss with clarity and compassion.
              </p>
            </div>
          </Reveal>

          {/* Soft divider */}
          <div className="mx-auto max-w-xs mb-6" style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(138,142,229,0.15), transparent)" }} />

          {/* Blog listing with category filtering */}
          <BlogListing posts={blogPosts} categories={blogCategories} />

          {/* ── Soft divider ── */}
          <div className="mx-auto max-w-xs my-16" style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(138,142,229,0.15), transparent)" }} />

          {/* ── Step-by-Step Guides ── */}
          <Reveal>
            <div className="text-center mb-10">
              <p
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide mb-5"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.5)",
                  color: "#5B5F9E",
                }}
              >
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A8EE5" }} />
                Step-by-step guides
              </p>
              <h2
                className="text-[1.75rem] sm:text-[2.25rem] font-serif font-normal leading-[1.08]"
                style={{ letterSpacing: "-0.035em", color: "#1C1C2E" }}
              >
                Practical task guides
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed max-w-md mx-auto" style={{ color: "#6B6E8D" }}>
                167 free guides covering every task families face after a loss.
                Written with care. No jargon.
              </p>
            </div>
          </Reveal>

          {/* ── Popular Guides ── */}
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {[
                { slug: "get-death-certificates-you-ll-need-multiple", title: "Get Death Certificates", desc: "How many to order, where to get them, and why you need 10-15 copies." },
                { slug: "arrange-for-body-transportation", title: "Arrange Body Transportation", desc: "What to do in the first hours. Funeral home, coroner, or hospital." },
                { slug: "tell-the-people-who-need-to-know-right-away", title: "Tell People Who Need to Know", desc: "Who to call first, what to say, and how to manage the news." },
                { slug: "look-for-final-wishes-instructions", title: "Look for Final Wishes", desc: "Where to find instructions about burial, cremation, and memorial preferences." },
                { slug: "decide-between-burial-and-cremation", title: "Burial vs. Cremation", desc: "Understanding your options, costs, and what matters most." },
                { slug: "begin-a-record-of-expenses", title: "Track Your Expenses", desc: "Why keeping records now saves you time and money later." },
              ].map((guide) => (
                <Link
                  key={guide.slug}
                  href={`/resources/${guide.slug}`}
                  className="group block p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.6)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderColor: "rgba(138,142,229,0.08)",
                  }}
                >
                  <h3 className="text-[15px] font-medium leading-snug mb-2" style={{ color: "#1C1C2E" }}>
                    {guide.title}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#6B6E8D" }}>
                    {guide.desc}
                  </p>
                  <p className="mt-3 text-[12px] font-medium group-hover:translate-x-1 transition-transform" style={{ color: "#8A8EE5" }}>
                    Read guide &rarr;
                  </p>
                </Link>
              ))}
            </div>
          </Reveal>

          {/* ── Insurance Claims Guides ── */}
          <Reveal>
            <div className="mb-12">
              <h3 className="text-lg font-serif mb-2" style={{ color: "#1C1C2E" }}>
                Life insurance claim guides
              </h3>
              <p className="text-[13px] mb-6" style={{ color: "#6B6E8D" }}>
                Step-by-step instructions for filing a claim with your insurance company.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                {insuranceGuides.slice(0, 10).map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/resources/file-claim/${guide.slug}`}
                    className="block p-4 rounded-xl border transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.6)",
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      borderColor: "rgba(138,142,229,0.06)",
                    }}
                  >
                    <p className="text-[13px] font-medium" style={{ color: "#1C1C2E" }}>
                      {guide.company}
                    </p>
                    <p className="text-[11px] mt-1" style={{ color: "#8A8EE5" }}>
                      {guide.claims_phone}
                    </p>
                  </Link>
                ))}
              </div>
              {insuranceGuides.length > 10 && (
                <p className="text-center mt-4">
                  <Link href="/resources/file-claim" className="text-[13px] font-medium" style={{ color: "#8A8EE5" }}>
                    View all {insuranceGuides.length} insurance guides &rarr;
                  </Link>
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
