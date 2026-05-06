import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { HorizonMark } from "@/components/horizon-mark";

export const metadata: Metadata = {
  title: "Trust | LightPathAI",
  description:
    "Privacy-first design, permissioned sharing, step-up protection for sensitive documents, and the clinical advisors behind the platform.",
};

export default function TrustPage() {
  return (
    <>
      {/* ─────────────────────────────────────────────────────────────
          HERO — left-aligned editorial.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)", marginTop: "-64px" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 pt-44 sm:pt-56 pb-20 sm:pb-24">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
              Trust
            </p>
            <h1
              className="text-[2.5rem] sm:text-[4rem] lg:text-[5rem] font-serif leading-[1.0] max-w-3xl"
              style={{ color: "var(--color-foreground)", letterSpacing: "-0.045em", fontWeight: 500 }}
            >
              Trust is the product.
            </h1>
            <p className="mt-9 max-w-xl text-[17px] sm:text-[18px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
              We are built for the most sensitive moments of your life. Privacy, clarity, and your control are foundational. Not features we added later.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          PRINCIPLES — typographic rows, no card boxes.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 pb-28 sm:pb-40">
          <div>
            {principles.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div
                  className="grid grid-cols-12 gap-6 sm:gap-12 items-baseline py-10 sm:py-14"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <p
                    className="col-span-2 sm:col-span-1 text-[12px] uppercase"
                    style={{ color: "var(--color-primary)", letterSpacing: "0.18em" }}
                  >
                    {p.num}
                  </p>
                  <h2
                    className="col-span-10 sm:col-span-5 text-[1.5rem] sm:text-[2rem] font-serif leading-[1.15]"
                    style={{ color: "var(--color-foreground)", letterSpacing: "-0.025em", fontWeight: 500 }}
                  >
                    {p.title}
                  </h2>
                  <p className="col-span-12 sm:col-span-6 text-[15px] sm:text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    {p.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CLINICAL ADVISORS — quiet, real, deck-grounded.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[72rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                Clinical advisory
              </p>
              <h2 className="text-[2rem] sm:text-[3rem] lg:text-[3.25rem] font-serif leading-[1.06]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
                The researchers and clinicians behind the platform.
              </h2>
              <p className="mt-7 text-[17px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                Every framework, screening instrument, and intervention is grounded in peer-reviewed grief research and reviewed by clinicians who have spent careers in this field.
              </p>
            </div>
          </Reveal>

          <div className="mt-20 sm:mt-24">
            {advisors.map((a, i) => (
              <Reveal key={a.name} delay={i * 70}>
                <div
                  className="grid grid-cols-12 gap-6 sm:gap-12 py-10 sm:py-12"
                  style={{ borderTop: "1px solid var(--color-border-light)" }}
                >
                  <div className="col-span-12 sm:col-span-5">
                    <h3
                      className="text-[1.25rem] sm:text-[1.5rem] font-serif leading-[1.2]"
                      style={{ color: "var(--color-foreground)", letterSpacing: "-0.02em", fontWeight: 500 }}
                    >
                      {a.name}
                    </h3>
                    <p className="mt-2 text-[12px] uppercase" style={{ color: "var(--color-primary)", letterSpacing: "0.18em" }}>
                      {a.role}
                    </p>
                  </div>
                  <p className="col-span-12 sm:col-span-7 text-[15px] sm:text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    {a.body}
                  </p>
                </div>
              </Reveal>
            ))}
            <div style={{ borderTop: "1px solid var(--color-border-light)" }} />
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          THE GROUND TRUTH — what the platform is, and is not.
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "var(--color-surface)" }}>
        <div className="mx-auto max-w-[64rem] px-6 sm:px-10 py-28 sm:py-40">
          <Reveal>
            <p className="text-[11px] font-semibold uppercase mb-7" style={{ color: "var(--color-coral)", letterSpacing: "0.22em" }}>
              The ground truth
            </p>
            <h2 className="text-[2rem] sm:text-[2.75rem] font-serif leading-[1.08] max-w-2xl" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              What we are. What we are not.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-10 max-w-3xl">
            <Reveal>
              <div>
                <p className="text-[12px] uppercase mb-5" style={{ color: "var(--color-primary)", letterSpacing: "0.22em" }}>
                  We are
                </p>
                {[
                  "An organizing system for the work that follows a death.",
                  "A clinical-grade emotional support platform.",
                  "A way for families to coordinate without exposing what they want kept private.",
                ].map((line) => (
                  <p key={line} className="text-[15px] leading-[1.75] py-3" style={{ color: "var(--color-body)", borderTop: "1px solid var(--color-border-light)" }}>
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="text-[12px] uppercase mb-5" style={{ color: "var(--color-coral)", letterSpacing: "0.22em" }}>
                  We are not
                </p>
                {[
                  "A law firm. We do not provide legal advice.",
                  "A medical or mental health provider. We do not replace clinical care.",
                  "A griefbot. We do not simulate or speak as the person who died.",
                ].map((line) => (
                  <p key={line} className="text-[15px] leading-[1.75] py-3" style={{ color: "var(--color-body)", borderTop: "1px solid var(--color-border-light)" }}>
                    {line}
                  </p>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <p className="mt-14 text-[14px] leading-[1.75] max-w-xl" style={{ color: "var(--color-muted)" }}>
              In any urgent situation, every screen offers immediate access to{" "}
              <a href="tel:988" className="font-semibold" style={{ color: "var(--color-coral)" }}>988</a>,
              the Crisis Text Line (text{" "}
              <span className="font-semibold" style={{ color: "var(--color-coral)" }}>HOME</span> to{" "}
              <a href="sms:741741" className="font-semibold" style={{ color: "var(--color-coral)" }}>741741</a>),
              and emergency services. Always free. Never paywalled.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          CTA
          ───────────────────────────────────────────────────────────── */}
      <section className="relative" style={{ background: "#FAFAF8" }}>
        <div className="mx-auto max-w-[48rem] px-6 sm:px-10 py-28 sm:py-40 text-center">
          <Reveal>
            <div className="mb-10 flex justify-center">
              <HorizonMark size={44} theme="light" />
            </div>
            <h2 className="text-[1.75rem] sm:text-[2.5rem] font-serif leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.04em", fontWeight: 500 }}>
              Whenever you&rsquo;re ready, we&rsquo;re here.
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

const principles = [
  {
    num: "01",
    title: "Privacy first by design.",
    body: "We minimize what we ask. Sharing is explicit. Access is role-aware. We never sell your data, and we never share it without your direct permission. Encrypted in transit. Stored on infrastructure that encrypts at rest by default.",
  },
  {
    num: "02",
    title: "Protected when it matters most.",
    body: "Signing in is simple. When you view, download, delete, or share sensitive documents, we add an extra verification step. Not because we don't trust you. Because the stakes are too high to leave to chance.",
  },
  {
    num: "03",
    title: "You decide what supporters see.",
    body: "Supporters can help with tasks and coordination. Documents and personal details are shared only when the primary person chooses. Access can be revoked at any time, on any task, from any screen.",
  },
  {
    num: "04",
    title: "Crisis resources, never paywalled.",
    body: "Every screen offers immediate access to 988, the Crisis Text Line, and emergency services. Always free. Never gated behind a sign-up. Never blocked behind a feature flag.",
  },
  {
    num: "05",
    title: "Clinical honesty, not theater.",
    body: "Inner Light is a private self-guided space, not therapy. Connect is an AI companion grounded in peer-reviewed research, not a clinician. Find Care surfaces grief-aware professionals when human help is what you need. We say what we are, and what we are not.",
  },
];

const advisors = [
  {
    name: "M. Katherine Shear, MD",
    role: "Clinical advisor",
    body: "Marion E. Kenworthy Professor of Psychiatry at Columbia University. Director of the Center for Prolonged Grief. Pioneer of Complicated Grief Treatment, the field's leading evidence-based protocol.",
  },
  {
    name: "Rebecca Sands, MD",
    role: "Clinical advisor",
    body: "Chief of Palliative Care at Stanford Medicine. Brings the perspective of clinicians at the moment of loss, where the bereavement journey actually begins.",
  },
  {
    name: "Tyler Tate, MD",
    role: "Clinical advisor",
    body: "Palliative Care Physician and Clinical Ethicist at Stanford. Reviews every framework, screening instrument, and intervention against the standard of clinical-grade care.",
  },
];
