"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { LivingSky } from "@/components/living-sky";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    message: "",
  });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // TODO: Wire to backend (e.g. Formspree, Resend, your own API)
    try {
      setSubmitted(true);
      setError(false);
    } catch {
      setError(true);
    }
  }

  return (
    <section className="relative overflow-hidden min-h-screen" style={{ marginTop: "-64px" }}>
      {/* Living Sky background */}
      <LivingSky />

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-8 pt-32 sm:pt-40 pb-20 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── Left Column: Story ── */}
            <Reveal>
              <div className="lg:pt-8">
                <p
                  className="inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[13px] font-medium tracking-wide"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.5)",
                    color: "#5B5F9E",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: "#8A8EE5" }}
                  />
                  Get started
                </p>

                <h1
                  className="mt-8 text-[2.25rem] sm:text-[3rem] lg:text-[3.5rem] font-serif font-normal leading-[1.06]"
                  style={{ letterSpacing: "-0.04em", color: "#1C1C2E" }}
                >
                  Let&rsquo;s find the{" "}
                  <br className="hidden sm:block" />
                  right path for you
                </h1>

                <p
                  className="mt-6 text-[17px] leading-relaxed max-w-md"
                  style={{ color: "#6B6E8D" }}
                >
                  Whether you&rsquo;re navigating loss yourself or supporting those who are,
                  we&rsquo;d love to show you how LightPath can help.
                </p>

              </div>
            </Reveal>

            {/* ── Right Column: Form ── */}
            <Reveal delay={150}>
              <div className="w-full max-w-lg mx-auto lg:mx-0">
                {submitted ? (
                  /* ── Success State ── */
                  <div
                    className="rounded-3xl p-8 sm:p-10 text-center"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(24px) saturate(1.3)",
                      WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 4px 32px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div
                      className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl"
                      style={{
                        background: "rgba(99,213,131,0.12)",
                        border: "1px solid rgba(99,213,131,0.2)",
                      }}
                    >
                      <svg className="h-8 w-8" style={{ color: "#63D583" }} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <h2
                      className="mt-6 text-2xl font-serif"
                      style={{ color: "#1C1C2E", letterSpacing: "-0.02em" }}
                    >
                      Thank you
                    </h2>
                    <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#6B6E8D" }}>
                      We&rsquo;ll be in touch soon with a time that works for you.
                    </p>
                    <div
                      className="mt-6 rounded-xl p-4"
                      style={{
                        background: "rgba(255,255,255,0.4)",
                        border: "1px solid rgba(255,255,255,0.4)",
                      }}
                    >
                      <p className="text-[13px] leading-relaxed" style={{ color: "#6B6E8D" }}>
                        If you need immediate support, call{" "}
                        <a href="tel:988" className="font-semibold" style={{ color: "#1C1C2E" }}>988</a>{" "}
                        (Suicide &amp; Crisis Lifeline) or{" "}
                        <a href="tel:911" className="font-semibold" style={{ color: "#1C1C2E" }}>911</a>.
                      </p>
                    </div>
                  </div>
                ) : (
                  /* ── Form ── */
                  <form
                    onSubmit={handleSubmit}
                    className="rounded-3xl p-7 sm:p-9 space-y-5"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      backdropFilter: "blur(24px) saturate(1.3)",
                      WebkitBackdropFilter: "blur(24px) saturate(1.3)",
                      border: "1px solid rgba(255,255,255,0.5)",
                      boxShadow: "0 4px 32px rgba(0,0,0,0.04), 0 1px 4px rgba(0,0,0,0.02)",
                    }}
                  >
                    <div className="mb-2">
                      <h2
                        className="text-xl font-serif font-normal"
                        style={{ color: "#1C1C2E", letterSpacing: "-0.02em" }}
                      >
                        Request a demo
                      </h2>
                      <p className="mt-1.5 text-[14px]" style={{ color: "#6B6E8D" }}>
                        Tell us a bit about yourself and we&rsquo;ll set up a time.
                      </p>
                    </div>

                    {error && (
                      <div className="rounded-xl p-4" style={{ background: "rgba(254,226,226,0.6)" }}>
                        <p className="text-sm" style={{ color: "#DC2626" }}>
                          Something went wrong. Please try again, or reach us at{" "}
                          <a href="mailto:hello@getlightpath.ai" className="underline">hello@getlightpath.ai</a>.
                        </p>
                      </div>
                    )}

                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-[13px] font-medium mb-1.5" style={{ color: "#3D3F5E" }}>
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="form-input"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-[13px] font-medium mb-1.5" style={{ color: "#3D3F5E" }}>
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="form-input"
                        placeholder="you@company.com"
                      />
                    </div>

                    {/* Role */}
                    <div>
                      <label htmlFor="role" className="block text-[13px] font-medium mb-1.5" style={{ color: "#3D3F5E" }}>
                        I am a...
                      </label>
                      <select
                        id="role"
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="form-input appearance-none"
                        style={{ color: formData.role ? "#1C1C1E" : undefined }}
                      >
                        <option value="" disabled>Select one...</option>
                        <option value="family">Grieving family member</option>
                        <option value="supporter">Supporter helping someone</option>
                        <option value="hospice">Hospice or funeral home</option>
                        <option value="employer">Employer</option>
                        <option value="insurance">Life insurance provider</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-[13px] font-medium mb-1.5" style={{ color: "#3D3F5E" }}>
                        Message{" "}
                        <span style={{ color: "#94A3B8", fontWeight: 400 }}>(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="form-input resize-none"
                        placeholder="Tell us a little about what you're looking for..."
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full font-sans font-medium text-[15px] transition-all duration-300 ease-out relative overflow-hidden"
                      style={{
                        padding: "0.875rem 2rem",
                        background: "rgba(90, 95, 180, 0.85)",
                        color: "white",
                        border: "1px solid rgba(255,255,255,0.15)",
                        boxShadow: "0 1px 3px rgba(90,95,180,0.2), 0 4px 16px rgba(90,95,180,0.12)",
                        letterSpacing: "0.015em",
                      }}
                    >
                      Request a demo
                      <svg width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </button>

                    <p className="text-center text-[13px] leading-relaxed" style={{ color: "#94A3B8" }}>
                      We&rsquo;ll respond within 1 business day.
                      <br />
                      No pressure, no sales pitch. Just a conversation.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

          </div>
        </div>
      </div>
    </section>
  );
}
