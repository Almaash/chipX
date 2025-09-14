"use client"

import {
  BookOpen,
  Cpu,
  Layers,
  CircuitBoard,
  Network,
  Hammer,
  FileCode,
  Terminal,
  GitBranch,
  ClipboardCheck,
  Briefcase,
} from "lucide-react"

export function PhysicalDesignJourney() {
  const phases = [
    {
      icon: BookOpen,
      title: "Phase 1: Foundations",
      desc: "Digital Electronics, VLSI CMOS & Network Theory, Basics of Physical Verification",
    },
    {
      icon: Layers,
      title: "Phase 2: Core Engineering Tools",
      desc: "Static Timing Analysis (STA Engineering), Linux for VLSI",
    },
    {
      icon: FileCode,
      title: "Phase 3: Design Languages",
      desc: "Verilog for Logic Design, Tcl for Automation",
    },
    {
      icon: Cpu,
      title: "Phase 4: Entry to Backend Flow",
      desc: "Input Files in PD, Logic Synthesis",
    },
    {
      icon: CircuitBoard,
      title: "Phase 5 – Phase 18: The Physical Design Flow",
      desc: "Floorplanning & Power Planning, Placement Optimization, Clock Tree Synthesis (CTS), Routing & ECO (Engineering Change Orders), Signoff Methodologies",
    },
    {
      icon: Network,
      title: "Phase 18 – Phase 24: Advanced Physical Verification",
      desc: "Full-Time Physical Verification Practice, Advanced Design Rule Checks (DRC), Layout vs. Schematic (LVS)",
    },
    {
      icon: Hammer,
      title: "Phase 24 Onwards: Career Prep & Industry Readiness",
      desc: "Mock Industry Projects, Resume & Portfolio Building, Semiconductor Industry Interviews & Placement Preparation",
    },
    {
      icon: Briefcase,
      title: "Outcome",
      desc: "By the end of the journey, ChipX engineers are interview-ready, tool-ready, and project-ready to contribute to India’s growing $5Bn+ semiconductor ecosystem.",
    },
  ]

  return (
    <section className="space-y-12 py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900">
        ChipX{" "}
        <span className="italic text-blue-700 relative inline-block">
          Physical Design Journey
          <span className="absolute left-0 bottom-0 w-full h-[2px] bg-blue-400/70 rounded-full translate-y-2"></span>
        </span>
      </h2>

      <p className="max-w-3xl mx-auto text-center text-gray-600 leading-relaxed">
        At ChipX, every learner follows a structured, industry-grade journey —
        designed to transform fresh graduates into industry-ready Physical
        Design Engineers.
      </p>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical timeline line */}
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
    </section>
  )
}
