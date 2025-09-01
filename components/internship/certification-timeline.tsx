import { Check } from "lucide-react"

export function CertificationTimeline() {
  const milestones = [
    { title: "Foundations", blurb: "Basics & toolchain" },
    { title: "Design Flow", blurb: "Front-end to back-end" },
    { title: "Verification", blurb: "UVM essentials" },
    { title: "Synthesis", blurb: "RTL to gates" },
    { title: "Timing", blurb: "STA basics" },
    { title: "Signoff", blurb: "Tapeout-ready" },
  ]

  return (
    <section className="mx-auto w-full max-w-7xl px-6 py-12 md:py-16">
      {/* Left aligned heading */}
      <h2 className="mb-12 text-2xl font-semibold text-slate-900">
        Certificatory
      </h2>

      <div className="relative">
        {/* Blue Horizontal Line */}
        <div className="absolute top-3 left-0 h-1 w-full bg-[#2f6fed]" />

        {/* Milestones */}
        <ul className="relative z-10 grid grid-cols-6 gap-4">
          {milestones.map((m, i) => (
            <li key={i} className="flex flex-col items-center text-center">
              {/* Smaller Blue Dot on line */}
              <div className="flex h-3 w-3 items-center justify-center rounded-full bg-[#2f6fed] mt-2" />

              {/* Green Tick Below */}
              <div className="mt-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-white">
                <Check className="h-4 w-4" />
              </div>

              {/* Text Labels */}
              <div className="mt-3 text-md font-semibold text-slate-800">
                {m.title}
              </div>
              <div className="text-xs text-slate-500 max-w-[140px]">
                {m.blurb}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-6 text-center text-xs text-slate-500 max-w-2xl mx-auto">
        Complete the milestones and receive a ChipX certificate recognizing your skills.
      </p>
    </section>
  )
}
