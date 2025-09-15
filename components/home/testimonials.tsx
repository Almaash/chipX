"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

interface Testimonial {
  id: number;
  message: string;
  name: string;
  title: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    message:
      "ChipX's courses are incredibly comprehensive and well-structured. As a beginner in semiconductors, I gained valuable insights and practical skills that boosted my confidence. The platform is user-friendly, making learning both engaging and efficient. Highly recommend ChipX to anyone looking to excel in this field!",
    name: "Atif Raza",
    title: "PD Engineer Program 2025",
    image: "/images/testmonial1.jpeg",
  },
  {
    id: 2,
    message:
      "ChipX transformed my understanding of semiconductors with its dynamic online courses. The expert instructors and engaging content made complex topics accessible. I especially appreciated the interactive elements, which kept me motivated throughout. An excellent resource for anyone eager to deepen their industry knowledge!",
    name: "Rajat Chaturvedi",
    title: "PD Engineer Program 2025",
    image: "/images/rajat.jpeg",
  },
];

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-gray-50 py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
            Words From Our Engineers
          </h1>
        </div>

        <div className="relative text-center mb-12 sm:mb-16">
          <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 leading-relaxed relative z-10 px-4 sm:px-8 inline-block">
            <span className="text-4xl sm:text-5xl text-blue-300 font-serif align-top mr-1 sm:mr-2">“</span>
            Trusted by Bengaluru's Best Semiconductor Engineers
            <span className="text-4xl sm:text-5xl text-blue-300 font-serif align-bottom ml-1 sm:ml-2">”</span>
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30} // reduced for smaller screens
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-6 sm:space-y-8">
                  <div className="relative">
                    <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed text-center lg:text-left relative z-10 px-4 sm:px-8">
                      {testimonial.message}
                    </p>
                  </div>

                  {/* Person Info */}
                  <div className="pt-4 text-center lg:text-left pl-8">
                    <h3 className="text-xl sm:text-2xl md:text-2xl font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 font-medium text-sm sm:text-base">{testimonial.title}</p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative mt-8 lg:mt-0 flex justify-center lg:justify-end items-center">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-4 left-4 w-20 h-20 sm:w-32 sm:h-32 bg-blue-100 rounded-full opacity-30"></div>
                  <div className="absolute bottom-4 right-2 w-16 h-16 sm:w-24 sm:h-24 bg-blue-50 rounded-full opacity-40"></div>
                  <div className="absolute top-16 right-8 w-12 h-12 sm:w-16 sm:h-16 bg-blue-200 rounded-full opacity-20"></div>

                  {/* Photo */}
                  <div className="relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-[45%] max-w-lg mx-auto rounded-lg shadow-lg"
                    />
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </main>
  );
}
