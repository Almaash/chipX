"use client";
import { Play } from "lucide-react";
import Image from "next/image";

export default function PioneeringSection() {
  return (
    <section className="bg-white min-h-[90vh] md:min-h-screen flex items-center relative px-4 sm:px-6 lg:px-12">
      {/* Vertical line outside the card on left (desktop only) */}
      <div className="hidden md:block absolute left-20 lg:left-60 top-0 h-full w-1 bg-gray-300"></div>

      <div className="container mx-auto relative z-10">
        <div className="rounded-2xl shadow-lg bg-[#F5F7F7] p-6 sm:p-8 md:p-10 m-2 sm:m-4 md:m-12 lg:m-16 xl:m-20">
          {/* Heading */}
          <h1 className="text-4xl md:text-4xl lg:text-3xl xl:text-4xl font-serif text-gray-800 leading-tight md:leading-tight lg:leading-snug xl:leading-tight pb-10">
            Pioneering{" "}
            <em className="text-[#27548A]">Semiconductor</em>{" "}
            <em className="text-[#27548A]">Education</em>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-4 items-center">
            {/* Left Content */}
            <div className="space-y-4 md:space-y-4 lg:space-y-3">
              <p className="text-lg md:text-lg lg:text-base xl:text-lg text-gray-700 leading-relaxed">
                At ChipX, we’re redefining how engineers learn semiconductors.
              </p>
              <p className="text-lg md:text-lg lg:text-base xl:text-lg text-gray-700 leading-relaxed">
                Traditional colleges don’t teach the skills the industry demands — that’s where we step in.
              </p>
              <p className="text-lg md:text-lg lg:text-base xl:text-lg text-gray-700 leading-relaxed">
                Our programs are designed with industry experts and delivered with hands-on projects, labs, and real-world internships. Students don’t just study; they build, design, and solve problems like true chip engineers.
              </p>
              <p className="text-lg md:text-lg lg:text-base xl:text-lg text-gray-700 leading-relaxed">
                Join ChipX to be part of the world’s first dedicated semiconductor school — and launch your career in the most powerful industry of the future.
              </p>
            </div>

            {/* Right Video Section */}
            <div className="relative max-w-full md:max-w-lg lg:max-w-xl mx-auto mt-6 md:mt-0">
              <div className="bg-gray-600 rounded-lg overflow-hidden shadow-lg">
                <video
                  src="/videos/homepagevideo.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto object-cover scale-110 md:scale-110 lg:scale-105 xl:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
