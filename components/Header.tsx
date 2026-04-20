"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Icon, Logo } from "./shared";

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
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

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
        className="fy-header-inner"
        style={{
          maxWidth: 1360,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: 32,
        }}
      >
        <Link href="/" aria-label="Filyos Özel Ambulans · Ana sayfa" onClick={() => setMenuOpen(false)}>
          <Logo size={scrolled ? "sm" : "md"} />
        </Link>

        <nav className="fy-nav-main" style={{ display: "flex", gap: 22, flex: 1, justifyContent: "center" }}>
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

        <div className="fy-header-cta" style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <span
            className="fy-header-lang"
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
              className="fy-acil"
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
          <button
            type="button"
            className="fy-hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            style={{
              display: "none",
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "1px solid #D2CFC6",
              background: menuOpen ? "#0B0B0C" : "transparent",
              color: menuOpen ? "#F6F4EE" : "#0B0B0C",
              placeItems: "center",
              cursor: "pointer",
              transition: "all .2s var(--ease-out)",
            }}
          >
            <Icon name={menuOpen ? "plus" : "menu"} size={20} style={menuOpen ? { transform: "rotate(45deg)" } : undefined} />
          </button>
        </div>
      </div>

      <div
        className="fy-mobile-menu"
        aria-hidden={!menuOpen}
        style={{
          display: "none",
          position: "absolute",
          top: "100%",
          left: 0,
          right: 0,
          background: "#0B0B0C",
          color: "#F6F4EE",
          borderTop: "1px solid rgba(246,244,238,0.12)",
          boxShadow: "0 24px 64px rgba(11,11,12,0.35)",
          maxHeight: menuOpen ? "calc(100vh - 72px)" : 0,
          overflow: "hidden",
          transition: "max-height .32s var(--ease-out)",
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", padding: "8px 16px 20px" }}>
          {NAV.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                padding: "18px 8px",
                fontFamily: "var(--font-display)",
                fontSize: 26,
                fontWeight: 500,
                letterSpacing: "-0.01em",
                color: "#F6F4EE",
                borderBottom: "1px solid rgba(246,244,238,0.08)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <div
            style={{
              marginTop: 20,
              padding: "0 8px",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <a
              href="tel:112"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 16px",
                background: "#d72a05",
                color: "#fff",
                borderRadius: 12,
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                letterSpacing: "0.08em",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
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
              </span>
              <Icon name="phone" size={18} color="#fff" />
            </a>
            <a
              href="tel:0372"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "14px 16px",
                border: "1px solid rgba(246,244,238,0.2)",
                borderRadius: 12,
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                letterSpacing: "0.08em",
                color: "#F6F4EE",
              }}
            >
              0372 XXX XX XX · 7/24
              <Icon name="arrowUpRight" size={16} color="#F6F4EE" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
