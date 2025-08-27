import Image from "next/image";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Semiconductor Student Internship",
    semiHeader: "ChipX Internship Program",
    learners: "2K+ Learners",
    description:
      "Gain Hands-on Experience in VLSI with EDA Tools Designed for aspiring VLSI engineers to gain real-world exposure. Focus on Physical Design Engineering with the latest industry projects. Flexible modes: Online & Hybrid options based on student location.",
    internshipStructure: [
      "Weekdays: 1-hour faculty-led classes.",
      "Weekends: Access to ChipX Lab.",
    ],
    highlights: [
      "✔ Learn from industry experts with 10+ years of experience.",
      "✔ Practical exposure to the latest VLSI design trends.",
      "✔ Opportunity to build projects for your resume & placements.",
      "✔ Hands-on training using Synopsys EDA tools.",
    ],
    tag: "Offer Letter & Joining Letter. Certificate of Completion.",
    image: "/images/hero.jpg",
  },
  {
    id: 2,
    title: "Semiconductor Student Internship",
    semiHeader: "ChipX Internship Program",
    learners: "2K+ Learners",
    description:
      "Gain Hands-on Experience in VLSI with EDA Tools Designed for aspiring VLSI engineers to gain real-world exposure. Focus on Physical Design Engineering with the latest industry projects. Flexible modes: Online & Hybrid options based on student location.",
    internshipStructure: [
      "Weekdays: 1-hour faculty-led classes.",
      "Weekends: Access to ChipX Lab.",
    ],
    highlights: [
      "✔ Learn from industry experts with 10+ years of experience.",
      "✔ Practical exposure to the latest VLSI design trends.",
      "✔ Opportunity to build projects for your resume & placements.",
      "✔ Hands-on training using Synopsys EDA tools.",
    ],
    tag: "Offer Letter & Joining Letter. Certificate of Completion.",
    image: "/images/hero.jpg",
  },
];

export default function CourseStructure() {
  return (
    <section className="bg-white py-20 relative">
      {/* Vertical line outside the cards */}
      {/* Vertical line outside the cards */}
<div className="hidden md:block absolute left-60 top-0 h-[10%] w-1 bg-gray-300 rounded-full"></div>

{/* Horizontal line outside the cards */}
<div className="hidden md:block absolute left-60 top-30 w-36 h-1 bg-gray-300 rounded-full"></div>


      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-6xl font-semibold text-gray-800">
            Dynamic Course Structure
          </h2>
          <p className="text-3xl font-bold text-gray-900 mt-2">
            <span className="text-green-700">Designed & Delivered</span> by
            Industry Experts
          </p>
        </div>

        <div className="hidden md:block absolute right-60 top-10 w-36 h-1 bg-gray-300 rounded-full"></div>

        <div className="hidden md:block absolute right-60 top-10 h-[15%] w-1 bg-gray-300 rounded-full"></div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mx-20">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#042F2E] text-white rounded-lg rounded-br-4xl overflow-hidden shadow-lg w-full h-full max-w-xl mx-auto"
            >
              {/* Image */}
              <div className="h-80 w-full relative overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Gradient Fade to blend into content */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#042F2E]/40 to-[#042F2E]" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Header + Semi-header */}
                <h3 className="text-4xl">{course.title}</h3>
                <p className="text-green-400 text-xl font-medium">
                  {course.semiHeader}
                </p>
                <p className="text-gray-300 text-sm">{course.learners}</p>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {course.description}
                </p>

                {/* Internship Structure */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Internship Structure:
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {course.internshipStructure.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">
                    Highlights:
                  </h4>
                  <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                    {course.highlights.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <span className="text-xs bg-white text-black px-3 py-1 rounded-full">
                    {course.tag}
                  </span>
                  <button className="flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                    <span>Know More</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
