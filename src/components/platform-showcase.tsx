"use client";

import { useState, useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";

/* ═══════════════════════════════════════════════
   PLATFORM SHOWCASE — Stacked alternating blocks
   All 4 features visible as you scroll
   ═══════════════════════════════════════════════ */

/* ─── Feature metadata ─── */
const features = [
  {
    id: "plan",
    label: "Care Plan",
    labelColor: "#8A8EE5",
    heading: "Your personalized",
    headingSub: "Care Plan.",
    description: "Prioritized by urgency. Tailored to your state, role, and timeline. Every task includes what to do, who to contact, and when.",
    bullets: [
      { text: "AI Assist drafts letters, fills forms, and handles paperwork" },
      { text: "Assign and share tasks with family or a trusted helper" },
      { text: "Deadlines and reminders so nothing falls through" },
      { text: "Track progress across 20+ task categories" },
    ],
  },
  {
    id: "benefits",
    label: "Benefits",
    labelColor: "#8F82CD",
    heading: "Uncover every benefit",
    headingSub: "you\u2019re entitled to.",
    description: "LightPath scans your situation and surfaces survivor benefits, insurance claims, tax credits, and employer programs you may not know about \u2014 so no money is left behind.",
    bullets: [
      { text: "AI scans for eligible benefits based on your profile" },
      { text: "Surfaces unclaimed insurance, pensions, and tax credits" },
      { text: "Tracks deadlines so you never miss a filing window" },
      { text: "Guided steps to file each claim with confidence" },
    ],
  },
  {
    id: "keeper",
    label: "LightKeeper",
    labelColor: "#E59524",
    heading: "Someone who\u2019s been",
    headingSub: "where you are.",
    description: "Not therapy. Not a chatbot. A real person with verified lived experience, trained in emotional support, and matched to your story.",
    bullets: [
      { text: "Matched by loss type and life stage" },
      { text: "Verified lived experience, trained companion" },
      { text: "Private and confidential conversations" },
      { text: "Available when you need \u2014 no scheduling" },
    ],
  },
  {
    id: "light",
    label: "Inner Light",
    labelColor: "#8F82CD",
    heading: "A private space",
    headingSub: "that adapts to you.",
    description: "Journaling, breathing, guided reflections \u2014 powered by an adaptive framework that learns your patterns and meets you where you are.",
    bullets: [
      { text: "Adapts tools and content to your emotional stage" },
      { text: "Trauma-informed framework guides your journey" },
      { text: "Breathing, journaling, reflections, and memory tools" },
      { text: "Tracks your patterns and recommends what helps" },
    ],
  },
];

const MOCKUPS = [CarePlanMockup, BenefitsMockup, KeeperMockup, InnerLightMockup];

export function PlatformShowcase() {
  return (
    <div className="mx-auto max-w-6xl">
      {features.map((f, i) => {
        const Mockup = MOCKUPS[i];
        const isReversed = i % 2 !== 0;

        return (
          <div key={f.id} className={i > 0 ? "mt-24 sm:mt-32 lg:mt-40" : ""}>
            {/* Subtle divider between features */}
            {i > 0 && (
              <div className="mb-24 sm:mb-32 lg:mb-40 mx-auto" style={{ maxWidth: "8rem", height: "1px", background: "linear-gradient(90deg, transparent, rgba(138,142,229,0.15), transparent)" }} />
            )}

            <div className="grid gap-10 lg:gap-16 lg:grid-cols-2 items-center">
              {/* Mockup side */}
              <Reveal delay={200} variant={isReversed ? "left" : "right"} className={isReversed ? "" : "lg:order-2"}>
                <Mockup />
              </Reveal>

              {/* Text side */}
              <Reveal delay={0} className={isReversed ? "" : "lg:order-1"}>
                <div className="psc-text-block">
                  {/* Feature number + label */}
                  <div className="flex items-center gap-3 mb-5 psc-stagger" style={{ "--stagger": 0 } as React.CSSProperties}>
                    <span
                      className="text-[11px] font-bold tabular-nums"
                      style={{ color: f.labelColor, opacity: 0.4 }}
                    >
                      0{i + 1}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.6)",
                        border: "1px solid rgba(255,255,255,0.7)",
                        color: "var(--color-body)",
                        backdropFilter: "blur(12px)",
                      }}
                    >
                      {f.label}
                    </span>
                  </div>

                  {/* Heading */}
                  <h3
                    className="text-[1.5rem] sm:text-[2rem] lg:text-[2.25rem] font-serif font-normal leading-[1.1] mb-4 psc-stagger"
                    style={{ color: "var(--color-foreground)", letterSpacing: "-0.03em", "--stagger": 1 } as React.CSSProperties}
                  >
                    {f.heading}
                    <br />
                    <span style={{ color: "var(--color-body)" }}>{f.headingSub}</span>
                  </h3>

                  {/* Description */}
                  <p
                    className="text-[15px] sm:text-[16px] leading-relaxed mb-6 psc-stagger"
                    style={{ color: "var(--color-body)", "--stagger": 2 } as React.CSSProperties}
                  >
                    {f.description}
                  </p>

                  {/* Bullets — each staggers in */}
                  <div className="space-y-3.5">
                    {f.bullets.map((b, j) => (
                      <div
                        key={`${f.id}-${j}`}
                        className="flex items-start gap-3 psc-stagger"
                        style={{ "--stagger": 3 + j } as React.CSSProperties}
                      >
                        <span className="mt-0.5 shrink-0">
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <circle cx="8" cy="8" r="6" stroke={f.labelColor} strokeWidth="1.2" />
                            <path d="M5.5 8l2 2 3-3" stroke={f.labelColor} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-[14px] sm:text-[15px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>
                          {b.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        );
      })}

      {/* ─── Keyframes for stagger + mockup internals ─── */}
      <style jsx global>{`
        /* Staggered children inside revealed text blocks */
        .psc-text-block .psc-stagger {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }
        .revealed .psc-text-block .psc-stagger,
        .psc-text-block.revealed ~ .psc-text-block .psc-stagger {
          opacity: 1;
          transform: translateY(0);
        }
        /* Use CSS custom property for stagger delay */
        .revealed .psc-text-block .psc-stagger {
          transition-delay: calc(var(--stagger, 0) * 80ms + 50ms);
        }

        /* Mockup card entrance — subtle lift */
        .revealed .psc-mockup-card {
          animation: pscMockupEnter 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes pscMockupEnter {
          from { opacity: 0; transform: translateY(20px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        @keyframes pscChatAppear {
          from { opacity: 0; transform: translateY(6px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes pscBreatheRing {
          0%, 100% { transform: translate(-50%,-50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%,-50%) scale(1.25); opacity: 0.08; }
        }

        /* ── Looping mockup animations ── */

        /* Care Plan progress ring slowly fills */
        .psc-progress-ring {
          animation: pscProgressFill 4s ease-in-out infinite;
        }
        @keyframes pscProgressFill {
          0%, 100% { stroke-dashoffset: 88; }
          50% { stroke-dashoffset: 63; }
        }

        /* Urgent badge pulse */
        .psc-urgent-pulse {
          animation: pscUrgentPulse 2s ease-in-out infinite;
        }
        @keyframes pscUrgentPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        /* Benefits scan pulse */
        .psc-scan-pulse {
          animation: pscScanPulse 2.5s ease-in-out infinite;
        }
        @keyframes pscScanPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Benefits value shimmer */
        .psc-value-shimmer {
          animation: pscValueShimmer 3s ease-in-out infinite;
        }
        @keyframes pscValueShimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }

        /* Benefits status cycle */
        .psc-status-pulse {
          animation: pscStatusPulse 2s ease-in-out infinite;
        }
        @keyframes pscStatusPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }

        /* Progress bar segments shimmer */
        .psc-bar-segment {
          animation: pscBarShimmer 3s ease-in-out infinite;
        }
        @keyframes pscBarShimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Assist sparkle spin */
        .psc-assist-spin {
          animation: pscAssistSpin 3s ease-in-out infinite;
        }
        @keyframes pscAssistSpin {
          0% { transform: rotate(0deg) scale(1); opacity: 0.5; }
          50% { transform: rotate(180deg) scale(1.2); opacity: 1; }
          100% { transform: rotate(360deg) scale(1); opacity: 0.5; }
        }

        /* Assist scanning text pulse */
        .psc-assist-text {
          animation: pscAssistText 2s ease-in-out infinite;
        }
        @keyframes pscAssistText {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        /* Adaptive dot pulse */
        .psc-adaptive-dot {
          animation: pscAdaptiveDot 2s ease-in-out infinite;
        }
        @keyframes pscAdaptiveDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }

        /* Active stage glow */
        .psc-stage-active {
          animation: pscStageGlow 2.5s ease-in-out infinite;
        }
        @keyframes pscStageGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(143,130,205,0); }
          50% { box-shadow: 0 0 0 4px rgba(143,130,205,0.12); }
        }

        /* InnerLight streak dot pulse */
        .psc-streak-dot {
          animation: pscStreakPulse 2s ease-in-out infinite;
        }
        @keyframes pscStreakPulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.15); }
        }
      `}</style>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   MOCKUP CARDS
   ═══════════════════════════════════════════════ */

const MOCKUP_HEIGHT = 440;

const mockupCardStyle: React.CSSProperties = {
  background: "rgba(255,255,255,0.85)",
  backdropFilter: "blur(20px)",
  border: "1px solid rgba(255,255,255,0.8)",
  boxShadow: "0 2px 4px rgba(0,0,0,0.02), 0 8px 24px rgba(0,0,0,0.04), 0 24px 64px rgba(0,0,0,0.06)",
  minHeight: `${MOCKUP_HEIGHT}px`,
  display: "flex",
  flexDirection: "column",
};

function CarePlanMockup() {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  /* Two-phase demo: (1) Care Plan overview → (2) click task → Assist drafts email */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timers: ReturnType<typeof setTimeout>[] = [];
    let running = true;

    function clearTimers() {
      timers.forEach(clearTimeout);
      timers = [];
    }

    function runCycle() {
      if (!running) return;
      clearTimers();
      setStep(0);
      timers.push(setTimeout(() => { if (running) setStep(1); }, 600));   // greeting + assist banner
      timers.push(setTimeout(() => { if (running) setStep(2); }, 1500));  // task list
      timers.push(setTimeout(() => { if (running) setStep(3); }, 3500));  // task 1 highlight (click)
      timers.push(setTimeout(() => { if (running) setStep(4); }, 4200));  // phase 2: drill into task
      timers.push(setTimeout(() => { if (running) setStep(5); }, 5000));  // email preview
      timers.push(setTimeout(() => { if (running) setStep(6); }, 6500));  // action buttons
      timers.push(setTimeout(() => { if (running) setStep(7); }, 7700));  // sent confirmation
      timers.push(setTimeout(() => { if (running) runCycle(); }, 10000)); // restart
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCycle();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      running = false;
      observer.disconnect();
      clearTimers();
    };
  }, []);

  const phase1 = step >= 1 && step <= 3;
  const taskClicked = step === 3;
  const phase2 = step >= 4;
  const emailSent = step >= 7;

  return (
    <div ref={ref} className="rounded-2xl overflow-hidden" style={mockupCardStyle}>
      {/* Header with collaboration avatars */}
      <div className="px-5 py-3.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full" style={{ background: "#8A8EE5" }} />
          <span className="text-[11px] font-semibold" style={{ color: "var(--color-foreground)" }}>Care Plan</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-1.5">
            <div className="h-5 w-5 rounded-full flex items-center justify-center text-[7px] font-bold" style={{ background: "linear-gradient(135deg, rgba(138,142,229,0.2), rgba(138,142,229,0.1))", color: "#8A8EE5", border: "1.5px solid white" }}>EM</div>
            <div className="h-5 w-5 rounded-full flex items-center justify-center text-[7px] font-bold" style={{ background: "linear-gradient(135deg, rgba(99,213,131,0.2), rgba(99,213,131,0.1))", color: "#63D583", border: "1.5px solid white" }}>JR</div>
            <div className="h-5 w-5 rounded-full flex items-center justify-center text-[7px] font-bold" style={{ background: "rgba(0,0,0,0.03)", color: "var(--color-muted)", border: "1.5px solid white" }}>+</div>
          </div>
          <span className="text-[9px] font-medium" style={{ color: "var(--color-muted)" }}>Shared</span>
        </div>
      </div>

      {/* Content area — two phases overlap */}
      <div className="px-5 py-4 relative flex-1">
        {/* Loading overlay */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.97)",
            opacity: step === 0 ? 1 : 0,
            pointerEvents: step === 0 ? "auto" : "none",
            transition: "opacity 0.4s ease-out",
          }}
        >
          <div className="h-8 w-8 rounded-full flex items-center justify-center mb-3" style={{ background: "rgba(138,142,229,0.08)" }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="psc-assist-spin">
              <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" stroke="#8A8EE5" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[11px] font-medium psc-assist-text" style={{ color: "#8A8EE5" }}>Building your care plan&hellip;</p>
        </div>

        {/* ═══ PHASE 1: Care Plan task list ═══ */}
        <div style={{
          opacity: phase1 ? 1 : 0,
          transition: "opacity 0.5s ease-out",
        }}>
          {/* Greeting + AI Assist banner */}
          <div style={{ opacity: step >= 1 ? 1 : 0, transform: `translateY(${step >= 1 ? 0 : 6}px)`, transition: "opacity 0.5s ease-out, transform 0.5s ease-out" }}>
            <div className="flex items-center justify-between mb-3">
              <p className="text-[15px] font-serif" style={{ color: "var(--color-foreground)" }}>Good morning, Emily</p>
              <div className="h-8 w-8 rounded-full" style={{ background: "linear-gradient(135deg, rgba(138,142,229,0.15), rgba(138,142,229,0.05))" }} />
            </div>

            <div
              className="rounded-xl px-3.5 py-2.5 mb-4 flex items-center gap-2.5"
              style={{ background: "linear-gradient(135deg, rgba(138,142,229,0.04), rgba(143,130,205,0.04))", border: "1px solid rgba(138,142,229,0.08)" }}
            >
              <div className="h-6 w-6 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(138,142,229,0.08)" }}>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                  <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" stroke="#8A8EE5" strokeWidth="1.2" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-semibold" style={{ color: "#8A8EE5" }}>Assist ready on 3 tasks</p>
                <p className="text-[9px]" style={{ color: "var(--color-muted)" }}>Drafted employer letter · Pre-filled 2 forms</p>
              </div>
            </div>
          </div>

          {/* Task list — fades in at step 2 */}
          <div style={{ opacity: step >= 2 ? 1 : 0, transform: `translateY(${step >= 2 ? 0 : 6}px)`, transition: "opacity 0.5s ease-out, transform 0.5s ease-out" }}>
            <p className="text-[9px] font-semibold uppercase tracking-[0.12em] mb-3" style={{ color: "var(--color-muted)" }}>Today&rsquo;s tasks</p>
            <div className="space-y-2">
              {/* Task 1: Notify employer — gets "clicked" at step 3 */}
              <div
                className="rounded-xl px-3.5 py-3 flex items-center gap-3"
                style={{
                  background: taskClicked ? "rgba(138,142,229,0.04)" : "rgba(255,255,255,0.7)",
                  border: taskClicked ? "1px solid rgba(138,142,229,0.2)" : "1px solid rgba(0,0,0,0.03)",
                  transform: taskClicked ? "scale(1.015)" : "scale(1)",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: "#E59524" }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12px] font-medium truncate" style={{ color: "var(--color-foreground)" }}>Notify employer about leave</span>
                    <span className="text-[8px] px-1.5 py-px rounded-full font-bold shrink-0 psc-urgent-pulse" style={{ background: "rgba(229,149,36,0.08)", color: "#E59524" }}>Urgent</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="#8A8EE5" opacity="0.5" />
                    </svg>
                    <span className="text-[10px] font-medium" style={{ color: "#8A8EE5" }}>AI drafted</span>
                    <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>&middot; Review &amp; send</span>
                  </div>
                </div>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ color: taskClicked ? "#8A8EE5" : "var(--color-muted)", opacity: taskClicked ? 0.6 : 0.3, transition: "all 0.3s" }}><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>

              {/* Task 2: Request death certificates */}
              <div className="rounded-xl px-3.5 py-3 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.03)" }}>
                <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: "#8A8EE5" }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12px] font-medium truncate" style={{ color: "var(--color-foreground)" }}>Request death certificates (3)</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0">
                      <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="#8A8EE5" opacity="0.5" />
                    </svg>
                    <span className="text-[10px] font-medium" style={{ color: "#8A8EE5" }}>Form pre-filled</span>
                    <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>&middot; Review &amp; submit</span>
                  </div>
                </div>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ color: "var(--color-muted)", opacity: 0.3 }}><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>

              {/* Task 3: Locate life insurance */}
              <div className="rounded-xl px-3.5 py-3 flex items-center gap-3" style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.03)" }}>
                <div className="h-2.5 w-2.5 rounded-full shrink-0" style={{ background: "#63D583" }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[12px] font-medium truncate" style={{ color: "var(--color-foreground)" }}>Locate life insurance policy</span>
                  </div>
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <svg width="10" height="10" viewBox="0 0 16 16" fill="none" className="shrink-0 psc-assist-spin">
                      <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="#8A8EE5" opacity="0.5" />
                    </svg>
                    <span className="text-[10px] font-medium psc-assist-text" style={{ color: "#8A8EE5" }}>Assist scanning&hellip;</span>
                  </div>
                </div>
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ color: "var(--color-muted)", opacity: 0.3 }}><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ PHASE 2: Assist in action — email draft ═══ */}
        <div style={{
          position: "absolute",
          top: "16px",
          left: "20px",
          right: "20px",
          opacity: phase2 ? 1 : 0,
          pointerEvents: phase2 ? "auto" : "none",
          transition: "opacity 0.5s ease-out",
        }}>
          {/* Back breadcrumb */}
          <div className="flex items-center gap-1.5 mb-3">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ color: "#8A8EE5" }}>
              <path d="M10 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-medium" style={{ color: "#8A8EE5" }}>Care Plan</span>
          </div>

          {/* Task header */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[14px] font-semibold" style={{ color: "var(--color-foreground)" }}>Notify employer about leave</span>
            {!emailSent && (
              <span className="text-[8px] px-1.5 py-px rounded-full font-bold shrink-0" style={{ background: "rgba(229,149,36,0.08)", color: "#E59524" }}>Urgent</span>
            )}
          </div>

          {/* Assist label */}
          <div className="flex items-center gap-1.5 mb-3.5">
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1.5 3.5L13 7l-3.5 1.5L8 12l-1.5-3.5L3 7l3.5-1.5L8 2z" fill="#8A8EE5" />
            </svg>
            <span className="text-[10px] font-semibold" style={{ color: "#8A8EE5" }}>
              {emailSent ? "Sent with Assist" : "Assist drafted this for you"}
            </span>
          </div>

          {/* Email preview card — fades in at step 5 */}
          <div style={{ opacity: step >= 5 ? 1 : 0, transform: `translateY(${step >= 5 ? 0 : 6}px)`, transition: "opacity 0.5s ease-out, transform 0.5s ease-out" }}>
            <div
              className="rounded-xl overflow-hidden mb-3"
              style={{
                border: emailSent ? "1px solid rgba(99,213,131,0.15)" : "1px solid rgba(0,0,0,0.05)",
                background: emailSent ? "rgba(99,213,131,0.02)" : "rgba(250,250,252,0.8)",
                transition: "all 0.5s ease",
              }}
            >
              <div className="px-3.5 py-2.5 space-y-1.5" style={{ borderBottom: "1px solid rgba(0,0,0,0.03)" }}>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-medium shrink-0 w-8" style={{ color: "var(--color-muted)" }}>To</span>
                  <span className="text-[11px]" style={{ color: "var(--color-foreground)" }}>HR Department</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-medium shrink-0 w-8" style={{ color: "var(--color-muted)" }}>Subj</span>
                  <span className="text-[11px] font-medium" style={{ color: "var(--color-foreground)" }}>Leave of Absence &mdash; Bereavement</span>
                </div>
              </div>
              <div className="px-3.5 py-3">
                <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                  Dear HR Team,<br /><br />
                  I am writing to request bereavement leave, effective immediately. I have experienced the loss of my father and will need time away&hellip;
                </p>
              </div>
            </div>
          </div>

          {/* Action buttons / sent state — fades in at step 6 */}
          <div style={{ opacity: step >= 6 ? 1 : 0, transform: `translateY(${step >= 6 ? 0 : 4}px)`, transition: "opacity 0.4s ease-out, transform 0.4s ease-out" }}>
            {emailSent ? (
              <div className="flex items-center justify-center gap-2 py-2">
                <div className="h-5 w-5 rounded-full flex items-center justify-center" style={{ background: "#63D583" }}>
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path d="M3 6l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[12px] font-semibold" style={{ color: "#63D583" }}>Sent to HR Department</span>
              </div>
            ) : (
              <div className="flex gap-2">
                <button className="flex-1 rounded-xl px-3 py-2.5 text-[11px] font-semibold" style={{ background: "rgba(0,0,0,0.03)", color: "var(--color-body)", border: "1px solid rgba(0,0,0,0.04)" }}>
                  Edit draft
                </button>
                <button className="flex-1 rounded-xl px-3 py-2.5 text-[11px] font-semibold" style={{ background: "#8A8EE5", color: "white" }}>
                  Send &rarr;
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function BenefitsMockup() {
  const [step, setStep] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  /* Trigger benefit-discovery animation loop when scrolled into view */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timers: ReturnType<typeof setTimeout>[] = [];
    let running = true;

    function clearTimers() {
      timers.forEach(clearTimeout);
      timers = [];
    }

    function runCycle() {
      if (!running) return;
      clearTimers();
      setStep(0);
      timers.push(setTimeout(() => { if (running) setStep(1); }, 800));
      timers.push(setTimeout(() => { if (running) setStep(2); }, 1800));
      timers.push(setTimeout(() => { if (running) setStep(3); }, 2800));
      timers.push(setTimeout(() => { if (running) setStep(4); }, 3800));
      timers.push(setTimeout(() => { if (running) setStep(5); }, 5200));
      timers.push(setTimeout(() => { if (running) runCycle(); }, 8500));
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCycle();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      running = false;
      observer.disconnect();
      clearTimers();
    };
  }, []);

  const benefits = [
    { name: "Social Security Survivor", value: "$1,860/mo", status: step >= 5 ? "Filed" : "Eligible", statusColor: step >= 5 ? "#E59524" : "#63D583", statusBg: step >= 5 ? "rgba(229,149,36,0.08)" : "rgba(99,213,131,0.08)", color: "#63D583", bg: "rgba(99,213,131,0.06)", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" stroke="#63D583" strokeWidth="1.2" /><path d="M6 7h4M6 9h4M8 5v6" stroke="#63D583" strokeWidth="1.2" strokeLinecap="round" /></svg> },
    { name: "Employer Group Life", value: "$50,000", status: "Found", statusColor: "#8A8EE5", statusBg: "rgba(138,142,229,0.08)", color: "#E59524", bg: "rgba(229,149,36,0.06)", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 2h5l3 3v9H4V2z" stroke="#E59524" strokeWidth="1.2" /><path d="M9 2v3h3" stroke="#E59524" strokeWidth="1.2" /></svg> },
    { name: "Final Pay & Unused PTO", value: "$4,215", status: "Reviewing", statusColor: "#8F82CD", statusBg: "rgba(143,130,205,0.08)", color: "#8F82CD", bg: "rgba(143,130,205,0.06)", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><rect x="2" y="3" width="12" height="10" rx="1.5" stroke="#8F82CD" strokeWidth="1.2" /><path d="M2 6h12" stroke="#8F82CD" strokeWidth="1.2" /></svg> },
    { name: "Unclaimed Bank Account", value: "$842", status: "Found", statusColor: "#8A8EE5", statusBg: "rgba(138,142,229,0.08)", color: "#8A8EE5", bg: "rgba(138,142,229,0.06)", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="7" cy="7" r="4.5" stroke="#8A8EE5" strokeWidth="1.2" /><path d="M10.5 10.5l3 3" stroke="#8A8EE5" strokeWidth="1.2" strokeLinecap="round" /></svg> },
  ];

  const visibleCount = Math.min(step, 4);
  const showTotal = step >= 5;

  return (
    <div ref={ref} className="rounded-2xl overflow-hidden" style={mockupCardStyle}>
      {/* Header */}
      <div className="px-5 py-3.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="flex items-center gap-2">
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className={step === 0 ? "psc-assist-spin" : ""}>
            <circle cx="7" cy="7" r="4.5" stroke="#8F82CD" strokeWidth="1.2" />
            <path d="M10.5 10.5l3 3" stroke="#8F82CD" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <span className="text-[11px] font-semibold" style={{ color: "var(--color-foreground)" }}>Benefits</span>
        </div>
        <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ background: step === 0 ? "rgba(143,130,205,0.08)" : "rgba(99,213,131,0.08)", color: step === 0 ? "#8F82CD" : "#63D583", transition: "all 0.4s" }}>
          {step === 0 ? "Scanning\u2026" : `${visibleCount} benefit${visibleCount !== 1 ? "s" : ""} found`}
        </span>
      </div>

      {/* Status bar — always visible, content transitions between scanning ↔ total */}
      <div className="px-5 py-3 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(0,0,0,0.03)" }}>
        {showTotal ? (
          <>
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-bold" style={{ color: "#8F82CD" }}>$55,057</span>
              <span className="text-[10px] font-medium" style={{ color: "var(--color-muted)" }}>+ $1,860/mo</span>
            </div>
            <span className="text-[9px] px-2 py-0.5 rounded-full font-semibold" style={{ background: "rgba(229,149,36,0.08)", color: "#E59524" }}>1 filed</span>
          </>
        ) : (
          <div className="flex items-center gap-2">
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className={step === 0 ? "psc-assist-spin" : ""}>
              <circle cx="7" cy="7" r="4.5" stroke="#8F82CD" strokeWidth="1.2" />
              <path d="M10.5 10.5l3 3" stroke="#8F82CD" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span className="text-[10px] font-medium psc-assist-text" style={{ color: "#8F82CD" }}>
              {step === 0 ? "Scanning federal, state & employer programs\u2026" : "Calculating total value\u2026"}
            </span>
          </div>
        )}
      </div>

      {/* Fixed-size benefits list — all 4 always in DOM, opacity controlled */}
      <div className="p-4 space-y-2 relative flex-1">
        {/* Scanning overlay — sits on top, fades out when first benefit found */}
        <div
          className="absolute inset-0 z-10 flex flex-col items-center justify-center"
          style={{
            background: "rgba(255,255,255,0.97)",
            opacity: step === 0 ? 1 : 0,
            pointerEvents: step === 0 ? "auto" : "none",
            transition: "opacity 0.4s ease-out",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 16 16" fill="none" className="psc-assist-spin mb-3">
            <circle cx="7" cy="7" r="4.5" stroke="#8F82CD" strokeWidth="1.2" />
            <path d="M10.5 10.5l3 3" stroke="#8F82CD" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          <p className="text-[11px] font-medium psc-assist-text" style={{ color: "#8F82CD" }}>Scanning for eligible benefits&hellip;</p>
          <p className="text-[9px] mt-1" style={{ color: "var(--color-muted)" }}>Checking federal, state, and employer programs</p>
        </div>

        {/* All 4 benefits — always rendered, each fades in at its step */}
        {benefits.map((b, i) => (
          <div
            key={b.name}
            style={{ opacity: step >= i + 1 ? 1 : 0, transform: `translateY(${step >= i + 1 ? 0 : 6}px)`, transition: "opacity 0.5s ease-out, transform 0.5s ease-out" }}
          >
            <div
              className="flex items-center gap-3 rounded-xl px-3.5 py-3"
              style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.03)" }}
            >
              <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: b.bg }}>
                {b.icon}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-[11.5px] font-semibold truncate" style={{ color: "var(--color-foreground)" }}>{b.name}</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="text-[10px] font-bold" style={{ color: b.color }}>{b.value}</span>
                  <span className="text-[8px] px-1.5 py-px rounded-full font-semibold" style={{ background: b.statusBg, color: b.statusColor, transition: "all 0.4s" }}>{b.status}</span>
                </div>
              </div>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" style={{ color: "var(--color-muted)", opacity: 0.3 }}><path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom bar — always visible, content transitions between scanning ↔ complete */}
      <div className="px-5 pb-4">
        <div className="rounded-xl px-3.5 py-2.5 flex items-center gap-2.5" style={{ background: "linear-gradient(135deg, rgba(143,130,205,0.03), rgba(138,142,229,0.03))", border: "1px solid rgba(143,130,205,0.06)" }}>
          {showTotal ? (
            <>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <circle cx="8" cy="8" r="6" fill="rgba(99,213,131,0.1)" />
                <path d="M5.5 8l2 2 3.5-4" stroke="#63D583" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span className="text-[10px] font-medium" style={{ color: "#63D583" }}>Scan complete &middot; 4 benefits identified</span>
            </>
          ) : (
            <>
              <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="psc-assist-spin shrink-0">
                <circle cx="7" cy="7" r="4.5" stroke="#8F82CD" strokeWidth="1.2" />
                <path d="M10.5 10.5l3 3" stroke="#8F82CD" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
              <span className="text-[10px] font-medium psc-assist-text" style={{ color: "#8F82CD" }}>Scanning for additional benefits&hellip;</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function KeeperMockup() {
  const [visibleMsgs, setVisibleMsgs] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  /* Trigger chat animation loop when scrolled into view */
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timers: ReturnType<typeof setTimeout>[] = [];
    let running = true;

    function clearTimers() {
      timers.forEach(clearTimeout);
      timers = [];
    }

    function runCycle() {
      if (!running) return;
      clearTimers();
      setVisibleMsgs(0);
      timers.push(setTimeout(() => { if (running) setVisibleMsgs(1); }, 400));
      timers.push(setTimeout(() => { if (running) setVisibleMsgs(2); }, 1400));
      timers.push(setTimeout(() => { if (running) setVisibleMsgs(3); }, 2600));
      timers.push(setTimeout(() => { if (running) runCycle(); }, 7000));
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          runCycle();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      running = false;
      observer.disconnect();
      clearTimers();
    };
  }, []);

  return (
    <div ref={ref} className="rounded-2xl overflow-hidden" style={mockupCardStyle}>
      <div className="px-5 py-3.5 flex items-center gap-3" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="relative shrink-0">
          <div className="h-9 w-9 rounded-full" style={{ background: "linear-gradient(135deg, rgba(229,149,36,0.2), rgba(229,149,36,0.08))" }} />
          <span className="absolute -bottom-0.5 -right-0.5 flex h-3 w-3 items-center justify-center rounded-full bg-white" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
            <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#22C55E" }} />
          </span>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1.5">
            <span className="text-[12px] font-semibold" style={{ color: "var(--color-foreground)" }}>Maria C.</span>
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="6" fill="rgba(229,149,36,0.1)" /><path d="M5.5 8l2 2 3.5-4" stroke="#E59524" strokeWidth="1.3" strokeLinecap="round" /></svg>
          </div>
          <p className="text-[9px] font-medium" style={{ color: "var(--color-muted)" }}>Trained companion · Lost partner 3 yrs ago</p>
        </div>
      </div>

      <div className="p-5 flex-1 flex flex-col">
        {/* Chat messages area — grows to fill available space */}
        <div className="space-y-3 flex-1">
          {visibleMsgs >= 1 && (
            <div className="flex gap-2 items-end" style={{ animation: "pscChatAppear 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div className="h-5 w-5 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, rgba(229,149,36,0.2), rgba(229,149,36,0.08))" }} />
              <div>
                <div className="rounded-2xl rounded-bl-md px-3.5 py-2.5" style={{ background: "rgba(229,149,36,0.04)", border: "1px solid rgba(229,149,36,0.06)" }}>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-body)" }}>Hi Emily. No rush today. How are you holding up?</p>
                </div>
                <p className="text-[8px] mt-0.5 ml-1" style={{ color: "var(--color-muted)" }}>2:14 PM</p>
              </div>
            </div>
          )}

          {visibleMsgs >= 2 && (
            <div className="flex justify-end" style={{ animation: "pscChatAppear 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div>
                <div className="rounded-2xl rounded-br-md px-3.5 py-2.5 max-w-[85%] ml-auto" style={{ background: "rgba(138,142,229,0.05)", border: "1px solid rgba(138,142,229,0.06)" }}>
                  <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-body)" }}>Honestly, today was hard. I found his jacket in the closet and just lost it.</p>
                </div>
                <p className="text-[8px] mt-0.5 mr-1 text-right" style={{ color: "var(--color-muted)" }}>2:16 PM</p>
              </div>
            </div>
          )}

          {visibleMsgs >= 3 && (
            <div className="flex gap-2 items-end" style={{ animation: "pscChatAppear 0.5s cubic-bezier(0.16,1,0.3,1) both" }}>
              <div className="h-5 w-5 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, rgba(229,149,36,0.2), rgba(229,149,36,0.08))" }} />
              <div className="rounded-2xl rounded-bl-md px-3.5 py-2.5 max-w-[85%]" style={{ background: "rgba(229,149,36,0.04)", border: "1px solid rgba(229,149,36,0.06)" }}>
                <p className="text-[11px] leading-relaxed" style={{ color: "var(--color-body)" }}>Those moments hit so hard. You don&rsquo;t have to hold it together here. 💛</p>
              </div>
            </div>
          )}

          {/* Typing indicator — shows while waiting for messages */}
          {visibleMsgs > 0 && visibleMsgs < 3 && (
            <div className="flex gap-2 items-end" style={{ animation: "pscChatAppear 0.3s ease-out both" }}>
              <div className="h-5 w-5 rounded-full shrink-0" style={{ background: "linear-gradient(135deg, rgba(229,149,36,0.2), rgba(229,149,36,0.08))" }} />
              <div className="rounded-2xl rounded-bl-md px-3.5 py-2.5" style={{ background: "rgba(229,149,36,0.04)", border: "1px solid rgba(229,149,36,0.06)" }}>
                <div className="flex gap-1">
                  <span className="psc-typing-dot" style={{ animationDelay: "0s" }} />
                  <span className="psc-typing-dot" style={{ animationDelay: "0.15s" }} />
                  <span className="psc-typing-dot" style={{ animationDelay: "0.3s" }} />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input bar — stays at bottom */}
        <div className="flex items-center gap-2 mt-3">
          <div className="flex-1 flex items-center rounded-full px-3.5 py-2.5" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.04)" }}>
            <span className="text-[10px]" style={{ color: "var(--color-muted)" }}>Type a message...</span>
          </div>
          <div className="h-7 w-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #E59524, #D4890E)" }}>
            <svg width="10" height="10" viewBox="0 0 16 16" fill="none"><path d="M14 2L7 9M14 2l-5 12-2-5-5-2 12-5z" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function InnerLightMockup() {
  const stages = [
    { label: "Shock", done: true },
    { label: "Processing", active: true },
    { label: "Adjusting", done: false },
    { label: "Growing", done: false },
  ];

  return (
    <div className="rounded-2xl overflow-hidden" style={mockupCardStyle}>
      {/* Header with adaptive indicator */}
      <div className="px-5 py-3.5 flex items-center justify-between" style={{ borderBottom: "1px solid rgba(0,0,0,0.04)" }}>
        <div className="flex items-center gap-2">
          <span className="text-[11px] font-semibold" style={{ color: "var(--color-foreground)" }}>Inner Light</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full psc-adaptive-dot" style={{ background: "#8F82CD" }} />
          <span className="text-[9px] font-medium" style={{ color: "#8F82CD" }}>Adapting to you</span>
        </div>
      </div>

      <div className="p-5 flex-1">
        {/* Adaptive Framework — Grief Journey Stages */}
        <div className="rounded-xl p-4 mb-4" style={{ background: "rgba(143,130,205,0.03)", border: "1px solid rgba(143,130,205,0.06)" }}>
          <p className="text-[8px] font-semibold uppercase tracking-[0.14em] mb-3" style={{ color: "var(--color-muted)" }}>Your journey</p>
          <div className="flex items-center gap-1">
            {stages.map((s, idx) => (
              <div key={s.label} className="flex items-center flex-1">
                <div className="flex flex-col items-center flex-1">
                  <div
                    className={`h-5 w-5 rounded-full flex items-center justify-center ${s.active ? "psc-stage-active" : ""}`}
                    style={{
                      background: s.done ? "#8F82CD" : s.active ? "rgba(143,130,205,0.15)" : "rgba(0,0,0,0.03)",
                      border: s.active ? "1.5px solid #8F82CD" : "1.5px solid transparent",
                    }}
                  >
                    {s.done && <svg width="8" height="8" viewBox="0 0 12 12" fill="none"><path d="M3 6l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" /></svg>}
                    {s.active && <div className="h-1.5 w-1.5 rounded-full" style={{ background: "#8F82CD" }} />}
                  </div>
                  <span className="text-[7px] mt-1 font-medium" style={{ color: s.active ? "#8F82CD" : s.done ? "var(--color-foreground)" : "var(--color-muted)" }}>{s.label}</span>
                </div>
                {idx < stages.length - 1 && (
                  <div className="h-[1.5px] flex-1 -mt-3 mx-0.5" style={{ background: s.done ? "#8F82CD" : "rgba(0,0,0,0.06)" }} />
                )}
              </div>
            ))}
          </div>
          <p className="text-[9px] mt-3 text-center" style={{ color: "var(--color-muted)" }}>
            Week 2 · Tools adapted to <span style={{ color: "#8F82CD", fontWeight: 600 }}>Processing</span> stage
          </p>
        </div>

        {/* Adaptive Recommendation */}
        <div
          className="rounded-xl p-3.5 mb-4 flex items-center gap-3"
          style={{ background: "rgba(99,213,131,0.04)", border: "1px solid rgba(99,213,131,0.08)" }}
        >
          <div className="h-8 w-8 rounded-lg flex items-center justify-center shrink-0 relative" style={{ background: "rgba(99,213,131,0.08)" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#63D583" strokeWidth="1.2" /><circle cx="8" cy="8" r="2.5" stroke="#63D583" strokeWidth="1.2" strokeDasharray="2 2" /></svg>
            <div className="absolute inset-0 rounded-lg" style={{ border: "1px solid rgba(99,213,131,0.15)", animation: "pscBreatheRing 4s ease-in-out infinite" }} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-1.5">
              <p className="text-[11px] font-semibold" style={{ color: "var(--color-foreground)" }}>Guided Breathing</p>
              <span className="text-[7px] px-1.5 py-px rounded-full font-bold" style={{ background: "rgba(99,213,131,0.1)", color: "#63D583" }}>Suggested</span>
            </div>
            <p className="text-[9px] mt-0.5" style={{ color: "var(--color-muted)" }}>Based on your journal patterns this week</p>
          </div>
        </div>

        {/* Adaptive tools grid */}
        <p className="text-[8px] font-semibold uppercase tracking-[0.14em] mb-2.5" style={{ color: "var(--color-muted)" }}>Your tools</p>
        <div className="grid grid-cols-4 gap-1.5">
          {[
            { label: "Journal", color: "#8A8EE5", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M4 2h8a1 1 0 011 1v10a1 1 0 01-1 1H4a1 1 0 01-1-1V3a1 1 0 011-1z" stroke="#8A8EE5" strokeWidth="1.2" /><path d="M6 5h4M6 7.5h3" stroke="#8A8EE5" strokeWidth="1.2" strokeLinecap="round" /></svg> },
            { label: "Breathe", color: "#63D583", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#63D583" strokeWidth="1.2" /></svg> },
            { label: "Reflect", color: "#E59524", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="5" stroke="#E59524" strokeWidth="1.2" /><path d="M8 5v3l2 1" stroke="#E59524" strokeWidth="1.2" strokeLinecap="round" /></svg> },
            { label: "Remember", color: "#8F82CD", icon: <svg width="14" height="14" viewBox="0 0 16 16" fill="none"><path d="M8 13.5S2 10 2 6a3 3 0 015.5-1.7L8 5l.5-.7A3 3 0 0114 6c0 4-6 7.5-6 7.5z" stroke="#8F82CD" strokeWidth="1.2" /></svg> },
          ].map((a) => (
            <div key={a.label} className="rounded-lg p-2.5 text-center" style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(0,0,0,0.03)" }}>
              <div className="flex justify-center mb-1.5">{a.icon}</div>
              <p className="text-[9px] font-semibold" style={{ color: "var(--color-foreground)" }}>{a.label}</p>
            </div>
          ))}
        </div>

        {/* Weekly streak */}
        <div className="mt-3.5 flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[1,2,3,4,5,6,7].map(d => (
              <div key={d} className="flex flex-col items-center gap-0.5">
                <div className={`h-4 w-4 rounded-full flex items-center justify-center ${d <= 5 ? "psc-streak-dot" : ""}`} style={{ background: d <= 5 ? "rgba(138,142,229,0.08)" : "rgba(0,0,0,0.02)", animationDelay: `${d * 0.2}s` }}>
                  {d <= 5 && <svg width="7" height="7" viewBox="0 0 12 12" fill="none"><path d="M3 6l2 2 4-4" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" /></svg>}
                </div>
                <span className="text-[6px]" style={{ color: "var(--color-muted)" }}>{["M","T","W","T","F","S","S"][d-1]}</span>
              </div>
            ))}
          </div>
          <span className="text-[9px] font-semibold" style={{ color: "#8A8EE5" }}>5-day streak</span>
        </div>
      </div>
    </div>
  );
}
