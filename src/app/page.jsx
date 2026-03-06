import { Hero } from "@/components/ui/Hero";
import { ClientsMarquee } from "@/components/ui/ClientsMarquee";
import { ServicesBento } from "@/components/ui/ServicesBento";
import { AchievementsCounter } from "@/components/ui/AchievementsCounter";
import { Pricing } from "@/components/ui/Pricing";
import { ReviewsCarousel } from "@/components/ui/ReviewsCarousel";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-primary/30 selection:text-primary-foreground flex flex-col items-center w-full overflow-hidden">
      <Hero />
      <ClientsMarquee />
      <ServicesBento />
      <AchievementsCounter />
      <Pricing />
      <ReviewsCarousel />
      <Footer />
    </main>
  );
}
