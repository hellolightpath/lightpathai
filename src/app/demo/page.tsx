"use client";

import { useState, type FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { HorizonMark } from "@/components/horizon-mark";

export default function DemoPage() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
  });

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(false);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Request failed");

      setSubmitted(true);

      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "demo_form_submission", {
          role: formData.role,
        });
      }
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="relative min-h-screen" style={{ marginTop: "-64px", background: "var(--color-surface)" }}>
      <div className="relative z-10 mx-auto max-w-[64rem] px-6 sm:px-10 pt-40 sm:pt-56 pb-24 sm:pb-32">

        {/* Editorial hero — full width above, single column */}
        <div className="max-w-3xl">
          <Reveal>
            <h1
              className="text-[3rem] sm:text-[4.5rem] lg:text-[5.25rem] font-serif leading-[1.0]"
              style={{ letterSpacing: "-0.045em", color: "var(--color-foreground)", fontWeight: 500 }}
            >
              When you&rsquo;re ready,
              <br />
              <span style={{ color: "var(--color-body)" }}>we&rsquo;ll be here.</span>
            </h1>
            <p className="mt-9 text-[17px] leading-[1.75] max-w-md" style={{ color: "var(--color-body)" }}>
              Tell us a little about yourself. We respond within a day.
            </p>
          </Reveal>
        </div>

        {/* Form column — narrower than hero, sits below */}
        <div className="mt-20 sm:mt-28 max-w-md">
            {submitted ? (
              <Reveal>
                <div className="max-w-md">
                  <div className="mb-8">
                    <HorizonMark size={36} theme="light" />
                  </div>
                  <h2
                    className="text-[2rem] sm:text-[2.5rem] font-serif leading-[1.05]"
                    style={{ letterSpacing: "-0.035em", color: "var(--color-foreground)", fontWeight: 500 }}
                  >
                    Thank you.
                  </h2>
                  <p className="mt-5 text-[16px] leading-[1.75]" style={{ color: "var(--color-body)" }}>
                    We&rsquo;ll be in touch within a day.
                  </p>
                </div>
              </Reveal>
            ) : (
              <Reveal delay={120}>
                <form onSubmit={handleSubmit} className="max-w-md space-y-9">
                  {error && (
                    <p className="text-[13px] pb-1" style={{ color: "var(--color-coral)", borderBottom: "1px solid rgba(193,122,110,0.25)" }}>
                      Something went wrong. Try again, or reach us at{" "}
                      <a href="mailto:hello@getlightpath.ai" className="underline">hello@getlightpath.ai</a>.
                    </p>
                  )}

                  <FieldUnderline
                    id="name"
                    label="Name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(v) => setFormData({ ...formData, name: v })}
                  />

                  <FieldUnderline
                    id="email"
                    label="Email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(v) => setFormData({ ...formData, email: v })}
                  />

                  <FieldUnderline
                    id="company"
                    label="Company"
                    optional
                    type="text"
                    value={formData.company}
                    onChange={(v) => setFormData({ ...formData, company: v })}
                  />

                  <fieldset className="space-y-3">
                    <legend
                      className="text-[12px] uppercase mb-1"
                      style={{ color: "var(--color-muted)", letterSpacing: "0.18em" }}
                    >
                      This is for
                    </legend>
                    {[
                      { v: "family", label: "Me, or someone I love" },
                      { v: "supporter", label: "Someone I&rsquo;m supporting" },
                      { v: "organization", label: "My organization" },
                    ].map((opt) => (
                      <label
                        key={opt.v}
                        className="flex items-center gap-3 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="role"
                          value={opt.v}
                          required
                          checked={formData.role === opt.v}
                          onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                          className="sr-only peer"
                        />
                        <span
                          aria-hidden="true"
                          className="h-[14px] w-[14px] rounded-full transition-colors duration-200"
                          style={{
                            border: `1px solid ${formData.role === opt.v ? "var(--color-primary)" : "var(--color-border)"}`,
                            background: formData.role === opt.v ? "var(--color-primary)" : "transparent",
                            boxShadow: formData.role === opt.v ? "inset 0 0 0 3px var(--color-surface)" : "none",
                          }}
                        />
                        <span
                          className="text-[15px] transition-colors duration-200"
                          style={{ color: formData.role === opt.v ? "var(--color-foreground)" : "var(--color-body)" }}
                          dangerouslySetInnerHTML={{ __html: opt.label }}
                        />
                      </label>
                    ))}
                  </fieldset>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={loading || !formData.role}
                      className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? "Sending" : "Send"}
                    </button>
                  </div>
                </form>
              </Reveal>
            )}
        </div>

        {/* Crisis line — quiet, persistent below the form */}
        <div className="mt-24 sm:mt-32 max-w-md">
          <p className="text-[11px] uppercase mb-3" style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}>
            Need support right now?
          </p>
          <p className="text-[14px] leading-[1.7]" style={{ color: "var(--color-body)" }}>
            Call or text{" "}
            <a href="tel:988" className="font-semibold" style={{ color: "var(--color-coral)" }}>988</a>.
            Crisis Text Line: text{" "}
            <span className="font-semibold" style={{ color: "var(--color-coral)" }}>HOME</span>{" "}
            to{" "}
            <a href="sms:741741" className="font-semibold" style={{ color: "var(--color-coral)" }}>741741</a>.
          </p>
        </div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   Underline-only form field. No glass, no boxes. Editorial.
   ───────────────────────────────────────────────────────────── */
function FieldUnderline({
  id,
  label,
  type,
  value,
  onChange,
  required,
  optional,
}: {
  id: string;
  label: string;
  type: "text" | "email";
  value: string;
  onChange: (v: string) => void;
  required?: boolean;
  optional?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const filled = value.length > 0;

  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label
          htmlFor={id}
          className="text-[12px] uppercase"
          style={{
            color: "var(--color-muted)",
            letterSpacing: "0.18em",
          }}
        >
          {label}
        </label>
        {optional && (
          <span className="text-[11px]" style={{ color: "var(--color-subtle)", letterSpacing: "0.04em" }}>
            optional
          </span>
        )}
      </div>
      <input
        id={id}
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="block w-full bg-transparent outline-none text-[17px] py-2 transition-colors duration-200"
        style={{
          color: "var(--color-foreground)",
          borderBottom: `1px solid ${focused ? "var(--color-primary)" : filled ? "var(--color-border)" : "var(--color-border-light)"}`,
        }}
      />
    </div>
  );
}
