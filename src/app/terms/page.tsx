import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";
import { WarmGlow } from "@/components/warm-glow";

export const metadata: Metadata = {
  title: "Terms of Service | LightPathAI",
  description: "Terms and conditions for using LightPathAI.",
};

export default function TermsPage() {
  return (
    <>
      <section className="relative overflow-hidden hero-gradient min-h-[90vh]">
        <WarmGlow />
        <div className="section relative z-10 pt-36 sm:pt-48 pb-24 sm:pb-32">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <h1 className="heading-xl">Terms of Service</h1>
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
    title: "Welcome",
    content:
      "LightPath is a grief support and healing companion designed to help you navigate life after loss. By creating an account or using LightPath, you agree to these terms. If you do not agree, please do not use the service.",
  },
  {
    title: "What LightPath Is \u2014 and What It Is Not",
    content:
      "LightPath provides informational support, task guidance, emotional wellness tools, and AI-powered companionship for people experiencing grief or supporting someone who is. LightPath is NOT a substitute for professional mental health care, therapy, counseling, legal advice, or financial guidance. Our tools are designed for self-guided emotional support and practical task management \u2014 they are not clinical interventions. If you are experiencing a mental health emergency, please contact your local emergency services or a crisis helpline immediately.",
  },
  {
    title: "Crisis Disclaimer",
    content:
      "If you are in immediate danger, call 911 (or your local emergency number). For crisis support, call or text 988 (Suicide & Crisis Lifeline) or text HOME to 741741 (Crisis Text Line). LightPath may detect signs of distress and surface crisis resources, but we are not an emergency service and cannot guarantee real-time intervention.",
  },
  {
    title: "AI Companion Disclaimer",
    content:
      "LightPath includes AI-powered features, including the LightKeeper companion and Inner Light emotional tools. These companions are powered by artificial intelligence, not human therapists or counselors. AI responses are generated to be supportive and empathetic but may not always be accurate or appropriate for your specific situation. AI companions do not replace human connection, professional therapy, or medical advice. You should not rely on AI-generated content for making legal, medical, financial, or safety decisions. AI-generated documents, letters, and forms are templates only. You are responsible for reviewing and verifying all AI-generated content before submitting it to any institution, agency, or organization. Benefits discovery results are informational and do not guarantee eligibility.",
  },
  {
    title: "AI Safety Limitations and Your Responsibility",
    content:
      "You acknowledge that the AI in LightPath may generate responses that are inaccurate, incomplete, or not appropriate for your specific emotional or psychological state. The AI cannot reliably detect suicidal thoughts, self-harm intent, or all crisis situations. While LightPath includes automated crisis detection, this is a supplementary safety measure and is not guaranteed to identify every crisis. You must not rely on LightPath to detect or respond to a mental health emergency. If you are experiencing suicidal thoughts, self-harm urges, or any mental health emergency, stop using LightPath immediately and contact emergency services (911), the 988 Suicide & Crisis Lifeline (call or text 988), or the Crisis Text Line (text HOME to 741741).",
  },
  {
    title: "Your Account",
    content:
      "You must be at least 18 years old to use LightPath. You are responsible for maintaining the security of your account credentials and for all activity under your account. You agree to provide accurate information during registration. If you believe your account has been compromised, please contact us immediately at hello@getlightpath.ai.",
  },
  {
    title: "Your Data",
    content:
      "The information you share with LightPath \u2014 including your grief journey details, journal entries, emotional check-ins, and conversations \u2014 is deeply personal. We treat it with the care and respect it deserves. Please see our Privacy Policy for complete details on how we collect, store, protect, and use your data.",
  },
  {
    title: "Acceptable Use",
    content:
      "LightPath is a supportive community built on empathy and respect. You agree not to: use the platform to harass, threaten, or harm others; share content that is illegal, hateful, or intentionally harmful; misrepresent your identity or impersonate others; attempt to access other users\u2019 data or accounts; use automated tools to scrape or collect data from the platform; or use LightPath for any commercial purpose without our written consent.",
  },
  {
    title: "Benefits Discovery Disclaimer",
    content:
      "Benefits discovery is an informational tool only. We do not guarantee eligibility for any benefits, including Social Security survivor benefits, life insurance proceeds, VA benefits, pension distributions, or any other financial entitlements. Actual eligibility is determined solely by the relevant government agency, insurance company, or organization. We are not liable for benefits you do not receive, deadlines you may miss, or inaccuracies in benefit estimates. Always verify benefit information directly with the issuing organization.",
  },
  {
    title: "Limitation of Liability",
    content:
      "LightPath is provided \u201Cas is\u201D and \u201Cas available\u201D without warranties of any kind, express or implied. To the maximum extent permitted by law, LightPath and its officers, directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the service. Our total liability for any claim shall not exceed the amount you paid us in the twelve months preceding the claim. Nothing in the service constitutes professional medical, legal, financial, or tax advice.",
  },
  {
    title: "Dispute Resolution",
    content:
      "Before filing any claim, you agree to contact us at hello@getlightpath.ai and attempt to resolve the dispute informally for at least 30 days. If informal resolution fails, disputes will be resolved through binding arbitration administered by JAMS under its Streamlined Arbitration Rules, conducted in the State of California. You agree to waive any right to a jury trial or to participate in a class action. California law governs these terms without regard to conflict of law principles.",
  },
  {
    title: "Termination",
    content:
      "You may delete your account at any time through your Profile settings. When you delete your account, your data enters a 30-day grace period during which you can contact us to restore it. After 30 days, your data is permanently deleted in accordance with our Privacy Policy. We may also suspend or terminate your account if you violate these terms.",
  },
  {
    title: "Changes to These Terms",
    content:
      "We may update these terms as LightPath evolves. We will notify you of significant changes through the app or by email. Your continued use of LightPath after changes are posted constitutes your acceptance of the updated terms.",
  },
  {
    title: "Contact",
    content:
      "If you have questions about these terms, we are here for you. Reach out to us at hello@getlightpath.ai.",
  },
];
