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
    name: "Faryad Alam",
    title: "Founder, CEO & Author",
    image: "/images/testimonial.png",
  },
  {
    id: 2,
    message:
      "Maven Silicon has been instrumental in shaping the VLSI industry with top-quality training and research-driven learning processes.",
    name: "Jane Doe",
    title: "Head of Training",
    image: "/images/testimonial.png",
  },
  {
    id: 3,
    message:
      "We believe in empowering engineers with practical knowledge and hands-on project experience, making them industry-ready.",
    name: "John Smith",
    title: "CTO",
    image: "/images/testimonial.png",
  },
];

export default function Testimonials() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-8">
            Words From Our Leaders
          </h1>
        </div>

        <div className="relative text-center mb-16">
          <p className="text-3xl text-gray-700 leading-relaxed relative z-10 px-8 inline-block">
            <span className="text-5xl text-blue-300 font-serif align-top mr-2">
              “
            </span>
           Trusted by Bengaluru's Best Semiconductor Engineers
            <span className="text-5xl text-blue-300 font-serif align-bottom ml-2">
              ”
            </span>
          </p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={40}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Content */}
                <div className="space-y-8">
                  {/* Quote with Decorative Marks */}
                  <div className="relative">
                    <p className="text-xl text-gray-700 leading-relaxed text-center lg:text-left relative z-10 px-8">
                      {testimonial.message}
                    </p>
                  </div>

                  {/* Person Info */}
                  <div className="pt-4 text-center lg:text-left">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 font-medium">
                      {testimonial.title}
                    </p>
                  </div>
                </div>

                {/* Right Image */}
                <div className="relative">
                  {/* Decorative Background Elements */}
                  <div className="absolute top-8 left-8 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
                  <div className="absolute bottom-16 right-4 w-24 h-24 bg-blue-50 rounded-full opacity-40"></div>
                  <div className="absolute top-32 right-16 w-16 h-16 bg-blue-200 rounded-full opacity-20"></div>

                  {/* Photo */}
                  <div className="relative z-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full max-w-md mx-auto rounded-lg shadow-lg"
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
