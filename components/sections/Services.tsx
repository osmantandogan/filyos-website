import { Icon, type IconName } from "../shared";

const ITEMS: { ic: IconName; t: string; d: string; tag: string }[] = [
  { ic: "ambulance", t: "Acil Müdahale", d: "7/24 acil sağlık çağrılarında ortalama 08 dk içinde olay yerinde.", tag: "01" },
  { ic: "truck", t: "Hasta Nakli", d: "Hastaneler arası güvenli sevk, yoğun bakım donanımlı araçlar.", tag: "02" },
  { ic: "users", t: "Etkinlik Sağlık Desteği", d: "Spor, konser, kurumsal etkinliklerde yerinde saha sağlık ekibi.", tag: "03" },
  { ic: "book", t: "İlk Yardım Eğitimi", d: "Sertifikalı eğitmenlerle iş yeri ve topluluk eğitim programları.", tag: "04" },
  { ic: "shield", t: "Saha Revir", d: "Endüstriyel tesislerde kalıcı revir kurulumu, vardiya hekim/paramedik.", tag: "05" },
];

export default function Services() {
  return (
    <section style={{ background: "#FAFAF8", padding: "128px 24px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 80,
            alignItems: "end",
            marginBottom: 64,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: "0.18em",
                color: "#d72a05",
                textTransform: "uppercase",
                marginBottom: 16,
              }}
            >
              — Hizmetlerimiz
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "clamp(40px,5vw,72px)",
                lineHeight: 0.98,
                letterSpacing: "-0.025em",
                color: "#0B0B0C",
                margin: 0,
              }}
            >
              Profesyonel <em style={{ fontStyle: "italic", color: "#d72a05" }}>tıbbi</em>
              <br />
              çözümler.
            </h2>
          </div>
          <p
            style={{
              fontSize: 17,
              lineHeight: 1.6,
              color: "#25262A",
              maxWidth: 460,
              fontFamily: "var(--font-sans)",
            }}
          >
            Filyos Endüstri Bölgesi merkezli operasyonumuz, hem B2B tesis müdahalesi hem toplum
            sağlık hizmetini aynı filo ile yürütür.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {ITEMS.map((it) => (
            <div
              key={it.tag}
              className="svc-card"
              style={{
                background: "#fff",
                border: "1px solid #E5E3DC",
                borderRadius: 18,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 14,
                cursor: "pointer",
                minHeight: 280,
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: 14,
                    background: "#fde9e4",
                    display: "grid",
                    placeItems: "center",
                  }}
                >
                  <Icon name={it.ic} size={26} color="#d72a05" />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "#8C8F95",
                    letterSpacing: "0.1em",
                  }}
                >
                  {it.tag} / 05
                </div>
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 700,
                  fontSize: 22,
                  color: "#0B0B0C",
                  letterSpacing: "-0.01em",
                  marginTop: 8,
                }}
              >
                {it.t}
              </div>
              <div style={{ fontSize: 14.5, lineHeight: 1.55, color: "#55585E" }}>{it.d}</div>
              <div
                style={{
                  marginTop: "auto",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#0B0B0C",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                }}
              >
                Detaylı bilgi <Icon name="arrowUpRight" size={14} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
