"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Calendar,
  Briefcase,
  Clock,
  MapPin,
  Building2,
} from "lucide-react";

export default function ProgramInfo() {
  return (
    <section className="grid grid-cols-12 gap-8 max-w-7xl mx-auto pb-20 ">
      {/* Left Section - Program Info */}
      <div className="col-span-4 relative bg-gradient-to-br from-blue-50 to-blue-200 p-10 rounded-2xl -ml-10 flex flex-col justify-between shadow-lg">
        {/* Accent Line */}
        <div className="absolute top-0 left-0 w-2 h-full bg-blue-800 rounded-l-2xl" />

        <div>
          <h2 className="text-4xl font-bold text-gray-900 leading-snug">
            PG Program in
          </h2>
          <h3 className="text-3xl font-light italic text-green-700 mt-2">
            Startup Leadership
          </h3>
        </div>

        <div className="mt-10">
          <p className="text-base text-gray-700 mb-6">
            🚀 Admissions for Cohort of 2026 are now open!
          </p>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold shadow-md transition">
            APPLY NOW →
          </Button>
        </div>
      </div>

      {/* Right Section - Program Details Grid */}
      <div className="col-span-8 grid grid-cols-4 gap-6">
        {/* Duration */}
        <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-600">
            <Clock size={18} className="text-blue-500" />
            Duration
          </div>
          <div className="text-xl font-semibold text-gray-900">12 months</div>
        </Card>

        {/* Work Ex */}
        <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-600">
            <Briefcase size={18} className="text-blue-500" />
            Work Ex
          </div>
          <div className="text-xl font-semibold text-gray-900">0–6 years</div>
        </Card>

        {/* Starting Date */}
        <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-600">
            <Calendar size={18} className="text-blue-500" />
            Starting Date
          </div>
          <div className="text-xl font-semibold text-gray-900">
            August, 2025
          </div>
        </Card>

        {/* Deadline */}
        <Card className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-600">
            <Calendar size={18} className="text-blue-500" />
            Round 3 Deadline
          </div>
          <div className="text-xl font-semibold text-gray-900">
            29th June 2025
          </div>
        </Card>

        {/* Location */}
        <Card className="col-span-2 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-600">
            <MapPin size={18} className="text-blue-500" />
            Location
          </div>
          <div className="text-xl font-semibold text-gray-900">
            WeWork Campus, Bengaluru
          </div>
        </Card>

        {/* Format */}
        <Card className="col-span-2 p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition">
          <div className="flex items-center gap-2 mb-3 text-sm font-medium text-gray-600">
            <Building2 size={18} className="text-blue-500" />
            Format
          </div>
          <div className="text-xl font-semibold text-gray-900">
            Full Time, Residential
          </div>
        </Card>
      </div>
    </section>
  );
}
