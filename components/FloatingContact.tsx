import { Icon, type IconName } from "./shared";

const SECONDARY: IconName[] = ["whatsapp", "mail", "pin"];

export default function FloatingContact() {
  return (
    <div
      style={{
        position: "fixed",
        right: 24,
        bottom: 24,
        zIndex: 50,
        display: "flex",
        gap: 6,
        padding: 8,
        background: "rgba(11,11,12,0.82)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0 20px 50px rgba(11,11,12,0.3)",
      }}
    >
      <a
        href="tel:0372"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 10,
          padding: "10px 18px 10px 10px",
          background: "#d72a05",
          color: "#fff",
          borderRadius: 999,
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 700,
        }}
      >
        <span
          style={{
            width: 34,
            height: 34,
            borderRadius: 999,
            background: "rgba(255,255,255,0.2)",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Icon name="phone" size={16} color="#fff" />
        </span>
        Hemen Ara
      </a>
      {SECONDARY.map((n) => (
        <a
          key={n}
          href="#"
          className="fc-ix"
          style={{
            width: 42,
            height: 42,
            borderRadius: 999,
            display: "grid",
            placeItems: "center",
            color: "#fff",
            background: "rgba(255,255,255,0.08)",
          }}
          aria-label={n}
        >
          <Icon name={n} size={16} color="#fff" />
        </a>
      ))}
    </div>
  );
}
