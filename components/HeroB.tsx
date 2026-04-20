"use client";

import { useEffect, useState } from "react";
import { Button, CountUp, Icon, Pill } from "./shared";

const STATS: { n: number; l: string; nosuf?: boolean }[] = [
  { n: 1650, l: "Vaka" },
  { n: 850, l: "Hasta" },
  { n: 12, l: "Ambulans", nosuf: true },
  { n: 85, l: "Personel" },
];

const DISPATCH = [
  { code: "VKN-1650", ty: "Acil Müdahale", loc: "Filyos OSB · Blok C", t: "04 dk", st: "YOLDA", color: "#ff3a1a" },
  { code: "VKN-1649", ty: "Hasta Nakli", loc: "Çaycuma DH → Zonguldak", t: "12 dk", st: "DEVAM", color: "#E8A417" },
  { code: "VKN-1648", ty: "Etkinlik Desteği", loc: "Belediye Sahası", t: "—", st: "HAZIR", color: "#1E9E6A" },
];

export default function HeroB() {
  const [pulse, setPulse] = useState(0);
  const [time, setTime] = useState("");

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit" });
    setTime(fmt());
    const t = setInterval(() => {
      setPulse((p) => p + 1);
      setTime(fmt());
    }, 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section style={{ background: "#FAFAF8", position: "relative", overflow: "hidden" }}>
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "120px 24px 96px",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: 72,
          alignItems: "center",
        }}
      >
        {/* LEFT */}
        <div>
          <div style={{ display: "flex", gap: 10, marginBottom: 28, alignItems: "center" }}>
            <Pill tone="redSolid" dot>
              7/24 AKTİF
            </Pill>
            <Pill tone="lineLight">TP-OTC İŞTİRAKİ</Pill>
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(48px, 6.5vw, 104px)",
              lineHeight: 0.92,
              letterSpacing: "-0.03em",
              color: "#0B0B0C",
              margin: 0,
            }}
          >
            Hayatın,
            <br />
            <em style={{ fontStyle: "italic", color: "#d72a05", fontWeight: 500 }}>her anında</em>
            <br />
            güven.
          </h1>
          <p
            style={{
              fontSize: 19,
              lineHeight: 1.55,
              color: "#25262A",
              maxWidth: 520,
              marginTop: 28,
              fontFamily: "var(--font-sans)",
            }}
          >
            Filyos Limanı, OSB ve çevre bölgedeki endüstriyel tesislere{" "}
            <strong style={{ color: "#0B0B0C" }}>
              7/24 ambulans, saha revir ve acil müdahale
            </strong>{" "}
            hizmeti.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <Button variant="primary" size="lg" icon="arrow">
              Kurumsal Teklif
            </Button>
            <Button variant="ghost" size="lg">
              Sosyal Sorumluluk
            </Button>
          </div>
          <div
            style={{
              marginTop: 56,
              paddingTop: 28,
              borderTop: "1px solid #E5E3DC",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gap: 24,
            }}
          >
            {STATS.map((s) => (
              <div key={s.l}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 44,
                    fontWeight: 500,
                    color: "#0B0B0C",
                    lineHeight: 1,
                    letterSpacing: "-0.03em",
                  }}
                >
                  <CountUp to={s.n} suffix={s.nosuf ? "" : "+"} />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    color: "#55585E",
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

        {/* RIGHT — operasyon kartı */}
        <div style={{ position: "relative" }}>
          <div
            style={{
              background: "#0B0B0C",
              borderRadius: 28,
              padding: 32,
              color: "#F6F4EE",
              boxShadow: "0 40px 120px rgba(11,11,12,0.3)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 24,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: "#ff3a1a",
                    boxShadow: "0 0 0 4px rgba(255,58,26,0.25)",
                    animation: "pulseDot 1.4s infinite",
                  }}
                />
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.18em",
                    color: "rgba(246,244,238,0.85)",
                  }}
                >
                  CANLI · DİSPATCH
                </span>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "rgba(246,244,238,0.5)",
                }}
              >
                {time || "--:--"}
              </div>
            </div>
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 32,
                fontWeight: 500,
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              Aylık <em style={{ color: "#ff3a1a", fontStyle: "italic" }}>1.500</em> vaka
            </div>
            <div
              style={{
                fontSize: 13,
                color: "rgba(246,244,238,0.6)",
                marginBottom: 28,
                fontFamily: "var(--font-sans)",
              }}
            >
              Bu ay · ortalama yanıt süresi 08 dk 34 sn
            </div>

            <div style={{ display: "grid", gap: 12 }}>
              {DISPATCH.map((v, i) => (
                <div
                  key={v.code}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr auto",
                    gap: 14,
                    alignItems: "center",
                    padding: "14px 16px",
                    background: "#1E1F22",
                    borderRadius: 14,
                    border: `1px solid ${
                      i === 0 ? "rgba(255,58,26,0.3)" : "rgba(246,244,238,0.05)"
                    }`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 11,
                      color: "rgba(246,244,238,0.55)",
                    }}
                  >
                    {v.code}
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: 14,
                        fontWeight: 600,
                        fontFamily: "var(--font-sans)",
                        color: "#F6F4EE",
                      }}
                    >
                      {v.ty}
                    </div>
                    <div
                      style={{
                        fontSize: 11.5,
                        color: "rgba(246,244,238,0.55)",
                        marginTop: 2,
                        fontFamily: "var(--font-sans)",
                      }}
                    >
                      {v.loc}
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 12,
                        color: v.color,
                        fontWeight: 600,
                        letterSpacing: "0.1em",
                      }}
                    >
                      {v.st}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 10,
                        color: "rgba(246,244,238,0.45)",
                        marginTop: 3,
                      }}
                    >
                      {v.t}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 20,
                paddingTop: 18,
                borderTop: "1px solid rgba(246,244,238,0.08)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ fontSize: 12, color: "rgba(246,244,238,0.55)", fontFamily: "var(--font-sans)" }}>
                HealMedy HBYS ile entegre
              </div>
              <Icon name="arrowUpRight" size={16} color="#F6F4EE" />
            </div>
          </div>

          {/* Sticker */}
          <div
            style={{
              position: "absolute",
              top: -24,
              right: -24,
              width: 120,
              height: 120,
              borderRadius: 999,
              background: "#d72a05",
              color: "#fff",
              display: "grid",
              placeItems: "center",
              transform: `rotate(${-8 + (pulse % 2 ? 3 : 0)}deg)`,
              transition: "transform 600ms cubic-bezier(.22,1,.36,1)",
              textAlign: "center",
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontSize: 14,
              lineHeight: 1.1,
              padding: 12,
              boxShadow: "0 20px 60px rgba(215,42,5,0.4)",
              fontWeight: 600,
            }}
          >
            saha
            <br />
            deneyimi
            <br />
            2017+
          </div>
        </div>
      </div>
    </section>
  );
}
