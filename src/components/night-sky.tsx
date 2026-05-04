"use client";

import { useEffect, useRef, useState, useCallback } from "react";

/**
 * Night sky video background with smooth loop fading.
 * Defaults to /public/starfield.mp4. Pass `src` to use a different video.
 */
export function NightSky({ src = "/nightsky.mp4" }: { src?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const FADE_DURATION = 2.5;
  const BASE_OPACITY = 1;

  const handleTimeUpdate = useCallback(() => {
    const vid = videoRef.current;
    if (!vid || !vid.duration) return;
    const remaining = vid.duration - vid.currentTime;
    if (remaining < FADE_DURATION) {
      vid.style.opacity = String(BASE_OPACITY * (remaining / FADE_DURATION));
    } else if (vid.currentTime < FADE_DURATION) {
      vid.style.opacity = String(BASE_OPACITY * (vid.currentTime / FADE_DURATION));
    } else {
      vid.style.opacity = String(BASE_OPACITY);
    }
  }, []);

  useEffect(() => {
    setReducedMotion(
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
    setMounted(true);
  }, []);

  /* Slow the video for a calmer feel */
  useEffect(() => {
    const vid = videoRef.current;
    if (vid) vid.playbackRate = 0.3;
  }, [mounted]);

  /* Static fallback for reduced motion or SSR */
  if (!mounted || reducedMotion) {
    return (
      <div className="absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 80% at 50% 20%, var(--color-dark-mid) 0%, var(--color-dark-base) 45%, var(--color-dark-deep) 100%)",
          }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0" aria-hidden="true">
      {/* Solid dark base */}
      <div
        className="absolute inset-0"
        style={{ background: "var(--color-dark-base)" }}
      />

      {/* Starfield video — screen blend so only bright stars show through */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          opacity: 0,
          transition: "opacity 0.4s ease-in-out",
          objectPosition: "center 15%",
          mixBlendMode: "screen",
          filter: "brightness(1.1) contrast(1.6) saturate(0.6)",
        }}
      >
        <source src={src} type="video/mp4" />
      </video>

      {/* Bottom overlay — hides mountain landscape from video */}
      <div
        className="absolute inset-x-0 bottom-0 h-[50%] z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent 0%, var(--color-dark-base) 50%)" }}
      />
    </div>
  );
}
