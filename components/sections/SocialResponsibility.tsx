import { Button, CountUp } from "../shared";

const ITEMS = [
  { n: 8, l: "Etkinlik Desteği" },
  { n: 23, l: "Ücretsiz Nakil" },
  { n: 3, l: "Toplum Eğitimi" },
];

export default function SocialResponsibility() {
  return (
    <section style={{ background: "#0B0B0C", padding: "128px 24px", color: "#F6F4EE" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.2fr",
            gap: 72,
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "#ff3a1a",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              — Sosyal Sorumluluk · Mart 2026
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(40px,5vw,72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                margin: "0 0 24px",
              }}
            >
              Sadece çağrı gelince değil,{" "}
              <em style={{ fontStyle: "italic", color: "#ff3a1a" }}>her zaman</em>.
            </h2>
            <p
              style={{
                fontSize: 18,
                lineHeight: 1.55,
                color: "rgba(246,244,238,0.75)",
                maxWidth: 440,
                fontFamily: "var(--font-sans)",
              }}
            >
              Çaycuma ve çevre ilçelerde düzenlediğimiz ücretsiz nakil, etkinlik desteği ve
              toplum eğitimi faaliyetleri.
            </p>
            <div style={{ marginTop: 32 }}>
              <Button variant="ghostDark" icon="arrow">
                Faaliyet galerisi
              </Button>
            </div>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              gap: 0,
              border: "1px solid rgba(246,244,238,0.14)",
              borderRadius: 18,
              overflow: "hidden",
            }}
          >
            {ITEMS.map((s, i) => (
              <div
                key={s.l}
                style={{
                  padding: "40px 28px",
                  borderRight: i < 2 ? "1px solid rgba(246,244,238,0.14)" : "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 72,
                    fontWeight: 500,
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  <CountUp to={s.n} suffix="" />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
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
        </div>
      </div>
    </section>
  );
}
