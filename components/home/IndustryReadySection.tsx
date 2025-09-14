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
  const [windowWidth, setWindowWidth] = useState(0);
  const [isClient, setIsClient] = useState(false);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // Track window width on client
  useEffect(() => {
    setIsClient(true);
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="bg-[#F5F7F7] py-16 px-4 sm:px-8 lg:px-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-4 lg:space-y-5 text-left px-2 sm:px-4 lg:px-0">
            <h1 className="text-2xl sm:text-3xl lg:text-xl xl:text-3xl font-bold text-gray-900 leading-snug lg:leading-snug">
              And yet, colleges aren’t creating <br />
              <em className="text-[#27548A]">Industry-ready</em>{" "}
              <em className="text-[#27548A]">semiconductor engineers</em>
            </h1>

            <p className="text-sm sm:text-base lg:text-sm xl:text-base text-gray-700 font-semibold leading-relaxed">
              At ChipX, we go beyond theory. We don’t just train engineers — we
              shape <strong>industry-ready semiconductor professionals</strong>{" "}
              who can design, innovate, and lead India’s{" "}
              <strong>$5Bn+ chip opportunity</strong>.
            </p>

            <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-800 font-semibold">
              What’s missing in colleges today:
            </p>

            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-700 leading-relaxed list-decimal list-inside">
              <li>
                No hands-on training from RTL to GDSII with industry-standard
                tools like <strong>Synopsys, Cadence, and Siemens EDA</strong>.
              </li>
              <li>
                No real exposure to chip design projects at{" "}
                <strong>lower technology nodes</strong> that reflect actual
                industry workflows.
              </li>
              <li>
                No focus on{" "}
                <strong>VLSI communication & personality development</strong> for
                global engineering careers.
              </li>
            </ul>

            <p className="text-xs sm:text-sm lg:text-xs xl:text-sm text-gray-700 leading-relaxed max-w-md">
              <strong>ChipX fixes this</strong> — with labs, projects, tools, and
              mentorship that transform fresh graduates into{" "}
              <em className="text-[#27548A] font-semibold">
                job-ready chip engineers
              </em>
              .
            </p>
          </div>

          {/* Right 3D Coverflow Carousel */}
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl mx-auto h-[220px] sm:h-[350px] md:h-[450px] perspective-1000 overflow-visible mt-10 md:mt-0 px-2 sm:px-4 lg:px-0">
            {isClient &&
              carouselImages.map((src, index) => {
                const offset = index - currentIndex;

                const rotateY = offset * (windowWidth < 768 ? 15 : 30);
                const translateX = offset * (windowWidth < 768 ? 50 : 90);
                const scale =
                  offset === 0
                    ? windowWidth < 768
                      ? 1.05
                      : 1.15
                    : windowWidth < 768
                    ? 0.85
                    : 0.9;
                const zIndex = -Math.abs(offset) + carouselImages.length;

                return (
                  <div
                    key={index}
                    className="absolute top-1/2 left-1/2 w-40 sm:w-56 md:w-72 h-28 sm:h-48 md:h-60 rounded-lg shadow-lg overflow-hidden transition-all duration-700"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                      zIndex,
                    }}
                  >
                    <Image
                      src={src}
                      alt={`Carousel ${index}`}
                      width={600}
                      height={400}
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
