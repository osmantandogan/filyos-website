type FleetItem = {
  id: string;
  model: string;
  year: number;
  type: string;
  status: "HAZIR" | "GÖREV" | "BAKIM";
  km: string;
};

const FLEET: FleetItem[] = [
  { id: "TR-FL-01", model: "Ford Transit 350", year: 2024, type: "Tam Donanımlı", status: "HAZIR", km: "28.450" },
  { id: "TR-FL-02", model: "Mercedes Sprinter 519", year: 2023, type: "Yoğun Bakım", status: "GÖREV", km: "42.180" },
  { id: "TR-FL-03", model: "Ford Transit 350", year: 2024, type: "Tam Donanımlı", status: "HAZIR", km: "18.920" },
  { id: "TR-FL-04", model: "VW Crafter 35", year: 2022, type: "Hasta Nakil", status: "BAKIM", km: "78.340" },
  { id: "TR-FL-05", model: "Mercedes Sprinter 519", year: 2025, type: "Yoğun Bakım", status: "HAZIR", km: "04.120" },
  { id: "TR-FL-06", model: "Ford Transit 350", year: 2024, type: "Tam Donanımlı", status: "GÖREV", km: "22.680" },
  { id: "TR-FL-07", model: "VW Crafter 35", year: 2023, type: "Etkinlik", status: "HAZIR", km: "35.210" },
  { id: "TR-FL-08", model: "Mercedes Sprinter 519", year: 2024, type: "Yoğun Bakım", status: "HAZIR", km: "14.580" },
  { id: "TR-FL-09", model: "Ford Transit 350", year: 2023, type: "Tam Donanımlı", status: "HAZIR", km: "38.920" },
  { id: "TR-FL-10", model: "VW Crafter 35", year: 2022, type: "Hasta Nakil", status: "GÖREV", km: "64.180" },
  { id: "TR-FL-11", model: "Ford Transit 350", year: 2025, type: "Tam Donanımlı", status: "HAZIR", km: "08.340" },
  { id: "TR-FL-12", model: "Mercedes Sprinter 519", year: 2024, type: "Yoğun Bakım", status: "HAZIR", km: "18.720" },
];

const STATUS_COLOR: Record<FleetItem["status"], string> = {
  HAZIR: "#1E9E6A",
  GÖREV: "#E8A417",
  BAKIM: "#55585E",
};

const STATUS_BG: Record<FleetItem["status"], string> = {
  HAZIR: "#e3f7ec",
  GÖREV: "#fef6e3",
  BAKIM: "#F2F1EC",
};

export default function FleetPage() {
  return (
    <section className="fy-page-pad" style={{ background: "#FAFAF8", padding: "140px 24px" }}>
      <div style={{ maxWidth: 1360, margin: "0 auto" }}>
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
          — Filomuz · 12 ARAÇ
        </div>
        <h1
          className="fy-fleet-title"
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "clamp(56px,7.5vw,120px)",
            lineHeight: 0.9,
            letterSpacing: "-.03em",
            color: "#0B0B0C",
            margin: "0 0 56px",
          }}
        >
          <em style={{ fontStyle: "italic", color: "#d72a05" }}>Donanımlı</em> filomuz.
        </h1>
        <div className="fy-fleet-wrap">
        <div style={{ border: "1.5px solid #0B0B0C" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "140px 1fr 180px 180px 140px 140px",
              padding: "14px 20px",
              background: "#0B0B0C",
              color: "#F6F4EE",
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: ".14em",
              textTransform: "uppercase",
            }}
          >
            <div>KOD</div>
            <div>MODEL</div>
            <div>TİP</div>
            <div>YIL</div>
            <div>KM</div>
            <div>DURUM</div>
          </div>
          {FLEET.map((v, i) => (
            <div
              key={v.id}
              style={{
                display: "grid",
                gridTemplateColumns: "140px 1fr 180px 180px 140px 140px",
                padding: "18px 20px",
                borderTop: i > 0 ? "1px solid #E5E3DC" : "none",
                alignItems: "center",
                background: i % 2 ? "#fff" : "#F2F1EC",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 13,
                  fontWeight: 600,
                  color: "#0B0B0C",
                }}
              >
                {v.id}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "#0B0B0C",
                }}
              >
                {v.model}
              </div>
              <div style={{ fontSize: 14, color: "#25262A" }}>{v.type}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#55585E" }}>
                {v.year}
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "#55585E" }}>
                {v.km} km
              </div>
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: ".12em",
                    color: STATUS_COLOR[v.status],
                    padding: "4px 10px",
                    border: `1px solid ${STATUS_COLOR[v.status]}`,
                    borderRadius: 4,
                    background: STATUS_BG[v.status],
                  }}
                >
                  {v.status}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
