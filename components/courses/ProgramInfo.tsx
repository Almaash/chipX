"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import { Calendar, Briefcase, Clock, MapPin, Building2 } from "lucide-react";

export default function ProgramInfo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
      {/* Left Section - Program Info */}
      <div className="md:col-span-4 relative bg-gradient-to-br from-blue-50 to-blue-200 p-6 sm:p-8 lg:p-10 rounded-2xl md:-ml-10 flex flex-col justify-between shadow-lg">
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-800 rounded-l-2xl hidden md:block" />

        <div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            PG Program in
          </h2>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-light italic text-green-700 mt-2">
            Semiconductor - Specialization in Physical Design
          </h3>
        </div>

        <div className="mt-6 sm:mt-8 lg:mt-10">
          <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
            🚀 Admissions for Cohort of 2026 are now open!
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold shadow-md transition w-full sm:w-auto">
            APPLY NOW →
          </Button>
        </div>
      </div>

      {/* Right Section - Program Details Grid */}
      <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {
            icon: <Clock size={16} className="text-blue-500" />,
            label: "Duration",
            value: "6 Months",
          },
          {
            icon: <Briefcase size={16} className="text-blue-500" />,
            label: "Eligibility",
            value: "Fresh graduates & engineers with 0–6 years experience",
          },
          {
            icon: <Calendar size={16} className="text-blue-500" />,
            label: "Starting Date",
            value: "April 2026",
          },
          {
            icon: <Calendar size={16} className="text-blue-500" />,
            label: "Application Deadline",
            value: "Round 3 – 23rd March 2026",
          },
          {
            icon: <MapPin size={16} className="text-blue-500" />,
            label: "Location",
            value: "ChipX Campus – WeWork Roshini Tech Hub, Bengaluru, India",
            span: 2,
          },
          {
            icon: <Building2 size={16} className="text-blue-500" />,
            label: "Format",
            value: "Full-Time | Campus + Hybrid Learning",
            span: 2,
          },
        ].map((item, index) => (
          <Card
            key={index}
            className={`${
              item.span ? `sm:col-span-${item.span}` : ""
            } p-4 sm:p-5 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition flex flex-col justify-start min-h-[150px]`}
          >
            <div className="flex items-center gap-2 mb-1 text-xs sm:text-sm font-medium text-gray-600">
              {item.icon}
              {item.label}
            </div>
            <div className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
              {item.value}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
