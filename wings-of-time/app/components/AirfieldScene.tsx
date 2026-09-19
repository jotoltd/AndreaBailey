import type { ReactNode } from "react";

type Variant = "airfield" | "swirls" | "wing" | "feathers";

const bomber = (
  <g transform="translate(430 40) scale(1.1)">
    <path d="M40 62 C70 52 200 48 300 50 C330 51 345 56 348 60 C345 64 330 69 300 70 C200 74 70 70 40 66 Z" />
    <ellipse cx="310" cy="50" rx="16" ry="6" />
    <path d="M120 55 L60 10 L75 8 L150 48 Z" />
    <path d="M150 70 L75 110 L60 108 L120 63 Z" />
    <rect x="95" y="30" width="18" height="10" rx="4" transform="rotate(-32 104 35)" />
    <rect x="115" y="22" width="18" height="10" rx="4" transform="rotate(-32 124 27)" />
    <rect x="95" y="84" width="18" height="10" rx="4" transform="rotate(32 104 89)" />
    <rect x="115" y="92" width="18" height="10" rx="4" transform="rotate(32 124 97)" />
    <path d="M48 58 L30 40 L40 38 L56 54 Z" />
    <path d="M52 66 L34 82 L28 80 L44 62 Z" />
    <path d="M52 60 L28 56 L28 60 L52 64 Z" />
  </g>
);

const distantPlane = (
  <g transform="translate(120 90) scale(0.45)">
    <path d="M40 62 C70 52 200 48 300 50 C330 51 345 56 348 60 C345 64 330 69 300 70 C200 74 70 70 40 66 Z" />
    <path d="M120 55 L60 10 L75 8 L150 48 Z" />
    <path d="M150 70 L75 110 L60 108 L120 63 Z" />
    <path d="M48 58 L30 40 L40 38 L56 54 Z" />
    <path d="M52 66 L34 82 L28 80 L44 62 Z" />
  </g>
);

const treeline = (
  <path d="M0 260 L0 220 L18 228 L30 205 L45 222 L62 198 L78 220 L95 208 L110 226 L128 202 L145 224 L160 210 L178 228 L195 200 L212 222 L230 212 L248 230 L265 204 L282 226 L300 214 L318 232 L335 206 L352 228 L370 216 L388 234 L405 208 L422 230 L440 218 L458 236 L475 210 L492 232 L510 220 L528 238 L545 212 L562 234 L580 222 L598 240 L615 214 L632 236 L650 224 L668 242 L685 216 L702 238 L720 226 L738 244 L755 218 L772 240 L790 228 L808 246 L825 220 L842 242 L860 230 L878 248 L895 222 L912 244 L930 232 L948 250 L965 224 L982 246 L1000 234 L1018 252 L1035 226 L1052 248 L1070 236 L1088 254 L1105 228 L1122 250 L1140 238 L1158 256 L1175 230 L1190 246 L1200 240 L1200 260 Z" />
);

const controlTower = (
  <g transform="translate(960 150)">
    <rect x="0" y="30" width="26" height="80" />
    <rect x="-6" y="18" width="38" height="14" rx="2" />
    <rect x="8" y="0" width="10" height="20" />
  </g>
);

/* Symmetrical filigree scrollwork band */
const scrollBand = (
  <g>
    <line
      x1="0"
      y1="235"
      x2="1200"
      y2="235"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    />
    {Array.from({ length: 12 }, (_, i) => {
      const x = 50 + i * 100;
      return (
        <g key={i} transform={`translate(${x} 235)`}>
          <path
            d="M0 0 C -28 -8 -40 -30 -24 -44 C -12 -54 4 -50 6 -38 C 8 -28 -4 -24 -8 -32"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M0 0 C 28 -8 40 -30 24 -44 C 12 -54 -4 -50 -6 -38 C -8 -28 4 -24 8 -32"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          <circle cx="0" cy="-6" r="3" />
          <circle cx="0" cy="-58" r="2.5" />
        </g>
      );
    })}
  </g>
);

/* Large feathered wing sweeping up from the left */
const wing = (
  <g transform="translate(60 60)">
    {[0, 1, 2, 3, 4, 5, 6].map((i) => (
      <ellipse
        key={i}
        cx={180 + i * 90}
        cy={150 - i * 16}
        rx={110 - i * 8}
        ry={26 - i * 2}
        transform={`rotate(${-14 - i * 4} ${180 + i * 90} ${150 - i * 16})`}
      />
    ))}
  </g>
);

/* Scattered drifting feathers */
const feathers = (
  <g>
    {[
      { x: 140, y: 150, r: -24, s: 1 },
      { x: 420, y: 90, r: 18, s: 0.8 },
      { x: 700, y: 170, r: -12, s: 1.15 },
      { x: 960, y: 100, r: 30, s: 0.7 },
      { x: 1080, y: 190, r: -20, s: 0.9 },
    ].map((f, i) => (
      <g
        key={i}
        transform={`translate(${f.x} ${f.y}) rotate(${f.r}) scale(${f.s})`}
      >
        <path d="M0 0 C -18 -30 -16 -70 0 -95 C 16 -70 18 -30 0 0 Z" />
        <rect x="-1.5" y="-95" width="3" height="110" rx="1.5" />
      </g>
    ))}
  </g>
);

const variants: Record<Variant, ReactNode> = {
  airfield: (
    <>
      {bomber}
      {distantPlane}
      {treeline}
      {controlTower}
    </>
  ),
  swirls: scrollBand,
  wing,
  feathers,
};

export default function AirfieldScene({
  variant = "airfield",
  className = "",
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <svg
      className={`pointer-events-none absolute bottom-0 left-1/2 w-[1200px] max-w-none -translate-x-1/2 ${className}`}
      viewBox="0 0 1200 260"
      fill="currentColor"
      aria-hidden="true"
    >
      {variants[variant]}
    </svg>
  );
}
