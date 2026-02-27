import HeroSection from "@/components/HeroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ExperiencesSection from "@/components/ExperiencesSection";
import AboutSection from "@/components/AboutSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <DestinationsSection />
      <ExperiencesSection />
      <AboutSection />
      <FooterSection />
    </main>
  );
};

export default Index;
