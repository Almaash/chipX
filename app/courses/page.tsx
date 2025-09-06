import Footer from "@/components/footer";

import Header2 from "@/components/header2";
import Courses from "@/components/courses/Courses";
import ProgramInfo from "@/components/courses/ProgramInfo";
import StatisticsOverview from "@/components/courses/StatisticsOverview";
import AdmissionsPage from "@/components/courses/AdmissionsPage";
import { Hero } from "@/components/courses/Hero";
import Header from "@/components/header";

export default function CoursesPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Hero />
      <ProgramInfo />
      <StatisticsOverview />
      <Courses />
      <AdmissionsPage />
      <Footer />
    </div>
  );
}
