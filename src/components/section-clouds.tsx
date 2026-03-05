"use client";

import { useState, useEffect } from "react";

interface SectionCloudsProps {
  count?: 2 | 3;
  opacity?: number;
}

const cloudSets = {
  2: [
    { w: 340, h: 70, top: "12%", blur: 7, opacity: 0.5, dir: "right", dur: 65, delay: -20 },
    { w: 260, h: 55, top: "65%", blur: 6, opacity: 0.4, dir: "left",  dur: 52, delay: -10 },
  ],
  3: [
    { w: 360, h: 75,  top: "8%",  blur: 8, opacity: 0.45, dir: "right", dur: 70, delay: -15 },
    { w: 240, h: 55,  top: "45%", blur: 6, opacity: 0.35, dir: "left",  dur: 55, delay: -30 },
    { w: 300, h: 65,  top: "78%", blur: 7, opacity: 0.4,  dir: "right", dur: 62, delay: -5 },
  ],
};

export function SectionClouds({ count = 2, opacity = 1 }: SectionCloudsProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setMounted(true);
    }
  }, []);

  if (!mounted) return null;

  const clouds = cloudSets[count];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {clouds.map((c, i) => (
        <div
          key={i}
          className="cloud"
          style={{
            width: c.w,
            height: c.h,
            top: c.top,
            left: 0,
            filter: `blur(${c.blur}px)`,
            opacity: c.opacity * opacity,
            animation: `cloud-drift-${c.dir} ${c.dur}s linear ${c.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}
