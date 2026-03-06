import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 100 100"
          fill="none"
        >
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
      </div>
    ),
    { ...size }
  );
}
