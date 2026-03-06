import { ImageResponse } from "next/og";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";

export const runtime = "edge";
export const alt = "LightPathAI Blog";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? "LightPathAI Blog";
  const category = post?.category ?? "";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #252D4A 0%, #2A3352 40%, #262F4C 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Category pill */}
        {category && (
          <div
            style={{
              fontSize: "16px",
              fontWeight: 600,
              color: "#8A8EE5",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: "24px",
            }}
          >
            {category}
          </div>
        )}

        {/* Title */}
        <div
          style={{
            fontSize: "48px",
            fontWeight: 600,
            color: "#FFFFFF",
            lineHeight: 1.15,
            maxWidth: "900px",
          }}
        >
          {title}
        </div>

        {/* Footer */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            left: "80px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <svg width="28" height="28" viewBox="0 0 100 100" fill="none">
            <defs>
              <linearGradient id="g" x1="0.15" y1="0" x2="0.85" y2="1">
                <stop offset="0%" stopColor="#d8cef4" />
                <stop offset="100%" stopColor="#b8a4e0" />
              </linearGradient>
            </defs>
            <path d="M48 6 C47 22,47 38,48 48 C38 47,22 47,6 48 C5 42,5 26,5 20 C5 10,10 5,20 5 C26 5,42 5,48 6Z" fill="url(#g)" />
            <path d="M52 6 C53 22,53 38,52 48 C62 47,78 47,94 48 C95 42,95 26,95 20 C95 10,90 5,80 5 C74 5,58 5,52 6Z" fill="url(#g)" />
            <path d="M48 94 C47 78,47 62,48 52 C38 53,22 53,6 52 C5 58,5 74,5 80 C5 90,10 95,20 95 C26 95,42 95,48 94Z" fill="url(#g)" />
            <path d="M52 94 C53 78,53 62,52 52 C62 53,78 53,94 52 C95 58,95 74,95 80 C95 90,90 95,80 95 C74 95,58 95,52 94Z" fill="url(#g)" />
          </svg>
          <span style={{ fontSize: "20px", fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
            LightPath
          </span>
          <span style={{ fontSize: "20px", fontWeight: 600, color: "#8A8EE5" }}>AI</span>
          <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)", marginLeft: "8px" }}>
            Blog
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
