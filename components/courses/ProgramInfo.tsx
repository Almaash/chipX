"use client";

import { Card } from "../ui/card";
import { Button } from "../ui/button";

export default function ProgramInfo() {
  return (
    <div className="grid grid-cols-12 gap-4 max-w-7xl py-16" >
      {/* Left Section - Program Info */}
      <div className="col-span-4 bg-blue-200 p-8 rounded-lg -ml-10 flex flex-col justify-end pl-30">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          PG Program in
        </h2>
        <h3 className="text-3xl font-light italic text-green-700 mb-8">
          Startup Leadership
        </h3>
        <div className="mb-6">
          <p className="text-sm text-gray-700 mb-4">
            Admissions for Cohort of 2026 are open!
          </p>
          <Button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-2 rounded-none font-medium">
            APPLY NOW →
          </Button>
        </div>
      </div>

      {/* Right Section - Program Details Grid */}
      <div className="col-span-8 grid grid-cols-4 gap-4">
        {/* Top Row */}
        <Card className="p-6 bg-gray-200 border-0">
          <div className="text-sm text-gray-600 ">Duration</div>
          <hr className="border-gray-400 " />
          <div className="text-xl font-light text-gray-800">12 months</div>
        </Card>
        <Card className="p-6 bg-gray-200 border-0">
          <div className="text-sm text-gray-600">Work Ex</div>
          <hr className="border-gray-400 " />
          <div className="text-xl font-light text-gray-800">0-6 years</div>
        </Card>
        <Card className="p-6 bg-gray-200 border-0">
          <div className="text-sm text-gray-600 ">Starting Date</div>
          <hr className="border-gray-400 " />
          <div className="text-xl font-light text-gray-800">August, 2025</div>
        </Card>
        <Card className="p-6 bg-gray-200 border-0">
          <div className="text-sm text-gray-600 ">
            Admissions: Round 3 Deadline
          </div>
          <hr className="border-gray-400 " />
          <div className="text-xl font-light text-gray-800">29th June 2025</div>
        </Card>

        {/* Bottom Row */}
        <Card className="col-span-2 p-6 bg-gray-200 border-0">
          <div className="text-sm text-gray-600 ">Location</div>
          <hr className="border-gray-400 " />
          <div className="text-xl font-light text-gray-800">
            WeWork Campus, Bengaluru
          </div>
        </Card>
        <Card className="col-span-2 p-6 bg-gray-200 border-0">
          <div className="text-sm text-gray-600 ">Format</div>
          <hr className="border-gray-400 " />
          <div className="text-xl font-light text-gray-800">
            Full Time, Residential
          </div>
        </Card>
      </div>
    </div>
  );
}
