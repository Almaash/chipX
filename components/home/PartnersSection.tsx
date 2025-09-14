"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const companyLogos = [
  { name: "Infineon", logo: "/images/infineon.png" },
  { name: "Intel", logo: "/images/intel.png" },
  { name: "Mediateck", logo: "/images/mediateck.png" },
  { name: "NXP", logo: "/images/nxp.png" },
  { name: "Qualcom", logo: "/images/qualcom.png" },
  { name: "Texas", logo: "/images/texas.png" },
]

export default function PartnersSection() {
  return (
    <section className="py-20 px-4 sm:px-8 lg:px-16 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-6 text-left px-2 sm:px-4 lg:px-0">
            <h1 className="text-2xl sm:text-3xl lg:text-3xl font-bold text-gray-900 leading-snug">
              India’s First Dedicated School <br /> for the Semiconductor Industry
            </h1>

            <p className="text-sm sm:text-base text-green-600 font-semibold">
              Launch your career in the{" "}
              <span className="font-bold">$1T global semiconductor market</span> with ChipX.
            </p>

            <p className="text-xs sm:text-sm text-gray-700">
              We don’t just train engineers —{" "}
              <strong>we prepare future leaders of VLSI</strong>.
            </p>

            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">
              <li>✅ PG Programs in Semiconductor (Physical Design & Beyond) — Built for job-ready skills</li>
              <li>✅ Practical Training & Internships — Accepted by leading semiconductor giants</li>
              <li>✅ Industry-Ready Curriculum — Designed by engineers from IEEE-ASME & global semicon leaders</li>
            </ul>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-md">
              🌐 With <span className="font-bold text-gray-900">ChipX</span>, you gain the skills, projects, and confidence to step into companies like{" "}
              <strong>Synopsys, Cadence, Intel, Qualcomm</strong>, and more.
            </p>

            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-5 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium shadow-md"
              size="sm"
            >
              👉 Explore Programs
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <p className="text-gray-300 text-[10px] sm:text-xs">
              * Logos are the trademarks of the respective organizations.
            </p>
          </div>

          {/* Right Side - Animated Company Logos */}
          <div className="relative h-[320px] sm:h-[420px] lg:h-[500px] overflow-hidden mt-10 lg:mt-0 px-2 sm:px-4 lg:px-0">
            <div className="flex justify-center gap-4 h-full lg:block">
              {/* First Column */}
              <div className="lg:absolute lg:left-0 w-1/2 h-full">
                <div className="scroll-up space-y-4 sm:space-y-6">
                  {[...companyLogos, ...companyLogos].map((company, index) => (
                    <div
                      key={`col1-${index}`}
                      className="bg-white rounded-full p-3 sm:p-4 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 mx-auto"
                      style={{
                        width: "120px",
                        height: "120px",
                        maxWidth: "140px",
                        maxHeight: "140px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Second Column */}
              <div className="lg:absolute lg:right-0 w-1/2 h-full">
                <div className="scroll-up-delayed space-y-4 sm:space-y-6 lg:mt-[40px]">
                  {[...companyLogos, ...companyLogos].map((company, index) => (
                    <div
                      key={`col2-${index}`}
                      className="bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105 mx-auto"
                      style={{
                        width: "90px",
                        height: "90px",
                        maxWidth: "110px",
                        maxHeight: "110px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <img
                        src={company.logo || "/placeholder.svg"}
                        alt={`${company.name} logo`}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Gradient Overlays */}
            <div className="hidden lg:block absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
            <div className="hidden lg:block absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
