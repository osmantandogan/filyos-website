import type { Metadata } from "next";
import ServicesPage from "@/components/pages/ServicesPage";

export const metadata: Metadata = {
  title: "Hizmetler · Filyos Özel Ambulans",
  description:
    "Acil müdahale, hasta nakli, etkinlik sağlık desteği, ilk yardım eğitimi ve saha revir. Beş ayrı uzmanlık, tek operasyon.",
};

export default function Page() {
  return (
    <main>
      <ServicesPage />
    </main>
  );
}
