import type { Metadata } from "next";
import PressPage from "@/components/pages/PressPage";

export const metadata: Metadata = {
  title: "Basında Biz · Filyos Özel Ambulans",
  description:
    "Filyos Ambulans hakkında basın haberleri, sosyal sorumluluk faaliyetleri ve kurumsal duyurular.",
};

export default function Page() {
  return (
    <main>
      <PressPage />
    </main>
  );
}
