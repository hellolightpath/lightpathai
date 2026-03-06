import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
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
    title: `${post.title} | LightPathAI Resources`,
    description: post.excerpt,
  };
}

/* ═══════════════════════════════════════════════════
   VISUAL HELPER COMPONENTS
   ═══════════════════════════════════════════════════ */

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
  variant?: "default" | "warm" | "green" | "rose";
  icon?: React.ReactNode;
}) {
  const cls =
    variant === "warm"
      ? "blog-callout blog-callout-warm"
      : variant === "green"
        ? "blog-callout blog-callout-green"
        : variant === "rose"
          ? "blog-callout blog-callout-rose"
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
            style={{ background: `${w.color}08`, border: `1px solid ${w.color}18` }}
          >
            <p className="text-[9px] font-semibold uppercase tracking-[0.1em] mb-1" style={{ color: w.color }}>{w.label}</p>
            <p className="text-[12px] sm:text-[13px] font-semibold" style={{ color: "var(--color-foreground)" }}>{w.title}</p>
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
    <div className="my-8 rounded-2xl p-6 sm:p-8 text-center relative overflow-hidden" style={{ background: "rgba(138,142,229,0.03)", border: "1px solid rgba(138,142,229,0.08)" }}>
      <div className="relative z-10">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-muted)" }}>Try it now</p>
        <p className="font-serif text-[1.25rem] mb-4" style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em" }}>Box Breathing</p>
        <div className="flex items-center justify-center gap-3 sm:gap-4">
          {["Inhale", "Hold", "Exhale", "Hold"].map((step, i) => (
            <div key={step + i} className="flex flex-col items-center">
              <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full flex items-center justify-center text-[18px] sm:text-[20px] font-serif" style={{ background: "rgba(138,142,229,0.06)", border: "1.5px solid rgba(138,142,229,0.12)", color: "#8A8EE5" }}>4s</div>
              <span className="text-[10px] mt-2 font-medium" style={{ color: "var(--color-body)" }}>{step}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function DosDontsGraphic() {
  const items = [
    { dont: "\u201CThey\u2019re in a better place\u201D", do: "\u201CI\u2019m so sorry. I\u2019m here for you.\u201D" },
    { dont: "\u201CAt least they lived a long life\u201D", do: "\u201CThey mattered so much. Tell me about them.\u201D" },
    { dont: "\u201CI know how you feel\u201D", do: "\u201CI can\u2019t imagine what this is like for you.\u201D" },
    { dont: "\u201CLet me know if you need anything\u201D", do: "\u201CI\u2019m bringing dinner Tuesday. Does 6 work?\u201D" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(217,122,139,0.03)", border: "1px solid rgba(217,122,139,0.10)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Say this, not that</p>
      <div className="space-y-3">
        {items.map((item, i) => (
          <div key={i} className="grid grid-cols-2 gap-2 sm:gap-3">
            <div className="rounded-xl p-3 text-center" style={{ background: "rgba(239,68,68,0.04)", border: "1px solid rgba(239,68,68,0.10)" }}>
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" /></svg>
                <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "#EF4444" }}>Avoid</span>
              </div>
              <p className="text-[11px] sm:text-[12px] leading-snug" style={{ color: "var(--color-foreground)" }}>{item.dont}</p>
            </div>
            <div className="rounded-xl p-3 text-center" style={{ background: "rgba(99,213,131,0.04)", border: "1px solid rgba(99,213,131,0.10)" }}>
              <div className="flex items-center justify-center gap-1.5 mb-1.5">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M3 6l2 2 4-4" stroke="#63D583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: "#63D583" }}>Try this</span>
              </div>
              <p className="text-[11px] sm:text-[12px] leading-snug" style={{ color: "var(--color-foreground)" }}>{item.do}</p>
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
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(217,122,139,0.03)", border: "1px solid rgba(217,122,139,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Support timeline</p>
      <div className="flex items-center gap-1 sm:gap-2">
        {phases.map((p, i) => (
          <div key={p.label} className="flex items-center flex-1">
            <div className="flex-1 text-center">
              <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center mx-auto mb-1.5 text-[16px]" style={{ background: `${p.color}10`, border: `1.5px solid ${p.color}22` }}>{p.icon}</div>
              <p className="text-[9px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: p.color }}>{p.label}</p>
              <p className="text-[10px] sm:text-[11px] font-medium" style={{ color: "var(--color-foreground)" }}>{p.title}</p>
            </div>
            {i < phases.length - 1 && <div className="h-[1.5px] w-3 sm:w-4 shrink-0" style={{ background: "rgba(0,0,0,0.06)" }} />}
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
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(138,142,229,0.03)", border: "1px solid rgba(138,142,229,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Common grief myths vs. reality</p>
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
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(229,149,36,0.03)", border: "1px solid rgba(229,149,36,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Key deadlines at a glance</p>
      <div className="space-y-2">
        {deadlines.map((d) => (
          <div key={d.task} className="flex items-center justify-between rounded-lg p-3" style={{ background: d.urgency === "high" ? "rgba(229,149,36,0.04)" : "rgba(138,142,229,0.03)", border: `1px solid ${d.urgency === "high" ? "rgba(229,149,36,0.12)" : "rgba(138,142,229,0.08)"}` }}>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ background: d.urgency === "high" ? "#E59524" : "#8A8EE5" }} />
              <span className="text-[12px] font-medium" style={{ color: "var(--color-foreground)" }}>{d.task}</span>
            </div>
            <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: d.urgency === "high" ? "rgba(229,149,36,0.08)" : "rgba(138,142,229,0.06)", color: d.urgency === "high" ? "#E59524" : "#8A8EE5" }}>{d.window}</span>
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
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Estate administration flow</p>
      <div className="flex items-center gap-1 sm:gap-2">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center flex-1">
            <div className="flex-1 text-center">
              <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full flex items-center justify-center mx-auto mb-1.5" style={{ background: `${s.color}12`, border: `1.5px solid ${s.color}25` }}>
                <span className="text-[10px] font-bold" style={{ color: s.color }}>{i + 1}</span>
              </div>
              <p className="text-[9px] sm:text-[10px] font-medium" style={{ color: "var(--color-foreground)" }}>{s.label}</p>
            </div>
            {i < stages.length - 1 && <div className="h-[1.5px] w-3 sm:w-5 shrink-0" style={{ background: "rgba(0,0,0,0.08)" }} />}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─── NEW VISUAL COMPONENTS for expanded posts ─── */

function NotificationChecklist() {
  const sections = [
    { title: "Government", color: "#E59524", items: ["Social Security", "IRS", "VA (if veteran)", "DMV", "Voter registration"] },
    { title: "Financial", color: "#8A8EE5", items: ["Banks & credit unions", "Credit cards", "Mortgage lender", "Investment accounts", "Pension admin"] },
    { title: "Insurance", color: "#8F82CD", items: ["Life insurance", "Health insurance", "Auto insurance", "Homeowner\u2019s/renter\u2019s"] },
    { title: "Digital", color: "#D97A8B", items: ["Email accounts", "Social media", "Subscriptions", "Cloud storage"] },
    { title: "Services", color: "#63D583", items: ["Utilities", "Cell phone", "Post office", "Memberships"] },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(229,149,36,0.03)", border: "1px solid rgba(229,149,36,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Notification categories</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {sections.map((s) => (
          <div key={s.title} className="blog-checklist-section" style={{ background: `${s.color}06`, border: `1px solid ${s.color}12` }}>
            <p className="text-[9px] font-semibold uppercase tracking-wider mb-2" style={{ color: s.color }}>{s.title}</p>
            {s.items.map((item) => (
              <div key={item} className="blog-checklist-item">
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="shrink-0 mt-0.5">
                  <rect width="10" height="10" rx="2" stroke={s.color} strokeWidth="1" fill="none" opacity="0.4" />
                </svg>
                <span>{item}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function BenefitsDiscoveryGraphic() {
  const benefits = [
    { label: "Social Security", value: "$1,900+/mo", color: "#E59524" },
    { label: "VA Survivor (DIC)", value: "$1,600+/mo", color: "#63D583" },
    { label: "Group Life Insurance", value: "1\u20132x salary", color: "#8A8EE5" },
    { label: "Unclaimed Property", value: "Varies", color: "#8F82CD" },
    { label: "Workers\u2019 Comp", value: "State-specific", color: "#D97A8B" },
    { label: "Tax Credits", value: "$2,000\u2013$5,000", color: "#6BA3D9" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(138,142,229,0.03)", border: "1px solid rgba(138,142,229,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Potential survivor benefits</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {benefits.map((b) => (
          <div key={b.label} className="rounded-xl p-3 text-center" style={{ background: `${b.color}06`, border: `1px solid ${b.color}12` }}>
            <p className="text-[15px] sm:text-[17px] font-serif font-normal mb-1" style={{ color: b.color }}>{b.value}</p>
            <p className="text-[10px] font-medium" style={{ color: "var(--color-body)" }}>{b.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TaxTimelineGraphic() {
  const deadlines = [
    { label: "Year of death", task: "Joint return (Form 1040)", color: "#E59524" },
    { label: "9 months", task: "Estate tax return (Form 706)", color: "#8F82CD" },
    { label: "Ongoing", task: "Estate income (Form 1041)", color: "#8A8EE5" },
    { label: "Years 1\u20132", task: "Qualifying Surviving Spouse status", color: "#63D583" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(138,142,229,0.03)", border: "1px solid rgba(138,142,229,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Tax filing timeline</p>
      <div className="space-y-2">
        {deadlines.map((d, i) => (
          <div key={d.label} className="flex items-center gap-3">
            <div className="flex flex-col items-center" style={{ minWidth: "2rem" }}>
              <div className="h-6 w-6 rounded-full flex items-center justify-center" style={{ background: `${d.color}12`, border: `1.5px solid ${d.color}25` }}>
                <span className="text-[8px] font-bold" style={{ color: d.color }}>{i + 1}</span>
              </div>
              {i < deadlines.length - 1 && <div className="w-[1.5px] h-3 mt-1" style={{ background: "rgba(0,0,0,0.06)" }} />}
            </div>
            <div className="flex-1 rounded-lg p-2.5" style={{ background: `${d.color}05`, border: `1px solid ${d.color}10` }}>
              <p className="text-[9px] font-semibold uppercase tracking-wider mb-0.5" style={{ color: d.color }}>{d.label}</p>
              <p className="text-[11px] font-medium" style={{ color: "var(--color-foreground)" }}>{d.task}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProbateCostTable() {
  const states = [
    { state: "California", cost: "4\u20137%", timeline: "12\u201318 mo", threshold: "$184,500" },
    { state: "Texas", cost: "2\u20134%", timeline: "6\u201312 mo", threshold: "$75,000" },
    { state: "Florida", cost: "3\u20135%", timeline: "6\u201312 mo", threshold: "$75,000" },
    { state: "New York", cost: "3\u20136%", timeline: "9\u201315 mo", threshold: "$30,000" },
    { state: "Pennsylvania", cost: "3\u20135%", timeline: "6\u201312 mo", threshold: "$50,000" },
  ];
  return (
    <div className="my-8 rounded-2xl overflow-hidden" style={{ border: "1px solid rgba(143,130,205,0.1)" }}>
      <table className="blog-comparison-table">
        <thead>
          <tr>
            <th>State</th>
            <th>Typical Cost</th>
            <th>Timeline</th>
            <th>Small Estate</th>
          </tr>
        </thead>
        <tbody>
          {states.map((s) => (
            <tr key={s.state}>
              <td className="font-medium">{s.state}</td>
              <td>{s.cost}</td>
              <td>{s.timeline}</td>
              <td>{s.threshold}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function PlatformPoliciesGraphic() {
  const platforms = [
    { name: "Google", policy: "Inactive Account Manager or family request", color: "#E59524" },
    { name: "Apple", policy: "Digital Legacy Contact or court order required", color: "#8A8EE5" },
    { name: "Meta", policy: "Memorialize or remove with death certificate", color: "#6BA3D9" },
    { name: "Microsoft", policy: "Next of Kin process with documentation", color: "#63D583" },
    { name: "Twitter/X", policy: "Deactivation by verified family member", color: "#D97A8B" },
    { name: "LinkedIn", policy: "Removal with verification request", color: "#8F82CD" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(143,130,205,0.03)", border: "1px solid rgba(143,130,205,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Platform death policies</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {platforms.map((p) => (
          <div key={p.name} className="flex items-start gap-2.5 rounded-lg p-3" style={{ background: `${p.color}05`, border: `1px solid ${p.color}10` }}>
            <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ background: `${p.color}12`, border: `1.5px solid ${p.color}22` }}>
              <span className="text-[9px] font-bold" style={{ color: p.color }}>{p.name[0]}</span>
            </div>
            <div>
              <p className="text-[11px] font-semibold mb-0.5" style={{ color: "var(--color-foreground)" }}>{p.name}</p>
              <p className="text-[10px] leading-snug" style={{ color: "var(--color-body)" }}>{p.policy}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BereavementLeaveComparison() {
  const states = [
    { state: "Oregon", leave: "2 weeks", type: "Paid/Unpaid", color: "#63D583" },
    { state: "Illinois", leave: "2 weeks", type: "Unpaid", color: "#8A8EE5" },
    { state: "California", leave: "5 days", type: "Unpaid", color: "#E59524" },
    { state: "Washington", leave: "PFML eligible", type: "Paid", color: "#8F82CD" },
    { state: "Maryland", leave: "Sick leave", type: "Use accrued", color: "#D97A8B" },
    { state: "Most states", leave: "None", type: "No mandate", color: "#94A3B8" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(99,213,131,0.03)", border: "1px solid rgba(99,213,131,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>State bereavement leave mandates</p>
      <div className="space-y-2">
        {states.map((s) => (
          <div key={s.state} className="flex items-center justify-between rounded-lg p-3" style={{ background: `${s.color}05`, border: `1px solid ${s.color}10` }}>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full" style={{ background: s.color }} />
              <span className="text-[12px] font-medium" style={{ color: "var(--color-foreground)" }}>{s.state}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px]" style={{ color: "var(--color-body)" }}>{s.type}</span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full" style={{ background: `${s.color}10`, color: s.color }}>{s.leave}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function GriefBrainGraphic() {
  const areas = [
    { area: "Prefrontal Cortex", effect: "Planning & decisions impaired", color: "#8A8EE5" },
    { area: "Hippocampus", effect: "Memory formation disrupted", color: "#E59524" },
    { area: "Amygdala", effect: "Threat detection on overdrive", color: "#D97A8B" },
    { area: "Sleep centers", effect: "REM & deep sleep disrupted", color: "#8F82CD" },
    { area: "Immune system", effect: "Suppressed, illness risk rises", color: "#63D583" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(217,122,139,0.03)", border: "1px solid rgba(217,122,139,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>How grief affects the brain &amp; body</p>
      <div className="space-y-2">
        {areas.map((a) => (
          <div key={a.area} className="flex items-center gap-3 rounded-lg p-3" style={{ background: `${a.color}05`, border: `1px solid ${a.color}10` }}>
            <div className="h-8 w-8 rounded-full flex items-center justify-center shrink-0" style={{ background: `${a.color}12` }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5" stroke={a.color} strokeWidth="1.2" />
                <circle cx="7" cy="7" r="2" fill={a.color} opacity="0.3" />
              </svg>
            </div>
            <div>
              <p className="text-[11px] font-semibold" style={{ color: "var(--color-foreground)" }}>{a.area}</p>
              <p className="text-[10px]" style={{ color: "var(--color-body)" }}>{a.effect}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DualProcessGraphic() {
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(138,142,229,0.03)", border: "1px solid rgba(138,142,229,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Dual Process Model of Coping</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-xl p-4 text-center" style={{ background: "rgba(217,122,139,0.05)", border: "1px solid rgba(217,122,139,0.12)" }}>
          <p className="text-[9px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#D97A8B" }}>Loss-oriented</p>
          <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>Processing pain, yearning, remembering, emotional work</p>
        </div>
        <div className="rounded-xl p-4 text-center" style={{ background: "rgba(99,213,131,0.05)", border: "1px solid rgba(99,213,131,0.12)" }}>
          <p className="text-[9px] font-semibold uppercase tracking-wider mb-2" style={{ color: "#63D583" }}>Restoration-oriented</p>
          <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>Practical tasks, new routines, identity shifts, moving forward</p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3 gap-2">
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none"><path d="M2 6c4-8 12 8 16 0" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>
        <p className="text-[10px] font-medium" style={{ color: "#8A8EE5" }}>Healthy grief oscillates between both</p>
        <svg width="20" height="12" viewBox="0 0 20 12" fill="none"><path d="M2 6c4 8 12-8 16 0" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" fill="none" /></svg>
      </div>
    </div>
  );
}

function ChildDevelopmentStages() {
  const stages = [
    { age: "2\u20134", title: "Toddlers", understanding: "No permanence concept", color: "#E59524" },
    { age: "5\u20137", title: "Early childhood", understanding: "Magical thinking", color: "#8A8EE5" },
    { age: "8\u201311", title: "Middle childhood", understanding: "Understands permanence", color: "#63D583" },
    { age: "12\u201317", title: "Teenagers", understanding: "Adult comprehension", color: "#D97A8B" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(107,163,217,0.03)", border: "1px solid rgba(107,163,217,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Children&apos;s understanding of death by age</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {stages.map((s) => (
          <div key={s.age} className="rounded-xl p-3 text-center" style={{ background: `${s.color}06`, border: `1px solid ${s.color}12` }}>
            <div className="h-9 w-9 rounded-full flex items-center justify-center mx-auto mb-2" style={{ background: `${s.color}12` }}>
              <span className="text-[11px] font-bold" style={{ color: s.color }}>{s.age}</span>
            </div>
            <p className="text-[10px] font-semibold mb-0.5" style={{ color: "var(--color-foreground)" }}>{s.title}</p>
            <p className="text-[9px]" style={{ color: "var(--color-body)" }}>{s.understanding}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FamilyConflictSources() {
  const sources = [
    { source: "Estate distribution", frequency: "Most common", color: "#E59524" },
    { source: "Personal property", frequency: "Highly emotional", color: "#D97A8B" },
    { source: "Caregiving resentment", frequency: "Long-building", color: "#8F82CD" },
    { source: "Different grief styles", frequency: "Misunderstood", color: "#8A8EE5" },
    { source: "Funeral decisions", frequency: "Time-pressured", color: "#63D583" },
    { source: "Blended family roles", frequency: "Complex", color: "#6BA3D9" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(107,163,217,0.03)", border: "1px solid rgba(107,163,217,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Common sources of family conflict after a death</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {sources.map((s) => (
          <div key={s.source} className="rounded-lg p-3" style={{ background: `${s.color}05`, border: `1px solid ${s.color}10` }}>
            <div className="flex items-center gap-1.5 mb-1">
              <div className="h-1.5 w-1.5 rounded-full" style={{ background: s.color }} />
              <span className="text-[9px] font-semibold uppercase tracking-wider" style={{ color: s.color }}>{s.frequency}</span>
            </div>
            <p className="text-[11px] font-medium" style={{ color: "var(--color-foreground)" }}>{s.source}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TMTDefensesGraphic() {
  const defenses = [
    { label: "Cultural worldview", desc: "Cling to beliefs for symbolic permanence", color: "#8A8EE5" },
    { label: "Self-esteem striving", desc: "Build significance through legacy projects", color: "#E59524" },
    { label: "Symbolic immortality", desc: "Invest in children, art, institutions", color: "#63D583" },
    { label: "Hedonic escape", desc: "Distraction, substances, busyness", color: "#D97A8B" },
    { label: "Suppression", desc: "Push death-thoughts below awareness", color: "#8F82CD" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(217,122,139,0.03)", border: "1px solid rgba(217,122,139,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Terror Management Theory — defense mechanisms</p>
      <div className="space-y-2">
        {defenses.map((d, i) => (
          <div key={d.label} className="flex items-center gap-3 rounded-lg p-3" style={{ background: `${d.color}05`, border: `1px solid ${d.color}10` }}>
            <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ background: `${d.color}12` }}>
              <span className="text-[10px] font-bold" style={{ color: d.color }}>{i + 1}</span>
            </div>
            <div>
              <p className="text-[11px] font-semibold" style={{ color: "var(--color-foreground)" }}>{d.label}</p>
              <p className="text-[10px]" style={{ color: "var(--color-body)" }}>{d.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DeathLiteracyDimensions() {
  const dims = [
    { label: "Knowledge", desc: "Understanding death, dying, and grief processes", color: "#8A8EE5" },
    { label: "Skills", desc: "Practical caregiving and administration abilities", color: "#E59524" },
    { label: "Experience", desc: "Direct engagement with death and mourning", color: "#63D583" },
    { label: "Social action", desc: "Normalizing death conversations in community", color: "#D97A8B" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(138,142,229,0.03)", border: "1px solid rgba(138,142,229,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Four dimensions of death literacy</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {dims.map((d) => (
          <div key={d.label} className="rounded-xl p-3 text-center" style={{ background: `${d.color}06`, border: `1px solid ${d.color}12` }}>
            <div className="h-9 w-9 rounded-full flex items-center justify-center mx-auto mb-2" style={{ background: `${d.color}12` }}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="5" stroke={d.color} strokeWidth="1.2" />
                <circle cx="7" cy="7" r="2" fill={d.color} opacity="0.3" />
              </svg>
            </div>
            <p className="text-[10px] font-semibold mb-0.5" style={{ color: "var(--color-foreground)" }}>{d.label}</p>
            <p className="text-[9px]" style={{ color: "var(--color-body)" }}>{d.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function HarmfulResponsePatterns() {
  const patterns = [
    { pattern: "Minimizing", example: "\u201CAt least they\u2019re not suffering.\u201D", impact: "Communicates pain is disproportionate", color: "#EF4444" },
    { pattern: "Theologizing", example: "\u201CThey\u2019re in a better place.\u201D", impact: "Imposes meaning on another\u2019s loss", color: "#F59E0B" },
    { pattern: "Comparing", example: "\u201CI know how you feel...\u201D", impact: "Centers the supporter\u2019s experience", color: "#E59524" },
    { pattern: "Advising", example: "\u201CYou should try journaling.\u201D", impact: "Implies grief is being handled wrong", color: "#8F82CD" },
    { pattern: "Rushing", example: "\u201CIt\u2019s been 6 months...\u201D", impact: "Imposes timeline on natural process", color: "#D97A8B" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(239,68,68,0.02)", border: "1px solid rgba(239,68,68,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Five harmful response patterns</p>
      <div className="space-y-2">
        {patterns.map((p) => (
          <div key={p.pattern} className="grid grid-cols-[1fr_1fr] sm:grid-cols-[120px_1fr_1fr] gap-2 items-center rounded-lg p-3" style={{ background: `${p.color}04`, border: `1px solid ${p.color}10` }}>
            <p className="text-[11px] font-semibold" style={{ color: p.color }}>{p.pattern}</p>
            <p className="text-[10px] italic hidden sm:block" style={{ color: "var(--color-body)" }}>{p.example}</p>
            <p className="text-[10px]" style={{ color: "var(--color-foreground)" }}>{p.impact}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function SupportiveCommunicationGraphic() {
  const principles = [
    { do: "Validate the reality", example: "\u201CThis is devastating. I\u2019m so sorry.\u201D", color: "#63D583" },
    { do: "Name the person", example: "\u201CI\u2019ve been thinking about David.\u201D", color: "#8A8EE5" },
    { do: "Offer specific help", example: "\u201CI\u2019m bringing dinner Tuesday.\u201D", color: "#E59524" },
    { do: "Follow up long-term", example: "\u201CI haven\u2019t forgotten. How are you?\u201D", color: "#D97A8B" },
    { do: "Ask before advising", example: "\u201CWould it help if I shared...?\u201D", color: "#8F82CD" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(99,213,131,0.03)", border: "1px solid rgba(99,213,131,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Evidence-based supportive responses</p>
      <div className="space-y-2">
        {principles.map((p) => (
          <div key={p.do} className="flex items-center gap-3 rounded-lg p-3" style={{ background: `${p.color}05`, border: `1px solid ${p.color}10` }}>
            <div className="shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="6" stroke={p.color} strokeWidth="1.2" />
                <path d="M5.5 8l2 2 3.5-3.5" stroke={p.color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-[11px] font-semibold" style={{ color: "var(--color-foreground)" }}>{p.do}</p>
              <p className="text-[10px] italic" style={{ color: "var(--color-body)" }}>{p.example}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmployerBenefitsTier() {
  const tiers = [
    { label: "Standard", days: "3 days", description: "Immediate family only", color: "#94A3B8" },
    { label: "Progressive", days: "10 days", description: "Extended family, flexible return", color: "#8A8EE5" },
    { label: "Leading", days: "20 days", description: "Broad definition, grief support, phased return", color: "#63D583" },
  ];
  return (
    <div className="my-8 rounded-2xl p-5 sm:p-6" style={{ background: "rgba(99,213,131,0.03)", border: "1px solid rgba(99,213,131,0.08)" }}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.12em] mb-4 text-center" style={{ color: "var(--color-muted)" }}>Bereavement policy tiers</p>
      <div className="flex items-end gap-3 justify-center">
        {tiers.map((t) => (
          <div key={t.label} className="flex-1 max-w-[140px] text-center">
            <div className="rounded-xl p-3 mb-2" style={{ background: `${t.color}08`, border: `1px solid ${t.color}18`, minHeight: t.label === "Leading" ? "100px" : t.label === "Progressive" ? "80px" : "60px", display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
              <p className="text-[18px] font-serif" style={{ color: t.color }}>{t.days}</p>
            </div>
            <p className="text-[10px] font-semibold mb-0.5" style={{ color: "var(--color-foreground)" }}>{t.label}</p>
            <p className="text-[9px]" style={{ color: "var(--color-body)" }}>{t.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════
   PER-POST VISUAL INSERTS
   ═══════════════════════════════════════════════════ */
const postVisuals: Record<string, Record<number, React.ReactNode>> = {
  /* Existing posts */
  "what-to-do-first-30-days-after-loss": {
    0: (
      <Callout icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#8A8EE5" strokeWidth="1.5" /><path d="M10 6v4l2.5 1.5" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" /></svg>}>
        <strong>Remember:</strong> Very few things truly need to happen today. Give yourself permission to move at your own pace.
      </Callout>
    ),
    1: <TimelineGraphic />,
  },
  "hidden-financial-cost-of-grief": {
    0: (
      <StatGrid stats={[
        { value: "$15.5B", label: "Unclaimed benefits yearly", color: "#E59524" },
        { value: "570 hrs", label: "Admin work per estate", color: "#8A8EE5" },
        { value: "16 mo", label: "Average timeline", color: "#8F82CD" },
      ]} />
    ),
    1: <DeadlineAlertGraphic />,
  },
  "supporting-grieving-employee-guide": {
    0: (
      <StatGrid stats={[
        { value: "2.8M+", label: "Deaths in the U.S. each year", color: "#63D583" },
        { value: "57%", label: "Employees feel unsupported", color: "#E59524" },
        { value: "3x", label: "More likely to stay when supported", color: "#8A8EE5" },
      ]} />
    ),
    2: (
      <Callout variant="green" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#63D583" strokeWidth="1.5" /><path d="M7 10l2 2 4-4" stroke="#63D583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}>
        <strong>Pro tip:</strong> Don&rsquo;t ask &ldquo;How are you?&rdquo; Instead try: &ldquo;What would help you most this week?&rdquo;
      </Callout>
    ),
  },
  "estate-administration-beginners-guide": {
    1: <StagesGraphic />,
    2: (
      <Callout variant="warm" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><path d="M10 3l1.5 4.5H16l-3.5 2.5 1 4.5L10 12l-3.5 2.5 1-4.5L4 7.5h4.5z" stroke="#E59524" strokeWidth="1.3" fill="none" /></svg>}>
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
      <StatGrid stats={[
        { value: "80%", label: "Wish people said the person\u2019s name", color: "#D97A8B" },
        { value: "2 wks", label: "When most support disappears", color: "#E59524" },
        { value: "1 in 3", label: "Feel isolated by others\u2019 responses", color: "#8A8EE5" },
      ]} />
    ),
    1: <DosDontsGraphic />,
    3: <SupportTimelineGraphic />,
  },

  /* ─── NEW POSTS ─── */
  "notifications-after-death-complete-guide": {
    0: (
      <StatGrid stats={[
        { value: "30\u201340+", label: "Organizations to notify", color: "#E59524" },
        { value: "15\u201320", label: "Death certificates needed", color: "#8A8EE5" },
        { value: "570 hrs", label: "Total admin work", color: "#8F82CD" },
      ]} />
    ),
    1: <NotificationChecklist />,
  },
  "navigating-loss-months-years-later": {
    0: (
      <Callout variant="warm" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#E59524" strokeWidth="1.5" /><path d="M10 6v4l2.5 1.5" stroke="#E59524" strokeWidth="1.5" strokeLinecap="round" /></svg>}>
        <strong>You\u2019re not behind.</strong> Roughly 40% of bereaved individuals don&rsquo;t complete estate tasks within the first year. You&rsquo;re arriving at this work when you&rsquo;re ready.
      </Callout>
    ),
    1: (
      <StatGrid stats={[
        { value: "No limit", label: "Life insurance claims", color: "#63D583" },
        { value: "6 mo", label: "SS retroactive lookback", color: "#E59524" },
        { value: "3 yrs", label: "Tax refund window", color: "#8A8EE5" },
      ]} />
    ),
  },
  "survivor-benefits-families-never-claim": {
    0: (
      <StatGrid stats={[
        { value: "$15B+", label: "Unclaimed annually", color: "#E59524" },
        { value: "$1,900+", label: "SS survivor monthly", color: "#8A8EE5" },
        { value: "$1,600+", label: "VA DIC monthly", color: "#63D583" },
      ]} />
    ),
    1: <BenefitsDiscoveryGraphic />,
  },
  "filing-taxes-after-death-guide": {
    0: (
      <Callout icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#8A8EE5" strokeWidth="1.5" /><path d="M10 6v5M10 13.5v.5" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" /></svg>}>
        <strong>Key insight:</strong> A surviving spouse can file jointly for the year of death, which typically results in thousands of dollars in tax savings compared to filing separately.
      </Callout>
    ),
    2: <TaxTimelineGraphic />,
  },
  "probate-costs-timeline-avoidance": {
    1: <ProbateCostTable />,
    3: (
      <Callout variant="green" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#63D583" strokeWidth="1.5" /><path d="M7 10l2 2 4-4" stroke="#63D583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}>
        <strong>Good news:</strong> Many assets bypass probate entirely. Life insurance, retirement accounts with beneficiaries, jointly-held property, and assets in a living trust all transfer without court involvement.
      </Callout>
    ),
  },
  "digital-estate-planning-online-accounts": {
    1: <PlatformPoliciesGraphic />,
    2: (
      <StatGrid stats={[
        { value: "$140B+", label: "Inaccessible crypto (lost keys)", color: "#8F82CD" },
        { value: "100+", label: "Avg. online accounts per person", color: "#8A8EE5" },
        { value: "12\u201324", label: "Words in crypto seed phrase", color: "#E59524" },
      ]} />
    ),
  },
  "bereavement-leave-policies-america": {
    1: <BereavementLeaveComparison />,
    3: (
      <Callout variant="green" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#63D583" strokeWidth="1.5" /><path d="M10 6v4l2.5 1.5" stroke="#63D583" strokeWidth="1.5" strokeLinecap="round" /></svg>}>
        <strong>Tip:</strong> Even if your state has no bereavement leave law, grief-related health conditions can qualify for FMLA protection. Talk to your doctor about your symptoms.
      </Callout>
    ),
  },
  "employer-guide-bereavement-benefits": {
    0: (
      <StatGrid stats={[
        { value: "8\u201312M", label: "Workers bereaved annually", color: "#63D583" },
        { value: "$75B", label: "Cost of grief presenteeism", color: "#E59524" },
        { value: "3x", label: "Retention with good support", color: "#8A8EE5" },
      ]} />
    ),
    2: <EmployerBenefitsTier />,
  },
  "grief-brain-neuroscience-of-loss": {
    0: <GriefBrainGraphic />,
    2: (
      <StatGrid stats={[
        { value: "21x", label: "Heart attack risk increase (24 hrs)", color: "#D97A8B" },
        { value: "30 days", label: "Avg. reduced productivity", color: "#E59524" },
        { value: "2 yrs", label: "Elevated mortality risk for spouses", color: "#8F82CD" },
      ]} />
    ),
  },
  "beyond-five-stages-modern-grief-science": {
    1: <DualProcessGraphic />,
    3: (
      <StatGrid stats={[
        { value: "7\u201310%", label: "Experience complicated grief", color: "#D97A8B" },
        { value: "1969", label: "K\u00FCbler-Ross 5 stages published", color: "#8A8EE5" },
        { value: "1999", label: "Dual Process Model introduced", color: "#63D583" },
      ]} />
    ),
  },
  "helping-children-understand-death": {
    0: <ChildDevelopmentStages />,
    4: (
      <Callout variant="rose" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#6BA3D9" strokeWidth="1.5" /><path d="M10 6v5M10 13.5v.5" stroke="#6BA3D9" strokeWidth="1.5" strokeLinecap="round" /></svg>}>
        <strong>For teenagers:</strong> Grief during adolescence intersects with identity formation. Respect their need for both closeness and independence, and watch for risk behaviors.
      </Callout>
    ),
  },
  "when-grief-divides-family": {
    0: (
      <StatGrid stats={[
        { value: "25\u201330%", label: "Families with conflict after loss", color: "#6BA3D9" },
        { value: "#1", label: "Estate disputes are most common", color: "#E59524" },
        { value: "Lasting", label: "Relationship damage risk", color: "#D97A8B" },
      ]} />
    ),
    1: <FamilyConflictSources />,
  },
  "death-taboo-why-we-avoid-talking-about-dying": {
    0: (
      <StatGrid stats={[
        { value: "67%", label: "Americans with no will", color: "#D97A8B" },
        { value: "27%", label: "Have discussed end-of-life wishes", color: "#E59524" },
        { value: "$15.5B", label: "Unclaimed survivor benefits/yr", color: "#8A8EE5" },
      ]} />
    ),
    1: <TMTDefensesGraphic />,
    3: <DeathLiteracyDimensions />,
  },
  "language-of-grief-how-words-help-and-harm": {
    1: (
      <Callout variant="rose" icon={<svg width="20" height="20" viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="8" stroke="#6BA3D9" strokeWidth="1.5" /><path d="M10 6v5M10 13.5v.5" stroke="#6BA3D9" strokeWidth="1.5" strokeLinecap="round" /></svg>}>
        <strong>Key insight:</strong> Being dismissed in grief activates the same neural circuits as physical pain. Being heard is not merely comforting — it is physiologically regulatory.
      </Callout>
    ),
    2: <HarmfulResponsePatterns />,
    3: <SupportiveCommunicationGraphic />,
  },
};

/* ═══════════════════════════════════════════════════
   PAGE COMPONENT
   ═══════════════════════════════════════════════════ */
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
      <WarmGlow />

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
              All resources
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
