import { Icon, type IconName } from "../shared";

const ITEMS: { ic: IconName; t: string; d: string; feats: string[] }[] = [
  {
    ic: "ambulance",
    t: "Acil Müdahale",
    d: "7/24 acil sağlık çağrılarında ortalama 08 dk içinde olay yerinde. İleri yaşam desteği donanımlı araç ve deneyimli ekip.",
    feats: ["İleri yaşam desteği", "Paramedik + ATT ekip", "Ortalama 08 dk yanıt", "GPS takipli sevk"],
  },
  {
    ic: "truck",
    t: "Hasta Nakli",
    d: "Hastaneler arası güvenli sevk, yoğun bakım donanımlı araçlar, uzun mesafe transfer.",
    feats: ["Şehirler arası transfer", "Yoğun bakım donanımlı", "Refakatçi hekim", "Uçak/gemi transfer"],
  },
  {
    ic: "users",
    t: "Etkinlik Sağlık Desteği",
    d: "Spor müsabakaları, konser, kurumsal etkinliklerde yerinde saha sağlık ekibi ve revir.",
    feats: ["Konser & festival", "Spor müsabakası", "Kurumsal etkinlik", "Mobil revir"],
  },
  {
    ic: "book",
    t: "İlk Yardım Eğitimi",
    d: "Sağlık Bakanlığı onaylı sertifikalı eğitmenlerle iş yeri ve topluluk eğitim programları.",
    feats: ["SB onaylı sertifika", "16 saat temel eğitim", "İş yeri programı", "Tazeleme eğitimi"],
  },
  {
    ic: "shield",
    t: "Saha Revir",
    d: "Endüstriyel tesislerde kalıcı revir kurulumu, vardiya hekim/paramedik görevlendirme.",
    feats: ["Kalıcı kurulum", "Vardiya hekim", "İş sağlığı takip", "Periyodik muayene"],
  },
];

export default function ServicesPage() {
  return (
    <section style={{ background: "#FAFAF8", padding: "140px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: ".18em",
            color: "#d72a05",
            textTransform: "uppercase",
            marginBottom: 18,
          }}
        >
          — Hizmetler / No. 05
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(56px,8vw,128px)",
            lineHeight: 0.9,
            letterSpacing: "-.035em",
            color: "#0B0B0C",
            margin: 0,
            marginBottom: 72,
          }}
        >
          Beş ayrı uzmanlık,
          <br />
          <em style={{ fontStyle: "italic", color: "#d72a05" }}>tek operasyon</em>.
        </h1>
        {ITEMS.map((s, i) => (
          <div
            key={s.t}
            style={{
              display: "grid",
              gridTemplateColumns: "100px 1fr 320px",
              gap: 48,
              padding: "48px 0",
              borderTop: "1px solid #E5E3DC",
              alignItems: "start",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 64,
                fontWeight: 500,
                color: "#d72a05",
                lineHeight: 0.9,
              }}
            >
              0{i + 1}
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: 44,
                  color: "#0B0B0C",
                  letterSpacing: "-.02em",
                  margin: "0 0 16px",
                }}
              >
                {s.t}
              </h3>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: "#25262A",
                  maxWidth: 580,
                  margin: 0,
                }}
              >
                {s.d}
              </p>
              <a
                href="#"
                style={{
                  marginTop: 24,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  color: "#d72a05",
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                Detaylı bilgi <Icon name="arrowUpRight" size={14} />
              </a>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {s.feats.map((f) => (
                <div
                  key={f}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    color: "#25262A",
                    letterSpacing: ".04em",
                  }}
                >
                  <Icon name="check" size={14} color="#d72a05" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
