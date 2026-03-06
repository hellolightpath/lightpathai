"use client";

/**
 * WarmGlow — subtle animated gradient orbs that add warmth
 * to otherwise pure-white content sections.
 * Place inside a `relative overflow-hidden` parent.
 */
export function WarmGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      {/* Large lavender — left side */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "55%",
          height: "65%",
          top: "0%",
          left: "-10%",
          background:
            "radial-gradient(ellipse at center, rgba(220,215,245,0.7) 0%, rgba(210,205,240,0.35) 35%, transparent 65%)",
          filter: "blur(55px)",
          animation: "featureGlow1 14s ease-in-out infinite",
        }}
      />
      {/* Blue-lavender — right side */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "50%",
          height: "55%",
          top: "25%",
          right: "-8%",
          background:
            "radial-gradient(ellipse at center, rgba(195,208,248,0.6) 0%, rgba(185,200,245,0.3) 35%, transparent 65%)",
          filter: "blur(55px)",
          animation: "featureGlow2 18s ease-in-out infinite",
        }}
      />
      {/* Warm ivory — bottom center */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "40%",
          height: "40%",
          bottom: "5%",
          left: "18%",
          background:
            "radial-gradient(ellipse at center, rgba(245,235,218,0.6) 0%, rgba(240,228,208,0.3) 35%, transparent 65%)",
          filter: "blur(50px)",
          animation: "featureGlow1 12s ease-in-out infinite reverse",
        }}
      />
      {/* Soft peachy accent — mid-right */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "30%",
          height: "30%",
          top: "50%",
          right: "10%",
          background:
            "radial-gradient(ellipse at center, rgba(245,220,215,0.4) 0%, rgba(240,212,205,0.18) 40%, transparent 65%)",
          filter: "blur(45px)",
          animation: "featureGlow2 15s ease-in-out infinite reverse",
        }}
      />
      {/* Lavender whisper — top center */}
      <div
        className="absolute rounded-full will-change-transform"
        style={{
          width: "45%",
          height: "35%",
          top: "-5%",
          left: "30%",
          background:
            "radial-gradient(ellipse at center, rgba(215,210,242,0.5) 0%, rgba(208,202,238,0.22) 40%, transparent 65%)",
          filter: "blur(50px)",
          animation: "featureGlow1 16s ease-in-out infinite",
        }}
      />
    </div>
  );
}
