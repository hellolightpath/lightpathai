"use client";

import { useState, useEffect, useCallback } from "react";

/* ── Feature data ── */
const features = [
  {
    id: "care-plan",
    name: "Care Plan",
    tagline: "AI-guided task management",
    desc: "A structured plan built around their specific loss. AI Assist drafts letters, fills forms, and walks them through every task — nothing sends without approval.",
    color: "#8A8EE5",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" stroke="#8A8EE5" strokeWidth="1.2" strokeLinejoin="round" />
      </svg>
    ),
    /* mini-mockup: task list with completion */
    mockup: (
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {[
          { task: "Notify employer of bereavement", status: "done", tag: "Drafted by Assist" },
          { task: "File survivor benefits claim", status: "done", tag: "Form pre-filled" },
          { task: "Request death certificates (3)", status: "active", tag: "In progress" },
          { task: "Update insurance beneficiaries", status: "pending", tag: "Upcoming" },
        ].map((t, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              padding: "7px 10px",
              borderRadius: "8px",
              background: t.status === "active" ? "rgba(138,142,229,0.08)" : "rgba(255,255,255,0.02)",
              border: t.status === "active" ? "1px solid rgba(138,142,229,0.15)" : "1px solid rgba(255,255,255,0.04)",
              transition: "all 0.3s ease",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "4px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: t.status === "done" ? "rgba(138,142,229,0.2)" : "transparent",
                border: t.status === "done" ? "none" : "1.5px solid rgba(255,255,255,0.12)",
                flexShrink: 0,
              }}
            >
              {t.status === "done" && (
                <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5l2.5 2.5L8 3" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
            <span
              style={{
                fontSize: "9px",
                color: t.status === "done" ? "rgba(255,255,255,0.25)" : t.status === "active" ? "#fff" : "rgba(255,255,255,0.4)",
                textDecoration: t.status === "done" ? "line-through" : "none",
                flex: 1,
              }}
            >
              {t.task}
            </span>
            <span
              style={{
                fontSize: "7px",
                fontWeight: 600,
                padding: "2px 6px",
                borderRadius: "20px",
                background:
                  t.status === "done"
                    ? "rgba(138,142,229,0.1)"
                    : t.status === "active"
                    ? "rgba(138,142,229,0.15)"
                    : "rgba(255,255,255,0.04)",
                color:
                  t.status === "done" || t.status === "active"
                    ? "#8A8EE5"
                    : "rgba(255,255,255,0.2)",
                flexShrink: 0,
              }}
            >
              {t.tag}
            </span>
          </div>
        ))}
      </div>
    ),
    stat: "72",
    statLabel: "hrs saved avg",
    kpis: [
      { label: "Hours saved per employee", value: "72", color: "#8A8EE5" },
      { label: "Faster estate resolution", value: "50%", color: "#63D583" },
      { label: "Documents automated", value: "40+", color: "#E59524" },
    ],
  },
  {
    id: "benefits",
    name: "Benefits",
    tagline: "Automated discovery",
    desc: "Scans their situation — state, loss type, relationship — and surfaces benefits they didn't know existed. Social Security, employer insurance, unclaimed funds, tax credits.",
    color: "#8F82CD",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <circle cx="7" cy="7" r="4.5" stroke="#8F82CD" strokeWidth="1.2" />
        <path d="M10.5 10.5l3 3" stroke="#8F82CD" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    /* mini-mockup: found benefits list */
    mockup: (
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        {[
          { benefit: "Social Security Survivor Benefits", amount: "$1,860/mo", found: true },
          { benefit: "Employer Group Life Insurance", amount: "$50,000", found: true },
          { benefit: "State Unclaimed Property", amount: "$2,340", found: true },
          { benefit: "Dependent Care Tax Credit", amount: "~$3,000", found: false },
        ].map((b, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "7px 10px",
              borderRadius: "8px",
              background: b.found ? "rgba(143,130,205,0.06)" : "rgba(255,255,255,0.02)",
              border: b.found ? "1px solid rgba(143,130,205,0.12)" : "1px solid rgba(255,255,255,0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <div
                style={{
                  width: "14px",
                  height: "14px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: b.found ? "rgba(143,130,205,0.2)" : "rgba(255,255,255,0.05)",
                  flexShrink: 0,
                }}
              >
                {b.found && (
                  <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5L8 3" stroke="#8F82CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>
              <span style={{ fontSize: "9px", color: b.found ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.25)" }}>
                {b.benefit}
              </span>
            </div>
            <span
              style={{
                fontSize: "9px",
                fontWeight: 600,
                color: b.found ? "#8F82CD" : "rgba(255,255,255,0.2)",
                flexShrink: 0,
              }}
            >
              {b.amount}
            </span>
          </div>
        ))}
      </div>
    ),
    stat: "$8.4k",
    statLabel: "avg recovered",
    kpis: [
      { label: "Avg benefits recovered", value: "$8.4k", color: "#8F82CD" },
      { label: "Claim completion rate", value: "94%", color: "#63D583" },
      { label: "ROI per employee", value: "3.2x", color: "#E59524" },
    ],
  },
  {
    id: "inner-light",
    name: "Inner Light",
    tagline: "Emotional grounding",
    desc: "A private space for guided journaling, breathing exercises, and reflection — adapting to where they are emotionally. Not therapy. A companion for the quiet moments.",
    color: "#63D583",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <circle cx="8" cy="8" r="5" stroke="#63D583" strokeWidth="1.2" />
        <circle cx="8" cy="8" r="2.5" stroke="#63D583" strokeWidth="1.2" strokeDasharray="2 2" />
      </svg>
    ),
    /* mini-mockup: reflection interface */
    mockup: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div
          style={{
            padding: "10px 12px",
            borderRadius: "10px",
            background: "rgba(99,213,131,0.06)",
            border: "1px solid rgba(99,213,131,0.12)",
          }}
        >
          <div style={{ fontSize: "8px", fontWeight: 600, color: "#63D583", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Today&apos;s reflection
          </div>
          <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.45)", lineHeight: "1.6", fontStyle: "italic" }}>
            &ldquo;What is one thing you did today that took courage, even if it felt small?&rdquo;
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {[
            { label: "Journal", active: true },
            { label: "Breathe", active: false },
            { label: "Reflect", active: false },
          ].map((tool) => (
            <div
              key={tool.label}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "8px",
                textAlign: "center" as const,
                background: tool.active ? "rgba(99,213,131,0.1)" : "rgba(255,255,255,0.02)",
                border: tool.active ? "1px solid rgba(99,213,131,0.15)" : "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div style={{ fontSize: "9px", fontWeight: 500, color: tool.active ? "#63D583" : "rgba(255,255,255,0.25)" }}>
                {tool.label}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 10px",
            borderRadius: "8px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.04)",
          }}
        >
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#63D583" }} />
          <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.3)" }}>
            Adapting to: early grief &middot; week 3
          </span>
        </div>
      </div>
    ),
    stat: "4.8",
    statLabel: "/ 5 wellbeing",
    kpis: [
      { label: "Wellbeing improvement", value: "78%", color: "#63D583" },
      { label: "User satisfaction", value: "4.8/5", color: "#8A8EE5" },
      { label: "Weekly engagement", value: "3.2x", color: "#8F82CD" },
    ],
  },
  {
    id: "lightkeeper",
    name: "LightKeeper",
    tagline: "AI companionship",
    desc: "16 specialized AI companions matched by loss type and relationship. Remembers your story, adapts to your emotional state, and is there whenever you need \u2014 day or night.",
    color: "#E59524",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none">
        <path d="M8 13.5S2 10 2 6a3 3 0 015.5-1.7L8 5l.5-.7A3 3 0 0114 6c0 4-6 7.5-6 7.5z" stroke="#E59524" strokeWidth="1.2" />
      </svg>
    ),
    /* mini-mockup: companion match card */
    mockup: (
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <div
          style={{
            padding: "10px 12px",
            borderRadius: "10px",
            background: "rgba(229,149,36,0.06)",
            border: "1px solid rgba(229,149,36,0.12)",
          }}
        >
          <div style={{ fontSize: "8px", fontWeight: 600, color: "#E59524", marginBottom: "8px", textTransform: "uppercase", letterSpacing: "0.08em" }}>
            Your companion match
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(229,149,36,0.2), rgba(229,149,36,0.08))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "11px",
                fontWeight: 600,
                color: "#E59524",
                flexShrink: 0,
              }}
            >
              MR
            </div>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 500, color: "#fff" }}>Maria R.</div>
              <div style={{ fontSize: "8px", color: "rgba(255,255,255,0.3)", marginTop: "2px" }}>
                Loss of spouse &middot; 2 years ago &middot; Trained companion
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", gap: "6px" }}>
          {[
            { label: "Loss type", value: "Spouse", match: true },
            { label: "Life stage", value: "Parent", match: true },
            { label: "Available", value: "This week", match: false },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                flex: 1,
                padding: "6px 8px",
                borderRadius: "8px",
                background: item.match ? "rgba(229,149,36,0.06)" : "rgba(255,255,255,0.02)",
                border: item.match ? "1px solid rgba(229,149,36,0.1)" : "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <div style={{ fontSize: "7px", color: "rgba(255,255,255,0.2)", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {item.label}
              </div>
              <div style={{ fontSize: "9px", fontWeight: 500, color: item.match ? "#E59524" : "rgba(255,255,255,0.4)", marginTop: "2px" }}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            padding: "6px 10px",
            borderRadius: "8px",
            background: "rgba(229,149,36,0.06)",
            border: "1px solid rgba(229,149,36,0.08)",
          }}
        >
          <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#63D583" }} />
          <span style={{ fontSize: "8px", color: "rgba(255,255,255,0.35)" }}>
            97% match score
          </span>
        </div>
      </div>
    ),
    stat: "92%",
    statLabel: "felt supported",
    kpis: [
      { label: "Felt meaningfully supported", value: "92%", color: "#E59524" },
      { label: "Match satisfaction", value: "97%", color: "#63D583" },
      { label: "Connections restored", value: "4.2", color: "#8A8EE5" },
    ],
  },
];

export function EnterpriseDashboard() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goTo = useCallback(
    (idx: number) => {
      if (idx === activeIdx) return;
      setTransitioning(true);
      setTimeout(() => {
        setActiveIdx(idx);
        setTimeout(() => setTransitioning(false), 50);
      }, 250);
    },
    [activeIdx]
  );

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setTransitioning(true);
      setTimeout(() => {
        setActiveIdx((prev) => (prev + 1) % features.length);
        setTimeout(() => setTransitioning(false), 50);
      }, 250);
    }, 4000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const active = features[activeIdx];

  return (
    <div
      className="lg:sticky lg:top-24 rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 25px 80px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.03)",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-4 py-2.5"
        style={{
          background: "rgba(255,255,255,0.02)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="flex gap-1.5">
          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,95,87,0.7)" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(255,189,46,0.7)" }} />
          <div className="w-2 h-2 rounded-full" style={{ background: "rgba(39,201,63,0.7)" }} />
        </div>
        <div className="flex-1 mx-4">
          <div
            className="rounded-full px-3 py-1 text-[10px] text-center flex items-center justify-center gap-1.5"
            style={{
              background: "rgba(255,255,255,0.04)",
              color: "rgba(255,255,255,0.25)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none">
              <rect x="1" y="1" width="8" height="8" rx="2" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
            </svg>
            app.lightpathai.com/dashboard
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-5">
        {/* Admin header */}
        <div
          className="flex items-center justify-between mb-4 pb-3"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="flex items-center gap-3">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center text-[9px] font-bold"
              style={{ background: "rgba(229,149,36,0.15)", color: "#E59524" }}
            >
              AC
            </div>
            <div>
              <div className="text-[11px] font-medium text-white">Acme Corp</div>
              <div className="text-[9px]" style={{ color: "rgba(255,255,255,0.2)" }}>
                Benefits Admin
              </div>
            </div>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#63D583" }} />
            <span className="text-[9px]" style={{ color: "rgba(255,255,255,0.25)" }}>
              Live
            </span>
          </div>
        </div>

        {/* ── Feature tab bar ── */}
        <div className="flex gap-1.5 mb-4">
          {features.map((f, i) => (
            <button
              key={f.id}
              onClick={() => goTo(i)}
              style={{
                flex: 1,
                padding: "8px 4px",
                borderRadius: "10px",
                background: i === activeIdx ? `${f.color}12` : "rgba(255,255,255,0.02)",
                border: i === activeIdx ? `1px solid ${f.color}20` : "1px solid rgba(255,255,255,0.04)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                display: "flex",
                flexDirection: "column" as const,
                alignItems: "center",
                gap: "5px",
              }}
            >
              <div
                style={{
                  width: "24px",
                  height: "24px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: i === activeIdx ? `${f.color}18` : "rgba(255,255,255,0.04)",
                  transition: "all 0.3s ease",
                }}
              >
                <div style={{ opacity: i === activeIdx ? 1 : 0.3, transition: "opacity 0.3s ease" }}>
                  {f.icon}
                </div>
              </div>
              <span
                style={{
                  fontSize: "8px",
                  fontWeight: 600,
                  color: i === activeIdx ? f.color : "rgba(255,255,255,0.2)",
                  transition: "color 0.3s ease",
                  whiteSpace: "nowrap" as const,
                }}
              >
                {f.name}
              </span>
              {/* progress bar under active tab */}
              <div
                style={{
                  width: "100%",
                  height: "2px",
                  borderRadius: "1px",
                  background: i === activeIdx ? `${f.color}15` : "transparent",
                  overflow: "hidden",
                }}
              >
                {i === activeIdx && !isPaused && (
                  <div
                    style={{
                      height: "100%",
                      background: f.color,
                      borderRadius: "1px",
                      animation: "lpProgressBar 4s linear forwards",
                    }}
                  />
                )}
                {i === activeIdx && isPaused && (
                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      background: f.color,
                      borderRadius: "1px",
                      opacity: 0.5,
                    }}
                  />
                )}
              </div>
            </button>
          ))}
        </div>

        {/* ── Active feature detail ── */}
        <div
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateY(8px)" : "translateY(0)",
            transition: "all 0.3s ease",
          }}
        >
          {/* Feature header */}
          <div
            style={{
              padding: "12px 14px",
              borderRadius: "12px",
              background: `${active.color}08`,
              border: `1px solid ${active.color}12`,
              marginBottom: "8px",
            }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    borderRadius: "10px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${active.color}15`,
                  }}
                >
                  {active.icon}
                </div>
                <div>
                  <div style={{ fontSize: "11px", fontWeight: 600, color: "#fff" }}>{active.name}</div>
                  <div style={{ fontSize: "8px", color: `${active.color}90`, marginTop: "1px" }}>{active.tagline}</div>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "3px",
                }}
              >
                <span style={{ fontSize: "16px", fontWeight: 600, color: active.color, fontFamily: "var(--font-serif)" }}>
                  {active.stat}
                </span>
                <span style={{ fontSize: "7px", color: `${active.color}80`, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {active.statLabel}
                </span>
              </div>
            </div>
            <p style={{ fontSize: "9px", lineHeight: "1.6", color: "rgba(255,255,255,0.4)" }}>{active.desc}</p>
          </div>

          {/* Feature mini-mockup */}
          {active.mockup}
        </div>

        {/* ── KPI stats row (dynamic per tab) ── */}
        <div
          className="grid grid-cols-3 gap-2 mt-4 mb-3"
          style={{
            opacity: transitioning ? 0 : 1,
            transform: transitioning ? "translateY(4px)" : "translateY(0)",
            transition: "all 0.3s ease",
          }}
        >
          {active.kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl p-2.5 text-center"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.04)",
              }}
            >
              <span className="font-serif text-[1rem] block leading-none" style={{ color: kpi.color }}>
                {kpi.value}
              </span>
              <span
                className="text-[7px] uppercase tracking-[0.08em] block mt-1"
                style={{ color: "rgba(255,255,255,0.2)" }}
              >
                {kpi.label}
              </span>
            </div>
          ))}
        </div>

        {/* Privacy + compliance footer */}
        <div
          className="rounded-xl p-3"
          style={{
            background: "linear-gradient(135deg, rgba(99,213,131,0.04), rgba(138,142,229,0.04))",
            border: "1px solid rgba(99,213,131,0.08)",
          }}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded flex items-center justify-center"
                style={{ background: "rgba(99,213,131,0.15)" }}
              >
                <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
                  <path d="M3 7l3 3 5-6" stroke="rgba(99,213,131,0.7)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[9px] font-medium" style={{ color: "#63D583" }}>
                All employee data anonymized
              </span>
            </div>
            <span
              className="text-[8px] px-1.5 py-0.5 rounded-full"
              style={{ background: "rgba(99,213,131,0.08)", color: "rgba(99,213,131,0.6)" }}
            >
              HIPAA
            </span>
          </div>
        </div>
      </div>

      {/* Keyframe for progress bar */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes lpProgressBar {
              from { width: 0% }
              to { width: 100% }
            }
          `,
        }}
      />
    </div>
  );
}
