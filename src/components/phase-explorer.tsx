"use client";

/**
 * PhaseExplorer
 *
 * An interactive, editorial product tour. Click or keyboard through five
 * phases of grief; the right column re-renders with what LightPath shows
 * at that phase. No screens, no mockups, no glass cards. Just typography
 * shifting in place.
 *
 * Phases are taken verbatim from /development/Platfrom01copy and the deck
 * (slide 23). Copy is family-voice, not investor-voice.
 */

import { useState, useCallback, useEffect, useRef } from "react";

type Phase = {
  id: string;
  name: string;
  timeline: string;
  headline: string;
  body: string;
  surfaces: string[];
};

const phases: Phase[] = [
  {
    id: "crisis",
    name: "Crisis",
    timeline: "Day 0 to 7",
    headline: "When the world goes quiet.",
    body: "The first week. We do not ask you to plan, decide, or feel anything specific. We open one door at a time and keep the rest closed.",
    surfaces: [
      "Safety resources, one tap away on every screen.",
      "One small task at a time. Tell the people who need to know.",
      "Everything else is hidden until you are ready.",
    ],
  },
  {
    id: "early-grief",
    name: "Early grief",
    timeline: "Week 1 to 4",
    headline: "First decisions.",
    body: "The arrangements. The notifications. The first wave of paperwork that cannot wait. We surface only what is time-sensitive and draft what we can on your behalf.",
    surfaces: [
      "Funeral and arrangement guidance, jurisdiction-aware.",
      "Drafted notifications: employer, banks, Social Security.",
      "An AI companion that adapts to where you are, every visit.",
    ],
  },
  {
    id: "active-grief",
    name: "Active grief",
    timeline: "Month 1 to 6",
    headline: "The administrative mountain.",
    body: "The deepest practical work. Benefits, claims, estate, taxes. Hundreds of tasks that nobody told you existed. We organize, file, and track every deadline.",
    surfaces: [
      "Benefits scan: 39 federal and state programs surfaced.",
      "Drafted documents and call scripts. Reviewed before sending.",
      "Tasks that can be shared with a trusted supporter.",
    ],
  },
  {
    id: "integration",
    name: "Integration",
    timeline: "Month 6 to 12",
    headline: "Building a new shape.",
    body: "The administrative weight is lifting. Deeper clinical work begins. Inner Light opens at full depth. Find Care surfaces the right professionals when you are ready for them.",
    surfaces: [
      "Clinical interventions across 17 grief frameworks.",
      "Patterns, reflection, and meaning-making tools.",
      "Anniversary preparation, before the day arrives.",
    ],
  },
  {
    id: "steady",
    name: "Steady state",
    timeline: "Month 12 onward",
    headline: "Light touch.",
    body: "We are no longer the center of your day. Anniversary support arrives without being asked. Tax season prompts come on time. Available when you need.",
    surfaces: [
      "Anniversary check-ins, gentle and opt-out.",
      "Annual prompts for tax season, estate review, and benefits renewal.",
      "Quiet access. Active engagement only when you choose it.",
    ],
  },
];

export function PhaseExplorer() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        setActive((i) => (i + 1) % phases.length);
      } else if (e.key === "ArrowLeft") {
        setActive((i) => (i - 1 + phases.length) % phases.length);
      }
    },
    [],
  );

  useEffect(() => {
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onKey]);

  const phase = phases[active];

  return (
    <div>
      {/* Tab list — scrollable on mobile, full width on desktop. */}
      <div
        role="tablist"
        aria-label="Phases of grief and what LightPath surfaces"
        className="-mx-6 sm:mx-0 overflow-x-auto"
      >
        <div className="flex min-w-max gap-0 px-6 sm:px-0 sm:grid sm:grid-cols-5 sm:gap-0">
          {phases.map((p, i) => {
            const isActive = i === active;
            return (
              <button
                key={p.id}
                ref={(el) => {
                  tabRefs.current[i] = el;
                }}
                role="tab"
                aria-selected={isActive}
                aria-controls={`phase-panel-${p.id}`}
                id={`phase-tab-${p.id}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActive(i)}
                className="text-left py-5 sm:py-6 px-5 sm:px-4 transition-colors duration-300"
                style={{
                  borderTop: `1px solid ${isActive ? "var(--color-primary)" : "var(--color-border-light)"}`,
                  background: isActive ? "var(--color-surface)" : "transparent",
                }}
              >
                <p
                  className="text-[10px] uppercase mb-1"
                  style={{
                    color: isActive ? "var(--color-primary)" : "var(--color-muted)",
                    letterSpacing: "0.18em",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </p>
                <p
                  className="text-[14px] sm:text-[15px] font-serif leading-[1.2]"
                  style={{
                    color: isActive ? "var(--color-foreground)" : "var(--color-body)",
                    fontWeight: 500,
                    letterSpacing: "-0.015em",
                  }}
                >
                  {p.name}
                </p>
                <p
                  className="text-[11px] mt-2"
                  style={{ color: "var(--color-muted)" }}
                >
                  {p.timeline}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active phase panel — typography only, fades on change. */}
      <div
        role="tabpanel"
        id={`phase-panel-${phase.id}`}
        aria-labelledby={`phase-tab-${phase.id}`}
        key={phase.id}
        className="phase-panel grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 pt-16 sm:pt-20"
      >
        <div className="lg:col-span-6">
          <p
            className="text-[11px] font-semibold uppercase mb-6"
            style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}
          >
            {phase.timeline}
          </p>
          <h3
            className="text-[2rem] sm:text-[2.75rem] lg:text-[3.25rem] font-serif leading-[1.06]"
            style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}
          >
            {phase.headline}
          </h3>
          <p className="mt-7 max-w-md text-[16px] sm:text-[17px] leading-[1.8]" style={{ color: "var(--color-body)" }}>
            {phase.body}
          </p>
        </div>
        <div className="lg:col-span-6 lg:pt-2">
          <p className="text-[11px] uppercase mb-6" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
            What you see
          </p>
          <ul>
            {phase.surfaces.map((s, i) => (
              <li
                key={i}
                className="grid grid-cols-12 gap-5 py-5 text-[15px] sm:text-[16px] leading-[1.7]"
                style={{ borderTop: "1px solid var(--color-border-light)", color: "var(--color-body)" }}
              >
                <span
                  className="col-span-2 sm:col-span-1 text-[11px] uppercase"
                  style={{ color: "var(--color-primary)", letterSpacing: "0.18em" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="col-span-10 sm:col-span-11" style={{ color: "var(--color-foreground)" }}>
                  {s}
                </span>
              </li>
            ))}
            <li style={{ borderTop: "1px solid var(--color-border-light)", height: 0 }} aria-hidden="true" />
          </ul>
        </div>
      </div>
    </div>
  );
}
