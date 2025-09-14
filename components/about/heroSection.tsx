import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-[#0b1f3a] via-[#122d52] to-[#1d4073] text-white relative overflow-hidden -mt-20">
      {/* Tech-Style Background Elements */}
      <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 border-2 border-blue-500 rounded-lg opacity-20 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 border-2 border-blue-400 rounded-full opacity-15 animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-28 h-28 sm:w-36 sm:h-36 lg:w-48 lg:h-48 border-2 border-blue-600 opacity-10 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 border-2 border-blue-500 rounded-sm opacity-20 animate-ping"></div>
      <div className="absolute top-1/3 left-1/2 w-10 h-10 sm:w-12 sm:h-12 lg:w-16 lg:h-16 border-2 border-blue-300 rounded-full opacity-25 animate-spin-slow"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-16 sm:py-20 lg:py-30 px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Left Side - Text */}
        <div className="flex-1 mb-10 md:mb-0 md:pr-8 lg:pr-12 text-center md:text-left pt-20 sm:pt-10">
          {/* Biggest text */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4">
            About ChipX – <br /> India’s First Dedicated Semiconductor School
          </h1>

          {/* Medium text */}
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 sm:mb-3">
            No.1 in VLSI & Embedded Systems Training
          </h2>


        </div>


        {/* Right Side - Image (smaller on small screens) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/loogo_2.png"
              alt="CEO Video Thumbnail"
              className="w-32 h-28 sm:w-48 sm:h-40 md:w-64 md:h-48 lg:w-full lg:max-w-sm lg:h-56 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] sm:h-[100px] lg:h-[120px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,96L60,85.3C120,75,240,53,360,42.7C480,32,600,32,720,42.7C840,53,960,75,1080,85.3C1200,96,1320,96,1380,96L1440,96L1440,120L1380,120C1320,120,1200,120,1080,120C960,120,840,120,720,120C600,120,480,120,360,120C240,120,120,120,60,120L0,120Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </section>
  );
}
