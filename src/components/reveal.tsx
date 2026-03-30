"use client";

import { useEffect, useRef, type ReactNode } from "react";

type RevealVariant = "default" | "scale" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
}

const variantClass: Record<RevealVariant, string> = {
  default: "",
  scale: "reveal-scale",
  left: "reveal-left",
  right: "reveal-right",
};

export function Reveal({ children, className = "", delay = 0, variant = "default" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("revealed");
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "40px 0px -30px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal-on-scroll ${variantClass[variant]} ${className}`}>
      {children}
    </div>
  );
}
