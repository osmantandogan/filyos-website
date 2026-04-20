# Filyos Özel Ambulans Merkezi — Web Sitesi

Marka: **Filyos Özel Ambulans Merkezi** — bir **HealMedy** grubu markası.
Lokasyon: Filyos Endüstri Bölgesi, Çaycuma / Zonguldak.

Slogan: *"Hayatın, her anında güven."*

## Stack

- **Next.js 14** (App Router) + **React 18**
- **TypeScript**
- Inline design tokens via CSS custom properties (`app/globals.css`)
- Fonts: `Fraunces` (display, italic), `Inter` (sans), `JetBrains Mono` (mono) — Google Fonts

## Sayfalar

| Yol | Bileşen |
| --- | --- |
| `/` | Hero A (sinematik) + Services + Stats + Team + Social Responsibility + Testimonials |
| `/hizmetler` | Editoryal hizmet listesi (5 hizmet) |
| `/filomuz` | 12 araçlık filo tablosu |
| `/ekibimiz` | Departman filtreli ekip kart grid'i |
| `/basinda-biz` | Gazete sütunlu basın arşivi |
| `/iletisim` | Split form + harita işareti |

## Geliştirme

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # production server
```

## Tasarım sistemi

Tüm tasarım kararları (renk, tipografi, spacing, motion, kart anatomi) tek dosyada:
[`app/globals.css`](./app/globals.css). Marka renkleri: `#d72a05` (HealMedy red), `#ff3a1a`
(emergency), siyah `#0B0B0C`, sıcak beyaz `#FAFAF8`.

Hero varyantları (`HeroA` sinematik / `HeroB` operasyonel split / `HeroC` brutalist editorial)
`components/` altında kullanıma hazır. Anasayfada `HeroA` etkin.

Bir HealMedy markasıdır · TP-OTC iştiraki.
