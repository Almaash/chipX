// import Header2 from "@/components/header2";
import Footer from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Briefcase, Award } from "lucide-react";
import Header from "@/components/header";

export default function InternshipPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Header />

      {/* Hero Section */}
<section className="relative bg-[#0a2342] text-white overflow-hidden -mt-20">
  <div className="container mx-auto px-6 py-28 flex flex-col-reverse md:flex-row items-center gap-12 max-w-7xl">
    {/* Left Content */}
    <div className="md:w-1/2 text-center md:text-left space-y-6">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-snug">
        ChipX Semiconductor Internship Program
      </h1>
      <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
        A structured, industry-focused internship designed to launch
        careers in VLSI and Physical Design Engineering.
      </p>
      <div className="mt-6 flex justify-center md:justify-start gap-4">
        <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-8 py-4 rounded-full shadow-lg transition-transform transform hover:scale-105">
          Apply Now
        </Button>
        <Button className="bg-transparent border border-white text-white hover:bg-white hover:text-[#0a2342] px-8 py-4 rounded-full transition">
          Learn More
        </Button>
      </div>
    </div>

    {/* Right Image / Illustration */}
    <div className="md:w-1/2 relative">
      {/* Tech Elements instead of bubble */}
      <div className="absolute -top-10 -right-10 w-32 h-32 border-2 border-blue-500 rounded-lg opacity-20 animate-pulse"></div>
      <div className="absolute -bottom-5 -left-5 w-24 h-24 border-2 border-blue-400 rounded-sm opacity-15 rotate-45 animate-ping"></div>
    </div>
  </div>

  {/* Background Tech Shapes */}
  <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
    <div className="absolute w-96 h-96 border-2 border-blue-700 opacity-10 rounded-lg -top-20 -left-24 rotate-12"></div>
    <div className="absolute w-72 h-72 border-2 border-blue-500 opacity-10 rounded-sm -bottom-24 -right-20 rotate-45"></div>
    <div className="absolute w-40 h-40 border-2 border-blue-400 opacity-15 rounded-full top-1/3 left-1/4 animate-ping"></div>
    <div className="absolute w-32 h-32 border-2 border-blue-600 opacity-15 rounded-lg bottom-1/4 right-1/3 animate-pulse"></div>
  </div>
</section>


      {/* Program Overview */}
      <section className="py-24 bg-gray-50 flex-1">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          {/* Program Overview */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20 w-full">
            <div className="text-center lg:text-left">
              <h2 className="font-serif text-3xl font-bold mb-6 text-[#0a2342]">
                Program Overview
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                ChipX offers a carefully curated internship program with a
                strong emphasis on Physical Design Engineering. Delivered in
                both online and hybrid formats, the program combines structured
                lectures, guided labs, and project-based learning.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                We invite motivated students with a passion for semiconductors
                to apply. Universities are encouraged to collaborate and provide
                this opportunity to their students.
              </p>
            </div>

            <Card className="shadow-lg border border-gray-200 w-full">
              <CardHeader className="bg-[#0a2342] text-white rounded-t-lg">
                <CardTitle className="font-serif text-xl">
                  Key Program Details
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-6 space-y-4 text-gray-700 text-base">
                <p>
                  <b>Start Date:</b> June 2025
                </p>
                <p>
                  <b>Mode:</b> Online & Hybrid
                </p>
                <p>
                  <b>Duration:</b> 30 days
                </p>
                <p>
                  <b>Format:</b> Weekday sessions + weekend labs
                </p>
                <p>
                  <b>Tools:</b> Industry-standard EDA software
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Why Join ChipX */}
          <div className="text-center mb-14 w-full">
            <h2 className="font-serif text-3xl font-bold text-[#0a2342]">
              Why Choose ChipX?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full text-center">
            <Card className="shadow-sm hover:shadow-md transition rounded-xl p-8">
              <GraduationCap className="mx-auto h-10 w-10 text-[#0a2342] mb-4" />
              <CardTitle className="font-serif text-[#0a2342] text-lg">
                Industry Learning
              </CardTitle>
              <CardContent className="text-gray-600 mt-3">
                Gain skills in VLSI tools and methodologies directly relevant to
                the industry.
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition rounded-xl p-8">
              <Users className="mx-auto h-10 w-10 text-[#0a2342] mb-4" />
              <CardTitle className="font-serif text-[#0a2342] text-lg">
                Expert Mentors
              </CardTitle>
              <CardContent className="text-gray-600 mt-3">
                Learn under the guidance of professionals with 10+ years of
                experience.
              </CardContent>
            </Card>

            <Card className="shadow-sm hover:shadow-md transition rounded-xl p-8">
              <Briefcase className="mx-auto h-10 w-10 text-[#0a2342] mb-4" />
              <CardTitle className="font-serif text-[#0a2342] text-lg">
                Live Projects
              </CardTitle>
              <CardContent className="text-gray-600 mt-3">
                Work on projects like Orca_top (32nm) and I2C Oscillator (14nm)
                Physical Design.
              </CardContent>
            </Card>
          </div>

          {/* Eligibility */}
          <section className="mt-24 border-t border-gray-200 pt-16 w-full text-center">
            <h2 className="font-serif text-3xl font-bold text-[#0a2342] mb-10">
              Eligibility
            </h2>
            <div className="text-gray-700 space-y-3 text-lg">
              <p>
                Open to students in BTech/BE/ME/MTech programs interested in
                VLSI.
              </p>
              <p>Minimum CGPA: 6.0 or above.</p>
              <p>Registration fee applicable. Early applications encouraged.</p>
            </div>
          </section>

          {/* Certification */}
          <section className="mt-24 border-t border-gray-200 pt-16 w-full text-center">
            <h2 className="font-serif text-3xl font-bold text-[#0a2342] mb-10">
              Certification
            </h2>
            <div className="text-gray-700 space-y-4 text-lg max-w-xl mx-auto">
              <p>Upon completion, interns will receive:</p>
              <ul className="list-disc list-inside inline-block text-left">
                <li>Official Offer Letter</li>
                <li>Completion Certificate from ChipX</li>
              </ul>
            </div>
          </section>

          {/* Partner With Us */}
          <section className="mt-24 border-t border-gray-200 pt-16 w-full text-center">
            <h2 className="font-serif text-3xl font-bold text-[#0a2342] mb-10">
              Institutional Collaboration
            </h2>
            <p className="text-gray-700 text-lg max-w-3xl mx-auto">
              Universities can collaborate with ChipX to extend this internship
              opportunity to their students — bridging the gap between academics
              and the global semiconductor industry.
            </p>
          </section>

          {/* CTA */}
          <div className="text-center mt-24 w-full">
            <Button
              size="lg"
              className="bg-[#0a2342] hover:bg-[#0d2e5c] text-white font-semibold px-12 py-5 rounded-full shadow-md transition text-lg"
            >
              Apply for Internship
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
