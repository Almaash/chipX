import { Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-[#0A192F] text-white relative overflow-hidden -mt-20">
      {/* Tech-Style Background Elements */}
      <div className="absolute -top-10 -left-10 w-40 h-40 border-2 border-blue-500 rounded-lg opacity-20 animate-pulse"></div>
      <div className="absolute top-1/4 right-1/4 w-32 h-32 border-2 border-blue-400 rounded-full opacity-15 animate-ping"></div>
      <div className="absolute bottom-10 left-1/3 w-48 h-48 border-2 border-blue-600 opacity-10 rotate-45 animate-pulse"></div>
      <div className="absolute bottom-20 right-1/4 w-24 h-24 border-2 border-blue-500 rounded-sm opacity-20 animate-ping"></div>
      <div className="absolute top-1/3 left-1/2 w-16 h-16 border-2 border-blue-300 rounded-full opacity-25 animate-spin-slow"></div>

      {/* Content */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-30 px-6 relative z-10">
        
        {/* Left Side - Text */}
        <div className="flex-1 mb-10 md:mb-0 md:pr-12">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <h2 className="text-3xl font-semibold">
            No.1 in VLSI & Embedded Systems Training
          </h2>
        </div>

        {/* Right Side - Just Image */}
        <div className="flex-1 flex justify-center md:justify-end">
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/loogo_2.png"
              alt="CEO Video Thumbnail"
              className="w-full max-w-sm h-56 object-cover rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[120px]"
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
  )
}
