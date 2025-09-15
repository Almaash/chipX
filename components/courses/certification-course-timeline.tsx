import { Calendar } from "lucide-react"

export function CertificationCourseTimeline() {
  const milestones = [
    { title: "Applications Review Open", blurb: "November 2025" },
    { title: "Round 1 Deadline", blurb: "26th January 2026" },
    { title: "Round 2 Deadline", blurb: "23rd February 2026" },
    { title: "Round 3 Deadline", blurb: "23rd March 2026" },
    { title: "Final Application Close", blurb: "31st March 2026" },
    { title: "Program Kick-off", blurb: "6th April 2026" },
  ]

  return (
    <section className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      {/* Heading */}
      <h2 className="mb-8 sm:mb-12 text-2xl sm:text-3xl font-semibold text-slate-900 text-center sm:text-left">
        ChipX PG Program: <span className="text-[#2f6fed]">Application Journey</span>
      </h2>

      <p className="text-center sm:text-left text-slate-700 mb-10 text-sm sm:text-base">
        🚀 Admissions for <strong>Cohort 1 (2026)</strong> are now open! Apply early to secure your spot in India’s first dedicated PG Program in Semiconductor.
      </p>

      <div className="relative">
        {/* Horizontal Line */}
        <div className="absolute top-3 sm:top-4 left-0 h-1 w-full bg-[#2f6fed]" />

        {/* Milestones */}
        <ul className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-y-8 sm:gap-y-12 gap-x-4 sm:gap-x-6">
          {milestones.map((m, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              {/* Blue Dot */}
              <div className="flex h-3 w-3 sm:h-4 sm:w-4 items-center justify-center rounded-full bg-[#2f6fed] mt-2 sm:mt-3" />

              {/* Calendar Icon */}
              <div className="mt-3 sm:mt-4 flex h-6 w-6 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-blue-100 text-[#2f6fed]">
                <Calendar className="h-3.5 w-3.5 sm:h-5 sm:w-5" />
              </div>

              {/* Labels */}
              <div className="mt-2 sm:mt-3 text-sm sm:text-md font-semibold text-slate-800">
                {m.title}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 max-w-[120px] sm:max-w-[140px]">
                {m.blurb}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 sm:mt-8 text-center text-xs sm:text-sm text-slate-500 max-w-2xl mx-auto">
        👉 Don’t miss the deadlines — limited seats for Cohort 1 (2026).
      </p>
    </section>
  )
}
