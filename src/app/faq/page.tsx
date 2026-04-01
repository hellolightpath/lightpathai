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
    a: "LightPathAI is a structured, trauma-informed AI system built for navigating loss. It generates a personalized Care Plan with 147 task templates across 18 categories, uses AI Assist to draft letters and fill forms, scans 40+ benefit programs for eligibility, offers 16 specialized AI companions matched to your type of loss, and provides 88 clinical interventions across 16 therapeutic frameworks for emotional grounding. It adapts to your faith, jurisdiction, grief stage, and emotional state in real time.",
  },
  {
    q: "Do I need to know everything to start?",
    a: "Not at all. Answer what you can and skip anything you\u2019re unsure about. LightPathAI builds your Care Plan from whatever you provide and adapts as you add details over time. There\u2019s no wrong way to begin.",
  },
  {
    q: "Is this really free?",
    a: "Your personalized Care Plan and core guidance are completely free. Everyone deserves support after a loss, regardless of what they can afford. During our soft launch, every feature is free. Premium tiers with advanced Assist automation will be available in the future.",
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
    a: "LightPathAI scans 40+ benefit programs against your specific situation \u2014 your state, loss type, relationship to the deceased, veteran status, employment, and more. Programs include Social Security survivor benefits, VA burial and DIC benefits, employer death benefits, pension survivor benefits, retirement account inheritance, unclaimed property, and state-specific programs. We surface what applies, track every deadline, and walk you through filing.",
  },
  {
    q: "What is LightKeeper?",
    a: "LightKeeper is an AI companion system with 16 specialized personas \u2014 each trained on a specific type of loss, from parent loss to suicide bereavement to caregiver grief. Your companion remembers your story across conversations, adapts to your emotional state in real time, and is available whenever you need \u2014 day or night, no scheduling, no waitlists.",
  },
  {
    q: "Is Inner Light therapy?",
    a: "No. Inner Light is a private, self-guided space with 88 clinical interventions drawn from 16 therapeutic frameworks \u2014 including DBT, ACT, somatic experiencing, continuing bonds, and narrative repair. It adapts to your emotional state, tracks your patterns across 15 feeling states, and recommends tools based on what\u2019s helped before. A clinical safety layer prevents premature deep work. It is not a substitute for professional therapy. If you\u2019re in crisis, call or text 988.",
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
    a: "A generic checklist doesn\u2019t know your state, your family structure, your deadlines, or what documents you already have. LightPathAI has 147 task templates that adapt to your jurisdiction, faith, role (executor vs. supporter), and relationship. It drafts letters, fills forms, scans 40+ benefit programs, adapts to your emotional state across 5 real-time support modes, and stores your sensitive documents in a PIN-protected vault.",
  },
  {
    q: "Can my family use this together?",
    a: "Yes. Invite up to 5 supporters to help carry the load. Each person sees only what you choose to share. Tasks can be assigned, progress is visible, and sensitive details stay private. You stay in control of who has access and what they can see.",
  },
];
