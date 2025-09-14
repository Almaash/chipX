"use client";

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
    icon: <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
    title: "50+ Alumni ",
    // title: "5000+ Alumni Shining Globally",
    color: "bg-indigo-500",
  },
  {
    icon: <Monitor className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
    title: "Industry EDA Tools",
    // title: "Industry Standard EDA Tools",
    color: "bg-teal-600",
  },
  {
    icon: <UserCheck className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
    title: "Highly Expert Trainers",
    color: "bg-blue-900",
  },
  {
    icon: <Presentation className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
    title: " Training Methodology",
    // title: "Superior Training Methodology",
    color: "bg-indigo-500",
  },
  {
    icon: <Play className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
    title: "App-Based Courses",
    color: "bg-teal-600",
  },
  {
    icon: <Clock className="w-4 h-4 sm:w-6 sm:h-6 text-white" />,
    title: "24x7 Online Support",
    // title: "24x7 Online Support & Lab Access",
    color: "bg-blue-900",
  },
];

export default function FeaturesSection() {
  // Duplicate features for continuous loop
  const duplicatedFeatures = [...features, ...features];

  return (
    <section className="pt-6 md:pt-10 px-3 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Vertical Line outside on left (desktop only) */}
      <div className="hidden lg:block absolute left-20 xl:left-60 bottom-0 h-[15%] w-1 bg-gray-300"></div>

      <div className="container flex flex-col lg:flex-row relative z-10">
        {/* Left Side: Title */}
        <div className="w-full lg:max-w-md flex-shrink-0 flex justify-center lg:justify-start items-center mb-6 lg:mb-0 lg:pl-20 text-center lg:text-left">
          <h2 className="text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-snug">
            What Set&apos;s <br className="hidden sm:block" />
            us apart!
          </h2>
        </div>

        {/* Right Side: Continuous Slider */}
        <div className="w-full lg:w-2/3 lg:pl-5 overflow-hidden relative">
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedFeatures.map((feature, index) => (
              <div key={index} className="inline-block px-2 sm:px-3 md:px-4">
                <Card className="text-center bg-white shadow-md border border-gray-200 rounded-lg w-24 sm:w-32 md:w-40 mx-auto">
                  <CardContent className="flex flex-col items-center p-2 sm:p-3 md:p-4">
                    <div
                      className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded-full mb-2 ${feature.color}`}
                    >
                      {feature.icon}
                    </div>
                    <p className="text-[8px] sm:text-[11px] md:text-sm font-medium leading-snug text-gray-800 text-center break-words">
                      {feature.title}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tailwind CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 5s linear infinite;
        }
      `}</style>
    </section>
  );
}
