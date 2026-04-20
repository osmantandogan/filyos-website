import type { Metadata } from "next";
import ContactPage from "@/components/pages/ContactPage";

export const metadata: Metadata = {
  title: "İletişim · Filyos Özel Ambulans",
  description:
    "Filyos Endüstri Bölgesi, Çaycuma / Zonguldak. 7/24 telefon, e-posta ve kurumsal teklif formu.",
};

export default function Page() {
  return (
    <main>
      <ContactPage />
    </main>
  );
}
