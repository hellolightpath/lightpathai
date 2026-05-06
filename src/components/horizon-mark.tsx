/**
 * The Horizon Mark — LightPath's canonical logo.
 *
 * Spec (per /development/brand/brand.ts logo.mark = 'horizon-with-rising-light'):
 *   - Thin horizon line, charcoal on light surfaces, lavenderMid on dark surfaces.
 *   - A small lavender dot rising one dot-diameter above the line.
 *   - Dot diameter = 18% of horizon line length.
 *   - Stroke weight: 1.5px at native (24px) size, scales linearly.
 *
 * Use this in place of the retired "Bloom mark" (four-petal flower PNG).
 */
type Props = {
  size?: number;
  theme?: "light" | "dark";
  className?: string;
  ariaLabel?: string;
};

export function HorizonMark({
  size = 24,
  theme = "light",
  className,
  ariaLabel = "LightPathAI",
}: Props) {
  // Geometry
  const lineColor = theme === "dark" ? "rgba(149,152,232,0.55)" : "#3D3630";
  const dotColor = "#9598E8";

  // Drawn on a 24-unit grid; scales via the size prop
  // Line spans x=2 to x=22 (length 20). Dot diameter = 18% of 20 = 3.6, so radius 1.8
  // Line y = 16. Dot center y = line - (1 dot diameter above) = 16 - 3.6 = 12.4
  const lineY = 16;
  const lineX1 = 2;
  const lineX2 = 22;
  const dotR = 1.8;
  const dotCx = 12;
  const dotCy = lineY - dotR * 2;
  const stroke = 1.5 * (size / 24);

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      <line
        x1={lineX1}
        y1={lineY}
        x2={lineX2}
        y2={lineY}
        stroke={lineColor}
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <circle cx={dotCx} cy={dotCy} r={dotR} fill={dotColor} />
    </svg>
  );
}
