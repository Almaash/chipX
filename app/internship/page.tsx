import Header from "@/components/header";
import Footer from "@/components/footer";
import { Hero } from "@/components/internship/hero";
import { ProgramDiagram } from "@/components/internship/program-diagram";
import { WhyChoose } from "@/components/internship/why-choose";
import { CertificationTimeline } from "@/components/internship/certification-timeline";
import { InternshipBanner } from "@/components/internship/internship-banner";
import { Journey } from "@/components/internship/journey";
import { ApplicationStats } from "@/components/internship/application-stats";
import Header2 from "@/components/header2";
import JourneyWithApplication from "@/components/internship/JourneyWithApplication";
import { InternshipDetails } from "@/components/internship/InternshipDetails";
import ChipXInternship from "@/components/internship/ChipXInternship";
import { PartnerBanner } from "@/components/internship/PartnerBanner";
// import { FooterSection } from "@/components/internship/footer-section";



export default function Page() {
  return (
    <main className="flex min-h-screen flex-col bg-white text-slate-900">
      <Header />
      <Hero />
      {/* <ProgramDiagram /> */}
      <ChipXInternship />
      <WhyChoose />
      <CertificationTimeline />
      {/* <InternshipBanner /> */}
      <PartnerBanner />

      <InternshipDetails />
      <JourneyWithApplication />
      <Footer />
    </main>
  )
}
