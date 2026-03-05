import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { LivingSky } from "@/components/living-sky";
import { blogPosts } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: "Blog | LightPathAI",
  description:
    "Practical guidance, financial insights, and wellness tools for navigating loss. Resources from LightPathAI.",
};

/* Category color mapping for card accents */
const categoryIcon: Record<string, JSX.Element> = {
  "Practical Guide": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h7l3 3v9H3V2z" stroke="#8A8EE5" strokeWidth="1.2" />
      <path d="M6 7h4M6 9.5h3" stroke="#8A8EE5" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  Financial: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="#E59524" strokeWidth="1.2" />
      <path d="M8 5v6M6 7h4M6 9h4" stroke="#E59524" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  Workplace: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="#63D583" strokeWidth="1.2" />
      <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" stroke="#63D583" strokeWidth="1.2" />
    </svg>
  ),
  "Legal & Admin": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="#8F82CD" strokeWidth="1.2" />
      <path d="M8 5v3l2.5 1.5" stroke="#8F82CD" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  Wellness: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 13.5S2 10 2 6a3 3 0 015.5-1.7L8 5l.5-.7A3 3 0 0114 6c0 4-6 7.5-6 7.5z" stroke="#E59524" strokeWidth="1.2" />
    </svg>
  ),
  Relationships: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="6" r="3" stroke="#D97A8B" strokeWidth="1.2" />
      <circle cx="10" cy="10" r="3" stroke="#D97A8B" strokeWidth="1.2" />
    </svg>
  ),
};

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden" style={{ marginTop: "-64px" }}>
      <LivingSky />

      <div className="relative z-10 px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="mx-auto max-w-5xl">
          {/* Hero */}
          <Reveal>
            <div className="text-center mb-16 sm:mb-20">
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

          {/* Post grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 100}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group block rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255,255,255,0.55)",
                    backdropFilter: "blur(24px) saturate(1.3)",
                    WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    boxShadow:
                      "0 4px 32px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                  }}
                >
                  {/* Category + date */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                      style={{
                        background: `${post.categoryColor}10`,
                        color: post.categoryColor,
                      }}
                    >
                      {categoryIcon[post.category]}
                      {post.category}
                    </span>
                    <span className="text-[12px]" style={{ color: "#94A3B8" }}>
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-[1.25rem] sm:text-[1.375rem] font-serif font-normal leading-[1.2] mb-3 group-hover:text-[#8A8EE5] transition-colors"
                    style={{ color: "#1C1C2E", letterSpacing: "-0.02em" }}
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p
                    className="text-[14px] leading-relaxed mb-5"
                    style={{ color: "#6B6E8D" }}
                  >
                    {post.excerpt}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between">
                    <span className="text-[12px]" style={{ color: "#94A3B8" }}>
                      {post.date}
                    </span>
                    <span
                      className="text-[13px] font-medium flex items-center gap-1 group-hover:gap-2 transition-all"
                      style={{ color: "#8A8EE5" }}
                    >
                      Read more
                      <svg
                        width="14"
                        height="14"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
