import { Button } from "../shared";

const FIELDS: { label: string; v?: string }[] = [
  { label: "Ad Soyad" },
  { label: "Kurum" },
  { label: "Telefon", v: "+90 " },
  { label: "E-posta" },
];

export default function ContactPage() {
  return (
    <section style={{ background: "#FAFAF8", minHeight: "80vh" }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          minHeight: "80vh",
        }}
      >
        <div style={{ padding: "120px 64px", borderRight: "1px solid #E5E3DC" }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: ".18em",
              color: "#d72a05",
              textTransform: "uppercase",
              marginBottom: 16,
            }}
          >
            — İletişim
          </div>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 500,
              fontSize: "clamp(48px,5.5vw,80px)",
              lineHeight: 0.95,
              letterSpacing: "-.025em",
              color: "#0B0B0C",
              margin: "0 0 40px",
            }}
          >
            Acilse <em style={{ fontStyle: "italic", color: "#d72a05" }}>arayın</em>,
            <br />
            değilse yazın.
          </h1>
          <form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18,
              maxWidth: 440,
            }}
          >
            {FIELDS.map((f) => (
              <div key={f.label}>
                <label
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#55585E",
                    letterSpacing: ".12em",
                    textTransform: "uppercase",
                    display: "block",
                    marginBottom: 6,
                  }}
                >
                  {f.label}
                </label>
                <input
                  defaultValue={f.v}
                  style={{
                    width: "100%",
                    background: "#fff",
                    border: "1px solid #D2CFC6",
                    borderRadius: 12,
                    padding: "14px 16px",
                    fontSize: 15,
                    fontFamily: "var(--font-sans)",
                    color: "#0B0B0C",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              </div>
            ))}
            <div>
              <label
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#55585E",
                  letterSpacing: ".12em",
                  textTransform: "uppercase",
                  display: "block",
                  marginBottom: 6,
                }}
              >
                Talep detayı
              </label>
              <textarea
                placeholder="Saha revir, eğitim, hasta nakli…"
                style={{
                  width: "100%",
                  background: "#fff",
                  border: "1px solid #D2CFC6",
                  borderRadius: 12,
                  padding: "14px 16px",
                  fontSize: 15,
                  fontFamily: "var(--font-sans)",
                  color: "#0B0B0C",
                  outline: "none",
                  boxSizing: "border-box",
                  minHeight: 120,
                  resize: "vertical",
                }}
              />
            </div>
            <Button variant="primary" size="lg" icon="arrow" type="submit">
              Talep Gönder
            </Button>
          </form>
        </div>
        <div style={{ position: "relative", background: "#0B0B0C", overflow: "hidden" }}>
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at 30% 40%, rgba(215,42,5,0.25), transparent 60%)",
            }}
          />
          <svg
            style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
            viewBox="0 0 800 800"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <pattern id="contact-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path
                  d="M 40 0 L 0 0 0 40"
                  fill="none"
                  stroke="rgba(246,244,238,0.06)"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="800" height="800" fill="url(#contact-grid)" />
            <circle cx="380" cy="400" r="12" fill="#d72a05" />
            <circle cx="380" cy="400" r="30" fill="none" stroke="#d72a05" strokeWidth="2" opacity=".5" />
            <circle cx="380" cy="400" r="60" fill="none" stroke="#d72a05" strokeWidth="1" opacity=".3" />
            <circle cx="380" cy="400" r="120" fill="none" stroke="#d72a05" strokeWidth="1" opacity=".15" />
          </svg>
          <div
            style={{
              position: "relative",
              padding: "120px 64px",
              color: "#F6F4EE",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".18em",
                  color: "#ff3a1a",
                  textTransform: "uppercase",
                  marginBottom: 20,
                }}
              >
                — MERKEZ OFİS
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontWeight: 500,
                  fontSize: 36,
                  lineHeight: 1.2,
                  letterSpacing: "-.02em",
                }}
              >
                Filyos Endüstri Bölgesi,
                <br />
                Çaycuma / Zonguldak
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  color: "rgba(246,244,238,.5)",
                  marginTop: 16,
                  letterSpacing: ".08em",
                }}
              >
                41.5754° N · 32.0217° E
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 24,
                paddingTop: 32,
                borderTop: "1px solid rgba(246,244,238,.12)",
              }}
            >
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: ".14em",
                    color: "rgba(246,244,238,.5)",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  Telefon · 7/24
                </div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 500 }}>
                  0372 XXX XX XX
                </div>
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: ".14em",
                    color: "rgba(246,244,238,.5)",
                    textTransform: "uppercase",
                    marginBottom: 8,
                  }}
                >
                  E-posta
                </div>
                <div style={{ fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 16 }}>
                  info@healmedyfilyos.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
