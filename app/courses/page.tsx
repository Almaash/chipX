import Footer from "@/components/footer";

import Header2 from "@/components/header2";
import Courses from "@/components/courses/Courses";
import ProgramInfo from "@/components/courses/ProgramInfo";
import StatisticsOverview from "@/components/courses/StatisticsOverview";
import AdmissionsPage from "@/components/courses/AdmissionsPage";

export default function CoursesPage() {
  return (
    <div className="min-h-screen">
      <Header2 />
      <ProgramInfo />
      <StatisticsOverview />
      <Courses />
      <AdmissionsPage />
      <Footer />
    </div>
  );
}
