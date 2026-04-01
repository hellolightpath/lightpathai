import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";

export const metadata: Metadata = {
  title: "Privacy Policy | LightPathAI",
  description: "How LightPathAI collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <section className="relative overflow-hidden hero-gradient min-h-[90vh]">
        <WarmGlow />
        <div className="section relative z-10 pt-36 sm:pt-48 pb-24 sm:pb-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="heading-xl">Privacy Policy</h1>
              <p className="mt-3 text-sm" style={{ color: "#94A3B8" }}>
                Last updated: March 2026
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section>
        <div className="section">
          <div className="mx-auto max-w-3xl space-y-12">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={i * 60}>
                <div>
                  <h2 className="heading-sm">{s.title}</h2>
                  <p className="mt-3 text-[17px] leading-relaxed" style={{ color: "#475569" }}>
                    {s.content}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

const sections = [
  {
    title: "Our Promise to You",
    content:
      "Your grief journey is deeply personal, and we built LightPath with that truth at the center. Privacy is not an afterthought here \u2014 it is a foundation. We collect only what we need to support you, we never sell your data, and we give you full control over what you share and how long we keep it.",
  },
  {
    title: "What We Collect",
    content:
      "We collect: account information (name, email address, password hash); journey details you choose to share (your relationship to the person you lost, circumstances, grief phase); emotional data from check-ins and Inner Light sessions (mood, feelings, tool usage); journal entries and reflections; conversations with AI companions; task progress and completions; documents stored in your Vault; and basic usage patterns (pages visited, features used, session duration). We do not collect precise geolocation, contacts, or any data from other apps on your device.",
  },
  {
    title: "How We Use Your Data",
    content:
      "We use your data to: personalize your grief support experience and recommendations; provide relevant task guidance based on your jurisdiction and circumstances; power AI companion conversations and emotional tool recommendations; remember your preferences, progress, and healing journey; detect signs of crisis to surface safety resources; and improve LightPath for all users through anonymized, aggregated analytics. We never sell your personal data. We never use your grief journey details for advertising. We never share your emotional data or journal entries with third parties for their own purposes.",
  },
  {
    title: "Data Storage and Security",
    content:
      "Your data is stored securely using Supabase with AES-256 encryption at rest and TLS encryption in transit. Row-level security policies ensure that only you can access your data. Vault documents are protected with additional encryption and PIN access controls. We conduct regular security reviews and follow industry best practices for data protection.",
  },
  {
    title: "AI and Your Data",
    content:
      "Conversations with AI companions (LightKeeper) are used to provide continuity in your support experience. We do not use your personal conversations to train AI models. AI features are powered by third-party providers (OpenAI) who process conversation data under strict data processing agreements that prohibit them from using your data for model training or any purpose other than generating your responses.",
  },
  {
    title: "Crisis Data",
    content:
      "When our system detects signs of crisis, we log a safety event to ensure appropriate resources are surfaced to you. These safety events include the timestamp, severity level, and what triggered the detection. Crisis data is never used for marketing, advertising, or analytics. In extreme circumstances where we believe there is an imminent risk to life, we may be required by law to share limited information with emergency services. We will always prioritize your safety.",
  },
  {
    title: "Analytics",
    content:
      "We use PostHog for product analytics to understand how people use LightPath and improve the experience. Analytics data is anonymized and does not include the content of your journal entries, conversations, or emotional check-ins. You can opt out of analytics at any time through the consent banner or by contacting us.",
  },
  {
    title: "Who We Share Data With",
    content:
      "We share data only with: service providers necessary to operate LightPath (cloud hosting via Supabase, AI processing via OpenAI, analytics via PostHog) \u2014 all under strict data processing agreements; and law enforcement or emergency services, but only when required by law or when we believe there is an imminent risk to life. We do not share your data with advertisers, data brokers, or any third party for their own commercial purposes. We do not sell your personal information.",
  },
  {
    title: "Your Rights Under California Law (CCPA)",
    content:
      "If you are a California resident, you have the right to: know what personal information we collect and how we use it; request a copy of your personal data in a portable format; request deletion of your personal data; opt out of the sale of your personal information (we do not sell your data, but you have the right to confirm this); and not be discriminated against for exercising any of these rights. To exercise any of these rights, contact us at hello@getlightpath.ai. We will respond to verified requests within 45 days.",
  },
  {
    title: "Data Retention and Deletion",
    content:
      "We keep your data for as long as your account is active. When you delete your account, your data enters a 30-day grace period. During this time, you can contact us at hello@getlightpath.ai to restore your account and data. After 30 days, we permanently delete your personal data from our systems, including journal entries, conversations, emotional data, and documents. Some anonymized, aggregated data may be retained for product improvement purposes.",
  },
  {
    title: "Children\u2019s Privacy",
    content:
      "LightPath is designed for adults aged 18 and older. We do not knowingly collect personal information from anyone under the age of 18. If we learn that we have collected data from someone under 18, we will delete it promptly. If you believe a minor has provided us with personal information, please contact us at hello@getlightpath.ai.",
  },
  {
    title: "Changes to This Policy",
    content:
      "We will notify you of significant changes to this privacy policy through the app or by email at least 30 days before they take effect. Your continued use of LightPath after changes are posted constitutes your acceptance of the updated policy.",
  },
  {
    title: "Contact",
    content:
      "For privacy questions, data requests, or concerns, reach out to us at hello@getlightpath.ai. We take every inquiry seriously and will respond within 10 business days.",
  },
];
