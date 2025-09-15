import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Semiconductor Internship by ChipX",
    semiHeader: "ChipX Internship Program",
    learners: "2,000+ Learners | Duration: 30 Days – 6 Months | Online & Hybrid",
    description:
      "Kickstart your semiconductor journey with hands-on Physical Design training using industry EDA tools. Designed for college students, early-career engineers, and aspiring VLSI professionals, this internship bridges the gap between academics and industry.",
    internshipStructure: [
      "Weekdays: 1-hour expert-led sessions",
      "Weekends: Access to ChipX Industry Labs & Projects",
    ],
    highlights: [
      "✔ Learn directly from semiconductor professionals with 10+ years’ experience",
      "✔ Work on real-world projects mirroring the latest industry practices",
      "✔ Gain resume-worthy projects & placement-ready experience",
      "✔ Training with Synopsys, Cadence & Siemens EDA tools",
    ],
    tag2: "📄 Offer Letter + Completion Certificate",
    tag: "Step into the global semiconductor ecosystem",
    image: "/images/office1.jpg",
    link: "https://luma.com/dztcpcy6",
  },
  {
    id: 2,
    title:
      "PG Program in Semiconductor – Specialisation in Physical Design (PD Engineer)",
    semiHeader: "We make PD Engineers",
    learners:
      "Six-Month Career-Defining Program | For Students, Graduates & Engineers",
    description:
      "A six-month, career-defining program designed for college students, fresh graduates, and early-career engineers to specialise in Physical Design — the most in-demand domain in the global VLSI industry.",
    internshipStructure: [
      "Place & Route (PnR)",
      "Physical Verification (PV)",
      "Static Timing Analysis (STA) & IR Drop Analysis",
      "Sign-off Methodologies",
      "Complete RTL to GDSII Flow",
      "Semiconductor Soft Skills & Communication Skills",
    ],
    highlights: [
      "✔ Master the complete PD flow from Synthesis to GDSII",
      "✔ Gain hands-on experience with real industry projects at advanced nodes (14nm, 7nm, 4nm)",
      "✔ Build professional communication & interview-ready soft skills for semiconductor careers",
    ],
    tag2: "Offer Letter + Completion Certificate + Experience Letter",
    tag: "Globally Competitive Semiconductor Engineer",
    image: "/images/office2.jpg",
    link: "https://luma.com/dztcpcy6",
  },
  {
    id: 3,
    title: "Semiconductor Soft Skills & Personality Development",
    semiHeader: "Top Non-Technical Program",
    learners: "3,000+ Learners | 4–6 Weeks | Online & Hybrid",
    description:
      "In VLSI, technical expertise alone isn’t enough. After joining global semiconductor giants, you also need strong communication, confidence, and presence to grow in your career. This program is built for early-career engineers, college students, managers, and future leaders who want to stand out beyond their technical skills.",
    internshipStructure: [
      "Communication Skills Training",
      "Personality Development Workshops",
      "Interview Preparation & Mock Sessions with VLSI leaders",
    ],
    highlights: [
      "✔ Master interpersonal & presentation skills",
      "✔ Build a confident, professional personality",
      "✔ Get interview-ready for global engineering careers",
    ],
    tag: "Completion Certificate",
    image: "/images/office3.jpg",
    link: "/contact",
  },
];

export default function CourseStructure() {
  return (
    <section className="bg-white py-16 md:py-20 relative px-4 sm:px-6 lg:px-12">
      {/* Vertical line outside the cards (desktop only) */}
      <div className="hidden md:block absolute left-16 lg:left-60 top-0 h-[9.2%] w-1 bg-gray-300 rounded-full"></div>

      {/* Horizontal line outside the cards (desktop only) */}
      <div className="hidden md:block absolute left-16 lg:left-60 top-32 w-24 lg:w-36 h-1 bg-gray-300 rounded-full"></div>

      <div className="container mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16 px-2 sm:px-4">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold text-gray-800">
            Dynamic Course Structure
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mt-2">
            <span className="text-[#27548A]">Designed & Delivered</span> by
            Industry Experts
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 px-2 sm:px-4 md:px-6 lg:px-10">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#27548A] text-white rounded-lg rounded-br-4xl overflow-hidden shadow-lg w-full"
            >
              <div className="flex flex-col h-full">
                {/* Image */}
                <div className="h-64 sm:h-72 md:h-80 w-full relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#27548A]/40 to-[#27548A]" />
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-3 sm:space-y-4">
                    <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold">
                      {course.title}
                    </h3>
                    <p className="text-blue-400 text-sm sm:text-base font-medium">
                      {course.semiHeader}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm">
                      {course.learners}
                    </p>
                    <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                      {course.description}
                    </p>

                    {/* Internship/Modules */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">
                        {course.id === 1 ? "Structure:" : "Modules:"}
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm space-y-1">
                        {course.internshipStructure.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white mb-1 sm:mb-2">
                        Highlights:
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-xs sm:text-sm space-y-1">
                        {course.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="w-full flex flex-col  justify-between items-start sm:items-end mt-4 space-y-2 sm:space-y-0 sm:space-x-2 w-full">
                    <div className="flex flex-col space-y-2 w-full pl-3">
                      {course.tag2 && (
                        <span className="text-xs bg-white text-black px-3 py-1 rounded-full">
                          {course.tag2}
                        </span>
                      )}
                      <span className="text-xs bg-white text-black px-3 py-1 rounded-full">
                        {course.tag}
                      </span>
                    </div>
                    <Link
                      href={course.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center space-x-2 bg-black text-xs sm:text-sm text-white px-4 py-2 rounded-full hover:bg-green-700 transition mt-2 w-full"
                    >
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                    </Link>

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
