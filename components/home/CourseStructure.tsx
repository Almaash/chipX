import Image from "next/image";
import { ArrowRight } from "lucide-react";

const courses = [
  {
    id: 1,
    title: "Semiconductor Student Internship",
    semiHeader: "ChipX Internship Program",
    learners: "2K+ Learners",
    description:
      "Gain Hands-on Experience in VLSI with EDA Tools. Designed for aspiring VLSI engineers to gain real-world exposure. Focus on Physical Design Engineering with the latest industry projects. Flexible modes: Online & Hybrid options based on student location.",
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
    tag2: "Offer Letter & Joining Letter. ",
    tag: " Certificate of Completion.",
    image: "/images/office1.jpg",
  },
  {
    id: 2,
    title: "Physical Design Engineer Program (PD Engineer)",
    semiHeader: "We make PD Engineers",
    learners: "1K+ Learners",
    description:
      "Six months of extensive Physical Design Program for college students and pass out engineers.",
    internshipStructure: [
      "Place & Route (PnR)",
      "Physical Verification (PV)",
      "Static Timing Analysis (STA) & IR drop analysis",
      "Sign-off methodologies",
      "Complete Synthesis to GDSII flow",
      "Soft Skills & Communication Skills",
    ],
    highlights: [
      "✔ Master the complete PD flow from synthesis to GDSII",
      "✔ Gain hands-on experience with real industry projects",
      "✔ Learn essential soft skills and professional communication",
    ],
    tag: "Certificate of Completion",
    image: "/images/office2.jpg",
  },
  {
    id: 3,
    title: "Personality Development & Soft Skills",
    semiHeader: "Top Non-Technical Program",
    learners: "3K+ Learners",
    description:
      "As you need to be strong technically, you also need excellent communication and personality. ChipX provides a platform with top non-technical programs for engineers and students.",
    internshipStructure: [
      "Communication Skills Training",
      "Personality Development Workshops",
      "Interview Preparation & Mock Sessions",
    ],
    highlights: [
      "✔ Improve your interpersonal communication skills",
      "✔ Develop a professional and confident personality",
      "✔ Prepare for global engineering roles",
    ],
    tag: "Certificate of Completion",
    image: "/images/office3.jpg",
  },
];

export default function CourseStructure() {
  return (
    <section className="bg-white py-20 relative">
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
            <span className="text-[#27548A]">Designed & Delivered</span> by
            Industry Experts
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mx-20">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group bg-[#27548A] text-white rounded-lg rounded-br-4xl overflow-hidden shadow-lg w-full h-full max-w-xl mx-auto"
            >
              <div className="group bg-[#27548A] text-white rounded-lg rounded-br-4xl overflow-hidden shadow-lg w-full h-full max-w-xl mx-auto flex flex-col">
                {/* Image */}
                <div className="h-80 w-full relative overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#27548A]/40 to-[#27548A]" />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-4">
                    <h3 className="text-4xl">{course.title}</h3>
                    <p className="text-blue-400 text-xl font-medium">{course.semiHeader}</p>
                    <p className="text-gray-300 text-sm">{course.learners}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{course.description}</p>

                    {/* Internship/Modules */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">
                        {course.id === 1 ? "Internship Structure:" : "Modules:"}
                      </h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        {course.internshipStructure.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Highlights:</h4>
                      <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                        {course.highlights.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer always at bottom */}
                  <div className="flex justify-between items-end mt-4">
                    <div className="flex flex-col space-y-2">
                      {course.tag2 &&
                        <span className="text-xs bg-white text-black px-3 py-1 rounded-full">{course.tag2}</span>}
                      <span className="text-xs bg-white text-black px-3 py-1 rounded-full">{course.tag}</span>
                    </div>
                    <button className="flex items-end justify-end space-x-2 bg-black text-xs text-white px-4 py-2 rounded-full hover:bg-green-700 transition">
                      <span>Know More</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
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
