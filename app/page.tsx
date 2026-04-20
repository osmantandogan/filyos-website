import HeroA from "@/components/HeroA";
import StatsStrip from "@/components/sections/StatsStrip";
import Services from "@/components/sections/Services";
import TeamPreview from "@/components/sections/TeamPreview";
import SocialResponsibility from "@/components/sections/SocialResponsibility";
import Testimonials from "@/components/sections/Testimonials";

export default function HomePage() {
  return (
    <main>
      <HeroA />
      <StatsStrip />
      <Services />
      <TeamPreview />
      <SocialResponsibility />
      <Testimonials />
    </main>
  );
}
