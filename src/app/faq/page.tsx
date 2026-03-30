import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
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
      {/* ── Header ── */}
      <section className="relative overflow-hidden">
        <WarmGlow />
        <div className="section relative z-10 text-center pt-36 sm:pt-44 pb-12 sm:pb-16">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: "var(--color-primary)" }}>
              Frequently asked
            </p>
            <h1 className="text-[2rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Questions you might have
            </h1>
          </Reveal>
        </div>
      </section>

      {/* ── All questions ── */}
      <section>
        <div className="section pt-0">
          <div className="mx-auto max-w-[40rem]">
            {allFaqs.map((f, i) => (
              <Reveal key={f.q} delay={i * 50}>
                <div
                  className="py-7"
                  style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}
                >
                  <h3 className="text-[17px] font-semibold leading-snug" style={{ color: "var(--color-foreground)" }}>
                    {f.q}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                    {f.a}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, transparent, rgba(245,243,250,0.5))" }}>
        <div className="section relative z-10 text-center">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] mb-5" style={{ color: "var(--color-primary)" }}>
              Still curious?
            </p>
            <h2 className="text-[1.5rem] sm:text-[2rem] font-serif font-normal leading-[1.15]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              We&rsquo;re here whenever you&rsquo;re ready.
            </h2>
            <Link href="/demo" className="btn-primary mt-8">
              Get early access
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
    a: "LightPathAI is a structured, trauma-informed AI system built for navigating sudden loss. It generates a personalized Care Plan based on your situation, uses AI Assist to draft letters, fill forms, and guide every task, surfaces benefits you may be eligible for, connects you with a trained peer companion, and gives you a private space for emotional grounding. Everything is designed for someone who shouldn\u2019t have to figure this out alone.",
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
    a: "No. LightPathAI adapts whether the loss happened yesterday, three months ago, or years in the past. The system re-prioritizes based on where you are now \u2014 deadlines that still apply, tasks you haven\u2019t reached yet, and support that\u2019s relevant to your current stage.",
  },
  {
    q: "What is LightPathAI Assist?",
    a: "Assist is the AI engine inside your tasks. It drafts bereavement letters, fills out government forms, prepares call scripts, and organizes document packets \u2014 so you never start from a blank page. You review everything before it goes out. Nothing sends, submits, or files without your explicit approval.",
  },
  {
    q: "How does Benefits Discovery work?",
    a: "LightPathAI analyzes your specific situation \u2014 your state, the type of loss, your relationship to the deceased, employment status, and more \u2014 then identifies benefits you may qualify for. Social Security survivor benefits, employer life insurance, unclaimed property, veterans benefits, tax credits, and state-specific programs. We surface what applies, track every deadline, and walk you through filing.",
  },
  {
    q: "What is LightKeeper?",
    a: "LightKeeper pairs you with a trained peer companion \u2014 a real person who has lived through a similar loss. Not a therapist. Not a stranger with advice. Someone who understands because they\u2019ve been there, matched to you by loss type, life stage, and background.",
  },
  {
    q: "Is Inner Light therapy?",
    a: "No. Inner Light is a private, self-guided space for reflection, journaling, and grounding exercises that adapt to where you are emotionally. It supports your healing process, but it is not a substitute for professional therapy or crisis intervention. If you\u2019re in immediate danger, call 911. If you\u2019re in emotional crisis, call or text 988.",
  },
  {
    q: "Can a supporter help me through LightPathAI?",
    a: "Yes. You can invite up to 5 trusted supporters \u2014 family, friends, or advisors. Each supporter only sees the tasks and documents you explicitly share with them. Sensitive information stays protected. You decide who sees what, and you can adjust or revoke access at any time.",
  },
  {
    q: "How is my information protected?",
    a: "Your data is encrypted, never sold, and never used for advertising. Sensitive actions like viewing or sharing documents require additional verification. You control exactly what is shared and with whom. Privacy isn\u2019t a feature we offer \u2014 it\u2019s a principle we built on.",
  },
  {
    q: "How is this different from a checklist I found online?",
    a: "A generic checklist doesn\u2019t know your state, your family structure, your deadlines, or what documents you already have. It can\u2019t draft the letters for you, find benefits you didn\u2019t know existed, or connect you with someone who\u2019s been through what you\u2019re going through. LightPathAI does all of that \u2014 personalized, guided, and built around your specific loss.",
  },
  {
    q: "Can my family use this together?",
    a: "Yes. Invite up to 5 supporters to help carry the load. Each person sees only what you choose to share. Tasks can be assigned, progress is visible, and sensitive details stay private. You stay in control of who has access and what they can see.",
  },
];
