"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <header className="relative overflow-hidden -mt-20 min-h-[32rem] sm:min-h-[36rem] md:min-h-[40rem] lg:min-h-[42rem] flex items-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover transform scale-125 sm:scale-110 transition-transform duration-700"
        src="/videos/InternshipVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0b1f3a]/80"></div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 z-10">
        <h1
          className={cn(
            "text-pretty font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
          )}
        >
          ChipX
          <br />
          Semiconductor Internship
        </h1>

        <p className="mt-4 max-w-2xl text-slate-200 text-sm sm:text-base md:text-lg">
          India’s First Industry-Integrated Semiconductor Internship.
          <br />
          The ChipX Internship is your gateway into the VLSI world. Designed for
          college students, fresh graduates, and early-career engineers, this
          program blends classroom learning, labs, and real-world projects to
          make you industry-ready.
        </p>

        <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3">

          <a
            href="https://luma.com/dztcpcy6"
            target="_blank"
            rel="noopener noreferrer"
          >


            <Button className="bg-[#2f6fed] hover:bg-[#265dcc] px-5 sm:px-6 cursor-pointer" size="lg">
              Apply Now
            </Button>
          </a>
          {/* <Button
            className="border border-slate-400/30 bg-transparent text-white hover:bg-white/10 px-5 sm:px-6"
            size="lg"
            variant="secondary"
          >
            Learn More
          </Button> */}
          <span className="mt-2 sm:mt-0 sm:ml-2 inline-flex items-center gap-2 text-xs sm:text-sm text-slate-300">
            <Sparkles className="h-4 w-4 text-[#2f6fed]" />
            Applications for 2025 &amp; 26 Internships are now open!
          </span>
        </div>
      </div>

      {/* Layered Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block w-full h-16 sm:h-24 md:h-32 lg:h-40"
          preserveAspectRatio="none"
        >
          {/* Back wave (darker overlay) */}
          <path
            fill="#0b1f3a"
            fillOpacity="0.9"
            d="M0,224L60,218.7C120,213,240,203,360,192C480,181,600,171,720,186.7C840,203,960,245,1080,240C1200,235,1320,181,1380,154.7L1440,128V320H0Z"
          ></path>
          {/* Front wave (white transition) */}
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L80,282.7C160,277,320,267,480,261.3C640,256,800,256,960,261.3C1120,267,1280,277,1360,282.7L1440,288V320H0Z"
          ></path>
        </svg>
      </div>
    </header>
  )
}
