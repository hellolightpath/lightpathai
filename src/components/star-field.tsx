"use client";
import { useEffect, useRef } from "react";

/*──────────────────────────────────────────────
  StarField — dense, vivid night sky
  Deep blue → purple gradient with thousands
  of shining stars and occasional shooting stars.
──────────────────────────────────────────────*/

interface Star {
  x: number;
  y: number;
  r: number;
  base: number;
  phase: number;
  speed: number;
  tier: "dim" | "mid" | "bright" | "beacon";
  burstAt: number;
  burstDuration: number;
}

interface ShootingStar {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
  size: number;
}

export function StarField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const shootingRef = useRef<ShootingStar[]>([]);
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
      const count = Math.floor((w * h) / 280); // much denser
      const stars: Star[] = [];
      for (let i = 0; i < count; i++) {
        const roll = Math.random();
        let tier: Star["tier"];
        if (roll < 0.02) tier = "beacon";       // 2% very bright
        else if (roll < 0.10) tier = "bright";   // 8% bright
        else if (roll < 0.35) tier = "mid";      // 25% medium
        else tier = "dim";                        // 65% dim

        const r =
          tier === "beacon" ? 1.6 + Math.random() * 1.4 :
          tier === "bright" ? 1.0 + Math.random() * 1.0 :
          tier === "mid"    ? 0.4 + Math.random() * 0.6 :
                              0.2 + Math.random() * 0.4;

        const base =
          tier === "beacon" ? 0.85 + Math.random() * 0.15 :
          tier === "bright" ? 0.6 + Math.random() * 0.3 :
          tier === "mid"    ? 0.25 + Math.random() * 0.35 :
                              0.08 + Math.random() * 0.2;

        stars.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r,
          base,
          phase: Math.random() * Math.PI * 2,
          speed: tier === "beacon" ? 1.5 + Math.random() * 2.5
               : tier === "bright" ? 0.8 + Math.random() * 2.0
               : 0.3 + Math.random() * 1.2,
          tier,
          burstAt: 1 + Math.random() * 8,
          burstDuration: 0.3 + Math.random() * 0.5,
        });
      }
      starsRef.current = stars;
    };

    const spawnShootingStar = (w: number, h: number) => {
      const angle = (Math.PI / 6) + Math.random() * (Math.PI / 3);
      const speed = 280 + Math.random() * 250;
      shootingRef.current.push({
        x: Math.random() * w * 0.8,
        y: Math.random() * h * 0.35,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        maxLife: 0.5 + Math.random() * 0.5,
        size: 1.2 + Math.random() * 1.0,
      });
    };

    const drawSparkle = (x: number, y: number, size: number, alpha: number) => {
      ctx.save();
      ctx.globalAlpha = alpha;
      ctx.strokeStyle = "rgba(235, 230, 255, 0.9)";
      ctx.lineWidth = 0.7;
      ctx.beginPath(); ctx.moveTo(x - size, y); ctx.lineTo(x + size, y); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x, y - size); ctx.lineTo(x, y + size); ctx.stroke();
      const d = size * 0.45;
      ctx.lineWidth = 0.4;
      ctx.beginPath(); ctx.moveTo(x - d, y - d); ctx.lineTo(x + d, y + d); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(x + d, y - d); ctx.lineTo(x - d, y + d); ctx.stroke();
      ctx.restore();
    };

    let t = 0;
    let lastTime = performance.now();
    let nextShootingStar = 2 + Math.random() * 3;

    const draw = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const w = canvas.width / Math.min(window.devicePixelRatio || 1, 2);
      const h = canvas.height / Math.min(window.devicePixelRatio || 1, 2);

      /* Sky gradient — deep dark blue */
      const grad = ctx.createLinearGradient(0, 0, 0, h);
      grad.addColorStop(0, "#06081a");
      grad.addColorStop(0.4, "#0b0e28");
      grad.addColorStop(0.7, "#0f1235");
      grad.addColorStop(1, "#131640");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      /* Subtle galactic glow — upper center */
      const glow1 = ctx.createRadialGradient(w * 0.45, h * 0.2, 0, w * 0.45, h * 0.2, w * 0.5);
      glow1.addColorStop(0, "rgba(80, 70, 150, 0.08)");
      glow1.addColorStop(0.5, "rgba(60, 50, 130, 0.04)");
      glow1.addColorStop(1, "transparent");
      ctx.fillStyle = glow1;
      ctx.fillRect(0, 0, w, h);

      /* Purple haze — lower portion */
      const glow2 = ctx.createRadialGradient(w * 0.6, h * 0.8, 0, w * 0.6, h * 0.8, w * 0.55);
      glow2.addColorStop(0, "rgba(100, 60, 130, 0.07)");
      glow2.addColorStop(0.6, "rgba(80, 50, 110, 0.03)");
      glow2.addColorStop(1, "transparent");
      ctx.fillStyle = glow2;
      ctx.fillRect(0, 0, w, h);

      if (!prefersReducedMotion) t += dt;

      /* ── Stars ── */
      for (const s of starsRef.current) {
        let twinkle = prefersReducedMotion
          ? s.base
          : s.base * (0.3 + 0.7 * Math.sin(t * s.speed + s.phase));

        /* Shimmer burst */
        let burstIntensity = 0;
        if (!prefersReducedMotion) {
          const elapsed = t - s.burstAt;
          if (elapsed >= 0 && elapsed < s.burstDuration) {
            burstIntensity = Math.sin((elapsed / s.burstDuration) * Math.PI);
            twinkle = Math.min(1, twinkle + burstIntensity * 0.6);
          } else if (elapsed >= s.burstDuration) {
            s.burstAt = t + 3 + Math.random() * 12;
          }
        }

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);

        if (s.tier === "beacon") {
          /* Very bright stars — warm white core + large glow + sparkle rays */
          ctx.fillStyle = `rgba(245, 240, 255, ${twinkle})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(190, 180, 255, ${twinkle * 0.2})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 6, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(160, 150, 230, ${twinkle * 0.06})`;
          ctx.fill();
          const sparkleA = twinkle * 0.5 + burstIntensity * 0.5;
          if (sparkleA > 0.2) {
            drawSparkle(s.x, s.y, s.r * 6 + burstIntensity * 10, sparkleA * 0.7);
          }
        } else if (s.tier === "bright") {
          ctx.fillStyle = `rgba(230, 225, 255, ${twinkle})`;
          ctx.fill();
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.r * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 170, 240, ${twinkle * 0.15})`;
          ctx.fill();
          if (burstIntensity > 0.4) {
            drawSparkle(s.x, s.y, s.r * 4, burstIntensity * 0.4);
          }
        } else if (s.tier === "mid") {
          ctx.fillStyle = `rgba(220, 220, 255, ${twinkle})`;
          ctx.fill();
        } else {
          ctx.fillStyle = `rgba(200, 200, 240, ${twinkle})`;
          ctx.fill();
        }
      }

      /* ── Shooting stars ── */
      if (!prefersReducedMotion) {
        nextShootingStar -= dt;
        if (nextShootingStar <= 0) {
          spawnShootingStar(w, h);
          nextShootingStar = 3 + Math.random() * 6;
        }

        const alive: ShootingStar[] = [];
        for (const ss of shootingRef.current) {
          ss.life += dt;
          if (ss.life > ss.maxLife) continue;
          alive.push(ss);

          const progress = ss.life / ss.maxLife;
          const alpha = progress < 0.25
            ? progress / 0.25
            : 1 - (progress - 0.25) / 0.75;

          const cx = ss.x + ss.vx * ss.life;
          const cy = ss.y + ss.vy * ss.life;
          const tailLen = 45 + 35 * alpha;
          const mag = Math.hypot(ss.vx, ss.vy);
          const dx = -ss.vx / mag;
          const dy = -ss.vy / mag;

          const tailGrad = ctx.createLinearGradient(cx, cy, cx + dx * tailLen, cy + dy * tailLen);
          tailGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.9})`);
          tailGrad.addColorStop(0.25, `rgba(200, 190, 255, ${alpha * 0.5})`);
          tailGrad.addColorStop(1, "transparent");

          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx + dx * tailLen, cy + dy * tailLen);
          ctx.strokeStyle = tailGrad;
          ctx.lineWidth = ss.size * alpha;
          ctx.stroke();

          ctx.beginPath();
          ctx.arc(cx, cy, ss.size * alpha * 1.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
          ctx.fill();
        }
        shootingRef.current = alive;
      }

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
