"use client";

import { useEffect, useState } from "react";

/**
 * Living Sky — warm, luminous, deeply animated hero background.
 * Multiple drifting cloud-orbs, light rays, shimmer overlay, and
 * breathing glow create a sky that truly feels alive and spiritual.
 */
export function LivingSky() {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    setMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Base gradient — soft lavender / blush / warm ivory */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #E6E8F8 0%, #E0E4F8 20%, #EBEcF2 40%, #E0E6F6 60%, #DEE5F4 80%, #DBE2F2 100%)",
        }}
      />

      {/* Breathing center glow — pulses gently, brighter */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 75% 62% at 50% 42%, rgba(255,255,255,1) 0%, rgba(255,253,248,0.8) 20%, rgba(255,250,242,0.5) 45%, transparent 75%)",
          animation: mounted && !reducedMotion ? "skyBreathe 8s ease-in-out infinite" : "none",
        }}
      />

      {/* Animated gradient shimmer — slow color shift across the whole sky */}
      {mounted && !reducedMotion && (
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, transparent 0%, rgba(195,205,242,0.2) 25%, rgba(245,240,230,0.18) 50%, rgba(190,215,248,0.2) 75%, transparent 100%)",
            backgroundSize: "200% 200%",
            animation: "skyShimmer 10s ease-in-out infinite",
          }}
        />
      )}

      {/* Animated orbs — living clouds */}
      {mounted && !reducedMotion && (
        <>
          {/* Orb 1 — Large Lavender Cloud (top-left, sweeps across) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "60%",
              height: "65%",
              top: "-10%",
              left: "-10%",
              background:
                "radial-gradient(ellipse at center, rgba(200,208,245,0.8) 0%, rgba(190,200,240,0.45) 30%, transparent 60%)",
              filter: "blur(45px)",
              animation: "orbDrift1 12s ease-in-out infinite",
            }}
          />

          {/* Orb 2 — Warm Peach / Rose Cloud (right, sweeps left) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "55%",
              height: "55%",
              top: "10%",
              right: "-12%",
              background:
                "radial-gradient(ellipse at center, rgba(210,218,248,0.7) 0%, rgba(200,212,245,0.38) 35%, transparent 60%)",
              filter: "blur(45px)",
              animation: "orbDrift2 14s ease-in-out infinite",
            }}
          />

          {/* Orb 3 — Cool Sky Blue (bottom-left, rises) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "50%",
              height: "50%",
              bottom: "-8%",
              left: "5%",
              background:
                "radial-gradient(ellipse at center, rgba(175,210,248,0.8) 0%, rgba(170,208,245,0.45) 35%, transparent 60%)",
              filter: "blur(45px)",
              animation: "orbDrift3 16s ease-in-out infinite",
            }}
          />

          {/* Orb 4 — Warm ivory accent (center, breathes) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "35%",
              height: "35%",
              top: "35%",
              left: "30%",
              background:
                "radial-gradient(ellipse at center, rgba(255,245,230,0.7) 0%, rgba(250,240,220,0.35) 40%, transparent 70%)",
              filter: "blur(35px)",
              animation: "orbDrift1 10s ease-in-out infinite reverse",
            }}
          />

          {/* Orb 5 — Subtle lavender whisper (top-right, drifting) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "30%",
              height: "32%",
              top: "5%",
              right: "12%",
              background:
                "radial-gradient(ellipse at center, rgba(205,190,235,0.35) 0%, rgba(198,185,230,0.15) 40%, transparent 65%)",
              filter: "blur(35px)",
              animation: "orbDrift4 9s ease-in-out infinite",
            }}
          />

          {/* Orb 6 — Faint lavender glow (bottom-right, slow drift) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "40%",
              height: "38%",
              bottom: "5%",
              right: "-5%",
              background:
                "radial-gradient(ellipse at center, rgba(210,200,238,0.3) 0%, rgba(200,195,232,0.15) 40%, transparent 65%)",
              filter: "blur(40px)",
              animation: "orbDrift2 20s ease-in-out infinite reverse",
            }}
          />

          {/* Orb 8 — Very light peachy-pink whisper (bottom-center) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "40%",
              height: "35%",
              bottom: "5%",
              left: "25%",
              background:
                "radial-gradient(ellipse at center, rgba(245,210,200,0.25) 0%, rgba(240,200,190,0.12) 40%, transparent 65%)",
              filter: "blur(50px)",
              animation: "orbDrift3 15s ease-in-out infinite reverse",
            }}
          />

          {/* Orb 9 — Faint peachy warmth (top-right edge) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "25%",
              height: "28%",
              top: "15%",
              right: "5%",
              background:
                "radial-gradient(ellipse at center, rgba(248,218,210,0.2) 0%, rgba(242,210,200,0.1) 40%, transparent 65%)",
              filter: "blur(40px)",
              animation: "orbDrift1 13s ease-in-out infinite",
            }}
          />

          {/* Orb 7 — Tiny golden spark (mid-left, wandering) */}
          <div
            className="absolute rounded-full will-change-transform"
            style={{
              width: "18%",
              height: "18%",
              top: "55%",
              left: "8%",
              background:
                "radial-gradient(ellipse at center, rgba(230,240,255,0.7) 0%, rgba(220,235,250,0.35) 45%, transparent 70%)",
              filter: "blur(25px)",
              animation: "orbDrift4 11s ease-in-out infinite reverse",
            }}
          />

          {/* Light rays — diagonal shafts of soft light */}
          <div
            className="absolute will-change-transform"
            style={{
              width: "120%",
              height: "120%",
              top: "-30%",
              left: "-10%",
              background:
                "repeating-linear-gradient(125deg, transparent 0px, transparent 80px, rgba(255,255,255,0.06) 80px, rgba(255,255,255,0.06) 82px, transparent 82px, transparent 160px)",
              animation: "lightRaysDrift 20s linear infinite",
            }}
          />

          {/* Secondary light rays — offset, slower */}
          <div
            className="absolute will-change-transform"
            style={{
              width: "120%",
              height: "120%",
              top: "-20%",
              left: "-15%",
              background:
                "repeating-linear-gradient(105deg, transparent 0px, transparent 120px, rgba(255,255,255,0.04) 120px, rgba(255,255,255,0.04) 123px, transparent 123px, transparent 240px)",
              animation: "lightRaysDrift 30s linear infinite reverse",
            }}
          />

          {/* Sparkle particles — tiny floating dots */}
          <div
            className="absolute"
            style={{
              width: "4px",
              height: "4px",
              top: "20%",
              left: "25%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.9)",
              boxShadow: "0 0 6px 2px rgba(255,255,255,0.4)",
              animation: "sparkleFloat1 6s ease-in-out infinite",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "3px",
              height: "3px",
              top: "45%",
              left: "65%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.85)",
              boxShadow: "0 0 5px 2px rgba(255,255,255,0.35)",
              animation: "sparkleFloat2 8s ease-in-out infinite",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "3px",
              height: "3px",
              top: "70%",
              left: "40%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.8)",
              boxShadow: "0 0 5px 2px rgba(255,255,255,0.3)",
              animation: "sparkleFloat1 7s ease-in-out infinite 2s",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "2px",
              height: "2px",
              top: "30%",
              left: "80%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.75)",
              boxShadow: "0 0 4px 1px rgba(255,255,255,0.3)",
              animation: "sparkleFloat2 5s ease-in-out infinite 1s",
            }}
          />
          <div
            className="absolute"
            style={{
              width: "3px",
              height: "3px",
              top: "60%",
              left: "15%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.7)",
              boxShadow: "0 0 5px 2px rgba(255,255,255,0.25)",
              animation: "sparkleFloat1 9s ease-in-out infinite 3s",
            }}
          />
        </>
      )}
    </div>
  );
}
