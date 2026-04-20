const ITEMS = [
  {
    t: "Filyos Ambulans Merkezi, bölgemizde önemli bir sağlık hizmeti boşluğunu doldurmaktadır.",
    n: "Zonguldak Valiliği",
    r: "KAMU KURUMU",
  },
  {
    t: "Tesis sağlığı hizmetlerinde gösterdikleri profesyonellik takdire şayandır.",
    n: "Filyos Sanayi Bölgesi",
    r: "OSB MÜDÜRLÜĞÜ",
  },
  {
    t: "Etkinliklerimizde sağlık desteğiyle güven veren bir iş ortağı.",
    n: "Çaycuma Belediyesi",
    r: "YEREL YÖNETİM",
  },
];

export default function Testimonials() {
  return (
    <section
      className="fy-sec-pad"
      style={{
        background: "#FAFAF8",
        padding: "128px 24px",
        borderTop: "1px solid #E5E3DC",
      }}
    >
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
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
          — Referanslar
        </div>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(40px,5vw,64px)",
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
            color: "#0B0B0C",
            margin: "0 0 48px",
            maxWidth: 900,
          }}
        >
          Kamu, sanayi ve yerel yönetim{" "}
          <em style={{ fontStyle: "italic", color: "#d72a05" }}>bizi tercih ediyor</em>.
        </h2>
        <div className="fy-test-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {ITEMS.map((q) => (
            <div
              key={q.n}
              style={{
                background: "#fff",
                border: "1px solid #E5E3DC",
                borderRadius: 18,
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 18,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 80,
                  lineHeight: 0.4,
                  color: "#d72a05",
                  fontStyle: "italic",
                  fontWeight: 500,
                  height: 20,
                }}
              >
                “
              </div>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontStyle: "italic",
                  fontSize: 22,
                  lineHeight: 1.3,
                  color: "#0B0B0C",
                  fontWeight: 500,
                }}
              >
                {q.t}
              </div>
              <div
                style={{
                  borderTop: "1px solid #E5E3DC",
                  paddingTop: 16,
                  marginTop: "auto",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: 14,
                    color: "#0B0B0C",
                  }}
                >
                  {q.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.12em",
                    color: "#55585E",
                    marginTop: 3,
                  }}
                >
                  {q.r}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
