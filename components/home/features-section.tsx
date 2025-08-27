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
    icon: <GraduationCap className="w-10 h-10 text-white" />,
    title: "5000+ Alumni Shining Globally",
    color: "bg-indigo-500",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    title: "Industry Standard EDA Tools",
    color: "bg-teal-600",
  },
  {
    icon: <UserCheck className="w-10 h-10 text-white" />,
    title: "Highly Expert Trainers",
    color: "bg-blue-900",
  },
  {
    icon: <Presentation className="w-10 h-10 text-white" />,
    title: "Superior Training Methodology",
    color: "bg-indigo-500",
  },
  {
    icon: <Play className="w-10 h-10 text-white" />,
    title: "App-Based Courses",
    color: "bg-teal-600",
  },
  {
    icon: <Clock className="w-10 h-10 text-white" />,
    title: "24x7 Online Support & Lab Access",
    color: "bg-blue-900",
  },
  {
    icon: <GraduationCap className="w-10 h-10 text-white" />,
    title: "5000+ Alumni Shining Globally",
    color: "bg-indigo-500",
  },
  {
    icon: <Monitor className="w-10 h-10 text-white" />,
    title: "Industry Standard EDA Tools",
    color: "bg-teal-600",
  },
];

export default function FeaturesSection() {
  return (
    <section className="pt-2 pl-24 pr-24 relative">
      {/* Vertical Line outside on left */}
      <div className="hidden md:block absolute left-60 bottom-0 h-[15%] w-1 bg-gray-300"></div>

      <div className="container flex relative z-10">
        {/* Left Side: Title */}
        <div className="max-w-md flex-shrink-0 flex justify-center items-center pl-10 ">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Sets <br />
            us apart!
          </h2>
        </div>

        {/* Right Side: Swiper */}
        <div className="w-[80%] ml-10">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
            loop={true}
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
          >
            {features.map((feature, index) => (
              <SwiperSlide
                key={index}
                className="flex justify-center items-center"
              >
                <Card className="text-center bg-white shadow-none border-none rounded-lg w-40">
                  <CardContent className="flex flex-col items-center p-4">
                    <div
                      className={`w-14 h-14 flex items-center justify-center rounded-full mb-3 ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <p className="text-sm font-medium">{feature.title}</p>
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
