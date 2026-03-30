/**
 * Night sky background with smooth radial gradient.
 * Uses a CSS gradient for a calm, performant dark sky effect.
 */
export function NightSky() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 120% 80% at 50% 20%, var(--color-dark-mid) 0%, var(--color-dark-base) 45%, var(--color-dark-deep) 100%)",
        }}
      />
    </div>
  );
}
