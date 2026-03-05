import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@/components/google-analytics";
import { organizationJsonLd } from "@/lib/json-ld";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getlightpath.ai"),
  title: "LightPathAI | Redefining care for life's hardest transitions",
  description:
    "A personalized plan, clear next steps, and real human support for when you don't know where to start.",
  openGraph: {
    title: "LightPathAI | Redefining care for life's hardest transitions",
    description:
      "A personalized plan, clear next steps, and real human support for when you don't know where to start.",
    url: "https://getlightpath.ai",
    siteName: "LightPathAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LightPathAI | Redefining care for life's hardest transitions",
    description:
      "A personalized plan, clear next steps, and real human support for when you don't know where to start.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} scroll-smooth`}>
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd()) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
