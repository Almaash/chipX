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
              Who  <span className="text-blue-700"> We Are</span>
            </h2>

            <div className="space-y-5 text-base md:text-lg leading-relaxed">
              <p>
                At <span className="font-semibold">ChipX</span>, we are redefining how engineers
                enter India’s booming semiconductor industry.
              </p>

              <p>
                Most colleges today don’t teach the practical skills that the
                industry demands—like Physical Design, VLSI workflows, and EDA
                tools. <span className="font-semibold">ChipX bridges this gap</span> with
                hands-on projects, real-world internships, and professional
                soft-skill training—everything engineers need to become
                job-ready and industry-ready.
              </p>

              <p>
                But ChipX is more than a training school—it’s a{" "}
                <span className="font-semibold">career accelerator</span>,
                guiding students from learning to placement, ensuring they are
                fully prepared to thrive in India’s multi-billion-dollar
                semiconductor ecosystem.
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
