"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Sparkles } from "lucide-react"

export function Hero() {
  return (
    <header className="relative overflow-hidden -mt-20 h-[38rem]">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/videos/InternshipVideo.mp4" // <-- replace with your video file path
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark overlay to improve text readability */}
      <div className="absolute inset-0 bg-[#0b1f3a]/80"></div>

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl py-30 z-10">
        <h1
          className={cn(
            "text-pretty font-sans text-4xl font-extrabold leading-tight text-white md:text-5xl"
          )}
        >
          ChipX
          <br />
          Launch Your Semiconductor
          <br />
          Career Program
        </h1>
        <p className="mt-4 max-w-xl text-slate-200">
          A comprehensive, mentor-led path with hands-on labs, expert lectures, and real projects to
          kickstart your semiconductor journey.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Button className="bg-[#2f6fed] hover:bg-[#265dcc]" size="lg">
            Learn More
          </Button>
          <Button
            className="border border-slate-400/30 bg-transparent text-white hover:bg-white/10"
            size="lg"
            variant="secondary"
          >
            Explore Tracks
          </Button>
          <span className="ml-2 inline-flex items-center gap-2 text-sm text-slate-300">
            <Sparkles className="h-4 w-4 text-[#2f6fed]" />
            New cohort starting soon
          </span>
        </div>
      </div>

      {/* Layered Wave Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="block w-full"
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
