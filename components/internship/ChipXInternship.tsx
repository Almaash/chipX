"use client"

import { Button } from "@/components/ui/button"
import {
  Check,
  BookOpen,
  Layers,
  Cpu,
  CircuitBoard,
  Network,
  Hammer,
} from "lucide-react"

export default function ChipXInternship() {
  const phases = [
    {
      icon: BookOpen,
      title: "Phase 1: Foundations",
      desc: "Intro to VLSI & Physical Design, Input Files & Tools",
    },
    {
      icon: Layers,
      title: "Phase 2: Synthesis",
      desc: "Logic Synthesis & Pre-STA",
    },
    {
      icon: Cpu,
      title: "Phase 3: Floorplanning & Power Planning",
      desc: "Floorplan & Powerplan Integration",
    },
    {
      icon: CircuitBoard,
      title: "Phase 4: Placement & CTS",
      desc: "Placement Optimization & Clock Tree Synthesis (CTS)",
    },
    {
      icon: Network,
      title: "Phase 5: Routing & Signoff",
      desc: "Routing & Signoff",
    },
    {
      icon: Hammer,
      title: "Phase 6: Capstone Project",
      desc: "Industry Simulation Project",
    },
  ]

  const benefits = [
    "100% Industry Training",
    "Hands-on with Industry EDA Tools",
    "Real-World Internship Projects",
    "Career Mentorship & Soft Skills",
  ]

  return (
    <section className="relative w-full max-w-full mx-auto px-6 py-12 space-y-16 bg-gradient-to-b from-gray-50 via-blue-50 to-gray-100 overflow-hidden">
      {/* Header */}
      <div className="text-center space-y-3">
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-900">
          ChipX{" "}
          <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 relative inline-block ">
            Internship Journey
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400/70 rounded-full translate-y-2"></span>
          </span>
        </h1>
        <p className="text-lg text-gray-700">Inside the ChipX Campus & Beyond</p>
        <p className="text-base font-medium text-blue-800">
          India’s First Dedicated Semiconductor Career School
        </p>
      </div>

      {/* Highlights */}
      <div className="relative bg-white border border-blue-200 shadow-lg rounded-2xl p-10 max-w-5xl mx-auto">
        <div className="space-y-6 text-center">
          <h3 className="text-2xl font-semibold text-gray-900">
            The Future of Semiconductors
          </h3>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            India’s semiconductor sector is poised for exponential growth. At ChipX,
            we prepare you with the tools, training, and experience to be part of this
            revolution.
          </p>

          <ul className="grid gap-4 sm:grid-cols-3 text-left text-gray-800 max-w-3xl mx-auto">
            <li className="flex items-start gap-3 bg-blue-50 border border-blue-100 p-4 rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                1
              </div>
              <span>
                <strong>$5Bn+ Opportunity:</strong> India needs{" "}
                <span className="text-blue-700 font-medium">50,000+ engineers</span>{" "}
                by 2030.
              </span>
            </li>
            <li className="flex items-start gap-3 bg-blue-50 border border-blue-100 p-4 rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                2
              </div>
              <span>
                <strong>Career Ready:</strong> ChipX equips you with{" "}
                <span className="text-blue-700 font-medium">industry skills</span> and
                mentorship.
              </span>
            </li>
            <li className="flex items-start gap-3 bg-blue-50 border border-blue-100 p-4 rounded-xl">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-bold">
                3
              </div>
              <span>
                <strong>Expert Training:</strong> Learn with{" "}
                <span className="text-blue-700 font-medium">Synopsys EDA tools</span>{" "}
                and top professionals.
              </span>
            </li>
          </ul>

          <Button className="mt-8 px-10 py-3 text-lg font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 shadow-md">
            Download Brochure
          </Button>
        </div>
      </div>


      {/* Phases */}
      <div className="space-y-10">
        <h2 className="text-2xl font-semibold text-center text-gray-900">
          Your{" "}
          <span className="italic text-blue-700 relative inline-block">
            Internship Journey
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400/70 rounded-full translate-y-2"></span>
          </span>
        </h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-blue-300"></div>

          <div className="space-y-8">
            {phases.map((phase, i) => (
              <div
                key={i}
                className="relative flex items-start gap-4 pl-12 group"
              >
                {/* Step icon */}
                <div className="absolute left-0 flex items-center justify-center w-9 h-9 rounded-full bg-blue-200 border-2 border-blue-400 group-hover:scale-110 transition-transform">
                  <phase.icon className="h-5 w-5 text-blue-700" />
                </div>

                {/* Card content */}
                <div className="bg-gray-50 border border-blue-200 shadow-sm rounded-xl p-6 w-full hover:shadow-md transition">
                  <h3 className="font-medium text-blue-800 text-lg">
                    {phase.title}
                  </h3>
                  <p className="text-base text-gray-700 mt-1">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why ChipX */}
      <div className="bg-gradient-to-br from-blue-100 via-gray-50 to-blue-200 p-8 rounded-xl shadow-md border border-blue-300 max-w-4xl mx-auto">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-900">
          Why{" "}
          <span className="italic bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-600 relative inline-block">
            ChipX?
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400/70 rounded-full translate-y-2"></span>
          </span>
        </h2>

        <ul className="grid gap-4 sm:grid-cols-2 max-w-2xl mx-auto text-lg text-gray-800">
          {benefits.map((b, i) => (
            <li
              key={i}
              className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition border border-blue-200"
            >
              <div className="flex-shrink-0 rounded-full bg-blue-200 p-2">
                <Check className="h-5 w-5 text-blue-700" />
              </div>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Call to Action */}
      <div className="text-center space-y-3">
        <Button
          size="lg"
          className="px-10 py-3 text-lg font-semibold rounded-full border-2 border-indigo-600 text-indigo-600 bg-transparent hover:bg-indigo-600 hover:text-white transition-colors duration-300"
        >
          Apply Now
        </Button>
      </div>


      {/* Curve at bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[100px]"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path
            d="M985.66 92.83C906.67 72 823.34 52 739.65 53.33 657.66 54.63 575.67 77.13 493.67 89.6c-82 12.53-164 15.07-246-3.6C165.67 67.33 82.83 33.67 0 0v120h1200V0c-71.93 29.67-148 59.33-214.34 92.83z"
            fill="white"
          ></path>
        </svg>
      </div>
    </section>
  )
}
