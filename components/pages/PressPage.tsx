import { Icon } from "../shared";

const NEWS = [
  { src: "Zonguldak Gazetesi", d: "12 Mart 2026", t: "Filyos Özel Ambulans, OSB'de saha revir hizmetini genişletiyor", cat: "KURUMSAL" },
  { src: "Hürriyet Bölge", d: "28 Şubat 2026", t: "Çaycuma'da ücretsiz ilk yardım eğitimleri 3. dönem başladı", cat: "SOSYAL SORUMLULUK" },
  { src: "Zonguldak Post", d: "14 Şubat 2026", t: "Sahil şeridinde acil müdahale — 8 dakikalık rekor yanıt", cat: "HABER" },
  { src: "Kent Haber", d: "04 Ocak 2026", t: "HealMedy, Filyos operasyonlarını dijitalleştirdi: HBYS entegrasyonu", cat: "TEKNOLOJİ" },
  { src: "Bölge Gazetesi", d: "18 Aralık 2025", t: "12. ambulans filoya katıldı — Mercedes Sprinter yoğun bakım donanımlı", cat: "FİLO" },
  { src: "Sanayi Bülteni", d: "02 Aralık 2025", t: "TP-OTC iştiraki Filyos Ambulans, sertifikalı eğitim programı yetkisini aldı", cat: "EĞİTİM" },
];

const TOP_STRIP = ["BASIN ARŞİVİ", "SAYI 2026/Q2", "41.5754°N", "6 HABER", "AKTİF"];

export default function PressPage() {
  return (
    <section style={{ background: "#F2F1EC", padding: "80px 0 120px" }}>
      <div
        className="fy-hero-c-strip"
        style={{
          borderTop: "1px solid #0B0B0C",
          borderBottom: "1px solid #0B0B0C",
          display: "flex",
          fontFamily: "var(--font-mono)",
          fontSize: 11,
          letterSpacing: ".14em",
          textTransform: "uppercase",
          padding: "0 24px",
          flexWrap: "wrap",
        }}
      >
        {TOP_STRIP.map((t, i) => (
          <div
            key={t}
            style={{
              padding: "12px 18px",
              borderRight: i < TOP_STRIP.length - 1 ? "1px solid #0B0B0C" : "none",
              color: i === 4 ? "#d72a05" : "#0B0B0C",
            }}
          >
            {t}
          </div>
        ))}
      </div>
      <div style={{ maxWidth: 1360, margin: "0 auto", padding: "48px 24px" }}>
        <h1
          className="fy-press-title"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(56px,9vw,144px)",
            lineHeight: 0.85,
            letterSpacing: "-.04em",
            color: "#0B0B0C",
            margin: "0 0 48px",
          }}
        >
          Basında <em style={{ fontStyle: "italic", color: "#d72a05" }}>biz</em>.
        </h1>
        <div className="fy-press-cols" style={{ columnCount: 3, columnGap: 24 }}>
          {NEWS.map((n, i) => (
            <article
              key={n.t}
              style={{
                breakInside: "avoid",
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: "1px solid #0B0B0C",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: ".14em",
                  color: "#d72a05",
                  textTransform: "uppercase",
                  marginBottom: 8,
                }}
              >
                {n.cat}
              </div>
              <h2
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 500,
                  fontSize: i === 0 ? 36 : i === 1 ? 28 : 22,
                  lineHeight: 1.1,
                  color: "#0B0B0C",
                  letterSpacing: "-.015em",
                  marginBottom: 12,
                  marginTop: 0,
                }}
              >
                {n.t}
              </h2>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  color: "#55585E",
                  letterSpacing: ".06em",
                }}
              >
                {n.src} · {n.d}
              </div>
              <a
                href="#"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  color: "#d72a05",
                  marginTop: 10,
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Haberi oku <Icon name="arrowUpRight" size={12} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
