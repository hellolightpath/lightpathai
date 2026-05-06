import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { faqPageJsonLd } from "@/lib/json-ld";

export const metadata: Metadata = {
  title: "FAQ | LightPathAI",
  description:
    "Answers about Care Plans, documents, privacy, supporters, Inner Light, and LightKeeper.",
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageJsonLd(allFaqs)) }}
      />

      {/* ─────────────────────────────────────────────────────────────
          HEADER — left-aligned editorial, no centered SaaS layout.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)", marginTop: "-64px" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 pt-44 sm:pt-56 pb-20 sm:pb-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              Questions
            </p>
            <h1
              className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-serif leading-[1.0] max-w-3xl"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.045em", fontWeight: 500 }}
            >
              Everything we get asked.
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          QUESTIONS — two-column editorial. Question left, answer right.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 pb-28 sm:pb-40">
          <div>
            {allFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 40}>
                <div
                  className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-12 py-9 sm:py-11"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <h2
                    className="sm:col-span-5 text-[18px] sm:text-[22px] font-serif leading-[1.25]"
                    style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em", fontWeight: 500 }}
                  >
                    {f.q}
                  </h2>
                  <p className="sm:col-span-7 text-[15px] sm:text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CTA — quiet single line.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[48rem] px-6 sm:px-10 py-28 sm:py-40 text-center">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] lg:text-[3rem] font-serif leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              We&rsquo;re here whenever you&rsquo;re ready.
            </h2>
            <Link href="/demo" className="btn-primary mt-10">
              When you&rsquo;re ready
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const allFaqs = [
  {
    q: "What is LightPathAI?",
    a: "LightPath is the grief intelligence platform, built for navigating loss. It generates a personalized Care Plan based on your situation, drafts letters and forms with AI Assist, surfaces benefits you may be eligible for, connects you with a trained peer companion, and gives you a private space for reflection. Built on peer-reviewed grief research, with clinical advisors from Stanford, Columbia, and Yale.",
  },
  {
    q: "Do I need to know everything to start?",
    a: "Not at all. Answer what you can and skip anything you\u2019re unsure about. LightPathAI builds your Care Plan from whatever you provide and adapts as you add details over time. There\u2019s no wrong way to begin.",
  },
  {
    q: "Is this really free?",
    a: "Your personalized Care Plan and core guidance are completely free. Everyone deserves support after a loss, regardless of what they can afford. Premium features like LightKeeper peer companion matching and advanced Assist automation are available through an optional upgrade.",
  },
  {
    q: "Is LightPathAI only for the first few days after a death?",
    a: "No. LightPathAI adapts whether the loss happened yesterday, three months ago, or years in the past. The system re-prioritizes based on where you are now: deadlines that still apply, tasks you haven\u2019t reached yet, and support that\u2019s relevant to your current stage.",
  },
  {
    q: "What is LightPathAI Assist?",
    a: "Assist is the AI engine inside your tasks. It drafts bereavement letters, fills out government forms, prepares call scripts, and organizes document packets, so you never start from a blank page. You review everything before it goes out. Nothing sends, submits, or files without your explicit approval.",
  },
  {
    q: "How does Benefits Discovery work?",
    a: "LightPathAI analyzes your specific situation: your state, the type of loss, your relationship to the deceased, employment status, and more. Then it identifies benefits you may qualify for. Social Security survivor benefits, employer life insurance, unclaimed property, veterans benefits, tax credits, and state-specific programs. We surface what applies, track every deadline, and walk you through filing.",
  },
  {
    q: "What is LightKeeper?",
    a: "LightKeeper pairs you with a trained peer companion. A real person who has lived through a similar loss. Not a therapist. Not a stranger with advice. Someone who understands because they\u2019ve been there, matched to you by loss type, life stage, and background.",
  },
  {
    q: "Is Inner Light therapy?",
    a: "No. Inner Light is a private, self-guided space for reflection, journaling, and grounding exercises that adapt to where you are emotionally. It supports your healing process, but it is not a substitute for professional therapy or crisis intervention. If you\u2019re in immediate danger, call 911. If you\u2019re in emotional crisis, call or text 988.",
  },
  {
    q: "Can a supporter help me through LightPathAI?",
    a: "Yes. You can invite up to 5 trusted supporters: family, friends, or advisors. Each supporter only sees the tasks and documents you explicitly share with them. Sensitive information stays protected. You decide who sees what, and you can adjust or revoke access at any time.",
  },
  {
    q: "How is my information protected?",
    a: "Your data is encrypted in transit, stored on a secure infrastructure, never sold, and never used for advertising. Sensitive actions like viewing or sharing documents require additional verification. You control exactly what is shared and with whom. Privacy is a principle we built on, not a feature we sell.",
  },
  {
    q: "How is this different from a checklist I found online?",
    a: "A generic checklist doesn\u2019t know your state, your family structure, your deadlines, or what documents you already have. It can\u2019t draft the letters for you, find benefits you didn\u2019t know existed, or connect you with someone who\u2019s been through what you\u2019re going through. LightPathAI does all of that. Personalized, guided, and built around your specific loss.",
  },
  {
    q: "Can my family use this together?",
    a: "Yes. Invite up to 5 supporters to help carry the load. Each person sees only what you choose to share. Tasks can be assigned, progress is visible, and sensitive details stay private. You stay in control of who has access and what they can see.",
  },
];
