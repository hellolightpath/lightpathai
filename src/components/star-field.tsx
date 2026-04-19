"use client";
import { useEffect, useRef } from "react";

/*──────────────────────────────────────────────
  StarField — calm, elegant night sky
  Sparse stars with gentle breathing glow.
  No shooting stars. No sparkle bursts.
  Like looking up on a quiet night.
──────────────────────────────────────────────*/

interface Star {
  x: number;
  y: number;
  r: number;
  base: number;
  phase: number;
  speed: number;
  tier: "faint" | "soft" | "gentle" | "warm";
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.parentElement?.clientWidth || window.innerWidth;
      const h = canvas.parentElement?.clientHeight || window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generateStars(w, h);
    };

    const generateStars = (w: number, h: number) => {
      // Much sparser — like a real night sky, not a planetarium
      const count = Math.floor((w * h) / 1200);
      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        let tier: Star["tier"];
        if (roll < 0.03) tier = "warm";          // 3% warmest glow
        else if (roll < 0.12) tier = "gentle";    // 9% gentle
        else if (roll < 0.35) tier = "soft";      // 23% soft
        else tier = "faint";                       // 65% barely visible

        const r =
          tier === "warm"   ? 1.0 + Math.random() * 0.8 :
          tier === "gentle" ? 0.6 + Math.random() * 0.5 :
          tier === "soft"   ? 0.3 + Math.random() * 0.4 :
                              0.15 + Math.random() * 0.25;

        const base =
          tier === "warm"   ? 0.6 + Math.random() * 0.3 :
          tier === "gentle" ? 0.35 + Math.random() * 0.25 :
          tier === "soft"   ? 0.15 + Math.random() * 0.2 :
                              0.05 + Math.random() * 0.1;

        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          base,
          phase: Math.random() * Math.PI * 2,
          // Very slow breathing — unhurried
          speed: 0.15 + Math.random() * 0.4,
          tier,
        });
      }
      starsRef.current = stars;
    };

    let t = 0;
    let lastTime = performance.now();

    const draw = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const w = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const h = canvas.height / Math.min(window.devicePixelRatio || 1, 2);

      /* Sky — deep, quiet dark */
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#080a1e");
      grad.addColorStop(0.4, "#0c0f2a");
      grad.addColorStop(0.7, "#0f1232");
      grad.addColorStop(1, "#12153a");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      /* Very subtle galactic warmth — barely there */
      const glow1 = ctx.createRadialGradient(w * 0.4, h * 0.25, 0, w * 0.4, h * 0.25, w * 0.5);
      glow1.addColorStop(0, "rgba(70, 60, 130, 0.04)");
      glow1.addColorStop(1, "transparent");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, w, h);

      if (!prefersReducedMotion) t += dt;

      /* Stars — gentle breathing, no bursts */
      for (const s of starsRef.current) {
        const twinkle = prefersReducedMotion
          ? s.base
          : s.base * (0.5 + 0.5 * Math.sin(t * s.speed + s.phase));

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

        if (s.tier === "warm") {
          // Warmest stars — soft white core with one gentle glow ring
          ctx.fillStyle = `rgba(240, 235, 255, ${twinkle})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 170, 240, ${twinkle * 0.1})`;
          ctx.fill();
        } else if (s.tier === "gentle") {
          ctx.fillStyle = `rgba(225, 220, 255, ${twinkle})`;
          ctx.fill();
        } else if (s.tier === "soft") {
          ctx.fillStyle = `rgba(210, 210, 245, ${twinkle})`;
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(190, 190, 230, ${twinkle})`;
          ctx.fill();
        }
      }

      // No shooting stars. Just stillness.

      rafRef.current = requestAnimationFrame(draw);
    };

    resize();
    rafRef.current = requestAnimationFrame(draw);
    window.addEventListener("resize", resize);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
