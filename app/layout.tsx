import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export const metadata: Metadata = {
  title: "Filyos Özel Ambulans Merkezi · 7/24 Acil Sağlık Hizmeti",
  description:
    "Filyos Endüstri Bölgesi, Çaycuma / Zonguldak. 7/24 ambulans, saha revir ve acil müdahale. Aylık ortalama 1.500 vaka. Bir HealMedy markası.",
  icons: { icon: "/favicon.svg" },
  openGraph: {
    title: "Filyos Özel Ambulans Merkezi",
    description: "Hayatın, her anında güven. 7/24 profesyonel ambulans hizmeti.",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr">
      <body>
        <Header />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
