import { Button } from "../shared";

const TEAM = [
  { n: "Dr. M. Yılmaz", r: "Acil Tıp Hekimi", img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" },
  { n: "E. Demir", r: "Paramedik", img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" },
  { n: "A. Kaya", r: "ATT", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" },
  { n: "S. Öztürk", r: "Operasyon Şefi", img: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=600&q=80" },
];

export default function TeamPreview() {
  return (
    <section className="fy-sec-pad" style={{ background: "#F2F1EC", padding: "128px 24px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
        <div
          className="fy-team-preview-head"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "end",
            marginBottom: 48,
            gap: 24,
            flexWrap: "wrap",
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
              — Ekibimiz
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
              Sahada, <em style={{ fontStyle: "italic", color: "#d72a05" }}>her vardiyada</em>.
            </h2>
          </div>
          <Button variant="ghost" icon="arrow">
            Tüm ekip
          </Button>
        </div>
        <div className="fy-team-preview-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {TEAM.map((p) => (
            <div
              key={p.n}
              className="team-card"
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid #E5E3DC",
                cursor: "pointer",
              }}
            >
              <div style={{ aspectRatio: "3/4", background: "#E8E6DF", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.n}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    filter: "grayscale(0.2) contrast(1.02)",
                  }}
                />
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontWeight: 700,
                    fontSize: 17,
                    color: "#0B0B0C",
                  }}
                >
                  {p.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    color: "#d72a05",
                    textTransform: "uppercase",
                    marginTop: 6,
                  }}
                >
                  {p.r}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
