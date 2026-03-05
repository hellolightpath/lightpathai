"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { LogoMark } from "./logo-mark";

const links = [
  { href: "/#features", label: "How it works" },
  { href: "/enterprise", label: "Enterprise" },
  { href: "/our-story", label: "Our Story" },
  { href: "/blog", label: "Blog" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [lightHero, setLightHero] = useState(false);

  useEffect(() => {
    /* Detect if the page has a dark hero (NightSky) or light hero */
    const hasDarkHero = !!document.querySelector("[data-hero-dark]");
    if (!hasDarkHero) setLightHero(true);

    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* On light-hero pages, always show dark text / white bg nav */
  const isScrolled = lightHero || scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-white/80 backdrop-blur-2xl backdrop-saturate-150 border-b border-black/[0.04] shadow-[0_1px_3px_rgba(0,0,0,0.04)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <LogoMark size={30} className="transition-transform duration-300 group-hover:scale-110" />
          <span className="text-lg font-sans font-semibold tracking-tight transition-colors duration-500" style={{ color: isScrolled ? "var(--color-foreground)" : "#FFFFFF" }}>
            LightPath<span style={{ color: "var(--color-primary)" }}>AI</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium hover:text-[#8A8EE5] transition-colors duration-300"
              style={{ color: isScrolled ? "var(--color-body)" : "rgba(255,255,255,0.85)" }}
            >
              {l.label}
            </Link>
          ))}
          <Link href="/demo" className="btn-primary-sm">
            Request a demo
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg className="h-5 w-5 transition-colors duration-500" style={{ color: isScrolled ? "var(--color-foreground)" : "#FFFFFF" }} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-white px-6 py-5 md:hidden" style={{ borderColor: "#F1F5F9" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-sm font-medium text-[#64748B] hover:text-[#8A8EE5] transition-colors duration-200"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demo"
            className="btn-primary mt-4 w-full text-center text-sm"
            onClick={() => setOpen(false)}
          >
            Request a demo
          </Link>
        </div>
      )}
    </header>
  );
}
