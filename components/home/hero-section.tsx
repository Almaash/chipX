import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[750px] max-lg:min-h-[650px] flex items-center justify-center overflow-hidden -mt-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-115 max-lg:scale-105 transition-transform duration-[6000ms] ease-in-out"
        >
          <source src="/videos/ContactusPageVideo.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-[#0A192F]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-lg:px-6 text-start text-white max-sm:pt-10">
        <div className="max-w-7xl mx-auto">
          {/* <h1 className="text-xl max-lg:text-lg font-bold mb-6 text-[#38BDF8]">
            India&apos;s First VLSI Focused School
          </h1> */}

          <h2 className="text-4xl max-lg:text-3xl md:text-5xl font-extrabold mb-8 text-white">
            ChipX - <span className="text-[#38BDF8]">India&apos;s First VLSI Focused School</span>
          </h2>

          <div className="mb-8">
            <p className="text-lg max-lg:text-base md:text-xl mb-4 text-gray-200">
              Empowering the next generation of chip designers, <br /> innovators & semiconductor leaders.
            </p>
            <p className="text-lg max-lg:text-base md:text-xl text-gray-300">
              PG Program in Semiconductor – Specialization in Physical Design <br />
              Intensive 6-Month Training + Real-World Internship
            </p>
          </div>

          <div className="mb-8">
            <p className="text-lg max-lg:text-base md:text-xl text-gray-200">
             Built by Engineers from <br />
              <span className="text-[#38BDF8] font-semibold">
               IEEE–ASME New York
              </span>&  Global Semiconductor Leaders

            </p>
          </div>

          <Button
            size="lg"
            className="bg-[#38BDF8] text-white hover:bg-[#38BDF8]/90 px-8 max-lg:px-6 py-3 max-lg:py-2 text-lg max-lg:text-base font-semibold rounded-lg shadow-lg transition"
          >
            Apply Now →
          </Button>
          <p className="text-gray-400 text-sm pt-10">*Note learn more goes to about us page</p>
        </div>
      </div>

      {/* Bottom wavy SVG */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-32 max-lg:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,60 900,0 1200,60 L1200,120 L0,120 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
