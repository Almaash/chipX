import { AboutSection } from "@/components/about/AboutSection";
import { CoreValues } from "@/components/about/coreValues";
import { FiveReasons } from "@/components/about/fiveReasons";
import { HeroSection } from "@/components/about/heroSection";
import { VisionMission } from "@/components/about/visionMission";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Header2 from "@/components/header2";

export default function AboutPage() {

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <VisionMission />
      <AboutSection />
      <CoreValues />
      <FiveReasons />
      <Footer />
    </div>
  );
}
