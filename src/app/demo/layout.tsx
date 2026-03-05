import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a Demo | LightPathAI",
  description:
    "See how LightPathAI helps families navigate what comes after a loss.",
};

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
