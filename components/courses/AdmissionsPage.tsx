import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="py-20 bg-blue-50 flex items-center justify-center ">
      <div className="max-w-6xl w-full grid lg:grid-cols-2 gap-8 items-center">
        {/* Left Content Section */}
        <div className="space-y-6 pr-10">
          <div className="space-y-4">
            <h1 className="text-4xl  font-semibold text-gray-900 leading-tight">
              An Overview of
              <br />
              Admissions <span className="italic text-blue-800 font-light">@ ChipX</span>
            </h1>

            <p className="text-md text-gray-600 leading-relaxed">
              Watch this video to get a 360 degree understanding of the
              admissions process and what it takes to get into Mesa!
            </p>
          </div>

          {/* Notification Box */}
          <div className="bg-blue-200 p-4 rounded-lg">
            <p className="text-gray-800 font-medium">
              Admissions for our Cohort of 2025 are now open!
            </p>
          </div>

          {/* Apply Now Button */}
          <Button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 text-lg font-semibold  flex items-center gap-2">
            APPLY NOW
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Right Video Section */}
        <div className="relative">
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src="/images/hero.jpg"
              alt="Mesa Admissions Process Decoded - Video featuring three diverse students"
              className="w-full h-auto"
            />

            {/* Video Overlay Content */}
            <div className="absolute inset-0 bg-black/50 bg-opacity-40 flex flex-col justify-between p-6">
              {/* Mesa Logo */}
              <div className="flex justify-start">
                <div className="bg-white rounded px-3 py-1">
                  <span className="text-black font-bold text-sm">C</span>
                </div>
              </div>

              {/* Video Title */}
              <div className="text-white">
                <h2 className="text-2xl font-bold tracking-wide">
                 ChipX
                  <br />
                  Admission
                  <br />
                  Process <span className="font-normal">DECODED</span>
                </h2>
              </div>
            </div>

            {/* Play Button */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-white bg-opacity-20 hover:bg-opacity-30 transition-all duration-200 rounded-full p-4 border-2 border-white">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
