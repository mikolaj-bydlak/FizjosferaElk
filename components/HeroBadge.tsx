/**
 * Circular hero badge — inline SVG (no image file), copied verbatim from the
 * design reference: two hairline rings, a name on a textPath, and a serif "F".
 */
export default function HeroBadge() {
  return (
    <svg viewBox="0 0 220 220" className="hero-badge" role="img" aria-label="Fizjosfera">
      <defs>
        <path
          id="ringA"
          d="M110,110 m-84,0 a84,84 0 1,1 168,0 a84,84 0 1,1 -168,0"
        />
      </defs>
      <circle cx="110" cy="110" r="97" fill="none" stroke="#e9dec8" strokeWidth="1.2" />
      <circle cx="110" cy="110" r="72" fill="none" stroke="#cdbf9f" strokeWidth="1" />
      <text
        fill="#eadfc8"
        style={{ fontFamily: "var(--font-jost), 'Jost'", fontSize: '12px', letterSpacing: '3.4px' }}
      >
        <textPath href="#ringA" startOffset="1%">
          KATARZYNA MARCINKOWSKA · KONONOWICZ · GABINET FIZJOTERAPII ·{' '}
        </textPath>
      </text>
      <text
        x="110"
        y="132"
        textAnchor="middle"
        fill="#f2e9d6"
        style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond'", fontSize: '70px', fontWeight: 500 }}
      >
        F
      </text>
    </svg>
  );
}
