"use client";

import { useId } from "react";

export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  /* Four-petal flower — squircle petals with concave inner edges */
  const tl = "M48 6 C47 22,47 38,48 48 C38 47,22 47,6 48 C5 42,5 26,5 20 C5 10,10 5,20 5 C26 5,42 5,48 6Z";
  const tr = "M52 6 C53 22,53 38,52 48 C62 47,78 47,94 48 C95 42,95 26,95 20 C95 10,90 5,80 5 C74 5,58 5,52 6Z";
  const bl = "M48 94 C47 78,47 62,48 52 C38 53,22 53,6 52 C5 58,5 74,5 80 C5 90,10 95,20 95 C26 95,42 95,48 94Z";
  const br = "M52 94 C53 78,53 62,52 52 C62 53,78 53,94 52 C95 58,95 74,95 80 C95 90,90 95,80 95 C74 95,58 95,52 94Z";

  const id = useId();
  const gId = `${id}-g`;
  const sId = `${id}-s`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      className={className}
      role="img"
      aria-label="LightPathAI"
    >
      <defs>
        <linearGradient id={gId} x1="0.15" y1="0" x2="0.85" y2="1">
          <stop offset="0%" stopColor="#d8cef4" />
          <stop offset="100%" stopColor="#b8a4e0" />
        </linearGradient>
        <linearGradient id={sId} x1="0.3" y1="0" x2="0.7" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="40%" stopColor="white" stopOpacity="0" />
          <stop offset="60%" stopColor="white" stopOpacity="0.08" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      {[tl, tr, bl, br].map((d, i) => (
        <g key={i}>
          <path d={d} fill={`url(#${gId})`} />
          <path d={d} fill={`url(#${sId})`} />
        </g>
      ))}
    </svg>
  );
}
