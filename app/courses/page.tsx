import Footer from "@/components/footer";

import Header2 from "@/components/header2";
import Courses from "@/components/courses/Courses";
import ProgramInfo from "@/components/courses/ProgramInfo";
import StatisticsOverview from "@/components/courses/StatisticsOverview";
import AdmissionsPage from "@/components/courses/AdmissionsPage";
import { Hero } from "@/components/courses/Hero";
import Header from "@/components/header";
import { CourseDetails } from "@/components/courses/CourseDetails";
import { PhysicalDesignJourney } from "@/components/courses/PhysicalDesignJourney";
import { CertificationCourseTimeline } from "@/components/courses/certification-course-timeline";
import JourneyWithCourseApplication from "@/components/courses/JourneyWithCourseApplication";

export default function CoursesPage() {
  return (
    <div className="min-h-screen ">
      <Header />
      <Hero />
      <ProgramInfo />
      <StatisticsOverview />
      <CourseDetails />
      <PhysicalDesignJourney />
      <CertificationCourseTimeline />
      <JourneyWithCourseApplication />
      <Courses />
      <AdmissionsPage />
      <Footer />
    </div>
  );
}
