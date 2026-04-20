"use client";

import { useEffect, useState, type CSSProperties, type ReactNode, type SVGProps } from "react";

// ---------- Icon ----------
export type IconName =
  | "ambulance" | "truck" | "stethoscope" | "shield" | "pulse" | "pin"
  | "phone" | "whatsapp" | "mail" | "clock" | "users" | "calendar"
  | "check" | "arrow" | "arrowUpRight" | "play" | "menu" | "plus"
  | "dot" | "book" | "briefcase";

const ICON_PATHS: Record<IconName, ReactNode> = {
  ambulance: (
    <g>
      <path d="M5 18H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v11h4v-5l-3-4h-5" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="17" cy="18" r="2" />
      <path d="M8 10v4M6 12h4" />
    </g>
  ),
  truck: (
    <g>
      <path d="M10 17h4V5H2v12h3" />
      <path d="M20 17h2v-3.34a4 4 0 0 0-1.17-2.83L19 9h-5v8M14 17h2" />
      <circle cx="7.5" cy="17.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </g>
  ),
  stethoscope: (
    <g>
      <path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3" />
      <path d="M8 15v1a6 6 0 0 0 6 6a6 6 0 0 0 6-6v-4" />
      <circle cx="20" cy="10" r="2" />
    </g>
  ),
  shield: (
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
  ),
  pulse: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  pin: (
    <g>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </g>
  ),
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  ),
  whatsapp: (
    <g>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </g>
  ),
  mail: (
    <g>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 6 10 7 10-7" />
    </g>
  ),
  clock: (
    <g>
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </g>
  ),
  users: (
    <g>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </g>
  ),
  calendar: (
    <g>
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </g>
  ),
  check: (
    <g>
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </g>
  ),
  arrow: (
    <g>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </g>
  ),
  arrowUpRight: (
    <g>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </g>
  ),
  play: <polygon points="5 3 19 12 5 21 5 3" />,
  menu: (
    <g>
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </g>
  ),
  plus: (
    <g>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </g>
  ),
  dot: <circle cx="12" cy="12" r="3" fill="currentColor" stroke="none" />,
  book: (
    <g>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </g>
  ),
  briefcase: (
    <g>
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </g>
  ),
};

type IconProps = Omit<SVGProps<SVGSVGElement>, "name" | "color" | "stroke"> & {
  name: IconName;
  size?: number;
  color?: string;
  stroke?: number;
};

export function Icon({ name, size = 20, color = "currentColor", stroke = 1.75, ...rest }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...rest}
    >
      {ICON_PATHS[name]}
    </svg>
  );
}

// ---------- Logo ----------
type LogoProps = { onDark?: boolean; size?: "sm" | "md" };

export function Logo({ onDark = false, size = "md" }: LogoProps) {
  const h = size === "sm" ? 36 : 44;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div
        style={{
          width: h,
          height: h,
          borderRadius: 10,
          background: "var(--brand-red)",
          display: "grid",
          placeItems: "center",
          position: "relative",
          flex: "none",
        }}
      >
        <div style={{ position: "absolute", width: 4, height: h * 0.48, background: "#fff", borderRadius: 2 }} />
        <div style={{ position: "absolute", width: h * 0.48, height: 4, background: "#fff", borderRadius: 2 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: size === "sm" ? 16 : 18,
            letterSpacing: "-0.01em",
            color: onDark ? "#F6F4EE" : "var(--fg-1)",
          }}
        >
          FİLYOS
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 9.5,
            letterSpacing: "0.18em",
            color: onDark ? "rgba(246,244,238,0.6)" : "var(--fg-3)",
            marginTop: 2,
            fontWeight: 500,
          }}
        >
          ÖZEL AMBULANS
        </div>
      </div>
    </div>
  );
}

// ---------- Pill ----------
type PillTone = "ink" | "red" | "line" | "lineLight" | "redSolid";
type PillProps = { children: ReactNode; tone?: PillTone; dot?: boolean };

const PILL_TONES: Record<PillTone, { bg: string; fg: string; border?: string }> = {
  ink: { bg: "#0B0B0C", fg: "#F6F4EE" },
  red: { bg: "#fde9e4", fg: "#d72a05" },
  line: { bg: "transparent", fg: "#F6F4EE", border: "1px solid rgba(246,244,238,0.28)" },
  lineLight: { bg: "transparent", fg: "#25262A", border: "1px solid #D2CFC6" },
  redSolid: { bg: "#d72a05", fg: "#fff" },
};

export function Pill({ children, tone = "ink", dot = false }: PillProps) {
  const t = PILL_TONES[tone];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        padding: "6px 12px",
        borderRadius: 999,
        background: t.bg,
        color: t.fg,
        fontFamily: "var(--font-sans)",
        fontWeight: 700,
        fontSize: 11,
        letterSpacing: "0.14em",
        textTransform: "uppercase",
        border: t.border ?? "none",
      }}
    >
      {dot && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: 999,
            background: "currentColor",
            animation: "pulseDot 1.4s infinite",
          }}
        />
      )}
      {children}
    </span>
  );
}

// ---------- Button ----------
type ButtonVariant = "primary" | "secondary" | "ghostDark" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  children: ReactNode;
  icon?: IconName;
  size?: ButtonSize;
  onClick?: () => void;
  type?: "button" | "submit";
  style?: CSSProperties;
};

const BTN_PADDING: Record<ButtonSize, string> = {
  sm: "10px 16px",
  md: "14px 22px",
  lg: "18px 28px",
};

const BTN_VARIANT: Record<ButtonVariant, CSSProperties> = {
  primary: {
    background: "#d72a05",
    color: "#fff",
    boxShadow: "0 14px 40px rgba(215,42,5,0.3)",
    border: "1px solid #d72a05",
  },
  secondary: { background: "#0B0B0C", color: "#fff", border: "1px solid #0B0B0C" },
  ghostDark: {
    background: "transparent",
    color: "#F6F4EE",
    border: "1px solid rgba(246,244,238,0.28)",
  },
  ghost: { background: "transparent", color: "#0B0B0C", border: "1px solid #D2CFC6" },
};

export function Button({
  variant = "primary",
  children,
  icon,
  onClick,
  size = "md",
  type = "button",
  style,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="fy-btn"
      style={{
        ...BTN_VARIANT[variant],
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: BTN_PADDING[size],
        borderRadius: 12,
        fontFamily: "var(--font-sans)",
        fontWeight: 600,
        fontSize: size === "lg" ? 16 : 14,
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
      {icon && <Icon name={icon} size={18} />}
    </button>
  );
}

// ---------- CountUp ----------
type CountUpProps = {
  to: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: boolean;
};

export function CountUp({ to, duration = 1200, prefix = "", suffix = "+", format = true }: CountUpProps) {
  const [v, setV] = useState(0);

  useEffect(() => {
    let start: number | undefined;
    let raf: number;
    const tick = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min(1, (t - start) / duration);
      setV(Math.floor(to * p));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, duration]);

  const f = format ? v.toLocaleString("tr-TR") : v;
  return (
    <span>
      {prefix}
      {f}
      {suffix}
    </span>
  );
}
