import { Icon } from "./shared";

const TOP_STRIP = [
  "BASIM NO. 2026/04",
  "41.5754°N 32.0217°E",
  "FİLYOS / ÇAYCUMA",
  "SAYFA 01/07",
  "7/24 AKTİF",
];

export default function HeroC() {
  return (
    <section
      style={{
        background: "#F2F1EC",
        position: "relative",
        overflow: "hidden",
        borderBottom: "1px solid #0B0B0C",
      }}
    >
      <div
        style={{
          borderBottom: "1px solid #0B0B0C",
          display: "flex",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          flexWrap: "wrap",
        }}
      >
        {TOP_STRIP.map((t, i) => (
          <div
            key={t}
            style={{
              padding: "10px 18px",
              borderRight: i < TOP_STRIP.length - 1 ? "1px solid #0B0B0C" : "none",
              color: i === 4 ? "#d72a05" : "#0B0B0C",
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            {i === 4 && (
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "#d72a05",
                  animation: "pulseDot 1.4s infinite",
                }}
              />
            )}
            {t}
          </div>
        ))}
      </div>

      <div style={{ maxWidth: 1440, margin: "0 auto", padding: "60px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 40,
            alignItems: "end",
            marginBottom: 40,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.22em",
                marginBottom: 18,
                color: "#55585E",
              }}
            >
              — TP-OTC İŞTİRAKİ / HEALMEDY MARKASI
            </div>
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(64px, 11vw, 180px)",
                lineHeight: 0.85,
                letterSpacing: "-0.04em",
                color: "#0B0B0C",
                margin: 0,
              }}
            >
              <em style={{ fontStyle: "italic", color: "#d72a05", fontWeight: 500 }}>Hayatın</em>,
              <br />
              her anında
              <br />
              <span
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: 8,
                  textUnderlineOffset: 16,
                  textDecorationColor: "#d72a05",
                }}
              >
                güven
              </span>
              .
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
              alignItems: "flex-end",
              minWidth: 280,
            }}
          >
            <div style={{ textAlign: "right" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 88,
                  fontWeight: 500,
                  lineHeight: 0.9,
                  color: "#0B0B0C",
                  letterSpacing: "-0.03em",
                }}
              >
                1.500
                <em style={{ color: "#d72a05", fontStyle: "italic" }}>+</em>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "#55585E",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                AYLIK VAKA · ORT. 08 DK
              </div>
            </div>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 24 }}>
          <div
            style={{
              position: "relative",
              aspectRatio: "16/9",
              background: "#0B0B0C",
              border: "1.5px solid #0B0B0C",
              overflow: "hidden",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1624638764200-ab3cd90bd32b?auto=format&fit=crop&w=2000&q=80"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                filter: "contrast(1.05) saturate(1.1)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 40%, rgba(11,11,12,0.7) 100%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 16,
                left: 16,
                display: "flex",
                gap: 10,
                alignItems: "center",
              }}
            >
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  background: "#ff3a1a",
                  boxShadow: "0 0 0 4px rgba(255,58,26,0.3)",
                  animation: "pulseDot 1.4s infinite",
                }}
              />
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  color: "#fff",
                }}
              >
                CANLI · SAHA OPERASYONU
              </span>
            </div>
            <div
              style={{
                position: "absolute",
                left: 16,
                bottom: 16,
                display: "flex",
                alignItems: "center",
                gap: 14,
                color: "#fff",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 999,
                  background: "#d72a05",
                  display: "grid",
                  placeItems: "center",
                }}
              >
                <Icon name="play" size={20} color="#fff" />
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 22,
                    fontWeight: 500,
                  }}
                >
                  Sahada, 08 dakikada.
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "rgba(255,255,255,0.7)",
                    letterSpacing: "0.1em",
                    marginTop: 4,
                  }}
                >
                  02:14 · FİLYOS OSB RAFİNERİ A BLOK
                </div>
              </div>
            </div>

            <div
              style={{
                position: "absolute",
                top: 20,
                right: -40,
                transform: "rotate(12deg)",
                background: "#d72a05",
                color: "#fff",
                padding: "10px 48px",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                fontWeight: 700,
                boxShadow: "0 10px 30px rgba(11,11,12,0.3)",
              }}
            >
              B2B · SAHA REVİR
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ padding: 24, background: "#0B0B0C", color: "#F6F4EE" }}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  color: "rgba(246,244,238,0.5)",
                  marginBottom: 14,
                  textTransform: "uppercase",
                }}
              >
                İki hedef · tek operasyon
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 22,
                  lineHeight: 1.3,
                  fontWeight: 500,
                }}
              >
                Endüstri tesislerinde{" "}
                <em style={{ color: "#ff3a1a", fontStyle: "italic" }}>acil müdahale</em>,
                toplulukta{" "}
                <em style={{ color: "#ff3a1a", fontStyle: "italic" }}>sosyal sorumluluk</em>.
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              <button
                style={{
                  padding: "22px 20px",
                  background: "#d72a05",
                  color: "#fff",
                  border: "none",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.04em",
                  textAlign: "left",
                  lineHeight: 1.3,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                  boxShadow: "0 16px 40px rgba(215,42,5,0.3)",
                }}
              >
                <Icon name="briefcase" size={22} color="#fff" />
                <div>
                  KURUMSAL
                  <br />
                  TEKLİF ALIN
                </div>
                <Icon
                  name="arrowUpRight"
                  size={16}
                  color="#fff"
                  style={{ marginTop: "auto", alignSelf: "flex-end" }}
                />
              </button>
              <button
                style={{
                  padding: "22px 20px",
                  background: "#F2F1EC",
                  color: "#0B0B0C",
                  border: "1.5px solid #0B0B0C",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 14,
                  letterSpacing: "0.04em",
                  textAlign: "left",
                  lineHeight: 1.3,
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <Icon name="book" size={22} color="#0B0B0C" />
                <div>
                  BASINDA
                  <br />
                  BİZ
                </div>
                <Icon
                  name="arrowUpRight"
                  size={16}
                  color="#0B0B0C"
                  style={{ marginTop: "auto", alignSelf: "flex-end" }}
                />
              </button>
            </div>

            <div
              style={{
                padding: "16px 18px",
                background: "#fff",
                border: "1.5px solid #0B0B0C",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontStyle: "italic",
                    fontSize: 18,
                    fontWeight: 500,
                    color: "#0B0B0C",
                  }}
                >
                  Acil: 112
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#55585E",
                    letterSpacing: "0.08em",
                    marginTop: 2,
                  }}
                >
                  0372 XXX XX XX · 7/24
                </div>
              </div>
              <Icon name="phone" size={22} color="#d72a05" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
