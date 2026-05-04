import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { BlogListing } from "@/components/blog-listing";
import { blogPosts, blogCategories } from "@/lib/blog-data";

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
            <div className="text-center mb-12 sm:mb-16">
              <p
                className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide mb-8"
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
                className="mt-6 text-[17px] leading-relaxed max-w-lg mx-auto"
                style={{ color: "#6B6E8D" }}
              >
                Practical advice, financial insights, and wellness tools to help you
                navigate loss with clarity and compassion.
              </p>
            </div>
          </Reveal>

          {/* Blog listing with category filtering */}
          <BlogListing posts={blogPosts} categories={blogCategories} />
        </div>
      </div>
    </section>
  );
}
