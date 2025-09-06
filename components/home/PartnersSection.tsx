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
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl  font-extrabold text-gray-900 leading-tight">
              India&apos;s First Dedicated School <br /> for Semiconductor Industry
            </h1>

            <p className="text-xl text-green-600 font-semibold">
              Start your career in Semiconductor Industry
            </p>

            <ul className="space-y-3 text-lg text-gray-700">
              <li>✅ Job Oriented Programs</li>
              <li>✅ Practical VLSI & Embedded Training</li>
              <li>✅ Industry-Ready Curriculum</li>
            </ul>

            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
              Below are the Semiconductor Companies you can enter with <span className="font-bold text-gray-900">ChipX</span>.
            </p>

            <Button
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-6 text-lg rounded-full font-medium shadow-md"
              size="lg"
            >
              Explore Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-gray-300">* Logos are the trademarks of the respective organizations.</p>
          </div>

          {/* Right Side - Animated Company Logos */}
          <div className="relative h-[600px] overflow-hidden">
            {/* First Column */}
            <div className="absolute left-0 w-1/2 h-full">
              <div className="scroll-up space-y-8">
                {[...companyLogos, ...companyLogos].map((company, index) => (
                  <div
                    key={`col1-${index}`}
                    className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 mx-4"
                    style={{
                      width: "140px",
                      height: "140px",
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
            <div className="absolute right-0 w-1/2 h-full">
              <div className="scroll-up-delayed space-y-8" style={{ marginTop: "100px" }}>
                {[...companyLogos, ...companyLogos].map((company, index) => (
                  <div
                    key={`col2-${index}`}
                    className="bg-white rounded-full p-6 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105 mx-4"
                    style={{
                      width: "140px",
                      height: "140px",
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

            {/* Gradient Overlays */}
            <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-50 to-transparent z-10"></div>
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
