import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "LightPathAI: the grief intelligence platform";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
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
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #252D4A 0%, #2A3352 40%, #262F4C 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Logo + Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <img
            src={logoBase64}
            width={80}
            height={80}
            style={{ borderRadius: "16px" }}
          />
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <span style={{ fontSize: "48px", fontWeight: 600, color: "#FFFFFF" }}>
              LightPath
            </span>
            <span style={{ fontSize: "48px", fontWeight: 600, color: "#8A8EE5" }}>
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
