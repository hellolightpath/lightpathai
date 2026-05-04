import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Trust and privacy | LightPathAI",
  description:
    "Privacy first, permissioned sharing, step-up protection for sensitive documents, and clear boundaries.",
};

export default function TrustPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden hero-gradient min-h-[50vh]">
        <div className="section relative z-10 flex flex-col items-center text-center pt-36 sm:pt-48 pb-24 sm:pb-32">
          <Reveal>
            <p className="tag-pill mb-8 mx-auto" style={{ width: "fit-content" }}>
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A8EE5" }} />
              Trust &amp; privacy
            </p>
            <h1 className="heading-xl">Trust is the product.</h1>
            <p className="mt-6 max-w-2xl text-[17px] leading-relaxed" style={{ color: "#475569" }}>
              We design LightPathAI for the most sensitive moments of your life. Privacy, clarity,
              and your control are foundational. Not features we added later.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Trust principles ── */}
      <section>
        <div className="section">
          <div className="mx-auto max-w-3xl space-y-6">
            {trustPrinciples.map((p, i) => (
              <Reveal key={p.title} delay={i * 100}>
                <div className="card">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" aria-hidden="true" style={{ background: `linear-gradient(135deg, ${p.color}15, ${p.color}08)`, border: `1px solid ${p.color}18` }}>
                      {p.icon}
                    </div>
                    <div>
                      <h2 className="heading-sm">{p.title}</h2>
                      <div className="mt-3 leading-relaxed" style={{ color: "#475569" }}>
                        {p.content}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── What we are and aren't ── */}
      <section className="relative noise" style={{ background: "linear-gradient(180deg, #F8F8FA 0%, #F3F2F7 50%, #F8F8FA 100%)" }}>
        <div className="separator" />
        <div className="section">
          <Reveal>
            <div className="mx-auto max-w-3xl card-feature p-8 sm:p-10">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl" style={{ background: "linear-gradient(135deg, rgba(229,149,36,0.1), rgba(229,149,36,0.04))", border: "1px solid rgba(229,149,36,0.12)" }}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E59524" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                </div>
                <div>
                  <h2 className="heading-sm">What LightPathAI is and is not</h2>
                  <p className="mt-3 leading-relaxed" style={{ color: "#475569" }}>
                    LightPathAI provides guidance and organization. It does not provide legal advice. It
                    does not replace medical or mental health care. In urgent situations, contact local
                    emergency services.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden" style={{ background: "linear-gradient(180deg, #FDFCFB, #EEEDF5)" }}>
        <div className="section relative z-10 text-center">
          <Reveal>
            <h2 className="heading-lg">Whenever you&rsquo;re ready, we&rsquo;re here.</h2>
            <Link href="/demo" className="btn-primary mt-8">
              Get early access
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}

const trustPrinciples = [
  {
    title: "Privacy first by design",
    color: "#8A8EE5",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8A8EE5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
    content: (
      <p>
        We minimize what we ask for, keep controls clear, and avoid surprises. Sharing is
        explicit. Access is role-aware. We never sell your data. We never share it without
        your direct permission.
      </p>
    ),
  },
  {
    title: "Protected when it matters",
    color: "#8F82CD",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#8F82CD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/><circle cx="12" cy="16" r="1"/></svg>,
    content: (
      <p>
        Signing in stays simple. When you view, download, delete, or share sensitive
        documents, we add an extra verification step. Not because we don&rsquo;t trust you.
        Because this stuff is too important to leave to chance.
      </p>
    ),
  },
  {
    title: "You control what supporters can access",
    color: "#63D583",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#63D583" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    content: (
      <p>
        Supporters can help with tasks and coordination. Documents and personal details are
        shared only when the primary person chooses. Access can be revoked at any time.
      </p>
    ),
  },
  {
    title: "Emotional safety, built in",
    color: "#E59524",
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#E59524" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>,
    content: (
      <>
        <p>
          Inner Light is a private self-guided space, not a substitute for professional
          mental health care. LightKeeper connects you with trained peer companions, not
          therapists. Our companions receive training in boundaries, crisis recognition, and
          safety protocols. We have moderation tools and clear reporting channels.
        </p>
        <p className="mt-4">
          If you ever feel unsafe or need immediate support, every screen includes direct
          access to 988 and emergency resources.
        </p>
      </>
    ),
  },
];
