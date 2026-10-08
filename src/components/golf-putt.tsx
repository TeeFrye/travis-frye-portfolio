// Decorative hero flourish: a ball drops in, bounces once, and rolls into the cup.
// Pure SVG + CSS (keyframes live in globals.css); respects prefers-reduced-motion.
export function GolfPutt() {
  return (
    <svg
      viewBox="0 0 600 80"
      className="golf-putt block w-full overflow-visible"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="golf-green" gradientUnits="userSpaceOnUse" x1="0" x2="600" y1="0" y2="0">
          <stop offset="0" style={{ stopColor: "var(--accent)", stopOpacity: 0 }} />
          <stop offset="0.5" style={{ stopColor: "var(--accent)", stopOpacity: 0.35 }} />
          <stop offset="1" style={{ stopColor: "var(--accent)", stopOpacity: 0.6 }} />
        </linearGradient>
        {/* Everything above the green, plus the cup, so the ball can sink out of sight */}
        <clipPath id="golf-ball-clip">
          <rect x="-100" y="-200" width="800" height="270" />
          <rect x="550" y="70" width="20" height="9" />
        </clipPath>
      </defs>

      {/* Green, with a gap for the cup */}
      <path
        d="M0 70 H549 M571 70 H600"
        stroke="url(#golf-green)"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Cup */}
      <rect x="550" y="70" width="20" height="9" rx="2" fill="var(--border)" />

      {/* Flag */}
      <line x1="560" y1="18" x2="560" y2="70" stroke="var(--muted)" strokeWidth="1.5" />
      <path className="golf-flag" d="M560 18 L582 24 L560 30 Z" fill="var(--accent)" />

      {/* Ball: outer group moves horizontally, inner group handles the vertical bounce */}
      <g clipPath="url(#golf-ball-clip)">
        <g className="golf-ball-x">
          <g className="golf-ball-y">
            <circle
              cx="0"
              cy="64"
              r="5.5"
              fill="var(--surface)"
              stroke="var(--muted)"
              strokeWidth="1"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
