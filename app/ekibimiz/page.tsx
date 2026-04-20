import type { Metadata } from "next";
import TeamPage from "@/components/pages/TeamPage";

export const metadata: Metadata = {
  title: "Ekibimiz · Filyos Özel Ambulans",
  description:
    "Hekim, paramedik, ATT ve saha personelinden oluşan 85+ kişilik kadromuz. Sahada, her vardiyada.",
};

export default function Page() {
  return (
    <main>
      <TeamPage />
    </main>
  );
}
