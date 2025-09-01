"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <header className="relative overflow-hidden -mt-20 bg-gradient-to-br from-[#0b1f3a] via-[#122d52] to-[#1d4073]">
      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-12 lg:px-20 py-20 md:py-32 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold leading-snug text-white">
            ChipX
            <br />
            Launch Your
            <br />
            Semiconductor Career
          </h1>
          <p className="mt-4 max-w-md text-slate-200 text-base md:text-lg leading-relaxed">
            A comprehensive, mentor-led path with hands-on labs, expert lectures, and real projects 
            to kickstart your semiconductor journey.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button className="bg-[#2f6fed] hover:bg-[#265dcc] text-sm md:text-base px-5 py-2 md:px-6 md:py-3">
              Learn More
            </Button>
            <Button
              className="border border-slate-400/30 bg-transparent text-white hover:bg-white/10 text-sm md:text-base px-5 py-2 md:px-6 md:py-3"
              variant="secondary"
            >
              Explore Tracks
            </Button>
          </div>
          <div className="mt-4 inline-flex items-center gap-2 text-xs md:text-sm text-slate-300">
            <Sparkles className="h-4 w-4 text-[#2f6fed]" />
            New cohort starting soon
          </div>
        </div>

        {/* Right Side - Video in Card */}
        <div className="relative rounded-xl overflow-hidden shadow-lg ring-1 ring-white/20">
          <video
            className="h-full w-full object-cover"
            src="/videos/CourseVideo.mp4"
            autoPlay
            muted
            loop
            playsInline
          />
          {/* Overlay gradient for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/50 via-transparent"></div>
        </div>
      </div>

      {/* Bottom Curve Transition - Smooth Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 280"
          className="block w-full"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,160 C360,280 1080,40 1440,200 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>
    </header>
  )
}
