import type { Metadata } from "next";
import FleetPage from "@/components/pages/FleetPage";

export const metadata: Metadata = {
  title: "Filomuz · Filyos Özel Ambulans",
  description:
    "12 araçlık tam donanımlı ambulans filosu. Yoğun bakım, tam donanımlı, hasta nakli ve etkinlik araçları.",
};

export default function Page() {
  return (
    <main>
      <FleetPage />
    </main>
  );
}
