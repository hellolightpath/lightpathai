import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const alt = "LightPathAI — The Platform for Human Recovery";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

/* Deterministic star positions for the night sky */
function generateStars() {
  const stars: { x: number; y: number; size: number; opacity: number }[] = [];
  // Seed-like approach using fixed values for reproducibility
  const positions = [
    // Large bright stars
    { x: 120, y: 80, size: 3, opacity: 0.9 },
    { x: 890, y: 60, size: 3.5, opacity: 0.85 },
    { x: 450, y: 45, size: 3, opacity: 0.8 },
    { x: 1050, y: 130, size: 2.5, opacity: 0.9 },
    { x: 250, y: 160, size: 3, opacity: 0.75 },
    { x: 720, y: 100, size: 2.5, opacity: 0.85 },
    { x: 1100, y: 300, size: 3, opacity: 0.7 },
    { x: 80, y: 350, size: 2.5, opacity: 0.8 },
    { x: 600, y: 520, size: 2.5, opacity: 0.6 },
    { x: 950, y: 480, size: 3, opacity: 0.55 },
    // Medium stars
    { x: 180, y: 120, size: 2, opacity: 0.7 },
    { x: 340, y: 90, size: 2, opacity: 0.65 },
    { x: 520, y: 150, size: 2, opacity: 0.6 },
    { x: 670, y: 50, size: 2, opacity: 0.75 },
    { x: 800, y: 180, size: 2, opacity: 0.7 },
    { x: 1000, y: 80, size: 2, opacity: 0.65 },
    { x: 150, y: 280, size: 2, opacity: 0.6 },
    { x: 400, y: 500, size: 2, opacity: 0.5 },
    { x: 750, y: 550, size: 2, opacity: 0.45 },
    { x: 1080, y: 450, size: 2, opacity: 0.55 },
    { x: 300, y: 380, size: 2, opacity: 0.5 },
    { x: 550, y: 280, size: 2, opacity: 0.55 },
    { x: 850, y: 350, size: 2, opacity: 0.5 },
    { x: 1150, y: 200, size: 2, opacity: 0.6 },
    { x: 50, y: 500, size: 2, opacity: 0.45 },
    // Small dim stars
    { x: 100, y: 50, size: 1.5, opacity: 0.5 },
    { x: 230, y: 40, size: 1.5, opacity: 0.45 },
    { x: 380, y: 130, size: 1.5, opacity: 0.4 },
    { x: 490, y: 80, size: 1.5, opacity: 0.5 },
    { x: 610, y: 180, size: 1.5, opacity: 0.45 },
    { x: 740, y: 140, size: 1.5, opacity: 0.4 },
    { x: 830, y: 240, size: 1.5, opacity: 0.45 },
    { x: 960, y: 160, size: 1.5, opacity: 0.5 },
    { x: 1020, y: 240, size: 1.5, opacity: 0.4 },
    { x: 1130, y: 100, size: 1.5, opacity: 0.5 },
    { x: 70, y: 220, size: 1.5, opacity: 0.4 },
    { x: 200, y: 420, size: 1.5, opacity: 0.35 },
    { x: 350, y: 300, size: 1.5, opacity: 0.4 },
    { x: 500, y: 420, size: 1.5, opacity: 0.35 },
    { x: 650, y: 380, size: 1.5, opacity: 0.4 },
    { x: 780, y: 460, size: 1.5, opacity: 0.35 },
    { x: 900, y: 560, size: 1.5, opacity: 0.3 },
    { x: 1060, y: 520, size: 1.5, opacity: 0.3 },
    { x: 160, y: 560, size: 1.5, opacity: 0.3 },
    { x: 430, y: 580, size: 1.5, opacity: 0.25 },
    // Tiny stars for depth
    { x: 55, y: 140, size: 1, opacity: 0.35 },
    { x: 190, y: 200, size: 1, opacity: 0.3 },
    { x: 310, y: 60, size: 1, opacity: 0.35 },
    { x: 460, y: 200, size: 1, opacity: 0.3 },
    { x: 570, y: 110, size: 1, opacity: 0.35 },
    { x: 690, y: 260, size: 1, opacity: 0.3 },
    { x: 810, y: 80, size: 1, opacity: 0.35 },
    { x: 930, y: 320, size: 1, opacity: 0.3 },
    { x: 1040, y: 380, size: 1, opacity: 0.25 },
    { x: 1150, y: 500, size: 1, opacity: 0.25 },
    { x: 130, y: 460, size: 1, opacity: 0.25 },
    { x: 280, y: 520, size: 1, opacity: 0.25 },
    { x: 420, y: 350, size: 1, opacity: 0.3 },
    { x: 560, y: 460, size: 1, opacity: 0.25 },
    { x: 700, y: 500, size: 1, opacity: 0.25 },
    { x: 840, y: 420, size: 1, opacity: 0.3 },
    { x: 980, y: 560, size: 1, opacity: 0.2 },
    { x: 1110, y: 380, size: 1, opacity: 0.3 },
  ];
  return positions;
}

export default async function OGImage() {
  const logoData = readFileSync(join(process.cwd(), "public", "logo.png"));
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;
  const stars = generateStars();

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
          position: "relative",
          overflow: "hidden",
          /* Deep night sky gradient */
          background:
            "radial-gradient(ellipse 140% 80% at 50% 15%, #2E3566 0%, #252D4A 30%, #1C2240 60%, #151A30 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Stars */}
        {stars.map((star, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${star.x}px`,
              top: `${star.y}px`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              borderRadius: "50%",
              background: `rgba(255, 255, 255, ${star.opacity})`,
              boxShadow:
                star.size >= 2.5
                  ? `0 0 ${star.size * 3}px rgba(200, 210, 255, ${star.opacity * 0.5})`
                  : "none",
            }}
          />
        ))}

        {/* Subtle glow orb behind content */}
        <div
          style={{
            position: "absolute",
            width: "600px",
            height: "400px",
            borderRadius: "50%",
            background:
              "radial-gradient(ellipse, rgba(138,142,229,0.08) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo + Brand */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
            position: "relative",
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

        {/* Title */}
        <div
          style={{
            fontSize: "32px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
            textAlign: "center",
            marginBottom: "16px",
            position: "relative",
          }}
        >
          The Platform for Human Recovery
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: "22px",
            color: "rgba(255,255,255,0.5)",
            textAlign: "center",
            maxWidth: "600px",
            lineHeight: 1.5,
            position: "relative",
          }}
        >
          Supporting people through loss.
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.25)",
          }}
        >
          getlightpath.ai
        </div>
      </div>
    ),
    { ...size }
  );
}
