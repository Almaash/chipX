"use client";

export default function StatisticsOverview() {
  return (
    <div className="max-w-full">
      <div className="my-12 ml-30">
        <h1 className="text-4xl font-semibold text-gray-800 mb-2">
          An <span className="text-blue-500 italic font-light">overview</span>
        </h1>
        <div className="w-24 h-1 bg-blue-400"></div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-6 gap-0 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-16 -ml-60">
        {/* First Row */}
        <div className="p-8 bg-gray-100"></div>

        <div className="p-8 border-r border-gray-200 bg-white hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            7
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Terms
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            7 weeks each
          </div>
        </div>

        <div className="p-8 border-r border-gray-200 bg-gray-50 hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            2000+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Contact Hours
          </div>
        </div>

        <div className="p-8 border-r border-gray-200 bg-white hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            200+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            CXOs and Startups Leaders
          </div>
        </div>

        <div className="p-8 border-r border-gray-200 bg-gray-50 hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            25+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Workshops/ Bootcamps
          </div>
        </div>

        <div className="p-8 bg-white hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            4
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Real Businesses Built
          </div>
        </div>

        {/* Second Row */}
        <div className="p-8 border-gray-200 border-t bg-gray-100"></div>

        <div className="p-8 border-r border-gray-200 border-t bg-white hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            12
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Months
          </div>
        </div>

        <div className="p-8 border-r border-gray-200 border-t bg-gray-50 hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            250+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Hours of career prep
          </div>
        </div>

        <div className="p-8 border-r border-gray-200 border-t bg-white hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            150+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Case Studies
          </div>
        </div>

        <div className="p-8 border-r border-gray-200 border-t bg-gray-50 hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            6
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Immersive Hackathons
          </div>
        </div>

        <div className="p-8 border-gray-200 border-t bg-white hover:bg-blue-50 group cursor-pointer transition-all duration-200">
          <div className="text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            4
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Distinct Specializations
          </div>
        </div>
      </div>
    </div>
  );
}
