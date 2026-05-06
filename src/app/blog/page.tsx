import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { BlogListing } from "@/components/blog-listing";
import { blogPosts, blogCategories } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Resources | LightPathAI",
  description:
    "Practical guidance for navigating loss. Immediate steps, financial benefits, legal, workplace, emotional wellness, family.",
};

export default function BlogPage() {
  return (
    <section className="relative" style={{ marginTop: "-64px", background: "var(--color-surface)" }}>
      <div className="relative z-10 mx-auto max-w-[72rem] px-6 sm:px-10 pt-44 sm:pt-56 pb-24 sm:pb-32">
        <Reveal>
          <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
            Resources
          </p>
          <h1
            className="text-[2.5rem] sm:text-[4rem] lg:text-[4.75rem] font-serif leading-[1.0] max-w-3xl"
            style={{ color: "var(--color-foreground)", letterSpacing: "-0.045em", fontWeight: 500 }}
          >
            Guidance for the hardest days, and every day after.
          </h1>
          <p className="mt-9 max-w-xl text-[17px] sm:text-[18px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
            Practical advice on what comes after loss. Written with clinicians, attorneys, financial advisors, and people who have lived through it.
          </p>
        </Reveal>

        <div className="mt-20 sm:mt-28">
          <BlogListing posts={blogPosts} categories={blogCategories} />
        </div>
      </div>
    </section>
  );
}
