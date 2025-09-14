"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Users, Rocket, Sparkles } from "lucide-react";

export function HiringHero({ className }: { className?: string }) {
  return (
    <section
      className={cn("relative w-full overflow-hidden bg-blue-100", className)}
      aria-labelledby="hiring-hero-title"
    >
      {/* Decorative background shapes */}
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -left-40 -bottom-56 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-400 opacity-30" />
        <div className="pointer-events-none absolute -left-10 -bottom-28 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-blue-300 opacity-20" />
      </div>
      <div aria-hidden="true">
        <div className="pointer-events-none absolute -right-40 -top-56 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-blue-400 opacity-30" />
        <div className="pointer-events-none absolute -right-10 -top-28 h-48 w-48 sm:h-72 sm:w-72 rounded-full bg-blue-300 opacity-20" />
      </div>

      <div className="mx-auto flex flex-col items-center gap-8 px-6 py-12 md:flex-row md:items-center md:gap-12 max-w-6xl">
        {/* Copy block */}
        <div className="z-[1] max-w-xl text-center md:text-left">
          <h2
            id="hiring-hero-title"
            className="font-bold text-2xl sm:text-3xl md:text-4xl text-blue-950 leading-snug"
          >
            Hire Semiconductor-Ready Talent
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base text-blue-900 leading-relaxed">
            At ChipX, we train engineers who create impact from Day 1. Every graduate is equipped with industry-grade VLSI skills, hands-on project experience, and professional readiness to contribute to your team immediately.
          </p>

          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-base text-blue-900 leading-relaxed">
            🌍 Who We Work With: Semiconductor product design companies, services firms, consultancy organizations, fabless startups, foundries, PSUs, state & central government bodies, R&D labs, automotive & defense electronics firms, and global semiconductor giants.
          </p>

          <div className="mt-4 sm:mt-6 flex flex-col md:flex-row justify-center md:justify-start gap-3">
            <Button className="rounded-full bg-blue-900 px-4 py-2 sm:px-6 sm:py-3 text-white hover:bg-blue-800 flex items-center gap-2 text-sm sm:text-base" size="lg">
              <span>Join Our Hiring Network</span>
              <span aria-hidden="true">→</span>
            </Button>
            <Button className="rounded-full bg-blue-600 px-4 py-2 sm:px-6 sm:py-3 text-white hover:bg-blue-700 flex items-center gap-2 text-sm sm:text-base" size="lg">
              <span>Partner With ChipX</span>
              <span aria-hidden="true">→</span>
            </Button>
          </div>
        </div>

        {/* Decorative banner items */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-1 md:flex md:flex-col md:gap-4 w-full">
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow hover:shadow-md transition justify-center sm:justify-start">
            <Users className="h-15 w-15 text-blue-500" />
            <span className="text-blue-900 font-medium text-xs sm:text-sm">
              Trusted by Industry – 30+ companies and startups already count on ChipX for hiring future-ready talent.
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow hover:shadow-md transition justify-center sm:justify-start">
            <Rocket className="h-15 w-15 text-blue-600" />
            <span className="text-blue-900 font-medium text-xs sm:text-sm">
              Impact from Day One – Engineers trained in Synopsys, Cadence & Siemens EDA tools, projects at 14nm/7nm/4nm nodes, and industry workflows.
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-lg bg-white px-3 py-2 shadow hover:shadow-md transition justify-center sm:justify-start">
            <Sparkles className="h-15 w-15 text-blue-400" />
            <span className="text-blue-900 font-medium text-xs sm:text-sm">
              VLSI-Backed Talent – Candidates vetted through intensive PG Programs, internships, and live projects to ensure global job readiness.
            </span>
          </div>
        </div>

        <p className="mt-4 sm:mt-6 text-blue-900 text-sm sm:text-base md:text-base leading-relaxed">
          Partner with ChipX to access a pipeline of world-class VLSI engineers, ready to innovate and lead the semiconductor revolution.
        </p>
      </div>
    </section>
  );
}
