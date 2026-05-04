"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { BlogPost, BlogCategory } from "@/lib/blog-data";

/* ── Category icons (small SVGs for filter pills & cards) ── */
const categoryIcon: Record<string, JSX.Element> = {
  "Immediate Steps": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 2h7l3 3v9H3V2z" stroke="currentColor" strokeWidth="1.2" />
      <path d="M6 7h4M6 9.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  "Financial & Benefits": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 5v6M6 7h4M6 9h4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  "Workplace & Employer": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2" />
      <path d="M5 4V3a1 1 0 011-1h4a1 1 0 011 1v1" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  "Legal & Estate": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
      <path d="M8 5v3l2.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  ),
  "Emotional Wellness": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M8 13.5S2 10 2 6a3 3 0 015.5-1.7L8 5l.5-.7A3 3 0 0114 6c0 4-6 7.5-6 7.5z" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
  "Family & Relationships": (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="10" r="3" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  ),
};

export function BlogListing({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: BlogCategory[];
}) {
  const [active, setActive] = useState<string | null>(null);

  const filtered = useMemo(
    () => (active ? posts.filter((p) => p.category === active) : posts),
    [active, posts]
  );

  return (
    <>
      {/* ── Filter pills ── */}
      <Reveal>
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          {/* All */}
          <button
            onClick={() => setActive(null)}
            className="blog-filter-pill"
            style={
              active === null
                ? {
                    background: "rgba(138,142,229,0.12)",
                    color: "#5B5F9E",
                    borderColor: "rgba(138,142,229,0.25)",
                  }
                : undefined
            }
          >
            All
          </button>

          {categories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActive(active === cat.label ? null : cat.label)}
              className="blog-filter-pill"
              style={
                active === cat.label
                  ? {
                      background: `${cat.color}14`,
                      color: cat.color,
                      borderColor: `${cat.color}30`,
                    }
                  : undefined
              }
            >
              {categoryIcon[cat.label] && (
                <span
                  className="inline-flex"
                  style={{ color: active === cat.label ? cat.color : undefined }}
                >
                  {categoryIcon[cat.label]}
                </span>
              )}
              {cat.label}
            </button>
          ))}
        </div>
      </Reveal>

      {/* Post count */}
      <Reveal>
        <p
          className="text-center text-[13px] mb-10 sm:mb-14"
          style={{ color: "#94A3B8" }}
        >
          Showing {filtered.length} of {posts.length} articles
        </p>
      </Reveal>

      {/* ── Post grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filtered.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80}>
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
              {/* Category + reading time */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
                  style={{
                    background: `${post.categoryColor}10`,
                    color: post.categoryColor,
                  }}
                >
                  {categoryIcon[post.category] && (
                    <span style={{ color: post.categoryColor }}>
                      {categoryIcon[post.category]}
                    </span>
                  )}
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
                className="text-[14px] leading-relaxed mb-5 line-clamp-3"
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
    </>
  );
}
