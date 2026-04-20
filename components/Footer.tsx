import { Logo } from "./shared";

const COLUMNS: { h: string; l: string[] }[] = [
  { h: "Kurumsal", l: ["Hakkımızda", "Filomuz", "Ekibimiz", "Galeri"] },
  { h: "Hizmetler", l: ["Acil Müdahale", "Hasta Nakli", "Saha Revir", "İlk Yardım Eğitimi"] },
  {
    h: "İletişim",
    l: ["0372 XXX XX XX", "info@healmedyfilyos.com", "Filyos, Çaycuma", "Zonguldak"],
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "#0B0B0C",
        color: "#F6F4EE",
        padding: "80px 24px 32px",
        borderTop: "1px solid rgba(246,244,238,0.14)",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(246,244,238,0.12)",
          }}
        >
          <div>
            <Logo onDark />
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "rgba(246,244,238,0.65)",
                lineHeight: 1.6,
                marginTop: 18,
                maxWidth: 280,
              }}
            >
              Filyos ve çevresinde 7/24 profesyonel ambulans ve acil sağlık hizmeti.
            </p>
            <div
              style={{
                marginTop: 20,
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: "0.14em",
                color: "rgba(246,244,238,0.4)",
                textTransform: "uppercase",
              }}
            >
              BİR HEALMEDY MARKASIDIR · TP-OTC İŞTİRAKİ
            </div>
          </div>
          {COLUMNS.map((c) => (
            <div key={c.h}>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  color: "rgba(246,244,238,0.5)",
                  textTransform: "uppercase",
                  marginBottom: 16,
                }}
              >
                {c.h}
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {c.l.map((x) => (
                  <a
                    key={x}
                    href="#"
                    style={{ color: "#F6F4EE", fontSize: 14, fontFamily: "var(--font-sans)" }}
                  >
                    {x}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 24,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            color: "rgba(246,244,238,0.4)",
            letterSpacing: "0.08em",
          }}
        >
          <div>© 2026 FİLYOS ÖZEL AMBULANS MERKEZİ</div>
          <div>ACİL · 112 · 7/24</div>
        </div>
      </div>
    </footer>
  );
}
