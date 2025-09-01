"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselImages = [
  "/images/office1.jpg",
  "/images/office2.jpg",
  "/images/office3.jpg",
  "/images/office.jpg",
];

export default function IndustryReadySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5F7F7] min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-4 md:mx-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl font-serif text-gray-800 leading-tight">
              And yet, nobody is creating <br />
              <em className="text-[#27548A]">job-ready</em>{" "}
              <em className="text-[#27548A]">semiconductor engineers</em>
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed">
              At ChipX, we don’t just train engineers; we create
              <strong> industry-ready semiconductor professionals</strong> who
              power the future of India.
            </p>
            <ul className="space-y-3 text-gray-700 text-lg leading-relaxed list-decimal list-inside">
              <li>No focus on industry-specific tools like Synopsys EDA</li>
              <li>No real exposure to physical design projects</li>
              <li>No personality development for global engineering roles</li>
            </ul>
          </div>

          {/* Right 3D Coverflow Carousel */}
          <div className="relative w-full max-w-2xl mx-auto h-[500px] perspective-1000 overflow-visible">
            {carouselImages.map((src, index) => {
              const offset = index - currentIndex;
              const rotateY = offset * 30; // rotate side images
              const translateX = offset * 100; // more spacing for bigger size
              const scale = offset === 0 ? 1.2 : 0.9; // center image bigger
              const zIndex = -Math.abs(offset) + carouselImages.length;

              return (
                <div
                  key={index}
                  className="absolute top-1/2 left-1/2 w-80 h-64 rounded-lg shadow-xl overflow-hidden transition-all duration-700"
                  style={{
                    transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                    zIndex,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Carousel ${index}`}
                    width={700}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
