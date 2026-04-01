import Link from "next/link";
import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";
import { NightSky } from "@/components/night-sky";
import { StarField } from "@/components/star-field";

export const metadata: Metadata = {
  title: "Features | LightPathAI",
  description:
    "147 task templates, 88 clinical interventions, 16 AI companions, 40+ benefit programs, secure document vault, and real-time emotional adaptation. Everything families need after loss.",
};

export default function FeaturesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden pt-36 pb-20 sm:pt-44 sm:pb-28 text-center" data-hero-dark>
        <StarField />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <Reveal>
            <span className="label" style={{ color: "rgba(255,255,255,0.35)" }}>
              Platform features
            </span>
          </Reveal>
          <Reveal delay={50}>
            <h1 className="mt-5 text-[2rem] sm:text-[3.75rem] font-serif font-normal leading-[1.04]" style={{ letterSpacing: "-0.04em" }}>
              <span className="text-white">Built for the hardest</span><br />
              <span className="text-shimmer">moments of life.</span>
            </h1>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-xl mx-auto text-[16px] sm:text-[17px] leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Every feature is grounded in clinical grief research, tested against real emotional states, and designed for someone who shouldn&rsquo;t have to think clearly right now.
            </p>
          </Reveal>

          {/* Stats bar */}
          <Reveal delay={250}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
              <span><strong className="text-white font-semibold">147</strong> task templates</span>
              <span><strong className="text-white font-semibold">88</strong> clinical interventions</span>
              <span><strong className="text-white font-semibold">16</strong> AI companions</span>
              <span><strong className="text-white font-semibold">40+</strong> benefit programs</span>
              <span><strong className="text-white font-semibold">14</strong> provider categories</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Care Plan ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold" style={{ color: "#8A8EE5", opacity: 0.4 }}>01</span>
              <span className="tag-pill"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8A8EE5" }} />Care Plan</span>
            </div>
            <h2 className="text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              147 tasks. 18 categories.<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>Every one adapted to your situation.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Jurisdiction-aware", desc: "Task guidance adapts to your state's specific laws, filing requirements, and deadlines. No generic advice.", color: "#8A8EE5" },
              { title: "Faith-aware milestones", desc: "Islamic Arba'in (40 days), Jewish Shloshim and Yahrzeit, Hindu Shraddha \u2014 recognized and factored into task timing.", color: "#E59524" },
              { title: "Authority mode", desc: "Different content for executors who can act vs. supporters who help. The same task, two completely different experiences.", color: "#8F82CD" },
              { title: "AI Assist", desc: "Drafts bereavement letters, fills government forms, prepares call scripts. You review everything before it goes out.", color: "#5A8A6E" },
              { title: "Progressive profiling", desc: "Asks only what it needs, when it needs it. 4 tiers of information gathering so you're never overwhelmed upfront.", color: "#D4A0C0" },
              { title: "Task delegation", desc: "Assign tasks to supporters. They see only what you share. Track progress across your Circle of Care.", color: "#8A8EE5" },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
                <div className="rounded-2xl p-7 h-full" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.03)" }}>
                  <div className="w-2 h-2 rounded-full mb-3" style={{ backgroundColor: card.color }} />
                  <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--color-foreground)" }}>{card.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 18 categories */}
          <Reveal delay={200}>
            <div className="mt-12 rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "var(--color-primary)", opacity: 0.6 }}>18 task categories</p>
              <div className="flex flex-wrap gap-2">
                {[
                  "Immediate arrangements", "Funeral", "Informing others", "Bills & debt",
                  "Benefits", "House & property", "Legal", "Documents",
                  "Insurance", "Government", "Employer", "Digital accounts",
                  "Health & medical", "Retirement", "Vehicles", "Self-care",
                  "Emotional", "Financial",
                ].map((cat) => (
                  <span key={cat} className="px-3 py-1.5 rounded-full text-[12px] font-medium" style={{ backgroundColor: "rgba(138,142,229,0.06)", color: "var(--color-foreground)" }}>
                    {cat}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Inner Light ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold" style={{ color: "#8F82CD", opacity: 0.4 }}>02</span>
              <span className="tag-pill"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8F82CD" }} />Inner Light</span>
            </div>
            <h2 className="text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              88 clinical interventions.<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>16 therapeutic frameworks.</span>
            </h2>
          </Reveal>

          {/* Frameworks grid */}
          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {[
                "DBT Distress Tolerance", "DBT Emotion Regulation", "ACT Cognitive Defusion",
                "Self-Compassion", "Continuing Bonds", "Narrative Repair",
                "Meaning Reconstruction", "Somatic Experiencing",
                "Trauma-Informed Stabilization", "Attachment-Informed",
                "Psychoeducation", "MBSR (Mindfulness)",
                "Interpersonal Process", "Caregiver Resilience",
                "Prolonged Exposure", "DBT Emotion Naming",
              ].map((fw) => (
                <div key={fw} className="rounded-xl px-4 py-3 text-center" style={{ backgroundColor: "rgba(143,130,205,0.04)", border: "1px solid rgba(143,130,205,0.08)" }}>
                  <p className="text-[12px] font-medium" style={{ color: "var(--color-foreground)" }}>{fw}</p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Capabilities */}
          <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "15 feeling states", desc: "Overwhelmed, anxious, sad, angry, guilty, numb, restless, tired, unsure, lonely, confused, ashamed, relieved, yearning, fearful. The platform meets you where you are.", color: "#8F82CD" },
              { title: "9 therapeutic tracks", desc: "Grounding, breathing, somatic, emotional processing, continuing bonds, narrative, identity, supporter, and daily rhythm. Each with prerequisite checking and next-step guidance.", color: "#8A8EE5" },
              { title: "Clinical safety layer", desc: "Hard gates prevent premature deep work. Crisis mode blocks all non-grounding tools. Suicidal ideation triggers immediate safety resources. Dissociation risk blocks exposure tools.", color: "#D4725C" },
              { title: "Rumination detection", desc: "Distinguishes intrusive rumination (circular, stuck) from deliberate rumination (meaning-making, growth). Adjusts tool recommendations accordingly.", color: "#E59524" },
              { title: "Post-traumatic growth tracking", desc: "Tracks engagement across Tedeschi & Calhoun's 5 PTG domains: personal strength, new possibilities, relating to others, spiritual change, appreciation of life.", color: "#7BA88E" },
              { title: "17-signal recommendation engine", desc: "Feeling match, past success, intensity, grief phase, contraindications, scenario context, emotional memory, relationship-aware boosting, temporal micro-timing, and more.", color: "#D4A0C0" },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
                <div className="flex items-start gap-4 rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="mt-1 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: card.color }} />
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1" style={{ color: "var(--color-foreground)" }}>{card.title}</h3>
                    <p className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>{card.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LightKeeper ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold" style={{ color: "#E59524", opacity: 0.4 }}>03</span>
              <span className="tag-pill"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#E59524" }} />LightKeeper</span>
            </div>
            <h2 className="text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              16 AI companions.<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>Each specialized in a kind of loss.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
              Not a generic chatbot. Each companion has a distinct personality, communication style, and deep specialization &mdash; from parent loss to suicide bereavement to caregiver grief.
            </p>
          </Reveal>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Relational memory", desc: "Your companion remembers your story across conversations. Context summaries compress long-term memory so nothing important is forgotten." },
              { title: "Cross-feature intelligence", desc: "Topics from LightKeeper conversations flow to Inner Light (tool boosting), Guides (scoring), Care Plan (task boosting), and Find Care (provider bridges)." },
              { title: "Crisis protocol", desc: "Every persona detects crisis signals. When triggered: acknowledge pain, provide 988 and Crisis Text Line, continue being present. Never dismissive, never panicked." },
              { title: "Loss-type matching", desc: "Matched by specialization, relationship, time-since-loss, conversation pace, and loss context. The right voice for the right moment." },
            ].map((card, i) => (
              <Reveal key={card.title} delay={i * 60}>
                <div className="rounded-2xl p-7 h-full" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.03)" }}>
                  <h3 className="text-[16px] font-semibold mb-2" style={{ color: "var(--color-foreground)" }}>{card.title}</h3>
                  <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>{card.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits Discovery ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold" style={{ color: "#8F82CD", opacity: 0.4 }}>04</span>
              <span className="tag-pill"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#8F82CD" }} />Benefits Discovery</span>
            </div>
            <h2 className="text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              40+ programs scanned.<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>No money left on the table.</span>
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                "Social Security survivor benefits", "SS lump sum death payment ($255)",
                "VA burial allowance", "VA DIC (Dependency & Indemnity)",
                "Life insurance claims", "Employer death benefits",
                "Final paycheck & COBRA", "401(k) / retirement inheritance",
                "Pension survivor benefits", "Medicare / Medicaid unwind",
                "Unclaimed property (state)", "State-specific programs",
              ].map((prog) => (
                <div key={prog} className="rounded-xl px-4 py-3" style={{ backgroundColor: "rgba(143,130,205,0.04)", border: "1px solid rgba(143,130,205,0.08)" }}>
                  <p className="text-[12px] font-medium" style={{ color: "var(--color-foreground)" }}>{prog}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-8 text-[14px] leading-relaxed" style={{ color: "var(--color-body)" }}>
              Each program is matched against your profile &mdash; relationship, veteran status, state, employment, documents available. Progressive profiling asks the right question at the right time to resolve eligibility from &ldquo;possible&rdquo; to &ldquo;eligible.&rdquo;
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── Emotional Intelligence (5 Support Modes) ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #2E3658 0%, #2A3352 30%, #262F4C 70%, #2E3658 100%)" }}>
        <NightSky />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="text-center mb-14">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(138,142,229,0.65)" }}>
                Emotional intelligence
              </span>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal text-white leading-[1.08]" style={{ letterSpacing: "-0.035em" }}>
                5 real-time support modes.
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                The entire platform reshapes itself based on your emotional state. Priority order: crisis &rarr; grounding &rarr; rest &rarr; gentle action &rarr; reflection.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {[
              { mode: "Crisis", desc: "Everything stops. Tasks suppressed. Safety resources and grounding only. Dashboard short-circuits to single-purpose safety screen.", color: "#D4725C" },
              { mode: "Grounding", desc: "Stabilization tools prioritized. Gentle pacing. Low intensity cap on all content.", color: "#E5A030" },
              { mode: "Rest", desc: "Late night + overwhelmed. Minimal content. Comfort only. The platform goes quiet.", color: "#8F82CD" },
              { mode: "Gentle action", desc: "Soft tasks, one step at a time. No celebrations. Medium intensity. Early grief default.", color: "#D4A0C0" },
              { mode: "Reflection", desc: "Full access. Meaning-making unlocked. Celebration enabled. The user is processing deliberately.", color: "#7BA88E" },
            ].map((item, i) => (
              <Reveal key={item.mode} delay={i * 60}>
                <div className="rounded-xl p-5 h-full" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[14px] font-semibold text-white">{item.mode}</span>
                  </div>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={300}>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { title: "Grief wave detection", desc: "Detects acute emotional drops. Severity scoring from 0 to 1. Post-stability drops increase severity. Drives mode transitions." },
                { title: "Rumination awareness", desc: "Distinguishes intrusive (circular, stuck) from deliberate (meaning-making). Adjusts tool recommendations with \u00b115 scoring impact." },
                { title: "Faith-aware timing", desc: "Islamic Arba'in, Jewish Shloshim + Yahrzeit, Hindu Shraddha. Anniversary proximity blocks advancement. Cultural grief milestones respected." },
              ].map((item, i) => (
                <div key={item.title} className="rounded-xl p-5" style={{ backgroundColor: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}>
                  <h3 className="text-[14px] font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Find Care ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #F5F3FA 35%, #F8F5FC 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold" style={{ color: "#5A8A6E", opacity: 0.4 }}>05</span>
              <span className="tag-pill"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#5A8A6E" }} />Find Care</span>
            </div>
            <h2 className="text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              14 service categories.<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>6-dimension intelligent matching.</span>
            </h2>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {[
              "Mental health", "Legal", "Financial advising", "Funeral services",
              "Tax preparation", "Benefits specialists", "Home & property", "Wellness & healing",
              "Estate cleanout", "Digital legacy", "Support communities", "Administrative",
              "Memorial & tribute", "Free resources",
            ].map((cat) => (
              <Reveal key={cat}>
                <div className="rounded-xl px-4 py-3 text-center" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.7)" }}>
                  <p className="text-[13px] font-medium" style={{ color: "var(--color-foreground)" }}>{cat}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={100}>
            <div className="mt-12 rounded-2xl p-6 sm:p-8" style={{ backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4" style={{ color: "#5A8A6E", opacity: 0.8 }}>6-dimension matching algorithm</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { dim: "Quality (25%)", desc: "Credentials, response rate, ratings" },
                  { dim: "Specialization (25%)", desc: "Loss-type depth match" },
                  { dim: "Phase (15%)", desc: "Grief timing fit" },
                  { dim: "Context (15%)", desc: "Geographic, faith, language" },
                  { dim: "Behavioral (10%)", desc: "Past interaction patterns" },
                  { dim: "Availability (10%)", desc: "Current capacity" },
                ].map((d) => (
                  <div key={d.dim}>
                    <p className="text-[13px] font-semibold" style={{ color: "var(--color-foreground)" }}>{d.dim}</p>
                    <p className="text-[12px]" style={{ color: "var(--color-body)" }}>{d.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Vault ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-bold" style={{ color: "#E59524", opacity: 0.4 }}>06</span>
              <span className="tag-pill"><span className="h-1.5 w-1.5 rounded-full" style={{ background: "#E59524" }} />Vault</span>
            </div>
            <h2 className="text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Secure document storage.<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>PIN-protected. Encrypted. Yours.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
              Death certificates, wills, insurance policies, account records &mdash; stored behind a PIN in one secure place. Share specific documents with specific supporters, and revoke access at any time.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "PIN-protected access", color: "#8A8EE5" },
                { label: "Upload any document", color: "#E59524" },
                { label: "Selective sharing", color: "#5A8A6E" },
                { label: "Encrypted at rest", color: "#8F82CD" },
              ].map((item) => (
                <div key={item.label} className="rounded-xl p-4 text-center" style={{ backgroundColor: "rgba(255,255,255,0.5)", backdropFilter: "blur(12px)", border: "1px solid rgba(255,255,255,0.6)" }}>
                  <div className="w-2 h-2 rounded-full mx-auto mb-3" style={{ backgroundColor: item.color }} />
                  <p className="text-[13px] font-medium" style={{ color: "var(--color-foreground)" }}>{item.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Dual Context: Built for Both ── */}
      <section className="relative overflow-hidden py-24 sm:py-32" style={{ background: "linear-gradient(180deg, #FDFCFB 0%, #FEF9F0 35%, #FFF8ED 65%, #FDFCFB 100%)" }}>
        <WarmGlow />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          <div className="text-center mb-14">
            <Reveal>
              <span className="label" style={{ color: "var(--color-primary)", opacity: 0.5 }}>
                Two journeys, one platform
              </span>
              <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
                Built for the person grieving.<br className="hidden sm:block" />
                <span style={{ color: "var(--color-body)" }}>And the person helping.</span>
              </h2>
              <p className="mt-4 max-w-xl mx-auto text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
                LightPathAI adapts everything &mdash; language, task content, tool selection, and emotional tone &mdash; based on whether you&rsquo;re navigating your own loss or supporting someone through theirs.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <Reveal>
              <div className="rounded-2xl p-8 h-full" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.03)" }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: "#8A8EE5" }} />
                <h3 className="text-[18px] font-semibold mb-3" style={{ color: "var(--color-foreground)" }}>Personal journey</h3>
                <div className="space-y-3">
                  {[
                    "Full executor authority \u2014 file claims, sign documents, make decisions",
                    "Emotional tools calibrated to your grief phase and feeling state",
                    "Benefits scanned against your eligibility",
                    "AI companion matched to your specific loss",
                    "Vault access to all stored documents",
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-2.5">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#8A8EE5" }} />
                      <span className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div className="rounded-2xl p-8 h-full" style={{ backgroundColor: "rgba(255,255,255,0.6)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.7)", boxShadow: "0 0 0 0.5px rgba(0,0,0,0.03), 0 4px 16px rgba(0,0,0,0.03)" }}>
                <div className="w-2 h-2 rounded-full mb-4" style={{ backgroundColor: "#7BA88E" }} />
                <h3 className="text-[18px] font-semibold mb-3" style={{ color: "var(--color-foreground)" }}>Supporter journey</h3>
                <div className="space-y-3">
                  {[
                    "Support-only mode \u2014 help without overstepping boundaries",
                    "Caregiver-specific emotional tools and resilience interventions",
                    "See only the tasks and documents shared with you",
                    "Companion matched to supporter-specific challenges",
                    "Different task content \u2014 same task, different guidance",
                  ].map((text) => (
                    <div key={text} className="flex items-start gap-2.5">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "#7BA88E" }} />
                      <span className="text-[13px] leading-relaxed" style={{ color: "var(--color-body)" }}>{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Crisis Safety ── */}
      <section className="relative py-24 sm:py-32" style={{ backgroundColor: "#FDFCFB" }}>
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <span className="label" style={{ color: "#D4725C", opacity: 0.7 }}>
              Crisis safety
            </span>
            <h2 className="mt-5 text-[1.5rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08]" style={{ color: "var(--color-foreground)", letterSpacing: "-0.035em" }}>
              Safety is not a feature.<br className="hidden sm:block" />
              <span style={{ color: "var(--color-body)" }}>It&rsquo;s the foundation.</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-[16px] leading-relaxed" style={{ color: "var(--color-body)" }}>
              7 layers of crisis protection. Always free. Never gated. When someone is in danger, the entire platform stops and becomes a single-purpose safety screen.
            </p>
          </Reveal>

          <Reveal delay={100}>
            <div className="mt-12 rounded-2xl p-6 sm:p-8 text-left" style={{ backgroundColor: "rgba(212,114,92,0.03)", border: "1px solid rgba(212,114,92,0.1)" }}>
              <div className="space-y-4">
                {[
                  "Global crisis banner on every surface when crisis detected",
                  "Dashboard short-circuits to safety-only screen",
                  "Every AI companion has built-in crisis escalation",
                  "Clinical safety layer blocks high-intensity tools",
                  "Safety events logged for continuity of care",
                  "988 Suicide & Crisis Lifeline + Crisis Text Line always visible",
                  "Crisis resources are always free \u2014 never behind a paywall, signup, or feature tier",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "#D4725C" }} />
                    <p className="text-[14px] leading-relaxed" style={{ color: "var(--color-foreground)" }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative overflow-hidden py-24 sm:py-32 text-center">
        <StarField />
        <div className="relative z-10 mx-auto max-w-2xl px-6">
          <Reveal>
            <h2 className="text-[1.75rem] sm:text-[2.75rem] font-serif font-normal leading-[1.08] text-white max-w-2xl mx-auto" style={{ letterSpacing: "-0.035em" }}>
              Built for the moment{" "}<br className="hidden sm:block" />
              <span className="font-serif italic" style={{ color: "rgba(212,160,192,0.8)" }}>when nothing else makes sense.</span>
            </h2>
            <p className="mt-6 max-w-lg mx-auto text-[16px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              Whenever you&rsquo;re ready, we&rsquo;re here.
            </p>
            <div className="mt-10">
              <Link href="/demo" className="btn-white">
                Get early access
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
