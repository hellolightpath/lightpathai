"use client";

/**
 * LiveProductDemo
 *
 * The product made visible. Five capabilities, in Sara's order:
 *   01 Your Path        Knows what needs doing.
 *   02 Benefits         Finds the money you don't know is yours.
 *   03 Find Care        Connects you to the right help.
 *   04 Discover         Teaches you through it and holds the
 *                       emotional weight.
 *   05 Intelligence     Adapts in real time.
 *
 * Click a tab → the panel below crossfades to the matching surface.
 * No SaaS chrome. No glass cards. No mockup icons. Each panel is a
 * single editorial composition that captures the essence of the
 * surface in type and one quiet UI hint.
 */

import { useState, useCallback, useEffect, type ReactNode } from "react";

type Capability = {
  id: string;
  num: string;
  surface: string;
  title: string;
  Panel: () => ReactNode;
};

const capabilities: Capability[] = [
  { id: "path",         num: "01", surface: "Your Path",    title: "Knows what needs doing.",                                Panel: PathPanel },
  { id: "benefits",     num: "02", surface: "Benefits",     title: "Finds the money you don't know is yours.",               Panel: BenefitsPanel },
  { id: "find-care",    num: "03", surface: "Find Care",    title: "Connects you to the right help.",                        Panel: FindCarePanel },
  { id: "discover",     num: "04", surface: "Discover",     title: "Teaches you through it. Holds the emotional weight.",   Panel: DiscoverPanel },
  { id: "intelligence", num: "05", surface: "Intelligence", title: "Adapts in real time.",                                   Panel: IntelligencePanel },
];

export function LiveProductDemo() {
  const [active, setActive] = useState(0);

  const onKey = useCallback((e: KeyboardEvent) => {
    if (e.key === "ArrowRight") setActive((i) => (i + 1) % capabilities.length);
    if (e.key === "ArrowLeft")  setActive((i) => (i - 1 + capabilities.length) % capabilities.length);
  }, []);

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const cap = capabilities[active];
  const Panel = cap.Panel;

  return (
    <div>
      {/* Tab list */}
      <div role="tablist" aria-label="Product capabilities" className="-mx-6 sm:mx-0 overflow-x-auto">
        <div className="flex min-w-max sm:grid sm:grid-cols-5 px-6 sm:px-0">
          {capabilities.map((c, i) => {
            const isActive = i === active;
            return (
              <button
                key={c.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${c.id}`}
                id={`tab-${c.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                className="text-left px-5 sm:px-4 py-5 sm:py-6 transition-colors duration-300 min-w-[200px] sm:min-w-0"
                style={{
                  borderTop: `1px solid ${isActive ? "var(--color-primary)" : "var(--color-border-light)"}`,
                  background: isActive ? "var(--color-surface)" : "transparent",
                }}
              >
                <p
                  className="text-[10px] uppercase mb-1"
                  style={{ color: isActive ? "var(--color-primary)" : "var(--color-muted)", letterSpacing: "0.18em" }}
                >
                  {c.num}
                </p>
                <p
                  className="text-[14px] sm:text-[15px] font-serif leading-[1.2]"
                  style={{ color: isActive ? "var(--color-foreground)" : "var(--color-body)", fontWeight: 500, letterSpacing: "-0.015em" }}
                >
                  {c.surface}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active panel */}
      <div
        role="tabpanel"
        id={`panel-${cap.id}`}
        aria-labelledby={`tab-${cap.id}`}
        key={cap.id}
        className="phase-panel mt-12 sm:mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start"
      >
        <div className="lg:col-span-5">
          <p
            className="text-[11px] font-semibold uppercase mb-6"
            style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}
          >
            {cap.surface}
          </p>
          <h3
            className="font-serif leading-[1.06]"
            style={{
              fontSize: "clamp(2rem, 4vw, 2.75rem)",
              color: "var(--color-foreground)",
              letterSpacing: "-0.035em",
              fontWeight: 500,
            }}
          >
            {cap.title}
          </h3>
        </div>
        <div className="lg:col-span-7">
          <div
            className="relative w-full overflow-hidden"
            style={{
              aspectRatio: "16 / 11",
              background: "#FAFAF8",
              borderRadius: "8px",
              boxShadow: "0 1px 2px rgba(61,54,48,0.04), 0 8px 32px rgba(61,54,48,0.06)",
              border: "1px solid var(--color-border-light)",
            }}
          >
            <Panel />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════
   PANELS — each is a single editorial composition. Type-led, sparse.
   No icons. No glass. The product made visible without becoming a
   screenshot.
   ═══════════════════════════════════════════════════════════════════ */

/* ───── 01. Your Path — task list with editorial state column ───── */
function PathPanel() {
  const tasks = [
    { task: "Notify employer about leave",       state: "Drafted",            tone: "primary" as const },
    { task: "Request 12 death certificates",     state: "Due tomorrow",       tone: "warn" as const },
    { task: "File for Social Security survivor", state: "In progress",        tone: "muted" as const },
    { task: "Cancel subscriptions",              state: "Shared with David",  tone: "primary" as const },
    { task: "Schedule meeting with attorney",    state: "Drafted",            tone: "primary" as const },
  ];
  return (
    <div className="absolute inset-0 p-7 sm:p-10 flex flex-col">
      <div className="flex items-baseline justify-between" style={{ borderBottom: "1px solid var(--color-border-light)", paddingBottom: "0.875rem" }}>
        <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>Today</p>
        <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>May 6</p>
      </div>
      <ul className="mt-1">
        {tasks.map((t) => (
          <li
            key={t.task}
            className="grid grid-cols-12 gap-3 sm:gap-6 items-baseline py-3 sm:py-3.5"
            style={{ borderBottom: "1px solid var(--color-border-light)" }}
          >
            <span className="col-span-7 sm:col-span-8 text-[13px] sm:text-[14px] leading-[1.5]" style={{ color: "var(--color-foreground)" }}>
              {t.task}
            </span>
            <span
              className="col-span-5 sm:col-span-4 text-right text-[10px] uppercase"
              style={{
                letterSpacing: "0.16em",
                color:
                  t.tone === "warn"    ? "var(--color-coral)" :
                  t.tone === "primary" ? "var(--color-primary)" :
                                         "var(--color-muted)",
              }}
            >
              {t.state}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-4 text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
        17 of 167 tasks · sequenced for your timeline
      </p>
    </div>
  );
}

/* ───── 02. Benefits — running scan with $ amounts surfacing ───── */
function BenefitsPanel() {
  const found = [
    { name: "Social Security survivor benefit", amount: "$1,920 / mo", state: "Found" },
    { name: "State unclaimed property",         amount: "$3,400",      state: "Found" },
    { name: "Veterans burial benefit",          amount: "$2,800",      state: "Found" },
    { name: "IRS final return credit",          amount: "—",            state: "Reviewing" },
  ];
  return (
    <div className="absolute inset-0 p-7 sm:p-10 flex flex-col">
      <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>Benefits discovery</p>
      <p
        className="mt-3 font-serif leading-[1.0]"
        style={{
          fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
          letterSpacing: "-0.045em",
          color: "var(--color-foreground)",
          fontWeight: 500,
        }}
      >
        $8,120
      </p>
      <p className="mt-2 text-[12px]" style={{ color: "var(--color-body)" }}>estimated total · so far</p>

      <ul className="mt-5">
        {found.map((b) => (
          <li
            key={b.name}
            className="grid grid-cols-12 gap-3 items-baseline py-2.5"
            style={{ borderTop: "1px solid var(--color-border-light)" }}
          >
            <span className="col-span-7 text-[13px]" style={{ color: "var(--color-foreground)" }}>{b.name}</span>
            <span className="col-span-3 text-right text-[12px]" style={{ color: "var(--color-body)" }}>{b.amount}</span>
            <span
              className="col-span-2 text-right text-[9px] uppercase"
              style={{
                color: b.state === "Found" ? "var(--color-sage)" : "var(--color-muted)",
                letterSpacing: "0.18em",
              }}
            >
              {b.state}
            </span>
          </li>
        ))}
        <li style={{ borderTop: "1px solid var(--color-border-light)", height: 0 }} aria-hidden="true" />
      </ul>

      <p className="mt-auto pt-4 text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
        Scanning · 8 of 39 programs
      </p>
    </div>
  );
}

/* ───── 03. Find Care — provider directory ───── */
function FindCarePanel() {
  const providers = [
    { name: "Maria Chen, LMFT",   specialty: "Grief specialist · spousal loss",        meta: "15 min away" },
    { name: "David Park, JD",     specialty: "Estate attorney · 12 yrs probate",       meta: "Virtual" },
    { name: "Sarah Bennet, ELD",  specialty: "End-of-life doula · bereaved spouse",    meta: "Bay Area" },
    { name: "Rev. Anita Hall",    specialty: "Faith-based counsel · interfaith",       meta: "30 min away" },
  ];
  return (
    <div className="absolute inset-0 p-7 sm:p-10 flex flex-col">
      <div className="flex items-baseline justify-between" style={{ borderBottom: "1px solid var(--color-border-light)", paddingBottom: "0.875rem" }}>
        <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>Find Care</p>
        <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>Matched to you</p>
      </div>
      <ul className="mt-1">
        {providers.map((p) => (
          <li
            key={p.name}
            className="grid grid-cols-12 gap-3 sm:gap-6 items-baseline py-3 sm:py-4"
            style={{ borderBottom: "1px solid var(--color-border-light)" }}
          >
            <div className="col-span-9 sm:col-span-9">
              <p
                className="font-serif text-[15px] sm:text-[16px] leading-[1.2]"
                style={{ color: "var(--color-foreground)", fontWeight: 500, letterSpacing: "-0.015em" }}
              >
                {p.name}
              </p>
              <p className="mt-1 text-[12px] leading-[1.4]" style={{ color: "var(--color-body)" }}>{p.specialty}</p>
            </div>
            <span
              className="col-span-3 text-right text-[10px] uppercase"
              style={{ color: "var(--color-primary)", letterSpacing: "0.16em" }}
            >
              {p.meta}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-auto pt-4 text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
        22 grief-aware categories · 6-dimension match
      </p>
    </div>
  );
}

/* ───── 04. Discover — reflection prompt + framework citation ───── */
function DiscoverPanel() {
  return (
    <div className="absolute inset-0 p-7 sm:p-10 flex flex-col">
      <div className="flex items-baseline justify-between">
        <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>Inner Light · Tuesday evening</p>
        <p className="text-[10px] uppercase" style={{ color: "var(--color-sage)", letterSpacing: "0.22em" }}>Reflection</p>
      </div>

      <div className="my-auto py-6">
        <p className="text-[10px] uppercase mb-5" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>Tonight&rsquo;s prompt</p>
        <p
          className="font-serif italic leading-[1.2]"
          style={{
            fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            color: "var(--color-foreground)",
            letterSpacing: "-0.02em",
            fontWeight: 500,
          }}
        >
          What did he teach you
          <br />
          about how to live?
        </p>
        <div className="mt-7" style={{ borderTop: "1px solid var(--color-border-light)", maxWidth: "8rem" }} />
        <p className="mt-7 text-[12px] leading-[1.7]" style={{ color: "var(--color-body)" }}>
          From <span style={{ color: "var(--color-foreground)" }}>Continuing Bonds</span>.
          <br />
          Klass, Silverman &amp; Nickman, 1996.
        </p>
      </div>

      <div className="flex items-baseline justify-between pt-4" style={{ borderTop: "1px solid var(--color-border-light)" }}>
        <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>17 entries</p>
        <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>9 frameworks engaged</p>
      </div>
    </div>
  );
}

/* ───── 05. Intelligence — adaptive mode indicator ───── */
function IntelligencePanel() {
  return (
    <div className="absolute inset-0 p-7 sm:p-10 flex flex-col">
      <p className="text-[10px] uppercase" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>Adaptive layer</p>

      <div className="mt-6">
        <p className="text-[11px] uppercase" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>Now reading</p>
        <p
          className="mt-2 font-serif leading-[1.0]"
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-foreground)",
            letterSpacing: "-0.04em",
            fontWeight: 500,
          }}
        >
          Gentle.
        </p>
      </div>

      {/* Mode bar — five subtle segments, current one filled. */}
      <div className="mt-7 grid grid-cols-5 gap-2">
        {[
          { label: "Crisis",     active: false },
          { label: "Gentle",     active: true  },
          { label: "Steady",     active: false },
          { label: "Reflection", active: false },
          { label: "Growth",     active: false },
        ].map((m) => (
          <div key={m.label}>
            <div
              style={{
                height: "3px",
                background: m.active ? "var(--color-primary)" : "var(--color-border-light)",
                borderRadius: "2px",
              }}
            />
            <p
              className="mt-2 text-[10px] uppercase"
              style={{
                color: m.active ? "var(--color-foreground)" : "var(--color-muted)",
                letterSpacing: "0.16em",
              }}
            >
              {m.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-auto pt-5" style={{ borderTop: "1px solid var(--color-border-light)" }}>
        <p className="text-[12px] leading-[1.65]" style={{ color: "var(--color-body)" }}>
          Tasks deferred until tomorrow. Tone softened. Clinical content paused.
          <br />
          <span style={{ color: "var(--color-muted)" }}>32 signals · 6 instruments · read continuously</span>
        </p>
      </div>
    </div>
  );
}
