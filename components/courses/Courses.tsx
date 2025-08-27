"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import ProgramInfo from "./ProgramInfo";
import StatisticsOverview from "./StatisticsOverview";

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
  {
    id: 3,
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

export default function Courses() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="bg-white  relative overflow-hidden my-20">
      {/* Tech Background Symbols */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 left-5 w-32 h-32 border-2 border-blue-800 opacity-20 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute top-1/4 left-10 w-20 h-20 border-2 border-blue-700 opacity-20 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 left-5 w-24 h-24 border-2 border-blue-900 opacity-15 rounded-lg rotate-6 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-8 w-16 h-16 border-2 border-blue-700 opacity-25 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 left-10 w-12 h-12 border-2 border-blue-800 opacity-20 rounded-lg rotate-45 animate-pulse"></div>

        <div className="absolute top-20 right-5 w-28 h-28 border-2 border-blue-800 opacity-20 rounded-lg rotate-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-10 w-16 h-16 border-2 border-blue-700 opacity-20 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-5 w-24 h-24 border-2 border-blue-900 opacity-15 rounded-lg rotate-12 animate-pulse"></div>
        <div className="absolute bottom-1/4 right-8 w-20 h-20 border-2 border-blue-700 opacity-25 rounded-full animate-ping"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 border-2 border-blue-800 opacity-20 rounded-lg rotate-45 animate-pulse"></div>

        <div className="absolute w-1 h-32 bg-blue-800 opacity-20 top-1/4 left-1/2 rotate-12"></div>
        <div className="absolute w-1 h-24 bg-blue-700 opacity-20 bottom-1/3 right-1/2 rotate-45"></div>
        <div className="absolute w-1 h-20 bg-blue-900 opacity-15 top-1/2 left-1/3 rotate-30"></div>
        <div className="absolute w-1 h-28 bg-blue-800 opacity-20 bottom-1/4 right-1/4 rotate-60"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Our Courses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hands-on training programs designed to help you excel in VLSI and
            semiconductor technologies.
          </p>
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
                      className={`transition-all duration-500 ease-in-out overflow-hidden ${
                        isExpanded ? "max-h-[1000px] mt-4" : "max-h-0"
                      }`}
                    >
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-gray-900 mb-1">
                          Internship Structure
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

        {/* <div className="mt-20 text-center bg-white border border-gray-200 py-14 px-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 relative z-10">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">
            Accelerate Your Tech Career
          </h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Unlock industry-relevant courses and certifications tailored for the
            evolving semiconductor landscape. Join ChipX today to upskill and
            stay ahead in tech innovation.
          </p>
          <button className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg transition">
            Join Now
          </button>
        </div> */}
      </div>
    </section>
  );
}
