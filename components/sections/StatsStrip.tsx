import { CountUp } from "../shared";

const STATS = [
  { n: 1650, l: "Toplam vaka", s: "+" },
  { n: 850, l: "Hasta", s: "+" },
  { n: 12, l: "Ambulans", s: "" },
  { n: 85, l: "Personel", s: "+" },
];

export default function StatsStrip() {
  return (
    <section style={{ background: "#0B0B0C", padding: "80px 24px", color: "#F6F4EE" }}>
      <div
        className="fy-stats-strip"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: 0,
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.l}
            style={{
              padding: "16px 32px",
              borderLeft: i > 0 ? "1px solid rgba(246,244,238,0.15)" : "none",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(56px,7vw,96px)",
                lineHeight: 1,
                letterSpacing: "-0.03em",
              }}
            >
              <CountUp to={s.n} suffix={s.s} />
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "rgba(246,244,238,0.55)",
                marginTop: 14,
                textTransform: "uppercase",
              }}
            >
              {s.l}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
