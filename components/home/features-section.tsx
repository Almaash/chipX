"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import { Card, CardContent } from "@/components/ui/card";
import {
  GraduationCap,
  Monitor,
  UserCheck,
  Presentation,
  Play,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "5000+ Alumni Shining Globally",
    color: "bg-indigo-500",
  },
  {
    icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Industry Standard EDA Tools",
    color: "bg-teal-600",
  },
  {
    icon: <UserCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Highly Expert Trainers",
    color: "bg-blue-900",
  },
  {
    icon: <Presentation className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Superior Training Methodology",
    color: "bg-indigo-500",
  },
  {
    icon: <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "App-Based Courses",
    color: "bg-teal-600",
  },
  {
    icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "24x7 Online Support & Lab Access",
    color: "bg-blue-900",
  },
  {
    icon: <GraduationCap className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "5000+ Alumni Shining Globally",
    color: "bg-indigo-500",
  },
  {
    icon: <Monitor className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
    title: "Industry Standard EDA Tools",
    color: "bg-teal-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="pt-6 md:pt-10 px-4 sm:px-8 md:px-24 relative">
      {/* Vertical Line outside on left (desktop only) */}
      <div className="hidden md:block absolute left-20 lg:left-60 bottom-0 h-[15%] w-1 bg-gray-300"></div>

      <div className="container flex flex-col md:flex-row relative z-10">
        {/* Left Side: Title */}
        <div className="w-full md:max-w-md flex-shrink-0 flex justify-center md:justify-start items-center mb-6 md:mb-0 md:pl-20 text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-snug ">
            What Set's <br className="hidden sm:block" />
            us apart!
          </h2>
        </div>

        {/* Right Side: Swiper */}
        {/* Right Side: Swiper */}
<div className="w-full md:w-2/3 lg:w-[53%] md:pl-2 lg:pl-5">
  <Swiper
    modules={[Autoplay]}
    autoplay={{ delay: 1800, disableOnInteraction: false }}
    loop={true}
    spaceBetween={8} 
    slidesPerView={1.2}
    breakpoints={{
      480: { slidesPerView: 2, spaceBetween: 12 },
      768: { slidesPerView: 3, spaceBetween: 16 },
      1024: { slidesPerView: 3.2, spaceBetween: 16 }, // laptop
      1280: { slidesPerView: 4, spaceBetween: 24 },
    }}
    style={{ boxSizing: "border-box" }}
  >
    {features.map((feature, index) => (
      <SwiperSlide key={index} className="flex justify-center items-center">
        <Card className="text-center bg-white shadow-md md:shadow-none border border-gray-200 md:border-none rounded-lg w-36 sm:w-40">
          <CardContent className="flex flex-col items-center p-3 sm:p-4">
            <div
              className={`w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-full mb-2 sm:mb-3 ${feature.color}`}
            >
              {feature.icon}
            </div>
            <p className="text-xs sm:text-sm font-medium leading-snug">
              {feature.title}
            </p>
          </CardContent>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>
</div>


      </div>
    </section>
  );
}
