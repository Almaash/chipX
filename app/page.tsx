import Header from "@/components/header";
import HeroSection from "@/components/home/hero-section";
import FeaturesSection from "@/components/home/features-section";
import TrackRecordSection from "@/components/home/TrackRecordSection";
import Footer from "@/components/footer";
import PioneeringSection from "@/components/home/pioneering";
import IndustryReadySection from "@/components/home/IndustryReadySection";
import CourseStructure from "@/components/home/CourseStructure";
import PartnersSection from "@/components/home/PartnersSection";
import Testimonials from "@/components/home/testimonials";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <PioneeringSection />
      <CourseStructure />
      <IndustryReadySection />
      <TrackRecordSection />
      <PartnersSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
