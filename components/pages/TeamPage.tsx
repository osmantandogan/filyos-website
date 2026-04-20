"use client";

import { useMemo, useState } from "react";

type Member = { n: string; r: string; d: string; y: number; img: string };

const TEAM: Member[] = [
  { n: "Dr. Mehmet Yılmaz", r: "Acil Tıp Hekimi", d: "Hekim", y: 2017, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80" },
  { n: "Dr. Ayşe Kara", r: "Dahiliye Uzmanı", d: "Hekim", y: 2019, img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80" },
  { n: "Emre Demir", r: "Paramedik", d: "Paramedik", y: 2018, img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=600&q=80" },
  { n: "Ali Kaya", r: "ATT", d: "ATT", y: 2020, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80" },
  { n: "Seda Öztürk", r: "Operasyon Şefi", d: "Yönetim", y: 2017, img: "https://images.unsplash.com/photo-1584467735815-f778f274e296?auto=format&fit=crop&w=600&q=80" },
  { n: "Burak Şen", r: "Paramedik", d: "Paramedik", y: 2021, img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=600&q=80" },
  { n: "Merve Akın", r: "ATT", d: "ATT", y: 2022, img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=600&q=80" },
  { n: "Osman Yıldız", r: "Şoför · İlk Yardımcı", d: "Saha", y: 2018, img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=600&q=80" },
];

const DEPTS = ["Hepsi", "Hekim", "Paramedik", "ATT", "Saha", "Yönetim"];

export default function TeamPage() {
  const [filter, setFilter] = useState("Hepsi");
  const filtered = useMemo(
    () => (filter === "Hepsi" ? TEAM : TEAM.filter((t) => t.d === filter)),
    [filter],
  );

  return (
    <section style={{ background: "#F2F1EC", padding: "120px 24px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
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
          — Ekibimiz · 85+ personel
        </div>
        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(48px,6.5vw,100px)",
            lineHeight: 0.92,
            letterSpacing: "-.028em",
            color: "#0B0B0C",
            margin: "0 0 40px",
          }}
        >
          Sahada, <em style={{ fontStyle: "italic", color: "#d72a05" }}>her vardiyada</em>.
        </h1>

        <div style={{ display: "flex", gap: 8, marginBottom: 32, flexWrap: "wrap" }}>
          {DEPTS.map((d) => {
            const active = filter === d;
            return (
              <button
                key={d}
                onClick={() => setFilter(d)}
                style={{
                  padding: "10px 18px",
                  borderRadius: 999,
                  border: active ? "1px solid #d72a05" : "1px solid #D2CFC6",
                  background: active ? "#d72a05" : "transparent",
                  color: active ? "#fff" : "#0B0B0C",
                  fontFamily: "var(--font-sans)",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  letterSpacing: ".02em",
                }}
              >
                {d}
              </button>
            );
          })}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
          {filtered.map((p) => (
            <div
              key={p.n}
              style={{
                background: "#fff",
                borderRadius: 18,
                overflow: "hidden",
                border: "1px solid #E5E3DC",
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
                    filter: "grayscale(.15) contrast(1.02)",
                  }}
                />
              </div>
              <div style={{ padding: "20px 20px 24px" }}>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    color: "#8C8F95",
                    letterSpacing: ".12em",
                    marginBottom: 6,
                  }}
                >
                  {p.y} →
                </div>
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
                    letterSpacing: ".12em",
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
