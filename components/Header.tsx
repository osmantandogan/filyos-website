"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./shared";

const NAV = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/filomuz", label: "Filomuz" },
  { href: "/ekibimiz", label: "Ekibimiz" },
  { href: "/basinda-biz", label: "Basında Biz" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header({ emergency = true }: { emergency?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        background: scrolled ? "rgba(250,250,248,0.86)" : "rgba(250,250,248,0.6)",
        borderBottom: scrolled ? "1px solid #E5E3DC" : "1px solid transparent",
        transition: "all .24s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        <Link href="/" aria-label="Filyos Özel Ambulans · Ana sayfa">
          <Logo size={scrolled ? "sm" : "md"} />
        </Link>

        <nav style={{ display: "flex", gap: 22, flex: 1, justifyContent: "center" }}>
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                color: "#25262A",
                fontSize: 13.5,
                fontWeight: 500,
                fontFamily: "var(--font-sans)",
                padding: "6px 0",
                borderBottom: "2px solid transparent",
                letterSpacing: "-0.005em",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              color: "#55585E",
              letterSpacing: "0.08em",
            }}
          >
            TR / EN
          </span>
          {emergency && (
            <a
              href="tel:112"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "10px 16px",
                background: "#d72a05",
                color: "#fff",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.08em",
                boxShadow: "0 10px 28px rgba(215,42,5,0.28)",
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: 999,
                  background: "#fff",
                  animation: "pulseDot 1.4s infinite",
                }}
              />
              ACİL · 112
            </a>
          )}
        </div>
      </div>
    </header>
  );
}
