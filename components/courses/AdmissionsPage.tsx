import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="py-12 sm:py-16 bg-blue-50 flex justify-center px-4 sm:px-6 lg:px-20"> {/* added lg:px-20 */}
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left Content Section */}
        <div className="space-y-5 text-center lg:text-left lg:pr-8"> {/* left padding on lg */}
          <div className="space-y-3">
            <h1 className="text-xl sm:text-2xl lg:text-lg xl:text-3xl font-semibold text-gray-900 leading-snug lg:leading-snug">
              Accelerate Your <br className="hidden sm:block" /> Semiconductor Career{" "}
              <span className="italic text-blue-800 font-light">@ ChipX</span>
            </h1>

            <p className="text-xs sm:text-sm lg:text-xs xl:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              ChipX PG Program is more than a course. It’s a launchpad into the
              semiconductor industry.
            </p>
            <p className="text-xs sm:text-sm lg:text-xs xl:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              With our industry-validated curriculum, mentorship from global experts,
              and direct exposure to real projects, you’ll graduate job-ready to join
              companies like <span className="font-semibold">Intel, Qualcomm, Synopsys, Samsung,</span> and{" "}
              <span className="font-semibold">MediaTek</span>.
            </p>
            <p className="text-xs sm:text-sm lg:text-xs xl:text-base text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Upskill. Build. Lead the future of semiconductors with ChipX.
            </p>
          </div>

          {/* Notification Box */}
          <div className="bg-blue-200 p-2 sm:p-3 rounded-lg max-w-md mx-auto lg:mx-0">
            <p className="text-gray-800 text-xs sm:text-sm lg:text-xs xl:text-sm font-medium">
              Applications now open for <span className="font-semibold">April 2026</span> — 
              Selection through Screening & Interview only.
            </p>
          </div>

          {/* Apply Now Button */}
          <div>
            <Button className="bg-gray-800 hover:bg-gray-700 text-white px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base lg:text-xs xl:text-sm font-semibold flex items-center gap-2 mx-auto lg:mx-0">
              APPLY NOW
              <ArrowRight className="w-4 h-4 sm:w-4 sm:h-4" />
            </Button>
          </div>
        </div>

        {/* Right Video Section */}
        <div className="relative w-full max-w-lg lg:max-w-md xl:max-w-lg mx-auto lg:mx-0"> {/* shrink image on lg */}
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/images/office.jpg"
              alt="ChipX Admissions Overview"
              className="w-full h-auto object-cover"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-between p-3 sm:p-4">
              {/* ChipX Logo */}
              <div className="flex justify-start">
                <div className="bg-white rounded px-2 py-1 sm:px-3">
                  <span className="text-black font-bold text-xs sm:text-sm lg:text-xs xl:text-sm">
                    C
                  </span>
                </div>
              </div>

              {/* Video Title */}
              <div className="text-white">
                <h2 className="text-sm sm:text-base lg:text-xs xl:text-lg font-bold tracking-wide leading-snug">
                  ChipX
                  <br />
                  Admission
                  <br />
                  Now <span className="font-normal">OPEN</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
