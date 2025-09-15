"use client";

export default function StatisticsOverview() {
  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="my-12 sm:ml-0 lg:ml-30">
        <h1 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-2">
          An <span className="text-blue-500 italic font-light">overview</span>
        </h1>
        <div className="w-20 sm:w-24 h-1 bg-blue-400"></div>
      </div>

      {/* Statistics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-0 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-sm mb-16 sm:-ml-0 lg:-ml-60">
        {/* First Row */}
        <div className="p-8 bg-gray-100 hidden lg:block"></div>

        <div className="p-8 border-b sm:border-r border-gray-200 bg-white group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            24+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Learning Modules
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Structured from fundamentals to advanced PD
          </div>
        </div>

        <div className="p-8 border-b sm:border-r border-gray-200 bg-gray-50 group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
             2,000+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Learning Hours
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Classes, labs & project work
          </div>
        </div>

        <div className="p-8 border-b sm:border-r border-gray-200 bg-white group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
             50+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Semiconductor Leaders
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Mentors, speakers & experts
          </div>
        </div>

        <div className="p-8 border-b sm:border-r border-gray-200 bg-gray-50 group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            25+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Workshops & Bootcamps
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Hands-on tools & case studies
          </div>
        </div>

        <div className="p-8 bg-white group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
           4
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Real Chip Projects
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            RTL → GDSII workflows
          </div>
        </div>

        {/* Second Row */}
        <div className="p-8 border-gray-200 border-t bg-gray-100 hidden lg:block"></div>

        <div className="p-8 border-b sm:border-r border-t border-gray-200 bg-white group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
           6-Month
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Intensive Program
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Hybrid & residential learning
          </div>
        </div>

        <div className="p-8 border-b sm:border-r border-t border-gray-200 bg-gray-50 group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
           250+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Hours of Career Prep
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Resume, interviews, soft skills
          </div>
        </div>

        <div className="p-8 border-b sm:border-r border-t border-gray-200 bg-white group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
            15+
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Case Studies
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Solve real-world challenges
          </div>
        </div>

        <div className="p-8 border-b sm:border-r border-t border-gray-200 bg-gray-50 group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
           6
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Immersive Research Projects
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Advanced VLSI explorations
          </div>
        </div>

        <div className="p-8 border-t border-gray-200 bg-white group hover:bg-blue-50 transition-all duration-200 cursor-pointer">
          <div className="text-3xl sm:text-4xl font-light text-gray-800 mb-2 group-hover:text-blue-600">
           4
          </div>
          <div className="text-gray-600 font-medium group-hover:text-blue-600">
            Distinct Specialisations
          </div>
          <div className="text-sm text-gray-500 mt-1 group-hover:text-blue-600">
            Targeted expertise in chip design
          </div>
        </div>
      </div>
    </div>
  );
}
