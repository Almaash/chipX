import { Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  return (
    <section className="relative py-20 px-6 ">
      <div className="max-w-5xl mx-auto">
        {/* Card with angled + curved bottom */}
        <div
          className="bg-gray-200 text-gray-800 shadow-2xl relative overflow-hidden"
          style={{
            borderTopLeftRadius: "1rem",
            borderTopRightRadius: "1rem",
            clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
          }}
        >
          {/* Content */}
          <div className="p-10 md:p-14">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              About <span className="text-blue-700">Us</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed">
              <p>
                At <span className="font-semibold">ChipX Semiconductor School</span>, we are creating a new pathway for engineers 
                to enter India’s fast-growing semiconductor industry.
              </p>

              <p>
                Today, most educational institutions don’t teach critical skills like Physical Design, EDA tools, 
                and VLSI workflows. ChipX bridges this gap by providing industry-level training, hands-on projects, 
                internships, and soft-skill development — everything an engineer needs to become job-ready.
              </p>

              <p>
                But ChipX is more than a skill & training program. It’s a career accelerator that partners with 
                students from learning to placement, ensuring they are prepared to thrive in the billion dollar 
                semiconductor opportunity in India.
              </p>
            </div>

            {/* LinkedIn button */}
            <div className="mt-8 flex items-center gap-3">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white">
                  <Linkedin className="w-6 h-6" />
                </div>
                {/* <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-5 py-2"
                >
                  Connect with Us
                </Button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
