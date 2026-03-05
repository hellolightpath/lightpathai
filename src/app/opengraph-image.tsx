import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "LightPathAI — Redefining care for life's hardest transitions";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #252D4A 0%, #2A3352 40%, #262F4C 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #8A8EE5, #6366F1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ color: "white", fontSize: "28px", fontWeight: 700 }}>L</div>
          </div>
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: "42px", fontWeight: 600, color: "#FFFFFF" }}>
              LightPath
            </span>
            <span style={{ fontSize: "42px", fontWeight: 600, color: "#8A8EE5" }}>
              AI
            </span>
          </div>
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "28px",
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            maxWidth: "700px",
            lineHeight: 1.4,
          }}
        >
          A personalized plan, clear next steps, and real human support for when you don't know where to start.
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          getlightpath.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
