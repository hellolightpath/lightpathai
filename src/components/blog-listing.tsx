"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import type { BlogPost, BlogCategory } from "@/lib/blog-data";

/* ── Category icons (small SVGs for filter pills) ── */
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

/* ── Decorative category illustrations (top-right of cards) ── */
function CategoryIllustration({ category, color }: { category: string; color: string }) {
  const opacity = "0.08";
  const size = 120;

  const illustrations: Record<string, JSX.Element> = {
    "Immediate Steps": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <path d="M30 20h40l20 20v60H30V20z" fill={color} opacity={opacity} />
        <path d="M30 20h40l20 20v60H30V20z" stroke={color} strokeWidth="1.5" opacity="0.15" />
        <path d="M70 20v20h20" stroke={color} strokeWidth="1.5" opacity="0.15" />
        <rect x="44" y="50" width="32" height="3" rx="1.5" fill={color} opacity="0.12" />
        <rect x="44" y="60" width="24" height="3" rx="1.5" fill={color} opacity="0.1" />
        <rect x="44" y="70" width="28" height="3" rx="1.5" fill={color} opacity="0.08" />
        <circle cx="38" cy="51.5" r="2" fill={color} opacity="0.2" />
        <circle cx="38" cy="61.5" r="2" fill={color} opacity="0.15" />
        <circle cx="38" cy="71.5" r="2" fill={color} opacity="0.12" />
      </svg>
    ),
    "Financial & Benefits": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <circle cx="60" cy="60" r="40" fill={color} opacity={opacity} />
        <circle cx="60" cy="60" r="40" stroke={color} strokeWidth="1.5" opacity="0.12" />
        <text x="60" y="68" textAnchor="middle" fontSize="28" fontWeight="600" fill={color} opacity="0.15">$</text>
        <path d="M40 85 Q60 75 80 85" stroke={color} strokeWidth="1.5" opacity="0.1" fill="none" />
        <path d="M35 45 Q60 35 85 45" stroke={color} strokeWidth="1.5" opacity="0.1" fill="none" />
      </svg>
    ),
    "Legal & Estate": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <rect x="25" y="30" width="70" height="60" rx="4" fill={color} opacity={opacity} />
        <rect x="25" y="30" width="70" height="60" rx="4" stroke={color} strokeWidth="1.5" opacity="0.12" />
        <circle cx="60" cy="55" r="15" stroke={color} strokeWidth="1.5" opacity="0.12" fill="none" />
        <path d="M60 45v10l7 4" stroke={color} strokeWidth="1.5" opacity="0.15" strokeLinecap="round" />
        <rect x="35" y="78" width="50" height="3" rx="1.5" fill={color} opacity="0.1" />
      </svg>
    ),
    "Workplace & Employer": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <rect x="20" y="40" width="80" height="55" rx="4" fill={color} opacity={opacity} />
        <rect x="20" y="40" width="80" height="55" rx="4" stroke={color} strokeWidth="1.5" opacity="0.12" />
        <path d="M45 40V32a4 4 0 014-4h22a4 4 0 014 4v8" stroke={color} strokeWidth="1.5" opacity="0.15" />
        <rect x="35" y="55" width="20" height="15" rx="2" fill={color} opacity="0.1" />
        <rect x="65" y="55" width="20" height="15" rx="2" fill={color} opacity="0.07" />
        <rect x="35" y="78" width="50" height="3" rx="1.5" fill={color} opacity="0.08" />
      </svg>
    ),
    "Emotional Wellness": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <path d="M60 95S20 75 20 48a22 22 0 0140-12.5L60 40l0-4.5A22 22 0 01100 48c0 27-40 47-40 47z" fill={color} opacity={opacity} />
        <path d="M60 95S20 75 20 48a22 22 0 0140-12.5L60 40l0-4.5A22 22 0 01100 48c0 27-40 47-40 47z" stroke={color} strokeWidth="1.5" opacity="0.12" />
        <path d="M45 55 Q60 45 75 55" stroke={color} strokeWidth="1.5" opacity="0.1" fill="none" />
        <circle cx="60" cy="62" r="3" fill={color} opacity="0.12" />
      </svg>
    ),
    "Family & Relationships": (
      <svg width={size} height={size} viewBox="0 0 120 120" fill="none">
        <circle cx="45" cy="45" r="20" fill={color} opacity={opacity} />
        <circle cx="75" cy="45" r="20" fill={color} opacity={opacity} />
        <circle cx="45" cy="45" r="20" stroke={color} strokeWidth="1.5" opacity="0.1" fill="none" />
        <circle cx="75" cy="45" r="20" stroke={color} strokeWidth="1.5" opacity="0.1" fill="none" />
        <circle cx="60" cy="80" r="15" fill={color} opacity="0.06" />
        <circle cx="60" cy="80" r="15" stroke={color} strokeWidth="1.5" opacity="0.08" fill="none" />
      </svg>
    ),
  };

  return (
    <div
      className="absolute pointer-events-none hidden sm:block"
      style={{ top: -10, right: -10, opacity: 0.9 }}
      aria-hidden="true"
    >
      {illustrations[category] || illustrations["Immediate Steps"]}
    </div>
  );
}

/* ── Card component ── */
function PostCard({
  post,
  featured = false,
}: {
  post: BlogPost;
  featured?: boolean;
}) {
  return (
    <Link
      href={`/resources/${post.slug}`}
      className="group relative flex flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1 w-full overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.6)",
        backdropFilter: "blur(24px) saturate(1.3)",
        WebkitBackdropFilter: "blur(24px) saturate(1.3)",
        border: "1px solid rgba(255,255,255,0.5)",
        boxShadow:
          "0 4px 32px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
      }}
    >
      {/* Top accent line */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${post.categoryColor}, ${post.categoryColor}88)`,
        }}
      />

      {/* Decorative illustration */}
      <CategoryIllustration category={post.category} color={post.categoryColor} />

      <div className={`relative flex flex-col flex-1 p-6 sm:p-7 ${featured ? "md:py-8 md:px-9" : ""}`}>
        {/* Category + reading time */}
        <div className="flex items-center justify-between mb-4">
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold"
            style={{
              background: `${post.categoryColor}14`,
              color: post.categoryColor,
              border: `1px solid ${post.categoryColor}20`,
            }}
          >
            {categoryIcon[post.category] && (
              <span style={{ color: post.categoryColor }}>
                {categoryIcon[post.category]}
              </span>
            )}
            {post.category}
          </span>
          <span className="text-[12px] font-medium" style={{ color: "#94A3B8" }}>
            {post.readingTime}
          </span>
        </div>

        {/* Title */}
        <h2
          className={`font-serif font-normal leading-[1.2] mb-3 group-hover:text-[#8A8EE5] transition-colors ${
            featured
              ? "text-[1.5rem] sm:text-[1.75rem]"
              : "text-[1.25rem] sm:text-[1.375rem]"
          }`}
          style={{ color: "#1C1C2E", letterSpacing: "-0.02em" }}
        >
          {post.title}
        </h2>

        {/* Excerpt */}
        <p
          className={`text-[14px] leading-relaxed mb-5 flex-1 ${
            featured ? "line-clamp-4 sm:text-[15px]" : "line-clamp-3"
          }`}
          style={{ color: "#6B6E8D" }}
        >
          {post.excerpt}
        </p>

        {/* Footer — pinned to bottom */}
        <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid rgba(0,0,0,0.04)" }}>
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
      </div>
    </Link>
  );
}

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

  const featuredPost = filtered[0];
  const gridPosts = filtered.slice(1);

  return (
    <>
      {/* ── Filter pills ── */}
      <Reveal>
        <div className="flex flex-nowrap gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1 md:flex-wrap md:justify-center md:overflow-visible md:pb-0">
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

      {/* Post count — only when filtered */}
      {active && (
        <Reveal>
          <p
            className="text-center text-[13px] mb-6"
            style={{ color: "#94A3B8" }}
          >
            Showing {filtered.length} of {posts.length} articles
          </p>
        </Reveal>
      )}

      {/* Spacer when no counter shown */}
      {!active && <div className="mb-8" />}

      {/* ── Featured first post (full-width) ── */}
      {featuredPost && (
        <Reveal className="mb-6">
          <PostCard post={featuredPost} featured />
        </Reveal>
      )}

      {/* ── Post grid ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gridPosts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 80} className="flex">
            <PostCard post={post} />
          </Reveal>
        ))}
      </div>
    </>
  );
}
