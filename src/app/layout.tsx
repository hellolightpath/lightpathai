import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
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

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://getlightpath.ai"),
  title: "LightPathAI | The grief intelligence platform",
  description:
    "When someone dies, their family is left alone. No guide. No coordination. No safety net. LightPath is the intelligence layer that handles what comes after loss — so the human can grieve.",
  openGraph: {
    title: "LightPathAI | The grief intelligence platform",
    description:
      "When someone dies, their family is left alone. No guide. No coordination. No safety net. LightPath is the intelligence layer that handles what comes after loss.",
    url: "https://getlightpath.ai",
    siteName: "LightPathAI",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LightPathAI | The grief intelligence platform",
    description:
      "When someone dies, their family is left alone. LightPath is the intelligence layer that handles what comes after loss.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable} scroll-smooth`}>
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
