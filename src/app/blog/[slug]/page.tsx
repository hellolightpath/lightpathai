import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { LivingSky } from "@/components/living-sky";
import { blogPosts, getPostBySlug, getAllSlugs } from "@/lib/blog-data";
import type { BlogPost } from "@/lib/blog-data";
import { articleJsonLd } from "@/lib/json-ld";

/* ─── Static generation ─── */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: `${post.title} | LightPathAI Blog`,
    description: post.excerpt,
  };
}

/* ─── Visual helpers ─── */

function StatGrid({ stats }: { stats: { value: string; label: string; color: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 my-8">
      {stats.map((s) => (
        <div key={s.label} className="blog-stat-card">
          <p className="stat-value" style={{ color: s.color }}>{s.value}</p>
          <p className="stat-label">{s.label}</p>
        </div>
      ))}
    </div>
  );
}

function Callout({
  children,
  variant = "default",
  icon,
}: {
  children: React.ReactNode;
  variant?: "default" | "warm" | "green";
  icon?: React.ReactNode;
}) {
  const cls =
    variant === "warm"
      ? "blog-callout blog-callout-warm"
      : variant === "green"
        ? "blog-callout blog-callout-green"
        : "blog-callout";
  return (
    <div className={cls}>
      <div className="flex items-start gap-3">
        {icon && <div className="shrink-0 mt-0.5">{icon}</div>}
        <div className="text-[15px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>
          {children}
        </div>
      </div>
    </div>
  );
}

function TimelineGraphic() {
  const weeks = [
    { label: "Week 1", title: "Essentials", color: "#E59524" },
    { label: "Week 2\u20133", title: "Paperwork", color: "#8A8EE5" },
    { label: "Week 4", title: "Look ahead", color: "#63D583" },
  ];
  return (
    <div className="my-8 flex items-center gap-2 sm:gap-3">
      {weeks.map((w, i) => (
        <div key={w.label} className="flex items-center flex-1">
          <div
            className="flex-1 rounded-xl p-3 sm:p-4 text-center"
            style={{
              background: `${w.color}08`,
              border: `1px solid ${w.color}18`,
            }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] mb-1" style={{ color: w.color }}>
              {w.label}
            </p>
            <p className="text-[12px] sm:text-[13px] font-semibold" style={{ color: "var(--color-foreground)" }}>
              {w.title}
            </p>
          </div>
          {i < weeks.length - 1 && (
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mx-1">
              <path d="M6 4l4 4-4 4" stroke="var(--color-muted)" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
}

function BreathingExercise() {
  return (
    <div
      className="my-8 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden"
      style={{
        background: "rgba(138,142,229,0.03)",
        border: "1px solid rgba(138,142,229,0.08)",
      }}
    >
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-muted)" }}>
          Try it now
        </p>
        <p className="font-serif text-[1.25rem] mb-4" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>
          Box Breathing
        </p>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {["Inhale", "Hold", "Exhale", "Hold"].map((step, i) => (
            <div key={step + i} className="flex flex-col items-center">
              <div
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center text-[18px] sm:text-[20px] font-serif"
                style={{
                  background: "rgba(138,142,229,0.06)",
                  border: "1.5px solid rgba(138,142,229,0.12)",
                  color: "#8A8EE5",
                }}
              >
                4s
              </div>
              <span className="text-[10px] mt-2 font-medium" style={{ color: "var(--color-body)" }}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DosDontsGraphic() {
  const items = [
    {
      dont: "\u201CThey\u2019re in a better place\u201D",
      do: "\u201CI\u2019m so sorry. I\u2019m here for you.\u201D",
    },
    {
      dont: "\u201CAt least they lived a long life\u201D",
      do: "\u201CThey mattered so much. Tell me about them.\u201D",
    },
    {
      dont: "\u201CI know how you feel\u201D",
      do: "\u201CI can\u2019t imagine what this is like for you.\u201D",
    },
    {
      dont: "\u201CLet me know if you need anything\u201D",
      do: "\u201CI\u2019m bringing dinner Tuesday. Does 6 work?\u201D",
    },
  ];
  return (
    <div
      className="my-8 rounded-2xl p-5 sm:p-6"
      style={{
        background: "rgba(217,122,139,0.03)",
        border: "1px solid rgba(217,122,139,0.10)",
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center"
        style={{ color: "var(--color-muted)" }}
      >
        Say this, not that
      </p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-2 sm:gap-3">
            <div
              className="rounded-xl p-3 text-center"
              style={{
                background: "rgba(239,68,68,0.04)",
                border: "1px solid rgba(239,68,68,0.10)",
              }}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 3l6 6M9 3l-6 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "#EF4444" }}>
                  Avoid
                </span>
              </div>
              <p className="text-[11px] sm:text-[12px] leading-snug" style={{ color: "var(--color-foreground)" }}>
                {item.dont}
              </p>
            </div>
            <div
              className="rounded-xl p-3 text-center"
              style={{
                background: "rgba(99,213,131,0.04)",
                border: "1px solid rgba(99,213,131,0.10)",
              }}
            >
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M3 6l2 2 4-4" stroke="#63D583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "#63D583" }}>
                  Try this
                </span>
              </div>
              <p className="text-[11px] sm:text-[12px] leading-snug" style={{ color: "var(--color-foreground)" }}>
                {item.do}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportTimelineGraphic() {
  const phases = [
    { label: "Day 1", title: "Acknowledge", color: "#D97A8B", icon: "\u2764" },
    { label: "Week 1\u20132", title: "Show up", color: "#8A8EE5", icon: "\uD83E\uDD1D" },
    { label: "Month 1\u20133", title: "Stay present", color: "#63D583", icon: "\uD83C\uDF31" },
    { label: "Ongoing", title: "Remember", color: "#E59524", icon: "\u2B50" },
  ];
  return (
    <div
      className="my-8 rounded-2xl p-5 sm:p-6"
      style={{
        background: "rgba(217,122,139,0.03)",
        border: "1px solid rgba(217,122,139,0.08)",
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center"
        style={{ color: "var(--color-muted)" }}
      >
        Support timeline
      </p>
      <div className="flex items-center gap-1 sm:gap-2">
        {phases.map((p, i) => (
          <div key={p.label} className="flex items-center flex-1">
            <div className="flex-1 text-center">
              <div
                className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center mx-auto mb-1.5 text-[16px]"
                style={{ background: `${p.color}10`, border: `1.5px solid ${p.color}22` }}
              >
                {p.icon}
              </div>
              <p className="text-[9px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: p.color }}>
                {p.label}
              </p>
              <p className="text-[10px] sm:text-[11px] font-medium" style={{ color: "var(--color-foreground)" }}>
                {p.title}
              </p>
            </div>
            {i < phases.length - 1 && (
              <div className="h-[1.5px] w-3 sm:w-4 shrink-0" style={{ background: "rgba(0,0,0,0.06)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function GriefMythsGraphic() {
  const myths = [
    { myth: "Grief follows 5 stages in order", fact: "Grief is non-linear and unique to each person", color: "#8A8EE5" },
    { myth: "You should \u201Cget over it\u201D in a year", fact: "There is no timeline for grief", color: "#E59524" },
    { myth: "Staying busy helps you heal faster", fact: "Processing emotions is essential, not avoidance", color: "#63D583" },
  ];
  return (
    <div
      className="my-8 rounded-2xl p-5 sm:p-6"
      style={{
        background: "rgba(138,142,229,0.03)",
        border: "1px solid rgba(138,142,229,0.08)",
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center"
        style={{ color: "var(--color-muted)" }}
      >
        Common grief myths vs. reality
      </p>
      <div className="space-y-2.5">
        {myths.map((m) => (
          <div key={m.myth} className="grid grid-cols-2 gap-2">
            <div className="rounded-lg p-3" style={{ background: "rgba(239,68,68,0.03)", border: "1px solid rgba(239,68,68,0.06)" }}>
              <p className="text-[9px] font-semibold uppercase tracking-wider mb-1" style={{ color: "#EF4444" }}>Myth</p>
              <p className="text-[11px] leading-snug" style={{ color: "var(--color-foreground)" }}>{m.myth}</p>
            </div>
            <div className="rounded-lg p-3" style={{ background: `${m.color}05`, border: `1px solid ${m.color}12` }}>
              <p className="text-[9px] font-semibold uppercase tracking-wider mb-1" style={{ color: m.color }}>Reality</p>
              <p className="text-[11px] leading-snug" style={{ color: "var(--color-foreground)" }}>{m.fact}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeadlineAlertGraphic() {
  const deadlines = [
    { task: "Life insurance claim", window: "30\u201360 days", urgency: "high" },
    { task: "Social Security notification", window: "ASAP", urgency: "high" },
    { task: "Estate tax return", window: "9 months", urgency: "medium" },
    { task: "Creditor notification", window: "Varies by state", urgency: "medium" },
  ];
  return (
    <div
      className="my-8 rounded-2xl p-5 sm:p-6"
      style={{
        background: "rgba(229,149,36,0.03)",
        border: "1px solid rgba(229,149,36,0.08)",
      }}
    >
      <p
        className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center"
        style={{ color: "var(--color-muted)" }}
      >
        Key deadlines at a glance
      </p>
      <div className="space-y-2">
        {deadlines.map((d) => (
          <div
            key={d.task}
            className="flex items-center justify-between rounded-lg p-3"
            style={{
              background: d.urgency === "high" ? "rgba(229,149,36,0.04)" : "rgba(138,142,229,0.03)",
              border: `1px solid ${d.urgency === "high" ? "rgba(229,149,36,0.12)" : "rgba(138,142,229,0.08)"}`,
            }}
          >
            <div className="flex items-center gap-2">
              <div
                className="h-2 w-2 rounded-full"
                style={{ background: d.urgency === "high" ? "#E59524" : "#8A8EE5" }}
              />
              <span className="text-[12px] font-medium" style={{ color: "var(--color-foreground)" }}>
                {d.task}
              </span>
            </div>
            <span
              className="text-[11px] font-semibold px-2 py-0.5 rounded-full"
              style={{
                background: d.urgency === "high" ? "rgba(229,149,36,0.08)" : "rgba(138,142,229,0.06)",
                color: d.urgency === "high" ? "#E59524" : "#8A8EE5",
              }}
            >
              {d.window}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function StagesGraphic() {
  const stages = [
    { label: "Petition", color: "#8A8EE5" },
    { label: "Inventory", color: "#8F82CD" },
    { label: "Pay debts", color: "#E59524" },
    { label: "Distribute", color: "#63D583" },
    { label: "Close", color: "#8A8EE5" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(143,130,205,0.03)", border: "1px solid rgba(143,130,205,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>
        Estate administration flow
      </p>
      <div className="flex items-center gap-1 sm:gap-2">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center flex-1">
            <div className="flex-1 text-center">
              <div
                className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center mx-auto mb-1.5"
                style={{ background: `${s.color}12`, border: `1.5px solid ${s.color}25` }}
              >
                <span className="text-[10px] font-bold" style={{ color: s.color }}>{i + 1}</span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-medium" style={{ color: "var(--color-foreground)" }}>{s.label}</p>
            </div>
            {i < stages.length - 1 && (
              <div className="h-[1.5px] w-3 sm:w-5 shrink-0" style={{ background: "rgba(0,0,0,0.08)" }} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── Per-post visual inserts ─── */
const postVisuals: Record<string, Record<number, React.ReactNode>> = {
  "what-to-do-first-30-days-after-loss": {
    0: (
      <Callout
        icon={
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <circle cx="10" cy="10" r="8" stroke="#8A8EE5" strokeWidth="1.5" />
            <path d="M10 6v4l2.5 1.5" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        }
      >
        <strong>Remember:</strong> Very few things truly need to happen today. Give yourself permission to move at your own pace.
      </Callout>
    ),
    1: <TimelineGraphic />,
  },
  "hidden-financial-cost-of-grief": {
    0: (
      <StatGrid
        stats={[
          { value: "$15.5B", label: "Unclaimed benefits yearly", color: "#E59524" },
          { value: "570 hrs", label: "Admin work per estate", color: "#8A8EE5" },
          { value: "16 mo", label: "Average timeline", color: "#8F82CD" },
        ]}
      />
    ),
    1: <DeadlineAlertGraphic />,
  },
  "supporting-grieving-employee-guide": {
    0: (
      <StatGrid
        stats={[
          { value: "2.8M+", label: "Deaths in the U.S. each year", color: "#63D583" },
          { value: "57%", label: "Employees feel unsupported", color: "#E59524" },
          { value: "3x", label: "More likely to stay when supported", color: "#8A8EE5" },
        ]}
      />
    ),
    2: (
      <Callout variant="green" icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <circle cx="10" cy="10" r="8" stroke="#63D583" strokeWidth="1.5" />
          <path d="M7 10l2 2 4-4" stroke="#63D583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      }>
        <strong>Pro tip:</strong> Don&rsquo;t ask &ldquo;How are you?&rdquo; Instead try: &ldquo;What would help you most this week?&rdquo;
      </Callout>
    ),
  },
  "estate-administration-beginners-guide": {
    1: <StagesGraphic />,
    2: (
      <Callout variant="warm" icon={
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M10 3l1.5 4.5H16l-3.5 2.5 1 4.5L10 12l-3.5 2.5 1-4.5L4 7.5h4.5z" stroke="#E59524" strokeWidth="1.3" fill="none" />
        </svg>
      }>
        <strong>Important:</strong> As executor, you can be held personally liable for mistakes. Keep meticulous records of every decision and transaction.
      </Callout>
    ),
  },
  "self-care-during-grief": {
    0: <GriefMythsGraphic />,
    1: <BreathingExercise />,
  },
  "what-to-say-to-grieving-person": {
    0: (
      <StatGrid
        stats={[
          { value: "80%", label: "Wish people said the person\u2019s name", color: "#D97A8B" },
          { value: "2 wks", label: "When most support disappears", color: "#E59524" },
          { value: "1 in 3", label: "Feel isolated by others\u2019 responses", color: "#8A8EE5" },
        ]}
      />
    ),
    1: <DosDontsGraphic />,
    3: <SupportTimelineGraphic />,
  },
};

/* ─── Page component ─── */
export default function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const visuals = postVisuals[post.slug] || {};

  /* Adjacent posts for prev/next nav */
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <section className="relative overflow-hidden" style={{ marginTop: "-64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleJsonLd({
              title: post.title,
              description: post.excerpt,
              slug: post.slug,
              date: post.date,
            })
          ),
        }}
      />
      <LivingSky />

      <div className="relative z-10 px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="mx-auto max-w-3xl">
          {/* Back link */}
          <Reveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium mb-10 transition-colors hover:opacity-70"
              style={{ color: "#8A8EE5" }}
            >
              <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
              All posts
            </Link>
          </Reveal>

          {/* Hero */}
          <Reveal>
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                  style={{ background: `${post.categoryColor}10`, color: post.categoryColor }}
                >
                  {post.category}
                </span>
                <span className="text-[12px]" style={{ color: "#94A3B8" }}>
                  {post.readingTime}
                </span>
              </div>
              <h1
                className="text-[2rem] sm:text-[2.5rem] lg:text-[3rem] font-serif font-normal leading-[1.1] mb-4"
                style={{ letterSpacing: "-0.03em", color: "#1C1C2E" }}
              >
                {post.title}
              </h1>
              <p className="text-[13px]" style={{ color: "#94A3B8" }}>
                {post.date}
              </p>
            </div>
          </Reveal>

          {/* Article body */}
          <div className="blog-prose">
            {post.sections.map((section, i) => (
              <Reveal key={i} delay={50}>
                <div className="mb-10">
                  <h2>{section.heading}</h2>

                  {section.paragraphs.map((p, j) => (
                    <p key={j}>{p}</p>
                  ))}

                  {/* Visual insert after paragraphs, before list */}
                  {visuals[i] && visuals[i]}

                  {section.listItems && (
                    <ul>
                      {section.listItems.map((item, k) => (
                        <li key={k}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal>
            <div
              className="rounded-2xl p-8 sm:p-10 text-center mt-12"
              style={{
                background: "rgba(255,255,255,0.55)",
                backdropFilter: "blur(24px) saturate(1.3)",
                WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                border: "1px solid rgba(255,255,255,0.5)",
                boxShadow: "0 4px 32px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
              }}
            >
              <p
                className="text-[1.375rem] sm:text-[1.625rem] font-serif font-normal leading-[1.2] mb-3"
                style={{ color: "#1C1C2E", letterSpacing: "-0.02em" }}
              >
                LightPath can help
              </p>
              <p
                className="text-[15px] leading-relaxed mb-6 max-w-md mx-auto"
                style={{ color: "#6B6E8D" }}
              >
                A structured, AI-powered care plan that handles the logistics so you can focus on healing.
              </p>
              <Link
                href="/demo"
                className="inline-flex items-center gap-2 rounded-full font-sans font-medium text-[15px] transition-all duration-300 ease-out"
                style={{
                  padding: "0.875rem 2rem",
                  background: "rgba(90, 95, 180, 0.85)",
                  color: "white",
                  border: "1px solid rgba(255,255,255,0.15)",
                  boxShadow: "0 1px 3px rgba(90,95,180,0.2), 0 4px 16px rgba(90,95,180,0.12)",
                  letterSpacing: "0.015em",
                }}
              >
                Get early access
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </Reveal>

          {/* ── Prev / Next navigation ── */}
          {(prevPost || nextPost) && (
            <Reveal>
              <div
                className="mt-12 grid gap-4"
                style={{ gridTemplateColumns: prevPost && nextPost ? "1fr 1fr" : "1fr" }}
              >
                {prevPost && (
                  <Link
                    href={`/blog/${prevPost.slug}`}
                    className="group rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(24px) saturate(1.3)",
                      WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 4px 32px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div className="flex items-center gap-1.5 mb-2">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                      </svg>
                      <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>
                        Previous
                      </span>
                    </div>
                    <p
                      className="text-[14px] sm:text-[15px] font-serif leading-snug group-hover:text-[#8A8EE5] transition-colors"
                      style={{ color: "#1C1C2E", letterSpacing: "-0.01em" }}
                    >
                      {prevPost.title}
                    </p>
                  </Link>
                )}
                {nextPost && (
                  <Link
                    href={`/blog/${nextPost.slug}`}
                    className="group rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:-translate-y-0.5 text-right"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(24px) saturate(1.3)",
                      WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 4px 32px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                      gridColumn: !prevPost ? "1 / -1" : undefined,
                    }}
                  >
                    <div className="flex items-center gap-1.5 mb-2 justify-end">
                      <span className="text-[11px] font-semibold uppercase tracking-wider" style={{ color: "#94A3B8" }}>
                        Next
                      </span>
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#94A3B8" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                    <p
                      className="text-[14px] sm:text-[15px] font-serif leading-snug group-hover:text-[#8A8EE5] transition-colors"
                      style={{ color: "#1C1C2E", letterSpacing: "-0.01em" }}
                    >
                      {nextPost.title}
                    </p>
                  </Link>
                )}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
