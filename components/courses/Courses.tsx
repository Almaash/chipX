"use client";

import { useState } from "react";
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

export default function Courses() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white relative overflow-hidden my-20">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Semiconductor Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Physical Design Engineer Program <br />
              Master PD with ChipX and unlock cutting-edge skills for a future in
              advanced VLSI innovation.
            </p>
          </div>
        </div>


        <div className="flex flex-col space-y-8 mx-5">
          {courses.map((course) => {
            const isExpanded = expandedId === course.id;
            return (
              <div
                key={course.id}
                className="group bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col md:flex-row w-full max-w-7xl mx-auto relative z-10"
              >
                <div className="relative w-full md:w-1/3 h-56 md:h-auto overflow-hidden">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 md:w-2/3 space-y-3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {course.title}
                    </h3>
                    <p className="text-blue-600 text-sm font-medium uppercase tracking-wide">
                      {course.semiHeader}
                    </p>
                    <p className="text-gray-500 text-sm">{course.learners}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mt-2">
                      {course.description}
                    </p>

                    <div
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? "max-h-[1000px] mt-4" : "max-h-0"
                        }`}
                    >
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">
                          Internship Structure / Modules
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          {course.internshipStructure.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">
                          Highlights
                        </h4>
                        <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                          {course.highlights.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </div>
                      <button className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition mt-5 cursor-pointer">
                        <span>Apply Now</span>
                      </button>
                    </div>
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      onClick={() => toggleExpand(course.id)}
                      className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium shadow-md hover:bg-blue-700 transition cursor-pointer"
                    >
                      <span>{isExpanded ? "Show Less" : "Know More"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
