import { Button, Pill } from "./shared";

const STATS = [
  { n: "1.500", s: "/ AY", l: "Vaka" },
  { n: "08", s: "DK", l: "Ort. yanıt" },
  { n: "12", s: "", l: "Ambulans" },
  { n: "85", s: "+", l: "Personel" },
];

export default function HeroA() {
  return (
    <section
      className="fy-hero-a"
      style={{
        position: "relative",
        minHeight: "92vh",
        background: "#0B0B0C",
        overflow: "hidden",
        color: "#F6F4EE",
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?auto=format&fit=crop&w=2000&q=80"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "grayscale(1) contrast(1.08) brightness(0.82)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(11,11,12,0.55) 0%, rgba(11,11,12,0.2) 40%, rgba(11,11,12,0.85) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            bottom: 0,
            width: "60%",
            height: "40%",
            background:
              "radial-gradient(ellipse at bottom left, rgba(215,42,5,0.35), transparent 65%)",
            mixBlendMode: "screen",
          }}
        />
      </div>

      <div
        className="fy-hero-a-vertical"
        style={{
          position: "absolute",
          left: 32,
          top: "50%",
          transform: "translateY(-50%) rotate(-90deg)",
          transformOrigin: "left center",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.3em",
          color: "rgba(246,244,238,0.55)",
        }}
      >
        41.5754° N · 32.0217° E — FİLYOS / ÇAYCUMA
      </div>

      <div
        className="fy-hero-a-pad"
        style={{
          position: "relative",
          maxWidth: 1360,
          margin: "0 auto",
          padding: "160px 24px 120px 96px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          minHeight: "92vh",
        }}
      >
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          <Pill tone="redSolid" dot>
            7/24 AKTİF OPERASYON
          </Pill>
          <Pill tone="line">TP-OTC İŞTİRAKİ</Pill>
        </div>

        <div style={{ maxWidth: 1100 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: "0.18em",
              color: "rgba(246,244,238,0.6)",
              marginBottom: 22,
              textTransform: "uppercase",
            }}
          >
            — NO. 0026 · Filyos Endüstri Bölgesi
          </div>
          <h1
            className="fy-hero-a-title"
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(56px, 9.6vw, 160px)",
              lineHeight: 0.9,
              letterSpacing: "-0.035em",
              color: "#F6F4EE",
              margin: 0,
            }}
          >
            Hayatın,
            <br />
            <em style={{ fontStyle: "italic", fontWeight: 500, color: "#d72a05" }}>her anında</em>
            <br />
            güven.
          </h1>
          <p
            style={{
              fontSize: 18,
              lineHeight: 1.5,
              color: "rgba(246,244,238,0.75)",
              maxWidth: 560,
              marginTop: 32,
              fontFamily: "var(--font-sans)",
            }}
          >
            Filyos Limanı, OSB ve çevre bölgede endüstriyel tesislere 7/24 ambulans, saha revir
            ve acil müdahale hizmeti. Aylık ortalama{" "}
            <strong style={{ color: "#F6F4EE" }}>1.500 vaka</strong>.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" icon="arrow">
              Kurumsal Teklif Alın
            </Button>
            <Button variant="ghostDark" size="lg" icon="play">
              Saha Görüntüleri
            </Button>
          </div>
        </div>

        <div
          className="fy-hero-a-stats"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4,1fr)",
            gap: 0,
            borderTop: "1px solid rgba(246,244,238,0.15)",
            paddingTop: 24,
          }}
        >
          {STATS.map((s, i) => (
            <div
              key={s.l}
              style={{
                padding: "0 24px",
                borderLeft: i > 0 ? "1px solid rgba(246,244,238,0.12)" : "none",
              }}
            >
              <div style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
                <div
                  className="fy-hero-a-stat-num"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 56,
                    fontWeight: 500,
                    color: "#F6F4EE",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  {s.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 13,
                    color: "#d72a05",
                    fontWeight: 600,
                  }}
                >
                  {s.s}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  color: "rgba(246,244,238,0.5)",
                  marginTop: 8,
                  textTransform: "uppercase",
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
