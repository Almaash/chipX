"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const carouselImages = [
  "/images/infineon.png",
  "/images/hero.jpg",
  "/images/infineon.png",
];

export default function IndustryReadySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Rotate the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#F5F7F7] min-h-screen flex items-center">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 gap-8 items-center mx-20">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-serif text-gray-800 leading-tight">
              And yet, nobody is creating <br />
              <em className="text-green-700">job-ready</em>{" "}
              <em className="text-green-700">semiconductor engineers</em>
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

          {/* Right Carousel Section */}
          <div className="relative w-full max-w-xs mx-auto h-64">
            {carouselImages.map((src, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden">
                  <Image
                    src={src}
                    alt={`Carousel ${index}`}
                    width={500}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
