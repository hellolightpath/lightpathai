import Link from "next/link";
import { HorizonMark } from "@/components/horizon-mark";

const columns = [
  {
    title: "Product",
    links: [
      { label: "How it works", href: "/#features" },
      { label: "Your Path", href: "/#features" },
      { label: "Connect", href: "/#features" },
      { label: "Discover", href: "/#features" },
      { label: "Benefits", href: "/#features" },
      { label: "Find Care", href: "/#features" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "/faq" },
      { label: "Resources", href: "/blog" },
      { label: "Contact", href: "/demo" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Our Story", href: "/our-story" },
      { label: "For Providers", href: "/providers" },
      { label: "For Organizations", href: "/enterprise" },
      { label: "Trust", href: "/trust" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#FDFCFB" }}>
      {/* Gradient top border */}
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent 10%, rgba(138,142,229,0.12) 50%, transparent 90%)" }} />

      <div className="mx-auto max-w-6xl px-6 pt-16 pb-10">
        {/* Link columns */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="LightPathAI home">
              <HorizonMark size={24} theme="light" className="transition-transform duration-500 group-hover:translate-y-[-1px]" />
              <span className="text-[17px] font-sans font-semibold tracking-tight" style={{ color: "var(--color-foreground)", letterSpacing: "-0.01em" }}>
                LightPath<span style={{ color: "var(--color-primary)" }}>AI</span>
              </span>
            </Link>
            <p className="mt-1 text-[13px] font-medium tracking-wide" style={{ color: "#9598E8", opacity: 0.85 }}>
              The grief intelligence platform.
            </p>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "#8A847A" }}>
              For families navigating what comes after loss.
            </p>
            <a href="mailto:hello@getlightpath.ai" className="mt-3 inline-block text-sm text-[#8A847A] hover:text-[#9598E8] transition-colors duration-200">
              hello@getlightpath.ai
            </a>
            {/* Social links */}
            <div className="mt-4 flex items-center gap-3">
              <a href="https://www.linkedin.com/company/lightpathai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#8A847A] hover:text-[#9598E8] transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="https://x.com/lightpathai" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="text-[#8A847A] hover:text-[#9598E8] transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.instagram.com/lightpathai/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#8A847A] hover:text-[#9598E8] transition-colors duration-200">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
              </a>
            </div>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-sans font-semibold uppercase tracking-wider" style={{ color: "var(--color-foreground)" }}>
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-[#8A847A] hover:text-[#9598E8] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Safety note — coral, never red */}
        <div className="mt-14 rounded-xl p-5" style={{ backgroundColor: "rgba(193,122,110,0.06)", border: "1px solid rgba(193,122,110,0.18)" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] mb-2" style={{ color: "#C17A6E" }}>
            Need support right now?
          </p>
          <p className="text-[13px] leading-[1.7]" style={{ color: "#5C564F" }}>
            Call or text <a href="tel:988" className="font-semibold" style={{ color: "#C17A6E" }}>988</a> &nbsp;·&nbsp;
            Crisis Text Line: text <span className="font-semibold" style={{ color: "#C17A6E" }}>HOME</span> to <a href="sms:741741" className="font-semibold" style={{ color: "#C17A6E" }}>741741</a> &nbsp;·&nbsp;
            For immediate danger, call <a href="tel:911" className="font-semibold" style={{ color: "#C17A6E" }}>911</a>.
          </p>
          <p className="mt-2 text-[12px]" style={{ color: "#8A847A" }}>
            Always free. Always available. Never paywalled.
          </p>
        </div>

        {/* Disclaimer + copyright */}
        <div className="mt-8 border-t pt-6" style={{ borderColor: "#F1F5F9" }}>
          <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
            LightPathAI provides information and organizational support. It is not a law firm and
            does not provide legal advice. It is not a medical provider and does not replace
            professional mental health care.
          </p>
          <p className="mt-4 text-xs" style={{ color: "#CBD5E1" }}>
            &copy; {new Date().getFullYear()} LightPathAI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
