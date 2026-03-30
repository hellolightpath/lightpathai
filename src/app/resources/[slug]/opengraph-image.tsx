import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";
import { getPostBySlug, getAllSlugs } from "@/lib/blog-data";

export const alt = "LightPathAI Resources";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export default async function OGImage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  const title = post?.title ?? "LightPathAI Resources";
  const category = post?.category ?? "";

  const logoData = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

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
          <img
            src={logoBase64}
            width={32}
            height={32}
            style={{ borderRadius: "6px" }}
          />
          <span style={{ fontSize: "20px", fontWeight: 600, color: "rgba(255,255,255,0.5)" }}>
            LightPath
          </span>
          <span style={{ fontSize: "20px", fontWeight: 600, color: "#8A8EE5" }}>AI</span>
          <span style={{ fontSize: "16px", color: "rgba(255,255,255,0.3)", marginLeft: "8px" }}>
            Resources
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
