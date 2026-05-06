"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { HorizonMark } from "@/components/horizon-mark";

const links = [
  { href: "/#features", label: "How it works" },
  { href: "/providers", label: "For Providers" },
  { href: "/enterprise", label: "For Organizations" },
  { href: "/our-story", label: "Our Story" },
  { href: "/blog", label: "Resources" },
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
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* On light-hero pages, always show dark text / white bg nav */
  const isScrolled = lightHero || scrolled;

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled
          ? "bg-[rgba(245,242,239,0.85)] backdrop-blur-2xl backdrop-saturate-150 border-b border-[rgba(61,54,48,0.06)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 h-16">
        {/* Logo — Horizon mark + wordmark */}
        <Link href="/" className="flex items-center gap-2.5 group" aria-label="LightPathAI home">
          <HorizonMark
            size={26}
            theme={isScrolled ? "light" : "dark"}
            className="transition-transform duration-500 group-hover:translate-y-[-1px]"
          />
          <span
            className="text-[17px] font-sans font-semibold tracking-tight transition-colors duration-500"
            style={{ color: isScrolled ? "var(--color-foreground)" : "#FFFFFF", letterSpacing: "-0.01em" }}
          >
            LightPath<span style={{ color: "var(--color-primary)" }}>AI</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-[14px] font-medium transition-colors duration-300 hover:text-[var(--color-primary)]"
              style={{ color: isScrolled ? "var(--color-body)" : "rgba(255,255,255,0.82)" }}
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
          <svg
            className="h-5 w-5 transition-colors duration-500"
            style={{ color: isScrolled ? "var(--color-foreground)" : "#FFFFFF" }}
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 7h16.5M3.75 12h16.5m-16.5 5h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t bg-[var(--color-surface)] px-6 py-5 md:hidden" style={{ borderColor: "var(--color-border-light)" }}>
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block py-2.5 text-[15px] font-medium transition-colors duration-200"
              style={{ color: "var(--color-body)" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/demo"
            className="btn-primary mt-4 w-full text-center"
            onClick={() => setOpen(false)}
          >
            Request a demo
          </Link>
        </div>
      )}
    </header>
  );
}
